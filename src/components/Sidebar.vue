<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <aside>
        <div class="sidebar">
          <h2 class="text-lg font-semibold uppercase">Sidebar</h2>
          
        </div>
        <nav class="p-4 space-y-2">
          <RouterLink to="/" class="nav-link">
            Dashboard
          </RouterLink>
          <RouterLink to="/" class="nav-link">
            Settings
          </RouterLink>
          <RouterLink to="/" class="nav-link">
            Profile
          </RouterLink>
          <RouterLink to="/" class="nav-link">
            Logout
          </RouterLink>
        </nav>
      </aside>
</template>