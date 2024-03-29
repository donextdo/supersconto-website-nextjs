import Image from "next/image";
import product from '../../../assets/product/product.jpg'
import { IoClose } from "react-icons/io5"; 
import { useDispatch } from "react-redux";
import { removeItem } from "../cartSlice";





const CartPopupCard = ({ item }: any) => {
    const dispatch = useDispatch()

    const handleRemove = (_id:any) => {
        dispatch(removeItem(_id))
    }
    
    let discountprice;
    if (typeof item.discount === 'undefined') {
        discountprice = 0;
      } else {
        discountprice = item.unit_price * (item.discount / 100);
      }
  let newprice=item.unit_price-discountprice
  console.log(item.discount)
    return (
        <div className=" grid grid-cols-3 w-[258px] mb-4 pt-2 relative">
            <div className="text-left h-20  border-b border-[#e3e4e6] ">
                <Image
                    src={item.product_image}
                    alt="product"
                    style={{ objectFit: "contain", backgroundColor: "white", width: "100%", height: "100%" }}
                    width={450}
                    height={400}
                />
            </div>
            <div className="col-span-2 text-left py-2 h-20 border-b border-[#e3e4e6]">
                <p className="text-xs ">{item.product_name}</p>
                <p className="text-xs mt-2">{item.count || 0} × <span className="text-[#008C45]"> {newprice.toFixed(2)}</span></p>
            </div>
            <button className="absolute bg-[#008C45] rounded-full p-0.5 text-white left-4 top-4" onClick={() =>handleRemove(item._id)}><IoClose className="text-white text-xs" /></button>
        </div>
    );
}

export default CartPopupCard;