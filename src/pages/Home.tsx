import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { SillyCard } from "@/components/silly-card";
import { SillyCarousel } from "@/components/silly-carousel";
import { FaBomb, FaLaugh, FaPoop, FaRocket, FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Home() {
  const [clickCount, setClickCount] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleSillyClick = () => {
    setClickCount((prev) => prev + 1);
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 1000);
  };

  const carouselItems = [
    <SillyCard key="1" title="Привет!">
      <Typography.P>
        Добро пожаловать на самый глупый сайт в мире! 
        Здесь нет ничего полезного, но зато очень весело! 🎉
      </Typography.P>
    </SillyCard>,
    <SillyCard key="2" title="Знаете что?">
      <Typography.P>
        Этот сайт настолько глупый, что даже кнопки здесь делают глупости! 
        Попробуйте нажать на одну из них! 🎈
      </Typography.P>
    </SillyCard>,
    <SillyCard key="3" title="Секрет!">
      <Typography.P>
        На самом деле этот сайт создан просто чтобы поднять вам настроение! 
        Улыбнитесь! 😊
      </Typography.P>
    </SillyCard>,
  ];

  return (
    <div className="container py-8 space-y-8">
      <div className="text-center space-y-4">
        <Typography.H1 className="animate-bounce">
          Самый Глупый Сайт в Мире!
        </Typography.H1>
        <Typography.Lead className="max-w-2xl mx-auto">
          Добро пожаловать в место, где логика отдыхает, а веселье правит!
        </Typography.Lead>
      </div>

      <SillyCarousel items={carouselItems} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SillyCard title="Кнопка глупости">
          <div className="space-y-4">
            <Typography.P>
              Эта кнопка абсолютно бесполезна, но очень весёлая!
            </Typography.P>
            <Button
              variant="outline"
              className="w-full"
              onClick={handleSillyClick}
            >
              {isSpinning ? (
                <FaSpinner className="mr-2 animate-spin" />
              ) : (
                <FaPoop className="mr-2" />
              )}
              Нажата {clickCount} раз
            </Button>
          </div>
        </SillyCard>

        <SillyCard title="Страница веселья">
          <div className="space-y-4">
            <Typography.P>
              Хотите ещё больше глупостей? Загляните на страницу веселья!
            </Typography.P>
            <Button variant="secondary" asChild className="w-full">
              <Link to="/fun">
                <FaLaugh className="mr-2" />
                Перейти к веселью
              </Link>
            </Button>
          </div>
        </SillyCard>

        <SillyCard title="ВАУ страница">
          <div className="space-y-4">
            <Typography.P>
              А здесь вас ждёт что-то совершенно невероятное!
            </Typography.P>
            <Button variant="default" asChild className="w-full">
              <Link to="/wow">
                <FaRocket className="mr-2" />
                Посмотреть ВАУ
              </Link>
            </Button>
          </div>
        </SillyCard>
      </div>

      <div className="text-center">
        <Button
          variant="outline"
          size="lg"
          className="animate-pulse hover:animate-none"
          onClick={() => alert("БУМ! 💥 Ничего не произошло!")}
        >
          <FaBomb className="mr-2" />
          Не нажимать!
        </Button>
      </div>
    </div>
  );
}