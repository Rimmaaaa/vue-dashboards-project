<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

const apiKey = import.meta.env.VITE_API_KEY_FMP;

const options = ref({
    responsive: true,
  })

  const data = ref({
    datasets: []
  })


const donutData = () => ({
    labels: [
      'total Current Assets',
      'totalNonCurrentAssets'
    ],
  datasets: [
    {
      backgroundColor: ['#9c93a2', '#646c66'],
      borderWidth: 10,
      data: []
    }
  ]
})

onMounted(async () => {
  try {
    const response = await axios.get(
      `https://financialmodelingprep.com/api/v3/balance-sheet-statement/AAPL?period=annual&apikey=${apiKey}`
    );
    console.log(response.data);

    // Create an instance of profitData once
    const chartData = donutData();

    const assetsData = response.data[0]

      chartData.datasets[0].data.push(assetsData.totalCurrentAssets, assetsData.totalNonCurrentAssets);

      // Push the calendarYear to the labels array
      // chartData.labels.push();
    

    // Assign the modified chartData to the reactive data reference
    data.value = chartData;
  } catch (error) {
    console.error(error);
  }
});

</script>

<template>
    <div class="mb-5 p-[1.25rem] bg-white rounded-3xl border-3 border-[#676767] h-max">
        <div class="flex items-start justify-between w-full mb-4">
      <h3 class="mb-[0.25rem] uppercase border-2 rounded-full text-center px-1 text-xs font-semibold">assets</h3>
      <button type="button"> ...</button>
    </div>
        
        <Doughnut :data="data" :options="options" />
    </div>
    
</template>