import { Card, Carousel, Rate } from "antd";
import React, { useEffect, useState } from "react";
import andrew from "../../../andrew.gif";
import useScreenWidth from "src/Hooks/useScreenSize";

function getRandomArbitrary(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

export const Andrew = () => {
  const reviews = [
    {
      review: "Я вчера ложкой супа не попал себе в рот, поэтому только 4",
      stars: 4,
    },
    {
      review: "Не работает",
      stars: 1,
    },
    {
      review:
        "Почему вы удалили мой отзыв? Тем что вы удаляете сообщения, вы наносите непоправимый репутационный урон своей компании и мотивируете писать о вас на площадках где комментарии вы удалить не можете и я сделаю это сегодняже",
      stars: 1,
    },
    {
      review:
        "Разработчики вы совсем опупели там чтоли! Без предупреждения с обновлением убрали кнопку 'Отменить пары'",
      stars: 3,
    },
    {
      review:
        "Ставлю 4 звезды потому что никак не могу попасть пальцем по пятёрке",
      stars: 3,
    },
    {
      review:
        "Я не понимаю, у меня пышет не достаточно памяти пожалуйста исправьте",
      stars: 5,
    },
    {
      review: "На самом деле я не Андрей, это ложь",
      stars: 5,
    },
  ];
  const [index] = useState(getRandomArbitrary(0, 6));

  const widthSize = useScreenWidth();
  const cutWidth = 1000;
  const mobileWidth = 450;

  if (reviews[index].review)
    return (
      <div>
        <h1
          style={{
            marginTop: 25,
            marginLeft: widthSize < cutWidth ? 15 : 0,
          }}
        >
          Отзывы
        </h1>
        <Card
          style={{
            marginTop: 15,
            marginRight: widthSize < mobileWidth ? 16 : 0,
            marginLeft: widthSize < mobileWidth ? 16 : 0,
            //  position: "relative",
            boxShadow: "rgba(0, 0, 0, 0.5) 0px 4px 10px",
          }}
          bodyStyle={{ display: "flex", alignItems: "center" }}
          size="small"
          hoverable
        >
          <img
            src={andrew}
            alt={""}
            style={{ borderRadius: "50%", width: 100, marginRight: 20 }}
          />
          <div>
            <h1>Андрей</h1>
            <h2 style={{ fontWeight: 500, marginTop: 5 }}>
              {reviews[index].review}
            </h2>
            <Rate disabled defaultValue={5} value={reviews[index].stars} />
          </div>
        </Card>
      </div>
    );
  else return <></>;
};
