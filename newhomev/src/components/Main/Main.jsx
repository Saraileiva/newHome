import FormLogin from '../Form/FormLogin';
import Header from '../Header/Header';
import MainDesing from './MainDesign';

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}
console.log(parseJwt(localStorage.getItem('token')));

let tokenExistAndStillValid = (parseJwt(localStorage.getItem('token')).exp * 1000 > Date.now());
const Main = () => {
    return (
        <>
        {tokenExistAndStillValid ? <Header /> : <FormLogin />}
    <div>
    </div>
</>
    )
}


export default Main;