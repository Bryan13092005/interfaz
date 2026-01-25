import { authFirebase, dbFirebase } from '../firebase';
import { useForm } from "react-hook-form";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import './Dashboard.css';

const Dashboard = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const [fundaciones, setFundaciones] = useState([]);

    const handleLogout = async () => {
        try {
            await authFirebase.signOut();
            navigate("/");
        } catch (error) {
            console.error("Error al salir:", error);
        }
    };

    const handleCreate = async (data) => {
        try {
            await addDoc(collection(dbFirebase, "fundaciones"), data);
            reset();
            handleGet();
            alert("¡Fundación registrada con éxito!");
        } catch (error) {
            console.error("Error al crear:", error);
        }
    };

    const handleGet = async () => {
        try {
            const snapshot = await getDocs(collection(dbFirebase, "fundaciones"));
            const docs = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setFundaciones(docs);
        } catch (error) {
            console.error("Error al obtener registros:", error);
        }
    };

    useEffect(() => {
        handleGet();
    }, []);

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
                <section className="glass-card">
                    <div className="card-intro">
                        <h2>Registrar Fundación</h2>
                        <p>Añade una nueva ONG a la red de apoyo</p>
                    </div>
                    <form className="admin-form" onSubmit={handleSubmit(handleCreate)}>
                        <div className="input-box">
                            <label>Nombre de la ONG:</label>
                            <input
                                type="text"
                                placeholder="Ej: Red de Apoyo"
                                {...register("nombre", { required: true })}
                            />
                            {errors.nombre && <span className="err">Campo requerido</span>}
                        </div>

                        <div className="input-box">
                            <label>Meta de Recaudación (USD):</label>
                            <input
                                type="number"
                                placeholder="0.00"
                                {...register("precio", { required: true })}
                            />
                            {errors.precio && <span className="err">Monto requerido</span>}
                        </div>

                        <div className="input-box">
                            <label>Descripción / Misión:</label>
                            <textarea
                                placeholder="¿A quién ayudan?"
                                {...register("descripcion", { required: true })}
                            />
                            {errors.descripcion && <span className="err">Descripción requerida</span>}
                        </div>

                        <button type="submit" className="submit-btn">
                            Guardar Registro
                        </button>
                    </form>
                </section>

                <section className="glass-card">
                    <div className="card-intro">
                        <h2>Listado de Fundaciones</h2>
                        <p>Gestión de ONGs registradas</p>
                    </div>

                    {fundaciones.length === 0 ? (
                        <div className="empty-placeholder">
                            <div className="folder-icon"></div>
                            <p>No existen registros activos...</p>
                        </div>
                    ) : (
                        fundaciones.map((fundacion) => (
                            <div className="route-card" key={fundacion.id}>
                                <div className="route-info">
                                    <p><strong>Nombre ONG:</strong> {fundacion.nombre}</p>
                                    <p><strong>Meta de Recaudación:</strong> ${fundacion.precio}</p>
                                    <p><strong>Descripción / Misión:</strong> {fundacion.descripcion}</p>
                                </div>

                                <div className="route-actions">
                                    <button className="update-btn">
                                        Actualizar
                                    </button>
                                    <button className="delete-btn">
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </section>
            </div>
        </div>
    );
};

export default Dashboard;
