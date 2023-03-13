import {useContext}from'react';
import MyContext from '../../compontents/MyContext.js';
import './style/cartpage.css'
const Cartpage=()=>{
	const { cart, setCart } = useContext(MyContext);
	const { totalPrice, setTotalPrice } = useContext(MyContext);

	const deleteItem = (index) => {//刪除商品
    const newCart = [...cart];
    const itemPrice = newCart[index].price;
    const itemquantity= newCart[index].quantity;
    newCart.splice(index, 1);
    setCart(newCart);
    setTotalPrice(totalPrice - itemPrice*itemquantity);
  };
  const inCreaseItem=(index)=>{
  	const newCart = [...cart];
    const itemPrice = newCart[index].price;
    newCart[index].quantity+=1;
    setCart(newCart);
    setTotalPrice(totalPrice + itemPrice);
  }
  const deCreaseItem=(index)=>{
  	const newCart = [...cart];
    const itemPrice = newCart[index].price;
    newCart[index].quantity-=1;
    if(newCart[index].quantity===0){
    	newCart.splice(index, 1);
    	setCart(newCart);
    	setTotalPrice(totalPrice - itemPrice);
    }
    setCart(newCart);
    setTotalPrice(totalPrice - itemPrice);
  }
	return(
		<MyContext.Provider value={{ cart,setCart,totalPrice,setTotalPrice}}>
			<div className="cartpage">
	      <h2>購物車</h2>
	      <ul>
	        {cart.map((product, index) => (
	          <li key={index}>
	            {product.title} -  {product.price}元{' '} 數量 
	            <button onClick={() => deCreaseItem(index)}>-</button>
	            {product.quantity} 
	            <button onClick={() => inCreaseItem(index)}>+</button>

	            <button onClick={() => deleteItem(index)}>刪除</button>
	          </li>
	        ))}
	      </ul>
	      <p>總價格：{totalPrice}元</p>
	      
	    </div>
	    </MyContext.Provider>
		)
}
export default Cartpage;