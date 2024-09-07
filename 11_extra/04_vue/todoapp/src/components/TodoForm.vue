<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  addItem: [task: string]
}>()

const task = ref('')

const doSubmit = () => {
  if (task.value.trim() === '') {
    return
  }
  emit('addItem', task.value)
  task.value = ''
}
</script>

<template>
  <div class="commentForm vert-offset-top-2">
    <hr />
    <div class="clearfix">
      <form class="todoForm form-horizontal" @submit.prevent="doSubmit">
        <div class="form-group">
          <label class="col-md-2 control-label">Task</label>
          <div class="col-md-10">
            <input
              type="text"
              v-model="task"
              class="form-control"
              placeholder="What do you need to do?"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-10 col-md-offset-2 text-right">
            <input type="submit" value="Save Item" class="btn btn-primary" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
