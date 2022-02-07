import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { login } from '../stores/auth'

export default function Login() {

    const history = useHistory()
    const dispatch = useDispatch()
    
    const handleLogin = () => {
        //apiye istek atılabilir
        //data alınır. localStorage'e falan atılır
        const dummyData = {
            id: 1,
            name: 'Can',
            token: 'nsadjkfdsnagkjslngskjJASJFS23t2478ADFAS'
        }
        dispatch(login(dummyData))
        history.push('/')
    }

    return (
        <div style={{ background: '#acvgr4' }}>
            <h2>Login</h2>
            <button onClick={handleLogin}>Giriş yap</button>
        </div>
    );
}
