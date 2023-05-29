import { RiAccountCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
// import Axios from 'axios';
import React, { useState ,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

 export const Login = () => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState ("");

//     const [loginStatus, setLoginStatus] = useState("");
//     const [statusHolder] = useState('message');

//     class Login extends React.Component {
//         constructor(props) {
//           super(props);
//           this.state = {
//             // Initial state properties
//           };
//         }
  // function Login() {
    const [values, setValues] = useState({
      name: '',
      password: ''
    })
    const navigate =  useNavigate();

    const handleInput = (event) => {
      setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    axios.defaults.withCredentials = true;

    useEffect(()=> {
      axios.get('http://localhost:3001')
      .then( res =>  {
        if (res.data.valid) {
          navigate('/')
        }else {
          navigate('/login')
        }
      })
      .catch(err => console.log(err))
    }, [])

    const handleSubmit = (event) => {
      event.preventDefault();
      axios.post('http://localhost:3001/login', values)
      .then(res => {
        if(res.data.Login) {  
          navigate('/')
        } else {
          alert("No record")
        }
        console.log(res);
      })
      .catch(err => console.log(err));
    }        
        // handleSubmit = (e) => {
        //     e.preventDefault();
        //     const { username, password } = this.state;
        //     console.log(username, password);
        //     fetch("http://localhost:3001/login", {
        //         method: "POST",
        //         crossDomain: true,
        //         headers: {
        //           // Headers configuration
        //         },
        //         body: JSON.stringify({
        //           // Request body
        //         })
        //       })
        //         .then(response => {
        //           // Handle the response
        //         })
        //         .catch(error => {
        //           // Handle errors
        //         });
        //     }
    
    // const login = () => {
    // Axios.post("http://localhost:3001/login", {
    //    username: username,
    //    password: password,
    // }).then((response) => {
    //    if (!response.data.message) {
    //       setLoginStatus( response.data.message);
    //    } else {
    //       setLoginStatus (response.data[0].username);
    //       navigate.push('/home');

    //    }
    // });
//     };

        // render() {
            return (
              <div className="logindiv">
                <>
                  <form className="loginform"  onSubmit={handleSubmit}>
                    <h2>Login Page</h2>
                      {/* <span className={statusHolder}>{loginStatus}</span> */}
                      <div className="icona"><RiAccountCircleFill/></div>
                      {/* <select name="market" id="">
                            <option value="zgjidh">Zgjidhe Marketin</option>
                            <option value="shop1">Shop 1</option>
                            <option value="shop2">Shop 2</option>
                            <option value="shop3">Shop 3</option>
                            <option value="shop4">Shop 4</option>
                          </select> */}   
                          <input type="text" name="name" placeholder="Username ..." onChange={handleInput}/>
                          <input type="password" name="password" placeholder="Password ..." onChange={handleInput}/>
                          <button type="submit">Login</button>
                          <p><Link to='/register'>Create a new Account</Link></p>
                    </form>
                </>
              </div>
            )
        }
//     }    
// }   

export default Login;
