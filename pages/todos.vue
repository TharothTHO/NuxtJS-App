<template>
  <div class="flex flex-row justify-center pt-8 box-border h-screen w-auto p-4 border-4 bg-green-200">
    <ul>
      <li class="pb-6" v-for="todo in todos" :key="todo.text">
        <input :checked="todo.done" @change="toggle(todo)" type="checkbox">
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
      </li>
      <li><input class=" rounded-3xl p-2" @keyup.enter="addTodo" placeholder="What needs to be done?"></li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    todos () {
      return this.$store.state.todos.list
    }
  },
  methods: {
    addTodo (e) {
      this.$store.commit('todos/add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'todos/toggle'
    })
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>