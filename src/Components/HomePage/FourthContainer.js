import NewsCard from "../Common/NewsCard";
import lang from "../../Utils/languageConstants";
import { useSelector } from "react-redux";


const FourthContainer = () => {
  const langKey = useSelector((store) => store.config.lang); 
  return (
    <div>
      <h1 className="text-center text-4xl font-medium text-[#2C2D3F] mb-1 block">
         {lang[langKey].keepup}
        {/* Keep Up With Our Most Recent */}
      </h1>
      <h1 className="text-center text-4xl font-medium text-[#2C2D3F] mb-4">
      {lang[langKey].medicalnews}
        {/* Medical News */}
      </h1>
      <hr className="mx-auto bg-[#2235a2] h-[0.2rem] border-0 w-[23%] mb-10" />
      <div className="flex flex-wrap justify-around mb-20 mx-10">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
};

export default FourthContainer;
