<template>
    <div class="medium-6 large-12 columns">
      <label for="destination-hotel" class="product-form-label">destino / hotel</label>
      <div id="pesq-inc" class="pesq-inc">
        <input type="text"
              placeholder="Digite para pesquisar"
              autocomplete="off"
              v-model="query"
              @keydown.down="down"
              @keydown.up="up"
              @keydown.enter="hit"
              @keydown.esc="reset"
              @blur="reset"
              @input="update"/>
        <div id="ember931" class="ember-view"  v-show="hasItems" >
          <div id="ember-basic-dropdown-content-ember718" class="ember-basic-dropdown-content ember-power-select-dropdown  ember-basic-dropdown-content--in-place ember-basic-dropdown-content--left  ember-basic-dropdown--transitioned-in">
            <ul class="ember-power-select-options ember-view">
                <li v-for="(item, index) in groupedLocations" class="ember-power-select-group">
                  <span class="ember-power-select-group-name">{{item.type}}</span>
                    <ul class="ember-power-select-options ember-view">
                        <li v-for="(location, index) in item.locations" class="ember-power-select-option" @mousedown="hit" @mousemove="setActive(index)">
                            <span v-text="location.name"></span>
                        </li>
                    </ul>                  
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>
<style src="./type-ahead.css"></style>
<script>
import VueTypeahead from 'vue-typeahead'
import _ from 'lodash'

export default {
      name: 'type-ahead',
  extends: VueTypeahead,

  data () {
    return {
      src: 'https://q81x1rs7l9.execute-api.us-east-1.amazonaws.com/qa/pesqinc/search?types=city,hotel',
      limit: 10,
      minChars: 3,
      selectFirst: true,
      queryParamName: 'q',
      query:'',
      groupedLocations:[]
    }
  },
  computed: {
    locationName:function(){
        return this.query.split('-')[0];
    }  
  },
  methods: {
    onHit (item) {
       if(item){
            this.query = item.name;
            this.$parent.$parent.$emit('locationName',this.locationName);
       }
    },
    prepareResponseData (data) {

        var result = _.map(_.groupBy(data,"type"), function(value, prop) {
            return { 
                type: prop, locations: value 
            };
        });
    
        this.groupedLocations = result;

        return data;
    },
    reset(){
      this.items = [];
      this.loading = false;
    }
  },
  created:function(){
    this.$parent.$emit('validSearch',false);
  }
}

</script>