export default {
  async agregarPeticion(context, payload) {
    try {
      let promesa = await fetch(
        `https://bdvue-5d091-default-rtdb.firebaseio.com/peticiones/${context.rootState.userId}.json`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload.valor),
        }
      );

      let datos = await promesa.json();

      if (datos.ok === false) {
        throw new Error("Error al almacenar datos de peticiones");
      } else {
        context.commit({ type: "agregarPeticion", valor: payload.valor });
      }
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async cargarDatos(context) {
    try {
      let promesa = await fetch(
        `https://bdvue-5d091-default-rtdb.firebaseio.com/peticiones/${context.rootState.userId}.json`,
        {
          method: "GET",
        }
      );

      let datos = await promesa.json();
      console.log(datos);
      if (datos && datos.ok === false) {
        throw new Error("Error al recuperar datos de peticiones");
      } else {
        let datosAux = new Array();

        for (let key in datos) {
          datosAux.push({
            id: key,
            email: datos[key].email,
            mensaje: datos[key].mensaje,
          });
          
        }
  
        context.commit("cargarDatos", datosAux);
      }
     
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
