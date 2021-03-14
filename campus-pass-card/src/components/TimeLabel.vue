<template>
    <div id="timebox">
        <div id="time" >{{this.time}}</div>

    </div>
</template>

<script>
    export default {
        name: "TimeLabel",
        data() {
            return {
                time: ""
            }
        },
        methods: {
            timeStart() {
                this.time =setInterval(this.timer,500)
            },
            timer() {
                var aData = new Date();
                let month = aData.getUTCMonth() + 1
                let date = aData.getFullYear() + "年" + month + "月" + aData.getDate() + "日"
                let realTime = aData.getHours() + ":" + aData.getMinutes() + ":" + aData.getSeconds()
                this.time = date + " " + realTime
            }
        },
        created() {
            this.timeStart()
        }
    }
</script>

<style scoped>
    #timebox {
        font-size: small;
        /*font-weight: bold;*/
        color: green;
        /*background-image: url("../assets/OpacityBG.png");*/
        /*opacity: 0.2;*/
        /*background-color: ;*/
        background-color: rgba(50, 205, 50, 0.1);
        margin: 0px auto;
        padding: 5px;
        border-radius: 10px;

    }
</style>