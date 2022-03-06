import React from 'react';

const Home = ()=>{

    return(
    <>
    <div class="modal fade" id="modal-filme">
        <div class="modal-dialog"> 
            <div class="modal-content">   
                <div class="modal-hero">
                    <img src="assets/images/Crush_a_altura2.png" alt=""/>
                    <div class="col-12 modal-hero-infos">
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
                                80% Relevante <text>2022 <img src="assets/images/10.png" style="margin-left: 5px; margin-right: 5px;"/> 1h 41min</text>
                            </p>
                            <p class="filme_descricao text-white">Protagonizar o musical da escola significa realizar um 
                                sonho, mas a pressão vem com tudo e abala a confiança e o relacionamento de 
                                Jodi.</p>
                        </div>
                    </div>
                    <br/>
                    <div id="colecao" class="row">
                        <p> <img src="assets/images/bookshelf.png" width="20px"/> Coleção Crush à Altura</p>
                    </div>
                    <div class="colecaofilmes col-15">
                        <img src="assets/images/CL_1.png" width="200px"/>
                        <img src="assets/images/CL_2.png" width="200px"/>   
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
                                        <p class="filmes_semelhantes"><img src="assets/images/10.png" alt="10"/> 2019</p>
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
                                        <p class="filmes_semelhantes"><img src="assets/images/10.png" alt="10"/> 2019</p>
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
                                        <p class="filmes_semelhantes"><img src="assets/images/10.png" alt="10"/> 2019</p>
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
    </div>

    <div class="container-fluid">
        <header class="row">
            <div class="col-2">
            <img src="assets/images/logo.png" alt="Logo-Viniflix" width="150px" style="margin-top: 10px; margin-left: 80px;"/>
            </div>
            <div class="col-8">
                <ul class="menu_list" style="margin-left: 25px;">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Series</a></li>
                    <li><a href="#">Filmes</a></li>
                    <li><a href="#">Bombando</a></li>
                    <li><a href="#">Minha lista</a></li>
                </ul>
            </div>
        </header>
    </div>

    <div id="hero" class="container-fluid">
        <div class="container">
            <div class="row" id="hero_infos">
                <div class="col-6">
                    <img class="logo" src="assets/images/Crush_a_altura2.png" alt="Crush_a_altura2" width="530px"/>
                    <h1 class="text-white">Brasil: top 7 de hoje</h1>
                    <p class="text-white">Protagonizar o musical da escola significa realizar um sonho, 
                        mas a pressão vem com tudo e abala a confiança e o relacionamento de Jodi.
                    </p>
                    <br />
                    <button class="btn btn-lg btn-cust-white">
                        <span class="mdi mdi-play"> Assistir</span>
                    </button>
                    <button class="btn btn-lg btn-cust-translucent">
                        <span class="mdi mdi-information-outline 1"> Mais informações</span> 
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div class="main_content">
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h5 class="text-white" style="font-weight: 700;">Populares da Viniflix</h5>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <ul class="filme_lista">
                    <li class="filme">
                        <img class="img-fluid" src="assets/images/Filmes/AAAABaKJF8B4n-V0pvcIw7uin818Igi9R4BgRHJsnuhCyh4EdQm-PbV0X6QmQrXlt-FWm2uKY_MAV9Rl5-xjyO0_uLx507p0PoVxfUQYEawAOOho8-FfVcDY0W921rtt.jpg" alt=""/>
                        <div class="filme_info" data-toggle="modal" data-target="#modal-filme">
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
                            <p>75% Relevante <img src="assets/images/18.png" width="28px"/><text> 1h 23min</text></p>
                            <br/>
                        </div>
                    </li>
                    <li class="filme">
                        <img class="img-fluid" src="assets/images/Filmes/AAAABQiW2kBU0mq1JsI_52GkUlPizlCnXQI-XUafZZVfchEFzSekV4A8hufRHKmIyatU5oKa-r5UD6jE4JHaPJHw-e4jSx0_gb78wfnGrn-ROG1peYUgmddnvxm1hSRx.jpg" alt=""/>
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
                            <p>75% Relevante <img src="assets/images/18.png" width="28px"/><text> 1h 23min</text></p>
                        </div>
                    </li>
                    <li class="filme">
                        <img class="img-fluid" src="assets/images/Filmes/AAAABSLhPGVDhGpOCtmFE97WlkhU9kufU_uuZuxoFNutHV7PtMRfTp5jhFic997cx05Hr5y1vDSOjjVz9H5oRuhbkDH9YbU.webp" alt=""/>
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
                            <p>75% Relevante <img src="assets/images/18.png" width="28px"/><text> 1h 23min</text></p>
                        </div>
                    </li>
                    <li class="filme">
                        <img class="img-fluid" src="assets/images/Filmes/AAAABT6dgVxoKMywy0BOaX9wl1h3w7opcrb5-3iQY5SghSFuTwSmolKtibQdVaSbcb2TJ07PqRnzuFEhpmz6M4YOuLFQIZiNvqxw_dEE99k_DJu7iwI-ckZRcxvXLzE6FGZSgmXNaczf7_I2Zumu1kraTAfeYEFqJDADPn2LfpEDUoLOfwaiwQOl5qGr7Q4Qfr6hIggKr-uc6RRN-2rB8M1EEWg_.jpg" alt=""/>
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
                            <p>75% Relevante <img src="assets/images/18.png" width="28px"/><text> 1h 23min</text></p>
                        </div>
                    </li>
                    <li class="filme">
                        <img class="img-fluid" src="assets/images/Filmes/AAAABUGFICm9BkvFy986bgPCPHteHWDaAhyZP1z_UflBg-f817fO56LDXDflGNnMEbj61vajwEPVmiTqllJjvO5FXKwP-bpaGVvo4sYziJ_BBujLWz2y5H9xH1giw5TwIr41EirzN1R0hwyIKhM6DMMAiipxTV-Utw.jpg" alt=""/>
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
                            <p>75% Relevante <img src="assets/images/18.png" width="28px"/><text> 1h 23min</text></p>
                        </div>
                    </li>
                    <li class="filme">
                        <img class="img-fluid" src="assets/images/Filmes/AAAABYLtxuDRib5R1UyXgPgMIHIB5F01Vp3a1vLg3Z7x6HKcGCaS9ddAifYAs5MLsDbI5VR1TQsqpvh7GchmxNxtZ24RtPO_UteFnhq3a5L1qHgUdIU0udZja5QpjaNf.jpg" alt=""/>
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
                            <p>75% Relevante <img src="assets/images/18.png" width="28px"/><text> 1h 23min</text></p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h5 class="text-white" style="font-weight: 700;">Filmes românticos</h5>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <ul class="filme_lista">
                    <li class="filme">
                        <img class="img-fluid" src="assets/images/Filmes/AAAABZY-SLEwzyZYII24cCpKgxE7mPHLgSaam6IfwWhXSZa816pd-26Xrbp35GfeyVOScCsyUIUm5BZ6KIICWL0QYdyNxlboNUZlXwNkpjk1iCwQWvDHAETHPP8BP49eUqeI7il8MtFOAjcbVv3IUWodE9UOuC7CFlwmgFl5u5TmM8YT6iS-q793ICa9ziwmVOFksi3t_Z7lnUsNiysfVPgd6C13.jpg" alt=""/>
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
                            <p>75% Relevante <img src="assets/images/18.png" width="28px"/><text> 1h 23min</text></p>
                        </div>
                    </li>
                    <li class="filme">
                        <img class="img-fluid" src="assets/images/Filmes/AAAABZpU6UPPjG0QWYf8p8NWg5nJ2ojuAZ3Oh7pC0v5d28McYJMULmZRwcGaCMO0BRbbMrfbKz-kwRuaSzvzWnnyiiII_x8.webp" alt=""/>
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
                            <p>75% Relevante <img src="assets/images/18.png" width="28px"/><text> 1h 23min</text></p>
                        </div>
                    </li>
                    <li class="filme">
                        <img class="img-fluid" src="assets/images/Filmes/AAAABYqVbfGDuemU8RkeXCE2KdvdDdrx9TsB55qpa5MdmVIeEjYQvyK17b1voPvPnaIBIe-TUKqKMNwhTmET49dqEOBJGWpUzsASVzwQ7fI60owwnU33rEpWU2UUzJIR.jpg" alt=""/>
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
                            <p>75% Relevante <img src="assets/images/18.png" width="28px"/><text> 1h 23min</text></p>
                        </div>
                    </li>
                    <li class="filme">
                        <img class="img-fluid" src="assets/images/Filmes/AAAABYLtxuDRib5R1UyXgPgMIHIB5F01Vp3a1vLg3Z7x6HKcGCaS9ddAifYAs5MLsDbI5VR1TQsqpvh7GchmxNxtZ24RtPO_UteFnhq3a5L1qHgUdIU0udZja5QpjaNf.jpg" alt=""/>
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
                            <p>75% Relevante <img src="assets/images/18.png" width="28px"/><text> 1h 23min</text></p>
                        </div>
                    </li>
                    <li class="filme">
                        <img class="img-fluid" src="assets/images/Filmes/AAAABYekUSUjePjvJ6sPF6fsSdGV_dQg80n1jb1gSGJsRFgtZAp8acRml6Mi00BKIs3k9UC4eO1LmebJFYEeq4D_DoXfSBxt3QapEsJLRH2m4YJwAVfeaOD9mrJ7WnVOdynpNO_R7JzfwYF0h9VtJHIH9YmeKY6mRQ.jpg" alt=""/>
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
                            <p>75% Relevante <img src="assets/images/18.png" width="28px"/><text> 1h 23min</text></p>
                        </div>
                    </li>
                    <li class="filme">
                        <img class="img-fluid" src="assets/images/Filmes/AAAABctJ5Y2X9Z-0KqPIfG3ptE-c-Xbw7vo32zsW7emLRFQj-i7S7h9zvFBI9RrJR7JDMILawOV0Vk-rxhRolveMhOKF6AQ.webp" alt=""/>
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
                            <p>75% Relevante <img src="assets/images/18.png" width="28px"/><text> 1h 23min</text></p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h5 class="text-white" style="font-weight: 700;">Fimes brasileiros</h5>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <ul class="filme_lista">
                    <li class="filme">
                        <img class="img-fluid" src="assets/images/Filmes Brasileiros/AAAABcKyP54GP19T51-NOUpAriuPRfztfyCRZrsm-OvipBXT_kmGvhQv32ZT9JUzwLV_AjI86EvfDfqZUWPvEL70dhSU0j0.webp" alt=""/>
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
                            <p>75% Relevante <img src="assets/images/18.png" width="28px"/><text> 1h 23min</text></p>
                        </div>
                    </li>
                    <li class="filme">
                        <img class="img-fluid" src="assets//images/Filmes Brasileiros/AAAABddMrQPwUHesfB2fBJSnvSpP2JiMfKE0S6g3KDKELQCYtnSrOq1V9642bRws_6uMMpPMzG6_ywvXfgYnFK3QakZLpQA.webp" alt=""/>
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
                            <p>75% Relevante <img src="assets/images/18.png" width="28px"/><text> 1h 23min</text></p>
                        </div>
                    </li>
                    <li class="filme">
                        <img class="img-fluid" src="assets/images/Filmes Brasileiros/AAAABein0H02tehWJZ8d3I_GS5byY-CnC7d_65Kqg2M4pDgvy1oLMF4G1UlDR1Gr47We7S6A9vBpb2geBZBEXGXHvTlsUYg.webp" alt=""/>
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
                            <p>75% Relevante <img src="assets/images/18.png" width="28px"/><text> 1h 23min</text></p>
                        </div>
                    </li>
                    <li class="filme">
                        <img class="img-fluid" src="assets/images/Filmes Brasileiros/AAAABetEWaY-VbW7vJfs72qrcLOpYaLg6oNt4OJ6uUHfvimsNkKvQAndgTvJehfLWHw9LHvER1EJps2j6ym0cqZQtptAuM0.webp" alt=""/>
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
                            <p>75% Relevante <img src="assets/images/18.png" width="28px"/><text> 1h 23min</text></p>
                        </div>
                    </li>
                    <li class="filme">
                        <img class="img-fluid" src="assets/images/Filmes Brasileiros/AAAABTHAMBzLIPKJV3N_UmZSjUu58Gx2c9UYTYpA7dwXCSH5n0TvVuxbqZcRufNnLGruL5YXLY_ueSaSeKkHfekRWxkrsg_NnlDGX5FMfrkTZy-3qyQDaIIspqKXoKgd.jpg" alt=""/>
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
                            <p>75% Relevante <img src="assets/images/18.png" width="28px"/><text> 1h 23min</text></p>
                        </div>
                    </li>
                    <li class="filme">
                        <img class="img-fluid" src="assets/images/Filmes Brasileiros/AAAABX08DRfifsx6p47yDmOSjbyBvAMhjoigJhc7sp_0ctgXiN7tpPMDHfppG5gWLntW_AQRLx09oQ-MS0dycai_-RIWabjRoSiF-VWxxlv57aJGmFH_AkojrQA6udAZ.jpg" alt=""/>
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
                            <p>75% Relevante <img src="assets/images/18.png" width="28px"/><text> 1h 23min</text></p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </div>
    </>
    );
};

export default Home;