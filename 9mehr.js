function food(name, type, price, deliveryTime){
    this.name = name;
    this.type = type;
    this.price = price;
    this.deliveryTime = deliveryTime;
    this.rate = (Math.random() * 5);
    this.comments = [];
    this.isReady = false;
    this.Order = function isPremiumUser(x){
        if (x){
            console.log(0.8*price, this.rate)
        }
        else {
            console.log(price, this.rate)
        }
    }
}
function comment(author, text){
    this.author = author;
    this.date = new Date();
    this.rate = 0;
    this.text = text;
}
const myFood = new food('rice', 'not-fast', 55000, 25);
const Comment = new comment('Sajad', 'Very Good');
const setRate = arr => {
    return arr.reduce((sum, item) => sum + item, 0) / arr.length;
}
myFood.comments.push(Comment);
console.log(myFood, Comment)
myFood.Order(true);
console.log(setRate([1, 2, 3, 4]));
