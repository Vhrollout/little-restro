import './index.css';
import { Button } from 'react-bootstrap';

export default function Login() {
    return(
        <div className='login-div'>
            <form className='login'>
                    <label htmlFor='email'>Username</label>
                    <input type='email' id='email' name='mail' />
                    <label htmlFor='pass'>password</label>
                    <input type='password' id='pass' name='password' />
                    <Button className='logb' variant="warning">Log in</Button>
            </form>
        </div>
    )
}






