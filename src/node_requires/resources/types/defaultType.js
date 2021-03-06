const generateGUID = require('./../../generateGUID');

const defaultTypeTemplate = {
    name: 'NewType',
    depth: 0,
    oncreate: '',
    onstep: 'this.move();',
    ondraw: '',
    ondestroy: '',
    texture: -1,
    extends: {}
};

module.exports = {
    get() {
        return ({
            ...defaultTypeTemplate,
            extends: {},
            uid: generateGUID()
        });
    }
};
