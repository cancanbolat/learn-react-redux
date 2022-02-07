import { useSelector, useDispatch } from "react-redux";
import { setLanguage, setDarkMode } from "../stores/site";

export default function Footer() {

    const dispatch = useDispatch()
    const { dark, language } = useSelector(state => state.site)
    const languages = ['tr', 'en']

    const handleLanguage = lang => {
        dispatch(setLanguage(lang))
    }

    return (
        <div>
            <hr />
            footer
            <br />
            <br />
            <div>
                {languages.map((lang, index) => (
                    <button className={lang === language ? 'active' : ''}
                        onClick={() => handleLanguage(lang)}
                        key={index}>{lang}</button>
                ))}
            </div>
            <div>
                <button onClick={() => dispatch(setDarkMode())}>
                    {dark ? 'Light moda geç' : 'Dark moda geç'}
                </button>
            </div>
        </div>
    );
}
