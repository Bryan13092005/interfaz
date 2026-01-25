import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Home from './components/landing/Landing';
import Dashboard from './components/dashboard/Dashboard';
import { useEffect, useState } from 'react';
import { authFirebase, dbFirebase } from './components/firebase';
import { collection, getDocs } from 'firebase/firestore';

function App() {
  const [user, setUser] = useState(null);
  const [fundaciones, setFundaciones] = useState([]);
  const [loading, setLoading] = useState(true); 

  const obtenerDatos = async () => {
    try {
      const snapshot = await getDocs(collection(dbFirebase, "fundaciones"));
      const documentos = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setFundaciones(documentos);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = authFirebase.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false); 
    });
    obtenerDatos();
    return () => unsubscribe();
  }, []);

  if (loading) return null;

  return (
    <BrowserRouter basename="/interfaz"> 
      <Routes>
        <Route path="/" element={<Home fundaciones={fundaciones} />} />
        <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Navigate to="/login" />} />
        <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/registro" element={user ? <Navigate to="/dashboard" /> : <Register />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;