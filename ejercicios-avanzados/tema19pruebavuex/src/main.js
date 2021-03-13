import { createApp } from 'vue';
import App from './App.vue';
import { createStore } from 'vuex';

const mistore = createStore({
    state(){
        return {
            valor: 0
        };
    },
    getters:{
        valor(state){
            return state.valor;
        }
    },
    mutations:{
        incrementarValor(state){
            state.valor++;
        }
    },
    actions: {
        incrementar(context){
            context.commit('incrementarValor');
        }
    }
});

const app = createApp(App);
app.use(mistore);
app.mount('#app');
