import {useReordersContext} from '../hooks/useReorderContext'

// date fns
// import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const ReorderDetials = ({reorder})=>{
     const {dispatch} = useReordersContext()
     const handleClick = async()=>{
        const response = await fetch('/api/reorder/'+ reorder._id, { 
             method:'DELETE'
         })
         const json = await response.json() //converting the response to json so now all the information is in json
        
          dispatch({type: 'DELETE_REORDER', payload: json }) //dispatching the action to delete the workout  
     }

      const handleUpdate = async()=>{
          const response = await fetch('/api/reorder/'+ reorder._id, { 
              method:'PUT'
          })
          const json = await response.json() //converting the response to json so now all the information is in json
          
            dispatch({type: 'UPDATE_REORDER', payload: json }) //dispatching the action to delete the workout  
      }

//     return (
//    <div className="overflow-x-auto" style={{ marginBottom: '20px' }}>
            
// <table>
//   <tr>
//     <th className="coupon-table-th border border-gray-300 px-4 py-2"><strong>Supplier Email</strong></th>
//     <td className="coupon-table-th border border-gray-300 px-4 py-2">{reorder.supplierEmail}</td>
//   </tr>
//   <tr>
//     <th className="coupon-table-th border border-gray-300 px-4 py-2"><strong>Batch Number</strong></th>
//     <td className="coupon-table-th border border-gray-300 px-4 py-2">{reorder.batchNumber}</td>
//   </tr>
//   <tr>
//     <th className="coupon-table-th border border-gray-300 px-4 py-2"><strong>Reorder Level</strong></th>
//     <td className="coupon-table-th border border-gray-300 px-4 py-2">{reorder.reorderLevel}
//     <button className="btn bg-login1 hover:bg-login2 hover:text-white mr-2 px-4 py-1 rounded-lg font-jakarta font-semibold cursor-pointer hover:transition-all" onClick ={handleClick}> Delete</button>
//     <button className="btn bg-login1 hover:bg-login2 hover:text-white mr-2 px-4 py-1 rounded-lg font-jakarta font-semibold cursor-pointer hover:transition-all" onClick={handleUpdate}>Update</button>
//     </td>
//   </tr>
//   <tr>
//   <th className="coupon-table-th border border-gray-300 px-4 py-2"><strong>Quantity</strong></th>
//     <td className="coupon-table-th border border-gray-300 px-4 py-2">{reorder.quantity}</td>
//   </tr>
//   <tr>
//     <th className="coupon-table-th border border-gray-300 px-4 py-2"><strong>Created At</strong></th>
//     <td className="coupon-table-th border border-gray-300 px-4 py-2">{reorder.createdAt}
//     <p>{formatDistanceToNow(new Date(reorder.createdAt), {addSuffix : true})}</p> </td>
//   </tr>
// </table>
//    </div>
//     );

    return (
      <div className="overflow-x-auto" style={{ marginBottom: '20px' }}>
        <table className="coupon-table w-full bg-dark-blue-2 text-black border-collapse">
          <thead className="coupon-table-thead bg-dark-blue text-black">
            <tr className="coupon-table-tr">
              <th className="coupon-table-th border border-gray-300 px-4 py-2">Supplier Email</th>
              <th className="coupon-table-th border border-gray-300 px-4 py-2">Batch Number</th>
              <th className="coupon-table-th border border-gray-300 px-4 py-2">Quantity</th>
              <th className="coupon-table-th border border-gray-300 px-4 py-2">Reorder Level</th>
              <th className="border border-gray-300 px-4 py-2"></th>
             
            </tr>
          </thead>
          <tbody>
            {reorder.map((reorder) => (
              <tr>
                <td className="coupon-table-th border border-gray-300 px-4 py-2">{reorder.supplierEmail}</td>
                <td className="coupon-table-th border border-gray-300 px-4 py-2">{reorder.batchNumber}</td>
                <td className="coupon-table-th border border-gray-300 px-4 py-2">{reorder.quantity}</td>        
                <td className="coupon-table-th border border-gray-300 px-4 py-2">{reorder.reorderLevel}</td>
                <td className="border border-gray-300 px-4 py-2">
                 <button className="btn bg-login1 hover:bg-login2 hover:text-white mr-2 px-4 py-1 rounded-lg font-jakarta font-semibold cursor-pointer hover:transition-all" onClick ={handleClick}>Delete</button>
                 <button className="btn bg-signup1 hover:bg-signup2 hover:text-white mr-2 px-4 py-1 rounded-lg font-jakarta font-semibold cursor-pointer hover:transition-all" onClick={handleUpdate}>Edit</button>
               </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
   );

}

export default ReorderDetials