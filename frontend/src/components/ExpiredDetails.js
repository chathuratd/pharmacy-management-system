
const ExpiredDetials = ({expire})=>{
      return (
         <div className="overflow-x-auto">
           <table className="coupon-table w-full bg-dark-blue-2 text-white border-collapse">
             <thead className="coupon-table-thead bg-dark-blue text-white">
               <tr className="coupon-table-tr">
                 <th className="coupon-table-th border border-gray-300 px-4 py-2">Discount</th>
                 <th className="coupon-table-th border border-gray-300 px-4 py-2">Expire Date</th>
                 <th className="coupon-table-th border border-gray-300 px-4 py-2">Coupon Code</th>
                 <th className="coupon-table-th border border-gray-300 px-4 py-2">Status</th>
                 <th className="border border-gray-300 px-4 py-2"></th>
               </tr>
             </thead>
             <tbody>
               {expire.map((expire) => (
                 <tr className="coupon-table-tr hover:bg-blue-button" key={expire._id}>
                   <td className="coupon-table-th border border-gray-300 px-4 py-2">{expire.drugName}%</td>
                   <td className="coupon-table-th border border-gray-300 px-4 py-2">{expire.batchNumber}</td>
                   <td className="coupon-table-th border border-gray-300 px-4 py-2">{expire.manufactureDate}</td>        
                   <td className="coupon-table-th border border-gray-300 px-4 py-2">{expire.expireDate}</td>
                   <td className="coupon-table-th border border-gray-300 px-4 py-2">{expire.quantity}</td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
      );
     };
     

    export default ExpiredDetials