<script setup>
    import axios from 'axios';
    import { ref, onMounted } from 'vue';
    
    const apiKey = import.meta.env.VITE_API_KEY_FMP;
    const revenue = ref()
    const revenueLast = ref()
    const netIncomeRatio = ref()
    const eps = ref()
    
    onMounted(async () => {
        try { 
            const response = await axios.get(`https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey=${apiKey}`);
            const currentYearData = response.data[0]

            revenue.value = currentYearData.revenue / 1000
            revenueLast.value = response.data[1].revenue / 1000
            netIncomeRatio.value = currentYearData.netIncomeRatio
            eps.value = currentYearData.eps
        } catch (error) {
            console.error(error);
        }
    })

</script>

<template>
    <main class=" mt-1 flex flex-col justify-center md:flex-row md:justify-between md:space-x-5">
        
         <div class="mini-card">
            
            <div class="flex items-start justify-between w-full">
                <h3 class="mb-[0.25rem] uppercase border-2 rounded-full text-center px-1 text-xs font-semibold">revenue</h3>
                
                <div class="icon flex items-center justify-center w-6 h-6 rounded-full bg-black text-white text-xs">
                    <i class="ri-arrow-right-up-line"></i>
                </div>
            </div>
            <div class="flex items-start justify-between w-full border-b-1 pb-1">
                <h1 class="font-bold">{{revenue}} RUB</h1>
                <h3 class="text-sm self-end font-bold">+ {{((revenue - revenueLast)/revenueLast*100).toFixed(2)}}%</h3>
                
            </div>
            
         </div>
         
         <div class="mini-card bg-[#dacfed]">
            
            <div class="flex items-start justify-between w-full">
                <h3 class="mb-[0.25rem] uppercase border-2 rounded-full text-center px-1 text-xs font-semibold">net income ratio</h3>
                
                <div class="icon flex items-center justify-center w-6 h-6 rounded-full bg-black text-white text-xs">
                    <i class="ri-arrow-right-up-line"></i>
                </div>
            </div>
            <div class="flex items-start justify-between w-full border-b-1 pb-1">
                <h1 class="font-bold text-2xl">{{ Number(netIncomeRatio).toFixed(2) }}</h1>
                <!-- <h3 class="text-sm self-end font-bold">+ 13%</h3> -->
                
            </div>
            
         </div>
         
         <div class="mini-card bg-[#dad79a]">
            
            <div class="flex items-start justify-between w-full">
                <h3 class="mb-[0.25rem] uppercase border-2 rounded-full text-center px-1 text-xs font-semibold">eps</h3>
                
                <div class="icon flex items-center justify-center w-6 h-6 rounded-full bg-black text-white text-xs">
                    <i class="ri-arrow-right-up-line"></i>
                </div>
            </div>
            <div class="flex items-start justify-between w-full border-b-1 pb-1">
                <h1 class="font-bold text-2xl">{{ eps }}</h1>
                <!-- <h3 class="text-sm self-end font-bold">+ 13%</h3> -->
                
            </div>
            
         </div>
         
         
         
        
    </main>
    
</template>