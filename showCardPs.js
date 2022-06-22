(async function () {

    const cards = [{
            link: 'https://tarasist.github.io/mango-travel/',
            image: 'bgMango',
            title: 'MangoTravel'
        },
        {
            link: 'https://tarasist.github.io/tourist-lviv/',
            image: '',
            title: 'Tourist lviv'
        },
    ];

    function renderCards(cards) {
        const cardsContainer = document.querySelector('.column');
        for (const card of cards) {
            cardsContainer.innerHTML += `
            <div class="card-container">
                <a href="${card.link}" target="_blank">
                    <div class="cardShow">
                        <div class="frontShow bg ${card.image}"></div>
                    </div>
                </a>
                <div class="cardShowTitle">
                    <p>${card.title}</p>
                </div>
            </div>
            `
        }
    }
    renderCards(cards);
})();