import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import PropTypes from 'prop-types';
import style from './style.module.css';

const Login = ({ history, setToken }) => {
  const { register, handleSubmit } = useForm();

  const submit = async (data) => {
    try {
      const res = await axios.post('https://backend-pelis.herokuapp.com/api/v1/usuario/ingreso', data);
      await localStorage.setItem('token', res.data.data.token);
      const token = await localStorage.getItem('token');
      setToken(token);
      history.push('/');
    } catch {
      alert('contraseña o usuario icorrectos');
    }
  };
  return (
    <div className={style.container}>
      <div className={style.tittleimg}>
        <h1 className={style.h1}>MicroFrontendLoginComponent</h1>
        <div className={style.img}></div>
      </div>
      <form className={style.loginForm} onSubmit={handleSubmit(submit)}>
        <div className={style.example}>
          <h3
            style={{ alignSelf: 'center', fontSize: '20px' }}
            className={style.h3}
          >
            Puedes utilizar estos datos
          </h3>
          <p className={style.p}>E-mail: admin@admin.com</p>
          <p className={style.p}>Contraseña: root</p>
        </div>
        <div className={style.input}>
          <div className={style.input}>
            <label htmlFor='email-login' className={style.label}>E-mail: </label>
            <input
              type='email'
              {...register('email')}
              id={style.emailLogin}
              required
            ></input>
          </div>

          <div className={style.input}>
            <label htmlFor='password' className={style.label}>Contraseña: </label>
            <input
              type='password'
              {...register('contrasena')}
              id={style.password}
              required
            />
          </div>

          <button className={style.botonLogin}>Ingresar</button>
        </div>
        <div className={style.question}>
        <p>
          ¿No estás registrado?
        </p>
        <button type='button'
        className={style.botonRegister}
        onClick={() => history.push('/logup')}
        >Regístate</button>
        </div>
      </form>
    </div>
  );
};
Login.defaultProps = {
  history: {},
  setToken: function () {}
};

Login.propTypes = {
  history: PropTypes.object.isRequired,
  setToken: PropTypes.func.isRequired
};
export default Login;
