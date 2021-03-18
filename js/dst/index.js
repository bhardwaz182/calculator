"use strict";
var Calculator = /** @class */ (function () {
    function Calculator() {
        var _this = this;
        this.stringEval = '';
        this.ReverseString = function (str) { return str.split('').reverse().join(''); };
        this.addEventListeners = function () {
            var btnElements = document.querySelectorAll('button');
            btnElements.forEach(function (btn) {
                btn.addEventListener('click', function (event) {
                    //console.log(event);
                    _this.addToString(btn);
                });
            });
        };
        this.addToString = function (btn) {
            var display = document.querySelector('input');
            if (btn.value === 'all-clear') {
                _this.stringEval = '';
                display.value = _this.stringEval;
                return;
            }
            else if (btn.value === '=') {
                try {
                    display.value = eval(_this.stringEval);
                }
                catch (err) {
                    display.value = "invalid expression";
                    _this.stringEval = '';
                    //alert("invalid expression");
                }
                return;
            }
            _this.stringEval += btn.value;
            display.value = _this.stringEval;
            return;
        };
    }
    Calculator.prototype.init = function () {
        this.addEventListeners();
    };
    return Calculator;
}());
var calculator = new Calculator();
calculator.init();
