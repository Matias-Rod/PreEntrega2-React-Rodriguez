import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({item}) => {
  return (
    <Link to={'/item/' + item.ID} className='text-decoration-none'>
    <div className='container'>
        <div className='card border border-0'>
            <img src={item.imagen} className='card image-top' alt={item.nombre}/>
            <div className='card-body tect-center'>
                <p className='card-text'>{item.nombre} - ${item.precio}</p>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default Item