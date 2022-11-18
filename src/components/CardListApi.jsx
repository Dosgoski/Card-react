import React, { useState, useEffect } from 'react';
import {Card} from './Card'
import { CardContainer,Button,CardAvailable,CardUnavailable } from './styled';


export function CardListApi() {

  const url = 'https://jsonplaceholder.typicode.com/posts'
  const [todos, setTodos] = useState([]);
  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    console.log(responseJSON);
    setTodos(responseJSON);
  }
  useEffect(() => {
    fetchApi()
  }, [])
  // const [disponible, setDisponible] = useState(Boolean);
  // setDisponible(true)
  return (
    <CardContainer>
      {/* {disponible ? <CardUnavailable>&#9677; Comida Disponible</CardUnavailable> : <CardAvailable>&#9677; Comida No Disponible</CardAvailable> } */}
      {!todos ? 'cargando...' : todos.map((todo, index) => {
        return (
          <div key={index}>
            <Button ><Card name={todo.title} price={todo.id} desc={todo.body} category={ todo.id } /></Button>
          </div>
        )
      })}
    </CardContainer >

  );

}

