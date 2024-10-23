import { useEffect, useState } from "react";

import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import americanExpress from "../../assets/img/svg/americanExpress.svg";
import dinersClub from "../../assets/img/svg/dinersClub.svg";
import discover from "../../assets/img/svg/discover.svg";
import master from "../../assets/img/svg/master.svg";
import paypal from "../../assets/img/svg/paypal.svg";
import visa from "../../assets/img/svg/visa.svg";

const Footer = (): JSX.Element => {
  return (
    <footer className="p-10 bg-[#FAF7F0] dark:bg-black flex flex-col justify-center items-center gap-10">
      <a className="text-sm hover:underline" href="https://zero-base.co.kr/">
        제로베이스
      </a>
      <div className="flex gap-2">
        <img src={visa} alt="visa" title="visa" />
        <img src={master} alt="master" title="master" />
        <img src={americanExpress} alt="americanExpress" title="americanExpress" />
        <img src={paypal} alt="paypal" title="paypal" />
        <img src={dinersClub} alt="dinersClub" title="dinersClub" />
        <img src={discover} alt="discover" title="discover" />
      </div>
      <div className="flex gap-5 items-center">
        <a className="text-2xl" href="#">
          <FaFacebookF />
        </a>
        <a className="text-3xl" href="#">
          <FaInstagram />
        </a>
        <a className="text-3xl" href="https://github.com/hyunjihub">
          <FaGithub />
        </a>
      </div>
      <p className="text-sm">Copyright © 2024 Jang Hyun Ji</p>
    </footer>
  );
};

export default Footer;
