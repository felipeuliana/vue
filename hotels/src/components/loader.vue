<template>
    <div class="general-loader" v-if="loaderEnable">
      <div class="general-loader-overlay">
        <div class="general-loader-content">
            <div class="general-loader-icon">
                <div class="general-loader-outer">
                    <svg class="loader-outer">
                        <use xlink:href="assets/images/sprite-svg.svg#loader-outer"></use>
                    </svg>
                </div>
                <div class="general-loader-inner">
                    <svg class="loader-inner">
                        <use xlink:href="assets/images/sprite-svg.svg#loader-inner"></use>
                    </svg>
                </div>
            </div>
        </div>
      </div>
    </div>    
</template>
<script>
export default {
  name: 'loader',
  props:{'loaderEnable':{
      type:Boolean,
      required:true
  }}
}
</script>