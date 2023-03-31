import Link from "next/link";

const Orders = () => {
    return ( 
        <div className="p-4 border border-gray-200 ">
            <p className="leading-loose"><Link href="/" className="p-2 text-white bg-[#008C45] rounded-md">Browse Products</Link> No Order has been made yet.</p>
        </div>
     );
}
 
export default Orders;