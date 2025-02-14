<script>
    
</script>

<template>
    <li class="mr-[2px] dropdown">
                <button type="button" @click="$emit('toggle')" class="dropdown-toggle">
                    <slot name="icon"></slot>
                </button>
                <transition
                    name="fade"
                    enter-active-class="transition ease-out duration-200"
                    enter-from-class="opacity-0 translate-y-1"
                    enter-to-class="opacity-100 translate-y-0"
                    leave-active-class="transition ease-in duration-150"
                    leave-from-class="opacity-100 translate-y-0"
                    leave-to-class="opacity-0 translate-y-1"
                >
                    <slot name="dropdown"></slot>
                </transition>
                
    </li>
</template>