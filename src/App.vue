<script setup>
import HomeButton from './components/HomeButton.vue'
import ProfileButton from './components/ProfileButton.vue'
import FaqButton from './components/FaqButton.vue'
import MyTasks from './components/MyTasksButton.vue'
</script>

<template>
    <div class="header">
        <HomeButton />
        <ProfileButton />
        <FaqButton />
        <MyTasks />
    </div>
    <router-view />
</template>