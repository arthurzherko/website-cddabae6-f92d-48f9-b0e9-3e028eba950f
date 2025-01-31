import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { SillyCard } from "@/components/silly-card";
import { useState } from "react";
import {
  FaCat,
  FaDog,
  FaDragon,
  FaFish,
  FaHorse,
  FaOtter,
  FaRocket,
  FaSpider,
} from "react-icons/fa";

const ANIMALS = [
  { icon: FaCat, sound: "Мяу! 🐱" },
  { icon: FaDog, sound: "Гав! 🐶" },
  { icon: FaHorse, sound: "Иго-го! 🐴" },
  { icon: FaFish, sound: "Буль-буль! 🐠" },
  { icon: FaSpider, sound: "Шуршь-шуршь! 🕷️" },
  { icon: FaDragon, sound: "РРРР! 🐲" },
  { icon: FaOtter, sound: "Пи-пи! 🦦" },
];

export function Wow() {
  const [partyMode, setPartyMode] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState<number | null>(null);
  const [rocketPosition, setRocketPosition] = useState(0);

  const togglePartyMode = () => {
    setPartyMode(!partyMode);
    if (!partyMode) {
      document.body.classList.add("animate-rainbow");
    } else {
      document.body.classList.remove("animate-rainbow");
    }
  };

  return (
    <div className="container py-8 space-y-8">
      <div className="text-center space-y-4">
        <Typography.H1
          className={
            partyMode ? "animate-bounce text-rainbow" : "animate-bounce"
          }
        >
          ВАУ Страница!
        </Typography.H1>
        <Typography.Lead>
          Здесь происходят самые невероятные вещи!
        </Typography.Lead>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SillyCard title="Зоопарк звуков">
          <div className="grid grid-cols-3 gap-4">
            {ANIMALS.map((animal, index) => {
              const Icon = animal.icon;
              return (
                <Button
                  key={index}
                  variant="outline"
                  className={`aspect-square ${
                    selectedAnimal === index ? "animate-bounce" : ""
                  }`}
                  onClick={() => setSelectedAnimal(index)}
                >
                  <Icon className="size-6" />
                </Button>
              );
            })}
          </div>
          {selectedAnimal !== null && (
            <Typography.P className="text-center mt-4 animate-fade-in">
              {ANIMALS[selectedAnimal].sound}
            </Typography.P>
          )}
        </SillyCard>

        <SillyCard title="Ракета в космос">
          <div className="space-y-4">
            <div
              className="h-32 relative border rounded-lg"
              style={{
                background:
                  "linear-gradient(to bottom, #87CEEB 0%, #000000 100%)",
              }}
            >
              <FaRocket
                className="absolute text-accent transition-all duration-1000"
                style={{
                  fontSize: "2rem",
                  bottom: `${rocketPosition}%`,
                  left: "50%",
                  transform: "translateX(-50%) rotate(-45deg)",
                }}
              />
            </div>
            <Button
              variant="outline"
              className="w-full"
              onClick={() =>
                setRocketPosition((prev) =>
                  prev >= 100 ? 0 : prev + 20
                )
              }
            >
              Запустить ракету!
            </Button>
          </div>
        </SillyCard>

        <SillyCard title="Режим вечеринки">
          <div className="space-y-4 text-center">
            <Typography.P>
              {partyMode
                ? "УРА! ВЕЧЕРИНКА! 🎉"
                : "Нажми, чтобы начать вечеринку!"}
            </Typography.P>
            <Button
              variant="outline"
              className={`w-full ${
                partyMode ? "animate-rainbow" : ""
              }`}
              onClick={togglePartyMode}
            >
              {partyMode ? "Остановить" : "Начать"} вечеринку!
            </Button>
          </div>
        </SillyCard>
      </div>

      <style jsx global>{`
        @keyframes rainbow {
          0% { background-color: #ff0000; }
          17% { background-color: #ff8000; }
          33% { background-color: #ffff00; }
          50% { background-color: #00ff00; }
          67% { background-color: #0000ff; }
          84% { background-color: #8000ff; }
          100% { background-color: #ff0000; }
        }

        .animate-rainbow {
          animation: rainbow 5s linear infinite;
        }

        .text-rainbow {
          background: linear-gradient(
            to right,
            #ff0000,
            #ff8000,
            #ffff00,
            #00ff00,
            #0000ff,
            #8000ff
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: rainbow-text 5s linear infinite;
        }
      `}</style>
    </div>
  );
}