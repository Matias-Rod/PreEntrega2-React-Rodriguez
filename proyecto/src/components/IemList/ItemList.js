import React from 'react'
import Item from '../Item/Item';

const ItemList = ({item}) => {
  return (
    <div className="row">
      {item.map(item => (
        <div className="col-md-3 py-3" key={item.ID}>
          <Item item={item}/>
        </div>
      ))}
    </div>
  );
};

export default ItemList