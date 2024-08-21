import React, { useState } from "react";
import Card from "./Home/Card.jsx";
import { Philosophers, Religious } from "./Home/cardData.jsx";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <header className="bg-white shadow-sm flex justify-center py-4 px-4 sm:px-10 tracking-wide relative z-50">
        <div className="max-w-7xl flex flex-wrap items-center justify-between gap-5 w-full">
          <a href="/">
            <h2 className="font-semibold">Diviney</h2>
          </a>
          <div className="hidden lg:flex relative bg-[#F8F8F8] min-h-[40px] border-[#D6D6D9] border rounded-3xl">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search"
              className="bg-transparent gradientBorder p-[10px!important] outline-none text-black placeholder-black lg:w-[400px] min-h-[40px]"
            />
            <button
              type="button"
              className="border-none bg-transparent absolute top-1/2 right-3 -translate-y-1/2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
          <div className="flex max-lg:ml-auto space-x-3">
            <Link
              to="/register"
              className="block px-4 md:px-6 py-2.5 text-sm font-semibold bg-custom-gradient rounded-3xl text-white transition-all ease-in-out duration-300 hover:bg-gray-100"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="block px-4 md:px-6 py-2.5 text-sm font-semibold border-gradient rounded-full bg-white text-dark transition-all ease-in-out duration-300 gradientBorder "
            >
              Login
            </Link>
          </div>
        </div>
      </header>

      <div className="m-3 lg:hidden relative bg-[#F8F8F8] min-h-[40px] border-[#D6D6D9] border rounded-3xl">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search"
          className="bg-transparent px-5 outline-none text-black placeholder-black lg:w-[400px] min-h-[40px]"
        />
        <button
          type="button"
          className="border-none bg-transparent absolute top-1/2 right-3 -translate-y-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>

      <section className="container px-4 mx-auto flex flex-wrap justify-center">
        <div className="p-2 w-full md:w-1/2">
          <div className="h-[250px] relative  flex flex-col md:flex-row justify-between items-center overflow-hidden rounded-xl bg-white-along-gradient">
            <div className="p-6 w-full sm:w-9/12">
              <h2 className="text-2xl md:text-3xl font-semibold max-w-full sm:max-w-[300px] text-start">
                Chat with Ancient Wisdom
              </h2>
              <p className="text-xs mt-3 mb-4">
                You can chat with any person from the past.
              </p>
              <button className="pl-5 absolute bottom-4  pr-4 py-3 text-sm font-semibold bg-custom-gradient rounded-xl text-white transition-all ease-in-out duration-300 hover:bg-gray-100 flex items-center">
                Let's Chat
                <span className="ml-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
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
              className="absolute bottom-0 right-0 ml-auto mr-0 aspect-square h-[180px] w-[180px] md:h-[250px] md:w-[250px]"
              alt="Simon Lee"
            />
          </div>
        </div>

        <div className="w-full p-2 md:w-1/4">
          <div className="p-3 py-4 overflow-hidden rounded-xl bg-white h-full">
            <span className="bg-theme-orange p-3 inline-block rounded-full">
              <img
                src="./images/home/cognition.png"
                className="w-7"
                alt="Cognition Icon"
              />
            </span>
            <h4 className="text-base font-semibold mt-2">Marcus</h4>
            <p className="text-xs mt-3 mb-0">
              Marcus Aurelius Antoninus was Roman emperor from 161 to 180 and a
              Stoic philosopher.
            </p>
          </div>
        </div>

        <div className="w-full p-2 md:w-1/4">
          <div className="p-3 py-4 overflow-hidden rounded-xl bg-white h-full">
            <span className="bg-theme-sky p-3 inline-block rounded-full">
              <img
                src="./images/home/cognition.png"
                className="w-7"
                alt="Cognition Icon"
              />
            </span>
            <h4 className="text-base font-semibold mt-2">Religious Person 1</h4>
            <p className="text-xs mt-3 mb-0">
              Marcus Aurelius Antoninus was Roman emperor from 161 to 180 and a
              Stoic philosopher.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-8 lg:px-16 py-6">
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

      <section className="container color-full mx-auto px-4 md:px-8 lg:px-16 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-8 lg:px-16 py-6">
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

      <section className="container px-4 md:px-8  my-5 lg:px-[65px] mx-auto">
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
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
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
                    src="./images/home/Socialicons.png"
                    alt="SocialIcon2"
                    className="w-6 h-6"
                  />
                </a>
              </li>
              <li>
                <a href="https://socialmedia.com">
                  <img
                    src="./images/home/Socialicons.png"
                    alt="SocialIcon3"
                    className="w-6 h-6"
                  />
                </a>
              </li>
              <li>
                <a href="https://socialmedia.com">
                  <img
                    src="./images/home/Socialicons.png"
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
