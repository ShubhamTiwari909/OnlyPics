"use client";

import { fetchImages, useStore } from "@/app/methods/methods";
import {links} from "../app/methods/data"
import {BsTwitter,BsInstagram} from "react-icons/bs"

function Footer() {
    const { setImages, setTitle } = useStore();
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div className="grid grid-cols-2 md:grid-cols-3 items-start gap-8 lg:gap-12">
              {links.map(link => {
                return (
                <div key={link.type}>
                    <p className="text-lg font-semibold mb-4 border-b border-b-white">{link.type}</p>
                    <ul className="flex flex-col gap-2">
                        {link.urls.map(url => {
                            return <button key={url} onClick={() => {
                                fetchImages(url, setImages)
                                setTitle(url)
                                scrollToTop()
                            }}>{url}</button>
                        })}
                    </ul>
                </div>
                )
              })}
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://twitter.com/Shubham94236326" target="_blank"><BsTwitter size="1.5rem" /></a>
                    <a href="https://www.instagram.com/supremacism__shubh/" target="_blank"><BsInstagram size="1.5rem" /></a>
                </div>
            </div>
            <div>
                <p>Copyright © 2023 - All right reserved by OnlyPics Industries Ltd</p>
            </div>
        </footer>
    )
}

export default Footer