<template>
  <div id="app">
    <main>
      <loader :loaderEnable="loaderEnable"></loader>
      <bread-crumps :count="meta.countHotels" :location="locationName"></bread-crumps>
      <aside class="main-aside">
        <internal-engine></internal-engine>
        <filter-side :dataFilter="meta" v-if="hotels"></filter-side>
      </aside>
      <section class="main-section">
        <div class="ordering-filter">
          <page-size></page-size>
          <sort-list></sort-list>
        </div>
        <hotel-card v-bind:hotelObject="hotels"></hotel-card>
        <pagination :totalResults="meta.countHotels" :paginationSize="pageSize"></pagination>
      </section>
    </main>
  </div>
</template>

<script>
  import hotelCard from './components/hotel-card'
  import pageSize from './components/page-size'
  import sortList from './components/sort-list'
  import loader from './components/loader'
  import breadCrumps from './components/bread-crumps/bread-crumps'
  import internalEngine from './components/internal-engine'
  import pagination from './components/pagination/pagination'
  import headerInject from './mixin/header-inject'
  import socketConnection from './mixin/socket-connection'
  import promotionInject from './mixin/promotion-inject'
  import ENV from './environment/environment'
  import filterSide from './components/filter-side/filter-side'


  export default {
    name: 'app',
    mixins: [headerInject,socketConnection,promotionInject],
    components: {
      hotelCard,
      pageSize,
      sortList,
      breadCrumps,
      internalEngine,
      pagination,
      loader,
      filterSide
    },
    data:function(){
      return {
        hotels:[],
        meta:{},
        pageSize:10,
        pageNumber:1,
        headers:{},
        loaderEnable:false,
        locationName:'',
        filters:''
      }
    },
    created: function(){

      this.headersRequest();

      this.$on('gotHeaders', (headers) => {
        this.headers = headers;
        this.getHotels(this.headers); 
      });

      this.$on('pageSized', (size)=>{
        this.pageSize = size;
        this.getHotels(this.headers);
      });

      this.$on('pageNumber', (page)=>{
        this.pageNumber = page;
        this.getHotels(this.headers);
      });    

      this.$watch('hotels', (size)=>{
        this.applyPromotions();
      });

      this.$on('applyFilters', (filters)=>{
        this.filterParams[modelMap]=filter[modelMap];
      });          

      this.$on('locationName', (location)=>{
        this.locationName=location;
      });

      this.$on('filterStart', (filters)=>{
        this.filters = filters;
        this.getHotels(this.headers);
      });      
    },
    methods:{
      getHotels(headerParams){
        this.getHotelsOnPromisse(headerParams);
      },
      getHotelsOnPromisse(headerParams){
          this.loaderEnable = true;
          this.$http.get(ENV[ENV.type].url.hotel.avail + '?checkIn=2017-03-10&checkOut=2017-03-16&hotelId=&packageGroup=STANDALONE%2CVHI&rooms=30%2C30&zoneId=13601' +
          '&itemsPerPage=' + this.pageSize + 
          '&pageNumber=' + this.pageNumber +
          (this.filters != '' ? '&' + this.filters : '') ,
                      {headers:headerParams}).then((response) => {
                          this.hotels =  response.body.hotels;
                          this.meta = response.body.meta;
                          this.loaderEnable = false;
                      }, (response) => {
                          console.log(response.body);
                          this.loaderEnable = false;
                      });
      },
      applyPromotions(){
        console.log('applying promotions...');
      }

    }
  }
</script>
