<script setup></script>

<template>

<div class="dropdown-menu sm:transform sm:translate-x-1/3">
    <div class="p-3">
            <div class="flex flex-row items-center text-sm">
                <div class="flex-1 px-1.5">
                    <h5 class="m-0 "> Notifications </h5>
                </div>
                <div class="flex-1 text-end px-1.5">
                    <a href="#!" class="underline text-blue-500 cursor-pointer"> Mark all as read </a>
                </div>
            </div>
    </div>

    <ul class="scroll-container max-h-[250px] overflow-y-auto border-b border-[#eff0f2]">
                                <li>
                                    <a href="#" class="py-2 px-4 flex items-start hover:bg-gray-50 group">
                                        <img src="https://placehold.co/32x32" alt="" class="w-8 h-8 mt-1 mr-[0.5rem] rounded-full block object-cover align-middle">
                                        <div class="ml-2">
                                            <div class="text-[0.875rem] text-gray-600 font-medium truncate group-hover:text-blue-500">James Lemire</div>
                                            <div class="text-[13px] text-gray-400">Lorem ipsum dolor sit amet.</div>
                                            <div class="text-[13px] text-gray-400">
                                                <i class="ri-time-line"></i>
                                                1 hour ago</div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="py-2 px-4 flex items-start hover:bg-gray-50 group">
                                        <img src="https://placehold.co/32x32" alt="" class="w-8 h-8 mt-1 mr-[0.5rem] rounded-full block object-cover align-middle">
                                        <div class="ml-2">
                                            <div class="text-[0.875rem] text-gray-600 font-medium truncate group-hover:text-blue-500">James Lemire</div>
                                            <div class="text-[13px] text-gray-400">Lorem ipsum dolor sit amet.</div>
                                            <div class="text-[13px] text-gray-400">
                                                <i class="ri-time-line"></i>
                                                1 hour ago</div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="py-2 px-4 flex items-start hover:bg-gray-50 group">
                                        <img src="https://placehold.co/32x32" alt="" class="w-8 h-8 mt-1 mr-[0.5rem] rounded-full block object-cover align-middle">
                                        <div class="ml-2">
                                            <div class="text-[0.875rem] text-gray-600 font-medium truncate group-hover:text-blue-500">James Lemire</div>
                                            <div class="text-[13px] text-gray-400">Lorem ipsum dolor sit amet.</div>
                                            <div class="text-[13px] text-gray-400">
                                                <i class="ri-time-line"></i>
                                                1 hour ago</div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="py-2 px-4 flex items-start hover:bg-gray-50 group">
                                        <img src="https://placehold.co/32x32" alt="" class="w-8 h-8 mt-1 mr-[0.5rem] rounded-full block object-cover align-middle">
                                        <div class="ml-2">
                                            <div class="text-[0.875rem] text-gray-600 font-medium truncate group-hover:text-blue-500">James Lemire</div>
                                            <div class="text-[13px] text-gray-400">Lorem ipsum dolor sit amet.</div>
                                            <div class="text-[13px] text-gray-400">
                                                <i class="ri-time-line"></i>
                                                1 hour ago</div>
                                        </div>
                                    </a>
                                </li>
                                
                            </ul>

                            <div class="p-3 text-center rounded-b-2xl">
                                <a href="#!" class="text-blue-500 cursor-pointer text-sm"> View more... </a>
                            </div>
</div>
</template>

<style>
    .scroll-container::-webkit-scrollbar{
        width: 8px;
    }

    .scroll-container::-webkit-scrollbar-thumb{
        background-color: #f3f4f5;
        border-radius: 15px;
    }
</style>
