<template>
  <div class="title_div">
    <van-row type="flex" justify="space-between" style="padding:0 .2rem;">
      <van-col span="5">
        <img class = 'logo' src="../assets/logo-img.png" alt="">
      </van-col>
      <van-col @click="searchBtnFn" span="15" class="search_div">
        <van-icon name="search" size=".5rem"/>
        <span>搜索商品</span>
      </van-col>
      <van-col span="3">
        <van-button class="logo-btn"  type="primary" size="mini" to="login">登录</van-button>
      </van-col>
    </van-row>
    <van-tabs v-model="active" swipeable class="tabBtnWrap">
        <van-tab v-for="n in tabBtnArr" :title="n" :key="n">
        </van-tab>
    </van-tabs>
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
        <van-swipe-item v-for="n in swipe_imgArr" :key="n">
          <img :src="n" />
        </van-swipe-item>
    </van-swipe>
    <div class='indexServicePolicy'>
      <ul>
        <li><i style="background-image:url(http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png);"></i>网易自营品牌</li>
        <li><i style="background-image:url(http://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png);"></i>30天无忧退货</li>
        <li><i style="background-image:url(http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png);"></i>48小时快速退款</li>
      </ul>
    </div>
    <div class='goodsColumn_wrap' :column-num="3">
      <van-grid :column-num="5">
        <van-grid-item 
          v-for="(n,inx) in goodsColumn_Arr" 
          :key=inx 
          :icon=n.img_url
          :text=n.img_txt
          >
          </van-grid-item>
      </van-grid>
    </div>
    <div class="CountDown">
      <p>限时购</p>
      <van-count-down :time="time_val" class="CountDownstyle">
        <template v-slot="timeData" >
          <span class="time_block ">{{ timeData.hours }}</span>
          <span class="colon">:</span>
          <span class="time_block ">{{ timeData.minutes }}</span>
          <span class="colon">:</span>
          <span class="time_block ">{{ timeData.seconds }}</span>
        </template>
      </van-count-down>
      <a href="#" class="right">更多>></a>
    </div>

    <div class='GoodsList_wrap'>
      <van-grid :column-num="3">
        <van-grid-item
          v-for="(n,inx) in goodsListObj" 
          :key=inx 
          :icon=n.img_url
          :text=n.img_txt />
      </van-grid>
    </div>

    <footer_bar></footer_bar>

  </div>
</template>

<script>
import '../assets/resetVant.css'
import axios from 'axios'
import footer_bar from './footer_bar'

export default {
  name: 'indexWrap',
  data(){
    return{
      time_val:30*60*60*1000,
      active:'',
      tabBtnArr:[],
      swipe_imgArr:[],
      goodsColumn_Arr:[
{
  img_url:'https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png',
  img_txt:'新品首发'
},{
  img_url:'http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png',
  img_txt:'居家生活'
},{
  img_url:'https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png',
  img_txt:'服饰鞋包'
},{
  img_url:'http://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png',
  img_txt:'美食酒水'
},{
  img_url:'https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png',
  img_txt:'个护清洁'
},{
  img_url:'https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png',
  img_txt:'母婴亲子'
},{
  img_url:'https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png',
  img_txt:'运动旅行'
},{
  img_url:'https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png',
  img_txt:'数码家电'
},{
  img_url:'https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png',
  img_txt:'全球特色'
},{
  img_url:'http://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif',
  img_txt:'好货抄底'
}       
      ],
      goodsListObj:[{
  img_url:'https://yanxuan-item.nosdn.127.net/e78096b543cc65af16da3a93cacb4071.png?quality=75&type=webp&imageView&thumbnail=216x216',
  img_txt:'￥219'
},{
  img_url:'https://yanxuan-item.nosdn.127.net/570e762763536175b9ec226c0d93a7cd.png?quality=75&type=webp&imageView&thumbnail=216x216',
  img_txt:'￥167'
},{
  img_url:'https://yanxuan-item.nosdn.127.net/f3f18a4fe9e7905cd7c9ff28e42ff0c2.png?quality=75&type=webp&imageView&thumbnail=216x216',
  img_txt:'￥50.2'
},{
  img_url:'https://yanxuan-item.nosdn.127.net/0b05c22b99e8fc2cf3015e4bbb8d7c3f.png?quality=75&type=webp&imageView&thumbnail=216x216',
  img_txt:'￥139'
},{
  img_url:'https://yanxuan-item.nosdn.127.net/ec55e5314bfd670320c3c15ce5e0b095.png?quality=75&type=webp&imageView&thumbnail=216x216',
  img_txt:'￥42.8'
},{
  img_url:'https://yanxuan-item.nosdn.127.net/f815bf4d31ece0500089d69475c2014c.png?quality=75&type=webp&imageView&thumbnail=216x216',
  img_txt:'￥249'
}]
    }
  },
  created(){
    //导航条
    axios.get("http://localhost:3344/get_tabBtn_list")
      .then(_d=>{
        console.log(_d.data);
        this.tabBtnArr = _d.data;
      });
    //轮播图
    axios.get('http://localhost:3344/get_swipe_img')
      .then(_d=>{
        console.log(_d.data);
        this.swipe_imgArr = _d.data;
      });
  },
  components:{footer_bar},
  methods:{
    //搜索框
    searchBtnFn(){
      this.$router.push('/searchPage')
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.title_div{padding: 0.21333rem 0;}
.logo{
  width: 1.87rem;
  height: 0.5333rem; 
  display: inline-block;
  margin-top: .1rem;
}
.search_div{
    background-color: #ededed;
    border-radius: .10667rem;
    height: 0.75rem;
    font-size: 0.377rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.logo-btn{
    width: .98667rem;
    height: .53333rem;
    line-height: .53333rem;
    text-align: center;
    color: #DD1A21;
    border: 1px solid #DD1A21;
    border-radius: .10667rem;
    margin-left: .21333rem;
    font-size: .32rem;
    background: #fff;
    margin-top: .1rem;
}
.tabBtnWrap{
  font-size:.4rem;
  padding: 0 .2rem;
}
.my-swipe .van-swipe-item {
  height: 4rem;
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

.indexServicePolicy{
  width: 100%;
}
.indexServicePolicy ul{
  height: .96rem;
  padding: 0 .4rem;
  display: flex;
  align-items: center;
}
.indexServicePolicy ul li{
  flex: 1;
  // float: left;

  font-size: .32rem;
  color: #333;
  margin-right: 0.2rem;
  line-height: .42667rem;
  display: inline-block;
  vertical-align: middle;
}
.indexServicePolicy ul li i{
  width: .42667rem;
  height: .42667rem;
  display: inline-block;
  vertical-align: middle;
  font-size: .32rem;
  color: #333;
  margin-left: .10667rem;
  line-height: .42667rem;
  display: inline-block;
  vertical-align: middle;
  background-size: 100% 100%;
}
.CountDown{
    height: 1.33333rem;
    overflow: hidden;
    padding: 0 .4rem;
    line-height: 1.33333rem;
    background: #fff; 
}
.CountDown p{
    float: left;
    font-size: .42667rem;
}
.CountDown a.right{
    float: right;
    font-size: .37333rem;
    color: #333;
}
.colon {
    display: inline-block;
    margin: 0 4px;
    color: #333;
    font-size: .4rem;
}
.time_block {
    display: inline-block;
    width: .48rem;
    height: .48rem;
    color: #fff;
    font-size: .32rem;
    line-height: .48rem;
    text-align: center;
    border-radius: .05333rem;
    background-color: #333;
}
.CountDownstyle{
  float: left;
  margin: 32px 0 0 20px;
}

</style>
