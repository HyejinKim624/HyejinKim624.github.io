const quotes = [
    {
        quote: "순간들을 소중히 여기다 보면, 긴 세월은 저절로 흘러간다.",
        author: "마리아 에지워스"
    },
    {
        quote: "낙관적인 태도는 목표 달성에 필수불가결한 요소이며, 용기와 진정한 발전의 토대다.",
        author: "로이드 알렉산더"
    },
    {
        quote: "다른 누군가가 할 수 있거나 인생에서 이룰 수 있는 일이라면, 나 역시 그럴 수 있다.",
        author: "토마스 빌로드"
    },
    {
        quote: "한때는 불가능하다고 생각한 것이 결국에는 가능한 것이 된다.",
        author: "K.오브라이언"
    },
    {
        quote: "한 번도 실수한 적이 없는 사람은 한 번도 새로운 것에 도전해 본 적이 없는 사람이다.",
        author: "알버트 아인슈타인"
    },
    {
        quote: "시작하기 위해서 위대해질 필요는 없지만, 위대해지려면 시작부터 해야 한다.",
        author: "래스 브라운"
    },
    {
        quote: "자신을 화나게 했던 행동을 다른 사람에게 행하지 말라.",
        author: "소크라테스"
    },
    {
        quote: "미래에 사로잡혀있으면 현재를 있는 그대로 볼 수 없을 뿐 아니라 과거까지 재구성하려 들게 한다.",
        author: "에릭 호퍼"
    },
    {
        quote: "처음부터 겁먹지 말자. 막상 가면 아무것도 아닌 게 세상에는 참 많다. 첫걸음을 떼기 전에는 앞으로 나아갈 수 없고, 뛰기 전에 이길 수 없다.",
        author: "김연아"
    },
    {
        quote: "과거를 지배하는 자가 마래를 지배하며 현재를 지배하는 자가 과거를 지배한다.",
        author: "조지 오웰"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;