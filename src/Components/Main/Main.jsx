import * as S from "./Main.style";
import logoImg from "../Assets/img/sitesee.svg";
import NewsCard from "../Additional/NewsCard";

const News = [
  {
    heading: "Новость 1",
    text: "Туда сюда сюда туда короче там это самое в обем орно это туда ",
    img: logoImg,
  },
  {
    heading: "Новость 2",
    text: "Туда сюда сюда туда короче там это самое в обем орно это туда ",
    img: logoImg,
  },
];

function Main() {
  return (
    <>
      <S.CenterBlock>
        <S.CenterBlockSlogan>Тут будет слоган организации</S.CenterBlockSlogan>
        <S.NewsBlock>
          <S.NewsHeading>Недавние события</S.NewsHeading>
          <S.NewsBox>
            {News.map((el) => (
              <NewsCard heading={el.heading} text={el.text} img={el.img} />
            ))}
          </S.NewsBox>
        </S.NewsBlock>
      </S.CenterBlock>
    </>
  );
}

export default Main;
