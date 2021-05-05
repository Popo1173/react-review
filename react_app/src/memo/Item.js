import React,  {Component} from 'react';
import { connect } from 'react-redux';

class Item extends Component {
    th = {
        fontSize: "14pt",
        backgroundColor: "blue",
        color: "white",
        padding: "5px 10px",
        width: "50px"
    }
    td ={
        fontSize: "14pt",
        backgroundColor: "white",
        color: "darkblue",
        padding: "5px 10px",
        border: "1px solid lightblue",
        minwidth: "300px"
    }
    data = {
        fontSize: "14pt",
        backgroundColor: "white",
        color: "darkblue",
        padding: "5px 10px",
        border: "1px solid lightblue",
        minwidth: "80px"        
    }

    render(){
        //
        let d = this.props.value.created;
        //時刻を取得
        let f = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
        return(
            <tr>
                {/* inedx 通し番号を渡す */}
                <th style={this.th}>NO, {this.props.index}</th>
                {/* messageを渡す */}
                <td style={this.td}>{this.value.message}</td>
                <td style={this.data}>{f}</td>
            </tr>
        );
    }
}
//ストアの値は特に利用しないため、引数なし()
export default connect()(Item);