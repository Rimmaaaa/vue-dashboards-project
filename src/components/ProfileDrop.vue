<script setup>
import { RouterLink } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import {computed} from 'vue'
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter()

const token = computed(() => authStore.userInfo.token);

const logout = () => {
  authStore.logout()
  localStorage.removeItem('userTokens')
  router.push('/login')
}
</script>

<template>
<transition
                    name="fade"
                    enter-active-class="transition ease-out duration-200"
                    enter-from-class="opacity-0 translate-y-1"
                    enter-to-class="opacity-100 translate-y-0"
                    leave-active-class="transition ease-in duration-150"
                    leave-from-class="opacity-100 translate-y-0"
                    leave-to-class="opacity-0 translate-y-1"
>

<div class="dropdown-menu sm:transform sm:translate-x-2/3 text-gray-600 py-2 max-w-[250px]">
    <div class="ml-2 p-3 ">
        <div class="text-[0.875rem] text-gray-800 font-medium truncate group-hover:text-blue-500">Jennifer Bennett</div>
        <div class="text-[13px] text-gray-400">{{ authStore.userInfo.email }}</div>
    </div>
    
    <ul class="border-b border-t border-[#eff0f2]">
        <li>
            <a href="#" class="py-2 px-4 flex items-start hover:bg-gray-50 group hover:text-gray-800">
                                        <div class="ml-2">
                                            <div class="text-[0.875rem]">
                                                <i class="mr-2 ri-account-circle-line"></i>
                                                Profile</div>
                                        </div>
            </a>
        </li>
        <li>
            <a href="#" class="py-2 px-4 flex items-start hover:bg-gray-50 group hover:text-gray-800">
                                        <div class="ml-2">
                                            <div class="text-[0.875rem]">
                                                <i class="mr-2 ri-chat-1-line"></i>
                                                Messages</div>
                                        </div>
            </a>
        </li>
        <li>
            <a href="#" class="py-2 px-4 flex items-start hover:bg-gray-50 group hover:text-gray-800">
                                        <div class="ml-2">
                                            <div class="text-[0.875rem]">
                                                <i class="mr-2 ri-question-line"></i>
                                                Help</div>
                                        </div>
            </a>
        </li>
    </ul>
    <ul class=" border-t border-[#eff0f2]">
        <li>
            <a href="#" class="py-2 px-4 flex items-start hover:bg-gray-50 group hover:text-gray-800">
                                        <div class="ml-2">
                                            <div class="text-[0.875rem]">
                                                <i class="mr-2 ri-wallet-3-line"></i>
                                                Balance: <b>$6951.02</b></div>
                                        </div>
            </a>
        </li>
        <li>
            <a href="#" class="py-2 px-4 flex items-start hover:bg-gray-50 group hover:text-gray-800">
                                        <div class="ml-2">
                                            <div class="text-[0.875rem]">
                                                <i class="mr-2 ri-settings-3-line"></i>
                                                Settings</div>
                                        </div>
            </a>
        </li>
        <li>
            <a href="#" class="py-2 px-4 flex items-start hover:bg-gray-50 group hover:text-gray-800">
                                        <div class="ml-2">
                                            <div class="text-[0.875rem]">
                                                <i class="mr-2 ri-lock-2-line"></i>
                                                Lock screen</div>
                                        </div>
            </a>
        </li>
        <li>
            <router-link to="/login" v-if="token" @click.prevent="logout" class="py-2 px-4 flex items-start hover:bg-gray-50 group hover:text-gray-800 rounded-b-xl">
                                        <div class="ml-2">
                                            <div class="text-[0.875rem]">
                                                <i class="mr-2 ri-logout-box-r-line"></i>
                                                Logout</div>
                                        </div>
            </router-link>
        </li>
        <li>
            <router-link to="/login" v-if="!token" class="py-2 px-4 flex items-start hover:bg-gray-50 group hover:text-gray-800 rounded-b-xl">
                                        <div class="ml-2">
                                            <div class="text-[0.875rem]">
                                                <i class="ri-login-box-line"></i>
                                                Login</div>
                                        </div>
            </router-link>
        </li>
    </ul>

</div>
</transition>


</template>