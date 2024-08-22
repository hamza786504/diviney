import React, { useState } from "react";
import Card from "../components/Home/Card.jsx";
import { Philosophers, Religious } from "../components/Home/cardData.jsx";

import Header from "../components/Header.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <section className="px-4 my-4 max-w-5xl 2xl:max-w-6xl flex flex-wrap items-stretch justify-start mx-auto">
        <div className="w-full p-2 md:w-1/2">
          <div className="flex relative md:items-end overflow-hidden justify-between flex-nowrap flex-row rounded-xl bg-white-along-gradient">
            <div className="p-6 pr-0 w-full sm:w-9/12">
              <h2 className="text-3xl text-start font-semibold max-w-[300px]">
                Chat with ancient Wisdom
              </h2>
              <p className="text-xs mt-3 mb-4">
                You can chat with any person from the past.
              </p>
              <button className="pl-5 pr-4 py-3 text-sm font-semibold bg-custom-gradient rounded-xl text-white transition-all ease-in-out duration-300 hover:bg-gray-100 flex items-center">
                Let's Chat
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-5 ml-3"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <img
              src="./images/home/simon-lee.png"
              className="absolute bottom-0 right-0 ml-auto mr-0 aspect-square h-[180px] w-[180px]"
              alt=""
            />
          </div>
        </div>
        <div className="w-full p-2 md:w-1/4">
          <div className="p-3 py-4 overflow-hidden rounded-xl bg-white h-full">
            <span className="bg-theme-orange p-3 inline-block rounded-full">
              <img src="./images/home/cognition.png" className="w-7" alt="" />
            </span>
            <h4 className="text-base text-start font-semibold md:max-w-[300px]">
              Marcus
            </h4>
            <p className="text-xs mt-3 mb-0">
              Marcus Aurelius Antoninus was Roman emperor from 161 to 180 and a
              Stoic philosopher
            </p>
          </div>
        </div>
        <div className="w-full p-2 md:w-1/4">
          <div className="p-3 py-4 overflow-hidden rounded-xl bg-white h-full">
            <span className="bg-theme-sky p-3 inline-block rounded-full">
              <img src="./images/home/cognition.png" className="w-7" alt="" />
            </span>
            <h4 className="text-base text-start font-semibold md:max-w-[300px]">
              Religious Person 1
            </h4>
            <p className="text-xs mt-3 mb-0">
              Marcus Aurelius Antoninus was Roman emperor from 161 to 180 and a
              Stoic philosopher
            </p>
          </div>
        </div>
      </section>

      <section className=" max-w-5xl 2xl:max-w-6xl  mx-auto container  px-4 my-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold  mb-6">
          Philosophers
        </h1>
        <div className="grid  sm:grid-cols-12 md:grid-cols-4 lg:grid-cols-4 gap-2 ">
          {Philosophers.map((card) => (
            <Card
              key={card.id}
              name={card.name}
              description={card.description}
              imageUrl={card.imageUrl}
            />
          ))}
          <div className="col-span-full flex justify-center mt-6">
            <button className="px-4 learn-button gradientBorder py-2 text-sm font-semibold  rounded-full bg-white text-dark transition-all ease-in-out duration-300 hover:bg-gray-100">
              Learn More
            </button>
          </div>
        </div>
      </section>
      {/* container color-full mx-auto px-4 md:px-8 lg:px-16 py-6 */}
      <section className="max-w-5xl 2xl:max-w-6xl  mx-auto container  px-4 my-4">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            className="flex  items-center justify-between p-6 rounded-lg text-white"
            style={{ backgroundColor: "#FF7847" }}
          >
            <div>
              <h2 className="text-xl  mb-2 font-bold">Philosophy Now </h2>
              <p className="text-sm ">Chat with Philosopher</p>
            </div>
            <div>
              <img src="./images/home/synagogue.svg" alt="" />
            </div>
          </div>
          <div
            className="flex  items-center justify-between p-6 rounded-lg text-white"
            style={{ backgroundColor: "#00DFDF" }}
          >
            <div>
              <h2 className="text-xl  mb-2 font-bold">Philosophy Now </h2>
              <p className="text-sm ">Chat with Philosopher</p>
            </div>
            <div>
              <img src="./images/home/synagogue.svg" alt="" />
            </div>
          </div>
          <div
            className="flex  items-center justify-between p-6 rounded-lg text-white"
            style={{ backgroundColor: "#B165A5" }}
          >
            <div>
              <h2 className="text-xl  mb-2 font-bold">Philosophy Now </h2>
              <p className="text-sm ">Chat with Philosopher</p>
            </div>
            <div>
              <img src="./images/home/synagogue.svg" alt="" />
            </div>
          </div>
          <div
            className="flex  items-center justify-between p-6 rounded-lg text-white"
            style={{ backgroundColor: "#1571DF" }}
          >
            <div>
              <h2 className="text-xl  mb-2 font-bold">Philosophy Now </h2>
              <p className="text-sm ">Chat with Philosopher</p>
            </div>
            <div>
              <img src="./images/home/synagogue.svg" alt="" />
            </div>
          </div>
        </div> */}
        <div class="max-w-full mx-auto p-4 flex flex-col items-center">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl w-full">
            <div class="bg-gradient-to-r from-[#FF7847] to-[#aaaaa9f0] p-6 rounded-lg shadow-md flex ">
              <div>
                <h2 className=" mb-2 font-bold">Philosophy Now </h2>
                <p className="text-sm ">Chat with Philosopher</p>
              </div>
              <div>
                <img src="./images/home/synagogue.svg" alt="" />
              </div>
            </div>

            <div class="bg-gradient-to-r from-[#00DFDF] to-[#aaaaa9f0] p-6 rounded-lg shadow-md flex">
              <div>
                <h2 className=" mb-2 font-bold">Philosophy Now </h2>
                <p className="text-sm ">Chat with Philosopher</p>
              </div>
              <div>
                <img src="./images/home/synagogue.svg" alt="" />
              </div>
            </div>

            <div class="bg-gradient-to-r from-[#B165A5] to-[#aaaaa9f0] p-6 rounded-lg shadow-md flex">
              <div>
                <h2 className=" mb-2 font-bold">Philosophy Now </h2>
                <p className="text-sm ">Chat with Philosopher</p>
              </div>
              <div>
                <img src="./images/home/synagogue.svg" alt="" />
              </div>
            </div>

            <div class="bg-gradient-to-r from-blue-500 to-[#1571DF] p-6 rounded-lg shadow-md flex">
              <div>
                <h2 className=" mb-2 font-bold">Philosophy Now </h2>
                <p className="text-sm ">Chat with Philosopher</p>
              </div>
              <div>
                <img src="./images/home/synagogue.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl 2xl:max-w-6xl  mx-auto container  px-4 my-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold  mb-6">
          Religious
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Religious.map((card) => (
            <Card
              key={card.id}
              name={card.name}
              description={card.description}
              imageUrl={card.imageUrl}
              isReligious={true}
            />
          ))}
          <div className="col-span-full flex justify-center mt-6">
            <button className="px-4  learn-button gradientBorder py-2 text-sm font-semibold  rounded-full bg-white text-dark transition-all ease-in-out duration-300 hover:bg-gray-100">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-5xl 2xl:max-w-6xl  mx-auto container  px-4 my-4">
        <h1 className="section-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          Some Suggestions
        </h1>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
            <div className="p-4 md:p-8 lg:p-[32px] overflow-hidden rounded-xl bg-white h-full">
              <div className="flex items-center mb-4">
                <span className="bg-theme-orange p-3 mr-2 inline-block rounded-full">
                  <img
                    src="./images/home/cognition.png"
                    className="w-7"
                    alt="Cognition"
                  />
                </span>
                <h4 className="text-base md:text-lg font-semibold">Marcus</h4>
              </div>

              <div className="space-y-4">
                <div className="gradient-box p-4 rounded-lg">
                  <p className="text-[#120039]">This is Prompt 1 suggestion.</p>
                </div>
                <div className="gradient-box p-4 rounded-lg">
                  <p className="text-[#120039]">This is Prompt 1 suggestion.</p>
                </div>
                <div className="gradient-box p-4 rounded-lg">
                  <p className="text-[#120039]">This is Prompt 1 suggestion.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
            <div className="p-4 md:p-8 lg:p-[32px] overflow-hidden rounded-xl bg-white h-full">
              <div className="flex items-center mb-4">
                <span className="bg-theme-orange p-3 mr-2 inline-block rounded-full">
                  <img
                    src="./images/home/cognition.png"
                    className="w-7"
                    alt="Cognition"
                  />
                </span>
                <h4 className="text-base md:text-lg font-semibold">Marcus</h4>
              </div>
              <div className="space-y-4">
                <div className="gradient-box p-4 rounded-lg">
                  <p className="text-[#120039]">This is Prompt 1 suggestion.</p>
                </div>
                <div className="gradient-box p-4 rounded-lg">
                  <p className="text-[#120039]">This is Prompt 1 suggestion.</p>
                </div>
                <div className="gradient-box p-4 rounded-lg">
                  <p className="text-[#120039]">This is Prompt 1 suggestion.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2">
            <div className="p-4 md:p-8 lg:p-[32px] overflow-hidden rounded-xl bg-white h-full">
              <div className="flex items-center mb-4">
                <span className="bg-theme-sky p-3 mr-2 inline-block rounded-full">
                  <img
                    src="./images/home/synagogue.svg"
                    className="w-7"
                    alt="Synagogue"
                  />
                </span>
                <h4 className="text-base md:text-lg font-semibold">
                  Religious Person 1
                </h4>
              </div>
              <div className="space-y-4">
                <div className="gradient-box p-4 rounded-lg">
                  <p className="text-[#120039]">This is Prompt 1 suggestion.</p>
                </div>
                <div className="gradient-box p-4 rounded-lg">
                  <p className="text-[#120039]">This is Prompt 1 suggestion.</p>
                </div>
                <div className="gradient-box p-4 rounded-lg">
                  <p className="text-[#120039]">This is Prompt 1 suggestion.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-center p-5">
        <div className="max-w-5xl 2xl:max-w-6xl  mx-auto container  px-4 my-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <img
              src="./images/home/Figure1.png"
              alt="Figure 1"
              className="w-32 md:w-48 lg:w-64 object-contain"
            />
            <div className="text-center md:text-left max-w-md mx-auto">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#120039] mb-4">
                Create Your Own Figure
              </h1>
              <p className="text-sm md:text-base lg:text-lg">
                Not vibing with any Figures? Create one of your own! Customize
                things like their voice, conversation starts, their tone, and
                more!
              </p>
            </div>
            <img
              src="./images/home/Figure2.png"
              alt="Figure 2"
              className="w-32 md:w-48 lg:w-64 object-contain"
            />
          </div>
        </div>
      </section>

      <footer className="py-5 background">
        <div className="container px-4 md:px-8 lg:px-[65px] mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Navigation Links */}
          <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
            <div className="mb-4 md:mb-0">
              <a href="/">
                <h2 className="font-semibold text-white text-2xl md:text-3xl">
                  Divincy
                </h2>
              </a>
            </div>
            <ul className="flex flex-col md:flex-row md:space-x-6 text-white">
              <li className="mb-2 md:mb-0">
                <a href="#about">About</a>
              </li>
              <li className="mb-2 md:mb-0">
                <a href="#career">Career</a>
              </li>
              <li className="mb-2 md:mb-0">
                <a href="#blog">Blog</a>
              </li>
              <li className="mb-2 md:mb-0">
                <a href="#research">Research</a>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <ul className="flex space-x-4">
              <li>
                <a href="https://socialmedia.com">
                  <img
                    src="./images/home/Socialicons.png"
                    alt="SocialIcon1"
                    className="w-6 h-6"
                  />
                </a>
              </li>
              <li>
                <a href="https://socialmedia.com">
                  <img
                    src="./images/home/insta.png"
                    alt="SocialIcon2"
                    className="w-6 h-6"
                  />
                </a>
              </li>
              <li>
                <a href="https://socialmedia.com">
                  <img
                    src="./images/home/linkedin.png"
                    alt="SocialIcon3"
                    className="w-6 h-6"
                  />
                </a>
              </li>
              <li>
                <a href="https://socialmedia.com">
                  <img
                    src="./images/home/mail.png"
                    alt="SocialIcon4"
                    className="w-6 h-6"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
