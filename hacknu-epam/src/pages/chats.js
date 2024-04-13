import MainContainer from "@/components/MainContainer";
import React, { useState } from "react";
import "../app/globals.css";
import bg from "../../public/images/greenBg.svg";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import WelcomeTry from "@/components/WelcomeTry";
import RecentlyAdded from "@/components/RecentlyAdded";
import FollowAlong from "@/components/FollowAlong";
import Footer from "@/components/Footer";
import CreatingReceipt from "@/components/modal/CreatingReceipt";
import MemoryGame from "@/components/MemoryGame";
import DoYouWannaPlay from "@/components/modal/DoYouWannaPlay";
import blueblock from "../../public/images/blueblock.png";
import Talker from "@/components/Talker";
import aldar from "../../public/images/aldar.png";

const Chats = () => {
    const characters = [
        "Алдар көсе",
        "президент Назарбаев",
        "певец Қайрат Нұртас",
        "президент Тоқаев",
        "Қабанбай батыр",
        "певец Молданазар",
    ];

    return (
        <div className="h-[113px] w-[full] relative">
            <Image src={blueblock} className="w-full h-[113px]" />
            <div className="text-white text-2xl absolute top-1/2 ml-10  text-bold">
                Кіммен сөйлескіңіз келеді?
            </div>
            <ul className="flex flex-wrap w-full justify-between px-5">
                {characters.map((character) => (
                    <li key={character}>
                        <Link href={`/chats/${encodeURIComponent(character)}`}>
                            <Talker image={aldar} name={"Алдар Көсе"} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Chats;
