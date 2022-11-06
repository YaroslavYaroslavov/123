const coin = document.querySelector('.coin')

const tossCoin = () => {
    const randomNumber = Math.random()
    if (randomNumber > 0.5) return 'Орел'
    else return 'Решка'
}

coin.addEventListener('click', () => { coin.textContent = tossCoin() })