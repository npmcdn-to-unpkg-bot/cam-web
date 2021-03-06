var $ = require('jquery');
var _ = require('underscore');

var ComponentFactory = function() {
    this._components = {};
};

/**
 * @param {string} name
 * @param {function} ClassFn
 */
ComponentFactory.prototype.registerComponent = function(name, ClassFn) {
    if (!_.isFunction(ClassFn)) {
        throw new Error('Component function is not a function');
    }
    this._components[name] = ClassFn;
};

/**
 * Componentizes the given node as well as any child components
 * @param {Element} node
 */
ComponentFactory.prototype.hydrate = function(node) {

    var $node = $(node);

    var self = this;
    $node.children().each(function() {
        self.hydrate(this);
    });

    this._initComponent($node);
};

/**
 * @param {jQuery} node
 * @returns {object} an instance of the component
 */
ComponentFactory.prototype._initComponent = function($node) {

    var component = this.getComponent($node);
    if (component) { return; }

    var name = $node.data('component');
    if (!name) { return; }

    var ClassFn = this._components[name];
    if (!ClassFn) { return; }

    try {
        component = new ClassFn($node);
        component.init();
        this.setComponent($node, component);
        return component;
    } catch (e) {
        console.log(e);
    }
};

/**
 * @param {Element} node
 */
ComponentFactory.prototype.getComponent = function(node) {
    return $(node).data('_component');
};

/**
 * @param {Element} node
 */
ComponentFactory.prototype.setComponent = function(node, component) {
    $(node).data('_component', component);
};

module.exports = new ComponentFactory();
