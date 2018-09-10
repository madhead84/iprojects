var whoresCollection = {
    init: function() {
        this.attributes = JSON.parse(localStorage.getItem('whores')) || [];
    },

    add: function(item) {
        this.attributes.push(item);
        this.updateStorage();
    },

    attributes: [],

    getWhoreByID: function(id) {
        return _.findWhere(this.attributes, {id: id});
    },

    removeWhoreByID: function(id) {
        this.attributes = _.without(this.attributes, this.attributes[_.findIndex(this.attributes, {id: id})]);
        this.updateStorage();
    },

    updateWhore: function (whore) {
        whoreIndex = _.findIndex(this.attributes, {id: whore.id});
        this.attributes[whoreIndex] = whore;
        this.updateStorage();
    },

    updateStorage: function() {
        localStorage.setItem('whores', JSON.stringify(this.attributes));
    },

    showMore500: function () {
        var result = [];
        for (var i = 0; i < this.attributes.length; i++) {
            if (this.attributes[i].price >= 500) {
                result[result.length] = this.attributes[i];
            }
        }
        return result;
    }
};

whoresCollection.init();

var listView = {
    tmplFn: doT.template($('#whores-template').html()),

    render: function() {
        $('.whores-container').html(this.tmplFn(whoresCollection.attributes));
    },

    subscribe: function() {
        $('.whore').on('click', function(event) {
            var id =  $(event.currentTarget).attr('data-id');
            editFormView.render(whoresCollection.getWhoreByID(id));
            addFormView.remove();
        });
    }
};

listView.render();

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

addFormView.render();

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
