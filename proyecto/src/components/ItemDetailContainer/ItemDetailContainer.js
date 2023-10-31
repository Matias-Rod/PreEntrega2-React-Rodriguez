import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Products from '../../json/Products.json';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {ID} = useParams();

    useEffect(() => {
        const promesa = new Promise ((resolve)=>{
            setTimeout(()=>{
                resolve(Products.find(item => item.ID === parseInt(ID)))
            }, 1000);
        });
        promesa.then((data)=>{
            setItem(data)
        })
    }, [ID])
    return (
        <div>
            <ItemDetail item = {item}/>
        </div>
    )
}

export default ItemDetailContainer