import './home.css'

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
    </main>
        </div>
    )
}