<template>
    <div>
        <combox :id="$route.params.id"></combox>
    </div>
</template>

<script>
import comment from '../subcomponents/Comment.vue'

export default {
    components:{
        combox:comment
    }
};
</script>

<style lang="less" scoped>

</style>
