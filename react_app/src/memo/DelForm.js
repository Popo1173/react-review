import React,  {Component} from 'react';
import { connect } from 'react-redux';
import { deleteMemo } from './Store';

class  DelForm extends Component {
    input = {
        fontSize: "12pt",
        color: "#006",
        padding: "1px",
        margin: "5px 0"
    }
    btn = {
        fontSize: "10pt",
        color: "#006",
        padding: "2px 10px"
    }

    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
        this.doChange = this.doChange.bind(this);
        this.doAction = this.doAction.bind(this);
    }

    doChange(e) {
        //入力されたした値を取得
        this.setState({
            number: e.target.value
        });
    }
    doAction(e) {
        e.preventDefault();
        //addMemoアクションクリエータでアクションを作成
        let action = deleteMemo(this.state.number);
        //dispatchで実行 Storeのレデューサーにtype:'ADD'のアクションが送られる
        this.props.dispatch(action);
        this.setState({
            number: 0
        });
    } 

    render(){
        let n = 0;
        let items = this.props.data.map((value)=>(
            <option key={n} value={n++} >{value.message.substring(0,10)}</option>
        ));
        return(
            <div>
                <form onSubmit={this.doAction}>
                    <select onChange={this.doChange} defaultValue="-1" style={this.input}>
                        {items}
                    </select>
                    <input type="submit" style={this.btn} value="Del" />
                </form>
            </div>
        )
    }
}//
export default connect((state)=>state)(DelForm)