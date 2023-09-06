import logo from './logo.svg';
import './App.css';
import car from './componentes/car';

function App() {
  return (
    <>
  <h1>Tareas Pendientes de Hedy Lamarr</h1>
  <img
    src="https://i.imgur.com/yXOvdOSs.jpg"
    alt="Hedy Lamarr"
    className="photo"
  />
  <ul>
    <li>Inventar nuevo semáforo</li>
    <li>Ensayar la escena de la película</li>
    <li>Mejorar la tecnología del espectro</li>
  </ul>

  <car />
</>

  );
}

export default App;
