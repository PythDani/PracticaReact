import { useState } from "react";


function App() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   /*
    *otra forma sería: handleEmailChange = ({target: {value}})=>{
    
    setEmail(value)
    } 
   */ 
  const handleEmailChange = (event)=> setEmail(event.target.value);
  const handlePasswordChange = ({target: {value}})=> setPassword(value);


  const handleFormSubmit= (event)=>{
    console.log("Submit");
    event.preventDefault();
    alert(`Usuario: ${email}, Password: ${password}`)
  }

  // console.log(email);
  // console.log(password);

  return (
    <div className="App app">
      <form onSubmit={handleFormSubmit}>
        <h2>Iniciar Sesión</h2>
        <label htmlFor="">
          Correo 
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label htmlFor="">
          Contraseña 
          <input type="password" value={password} onChange={handlePasswordChange}/>
        </label>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default App;
