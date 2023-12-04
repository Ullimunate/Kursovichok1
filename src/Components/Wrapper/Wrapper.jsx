import Header from '../Header'
import Main from '../Main'
import * as S from './Wrapper.style'

function Wrapper(){
    return(
        <S.WrapperBox>
        <Header/>
        <Main/>
        </S.WrapperBox>
    )
}

export default Wrapper