import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Header() {

    const { dark, language } = useSelector(state => state.site)

    return (
        <div>
            header
            <nav>
                <NavLink to="/" exact={true} activeClassName="active">
                    Anasayfa
                </NavLink>
                <NavLink to="/about" exact={true} activeClassName="active">
                    Hakkında
                </NavLink>
                <NavLink to="/profile" exact={true} activeClassName="active">
                    Profil
                </NavLink>
            </nav>
            <br />
            <br />
            <div>
                Dark mode = {dark ? 'Evet' : 'Hayır'} <br />
                Mevcut dil = {language}
                <hr />
            </div>
        </div>
    );
}
