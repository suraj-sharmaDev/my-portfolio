export default function Navigation() {
  return (
    <header className="header">
      <ul className="w-full flex items-center justify-between lg:justify-between p-2">
        <li className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md cursor-pointer">
          <a href="#home">SS</a>
        </li>
        <ul className="flex gap-8 font-medium lg:text-lg">
          <li className="cursor-pointer">
            <a
              href="#about"
              className="text-slate-700 hover:underline transition-all duration-500"
            >
              About
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              href="#projects"
              className="text-slate-700 hover:underline transition-all duration-500"
            >
              Projects
            </a>
          </li>
        </ul>
      </ul>
    </header>
  );
}
