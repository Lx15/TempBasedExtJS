Ext.define('AM.controller.Manager', {
    extend: 'Ext.app.Controller',
    requires: [
        'AM.view.check.CheckIn',
        'AM.view.check.CheckPay',
        'AM.view.check.CheckUnit',
        'AM.view.add.AddOwn',
        'AM.view.add.AddUnit',
        'AM.view.upload.UploadOwn',
        'Ext.window.Window'
    ],
    // stores: [
    //     'Companies',
    //     'Restaurants',
    //     'Files',
    //     'States'
    // ],
    refs: [{
            ref: 'navigation',
            selector: 'navigation'
        }, {
            ref: 'viewport',
            selector: 'viewport'
        }, {
            ref: 'contentPanel',
            selector: 'contentPanel'
        }
    ],
    init: function() {
        this.control({
            'navigation': {
                selectionchange: 'onNavSelectionChange'
            },
            'viewport': {
                afterlayout: 'afterViewportLayout'
            },
            'contentPanel': {

            }
        });
    },
    onNavSelectionChange: function(selModel, records) {
        var record = records[0],
            text = record.get('text'),
            xtype = record.get('id'),
            alias = 'widget.' + xtype,
            contentPanel = this.getContentPanel(),
            cmp;

        if (xtype) {
            contentPanel.removeAll(true);

            var className = Ext.ClassManager.getNameByAlias(alias); // Get the name of a class by its alias.
            var ViewClass = Ext.ClassManager.get(className); // Retrieve a class by its name.
            var clsProto = ViewClass.prototype;
            cmp = new ViewClass();
            contentPanel.add(cmp);
            if (cmp.floating) {
                cmp.show();
            }
            contentPanel.setTitle(text);

            document.title = document.title.split(' - ')[0] + ' - ' + text;
            location.hash = xtype;
        }
    },
    afterViewportLayout: function() {
        if (!this.navigationSelected) {
            var id = location.hash.substring(1),
                navigation = this.getNavigation(),
                store = navigation.getStore(),
                node;

            node = id ? store.getNodeById(id) : store.getRootNode().firstChild.firstChild;

            navigation.getSelectionModel().select(node);
            navigation.getView().focusNode(node);
            this.navigationSelected = true;
        }
    },
    clickTree: function(view, record, item, index) {
        console.log(record)
    },
    onPanelRendered: function() {
        console.log("the panel was rendered")
    }
});