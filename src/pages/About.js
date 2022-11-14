import React from 'react'
import Foto from '../img/foto.png'
import '../css/about.css'
import {BsWrench, BsServer, BsPalette} from 'react-icons/bs'

const About = () => {
  return (
    <>
      <main>
        <section className="container-about">
            <article id="about">
                <section className="foto-about">
                  <img src={Foto} alt=""/>
                </section>
                <section className="keterangan-about">
                    <h2>Tetuko Suryo Guritno</h2>
                    <p>Saya adalah seorang programer di bidang Front-End Web Development. Saya tinggal di Kabupaten
                        Jember, Indonesia.</p>
                    <p>Seorang Front End Developer bertanggung jawab atas komposisi tampilan sebuah website.</p>
                    <article className="toolbox">
                        <h3>Toolbox</h3>
                        <section className="toolbox1">
                            <i><BsWrench/></i>
                            <section className="item-toolbox">
                                <h1>Front-End</h1>
                                <p>HTML, CSS, Javascript, Bootstrap5, PHP</p>
                            </section>
                        </section>
                        <section className="toolbox1">
                            <i><BsServer/></i>
                            <section className="item-toolbox">
                                <h1>Back-End</h1>
                                <p>phpMyAdmin</p>
                            </section>
                        </section>
                        <section className="toolbox1">
                            <i><BsPalette/></i>
                            <section className="item-toolbox">
                                <h1>UI/UX Design</h1>
                                <p>Figma</p>
                            </section>
                        </section>
                    </article>
                </section>
            </article>
        </section>
      </main>
    </>
  )
}

export default About
