import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled"
import { Container } from "./styles/Container.styled"
import React from 'react';
import { Flex } from "./styles/Flex.styled"
import { Button } from "./styles/Button.styled"
import { Input } from "./styles/input.styled"

import { useInput } from "./Context";




export default function Header () {
    const { setInput } = useInput()
    
    return(
        <StyledHeader >
            
            <Container>
            <Nav> 
                <Logo src='./images/logo.png' alt='' />
                <Button>Se Cadastre</Button>
            </Nav>
            <Flex>
                <div>
                    <h1 color='#fff'>
                        Busque um Repositório!
                    </h1>
                    

                    <Input type="text" bg='$f00fff' onChange={(e) => setInput(e.target.value)} color='#fff' placeholder="node..."></Input>
                </div>

                <Image src='./images/illustration-mockups.svg' alt=''>

                </Image>
            </Flex>
            </Container>
        </StyledHeader>
    )
}