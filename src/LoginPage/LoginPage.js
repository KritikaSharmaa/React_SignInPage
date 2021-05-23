import './LoginPage.css';
import {useState} from 'react';
import Match from './Match.js';
    const LoginPage=()=>{
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const [renderMatch,SetrenderMatch]=useState(false);
    const typeEmail=(e)=>{
        setemail(e.target.value);
    }
    const typepass=(e)=>{
        setpassword(e.target.value);
    }
    const [IsLoggedIn,SetIsLoggedIn]=useState(null);

    return(
        <>
           <div className="background">
            <div className="container1">
                <h1 className="heading">Sign in</h1>
                <div className="content">
                    <input type="email" placeholder="Email" className="inputcol" value={email} onChange={typeEmail}></input><br/>
                    <input type="password" placeholder="Password" className="inputcol" value={password} onChange={typepass}></input>
                    <h6>Forget Password ?</h6><br/>
                    <button className="btn" onClick={()=>{
                        if(email==="react@mail.com" && password==="12345"){
                            SetIsLoggedIn(true);
                            SetrenderMatch(true);
                        }else{
                            SetIsLoggedIn(false);
                            alert(" Login Failed:\n invalid email or password");
                        }
                      }
                    }>Sign in</button>
                    {renderMatch && <Match IsLoggedInValue={IsLoggedIn}/>}
                </div>
            </div>
          </div>
        </>
    );
}
export default LoginPage;