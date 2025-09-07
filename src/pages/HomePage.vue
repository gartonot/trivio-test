<template>
    <div :class="$style.form">
        <AppInputText
            v-model:value="tripNameOrId"
            :class="$style.inputTextSearch"
            iconName="magnifier"
            placeholder="Введите название поездки или её номер"
        />
        <AppButton
            text="Найти"
            size="large"
            :class="$style.buttonSearch"
            @click="searchTrip()"
        />
    </div>

    <div v-if="tripList.length === 0" :class="$style.tripListEmpty">
        <div>Список поездок пуст</div>
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
import AppInputText from '@/components/ui/AppInputText.vue';
import { ref } from 'vue';

const drawer = useDrawerCreateTrip();

const tripNameOrId = ref('');
const tripList = ref([]);

const searchTrip = () => {
    // TODO: Фильтровать список поездок по клику
    console.log(tripNameOrId.value);
};
const createTrip = () => {
    drawer.openDrawer();
};
</script>

<style module>
.form {
    display: flex;
    gap: 20px;
}
.inputTextSearch {
    padding-inline: 20px;
}
.buttonSearch {
    max-width: 130px;
}
.buttonCreateTrip {
    color: var(--color-primary);
    border-bottom: 1px dashed var(--color-primary);
    font-size: 16px;
}
.tripListEmpty {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    margin-top: 30px;
}
</style>
