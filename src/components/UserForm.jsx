const userForm = () => {
  return (
    <>
      <div className='form-control'>
        <label htmlFor='iname'>Nome</label>
        <input
          type='text'
          name='name'
          id='iname'
          placeholder='Digite seu nome'
          required
        />
      </div>
      <div className='form-control'>
        <label htmlFor='iemail'>E-mail</label>
        <input
          type='email'
          name='email'
          id='iemail'
          placeholder='Digite seu e-mail'
          required
        />
      </div>
    </>
  )
}

export default userForm
