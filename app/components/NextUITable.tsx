"use client";
import React, { FC, Key, ReactNode } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/table";
import { Pagination } from "@nextui-org/pagination";
import { useAsyncList } from "@react-stately/data";
import { Input } from "@nextui-org/input";

interface NextUITableProps {
  data: any[];
  columns: NextUITableColumns[];
  renderCell: (item: any, columnKey: Key) => string | Date | React.JSX.Element | number;
  hasSelection?: boolean;
  onRowAction?: (key: Key) => void;
}

interface NextUITableColumns {
  key: string;
  label: string;
}

const NextUITable: FC<NextUITableProps> = ({
  data,
  columns,
  renderCell,
  hasSelection = false,
  onRowAction,
}) => {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 10;
  const pages = Math.ceil(data.length / rowsPerPage);

  let list = useAsyncList({
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a: any, b: any) => {
          let first = a[sortDescriptor.column as string];
          let second = b[sortDescriptor.column as string];
          let cmp = (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1;

          if (sortDescriptor.direction === "descending") {
            cmp *= -1;
          }

          return cmp;
        }),
      };
    },
    async load({ signal }) {
      return {
        items: data,
      };
    },
  });

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return (list.items as any[]).slice(start, end);
  }, [page, list.items]);

  React.useEffect(() => {
    list.reload();
  }, [data]);
  return (
    <Table
      selectionMode={hasSelection ? "single" : "none"}
      onRowAction={onRowAction}
      sortDescriptor={list.sortDescriptor}
      selectionBehavior="replace"
      onSortChange={list.sort}
      classNames={{
        th: "min-w-[150px]",
        base: "overflow-x-auto overflow-y-hidden",
        wrapper: "shadow-none px-0",
      }}
      aria-label="Example static collection table"
      bottomContent={
        <div className="flex justify-center w-full">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn allowsSorting key={column.key}>
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.id}>
            {(column) => <TableCell>{renderCell?.(item, column) as ReactNode}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default NextUITable;
