import './networks.css'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

export default function Networks() {
    return(
        <div className='admin-container'>
            <Header />
            <h1 className='title-social'>Suas redes sociais</h1>

            <form className='form'>
                <label className='label'>Link do Facebook</label>
                <Input 
                placeholder='Digite a url do Facebook...'
                />
            </form>
        </div>
    )
}