import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Inputbar from "./components/Inputbar";


const App: React.FC = () => {
    const [email, setEmail] = useState<String>("")

    return (

        <div className="App">
            <div className="Header"> Mailverteiler</div>
            <Inputbar email={email} setEmail={setEmail}/>

        </div>
    );
};

export default App;
