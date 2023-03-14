import '../style/commodity.css';
import {useState,useContext}from'react';
import MyContext from '../../../compontents/MyContext.js';
/**/

const CartItem=({title,description,price,product,AddToCart,cart,setCart})=>{
	const [Quantity, setQuantity] = useState(0);
	const findItemQuantity=()=>{//尋找購物車內該商品的數量
		if(cart.length!==0)
			for(let i=0;i<cart.length;i++){
				if(product.id===cart[i].id){
					if(cart[i].quantity>Quantity){
						setQuantity(cart[i].quantity)
					}
					return cart[i].quantity;
				} 
		}
		
	}
/*
  useEffect(() => {
    // 在 quantity 狀態更新後執行的代碼
     console.log(Quantity)
  }, [Quantity]);
*/
  
	return(
		<div className="item-grid"  >
			<div className="title">{`name : ${product.title}`}</div>
			<div className="description">{product.description}</div>
			<div className="price">{`price :$ ${product.price}`}</div>
			<div className="itemquantity">數量: {findItemQuantity()}</div>
			<button style={{display:Quantity===0?"block":"nne"}} 
			onClick={()=>AddToCart(product, Quantity)}>加入購物車</button>
			
		</div>
		)
}

const Commodity=({AddToCart})=>{

	const {data,cart,setCart} = useContext(MyContext);
	
	return(
		<div className="commodity">
			<div className="item">
				{
					data.map((product)=>(
			
						<CartItem key={product.id} AddToCart={AddToCart}
						product={product}cart={cart}setCart={setCart}/>
					))}
			</div>
		</div>
		)

  
}
export default Commodity;