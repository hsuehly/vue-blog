<template>
  <div
    class="abstract-item"
    :class="$cssysRandom"
    @click="$router.push(item.path)">
    <!-- <span></span>
    <span></span>
    <span></span>
    <span></span> -->
    <i v-if="item.frontmatter.sticky" class="iconfont reco-sticky"></i>
          <div class="cover-wrap">
           <img class="cover" draggable="false" :src="this.timestamp($coverRandom)" :alt="item.title">
          </div>
     <div class="abstract-content-wrap">
      <div class="title">
        <i v-if="item.frontmatter.keys" class="iconfont reco-lock"></i>
        <router-link :to="item.path">{{ item.title }}</router-link>
      </div>
     <div class="abstract" v-html="item.excerpt"></div>
      <PageInfo :pageInfo="item" :currentTag="currentTag"> </PageInfo>
    </div>
  </div>
</template>

<script>
import PageInfo from './PageInfo'
export default {
  components: { PageInfo },
  props: ['item', 'currentPage', 'currentTag'],
  methods: {
  //新连接
    timestamp(url){
      var getTimestamp=new Date().getTime();
      if(url.indexOf("?")>-1){
        url=url+"&timestamp="+getTimestamp
      }else{
        url=url+"?timestamp="+getTimestamp
      }
      return url
    },
  },
  
}
 
</script>
<style lang="stylus" scoped>
.item-border-1:hover {
  animation: rotate 1s linear infinite;
}
  .item-border-1::before, .item-border-1::after {
    box-sizing: border-box;
    position: absolute;
    content: '';
    border: 2px solid transparent;
    width: 0;
    height: 0;
  }
  .item-border-1::after,.item-border-1::before {
     top: 0;
    left: 0;
  }
  .item-border-1:hover::before, .item-border-1:hover::after {
    width: 100%;
    height: 100%;
  }
  .item-border-1:hover::before {
    border-top-color: #4361ee;
    border-right-color: #4361ee;
    transition: width 0.3s ease-out, height 0.3s ease-out 0.3s;
  }  
  .item-border-1:hover::after {
    border-bottom-color: #4361ee;
    border-left-color: #4361ee;
    transition: height .3s ease-out, width .3s ease-out .4s;
  }

  .item-border-2:hover {
    animation: rotate 1s linear infinite;
    }  
    .item-border-2::before {
      border-top: 2px solid #647ea0;
      border-bottom: 2px solid #647ea0;
      transform: scaleX(0)
    }
    .item-border-2::after {
      border-left: 2px solid #647ea0;
      border-right: 2px solid #647ea0;
      transform: scaleY(0)
    }
    .item-border-2::after,.item-border-2::before {
       top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      transform-origin: center;
      transition: all 1s;
    }
    .item-border-2::before, .item-border-2::after {
        box-sizing: border-box;
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
      }
    
    .item-border-2:hover::before, .item-border-2:hover::after {
      transform: scaleX(1);
      transition: transform 1s;
    }

  .item-border-3:hover {
animation: rotate 1s linear infinite;

}

.item-border-3::before, .item-border-3::after {
  box-sizing: inherit;
  position: absolute;
  content: '';
  border: 2px solid transparent;
  width: 0;
  height: 0;
}
.item-border-3::after {
  bottom: 0;
  right: 0;
}
.item-border-3::before {
  top: 0;
  left: 0;
}
.item-border-3:hover::before, .item-border-3:hover::after {
  width: 100%;
  height: 100%;
}
.item-border-3:hover::before {
  border-top-color: #4361ee;
  border-right-color: #4361ee;
  transition: width 0.2s ease-out, height 0.2s ease-out 0.25s;
}


.item-border-3:hover::after {
  border-bottom-color: #4361ee;
  border-left-color: #4361ee;
  transition: border-color 0s ease-out 0.5s, width 0.2s ease-out 0.5s, height 0.2s ease-out 0.75s;
}

   

@keyframes rotate {
    0% {
      filter: hue-rotate(0deg);
  
    }
    100% {
      filter:hue-rotate(360deg);
    }
}
     
.cover-wrap {
  width: 100%;
  height:200px;
  flex: 1;
  border-radius: 0.5rem;
  overflow: hidden;
  // transition:1s ease-out;
  // position: relative;

}
.cover-wrap .cover{
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-repeat: no-repeat;
  transition: 1s ease-in-out;
  // transition:  1s;
  transform:scale(1);
  
  
}

.abstract-content-wrap{
 display: flex;
 flex: 1;
 flex-direction: column;
 justify-content: center;
 margin:0 1rem;
}
.abstract-item:hover .cover {
  transform:scale(1.1)
}

@media (max-width: 850px) {
  .abstract-item {
      display: block !important ;
  }
}


</style>
<style lang="stylus" scoped>
@require '../styles/mode.styl'
.abstract-item
  position relative
  margin: 0 auto 20px;
  padding: 16px 20px;
  width 100%
  overflow: hidden;
  border-radius: $borderRadius
  box-shadow: var(--box-shadow);
  box-sizing: border-box;
  transition all .3s
  background-color var(--background-color)
  cursor: pointer;
  display flex
  > * {
    pointer-events: auto;
  }
  .reco-sticky
    position absolute
    top 0
    left 0
    display inline-block
    color $accentColor
    font-size 2.4rem
  &:hover
    box-shadow: var(--box-shadow-hover)
  .title
    position: relative;
    font-size: 1.28rem;
    line-height: 46px;
    display: inline-block;
    text-align: center;
    a
      color: var(--text-color);
    .reco-lock
      font-size 1.28rem
      color $accentColor
    &:after
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left:0;
      background-color: $accentColor;
      visibility: hidden;
      transform: scaleX(0);
      transition: .3s ease-in-out;
    &:hover a
      color $accentColor
    &:hover:after
      visibility visible
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
  .tags
    .tag-item
      &.active
        color $accentColor
      &:hover
        color $accentColor
@media (max-width: $MQMobile)
  .tags
    display inline-block
    margin-top 1rem;
    margin-left: 0!important;
  .abstract-item
    display block

</style>
