import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";

function App() {
    // let email = 'login@student.agh.edu.pl';
    //const [a,b,c]= [1,2,3];
    const [email, setEmail] = useState('fracz@agh.edu.pl');
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    function handleChange(event) {
        setEmail(event.target.value)
        //console.log(event.target.value);
    }

    function sendAlert() {
        alert(email);
    }

    let alertMessage = email;


    let content;
    if (isAuthenticated) {
        content = <div><h2>Twój e-mail to {email}</h2>
            <button onClick={()=>setIsAuthenticated(false)}> Wyloguj sie</button>
    </div>
    } else {
        content = <div><input type="text" onChange={handleChange}/>
            <button onClick={()=>setIsAuthenticated(true)}> Zaloguj sie</button>
        </div>
    }


    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {content}

        </div>


    );
}

export default App;
