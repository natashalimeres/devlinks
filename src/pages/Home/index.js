import './home.css'
import { Social } from '../../components/Social'
import { FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

export default function Home () {
    return (
        <div className='home-container'>
            <h1>Natasha Limeres</h1>
            <span>Veja meus links 👇</span>

    <main className='links'>
            <section className='link-area'>
                <a href='#'>
                    <p className='link-text'>Canal no Youtube</p>
                </a>
            </section>

            <section className='link-area'>
                <a href='#'>
                    <p className='link-text'>LinkedIn</p>
                </a>
            </section>

            <section className='link-area'>
                <a href='#'>
                    <p className='link-text'>Github</p>
                </a>
            </section>

            <footer>
                <Social url="https://twitter.com/nahtashinha" >
                    <FaTwitter size={35} color="#FFF" />
                </Social>

                <Social url="https://www.youtube.com/channel/UCEKtjs92Rqzh_iRCCf_HQeA" >
                    <FaYoutube size={35} color="#FFF" />
                </Social>

                <Social url="https://www.instagram.com/natashalimeres/" >
                    <FaInstagram size={35} color="#FFF" />
                </Social>

            </footer>
    </main>
        </div>
    )
}