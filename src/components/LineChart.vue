<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
    import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const growthNetIncome = ref()

const options = ref({
        responsive: true,
        
  })

  const data = ref({
   
    datasets: []
  })

const growthData = () => ({
  labels: [],
  datasets: [
    {
      label: 'growth Net Income',
      backgroundColor: '#ffda56',
      borderColor: '#ffda56',
      tension: 0.3,
      data: []
    },
    {
      label: 'growth Free Cash Flow',
      backgroundColor: '#6d6258',
      borderColor: '#6d6258',
      tension: 0.3,
      data: []
    }
  ]
})

onMounted(async () => {
  try {
    const response = await axios.get(
      'https://financialmodelingprep.com/api/v3/cash-flow-statement-growth/AAPL?period=annual&apikey=FJFuUeEflqsZPXIMH37Yj8pv7Ngh4dBt'
    );
    console.log(response.data);

    growthNetIncome.value = response.data[0].growthNetIncome

    // Create an instance of profitData once
    const chartData = growthData();

    // Loop through each item in the API response and update the chartData object
    response.data.forEach((item) => {
      // Push the grossProfit value to the data array
      chartData.datasets[0].data.push(item.growthNetIncome);
      chartData.datasets[1].data.push(item.growthFreeCashFlow);

      // Push the calendarYear to the labels array
      chartData.labels.push(item.calendarYear);
    });

    chartData.datasets[0].data.reverse()
    chartData.datasets[1].data.reverse()
    chartData.labels.reverse()

    // Assign the modified chartData to the reactive data reference
    data.value = chartData;
  } catch (error) {
    console.error(error);
  }
});
  
</script>

<template>
    <div class="flex-col mb-5 items-stretch p-[1.25rem] bg-white rounded-3xl border-3 border-[#676767] h-max">
        
    <div class="flex items-start justify-between w-full mb-4">
      <h3 class="mb-[0.25rem] uppercase border-2 rounded-full text-center px-1 text-xs font-semibold">cashflow growth</h3>
      <button type="button"> Yearly</button>
    </div>
    <p class="text-xs text-gray-500 mb-1">This Year</p>
    <div class="flex items-start justify-between w-full border-b-1 pb-1">
      <h1 class="font-bold">{{ Number(growthNetIncome).toFixed(2) }}</h1>
      
    </div>
        
          <Line :data="data" :options="options"/>
      
        
    </div>
    
</template>