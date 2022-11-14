import { useEffect, useState } from 'react'
import './networks.css'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { MdAddLink } from 'react-icons/md'

import { db } from '../../services/firebaseConnection'
import {
    setDoc,
    doc,
    getDoc,
} from 'firebase/firestore'

import { toast } from 'react-toastify'

export default function Networks() {
    const [facebook, setFacebook] = useState('');
    const [instagram, setInstagram] = useState('');
    const [github, setGithub] = useState('');

    useEffect( () => {
        function loadLinks(){
            const docRef = doc(db,'social','link')
            getDoc(docRef)
            .then((snapshot) => {
                if(snapshot.data() !== undefined){
                    setFacebook(snapshot.data().facebook)
                    setInstagram(snapshot.data().instagram)
                    setGithub(snapshot.data().github)
                }
            })
        }
        loadLinks();
    },[])

    function handleSave(e){
        e.preventDefault();
        setDoc(doc(db,'social','link'), {
            facebook: facebook,
            instagram: instagram,
            github: github
        })
        .then(() => {
            console.log('URLs salvas com sucesso!')
            toast.success('Salvo com sucesso!')
        })
        .catch((error) => {
            console.log('ERRO ao salvar!' + error)
            toast.error('Erro ao salvar seus links!')
        })
    }
    
    return(
        <div className='admin-container'>
            <Header />
            <h1 className='title-social'>Suas redes sociais</h1>

            <form className='form' onSubmit={handleSave}>
                <label className='label'>Link do Facebook</label>
                <Input 
                placeholder='Digite a url do Facebook...'
                value={facebook}
                onChange={ (e) => setFacebook(e.target.value)}
                />
                <label className='label'>Link do Instagram</label>
                <Input 
                placeholder='Digite a url do Instagram...'
                value={instagram}
                onChange={ (e) => setInstagram(e.target.value)}
                />
                <label className='label'>Link do Github</label>
                <Input 
                placeholder='Digite a url do Github...'
                value={github}
                onChange={ (e) => setGithub(e.target.value)}
                />

            <button type='submit' className='btn-register'>
                Salvar links <MdAddLink size={24} color='white'/>
            </button>
            </form>
        </div>
    )
}