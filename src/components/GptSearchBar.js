import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";

const GptSearchBar=() =>{
    const langKey=useSelector(store => store.config.lang);
    return (
        <div className="pt-[10%] flex justify-center">
         <form className="bg-black w-1/2 grid grid-cols-12">
            <input  type="text" className="col-span-9 p-4 m-4 text-gray-900 font-bold " placeholder={lang[langKey].gptSearchPlaceholder} />
            <button className="col-span-3 bg-red-700 py-2 px-4 m-4 text-white font-bold rounded-lg ">{lang[langKey].search}</button>
         </form>
        </div>
    );
}
export default GptSearchBar;