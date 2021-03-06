
import React, { useState, useEffect } from 'react';
import '../post.css';
import TechContent from './techcontent';
import { Spinner } from 'react-bootstrap';



const TechList=()=> {

  const apiKey = '7b6950dc25f3455da8db1aad6e85e41d';

  useEffect(() => {
    getData();
  }, []);



  const [ headline, setHeadline ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  const getData = async () => {
    const response = await fetch( `http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${apiKey}` );
    const data = await response.json();
    setHeadline(data.articles);
    setLoading(true);

  }
  return (
    <div>
      {loading ? 
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
    : <Spinner animation="grow" />}
    </div>
  )
}

export default TechList;