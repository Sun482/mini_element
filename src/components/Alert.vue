<template>
  <div class="frame">
    <div :class="['el-alert', `el-alert-${type}`]">
      <div class="content-box">{{ content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    content: {
      type: String,
      default: "这是一个简单的警告框哦！",
    },
    type: {
      type: String,
      default: "info",
    },
    index: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style lang="css" scoped>
.el-alert-success {
  background-color: #f0f9eb;
  color: #67c23a;
}
.el-alert-info {
  background-color: #f4f4f5;
  color: #909399;
}
.el-alert-warning {
  background-color: #fdf6ec;
  color: #e6a23c;
}
.el-alert-error {
  background-color: #fef0f0;
  color: #f56c6c;
}
.el-alert {
  min-width: 20%;
  min-height: 20px;
  max-width: 30%;
  max-height: 30px;
  border-radius: 5px;
  font-size: 20px;
  box-sizing: border-box;
  margin-bottom: 20px;
  padding: 8px 5px 8px 15px;
  margin-top: 20px;
}
.content-box {
  width: 85%;
  min-height: 10px;
  font-size: 10px;
  text-align: left;
}
</style>
