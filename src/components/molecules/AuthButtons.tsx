import Link from "next/link";

export const AuthButtons = ({ btn_1, btn_2, className }) => (
  <div
    className={`flex  sm:flex-row gap-2 sm:gap-4 font-GeistVF ${
      className || "flex-col"
    }`}
  >
    <Link
      className="relative py-2 px-8 text-white text-base font-bold nded-full overflow-hidden bg-primary rounded-[8px]  border-[2px] border-primary transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-main hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-white before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[8px] hover:before:left-0"
      href="/login"
    >
      {btn_1}
    </Link>

    <Link
      className="relative py-2 px-8 text-main text-base font-bold nded-full overflow-hidden bg-white rounded-[8px]  border-[2px] border-primary transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[8px] hover:before:left-0"
      href="/register"
    >
      {btn_2}
    </Link>
  </div>
);
