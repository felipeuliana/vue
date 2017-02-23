<template>
    <div>
        <div class="columns minor-6 medium-3 large-6">
            <label class="product-form-label" for="rooms-quantity">Quartos</label>
            <select class="product-form-input" id="rooms-quantity" v-model="roomQuantity" v-on:change="defineRooms(roomQuantity)">
                <option v-for="maxRoom in maxRooms" v-bind:value="maxRoom">{{maxRoom}}</option>
            </select>
        </div>

        <div class="columns large-12" v-for="(room,index) in rooms">
            <div class="room-container row">

            <div class="room-label-line">
                <span class="room-label-text">quarto {{index + 1}}</span>
            </div>

            <div class="minor-6 medium-3 large-6 columns">
                <label for="adults-quantity" class="product-form-label">
                Adultos<span class="sub-label">+ 18 anos</span>
                </label>
                <input class="product-form-input" id="adults-quantity" type="number" min="0" :value="2" v-model="room.adults">
            </div>
            <div class="minor-6 medium-3 large-6 columns">
                <label for="children-quantity" class="product-form-label">
                Crianças<span class="sub-label">ate 17</span>
                </label>
                <select class="product-form-input" id="rooms-quantity" v-model="room.childQuantity" v-on:change="defineChildren(room.childQuantity,index)">
                    <option>0</option>
                    <option v-for="maxChild in maxChildren" v-bind:value="maxChild" :key="room">{{maxChild}}</option>
                </select>
            </div>

            <div class="minor-12 columns">
                <label for="" class="product-form-label">Idade da Criança no fim da viagem</label>
                <div class="row">
                    <div class="minor-3 large-3 columns" v-for="child in room.children">
                        <select name="" id="" class="product-form-input" aria-labelledby="children-ages">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12" selected="">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                        </select>
                    </div>
                </div><!-- / .row -->
            </div>

            </div><!-- / .room-container -->    
        </div>
</template>
<script>
    export default {
        name: 'request-rooms',
        data:function(){
            return{
                selected:1,
                rooms:[],
                room:{
                    adults:1,
                    childQuantity:0,
                    children:[]
                },
                child:{
                    age:0
                },                
                maxRooms:8,
                maxChildren:9,
                maxChild:0,
                roomQuantity:1,
                minRoom:1,
                childQuantity:0
            }
        },
        mounted(){
            this.defineRooms(1);
        },
        methods: {
            defineRooms(quantity){
                this.rooms = _.times(quantity,this.createRoom);    
            },
            defineChildren(quantity,index){
                this.rooms[index].children = _.times(quantity,this.createChild);    
            },                            
            createRoom(){
                return Object.create(JSON.parse(JSON.stringify(this.room)));
            },
            createChild(){
                return Object.create(JSON.parse(JSON.stringify(this.child)));
            }                        
        }         
    }
</script>