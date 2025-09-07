<template>
  <div>
    <TheHeader />

    <RouterView />

    <DrawerCreateTrip :isOpen="drawer.isOpen.value" />
  </div>
</template>

<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
import DrawerCreateTrip from "@/components/DrawerCreateTrip.vue";
import useDrawerCreateTrip from "@/composables/useDrawerCreateTrip.ts";

const drawer = useDrawerCreateTrip();
</script>
