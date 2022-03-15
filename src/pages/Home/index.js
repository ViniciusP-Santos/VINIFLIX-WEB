import React, { useState, useEffect} from 'react';
import ModalFilme from '../../Components/ModalFilme';
import Header from '../../Components/Header';
import Hero from '../../Components/Hero';
import Secao from '../../Components/Secao';
import api from '../../services/api';

const Home = ()=>{

    const [principal, setPrincipal] = useState({});
    const [secoes, setSecoes] = useState([]);


    const getHome = async () => {
        try {
            const response = await  api.get('/home');
            const res = response.data;

            if(res.erro){
                alert(res.message);
                return false;
            }
            setPrincipal(res.principal);
            setSecoes(res.secoes);
        } catch (error) {
            alert(error.message);
        }
    }
    useEffect(() => {
        getHome();
    }, []);

    return(
    <>
    <ModalFilme />
    <div class="container-fluid">
        <Header />
    </div> 
    <Hero filme={principal}/>

    <div className="main_content">
        {secoes.map(secao => <Secao secao={secao}/>)}
    </div>
    </>
    );
};

export default Home;