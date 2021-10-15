<template>
  <div>
      <!-- filter is remove from 3.xxx -->
     <h1> {{ money | addPoint }} </h1>
     <h2> {{ money }} </h2>
     <button @click="money += 200"> Add money </button>
     <!-- The value money change => function (money) change -->
</div>
</template>

<script>
export default {
    data() {
        return {
            money: 100,
        }
    },
    filters: { // return will show into variable money on HTML
        addPoint: function(num) {
            return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
        },
    },
};
</script>

<style scoped>

</style>
