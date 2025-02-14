<script setup>
    import Search from './Search.vue'
    import LangSelect from './LangSelect.vue'
    import Sidebar from './Sidebar.vue'
    import NavComponent from './NavComponent.vue'
    import WebApps from './WebApps.vue'
    import Notifications from './Notifications.vue'
    import ProfileDrop from './ProfileDrop.vue'


    import { ref } from 'vue';

    const isAsideOpen = ref(false);
    const isSearchOpen = ref(false);
    const isLangOpen = ref(false);
    const isWebAppsOpen = ref(false);
    const isNotificationOpen = ref(false);
    const isProfileDropOpen = ref(false);

    const toggleSidebar = () => {
        isAsideOpen.value = !isAsideOpen.value
    }

    const toggleSearch = () => {
        isSearchOpen.value = !isSearchOpen.value
    }
    
    const toggleLang = () => {
        isLangOpen.value = !isLangOpen.value
    }
    const toggleWebApps = () => {
        isWebAppsOpen.value = !isWebAppsOpen.value
    }
    const toggleNotification = () => {
        isNotificationOpen.value = !isNotificationOpen.value
    }
    const toggleProfileDrop = () => {
        isProfileDropOpen.value = !isProfileDropOpen.value
    }

    
</script>

<template>
    <transition
      enter-active-class="transition-transform duration-300"
      enter-from-class="-translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition-transform duration-300"
      leave-from-class="translate-x-0"
      leave-to-class="-translate-x-full"
    >
    <div v-if="isAsideOpen" class="aside fixed inset-y-0 left-0 z-50 flex flex-row items-start">
        <Sidebar />
    <button
            @click="toggleSidebar"
            class="p-2 dropdown-toggle bg-white mt-3"
          >
            ✕
    </button>
    </div>
    </transition>
    
    
    <div class="navbar">

        <button type="button" @click="toggleSidebar" class="sidebar-toggle dropdown-toggle">
                <i class="ri-menu-line"></i>
        </button>
        
        <ul class="hidden sm:flex sm:items-center sm:flex-grow rounded-full border-3 border-[#91918f] text-[0.8rem] font-semibold h-8  gap-4 mx-[2px]">
            <li>
                <a href="#" class="font-medium ml-3 mr-4 hover:text-gray-600">Dashboard</a>
            </li>
            <li class="font-normal bg-black text-white rounded-full h-5.5 px-3 ">Analytics</li>
        </ul>

        <ul class="ml-auto flex items-center">
           
            <NavComponent @toggle="toggleSearch">
                
                <template #icon>
                    <i class="ri-search-line"></i>
                </template>

                <template #dropdown>
                    <Search v-if="isSearchOpen"/>
                </template>
                
            </NavComponent>

            <NavComponent @toggle="toggleLang">
                
                <template #icon>
                    <i class="ri-global-line"></i>
                </template>

                <template #dropdown>
                    <LangSelect v-if="isLangOpen"/>
                </template>
                
            </NavComponent>
           
           
            <NavComponent @toggle="toggleWebApps">
                
                <template #icon>
                    <i class="ri-function-line"></i>
                </template>

                <template #dropdown>
                    <WebApps v-if="isWebAppsOpen"/>
                </template>
                
            </NavComponent>
           
            <NavComponent @toggle="toggleNotification">
                
                <template #icon>
                    <i class="ri-notification-2-line"></i>
                </template>

                <template #dropdown>
                    <Notifications v-if="isNotificationOpen"/>
                </template>
                
            </NavComponent>
           
           <li class="mr-1 dropdown flex items-center justify-center h-10 rounded-full">
                <button @click="toggleProfileDrop" type="button" class="dropdown-toggle cursor-pointer w-max h-8 rounded-full flex items-center justify-center text-[0.8rem] px-0.5 border-4 font-semibold">
                    
                    <span class=" mr-4 ml-3">
                        Profile
                    </span>
                    
                    <div class="w-5.5 h-5.5 rounded-full flex items-center justify-center bg-black text-white">
                        <i class="ri-user-line"></i>
                    </div>
                    
                    
                </button>

                <ProfileDrop v-if="isProfileDropOpen"/>
            </li>
            
           
        </ul>

        

    </div>
</template>