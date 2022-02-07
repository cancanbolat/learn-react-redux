import { useSelector } from "react-redux";

export default function Header() {

    const { dark, language } = useSelector(state => state.site)

    return (
        <div>
            header
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
