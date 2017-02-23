<template>
    
    <li class="search-filters-accordion-item general-loader-container">
        <a class="search-filters-accordion-title is-active">
            {{filterTitle}}
            <svg class="search-filters-accordion-icon">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/hoteis/assets/images/sprite-svg.svg#arrow-down"></use>
            </svg>
        </a>
        <div class="search-filters-accordion-content" style="display: block;">
                <div class="options-mark-all" v-if="enableSummary">
                    <label class="options-label">
                        <input type="checkbox" class="options-check ember-view ember-checkbox">
                            <div class="options-content default-checkbox-text">
                                <span class="options-subtitle">{{summaryDescription}}</span>
                            </div>
                            <div class="options-number">{{countResultsSummary}}</div>
                    </label>
                </div>
                <ul class="options-list">
                    <li class="options-list-item" v-for="item in dataFilter">
                        <label class="options-label">
                            <input class="options-check" type="checkbox" v-model="filter[modelMap]" :value="item[keyMap]" v-on:click="checkFilters(item[valueMap])">
                            <div class="options-content">
                                <span class="options-subtitle">{{item[keyMap]}}
                            </div>
                            <div class="options-number">{{item[valueMap]}}</div>
                        </label>
                    </li>
                </ul>                
        </div>
    </li>    
</template>
<script>

export default {
  name: 'check-filter',
  props:['filterTitle','dataFilter','keyMap','valueMap', 'showSummary','summaryDescription','showHelper','helperDescription','modelMap','clearFilter'],
  data () {
      return {
          countResultsSummary:'',
          enableHelper:false,
          enableSummary:false,
          filter:[]
      }
  },
  created(){
    
    this.filter[this.modelMap] = [];

    this.$watch('dataFilter', ()=>{
      this.mountCountResults();
      this.mountSummary();
    });

    this.$watch('clearFilter', ()=>{
      this.clearFilters();
    });      
  },
  methods: {
    mountCountResults(){
        var that = this;

        this.countResultsSummary =  _.sumBy(this.dataFilter, function(element) { 
            return element[that.valueMap]; 
        }) ;
    },
    mountSummary(){
        this.enableSummary= (this.showSummary & this.showSummary== true);
    },
    checkFilters(item){
        this.$parent.$emit('filter', this.filter,this.modelMap);
    },
    clearFilters(){
        this.filter[this.modelMap] = [];
    }
  }
}
</script>