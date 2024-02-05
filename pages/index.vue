<script setup>
import { inject } from 'vue';
import { PROVIDES_SYMBOL } from "~/utils/symbol";

const myValue = inject(PROVIDES_SYMBOL, 'not provided');
</script>

<template>
  <p>{{ myValue }}</p>
</template>
