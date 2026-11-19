import {
 useState
}
from "react";

import {
 login
}

from "../services/authService";

function Login() {

 const [email,
 setEmail] =
 useState("");

 const [password,
 setPassword] =
 useState("");

 const handleSubmit =
 async (e) => {

  e.preventDefault();

  const data =
  await login({
    email,
    password
  });

  localStorage.setItem(
   "token",
   data.token
  );

  window.location.href="/";
 };

 return (

  <div
   className="auth-page"
  >

   <form
    onSubmit={handleSubmit}
    className="auth-form"
   >

    <h1>
      Iniciar Sesión
    </h1>

    <input
     type="email"
     placeholder="Email"
     value={email}
     onChange={(e)=>
      setEmail(
       e.target.value
      )
     }
    />

    <input
     type="password"
     placeholder="Contraseña"
     value={password}
     onChange={(e)=>
      setPassword(
       e.target.value
      )
     }
    />

    <button>
      Entrar
    </button>

   </form>

  </div>

 );

}

export default Login;