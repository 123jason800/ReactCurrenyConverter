class CurrencyConverter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usd: 1,
            euro: 0.89,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {name,value} = event.target;
        let {usd,euro} = this.state;
        switch(name) {
            case "usd":
                usd = value;
                euro = ((usd * 0.89)).toFixed(2);
                break;
            case "euro":
                euro = value;
                usd = (euro * (1/0.89)).toFixed(2);
                break;
        }

        this.setState({euro,usd});
    }


    render() {
        return (
            <div className="container">
                <h1 className="text-center">Currency Converter</h1>
                <h2 className="text-center">USD:1 : 0.89EURO</h2>
                <div className="d-flex justify-content-center">
                    <UsdForm handleChange={this.handleChange} usd={this.state.usd} />
                    <span class="mx-3">=</span>
                    <EuroForm  handleChange={this.handleChange} euro={this.state.euro} />
                </div>
                
            </div>
        );
    }
}




ReactDOM.render(
    <CurrencyConverter />,
    document.getElementById('root')
);