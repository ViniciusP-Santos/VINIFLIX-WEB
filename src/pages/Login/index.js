import React from 'react';

const Login = ()=>{

    return(
    <div 
        class="container-fluid bg_filmes"
        style={{
            position: 'fixed',
            height: '100%',
        }}
    >
        <header class="row">
            <img class="logoViniflix" src={require('../../assets/images/logo.png')}/>
        </header>
        <div id="caixa_login" class="col-4 offset-4">
            <h1 class="text-white">Entrar</h1>
            <br />
            <form>
                <input
                    id="login" 
                    type="email"
                    class="form-control form-control-lg"
                    placeholder="Email ou número de telefone"
                />
                <br />
                <input
                    id="password" 
                    type="password"
                    class="form-control form-control-lg"
                    placeholder="Senha"
                />
                <br />
                <button class="btn btn-lg w-100 btn-danger btn_entrar">Entrar</button> 
                <div class="row mt-2">
                    <div class="col text-muted">
                        <input type="checkbox" /> Lembrar de mim.
                    </div>
                    <div class="col text-right">
                        <a href="#" class="text-muted">Precisa de ajuda?</a>
                    </div>
                </div>
                <br />
                <div class="text-left">
                    <img id="facebook-logo" src={require('../../assets/images/Facebook_logo_(square).png')} />
                    <a href="#" class="text-muted">Conectar com facebook.</a>
                </div>
                <br />
                <div class="text-left">
                    <p class="text-muted">Novo por aqui? <a class="text-white" href="#">Assine Agora</a>.</p>
                </div>
                <div>
                    <p class="text-muted">Esta página é protegida pelo Google reCAPTCHA 
                        para garantir que você não é um robô. <a href="#">Saiba mais.</a></p>
                </div>
            </form>
        </div>
    </div>
    );
};

export default Login;