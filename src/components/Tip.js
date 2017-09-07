import React, { Component } from 'react';

class Tip extends Component {

    constructor(props) {
        super(props);
        this._handleChange = this._handleChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleChange(e) {
        this.props.changeHandler(e)
    }

    _handleSubmit() {
        this.props.submitHandler()
    }


    render() {
        return (
            <div className="row">
                <div className="form-group col-6">
                    <label>Enter Tip Amounts</label>
                    <div>
                        <input type="text" className="form-control form-control-sm" value={this.props.tipRatesInput}  onChange={this._handleChange} />
                        <button className="btn btn-secondary" onClick={this._handleSubmit}>Submit Tip Amounts</button>
                    </div>
                </div>
            </div>
        )
    }


}

export default Tip;
