import heart from "../../Images/blue-heart.png";

const ServicesCard = () => {
  return (
    <div className="w-[20.625rem] h-40 flex gap-5">
      <img src={heart} alt="heart" className="w-10 h-10"></img>
      <div className="mt-1">
        <h1 className="text-2xl font-medium mb-3 text-[#2C2D3F] hover:text-[#0079FE] cursor-pointer">
          Heart Disease
        </h1>
        <p className="font-medium text-sm text-[#757575] tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus
          dictum eros ut imperdiet. lorem ipsum dolor sit amet, ekut donec
        </p>
      </div>
    </div>
  );
};

export default ServicesCard;
