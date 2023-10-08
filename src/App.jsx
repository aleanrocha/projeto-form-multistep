// Icons
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
import {FiSend} from 'react-icons/fi'
// Components
import ReviewForm from './components/ReviewForm'
import UserForm from './components/UserForm'
import Thanks from './components/Thanks'
import Steps from './components/Steps'
// Hooks
import { useForm } from './hooks/useForm'
// Css
import './App.css'

function App() {
  const formComponents = [<UserForm />, <ReviewForm />, <Thanks />]
  const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep } = useForm(formComponents)

  return (
    <div className='app'>
      <header>
        <h1>Deixe sua avaliação</h1>
        <p>Ficamos felizes com sua compra, utilize o formulário abaixo para avaliar o produto.</p>
      </header>
      <div className="form-container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && 
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            }
            {!isLastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="button">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
