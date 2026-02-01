import { NavLink } from "react-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { authFirebase } from "../firebase";
import "./Register.css"; 

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
                
                <h2 className="register-title">Registro</h2>

                <form onSubmit={handleSubmit(handleRegister)} className="auth-form">
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Tu nombre"
                            className="custom-input"
                            {...register("name", { required: true })}
                        />
                        {errors.name && <span className="error-text">El nombre es requerido</span>}
                    </div>

                    <div className="input-group">
                        <input
                            type="email"
                            placeholder="Tu email"
                            className="custom-input"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span className="error-text">El correo es requerido</span>}
                    </div>

                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="Tu contraseña"
                            className="custom-input"
                            {...register("password", { required: true })}
                        />
                        {errors.password && <span className="error-text">La contraseña es requerida</span>}
                    </div>

                    
                    <button type="submit" className="btn-submit">
                        Registrarse ahora
                    </button>
                </form>

                <div className="footer-link">
                    <NavLink to="/login" className="login-link">
                        ¿Ya tienes cuenta? Inicia sesión
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Register