import UserImage from '../../assets/users.png'
import { BackGround } from './style'

function TopBackGroud(){
    return(
        <BackGround>
            <img src={UserImage} alt='imagem-usuarios'/>
        </BackGround>
    )
}

export default TopBackGroud