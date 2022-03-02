<<<<<<< HEAD
(function (factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define(["jquery"], factory);
  } else if (typeof module === "object" && module.exports) {
    // Node/CommonJS
    module.exports = factory(require("jquery"));
=======
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
>>>>>>> cd06928b8f978e8c852df5de0b87a008573dac4c
  } else {
    // Browser globals
    factory(window.jQuery);
  }
<<<<<<< HEAD
})(function ($) {
=======
}(function($) {
>>>>>>> cd06928b8f978e8c852df5de0b87a008573dac4c
  // Extends plugins for adding hello.
  //  - plugin is external module for customizing.
  $.extend($.summernote.plugins, {
    /**
     * @param {Object} context - context object has status of editor.
     */
<<<<<<< HEAD
    hello: function (context) {
=======
    'hello': function(context) {
>>>>>>> cd06928b8f978e8c852df5de0b87a008573dac4c
      var self = this;

      // ui has renders to build ui elements.
      //  - you can create a button with `ui.button`
      var ui = $.summernote.ui;

      // add hello button
<<<<<<< HEAD
      context.memo("button.hello", function () {
        // create button
        var button = ui.button({
          contents: '<i class="fa fa-child"/> Hello',
          tooltip: "hello",
          click: function () {
            self.$panel.show();
            self.$panel.hide(500);
            // invoke insertText method with 'hello' on editor module.
            context.invoke("editor.insertText", "hello");
=======
      context.memo('button.hello', function() {
        // create button
        var button = ui.button({
          contents: '<i class="fa fa-child"/> Hello',
          tooltip: 'hello',
          click: function() {
            self.$panel.show();
            self.$panel.hide(500);
            // invoke insertText method with 'hello' on editor module.
            context.invoke('editor.insertText', 'hello');
>>>>>>> cd06928b8f978e8c852df5de0b87a008573dac4c
          },
        });

        // create jQuery object from button instance.
        var $hello = button.render();
        return $hello;
      });

      // This events will be attached when editor is initialized.
      this.events = {
        // This will be called after modules are initialized.
<<<<<<< HEAD
        "summernote.init": function (we, e) {
          // eslint-disable-next-line
          console.log("summernote initialized", we, e);
        },
        // This will be called when user releases a key on editable.
        "summernote.keyup": function (we, e) {
          // eslint-disable-next-line
          console.log("summernote keyup", we, e);
=======
        'summernote.init': function(we, e) {
          // eslint-disable-next-line
          console.log('summernote initialized', we, e);
        },
        // This will be called when user releases a key on editable.
        'summernote.keyup': function(we, e) {
          // eslint-disable-next-line
          console.log('summernote keyup', we, e);
>>>>>>> cd06928b8f978e8c852df5de0b87a008573dac4c
        },
      };

      // This method will be called when editor is initialized by $('..').summernote();
      // You can create elements for plugin
<<<<<<< HEAD
      this.initialize = function () {
        this.$panel = $('<div class="hello-panel"/>')
          .css({
            position: "absolute",
            width: 100,
            height: 100,
            left: "50%",
            top: "50%",
            background: "red",
          })
          .hide();

        this.$panel.appendTo("body");
=======
      this.initialize = function() {
        this.$panel = $('<div class="hello-panel"/>').css({
          position: 'absolute',
          width: 100,
          height: 100,
          left: '50%',
          top: '50%',
          background: 'red',
        }).hide();

        this.$panel.appendTo('body');
>>>>>>> cd06928b8f978e8c852df5de0b87a008573dac4c
      };

      // This methods will be called when editor is destroyed by $('..').summernote('destroy');
      // You should remove elements on `initialize`.
<<<<<<< HEAD
      this.destroy = function () {
=======
      this.destroy = function() {
>>>>>>> cd06928b8f978e8c852df5de0b87a008573dac4c
        this.$panel.remove();
        this.$panel = null;
      };
    },
  });
<<<<<<< HEAD
});
=======
}));
>>>>>>> cd06928b8f978e8c852df5de0b87a008573dac4c
