<template>
    <div id="home">
        <nav-bar class="home-nav"><div slot="center" class="text-name">购物街</div></nav-bar>
        <home-swiper :banners="banners"></home-swiper>
        <home-recommend-view :recommends="recommends"/>
        <feature-view></feature-view>

        <tab-control class="tab-control"  :titles="['流行','新款','精选']"></tab-control>
        <ul>
            <li>列表1</li>
            <li>列表2</li>
            <li>列表3</li>
            <li>列表3</li>
            <li>列表3</li>
            <li>列表3</li>
            <li>列表3</li>
            <li>列表3</li>
            <li>列表3</li>
            <li>列表3</li>
            <li>列表3</li>
            <li>列表3</li>
            <li>列表3</li>
            <li>列表3</li>
            <li>列表3</li>
            <li>列表3</li>
            <li>列表3</li>
            <li>列表3</li>
        </ul>
    </div>
</template>

<script>


import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommendView from './childComps/HomeRecommendView'
import FeatureView from './childComps/FeatureView.vue'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/tabControl'

import {getHomeMultidata,getHomeGoods} from 'network/home.js'



export default {
name:'Home',
components:{
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    TabControl,
    getHomeGoods
    
},

// 把下面获取的数据保存起来
data (){
    return {
        banners:[],
        recommends:[],
        // 数据模型,请求首页分类数据
        goods:{
            'pop':{page:0,list:[]},
            'new':{page:0,list:[]},
            'sell':{page:0,list:[]},
        }
    }
},
// 当创建生命周期函数时，去服务器请求数据
created () {
    //1.请求多个数据
    this.getHomeMultidata()
    // 2.请求首页商品数据,
    this.getHomeGoods('pop')

    this.getHomeGoods('new')

    this.getHomeGoods('sell')
    
    },    
    // 用计算函数methods方法封装成请求数据函数
    methods:{
        getHomeMultidata (){                    
            getHomeMultidata().then( res => {
                this.banners = res.data.data.banner.list;
                this.recommends = res.data.data.recommend.list;
            })
        },
        // 传入一个type参数动态获取数据,定义一个page页码的变量，这样可以请求第二页第三页这样请求
        // 这里定义的type指的是 ‘pop’ ‘new’ ‘sell’
        getHomeGoods(type){            
            const page = this.goods[type].page + 1
            getHomeGoods(type,page).then(res => {
                // 把数据保存到上面的data里 
                this.goods[type].list.push(...res.data.data.list)
                this.goods[type].page += 1
            })
            }
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

    .tab-control {
        position: sticky;
        top:44px;
        background-color: #fff;
    }
</style>
