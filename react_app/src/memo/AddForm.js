import React,  {Component} from 'react';
import { connect } from 'react-redux';
import { addMemo, AddMemo } from './Store';

class AddForm extends Component {
    input = {
        fontSize: "16pt",
        color: "#006",
        padding: "1px",
        margin: "5px 0px"
    }
    btn = {
        fontSize: "14pt",
        color: "#006",
        padding: "2px 10px"
    }

    constructor(props){
        super(props);
        this.state = {
            message:''
        }
        this.doChange = this.doChange.bind(this);
        this.doAction = this.doAction.bind(this);
    }

    doChange(e) {
        //入力されたした値を取得
        this.setState({
            message: e.target.value
        });
    }
    doAction(e) {
        e.preventDefault();
        //addMemoアクションクリエータでアクションを作成
        let action = addMemo(this.state.message);
        //dispatchで実行 Storeのレデューサーにtype:'ADD'のアクションが送られる
        this.props.dispatch(action);
        this.setState({
            message: ''
        });
    }

    render(){
        return (
            <div>
                message = {
                    fontSize: "16pt"
                    color: "#006",
                    margin: "5px 10px"
                    }
            <p style={this.message}>{this.props.message}</p>
            <form onSubmit={this.doAction}>
                <input type="text" size="40" onChange={this.doChange}
                    style={this.input} value={this.state.message} required />
                <input type="submit" style={this.btn} value="Add" />
            </form>
            </div>
        );
    }
}
export default connect((state)=>state)(AddForm)
