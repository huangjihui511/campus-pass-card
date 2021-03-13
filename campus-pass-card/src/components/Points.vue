<template>
    <div>
        <div>
            <img  v-if="index===0" src="../assets/points.png" width="50%">
            <img  v-if="index===1" src="../assets/pointsR.png" width="50%">
        </div>

    </div>
</template>

<script>
    export default {
        name: "Points",
        data() {
            return {
                // urls: ["../assets/points.png", "../assets/pointsR.png"],
                index: 0
            }
        },
        methods: {
            timeStart() {
                setInterval(this.timer,500)
            },
            timer() {
                this.index = (this.index + 1) % 2
            }
        },
        created() {
            this.timeStart()
        }
    }
</script>

<style scoped>

</style>