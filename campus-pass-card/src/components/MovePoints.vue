<template>
    <div>
<!--        {{time}}-->
        <div :style=" padType + ': ' + padValue + 'px'">
            <div v-for="index in  parseInt(num)" :key="index" :style="flexType">
                <div :style="'margin: 8px 4px;width:9px;height:9px;border-radius:50%;background-color:green;'"></div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "MovePoints",
        props: {
            num: {
                default: 10
            },
            position: {
                default: "R"
            }
        },
        data() {
            return {
                time: 0
            }
        },
        computed: {
            padValue() {
                let mod = this.time % 2
                let offset = 10
                if (mod === 0) {
                    return 0
                } else if (mod === 1) {
                    return offset
                }
                // } else if (mod === 2) {
                //     return offset * 2
                // }
                return  1000
            },
            padType() {
                if (this.position === 'R') {
                    return "padding-top"
                }
                if (this.position === 'L') {
                    return "padding-bottom"
                }
                if (this.position === 'T') {
                    return "padding-left"
                }
                return "padding-right"
            },
            flexType() {
                if (this.position === "R" || this.position === "L") {
                    return ""
                }
                return "float:left;"
            }
        },
        methods: {
            timeStart() {
                this.time =setInterval(this.timer,500)
            },
            timer() {
                this.time = this.time + 1
            }
        },
        created() {
            this.timeStart()
        }
    }
</script>

<style scoped>

</style>