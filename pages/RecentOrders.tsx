import Link from "next/link";
import Header from "../src/components/Header/Header";
import Orders from "../src/components/Header/MyAccount/Orders";

const RecentOrders = () => {
    return ( 
        <div>
            
            <Header/>
            <div className="mx-24 mt-32 text-center ">
            <div className="mb-10 text-right">
             <Link href="/account">
             <button className="bg-[#008C45] px-8 py-2 text-white rounded-lg">Back</button>
             </Link>
            </div>
            <Orders/>
           
            </div>
           
        </div>
     );
}
 
export default RecentOrders;