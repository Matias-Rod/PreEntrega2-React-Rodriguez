import React from 'react';
import { useState, useEffect } from 'react';
import Products from '../../json/Products.json';
import { useParams } from 'react-router-dom';
import ItemList from '../IemList/ItemList';

const ItemListContainer = () => {
  const [item, setItem] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    const fetchData = async()=>{
      try{
        const data = await new Promise ((resolve)=>{
          setTimeout(()=>{
            resolve(id ? Products.filter(item => item.categoria === id) : Products)
          }, 1000);
        })
        setItem(data);
      }catch(error){
        console.log('Error', error);
      }
    };

    fetchData()

  }, [id])

  return (
    <div className='container'>
      <div className="row">
        <ItemList item={item}/>
      </div>
    </div>
  )
}

export default ItemListContainer