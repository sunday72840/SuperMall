<template>
    <div class="tab-control">                                                      
                                                                                        
        <div v-for="(item,index) in titles" :key="index" class="tab-control-item" 
        :class="{active: index === currentIndex}" @click="itemClick(index)">
                <!-- 这里动态绑定class 利用click 监听选中的状态 但是必须传入一个index  -->
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
        },
        
        data(){
            return {
                currentIndex:0
            }
        },
        // 监听谁被选中
        methods:{
            itemClick(index){
                this.currentIndex = index;
            }
        }
    }
</script>

<style>
    .tab-control {
        display: flex;
        text-align: center;
        font-size: 15px;
        height: 40px;
        line-height: 40px;
        
    }
    .tab-control-item {
        flex: 1;
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        border-radius: 2px;
        /* box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1) */
        /* box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04) */
    }

    .tab-control-item span {
        padding: 3px;
    }

    .active {
        color: var(--color-high-text);
        
    }

    .active span {
        border-bottom: 3px solid var(--color-high-text);
    }
</style>
