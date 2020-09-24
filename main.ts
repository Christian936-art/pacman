input.onButtonPressed(Button.A, function () {
    hero.turn(Direction.Left, 90)
})
input.onButtonPressed(Button.AB, function () {
    hero.move(1)
})
input.onButtonPressed(Button.B, function () {
    hero.turn(Direction.Left, 90)
})
let hero: game.LedSprite = null
music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Forever)
let set_food = game.createSprite(2, 2)
set_food = game.createSprite(4, 4)
set_food = game.createSprite(0, 0)
basic.forever(function () {
    let sprite: game.LedSprite = null
    let ghost: game.LedSprite = null
    if (hero.isTouching(ghost)) {
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Forever)
        game.gameOver()
    }
    if (hero.isTouching(ghost)) {
        let food: game.LedSprite = null
        food.change(LedSpriteProperty.X, randint(0, 4))
        food.change(LedSpriteProperty.Y, randint(0, 4))
    }
    if (ghost < hero) {
        sprite.change(LedSpriteProperty.X, 1)
        basic.pause(600)
    } else if (ghost > hero) {
        sprite.change(LedSpriteProperty.X, -1)
        basic.pause(600)
    } else if (false) {
    	
    } else if (false) {
    	
    }
})
