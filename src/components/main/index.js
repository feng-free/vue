export default {
    data() {
      return {
        items:[{id:1,title:'法院导入',url:"/"},
          {id:2,title:'案号导入',url:"/fyAhExport"},
          {id:3,title:'案标导入',url:"/fyAjbsExport"},
          {id:4,title:'法标导入',url:"/fyCodeExport"}, 
          {id:5,title:'excel导入',url:"/excelExport"}, 
          {id:6,title:'导出资源',url:"/sourceExport"},
          {id:7,title:'资源大小',url:"/sourceSize"}, 
          {id:8,title:'单个人员',url:"/singlePersonExport"}, 
          {id:9,title:'法院人员',url:"/fyPersonExport"}
        ]
      };
    },
    methods: {
      forward:function(key){
        this.$router.push({  //核心语句
          path:this.items[key-1].url //跳转的路径
        })
      }
    },
};
