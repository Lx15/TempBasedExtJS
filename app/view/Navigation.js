Ext.define('AM.view.Navigation', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.navigation',
    xtype: 'navigation',
    title: '功能选择',
    width: 300,
    rootVisible: false,
    lines: false,
    useArrows: true,
    root: {
        expanded: true,
        children: [{
            text: "查询及报表",
            expanded: true,
            // 注意： id值就是 xtype 的值 用来 路由切换
            children: [
                { text: "入账信息查询", leaf: true, id: "CheckIn" },
                { text: "缴费信息查询", leaf: true, id: "CheckPay" },
                { text: "单位信息查询", leaf: true, id: "CheckUnit" }
            ]
        }, {
            text: "添加选项",
            expanded: true,
            children: [
                { text: "添加欠费信息", leaf: true, id: "AddOwn" },
                { text: "添加单位信息", leaf: true, id: "AddUnit" }
            ]
        }, {
            text: "上传欠费信息",
            expanded: true,
            children: [
                { text: "上传欠费信息", leaf: true, id: "UploadOwn" }
            ]
        }]
    },
    initComponent: function() {
        this.callParent(arguments);
    }
});