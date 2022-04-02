import React from 'react';
// import classNames from 'classnames';

class Button extends React.Component {
    componentDidMount(){
        console.log('Кнопка отобразилась')
    }
    render() { 
        console.log(this.props)
        return(
            <button className = {`button ${this.props.outline ? 'button--outline' : ''}`}>{this.props.children}</button>
        );
    
    }
}

// function Button(props) {
//     return (
//         <button
//          className = {classNames('button', {
//             'button--outline' :  props.outline,
//          })}>  
//          {props.children}
//          </button>
//     );
// }

export default Button;