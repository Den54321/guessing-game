class GuessingGame {
    constructor() {
        this.maxi = 0;
        this.mini = 0;
        this.oldmaxi;
    }
        setRange(min, max) {
            this.maxi = max;
            this.mini = min;
        }

        guess(){
            return   Math.ceil(this.mini +(this.maxi - this.mini)/2) ;
        }

        lower(){
            this.maxi = this.maxi - Math.floor((this.maxi - this.mini)/2) ;
        }

        greater(){

            this.mini = this.mini +(this.maxi - this.mini)/2;  
        }

} 
    

module.exports = GuessingGame;
