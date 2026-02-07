export interface ITableColumn<T> {
    key: keyof T;
    title: string | React.ReactElement;
    align?: "left" | "center" | "right";
    render?: (column: ITableColumn<T>, row: T) => React.ReactElement;
}