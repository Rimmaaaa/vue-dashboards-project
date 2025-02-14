<script setup>

  import { RouterView } from 'vue-router';
  import {computed} from 'vue'
  import {useAuthStore} from './stores/auth'


const authStore = useAuthStore()


const token = computed(() => authStore.userInfo.token);

const checkUser = () => {
  const tokens = JSON.parse(localStorage.getItem('userTokens'));
  if (tokens) {
    authStore.userInfo.token = tokens.token
    authStore.userInfo.refreshToken = tokens.refreshToken
    authStore.userInfo.email = tokens.email
  }
}

checkUser()
</script>

<template>
  <RouterView/>
</template>

<style scoped>

</style> 
