import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";
import LoginForm from "./LoginForm";

function App() {
    // let email = 'login@student.agh.edu.pl';
    //const [a,b,c]= [1,2,3];
    // const [email, setEmail] = useState('fracz@agh.edu.pl');
    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [authenticatedUsername, setAuthenticatedUsername] = useState('');



    function logout() {
        setAuthenticatedUsername('');
    }


    let content;
    if (authenticatedUsername) {
        content = <div>
            <h2>Twój e-mail to {authenticatedUsername}</h2>
            <button onClick={logout}> Wyloguj sie</button>
        </div>
    } else {
        content = <LoginForm onLogin={(email) => setAuthenticatedUsername(email)}/>
    }
    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {content}
        </div>


    );
}

export default App;
