import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    background-color: ${({color})=>color};
    font-family: 'Open Sans', sans-serif;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    
    &.Module{
        /* background-color: blue; */
        max-width: 64rem;

        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-flow: row nowrap;
        
        overflow: hidden;

        margin-top: 3em;

        &.Row{
            flex-flow: row-reverse;
        }

        &.Small{
            align-items: flex-start;
            margin-top: 0;          
        }        
    }  
    
    &.Text-wrapper{
        /* background-color: purple; */
        color:white;

        align-items: flex-start;
        justify-content: flex-start;
        flex-flow: column;
        margin: 0 7em 0 0;
        padding: 1em 1em 0 0;

        &.Smaller{
            margin: 3em 0 0 7em;
            padding: 3em 1em 2em;
        }

        &.Small-row{
            margin: 3em 7em 0 0;
            padding: 0 0 3em;

            /* background-color: black; */
        }

        &.Black{
            color: black;
        }
        
    }
    
    &.Img-wrapper{
        /* background-color: purple; */
        padding: 0;
        margin: 3em 0 0 7em;

        &.Smaller{
            margin: 0 7em 0 0;
        }

        &.Small-row{
            margin: 0 0 0 7em;
            /* background-color: black; */
        }
    }
    
` 
export const Text = styled.p`
    font-weight: 300;
    font-size: 1.35rem;
    line-height: 2rem;

    margin: 0 0 2rem 0;

    &.Smaller{
        padding: 0 6rem 0 0;
        font-size: 1.35rem;
    }

    &.Row{
        padding-right: 0;
        font-size: 1.35rem;
    }

    &.Card-text{
        font-size: 1.5rem;
        font-weight: 600;
        padding-right: ${({padding})=>padding};
    }

    &.Cards2-text{
        font-size: 1.25rem;
        margin: 0;
    }

    &.Inv{
        color: black;
    }

`
export const Title = styled.h3`
    font-weight: 600;
    font-size: 2.8rem;
    line-height: 3rem;
    
    margin: 1.5rem 0 1rem 0;

    &.Smaller{
        font-size: 1.8rem;
        margin: 0;
    }
`
export const Img = styled.img`
    max-width: 100%;
    height: auto;
    padding: 0;

    &.Margin{
        margin-bottom: 7rem;
    }
    &.Margin-top{
        margin-top: 7rem;
    }

    &.Apple-img{
        /* background-color: white; */
    }
`
export const Logo = styled.img`
    width: 5rem;
    min-height: 5rem;
    margin-bottom: 0.2em;

    &.Smaller{
        width: 3rem;
        min-height: 3em;
        margin: 1em 0;
    }

    &.Logo{
        width: 100%;
        min-height: 2em;
        margin: ${({margin})=>margin};
    }
`

export const ButtonA = styled.a`
    margin-top: -0.9em;
`

export const GridWrapper = styled.div`
    max-width: 64rem;
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 3rem 2rem;    
`
export const Card = styled.div`
    background-color: ${({color}) => color};
    color: white;
    border-radius: 0.75rem;
    padding: 2rem 2rem 0 2rem;

    &.Cards2{
        font-size: 1.25rem;
        line-height: 1.75rem;

        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-flow: column;
        padding: 2rem;
    }

`