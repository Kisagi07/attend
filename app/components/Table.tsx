"use client";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { FC } from "react";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";

interface TableProps {
  data: any[];
  columns: any[];
}
const Table: FC<TableProps> = ({ data, columns }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    defaultColumn: {
      size: 100,
      minSize: 50,
      maxSize: 300,
    },
  });
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full" {...{ style: { minWidth: table.getCenterTotalSize() } }}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="bg-slate-50">
              {headerGroup.headers.map((header) => (
                <th key={header.id} style={{ width: header.getSize() }} className="p-4 text-left">
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="divide-y divdie-slate-200">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-4">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center gap-1">
        <button
          type="button"
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
          className="p-4 disabled:text-gray-400 hover:bg-gray-100"
        >
          <FaCaretLeft />
        </button>
        <span className="p-4">
          {table.getState().pagination.pageIndex + 1} of {table.getPageCount().toLocaleString()}
        </span>
        <button
          type="button"
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
          className="p-4  hover:bg-gray-100 disabled:text-gray-400"
        >
          <FaCaretRight />
        </button>
      </div>
    </div>
  );
};
export default Table;
