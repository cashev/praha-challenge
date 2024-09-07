<script setup lang="ts">
const doSubmit = () => {
  console.log('doSubmit')
}
</script>

<template>
  <div class="commentForm vert-offset-top-2">
    <hr />
    <div class="clearfix">
      <form class="todoForm form-horizontal" @submit="doSubmit">
        <div class="form-group">
          <label class="col-md-2 control-label">Task</label>
          <div class="col-md-10">
            <input type="text" class="form-control" placeholder="What do you need to do?" />
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
