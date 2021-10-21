<template>
    <div class="recommend">
        <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
            <a href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name:'HomeRecommendView',
        props:{
            recommends:{
                // 定义数组类型
                type:Array,
                default (){
                    return []
                }
            }
        },
        components:{

        }
    }
</script>

<style>
    .recommend {
        display: flex;
        width: 100%;
        text-align: center;

        padding: 13px 0 13px;
        border-bottom: 12px solid #eee;
    }
    .recommend-item {
        flex: 1;
        font-size: 12px;
    }
    .recommend-item img {
        width: 70px;
        height: 70px;
        margin-bottom: 10px;
    }
</style>
