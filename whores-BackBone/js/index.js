var WhoresCollection = Backbone.Collection.extend({
    initialize: function() {
        this.add(JSON.parse(localStorage.getItem('whores')));
        this.on('update', this.updateStorage.bind(this));
    },

    // add: function() {
    //     Backbone.Collection.prototype.add.apply(this, arguments);
    //     this.updateStorage();
    // },
    //
    // remove: function() {
    //     Backbone.Collection.prototype.remove.apply(this, arguments);
    //     this.updateStorage();
    // },
    //
    // set: function() {
    //     Backbone.Collection.prototype.set.apply(this, arguments);
    //     this.updateStorage();
    // },

    updateStorage: function() {
        localStorage.setItem('whores', JSON.stringify(this.toJSON()));
    },

    getVIPWhores: function () {
        return this.filter(function(whore){
            return whore.get('price') >= 500;
        });
    },

    getWhoreByID: function(id) {
        return _.findWhere(this.attributes, {id: id});
    },

    removeWhoreByID: function(id) {
        this.attributes = _.without(this.attributes, this.attributes[_.findIndex(this.attributes, {id: id})]);
        this.updateStorage();
    }
});

var whoresCollection = new WhoresCollection();

var ListView = Backbone.View.extend({

    initialize: function() {
        this.render();
        $('.whores-container').html(this.$el);
    },

    isVIPCheckboxChecked: false,

    templateFn: doT.template($('#whores-template').html()),

    events: {
        'click .whore': 'handleClickByWhore',
        'click .vip-checkbox': 'handleClickByVIPCheckbox'
    },

    render: function() {
        var whores = this.isVIPCheckboxChecked ? new Backbone.Collection(whoresCollection.getVIPWhores()) : whoresCollection;

        this.$el.html(this.templateFn({
            isVIPCheckboxChecked: this.isVIPCheckboxChecked,
            whores: whores.toJSON()
        }));
    },

    handleClickByWhore: function(event) {
        var id =  $(event.currentTarget).attr('data-id');


        editFormView.render(whoresCollection.get(id).toJSON());
        addFormView.remove();
    },

    handleClickByVIPCheckbox: function() {
        this.isVIPCheckboxChecked = this.$('.vip-checkbox').prop('checked');
        this.render();
    },
});

var listView = new ListView();


var AddFormView = Backbone.View.extend({

    initialize: function() {
        this.render();
        $('.add-form-container').html(this.$el);
    },

    templateFn: doT.template($('#add-form-template').html()),

    events: {
        'click .add': 'addWhoreToList',
    },

    addWhoreToList: function () {
        whoresCollection.add(this.getFormData());
        listView.render();
        this.resetForm();
    },

    render: function () {
        this.$el.html(this.templateFn());
     },

    getFormData: function() {
        return {
            firstName: $('.add-form .first-name').val(),
            lastName: $('.add-form .last-name').val(),
            age: $('.add-form .age').val(),
            price: $('.add-form .price').val(),
            id: this.getUniqID()
        }
    },

    getUniqID: function() {
        return '_' + Math.random().toString(36).substr(2, 9);
    },

    resetForm: function() {
        $('.add-form .first-name').val('');
        $('.add-form .last-name').val('');
        $('.add-form .age').val('');
        $('.add-form .price').val('');
    },

    remove: function() {
        $('.add-form-container').html('');
    },
});

var addFormView = new AddFormView();


var EditFormView = Backbone.View.extend({
    templateFn: doT.template($('#edit-form-template').html()),

    render: function(whore) {

        this.$el.html(this.templateFn(whore));
    },

    events: {
        'click .save': 'updateWhore',
        'click .delete': 'removeWhoreByID',
    },

    removeWhoreByID: function () {
        var whoreId = $('.edit-form [name="id"]').val();
        whoresCollection.updateStorage(whoreID);
    },

    updateWhore: function () {
        whoresCollection.updateWhore(this.getFormData());
    },

    getFormData: function() {
        return {
            id: $('[name="id"]').val(),
            firstName: $('.edit-form .first-name').val(),
            lastName: $('.edit-form .last-name').val(),
            age: $('.edit-form .age').val(),
            price: $('.edit-form .price').val(),
        };
    }

});

var editFormView = new EditFormView();




/*

var editFormView = {
    tmplFn: doT.template($('#edit-form-template').html()),

    render: function(whore) {
        $('.edit-form-container').html(this.tmplFn(whore));
        this.subscribe();
    },

    subscribe: function() {
        $('.save').on('click', function() {
            whoresCollection.updateWhore(this.getFormData());
            this.remove();
            listView.render();
            addFormView.render();
        }.bind(this));

        $('.delete').on('click', function () {
            var whoreId = $('.edit-form [name="id"]').val();
            whoresCollection.removeWhoreByID(whoreId);
            listView.render();
            this.remove();
            addFormView.render();
        }.bind(this));
    },

    remove: function() {
        $('.edit-form-container').html('');
    },

    getFormData: function() {
        return {
            id: $('[name="id"]').val(),
            firstName: $('.edit-form .first-name').val(),
            lastName: $('.edit-form .last-name').val(),
            age: $('.edit-form .age').val(),
            price: $('.edit-form .price').val(),
        };
    }

};*/
