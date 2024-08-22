import React from 'react'
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <header className="bg-white shadow-sm flex py-4 px-4 sm:px-10 tracking-wide relative z-50">
                <div className="max-w-6xl 2xl:max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-5 w-full">
                    <a href="/">
                        <h2 className="font-semibold">Divincy</h2>
                    </a>
                    <div className="hidden lg:flex relative bg-[#F8F8F8] min-h-[40px] border-[#D6D6D9] border rounded-3xl">
                        <input type="text" name="" id="" placeholder='Search' className='bg-transparent px-5 outline-none text-black placeholder-black lg:w-[400px] min-h-[40px]' />
                        <button type="button" className='border-none bg-transparent absolute top-1/2 right-3 -translate-y-1/2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 ">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
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
                            className="block px-4 md:px-6 py-2.5 text-sm font-semibold border-gradient rounded-full bg-white text-dark transition-all ease-in-out duration-300 gradientBorder"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </header>
            <div className="m-3 lg:hidden relative bg-[#F8F8F8] min-h-[40px] border-[#D6D6D9] border rounded-3xl">
                <input type="text" name="" id="" placeholder='Search' className='bg-transparent px-5 outline-none text-black placeholder-black lg:w-[400px] min-h-[40px]' />
                <button type="button" className='border-none bg-transparent absolute top-1/2 right-3 -translate-y-1/2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
            </div>

        </>
    )
}

export default Header;
