export default {
  async signup(context, payload) {
    let promesa = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA8Pj_PLky0DGbCJbU2OlT2SBliZbNoJQI',
      {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        })
      }
    );

    let datos = await promesa.json();
    console.log(promesa);
   
    if(!promesa.ok){
      throw new Error(
        datos.message ||
          'Se ha producido un error al dar de alta el nuevo usuario.'
      );
    } else {
      context.commit('setUser', {
        idToken: datos.idToken,
        userId: datos.localId,
        expiresIn: datos.expiresIn
      });
    }
  },
  async login(context, payload) {
    let promesa = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA8Pj_PLky0DGbCJbU2OlT2SBliZbNoJQI',
      {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        })
      }
    );

    let datos = await promesa.json();
    if(!promesa.ok){
      throw new Error(datos.message || 'Error al loguearse');
    } else {
      context.commit('setUser', {
        idToken: datos.idToken,
        userId: datos.localId,
        expiresIn: datos.expiresIn
      });
    }
  },
};
