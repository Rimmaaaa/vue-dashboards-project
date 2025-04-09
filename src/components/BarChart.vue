<template>

  <div class="mb-5 p-[1.25rem] bg-white rounded-3xl border-3 border-[#676767]">
    
    <div class="flex items-start justify-between w-full mb-8">
      <h3 class="mb-[0.25rem] uppercase border-2 rounded-full text-center px-1 text-xs font-semibold">Overview</h3>
      <button type="button" class=""><span class="font-semibold">Sort by:</span> Yearly</button>
    </div>
    <p class="text-xs text-gray-500 mb-1">Gross Profit</p>
    <div class="flex items-start justify-between w-full border-b-1 pb-1">
      <h1 class="font-bold">{{ profitValue }} RUB</h1>
      <h3 class="text-sm self-end font-bold">+ {{((profitValue - profitValueLast)/profitValueLast*100).toFixed(2)}}%</h3>
    </div>

    <div class="lg:flex lg:space-x-5">
      <div class="lg:flex-1">

      <div class="sm:flex sm:w-full sm:justify-between">
        <div class="p-[1rem] border-b-1 border-gray-400 w-full">
          <p class="text-xs text-gray-500 mb-1">Orders</p>
          <h3 class="text-sm self-end font-bold">12 356</h3>
        </div>
        <div class="p-[1rem] border-b-1 border-gray-400 w-full">
          <p class="text-xs text-gray-500 mb-1">Sales</p>
          <h3 class="text-sm self-end font-bold">80 356</h3>
        </div>
      </div>
      
      <div class="sm:flex sm:w-full sm:justify-between">
        <div class="p-[1rem] border-b-1 border-gray-400 w-full">
          <p class="text-xs text-gray-500 mb-1">Order value</p>
          <h3 class="text-sm self-end font-bold">12%</h3>
        </div>
        <div class="p-[1rem] border-b-1 border-gray-400 w-full">
          <p class="text-xs text-gray-500 mb-1">Customers</p>
          <h3 class="text-sm self-end font-bold">20 356</h3>
        </div>
      </div>
      
      <div class="sm:flex sm:w-full sm:justify-between">
        <div class="p-[1rem] border-b-1 border-gray-400 w-full">
          <p class="text-xs text-gray-500 mb-1">Income</p>
          <h3 class="text-sm self-end font-bold">{{ netIncome }} RUB</h3>
        </div>
        <div class="p-[1rem] border-b-1 border-gray-400 w-full">
          <p class="text-xs text-gray-500 mb-1">Expenses</p>
          <h3 class="text-sm self-end font-bold">{{ costAndExpenses }} RUB</h3>
        </div>
      </div>
    </div>
    <div class="lg:flex-3 flex justify-center">
      <Bar :data="data" :options="options" />
    </div>
      
    </div>
    
  </div>
  
</template>
  
  <script setup>
  import { ref, onMounted, toRaw } from 'vue';
  import axios from 'axios';
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    scales
  } from 'chart.js'
  import { Bar } from 'vue-chartjs'

  const apiKey = 'FJFuUeEflqsZPXIMH37Yj8pv7Ngh4dBt';
  
  const profitValue = ref()
  const profitValueLast = ref()
  const netIncome = ref()
  const costAndExpenses = ref()

  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, scales)
  
  const options = ref({
  responsive: true,
});

const data = ref({
  datasets: [],
});

// profitData is a factory function that returns a new chart configuration object
const profitData = () => ({
  labels: [],
  datasets: [
    {
      label: 'profit',
      backgroundColor: '#000',
      hoverBackgroundColor: '#676767',
      barThickness: 10,
      borderRadius: 5,
      data: [],
    },
  ],
});

onMounted(async () => {
  try {
    const response = await axios.get(
      `https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey=${apiKey}`
    );
    console.log(response.data);

    profitValue.value = response.data[0].grossProfit /1000
    profitValueLast.value = response.data[1].grossProfit / 1000
    netIncome.value = response.data[0].netIncome / 1000
    costAndExpenses.value = response.data[0].costAndExpenses / 1000


    // Create an instance of profitData once
    const chartData = profitData();

    // Loop through each item in the API response and update the chartData object
    response.data.forEach((item) => {
      // Push the grossProfit value to the data array
      chartData.datasets[0].data.push(item.grossProfit / 1000);

      // Push the calendarYear to the labels array
      chartData.labels.push(item.calendarYear);
    });

    // Assign the modified chartData to the reactive data reference
    data.value = chartData;
  } catch (error) {
    console.error(error);
  }
});

  </script>