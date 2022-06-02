import SocialIcons from "./SocialIcons";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";


export default function Footer() {
    return (
        <StyledFooter>
            <Container>
                <img src="./images/logo_white.svg" alt="" />

                <Flex>
          <ul>
            <li>
              Projeto criado por Carlos Frederyco.
              Programando em JavaScript com
              StyledComponents em React.js.
              Utilizando o Visual Studio Code.
            </li>
            <li>+55 (17) 99761-2226</li>
            <li>philadelphoescola@gmail.com</li>
          </ul>
          <ul>
            <li>Sobre Nós</li>
            <li>O Que Nós Fazemos</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Carreira</li>
            <li>Blog</li>
            <li>Nos Contate</li>
          </ul>

          <SocialIcons />
        </Flex>

        <p>&copy; 2022 Huddle. Todos direitos reservados</p>

            </Container>
        </StyledFooter>
    )
}