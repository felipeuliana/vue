<template>
    <div class="pagination" v-if="totalResults">       
        <a href="" class="pagination-previous" v-if="actualPage > 1">
        <span class="pagination-previous-text">Anterior</span>
        <svg class="pagination-previous-icon">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/images/sprite-svg.svg#arrow-left"></use>
        </svg>
        </a>

        <ul class="pagination-list">
        <li class="pagination-item is-empty show-for-small">...</li>
        <li class="pagination-item show-for-large" v-for="page in pages" v-if="page < maxVisiblePages">
            <a class="pagination-link" href="#" v-on:click="setPage(page)">{{page}}</a>
        </li>
        <li class="pagination-item is-empty">...</li>            
        <li class="pagination-item">
            <a class="pagination-link" href="#" v-on:click="setPage(page)">{{pages}}</a>
        </li>
        </ul>

        <a href="" class="pagination-next" v-if="actualPage < totalPages">
        <span class="pagination-next-text">Próximo</span>
        <svg class="pagination-next-icon">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/images/sprite-svg.svg#arrow-right"></use>
        </svg>
        </a>
    </div>    
</template>
<style src="./pagination.css"></style>
<script>

    export default {
     name: 'pagination',
     props:['totalResults','paginationSize'],
     data:function(){
         return {
             maxVisiblePages:10,
             actualPage:1,
             totalPages:1,
             lastPage:1
         }
     },
     created:function(){
         this.$watch('totalResults',()=>{
             console.log(this.setPages);
         });
     },
     computed:{
         pages:function(){
             if(this.totalResults < 10)
                return 1;
             
            return Math.floor(this.totalResults / this.paginationSize);
         }
     },
     methods:{
         setPage(selectedPage){
             this.$parent.$emit('pageNumber', selectedPage);
         }        
     }
    }
</script>