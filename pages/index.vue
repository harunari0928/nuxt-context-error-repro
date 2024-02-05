<script setup>
import { useToast } from "primevue/usetoast";
import Toast from "primevue/toast";

const toast = useToast();

const addToast = () => {
  toast.add({
    severity: "success",
    summary: "toast",
    detail: "works",
    life: 5_000,
  });
};
</script>

<template>
  <div>
    <p>hello world</p>
    <button @click="addToast">click me</button>
  </div>
  <Toast position="bottom-right" />
</template>
