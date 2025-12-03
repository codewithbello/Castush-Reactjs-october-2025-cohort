import Avatar from "../assests/images/Avatar-Maker.png";
import CustomButton from "./CustomButton";

const Card = () => {
  return (
    <div
      className="bg-indigo-200 w-1/4 h-1/2 rounded-md shadow-lg 
    flex flex-col items-center justify-items-center gap-5"
    >
      <img src={Avatar} alt="avatar" className="w-1/3" />
      <h1 className="text-xl font-medium text-gray-500">Bello Saeed</h1>

      <ul className="flex gap-3">
        <li className="w-[24px] h-[24px] flex items-center justify-center">
          <a
            href="https://x.com/castush_int"
            className="hover:bg-yellow-500 w-full h-full rounded-full flex items-center justify-center"
          >
            <i class="bxl bx-twitter-x"></i>
          </a>
        </li>
        <li className="w-[24px] h-[24px] flex items-center justify-center">
          <a
            href="https://facebook.com/castsuh"
            className="hover:bg-yellow-500 w-full h-full rounded-full flex items-center justify-center"
          >
            <i class="bxl  bx-facebook-circle"></i>
          </a>
        </li>
      </ul>

      <CustomButton />
    </div>
  );
};

export default Card;
