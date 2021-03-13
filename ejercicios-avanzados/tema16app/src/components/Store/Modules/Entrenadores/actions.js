export default {
  async addEntrenador(context, payload) {
    try {
      let promesa = await fetch(
        `https://bdvue-5d091-default-rtdb.firebaseio.com/entrenadores/${context.rootGetters.userId}.json`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload.valor),
        }
      );

      let respuesta = promesa.json();

      if (respuesta.ok === false) {
        throw new Error('Error al recuperar entrenadores');
      } else {
        let entrenador = {
          ...payload.valor,
          id: context.rootGetters.userId,
        };

        context.commit({
          type: "agregarEntrenador",
          valor: entrenador,
        });
      }
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async cargarDatos(context) {
    try {
      let promesa = await fetch(
        "https://bdvue-5d091-default-rtdb.firebaseio.com/entrenadores.json",
        {
          method: "GET",
        }
      );

      let datos = await promesa.json();

      let datosAux = new Array();

      if (datos.ok === false) {
        throw new Error("Error al obtener datos de entrenadores");
      } else {
        for (let key in datos) {
          datosAux.push({
            id: key,
            firstName: datos[key].firstName,
            lastName: datos[key].lastName,
            description: datos[key].description,
            hourlyRate: datos[key].hourlyRate,
            areas: datos[key].areas,
          });
        }
        context.commit("cargarDatos", datosAux);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
