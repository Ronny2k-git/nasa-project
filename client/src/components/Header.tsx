import { History, Rocket, Timer } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useClickFeedback } from "../hooks";
import { Clock } from "./Clock";

const headerNavigation = [
  { nav: "/", icon: Rocket, label: "Launch" },
  { nav: "/upcoming", icon: Timer, label: "Upcoming" },
  { nav: "/history", icon: History, label: "History" },
];

export function Header() {
  const { triggerIndex } = useClickFeedback({
    audioPath: "/sound/click.mp3",
    duration: 100,
  });
  const location = useLocation();

  // Animate navigation and play a sound when clicked.
  const handleClick = (index: number, nav: string, e: React.MouseEvent) => {
    e.preventDefault();

    triggerIndex(index);

    setTimeout(() => {
      window.location.href = nav;
    }, 100);
  };

  return (
    <header
      className="flex md:justify-between items-center max-md:flex-col h-44 md:h-20 w-full max-md:py-2 
       border-b border-bg-border px-4 gap-4"
    >
      {/* Content */}
      <div className="flex h-full items-center w-full max-md:flex-col max-md:gap-4">
        <div className="flex items-center gap-4 h-full">
          <img src={"/favicon.png"} className="size-12" alt="website-logo" />

          <div className="h-full flex flex-col justify-center leading-8 pr-4 border-r-2 border-bg-border ">
            <span className="text-cyber-cyan-text text-3xl font-heading font-extrabold">
              NASA
            </span>
            <span className="text-xs text-cyan-muted uppercase font-semibold whitespace-nowrap">
              Mission Control
            </span>
          </div>
        </div>

        <nav className="flex h-full justify-center font-semi text-cyan-muted">
          {headerNavigation.map((item, i) => {
            const currentActiveNav = location.pathname === item.nav;

            return (
              <div
                key={`nav_bar_${i}`}
                className="flex gap-2 text-xs uppercase font-semibold font-heading hover:text-cyber-cyan-text"
              >
                <a
                  href={item.nav}
                  aria-label="website-navigation"
                  onClick={(e) => handleClick(i, item.nav, e)}
                  className={`flex items-center justify-center gap-2 max-md:px-2 md:w-[8rem]
                ${currentActiveNav && "bg-cyan-950/35 border-b-2 border-b-cyber-cyan-text text-cyber-cyan-text"}`}
                >
                  {item.icon && <item.icon className="w-5 h-5" />}
                  {item.label}
                </a>
              </div>
            );
          })}
        </nav>
      </div>

      <div className="flex items-center gap-4 lg:gap-6 text-cyan-muted whitespace-nowrap">
        {/* System status */}
        <div className="flex flex-col text-xs">
          <span className="uppercase">system</span>
          <p className="flex items-center gap-1 text-cyber-cyan-text font-semibold">
            <span className="animate-pulse text-green-600">●</span> Nominal
          </p>
        </div>

        {/* Time */}
        <div className="flex flex-col text-xs ">
          <span className="uppercase">UTC</span>

          <Clock />
        </div>
      </div>
    </header>
  );
}
