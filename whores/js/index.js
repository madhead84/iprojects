var whoresCollection = {
    init: function() {
        this.attributes = JSON.parse(localStorage.getItem('whores')) || [];
    },
    add: function(item) {
        this.attributes.push(item);
        localStorage.setItem('whores', JSON.stringify(this.attributes));
    },
    attributes: [],
    getWhoreByID: function(id) {

    },
    removeWhoreByID: function(id) {
    }
};

whoresCollection.init();

var listView = {
    tmplFn: doT.template($('#whores-template').html()),
    init: function() {
        this.render();
    },
    render: function() {
        $('.whores-container').html(this.tmplFn(whoresCollection.attributes));
    },
    subscribe: function() {}
};

listView.init();

var addFormView = {
    tmplFn: doT.template($('#add-form-template').html()),
    init: function() {
        this.render();
    },
    render: function() {
        $('.add-form-container').html(this.tmplFn());
        this.subscribe();
    },
    subscribe: function() {
        $('.add').on('click', function() {
            whoresCollection.add(this.getFormData());
            listView.init();
        }.bind(this));
    },
    getFormData: function() {
        return {
            firstName: $('.add-form .first-name').val(),
            lastName: $('.add-form .last-name').val(),
            age: $('.add-form .age').val(),
            price: $('.add-form .price').val(),
            id: this.getUniqID()
        };
    },

    getUniqID: function() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

};

addFormView.init();
var editFormView = {
    tmplFn: doT.template($('#edit-form-template').html()),
    init: function() {
        this.render();
    },
    render: function() {
        $('.add-form-container').html(this.tmplFn());
        this.subscribe();
    },
    subscribe: function() {
        $('.add').on('click', function() {
            whoresCollection.add(this.getFormData());
            listView.init();
        }.bind(this));
    },
    getFormData: function() {
        return {
            firstName: $('.add-form .first-name').val(),
            lastName: $('.add-form .last-name').val(),
            age: $('.add-form .age').val(),
            price: $('.add-form .price').val(),
            id: this.getUniqID()
        };
    },

};