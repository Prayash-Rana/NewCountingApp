import React, { Component } from 'react'

export default class STATE extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    handleIncrement = () => {
        this.setState({
            count : this.state.count + 1
        })
    }
    handleDecrement = () => {
        this.setState({
            count  : this.state.count - 1
        })
    }
    
  render() {
    const {count} = this.state
    return (
      <div className='bg-gray-500'>
        <p className='text-5xl font-bold mb-2'>Count : {count}</p>
        <button className='bg-green-400 px-4 py-2 mr-3 text-2xl' onClick={this.handleIncrement} disabled={count === 5 ? true : false}>+</button>
        <button className='bg-pink-400 px-4 py-2 mr-3 text-2xl'onClick={this.handleDecrement} disabled={ count === 0 ? true : false}>-</button>

        
      </div>
    )
  }
}
