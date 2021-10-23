<template>
  <div class="flex bg-white py-3 border-b-2">
    <div class="px-1 border-r-2">
      <span
        v-if="todo.status === true"
        @click="updStatus(todo)"
        class="font-medium text-xl cursor-pointer px-1"
        >📗</span
      >
      <span
        v-else
        @click="updStatus(todo)"
        class="font-medium text-xl cursor-pointer px-1"
        >📕</span
      >
    </div>
    <div class="ml-2">{{ todo.title }}</div>
    <div class="flex ml-auto">
      <div class="px-1 cursor-pointer" @click="dataEdit(todo)">✏</div>
      <div class="px-1 cursor-pointer" @click="delTodoID(todo.id)">🗑</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: Object,
  },
  methods: {
    dataEdit(todo) {
      this.$emit("dataEdit", todo);
    },
    delTodoID(todoID) {
      this.$emit("deleTodoID", todoID);
    },
    updStatus(data) {
      this.$emit("updStatus", data);
    },
  },
};
</script>