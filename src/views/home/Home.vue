<template>
    <div id="home">
        <nav-bar class="home-nav"><div slot="center" class="text-name">购物街</div></nav-bar>
        <home-swiper :banners="banners"></home-swiper>
        <home-recommend-view :recommends="recommends"/>
    </div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommendView from './childComps/HomeRecommendView'

import {getHomeMultidata} from 'network/home.js'


export default {
name:'Home',
components:{
    NavBar,
    HomeSwiper,
    HomeRecommendView
},

// 把下面获取的数据保存起来
data (){
    return {
        banners:[],
        recommends:[]
    }
},
// 当创建生命周期函数时，去服务器请求数据
created () {
    //1.请求多个数据
    getHomeMultidata().then( res => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
    })
}
}

</script>

<style>
    .home-nav {
        background-color: var(--color-tint);
    }

    .text-name {
        /* font-weight: bold; */
        font-size: 20px;
        color: #fff;
        font-weight: normal;
    }
</style>
