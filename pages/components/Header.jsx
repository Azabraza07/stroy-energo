import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [openSelect, setOpenSelect] = useState(false);

  return (
    <header className="relative">
      <div className="container">
        <div className="flex justify-between pt-7 relative">
          <Link href="/">
            <Image src="/logo.svg" alt="logo img" width={178} height={98} />
          </Link>

          <nav className="flex justify-end absolute right-0 bottom-5 transition-all">
            <ul className=" flex text text-white items-end justify-end hover: ">
              <li className=" mr-11  hover:border-b-2 border-red">
                <Link href="/">Главная</Link>
              </li>
              <li className="mr-11  hover:border-b-2 border-red ">
                <Link href="/about">О компании</Link>
                <div className=""></div>
              </li>
              <li className="mr-11 hover:border-b-2 border-red">
                <Link href="/equipment">Оборудование</Link>
              </li>
              <li onClick={() => setOpenSelect(!openSelect)} className="mr-11 hover:border-b-2 border-red">
                <Link href="">Услуги</Link>
              </li>
              <li className="hover:border-b-2 border-red">
                <Link href="/contact">Контакты</Link>
              </li>
            </ul>
          </nav>

          <div>
            <a className=" mr-11 text" href="tel:+7 (4012) 92-22-15">
              +7 (4012) 92-22-15
            </a>
            <select
              className=" bg-transparent border-none outline-none w-20 h-8 text-white "
              id="countries"
            >
              <option className=" bg-titleColor  p-2" selected>
                Ru
              </option>
              <option className="bg-titleColor" value="En">
                En
              </option>
              <option className="bg-titleColor" value="Kz">
                Kz
              </option>
            </select>
          </div>
        </div>
        {openSelect && (
          <div className="text-white bg-formColor w-80 absolute  right-72  z-10 ">
            <div className="">
              <div className="hover:bg-red px-3  py-3 transition-all">
                <Link href="/services/acceptance">Приемка квартир и домов у застройщика</Link>
              </div>
              <div className="hover:bg-red  px-3  py-3 transition-all">
                <Link href="/services/diamondDrilling">Профессиональное алмазное бурение</Link>
              </div>
              <div className="hover:bg-red  px-3  py-3 transition-all">
                <Link href="/services/serviceArchitect">Архитектурное проектирование</Link>
              </div>
              <div className="hover:bg-red  px-3  py-3 transition-all">
                <Link href="/services/measurment">Технический замер помещений </Link>
              </div>
              <div className="hover:bg-red  px-3  py-3 transition-all">
                <Link href="/services/finishWork">Ремонтно-отделочные работы</Link>
              </div>
            </div>
          </div>
        )}

       
      </div>
    </header>
  );
};

export default Header;
