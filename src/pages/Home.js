import React from 'react'
import Foto from '../img/foto.png'
import '../css/home.css'

const Home = () => {
  return (
    <>
      <main>
        <section className="container">
            <article>
                <section className="text">
                    <h2>
                        Hello, I'm <span>Tetuko</span> I'm a Front-End Web Development From Indonesia
                    </h2>
                </section>
                <aside className="foto">
                  <img src={Foto} alt=""/>
                </aside>
            </article>
        </section>
    </main>
    </>
  )
}

export default Home
