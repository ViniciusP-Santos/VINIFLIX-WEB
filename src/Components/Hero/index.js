import React from "react";

const Hero = ({ filme }) =>{
    const selectFilme = () =>{
        const event = new CustomEvent('selectFilme', {
            detail: filme,
        });
        window.dispatchEvent(event);
    };
    return(
    <div id="hero" class="container-fluid" style={{
        backgroundImage : `url(${filme.capa})`
    }}>
        <div class="container">
            <div class="row" id="hero_infos">
                <div class="col-6">
                    <img class="logo" src={filme.logo} width="530px"/>
                    <h1 class="text-white">Brasil: top 7 de hoje</h1>
                    <p class="text-white">
                        {filme.descricao?.substr(0,190)}...
                    </p>
                    <br />
                    <button class="btn btn-lg btn-cust-white">
                        <span class="mdi mdi-play"> Assistir</span>
                    </button>
                    <button class="btn btn-lg btn-cust-translucent">
                        <span 
                            class="mdi mdi-information-outline 1" 
                            onClick={selectFilme} 
                            data-toggle="modal" 
                            data-target="#modal-filme"
                             > Mais informações</span> 
                    </button>
                </div>
            </div>
        </div>
    </div> 
    );
}

export default Hero;