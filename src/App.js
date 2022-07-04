import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

const App = ({ history, token, setToken }) => {
  useEffect(() => {
    const token = window.localStorage.getItem('token');
    setToken(token);
  }, [token]);

  window.addEventListener('storage', () => {
    setToken(window.localStorage.getItem('token'));
  });

  return (
      <nav className={style.nav}>
        <div className={style.innav}>
          <button className={style.home}
          title='Inicio'
          onClick={() => history.push('/')}></button>
          <h1 className={style.tittle}>MicroFrontendNav</h1>
        </div>
        <div className={style.innav}>
          <button className={style.products}
          title='Lista de Productos'
          onClick={() => history.push('/products')}></button>
          <button className={style.cart}
          title='Carrito de compras'
          onClick={() => history.push('/cart')}></button>
        </div>
        <div className={style.innav}>
          <button className={style.logup}
          title='Regístrate'
          onClick={() => history.push('/logup')}></button>
         {
          token
            ? (<button className={style.logout}
              title='Salir'
              onClick={() => {
                const token = window.localStorage.setItem('token', '');
                setToken(token);
                history.push('/login');
              }}></button>)
            : (<button className={style.login}
              title='Ingresar'
              onClick={() => history.push('/login')}></button>)}

        </div>
      </nav>
  );
};
App.defaultProps = {
  history: {},
  token: '',
  setToken: function () {}
};

App.propTypes = {
  history: PropTypes.object.isRequired,
  token: PropTypes.string.isRequired,
  setToken: PropTypes.func.isRequired
};

export default App;
