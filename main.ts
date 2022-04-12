let stred = [2, 2]
led.plotBrightness(stred[0], stred[1], 155)
let a = false
let b = false
let rucicka = [[2, 0], [2, 1]]
function rozsvitBody() {
    basic.clearScreen()
    led.plotBrightness(stred[0], stred[1], 155)
    for (let bod of rucicka) {
        led.plot(Math.round(bod[0]), Math.round(bod[1]))
    }
}

rozsvitBody()
function otoc(vpravo: boolean) {
    let uhel: number;
    let tempNula: number;
    if (vpravo) {
        uhel = 0.785398163
    } else {
        uhel = 5.49778714
    }
    
    for (let i = 0; i < 2; i++) {
        tempNula = rucicka[i][0]
        rucicka[i][0] = Math.cos(uhel) * (rucicka[i][0] - stred[0]) - Math.sin(uhel) * (rucicka[i][1] - stred[1]) + stred[0]
        rucicka[i][1] = Math.sin(uhel) * (tempNula - stred[0]) + Math.cos(uhel) * (rucicka[i][1] - stred[1]) + stred[1]
        console.logValue("0", rucicka[i][0])
        console.logValue("1", rucicka[i][1])
    }
    rozsvitBody()
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    a = true
    b = false
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    a = false
    b = true
})
forever(function on_forever() {
    if (a) {
        otoc(true)
    }
    
    if (b) {
        otoc(false)
    }
    
    basic.pause(100)
})
