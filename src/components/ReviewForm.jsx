import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiFrownFill,
  BsFillEmojiNeutralFill,
} from 'react-icons/bs'
import './ReviewForm.css'
const ReviewForm = ({ data, updateFieldHandler }) => {
  return (
    <div className='review-form'>
      <div className='form-control score-container'>
        <label className='radio-container'>
          <input
            type='radio'
            name='review'
            value='unsatisfied'
            required
            checked={data.review === 'unsatisfied'}
            onChange={(e) => updateFieldHandler('review', e.target.value)}
          />
          <BsFillEmojiFrownFill id='unsatisfied' />
          <p>Insatisfeito</p>
        </label>
        <label className='radio-container'>
          <input
            type='radio'
            name='review'
            value='neutral'
            required
            checked={data.review === 'neutral'}
            onChange={(e) => updateFieldHandler('review', e.target.value)}
          />
          <BsFillEmojiNeutralFill id='neutral' />
          <p>Poderia ser melhor</p>
        </label>
        <label className='radio-container'>
          <input
            type='radio'
            name='review'
            value='satisfied'
            required
            checked={data.review === 'satisfied'}
            onChange={(e) => updateFieldHandler('review', e.target.value)}
          />
          <BsFillEmojiSmileFill id='satisfied' />
          <p>Satisfeito</p>
        </label>
        <label className='radio-container'>
          <input
            type='radio'
            name='review'
            value='very_satisfied'
            required
            checked={data.review === 'very_satisfied'}
            onChange={(e) => updateFieldHandler('review', e.target.value)}
          />
          <BsFillEmojiHeartEyesFill id='very_satisfied' />
          <p>Muito satisfeito</p>
        </label>
      </div>
      <div className='form-control'>
        <label htmlFor='icomment'>Comentário:</label>
        <textarea
          name='comment'
          id='icomment'
          placeholder='Qual foi sua experiência com o produto?'
          required
          value={data.comment || ''}
          onChange={(e) => updateFieldHandler('comment', e.target.value)}
        ></textarea>
      </div>
    </div>
  )
}

export default ReviewForm
