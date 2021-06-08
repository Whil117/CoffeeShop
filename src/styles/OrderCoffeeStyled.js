import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Card = styled.label`
      flex: 0 0 283px;
      padding: 10px;
      margin: 10px;
      border: none;
      background: #FFFFFF;
      box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      width: 283px;
      height: 289px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: black;
      ${({ active }) => active && css`
        color: white;
        background-color: #128756;

      ` }
      ${({ desactive }) => desactive && css`
         color: black;
         background: #FFFFFF;
      `}
      input{
          display: none;
      }
`
export const CardMain = styled.div`
      background-color: #F2F2F2;
scroll-behavior: smooth;
      display: flex;
      font-family: 'Quicksand', sans-serif;
`
export const Cards = styled.div`
      font-family: 'Quicksand', sans-serif;

      button{
            display: flex;
            align-items: center;
            justify-content: center;
            background: #128756;
            border-radius: 10px;
            padding: 10px;
            border: none;
            color: white;
            font-size: 24px;
      }
`
export const CardsSections = styled.div`
      display: flex;
      justify-content: center;
      flex-direction: column;
      flex-wrap: wrap;
      margin-top: 15px;
      margin-bottom: 15px;
      padding-left: 30px;
      padding-right: 30px;

`
export const CardsChild = styled.div`
      display: flex;
      flex-wrap: wrap;
      align-items:center;
      justify-content: center;
`
export const CardSlide = styled.div`
     width: 280px;
     display: flex;
     flex-direction: column;
     align-items:flex-start;
     padding: 10px;
     background-color: white;
     div{
         top: 15px;
         position:sticky;
     }
     h3{
         color:#128756;
         font-size: 24px;
     }
`
export const CardSlideAnclaMain = styled.div`
       display: flex;
       flex-direction: column;
       a{
           border-radius: 10px;
        color: black;
        text-decoration: none;
        font-size: 20px;
        padding: 10px;
       }
       a:active{
        color: white;
        background-color: #128756;
       }

`
export const CardOverflow = styled.div`
      display:flex;
      width: ${({ activeFlow }) => activeFlow === 'true' ? '950px' : 'auto'};
      overflow-x: ${({ activeWidth }) => activeWidth === 'true' ? 'auto' : 'none'};
`