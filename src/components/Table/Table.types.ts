export interface ITableColumn {
    id: string;
    label: string;
    minWidth?: number;
    align?: 'center';
    format?: (value: number) => string;
}

export interface ITableRow {
    [key: string]: string | number | boolean;
    id: number;
}