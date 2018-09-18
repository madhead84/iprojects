var WhoresCollection = Backbone.Collection.extend({
    initialize: function() {
        this.add(JSON.parse(localStorage.getItem('whores')));
        this.on('update', this.updateStorage.bind(this));
    },

    // xxx: function() {
    //     Backbone.Collection.prototype.xxx.apply(this, arguments);
    //     // your code
    // },

    updateStorage: function() {
        localStorage.setItem('whores', JSON.stringify(this.toJSON()));
    },

    getVIPWhores: function () {
        return this.filter(function(whore){
            return whore.get('price') >= 500;
        });
    }
});

var whoresCollection = new WhoresCollection();

var ListView = Backbone.View.extend({

    initialize: function() {
        $('.whores-container').html(this.$el);
        this.render();
        this.listenTo(whoresCollection, 'update', this.render.bind(this));
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
        var whoreID =  $(event.currentTarget).attr('data-id');
        editFormView.render(whoresCollection.get(whoreID).toJSON());
        addFormView.$el.html('');
    },

    handleClickByVIPCheckbox: function() {
        this.isVIPCheckboxChecked = this.$('.vip-checkbox').prop('checked');
        this.render();
    },
});

var listView = new ListView();

var AddFormView = Backbone.View.extend({

    initialize: function() {
        $('.add-form-container').html(this.$el);
        this.render();
    },

    templateFn: doT.template($('#add-form-template').html()),

    events: {
        'click .add': 'addWhoreToList',
    },

    addWhoreToList: function () {
        whoresCollection.add(this.getFormData());
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
    }
});

var addFormView = new AddFormView();

var EditFormView = Backbone.View.extend({

    templateFn: doT.template($('#edit-form-template').html()),

    initialize: function() {
        $('.edit-form-container').html(this.$el);
    },

    render: function(whore) {
        this.$el.html(this.templateFn(whore));
    },

    events: {
        'click .save': 'updateWhore',
        'click .delete': 'removeWhore',
    },

    removeWhore: function () {
        var whoreID = $('.edit-form [name="id"]').val();
        whoresCollection.remove(whoreID);
        editFormView.$el.html('');
        addFormView.render();
    },

    updateWhore: function () {
        whoresCollection.add(this.getFormData(), {
            merge: true
        });
        editFormView.$el.html('');
        addFormView.render();
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
