stred = [2, 2]
led.plot_brightness(stred[0], stred[1], 155)

rucicka = [[2,1], [2,0]]

def rozsvitBody():
    basic.clear_screen()
    led.plot_brightness(stred[0], stred[1], 155)
    for bod in rucicka:
        led.plot(Math.round(bod[0]), Math.round(bod[1]))

rozsvitBody()

def otoc(vpravo):
    for i in range(0, 2):
        tempNula = rucicka[i][0]
        if vpravo:
            rucicka[i][0] = 0.70710678118 * (rucicka[i][0] - stred[0] - rucicka[i][1] + stred[1]) + stred[0]
            rucicka[i][1] = 0.70710678118 * (tempNula - stred[0] + rucicka[i][1] - stred[1]) + stred[1]
            console.log_value("0", rucicka[i][0])
            console.log_value("1", rucicka[i][1])
        else:
            pass
    rozsvitBody()

def on_button_pressed_a():
    otoc(True)
input.on_button_pressed(Button.A, on_button_pressed_a)