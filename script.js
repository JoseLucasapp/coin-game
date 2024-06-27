let coin = document.querySelector('div.coin')
let inside = document.querySelector('div.inside')
let inside_childs = inside.children
let coin_side = document.querySelector('div.coin-side')

function change_visibility(el, visibility) {
    el.style.display = visibility
}

function start_by_side() {
    change_visibility(coin_side, 'none')
    change_visibility(coin, 'flex')
}

function start_by_coin() {
    change_visibility(coin, 'none')
    change_visibility(coin_side, 'block')
}

function head_or_tail() {
    return Math.round(Math.random())
}

function start(where_to_start) {
    let quant = 30
    let function_order = 'coin'
    if (where_to_start === 2) {
        function_order = 'coin-side'
        quant = 31
    }
    let interval = setInterval(() => {
        if (function_order === 'coin') {
            start_by_coin()
            function_order = 'coin-side'
        } else {
            start_by_side()
            function_order = 'coin'
        }
        head_or_tail()

        if (head_or_tail() === 1) {
            inside_childs[0].style.display = 'none'
            inside_childs[1].style.display = 'block'
        } else {
            inside_childs[1].style.display = 'none'
            inside_childs[0].style.display = 'block'
        }

        if (quant <= 1) {
            clearInterval(interval)
        }
        quant--
    }, 50, [function_order])
}

coin.addEventListener('click', () => {
    start(1)
})

coin_side.addEventListener('click', () => {
    start(2)
})