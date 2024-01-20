const VideoTitle = ({ original_title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className=" font-extrabold text-6xl">{original_title}</h1>
      <p className="py-6 text-lg font-bold w-1/4">{overview}</p>
      <div>
        <button className="bg-gray-600 text-white p-4 px-12 text-xl bg-opacity-50 rounded">▶️ Play</button>
        <button className=" mx-2 bg-white-600 text-black p-4 px-12 text-xl bg-opacity-50 rounded">More Info</button>
      </div>
    </div>
  );
};
export default VideoTitle;
