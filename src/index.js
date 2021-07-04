import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    render() {
        return (
            <button
                className="square"
                onClick={() => {this.props.onClick()}} /* use the onClick() method provided by the Board*/
            >
                {this.props.value}
            </button>
        );
    }
    /*每一个 Square 被点击时，Board 提供的 onClick 函数就会触发。我们回顾一下这是怎么实现的：
    向 DOM 内置元素 <button> 添加 onClick prop，让 React 开启对点击事件的监听。
    当 button 被点击时，React 会调用 Square 组件的 render() 方法中的 onClick 事件处理函数。
    事件处理函数触发了传入其中的 this.props.onClick() 方法。这个方法是由 Board 传递给 Square 的。
    由于 Board 把 onClick={() => this.handleClick(i)} 传递给了 Square，所以当 Square 中的事件处理函数触发时，其实就是触发的 Board 当中的 this.handleClick(i) 方法。
    现在我们还尚未定义 handleClick() 方法，所以代码还不能正常工作。如果此时点击 Square，你会在屏幕上看到红色的错误提示，提示内容为：“this.handleClick is not a function”
*/
}

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        }
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />);
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares: squares});
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
