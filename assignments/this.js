/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding - the value of 'this' will be the window/console Object
     in global scope
* 2. Implicit (automatic) Binding - the value of 'this' will be the object prior to the dot when a 
     function is called by a preceeding dot
* 3. New Binding - the value of 'this' will be the specific object that was created by 
     the constructor 
* 4. Explicit(forced) Binding - when .call, .apply or .bind is used the value of 'this' 
     will be explicitly defined by what the method is calling upon
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const food = function () {
    console.log(this);
    return('I love Pizza.')  // this === Window {method: function, etc.}
};
console.log(food());

// Principle 2
// code example for Implicit Binding
const printMsgObj = {
    food: 'Pizza',
    printMsgFunc: function (){
        console.log(this);
        return (`${this.food} is life!`);
    }
};
console.log(printMsgObj.printMsgFunc());

// Principle 3
// code example for New Binding
function storeMsg(we) {
    this.food = 'Pizza';
    this.we = we;
    this.printMsg = function (){
        console.log(this);
        return (`${this.we} love ${this.food}!`);
    };
};
 const changeWe = new storeMsg('We all absolutely'); // 'changeWe' eastablishes a new object of 'changeWe' with 'We all absolutely' as a value of 'we'
 console.log(changeWe.printMsg());

// Principle 4

// code example for Explicit Binding
function storeMsg(who) {
    this.sub = 'Javascript';
    this.who = who;
    this.printMsg = function (){
        console.log(this);
        return (`${this.who} love ${this.sub}!`);
    };
};
 const changeWho= new storeMsg('We'); // 'changeWe' eastablishes a new object of 'changeWe' with 'We all absolutely' as a value of 'we'
 const changeWho2 = new storeMsg('We all absolutely');
 
 console.log(changeWho.printMsg());
 console.log(changeWho.printMsg.call(changeWho2));
