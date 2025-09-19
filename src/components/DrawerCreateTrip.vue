<template>
    <div :class="[$style.drawer, isOpen && $style.open]" @click="closeDrawer()">
        <div :class="$style.drawerWrapper" @click.stop>
            <header :class="$style.header">
                <div :class="$style.headerTitle">Создание поездки</div>

                <button :class="$style.buttonClose" @click="closeDrawer()">
                    <AppIcon name="cross" />
                </button>
            </header>
            <div :class="$style.content">
                <InputTransparent placeholder="Введите название поездки" />

                <div>
                    <PassengerCard :passenger="user1" />
                    <PassengerCard :passenger="user1" />
                    <PassengerCard :passenger="user1" @passengerDelete="() => { console.log('asdasd') }"/>
                </div>
            </div>
            <footer :class="$style.footer">
                footer
            </footer>
        </div>
    </div>
</template>

<script setup lang="ts">
import useDrawerCreateTrip from '@/composables/useDrawerCreateTrip.ts';
import AppIcon from '@/components/ui/AppIcon.vue';
import InputTransparent from '@/components/elements/InputTransparent.vue';
import PassengerCard from '@/components/elements/PassengerCard.vue';

interface Props {
  isOpen: boolean,
}

defineProps<Props>();

const user1 = {
    'first_name': 'Смирнов',
    'second_name': 'Алексей',
    'last_name': 'Сергеевич',
};

const drawer = useDrawerCreateTrip();

const closeDrawer = () => {
    drawer.closeDrawer();
};
</script>

<style module>
.drawer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.44);
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s ease;
}
.open.drawer {
  opacity: 1;
  visibility: visible;
}
.drawerWrapper {
  background-color: var(--color-white);
  width: 400px;
  height: 100%;
  position: absolute;
  top: 0;
  right: -400px;
  transition: 0.3s ease;
}
.open .drawerWrapper {
  right: 0;
}
.header {
  height: 60px;
  border-bottom: 1px solid var(--color-black-10);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 20px;
}
.headerTitle {
  font-weight: 500;
  color: var(--color-black);
  font-size: 14px;
}
.buttonClose {
  background-color: transparent;
  border: none;
  padding: 0;
  color: var(--color-gray);
}
.content {
  height: calc(100% - 61px - 61px);
  overflow-y: auto;
  background-color: var(--color-gray-light);
  padding: 20px;
}
.footer {
  height: 60px;
  border-top: 1px solid var(--color-black-10);
  padding: 10px 20px;
}
</style>
