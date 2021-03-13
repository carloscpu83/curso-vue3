import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

const Entrenadores = {
  namespaced: true,
  state() {
    return {
      datos: [
        {
          id: "c1",
          firstName: "Maximilian",
          lastName: "Schwarzmüller",
          areas: ["frontend", "backend", "career"],
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30,
        },
        {
          id: "c2",
          firstName: "Julie",
          lastName: "Jones",
          areas: ["frontend", "career"],
          description:
            "I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.",
          hourlyRate: 30,
        },
        {
          id: "c3",
          firstName: "Carl",
          lastName: "Winslow",
          areas: ["backend"],
          description:
            "Grr",
          hourlyRate: 50,
        },
      ],
    };
  },
  getters: getters,
  mutations: mutations,
  actions: actions,
};

export default Entrenadores;
