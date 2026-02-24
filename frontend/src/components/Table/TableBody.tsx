import { TableBody as MuiTableBody } from "@mui/material";

import type { ITableColumn } from "./Table.types";

import TableRow from "./TableRow";

/* Table Body */
interface ITableBodyProps<T> {
  columns: Array<ITableColumn<T>>;
  data?: T[];
  page: number;
  rowsPerPage: number;
}

export default function TableBody<T>({
  columns,
  data,
  page,
  rowsPerPage,
}: ITableBodyProps<T>) {
  const rows =
    data?.slice(
      page * rowsPerPage,
      rowsPerPage > data?.length
        ? data?.length
        : page * rowsPerPage + rowsPerPage,
    ) ?? [];

  return (
    <MuiTableBody>
      {rows.map((row, index) => {
        return <TableRow columns={columns} row={row} index={index} />;
      })}
    </MuiTableBody>
  );
}
