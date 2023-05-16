import { SlMenu } from 'react-icons/sl';
import { useState } from 'react'
import MyAccountPopup from './MyAccountPopup';
import Dashboard from './Dashboard';
import Orders from './Orders';
import Address from './Address';
import AccountDetails from './AccountDetails';

const MyAccount = () => {
    const [modal, setModal] = useState(false)
    const [selected, setSelected] = useState(1);
    const [isColor, setIsColor] = useState(1);
    

    const handlePopup = () => {
        setModal(!modal)
    }

    const handleChange = (id:any) => {
        setIsColor(id); 
    }

    const handleOrderClick = () => {
        setIsColor(2); // Switch to Order tab
      };

      const handleAccountDetailsClick = () => {
        setIsColor(3); // Switch to Order tab
      };

      const handleAddressClick = () => {
        setIsColor(4); // Switch to Order tab
      };

    return (
        <div className='container mx-auto mb-36'>
            <div className='px-3 lg:hidden'>
                <div className='flex items-center px-2 py-4 mt-2 space-x-4 bg-gray-100 border border-gray-200 shadow-sm rounded-t-md'>
                    <button onClick={handlePopup}>
                        <SlMenu className='text-lg' />
                    </button>
                    <h3>Navigation</h3>
                </div>
                {
                    modal && (
                        <div><MyAccountPopup selected={selected} setSelected={setSelected} setModal={setModal} setIsColor={setIsColor} isColor={isColor}/></div>
                    )
                }

                <div className='mt-8'>
                    {selected === 1 ?
                        <Dashboard onButtonClick={handleOrderClick} handleAccountDetailsClick={handleAccountDetailsClick} handleAddressClick={handleAddressClick}/>
                        :
                        selected === 2 ?
                            <Orders /> :
                            selected === 3 ?
                                <Address /> :
                                <AccountDetails />
                    }
                </div>
            </div>

            <section className='hidden mx-3 lg:block'>
            <div className='flex justify-center space-x-8 text-gray-400 '>
                    <button className={`px-4 py-3 border-b-2  ${isColor === 1 ? 'border-green-700' : 'border-white'}`}
                        onClick={() => handleChange(1)}>DASHBOARD</button>
                    <button className={`px-4 py-3 border-b-2  ${isColor === 2 ? 'border-green-700' : 'border-white'}`}
                        onClick={() => handleChange(2)}>ORDERS</button>
                    <button className={`px-4 py-3 border-b-2  ${isColor === 3 ? 'border-green-700' : 'border-white'}`}
                        onClick={() => handleChange(3)}>ADDRESSES</button>
                    <button className={`px-4 py-3 border-b-2  ${isColor === 4 ? 'border-green-700' : 'border-white'}`}
                        onClick={() => handleChange(4)}>ACCOUNT DETAILS</button>
            </div>
            <hr />

            <div className='mt-8'>
                    {isColor === 1 ?
                        <Dashboard onButtonClick={handleOrderClick} handleAccountDetailsClick={handleAccountDetailsClick} handleAddressClick={handleAddressClick}/>
                        :
                        isColor === 2 ?
                            <Orders /> :
                            isColor === 3 ?
                                <Address /> :
                                <AccountDetails />
                    }
                </div>
            </section>
        </div>
    );
}

export default MyAccount;