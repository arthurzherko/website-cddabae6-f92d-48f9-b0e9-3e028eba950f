import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { SillyCard } from "@/components/silly-card";
import { useState } from "react";
import { FaDice, FaGhost, FaLaugh, FaQuestionCircle } from "react-icons/fa";

const SILLY_JOKES = [
  "Почему программисты не любят природу? Потому что там слишком много багов! 🐛",
  "Как называется группа из 8 хоббитов? Хоббайт! 🧙‍♂️",
  "Почему HTML не может быть президентом? Потому что у него слишком много тегов! 🏷️",
  "Что сказал CSS HTML? Ты такой не стильный! 💅",
  "Почему JavaScript такой грустный? Потому что у него нет класса! 😢",
];

const SILLY_FACTS = [
  "Бананы излучают антиматерию! (Это правда, гуглите!) 🍌",
  "Морские звёзды не имеют мозга! (Как некоторые мои знакомые) 🌟",
  "Фламинго могут есть только с наклонённой головой! 🦩",
  "Коровы не могут спускаться по лестнице! 🐄",
  "Утконосы светятся в ультрафиолете! ✨",
];

export function Fun() {
  const [currentJoke, setCurrentJoke] = useState("");
  const [currentFact, setCurrentFact] = useState("");
  const [isSpooky, setIsSpooky] = useState(false);

  const getRandomJoke = () => {
    const randomIndex = Math.floor(Math.random() * SILLY_JOKES.length);
    setCurrentJoke(SILLY_JOKES[randomIndex]);
  };

  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * SILLY_FACTS.length);
    setCurrentFact(SILLY_FACTS[randomIndex]);
  };

  return (
    <div className="container py-8 space-y-8">
      <div className="text-center space-y-4">
        <Typography.H1 className="animate-bounce">
          Страница Веселья!
        </Typography.H1>
        <Typography.Lead>
          Здесь собраны самые глупые шутки и факты!
        </Typography.Lead>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SillyCard title="Генератор глупых шуток">
          <div className="space-y-4">
            <Button
              variant="outline"
              className="w-full"
              onClick={getRandomJoke}
            >
              <FaLaugh className="mr-2" />
              Получить шутку
            </Button>
            {currentJoke && (
              <Typography.P className="animate-fade-in">
                {currentJoke}
              </Typography.P>
            )}
          </div>
        </SillyCard>

        <SillyCard title="Странные факты">
          <div className="space-y-4">
            <Button
              variant="outline"
              className="w-full"
              onClick={getRandomFact}
            >
              <FaQuestionCircle className="mr-2" />
              Узнать странный факт
            </Button>
            {currentFact && (
              <Typography.P className="animate-fade-in">
                {currentFact}
              </Typography.P>
            )}
          </div>
        </SillyCard>
      </div>

      <SillyCard
        title="Страшная кнопка"
        className={isSpooky ? "dark:bg-black bg-gray-100" : ""}
      >
        <div className="space-y-4 text-center">
          <Typography.P>
            Эта кнопка делает что-то очень странное...
          </Typography.P>
          <Button
            variant="outline"
            size="lg"
            className="animate-pulse hover:animate-none"
            onClick={() => setIsSpooky(!isSpooky)}
          >
            <FaGhost className="mr-2" />
            {isSpooky ? "Уууу! 👻" : "Нажми меня!"}
          </Button>
          {isSpooky && (
            <div className="animate-bounce">
              <Typography.P>
                👻 БУ! Я призрак этого сайта! 👻
              </Typography.P>
            </div>
          )}
        </div>
      </SillyCard>

      <div className="text-center">
        <Button
          variant="secondary"
          size="lg"
          onClick={() => {
            document.body.style.transform = `rotate(${
              Math.random() * 360
            }deg)`;
            setTimeout(() => {
              document.body.style.transform = "rotate(0deg)";
            }, 1000);
          }}
        >
          <FaDice className="mr-2" />
          Перевернуть страницу!
        </Button>
      </div>
    </div>
  );
}