import logo from './logo.svg';
import './App.css';
import Usuario from './componentes/Usuario';


function App() {
  return (
    <div className="App">
      <Usuario color= "pink" nombre="Maria" cargo="Gerente general" conoceme="CV de Maria"/>
      <Usuario color= "blue" nombre="Luis Garcia" cargo="Subgerente general" conoceme="CV de Luis"/>
      <Usuario color= "yellow" nombre="Pedro" cargo="Gerente general de región" conoceme="CV de Pedro" />
    </div>
  );
}

export default App;
