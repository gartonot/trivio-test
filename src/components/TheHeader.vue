<template>
    <header :class="$style.header">
        <div :class="['container-wide', $style.headerContainer]">
            <RouterLink to="/">
                <AppVector :vector="vectors.logo" />
            </RouterLink>

            <div :class="$style.createTrip" @click="createTrip()">
                <AppIcon name="baggage" />
                <div>Создать поездку</div>
            </div>

            <div :class="$style.userLogo">AA</div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { vectors } from '@/assets/vectors/vectors.ts';
import AppVector from '@/components/ui/AppVector.vue';
import AppIcon from '@/components/ui/AppIcon.vue';
import useDrawerCreateTrip from '@/composables/useDrawerCreateTrip.ts';

const drawer = useDrawerCreateTrip();

const createTrip = () => {
    drawer.openDrawer();
};
</script>

<style module>
.header {
  background-color: var(--color-white);
  height: 60px;
}
.headerContainer {
  display: flex;
  align-items: center;
  height: 100%;
}
.createTrip {
  padding-inline: 20px;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  gap: 10px;
  height: 100%;
  cursor: pointer;
}
.userLogo {
  --size: 36px;
  width: var(--size);
  height: var(--size);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);
  color: var(--color-white);
  border-radius: 50%;
  font-size: 14px;
  margin-inline-start: auto;
}
</style>
