import { CDN_IMG_URL } from "../utils/constant";

const MovieCard=({posterPath}) =>{
    return (
        <div className="w-36 pr-4">
          <img alt="MovieCard" src={CDN_IMG_URL+posterPath}/>
        </div>
    );
}

export default  MovieCard;