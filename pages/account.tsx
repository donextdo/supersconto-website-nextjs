import Header from "../src/components/Header/Header";
import MyAccount from "../src/components/Header/MyAccount/MyAccount";

const Account = () => {
    return ( 
        <div>
            
            <Header/>
            <div className="mt-24">
            <MyAccount />
            </div>
        </div>
     );
}
 
export default Account;