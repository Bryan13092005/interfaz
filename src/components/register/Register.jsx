import { NavLink } from "react-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { authFirebase } from "../firebase";

const Register = () => {

    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleRegister = async (data) => {
        const { email, password } = data
        try {
            await createUserWithEmailAndPassword(authFirebase, email, password)
            navigate("/login")
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Registro</h2>

                <form onSubmit={handleSubmit(handleRegister)}>
                    <input
                        type="text"
                        placeholder="Tu nombre"
                        {...register("name", { required: true })}
                    />
                    {errors.name && <span className="error-text">El nombre es requerido</span>}

                    <input
                        type="email"
                        placeholder="Tu email"
                        {...register("email", { required: true })}
                    />
                    {errors.email && <span className="error-text">El correo es requerido</span>}

                    <input
                        type="password"
                        placeholder="Tu contraseña"
                        {...register("password", { required: true })}
                    />
                    {errors.password && <span className="error-text">La contraseña es requerida</span>}

                    <button type="submit">Registrarse</button>
                </form>

                <NavLink to="/login" className="login-link">
                    ¿Ya tienes cuenta? Inicia sesión
                </NavLink>
            </div>
        </div>
    )
}

export default Register
