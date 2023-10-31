import React from 'react';

const ItemDetail = ({item}) => {
  return (
    <div className='row'>
        <div className='col-md-4 offset-md4'>
        <img src={item.imagen} className='card-fluid' alt={item.nombre}/>
        <h2>{item.nombre}</h2>
        <p>{item.descripcion}</p>
        <p>$ {item.precio}</p>
        </div>
    </div>
  )
}

export default ItemDetail