# react-review

## 論理 && 演算子によるインライン If 条件部分が true であれば、&& の後に書かれた要素を出力
```
{flg &&
    <p style={mg_a}>{message_true}</p>
}
```
## ? 条件演算子
```
{flg ?
    //true の場合
    <p style={mg_a}>{message_true}</p>:
    //false の場合                            
    <p style={mg_a}>{message_false}</p>
}
```
