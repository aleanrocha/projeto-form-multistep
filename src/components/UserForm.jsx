const userForm = ({ data, updateFieldHandler }) => {
  return (
    <>
      <div className='form-control'>
        <label htmlFor='iname'>Nome:</label>
        <input
          type='text'
          name='name'
          id='iname'
          placeholder='Digite seu nome'
          required
          value={data.name || ''}
          onChange={(e) => updateFieldHandler('name', e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label htmlFor='iemail'>E-mail:</label>
        <input
          type='email'
          name='email'
          id='iemail'
          placeholder='Digite seu e-mail'
          required
          value={data.email || ''}
          onChange={(e) => updateFieldHandler('email', e.target.value)}
        />
      </div>
    </>
  )
}

export default userForm
