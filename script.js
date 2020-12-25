var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CurrencyConverter = function (_React$Component) {
    _inherits(CurrencyConverter, _React$Component);

    function CurrencyConverter(props) {
        _classCallCheck(this, CurrencyConverter);

        var _this = _possibleConstructorReturn(this, (CurrencyConverter.__proto__ || Object.getPrototypeOf(CurrencyConverter)).call(this, props));

        _this.state = {
            usd: 1,
            euro: 0.89
        };

        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(CurrencyConverter, [{
        key: "handleChange",
        value: function handleChange(event) {
            var _event$target = event.target,
                name = _event$target.name,
                value = _event$target.value;
            var _state = this.state,
                usd = _state.usd,
                euro = _state.euro;

            switch (name) {
                case "usd":
                    usd = value;
                    euro = (usd * 0.89).toFixed(2);
                    break;
                case "euro":
                    euro = value;
                    usd = (euro * (1 / 0.89)).toFixed(2);
                    break;
            }

            this.setState({ euro: euro, usd: usd });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                    "h1",
                    { className: "text-center" },
                    "Currency Converter"
                ),
                React.createElement(
                    "h2",
                    { className: "text-center" },
                    "USD:1 : 0.89EURO"
                ),
                React.createElement(
                    "div",
                    { className: "d-flex justify-content-center" },
                    React.createElement(UsdForm, { handleChange: this.handleChange, usd: this.state.usd }),
                    React.createElement(
                        "span",
                        { "class": "mx-3" },
                        "="
                    ),
                    React.createElement(EuroForm, { handleChange: this.handleChange, euro: this.state.euro })
                )
            );
        }
    }]);

    return CurrencyConverter;
}(React.Component);

ReactDOM.render(React.createElement(CurrencyConverter, null), document.getElementById('root'));