<template>
    <div id="home">
        <nav-bar class="home-nav"><div slot="center" class="text-name">购物街</div></nav-bar>
        <home-swiper :banners="banners"></home-swiper>
        <home-recommend-view :recommends="recommends"/>
        <feature-view></feature-view>

        <tab-control :titles="['流行','新款','精选']"></tab-control>
        <ul>
            <li>列表1</li>
            <li>列表2</li>
            <li>列表3</li>
            <li>列表4</li>
            <li>列表5</li>
            <li>列表6</li>
            <li>列表7</li>
            <li>列表8</li>
            <li>列表9</li>
            <li>列表10</li>
            <li>列表11</li>
            <li>列表12</li>
            <li>列表13</li>
            <li>列表14</li>
            <li>列表15</li>
            <li>列表16</li>
            <li>列表17</li>
            <li>列表18</li>
            <li>列表19</li>
            <li>列表20</li>
        </ul>
    </div>
</template>

<script>


import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommendView from './childComps/HomeRecommendView'
import FeatureView from './childComps/FeatureView.vue'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/tabControl'

import {getHomeMultidata} from 'network/home.js'


export default {
name:'Home',
components:{
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    TabControl
    
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
    #home {
        padding-top: 44px;
    }
    .home-nav {
        background-color: var(--color-tint);
        color: #fff;

        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;
    }

    .text-name {
        /* font-weight: bold; */
        font-size: 20px;
        color: #fff;
        font-weight: normal;
    }
</style>
