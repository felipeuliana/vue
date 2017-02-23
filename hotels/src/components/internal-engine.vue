<template>


        <div class="main-aside-item">

          <div class="search-engine-product">

            <button class="search-engine-product-toggle" type="button">
              <svg class="toggle-arrow-icon">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/images/sprites/sprite-svg.svg#arrow-down">
                </use>
              </svg><span class="toggle-text">Exibir/Esconder Busca Avançada</span>
            </button>

            <div class="search-engine-product-info">
              <div class="product-info-location">
                <span class="pickup-location-label">
                  São <span>Paulo - São Paulo / BR, Brasil, Todos os Aeroportos (SAO)</span>
                </span>
                <svg class="destiny-label-icon">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/images/sprites/sprite-svg.svg#cars"></use>
                </svg>
                <span class="return-location-label">
                  Rio <span>de Janeiro - Rio de Janeiro / BR, Brasil, Todos os Aeroportos (RIO)</span>
                </span>
              </div>

              <div class="product-info-date">
                <span class="pickup-date-label">
                  30/06/16 <span>(11:00)</span>
                </span>
                <span>até</span>
                <span class="return-date-label">
                  04/07/16 <span>(11:00)</span>
                </span>
              </div>
            </div><!-- / .search-engine-product-info -->

            <div class="search-engine-product-content">
              <form action="" class="search-engine-product-form">

                <div class="row columns">
                  <div class="search-engine-content-collapse not-collapse">
                      <type-ahead></type-ahead>
                    <div class="minor-6 medium-3 large-6 columns">
                      <label for="check-in" class="product-form-label">Entrada</label>
                      <div class="datepicker-container">
                        <input class="datepicker-input product-form-input hasDatepicker" id="check-in" type="text" value="30/06/2016">
                        <svg class="datepicker-icon">
                          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/images/sprite-svg.svg#calendar"></use>
                        </svg>
                      </div>
                    </div><!-- / .datepicker .large-12 -->

                    <div class="minor-6 medium-3 large-6 columns">
                      <label for="check-out" class="product-form-label">Volta - 8 dia(s)</label>
                      <div class="datepicker-container">
                        <input class="datepicker-input product-form-input hasDatepicker" id="check-out" type="text" value="04/07/2016">
                        <svg class="datepicker-icon">
                          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/images/sprite-svg.svg#calendar"></use>
                        </svg>
                      </div>
                    </div><!-- / .datepicker .large-12 -->

                    <request-rooms></request-rooms>

                    <div class="columns large-12 medium-12">
                      <input type="submit" name="" class="button-primary button-medium radius shadow extend" value="buscar">
                    </div>

                  </div><!-- / .search-engine-content-collapse -->
                </div>
              </form>
            </div><!-- / .search-engine-product-content -->

          </div>

        </div>

  
</template>
<script>

import requestRooms from 'components/request-rooms/request-rooms'
import typeAhead from 'components/type-ahead/type-ahead'

export default {
  name: 'internal-engine',
  data:function(){
      return{
          'pageSize':10
      }
  },
  components:{
    typeAhead,
    requestRooms
  },
  methods:{
      selectedSort(){
          this.$parent.$emit('pageSorted', this.pageSize);
      }
  },
}
</script>