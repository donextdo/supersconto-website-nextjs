
import Header from "../src/components/Header/Header";

import Sidebar from "../src/components/SideBar/Sidebars";

const Account = () => {
    return ( 
        <div>
            
            <Header/>
        
            <div className="h-screen fixed z-50 p-2 text-4xl bg-white   right-2 bottom-2 hover:bg-gray-200 ">
            <Sidebar />
            </div>
        </div>
     );
}
 
export default Account;