export class HangmanGame{
    private gameWord: string;
    private blanked: string;
    private attempts: number;


    constructor(word:string){
        this.gameWord = word.toUpperCase();
        this.blanked = "_".repeat(word.length);
        this.attempts = 0;
    }

    getWord(): string{
        return this.gameWord;
    }

    getAttempts(): number{
        return this.attempts;
    }

    getBlanked():string{
        return this.blanked;
    }

    checkWin():boolean{
        return this.blanked === this.gameWord;
    }

    isGameOver() {
    return this.attempts > 6;
    }

 

    attemp(c: string) {
    const char = c.toUpperCase();
    let found = false;
    const blankedArray = this.blanked.split('');

    for (let i = 0; i < this.gameWord.length; i++){
        if (this.gameWord.charAt(i) === char){
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




