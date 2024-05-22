import React from "react";
import { GrLinkNext } from "react-icons/gr";
import Logo from "../../public/Logo.png";

const Footer = () => {
  return (
    <div className=" bg-black flex">
      <div className=" ml-[104px] border-l-2 border-b-2 border-gray-300 opacity-65">
        <div className="ms-8 pt-12">
          <h1 className=" text-white text-xl font-normal">
            Subscribe to our newsletter for industry <br /> insights and company
            news!
          </h1>
          <div className=" flex items-center mt-4">
            <input
              type="email"
              placeholder="Email adress*"
              className=" outline-none bg-transparent placeholder: text-gray-500 opacity-65"
            />
            <GrLinkNext className=" text-white ml-44" />
          </div>{" "}
          <hr className="my-4 mb-8 bg-gray-300 h-[1.5px] w-[375px] opacity-65" />
        </div>
        <input type="checkbox" className="ms-8 " />
        <p className=" text-white ms-14 text-sm -mt-7 mb-40">
          I agree to the Privacy Policy and give my permission to process my{" "}
          <br /> personal data for the purposes specified in the Privacy Policy
        </p>
        <hr className="my-4 bg-gray-300 h-[1.5px] opacity-65" />
        <img src={Logo} alt="" className="m-12 mt-52" />
      </div>
      <div className="  border-l-2 border-b-2 border-gray-300 opacity-65">
        <div>
          <ul className=" text-gray-300 opacity-65">About</ul>
          <ul className=" text-white">
            <li>Company</li>
            <li>Portifolio</li>
            <li>Partnerships</li>
            <li>Newsroom</li>
            <li>Media Kit</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
          <img src="" alt="" />
        </div>
        <div>
          <ul>Delivery Models</ul>
          <ul>
            <li>Dedicated development teams</li>
            <li>Project-based delivery</li>
          </ul>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
