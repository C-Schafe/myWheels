<template>
    <svg class="w-icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
    //import 'svg.js'
    export default {
        props:['name']
    }
</script>
<style lang="scss">
    .w-icon {
        width: 1.3em;
        height: 1.3em;
    }
</style>