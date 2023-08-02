"use client";

import { fetchImages, useStore } from '@/app/methods/methods';
import { useState } from 'react'
import { useDisclosure } from '@mantine/hooks';
import { FiSearch } from "react-icons/fi"
import { PiHamburger } from "react-icons/pi"

function Navbar() {

    const [query, setQuery] = useState("");
    const { setImages, setTitle } = useStore();

    const [opened, handlers] = useDisclosure(false);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };
    return (
        <div className={`navbar flex-col md:flex-row ${opened ? "h-44" : "h-20"} md:h-20 bg-base-100 relative`}>
            <div className="flex w-full justify-between">
                <a className="btn btn-ghost normal-case text-xl">OnlyPics</a>
                <div>
                    <button className='btn btn-sm btn-circle btn-outline' onClick={() => handlers.toggle()}>
                        <FiSearch />
                    </button>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle btn-lg avatar">
                            <PiHamburger />
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 absolute top-24 md:top-4 md:right-32">
                <div className={`gap-3 items-center ${opened ? "flex" : "hidden"}`}>
                    <input type="text" placeholder="Search" value={query}
                        onChange={handleInputChange} className="input input-bordered md:w-auto" />
                    <button className='btn btn-primary' onClick={() => {
                        fetchImages(query, setImages)
                        setTitle(query)
                    }}>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar