import React from "react";
import Image from "next/image";
import MyButton from "../UI/MyButton";

const SectionForm = () => {
  return (
    <section className="question  pt-40 bg-formBgColor">
      <div className="container">
        <div className="flex">
          <div className=" max-w-xl mr-24">
            <h2 className="sectionTitle mb-4">Есть вопросы?</h2>
            <p className="text-titleColor mb-11">
              Свяжитесь с нами прямо сейчас и наши менеджеры ответят <br /> вам
              как можно быстрее!
            </p>
            <form action="">
              <input
                className="w-full text-textColor mb-5 pb-5 border-b-2 border-titleColor bg-transparent"
                type="text"
                name="name"
                id="name"
                placeholder="Ваше имя"
              />
              <input
                className="w-full text-textColor mb-5 pb-5 border-b-2 border-titleColor bg-transparent"
                type="tel"
                name="tel"
                id="tel"
                placeholder="Телефон"
              />
              <input
                className=" w-full text-titleColor cursor-pointer mb-5 pb-5 border-b-2 border-titleColor bg-transparent"
                placeholder="Что вас интерсует?"
              />

              <MyButton>Отправить</MyButton>
            </form>
          </div>
          <div className="bg-formColor w-full pt-32  pl-24 text-white h  ">
            <div className=" mb-5">
              <a href="tel:+7 (4012) 92-22-15">+7 (4012) 92-22-15</a>
            </div>
            <div className="mb-5">
              <a href="tel:+7 (4012) 92-22-15">+7 (4012) 92-22-15</a>
            </div>
            <div className="mb-5">
              <a href="mailto:office@stroyeproekt.kz">office@stroyeproekt.kz</a>
            </div>
            <p>ул. Есильская, 9, Астана 010000, Казахстан</p>

            <div className=" border-b-2 border-red mt-16"></div>

            <div className="flex mt-16 mb-32">
              <div className="mr-6">
                <Image src="/main/facebook.svg" width={31} height={31} />
              </div>
              <div className="mr-6">
                <Image src="/main/whatsapp.svg" width={31} height={31} />
              </div>
              <div className="mr-6">
                <Image src="/main/telegram.svg" width={31} height={31} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionForm;
