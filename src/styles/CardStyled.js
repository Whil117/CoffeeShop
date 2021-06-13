import styled from "@emotion/styled";

export const CardOrder = styled.div`
       display: flex;
       width: 600px;
       background-color: white;
       border-radius: 10px;
       box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
       button{
              background-color: red;
              align-items: flex-start;
              width: 45px;
              height: 45px;
       }
       button:active{
              background-color:maroon;
       }
`
export const CardInfo = styled.div`
       width: 317px;
       padding-left: 15px;
       h3{
           font-size: 24px;
           color:#B46912;
       }
`