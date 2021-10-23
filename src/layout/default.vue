<template>
  <div class="flex justify-center container mx-auto bg-red-200">
    <!-- <h1 class="text-center text-red-700 font-medium text-3xl">Home</h1> -->
    <slot />
  </div>
</template>

<style>
body {
  --tw-bg-opacity: 1;
  background-color: rgba(254, 202, 202, var(--tw-bg-opacity));
}
</style>
