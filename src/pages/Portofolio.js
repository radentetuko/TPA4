import React from 'react'
import {BsBriefcase} from 'react-icons/bs'
import '../css/portofolio.css'
import Card from '../components/Card'
import Web from '../img/web.jpeg'
import Web2 from '../img/web2.jpeg'
import Web3 from '../img/Web3.png'
import Web4 from '../img/Web4.png'


const Portofolio = () => {
  return (
    <>
      <main>
        <article className="container">
            <section>
                <h1><BsBriefcase/> Portofolio</h1>
                <p>Berikut adalah beberapa website yang pernah saya buat</p>
            </section>
        </article>
        <article className="container">
           <Card title="Raden Portofolio" img={Web} src="https://radentetuko.netlify.app/" desc="Web Personal Raden.Tetuko adalah web personal milik saya sendiri yang berisi tentang diri
                        saya, seperti data diri saya dan keahlian saya di bidang IT serta karya - karya saya."/>
           <Card title="Raden BMI" img={Web2} src="https://bmitetuko.netlify.app/" desc="BMI Calculator adalah aplikasi berbasis web yang digunakan untuk mengukur berat badan ideal."/>
        </article>
        <article className="container">
           <Card title="Raden ToDo List" img={Web3} src="https://raden-todo-list.netlify.app/" desc="Raden ToDo List adalah aplikasi berbasis web yang digunakan untuk mengelist kegiatan yang akan dilakukan oleh user sebagai pengingat."/>
           <Card title="Raden Movie" img={Web4} src="https://radenmovie.netlify.app/" desc="Raden Movie adalah aplikasi berbasis web yang berisi tentang rekomendasi film - film yang menarik untuk ditonton."/>
        </article>
    </main>
    </>
  )
}

export default Portofolio
