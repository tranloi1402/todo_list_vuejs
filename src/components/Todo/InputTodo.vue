<template>
  <div class="flex mb-2">
    <div class="">
      <input
        v-model="data.title"
        class="px-3 py-2 focus:outline-none"
        type="text"
        placeholder="Enter..."
      />
    </div>
    <div class="bg-green-500 px-2 py-1">
      <div
        v-if="isUpdate === false"
        class="p-1 cursor-pointer"
        @click.prevent="add()"
      >
        ADD
      </div>
      <div v-else class="p-1 cursor-pointer" @click.prevent="update()">
        UPDATE
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    edit: Object,
    isUpdate: Boolean,
  },
  data() {
    return {
      data: this.edit,
    };
  },
  methods: {
    add() {
      if (this.data.title) {
        console.log("success");
        this.$emit("input", this.data.title);
        this.data = {
          id: null,
          title: "",
          status: null,
        };
      } else {
        return;
      }
    },
    update() {
      if (this.data.title.length > 0) {
        console.log("success - input - update: ", this.data.title);
        this.$emit("inputUpdate", {id: this.edit.id, title: this.data.title, status: true});
      } else {
        console.log("Failure - input - update !!");
      }
    },
  },
};
</script>