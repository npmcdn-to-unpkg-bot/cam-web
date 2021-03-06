var _ = require('underscore');
var Handlebars = require('hbsfy/runtime');

var TemplateRenderer = require('./services/template-renderer');
var ComponentFactory = require('./services/component-factory');


var hbsHelpers = require('../shared/util/hbs-helpers');
_.each(hbsHelpers, function(fn, name) {
  Handlebars.registerHelper(name, fn);
});

TemplateRenderer.registerTemplate('mission-card/mission-card', require('../components/mission-card/mission-card.hbs'));
TemplateRenderer.registerTemplate('progress-bar/progress-bar', require('../components/progress-bar/progress-bar.hbs'));
TemplateRenderer.registerTemplate('add-milestones/add-milestones', require('../components/add-milestones/add-milestones.hbs'));
TemplateRenderer.registerTemplate('checkmark/checkmark', require('../components/checkmark/checkmark.hbs'));
TemplateRenderer.registerTemplate('user-badge/user-badge', require('../components/user-badge/user-badge.hbs'));
TemplateRenderer.registerTemplate('family-list/family-list', require('../components/family-list/family-list.hbs'));
TemplateRenderer.registerTemplate('camera-icon/camera-icon', require('../components/camera-icon/camera-icon.hbs'));
TemplateRenderer.registerTemplate('close/close', require('../components/close/close.hbs'));
TemplateRenderer.registerTemplate('lightbox/lightbox', require('../components/lightbox/lightbox.hbs'));
TemplateRenderer.registerTemplate('gallery/gallery', require('../components/gallery/gallery.hbs'));
TemplateRenderer.registerTemplate('badge-menu/badge-menu', require('../components/badge-menu/badge-menu.hbs'));
TemplateRenderer.registerTemplate('badge/badge', require('../components/badge/badge.hbs'));
TemplateRenderer.registerTemplate('activity/activity', require('../components/activity/activity.hbs'));
TemplateRenderer.registerTemplate('text-box/text-box', require('../components/text-box/text-box.hbs'));
TemplateRenderer.registerTemplate('milestone-badge/milestone-badge', require('../components/milestone-badge/milestone-badge.hbs'));
TemplateRenderer.registerTemplate('add-milestones/add-milestones-row', require('../components/add-milestones/add-milestones-row.hbs'));

ComponentFactory.registerComponent('dashboard', require('../views/dashboard/dashboard'));

ComponentFactory.registerComponent('milestone-badge', require('../components/milestone-badge/milestone-badge'));
ComponentFactory.registerComponent('gallery', require('../components/gallery/gallery'));
ComponentFactory.registerComponent('badge', require('../components/badge/badge'));
ComponentFactory.registerComponent('badge-menu', require('../components/badge-menu/badge-menu'));
ComponentFactory.registerComponent('text-box', require('../components/text-box/text-box'));
ComponentFactory.registerComponent('mission-card', require('../components/mission-card/mission-card'));
ComponentFactory.registerComponent('completed-mission-badge', require('../components/completed-mission-badge/completed-mission-badge'));
ComponentFactory.registerComponent('progress-bar', require('../components/progress-bar/progress-bar'));

ComponentFactory.registerComponent('add-milestones', require('../components/add-milestones/add-milestones'));
ComponentFactory.registerComponent('add-milestones-row', require('../components/add-milestones/add-milestones-row'));
ComponentFactory.registerComponent('completed-milestones-row', require('../components/add-milestones/completed-milestones-row'));

ComponentFactory.registerComponent('checkmark', require('../components/checkmark/checkmark'));
ComponentFactory.registerComponent('user-badge', require('../components/user-badge/user-badge'));

ComponentFactory.registerComponent('close', require('../components/close/close'));

ComponentFactory.registerComponent('nav', require('../components/nav/nav'));
ComponentFactory.registerComponent('settings-hamburger', require('../components/settings-hamburger/settings-hamburger'));

ComponentFactory.hydrate(document.documentElement);


window.jQuery = require('jquery');
