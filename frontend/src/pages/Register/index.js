import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import api from '../../services/api';
import logoImg from '../../assets/logo.svg';

export default function Register() {
    const [name, setName ] = useState('');
    const [email, setEmail ] = useState('');
    const [whatsapp, setWhatsapp ] = useState('');
    const [city, setCity ] = useState('');
    const [uf, setUf ] = useState('');

    const history = useHistory();

    async function handleRegister(event){
        event.preventDefault();

        const data = {
            name, 
            email, 
            whatsapp, 
            city, 
            uf
        };
        try{
            const response = await api.post('ongs', data);
            
            alert(`Seu ID de acesso: ${response.data.id}`);
            
            history.push('/');
            //manda para o endereço especificado
        } catch (err) {
            alert('Erro no cadastro, tente novamente.')
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="logo Be The Hero" />

                    <h1>Cadastro</h1>
                    <p>faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>               
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail"
                        value={email}
                        onChange={event => setEmail(event.target.value)} 
                    />
                    <input 
                        placeholder="Whatsapp" 
                        value={whatsapp}
                        onChange={event => setWhatsapp(event.target.value)}
                    />

                    <div className="input-group">
                        <input 
                            placeholder="cidade" 
                            value={city}
                            onChange={event => setCity(event.target.value)}
                        />
                        <input 
                            placeholder="UF" 
                            style={{ width: 80 }} 
                            value={uf}
                            onChange={event => setUf(event.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}