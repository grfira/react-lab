import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    // let email = 'login@student.agh.edu.pl';
    //const [a,b,c]= [1,2,3];
    const [email, setEmail] = useState('fracz@agh.edu.pl');


    function handleChange(event) {
        setEmail(event.target.value)
        //console.log(event.target.value);
    }

    let header2 = <h3>MAsz krotki adres</h3>
    if (email.length < 6) {
        header2 = <h3> Msz krótki adres!"</h3>
    } else {
        if (email.length > 20) {
            header2 = <h3> "Masz długi adres!"</h3>
        } else header2 = <h3> "W sam raz"</h3>
    }


    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            <h2>Twój e-mail to {email.toLocaleUpperCase()}</h2>
            {header2}
            <input type="text" onChange={handleChange}/>

        </div>
    );
}

export default App;
