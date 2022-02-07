import { useSelector, useDispatch } from "react-redux";
import { logout } from "../stores/auth";
import { setLanguage, setDarkMode } from "../stores/site";

export default function Footer() {

    const dispatch = useDispatch()

    const { user } = useSelector(state => state.auth)
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
                {
                    user && (
                        <div>
                            <button onClick={() => dispatch(logout())}>Çıkış Yap</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
}
