import React, { useState } from 'react'
import "./profile.css"

function ProfileView() {

    // Define the user and religiousPersons data
    const [user, setUser] = useState({
        fullName: 'Alex Sterling',
        username: '@Alex-123114asaopi',
        interactions: '128k',
        followers: '118k',
        following: '264',
        avatarUrl: '../../../public/images/user-persona/frame 10.png'  // Adjust path as needed
    });

    const [religiousPersons, setReligiousPersons] = useState([
        {
            imageUrl: '/images/home/cognition.png',
            name: 'Religious Person 1',
            description: 'Marcus Aurelius Antoninus was Roman emperor from 161 to 180 and a Stoic philosopher'
        },
        {
            imageUrl: '/images/home/cognition.png',
            name: 'Religious Person 1',
            description: 'Marcus Aurelius Antoninus was Roman emperor from 161 to 180 and a Stoic philosopher'
        },
        {
            imageUrl: '/images/home/cognition.png',
            name: 'Religious Person 1',
            description: 'Marcus Aurelius Antoninus was Roman emperor from 161 to 180 and a Stoic philosopher'
        },
        {
            imageUrl: '/images/home/cognition.png',
            name: 'Religious Person 1',
            description: 'Marcus Aurelius Antoninus was Roman emperor from 161 to 180 and a Stoic philosopher'
        },
        {
            imageUrl: '/images/home/cognition.png',
            name: 'Religious Person 1',
            description: 'Marcus Aurelius Antoninus was Roman emperor from 161 to 180 and a Stoic philosopher'
        }
    ]);

    // Function to render the user's info
    const RenderUserInfo = () => (
        <div className="flex flex-wrap lg:flex-nowrap flex-col md:flex-row items-start pb-3 justify-center w-full border-b border-black/20">
            <div className="w-full md:w-7/12 flex">
                <img src={user.avatarUrl} className='cursor-pointer w-[50px] h-[50px]' alt="avatar" />
                <div className="flex ms-2 flex-col items-start">
                    <h4 className="text-xl font-bold">{user.fullName}</h4>
                    <div className="flex mt-0 items-center space-x-3">
                        <a href='/admin' className="text-xs text-black min-w-[90px]">{user.username}</a>
                        <span className="border-r border-black w-1 h-[15px]"></span>
                        <div className="flex items-center text-sm py-0 text-black border rounded-full border-black px-2">
                            <svg width="12" height="12" className='mr-1' viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 14.5V1.9C0 1.515 0.137083 1.18542 0.41125 0.91125C0.685417 0.637083 1.015 0.5 1.4 0.5H12.6C12.985 0.5 13.3146 0.637083 13.5887 0.91125C13.8629 1.18542 14 1.515 14 1.9V10.3C14 10.685 13.8629 11.0146 13.5887 11.2887C13.3146 11.5629 12.985 11.7 12.6 11.7H2.8L0 14.5ZM2.205 10.3H12.6V1.9H1.4V11.0875L2.205 10.3Z" fill="#120039" />
                            </svg>
                            {user.interactions}
                        </div>
                    </div>
                </div>
            </div>
            <span className="w-full md:w-5/12 mt-3 md:mt-0 text-xs text-gray-400 items-start flex justify-end md:flex-grow">
                <div className="flex bg-light-sky bg-gray-100 max-w-[230px] bg-gradient-to-r from-blue-100 to-red-100 w-full p-2 rounded-md justify-between items-center md:ms-auto md:mr-0 ms-0 mr-auto max-md:min-w-full">
                    <span className='w-1/2 flex flex-col items-center py-1 text-black'>
                        <p className="font-semibold" style={{ fontSize: "16px" }}>
                            Followers
                        </p>
                        <p className="text-md mt-2.5 font-semibold">
                            {user.followers}
                        </p>
                    </span>
                    <span className="h-[40px] border-gray-700 border"></span>
                    <span className='w-1/2 flex flex-col items-center py-1 text-black'>
                        <p className="font-semibold" style={{ fontSize: "16px" }}>
                            Following
                        </p>
                        <p className="text-md mt-2.5 font-semibold">
                            {user.following}
                        </p>
                    </span>
                </div>
            </span>
        </div>
    );

    // Function to render the list of religious persons
    const RenderReligiousPersons = () => (
        <div className="flex flex-wrap -mx-2">
            {religiousPersons.map((person, index) => (
                <div key={index} className="w-full sm:w-1/2 min-w-[290px] lg:w-1/3 p-2">
                    <div className="p-3 py-4 overflow-hidden flex flex-row items-start rounded-xl bg-white h-full">
                        <span className='bg-theme-sky p-3 inline-block rounded-full'>
                            <img src={person.imageUrl} className='w-16' alt={person.name} />
                        </span>
                        <div className="flex ps-3 flex-col flex-start">
                            <h4 className="text-base text-start font-semibold md:max-w-[300px]">{person.name}</h4>
                            <p className='text-xs mt-2 mb-0'>{person.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
    return (
        <>
            <div className="md:hidden flex bg-white items-center justify-between p-3 py-4 shadow-sm">
                <a href='/admin/chatroom' className="text-lg flex items-center font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="mr-2 size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                    Creator Profile
                </a>
                <button type="button" className='bg-transparent outline-none border-none'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>
                </button>
            </div>
            <div className="flex items-start justify-start">
                <div className="max-md:hidden max-md:bg-black/50 max-md:fixed max-md:top-0 max-md:left-0 max-md:h-screen max-md:w-screen">
                    <div className="sidebar flex flex-col items-start bg-white min-w-[300px] max-md:w-[90%] max-md:max-w-[300px] xl:max-w-[15%] lg:max-w-[25%] h-screen">
                        <a href="/" className='font-bold mb-1 text-md p-3'>Diviney</a>
                        <a href="../" className="flex text-sm my-2 px-3 items-center">
                            <svg width="22" height="22" viewBox="0 0 24 24" className='size-5 mr-2' fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g mask="url(#mask0_269_3331)">
                                    <path d="M12 14L1 8L12 2L23 8L12 14ZM12 18L1.575 12.325L3.675 11.175L12 15.725L20.325 11.175L22.425 12.325L12 18ZM12 22L1.575 16.325L3.675 15.175L12 19.725L20.325 15.175L22.425 16.325L12 22ZM12 11.725L18.825 8L12 4.275L5.175 8L12 11.725Z" fill="#120039" />
                                </g>
                            </svg>
                            Explore/Discover
                        </a>
                        <div className="flex text-sm my-2 px-3 items-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" className='size-5 mr-2' fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g mask="url(#mask0_269_4178)">
                                    <path d="M7 20C6.45 20 5.97917 19.8042 5.5875 19.4125C5.19583 19.0208 5 18.55 5 18V8.75L1 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H7ZM7 6V18H20V6H7ZM13.5 17.5L14.9 16.1L13.8 15H18V13H9L13.5 17.5ZM9 11H18L13.5 6.5L12.1 7.9L13.2 9H9V11Z" fill="#120039" />
                                </g>
                            </svg>

                            Saved Conversations
                        </div>
                        <div className="flex w-full px-3 flex-nowrap items-center justify-between">
                            <h4 className="text-lg font-bold mt-1 mb-3">My Chats</h4>
                            <button type='button' className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="mr-2 size-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                                <span className='text-sm mb-1'>New chat</span></button>
                        </div>
                        <div className="px-3 mb-2 w-full">
                            <div class="flex px-5 py-3 rounded-xl border border-gray-300 bg-gray-50 overflow-hidden w-full mx-auto">
                                <input type="email" placeholder="Search Messages"
                                    class="w-full outline-none bg-transparent text-gray-600 text-sm" />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" class="fill-gray-600">
                                    <path
                                        d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                                    </path>
                                </svg>
                            </div>
                        </div>

                        {/* chats list */}
                        <div className="px-3 chat_list overflow-y-scroll flex flex-1 flex-col items-start w-full cursor-pointer">
                            <h5 className="text-md text-gray-600">Recent</h5>
                            <div className="flex items-center justify-center w-full py-1.5 px-2 rounded-lg">
                                <img src="../../../public/images/user-persona/frame 10.png" className='cursor-pointer w-[40px] h-[40px]' alt="avatar" />
                                <div className="flex ms-2 flex-col items-start">
                                    <h4 className="text-md font-semibold">Elmer Laverty</h4>
                                    <p className="text-xs text-gray-400">Haha oh man</p>
                                </div>
                                <span className="h-[40px] text-xs text-gray-400 items-start flex justify-end flex-grow">
                                    12m
                                </span>
                            </div>
                            <div className="flex items-center justify-center w-full py-1.5  px-2 rounded-lg">
                                <img src="../../../public/images/user-persona/frame 10.png" className='cursor-pointer w-[40px] h-[40px]' alt="avatar" />
                                <div className="flex ms-2 flex-col items-start">
                                    <h4 className="text-md font-semibold">Elmer Laverty</h4>
                                    <p className="text-xs text-gray-400">Haha oh man</p>
                                </div>
                                <span className="h-[40px] text-xs text-gray-400 items-start flex justify-end flex-grow">
                                    12m
                                </span>
                            </div>
                            <div className="flex items-center justify-center w-full py-1.5 px-2 rounded-lg">
                                <img src="../../../public/images/user-persona/frame 10.png" className='cursor-pointer w-[40px] h-[40px]' alt="avatar" />
                                <div className="flex ms-2 flex-col items-start">
                                    <h4 className="text-md font-semibold">Elmer Laverty</h4>
                                    <p className="text-xs text-gray-400">Haha oh man</p>
                                </div>
                                <span className="h-[40px] text-xs text-gray-400 items-start flex justify-end flex-grow">
                                    12m
                                </span>
                            </div>
                            <div className="flex items-center justify-center w-full py-1.5 px-2 rounded-lg">
                                <img src="../../../public/images/user-persona/frame 10.png" className='cursor-pointer w-[40px] h-[40px]' alt="avatar" />
                                <div className="flex ms-2 flex-col items-start">
                                    <h4 className="text-md font-semibold">Elmer Laverty</h4>
                                    <p className="text-xs text-gray-400">Haha oh man</p>
                                </div>
                                <span className="h-[40px] text-xs text-gray-400 items-start flex justify-end flex-grow">
                                    12m
                                </span>
                            </div>
                            <h5 className="text-md text-gray-600 my-2">Yesterday</h5>
                            <div className="flex items-center justify-center w-full py-1.5 px-2 rounded-lg">
                                <img src="../../../public/images/user-persona/frame 10.png" className='cursor-pointer w-[40px] h-[40px]' alt="avatar" />
                                <div className="flex ms-2 flex-col items-start">
                                    <h4 className="text-md font-semibold">Elmer Laverty</h4>
                                    <p className="text-xs text-gray-400">Haha oh man</p>
                                </div>
                                <span className="h-[40px] text-xs text-gray-400 items-start flex justify-end flex-grow">
                                    12m
                                </span>
                            </div>
                            <div className="flex items-center justify-center w-full py-1.5  px-2 rounded-lg">
                                <img src="../../../public/images/user-persona/frame 10.png" className='cursor-pointer w-[40px] h-[40px]' alt="avatar" />
                                <div className="flex ms-2 flex-col items-start">
                                    <h4 className="text-md font-semibold">Elmer Laverty</h4>
                                    <p className="text-xs text-gray-400">Haha oh man</p>
                                </div>
                                <span className="h-[40px] text-xs text-gray-400 items-start flex justify-end flex-grow">
                                    12m
                                </span>
                            </div>
                            <div className="flex items-center justify-center w-full py-1.5 px-2 rounded-lg">
                                <img src="../../../public/images/user-persona/frame 10.png" className='cursor-pointer w-[40px] h-[40px]' alt="avatar" />
                                <div className="flex ms-2 flex-col items-start">
                                    <h4 className="text-md font-semibold">Elmer Laverty</h4>
                                    <p className="text-xs text-gray-400">Haha oh man</p>
                                </div>
                                <span className="h-[40px] text-xs text-gray-400 items-start flex justify-end flex-grow">
                                    12m
                                </span>
                            </div>
                            <div className="flex items-center justify-center w-full py-1.5 px-2 rounded-lg">
                                <img src="../../../public/images/user-persona/frame 10.png" className='cursor-pointer w-[40px] h-[40px]' alt="avatar" />
                                <div className="flex ms-2 flex-col items-start">
                                    <h4 className="text-md font-semibold">Elmer Laverty</h4>
                                    <p className="text-xs text-gray-400">Haha oh man</p>
                                </div>
                                <span className="h-[40px] text-xs text-gray-400 items-start flex justify-end flex-grow">
                                    12m
                                </span>
                            </div>
                            <h5 className="text-md text-gray-600 my-2">Week Ago</h5>
                            <div className="flex items-center justify-center w-full py-1.5 px-2 rounded-lg">
                                <img src="../../../public/images/user-persona/frame 10.png" className='cursor-pointer w-[40px] h-[40px]' alt="avatar" />
                                <div className="flex ms-2 flex-col items-start">
                                    <h4 className="text-md font-semibold">Elmer Laverty</h4>
                                    <p className="text-xs text-gray-400">Haha oh man</p>
                                </div>
                                <span className="h-[40px] text-xs text-gray-400 items-start flex justify-end flex-grow">
                                    12m
                                </span>
                            </div>
                            <div className="flex items-center justify-center w-full py-1.5  px-2 rounded-lg">
                                <img src="../../../public/images/user-persona/frame 10.png" className='cursor-pointer w-[40px] h-[40px]' alt="avatar" />
                                <div className="flex ms-2 flex-col items-start">
                                    <h4 className="text-md font-semibold">Elmer Laverty</h4>
                                    <p className="text-xs text-gray-400">Haha oh man</p>
                                </div>
                                <span className="h-[40px] text-xs text-gray-400 items-start flex justify-end flex-grow">
                                    12m
                                </span>
                            </div>
                            <div className="flex items-center justify-center w-full py-1.5 px-2 rounded-lg">
                                <img src="../../../public/images/user-persona/frame 10.png" className='cursor-pointer w-[40px] h-[40px]' alt="avatar" />
                                <div className="flex ms-2 flex-col items-start">
                                    <h4 className="text-md font-semibold">Elmer Laverty</h4>
                                    <p className="text-xs text-gray-400">Haha oh man</p>
                                </div>
                                <span className="h-[40px] text-xs text-gray-400 items-start flex justify-end flex-grow">
                                    12m
                                </span>
                            </div>
                            <div className="flex items-center justify-center w-full py-1.5 px-2 rounded-lg">
                                <img src="../../../public/images/user-persona/frame 10.png" className='cursor-pointer w-[40px] h-[40px]' alt="avatar" />
                                <div className="flex ms-2 flex-col items-start">
                                    <h4 className="text-md font-semibold">Elmer Laverty</h4>
                                    <p className="text-xs text-gray-400">Haha oh man</p>
                                </div>
                                <span className="h-[40px] text-xs text-gray-400 items-start flex justify-end flex-grow">
                                    12m
                                </span>
                            </div>
                        </div>


                        <div className="flex border-[#120039]/10 border-t items-center justify-center w-full py-3 ps-3 p-2">
                            <img src="../../../public/images/user-persona/frame 10.png" className='cursor-pointer w-[40px] h-[40px]' alt="avatar" />
                            <div className="flex ms-2 flex-col items-start">
                                <h4 className="text-md font-semibold">Elmer Laverty</h4>
                            </div>
                            <span className="text-xs text-gray-700 items-start flex justify-end flex-grow">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>

                            </span>
                        </div>
                    </div>
                </div>
                <div className="main mx-3 md:mx-4 lg:mx-5 pt-3 flex-1">
                    {<RenderUserInfo />}
                    <div className="flex flex-col items-start py-2 justify-start w-full">
                        <button type='button' className="pb-1.5 py-1 text-xs bg-blue-950 hover:bg-black text-white border rounded-full border-black px-3">
                            Figures
                        </button>
                        {<RenderReligiousPersons />}
                    </div>
                </div>
            </div >
        </>
    )
}

export default ProfileView
