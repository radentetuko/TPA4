import React from 'react'
import {BsInstagram, BsFacebook, BsTelegram, BsWhatsapp} from 'react-icons/bs'
import '../css/footer.css';

const Footer = () => {
  return (
    <>
        <footer>
            <article className="container1">
                <p>Social Media :</p>
                <section className="link">
                    <a href="https://www.instagram.com/Raden_Tetuko/"><BsInstagram/></a>
                    <a className='fb' href="https://www.facebook.com/alexiokoko.guritno"><BsFacebook/></a>
                    <a href="https://www.t.me/Raden_Tetuko/"><BsTelegram/></a>
                    <a href="https://api.whatsapp.com/send?phone=085737276952"><BsWhatsapp/></a>
                </section>
            </article>
        </footer>
    </>
  )
}

export default Footer
