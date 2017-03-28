Ext.define('AM.view.check.ProgressBarPager', {
    extend: 'Ext.grid.Panel',

    requires: [
        'Ext.data.*',
        'Ext.grid.*',
        'Ext.util.*',
        'Ext.toolbar.Paging',
        'AM.view.ProgressBarPager',
        'AM.model.Company'
    ],
    xtype: 'progress-bar-pager',
    stripeRows: true,
    height: 540,
    frame: true,
    initComponent: function() {

        var store = new Ext.data.Store({
            model: AM.model.Company,
            remoteSort: true,
            pageSize: 20,
            proxy: {
                type: 'ajax',
                enablePaging: true,
                url:'/app/data/company.json',
                reader: {
                    type: 'array'
                    // type:'json'
                }
            }
        });
// Ext.apply(object,confiog,...): copies all the properties of config to the specified object
        Ext.apply(this, {
            store: store,
            columns: [{
                xtype: 'rownumberer',
                width: 30
            }, {
                text: '单位名称',
                width: 200,
                sortable: false,
                dataIndex: 'company'
                // The name of the field in the grid's Ext.data.Store's Ext.data.Model definition from which to draw the column's value. Required.
            }, {
                text: '单位简称',
                width: 80,
                sortable: true,
                renderer: 'usMoney',
                dataIndex: 'price'
            }, {
                text: '单位编号',
                width: 80,
                sortable: true,
                renderer: 'usMoney',
                dataIndex: 'price'
            }, {
                text: '入账金额',
                width: 80,
                sortable: true,
                renderer: 'usMoney',
                dataIndex: 'price'
            }, {
                text: '交易日期',
                width: 80,
                sortable: true,
                renderer: 'usMoney',
                dataIndex: 'price'
            }, {
                text: '入账方式',
                width: 80,
                sortable: true,
                renderer: 'usMoney',
                dataIndex: 'price'
            }, {
                text: '起始日期',
                width: 80,
                sortable: true,
                renderer: 'usMoney',
                dataIndex: 'price'
            }, {
                text: '结束日期',
                width: 80,
                sortable: true,
                renderer: 'usMoney',
                dataIndex: 'price'
            }, {
                text: '核销状态',
                width: 80,
                sortable: true,
                renderer: 'usMoney',
                dataIndex: 'price'
            }, {
                text: '操作人员',
                width: 80,
                sortable: true,
                renderer: 'usMoney',
                dataIndex: 'price'
            }],
            bbar: [{
                xtype: 'pagingtoolbar',
                pageSize: 10,
                store: store,
                displayInfo: true,
                plugins: new AM.view.ProgressBarPager(),
                width: '80%',
                border: 0
            }, {
                xtype: 'button',
                text: '下载当前表到本地',
                // iconCls: '/resources/imgs/logo.png', //?
                color: '#FFFFFF',
                style: {
                    width: 150,
                    height: 35,
                    padding: '8 0 0 0',
                    margin: '0 0 0 30',
                    // color: '#FFFFFF',
                    backgroundColor: '#61C500'
                }
            }]
        });
        this.callParent(); // 调用父类的构造函数
    },
    afterRender: function() {
        this.callParent(arguments);
        this.getStore().load();
    }

});