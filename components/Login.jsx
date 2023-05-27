export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault()

    const password = e.target.inputPass.value
    if (password.trim() !== '') {
      localStorage.setItem('LOCAL_USERPASS', password)
    }

    window.location.reload()
  }

  return (
    <form className='p-10' onSubmit={handleSubmit}>
      <input id='inputPass' className='p-4' placeholder='Password' type='password' />
    </form>
  )
}
