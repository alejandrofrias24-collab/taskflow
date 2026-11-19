import { useState }
from "react";

import {
 register
}
from "../services/authService";

export default function Register() {

 const [form,
 setForm] = useState({
  nombre:"",
  email:"",
  password:""
 });

 const handleChange =
 (e) => {

  setForm({

   ...form,

   [e.target.name]:
   e.target.value

  });

 };

 const handleSubmit =
 async (e) => {

  e.preventDefault();

  await register(form);

  window.location.href =
  "/login";

 };

 return (

  <form
   onSubmit={handleSubmit}
  >

   <input
    name="nombre"
    placeholder="Nombre"
    onChange={handleChange}
   />

   <input
    name="email"
    placeholder="Email"
    onChange={handleChange}
   />

   <input
    name="password"
    type="password"
    placeholder="Contraseña"
    onChange={handleChange}
   />

   <button>
    Registrarse
   </button>

  </form>

 );

}