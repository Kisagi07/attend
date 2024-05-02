"use client";
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { FC } from "react";

interface TableProps {
  data: any[];
  columns: any[];
}
const Table: FC<TableProps> = ({ data, columns }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
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
                <th key={header.id} style={{ width: header.getSize() }} className="p-2 text-left">
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
                <td key={cell.id} className="p-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
