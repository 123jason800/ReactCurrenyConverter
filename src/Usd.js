class UsdForm extends React.Component {

    

    render() {
        
        return (
            <div>
                <h4 className="d-inline">USD </h4>
                <input name="usd" onChange={this.props.handleChange} className="input-bar" type="number" value={this.props.usd}/>
            </div>
        );
    }
}
