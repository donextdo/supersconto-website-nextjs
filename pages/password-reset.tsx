import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import Header from '../src/components/Header/Header';

const PasswordReset = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e:any) => {
    setEmail(e.target.value);
  };

  const handleSendMail = () => {
    // Code to send password reset email
    console.log(`Sending password reset email to ${email}`);
  };

  return (
    <div className='flex flex-col items-center py-20'>
        <Header />
        <h1 className='text-4xl mt-10'>Password reset</h1>
        <h4 className='text-lg mt-4'>You will receive intrusctions for the rest your password</h4>
      <input type="email" id="email" value={email} name="email" onChange={handleEmailChange} placeholder="Your email address" className='mt-10 h-10 border-4 w-1/4 rounded-lg placeholder:text-center border-green-700 placeholder-gray-600'/>
      
      <button
                    className="border-4 border-green-700 rounded-lg bg-[#8DC14F] mt-6 w-1/4 h-10 text-white text-center" onClick={handleSendMail}>
                    Send
        </button>
            
    </div>
  );
};

export default PasswordReset;
