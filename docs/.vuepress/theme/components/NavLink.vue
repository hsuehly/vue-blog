<template>
  <router-link
    class="nav-link faa-float animated"
    :to="link"
    v-if="!isExternal(link)"
    :exact="exact">
    <i :class="`iconfont ${item.icon}`"></i>
    {{ item.text }}
  </router-link>
  <a
    v-else
    :href="link"
    class="nav-link external faa-horizontal animated"
    :target="isMailto(link) || isTel(link) ? null : '_blank'"
    :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'"
  >
    <i :class="`iconfont ${item.icon}`"></i>
    {{ item.text }}
    <OutboundLink/>
  </a>
</template>

<script>
import { isExternal, isMailto, isTel, ensureExt } from '@theme/helpers/utils'

export default {
  props: {
    item: {
      required: true
    }
  },

  computed: {
    link () {
      return ensureExt(this.item.link)
    },

    exact () {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(rootLink => rootLink === this.link)
      }
      return this.link === '/'
    }
  },

  methods: {
    isExternal,
    isMailto,
    isTel
  }
}
</script>
<style lang="stylus">
@import url("https://cdn.jsdelivr.net/gh/hsuehly/blogimg/css/font-awesome-animation.min.css");

</style>