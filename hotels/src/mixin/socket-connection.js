
import ENV from '../environment/environment';
import Vue from 'vue';
import VueWebsocket from "vue-websocket";

var socketConnection = {
    created () {
      Vue.use(VueWebsocket,ENV[ENV.type].url.hotel.webSocket);  
    },
    socket: {
            events: {
                changed(msg) {
                    console.log("Something changed: " + msg);
                },
                connect() {
                    console.log("Websocket connected to " + this.$socket.nsp);
                },

                /* common socket.io events
                connect() {
                    console.log("Websocket connected to " + this.$socket.nsp);
                },

                disconnect() {
                    console.log("Websocket disconnected from " + this.$socket.nsp);
                },

                error(err) {
                    console.error("Websocket error!", err);
                }
                */

            }
    }
};

export default socketConnection;
