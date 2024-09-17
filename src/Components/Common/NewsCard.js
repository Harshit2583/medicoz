import image1 from "../../Images/NewsCards1.jpg";

const NewsCard = () => {
  return (
    <div className="card w-[20.625rem] shadow-lg space-y-4 p-2 transition-custom cursor-pointer rounded-lg">
      <div className="go-corner">
        <div className="go-arrow">→</div>
      </div>
      <img src={image1} alt="i" className="rounded-lg"></img>
      <div className="p-3 pt-2 space-y-2">
        <button className="py-2 px-4 bg-blue-600 text-white text-xs">
          22 Aug 2024
        </button>
        <h1 className="text-lg font-medium text-[#2C2D3F]">
          We have announced our new product
        </h1>
        <p className="font-medium text-sm text-[#757575] tracking-wide">
          Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt sed do incididunt sed.
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
