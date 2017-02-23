<template>
          <section class="hotel-results">
          <!-- box de resultado de hotéis -->
          <article class="result-box" v-for="test in hotelObject" :key="test.id">

            <div class="result-box-info">

              <div class="figure-container">
                <a class="figure-link" href="#">
                  <img class="figure-image" :src="test.links.thumbnailImage.href" v-if="test.links">
                  <img class="figure-image" src="http://placehold.it/316x198" v-if="!test.links">
                </a>
              </div>

              <div class="info-container">
                <div class="info-details">
                  <h3 class="hotel-title">{{test.name}}</h3>
                  <span class="hotel-rating">
                    <span class="rate two-points">
                      <span class="rate-text">2 Pontos</span>
                      <svg class="rate-icon">
                        <use xlink:href="/assets/images/sprite-svg.svg#category-face"></use>
                      </svg>
                      <svg class="rate-icon">
                        <use xlink:href="/assets/images/sprite-svg.svg#category-face"></use>
                      </svg>
                      <svg class="rate-icon">
                        <use xlink:href="/assets/images/sprite-svg.svg#category-face"></use>
                      </svg>
                      <svg class="rate-icon">
                        <use xlink:href="/assets/images/sprite-svg.svg#category-face"></use>
                      </svg>
                      <svg class="rate-icon">
                        <use xlink:href="/assets/images/sprite-svg.svg#category-face"></use>
                      </svg>
                    </span>
                  </span>
                  <p class="hotel-location">{{test.location.address}}</p>
                  <map-view :useDialogWindow="true" :lat="test.location.coordinates.latitude" :lng="test.location.coordinates.longitude">
                    <span slot="map-title">Mapa do Hotel</slot>
                  </map-view>
                  <a href="" class="hotel-marker">
                    <svg class="hotel-marker-icon">
                      <use xlink:href="./assets/images/sprite-svg.svg#marker"></use>
                    </svg>
                    Mapa
                  </a>
                  <p class="room-info">
                    <strong>Quarto:</strong> Standard single-doble **** não reembolsável ****, com café da manhã
                  </p>
                </div>

              </div>

            </div>

            <div class="result-box-values">

              <div class="values-details">
                <ul class="values-list">
                  <li class="values-item price-label">Diária</li>
                  <li class="values-item actual-price">
                    <span class="by-label">por </span>
                    <span>R$</span> 838,40
                  </li>
                  <li class="values-item installment-label">em até 4x</li>
                </ul>
                <a class="button-primary" href="">Ver Detalhes</a>
                <span class="tax-tag">Taxas inclusas</span>
              </div>

            </div>

          </article><!-- fim | box de resultado de hotéis -->
          </section>

</template>
        
<script>
import mapView from './map-view/map-view'

export default {
  name: 'hotel-card',
  props:['hotelObject'],
  components:{
    mapView
  },  
}
</script>