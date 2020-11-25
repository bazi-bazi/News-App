
import React, { useState, useEffect } from 'react';
import '../post.css';
import ArchiContent from './archicontent';

// API KEY 7b6950dc25f3455da8db1aad6e85e41d


const ArchiList=()=> {

  const apiKey = '7b6950dc25f3455da8db1aad6e85e41d';

  useEffect(() => {
    getData();
  }, []);



  const [ headline, setHeadline ] = useState([]);

  const getData = async () => {
    const response = await fetch( `http://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${apiKey}` );
    const data = await response.json();
    setHeadline(data.articles);
    console.log(data.articles);

  }
  return (
    <div className="posts">
      {headline.map((head)=> (
        <div className="post__list">
      <ArchiContent
      image={head.urlToImage}
      title={head.title}
      date={head.publishedAt}
      description={head.description}
      readmore={head.url}
      />
      </div>
      ))}
    </div>
  )
}

export default ArchiList;