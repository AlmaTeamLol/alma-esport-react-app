import {
  TableRow as MuiTableRow,
  TableCell as MuiTableCell,
} from "@mui/material";

import type { ITableColumn } from "./Table.types";

/* Table Row */
interface ITableRowProps<T> {
  columns: Array<ITableColumn<T>>;
  row: T;
  index: number;
}

export default function TableRow<T>({
  columns,
  row,
  index,
}: ITableRowProps<T>) {
  return (
    <MuiTableRow hover role="checkbox" tabIndex={-1} key={`row-${index}`}>
      {columns.map((column, columnIndex) => {
        const value = column.render
          ? column.render(column, row as T)
          : (row[column.key as keyof typeof row] as string);
        return (
          <MuiTableCell key={`cell-${columnIndex}`} align={column.align}>
            {value}
          </MuiTableCell>
        );
      })}
    </MuiTableRow>
  );
}
