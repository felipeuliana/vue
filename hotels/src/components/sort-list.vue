<template>
    <div class="ordering-filter-field order-by">
        <label for="order-by" class="ordering-filter-label">Ordenar por</label>
        <select class="ordering-filter-input">
            <option value=" Menor preço" selected=""> Menor preço</option>
            <option value=" Maior preço"> Maior preço</option>
        </select>
    </div>
</template>
<script>
export default {
  name: 'sort-list',
  data:function(){
      return{
          'pageSize':10
      }
  },
  methods:{
      selectedSort(){
          this.$parent.$emit('pageSorted', this.pageSize);
      }
  },
}
</script>