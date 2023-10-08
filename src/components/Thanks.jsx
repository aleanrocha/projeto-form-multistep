import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiFrownFill,
  BsFillEmojiNeutralFill,
} from 'react-icons/bs'
import './Thanks.css'
const Thanks = () => {
  return (
    <div className='thanks-container'>
      <h2>Falta pouco...</h2>
      <p>
        Asua opinião é muito importante, em breve você receberá um cupom de
        desconto para sua próxima compra.
      </p>
      <p>Para concluir sua avaliação clique no botão de enviar abaixo.</p>
      <h3>Aqui está o resumo de sua avaliação</h3>
      <p className='review-data'>
        <span>Satisfação com o produto:</span>
      </p>
      <p className='review-data'>
        <span>Comentário:</span>
      </p>
    </div>
  )
}

export default Thanks