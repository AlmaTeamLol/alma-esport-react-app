import {
  TableHead as MuiTableHead,
  TableRow as MuiTableRow,
  TableCell as MuiTableCell,
} from "@mui/material";

import type { ITableColumn } from "./Table.types";

/* Table Head */
interface ITableHeadProps<T> {
  columns: Array<ITableColumn<T>>;
}

export default function TableHead<T>({ columns }: ITableHeadProps<T>) {
  return (
    <MuiTableHead>
      <MuiTableRow>
        {columns.map((column, index) => {
          return (
            <MuiTableCell
              key={`header-cell-${index}`}
              align={column.align ?? "center"}
            >
              {column.title}
            </MuiTableCell>
          );
        })}
      </MuiTableRow>
    </MuiTableHead>
  );
}
