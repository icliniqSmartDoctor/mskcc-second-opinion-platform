import { isLoggedIn } from 'stores/authStore'
import { Cookies } from 'react-cookie'
import { Button } from 'flowbite-react';

function LoginComponent() {

    const cookies = new Cookies();

    const loginIn = () => {
        cookies.set('session', '89aus9d8us9daud9UD98snaud9a8sduasnd', { path: '/', maxAge: 3600, secure: true , sameSite: 'strict'});
        isLoggedIn.set(true)
    }

    return (
        <div>
            <Button href='/dashboard/home' className='mr-5' size={'sm'} onClick={loginIn}>Login</Button>
        </div>
    )
}

export default LoginComponent