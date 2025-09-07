<template>
    <button :class="classList" @click="onClick()">
        {{ text }}
    </button>
</template>

<script setup lang="ts">
import { computed, useCssModule } from 'vue';

type ButtonSize = 'large' | 'default' | 'small';

interface Props {
  text: string,
  size?: ButtonSize,
}
interface Emits {
  (event: 'click'): void,
}

const props = withDefaults(defineProps<Props>(), {
    size: 'default',
});
const emits = defineEmits<Emits>();

const style = useCssModule();

const classList = computed(() => {
    return [
        style.button,
        props.size === 'large' && style.buttonLarge,
        props.size === 'small' && style.buttonSmall,
    ];
});

const onClick = () => {
    emits('click');
};
</script>

<style module>
.button {
  padding-block: 12px;
  padding-inline: 44px;
  background-color: var(--color-primary);
  color: var(--color-white);
  border-radius: 5px;
  border: none;
  font-size: 14px;
  line-height: 14px;
  transition: 0.3s;
  width: 100%;
  height: 44px;
}
.button:hover {
  opacity: 90%;
}
.buttonLarge {
  padding-block: 20px;
  height: 54px;
}
.buttonSmall {
  padding-block: 9px;
  height: 30px;
}
</style>
