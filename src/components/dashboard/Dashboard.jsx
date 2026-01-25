import { authFirebase } from '../firebase';
import { useForm } from "react-hook-form";
import { dbFirebase } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import './Dashboard.css';

const Dashboard = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleLogout = async () => {
        try {
            await authFirebase.signOut();
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    const handleCreate = async (data) => {
        try {
            await addDoc(collection(dbFirebase, "fundaciones"), data);
            reset();
            alert("¡Fundación registrada con éxito!");
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="dashboard-wrapper">
            <header className="main-header">
                <div className="header-brand">
                    <h1>VOCES QUE AYUDAN <span>| Panel Admin</span></h1>
                </div>
                <div className="header-user">
                    <button className="theme-btn">🌙</button>
                    <button className="exit-btn" onClick={handleLogout}>Salir</button>
                </div>
            </header>

            <div className="content-layout">
                {/* Sección Crear Fundación */}
                <section className="glass-card">
                    <div className="card-intro">
                        <h2>Registrar Fundación</h2>
                        <p>Añade una nueva Fundación a la red de apoyo</p>
                    </div>
                    <form className="admin-form" onSubmit={handleSubmit(handleCreate)}>
                        <div className="input-box">
                            <label>Nombre de la ONG:</label>
                            <input type="text" placeholder="Ej: Red de Apoyo Local" {...register("nombre", { required: true })} />
                            {errors.nombre && <span className="err">Campo requerido</span>}
                        </div>


                        <div className="input-box">
                            <label>Meta de Recaudación (USD):</label>
                            <input type="number" placeholder="0.00" {...register("precio", { required: true })} />
                            {errors.precio && <span className="err">Monto requerido</span>}
                        </div>

                        <div className="input-box">
                            <label>Descripción / Misión:</label>
                            <textarea placeholder="¿A quién ayudan?" {...register("descripcion", { required: true })} />
                            {errors.descripcion && <span className="err">Descripción requerida</span>}
                        </div>

                        <button type="submit" className="submit-btn">Guardar Registro</button>
                    </form>
                </section>

                {/* Sección Listado */}
                <section className="glass-card">
                    <div className="card-intro">
                        <h2>Listado de Trabajos</h2>
                        <p>Gestión de ONGs registradas</p>
                    </div>
                    <div className="empty-placeholder">
                        <div className="folder-icon"></div>
                        <p>No existen registros activos...</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Dashboard;