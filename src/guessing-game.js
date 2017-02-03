class GuessingGame {
    constructor() {
    	this.min = 0;
    	this.max = 0;
    	this.val = 0;
    }

    setRange(min, max) {
    	this.min = min;
    	this.max = max;
    }

    guess() {
    	this.val=Math.ceil((this.max+this.min)/2);
    	return this.val;
    }

    lower() {
    	this.max = this.guess();
    	
    }

    greater() {
    	this.min = this.guess();
    }
}

module.exports = GuessingGame;
