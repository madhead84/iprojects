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
        console.log(whoresCollection.get(id).toJSON());
        // editFormView.render();
        // addFormView.remove();
    },

    handleClickByVIPCheckbox: function() {
        this.isVIPCheckboxChecked = this.$('.vip-checkbox').prop('checked');
        this.render();
    },
});

var listView = new ListView();
























var addFormView = {
    tmplFn: doT.template($('#add-form-template').html()),

    render: function() {
        $('.add-form-container').html(this.tmplFn());
        this.subscribe();
    },

    subscribe: function() {
        $('.add').on('click', function() {
            whoresCollection.add(this.getFormData());
            listView.render();
            this.resetForm();
        }.bind(this));
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
    }
};

//addFormView.render();

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

};