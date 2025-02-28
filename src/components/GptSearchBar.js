import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {

  const langChange = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[8%] flex justify-center">
      <form className="w-1/2 bg-white grid grid-cols-12 rounded-3xl">
        <input
          className="p-4 m-4 col-span-9 rounded-xl border-2 border-solid border-black"
          type="text"
          placeholder={lang[langChange].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 col-span-3 m-4 bg-purple-800 text-white font-bold rounded-xl">
          {lang[langChange].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
