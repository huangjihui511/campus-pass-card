<template>
    <div @touchmove.prevent>

        <div v-if="pass">
<!--            <el-row style="height: 60px;border-bottom: gray 1px solid">-->
<!--                <el-col :span="2">-->
<!--                    <i class="el-icon-arrow-left" style="margin: 22px;" ></i>-->
<!--                </el-col>-->
<!--                <el-col :span="16" style="line-height:60px;text-align: right;font-size: medium;font-weight: bold;margin: auto">网上办事大厅-校园通行卡</el-col>-->
<!--                <el-col :span="6" style="padding: 2px">-->
<!--                    <el-button size="mini" round style="margin: 14px">-->
<!--                        <i class="el-icon-more" style="padding-right: 6px"></i>-->
<!--                        |-->
<!--                        <i class="el-icon-switch-button" style="padding-left: 6px"></i>-->
<!--                    </el-button>-->
<!--                </el-col>-->
<!--            </el-row>-->
            <img src="../assets/navi.png" width="100%" style="margin-top: 15px">
            <el-row id="bg" >
                <div style="padding: 20px;margin: 20px 15px 1000px;background-color: white;border-radius: 30px;position: relative">
                    <div style="position: relative">
                        <el-row style="font-weight: bold;font-size: small;margin-bottom: 10px">
                            校园通行卡
                        </el-row>
                        <el-row style="z-index: 100">
                            <TimeLabel ></TimeLabel>
                        </el-row>
                        <img style="position: absolute; bottom: -7px;left: -4px;z-index: 50" src="../assets/hang.png" width="28%">
                    </div>

                    <HR color="lightgray" size="1px"></HR>
                    <Points>
                    </Points>
                    <div style="width: 50%;margin: 10px auto;text-align: left;font-size: x-small;padding-bottom: 30px">
                        <el-row class="info">
                            <el-col span="10">姓名</el-col>
                            <el-col span="14">： 黄继辉</el-col>
                        </el-row>
                        <el-row class="info">
                            <el-col span="10">性别</el-col>
                            <el-col span="14">： 男</el-col>
                        </el-row>
                        <el-row class="info">
                            <el-col span="10">学工号</el-col>
                            <el-col span="14">： 17373407</el-col>
                        </el-row>
                        <el-row class="info">
                            <el-col span="10">学院</el-col>
                            <el-col span="14">： 计算机学院</el-col>
                        </el-row>
                    </div>
                    <HR color="lightgray" size="1px"></HR>
                    <div style="padding-top: 5px;padding-bottom:20px; color: green;font-weight: bold">允许通行</div>
                    <div id="sh1" style=""></div>
                    <div id="sh2" style=""></div>
                    <div id="q1"></div>
                    <div id="q2"></div>

                </div>
            </el-row>
            <img id="bottom-img" src="../assets/bottom.png" width="100%">
<!--            <img id="base" src="../assets/base.png" width="100%">-->
<!--            <div id="mask"></div>-->
<!--            <img id="profile" src="../assets/profile.png" width="30%">-->
<!--            <Points id="points"></Points>-->
<!--            <TimeLabel id="timeLabel"></TimeLabel>-->
        </div>
        <div v-if="!pass">
            <h1>Password</h1>
            <input type="text" v-model="password">
            <button @click="submit">Submit</button>
        </div>
    </div>


</template>

<script>
    // import MovePoints from "../components/MovePoints";
    // import TimeLabel from "../components/TimeLabel";
    // import Points from "../components/Points";
    import TimeLabel from "../components/TimeLabel";
    import Points from "../components/Points";
    export default {
        name: "Base",
        components: {Points, TimeLabel},
        // components: {Points, TimeLabel},
        data() {
            return {
                pass: true,
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
    .info {
        margin: 5px auto;
    }
    #bg {
        /*background-color: #45ff42;*/
        background-image: url("../assets/bgc.png");
        width: 100%;
        height: 100%;
        /*margin: 0 auto;*/
        /*background-size:100%;*/
        padding: 8px;
        background-repeat:repeat;
        padding-bottom: 100px;
    }
    #sh1 {
        border-radius: 20px;
        padding: 20px;
        background-color: white;
        width: 78%;
        margin: 0 auto;
        opacity: 0.5;
        position: absolute;
        bottom: -6px;
        left: 6%
    }
    #sh2 {
        border-radius: 20px;
        padding: 20px;
        background-color: white;
        width: 65%;
        margin: 0 auto;
        opacity: 0.5;
        position: absolute;
        bottom: -13px;
        left: 12%
    }
    #q1 {
        background-image: url("../assets/bgc.png");
        width: 20px;
        height: 20px;
        border-radius:50%;
        position: absolute;
        left: -10px;
        bottom: 13%;
    }
    #q2 {
        background-image: url("../assets/bgc.png");
        width: 20px;
        height: 20px;
        border-radius:50%;
        position: absolute;
        right: -10px;
        bottom: 13%;
    }
    #bottom-img {
        position: fixed;
        bottom: 0;
        left: 0;
    }
</style>