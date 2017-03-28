Ext.define('AM.view.upload.UploadOwn', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.UploadOwn',
    requires: [
        'Ext.data.*',
        'Ext.grid.*',
        'Ext.util.*',
        'Ext.toolbar.Paging',
        'AM.model.Company'
    ],
    xtype: 'UploadOwn',

    stripeRows: true,
    height: 320,
    frame: true,
    title: '上传欠费信息',
    fields: ['name', 'email', 'phone'],
    columns: [
        { text: 'Name', dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone' }
    ],
    height: 200,
    width: 400,
    renderTo: Ext.getBody()
});