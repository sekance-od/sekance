import React from 'react'
import { useState } from "react";



const ProfileBody = (
//     data = [
//     { id: 1, column1: "a", column2: "b", column3: "c" },
//     { id: 2, column1: "a1", column2: "b1", column3: "c1" },
//     { id: 3, column1: "a2", column2: "b2", column3: "c2" },
//     { id: 4, column1: "a3", column2: "b3", column3: "c3" },
//   ]
  ) => {

    // const [selectedRows, setSelectedRows] = useState([]);

    //   const handleSelectRow = (event, id) => {
    //    if (event.target.checked) {
    //       setSelectedRows((prev) => [prev, id]);
    //      } else {
    //     setSelectedRows((prev) => prev.filter((rowId) => rowId !== id));
    //     }
    //    };
   
    //    const handleDeleteRows = () => {
    //     const filteredData = data.filter((row) => !selectedRows.includes(row.id));
    //     setData(filteredData);
    //     setSelectedRows([]);
    //   };

      return (
        <div className="overflow-x-auto">
          {/* <table className="table-auto w-full">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      setSelectedRows(
                        e.target.checked ? data.map((row) => row.id) : []
                      )
                    }
                    checked={selectedRows.length === data.length}
                  />
                </th>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Column 3</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id}>
                  <td>
                    <input
                      type="checkbox"
                      onChange={(e) => handleSelectRow(e, row.id)}
                      checked={selectedRows.includes(row.id)}
                    />
                  </td>
                  <td>{row.column1}</td>
                  <td>{row.column2}</td>
                  <td>{row.column3}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {selectedRows.length > 0 && (
            <button onClick={handleDeleteRows}>Delete selected rows</button>
          )} */}
        </div>
     
       
    );


}
export default ProfileBody

