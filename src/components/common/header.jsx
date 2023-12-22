import ChevronLeftIcon from "../icons/chevronLeftIcon";
import MenuIcon from "../icons/menuIcon";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white">
      <button className="flex items-center text-lg font-bold">
        <ChevronLeftIcon className="w-6 h-6 mr-2" />
        1:1 문의하기
      </button>
      <button className="p-2">
        <MenuIcon className="w-6 h-6" />
      </button>
    </header>
  );
}
