import { Typography } from "@/components/ui/typography";
import { FaHeart, FaPoop } from "react-icons/fa";

export function SillyFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <FaPoop className="size-8 animate-spin text-accent" />
            <Typography.Large>Глупый Сайт</Typography.Large>
          </div>
          <Typography.Muted className="flex items-center gap-2">
            Сделано с
            <FaHeart className="text-destructive animate-pulse" />
            и кучей глупостей
          </Typography.Muted>
        </div>
      </div>
    </footer>
  );
}