document.addEventListener("DOMContentLoaded", () => {
    const cardArray = [{
            name: "chick",
            img: "images/chick.png",
        },
        {
            name: "chick",
            img: "images/chick.png",
        },
        {
            name: "koala",
            img: "images/koala.png",
        },
        {
            name: "koala",
            img: "images/koala.png",
        },
        {
            name: "fox",
            img: "images/fox.png",
        },
        {
            name: "fox",
            img: "images/fox.png",
        },
        {
            name: "pig",
            img: "images/pig.png",
        },
        {
            name: "pig",
            img: "images/pig.png",
        },
        {
            name: "whale",
            img: "images/whale.png",
        },
        {
            name: "whale",
            img: "images/whale.png",
        },
    ];

    cardArray.sort(() => 0.5 - Math.random());

    const gameArea = document.querySelector(".gameArea");
    const scoreArea = document.querySelector(".score");

    let cardsChosenId = [];
    let cardsChosen = [];
    let score = 0;

    console.log(score);
    console.log(scoreArea);

    function checkForMatch() {
        const cards = document.querySelectorAll("img");
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (optionTwoId == optionOneId) {
            cards[optionOneId].setAttribute("src", "images/blank.png");
            cards[optionTwoId].setAttribute("src", "images/blank.png");
            alert("Aynı kartı iki kere seçemezsiniz !");
        } else if (cardsChosen[0] === cardsChosen[1]) {
            cards[optionOneId].setAttribute("src", "images/white.png");
            cards[optionTwoId].setAttribute("src", "images/white.png");
            cards[optionOneId].removeEventListener("click", flipCard);
            cards[optionTwoId].removeEventListener("click", flipCard);
            score++;
            scoreArea.innerText = score;
            if (score === 5) {
                scoreArea.innerText = "Oyunu tamamladınız !";
                document.body.style.backgroundColor = "#39B54A";
                setTimeout(() => {
                    location.reload();
                }, 2000);
            } else {
                alert("Tebrikler Hafızanız Gayet İyi!");
            }
        } else {
            cards[optionOneId].setAttribute("src", "images/blank.png");
            cards[optionTwoId].setAttribute("src", "images/blank.png");
            alert("Göz Doktoruna Görünün :D");
        }
        cardsChosenId = [];
        cardsChosen = [];
    }

    function flipCard() {
        const cardId = this.getAttribute("data-id");
        cardsChosenId.push(cardId);
        cardsChosen.push(cardArray[cardId].name);
        this.setAttribute("src", cardArray[cardId].img);
        if (cardsChosen.length == 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement("img");
            card.setAttribute("src", "images/blank.png");
            card.setAttribute("class", "blank");
            card.setAttribute("data-id", i);
            gameArea.appendChild(card);
            card.addEventListener("click", flipCard);
        }
    }
    createBoard();
});