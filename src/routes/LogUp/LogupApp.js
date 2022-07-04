import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import PropTypes from 'prop-types';
import style from './style.module.css';

const SignUp = ({ history }) => {
  const { register, handleSubmit } = useForm();
  const submit = async (data) => {
    try {
      await axios.post('https://backend-pelis.herokuapp.com/api/v1/usuario', data);
      history.push('../login');
    } catch {
      alert('no phas podido registrarte');
    }
  };

  return (
    <div className={style.container}>
      <div className={style.tittleimg}>
        <h1 className={style.h1}>MicroFrontendLogupComponent</h1>
        <div className={style.img}></div>
      </div>
      <form className={style.loginForm} onSubmit={handleSubmit(submit)}>
        <div className={style.input}>
          <div className={style.input}>
            <label htmlFor='email-logup'className={style.label}>E-mail: </label>
            <input
              type='email'
              {...register('email')}
              className={style.log}
              required
            ></input>
          </div>
          <div className={style.input}>
            <label htmlFor='nombre' className={style.label}>Nombre: </label>
            <input
              type='text'
              {...register('nombre')}
              className={style.log}
              required
            ></input>
          </div>
          <div className={style.input}>
            <label htmlFor='permisos' className={style.label}>Perimisos: </label>
            <select
              type='text'
              {...register('permisos')}
              className={style.log}
              required
            >
              <option value="administrador">administrador</option>
            </select>
          </div>

          <div className={style.input}>
            <label htmlFor='password'className={style.label}>Contraseña: </label>
            <input
              type='password'
              {...register('contrasena')}
              id={style.password}
              required
            />
          </div>
        </div>
        <button className={style.botonLogin}>Ingresar</button>
        <div className={style.question}>
        <p>
          ¿Ya estás registrado?
        </p>
        <button type='button'
        className={style.botonRegister}
        onClick={() => history.push('/login')}
        >Ingresa</button>
        </div>
      </form>
    </div>
  );
};
SignUp.defaultProps = {
  history: {}
};

SignUp.propTypes = {
  history: PropTypes.object.isRequired
};
export default SignUp;
