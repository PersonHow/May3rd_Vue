<script >
import Card from '../Card.vue';
export default{
    components:{
        Card
    }
}
</script>


<template>
    <div class="color">
        <Card />
        <Card />
        <Card />
    </div>
    
</template>


<style>
.color{
    width: 100%;
    background-color: bisque;
    display: flex;
    flex-grow: 1;
    justify-content: space-around;
}
</style>