import React from "react";

type TableProps = {
  children: React.ReactNode;
};

export const Table = ({ children }: TableProps) => {
  return (
    <table>
      <tbody>{children}</tbody>
    </table>
  );
};

type TableRowProps = {
  heading: string;
  value: string | number;
};

export const TableRow = ({ heading, value }: TableRowProps) => {
  return (
    <tr>
      <th>{heading}</th>
      <td>{value}</td>
    </tr>
  );
};
