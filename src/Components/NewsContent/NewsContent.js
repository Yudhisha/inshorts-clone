import { Container } from '@mui/material'
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsContent.css';

const NewsContent = ({newsArray, newsResult, loadmore, setLoadmore}) => {
  return (
    <Container maxWidth="md">
        <div className='content'>
            <div className="downloadMessage">
                <span className="downloadText">For the best experience use inshorts app on your smartphone</span>
                <img src="https://assets.inshorts.com/website_assets/images/appstore.png" alt="App store" height="80%" />
                <img src="https://assets.inshorts.com/website_assets/images/playstore.png" alt="Play store" height="80%" />
            </div>
            
            {
            newsArray.map((newsItem)=>(
              <NewsCard newsItem={newsItem} key={newsItem.title}/>
            ))
            }
            {loadmore <= newsResult && 
              <>
                <hr/>
                <button className="loadmore" onClick={()=>setLoadmore(loadmore+20)}>Load More</button>
              </>
            }
            
        </div>
    </Container>
  )
}

export default NewsContent