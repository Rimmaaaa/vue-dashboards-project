<script setup>
import {ref} from 'vue';
import { useAuthStore } from '../stores/auth';
import {useRouter} from 'vue-router'

const authStore = useAuthStore();
const router = useRouter();

const email = ref();
const password = ref();

const signin = async () => {
  await authStore.auth({email: email.value, password: password.value}, 'signin')
  router.push('/')
}
</script>

<template>
  <p v-if="authStore.errorMsg" class="text-red-500">{{ authStore.errorMsg }}</p>
    <div class="flex items-center justify-center min-h-screen">
      
  <div class="w-full max-w-md">
    <div class="bg-[#ffda56] rounded-3xl border-3 border-[#676767] px-8 pt-6 pb-8 mb-4">
      <h2 class="text-2xl font-bold text-center mb-6">Login</h2>
      
      <!-- Username/Email Input -->
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Username or Email
        </label>
        <input
        v-model="email"
          id="username"
          type="text"
          placeholder="Enter your username or email"
          class="shadow bg-white appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      
      <!-- Password Input -->
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input
        v-model="password"
          id="password"
          type="password"
          placeholder="******************"
          class="shadow bg-white appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
        <!-- Optional error message -->
        <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
      </div>
      
      <!-- Submit Button and Forgot Password Link -->
      <div class="flex items-center justify-between">
        <button
        @click="signin"
          
          class="bg-black hover:bg-[#bfb8d6] text-white hover:text-black hover:outline font-bold py-1 px-4 rounded-full focus:outline-none focus:shadow-outline"
        >
          Sign In
        </button>
        <p class="text-sm text-end">Not registered yet? <br><router-link to="/signup" class="font-bold text-blue-500 hover:text-blue-800">Sign up</router-link></p>
        
      </div>
    </div>
    <p class="text-center text-gray-500 text-xs">
      &copy;2023 Your Company. All rights reserved.
    </p>
  </div>
</div>
</template>