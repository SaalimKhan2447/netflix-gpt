const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-20  absolute text-white bg-gradient-to-r from-black ">
      <h1 className="font-bold text-6xl py-2">{title}</h1>
      <p className="font-lg w-1/4 ">{overview}</p>
      <div className="py-2">
        <button className="bg-white text-black text-lg py-2 px-12 rounded-lg ">
          Play
        </button>
        <button className="m-2 bg-gray-500 text-white text-lg py-2 px-12 rounded-lg bg-opacity-50">
          <i class="fa-light fa-play"></i>MoreInfo
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
