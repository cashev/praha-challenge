<script setup lang="ts">
import { computed } from 'vue';
import type { Todo } from './TodoBox.vue'

const props = defineProps<{
  todo: Todo
}>()

const toggleComplete = () => {
  props.todo.complete = !props.todo.complete
}

const remove = () => {
  console.log('remove')
}

const classes = computed(() => {
  return props.todo.complete ? 'list-group-item list-group-item-success' : 'list-group-item'
})
</script>

<template>
  <li :class="classes">
    {{ todo.task }}
    <div class="pull-right" role="group">
      <button type="button" @click="toggleComplete" class="btn btn-xs btn-success img-circle">
        &#x2713;
      </button>
      <button type="button" @click="remove" class="btn btn-xs btn-danger img-circle">
        &#xff38;
      </button>
    </div>
  </li>
</template>
