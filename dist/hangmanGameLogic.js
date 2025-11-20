export class HangmanGame {
    constructor(word) {
        this.gameWord = word.toUpperCase();
        this.blanked = "_".repeat(word.length);
        this.attempts = 0;
    }
    getWord() {
        return this.gameWord;
    }
    getAttempts() {
        return this.attempts;
    }
    getBlanked() {
        return this.blanked;
    }
    checkWin() {
        return this.blanked === this.gameWord;
    }
    isGameOver() {
        return this.attempts > 6;
    }
    attemp(c) {
        const char = c.toUpperCase();
        let found = false;
        const blankedArray = this.blanked.split('');
        for (let i = 0; i < this.gameWord.length; i++) {
            if (this.gameWord.charAt(i) === char) {
                found = true;
                blankedArray[i] = char;
            }
        }
        this.blanked = blankedArray.join('');
        if (!found) {
            this.attempts++;
        }
    }
}
