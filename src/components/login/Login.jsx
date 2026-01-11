import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { authFirebase } from "../firebase";
import "./Login.css";

const Login = () => {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleLogin = async (data) => {
    const { email, password } = data;

    try {
      await signInWithEmailAndPassword(authFirebase, email, password);
      navigate("/");
    } catch (error) {
      alert("Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit(handleLogin)}>

        <h2>Iniciar Sesión</h2>

        <input
          type="email"
          placeholder="Correo electrónico"
          {...register("email", { required: true })}
        />
        {errors.email && <span className="errors">Email requerido</span>}

        <input
          type="password"
          placeholder="Contraseña"
          {...register("password", { required: true })}
        />
        {errors.password && <span className="errors">Contraseña requerida</span>}

        <button type="submit">Ingresar</button>

       <NavLink to="/registro" className="enlace">
      ¿No tienes cuenta? Regístrate
      </NavLink>


      </form>
    </div>
  );
};

export default Login;
