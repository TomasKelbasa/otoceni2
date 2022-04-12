stred = [2, 2]
led.plot_brightness(stred[0], stred[1], 155)

a = False
b = False

rucicka = [[2,0], [2,1]]

def rozsvitBody():
    basic.clear_screen()
    led.plot_brightness(stred[0], stred[1], 155)
    for bod in rucicka:
        led.plot(Math.round(bod[0]), Math.round(bod[1]))

rozsvitBody()

def otoc(vpravo):
    if vpravo:
        uhel = 0.785398163
    else:
        uhel = 5.49778714
    for i in range(0,2):
        tempNula = rucicka[i][0]
        rucicka[i][0] = Math.cos(uhel) * (rucicka[i][0] - stred[0]) - Math.sin(uhel) * (rucicka[i][1] - stred[1]) + stred[0]
        rucicka[i][1] = Math.sin(uhel) * (tempNula - stred[0]) + Math.cos(uhel) * (rucicka[i][1] - stred[1]) + stred[1]
        console.log_value("0", rucicka[i][0])
        console.log_value("1", rucicka[i][1])
    rozsvitBody()

def on_button_pressed_a():
    global a,b
    a = True
    b = False
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global a,b
    a = False
    b = True
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    if a:
        otoc(True)
    if b:
        otoc(False)  
    basic.pause(100)
forever(on_forever)