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
  // pull in some summernote core functions
  var ui = $.summernote.ui;
  var dom = $.summernote.dom;

  // define the popover plugin
<<<<<<< HEAD
  var DataBasicPlugin = function (context) {
=======
  var DataBasicPlugin = function(context) {
>>>>>>> cd06928b8f978e8c852df5de0b87a008573dac4c
    var self = this;
    var options = context.options;
    var lang = options.langInfo;

    self.icon = '<i class="fa fa-object-group"></i>';

    // add context menu button for dialog
<<<<<<< HEAD
    context.memo("button.databasic", function () {
      return ui
        .button({
          contents: self.icon,
          tooltip: lang.databasic.insert,
          click: context.createInvokeHandler("databasic.showDialog"),
        })
        .render();
    });

    // add popover edit button
    context.memo("button.databasicDialog", function () {
      return ui
        .button({
          contents: self.icon,
          tooltip: lang.databasic.edit,
          click: context.createInvokeHandler("databasic.showDialog"),
        })
        .render();
    });

    //  add popover size buttons
    context.memo("button.databasicSize100", function () {
      return ui
        .button({
          contents: '<span class="note-fontsize-10">100%</span>',
          tooltip: lang.image.resizeFull,
          click: context.createInvokeHandler("editor.resize", "1"),
        })
        .render();
    });
    context.memo("button.databasicSize50", function () {
      return ui
        .button({
          contents: '<span class="note-fontsize-10">50%</span>',
          tooltip: lang.image.resizeHalf,
          click: context.createInvokeHandler("editor.resize", "0.5"),
        })
        .render();
    });
    context.memo("button.databasicSize25", function () {
      return ui
        .button({
          contents: '<span class="note-fontsize-10">25%</span>',
          tooltip: lang.image.resizeQuarter,
          click: context.createInvokeHandler("editor.resize", "0.25"),
        })
        .render();
    });

    self.events = {
      "summernote.init": function (we, e) {
        // update existing containers
        $("data.ext-databasic", e.editable).each(function () {
          self.setContent($(this));
        });
        // TODO: make this an undo snapshot...
      },
      "summernote.keyup summernote.mouseup summernote.change summernote.scroll":
        function () {
          self.update();
        },
      "summernote.dialog.shown": function () {
=======
    context.memo('button.databasic', function() {
      return ui.button({
        contents: self.icon,
        tooltip: lang.databasic.insert,
        click: context.createInvokeHandler('databasic.showDialog'),
      }).render();
    });

    // add popover edit button
    context.memo('button.databasicDialog', function() {
      return ui.button({
        contents: self.icon,
        tooltip: lang.databasic.edit,
        click: context.createInvokeHandler('databasic.showDialog'),
      }).render();
    });

    //  add popover size buttons
    context.memo('button.databasicSize100', function() {
      return ui.button({
        contents: '<span class="note-fontsize-10">100%</span>',
        tooltip: lang.image.resizeFull,
        click: context.createInvokeHandler('editor.resize', '1'),
      }).render();
    });
    context.memo('button.databasicSize50', function() {
      return ui.button({
        contents: '<span class="note-fontsize-10">50%</span>',
        tooltip: lang.image.resizeHalf,
        click: context.createInvokeHandler('editor.resize', '0.5'),
      }).render();
    });
    context.memo('button.databasicSize25', function() {
      return ui.button({
        contents: '<span class="note-fontsize-10">25%</span>',
        tooltip: lang.image.resizeQuarter,
        click: context.createInvokeHandler('editor.resize', '0.25'),
      }).render();
    });

    self.events = {
      'summernote.init': function(we, e) {
        // update existing containers
        $('data.ext-databasic', e.editable).each(function() { self.setContent($(this)); });
        // TODO: make this an undo snapshot...
      },
      'summernote.keyup summernote.mouseup summernote.change summernote.scroll': function() {
        self.update();
      },
      'summernote.dialog.shown': function() {
>>>>>>> cd06928b8f978e8c852df5de0b87a008573dac4c
        self.hidePopover();
      },
    };

<<<<<<< HEAD
    self.initialize = function () {
      // create dialog markup
      var $container = options.dialogsInBody
        ? $(document.body)
        : context.layoutInfo.editor;

      var body =
        '<div class="form-group row-fluid">' +
        "<label>" +
        lang.databasic.testLabel +
        "</label>" +
        '<input class="ext-databasic-test form-control" type="text" />' +
        "</div>";
      var footer =
        '<button href="#" class="btn btn-primary ext-databasic-save">' +
        lang.databasic.insert +
        "</button>";

      self.$dialog = ui
        .dialog({
          title: lang.databasic.name,
          fade: options.dialogsFade,
          body: body,
          footer: footer,
        })
        .render()
        .appendTo($container);

      // create popover
      self.$popover = ui
        .popover({
          className: "ext-databasic-popover",
        })
        .render()
        .appendTo("body");
      var $content = self.$popover.find(".popover-content");

      context.invoke("buttons.build", $content, options.popover.databasic);
    };

    self.destroy = function () {
=======
    self.initialize = function() {
      // create dialog markup
      var $container = options.dialogsInBody ? $(document.body) : context.layoutInfo.editor;

      var body = '<div class="form-group row-fluid">' +
          '<label>' + lang.databasic.testLabel + '</label>' +
          '<input class="ext-databasic-test form-control" type="text" />' +
          '</div>';
      var footer = '<button href="#" class="btn btn-primary ext-databasic-save">' + lang.databasic.insert + '</button>';

      self.$dialog = ui.dialog({
        title: lang.databasic.name,
        fade: options.dialogsFade,
        body: body,
        footer: footer,
      }).render().appendTo($container);

      // create popover
      self.$popover = ui.popover({
        className: 'ext-databasic-popover',
      }).render().appendTo('body');
      var $content = self.$popover.find('.popover-content');

      context.invoke('buttons.build', $content, options.popover.databasic);
    };

    self.destroy = function() {
>>>>>>> cd06928b8f978e8c852df5de0b87a008573dac4c
      self.$popover.remove();
      self.$popover = null;
      self.$dialog.remove();
      self.$dialog = null;
    };

<<<<<<< HEAD
    self.update = function () {
      // Prevent focusing on editable when invoke('code') is executed
      if (!context.invoke("editor.hasFocus")) {
=======
    self.update = function() {
      // Prevent focusing on editable when invoke('code') is executed
      if (!context.invoke('editor.hasFocus')) {
>>>>>>> cd06928b8f978e8c852df5de0b87a008573dac4c
        self.hidePopover();
        return;
      }

<<<<<<< HEAD
      var rng = context.invoke("editor.createRange");
      var visible = false;

      if (rng.isOnData()) {
        var $data = $(rng.sc).closest("data.ext-databasic");
=======
      var rng = context.invoke('editor.createRange');
      var visible = false;

      if (rng.isOnData()) {
        var $data = $(rng.sc).closest('data.ext-databasic');
>>>>>>> cd06928b8f978e8c852df5de0b87a008573dac4c

        if ($data.length) {
          var pos = dom.posFromPlaceholder($data[0]);

          self.$popover.css({
<<<<<<< HEAD
            display: "block",
=======
            display: 'block',
>>>>>>> cd06928b8f978e8c852df5de0b87a008573dac4c
            left: pos.left,
            top: pos.top,
          });

          // save editor target to let size buttons resize the container
<<<<<<< HEAD
          context.invoke("editor.saveTarget", $data[0]);
=======
          context.invoke('editor.saveTarget', $data[0]);
>>>>>>> cd06928b8f978e8c852df5de0b87a008573dac4c

          visible = true;
        }
      }

      // hide if not visible
      if (!visible) {
        self.hidePopover();
      }
    };

<<<<<<< HEAD
    self.hidePopover = function () {
=======
    self.hidePopover = function() {
>>>>>>> cd06928b8f978e8c852df5de0b87a008573dac4c
      self.$popover.hide();
    };

    // define plugin dialog
<<<<<<< HEAD
    self.getInfo = function () {
      var rng = context.invoke("editor.createRange");

      if (rng.isOnData()) {
        var $data = $(rng.sc).closest("data.ext-databasic");
=======
    self.getInfo = function() {
      var rng = context.invoke('editor.createRange');

      if (rng.isOnData()) {
        var $data = $(rng.sc).closest('data.ext-databasic');
>>>>>>> cd06928b8f978e8c852df5de0b87a008573dac4c

        if ($data.length) {
          // Get the first node on range(for edit).
          return {
            node: $data,
<<<<<<< HEAD
            test: $data.attr("data-test"),
=======
            test: $data.attr('data-test'),
>>>>>>> cd06928b8f978e8c852df5de0b87a008573dac4c
          };
        }
      }

      return {};
    };

<<<<<<< HEAD
    self.setContent = function ($node) {
      $node.html(
        '<p contenteditable="false">' +
          self.icon +
          " " +
          lang.databasic.name +
          ": " +
          $node.attr("data-test") +
          "</p>"
      );
    };

    self.updateNode = function (info) {
      self.setContent(info.node.attr("data-test", info.test));
    };

    self.createNode = function (info) {
=======
    self.setContent = function($node) {
      $node.html('<p contenteditable="false">' + self.icon + ' ' + lang.databasic.name + ': ' +
        $node.attr('data-test') + '</p>');
    };

    self.updateNode = function(info) {
      self.setContent(info.node
        .attr('data-test', info.test));
    };

    self.createNode = function(info) {
>>>>>>> cd06928b8f978e8c852df5de0b87a008573dac4c
      var $node = $('<data class="ext-databasic"></data>');

      if ($node) {
        // save node to info structure
        info.node = $node;
        // insert node into editor dom
<<<<<<< HEAD
        context.invoke("editor.insertNode", $node[0]);
=======
        context.invoke('editor.insertNode', $node[0]);
>>>>>>> cd06928b8f978e8c852df5de0b87a008573dac4c
      }

      return $node;
    };

<<<<<<< HEAD
    self.showDialog = function () {
      var info = self.getInfo();
      var newNode = !info.node;
      context.invoke("editor.saveRange");

      self
        .openDialog(info)
        .then(function (dialogInfo) {
          // [workaround] hide dialog before restore range for IE range focus
          ui.hideDialog(self.$dialog);
          context.invoke("editor.restoreRange");
=======
    self.showDialog = function() {
      var info = self.getInfo();
      var newNode = !info.node;
      context.invoke('editor.saveRange');

      self
        .openDialog(info)
        .then(function(dialogInfo) {
          // [workaround] hide dialog before restore range for IE range focus
          ui.hideDialog(self.$dialog);
          context.invoke('editor.restoreRange');
>>>>>>> cd06928b8f978e8c852df5de0b87a008573dac4c

          // insert a new node
          if (newNode) {
            self.createNode(info);
          }

          // update info with dialog info
          $.extend(info, dialogInfo);

          self.updateNode(info);
        })
<<<<<<< HEAD
        .fail(function () {
          context.invoke("editor.restoreRange");
        });
    };

    self.openDialog = function (info) {
      return $.Deferred(function (deferred) {
        var $inpTest = self.$dialog.find(".ext-databasic-test");
        var $saveBtn = self.$dialog.find(".ext-databasic-save");
        var onKeyup = function (event) {
          if (event.keyCode === 13) {
            $saveBtn.trigger("click");
          }
        };

        ui.onDialogShown(self.$dialog, function () {
          context.triggerEvent("dialog.shown");

          $inpTest
            .val(info.test)
            .on("input", function () {
              ui.toggleBtn($saveBtn, $inpTest.val());
            })
            .trigger("focus")
            .on("keyup", onKeyup);

          $saveBtn
            .text(info.node ? lang.databasic.edit : lang.databasic.insert)
            .click(function (event) {
=======
        .fail(function() {
          context.invoke('editor.restoreRange');
        });
    };

    self.openDialog = function(info) {
      return $.Deferred(function(deferred) {
        var $inpTest = self.$dialog.find('.ext-databasic-test');
        var $saveBtn = self.$dialog.find('.ext-databasic-save');
        var onKeyup = function(event) {
          if (event.keyCode === 13) {
            $saveBtn.trigger('click');
          }
        };

        ui.onDialogShown(self.$dialog, function() {
          context.triggerEvent('dialog.shown');

          $inpTest.val(info.test).on('input', function() {
            ui.toggleBtn($saveBtn, $inpTest.val());
          }).trigger('focus').on('keyup', onKeyup);

          $saveBtn
            .text(info.node ? lang.databasic.edit : lang.databasic.insert)
            .click(function(event) {
>>>>>>> cd06928b8f978e8c852df5de0b87a008573dac4c
              event.preventDefault();

              deferred.resolve({ test: $inpTest.val() });
            });

          // init save button
          ui.toggleBtn($saveBtn, $inpTest.val());
        });

<<<<<<< HEAD
        ui.onDialogHidden(self.$dialog, function () {
          $inpTest.off("input keyup");
          $saveBtn.off("click");

          if (deferred.state() === "pending") {
=======
        ui.onDialogHidden(self.$dialog, function() {
          $inpTest.off('input keyup');
          $saveBtn.off('click');

          if (deferred.state() === 'pending') {
>>>>>>> cd06928b8f978e8c852df5de0b87a008573dac4c
            deferred.reject();
          }
        });

        ui.showDialog(self.$dialog);
      });
    };
  };

  // Extends summernote
  $.extend(true, $.summernote, {
    plugins: {
      databasic: DataBasicPlugin,
    },

    options: {
      popover: {
        databasic: [
<<<<<<< HEAD
          [
            "databasic",
            [
              "databasicDialog",
              "databasicSize100",
              "databasicSize50",
              "databasicSize25",
            ],
          ],
=======
          ['databasic', ['databasicDialog', 'databasicSize100', 'databasicSize50', 'databasicSize25']],
>>>>>>> cd06928b8f978e8c852df5de0b87a008573dac4c
        ],
      },
    },

    // add localization texts
    lang: {
<<<<<<< HEAD
      "en-US": {
        databasic: {
          name: "Basic Data Container",
          insert: "insert basic data container",
          edit: "edit basic data container",
          testLabel: "test input",
        },
      },
    },
  });
});
=======
      'en-US': {
        databasic: {
          name: 'Basic Data Container',
          insert: 'insert basic data container',
          edit: 'edit basic data container',
          testLabel: 'test input',
        },
      },
    },

  });
}));
>>>>>>> cd06928b8f978e8c852df5de0b87a008573dac4c
