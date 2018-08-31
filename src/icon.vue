<template>
    <svg class="w-icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
    import './svg.js'
    export default {
        name:"wheelsIcon",
        props:['name']
    }
</script>
<style lang="scss" scoped>
    .w-icon {
        width: 1.3em;
        height: 1.3em;
    }
</style>