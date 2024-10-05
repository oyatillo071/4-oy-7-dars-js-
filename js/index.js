// 1-mashq Tasodifiy son generatsiya qilish
document.getElementById('first--btn').addEventListener('click', function () {
    document.getElementById('first--answer').innerHTML = Math.round(Math.random() * 100);

});




//  2-mashq. Sonning kvadrat ildizini topish
document.getElementById('second__btn').addEventListener('click', function () {

    let forSecondValue = parseInt(document.getElementById('second--value').value);

    if (forSecondValue > 0) {
        secondAnswer = Math.sqrt(forSecondValue);
        document.getElementById('second--answer').innerHTML = secondAnswer;
    } else {
        alert("Musbat son kiriting!");
    }

});

// let forFirstValue = parseInt(document.getElementById('user__input--value').value);


// 3-mashq Eng katta va eng kichik sonlarni aniqlash
document.getElementById('third__btn').addEventListener('click', function () {

    let thirdFirstInput = +prompt("1-sonni kiriting");
    let thirdSecondInput = +prompt("2-sonni kiriting");
    let thirdThirdInput = +prompt( "3-sonni kiriting");
    let thirdFourdInput = +prompt("4-sonni kiriting");
    let thirdFiveInput = +prompt("5-sonni kiriting");

    let thirdMax=Math.max(thirdFirstInput,thirdSecondInput,thirdThirdInput,thirdFourdInput,thirdFiveInput)
    let thirdMin=Math.min(thirdFirstInput,thirdSecondInput,thirdThirdInput,thirdFourdInput,thirdFiveInput)

    

    document.getElementById('third--max--answer').innerHTML = thirdMax;
    document.getElementById('third--min--answer').innerHTML = thirdMin;

});





//  4-mashq Sonni yuqoriga yoki pastga yaxlitlash

document.getElementById('four__btn').addEventListener('click', function () {
    let fourFirstValue = document.getElementById('four--value').value;
    let fourFirstAnswerValue = Math.floor(fourFirstValue);
    let fourSecondAnswerValue = Math.ceil(fourFirstValue);


    document.getElementById('four--first--answer').innerHTML = fourFirstAnswerValue;
    document.getElementById('four--second--answer').innerHTML = fourSecondAnswerValue;


});


//  5-mashq Aylana uzunligini hisoblash

document.getElementById('five__btn').addEventListener('click', function () {
    let fiveValue = document.getElementById('five--value').value;
    
    let fiveAnswer = 2 * Math.PI * fiveValue;

    document.getElementById('five--answer').innerHTML = fiveAnswer;
});


//  6-mashq Musbat yoki manfiy sonni aniqlash
document.getElementById('six__btn').addEventListener('click', function () {
    let sixValue = document.getElementById('six--value').value;
    document.getElementById('six--answer').innerHTML = sixValue > 0 ? "Musbat son" : "Manfiy son";
});


//  7-mashq Yoshi bo'yicha ruxsat berish
document.getElementById('seven__btn').addEventListener('click', function () {
    let sevenValue = document.getElementById('seven--value').value;
    document.getElementById('seven--answer').innerHTML = sevenValue >= 18 ? "Ruxsat etilgn" : "Ruxsat etilmagan";
});


//  8-mashq Son juft yoki toq ekanligini aniqlash
document.getElementById('eight__btn').addEventListener('click', function () {
    let eightValue = document.getElementById('eight--value').value;
    document.getElementById('eight--answer').innerHTML = eightValue % 2 == 0 ? "Juft son" : "Toq son";
});

// 9-mashq Juft va toq sonlarni aniqlash
document.getElementById('nine--btn').addEventListener('click', function () {


    let nineValue = "";

    for (let i = 1; i <= 20; i++) {

        if (i % 2 == 0 && i % 2 != 1) {
            nineValue += " " + i + " ";
        }
    }

    document.getElementById('nine--answer').innerHTML = nineValue;
});

//10-mashq  Faqat musbat sonlarni qo'shish
document.getElementById('ten--btn').addEventListener('click', function () {
    let tenValue = 0;
    let tenSum = 0;
    for (let i = 1; i < 11; i++) {

        tenValue = +prompt(i + "-sonni kiriting:");

        if (tenValue > 0) {
            tenSum += tenValue;
        }
    }
    document.getElementById("ten--answer").innerHTML = tenSum;
});



// 11-mashq Belgilangan oraliqdagi sonlarni chop etish

document.getElementById('eleven--btn').addEventListener('click', function () {
    let elevenValue = " ";

    for (let i = 0; i <= 100; i++) {

        if (i > 29 && i < 51) {
            elevenValue += " " + i + " ";

        }
    }

    document.getElementById('eleven--answer').innerHTML = elevenValue;
});

