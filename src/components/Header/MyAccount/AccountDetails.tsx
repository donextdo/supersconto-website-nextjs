import { useState } from "react";

const AccountDetails = () => {
    const [modal, setModal] = useState(false)

    return ( 
        <div className="lg:border lg:shadow-lg lg:mx-24 sm:mx-7 ">
        <div className="lg:my-10 lg:mx-10 sm:my-5 sm:mx-5">
            <label className="text-sm">First Name *</label>
            <input type="text" className="w-full h-10 mt-2 mb-4 bg-gray-100 rounded-md" />

            <label className="text-sm">Last Name *</label>
            <input type="text" className="w-full h-10 mt-2 mb-4 bg-gray-100 rounded-md" />

            <label className="text-sm">Display Name *</label>
            <input type="text" className="w-full h-10 mt-2 mb-1 bg-gray-100 rounded-md" />

            <h2 className="mb-4 italic text-md">This will be how your name will be displayed in the account section and in reviews</h2>

            <label className="text-sm">Email address *</label>
            <input type="text" className="w-full h-10 mt-2 mb-5 bg-gray-100 rounded-md" />

            <h1 className="mb-5 text-xl fone-smeibold">Password Change</h1>

            <label className="text-sm">Current password (leave blank to leave unchanged)</label>
            <input type="text" className="w-full h-10 mt-2 mb-4 bg-gray-100 rounded-md" />

            <label className="text-sm">New password (leave blank to leave unchanged)</label>
            <input type="text" className="w-full h-10 mt-2 mb-4 bg-gray-100 rounded-md" />

            <label className="text-sm">Confirm new password</label>
            <input type="text" className="w-full h-10 mt-2 mb-4 bg-gray-100 rounded-md" />

            <button className="bg-[#008C45] text-white py-2.5 px-4 mb-4 rounded-md text-sm">Save Changes</button>
        </div>
        </div>
     );
}
 
export default AccountDetails;