import React from "react";

const Table = ({ columnDefs, rowData }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            {columnDefs.map((item, i) => (
              <th
                key={i}
                className="px-4 py-2 border-b bg-blue-100 text-left text-sm font-medium text-gray-600"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowData.map((row, i) => (
            <tr key={i}>
              {Object.values(row).map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-4 py-2 border-b text-sm text-gray-800"
                >
                  {cell}
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
