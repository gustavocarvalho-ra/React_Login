import React from 'react'
import './LoginForm.css'


const LoginForm = () => {
  return (
    <div className="container">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder='Nome de Usuário' required />
        </div>
        <div className="input-box">
          <input type="password" placeholder='Senha' required />
        </div>

        <div className="esqueceu-senha">
          <label><input type="checkbox" />Salvar a senha</label>
          <a href="#">Esqueci a senha</a>
        </div>

        <button type='submit'>Login</button>

        <div className="register-link">
          <p>Não possui conta? <a href="#">Registrar</a></p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm