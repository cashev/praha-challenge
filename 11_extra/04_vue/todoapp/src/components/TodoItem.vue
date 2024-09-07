<script setup lang="ts">
import type { Todo } from './TodoBox.vue'

const props = defineProps<{
  todo: Todo
}>()

const complete = () => {
  console.log('complete')
}

const remove = () => {
  console.log('remove')
}
</script>

<template>
  <li class="list-group-item clearfix">
    {{ todo.task }}
    <div class="pull-right" role="group">
      <button type="button" @click="complete" class="btn btn-xs btn-success img-circle">
        &#x2713;
      </button>
      <button type="button" @click="remove" class="btn btn-xs btn-danger img-circle">
        &#xff38;
      </button>
    </div>
  </li>
</template>
