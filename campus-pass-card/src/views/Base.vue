<template>
    <div>
        <div v-if="!pass">
            <h1>Password</h1>
            <input type="text" v-model="password">
            <button @click="submit">Submit</button>
        </div>
        <div v-if="pass" @touchmove.prevent>
            <img id="base" src="../assets/base.png" width="100%">
            <div id="mask"></div>
            <img id="profile" src="../assets/profile.png" width="30%">
            <Points id="points"></Points>
            <TimeLabel id="timeLabel"></TimeLabel>
        </div>
    </div>


</template>

<script>
    // import MovePoints from "../components/MovePoints";
    import TimeLabel from "../components/TimeLabel";
    import Points from "../components/Points";
    export default {
        name: "Base",
        components: {Points, TimeLabel},
        data() {
            return {
                pass: false,
                password: "",
                realPassword: "yes"
            }
        },
        methods: {
            submit() {
                if (this.password === this.realPassword) {
                    this.pass = true
                }
            }
        }
    }
</script>

<style scoped>
    #left_points {
        z-index: 100;
        position: fixed;
        bottom: 56%;
        left: 30%;
        padding-top: 10px;
        /*background-color: white;*/
    }
    #right_points {
        z-index: 100;
        position: fixed;
        top: 21.5%;
        right: 30%;
        /*background-color: white;*/
    }
    #top_points {
        z-index: 80;
        position: fixed;
        top: 20%;
        left: 33%;
        /*background-color: white;*/
    }
    #button_points {
        z-index: 110;
        position: fixed;
        bottom: 55%;
        right: 33.5%;
        /*background-color: white;*/
        /*padding-right: 10px;*/
    }
    #points {
        z-index: 100;
        background-color: white;
        width: 80%;
        height: 30%;
        position: fixed;
        top: 20%;
        right: 10%;
    }
    #mask {
        z-index: 50;
        background-color: white;
        width: 80%;
        height: 25%;
        position: fixed;
        top: 20%;
        right: 10%;
    }
    #profile {
        z-index: 200;
        position: fixed;
        top: 22%;
        right: 35%;
    }
    #base {
        z-index: 0;
    }
    #timeLabel {
        position: fixed;
        top: 14.2%;
        z-index: 200;
        left: 30%;
    }
</style>