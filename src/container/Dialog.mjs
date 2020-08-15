import Panel    from './Panel.mjs';
import Floating from '../util/Floating.mjs';

/**
 * @class Neo.container.Dialog
 * @extends Neo.container.Panel
 */
class Dialog extends Panel {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.container.Dialog'
         * @protected
         */
        className: 'Neo.container.Dialog',
        /**
         * @member {String} ntype='dialog'
         * @protected
         */
        ntype: 'dialog',
        /**
         * @member {Boolean} autoMount=true
         * @protected
         */
        autoMount: true,
        /**
         * @member {Boolean} autoRender=true
         * @protected
         */
        autoRender: true,
        /**
         * @member {String[]} cls=['neo-window','neo-panel','neo-container']
         * @protected
         */
        cls: ['neo-window', 'neo-panel', 'neo-container'],
        /**
         * @member {Boolean} draggable_=true
         */
        draggable_: true,
        /**
         * @member {Array} mixins
         * @protected
         */
        mixins: [Floating]
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);
        this.createHeader();
    }

    afterSetDraggable(value) {
        let me       = this,
            vdom     = me.vdom,
            vdomRoot = me.getVdomRoot();

        if (value === true) {
            vdomRoot.draggable = true;
        } else {
            delete vdomRoot.draggable;
        }

        me.vdom = vdom;
    }

    /**
     *
     */
    createHeader() {
        let me      = this,
            headers = me.headers || [];

        headers.unshift({
            dock : 'top',
            items: [{
                ntype: 'label',
                text : 'Dialog Title'
            }, '->', {
                iconCls: 'far fa-window-close'
            }]
        });

        me.headers = headers;
    }
}

Neo.applyClassConfig(Dialog);

export {Dialog as default};