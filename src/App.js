import React,{useEffect, useState} from 'react';
import './App.css';
import NavInshorts from './Components/NavInshorts/NavInshorts';
import NewsContent from './Components/NewsContent/NewsContent';
import FooterInshorts from './Components/FooterInshorts/FooterInshorts';
import axios from 'axios';

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setnewsArray] = useState([]);
  const [newsResult, setnewsResult] = useState();
  const [loadmore, setLoadmore] = useState(20)


  const getNewsApi = async()=>{
    try{
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}&pagesize=${loadmore}`)
      // const news = await axios.get(`https://${proxyUrl}newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}&pagesize=${loadmore}`)
      setnewsArray(news.data.articles);
      setnewsResult(news.data.totalResults)   
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
      getNewsApi(); 
      // eslint-disable-next-line
  },[newsResult,category,loadmore]);

  console.log(process.env);


  return (
    <div className="App">
       <NavInshorts setCategory={setCategory}/>
       <NewsContent newsArray={newsArray} newsResult={newsResult} loadmore={loadmore} setLoadmore={setLoadmore}/>
       <FooterInshorts/>
    </div>
  );
}

export default App;
