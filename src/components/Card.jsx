import React from 'react'
import foodphoto from './img/hamburguesa-vegetariana-1-500x500.jpg'
import { CardBody, CardPhoto, CardText, CardName, CardPrice, CardDesc,ArrowSign, CardAvailable, CardUnavailable, CardCategory} from './styled'

export const Card =({name,price,desc,category,disp})=> {
  return (
    <CardBody>
      <CardPhoto src={foodphoto} />
      <CardText>
        <CardName>{ name }</CardName>
        <CardPrice>${ price }</CardPrice>
        <CardDesc>{desc}</CardDesc>
        {/* <CardUnavailable>&#9677; Comida No Disponible</CardUnavailable> */}
        <CardCategory>Categoria: {category }</CardCategory>
        <ArrowSign>➤ Añadir al carrito ➤</ArrowSign>

      </CardText>
    </CardBody>
  );
}
