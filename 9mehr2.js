function food(name, type, price, deliveryTime){
    return{
        name,
        type,
        price,
        deliveryTime,
        rate: [],
        comments: [],
        isReady: false,
        Order: function isPremiumUser(x){
            if (x){
                console.log(0.8*price, this.rate)
            }
            else {
                console.log(price, this.rate)
            }
        }
    }
}
function comment(author, text){
    return{
        author,
        date: new Date(),
        rate: [],
        text,
    }
}

const myFood = food('rice', 'not-fast', 55000, 25);
const Comment = comment('Sajad', 'Very Good');
const setRate = arr => {
    return arr.reduce((sum, item) => sum + item, 0) / arr.length;
}
myFood.comments.push(Comment);
console.log(myFood)
myFood.Order(true);
console.log(setRate([1, 2, 3, 4]));