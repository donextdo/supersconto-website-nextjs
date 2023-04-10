import Link from "next/link";
import Header from "../src/components/Header/Header";
import Address from "../src/components/Header/MyAccount/Address";


const Ship_Bill_Address = () => {
    return ( 
        <div>
            
            <Header/>
            <div className="mx-24 mt-24">
             <div className="mb-10 text-right">
             <Link href="/account">
             <button className="bg-[#008C45] px-8 py-2 text-white rounded-lg">Back</button>
             </Link>
             </div>
             <div>
             <Address/>
             </div>
           
            </div>
           
        </div>
     );
}
 
export default Ship_Bill_Address;