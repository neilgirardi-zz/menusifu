import React, { Component } from 'react';

class Total extends Component {

    constructor(props) {
        super(props);
        this._handleChange = this._handleChange.bind(this);
        this._handleClick = this._handleClick.bind(this);
    }


    _handleChange(e) {
        this.props.changeHandler(e)
    }

    _handleClick(e) {
        this.props.clickHandler(e)
    }

    render() {
        return (
            <div className="row">
                <div className="form-group col-6">
                    <label>Enter Subtotal</label>
                    <input type="number" className="form-control form-control-sm" value={this.props.subtotal} onChange={this._handleChange}  />
                    <button className="btn btn-secondary" value="submit" onClick={this._handleClick}>Submit Order</button>
                    <div className="itemized-total">
                        <ul>
                        { this.props.subtotal > 0 &&
                            <li>Subtotal: <span className="total">${this.props.subtotal}</span></li>
                        }
                        { this.props.tip > 0 &&
                            <li>Tip: <span className="total">${this.props.tip}</span></li>
                        }
                        { this.props.total > 0 &&
                            <li>Total: <span className="total">${this.props.total}</span></li>
                        }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}
export default Total
