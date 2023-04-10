import Header from "../src/components/Header/Header";
import LoginRegisterPage from "../src/components/Header/MyAccount/LoginRegister/LoginRegister";
import MyAccount from "../src/components/Header/MyAccount/MyAccount";

const LoginRegister = () => {
    return ( 
        <div>
            
            <Header/>
            <div className="lg:mt-28 mt-16 ">
            <LoginRegisterPage />
            </div>
        </div>
     );
}
 
export default LoginRegister;