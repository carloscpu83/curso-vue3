const app = Vue.createApp({
    data(){
        return{
            vidaJugador: 100,
            vidaMonstruo: 100,
            cantCuraciones: 3,
            cantAtaquesEspeciales: 3,
            ataqueMinJugador: 5,
            ataqueMaxJugador: 10,
            ataqueEspecialMinJugador: 5,
            ataqueEspecialMaxJugador: 20,
            ataqueMinMonstruo: 6,
            ataqueMaxMonstruo: 12,
            curacionMin: 8,
            curacionMax: 16,
            logPartida: [],
            alerta: '',
            desactivarBotones : false
        };
    },
    methods: {
        generarNumeroAleatorio: function(min, max){
            return Math.floor((Math.random() * (max - min)) + min);
        },
        ataqueMontruo: function (){
            let ataqueMontruo = this.generarNumeroAleatorio(this.ataqueMinMonstruo, this.ataqueMaxMonstruo);
            this.vidaJugador -= ataqueMontruo;
            this.agregarMovimientoLog('El montruo ha atacado con ' + ataqueMontruo + ' puntos.');
        },
        rondaAtaqueNormal:function(){
            let ataqueJugador = this.generarNumeroAleatorio(this.ataqueMinJugador, this.ataqueMaxJugador);
            this.vidaMonstruo -= ataqueJugador;
            this.agregarMovimientoLog('El jugador ha atacado con ' + ataqueJugador + ' puntos.');

            this.ataqueMontruo();
        },
        rondaAtaqueEspecial: function(){
            if(this.cantAtaquesEspeciales - 1 >= 0){
                this.cantAtaquesEspeciales--;
                let ataqueJugador = this.generarNumeroAleatorio(this.ataqueEspecialMinJugador, this.ataqueEspecialMaxJugador);
                this.vidaMonstruo -= ataqueJugador;
                this.agregarMovimientoLog('El jugador ha atacado con ' + ataqueJugador + ' puntos.');
                
                this.ataqueMontruo();
            } else {
                alert('No es posible lanzar más ataques especiales.');
            }
            
        },
        rondaAtaqueCuracion: function(){
            if(this.cantCuraciones - 1 >= 0){
                this.cantCuraciones--;
                let healJugador = this.generarNumeroAleatorio(this.curacionMin, this.curacionMax);
                this.vidaJugador  = this.vidaJugador + healJugador > 100 ? 100 : this.vidaJugador + healJugador;
                this.agregarMovimientoLog('El jugador se ha curado con ' + healJugador + ' puntos.');
                
                this.ataqueMontruo();
            }else{
                alert('No es posible lanzar más curaciones.');
            }
        },
        clasificarColor: function(vida){
            let color = null;
            if(vida >= 50){
                color = '#00a876';
            } else if(vida >= 30){
                color = 'yellow';
            } else {
                color = 'red';
            }
            return color;
        },
        resetearPartida: function(){
            if(confirm("¿Desea resetear la partida?")){
                this.vidaJugador = 100;
                this.vidaMonstruo = 100;
                this.cantCuraciones = 3;
                this.cantAtaquesEspeciales = 3;
                this.logPartida = [];
                this.desactivarBotones = false;
            }
        },
        abandonarPartida: function(){
            if(this.vidaJugador > 0 && this.vidaMonstruo > 0){
                if(confirm("¿Desea abandonar la partida?")){
                    alerta = 'MONSTER WIN!!!';
                    this.desactivarBotones = true;
                    this.resetearPartida();
                }
            } else {
                alert('La partida se encuentra finalizada.');
                this.resetearPartida();
            }
        },
        agregarMovimientoLog: function(texto){
            this.logPartida.unshift(texto);
        }
    },
    computed:{
        estiloVidaMonstruo(){
            return {width: (this.vidaMonstruo > 0 ? this.vidaMonstruo : 0) +"%", backgroundColor: this.clasificarColor(this.vidaMonstruo)};
        },
        estiloVidaJugador(){
            return {width: (this.vidaJugador > 0 ? this.vidaJugador : 0) +"%", backgroundColor: this.clasificarColor(this.vidaJugador)};
        }
    },
    watch:{
        vidaJugador(valor){
            if(valor <= 0 && this.vidaMonstruo <= 0){
                this.alerta = 'DRAW';
            } else if(valor <= 0 && this.vidaMonstruo > 0){
                this.alerta = 'MONSTER WIN!!!';
            }
        },
        vidaMonstruo(valor){
            if(valor <= 0 && this.vidaJugador <= 0){
                this.alerta = 'DRAW';
            } else if(valor <= 0 && this.vidaJugador > 0){
                this.alerta = 'PLAYER WIN!!!';
            }
        },
        alerta(value){
            alert(value);
            this.desactivarBotones = true;
            this.resetearPartida();
        }
    }
});

app.mount("#game");