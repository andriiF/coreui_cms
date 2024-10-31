import {Progress, FormDataConvertible, Method} from './Core';
import Router from './router/router';
import {reactive, watch} from "vue";
import cloneDeep from 'lodash.clonedeep'
import isEqual from 'lodash.isequal'
import {useStore} from "vuex";

type FormDataType = object;

interface SimpleFormProps<TForm extends FormDataType> {
    isDirty: boolean;
    errors: Partial<Record<keyof TForm, string>>;
    hasErrors: boolean;
    processing: boolean;
    progress: Progress | null;
    wasSuccessful: boolean;
    recentlySuccessful: boolean;

    data(): TForm;

    transform(callback: (data: TForm) => object): this;

    defaults(): this;

    defaults(field: keyof TForm, value: FormDataConvertible): this;

    defaults(fields: Partial<TForm>): this;

    reset(...fields: (keyof TForm)[]): this;

    clearErrors(...fields: (keyof TForm)[]): this;

    setError(field: keyof TForm, value: string): this;

    setError(errors: Record<keyof TForm, string>): this;

    submit(method: Method, url: string): void;

    get(url: string): void;

    post(url: string): void;

    put(url: string): void;

    patch(url: string): void;

    delete(url: string): void;

    cancel(): void;
}

export type SimpleForm<TForm extends FormDataType> = TForm & SimpleFormProps<TForm>;

export function easyForm<TForm extends FormDataType>(data: TForm | (() => TForm)): SimpleForm<TForm>;

export default function easyForm<TForm extends FormDataType>(
    rememberKey: string,
    data: TForm | (() => TForm),
): SimpleForm<TForm>

export function easyForm<TForm extends FormDataType>(
    rememberKeyOrData: string | TForm | (() => TForm),
    maybeData?: TForm | (() => TForm),
): SimpleForm<TForm> {
    const rememberKey = typeof rememberKeyOrData === 'string' ? rememberKeyOrData : null
    const data = typeof rememberKeyOrData === 'string' ? maybeData : rememberKeyOrData
    const restored = rememberKey
        ? (Router.restore(rememberKey) as { data: TForm; errors: Record<keyof TForm, string> })
        : null
    let defaults = typeof data === 'object' ? cloneDeep(data) : cloneDeep(data())
    let cancelToken = null
    let recentlySuccessfulTimeoutId = null
    let transform = (data) => data

    const form = reactive({
        ...(restored ? restored.data : cloneDeep(defaults)),
        isDirty: false,
        errors: restored ? restored.errors : {},
        hasErrors: false,
        processing: false,
        progress: null,
        wasSuccessful: false,
        recentlySuccessful: false,
        data() {
            return (Object.keys(defaults) as Array<keyof TForm>).reduce((carry, key) => {
                carry[key] = this[key]
                return carry
            }, {} as Partial<TForm>) as TForm
        },
        transform(callback) {
            transform = callback

            return this
        },
        defaults(fieldOrFields?: keyof TForm | Partial<TForm>, maybeValue?: FormDataConvertible) {
            if (typeof data === 'function') {
                throw new Error('You cannot call `defaults()` when using a function to define your form data.')
            }

            if (typeof fieldOrFields === 'undefined') {
                defaults = this.data()
            } else {
                defaults = Object.assign(
                    {},
                    cloneDeep(defaults),
                    typeof fieldOrFields === 'string' ? {[fieldOrFields]: maybeValue} : fieldOrFields,
                )
            }

            return this
        },
        reset(...fields) {
            const resolvedData = typeof data === 'object' ? cloneDeep(defaults) : cloneDeep(data())
            const clonedData = cloneDeep(resolvedData)
            if (fields.length === 0) {
                defaults = clonedData
                Object.assign(this, resolvedData)
            } else {
                Object.keys(resolvedData)
                    .filter((key) => fields.includes(key))
                    .forEach((key) => {
                        defaults[key] = clonedData[key]
                        this[key] = resolvedData[key]
                    })
            }

            return this
        },
        setError(fieldOrFields: keyof TForm | Record<keyof TForm, string>, maybeValue?: string) {
            Object.assign(this.errors, typeof fieldOrFields === 'string' ? {[fieldOrFields]: maybeValue} : fieldOrFields)

            this.hasErrors = Object.keys(this.errors).length > 0

            return this
        },
        clearErrors(...fields) {
            this.errors = Object.keys(this.errors).reduce(
                (carry, field) => ({
                    ...carry,
                    ...(fields.length > 0 && !fields.includes(field) ? {[field]: this.errors[field]} : {}),
                }),
                {},
            )

            this.hasErrors = Object.keys(this.errors).length > 0

            return this
        },
        submit(method, url, options: any = {}) {
            this.clearProgress();
            this.startProgress();
            const data = transform(this.data())
            const _options = {
                onCancelToken: (token) => {
                    cancelToken = token
                },
                onBefore: (visit) => {
                    this.wasSuccessful = false
                    this.recentlySuccessful = false
                    clearTimeout(recentlySuccessfulTimeoutId)
                },
                onStart: (visit) => {
                    this.processing = true
                },
                onProgress: (event) => {
                    this.setProgress(event.percentage);
                    this.progress = event
                },
                onSuccess: async (response) => {
                    this.processing = false
                    this.progress = null
                    this.clearErrors()
                    this.wasSuccessful = true
                    this.recentlySuccessful = true
                    recentlySuccessfulTimeoutId = setTimeout(() => (this.recentlySuccessful = false), 2000)
                    defaults = cloneDeep(this.data())
                    this.isDirty = false
                    options.onSuccess(response);
                    this.onAlert('success', 'Success !!');
                },
                onError: (errors) => {
                    this.processing = false
                    this.progress = null
                    this.clearErrors().setError(errors.response.data.errors)
                    this.onAlert('danger', 'Ups coś poszło nie tak');
                },
                onCancel: () => {
                    this.processing = false
                    this.progress = null
                },
                onFinish: () => {
                    this.processing = false
                    this.progress = null
                    cancelToken = null
                    setTimeout(() => (this.clearProgress()), 2000)
                },
            }

            const r = new Router();
            r[method](url, data, _options)
        },
        get(url, options) {
            this.submit('get', url, options)
        },
        post(url, options) {
            this.submit('post', url, options)
        },
        put(url, options) {
            this.submit('put', url, options)
        },
        patch(url, options) {
            this.submit('patch', url, options)
        },
        delete(url, options) {
            this.submit('delete', url, options)
        },
        cancel() {
            if (cancelToken) {
                cancelToken.cancel()
            }
        },
        __rememberable: rememberKey === null,
        __remember() {
            return {data: this.data(), errors: this.errors}
        },
        __restore(restored) {
            Object.assign(this, restored.data)
            this.setError(restored.errors)
        },
        startProgress() {
            document.getElementById("progress-load-bar").style.opacity = '1';
        },
        clearProgress() {
            document.getElementById("progress-load-bar").style.opacity = '0';
            document.getElementById("form-progress").style.width = '0%';
        },
        setProgress(value) {
            document.getElementById("form-progress").style.width = value + '%';
        },
        onAlert(type: string, message: string) {
            let alert = document.getElementById("alert-box");
            alert.className = 'alert alert-' + type;
            alert.innerHTML = message
            alert.style.display = '';
            setTimeout(() => (alert.style.display = 'none'), 2000)
        }
    })

    watch(
        form,
        (newValue) => {
            form.isDirty = !isEqual(form.data(), defaults)
            if (rememberKey) {
                Router.remember(cloneDeep(newValue.__remember()), rememberKey)
            }
        },
        {immediate: true, deep: true},
    )
    return form
}
