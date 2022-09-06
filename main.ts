// Gib deinen Code hier ein
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showLeds(`
        . # . . .
        . # # . .
        . . # . .
        . . . . .
        # # # # #
        `)
    basic.pause(100)
    basic.showNumber(gatorMoisture.moisture(AnalogPin.P0, gatorMoistureType.adcVal))
    basic.pause(100)
})
