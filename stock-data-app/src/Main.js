import React from 'react'

class Main extends React.Component{
    render(){
        return(
            <div>
                <h1>Stock Data for Today</h1>
                <ul>
                    <li>Microsoft: {this.props.microsftValue}</li>
                    <li>Nvidia: {this.props.nvidiaValue}</li>
                    <li>Annapurna: {this.props.annapurnaValue}</li>
                    <button onClick={this.props.increase}>Increase Stock Values</button>
                    <button onClick={this.props.decrease}>Decrease Stock Values</button>
                </ul>
            </div>
        )
    }
}
export default Main;