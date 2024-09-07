<script setup lang="ts">
import TodoItem from './TodoItem.vue'
import type { Todo } from './TodoBox.vue'

const props = defineProps<{
  data: Todo[]
}>()
</script>

<template>
  <ul class="list-group">
    <TodoItem v-for="todo in data" :key="todo.id" :todo="todo" />
  </ul>
</template>
