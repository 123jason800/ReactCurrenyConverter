class EuroForm extends React.Component {
    

    render() {
        return (
            <div>
                <input name="euro" onChange={this.props.handleChange} className="input-bar" type="number" value={this.props.euro} />
                <h4 className="d-inline"> EURO</h4>
            </div>
            
        );
    }
}
