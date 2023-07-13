const answers = [{
    answer1: `"Mindfulness is the aware, balanced acceptance of the present experience. It isn't more complicated than that. It is opening to or receiving the present moment, pleasant or unpleasant, just as it is, without either clinging to it or rejecting it."`,
    picture: placeholder,
}, {
    answer2: `"Mindfulness is the aware, balanced acceptance of the present experience. It isn't more complicated than that. It is opening to or receiving the present moment, pleasant or unpleasant, just as it is, without either clinging to it or rejecting it."`,
    picture: placeholder,
}, {
    answer3: `"The practice of mindfulness allows us to become aware of the stream of thoughts and feelings that we usually identify with as our self."`,
    picture: placeholder,
}, {
    answer4: `"You can’t control how you feel. But you can always choose how you act."`,
    picture: placeholder,
}, {
    answer5: `"Awakening is not changing who you are, but discarding who you are not."`,
    picture: placeholder,
}, {
    answer6: `"Mindfulness is the key to transforming your relationship with life."`,
    picture: placeholder,
},

]

//Use query selector to target the the button. Then the quote and writer part so that the array text content can replace. 
let qbtn1 = document.querySelector("#Qbt1");
let qbtn2 = document.querySelector("#Qbtn2");
let qbtn3 = document.querySelector("#Qbtn3");
let qbtn4 = document.querySelector("#Qbtn4");
let qbtn5 = document.querySelector("#Qbtn5");
let qbtn6 = document.querySelector("#Qbtn6");
let answer1 = document.querySelector(".answer1");
let answer2 = document.querySelector(".answer2");
let answer3 = document.querySelector(".answer3");
let answer4 = document.querySelector(".answer4");
let answer5 = document.querySelector(".answer5");
let answer6 = document.querySelector(".answer6");
let writer = document.querySelector(".writer");

btn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;
    writer.innerHTML = quotes[random].writer;
})

