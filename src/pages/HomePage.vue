<template>
    <div>
        home
        <button @click="createTrip()">Создать поездку</button>
    </div>
</template>

<script setup lang="ts" >
import useDrawerCreateTrip from '@/composables/useDrawerCreateTrip.ts';

const drawer = useDrawerCreateTrip();

const createTrip = () => {
    drawer.openDrawer();
};
</script>
