let stred = [2, 2]
led.plotBrightness(stred[0], stred[1], 155)
let rucicka = [[2, 1], [2, 0]]
function rozsvitBody() {
    basic.clearScreen()
    led.plotBrightness(stred[0], stred[1], 155)
    for (let bod of rucicka) {
        led.plot(Math.round(bod[0]), Math.round(bod[1]))
    }
}

rozsvitBody()
function otoc(vpravo: boolean) {
    let tempNula: number;
    for (let i = 0; i < 2; i++) {
        tempNula = rucicka[i][0]
        if (vpravo) {
            rucicka[i][0] = 0.70710678118 * (rucicka[i][0] - stred[0] - rucicka[i][1] + stred[1]) + stred[0]
            rucicka[i][1] = 0.70710678118 * (tempNula - stred[0] + rucicka[i][1] - stred[1]) + stred[1]
            console.logValue("0", rucicka[i][0])
            console.logValue("1", rucicka[i][1])
        } else {
            
        }
        
    }
    rozsvitBody()
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    otoc(true)
})
