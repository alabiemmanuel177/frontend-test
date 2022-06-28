import React from 'react'
import "./carousel.css"


export const Carousel = ({photos , index}) => {
    const id = `carouselExampleControls-${index}`;
    console.log(photos);
  return (<div className="carousel-cont">
    <div id={id} className="carousel slide" data-bs-ride="true">
  <div className="carousel-inner">
  {
                  photos.map((v, key)=>   <div className={`carousel-item ${ key === 0 ? 'active':'' }`}>
                    <img src={v.url} className="d-block w-100" alt="..."/>
                </div>)
                }
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
</div></div>
  )
}

