import { useRef } from "react"
import { Title, Container, TopBackGround, Form, ContainerInputs, Input, Button, InputLabel } from "./styles"
import UsersImage from '../../assets/users.png'
import api from "../../services/api"



function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()


  async function registerNewUser(){
    const data = await api.post('/usuarios', {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value
    })

    console.log(data)
  }

  return (  
    <Container>
      <TopBackGround>
        <img src={UsersImage} alt="Imagem-usuarios"/>
      </TopBackGround>          
    
    
      <Form>
        <Title>Cadastrar Usuários</Title>


        <ContainerInputs>
            <div>
              <InputLabel>
                Nome<span> *</span>
              </InputLabel>
            
              <Input type="text" placeholder="Nome do usuário" ref={inputName}/>
            </div>
              
            <div>
              <InputLabel>
                Nome<span> *</span>
              </InputLabel>
              
              <Input type="number" placeholder="Idade do usuário" ref={inputAge}/>
            </div>
        </ContainerInputs>

          <div style={{width: '100%'}}>
            <InputLabel>
                E-mail<span> *</span>
            </InputLabel>
            <Input type="email" placeholder="E-mail do usuário" ref={inputEmail}/>
          </div>

        <Button type="button" onClick={registerNewUser}>Cadastrar Usuários</Button>
        
      </Form>
    
    
    
    
    
    </Container>
  )
}

export default Home
