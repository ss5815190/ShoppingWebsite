import { useEffect, useState } from "react";
import axios from 'axios';

const InfiniteScroll=(data,setData,setIsLoading)=>{
    
    const [offset, setOffset] = useState(0);
    let limit=10;
    
    const loadData = async () => {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`);
        setData([...data, ...response.data]);
        setIsLoading(false)
        setOffset(offset => offset + 10);
        console.log(response.data)
      };
    
      useEffect(() => {
        loadData();
      }, []);
    useEffect(() => {
        const handleScroll = () => {
          const scrollHeight = document.documentElement.scrollHeight;
          const scrollTop = document.documentElement.scrollTop;
          const clientHeight = document.documentElement.clientHeight;
          if (scrollTop + clientHeight >= scrollHeight-100 && offset<100) {
            loadData();
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [offset]);

}
export default InfiniteScroll; 