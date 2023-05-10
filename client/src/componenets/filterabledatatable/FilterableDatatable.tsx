
import React, {useMemo} from 'react';


// const FilterableDatatable = () => {
//     return (
//         <div className="grid grid-cols-6 gap-4 justify-items-center">
//            <div className="bg-gray-100 p-1 text-sm  font-medium  dark-grey">Ad </div>
//            <div className="bg-gray-100 p-1 text-sm font-medium dark-grey">Son Fiyat</div>
//            <div className="bg-gray-100 p-1 text-sm font-medium dark-grey">24 sa Değişim</div>
//            <div className="bg-gray-100 p-1 text-sm  font-medium  dark-grey">Ad </div>
//            <div className="bg-gray-100 p-1 text-sm font-medium dark-grey">Son Fiyat</div>
//            <div className="bg-gray-100 p-1 text-sm font-medium dark-grey">24 sa Değişim</div>
//            {/* grid başlık */}

//            <div className="bg-gray-300 p-1 text-sm">
//            <span className="inline-flex items-baseline">
//               <img src="https://runoyazilimmedya.com/public/site/img/runo_logo3065.png" alt="" className="self-center w-5 h-5 rounded-full mx-1" />
//               <span className="font-medium">BTC</span>
//             </span>
//            </div>
//            <div className="bg-gray-300 p-1 text-sm"> <span className="dark-grey font-medium">USDT</span><span className="font-medium ml-2">6.8798</span></div>
//            <div className="bg-gray-300 p-1 text-sm green font-medium">+0.93%</div>
//            <div className="bg-gray-300 p-1 text-sm">
//            <span className="inline-flex items-baseline">
//               <img src="https://runoyazilimmedya.com/public/site/img/runo_logo3065.png" alt="" className="self-center w-5 h-5 rounded-full mx-1" />
//               <span className="font-medium">BTC</span>
//             </span>
//            </div>
//            <div className="bg-gray-300 p-1 text-sm"> <span className="dark-grey font-medium">USDT</span><span className="font-medium ml-2">6.8798</span></div>
//            <div className="bg-gray-300 p-1 text-sm green font-medium">+0.93%</div>
//            {/* ilk satır liste */}



          
//          </div>
      

//     )
// }



// function FilterableDatatable() {
//     const [data, setData] = useState([]);
//     const [filterText, setFilterText] = useState("");
  
//     useEffect(() => {
//       // ...
//     }, [filterText]);
  
//     return (
//       <table className="table-auto">
//         <thead>
//           <tr>
//             <th className="px-4 py-2">ID</th>
//             <th className="px-4 py-2">customer</th>
//             <th className="px-4 py-2">CustomerEmail</th>
//             <th className="px-4 py-2">deposit</th>
//             <th className="px-4 py-2">date</th>
//             <th className="px-4 py-2">voucherNo</th>
//             <th className="px-4 py-2">status</th>
//             <th className="px-4 py-2">customerNumber</th>
//           </tr>
//         </thead>
//         <tbody>{/* ... */}</tbody>
//       </table>
//     );
//   }



 interface IDataGridProps {
     columns: { Header: string; accessor: string }[];
     data: {
        customerID: number;
        customer: string;
        CustomerEmail: string;
        deposit: string;
        date: string;
        voucherNo: string;
        status: string;
     }[][];
   }
  


function FilterableDatatable() {
    const columns = useMemo(() => [
     {
       Header: "Customer",
       accessor: "customer",
     },
     {
       Header: "Deposit",
       accessor: "deposit",
     },
     {
       Header: "Date",
       accessor: "date",
     },
     {
       Header: "Voucher NO.",
       accessor: "voucherNo",
     },
     {
       Header: "Trans.Status",
       accessor: "status",
     },
     {
        Header: "Trans.Status",
        accessor: "status",
      },
      {
        Header: "Trans.Status",
        accessor: "status",
      },
      {
        Header: "Trans.Status",
        accessor: "status",
      },
      {
        Header: "Trans.Status",
        accessor: "status",
      },
      {
        Header: "Trans.Status",
        accessor: "status",
      },
      {
        Header: "Trans.Status",
        accessor: "status",
      },
      {
        Header: "Trans.Status",
        accessor: "status",
      },
      {
        Header: "Trans.Status",
        accessor: "status",
      },

], []);

 const data = useMemo(() => customersData(), []);

 return (
   <>
     <div>
       {/* <FilterableDatatable columns={columns} data={data} /> */}
     </div>
   </>
 );
 
}
  export default FilterableDatatable


  export const customersData = () => {
    const data = [
    {
      customerID: 1001,
      customer: 'Nirav Joshi',
      CustomerEmail: 'nirav@gmail.com',
     
      deposit: 'NGN 34,600',
      date: 'Jan 6, 2022 09:21',
      voucherNo: '00437E',
      status: 'Successful',
      selected: false,
      customerNumber: "+234 803 0000",
    },
    {
      CustomerID: 1002,
      customer: 'Sunil Joshi',
      deposit: 'NGN 34,600',
      date: 'Jan 6, 2022 09:21',
      voucherNo: '00437E',
      status: 'Successful',
      CustomerEmail: 'sunil@gmail.com',
      Status: 'Active',
      
        customerNumber: "+234 803 0000",
        selected: false,
    },
    {
      CustomerID: 1003,
      customer:'Andrew McDownland',
      deposit: 'NGN 34,600',
      date: 'Jan 6, 2022 09:21',
      voucherNo: '00437E',
      status: 'Failed',
      CustomerEmail: 'andrew@gmail.com',
    
        customerNumber: "+234 803 0000",
    },
    {
      CustomerID: 1004,
      customer:'Christopher Jamil',
      deposit: 'NGN 34,600',
      date: 'Jan 6, 2022 09:21',
      voucherNo: '00437E',
      status: 'Successful',
      CustomerEmail: 'jamil@gmail.com',
     
            customerNumber: "+234 803 0000",
    },
    {
      CustomerID: 1005,
      customer:'Andrew McDownland',
      deposit: 'NGN 34,600',
      date: 'Jan 6, 2022 09:21',
      voucherNo: '00437E',
      status: 'Successful',
      CustomerName: 'Michael',
      customerEmail: 'michael@gmail.com',
  
          customerNumber: "+234 803 0000",
    },
   {
      CustomerID: 1005,
      customer:'Andrew McDownland',
      deposit: 'NGN 34,600',
      date: 'Jan 6, 2022 09:21',
      voucherNo: '00437E',
      status: 'Successful',
      CustomerName: 'Michael',
      customerEmail: 'michael@gmail.com',
 
          customerNumber: "+234 803 0000",
    }
  
  ];
   return [data]
  }