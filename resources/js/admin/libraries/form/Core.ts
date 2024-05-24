export type Method = 'get' | 'post' | 'put' | 'patch' | 'delete';
import {AxiosProgressEvent} from "axios";

export type Progress = AxiosProgressEvent;
export type FormDataConvertible = Array<FormDataConvertible> | {
    [key: string]: FormDataConvertible;
} | Blob | FormDataEntryValue | Date | boolean | number | null | undefined;
