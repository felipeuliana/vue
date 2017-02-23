<template>
    <div v-if="useDialogWindow">
        <md-dialog md-open-from="#custom" md-close-to="#custom" ref="dialog1">
            <md-dialog-title>
                <header class="modal-primary-header">
                    <h4 class="modal-primary-heading"><slot name="map-title">Mapa da Localidade</slot></h4>
                </header>
            </md-dialog-title>
            <md-dialog-content>
                <div class="modal-primary-row">
                 <div id="map" style="height:500px; width: 100%;"></div>
                </div>
            </md-dialog-content>
            <div class="modal-primary-button">
                <button class="modal-primary-close-button" type="button" name="close-button" data-ember-action="578">
                    <svg class="modal-primary-close-icon">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/hoteis/assets/images/sprite-svg.svg#close"></use>
                    </svg>
                </button>
            </div>
        </md-dialog>
        <md-button class="md-primary md-raised" id="custom" @click.native="openDialog('dialog1')">Custom</md-button>
    </div>
</template>
<style src="./map-view.css"></style>
<script>
    export default {
        name: 'map-view',
        props:['useDialogWindow','lat','lng'],
        mounted:function() {
            this.initMap(this.lat,this.lng);
        },        
        methods:{
            openDialog(ref) {
                this.$refs[ref].open();
            },
            closeDialog(ref) {
                this.$refs[ref].close();
            },
            initMap(latParam,lngParam) {
                var mapOptions = {
                    center: new google.maps.LatLng(latParam,lngParam),
                    scrollwheel: true,
                    zoom: 18
                }
            
                var markers = {
                    position: {lat: latParam, lng: lngParam},
                    map: this.map
                }

                this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

                var marker = new google.maps.Marker(markers);
            }                      
        }        
    }
</script>