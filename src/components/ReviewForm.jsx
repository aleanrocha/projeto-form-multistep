import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiFrownFill,
  BsFillEmojiNeutralFill,
} from 'react-icons/bs'
import './ReviewForm.css'
const ReviewForm = () => {
  return (
    <div className='review-form'>
      <div className='form-control score-container'>
        <label className='radio-container'>
          <input type='radio' name='review' value='unsatisfied' required />
          <BsFillEmojiFrownFill id='unsatisfied' />
          <p>Insatisfeito</p>
        </label>
        <label className='radio-container'>
          <input type='radio' name='review' value='neutral' required />
          <BsFillEmojiNeutralFill id='neutral' />
          <p>Poderia ser melhor</p>
        </label>
        <label className='radio-container'>
          <input type='radio' name='review' value='satisfied' required />
          <BsFillEmojiSmileFill id='satisfied' />
          <p>Satisfeito</p>
        </label>
        <label className='radio-container'>
          <input type='radio' name='review' value='very_satisfied' required />
          <BsFillEmojiHeartEyesFill id='very_satisfied' />
          <p>Muito satisfeito</p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="icomment">Comentário:</label>
        <textarea name="comment" id="icomment" placeholder='Qual foi sua experiência com o produto?' required></textarea>
      </div>
    </div>
  )
}

export default ReviewForm
