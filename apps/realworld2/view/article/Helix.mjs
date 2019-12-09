import {default as BaseHelix} from '../../../../src/component/Helix.mjs';
import PreviewComponent       from './PreviewComponent.mjs';

/**
 * @class RealWorld2.view.article.Helix
 * @extends Neo.list.Base
 */
class Helix extends BaseHelix {
    static getConfig() {return {
        /**
         * @member {String} className='RealWorld2.view.article.Helix'
         * @private
         */
        className: 'RealWorld2.view.article.Helix',
        /**
         * @member {String[]} cls=['rw2-article-helix', 'neo-helix']
         */
        cls: ['rw2-article-helix', 'neo-helix'],
        /**
         * The radius of the Helix in px
         * @member {Number} radius=2500
         */
        radius: 2500
    }}

    /**
     * Override this method to get different item-markups
     * @param {Object} vdomItem
     * @param {Object} record
     * @param {Number} index
     * @returns {Object} vdomItem
     */
    createItem(vdomItem, record, index) {
        let me = this;

        vdomItem = Neo.create({
            module  : PreviewComponent,
            parentId: me.id,
            ...record,
            author   : record.author.username, // todo: PreviewComponent should use an author object
            userImage: record.author.image
        });

        return {
            cls: ['surface', 'neo-helix-item'],
            id : me.getItemVnodeId(record[me.keyProperty]),
            cn : [vdomItem.vdom]
        };
    }
}

Neo.applyClassConfig(Helix);

export {Helix as default};