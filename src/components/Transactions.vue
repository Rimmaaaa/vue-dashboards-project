<script setup></script>

<template>
    <div class="mb-5 w-full p-[1.25rem] bg-white rounded-3xl border-3 border-[#676767]">

        <div class="flex items-start justify-between w-full mb-8">
            <h3 class="mb-[0.25rem] uppercase border-2 rounded-full text-center px-1 text-xs font-semibold">transaction</h3>
            <button type="button" class=""><span class="font-semibold">Report by:</span> Monthly</button>
        </div>

        <div class="scroll-container max-w-full overflow-x-auto mt-2 pb-2">

            <table class="table-fixed w-max text-sm">
                <thead>
                    <tr class="border-b">
                        <th class="w-max p-3 text-start">Order ID</th>
                        <th class="w-max p-3 text-start">Billing name</th>
                        <th class="w-max p-3 text-start">Date</th>
                        <th class="w-max p-3 text-start">Total</th>
                        <th class="w-max p-3 text-start">Pay status</th>
                        <th class="w-max p-3 text-start">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th class="px-3 pt-3">#BR2150</th>
                        <td class="px-3 pt-3">Smith</td>
                        <td class="px-3 pt-3">07 Oct, 2021</td>
                        <td class="px-3 pt-3">2500 RUB</td>
                        <td class="px-3 pt-3 text-center">Paid</td>
                        <td class="px-3 pt-3 space-x-2 text-center">
                            <button><i class="ri-eye-line"></i></button>
                            <button><i class="ri-pencil-line"></i></button>
                            <button><i class="ri-delete-bin-6-line"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <th class="px-3 pt-3">#BR2150</th>
                        <td class="px-3 pt-3">Smith</td>
                        <td class="px-3 pt-3">07 Oct, 2021</td>
                        <td class="px-3 pt-3">2500 RUB</td>
                        <td class="px-3 pt-3 text-center">Paid</td>
                        <td class="px-3 pt-3 space-x-2 text-center">
                            <button><i class="ri-eye-line"></i></button>
                            <button><i class="ri-pencil-line"></i></button>
                            <button><i class="ri-delete-bin-6-line"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <th class="px-3 pt-3">#BR2150</th>
                        <td class="px-3 pt-3">Smith</td>
                        <td class="px-3 pt-3">07 Oct, 2021</td>
                        <td class="px-3 pt-3">2500 RUB</td>
                        <td class="px-3 pt-3 text-center">Paid</td>
                        <td class="px-3 pt-3 space-x-2 text-center">
                            <button><i class="ri-eye-line"></i></button>
                            <button><i class="ri-pencil-line"></i></button>
                            <button><i class="ri-delete-bin-6-line"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <th class="px-3 pt-3">#BR2150</th>
                        <td class="px-3 pt-3">Smith</td>
                        <td class="px-3 pt-3">07 Oct, 2021</td>
                        <td class="px-3 pt-3">2500 RUB</td>
                        <td class="px-3 pt-3 text-center">Paid</td>
                        <td class="px-3 pt-3 space-x-2 text-center">
                            <button><i class="ri-eye-line"></i></button>
                            <button><i class="ri-pencil-line"></i></button>
                            <button><i class="ri-delete-bin-6-line"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <th class="px-3 pt-3">#BR2150</th>
                        <td class="px-3 pt-3">Smith</td>
                        <td class="px-3 pt-3">07 Oct, 2021</td>
                        <td class="px-3 pt-3">2500 RUB</td>
                        <td class="px-3 pt-3 text-center">Paid</td>
                        <td class="px-3 pt-3 space-x-2 text-center">
                            <button><i class="ri-eye-line"></i></button>
                            <button><i class="ri-pencil-line"></i></button>
                            <button><i class="ri-delete-bin-6-line"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>

    </div>
</template>