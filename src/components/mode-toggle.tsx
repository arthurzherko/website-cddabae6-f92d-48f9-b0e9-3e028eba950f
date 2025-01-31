import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { FaSun, FaMoon } from "react-icons/fa";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="animate-bounce hover:animate-none"
    >
      {theme === "light" ? <FaMoon className="text-accent" /> : <FaSun className="text-accent" />}
    </Button>
  );
}