import ENV from '../environment/environment';
import Vue from 'vue';
import VueWebsocket from "vue-websocket";

var promotion = {
    methods:{
        getPromotion(productType,data){
            var productToken = this.extractProductToken(productType,data);
            var requestObject= this.generateRequest(productType,productToken);
            console.log(requestObject);
        }        
    }    


};

function generateRequest(productType,data){
    
    var availableItems = [];

    _.foreach(data,function(each,index){

        var objectPromotion = {
            rph:index,
            rateToken: each
        }
        
        availableItens.push(objectPromotion);
    });       
}

function extractProductToken(productType,data){
    switch(productType){
        case 'HOTEL':{
          [].concat.apply([], this.hotels).map(
            hotel => {
              return [].concat.apply(
                [], hotel.rooms.map(
                  room => {return [].concat.apply([], room.rates.map(rate => rate.rateToken))}
                )
              );
            }
          );
        }
    }
}

export default promotionInject;