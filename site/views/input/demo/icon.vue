<template>
  <div>
    <bk-input
      class="mb10"
    >
      <template #prefix>
        <span class="input-icon">
          <search />
        </span>
      </template>
    </bk-input>

    <bk-input class="mb10">
      <template #suffix>
        <span class="input-icon suffix-icon">
          <info-line />
        </span>
      </template>
    </bk-input>
  </div>
</template>

<script setup>
  import { InfoLine, Search } from 'bkui-vue/lib/icon';

</script>

<style lang="postcss" scoped>
  .input-icon {
    display: block;
    padding-left: 10px;
    font-size: 16px;
    color: #c4c6cc;
    align-self: center;

  }

  .suffix-icon {
    padding-right: 10px;
  }
</style>


