<template>
    <nav class="bread-crumbs">
        <ul class="bread-crumbs-list" v-if="enableBreadCrumps">
        <li class="bread-crumbs-item">
            <a href="#" class="bread-crumbs-link">Hotéis</a>
        </li>
        <li class="bread-crumbs-item">
            <span class="bread-crumbs-label">
            <strong>{{count}} hotéis</strong> em <strong>{{location}}</strong>
            </span>
        </li>
        </ul>
    </nav>    
</template>
<script>
export default {
  name: 'bread-crumps',
  props:['count','product','location'],
  data () {
      return {
         enableBreadCrumps:false 
      }
  },
  mounted () {
    this.$watch('count', ()=>{
        this.showBreadCrumps();
    }); 
  },
  methods:{
      selectedSort(){
        this.$parent.$emit('pageSorted', this.pageSize);
      },
      showBreadCrumps(){
        this.enableBreadCrumps = (this.count & Number(this.count) > 0 & this.location);
      }      
  },
}
</script>