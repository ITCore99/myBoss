<template>
    <div class="footerNav">
        <span>Copyright 2019 Boos直聘 由咸鱼联盟提供技术支持</span>
    </div>
</template>

<script>
    export default {
        name: "footerNav"
    }
</script>

<style scoped lang="scss">
    .footerNav{
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 100px;
      background: #fff;
      text-align: center;

      span{
        font-size: 16px;
        color:#eee;

      }
    }
</style>
