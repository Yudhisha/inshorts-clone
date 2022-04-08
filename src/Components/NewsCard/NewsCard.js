import React from 'react'
import './NewsCard.css';

const NewsCard = ({newsItem}) => {

  const fullDate = new Date(newsItem.publishedAt);
  var date = fullDate.toString().split(" ");
  const hour = parseInt(date[4].substring(0,2));
  const time = hour>12?true:false;

  return (
    <div class="newsCard">
      <img alt={newsItem.title} className="newsImage" src={newsItem.urlToImage ? newsItem.urlToImage : "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"} />
      <div className='newsText'>
        <div>
          <span className='title'>{newsItem.title}</span>
          <br/>
          <span className='author'>
            <a href={newsItem.url} target="__blank" style={{color:'black'}}><b>Short</b></a> {" "}
             <span className="muted">by {newsItem.author?newsItem.author:"unknown"} / {" "} {time ? `${hour-12}:${date[4].substring(3,5)} pm` : `${hour}:${date[4].substring(3,5)} am`} on {date[2]} {date[1]} {date[3]} {date[0]}
             </span>
          </span>
        </div>
        <div className='lowerNewsText'>
          <div className='description'>
            {newsItem.description}
          </div>
          <span className='readmore'>
            read more at <a href={newsItem.url} target="__blank" style={{color:'black'}}><b>{newsItem.source.name}</b></a>
          </span>
        </div>

      </div>
    </div>
  )
}

export default NewsCard