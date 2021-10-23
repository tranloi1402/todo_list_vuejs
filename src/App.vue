<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const router = useRoute();
    return {
      layout: computed(() => (router.meta.layout || "default") + "-layout"),
    };
  },
};
</script>
