<template>
    <div id="button-show">
        <div v-show="isShow">
            <h1 :class="{colorRed: isRed}">Some word show by button </h1>
        </div>
        <button @click="isShow = !isShow">Show</button>
        <button @click="isRed = !isRed">Change color</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShow: true,
            isRed: true
        }
    }
}
</script>

<style scoped>
.colorRed {
    color: red;
}
</style>