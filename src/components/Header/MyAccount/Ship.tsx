const Ship = () => {
    return ( 
        <div className="lg:border lg:shadow-lg lg:mx-24 sm:mx-7">
        <div className="lg:my-10 lg:mx-10 sm:my-5 sm:mx-5">
                    <h2 className="mb-2 font-semibold">SHIPPING ADDRESS</h2>
                    <hr className="mb-4"/>


            <label className="text-sm">First Name *</label>
            <input type="text" className="w-full h-10 mt-2 mb-4 bg-gray-100 rounded-md" />

            <label className="text-sm">Last Name *</label>
            <input type="text" className="w-full h-10 mt-2 mb-4 bg-gray-100 rounded-md" />

            <label className="text-sm">Company Name (optional)</label>
            <input type="text" className="w-full h-10 mt-2 mb-4 bg-gray-100 rounded-md" />

            <label className="text-sm">Country / Region *</label>
            <input type="text" className="w-full h-10 mt-2 mb-4 bg-gray-100 rounded-md" />

            <label className="text-sm">Street address *</label>
            <input type="text" className="w-full h-10 px-2 mt-2 mb-2 bg-gray-100 rounded-md" placeholder="House number and street name"/>
            <input type="text" className="w-full h-10 px-2 mt-2 mb-4 bg-gray-100 rounded-md" placeholder="Apartment, suite, unite, etc. (optional)"/>


             <label className="text-sm">Town / City *</label>
            <input type="text" className="w-full h-10 mt-2 mb-4 bg-gray-100 rounded-md" />

             <label className="text-sm">State *</label>
            <input type="text" className="w-full h-10 mt-2 mb-4 bg-gray-100 rounded-md" />

             <label className="text-sm">Zip Code *</label>
            <input type="text" className="w-full h-10 mt-2 mb-4 bg-gray-100 rounded-md" /> 

            <label className="text-sm">Phone *</label>
            <input type="text" className="w-full h-10 mt-2 mb-4 bg-gray-100 rounded-md" /> 

            <label className="text-sm">Email address *</label>
            <input type="text" className="w-full h-10 mt-2 mb-4 bg-gray-100 rounded-md" /> 

            <button className="bg-[#008C45] text-white py-2.5 px-4 mb-4 rounded-md text-sm">Save Changes</button>

        </div>
        </div>
     );
}
 
export default Ship;