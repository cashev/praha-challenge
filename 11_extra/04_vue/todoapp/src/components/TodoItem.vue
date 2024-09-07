<script setup lang="ts">
import { computed } from 'vue'
import type { Todo } from './TodoBox.vue'

const props = defineProps<{
  todo: Todo
}>()

const emit = defineEmits<{
  updateItem: [newTodo: Todo]
  removeItem: [id: string]
}>()

const toggleComplete = () => {
  const newTodo = { ...props.todo, complete: !props.todo.complete }
  emit('updateItem', newTodo)
}

const classes = computed(() => {
  return props.todo.complete ? 'list-group-item list-group-item-success' : 'list-group-item'
})

const removeItem = () => {
  emit('removeItem', props.todo.id)
}
</script>

<template>
  <li :class="classes">
    {{ todo.task }}
    <div class="pull-right" role="group">
      <button type="button" @click="toggleComplete" class="btn btn-xs btn-success img-circle">
        &#x2713;
      </button>
      <button type="button" @click="removeItem" class="btn btn-xs btn-danger img-circle">
        &#xff38;
      </button>
    </div>
  </li>
</template>
