Ext.define('AM.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'AM.view.AppHeader',
        'AM.view.Navigation',
        'AM.view.ContentPanel',
        'Ext.panel.Panel',
        'Ext.layout.container.Border'
    ],

    layout: 'border',

    items: [{
            region: 'north',
            xtype: 'appheader'
        },
        {
            region: 'west',
            xtype: 'navigation',
            width: 250,
            minWidth: 200,
            height: 200,
            split: true,
            stateful: true,
            stateId: 'mainnav.west',
            collapsible: true

        }, {
            region: 'center',
            xtype: 'contentPanel'
        }
    ]
});