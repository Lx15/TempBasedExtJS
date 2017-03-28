Ext.define('AM.view.check.CheckIn', {
    extend: 'Ext.Container',
    alias: 'widget.CheckIn',
    requires: [
        'Ext.data.*',
        'Ext.grid.*',
        'Ext.util.*',
        'Ext.toolbar.Paging',
        'Ext.layout.container.Table',
        'AM.view.check.ProgressBarPager',
        'AM.model.Company'
    ],
    xtype: 'CheckIn',
    layout: 'vbox',

    initComponent: function() {
        this.items = [{
                xtype: 'form',
                width: '100%',
                margin: 10,
                bodyPadding: 10,
                layout: {
                    type: 'table',
                    columns: 4
                },
                items: [{
                        xtype: 'form',
                        margin: 10,
                        bodyPadding: 10,
                        border: 0,
                        layout: {
                            type: 'table',
                            columns: 2
                        },
                        items: [{
                            xtype: 'datefield',
                            anchor: '100%',
                            fieldLabel: '交易开始时间',
                            name: 'from_date',
                            format: 'Y-m-d',
                            maxValue: new Date()
                        }, {
                            xtype: 'datefield',
                            anchor: '100%',
                            fieldLabel: '交易结束时间',
                            margin: '0 0 0 20',
                            name: 'to_date',
                            format: 'Y-m-d',
                            value: new Date() // defaults to today
                        }]
                    },
                    {
                        xtype: 'textfield',
                        margin: '0 0 0 20',
                        labelWidth: 60,
                        fieldLabel: '单位名称',
                        name: 'unitName'
                    },
                    {
                        xtype: 'radiogroup',
                        fieldLabel: '入账方式',
                        vertical: false,
                        margin: '0 0 0 30',
                        labelWidth: 60,
                        items: [{
                                boxLabel: '全部',
                                name: 'accountType',
                                inputValue: '1',
                                checked: true,
                                style: {
                                    width: 80
                                }
                            },
                            {
                                boxLabel: '线上缴费',
                                name: 'accountType',
                                inputValue: '2',
                                style: {
                                    width: 100
                                }
                            },
                            {
                                boxLabel: '转账及现金',
                                name: 'accountType',
                                inputValue: '3',
                                style: {
                                    width: 100
                                }
                            }
                        ]
                    }, {
                        xtype: 'button',
                        text: '查询',
                        style: {
                            width: 150,
                            height: 35,
                            padding: '8 0 0 0'

                        }
                    }
                ]
            }, {

            },
            {
                // 在 ext-all 上没有progressbarpager ,所以是自己写的
                xtype: 'progress-bar-pager',
                title: '入账信息',
                width: '100%'
            }
        ];

        this.callParent();
    }
});