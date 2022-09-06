basic.showNumber(7)
basic.pause(2000)
basic.forever(function () {
    basic.showNumber(99)
    basic.pause(500)
    basic.showNumber(gatorMoisture.moisture(AnalogPin.P0, gatorMoistureType.adcVal))
    basic.pause(500)
})
