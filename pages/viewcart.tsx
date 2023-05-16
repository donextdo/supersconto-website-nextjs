import Header from "../src/components/Header/Header";
import Cart from "../src/features/cart/main-cart/Cart";

const ViewCart = () => {
    return ( 
        <div>
            <Header/>
            <Cart image={""} title={""} subtotal={0} />
        </div>
     );
}
 
export default ViewCart;