import { authFirebase, dbFirebase } from '../firebase';
import { useForm } from "react-hook-form";
import { addDoc, collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import './Dashboard.css';

const Dashboard = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [cambio, setCambio] = useState(false)

    const [fundaciones, setFundaciones] = useState([]);
    const [valor, setValor] = useState("Crear");
    const [id, setId] = useState("");

    const cambiarColor = () => {
        if (cambio) {
            document.documentElement.style.filter = 'none'
        } else {
            document.documentElement.style.filter = 'invert(1)'
        }
        setCambio(!cambio)
    }

    const handleLogout = async () => {
        try {
            await authFirebase.signOut();
        } catch (error) {
            console.error("Error al salir:", error);
        }
    };

    const handleCreate = async (data) => {
        try {
            if (id) {
                await updateDoc(doc(dbFirebase, "fundaciones", id), data);
                setId("");
                reset({
                    nombre: '',
                    precio: '',
                    descripcion: ''
                });
                alert("Fundación actualizada con éxito");
            } else {
                await addDoc(collection(dbFirebase, "fundaciones"), data);
                reset();
            }
            handleGet();
        } catch (error) {
            console.log(error);
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

    const handleDelete = async (id) => {
        const confirmar = confirm("¿Estás seguro de que deseas eliminar esta fundación?");
        if (confirmar) {
            try {
                const fundacionDoc = doc(dbFirebase, "fundaciones", id);
                await deleteDoc(fundacionDoc);
                handleGet();
            } catch (error) {
                console.error("Error al eliminar:", error);
            }
        }
    };

    const handleEdit = (fundacion) => {
        setValor("Actualizar");
        setId(fundacion.id);
        reset({
            nombre: fundacion.nombre,
            precio: fundacion.precio,
            descripcion: fundacion.descripcion
        });
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
                    <button className="theme-toggle" onClick={cambiarColor}>🌙</button>
                    <button className="exit-btn" onClick={handleLogout}>Salir</button>
                </div>
            </header>

            <div className="content-layout">
                <section className="glass-card">
                    <div className="card-intro">
                        <h2>{valor} Fundación</h2>
                        <p>{id ? "Actualiza los datos de la ONG" : "Añade una nueva ONG a la red de apoyo"}</p>
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
                                placeholder="¿A quién ayudan? ¿Cuál es su misión?"
                                {...register("descripcion", { required: true })}
                            />
                            {errors.descripcion && <span className="err">Descripción requerida</span>}
                        </div>

                        <div className="form-actions">
                            <button type="submit" className="submit-btn">
                                {valor}
                            </button>
                            {id && (
                                <button 
                                    type="button" 
                                    className="cancel-btn"
                                    onClick={() => {
                                        setId("");
                                        setValor("Crear");
                                        reset({
                                            nombre: '',
                                            precio: '',
                                            descripcion: ''
                                        });
                                    }}
                                >
                                    Cancelar
                                </button>
                            )}
                        </div>
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
                                    <button 
                                        className="update-btn"
                                        onClick={() => handleEdit(fundacion)}
                                    >
                                        Actualizar
                                    </button>
                                    <button 
                                        className="delete-btn"
                                        onClick={() => handleDelete(fundacion.id)}
                                    >
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