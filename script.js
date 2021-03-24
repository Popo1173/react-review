let dom = document.querySelector('#root');
let element  =  React.createElement(
    'div', {}, [
        React.createElement(
            'h2', {}, "Hellow"
        ),
        React.createElement(
            'h3', {}, "React  sample page"
        ),
        React.createElement(
            'ul', {}, [
                React.createElement(
                    'li', {}, "FirstItem"
                ),
                React.createElement(
                    'li', {}, "SecondItem"
                ),
                React.createElement(
                    'li', {}, "ThirdItem"
                ),
            ]
        ),
    ]);
ReactDOM.render(element, dom);
