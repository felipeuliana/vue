<template>
        <div class="main-aside-item">

          <div class="search-filters-product">

            <header class="search-filters-header">
              <h3 class="search-filters-heading">Filtrar os Resultados</h3>
            </header>

            <div class="search-filters-content">

              <ul class="search-filters-accordion">

                <!-- <li class="search-filters-accordion-item is-active"> -->
                <li class="search-filters-accordion-item">

                  <a class="search-filters-accordion-title">
                    Endereço
                    <svg class="search-filters-accordion-icon">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/images/sprite-svg.svg#arrow-down"></use>
                    </svg>
                  </a>

                  <div class="search-filters-accordion-content" style="display: block;">
                    <input placeholder="Digite o endereço do hotel" type="text" class="options-check">
                  </div>

                </li>

                <range-filter filterTitle="Valor" 
                :dataFilter="dataFilter.price" 
                minMap="minWithTax"
                maxMap="maxWithTax"
                modelMap="price">
                </range-filter>

                <check-filter filterTitle="Categoria" 
                :dataFilter="dataFilter.awards" 
                keyMap="minWithTax" 
                valueMap="maxWithTax" 
                :showSummary="true" 
                summaryDescription="Todas as Categorias"
                v-if="dataFilter.awards"
                modelMap="awards"
                :clearFilter="clearFilter">
                </check-filter>

                <li class="search-filters-accordion-item">
                  <a class="search-filters-accordion-title">
                    Nome do hotel
                    <svg class="search-filters-accordion-icon">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/images/sprite-svg.svg#arrow-down"></use>
                    </svg>
                  </a>
                  <div class="search-filters-accordion-content" style="display: block;">
                    <input placeholder="Digite o nome do hotel" type="text" class="options-check">
                  </div>
                </li>

                <check-filter filterTitle="Tipo de acomodação" 
                :dataFilter="dataFilter.lodging" 
                keyMap="name" 
                valueMap="amount" 
                :showSummary="true" 
                summaryDescription="Todos os tipos"
                v-if="dataFilter.lodging"
                modelMap="lodging"
                :clearFilter="clearFilter">
                </check-filter>

                <check-filter filterTitle="Serviços" 
                :dataFilter="dataFilter.amenities" 
                keyMap="name" 
                valueMap="amount" 
                :showSummary="true" 
                summaryDescription="Todos os serviços"
                v-if="dataFilter.amenities"
                modelMap="amenities"
                :clearFilter="clearFilter">
                </check-filter>              

              </ul>

              <footer class="search-filters-footer">

                <input class="button-outlined" type="submit" value="Aplicar" v-on:click="applyFilters()">
                <button class="button-void" type="button" v-on:click="clearFilters()">Limpar filtros</button>

              </footer>

            </div>

          </div>

        </div>    
</template>
<script>
import checkFilter from 'components/check-filter/check-filter'
import rangeFilter from 'components/range-filter/range-filter'


const queryString = require('query-string');

export default {
  name: 'filter-side',
  props:['dataFilter'],
  components: {
    checkFilter,
    rangeFilter,
    queryString
  },
  data: function(){
    return {
      value: [0,100],
      filterParams:[],
      clearFilter:false
    }
  },
  created:function(){
      this.$on('filter', (filter,modelMap)=>{
        this.filterParams[modelMap]=filter[modelMap];
      });
  },
  methods:{
    clearFilters(){
      this.clearFilter = true;
    },
    applyFilters(){
      var result = _.pickBy(this.filterParams, function(value, key) {
        return key;
      });
      var parsed = queryString.stringify(result);
      
      this.$parent.$emit('filterStart', parsed);
    }
  }
}
</script>