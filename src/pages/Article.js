import React from 'react'
import {BsCollection} from 'react-icons/bs'
import Data from '../img/data.jpeg'
import Css from '../img/css.jpeg'
import '../css/article.css'

const Article = () => {
  return (
    <>
      <main>
        <article className="container">
            <section>
                <h1><BsCollection/> Article</h1>
                <p>Berikut adalah beberapa artikel yang pernah saya buat</p>
            </section>
        </article>
        <article className="container">
            <section className="item-article">
                <img src={Data} alt="card-hover"/>
                <section className="con-text">
                    <h2>Teori Data Mining</h2>
                    <p>
                        Data mining adalah istilah yang dapat digunakan untuk menggambarkan pencarian pengetahuan dalam
                        database.
                        <button>
                            <a href="dummy.html">See more</a>
                        </button>
                    </p>
                </section>
            </section>
            <section className="item-article">
                <img src={Css} alt="card-hover"/>
                <section className="con-text">
                    <h2>Cascading Style Sheets</h2>
                    <p>
                        Cascading Style Sheets adalah
                        bahasa yang digunakan untuk menentukan tampilan dan format halaman website.
                        <button>
                            <a href="dummy.html">See more</a>
                        </button>
                    </p>
                </section>
            </section>
        </article>
      </main>
    </>
  )
}

export default Article
