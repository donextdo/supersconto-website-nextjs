const MyAccountPopup = ({setSelected, selected, setModal}:any) => {
    const handleClick = (id:any) => {
        setSelected(id); 
        setModal(false)

        // if (id === 1) {
       // } else if (id === 2) {
          
        // } else if (id === 3) {
            
         
        // } else if (id === 4) {
          
        // }
      };
    return (
        // <div className="absolute inset-0 w-full shadow-xl bg-opacity-10 top-10 -left-4">
                <div>
                    <button className={`border-t border-r border-l border-gray-300 w-full py-4 text-left pl-4 text-sm ${selected === 1 ? 'bg-[#008C45] text-white' : 'bg-white text-black'}`} onClick={() => handleClick(1)}>DASHBOARD</button>
                    <button className={`border-t border-r border-l border-gray-300 w-full py-4 text-left pl-4 text-sm ${selected === 2 ? 'bg-[#008C45] text-white' : 'bg-white text-black'}`} onClick={() => handleClick(2)}>ORDERS</button>
                    <button className={`border-t border-r border-l border-gray-300 w-full py-4 text-left pl-4 text-sm ${selected === 3 ? 'bg-[#008C45] text-white' : 'bg-white text-black'}`} onClick={() => handleClick(3)}>ACCOUNT DETAILS</button>
                    <button className={`border border-gray-300 w-full py-4 text-left pl-4 text-sm ${selected === 4 ? 'bg-[#008C45] text-white' : 'bg-white text-black'}`} onClick={() => handleClick(4)}>ADDRESSES</button>
                </div>
        // </div>
    );
}

export default MyAccountPopup;