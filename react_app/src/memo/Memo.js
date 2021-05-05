import React, { Component } from 'react';
import { connect } from 'react-redux';

import Item from './Item'

class Memo extends Component {
    render(){
        let data;
        let n = 0;
        switch (this.props.mode) {
            //this.props.data 配列をmapで<Item />オブジェクトの配列に変換
            case 'default':
            data = this.props.data.map((value)=>(
                <Item key={value.message} value={value} index={n++} />
            ));
            break;

            //this.props.fdata 配列をmapで<Item />オブジェクトの配列に変換
            case 'find':
            data = this.props.fdata.map((value)=>(
                <Item key={value.message} value={value} index={n++} />                
            ));
            break;

            case 'delete':
            data = this.props.data.map((value)=>(
                <Item key={value.message} value={value} index={n++} />                
            ));
            break;

            default:
            data = this.props.data.map((value)=>(
                <Item key={value.message} value={value} index={n++} />                
            ));                
        }
        return(
            <table><tbody>{data}</tbody></table>
        );
    }
}
//コンポーネントをコネクト
export default connect((state)=>state) (Memo);