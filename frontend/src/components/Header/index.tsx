import logo from '../../assets/img/logo.svg';
import "./styles.css";

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo}alt="DSMeta" />
                <h1>Controle de metas</h1>
                <p>
                    Desenvolvido por Laercio
                </p>
            </div>
        </header>
    )
}

export default Header;
