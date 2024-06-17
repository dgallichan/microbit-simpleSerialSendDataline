basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    # # # # #
    `)
let comment = "It looks like the 'forever' loop runs at ~24 ms"
basic.forever(function () {
    serial.writeLine("" + convertToText(control.millis()) + "," + convertToText(input.acceleration(Dimension.X)) + "," + convertToText(input.acceleration(Dimension.Y)) + "," + convertToText(input.acceleration(Dimension.Z)))
})
