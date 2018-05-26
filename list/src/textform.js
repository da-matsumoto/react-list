import React from 'react';

export class TextForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = { value: '' }
    }
    doChange (e) {
        const newValue = e.target.value
        this.setState({value: newValue})
    }
    doSubmit (e) {
        window.alert('値を送信:' + this.state.value)
        e.preventDefault()
    }
    render () {
        const doSubmit = (e) => this.doSubmit(e)
        const doChange = (e) => this.doChange(e)
        return (
            <form onSubmit = {doSubmit}>
              <input type='submit' value="送信" />
            </form>
        )
    }
}

export default TextForm