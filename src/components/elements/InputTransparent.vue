<template>
    <div>
        <input
            type="text"
            :class="$style.input"
            :placeholder="placeholder"
        >
    </div>
</template>

<script setup lang="ts">
interface Props {
  placeholder: string,
}

defineProps<Props>();
</script>

<style module>
.input {
  width: 100%;
  text-align: center;
  border: none;
  background: transparent;
  font-size: 14px;
  color: var(--color-primary);
  font-weight: 700;
  border-bottom: 1px solid transparent;
  padding: 7px 15px;
}
.input::-webkit-input-placeholder {
  color: var(--color-black-20);
}
.input:focus {
  outline: none;
  border-bottom-color: var(--color-primary);
}
</style>
