<template>
    <div :class="$style.root">
        <div :class="$style.passengerCard">
            {{ getPassengerName() }}
            <AppButton :class="$style.passengerDelete" type="text" @click="passengerDelete()">
                <AppIcon
                    name="cross"
                    :size="10"
                />
            </AppButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import AppIcon from '@/components/ui/AppIcon.vue';
import UtilUser, { type User } from '@/utils/UtilUser.ts';
import AppButton from '@/components/ui/AppButton.vue';

interface Props {
    passenger: User,
}
interface Emits {
    (event: 'passengerDelete'): void,
}
const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const getPassengerName = () => {
    return UtilUser.getShortName(props.passenger);
};
const passengerDelete = () => {
    emits('passengerDelete');
};
</script>

<style module>
.root {
    padding-top: 8px;
}
.passengerCard {
    background-color: var(--color-white);
    border-radius: 5px;
    height: 40px;
    display: flex;
    align-items: center;
    padding-inline: 15px;
    position: relative;
}
.passengerDelete {
    --size: 16px;
    width: var(--size);
    height: var(--size);
    background-color: var(--color-gray);
    color: var(--color-white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    right: 5px;
    top: -8px;
}
</style>
