import React, { useState } from 'react';
import Header from '../../Components/Header';

import api from '../../services/api';

const Login = () => {
    const [credenciais, setCredenciais] = useState({
        email: '',
        senha: ''
    });

    const login = async () => {
        try {
            const response = await api.post('/usuario/login', credenciais);
            const res = response.data;
            if(res.error){
                alert(res.message);
                return false;
            }

            localStorage.setItem('@user', JSON.stringify(res.usuario));
            window.location.reload();
        } catch (error) {
            alert(error.message);
        }
    }
    return(
    <div 
        class="container-fluid bg_filmes"
        style={{
            position: 'fixed',
            height: '100%',
        }}
    >
        <Header hideMenu/>
        <div id="caixa_login" class="col-4 offset-4">
            <h1 className="text-white">Entrar</h1>
            <br />
            <>
                <input
                    id="input_email" 
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email ou número de telefone"
                    onChange={(e) => {
                        setCredenciais({
                            ...credenciais,
                            email: e.target.value
                        });
                    }}
                />
                <br />
                <input
                    id="password" 
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Senha"
                    onChange={(e) => {
                        setCredenciais({
                            ...credenciais,
                            senha: e.target.value
                        });
                    }}
                />
                <br />
                <button className="btn btn-lg w-100 btn-danger btn_entrar" onClick={login}>Entrar</button> 
                <div className="row mt-2">
                    <div className="col text-muted">
                        <input type="checkbox" /> Lembrar de mim.
                    </div>
                    <div className="col text-right">
                        <a href="#" className="text-muted">Precisa de ajuda?</a>
                    </div>
                </div>
                <br />
                <div className="text-left">
                    <img id="facebook-logo" src={require('../../assets/images/Facebook_logo_(square).png')} />
                    <a href="#" className="text-muted">Conectar com facebook.</a>
                </div>
                <br />
                <div className="text-left">
                    <p className="text-muted">Novo por aqui? <a className="text-white" href="#">Assine Agora</a>.</p>
                </div>
                <div>
                    <p className="text-muted">Esta página é protegida pelo Google reCAPTCHA 
                        para garantir que você não é um robô. <a href="#">Saiba mais.</a></p>
                </div>
            </>
        </div>
    </div>
    );
};

export default Login;