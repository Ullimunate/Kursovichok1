import * as S from './NewsCard.style'

function NewsCard(props){
    return(
        <S.Card>
        <S.NewsImg src={props.img}/>
        <S.NewsBox>
            <S.NewsHeading>{props.heading}</S.NewsHeading>
            <S.NewsText>{props.text}</S.NewsText>
            <S.ReadMore>Читать далее</S.ReadMore>
        </S.NewsBox>
        </S.Card>
    )
}

export default NewsCard