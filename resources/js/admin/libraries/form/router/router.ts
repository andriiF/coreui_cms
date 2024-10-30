import {default as Axios, AxiosResponse} from 'axios'

const isServer = typeof window === 'undefined'
import {hasFiles} from './files'
import {objectToFormData} from './formData'
import {hrefToUrl, mergeDataIntoQueryString, urlWithoutHash} from './urls'

import {
    PendingVisit,
    RequestPayload,
    VisitOptions,
} from './types'

export default class Router {
    public visit(
        href: string | URL,
        {
            method = 'get',
            data = {},
            replace = false,
            preserveScroll = false,
            preserveState = false,
            only = [],
            except = [],
            headers = {},
            errorBag = '',
            forceFormData = false,
            onCancelToken = () => {
            },
            onBefore = () => {
            },
            onStart = () => {
            },
            onProgress = () => {
            },
            onFinish = () => {
            },
            onCancel = () => {
            },
            onSuccess = () => {
            },
            onError = () => {
            },
            queryStringArrayFormat = 'brackets',
        }: VisitOptions = {},
    ): void {
        let url = typeof href === 'string' ? hrefToUrl(href) : href

        if ((hasFiles(data) || forceFormData) && !(data instanceof FormData)) {
            data = objectToFormData(data)
        }

        if (!(data instanceof FormData)) {
            const [_href, _data] = mergeDataIntoQueryString(method, url, data, queryStringArrayFormat)
            url = hrefToUrl(_href)
            data = _data
        }

        const visit: PendingVisit = {
            url,
            method,
            data,
            replace,
            preserveScroll,
            preserveState,
            only,
            except,
            headers,
            errorBag,
            forceFormData,
            queryStringArrayFormat,
            cancelled: false,
            completed: false,
            interrupted: false,
        }

        if (onBefore(visit) === false) {
            return
        }
        onStart(visit)

        Axios({
            method,
            url: urlWithoutHash(url).href,
            data: method === 'get' ? {} : data,
            params: method === 'get' ? data : {},
            headers: {
                ...headers,
                Accept: 'text/html, application/xhtml+xml',
                'X-Requested-With': 'XMLHttpRequest',
            },
            onUploadProgress: (progress) => {
                progress.percentage = progress.progress ? Math.round(progress.progress * 100) : 0
                onProgress(progress)
            },
        })
            .then((response) => {
                onSuccess(response)
            })
            .then(() => {

            })
            .catch((error) => {
                onError(error)
            })
            .then(() => {

            })
            .catch((error) => {
                onError(error)
            })
            .finally(()=>{
                onFinish();
            })
    }


    public get(url: URL | string, data: RequestPayload = {}, options: Omit<VisitOptions, 'method' | 'data'> = {}): void {
        return this.visit(url, {...options, method: 'get', data})
    }

    public post(url: URL | string, data: RequestPayload = {}, options: Omit<VisitOptions, 'method' | 'data'> = {}): void {
        return this.visit(url, {preserveState: true, ...options, method: 'post', data})
    }

    public put(url: URL | string, data: RequestPayload = {}, options: Omit<VisitOptions, 'method' | 'data'> = {}): void {
        return this.visit(url, {preserveState: true, ...options, method: 'put', data})
    }

    public patch(
        url: URL | string,
        data: RequestPayload = {},
        options: Omit<VisitOptions, 'method' | 'data'> = {},
    ): void {
        return this.visit(url, {preserveState: true, ...options, method: 'patch', data})
    }

    public static delete(url: URL | string, options: Omit<VisitOptions, 'method'> = {}): void {
    }

    public static remember(data: unknown, key = 'default'): void {
    }

    public static restore(key = 'default'): unknown {
        if (isServer) {
            return
        }

        return window.history.state?.rememberedState?.[key]
    }
}