// 12 -mashq  Musbat yoki manfiy sonlarni sanash
document.getElementById('twelve--btn').addEventListener('click', function () {

    let twelveValue = 0;
    // negative qisqartmasi
    let twelveNgt = 0;
    // positive qisqartmasi
    let twelvePst = 0;
    for (let i = 1; i <= 15; i++) {

        twelveValue = +prompt(i + "-sonni kiriting");

        if (twelveValue >= 1) {
            twelvePst++;
        }

        if (twelveValue <= -1) {
            twelveNgt++;
        }
    }
    document.getElementById('twelve--ngt--answer').innerHTML = twelveNgt;
    document.getElementById('twelve--pst--answer').innerHTML = twelvePst;

});

// 13-mashq Faqat toq sonlar yig'indisi
document.getElementById('thirteen--btn').addEventListener('click', function () {
    let thirteenSum = 0;

    for (let i = 1; i <= 50; i++) {

        if (i % 2 == 1) {
            thirteenSum += i;
        }

    }
    document.getElementById('thirteen--answer').innerHTML = thirteenSum;
});


// 14-mashq Foydalanuvchi yoshiga qarab xabar chiqaring

document.getElementById('fourteen--btn').addEventListener('click', function () {
    let fourteenValue;
    let fourteenAnswer = " ";
    for (let i = 1; i <= 5; i++) {
        fourteenValue = +prompt(i + '-odamni yoshini kiriting');
        if (fourteenValue >= 18) {
            fourteenAnswer += " " + i + "-chi odam Voyaga yetgan" + "<br>";
        } else {
            fourteenAnswer += " " + i + "-chi odam Voyaga yetmagan" + "<br>";
        }

        document.getElementById('fourteen--answer').innerHTML = fourteenAnswer;
    }
});

// 15 -mashq Juft sonlarni sanash
document.getElementById('fiveteen--btn').addEventListener('click', function () {

    let fiveteenCounter = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            fiveteenCounter++;
        }
    }
    document.getElementById('fiveteen--answer').innerHTML = fiveteenCounter;
});

// 16-mashq Berilgan sonlar orasida 5 va 10 o'rtasida bo'lganlarini sanash
document.getElementById('sixteen--btn').addEventListener('click', function () {
    let sixteenValue;
    let sixteenCounter = 0;
    for (let i = 1; i <= 10; i++) {
        sixteenValue = +prompt(i + "-Sonni kiriting")
        if (sixteenValue >= 5 && sixteenValue <= 10) {
            sixteenCounter++;
        }
    }

    document.getElementById('sixteen--answer').innerHTML = sixteenCounter;
});



// 17-mashq Sonlarning faqat musbat bo'lganlarini ko'rsating
document.getElementById('seventeen--btn').addEventListener('click', function () {
    let seventeenValue;
    let seventeenAnswer = " ";

    for (i = 1; i <= 10; i++) {
        seventeenValue = +prompt(i + "-sonni kiriting:");
        if (seventeenValue > 0) {
            seventeenAnswer += " " + seventeenValue + " ";
        }

    }
    document.getElementById('seventeen--answer').innerHTML = seventeenAnswer;

});


// 18-mashq Berilgan sonlar orasida juft yoki manfiy bo'lganlarini sanash
document.getElementById('eightteen--btn').addEventListener('click', function () {
    let eighteenCounter = 0;
    let eighteenValue;
    for (let i = 0; i <= 15; i++) {
        eighteenValue = +prompt(i + "-Sonni kiriting:");
        if (eighteenValue % 2 == 0 || eighteenValue < 0) {
            eighteenCounter++;
        }
    }
    document.getElementById('eighteen--answer').innerHTML = eighteenCounter;
});

// 19-mashq  3 ga bo'linadigan sonlarni chop etish

document.getElementById('nineteen--btn').addEventListener('click', function () {
    let nineteenAnswer = " ";

    for (let i = 1; i <= 50; i++) {

        if (i % 3 == 0) {
            nineteenAnswer += " " + i + "  ";
        }

    }

    document.getElementById('nineteen--answer').innerHTML = nineteenAnswer;
});




// 20-mashq Berilgan raqamlar ichida faqat katta sonlarni ko'rsating
document.getElementById('twenty--btn').addEventListener('click', function () {
    let twentyAnswer = " ";
    let twentyValue;
    for (let i = 1; i < 10; i++) {
        twentyValue = +prompt(i + "-sonni kiriting");
        if (twentyValue >= 50) {
            twentyAnswer += " " + twentyValue + " ";
        }
    }

    document.getElementById('twenty--answer').innerHTML = twentyAnswer;
});





// 21-mashq Foydalanuvchi tomonidan kiritilgan sonlar orasida 0 ni topish
document.getElementById('twentyone--btn').addEventListener('click',function(){
let twentyoneValue;
let twentyoneAnswer="0 mavjud emas";
for (let i = 1; i = 10; i++) {

    twentyoneValue=+prompt(i+"-sonni kiriting:");
    
    if (twentyoneValue===0) {
        twentyoneAnswer="0 mavjud";
    }z
}

    document.getElementById('twentyone--answer').innerHTML=twentyoneAnswer;
});