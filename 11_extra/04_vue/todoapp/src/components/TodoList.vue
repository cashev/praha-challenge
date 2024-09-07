<script setup lang="ts">
import TodoItem from './TodoItem.vue'
import type { Todo } from './TodoBox.vue'

defineProps<{
  data: Todo[]
}>()

const emit = defineEmits<{
  removeItem: [id: string]
}>()
</script>

<template>
  <ul class="list-group">
    <TodoItem
      v-for="todo in data"
      :key="todo.id"
      :todo="todo"
      @removeItem="emit('removeItem', $event)"
    />
  </ul>
</template>
