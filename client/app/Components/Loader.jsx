import './Loader.css'
const Loader = () => {
  return (
    <div
      className={"fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10"}
      id="bg-blur"
    >
      <div className="bg-transparent rounded-lg w-[15rem] h-[15rem] flex justify-center items-center">
          <div className="w-[10rem] h-[10rem] border-t-[8px] border-l-[8px] border-orange-500 rounded-full absolute loading-orange"></div>
          <div className="w-[10rem] h-[10rem] border-r-[8px] border-b-[8px] border-orange-500 rounded-full absolute loading-blue"></div>
          <div className="w-[10rem] h-[10rem] border-t-[8px] border-r-[8px] border-orange-500 rounded-full absolute loading-green"></div>
          <div className="w-[10rem] h-[10rem] absolute flex justify-center items-center font-bold text-5xl font:extra-bold text-orange-500">
          ॐ
          </div>
      </div>
    </div>
  );
};

export default Loader;