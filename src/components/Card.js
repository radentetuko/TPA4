import React from 'react'
import '../css/card.css'

const Card = (props) => {
  return (
    <div>
        <section className="item-article">
            <img src={props.img} alt="card-hover"/>
            <section className="con-text">
                <h2>{props.title}</h2>
                <p>
                    {props.desc}
                    <button>
                        <a href={props.src}>See more</a>
                    </button>
                </p>
            </section>
        </section>
    </div>
  )
}

export default Card
