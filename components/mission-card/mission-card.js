var _ = require('underscore');
var $ = require('jquery');

var ComponentFactory = require('../../client/services/component-factory');

function MissionCard($el) {
  this.$el = $el;
}

MissionCard.prototype.init = function() {

  if (this._init) { return; }
  this._init = true;

  this.data = JSON.parse(this.$el.find('script.data').remove().html());
  this.titleComponent = ComponentFactory.getComponent(this.$el.find('[data-component="text-box"].title'));
  this.closeComponent = ComponentFactory.getComponent(this.$el.find('[data-component="close"]'));
  this.addMilestonesComponent = ComponentFactory.getComponent(this.$el.find('[data-component="add-milestones"]'));

  this.userBadgeComponents = [];
  this.$el.find('[data-component="user-badge"]').each(_.bind(function(index, el) {
    this.userBadgeComponents.push(ComponentFactory.getComponent(el));
  }, this));

  this.closeComponent.on('close', _.bind(this._handleDelete, this));

  this.badgeComponent = ComponentFactory.getComponent(this.$el.find('> .header > [data-component="badge"]'));

  this.$saveButton = this.$el.find('[data-component="button-group"] button.save');
  this.$cancelButton = this.$el.find('[data-component="button-group"] button.cancel');

  this.$saveButton.on('click', _.bind(this._handleSave, this));
  this.$cancelButton.on('click', _.bind(this._handleCancel, this));

  this.$el.on('click', _.bind(this._handleClick, this));
};

MissionCard.prototype._handleClick = function() {
  if (this.$el.hasClass('active')) { return; }

  this.$el.addClass('active');
  this.badgeComponent.setEditable(true);
  this.titleComponent.focus();
};

MissionCard.prototype._handleSave = function() {
  // step past the event loop -- click events trigger
  // _handleClick
  setTimeout(_.bind(function() {
    this.$el.removeClass('active');
  }, this));
};

MissionCard.prototype._handleCancel = function() {
  // step past the event loop -- click events trigger
  // _handleClick
  setTimeout(_.bind(function() {
    this.$el.removeClass('active');
    this.badgeComponent.setEditable(false);
    this.clear();
  }, this));
};

MissionCard.prototype._handleDelete = function() {
  if (confirm('Are you sure you want to delete “' + this.data.title + '”?')) {
    this.$el.addClass('delete');
    setTimeout(_.bind(function() {
      this.$el.remove();
    }, this), 600);
  }
};

MissionCard.prototype.clear = function() {
  if (this.$el.hasClass('create')) {
    this.titleComponent.clear();
    this.addMilestonesComponent.clear();
    _.each(this.userBadgeComponents, function(badge) {
      badge.select();
    });
    this.badgeComponent.clear();
  }
};

module.exports = MissionCard;
