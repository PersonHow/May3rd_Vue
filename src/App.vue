<script >
import HeadView from './components/view/HeadView.vue';
import FootView from './components/view/FootView.vue';
import HomeView from './components/view/HomeView.vue';
export default{
  components:{
    HeadView,
    HomeView,
    FootView
  }
}
</script>

<template>
  <div class="container">
    <HeadView />
    <HomeView />
    <FootView />
  </div>
  
</template>

<style scoped>
.container{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
