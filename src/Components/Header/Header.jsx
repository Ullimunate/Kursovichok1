import logoImg from "../Assets/img/sitesee.svg";
import * as S from "./Header.style";
import { Link } from "react-router-dom";

function Header() {
  return (
    <S.HeaderBox>
      <S.HeaderLogo src={logoImg} />
      <S.HeaderMenu>
        <Link to='/'>
        <S.MenuItem>
            Главная
        </S.MenuItem>
        </Link>
        <S.MenuItem>
            Информация
        </S.MenuItem>
        <S.MenuItem>
            Мероприятия
        </S.MenuItem>
        <S.MenuItem>
            Контакты
        </S.MenuItem>
      </S.HeaderMenu>
    </S.HeaderBox>
  );
}

export default Header;
