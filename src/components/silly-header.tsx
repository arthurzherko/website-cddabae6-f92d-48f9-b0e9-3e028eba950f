import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { FaHome, FaPoop, FaRocket } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export function SillyHeader() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <nav className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <FaPoop className="size-8 text-accent animate-spin hover:animate-none" />
            <Typography.Large>Глупый Сайт</Typography.Large>
          </Link>
          <div className="flex gap-4">
            <Button
              variant={location.pathname === "/" ? "secondary" : "ghost"}
              asChild
            >
              <Link to="/">
                <FaHome />
                Главная
              </Link>
            </Button>
            <Button
              variant={location.pathname === "/fun" ? "secondary" : "ghost"}
              asChild
            >
              <Link to="/fun">
                <FaPoop />
                Веселье
              </Link>
            </Button>
            <Button
              variant={location.pathname === "/wow" ? "secondary" : "ghost"}
              asChild
            >
              <Link to="/wow">
                <FaRocket />
                Вау
              </Link>
            </Button>
          </div>
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
}