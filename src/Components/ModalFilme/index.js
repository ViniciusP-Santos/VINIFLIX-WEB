import React, { useState, useEffect } from 'react';

const ModalFilme = () => {
    const [filme, setFilme] = useState({});

    const selectFilmeListener = () => {
        window.addEventListener('selectFilme', (data) =>{
            setFilme(data.detail);
        });
    };
    useEffect (()=>{
        selectFilmeListener();
    }, []);

    return (    
    <div class="modal fade" id="modal-filme">
    <div class="modal-dialog"> 
        <div class="modal-content">   
            <div 
            class="modal-hero" 
            style={{ backgroundImage: `url(${filme.capa})` }}
            >
                <img src={filme.logo} alt=""/>
                <div class="modal-hero-infos">
                    <button class="btn btn-lg btn-cust-white">
                        <span class="mdi mdi-play"> Assistir</span>
                    </button>
                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50 btn-lg">
                        <span class="mdi mdi-plus text-white"></span>
                    </a>
                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50 btn-lg">
                        <span class="mdi mdi-thumb-up text-white"></span>
                    </a>
                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50 btn-lg">
                        <span class="mdi mdi-thumb-down text-white"></span>
                    </a>
                </div>    
            </div>
        </div>
        <div class="modal-hero-infos">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <br/>
                        <p class="filme_relevancia">
                            80% Relevante <text>2022 <img src={require("../../assets/images/10.png")} /> 1h 41min</text>
                        </p>
                        <p class="filme_descricao text-white">{filme.descricao}</p>
                    </div>
                </div>
                <br/>
                <div id="colecao" class="row">
                    <p> <img src={require("../../assets/images/bookshelf.png")} width="20px"/> Coleção {filme.titulo}</p>
                </div>
                <div class="colecaofilmes col-15">
                    <img src={require("../../assets/images/CL_1.png")} width="200px"/>
                    <img src={require("../../assets/images/CL_2.png")} width="200px"/>   
                </div>
                <div id="semelhantes" class="row">
                    <p>Titulos Semelhantes</p>
                </div>
                <div class="colecaofilmes row">
                    <div class="col-4">
                        <div class="quad">
                        </div>
                        <div class="quad_infos">
                            <div class="row">
                                <div class="col">
                                    <p class="filmes_semelhantes"><img src={require("../../assets/images/10.png")} alt="10"/> 2019</p>
                                </div>
                                <div class="col">
                                    <a href="#" class="btn-custom-plus border-white btn rounded-circle opacity-50 btn-lg">
                                        <span class="mdi mdi-plus text-white"></span>
                                    </a>
                                </div> 
                            </div>
                            <p>Dois colegas de escola têm pouco em comum, e o clima esquenta quando um imprevisto durante uma viagem os deixa isolados numa ilha deserta.</p> 
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="quad">
                        </div>
                        <div class="quad_infos">
                            <div class="row">
                                <div class="col">
                                    <p class="filmes_semelhantes"><img src={require("../../assets/images/10.png")} alt="10"/> 2019</p>
                                </div>
                                <div class="col">
                                    <a href="#" class="btn-custom-plus border-white btn rounded-circle opacity-50 btn-lg">
                                        <span class="mdi mdi-plus text-white"></span>
                                    </a>
                                </div> 
                            </div>
                            <p>Dois colegas de escola têm pouco em comum, e o clima esquenta quando um imprevisto durante uma viagem os deixa isolados numa ilha deserta.</p> 
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="quad">
                        </div>
                        <div class="quad_infos">
                            <div class="row">
                                <div class="col">
                                    <p class="filmes_semelhantes"><img src={require("../../assets/images/10.png")} alt="10"/> 2019</p>
                                </div>
                                <div class="col">
                                    <a href="#" class="btn-custom-plus border-white btn rounded-circle opacity-50 btn-lg">
                                        <span class="mdi mdi-plus text-white"></span>
                                    </a>
                                </div> 
                            </div>
                            <p>Dois colegas de escola têm pouco em comum, e o clima esquenta quando um imprevisto durante uma viagem os deixa isolados numa ilha deserta.</p> 
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    </div>
</div> );
}
export default ModalFilme;