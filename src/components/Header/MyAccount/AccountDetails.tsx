import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { http } from "../../../../utils/request";


const AccountDetails = () => {
    const [modal, setModal] = useState(false)
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [displayName, setDisplayName] = useState(email.substring(0, email.lastIndexOf("@")));
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // let id = localStorage.getItem("id");
    const id = useMemo(() => {
        if (typeof localStorage !== 'undefined') {
          return localStorage.getItem('id');
        }
        return null;
      }, []);
    useEffect(() => {
        
        fetchData()
        
       
      }, []);

      async function fetchData() {
        try {
            const res = await http.get(`/users/${id}`); 
           console.log(res.data)
           const data = res.data;
           setFirstName(data.firstName);
           setLastName(data.lastName);
           setDisplayName(data.displayName);
           setEmail(data.email);


        } catch (err) {
            console.log(err);
        }
      }

    const handleSaveChanges = async () => {
 
        const data = {
            firstName: firstName,
            lastName: lastName,
            displayName: displayName,
            email:email,
           
          }
          try {
            const response = await http.patch(`/users/${id}`, data);
            console.log(response.data); // do something with the response data
          } catch (error) {
            console.log(error); // handle the error
          }
    };

    return (
        <div className="mx-80">
            <label className="text-sm">First Name *</label>
            <input
                type="text"
                className="w-full px-4 h-10 bg-gray-100 rounded-md mt-2 mb-4"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />

            <label className="text-sm">Last Name *</label>
            <input
                type="text"
                className="w-full px-4 h-10 bg-gray-100 rounded-md mt-2 mb-4"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />

            <label className="text-sm">Display Name *</label>
            <input
                type="text"
                className="w-full px-4 h-10 bg-gray-100 rounded-md mt-2 mb-1"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
            />

            <h2 className="italic text-md mb-4">
                This will be how your name will be displayed in the account section and
                in reviews
            </h2>

            <label className="text-sm">Email address *</label>
            <input
                type="text"
                className="w-full px-4 h-10 bg-gray-100 rounded-md mt-2 mb-5"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <h1 className="fone-smeibold text-xl mb-5">Password Change</h1>

            <label className="text-sm">
                Current password (leave blank to leave unchanged)
            </label>
            <input
                type="text"
                className="w-full px-4 h-10 bg-gray-100 rounded-md mt-2 mb-4"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
            />

            <label className="text-sm">
                New password (leave blank to leave unchanged)
            </label>
            <input
                type="text"
                className="w-full px-4 h-10 bg-gray-100 rounded-md mt-2 mb-4"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
            />

            <label className="text-sm">Confirm new password</label>
            <input
                type="text"
                className="w-full px-4 h-10 bg-gray-100 rounded-md mt-2 mb-4"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button
                className="bg-[#233a95] text-white py-2.5 px-4 mb-4 rounded-md text-sm"
                onClick={handleSaveChanges}
            >
                Save Changes
            </button>
        </div>
    );
}

export default AccountDetails;