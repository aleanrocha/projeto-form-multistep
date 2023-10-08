// Icons
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'
// Components
import ReviewForm from './components/ReviewForm'
import UserForm from './components/UserForm'
import Thanks from './components/Thanks'
import Steps from './components/Steps'
// Hooks
import { useForm } from './hooks/useForm'
import { useState } from 'react'
// Css
import './App.css'

function App() {
  const formTemplate = {
    name: '',
    email: '',
    review: '',
    comment: '',
  }
  const [data, setData] = useState(formTemplate)
  const updateFieldHandler = (key, value) => {
    setData((prevData) => {
      return {...prevData, [key]: value}
    }) 
  }

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data} />,
  ]
  const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep } =
    useForm(formComponents)

  return (
    <div className='app'>
      <header>
        <h1>Deixe sua avaliação</h1>
        <p>
          Ficamos felizes com sua compra, utilize o formulário abaixo para
          avaliar o produto.
        </p>
      </header>
      <div className='form-container'>
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className='inputs-container'>{currentComponent}</div>
          <div className='actions'>
            {!isFirstStep && (
              <button type='button' onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}
            {!isLastStep ? (
              <button type='submit'>
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type='button'>
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
