Ext.define('AM.view.check.CheckPay', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.CheckPay',
    requires: [
        'Ext.data.*',
        'Ext.grid.*',
        'Ext.util.*',
        'Ext.toolbar.Paging'
        // 'Ext.ux.ProgressBarPager',

    ],
    xtype: 'CheckPay',

    stripeRows: true,
    height: 320,
    frame: true,
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