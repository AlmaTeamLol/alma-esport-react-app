import * as React from "react";

import {
  Paper,
  Table as MuiTable,
  TableContainer,
  TablePagination,
} from "@mui/material";

import TableHead from "./TableHead";
import TableBody from "./TableBody";

import type { ITableColumn } from "./Table.types";

/* Table */
interface ITableProps<T> {
  columns: Array<ITableColumn<T>>;
  data?: T[];
}

export default function Table<T>({ columns, data }: ITableProps<T>) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <MuiTable stickyHeader aria-label="sticky table">
          <TableHead columns={columns} />
          <TableBody
            columns={columns}
            data={data}
            page={page}
            rowsPerPage={rowsPerPage}
          />
        </MuiTable>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data?.length ?? 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
