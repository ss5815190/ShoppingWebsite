import React, { useState } from 'react';

function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // 加入商品
  const addItem = (item) => {
    setItems([...items, item]);
    setTotalPrice(totalPrice + item.price);
  };

  // 刪除商品
  const deleteItem = (index) => {
    const newItems = [...items];
    const itemPrice = newItems[index].price;
    newItems.splice(index, 1);
    setItems(newItems);
    setTotalPrice(totalPrice - itemPrice);
  };

  return (
    <div>
      <h2>購物車</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}元{' '}
            <button onClick={() => deleteItem(index)}>刪除</button>
          </li>
        ))}
      </ul>
      <p>總價格：{totalPrice}元</p>
      <button onClick={() => addItem({ name: '商品1', price: 100 })}>
        加入商品
      </button>
    </div>
  );
}

export default ShoppingCart;