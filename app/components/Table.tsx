"use client";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { FC, useEffect, useState } from "react";
import { Pagination } from "@nextui-org/pagination";
import { Input } from "@nextui-org/input";
import { FaSearch } from "react-icons/fa";

interface TableProps {
  data: any[];
  columns: any[];
}
const Table: FC<TableProps> = ({ data, columns }) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const [totalPage, setTotalPage] = useState(1);

  const [globalFilter, setGlobalFilter] = useState("");
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      pagination,
      globalFilter,
    },
    defaultColumn: {
      size: 100,
      minSize: 50,
      maxSize: 300,
    },
    onPaginationChange: setPagination,
    onGlobalFilterChange: setGlobalFilter,
  });

  useEffect(() => {
    setTotalPage(Math.max(data.length / pagination.pageSize, 1));
  }, [data, pagination.pageSize]);

  return (
    <div className="space-y-4">
      <Input
        placeholder="Search..."
        isClearable
        value={globalFilter}
        onValueChange={setGlobalFilter}
        className="w-60"
        startContent={<FaSearch />}
      />
      <div className="w-full overflow-x-auto">
        <table className="w-full" {...{ style: { minWidth: table.getCenterTotalSize() } }}>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="bg-slate-50">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    style={{ width: header.getSize() }}
                    className="p-2 text-sm lg:text-base"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divdie-slate-200 divide-y">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center">
        <Pagination
          total={totalPage}
          page={pagination.pageIndex + 1}
          onChange={(page) => setPagination((prev) => ({ ...prev, pageIndex: page - 1 }))}
          variant="flat"
          color="primary"
        />
      </div>
    </div>
  );
};
export default Table;
