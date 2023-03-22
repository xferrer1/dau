let Dau = 0
input.onButtonPressed(Button.A, function () {
    Dau = randint(0, 6)
    if (Dau == 1) {
        basic.showString("1")
    } else if (Dau == 2) {
        basic.showString("2")
    } else if (Dau == 3) {
        basic.showString("3")
    } else if (Dau == 4) {
        basic.showString("4")
    } else if (Dau == 5) {
        basic.showString("5")
    } else {
        basic.showString("6")
    }
})
basic.forever(function () {
	
})
