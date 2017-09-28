class TicTacToe {
    constructor() {
        this.game = [null, null, null, null, null, null, null, null, null];
        this.turn = 0;
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        if(this.turn % 2) return 'o';
        return 'x';
    }

    nextTurn(rowIndex, columnIndex) {
        if(!(this.game[rowIndex * 3 + columnIndex])) {
            this.game[rowIndex * 3 + columnIndex] = this.getCurrentPlayerSymbol();
            this.turn += 1;
        }
        this.isFinished();
    }

    isFinished() {
        /* Проверяем 3 в строке */
        for(var i = 0; i < 3; i++) {
            if(this.game[i * 3] === this.game[i * 3 + 1]
                && this.game[i * 3] === this.game[i * 3 + 2]
                && this.game[i * 3] !== null) {
                    this.winner = this.game[i * 3];
                    return true;
                }
        }
        /* Проверяем 3 в столбце */
        for(i = 0; i < 3; i++) {
            if(this.game[i] === this.game[i + 3]
               && this.game[i] === this.game[i + 6]
               && this.game[i] !== null) {
                   this.winner = this.game[i];
                   return true;
               }
        }
        /* Проверяем 3 по диагонали */
        if(this.game[0] === this.game[4]
            && this.game[0] === this.game[8]
            && this.game[0] !== null) {
                this.winner = this.game[0];
                return true;
            }
        if(this.game[2] === this.game[4]
            && this.game[2] === this.game[6]
            && this.game[2] !== null) {
                this.winner = this.game[2];
                return true;
            }
        /* Проверяем количество ходов */
        if(this.turn == 9) return true;

        return false;
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        return this.turn == 9;
    }

    isDraw() {
        if(this.turn == 9 && !this.winner) return true;
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.game[rowIndex * 3 + colIndex];
    }
}

module.exports = TicTacToe;
