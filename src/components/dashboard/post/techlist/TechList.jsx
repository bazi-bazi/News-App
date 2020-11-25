
import React, { useState, useEffect } from 'react';
import '../post.css';
import TechContent from './techcontent';

// API KEY 7b6950dc25f3455da8db1aad6e85e41d


const TechList=()=> {

  const apiKey = '7b6950dc25f3455da8db1aad6e85e41d';

  useEffect(() => {
    getData();
  }, []);



  const [ headline, setHeadline ] = useState([]);

  const getData = async () => {
    const response = await fetch( `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}` );
    const data = await response.json();
    setHeadline(data.articles);
    console.log(data.articles);

  }
  return (
    <div className="posts">
      {headline.map((head)=> (
        <div className="post__list">
      <TechContent
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

export default TechList;