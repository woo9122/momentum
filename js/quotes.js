const quotes = [
    {
        quote: "꿈을 이루고자 하는 용기만 있다면 모든 꿈을 이룰 수 있다",
        author: "월트 디즈니"
    },
    {
        quote: "웃음이 없는 하루는 버린 하루다.",
        author: "찰리 채플린"
    },
    {
        quote: "너는 머뭇거릴 수 있지만, 시간은 그렇지 않다.",
        author: "벤자민 프랭클린"
    },
    {
        quote: "영원히 살 것처럼 꿈꾸고 오늘 죽을 것처럼 살아라",
        author: "제임스 딘"
    },
    {
        quote: "‘지금이 최악이야’라고 말할 수 있는 한 지금이 최악은 아니다.",
        author: "윌리엄 셰익스피어"
    },
    {
        quote: "나약한 태도는 그 사람 자체도 나약하게 만든다.",
        author: "알버트 아인슈타인"
    },
    {
        quote: "태도는 사소한 것이지만 그것이 만드는 차이는 엄청나다.",
        author: "윈스턴 처칠"
    },
    {
        quote: "절대로 고개를 떨구지 말라. 고개를 꼿꼿이 치켜 들고 두 눈으로 똑똑히 세상을 보라.",
        author: "헬렌 켈러"
    },
    {
        quote: "새로운 일에 도전하다 보면 가끔 실수를 저지를 수 있다. 자신의 실수를 빨리 인정하고 다른 시도에 집중하는 것이 최선이다.",
        author: "스티브 잡스"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child"); 

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;