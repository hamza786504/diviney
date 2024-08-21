// InfoGrapics.js
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

export default function InfoGrapics() {
    const { id } = useParams();
    const [philosopher, setPhilosopher] = useState({});


    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/philosopher/${id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            if (data.error) {
                throw new Error(data.error);
            }
            console.log(data.entity)
            setPhilosopher(data.entity);
        } catch (error) {
            console.error('Error fetching data:', error);
            redirect('/404');
        }
    };

    useEffect(() => {
        if (id) {
            fetchData();
        } else {
            window.location.href = "/404"
        }
    }, [id]);


    return (
        <>

            <div className="max-w-4xl pb-8 bg-gray-50 mx-auto">
                <div className="bg-slate-700 flex items-center justify-between p-3 py-4">
                    <h3 className="text-2xl text-white">
                        Philosophical Odysis
                    </h3>
                    <div className="flex py-1 items-center bg-slate-500 rounded-xl px-1 space-x-1 justify-center">
                        <button className="border-0 text-xs text-slate-300">En</button>
                        <button className="border-0 text-xs text-white">הוא</button>
                    </div>
                </div>
                <div className="p-3 md:px-8 flex items-start justify-between">
                    <div className="w-1/3 pt-4">
                        <div className="mx-auto min-w-[200px] max-w-[230px] aspect-square border-slate-700 rounded-full overflow-hidden border-4">
                            <img src={philosopher?.imageUrl} alt="" />
                        </div>
                        <h3 className="text-2xl font-semibold mt-3 text-center">
                            {philosopher?.fullName}
                        </h3>
                        <p className='mt-2 mx-auto text-center text-sm'>{philosopher?.lifespan}</p>
                    </div>
                    <div className="flex -mx-2 flex-wrap items-stretch w-2/3">
                        <div className='w-1/3 p-2'>
                            <div className="mx-auto px-2 bg-sky-50 rounded-md p-3">
                                <h5 className="text-lg">Nationality</h5>
                                <p className="text-sm text-gray-600">{philosopher?.nationality}</p>
                            </div>
                        </div>
                        <div className='w-2/3 p-2'>
                            <div className='mx-auto px-2 bg-sky-50 rounded-md p-3'>
                                <h5 className="text-lg">Era</h5>
                                <p className="text-sm text-gray-600">{philosopher?.era}</p>
                            </div>
                        </div>
                        <div className="w-full p-2">
                            <div className='bg-sky-50 rounded-md p-3'>
                                <h5 className="text-lg">Framework</h5>
                                <p className="text-sm text-gray-600">{philosopher?.framework}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="mx-3 md:mx-8 my-4 bg-slate-700 h-0.5" />
                <div className='bg-sky-50 mx-3 md:mx-8 p-5 rounded-md'>
                    <h3 className="text-lg font-semibold mb-2">Major Works</h3>
                    <p className="text-sm leading-relaxed">{philosopher?.majorWorks}</p>
                </div>
                <hr className="mx-3 md:mx-8 my-4 bg-slate-700 h-0.5" />
                <div className='bg-sky-50 mx-3 md:mx-8 p-5 rounded-md'>
                    <h3 className="text-lg font-semibold mb-2">Core Ideas</h3>
                    <ul className='list-inside list-disc'>

                        {philosopher.keyIdeas?.map((idea) => {
                            return (
                                <>
                                    <li>{idea}</li>
                                </>
                            )
                        })}
                    </ul>
                </div>
                <hr className="mx-3 md:mx-8 my-4 bg-slate-700 h-0.5" />
                <div className='bg-sky-50 mx-3 md:mx-8 p-5 rounded-md'>
                    <h3 className="text-lg font-semibold mb-2">Famous Quotes</h3>
                    <ul className='list-inside list-disc'>

                        {philosopher.quotes?.map((quote) => {
                            return (
                                <>
                                    <li>{quote}</li>
                                </>
                            )
                        })}
                    </ul>
                </div>
                <hr className="mx-3 md:mx-8 my-4 bg-slate-700 h-0.5" />
                <div className='bg-sky-50 mx-3 md:mx-8 p-5 rounded-md'>
                    <h3 className="text-lg font-semibold mb-2">Historical Context</h3>
                    <p>{philosopher?.context}</p>
                </div>
                <hr className="mx-3 md:mx-8 my-4 bg-slate-700 h-0.5" />

                <div className='bg-sky-50 mx-3 md:mx-8 p-5 rounded-md'>
                    <h3 className="text-lg font-semibold mb-2">Influences and Legacy</h3>
                    <ul className='list-inside list-disc'>
                        {philosopher.influence?.map((influence) => {
                            return (
                                <>
                                    <li>{influence}</li>
                                </>
                            )
                        })}
                        {philosopher.legacy?.map((legacy) => {
                            return (
                                <>
                                    <li>{legacy}</li>
                                </>
                            )
                        })}
                    </ul>
                </div>
                <hr className="mx-3 md:mx-8 my-4 bg-slate-700 h-0.5" />

                <div className='bg-sky-50 mx-3 md:mx-8 p-5 rounded-md'>
                    <h3 className="text-lg font-semibold mb-2">Controversies</h3>
                    <ul className='list-inside list-disc'>
                        {philosopher.controversies?.map((controversy) => {
                            return (
                                <>
                                    <li>{controversy}</li>
                                </>
                            )
                        })}
                    </ul>
                </div>


                <div className="mx-3 md:mx-8 max-w-screen-lg">
                    <h2 className="text-xl font-semibold mb-3 mt-4">Timeline</h2>
                    <div className="hidden md:flex items-start max-w-screen-lg">
                        {philosopher.timeline?.map(time => {
                            return (
                                <>
                                    <div className="w-full min-h-[100px]">
                                        <div className="flex relative items-center w-full">
                                            <div className="w-4 h-4 absolute left-1/2 shrink-0 mx-[-1px] bg-black p-1.5 flex items-center justify-center rounded-full"></div>
                                            <div className="w-full h-1 bg-black"></div>
                                        </div>
                                        <h6 className="text-xs mt-3 text-black ml-2 px-2 justify-center text-center flex flex-wrap items-start"><span className='text-base font-semibold mr-1'>{time.year} {" "}</span><span className='mt-1'>{" "} {time.event}</span></h6>
                                    </div>
                                </>
                            )
                        })}

                    </div>



                    {philosopher.timeline?.map((time, index) => (
                        <div className="flex md:hidden items-start flex-col max-w-[250px]" key={index}>
                            <div className="flex items-start">
                                <div className="flex flex-col items-center">
                                    <div className="w-4 h-4 shrink-0 mx-[-1px] border-2 bg-black p-1.5 flex items-center justify-center rounded-full"></div>
                                    {index < philosopher.timeline.length - 1 && (
                                        <div className="w-0.5 h-24 rounded-md bg-gray-300 my-1"></div>
                                    )}
                                </div>
                                <div className="ml-6">
                                    <p className="text-[10px] font-bold text-gray-400">{time.year}</p>
                                    <h6 className="text-lg font-bold text-[#333]">{time.event}</h6>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </>
    );
}
