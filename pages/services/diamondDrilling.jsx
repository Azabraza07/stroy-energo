import React from "react";
import Header from "../components/Header";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import MyButton from "../UI/MyButton";

const diamonDrilling = () => {
  return (
    <>
      <Head>
        <title>Услуги</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="servicesBgDiamond bgSettings">
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
              <Link href="/">Услуги</Link>
              <div className=" mx-2">
                <Image
                  src="/breadcrumb arrow-right.svg"
                  width={12.5}
                  height={8}
                />
              </div>

              <Link href="/services/acceptance">
                Профессиональное алмазное бурение
              </Link>
            </div>
          </div>
          <h1 className="text-white uppercase title  max-w-xl mt-9 mb-7">
            Профессиональное алмазное бурение
          </h1>

          <div className="flex items-center text-white mb-5">
            <div className=" w-2  h-5 bg-red mr-7"></div>
            <div>Скорость бурения - до 7см./мин., установка оборудования - не более 15мин.</div>
          </div>

          <div className="flex items-center text-white mb-5">
            <div className=" w-2  h-5 bg-red mr-7"></div>
            <div>Сверление, которое препятствует образованию пыли</div>
          </div>

          <div className="flex items-center text-white  mb-12">
            <div className=" w-2  h-5 bg-red mr-7"></div>
            <div>Бесшумное сверление без разрушительной вибрации</div>
          </div>

          <MyButton>Получить консультацию</MyButton>
        </div>
      </div>

      <section className="benefits py-40">
        <div className="container">
          <div className="flex justify-between">
            <h1 className="sectionTitle mb-14 max-w-2xl">
              Преимущества сотрудничества с нашей компанией
            </h1>
            <p className="text-textColor ">
              Отличительная черта работы нашей компании – безупречное качество,
              которое проходит многоступенчатый контроль.
            </p>
          </div>

          <div className="flex justify-between items-center mb-16">
            <div className="item w-2/4">
              <div className="flex">
                <span className="text-red font-bold text-xl mr-2">01</span>
                <p>/</p>
                <h3 className="text-titleColor font-bold text-xl ml-2 ">
                  12+ лет – стаж работы
                </h3>
              </div>
              <p className="text-textColor font-medium">
                Наш инженер-строитель - имеет 2 строительных <br /> образования,
                квалификацию технического надзора
              </p>
            </div>

            <div className="item w-2/4">
              <div className="flex">
                <span className="text-red font-bold text-xl mr-2">02</span>
                <p>/</p>
                <h3 className="text-titleColor font-bold text-xl ml-2 ">
                  Помощь на любом этапе
                </h3>
              </div>
              <p className="text-textColor font-medium">
                Принимаем активное участие во всех процессах, <br /> включая
                юридическую поддержку и представление ваших интересов в суде
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center mb-16">
            <div className="item w-2/4">
              <div className="flex">
                <span className="text-red font-bold text-xl mr-2">03</span>
                <p>/</p>
                <h3 className="text-titleColor font-bold text-xl ml-2 ">
                  Точный замер площади
                </h3>
              </div>
              <p className="text-textColor font-medium">
                Производим замер площади обследуемого <br /> объекта высокоточным
                оборудованием
              </p>
            </div>

            <div className="item w-2/4">
              <div className="flex">
                <span className="text-red font-bold text-xl mr-2">04</span>
                <p>/</p>
                <h3 className="text-titleColor font-bold text-xl ml-2 ">
                  Высокая репутация
                </h3>
              </div>
              <p className="text-textColor font-medium">
                Имеем множество положительных отзывов <br /> клиентов, насыщенное
                портфолио и ресурсы для решения неординарных задач
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default diamonDrilling;