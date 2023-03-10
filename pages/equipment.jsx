import React from "react";
import Header from "./components/Header";
import Head from "next/head";
import SectionForm from "./components/SectionForm";
import Footer from "./components/Footer";
import Link from "next/link";
import Image from "next/image";
const equipment = () => {
  return (
    <>
      <Head>
        <title>Оборудование</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="equipmentBg bgSettings">
        <Header />
        <div className="container">
          <div className="bredcrumb mt-12">
            <div className="text-white text-xs uppercase flex items-center">
              <Link href="/">Главная</Link>
              <div className=" mx-2">
                <Image
                  src="/breadcrumb arrow-right.svg"
                  width={12.5}
                  height={8}
                />
              </div>
              <Link href="/about">Оборудование</Link>
            </div>
          </div>
          <h1 className="text-white uppercase title">Оборудование</h1>
        </div>
      </div>

      <SectionForm />
      <Footer />
    </>
  );
};

export default equipment;
