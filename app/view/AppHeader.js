Ext.define('AM.view.AppHeader', {
    extend: 'Ext.container.Container',
    alias: 'widget.appheader',

    xtype: 'appheader',
    id: 'app-header',
    height: 52,
    layout: {
        type: 'hbox',
        align: 'middle'
    },
    initComponent: function() {
        this.items = [{
            xtype: 'component',
            id: 'app-header-title',
            html: '水电费缴费系统',
            flex: 1,
            style: {
                // color: '#61C500',
                backgroundColor: '#61C500'
            }

        }];

        this.callParent();
    }
});