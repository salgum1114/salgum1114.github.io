export interface ITag {
    paths?: string[];
    total?: number;
}

export interface ITags {
    [key: string]: ITag;
}