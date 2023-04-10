import Link from "next/link";
import Header from "../src/components/Header/Header";
import AccountDetails from "../src/components/Header/MyAccount/AccountDetails";

const Edit_Account_Details = () => {
    return ( 
        <div>
            
            <Header/>
            <div className="mx-24 mt-32">
            <div className="mb-10 text-right">
             <Link href="/account">
             <button className="bg-[#008C45] px-8 py-2 text-white rounded-lg">Back</button>
             </Link>
            </div>
            <AccountDetails/>
           
            </div>
           
        </div>
     );
}
 
export default Edit_Account_Details;