import React from 'react'
import { Carousel } from "../carousel/Carousel";
import './post.css'
export const Post = ({post}) => {
  return (
    <div className="miniproject">
        <Carousel />
        <div className="miniproject-text">
          <h1>{post.title}</h1>
          <h3>
            {post.desc}
          </h3>
          <h3 className="bold">{post.beneficiary}</h3>
        </div>
      </div>
  )
}
