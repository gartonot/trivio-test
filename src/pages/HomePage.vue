<template>
    <div>
        home
        <AppButton
            text="Создать поездку"
            type="text"
            :class="$style.buttonCreateTrip"
            @click="createTrip()"
        />
    </div>
</template>

<script setup lang="ts" >
import useDrawerCreateTrip from '@/composables/useDrawerCreateTrip.ts';
import AppButton from '@/components/ui/AppButton.vue';

const drawer = useDrawerCreateTrip();

const createTrip = () => {
    drawer.openDrawer();
};
</script>

<style module>
.buttonCreateTrip {
  color: var(--color-primary);
  border-bottom: 1px dashed var(--color-primary);
}
</style>
