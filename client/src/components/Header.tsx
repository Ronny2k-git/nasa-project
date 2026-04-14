import { CheckCircle, History, Timer } from "lucide-react";
import { useRef, useState } from "react";

const headerNavigation = [
  { nav: "/", icon: CheckCircle, label: "Launch" },
  { nav: "/upcoming", icon: Timer, label: "Upcoming" },
  { nav: "/history", icon: History, label: "History" },
];

export function Header() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const clickSound = useRef(new Audio("/sound/click.mp3"));

  // Function used to animate nav and play a sound when clicked.
  const handleClick = (index: number, nav: string, e: React.MouseEvent) => {
    e.preventDefault();

    setActiveIndex(index);

    clickSound.current.currentTime = 0;
    clickSound.current.play();

    setTimeout(() => {
      setActiveIndex(null);
      window.location.href = nav;
    }, 200);
  };

  return (
    <header
      className="w-full h-20 flex items-center gap-4 justify-center border-b-5 border-solid border-cyber-cyan
   backdrop-blur-[1px] bg-header-bg"
    >
      <img src={"/favicon.png"} className="size-12" />
      <span className="font-semibold text-cyber-cyan-text text-3xl">
        NASA Mission Control
      </span>

      <nav className="flex h-full text-cyan-text-light ">
        {headerNavigation.map((item, i) => {
          const isActive = activeIndex === i;

          return (
            <a
              key={i}
              href={item.nav}
              onClick={(e) => handleClick(i, item.nav, e)}
              className={`flex items-center gap-2 text-xl px-4 ${isActive ? "bg-cyan-400/95" : "bg-transparent"}`}
            >
              {item.icon && <item.icon className="w-5 h-5 mt-0.5" />}
              {item.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
