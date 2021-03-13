<template>
    <div>
        <div v-if="!pass">
            <h1>Password</h1>
            <input type="text" v-model="password">
            <button @click="submit">Submit</button>
        </div>
        <div v-if="pass">
            <el-row style="padding: 2px">
                <el-col :span="2">
                    <i class="el-icon-arrow-left"></i>
                </el-col>
                <el-col :span="16" style="text-align: right;font-size: medium;font-weight: bold">网上办事大厅-校园通行卡</el-col>
                <el-col :span="6" style="padding: 2px">
                    <el-button size="mini" round>
                        <i class="el-icon-more" style="padding-right: 6px"></i>
                        |
                        <i class="el-icon-switch-button" style="padding-left: 6px"></i>
                    </el-button>
                </el-col>
            </el-row>
            <el-row id="bg">
                <div style="padding: 20px;margin: 20px;background-color: white;border-radius: 30px;">
                    <el-row style="font-weight: bold;font-size: small;margin-bottom: 10px">
                        校园通行卡
                    </el-row>
                    <el-row>
                        <TimeLabel></TimeLabel>
                    </el-row>
                    <HR color="lightgray" size="1px"></HR>
                    <Points>
                    </Points>
                    <div style="width: 40%;margin: 0 auto;font-size: 1px;text-align: left;padding-bottom: 30px">
                        <el-row>
                            <el-col span="8">姓名</el-col>
                            <el-col span="16">： 黄继辉</el-col>
                        </el-row>
                        <el-row>
                            <el-col span="8">性别</el-col>
                            <el-col span="16">： 男</el-col>
                        </el-row>
                        <el-row>
                            <el-col span="8">学工号</el-col>
                            <el-col span="16">： 17373407</el-col>
                        </el-row>
                        <el-row>
                            <el-col span="8">学院</el-col>
                            <el-col span="16">： 计算机学院</el-col>
                        </el-row>
                    </div>
                    <HR color="lightgray" size="1px"></HR>
                    <div style="padding-top: 5px;padding-bottom:20px; color: green">允许通行</div>
                </div>

            </el-row>
<!--            <img id="base" src="../assets/base.png" width="100%">-->
<!--            <div id="mask"></div>-->
<!--            <img id="profile" src="../assets/profile.png" width="30%">-->
<!--            <Points id="points"></Points>-->
<!--            <TimeLabel id="timeLabel"></TimeLabel>-->
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
    #bg {
        background-color: #49ff87;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        padding: 8px;
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