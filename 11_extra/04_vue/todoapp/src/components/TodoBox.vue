<script setup lang="ts">
import { ref } from 'vue'
import TodoList from './TodoList.vue'
import TodoForm from './TodoForm.vue'

export interface Todo {
  id: string
  task: string
  complete: boolean
}

const data = ref<Todo[]>([
  { id: '00001', task: 'Wake up', complete: false },
  { id: '00002', task: 'Eat breakfast', complete: false },
  { id: '00003', task: 'Go to work', complete: false }
])

const generateId = () => (Math.floor(Math.random() * 90000) + 10000).toString()

const handleUpdateItem = (newTodo: Todo) => {
  const index = data.value.findIndex((t) => t.id === newTodo.id)
  if (index !== -1) {
    data.value[index] = newTodo
  }
}

const handleRemoveItem = (id: string) => {
  data.value = data.value.filter((todo) => todo.id !== id)
}

const handleAddItem = (task: string) => {
  data.value.push({
    id: generateId(),
    task,
    complete: false
  })
}
</script>

<template>
  <div class="well">
    <h1 class="vert-offset-top-0">To do:</h1>
    <TodoList :data="data" @updateItem="handleUpdateItem" @removeItem="handleRemoveItem" />
    <TodoForm @addItem="handleAddItem" />
  </div>
</template>
