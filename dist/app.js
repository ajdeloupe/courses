(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.G$ = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//assign variable to function that returns a new instance of the class.  Export variable so you can use G$ to access the class.
var G$ = function G$(firstName, lastName, language) {
  return new GreetrInit(firstName, lastName, language);
}; //set up data needed.  not exported, defined outside the class, and thus "hidden"


exports.G$ = G$;
var validLangs = new Set(['en', 'es', 'se']);
var greetings = new Map([["en", "Hi"], ["es", "Hola"], ["se", "Hejsan"]]);
var formalGreetings = new Map([["en", "Hello"], ["es", "Saludos"], ["se", "Hej"]]);
var logMessages = new Map([["en", "Logged In"], ["es", "Indicio Session"], ["se", "Inloggad"]]); //use symbol to protect these from being changed directly

var s_firstname = Symbol();
var s_lastname = Symbol();
var s_language = Symbol();

var Greetr =
/*#__PURE__*/
function () {
  function Greetr() {
    _classCallCheck(this, Greetr);
  }

  _createClass(Greetr, [{
    key: "fullname",
    //sets up methods
    value: function fullname() {
      // use computed member access operator ([]) to access properties set up with Symbol()
      return "".concat(this[s_firstname], " ").concat(this[s_lastname]);
    }
  }, {
    key: "greeting",
    value: function greeting(formal) {
      var msg;

      if (formal) {
        msg = "".concat(formalGreetings.get(this[s_language]), " ").concat(this.fullname());
      } else {
        msg = "".concat(greetings.get(this[s_language]), " ").concat(this[s_firstname]);
      }

      return msg;
    }
  }, {
    key: "validate",
    value: function validate() {
      if (!validLangs.has(this[s_language])) {
        throw "invalid language";
      }

      return this;
    }
  }, {
    key: "log",
    value: function log() {
      if (console) {
        console.log("".concat(logMessages.get(this[s_language]), ": ").concat(this.fullname()));
      }

      return this;
    }
  }, {
    key: "updateGreeting",
    value: function updateGreeting(selector, formal) {
      if (!$) {
        throw "jQuery not loaded";
      }

      if (!selector) {
        throw "HTML selector required";
      }

      if ($(selector).length < 1) {
        throw "selector not found in HTML";
      }

      $(selector).html(this.greeting(formal));
      return this;
    }
  }, {
    key: "language",
    // use getters and setters to handle any validation or changes you want to make before getting or setting property values
    set: function set(language) {
      this[s_language] = language;
      this.validate();
    },
    get: function get() {
      if (this[s_language] === 'en') {
        return "English";
      } else if (this[s_language] === 'se') {
        return "Swedish";
      } else if (this[s_language] === 'es') {
        return "Spanish";
      } else {
        throw "not valid language";
      }
    }
  }, {
    key: "firstName",
    set: function set(firstname) {
      this[s_firstname] = firstname;
    }
  }, {
    key: "lastName",
    set: function set(lastname) {
      this[s_lastname] = lastname;
    }
  }, {
    key: "firstname",
    get: function get() {
      return this[s_firstname].toUpperCase();
    }
  }, {
    key: "lastname",
    get: function get() {
      return this[s_lastname].toUpperCase();
    }
  }]);

  return Greetr;
}(); //sets up object


var GreetrInit =
/*#__PURE__*/
function (_Greetr) {
  _inherits(GreetrInit, _Greetr);

  function GreetrInit() {
    var _this;

    var firstName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "First";
    var lastName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Last";
    var language = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "en";

    _classCallCheck(this, GreetrInit);

    //needed to have access to Greetr methods
    _this = _possibleConstructorReturn(this, _getPrototypeOf(GreetrInit).call(this));
    _this[s_firstname] = firstName;
    _this[s_lastname] = lastName;
    _this[s_language] = language;

    _this.validate();

    return _this;
  }

  return GreetrInit;
}(Greetr);

},{}],2:[function(require,module,exports){
"use strict";

var _Greetr = require("./Greetr");

//var g = G$('John', 'Doe', 'se').updateGreeting('#greeting');
//console.log(g);
$('#login').click(function () {
  var firstname = $('#firstname').val();
  var lastname = $('#lastname').val();
  var language = $('#lang').val();
  var Greet = (0, _Greetr.G$)(firstname, lastname);
  Greet.language = $('#lang').val(); // Greet.firstName = 'Joy';

  Greet.updateGreeting('#greeting', true).log();
  console.log(Greet.firstname);
  console.log(Greet.language);
  $('#greeting').after("Chosen language: ".concat(Greet.language));
});

},{"./Greetr":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zcmMvR3JlZXRyLmpzIiwiLi4vc3JjL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNPLElBQU0sRUFBRSxHQUFHLFNBQUwsRUFBSyxDQUFDLFNBQUQsRUFBWSxRQUFaLEVBQXNCLFFBQXRCO0FBQUEsU0FBbUMsSUFBSSxVQUFKLENBQWUsU0FBZixFQUEwQixRQUExQixFQUFvQyxRQUFwQyxDQUFuQztBQUFBLENBQVgsQyxDQUdQOzs7O0FBQ0EsSUFBSSxVQUFVLEdBQUcsSUFBSSxHQUFKLENBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsQ0FBUixDQUFqQjtBQUNBLElBQUksU0FBUyxHQUFHLElBQUksR0FBSixDQUFRLENBQ3BCLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FEb0IsRUFFcEIsQ0FBQyxJQUFELEVBQU8sTUFBUCxDQUZvQixFQUdwQixDQUFDLElBQUQsRUFBTyxRQUFQLENBSG9CLENBQVIsQ0FBaEI7QUFLQSxJQUFJLGVBQWUsR0FBRyxJQUFJLEdBQUosQ0FBUSxDQUMxQixDQUFDLElBQUQsRUFBTyxPQUFQLENBRDBCLEVBRTFCLENBQUMsSUFBRCxFQUFPLFNBQVAsQ0FGMEIsRUFHMUIsQ0FBQyxJQUFELEVBQU8sS0FBUCxDQUgwQixDQUFSLENBQXRCO0FBS0EsSUFBSSxXQUFXLEdBQUcsSUFBSSxHQUFKLENBQVEsQ0FDdEIsQ0FBQyxJQUFELEVBQU8sV0FBUCxDQURzQixFQUV0QixDQUFDLElBQUQsRUFBTyxpQkFBUCxDQUZzQixFQUd0QixDQUFDLElBQUQsRUFBTyxVQUFQLENBSHNCLENBQVIsQ0FBbEIsQyxDQU1BOztBQUNBLElBQUksV0FBVyxHQUFHLE1BQU0sRUFBeEI7QUFDQSxJQUFJLFVBQVUsR0FBRyxNQUFNLEVBQXZCO0FBQ0EsSUFBSSxVQUFVLEdBQUcsTUFBTSxF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QjtBQUNBLE1BQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZSxHQUFmLEVBQWY7QUFDQSxNQUFJLFFBQVEsR0FBRSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVcsR0FBWCxFQUFkO0FBRUEsTUFBSSxLQUFLLEdBQUcsZ0JBQUcsU0FBSCxFQUFjLFFBQWQsQ0FBWjtBQUNBLEVBQUEsS0FBSyxDQUFDLFFBQU4sR0FBaUIsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXLEdBQVgsRUFBakIsQ0FOd0IsQ0FPekI7O0FBQ0MsRUFBQSxLQUFLLENBQUMsY0FBTixDQUFxQixXQUFyQixFQUFrQyxJQUFsQyxFQUF3QyxHQUF4QztBQUNBLEVBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxLQUFLLENBQUMsU0FBbEI7QUFDQSxFQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksS0FBSyxDQUFDLFFBQWxCO0FBQ0EsRUFBQSxDQUFDLENBQUMsV0FBRCxDQUFELENBQWUsS0FBZiw0QkFBeUMsS0FBSyxDQUFDLFFBQS9DO0FBQ0gsQ0FaRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vYXNzaWduIHZhcmlhYmxlIHRvIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgY2xhc3MuICBFeHBvcnQgdmFyaWFibGUgc28geW91IGNhbiB1c2UgRyQgdG8gYWNjZXNzIHRoZSBjbGFzcy5cclxuZXhwb3J0IGNvbnN0IEckID0gKGZpcnN0TmFtZSwgbGFzdE5hbWUsIGxhbmd1YWdlKSA9PiBuZXcgR3JlZXRySW5pdChmaXJzdE5hbWUsIGxhc3ROYW1lLCBsYW5ndWFnZSk7XHJcblxyXG5cclxuLy9zZXQgdXAgZGF0YSBuZWVkZWQuICBub3QgZXhwb3J0ZWQsIGRlZmluZWQgb3V0c2lkZSB0aGUgY2xhc3MsIGFuZCB0aHVzIFwiaGlkZGVuXCJcclxubGV0IHZhbGlkTGFuZ3MgPSBuZXcgU2V0KFsnZW4nLCAnZXMnLCAnc2UnXSk7XHJcbmxldCBncmVldGluZ3MgPSBuZXcgTWFwKFtcclxuICAgIFtcImVuXCIsIFwiSGlcIl0sXHJcbiAgICBbXCJlc1wiLCBcIkhvbGFcIl0sXHJcbiAgICBbXCJzZVwiLCBcIkhlanNhblwiXVxyXG5dKTtcclxubGV0IGZvcm1hbEdyZWV0aW5ncyA9IG5ldyBNYXAoW1xyXG4gICAgW1wiZW5cIiwgXCJIZWxsb1wiXSxcclxuICAgIFtcImVzXCIsIFwiU2FsdWRvc1wiXSxcclxuICAgIFtcInNlXCIsIFwiSGVqXCJdXHJcbl0pO1xyXG5sZXQgbG9nTWVzc2FnZXMgPSBuZXcgTWFwKFtcclxuICAgIFtcImVuXCIsIFwiTG9nZ2VkIEluXCJdLFxyXG4gICAgW1wiZXNcIiwgXCJJbmRpY2lvIFNlc3Npb25cIl0sXHJcbiAgICBbXCJzZVwiLCBcIklubG9nZ2FkXCJdXHJcbl0pO1xyXG5cclxuLy91c2Ugc3ltYm9sIHRvIHByb3RlY3QgdGhlc2UgZnJvbSBiZWluZyBjaGFuZ2VkIGRpcmVjdGx5XHJcbmxldCBzX2ZpcnN0bmFtZSA9IFN5bWJvbCgpO1xyXG5sZXQgc19sYXN0bmFtZSA9IFN5bWJvbCgpO1xyXG5sZXQgc19sYW5ndWFnZSA9IFN5bWJvbCgpO1xyXG5cclxuXHJcbmNsYXNzIEdyZWV0ciB7ICAgICAgIFxyXG4gICAgXHJcbiAgIC8vc2V0cyB1cCBtZXRob2RzXHJcbiAgICBcclxuICAgIGZ1bGxuYW1lICgpIHtcclxuICAgICAgICAvLyB1c2UgY29tcHV0ZWQgbWVtYmVyIGFjY2VzcyBvcGVyYXRvciAoW10pIHRvIGFjY2VzcyBwcm9wZXJ0aWVzIHNldCB1cCB3aXRoIFN5bWJvbCgpXHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXNbc19maXJzdG5hbWVdfSAke3RoaXNbc19sYXN0bmFtZV19YDtcclxuICAgIH07XHJcbiAgICBcclxuICAgIGdyZWV0aW5nIChmb3JtYWwpIHtcclxuICAgICAgICBsZXQgbXNnO1xyXG4gICAgICAgIGlmIChmb3JtYWwpIHtcclxuICAgICAgICAgICAgbXNnID0gYCR7Zm9ybWFsR3JlZXRpbmdzLmdldCh0aGlzW3NfbGFuZ3VhZ2VdKX0gJHt0aGlzLmZ1bGxuYW1lKCl9YDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbXNnID0gYCR7Z3JlZXRpbmdzLmdldCh0aGlzW3NfbGFuZ3VhZ2VdKX0gJHt0aGlzW3NfZmlyc3RuYW1lXX1gO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1zZztcclxuICAgIH07XHJcbiAgICBcclxuICAgIHZhbGlkYXRlICgpIHtcclxuICAgICAgICBpZiAoIXZhbGlkTGFuZ3MuaGFzKHRoaXNbc19sYW5ndWFnZV0pKSB7XHJcbiAgICAgICAgICAgIHRocm93IFwiaW52YWxpZCBsYW5ndWFnZVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBcclxuICAgIGxvZygpIHtcclxuICAgICAgICBpZiAoY29uc29sZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtsb2dNZXNzYWdlcy5nZXQodGhpc1tzX2xhbmd1YWdlXSl9OiAke3RoaXMuZnVsbG5hbWUoKX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICAvLyB1c2UgZ2V0dGVycyBhbmQgc2V0dGVycyB0byBoYW5kbGUgYW55IHZhbGlkYXRpb24gb3IgY2hhbmdlcyB5b3Ugd2FudCB0byBtYWtlIGJlZm9yZSBnZXR0aW5nIG9yIHNldHRpbmcgcHJvcGVydHkgdmFsdWVzXHJcbiAgICBzZXQgbGFuZ3VhZ2UobGFuZ3VhZ2UpIHtcclxuICAgICAgICB0aGlzW3NfbGFuZ3VhZ2VdID0gbGFuZ3VhZ2U7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0ZSgpO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgc2V0IGZpcnN0TmFtZSAoZmlyc3RuYW1lKSB7XHJcbiAgICAgICAgdGhpc1tzX2ZpcnN0bmFtZV0gPSBmaXJzdG5hbWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldCBsYXN0TmFtZSAobGFzdG5hbWUpIHtcclxuICAgICAgICB0aGlzW3NfbGFzdG5hbWVdID0gbGFzdG5hbWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCBmaXJzdG5hbWUgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzW3NfZmlyc3RuYW1lXS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgbGFzdG5hbWUgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzW3NfbGFzdG5hbWVdLnRvVXBwZXJDYXNlKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCBsYW5ndWFnZSAoKSB7XHJcbiAgICAgICAgaWYodGhpc1tzX2xhbmd1YWdlXSA9PT0gJ2VuJykge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJFbmdsaXNoXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzW3NfbGFuZ3VhZ2VdID09PSAnc2UnKXtcclxuICAgICAgICAgICAgcmV0dXJuIFwiU3dlZGlzaFwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpc1tzX2xhbmd1YWdlXSA9PT0gJ2VzJykge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgXCJub3QgdmFsaWQgbGFuZ3VhZ2VcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVwZGF0ZUdyZWV0aW5nKHNlbGVjdG9yLCBmb3JtYWwpIHtcclxuICAgICAgICBpZiAoISQpIHtcclxuICAgICAgICAgICAgdGhyb3cgXCJqUXVlcnkgbm90IGxvYWRlZFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgIHRocm93IFwiSFRNTCBzZWxlY3RvciByZXF1aXJlZFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoJChzZWxlY3RvcikubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBcInNlbGVjdG9yIG5vdCBmb3VuZCBpbiBIVE1MXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKHNlbGVjdG9yKS5odG1sKHRoaXMuZ3JlZXRpbmcoZm9ybWFsKSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4gICAgLy9zZXRzIHVwIG9iamVjdFxyXG4gY2xhc3MgR3JlZXRySW5pdCBleHRlbmRzIEdyZWV0ciB7XHJcbiAgICAgY29uc3RydWN0b3IoZmlyc3ROYW1lID0gXCJGaXJzdFwiLCBsYXN0TmFtZSA9IFwiTGFzdFwiLCBsYW5ndWFnZSA9IFwiZW5cIikge1xyXG4gICAgICAgICAvL25lZWRlZCB0byBoYXZlIGFjY2VzcyB0byBHcmVldHIgbWV0aG9kc1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpc1tzX2ZpcnN0bmFtZV0gPSBmaXJzdE5hbWU7XHJcbiAgICAgICAgdGhpc1tzX2xhc3RuYW1lXSA9IGxhc3ROYW1lO1xyXG4gICAgICAgIHRoaXNbc19sYW5ndWFnZV0gPSBsYW5ndWFnZTtcclxuICAgICAgICB0aGlzLnZhbGlkYXRlKCk7XHJcbiAgICAgfSBcclxuIH0iLCJpbXBvcnQge0ckfSBmcm9tIFwiLi9HcmVldHJcIjtcclxuXHJcbi8vdmFyIGcgPSBHJCgnSm9obicsICdEb2UnLCAnc2UnKS51cGRhdGVHcmVldGluZygnI2dyZWV0aW5nJyk7XHJcbi8vY29uc29sZS5sb2coZyk7XHJcbiQoJyNsb2dpbicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgZmlyc3RuYW1lID0gJCgnI2ZpcnN0bmFtZScpLnZhbCgpO1xyXG4gICAgbGV0IGxhc3RuYW1lID0gJCgnI2xhc3RuYW1lJykudmFsKCk7XHJcbiAgICBsZXQgbGFuZ3VhZ2UgPSQoJyNsYW5nJykudmFsKCk7XHJcbiAgICBcclxuICAgIGxldCBHcmVldCA9IEckKGZpcnN0bmFtZSwgbGFzdG5hbWUpO1xyXG4gICAgR3JlZXQubGFuZ3VhZ2UgPSAkKCcjbGFuZycpLnZhbCgpO1xyXG4gICAvLyBHcmVldC5maXJzdE5hbWUgPSAnSm95JztcclxuICAgIEdyZWV0LnVwZGF0ZUdyZWV0aW5nKCcjZ3JlZXRpbmcnLCB0cnVlKS5sb2coKTtcclxuICAgIGNvbnNvbGUubG9nKEdyZWV0LmZpcnN0bmFtZSk7XHJcbiAgICBjb25zb2xlLmxvZyhHcmVldC5sYW5ndWFnZSk7XHJcbiAgICAkKCcjZ3JlZXRpbmcnKS5hZnRlcihgQ2hvc2VuIGxhbmd1YWdlOiAke0dyZWV0Lmxhbmd1YWdlfWApO1xyXG59KTsiXX0=
