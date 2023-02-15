import Footer from "../Footer/Footer";
import React, {ReactNode} from "react";

type Props = {
    children: ReactNode;
}

const Layout : React.FC<Props> = ({children}) => {
    return ( 
        <div className="space-y-10">
        {children}
        <Footer />
        </div>
     );
}
 
export default Layout;