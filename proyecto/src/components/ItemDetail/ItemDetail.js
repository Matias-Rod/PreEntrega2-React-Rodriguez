import React from 'react';

const ItemDetail = ({item}) => {
  return (
    <div className='row justify-content-center py-5'>
        <div className='col-md-4 offset-md4 '>
        <img src={item.imagen} className='card-fluid w-75 m-auto' alt={item.nombre}/>
        <h2>{item.nombre}</h2>
        <h5>{item.descripcion}</h5>
        <p>$ {item.precio}</p>
        </div>
    </div>
  )
}

export default ItemDetail