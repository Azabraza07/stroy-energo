import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import SectionForm from "./components/SectionForm";
import Footer from "./components/Footer";
import { spealists } from "./api/hello";
const about = () => {
  const [show, setShow] = useState(false);
  function closeWindow(e) {
    setShow(!show);
  e.stopPropagation()
  e.preventDefault()
  }
  const constraintsRef = useRef(null);

  return (
    <>
      <Head>
        <title>О компании</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="section aboutHeaderBg bgSettings">
        <motion.div ref={constraintsRef} className="drag-box">
          <motion.div
            drag
            dragConstraints={constraintsRef}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ x: 0, opacity: 0 }}
            className="inline"
          >
            <Header />
          </motion.div>
        </motion.div>

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
              <Link href="/about">О компании</Link>
            </div>
          </div>
          <h1 className="text-white uppercase title">О компании</h1>
        </div>
      </div>

      <section className="company__text aboutBg py-36">
        <div className="container">
          <div className="flex text-textColor  ">
            <div className=" mr-10  max-w-xl">
              Компания основана в 2009 году и осуществляет все виды отделочных
              работ как для коммерческих объектов, так и для объектов социально
              значимого плана. Отличительная черта работы нашей компании –
              безупречное качество, которое проходит многоступенчатый контроль.
              Для клиентов из других регионов, не имеющих возможность лично
              контролировать процесс работ, наша компания, имея большой опыт
              работы с удаленными клиентами, обеспечит вам возможность
              дистанционно влиять на ход и результат работ. Компания основана в
              2009 году и осуществляет все виды отделочных работ как для
              коммерческих объектов, так и для объектов социально значимого
              плана.
            </div>
            <div>
              Для клиентов из других регионов, не имеющих возможность лично
              контролировать процесс работ, наша компания, имея большой опыт
              работы с удаленными клиентами, обеспечит вам возможность
              дистанционно влиять на ход и результат работ.Компания основана в
              2009 году и осуществляет все виды отделочных работ как для
              коммерческих объектов, так и для объектов социально значимого
              плана. Отличительная черта работы нашей компании – безупречное
              качество, которое проходит многоступенчатый контроль.
            </div>
          </div>
        </div>
      </section>

      <section className="info bg-formColor">
        <div className="container">
          <div className="flex justify-between items-center py-24">
            <div className=" relative  w-64">
              <div className="flex text-5xl text-white font-bold">
                <div>13</div>
                <span className="text-red mb-4 ml-2">+</span>
              </div>
              <div className=" absolute left-0 w-2 h-5 bg-red pr-2"></div>
              <p className="text-white ml-4">
                лет на рынке эксклюзивной отделки
              </p>
            </div>

            <div className=" relative w-52">
              <div className="flex text-5xl text-white font-bold ">
                <div>727</div>
                <span className="text-red mb-4 ml-2">+</span>
              </div>
              <div className=" absolute left-0 w-2 h-5 bg-red pr-2"></div>
              <p className="text-white ml-4">законченных объектов</p>
            </div>

            <div className="relative w-52">
              <div className="flex text-5xl text-white font-bold">
                <div>70</div>
                <span className="text-red mb-4 ml-2">+</span>
              </div>
              <div className=" absolute left-0 w-2 h-5 bg-red pr-2"></div>

              <p className="text-white ml-4">объектов по дизайн-проектам</p>
            </div>

            <div className=" relative w-54">
              <div className="flex text-5xl text-white font-bold">
                <div>130</div>
                <span className="text-red mb-4 ml-2">+</span>
              </div>

              <div className=" absolute left-0 w-2 h-5 bg-red pr-2"></div>

              <p className="text-white ml-4">
                объектов <br /> по рекомендации клиентов
              </p>
            </div>
          </div>
        </div>
      </section>

      {spealists.map((item) => (
        <div className="py-36">
          <div className="container">
            <div className="flex justify-between">
              <div className=" w-72  mr-16">
                <h1 className="sectionTitle mb-11">{item.title}</h1>
                <div className="border-2 border-red"></div>
                <p className="text-textColor mt-11">{item.text}</p>
              </div>

              <div className="flex flex-wrap items-center">
                <div className="mr-16 text-center">
                  <Image src="/about/spealist.png" width={215} height={215} />
                  <div className=" text-xl text-titleColor font-bold mt-6 ">
                    {item.oneSpecialist.title}
                  </div>
                  <div className="text-textColor  mb-11">
                    {item.oneSpecialist.text}
                  </div>
                </div>

                <div className="mr-16 text-center">
                  <Image src="/about/spealist.png" width={215} height={215} />
                  <div className=" text-xl text-titleColor font-bold mt-6 ">
                    {item.oneSpecialist.title}
                  </div>
                  <div className="text-textColor  mb-11">
                    {item.oneSpecialist.text}
                  </div>
                </div>
                <div className="mr-16 text-center">
                  <Image src="/about/spealist.png" width={215} height={215} />
                  <div className=" text-xl text-titleColor font-bold mt-6 ">
                    {item.oneSpecialist.title}
                  </div>
                  <div className="text-textColor  mb-11">
                    {item.oneSpecialist.text}
                  </div>
                </div>
                <div className="mr-16 text-center">
                  <Image src="/about/spealist.png" width={215} height={215} />
                  <div className=" text-xl text-titleColor font-bold mt-6 ">
                    {item.oneSpecialist.title}
                  </div>
                  <div className="text-textColor  mb-11">
                    {item.oneSpecialist.text}
                  </div>
                </div>
                <div className="mr-16 text-center">
                  <Image src="/about/spealist.png" width={215} height={215} />
                  <div className=" text-xl text-titleColor font-bold mt-6 ">
                    {item.oneSpecialist.title}
                  </div>
                  <div className="text-textColor  mb-11">
                    {item.oneSpecialist.text}
                  </div>
                </div>
                <div>
                  <Image src="/about/spealist.png" width={215} height={215} />
                  <div className=" text-xl text-titleColor font-bold mt-6 ">
                    {item.oneSpecialist.title}
                  </div>
                  <div className="text-textColor  mb-11">
                    {item.oneSpecialist.text}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

        <div>Отзывы  </div>

      <section className="diplom bg-formColor py-32">
        <div className="container">
          <div
            className="flex flex-wrap relative"
            onClick={(e) => setShow(true)}
          >
            <div className=" py-6 px-8 bg-white mr-8 mb-7 cursor-pointer hover:scale-110 transition-all">
              <Image src="/diplom.png" width={215} height={295} />
            </div>
            <div className="py-6 px-8 bg-white mr-8 mb-7 cursor-pointer hover:scale-110 transition-all ">
              <Image src="/diplom.png" width={215} height={295} />
            </div>
            <div className=" py-6 px-8 bg-white mr-8 mb-7 cursor-pointer diplom__item hover:scale-110 transition-all">
              <Image src="/diplom.png" width={215} height={295} />
            </div>
            <div className=" py-6 px-8 bg-white mr-8 mb-7 cursor-pointer diplom__item hover:scale-110 transition-all">
              <Image src="/diplom.png" width={215} height={295} />
            </div>
            <div className=" py-6 px-8 bg-white mr-8 mb-7 cursor-pointer diplom__item hover:scale-110 transition-all">
              <Image src="/diplom.png" width={215} height={295} />
            </div>
            <div className=" py-6 px-8 bg-white mr-8 mb-7 cursor-pointer diplom__item hover:scale-110 transition-all">
              <Image src="/diplom.png" width={215} height={295} />
            </div>
            <div className=" w-56 ml-8 absolute top-0 right-0">
              <h2 className="text-white  text-4xl font-bold mb-10">
                Дипломы и сертификаты
              </h2>
              <div className="border-2 border-red  max-w-2xl  mb-11"></div>
              <p className="text-white">
                Отличительная черта работы нашей компании – безупречное
                качество, которое проходит многоступенчатый контроль.
              </p>
            </div>
          </div>
        </div>
        {show && (
          <div className="overlay fixed left-0 top-0  w-full h-full bg-black bg-opacity-80 transition all 0.5s ease-in-out">
            <div className="flex justify-center items-center  relative top-11">
              <div className=" py-6 px-8 bg-white mr-8 mb-7 cursor-pointer diplom__item relative  right-8">
                <Image src="/diplom.png" width={430} height={590} />
                <div
                  onClick={closeWindow}
                  className=" w-10 h-10 bg-white rounded-3xl cursor-pointer absolute -right-14 -top-8 "
                >
                  <Image src="/back.svg" width={50} height={50} />
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      <SectionForm />
      <Footer />
    </>
  );
};

export default about;
