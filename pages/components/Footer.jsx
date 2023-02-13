import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
     <footer className="footer bg-footerBgColor">
        <div className="container">
          <div className="flex justify-between items-center py-14">
            <Link href="/">
              <Image src="/logo.svg" alt="logo img" width={178} height={98} />
            </Link>
            <div className="text-white">
              <div>
                <Link href="/">Главная</Link>
              </div>
              <div>
                <Link href="/about">О компании</Link>
              </div>
              <div>
                <Link href="/equipment">Оборудование</Link>
              </div>
              <div>
                <Link href="/">Услуги</Link>
              </div>
              <div>
                <Link href="/contact">Контакты</Link>
              </div>
            </div>

            <div className="text-white w-52">
              <div>
                <a className="" href="tel:+7 (4012) 92-22-15">
                  {" "}
                  +7 (4012) 92-22-15
                </a>
              </div>
              <div>
                <a href="tel:+7 (4012) 92-22-15">+7 (4012) 92-22-15</a>
              </div>
              <div>
                <a href="mailto:office@stroyeproekt.kz">
                  office@stroyeproekt.kz
                </a>
              </div>
              <p>ул. Есильская, 9, Астана 010000, Казахстан</p>
            </div>

            <div className="text-white w-60">
              <div>
                <Link href="/">Политика конфиденциальности</Link>
              </div>
              <div>
                <Link href="/">
                  Соглашение на обработку персональных данных
                </Link>
              </div>
            </div>
          </div>

          <div className=" border-b-2 border-titleColor mb-10"></div>

          <div className="flex relative">
            <div className=" mr-5">
              <Image src="/main/facebook.svg" width={31} height={31} />
            </div>
            <div className=" mr-5">
              <Image src="/main/whatsapp.svg" width={31} height={31} />
            </div>
            <div className=" mr-5">
              <Image src="/main/telegram.svg" width={31} height={31} />
            </div>

            <p className="absolute right-0 text-textColor">
              2022 © Стройэнергопроект. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
  )
}

export default Footer