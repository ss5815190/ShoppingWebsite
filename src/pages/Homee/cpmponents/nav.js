import { Link,useNavigate } from "react-router-dom";
import {useEffect,useContext,useState}from'react';
import MyContext from '../../../compontents/MyContext.js';
import '../style/nav.css';
const Nav=()=>{

	const {cart,data} = useContext(MyContext);
	const [Svalue,setSvalue]=useState('');
	const [updated, setUpdated] = useState('');
	const navigate=useNavigate();
	const onChange=(e)=>{//input欄位發生變化
		setSvalue(e.target.value);
	}
	const handleKeyDown = (e) => {//當搜尋欄按下enter鍵
	    if (e.key === 'Enter') {
	      //Get input value
	      setUpdated(Svalue);
	      navigate(`/search=${Svalue}`);//切換url
	      console.log(Svalue)
    	}
  	};
  	const onSearch=(Term)=>{//當按下推薦搜尋列表
  		setSvalue(Term);
  	}
	const CartAmount=()=>{//購物車總數量
		let amount=0
		if(cart.length!==0)
			for(let i=0;i<cart.length;i++){
				amount+=cart[i].quantity
			}
			return amount;
	}
	useEffect(() => {
    // 在購物車數量更新後執行
     CartAmount();
	
  }, [cart]);
	return(
		<div className="nav">
			<div className="search">
				
				<input type="search" placeholder="search" 
				value={Svalue} onChange={onChange} onKeyDown={handleKeyDown}/>
				<div className="dropdown">
					{data.filter(item =>{
						const searchTerm=Svalue.toLowerCase();//全變小寫好辨識
						const fullName=item.title.toLowerCase();
						return searchTerm&&fullName.startsWith(searchTerm)&&fullName!==searchTerm;
					})
					.map((el)=>(
						<div onClick={()=>onSearch(el.title)}
						className="dropdownName" key={el.id}>{el.title}</div>
						))}
				</div>
				
			</div>

			<Link to="cartpage">
				<div className="cart">
				<i className="fa-solid fa-cart-shopping"></i>
				<div>購物車</div>
				(<p className="quantity">{CartAmount()}</p>
				)
				</div>
			</Link>
		</div>
		)
}
export default Nav;