import * as React from 'react';
import { ITicTacProps } from './ITicTacProps';
import styles from "./TicTac.module.scss";
import Swal from 'sweetalert2'
interface IState {
  board: string[];
  xIsNext: boolean;
}

export default class TicTacToe extends React.Component<ITicTacProps, IState> {
  constructor(props: ITicTacProps) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(index: number) {
    const board = this.state.board.slice();
    if (this.calculateWinner(board) || board[index]) {
      return;
    }
    board[index] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      board: board,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(index: number) {
    return (
      <button className={styles.square} onClick={() => this.handleClick(index)}>
        {this.state.board[index]}
      </button>
    );
  }

  calculateWinner(board: string[]): string | null {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  resetGame() {
    this.setState({
      board: Array(9).fill(null),
      xIsNext: true,
    });
    Swal.fire({
      title: 'Restart Game',
      text: 'Are you sure you want to restart the game?',
      icon: 'question'})
  }

  render() {
    const winner = this.calculateWinner(this.state.board);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className={styles.game}>
        <div className={styles.status}>{status}</div>
        <div className={styles.board}>
          <div className={styles.boardRow}>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className={styles.boardRow}>
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className={styles.boardRow}>
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
        <br></br>
        <button className={styles.restartButton} onClick={() => this.resetGame()}>Restart Game</button>
      </div>
    );
  }
}
