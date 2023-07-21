import { FiSearch } from 'react-icons/fi'
import './style.css'

function App() {
  return (
    <div className="container">
        <h1 className="title">BUSCADOR DE CEP</h1>

        
    <div className="containerInput">
      <input type="text" placeholder="Digite seu CEP..."></input>
      <button className="buttonSearch"><FiSearch size={25} color='#FFF'/></button>
    </div>

    <main className="main">
      <h2>CEP: 15600000</h2>

      <span>Rua Teste</span>
      <span>Complemento Teste</span>
      <span>Bairro Teste</span>
      <span>Fernandópolis - SP</span>

    </main>

    </div>
    

  );
}

export default App;
