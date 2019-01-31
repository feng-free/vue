//import axios from "@/axios.js";
//import bus from "@/bus.js";
export default {
    data() {
        return {
            outerVisible: false,
            innerVisible: false,  
            activeName: 'c',
            activePath: '/',
            input: "",
            checked: false,
            classA:false,
            // 预警类型
            warningType:[
                {
                    type:"必要信息缺失",
                    ifcolor:false,
                }, {
                    type:"必要文件缺失",
                    ifcolor:false,
                }, {
                    type:"节点流转异常",
                    ifcolor:false,
                }, {
                    type:"办理结果异常",
                    ifcolor:false,
                }
            ],
            // 法院
            courtData:[
                {
                    data:"毕节中院",
                    ifcolor:false,
                },{
                    data:"七星关法院",
                    ifcolor:false,
                },{
                    data:"大方法院",
                    ifcolor:false,
                },{
                    data:"织金法院",
                    ifcolor:false,
                },{
                    data:"纳雍法院",
                    ifcolor:false,
                },{
                    data:"威宁法院",
                    ifcolor:false,
                },{
                    data:"黔西法院",
                    ifcolor:false,
                },{
                    data:"金沙法院",
                    ifcolor:false,
                },
            ],
            // 预警程度
            earlydata:[
                {
                    data:"红色预警",
                    ifcolor:false,
                }, {
                    data:"橙色预警",
                    ifcolor:false,
                }, {
                    data:"黄色预警",
                    ifcolor:false,
                },
            ],
            // personnel
            personnelData:[
                {
                    name:"秦华",
                }, {
                    name:"唐泽",
                }, {
                    name:"刘崇高"
                }, {
                    name:"赵丹"
                }, {
                    name:"周绪"
                }, {
                    name:"薛跃年"
                }, {
                    name:"王泽云"
                }, {
                    name:"陈恒"
                },{
                    name:"沈颖"
                },{
                    name:"胡海珊"
                },{
                    name:"黄利"
                },{
                    name:"吕杰"
                },{
                    name:"代秀云"
                }
            ],
            // xzpersonnel
            xzpersonnelData:[],
            tableData: [{
                data1: '（2018）黔执347号',
                data2: '贵州省高级人民法院',
                data3: '秦华',
                data4: '已结',
                data5: "",
                data6: "必要信息缺失",
                data7: "",
                data8: "待管控",
                data9: "",
                data10:false,
                data11:1
            },{
                data1: '（2018）黔执351号',
                data2: '贵州省高级人民法院',
                data3: '唐泽',
                data4: '未结',
                data5: "终本约谈",
                data6: "必要信息缺失",
                data7: "节点流转异常",
                data8: "待管控",
                data9: "",
                data10:false,
                data11:2
            },{
                data1: '（2018）黔02执475号',
                data2: '六盘水市中级人民法院',
                data3: '刘崇高',
                data4: '未结',
                data5: "案款发放",
                data6: "必要文件缺失",
                data7: "",
                data8: "待管控",
                data9: "",
                data10:false,
                data11:3
            },{
                data1: '（2018）黔0201执477号',
                data2: '六盘水市钟山区人民法院',
                data3: '赵丹',
                data4: '已结',
                data5: "",
                data6: "办理结果异常",
                data7: "节点流转异常",
                data8: "待管控",
                data9: "",
                data10:false,
                data11:2
            },{
                data1: '（2019）黔0102执47号',
                data2: '贵阳市南明区人民法院',
                data3: '周绪',
                data4: '未结',
                data5: "执行通知",
                data6: "办理结果异常",
                data7: "",
                data8: "已管控",
                data9: "个案管控",
                data10:false,
                data11:1
            },{
                data1: '（2018）黔05执612号',
                data2: '毕节市中级人民法院',
                data3: '薛跃年',
                data4: '未结',
                data5: "冻结",
                data6: "必要信息缺失",
                data7: "",
                data8: "已管控",
                data9: "个案管控",
                data10:false,
                data11:3
            },{
                data1: '（2018）黔0502执1753号',
                data2: '毕节市七星关区人民法院',
                data3: '王泽云',
                data4: '未结',
                data5: "拍卖",
                data6: "办理结果异常",
                data7: "节点流转异常",
                data8: "已管控",
                data9: "批量管控",
                data10:false,
                data11:2
            }],

        }
    },
    mounted() { //实例挂载之后
        this.activePath = this.$route.path;
    },
    methods: { //方法	
        // 预警类型切换
        warningTypeClick(e){
            let that = this;
            that.warningType.forEach(element => {
                if(e.type == element.type){
                    if(element.ifcolor){
                        element.ifcolor = false;
                    }else{
                        element.ifcolor = true;
                    }
                }
            });
        },
        // 承办法院切换
        courtDataClick(e){
            let that = this;
            that.courtData.forEach(element => {
                if(e.data == element.data){
                    if(element.ifcolor){
                        element.ifcolor = false;
                    }else{
                        element.ifcolor = true;
                    }
                }
            });
        },
        // 预警程度切换
        earlydataClick(e){
            let that = this;
            that.earlydata.forEach(element => {
                if(e.data == element.data){
                    if(element.ifcolor){
                        element.ifcolor = false;
                    }else{
                        element.ifcolor = true;
                    }
                }
            });
        },
        // 选择承办人员
        personnelDataClick(e,index){
            console.log(e)
            let that = this; 
            if(that.personnelData[index].flag==true){
                return false;
            }

            that.xzpersonnelData.push(e);
            that.personnelData[index].flag = true;
        },
        //删除人员
        xzpersonnelDataClick(e,index){
            let that = this;
            let names = e.name;
            for(let i=0;i<that.personnelData.length;i++){
                if(names == that.personnelData[i].name){
                    that.personnelData[i].flag = false;
                }
            }
            that.xzpersonnelData.splice(index,1)
        },
        // 全选方法
        allelectionChange(e){
            let that = this;
            that.tableData.forEach(element => {
                element.data10 = e
            });
        },
        // 单条数据选择
        tableCheckChange(e){
            let that = this;
            for(let i=0;i<that.tableData.length;i++){
                if(that.tableData[i].data10 == false){
                    that.checked = false;
                    return false
                }else{
                    that.checked = true;
                }
            }
        },
        //批量管控
        controlClick(){
            let that = this;
            for(let i=0;i<that.tableData.length;i++){
                if(that.tableData[i].data10 == true){
                    that.$router.push({path:'/batchcontrol',query:{         
                        tit:3,  
                      }});
                    return false;
                }
            }
            for(let i=0;i<that.tableData.length;i++){
                if(that.tableData[i].data10 == true){
                    // that.$router.push({path:'/batchcontrol'});
                    // return false;
                }else{
                    this.$message({ 
                    message: '请选择案件',
                    type: 'warning'
                    });
                }
            }
        },
        // 详情
        infoClick(e){
            this.$router.push({
                path:'/termWarningDetails',
                query:{         
                    tit:3 ,  
                    ah:e.row.data1,
                  }
            });
        }
    },
    watch: { //监听
        '$route' (to, from) { // 对路由变化作出响应...

        },
    },
    created() { //实例创建之后

    }
}