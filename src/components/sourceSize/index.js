export default {
    data() {
      return {
        tableData: [{
          id: '1',
          ah: '王小虎',
          ajbs: '上海市普陀区金沙江路 1518 弄',
          path:'------',
          size:'200kb'
        }, {
            id: '1',
            ah: '王小虎',
            ajbs: '上海市普陀区金沙江路 1518 弄',
            path:'------',
            size:'200kb'
        }, {
            id: '1',
            ah: '王小虎',
            ajbs: '上海市普陀区金沙江路 1518 弄',
            path:'------',
            size:'200kb'
        }, {
            id: '1',
            ah: '王小虎',
            ajbs: '上海市普陀区金沙江路 1518 弄',
            path:'------',
            size:'200kb'
        }],
        size:0,
      }
    },
    mounted:function(){
        this.size = this.tableData.length;
    },
    methods:{

    }
  }