const CheckoutSidebar = ({item}:any) => {
    let discountprice;
    if (typeof item.discount === 'undefined') {
        discountprice = 0;
      } else {
        discountprice = item.unit_price * (item.discount / 100);
      }
  let newprice=item.unit_price-discountprice

 let subtotal = (item.count) * (newprice)


    return (
        <tr>
            <td className=" py-3 text-[13px] w-[50%]">{item.product_name} <span className="font-semibold">× {item.count || 0}</span> </td>
            <td className=" py-3 text-[15px] text-right">${subtotal.toFixed(2)}</td>
        </tr>
    );
}

export default CheckoutSidebar;