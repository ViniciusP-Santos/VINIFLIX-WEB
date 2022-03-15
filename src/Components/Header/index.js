import React, { useState, useEffect} from "react";

const Header = ({ hideMenu}) => {
    const [user, setUser] = useState({});

    const logout = () =>{
        localStorage.clear();
        window.location.reload();
    }

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('@user')));
    }, []);

    return(        
    <header class="row">
    <div class="col-2">
    <img src={require("../../assets/images/logo.png")} alt="Logo-Viniflix" width="150px"/>
    </div>
    {!hideMenu &&(<div class="col-8">
        <ul className="menu_list">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Series</a></li>
            <li><a href="#">Filmes</a></li>
            <li><a href="#">Bombando</a></li>
            <li><a href="#">Minha lista</a></li>
        </ul>
    </div>)}
    <div className="col-2 text-right">
    {!hideMenu &&<a onClick={logout} className="menu_list_logout">Olá, {user?.nome}. Sair</a>}
    </div>
</header>);
}
export default Header;