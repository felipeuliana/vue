<template>
    <div class="ordering-filter-field itens-per-page">
        <label for="itens-per-page" class="ordering-filter-label">Itens por página</label>
        <select class="ordering-filter-input" id="itens-per-page" v-model="pageSize" v-on:change="selectedSize()">
            <option value="10"> 10</option>
            <option value="25"> 25</option>
            <option value="50"> 50</option>
            <option value="100"> 100</option>
        </select>
    </div>
</template>
<script>
export default {
  name: 'page-size',
  data:function(){
      return{
          'pageSize':10
      }
  },
  methods:{
      selectedSize(){
          this.$parent.$emit('pageSized', this.pageSize);
      }
  },
}
</script>