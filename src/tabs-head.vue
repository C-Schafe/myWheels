<template>
  <div ref="tabsHead" class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
    <div class="line" ref="line" v-if="lineShow"></div>
  </div>
</template>
<script>
export default {
  name: "wheelsTabsHead",
  props: {},
  data() {
    return {
      lineShow: false
    }
  },
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected', (name, item) => {
      this.lineShow = true
      this.$nextTick(() => {
        let { width, height, left, top } = item.$el.getBoundingClientRect();
        let tabsHeadLeft = this.$refs.tabsHead.getBoundingClientRect().left
        this.$refs.line.style.width = `${width}px`
        this.$refs.line.style.transform = `translateX(${left - tabsHeadLeft}px)`

      })
    })
  }

}
</script>
<style lang="scss" scoped>
$tabs-height: 40px;
$line-color: #3eaf7c;

.tabs-head {
  height: $tabs-height;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-bottom: 1px solid #34875e;

  >.actions-wrapper {
    margin-left: auto;
  }

  >.line {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    border-bottom: 3px solid $line-color;
    transition: all 300ms;
  }
}
</style>