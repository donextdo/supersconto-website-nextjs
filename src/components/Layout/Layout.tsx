import Footer from "../Footer/Footer";

const Layout = ({children}) => {
    return ( 
        <div className="space-y-10">
        {children}
        <Footer />
        </div>
     );
}
 
export default Layout;