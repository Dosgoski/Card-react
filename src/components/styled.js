import styled from "styled-components";

export const AppClass = styled.div`
  text-align: center;
  height: 100%;
`

export const Button = styled.button`
  margin:2px;
  cursor: pointer;
  font-weight: bold;
  background-color: #fff;
  color: #000;
  border: none;
  padding:0;
  outline: none;
  border-radius: 15px;
  &:hover {
    background-color: ##F0F3F4;
    box-shadow: 10px 5px 5px gray;
    border:-color: #aaaaaa;
    border-width: 1px;
    border-style: solid;
  }
  &:active {
    background-color: #fff;
  }
  @media(max-width: 600px){
    margin:3rem;
    height:auto
  }
`
export const CardBody = styled.div`
  display: flex;
  width: 40rem;
  height: 8rem;
  align- items: center;
  @media (max-width: 600px) {
    display:grid;
    grid-template-rows: repeat(2,1fr);
    flex-direction: column;
    min-width: 230px;
    width: auto;
    height: 40rem;
  }
    @media (max-width: 400px) {
    height: 80%;
  }

`
export const CardPhoto = styled.img`
    border-radius: 15px;
    height: 100%;
      @media(max-width:600px){
      width:100%
    }

`
export const CardText = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    margin-left: 5px;
        @media(max-width:600px){
        height:auto
    }
`
export const CardName = styled.h1`
    display:flex;
    grid-row: 1 / 2;
    grid-column: 1 / 4;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: medium;
    text-align:center;
    text-overflow: ellipsis;
    overflow: hidden;
    margin:5px;
    align-items: center;
    justify-content: center;
`
export const CardPrice = styled.h1`
    display:flex;
    grid-row: 1 / 2;
    grid-column: 4 / 5;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: large;
    text-align:center;
    text-overflow: ellipsis;
    overflow: hidden;
    margin:5px;
    align-items: center;
    justify-content: center;
`
export const CardDesc = styled.p`
    display:flex;
    grid-row: 2 / 3;
    grid-column: 1 / 5;
    font-size: small;
    font-family:HelveticaNeue,Helvetica Neue,helvetica,Sans-Serif;
    margin: 0;
    text-overflow: ellipsis;
    overflow-x: hidden;
    align-items: center;
`
export const ArrowSign = styled.h1`
    display:flex;
    grid-row: 4 / 5;
    grid-column: 3 / 5;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: medium;
    justify-content: center;
    align-items:center;
    margin:0;
`
export const CardAvailable = styled.h1`
    display:flex;
    grid-row: 3 / 4;
    grid-column: 1 / 3;
    color: lightgreen;
    font-size: medium;
    justify-content: flex-start;
    align-items:center;
    margin:0;
    `
export const CardUnavailable = styled.h1`
    display:flex;
    grid-row: 3 / 4;
    grid-column: 1 / 3;
    color: red;
    font-size: medium;
    justify-content: flex-start;
    align-items:center;
    margin:0;
    `
export const CardContainer = styled.div`
    padding-top:10px;
    background-color: yellow;
    text-align: center;
    margin:0;
    `
export const CardCategory = styled.h1`
    display:flex;
    grid-row: 3 / 4;
    grid-column: 3 / 5;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: medium;
    justify-content: center;
    align-items:center;
    margin:0;
    `


