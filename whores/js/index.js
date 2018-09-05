// localStorage.setItem("Ключ", "Значение");
// localStorage.getItem("Ключ");
// localStorage.removeItem("Ключ");
// var tostring = JSON.stringify(obj);
// localStorage.setItem("myKey", serialObj);
// var toOject = JSON.parse('строкаШлюх');

var whoresCollection = {

    init: function() {
        // get data from localStorage
    },

    attributes: [],

    getWhoreByID: function() {},

    removeWhoreByID: function() {}

};

var listView = {

    init: function() {},

    render: function() {},

    subscribe: function() {}

};

var addFormView = {

    tmplFn: doT.template($('#add-form-template').html()),

    init: function() {
        this.render();
        this.subscribe();
    },

    render: function() {
        $('.add-form-container').html(this.tmplFn());
    },

    subscribe: function() {
        $('.add').on('click', function() {
            var a = this.getFormData();
            console.log(a);
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

    init: function() {},

    render: function() {},

    subscribe: function() {}

};