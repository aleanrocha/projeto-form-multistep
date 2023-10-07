// Components
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
import './App.css'

function App() {
  return (
    <div className='app'>
      <header>
        <h1>Deixe sua avaliação</h1>
        <p>Ficamos felizes com sua compra, utilize o formulário abaixo para avaliar o produto.</p>
      </header>
      <div className="form-container">
        <p>etapas</p>
        <form>
          <div className="inputs-container"></div>
          <div className="actions">
            <button type="button">
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
            <button type="submit">
              <span>Avançar</span>
              <GrFormNext />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
