<template>
    <li class="search-filters-accordion-item" v-if="dataFilter">
        <a class="search-filters-accordion-title">
            {{filterTitle}}
            <svg class="search-filters-accordion-icon">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/images/sprite-svg.svg#arrow-down"></use>
            </svg>
        </a>
        <vue-slider :value.sync="value" :max.number="maxValue" :min.number="minValue" formatter="R$ {value}" tooltip="hover"></vue-slider>
        <span class="slider-range-min price-min">{{value[0]}}</span>
        <span class="slider-range-max price-max">{{value[1]}}</span>        
    </li>
</template>
<script>
import vueSlider from 'vue-slider-component'

export default {
  name: 'range-filter',
  props:['filterTitle','dataFilter','showHelper','helperDescription', 'minMap', 'maxMap','modelMap'],
  components: {
    vueSlider  
  },
  data: function(){
    return {
        value:[],  
        maxValue:0,
        minValue:0}
  },
  created(){
    this.$watch('dataFilter', ()=>{
        this.value[0] = parseFloat(this.dataFilter[this.minMap]);        
        this.value[1] = parseFloat(this.dataFilter[this.maxMap]);
    }); 
  },
  mounted () {
    this.$watch('dataFilter', ()=>{
      this.mountRange();
    }); 

    this.$watch('value', ()=>{
      this.checkFilters();
    }); 

  },
  methods: {
    mountRange(){
        this.minValue= parseFloat(this.dataFilter[this.minMap]);
        this.maxValue= parseFloat(this.dataFilter[this.maxMap]);
    },
    checkFilters(){

        var modelDescription = {};
            modelDescription[this.modelMap] = {min : this.value[0], max : this.value[1]};

        this.$parent.$parent.$emit('filter', modelDescription,this.modelMap);
    }           
  }
}
</script>