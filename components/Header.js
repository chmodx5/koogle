import {
  XIcon,
  MicrophoneIcon,
  SearcIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <div
          onClick={() => router.push("/")}
          className=" cursor-pointer text-4xl font-bold mr-3"
        >
          <span className="text-blue-500">K</span>
          <span className="text-red-500">o</span>
          <span className="text-yellow-500">o</span>
          <span className="text-blue-500">g</span>
          <span className="text-green-500">l</span>
          <span className="text-red-500">e</span>
        </div>
        <form className=" flex border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 mr-5 flex-grow">
          <input
            type="text"
            className="flex-grow w-full focus:outline-none"
            ref={searchInputRef}
          />
          <XIcon
            className="h-7 sm:mr-3 text-grey-500 cursor-pointer transition duration-150 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          ></XIcon>
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 hidden sm:inline-flex text-blue-500 border-gray-300" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar
          className="ml-auto"
          url="https://source.unsplash.com/379VdcbeFaQ"
        />
      </div>
      {/* header options */}
      <HeaderOptions />
    </header>
  );
}

export default Header;
