import React from 'react';
import { useState, useEffect } from 'react';
import Products from '../../json/Products.json';
import { useParams } from 'react-router-dom';
import ItemList from '../IemList/ItemList';

const ItemListContainer = () => {
  const [item, setItem] = useState([]);
  const {ID} = useParams();

  useEffect(() => {
    const fetchData = async()=>{
      try{
        const data = await new Promise ((resolve)=>{
          setTimeout(()=>{
            resolve(ID ? Products.filter(item => item.categoria === (ID)) : Products)
          }, 1000);
        })
        setItem(data);
      }catch(error){
        console.log('Error', error);
      }
    };

    fetchData()

  }, [ID])

  return (
    <div className='container bg'>
      <div className="row">
        <ItemList item={item}/>
      </div>
    </div>
  )
}

export default ItemListContainer