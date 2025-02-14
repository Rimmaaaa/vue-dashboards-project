<script setup>
    import Navbar from '../components/Navbar.vue';
    import Cards from '../components/Cards.vue';
    // import Charts from '../components/Charts.vue';
    import BarChart from '../components/BarChart.vue';
    import LineChart from '../components/LineChart.vue';
    import Donut from '../components/Donut.vue';
    import TopProduct from '../components/TopProduct.vue';
    import Account from '../components/Account.vue';
    import Ratings from '../components/Ratings.vue';
    import Transactions from '../components/Transactions.vue';

</script>

<template>
  <Navbar />

<div class="lg:flex mx-5 lg:space-x-5">
    <div class="lg:flex-3">
      <Cards/>
      <BarChart/>

      <div class="lg:flex lg:flex-row lg:justify-between lg:space-x-5">
        <LineChart class="lg:flex-1"/>

        <div class="sm:flex sm:justify-between sm:space-x-5 lg:flex-2">
          <Donut class="sm:flex-1"/>
          <TopProduct class="sm:flex-1 min-w-[300px]"/>
        </div>
        
      </div>
    </div>
    
    <Account class="lg:flex-1"/>
  </div>

  <div class="mx-5 lg:flex lg:space-x-5">
    <Ratings/>
    <Transactions />
  </div>

</template>