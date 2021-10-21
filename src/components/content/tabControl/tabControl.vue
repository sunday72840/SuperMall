<template>
    <div class="tab-control">
        <div v-for="(item,index) in titles" :key="index">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name:'tabControl',
        props:{
            titles:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style>
    .tab-control {
        display: flex;
    }
    .tab-control-item {
        flex: 1;
    }
</style>
