import React, { Component } from 'react';
import './../css/src/Order.css';
import Header from './Header'
import Tip from './Tip';
import Total from './Total'

class Order extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tipRatesInput: '',
            tipRates: [],
            selectedTipRate: 0,
            subtotal: '',
            total: 0
        };

        this._handleTipInputChange = this._handleTipInputChange.bind(this);
        this._handleTipInputSubmit = this._handleTipInputSubmit.bind(this);
        this._handleSubTotalInputChange = this._handleSubTotalInputChange.bind(this);
        this._handleTipButtonClick = this._handleTipButtonClick.bind(this);
    }

    _handleTipInputChange(e) {
        const val = e.target.value;
        this.setState({tipRatesInput: val});
    }

    _handleTipInputSubmit() {
        const arr =  this.state.tipRatesInput.split(',');
        const typeCoerced = [];

        arr.forEach( item => {
            let num = ( false === isNaN(parseInt(item, 10)) ) ? parseInt(item, 10) : 0;
            typeCoerced.push(num)
        } );

        this.setState({
            tipRates: typeCoerced,
            tipRatesInput: ''
        })
    }

    _handleSubTotalInputChange(e) {
        const val = e.target.value;
        const num = ( false === isNaN(parseFloat(val)) ) ? parseFloat(val) : 0;
        this.setState({subtotal: num });
    }

    _handleTipButtonClick(e) {
        const val = e.target.value;
        const tipRate = parseFloat(val) / 100;
        const subtotal = this.state.subtotal;
        const tip = subtotal * tipRate;
        const total = subtotal + tip;

        this.setState({
            subtotal: subtotal,
            tip: tip,
            total: total
        })
    }


    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <Tip
                        tipRatesInput={this.state.tipRatesInput}
                        tipRates={this.state.tipRates}
                        changeHandler={this._handleTipInputChange}
                        submitHandler={this._handleTipInputSubmit}
                        />
                    <Total
                        changeHandler={this._handleSubTotalInputChange}
                        clickHandler={this._handleTipButtonClick}
                        tipRates={this.state.tipRates}
                        tip={this.state.tip}
                        subtotal={this.state.subtotal}
                        total={this.state.total}
                        />
                    </div>
            </div>
        )
    }
}

export default Order;
