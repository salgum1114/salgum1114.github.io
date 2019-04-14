import { AxiosError, AxiosResponse } from 'axios';

export interface CSSMapper {
    [key: string]: React.CSSProperties;
};

export type EventType = 'menucollapse'
| 'searchcollapse'
;

export interface IPayload<Payload extends { [K in keyof Payload]?: any } = {}> {
    type: string;
    payload?: Payload;
}

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface INetworkError extends Omit<AxiosError, 'message' | 'name' | 'config'> {
    name?: string;
    message?: string;
    status?: number;
    statusText?: string;
    response?: AxiosResponse;
}

export interface IInitialState {
    error?: INetworkError;
    statusMessage?: string;
}

export interface IRoute {
    path: string;
    title?: string;
    isMenu?: boolean;
    order?: number;
    layout?: 'posts' | 'post';
    routes: IRoute[];
}

export interface StringToMap<T> { [key: string]: T };