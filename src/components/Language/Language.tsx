import { useState } from "react";
import { GrFormClose } from "react-icons/gr";


const Language = ({ setLanguagePopup,handleChangeLanguage }: any) => {
  const [selected, setSelected] = useState(1);
  const [border, setBorder] = useState(null);
  const [currencySelected, setCurrencySelected] = useState(null);


//   const handlesClick = (id:any) => {
//     setSelected(selected === id ? null : id);

//   }

  const handlesSubmit = (id:any) => {
    setBorder(border === id ? null : id);
    handleChangeLanguage('it')
  }
  const handleLanguageClick = (id: any) => {
    setSelected(id);
    setCurrencySelected(null);
  };
  const handleCurrencyClick = (id: any) => {
    setCurrencySelected(id);
    setSelected(0);
  };

    return (
        <div className="fixed inset-0 z-50 bg-slate-900 bg-opacity-0 flex justify-end top-20 right -0 md:right-32 max-h-[600px] h-60 ">
            <div className="py-4 px-4 flex gap-6 flex-col bg-gray-50 shadow-md rounded-2xl w-full md:w-[500px]">
                <button className="rounded-md  text-3xl text-left px-2 py-1"
                    onClick={() => setLanguagePopup(false)}><GrFormClose />
                </button>

                <div className="flex space-x-8 px-4">
                    <button className={`border-b-[3px] py-2  ${selected === 1 ? 'border-black text-black ' : 'text-gray-600'}`} onClick={()=>handleLanguageClick(1)}>Language and Region</button>
                    <button className={`border-b-[3px] py-2  ${currencySelected === 2 ? 'border-black text-black' : 'text-gray-600'}`} onClick={()=>handleCurrencyClick(2)}>Currency</button>
                </div>

                <div className={`mr-28 space-x-4 ${selected !== 1 ? 'hidden ' : ''}`}>
                    
                    <button className={`border-2 rounded-md w-40 h-16 ${border === 1 ? 'border-black text-black ' : 'text-gray-600'}`} onClick={()=>handlesSubmit(1)}>
                        Italiano <br /><span className="text-gray-500">Italia</span></button>
                    <button className={`border-2 rounded-md w-40 h-16 ${border === 2 ? 'border-black text-black ' : 'text-gray-600'}`} onClick={()=>handlesSubmit(2)}>English <br /><span className="text-gray-500">United Kindom</span></button>
                   
                </div>
                <div className={`mr-28 space-x-4 ${currencySelected !== 2  ? 'hidden ' : ''}`}>
                <button className={`border-2 rounded-md w-40 h-16 ${border === 3 ? 'border-black text-black ' : 'text-gray-600'}`} onClick={()=>handlesSubmit(3)}>Euro<br /><span className="text-gray-500">EUR - Є</span></button>
                    <button className={`border-2 rounded-md w-40 h-16 ${border === 4 ? 'border-black text-black ' : 'text-gray-600'}`} onClick={()=>handlesSubmit(4)}>Dollar <br /><span className="text-gray-500">USD - $</span></button>
                </div>
            </div>
        </div>
    );
}

export default Language;