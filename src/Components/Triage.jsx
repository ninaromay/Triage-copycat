import { Wrapper, Text, Title, Logo, Img, ButtonA, GridWrapper, Card } from "./Triage.styled"
import { useContext } from 'react'
import { GlobalContext } from "../Global.context";

export const Triage = () =>{
    let { datos, setDatos } = useContext(GlobalContext);
    let { modules, cards, cards2 } = datos;
    const title = 'Praise for Triage 1'

    return(
        <div className="Triage">
            {
                modules.map( mod =>
                    <Wrapper key={mod.id} color={mod.color} 
                    className=''>
                        <Wrapper className={`Module ${mod.row && 'Row'} ${mod.smaller && 'Small'}`}>
                            <Wrapper className={`Text-wrapper ${mod.smaller &&'Smaller'} ${mod.smaller && !mod.row && 'Small-row'} ${mod.inv && 'Black'}`} >
                                <Logo className={`${mod.smaller && 'Smaller'}`} src={mod.img.logo} />
                                <Title className={`${mod.smaller && 'Smaller'}`}>
                                    { mod.text.title }
                                </Title>
                                <Text className={`${mod.smaller && mod.row && 'Smaller'} ${mod.smaller && !mod.row && 'Row'}`}>
                                    { mod.text.content }
                                </Text>
                                    <ButtonA> 
                                        <Img src={ mod.img.apple } className="Apple-img"/> 
                                    </ButtonA>
                            </Wrapper>
                            <Wrapper 
                            className={`Img-wrapper ${mod.smaller && 'Smaller'} ${mod.smaller && !mod.row && 'Small-row'}`}>
                                <Img src={mod.img.phone} 
                                className={`${mod.margin_up && 'Margin-top'} ${mod.margin && 'Margin'}`}/>
                            </Wrapper>
                        </Wrapper>
                    </Wrapper>
                )
            }
            <Wrapper color='rgba(242,242,242)'>
                <GridWrapper>
                    {
                        cards.map(card => 
                            <Card key={card.id} color={card.color}>
                                <Logo className="Smaller" src={card.svg}/>
                                <Text padding={card.padding} className={`Card-text ${card.inv && 'Inv'}`}>{card.text}</Text>
                            </Card>
                        )
                    }
                </GridWrapper>
            </Wrapper>
            <Wrapper>
                <Title>{title}</Title>
                <GridWrapper>
                    {
                        cards2.map(card => 
                            <Card key={card.id} color='rgba(0,0,0,0.05)' className="Cards2">
                            <Text padding={card.padding} className='Inv Cards2-text'>
                                {card.text}
                            </Text>
                            <Wrapper>
                                <Logo margin={card.margin}  className="Logo" src={card.logo}/>
                            </Wrapper>
                        </Card>   
                        )
                    }
                </GridWrapper>
            </Wrapper>
        </div>
    )
}

