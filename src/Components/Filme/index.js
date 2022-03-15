import React from "react";

const Filme = ({ filme }) =>{
    const selectFilme = () =>{
        const event = new CustomEvent('selectFilme', {
            detail: filme,
        });
        window.dispatchEvent(event);
    };
    return (
    <li 
        class="filme" 
        onClick={selectFilme} 
        data-toggle="modal" 
        data-target="#modal-filme"
    >
        <img class="img-fluid" src={filme.thumb}/>
        <div class="filme_info">
            <div class="col-12">
                <a href="#" class="btn-custom-round btn btn-light rounded-circle">
                    <span class="mdi mdi-play"></span>
                </a>
                <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                    <span class="mdi mdi-thumb-up text-white"></span>
                </a>
                <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                    <span class="mdi mdi-thumb-down text-white"></span>
                </a>
                <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                    <span class="mdi mdi-plus text-white"></span>
                </a>
            </div>
            <p>75% Relevante <img src={require("../../assets/images/18.png")} width="28px"/><text> 1h 23min</text></p>
            <br/>
        </div>
    </li>
    );
}
export default Filme;