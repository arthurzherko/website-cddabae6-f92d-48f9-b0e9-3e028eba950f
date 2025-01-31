import { Typography } from "@/components/ui/typography";
import { FaPoop } from "react-icons/fa";

export function SillyLoader() {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center gap-4">
      <FaPoop className="size-16 animate-bounce text-accent" />
      <Typography.Large className="animate-pulse">
        Загружаем глупости...
      </Typography.Large>
    </div>
  );
}