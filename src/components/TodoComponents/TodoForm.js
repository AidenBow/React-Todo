import React from 'react';



class TodoForm extends React.Component {
    
    constructor() {
        super();
        this.state = {
            itemName: ""
        };
    };

    handleChanges = (e) => {
        this.setState({itemName: e.target.value});
    };

    handleSubmit = (e) => {
        this.props.addGame(e, this.state.itemName)
        console.log("new game added: " + this.state.itemName);
        this.setState({itemName: ""});
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    name="item"
                    value={this.state.itemName}
                    onChange={this.handleChanges}
                />
                <button>+</button>
            </form>
        );
    }
}

export default TodoForm;