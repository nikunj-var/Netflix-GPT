const VideoTitle = ({ original_title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12 absolute bg-gradient-to-r from-black">
      <h1 className=" font-extrabold text-6xl text-white">{original_title}</h1>
      <p className="py-6 text-lg font-bold w-1/4 text-white">{overview}</p>
      <div>
        <button className="bg-white text-white text-black p-4 px-12 text-xl bg-opacity-50 rounded hover:bg-opacity-90">▶️ Play</button>
        <button className="bg-white mx-2 bg-white-600 p-4 px-12 text-xl bg-opacity-50 rounded text-white">More Info</button>
      </div>
    </div>
  );
};
export default VideoTitle;
