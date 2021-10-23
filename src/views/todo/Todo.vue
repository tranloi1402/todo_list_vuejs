<template>
  <div class="mt-10">
    <div v-if="isUpdate === true" class="flex py-3 bg-white">
      <p class="pl-3">Update: {{ edit.title }}</p>
      <p
        class="
          ml-auto
          px-2
          leading-4
          text-red-500
          font-black
          text-xl
          cursor-pointer
        "
        @click="close()"
      >
        X
      </p>
    </div>

    <input-todo
      @input="addTodo"
      @inputUpdate="updateTodo"
      :edit="edit"
      :isUpdate="isUpdate"
    />
    <hr />
    <div>
      <div
        v-if="todos.length === 0"
        class="text-center py-3 bg-white font-medium text-lg"
      >
        --- Trống ----
      </div>
      <todo-item
        v-else
        v-for="(todo, index) in todos"
        :key="index"
        :todo="todo"
        @dataEdit="dataEdit"
        @deleTodoID="deleteTodo"
        @updStatus="updateStatus"
      />
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";
import TodoItem from "../../components/Todo/TodoItem.vue";
import InputTodo from "../../components/Todo/InputTodo.vue";
export default {
  components: {
    InputTodo,
    TodoItem,
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "a1",
          status: true,
        },
        {
          id: 2,
          title: "a2",
          status: false,
        },
      ],
      edit: {
        id: "",
        title: "",
        status: null,
      },
      isUpdate: false,
    };
  },
  methods: {
    addTodo(data) {
      if (data.length > 0) {
        const idRandom = Math.floor(Math.random() * 100);
        this.todos.push({ id: idRandom, title: data, status: true });
        console.log("add-success!!");
      }
    },
    dataEdit(data) {
      this.edit = data;
      this.isUpdate = true;
      console.log("[data - edit]", this.edit);
    },
    close() {
      this.edit = {
        id: "",
        title: "",
        status: null,
      };
      this.isUpdate = false;
    },
    updateTodo(data) {
      console.log(data);
      const index = this.todos.findIndex((item) => item.id == data.id);
      console.log("[index] : ", index);
      if (index >= 0) {
        this.todos.splice(index, 1, data);
        this.edit = {
          id: "",
          title: "",
          status: null,
        };
        this.isUpdate = false;
      } else {
        console.log("Update fail!!!!");
      }
    },
    deleteTodo(id) {
      const index = this.todos.findIndex((item) => item.id == id);
      if (index >= 0) {
        this.todos.splice(index, 1);
        console.log("delete success!!!");
      } else {
        console.log("delete fail!!!!");
      }
    },
    updateStatus(data) {
      const index = this.todos.findIndex((item) => item.id == data.id);
      if (index >= 0) {
        this.todos.splice(index, 1, {id: data.id, title: data.title, status: !data.status});
        console.log("Update status success!!!!");
      } else {
        console.log("Update status fail!!!!");
      }
    },
  },
};
</script>
