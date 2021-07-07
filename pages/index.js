import Head from "next/head";
import Avatar from "../components/Avatar";
import {
  ViewGridIcon,
  MicrophoneIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/dist/client/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    console.log(term);
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <div className="flex flex-col justify-center h-screen">
      <Head>
        <title>Koogle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-500 capitalize">
        {/* left */}
        {/* <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
          <p className="link">more</p>
        </div> */}
        {/* right */}
        <div className="flex space-x-4 items-center">
          {/* <p className="link">Gmail</p>
          <p className="link">Images</p> */}

          {/* icon */}
          {/* <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          {/* avatar */}
          {/* <Avatar url="https://source.unsplash.com/379VdcbeFaQ"></Avatar> */}
        </div>
      </header>
      {/* body */}
      <form className="flex flex-col items-center mt-44 flex-grow ">
        {/* <Image
            src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            height={100}
            width={300}
          /> */}
        <div className="text-8xl font-bold">
          <span className="text-blue-500">K</span>
          <span className="text-red-500">o</span>
          <span className="text-yellow-500">o</span>
          <span className="text-blue-500">g</span>
          <span className="text-green-500">l</span>
          <span className="text-red-500">e</span>
        </div>
        <div className="flex border border-gray-200 w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full  px-5 py-3 sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="focus:outline-none flex-grow"
          />
          <MicrophoneIcon className="h-5 mr-3 text-gray-500" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">
            Koogle Search
          </button>
          <button onClick={search} className="btn">
            I'm feeling lucky
          </button>
        </div>
      </form>
      {/* footer */}
      <Footer />
    </div>
  );
}
