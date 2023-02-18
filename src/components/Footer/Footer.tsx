import Image from "next/image";
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from '../../../assets/logo/logo.png'

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4">
      <div className=" mx-auto px-16 ">
        {/* create four column  */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-5 xl:grid-cols-4 ">
          {/* 1st column  */}
          <div className="pr-4 col-span-1 sm:col-span-2 xl:col-span-1">
            
            <Image src={logo} alt="logo" className="w-auto h-16" />
            <p  className="my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex space-x-2 my-3">
                <FaFacebookSquare className="fill-[#CD212A]"/>
                <FaTwitter className="fill-[#CD212A]" />
                <FaInstagram className="fill-[#CD212A]" />
                <FaLinkedin className="fill-[#CD212A]" />
            </div>

          </div>
          {/* 2nd column  */}
          <div className="mt-8 space-y-4">
            <h2 className="my-2 font-semibold">ARE YOU A USER?</h2>
            <ul>
              <li className="my-2">
                <a href="#">About Super Sconto 24</a>
              </li>
              <li className="my-2">
                <a href="#">How it works</a>
              </li>
              <li className="my-2">
                <a href="#">Download app</a>
              </li>
              <li className="my-2">
                <a href="#">Write to us</a>
              </li>
              <li className="my-2">
                <a href="#">Echo</a>
              </li>
            </ul>
          </div>
          {/* 3rd column  */}
          <div className="mt-8 space-y-4">
            <h2 className="my-2 font-semibold">ARE YOU A COMPANY?</h2>
            <ul>
              <li className="my-2">
                <a href="#">Corporate</a>
              </li>
              <li className="my-2">
                <a href="">Who are we</a>
              </li>
              <li className="my-2">
                <a href="">Smart solution</a>
              </li>
              <li className="my-2">
                <a href="">work with us</a>
              </li>
              <li className="my-2">
                <a href="">Commercial inquiries</a>
              </li>
            </ul>
          </div>
          {/* 4th column  */}
          <div className="mt-8 space-y-4">
            <h2 className="my-2 font-semibold">INDEX</h2>
            <ul>
              <li className="my-2">
                <a href="#">Marche</a>
              </li>
              <li className="my-2">
                <a href="">Shops</a>
              </li>
              <li className="my-2">
                <a href="">Categories</a>
              </li>
              <li className="my-2">
                <a href="">Loyality cards</a>
              </li>
              <li className="my-2">
                <a href="">City</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-8 h-px bg-[#000000] border-0"></hr>
        <div>
        Copyrights © 2023 All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
