enum ActionKind {
    Walking,
    Idle,
    Jumping,
    WalkUp,
    WalkDown,
    WalkRight,
    WalkLeft,
    IdleDown,
    IdleUp,
    IdleRight,
    IdleLeft,
    AttackDown,
    AttackUp,
    AttackLeft,
    AttackRight,
    SkellyIdle,
    SkellyRight,
    SkellyLeft
}
namespace SpriteKind {
    export const Chest = SpriteKind.create()
    export const CollectibleRare = SpriteKind.create()
    export const HardEnemy = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const Button = SpriteKind.create()
    export const ChestLv2 = SpriteKind.create()
    export const Decoration = SpriteKind.create()
    export const boss2 = SpriteKind.create()
    export const ChestLV3 = SpriteKind.create()
    export const House = SpriteKind.create()
    export const PlayerHouse = SpriteKind.create()
    export const AttackA = SpriteKind.create()
    export const Bat = SpriteKind.create()
    export const ShoppeGuy = SpriteKind.create()
    export const Cobra = SpriteKind.create()
    export const Blacksmith = SpriteKind.create()
    export const HouseDecoration = SpriteKind.create()
    export const Boss1 = SpriteKind.create()
    export const KoblinArrow = SpriteKind.create()
    export const BowDrop = SpriteKind.create()
    export const Arrows = SpriteKind.create()
    export const EnemyCoin = SpriteKind.create()
    export const QuestGirl = SpriteKind.create()
}
namespace StatusBarKind {
    export const Health2 = StatusBarKind.create()
    export const BatHealth = StatusBarKind.create()
    export const CobraHealth = StatusBarKind.create()
    export const BowkoblinBossHealth = StatusBarKind.create()
}
function SpawnBoss1 () {
    game.splash("A Boss Bokoblin has appeared!")
    BokoblinBoss = sprites.create(img`
        ..............ffff.ffff..ff........
        ...........fffe444f4444ffeef.......
        ..........fe44444444444f4444f......
        .........f4444444444444f44444f.....
        .........f44444444444444f44444f....
        ........f4eee44444eeee4ee444444f...
        .......f44444ff44444444ef44444ef...
        ......fffffffffffffffffffef444f....
        .......f5ff5f44f55fff55feeefef.....
        .......f5f45f444f5ff45f4eeeef......
        .......f5555f4444f555f44eeeef......
        ......fdffff444444fff444eeee8f.....
        ......fddddd444444444444eeee88f....
        ...ff.fddbddd4444444444444ee888f...
        ..feef.fdbdbdd4444444444444ff884f..
        ..feef..fbdbdd441111444444f888444f.
        ..feefffffffddee1111eeeeffe888f444f
        ..ffeef.....ffffffffffff4e8888.f44f
        ...feef....ff44f88e444444e8888.f44f
        ...ffeff..ff444f88e44444ee8888.f44f
        ....feef.ff44fff88e444444ee888f4444
        ....ffef.f44fff88e44dddd4eee88fe444
        .....feef444ff4ee44ddddddeeeeef4444
        ......fff44ff444444dfddfdd4eeeffe4e
        .........4fff888888dfddfdd88888ffff
        .........ff.f888888dddddd8ff888ff..
        ...........f4488888ffddddf..f884f..
        ..........f44444fff..fddf....f444f.
        ..........fee44ff....fff.....fee4f.
        ...........ffff...............fff..
        `, SpriteKind.Boss1)
    tiles.placeOnTile(BokoblinBoss, tiles.getTileLocation(58, 25))
    BokoblinBoshealth = statusbars.create(20, 4, StatusBarKind.BowkoblinBossHealth)
    BokoblinBoshealth.attachToSprite(BokoblinBoss)
    BokoblinBoshealth.max = 800
    BokoblinBoshealth.value = 800
    BokoblinBoshealth.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    BokoblinBoshealth.setBarBorder(1, 15)
    BokoblinBoss.follow(Dungeoneer, 70)
}
controller.combos.attachCombo("BB", function () {
    controller.combos.setExtendedComboMode(false)
    game.setDialogCursor(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    game.showLongText("Lv: " + convertToText(Level), DialogLayout.Bottom)
    game.showLongText("Max Hearts:" + convertToText(Level + 2), DialogLayout.Bottom)
    game.showLongText("EXP:" + Experience.value + "/" + Experience.max, DialogLayout.Bottom)
    game.setDialogCursor(img`
        . . . . . . . . . . . . . f f f 
        . . . . . . . . . . . . f d d f 
        . . . . . . . . . . . f d d d f 
        . . . . . . . . . . f d d d f . 
        . . . . . . . . . f d d d f . . 
        . . . . . . . . f d d d f . . . 
        f . . . . . . f d d d f . . . . 
        e f . . . . f d d d f . . . . . 
        f e f . . f d d d f . . . . . . 
        . f e f f d d d f . . . . . . . 
        . . f e f d d f . . . . . . . . 
        . . . f e f f . . . . . . . . . 
        . . f e f e f . . . . . . . . . 
        . f e f . f e f . . . . . . . . 
        f e f . . . f e f . . . . . . . 
        f f . . . . . f e f . . . . . . 
        `)
    game.showLongText("" + convertToText(DMG) + " DMG", DialogLayout.Bottom)
    if (Level > 0) {
        game.setDialogCursor(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `)
        game.showLongText("SKELLY: HP: 30 DMG: 1 EXP: 35 BIOME: GRASSLANDS", DialogLayout.Bottom)
    }
    if (Level > 1) {
        game.setDialogCursor(img`
            . . f f f . . . . . . . . . . . 
            f f f c c . . . . . . . . f f f 
            f f c c c . c c . . . f c b b c 
            f f c 3 c c 3 c c f f b b b c . 
            f f c 3 b c 3 b c f b b c c c . 
            f c b b b b b b c f b c b c c . 
            c c 1 b b b 1 b c b b c b b c . 
            c b b b b b b b b b c c c b c . 
            c b 1 f f 1 c b b c c c c c . . 
            c f 1 f f 1 f b b b b f c . . . 
            f f f f f f f b b b b f c . . . 
            f f 2 2 2 2 f b b b b f c c . . 
            . f 2 2 2 2 2 b b b c f . . . . 
            . . f 2 2 2 b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        game.showLongText("BAT: HP: 90 DMG: 2 EXP: 50 BIOME: SMALL DUNGEON", DialogLayout.Bottom)
    }
    if (Level > 3) {
        game.setDialogCursor(img`
            . . . . . c c c c c c c . . . . 
            . . . . c 6 7 7 7 7 7 6 c . . . 
            . . . c 7 c 6 6 6 6 c 7 6 c . . 
            . . c 6 7 6 f 6 6 f 6 7 7 c . . 
            . . c 7 7 7 7 7 7 7 7 7 7 c . . 
            . . f 7 8 1 f f 1 6 7 7 7 f . . 
            . . f 6 f 1 f f 1 f 7 7 7 f . . 
            . . . f f 2 2 2 2 f 7 7 6 f . . 
            . . c c f 2 2 2 2 7 7 6 f c . . 
            . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
            c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
            f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
            f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
            f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
            . f 6 1 1 1 1 1 6 6 6 6 c . . . 
            . . f f c c c c c c c c . . . . 
            `)
        game.showLongText("COBRA: HP: 200 DMG: 3 EXP: 80 BIOME: DARK FOREST", DialogLayout.Bottom)
    }
    if (Quests == 0) {
    	
    }
    if (Quests == 1) {
        game.setDialogCursor(img`
            . f f f . f f f f . f f f . 
            f f f f f c c c c f f f f f 
            f f f f b c c c c b f f f f 
            f f f c 3 c c c c 3 c f f f 
            . f 3 3 c c c c c c 3 3 f . 
            . f c c c c 4 4 c c c c f . 
            . f f c c 4 4 4 4 c c f f . 
            . f f f b f 4 4 f b f f f . 
            . f f 4 1 f d d f 1 4 f f . 
            . . f f d d d d d d f f . . 
            . . e f e 4 4 4 4 e f e . . 
            . e 4 f b 3 3 3 3 b f 4 e . 
            . 4 d f 3 3 3 3 3 3 c d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . f f f f f f . . . . 
            . . . . f f . . f f . . . . 
            `)
        game.showLongText("QUEST:" + convertToText(QuestCount) + "/15 Enemies Defeated", DialogLayout.Bottom)
    }
    if (Quests == 2) {
        game.setDialogCursor(img`
            . f f f . f f f f . f f f . 
            f f f f f c c c c f f f f f 
            f f f f b c c c c b f f f f 
            f f f c 3 c c c c 3 c f f f 
            . f 3 3 c c c c c c 3 3 f . 
            . f c c c c 4 4 c c c c f . 
            . f f c c 4 4 4 4 c c f f . 
            . f f f b f 4 4 f b f f f . 
            . f f 4 1 f d d f 1 4 f f . 
            . . f f d d d d d d f f . . 
            . . e f e 4 4 4 4 e f e . . 
            . e 4 f b 3 3 3 3 b f 4 e . 
            . 4 d f 3 3 3 3 3 3 c d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . f f f f f f . . . . 
            . . . . f f . . f f . . . . 
            `)
        game.showLongText("QUEST COMPLETED: Go and talk to Sophie for your reward.", DialogLayout.Bottom)
    }
})
sprites.onOverlap(SpriteKind.BowDrop, SpriteKind.Player, function (sprite, otherSprite) {
    BowOn()
})
statusbars.onZero(StatusBarKind.BowkoblinBossHealth, function (status) {
    music.magicWand.play()
    Experience.value += 400
    BokoblinBoss.destroy(effects.spray, 500)
    info.changeScoreBy(20)
    Boss1Drop = sprites.create(img`
        . . . . . . . . . e e e . . . . 
        . . . . . . . . e e . d . . . . 
        . . . . . . . e . . . d . . . . 
        . . . . . . e . . . . d . . . . 
        . . . . . e e . . . . d . . . . 
        . . . . . e . . . . . d . . . . 
        . . . . . e . . . . . d . . . . 
        . . . . . e . . . . . d . . . . 
        . . . . . e . . . . . d . . . . 
        . . . . e e . . . . . d . . . . 
        . . . . e e . . . . . d . . . . 
        . . . . . e . . . . . d . . . . 
        . . . . . e e . . . . d . . . . 
        . . . . . . e . . . . d . . . . 
        . . . . . . . e . . . d . . . . 
        . . . . . . . . e e e e . . . . 
        `, SpriteKind.BowDrop)
    tiles.placeOnTile(Boss1Drop, tiles.getTileLocation(58, 25))
})
function CoinSpawn () {
    for (let index = 0; index < 60; index++) {
        Coin = sprites.create(img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `, SpriteKind.CollectibleRare)
        tiles.placeOnTile(Coin, tiles.getTileLocation(randint(0, 69), randint(0, 34)))
        for (let value of sprites.allOfKind(SpriteKind.CollectibleRare)) {
            value.x += 1
            value.y += 1
            animation.runImageAnimation(
            value,
            [img`
                . . b b b b . . 
                . b 5 5 5 5 b . 
                b 5 d 3 3 d 5 b 
                b 5 3 5 5 1 5 b 
                c 5 3 5 5 1 d c 
                c d d 1 1 d d c 
                . f d d d d f . 
                . . f f f f . . 
                `,img`
                . . b b b . . . 
                . b 5 5 5 b . . 
                b 5 d 3 d 5 b . 
                b 5 3 5 1 5 b . 
                c 5 3 5 1 d c . 
                c 5 d 1 d d c . 
                . f d d d f . . 
                . . f f f . . . 
                `,img`
                . . . b b . . . 
                . . b 5 5 b . . 
                . b 5 d 1 5 b . 
                . b 5 3 1 5 b . 
                . c 5 3 1 d c . 
                . c 5 1 d d c . 
                . . f d d f . . 
                . . . f f . . . 
                `,img`
                . . . b b . . . 
                . . b 5 5 b . . 
                . . b 1 1 b . . 
                . . b 5 5 b . . 
                . . b d d b . . 
                . . c d d c . . 
                . . c 3 3 c . . 
                . . . f f . . . 
                `,img`
                . . . b b . . . 
                . . b 5 5 b . . 
                . b 5 1 d 5 b . 
                . b 5 1 3 5 b . 
                . c d 1 3 5 c . 
                . c d d 1 5 c . 
                . . f d d f . . 
                . . . f f . . . 
                `,img`
                . . . b b b . . 
                . . b 5 5 5 b . 
                . b 5 d 3 d 5 b 
                . b 5 1 5 3 5 b 
                . c d 1 5 3 5 c 
                . c d d 1 d 5 c 
                . . f d d d f . 
                . . . f f f . . 
                `],
            100,
            true
            )
        }
    }
}
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Dungeoneer)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Horizontal == 1) {
        while (controller.A.isPressed()) {
            AttackA = sprites.create(assets.image`SwordA`, SpriteKind.AttackA)
            AttackA.setPosition(Dungeoneer.x + 20, Dungeoneer.y)
            controller.moveSprite(AttackA)
            music.knock.play()
            animation.setAction(Dungeoneer, ActionKind.AttackRight)
            animation.runImageAnimation(
            AttackA,
            [img`
                .222222.........
                ..222222........
                ...222222.......
                ...2222222......
                ....222222......
                .....222222.....
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                `,img`
                ................
                ................
                ................
                ................
                ....222222......
                .....22222......
                ......22222.....
                .......2222.....
                .......2222.....
                .......2222.....
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                `,img`
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                .......2222.....
                .......2222.....
                ......22222.....
                ......2222......
                .....22222......
                .....22222......
                ....22222.......
                ................
                ................
                ................
                ................
                ................
                `,img`
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                .....22222......
                .....2222.......
                ....22222.......
                ...22222........
                ...2222.........
                ..22222.........
                ..222...........
                ................
                `],
            100,
            true
            )
            music.rest(music.beat(BeatFraction.Whole))
            AttackA.destroy()
        }
    }
    if (Horizontal == -1) {
        while (controller.A.isPressed()) {
            AttackA = sprites.create(assets.image`SwordA`, SpriteKind.AttackA)
            AttackA.setPosition(Dungeoneer.x - 20, Dungeoneer.y)
            controller.moveSprite(AttackA)
            music.knock.play()
            animation.setAction(Dungeoneer, ActionKind.AttackLeft)
            animation.runImageAnimation(
            AttackA,
            [img`
                .........222222.
                ........222222..
                .......222222...
                ......2222222...
                ......222222....
                .....222222.....
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                `,img`
                ................
                ................
                ................
                ................
                ......222222....
                ......22222.....
                .....22222......
                .....2222.......
                .....2222.......
                .....2222.......
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                `,img`
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                .....2222.......
                .....2222.......
                .....22222......
                ......2222......
                ......22222.....
                ......22222.....
                .......22222....
                ................
                ................
                ................
                ................
                ................
                `,img`
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ......22222.....
                .......2222.....
                .......22222....
                ........22222...
                .........2222...
                .........22222..
                ...........222..
                ................
                `],
            100,
            true
            )
            music.rest(music.beat(BeatFraction.Whole))
            AttackA.destroy()
        }
    }
    if (Vertical == 1) {
        while (controller.A.isPressed()) {
            AttackA = sprites.create(assets.image`SwordA`, SpriteKind.AttackA)
            AttackA.setPosition(Dungeoneer.x, Dungeoneer.y + 20)
            controller.moveSprite(AttackA)
            music.knock.play()
            animation.setAction(Dungeoneer, ActionKind.AttackDown)
            animation.runImageAnimation(
            AttackA,
            [img`
                ................
                ................
                ................
                ................
                ................
                22..............
                222.............
                2222............
                2222............
                2222............
                2222............
                .222............
                ...2............
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                `,img`
                ................
                ................
                ................
                ................
                ................
                ................
                ..2.............
                ..22............
                ..222...........
                ..222222........
                ..222222........
                ..222222........
                ....2222........
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                `,img`
                ................
                ................
                ................
                ................
                ................
                ................
                ............2...
                ..........222...
                ........22222...
                ......2222222...
                ......2222222...
                ......222222....
                ......222.......
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                `,img`
                ................
                ................
                ................
                ................
                ...............2
                .............222
                ............2222
                ..........222222
                ..........222222
                ..........2222..
                ..........222...
                ..........2.....
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                `],
            100,
            true
            )
            music.rest(music.beat(BeatFraction.Whole))
            AttackA.destroy()
        }
    }
    if (Vertical == -1) {
        while (controller.A.isPressed()) {
            AttackA = sprites.create(assets.image`SwordA`, SpriteKind.AttackA)
            AttackA.setPosition(Dungeoneer.x, Dungeoneer.y + -20)
            controller.moveSprite(AttackA)
            music.knock.play()
            animation.setAction(Dungeoneer, ActionKind.AttackUp)
            animation.runImageAnimation(
            AttackA,
            [img`
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ............2...
                ............222.
                ............2222
                ............2222
                ............2222
                ............2222
                .............222
                ..............22
                ................
                ................
                ................
                ................
                ................
                `,img`
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ........2222....
                ........222222..
                ........222222..
                ........222222..
                ...........222..
                ............22..
                .............2..
                ................
                ................
                ................
                ................
                ................
                ................
                `,img`
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                .......222......
                ....222222......
                ...2222222......
                ...2222222......
                ...22222........
                ...222..........
                ...2............
                ................
                ................
                ................
                ................
                ................
                ................
                `,img`
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                .....2..........
                ...222..........
                ..2222..........
                222222..........
                222222..........
                2222............
                222.............
                2...............
                ................
                ................
                ................
                ................
                `],
            100,
            true
            )
            music.rest(music.beat(BeatFraction.Whole))
            AttackA.destroy()
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.CollectibleRare, function (sprite, otherSprite) {
    music.baDing.play()
    info.changeScoreBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.AttackA, SpriteKind.Cobra, function (sprite, otherSprite) {
    CobraHealth.value += 0 - DMG
    music.rest(music.beat(BeatFraction.Whole))
})
function BatSpawn () {
    enemyBat = sprites.create(img`
        . . f f f . . . . . . . . . . . 
        f f f c c . . . . . . . . f f f 
        f f c c c . c c . . . f c b b c 
        f f c 3 c c 3 c c f f b b b c . 
        f f c 3 b c 3 b c f b b c c c . 
        f c b b b b b b c f b c b c c . 
        c c 1 b b b 1 b c b b c b b c . 
        c b b b b b b b b b c c c b c . 
        c b 1 f f 1 c b b c c c c c . . 
        c f 1 f f 1 f b b b b f c . . . 
        f f f f f f f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 2 b b b c f . . . . 
        . . f 2 2 2 b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Bat)
    tiles.placeOnRandomTile(enemyBat, sprites.dungeon.darkGroundCenter)
    BatHealth = statusbars.create(20, 4, StatusBarKind.BatHealth)
    BatHealth.attachToSprite(enemyBat)
    BatHealth.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    BatHealth.setColor(7, 2)
    BatHealth.setBarBorder(1, 15)
    BatHealth.max = 90
}
function SkellySpawn () {
    enemySkelly = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(enemySkelly, assets.tile`SkellySpawn`)
    SkellyHealth = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    SkellyHealth.attachToSprite(enemySkelly)
    SkellyHealth.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    SkellyHealth.setColor(7, 2)
    SkellyHealth.setBarBorder(1, 15)
    SkellyHealth.max = 30
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenSouth, function (sprite, location) {
    LeaveHouse()
})
function BlackSmithSpawn () {
    Smith = sprites.create(img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 e f 1 4 f . . 
        . f e 4 4 e 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b f 7 7 f b f e f . 
        e 4 f 7 f 7 7 f 7 f 4 e . 
        e e f 6 f 6 6 f 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `, SpriteKind.Blacksmith)
    tiles.placeOnTile(Smith, tiles.getTileLocation(10, 19))
    animation.runImageAnimation(
    Smith,
    assets.animation`Smith`,
    400,
    true
    )
}
function TreeSpawn () {
    for (let index = 0; index < 15; index++) {
        Tree = sprites.create(img`
            ......cc66......
            .....c6576c.....
            ....c677576c....
            ....cc677666....
            ...cc6c6667cc...
            ..6c666777cc6c..
            ..c76666766776..
            ..c6777777776c..
            ..cc67777776cc..
            .c67cc76676676c.
            .c777666667777c.
            .c6777777777766.
            .cc7767776776666
            c676cc6766666776
            c777766666677776
            cc7777777777776c
            .c676777677767c.
            ..cc667666766c..
            ...ccc6c66ccc...
            .....cccccc.....
            .......ee.......
            ......eeee......
            .....eeeeee.....
            .......ee.......
            `, SpriteKind.Decoration)
        Tree.setPosition(randint(0, 1000), randint(0, 200))
    }
}
sprites.onOverlap(SpriteKind.AttackA, SpriteKind.Boss1, function (sprite, otherSprite) {
    BokoblinBoshealth.value += 0 - DMG
    music.rest(music.beat(BeatFraction.Whole))
})
scene.onHitWall(SpriteKind.CollectibleRare, function (sprite, location) {
    tiles.placeOnTile(sprite, tiles.getTileLocation(randint(0, 69), randint(0, 34)))
    sprite.x += 1
    sprite.y += 1
})
function ChestsSpawn () {
    WeaponChest = sprites.create(img`
        . . b b b b b b b b b b b b . . 
        . b e 4 4 4 4 4 4 4 4 4 4 e b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b d d b b b b b b b 
        c b b b b b b c c b b b b b b c 
        c c c c c c b c c b c c c c c c 
        b e e e e e c b b c e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `, SpriteKind.Chest)
    WeaponChest2 = sprites.create(img`
        . . b b b b b b b b b b b b . . 
        . b e 4 4 4 4 4 4 4 4 4 4 e b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b d d b b b b b b b 
        c b b b b b b c c b b b b b b c 
        c c c c c c b c c b c c c c c c 
        b e e e e e c b b c e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `, SpriteKind.Chest)
    tiles.placeOnRandomTile(WeaponChest, sprites.castle.tileGrass3)
    tiles.placeOnRandomTile(WeaponChest2, sprites.dungeon.purpleInnerNorthWest)
}
scene.onHitWall(SpriteKind.Decoration, function (sprite, location) {
    sprite.setPosition(randint(0, 1000), randint(0, 200))
})
sprites.onOverlap(SpriteKind.Blacksmith, SpriteKind.Player, function (sprite, otherSprite) {
    game.setDialogCursor(img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 e f 1 4 f . . 
        . f e 4 4 e 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b f 7 7 f b f e f . 
        e 4 f 7 f 7 7 f 7 f 4 e . 
        e e f 6 f 6 6 f 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `)
    game.showLongText("Hey there, mate! Let me tell ya something. Being a hero for our little town, I respect it.", DialogLayout.Bottom)
    game.showLongText("So tell you what, I'll cut my weapon upgrade price for you, +20 DMG for 80 points!", DialogLayout.Bottom)
    if (info.score() > 79) {
        game.showLongText("Here ya go! Come back to me if your damage feels low!", DialogLayout.Bottom)
        music.powerUp.play()
        DMG += 20
        info.changeScoreBy(-80)
    } else {
        game.showLongText("Oh, seems you don't have enough points, buddy. Oh well, come back when you have 80!", DialogLayout.Bottom)
    }
    pause(1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Chest, function (sprite, otherSprite) {
    game.setDialogCursor(img`
        . . . . . . . . . . . . . f f f 
        . . . . . . . . . . . . f d d f 
        . . . . . . . . . . . f d d d f 
        . . . . . . . . . . f d d d f . 
        . . . . . . . . . f d d d f . . 
        . . . . . . . . f d d d f . . . 
        f . . . . . . f d d d f . . . . 
        e f . . . . f d d d f . . . . . 
        f e f . . f d d d f . . . . . . 
        . f e f f d d d f . . . . . . . 
        . . f e f d d f . . . . . . . . 
        . . . f e f f . . . . . . . . . 
        . . f e f e f . . . . . . . . . 
        . f e f . f e f . . . . . . . . 
        f e f . . . f e f . . . . . . . 
        f f . . . . . f e f . . . . . . 
        `)
    music.powerUp.play()
    game.splash("New Weapon!", "+5 DMG")
    info.changeScoreBy(3)
    DMG += 5
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Bat, SpriteKind.Player, function (sprite, otherSprite) {
    if (Unhurtable == 0) {
        info.changeLifeBy(-2)
        music.knock.play()
        Unhurtable = 1
        scene.cameraShake(2, 500)
        pause(2000)
        Unhurtable = 0
    }
})
sprites.onOverlap(SpriteKind.AttackA, SpriteKind.Bat, function (sprite, otherSprite) {
    BatHealth.value += 0 - DMG
    music.rest(music.beat(BeatFraction.Whole))
})
function playerAnimate () {
    IdleDown = animation.createAnimation(ActionKind.IdleDown, 400)
    animation.attachAnimation(Dungeoneer, IdleDown)
    IdleDown.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    IdleDown.addAnimationFrame(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    IdleUp = animation.createAnimation(ActionKind.IdleUp, 400)
    animation.attachAnimation(Dungeoneer, IdleUp)
    IdleUp.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    IdleUp.addAnimationFrame(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    IdleRight = animation.createAnimation(ActionKind.IdleRight, 400)
    animation.attachAnimation(Dungeoneer, IdleRight)
    IdleRight.addAnimationFrame(img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . f f f . . . . . . 
        `)
    IdleRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `)
    IdleLeft = animation.createAnimation(ActionKind.IdleLeft, 400)
    animation.attachAnimation(Dungeoneer, IdleLeft)
    IdleLeft.addAnimationFrame(img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        `)
    IdleLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `)
    MoveUp = animation.createAnimation(ActionKind.WalkUp, 100)
    animation.attachAnimation(Dungeoneer, MoveUp)
    MoveUp.addAnimationFrame(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    MoveUp.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f f 2 f e f . . 
        . . f f f 2 f e e 2 2 f f f . . 
        . . f e 2 f f e e 2 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 2 2 2 2 2 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `)
    MoveUp.addAnimationFrame(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    MoveUp.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e f 2 f f f 2 f 2 e f . . 
        . . f f f 2 2 e e f 2 f f f . . 
        . . f e e f 2 e e f f 2 e f . . 
        . f f e e e f e e e f f e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 2 2 2 2 2 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `)
    MoveDown = animation.createAnimation(ActionKind.WalkDown, 100)
    animation.attachAnimation(Dungeoneer, MoveDown)
    MoveDown.addAnimationFrame(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    MoveDown.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `)
    MoveDown.addAnimationFrame(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    MoveDown.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `)
    MoveRight = animation.createAnimation(ActionKind.WalkRight, 100)
    animation.attachAnimation(Dungeoneer, MoveRight)
    MoveRight.addAnimationFrame(img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `)
    MoveRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `)
    MoveRight.addAnimationFrame(img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `)
    MoveRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `)
    MoveLeft = animation.createAnimation(ActionKind.WalkLeft, 100)
    animation.attachAnimation(Dungeoneer, MoveLeft)
    MoveLeft.addAnimationFrame(img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `)
    MoveLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `)
    MoveLeft.addAnimationFrame(img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `)
    MoveLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `)
    ADown = animation.createAnimation(ActionKind.AttackDown, 100)
    animation.attachAnimation(Dungeoneer, ADown)
    ADown.addAnimationFrame(img`
        ........................
        .....ffff...............
        ...fff22fff.............
        ..fff2222fff............
        .fffeeeeeefff...........
        .ffe222222eef...........
        .fe2ffffff2ef...........
        .ffffeeeeffff...........
        ffefbf44fbfeff..........
        fee41fddf14eef..........
        .ffffdddddeef...........
        fddddf444eef............
        fbbbbf2222f4e...........
        fbbbbf2222fd4...........
        .fccf45544f44...........
        ..ffffffff..............
        ....ff..ff..............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `)
    ADown.addAnimationFrame(img`
        ........................
        ......ffff..............
        ....fff22fff............
        ...fff2222fff...........
        ..fffeeeeeefff..........
        ..ffe222222eef..........
        ..fe2ffffff2ef..........
        ..ffffeeeeffff..........
        .ffefbf44fbfeff.........
        .fee41fddf14eef.........
        fdfeeddddd4eff..........
        fbffee444edd4e..........
        fbf4f2222edde...........
        fcf.f22cccee............
        .ff.f44cdc4f............
        ....fffddcff............
        .....fddcff.............
        ....cddc................
        ....cdc.................
        ....cc..................
        ........................
        ........................
        ........................
        ........................
        `)
    ADown.addAnimationFrame(img`
        ........................
        ........................
        .......ff...............
        .....ff22ff.............
        ...fff2222fff...........
        ..fff222222fff..........
        ..fff222222fff..........
        ..feeeeeeeeeeff.........
        .ffe22222222eff.........
        .fffffeeeefffff.........
        fdfefbf44fbfeff.........
        fbfe41fddf14ef..........
        fbffe4dddd4efe..........
        fcfef22222f4e...........
        .ff4f44554f4e...........
        ....ffffffdde...........
        .....ffffedde...........
        ..........ee............
        .........ccc............
        ........cc1cc...........
        .........c1c............
        .........c1c............
        .........c1c............
        .........c1c............
        `)
    ADown.addAnimationFrame(img`
        ......ffff..............
        ....fff22fff............
        ...fff2222fff...........
        ..fffeeeeeefff..........
        ..ffe222222eef..........
        ..fe2ffffff2ef..........
        ..ffffeeeeffff......ccc.
        .ffefbf44fbfeff....cddc.
        .ffefbf44fbfeff...cddc..
        .fee4dddddd4eef.ccddc...
        fdfeeddddd4eeffecddc....
        fbffee4444ee4fddccc.....
        fbf4f222222f1edde.......
        fcf.f222222f44ee........
        .ff.f445544f............
        ....ffffffff............
        .....ff..ff.............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `)
    AUp = animation.createAnimation(ActionKind.AttackUp, 100)
    animation.attachAnimation(Dungeoneer, AUp)
    AUp.addAnimationFrame(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    AUp.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . f f e e e e f f . . . . . 
        . . f e e e f f e e e f . . . . 
        . . f f f f 2 2 f f f f . . . . 
        . f f e 2 e 2 2 e 2 e f f . . . 
        . f e 2 f 2 f f f 2 f e f . . . 
        . f f f 2 f e e 2 2 f f f . . . 
        . f e 2 f f e e 2 f e e f . . . 
        f f e f f e e e f e e e f f . . 
        f f e e e e e e e e e e f d f . 
        . . f e e e e e e e e f f b f . 
        . . e f f f f f f f f 4 f b f . 
        . . 4 f 2 2 2 2 2 e d d f c f . 
        . . e f f f f f f e e 4 f f . . 
        . . . f f f . . . . . . . . . . 
        `)
    AUp.addAnimationFrame(img`
        . . . . . f f f f . . . . . . . 
        . . . f f e e e e f f . . . . . 
        . . f e e e f f e e e f . . . . 
        . f f f f f 2 2 f f f f f . . . 
        . f f e 2 e 2 2 e 2 e f f . . . 
        . f e 2 f 2 f f 2 f 2 e f . . . 
        . f f f 2 2 e e 2 2 f f f . . . 
        f f e f 2 f e e f 2 f e f f . . 
        f e e f f e e e e f e e e f . . 
        . f e e e e e e e e e e f . . . 
        . . f e e e e e e e e f . . . . 
        . e 4 f f f f f f f f 4 e . . . 
        . 4 d f 2 2 2 2 2 2 f d 4 . . . 
        . 4 4 f 4 4 4 4 4 4 f 4 4 . . . 
        . . . . f f f f f f . . . . . . 
        . . . . f f . . f f . . . . . . 
        `)
    AUp.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . f f e e e e f f . . . . . 
        . . f e e e f f e e e f . . . . 
        . . f f f f 2 2 f f f f . . . . 
        . f f e 2 e 2 2 e 2 e f f . . . 
        . f e f 2 f f f 2 f 2 e f . . . 
        . f f f 2 2 e e f 2 f f f . . . 
        . f e e f 2 e e f f 2 e f . . . 
        . f e e e f e e e f f e f f . . 
        . f e e e e e e e e e e f f . . 
        . f f e e e e e e e e f . . . . 
        . f 4 f f f f f f f f e . . . . 
        . f d d e 2 2 2 2 2 f 4 . . . . 
        . f 4 e e f f f f f f e . . . . 
        . . . . . . . . f f f . . . . . 
        `)
    Aleft = animation.createAnimation(ActionKind.AttackLeft, 100)
    animation.attachAnimation(Dungeoneer, Aleft)
    Aleft.addAnimationFrame(img`
        ..............ffffff....
        .............f2feeeeff..
        ............f222feeeeff.
        .......cc...feeeeffeeef.
        .......cdc.fe2222eeffff.
        .......cddcf2effff222ef.
        ........cddcffeeefffffff
        .........cddce44fbe44eff
        ..........cdceddf14d4eef
        ..........cccdeddd4eeef.
        ...........edd4e44eeff..
        ............ee442222f...
        .............f2e2222f...
        .............f554444f...
        ..............ffffff....
        ................fff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `)
    Aleft.addAnimationFrame(img`
        ........................
        ..............fff.......
        .............f2fffff....
        ...........ff22eeeeeff..
        ..........ff222eeeeeeff.
        ..........feeeefffeeeef.
        .........fe2222eeefffff.
        .........f2efffff222efff
        ..cc.....fffeeefffffffff
        ..cdcc...fee44fbbe44efef
        ..ccddcc..feddfbb4d4eef.
        ....cdddceefddddd4eeef..
        .....ccdcddee2222222f...
        ......cccdd44e544444f...
        .........eeeeffffffff...
        .............ff...fff...
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `)
    Aleft.addAnimationFrame(img`
        ...............ff.......
        .............ff2ffff....
        ............ff2feeeeff..
        ...........ff22feeeeeff.
        ...........feeeeffeeeef.
        ..........fe2222eefffff.
        ..........f2effff222efff
        ..........fffeeeffffffff
        ..........fee44fbe44efef
        ...........feddfb4d4eef.
        ..........c.eeddd4eeef..
        ....ccccccceddee2222f...
        .....dddddcedd44e444f...
        ......ccccc.eeeefffff...
        ..........c...ffffffff..
        ...............ff..fff..
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `)
    Aleft.addAnimationFrame(img`
        ..............ffffff....
        .............f2feeeeff..
        ............f222feeeeff.
        ............feeeeffeeef.
        ...........fe2222eeffff.
        ...........f2effff222ef.
        ...........fffeeefffffff
        ...........fee44fbe44eff
        ............feddf14d4eef
        .............fdddd4eeef.
        .............fe444eddf..
        .............ccc22eddf..
        .............cdc22fee...
        ............cddc4444f...
        ...........cddcfffff....
        ..........cddc..fff.....
        ..........cdc...........
        ..........cc............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `)
    ARight = animation.createAnimation(ActionKind.AttackRight, 100)
    animation.attachAnimation(Dungeoneer, ARight)
    ARight.addAnimationFrame(img`
        ........................
        ....ffffff..............
        ..ffeeeef2f.............
        .ffeeeef222f............
        .feeeffeeeef...cc.......
        .ffffee2222ef.cdc.......
        .fe222ffffe2fcddc.......
        fffffffeeeffcddc........
        ffe44ebf44ecddc.........
        fee4d41fddecdc..........
        .feee4dddedccc..........
        ..ffee44e4dde...........
        ...f222244ee............
        ...f2222e2f.............
        ...f444455f.............
        ....ffffff..............
        .....fff................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `)
    ARight.addAnimationFrame(img`
        ........................
        .......fff..............
        ....fffff2f.............
        ..ffeeeee22ff...........
        .ffeeeeee222ff..........
        .feeeefffeeeef..........
        .fffffeee2222ef.........
        fffe222fffffe2f.........
        fffffffffeeefff.....cc..
        fefe44ebbf44eef...ccdc..
        .fee4d4bbfddef..ccddcc..
        ..feee4dddddfeecdddc....
        ...f2222222eeddcdcc.....
        ...f444445e44ddccc......
        ...ffffffffeeee.........
        ...fff...ff.............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `)
    ARight.addAnimationFrame(img`
        .......ff...............
        ....ffff2ff.............
        ..ffeeeef2ff............
        .ffeeeeef22ff...........
        .feeeeffeeeef...........
        .fffffee2222ef..........
        fffe222ffffe2f..........
        ffffffffeeefff..........
        fefe44ebf44eef..........
        .fee4d4bfddef...........
        ..feee4dddee.c..........
        ...f2222eeddeccccccc....
        ...f444e44ddecddddd.....
        ...fffffeeee.ccccc......
        ..ffffffff...c..........
        ..fff..ff...............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `)
    ARight.addAnimationFrame(img`
        ....ffffff..............
        ..ffeeeef2f.............
        .ffeeeef222f............
        .feeeffeeeef............
        .ffffee2222ef...........
        .fe222ffffe2f...........
        fffffffeeefff...........
        ffe44ebf44eef...........
        fee4d41fddef............
        .feee4ddddf.............
        ..fdde444ef.............
        ..fdde22ccc.............
        ...eef22cdc.............
        ...f4444cddc............
        ....fffffcddc...........
        .....fff..cddc..........
        ...........cdc..........
        ............cc..........
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `)
}
function LeaveHouse () {
    for (let value of sprites.allOfKind(SpriteKind.HouseDecoration)) {
        value.destroy()
    }
    tiles.setTilemap(tilemap`level2`)
    TreeSpawn()
    CoinSpawn()
    SpawnHeroHouse()
    SkellySpawn()
    if (Level > 1) {
        BatSpawn()
    }
    if (Level > 3) {
        CobraSpawn()
    }
    tiles.placeOnTile(Dungeoneer, tiles.getTileLocation(4, 4))
}
function CobraSpawn () {
    enemyCobra = sprites.create(img`
        . . . . . c c c c c c c . . . . 
        . . . . c 6 7 7 7 7 7 6 c . . . 
        . . . c 7 c 6 6 6 6 c 7 6 c . . 
        . . c 6 7 6 f 6 6 f 6 7 7 c . . 
        . . c 7 7 7 7 7 7 7 7 7 7 c . . 
        . . f 7 8 1 f f 1 6 7 7 7 f . . 
        . . f 6 f 1 f f 1 f 7 7 7 f . . 
        . . . f f 2 2 2 2 f 7 7 6 f . . 
        . . c c f 2 2 2 2 7 7 6 f c . . 
        . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
        c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
        f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
        f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
        f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
        . f 6 1 1 1 1 1 6 6 6 6 c . . . 
        . . f f c c c c c c c c . . . . 
        `, SpriteKind.Cobra)
    tiles.placeOnRandomTile(enemyCobra, sprites.castle.tileDarkGrass1)
    CobraHealth = statusbars.create(20, 4, StatusBarKind.CobraHealth)
    CobraHealth.attachToSprite(enemyCobra)
    CobraHealth.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    CobraHealth.setColor(7, 2)
    CobraHealth.setBarBorder(1, 15)
    CobraHealth.max = 200
    CobraHealth.value = 200
}
sprites.onOverlap(SpriteKind.Cobra, SpriteKind.Player, function (sprite, otherSprite) {
    if (Unhurtable == 0) {
        info.changeLifeBy(-3)
        music.knock.play()
        Unhurtable = 1
        scene.cameraShake(2, 500)
        pause(2000)
        Unhurtable = 0
    }
})
statusbars.onZero(StatusBarKind.CobraHealth, function (status) {
    music.baDing.play()
    Experience.value += 80
    CoinDrop = sprites.create(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, SpriteKind.CollectibleRare)
    CoinDrop.setPosition(enemyCobra.x, enemyCobra.y)
    enemyCobra.destroy(effects.disintegrate, 500)
    info.changeScoreBy(4)
    CobraSpawn()
    animation.runImageAnimation(
    CoinDrop,
    [img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `,img`
        . . b b b . . . 
        . b 5 5 5 b . . 
        b 5 d 3 d 5 b . 
        b 5 3 5 1 5 b . 
        c 5 3 5 1 d c . 
        c 5 d 1 d d c . 
        . f d d d f . . 
        . . f f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 d 1 5 b . 
        . b 5 3 1 5 b . 
        . c 5 3 1 d c . 
        . c 5 1 d d c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . . b 1 1 b . . 
        . . b 5 5 b . . 
        . . b d d b . . 
        . . c d d c . . 
        . . c 3 3 c . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 1 d 5 b . 
        . b 5 1 3 5 b . 
        . c d 1 3 5 c . 
        . c d d 1 5 c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b b . . 
        . . b 5 5 5 b . 
        . b 5 d 3 d 5 b 
        . b 5 1 5 3 5 b 
        . c d 1 5 3 5 c 
        . c d d 1 d 5 c 
        . . f d d d f . 
        . . . f f f . . 
        `],
    100,
    true
    )
    if (Quests == 1) {
        QuestCount += 1
    }
})
sprites.onOverlap(SpriteKind.AttackA, SpriteKind.Enemy, function (sprite, otherSprite) {
    SkellyHealth.value += 0 - DMG
    music.rest(music.beat(BeatFraction.Whole))
})
function SpawnHeroHouse () {
    Dungeoneers_House = sprites.create(img`
        ....................e5e55e5e....................
        .................555eee55e5e555.................
        ..............555e55e5e55eee55e555..............
        ...........e55e55eeee5e55e5eeee55e55e...........
        ........eeee55e55e55e5e55e5e55e55e55eeee........
        .....555e55e55eeee55e5e55e5e55eeee55e55e555.....
        ...55eeee55e55e55e55eee55eee55e55e55e55eeee55...
        4cc55e55e55eeee55e55e5e55e5e55e55eeee55e55e55cc4
        6c6eee55e55e55e55e55e5e55e5e55e55e55e55e55eee6c6
        46655e55eeee55e55eeee5e55e5eeee55e55eeee55e55664
        46655e55e55e55eeee55e5e55e5e55eeee55e55e55e55664
        4cc55eeee55e55e55e55eee55eee55e55e55e55eeee55cc4
        6c655e55e55eeee55e55e5e55e5e55e55eeee55e55e556c6
        466eee55e55e55e55e55e5e55e5e55e55e55e55e55eee664
        46655e55eeee55e55e55e5e55e5e55e55e55eeee55e55664
        4cc55e55e55e55e55eeee5e55e5eeee55e55e55e55e55cc4
        6c655eeee55e55eeee55eee55eee55eeee55e55eeee556c6
        46655e55e55eeee55e55e5e55e5e55e55eeee55e55e55664
        466eee55e55e55e55e55e5e55e5e55e55e55e55e55eee664
        4cc55e55eeee55e55e55e5e55e5e55e55e55eeee55e55cc4
        6c655e55e55e55e55e55eee55eee55e55e55e55e55e556c6
        46655eeee55e55e55eeecc6666cceee55e55e55eeee55664
        46655e55e55e55eeecc6666666666cceee55e55e55e55664
        4cceee55e55eeecc66666cccccc66666cceee55e55eeecc4
        6c655e55eeecc66666cc64444446cc66666cceee55e556c6
        46655e55cc66666cc64444444444446cc66666cc55e55664
        46655cc6666ccc64444444444444444446ccc6666cc55664
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        cccccccc6666666cb44444444444444bc6666666cccccccc
        64444444444446c444444444444444444c64444444444446
        66cb444444444cb411111111111111114bc444444444bc66
        666cccccccccccd166666666666666661dccccccccccc666
        6666444444444c116eeeeeeeeeeeeee611c4444444446666
        666e5555555e4c16e4e44e44e44e44ee61c4e5555555e666
        666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
        666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
        666edffdffde4c66f4effffffffff4ee66c4edffdffde666
        666edccdccde4c66f4effffffffffeee66c4edccdccde666
        666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
        c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
        c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
        cc66666666664c66e4e44e44e44feeee66c46666666666cc
        .c66444444444c66e4e44e44e44ffffe66c44444444466c.
        ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
        ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
        ....644444444c66f4e44e44e44e44ee66c444444446....
        .....64eee444c66f4e44e44e44e44ee66c444eee46.....
        ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
        `, SpriteKind.PlayerHouse)
    tiles.placeOnRandomTile(Dungeoneers_House, sprites.dungeon.floorLight2)
}
function SpawnShoppeGuy () {
    Shoppe = sprites.create(img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f f e e e e e e f f . 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        . f e d d b b d d e f . 
        . f f e 4 4 4 4 e f f . 
        e 4 f b 1 6 1 6 b f 4 e 
        4 d f b 6 1 6 1 b f d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `, SpriteKind.ShoppeGuy)
    tiles.placeOnRandomTile(Shoppe, assets.tile`myTile0`)
    animation.runImageAnimation(
    Shoppe,
    [img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f f e e e e e e f f . 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        . f e d d b b d d e f . 
        . f f e 4 4 4 4 e f f . 
        e 4 f b 1 1 1 1 b f 4 e 
        4 d f 1 1 1 1 1 1 f d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        . . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f f e e e e e e f f . 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        . f e d d b b d d e f . 
        . f f e 4 4 4 4 e f f . 
        e 4 f b 1 1 1 1 b f 4 e 
        4 d f 1 1 1 1 1 1 f d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `],
    400,
    true
    )
}
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    music.baDing.play()
    Experience.value += 35
    CoinDrop = sprites.create(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, SpriteKind.CollectibleRare)
    CoinDrop.setPosition(enemySkelly.x, enemySkelly.y)
    enemySkelly.destroy(effects.disintegrate, 500)
    info.changeScoreBy(1)
    SkellySpawn()
    animation.runImageAnimation(
    CoinDrop,
    [img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `,img`
        . . b b b . . . 
        . b 5 5 5 b . . 
        b 5 d 3 d 5 b . 
        b 5 3 5 1 5 b . 
        c 5 3 5 1 d c . 
        c 5 d 1 d d c . 
        . f d d d f . . 
        . . f f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 d 1 5 b . 
        . b 5 3 1 5 b . 
        . c 5 3 1 d c . 
        . c 5 1 d d c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . . b 1 1 b . . 
        . . b 5 5 b . . 
        . . b d d b . . 
        . . c d d c . . 
        . . c 3 3 c . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 1 d 5 b . 
        . b 5 1 3 5 b . 
        . c d 1 3 5 c . 
        . c d d 1 5 c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b b . . 
        . . b 5 5 5 b . 
        . b 5 d 3 d 5 b 
        . b 5 1 5 3 5 b 
        . c d 1 5 3 5 c 
        . c d d 1 d 5 c 
        . . f d d d f . 
        . . . f f f . . 
        `],
    100,
    true
    )
    if (Quests == 1) {
        QuestCount += 1
    }
})
info.onLifeZero(function () {
    info.setScore(Level)
    game.setDialogCursor(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e f e 2 f f f f . . 
        . f f e f b 4 4 f 4 b f e f f . 
        . f e 2 f 1 f d d f 1 4 e e f . 
        . . f e e d d d 2 d f e e f . . 
        . . . f e e 4 2 f 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    music.wawawawaa.loop()
    game.over(false, effects.dissolve)
})
sprites.onOverlap(SpriteKind.PlayerHouse, SpriteKind.Player, function (sprite, otherSprite) {
    EnterHouse()
})
statusbars.onZero(StatusBarKind.BatHealth, function (status) {
    music.baDing.play()
    Experience.value += 50
    CoinDrop = sprites.create(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, SpriteKind.CollectibleRare)
    CoinDrop.setPosition(enemyBat.x, enemyBat.y)
    enemyBat.destroy(effects.disintegrate, 500)
    info.changeScoreBy(2)
    BatSpawn()
    animation.runImageAnimation(
    CoinDrop,
    [img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `,img`
        . . b b b . . . 
        . b 5 5 5 b . . 
        b 5 d 3 d 5 b . 
        b 5 3 5 1 5 b . 
        c 5 3 5 1 d c . 
        c 5 d 1 d d c . 
        . f d d d f . . 
        . . f f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 d 1 5 b . 
        . b 5 3 1 5 b . 
        . c 5 3 1 d c . 
        . c 5 1 d d c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . . b 1 1 b . . 
        . . b 5 5 b . . 
        . . b d d b . . 
        . . c d d c . . 
        . . c 3 3 c . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 1 d 5 b . 
        . b 5 1 3 5 b . 
        . c d 1 3 5 c . 
        . c d d 1 5 c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b b . . 
        . . b 5 5 5 b . 
        . b 5 d 3 d 5 b 
        . b 5 1 5 3 5 b 
        . c d 1 5 3 5 c 
        . c d d 1 d 5 c 
        . . f d d d f . 
        . . . f f f . . 
        `],
    100,
    true
    )
    if (Quests == 1) {
        QuestCount += 1
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    if (Unhurtable == 0) {
        info.changeLifeBy(-1)
        music.knock.play()
        Unhurtable = 1
        scene.cameraShake(2, 500)
        pause(2000)
        Unhurtable = 0
    }
})
function BowOn () {
    Boss1Drop.destroy()
    music.magicWand.play()
    playerArrow = sprites.createProjectileFromSprite(img`
        . . d . . . . . . . . 
        . d d . . . . . . . f 
        d d e e e e e e e f . 
        . d d . . . . . . . f 
        . . d . . . . . . . . 
        `, Dungeoneer, 50, 50)
    playerArrow.setKind(SpriteKind.Arrows)
    while (controller.B.isPressed()) {
        if (Dungeoneer.vx > 0) {
            while (controller.B.isPressed()) {
                playerArrow = sprites.createProjectileFromSprite(img`
                    . . . . . . . . d . . 
                    f . . . . . . . d d . 
                    . f e e e e e e e d d 
                    f . . . . . . . d d . 
                    . . . . . . . . d . . 
                    `, Dungeoneer, 200, 0)
                music.rest(music.beat(BeatFraction.Whole))
            }
        }
        if (Dungeoneer.vx < 0) {
            while (controller.B.isPressed()) {
                playerArrow = sprites.createProjectileFromSprite(img`
                    . . d . . . . . . . . 
                    . d d . . . . . . . f 
                    d d e e e e e e e f . 
                    . d d . . . . . . . f 
                    . . d . . . . . . . . 
                    `, Dungeoneer, -200, 0)
                music.rest(music.beat(BeatFraction.Whole))
            }
        }
        if (Dungeoneer.vy > 0) {
            while (controller.B.isPressed()) {
                playerArrow = sprites.createProjectileFromSprite(img`
                    . . d . . . . . . . . 
                    . d d . . . . . . . f 
                    d d e e e e e e e f . 
                    . d d . . . . . . . f 
                    . . d . . . . . . . . 
                    `, Dungeoneer, 0, -200)
                music.rest(music.beat(BeatFraction.Whole))
            }
        }
        if (Dungeoneer.vy < 0) {
            while (controller.B.isPressed()) {
                playerArrow = sprites.createProjectileFromSprite(img`
                    . . d . . . . . . . . 
                    . d d . . . . . . . f 
                    d d e e e e e e e f . 
                    . d d . . . . . . . f 
                    . . d . . . . . . . . 
                    `, Dungeoneer, 0, 200)
                music.rest(music.beat(BeatFraction.Whole))
            }
        }
    }
}
function EnemyAnimation () {
    SkeIdle = animation.createAnimation(ActionKind.SkellyIdle, 400)
    animation.attachAnimation(enemySkelly, SkeIdle)
    SkeIdle.addAnimationFrame(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `)
    SkeIdle.addAnimationFrame(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111ffff.....
        ......fffcdb1bc111cf....
        ....fc111cbfbf1b1b1f....
        ....f1b1b1ffffbfbfbf....
        ....fbfbfffffff.........
        .........fffff..........
        ..........fff...........
        ........................
        ........................
        ........................
        ........................
        `)
    SkeIdle.addAnimationFrame(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `)
    SkeIdle.addAnimationFrame(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .....ffff111111bf.......
        ....fc111cdb1bdfff......
        ....f1b1bcbfbfc111cf....
        ....fbfbfbffff1b1b1f....
        .........fffffffbfbf....
        ..........fffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `)
    SkeRight = animation.createAnimation(ActionKind.SkellyRight, 200)
    animation.attachAnimation(enemySkelly, SkeRight)
    SkeRight.addAnimationFrame(img`
        ........................
        ........................
        ........................
        ........................
        ..........fffff.........
        ........ff11111f........
        .......fb111111bf.......
        ......fbd1111111f.......
        ......fddd111111df......
        ......fdddd11111df......
        ......fddddddd11df......
        ......fddddddd111f......
        ......fddddddcf11f......
        .......fbdddb1111bf.....
        ........fffcfdb1b1f.....
        .......ffffffffbfbf.....
        ....ff.fffffffffff......
        .....ffffffff...........
        .....ffffffb1b1f........
        ......ffffffbfbf........
        ........................
        ........................
        ........................
        ........................
        `)
    SkeRight.addAnimationFrame(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......fd1111111f.......
        ......fdd1111111df......
        ......fddd111111df......
        ......fdddddd111df......
        ......fbddddbfd1df......
        ......fcbbbdcfddbf......
        .......fcbb11111f.......
        ........fffff1b1f.......
        ........fb111cfbf.......
        ........ffb1b1ff........
        ......f.fffbfbf.........
        ......ffffffff..........
        .......fffff............
        ........................
        ........................
        ........................
        ........................
        `)
    SkeLeft = animation.createAnimation(ActionKind.SkellyLeft, 200)
    animation.attachAnimation(enemySkelly, SkeLeft)
    SkeLeft.addAnimationFrame(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f1111111df.......
        ......fd1111111ddf......
        ......fd111111dddf......
        ......fd111ddddddf......
        ......fd1dfbddddbf......
        ......fbddfcdbbbcf......
        .......f11111bbcf.......
        .......f1b1fffff........
        .......fbfc111bf........
        ........ff1b1bff........
        .........fbfbfff.f......
        ..........ffffffff......
        ............fffff.......
        ........................
        ........................
        ........................
        ........................
        `)
    SkeLeft.addAnimationFrame(img`
        ........................
        ........................
        ........................
        ........................
        .........fffff..........
        ........f11111ff........
        .......fb111111bf.......
        .......f1111111dbf......
        ......fd111111dddf......
        ......fd11111ddddf......
        ......fd11dddddddf......
        ......f111dddddddf......
        ......f11fcddddddf......
        .....fb1111bdddbf.......
        .....f1b1bdfcfff........
        .....fbfbffffffff.......
        ......fffffffffff.ff....
        ...........ffffffff.....
        ........f1b1bffffff.....
        ........fbfbffffff......
        ........................
        ........................
        ........................
        ........................
        `)
}
sprites.onOverlap(SpriteKind.ShoppeGuy, SpriteKind.Player, function (sprite, otherSprite) {
    game.setDialogCursor(img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f f e e e e e e f f . 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        . f e d d b b d d e f . 
        . f f e 4 4 4 4 e f f . 
        e 4 f b 1 1 1 1 b f 4 e 
        4 d f 1 1 1 1 1 1 f d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `)
    game.showLongText("Why hello there, young Hero, would you like a fine cup of tea?", DialogLayout.Bottom)
    game.showLongText("I happen to have some that can replenish your hearts for a small price! ", DialogLayout.Bottom)
    if (info.score() > 34) {
        if (info.life() < Level + 2) {
            game.showLongText("35 points please!", DialogLayout.Bottom)
            music.powerUp.play()
            info.setLife(Level + 2)
            info.changeScoreBy(-35)
        } else {
            game.showLongText("Oh, seems like you already have full hearts. Well, come back if you take some damage!", DialogLayout.Bottom)
        }
    } else {
        game.showLongText("Oh, seems you don't have enough points. Oh well, come back when you have 35!", DialogLayout.Bottom)
    }
    pause(1000)
})
function EnterHouse () {
    for (let value of sprites.allOfKind(SpriteKind.Decoration)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Bat)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Cobra)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.CollectibleRare)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.PlayerHouse)) {
        value.destroy()
    }
    tiles.setTilemap(tilemap`level5`)
    BokoblinBoss = sprites.create(img`
        ...cccfffffffffff.......
        .fcdbddddddbbbc66ffccb..
        fbcddbddddddbbb6ccbbddb.
        fbcddb11111133bcddbcbddb
        .fcddd111111d33bd1db1bdb
        .bcdddd11111133b111b1bdc
        .bcdddb11111133b111b1bdc
        .bcdddb11111133b111b1bdc
        .bcdddb11111133b111b1bdc
        .bcdddb11111133b111b1bdc
        .bcdddd11111133b111b1bdc
        .fcddd111111d33bd1db1b1b
        fbcddb11111133bcddbcbddb
        fbcddbddddddbbbcccbbddb.
        .fcdbddddddbbbc66ffccb..
        ...ccffffffffffff.......
        `, SpriteKind.HouseDecoration)
    tiles.placeOnTile(BokoblinBoss, tiles.getTileLocation(8, 0))
    Couch = sprites.create(img`
        ...cccccccccccccccccc...
        ..cbddddddddddddddddbc..
        .cddddddddddddddddddddc.
        .cddbbbbbbbbbbbbbbbbddc.
        .cdbbbbbbbbbbbbbbbbbbdc.
        .cdbbbbbbbbbbbbbbbbbbdc.
        cbbbccccccccccccccccbbbc
        cddcbddddddddddddddbcddc
        cddcddddddddddddddddcddc
        cddcddddddddddddddddcddc
        cddcddddddddddddddddcddc
        cbdcddddddddddddddddcdbc
        ccbbbbbbbbbbbbbbbbbbbbcc
        ccbbbbbbbbbbbbbbbbbbbbcc
        cccccccccccccccccccccccc
        ..cbbc............cbbc..
        `, SpriteKind.HouseDecoration)
    tiles.placeOnTile(Couch, tiles.getTileLocation(1, 3))
    Couch2 = sprites.create(img`
        ..cbbc............cbbc..
        cccccccccccccccccccccccc
        cc33333333333333333333cc
        cc33333333333333333333cc
        c35c5555555555555555c53c
        c55c5555555555555555c55c
        c55c5555555555555555c55c
        c55c5555555555555555c55c
        c55c3555555555555553c55c
        c333cccccccccccccccc333c
        .c53333333333333333335c.
        .c53333333333333333335c.
        .c55333333333333333355c.
        .c55555555555555555555c.
        ..cd5555555555555555dc..
        ...cccccccccccccccccc...
        `, SpriteKind.HouseDecoration)
    tiles.placeOnTile(Couch2, tiles.getTileLocation(1, 5))
    Shelf = sprites.create(img`
        .cccccccccccccccccccccc.
        cbddddddddddddddddddddbc
        cddddddddddddddddddddddc
        cddddddddddddddddddddddc
        cddddddddddddddddddddddc
        cddddddddddddddddddddddc
        cddddddddddddddddddddddc
        cbddddddddddddddddddddbc
        ccbbbbbbbbbbbbbbbbbbbbcc
        ccffffffffffffffffffffcc
        cbcc33c6c44c3c7c66c3ccbc
        cbcc33c6c44c3c7c66c3ccbc
        fbcc33c6c44ccc7c66c3ccbf
        fdccccccccccccccccccccdf
        fdcbbddddddddddddddbbcdf
        fdffffffffffffffffffffdf
        fdccc6c33c4c6c44c3c7ccdf
        fdccc6c33c4c6c44c3c7ccdf
        fdccc6c33ccc6c44ccc7ccdf
        fdccccccccccccccccccccdf
        fdcbbddddddddddddddbbcdf
        fdcbbddddddddddddddbbcdf
        fdffffffffffffffffffffdf
        ffffffffffffffffffffffff
        `, SpriteKind.HouseDecoration)
    tiles.placeOnTile(Shelf, tiles.getTileLocation(1, 0))
    Table = sprites.create(img`
        ..cccccccccccccccccccccccccccc..
        .b9999999999999999999999999999..
        c999111111111111111111111111999c
        c991199999999999999999999991199c
        c991999999999999999999999999199c
        c991999999999999999999999999199c
        c991999999999999999999999999199c
        c991999999999999999999999999199c
        c991999999999999999999999999199c
        c991999999999999999999999999199c
        c991999999999999999999999999199c
        c991999999999999999999999999199c
        c991199999999999999999999991199c
        c999111111111111111111111111999c
        c899999999999999999999999999998c
        c889999999999999999999999999988c
        c888888888888888888888888888888c
        c388888888888888888888888888883c
        c388333888833388883338888333883c
        .cc8ccc8338ccc8338ccc8338ccc8cc.
        ..cccccccccccccccccccccccccccc..
        ..cbbc....................cbbc..
        ..c33c....................c33c..
        ...cc......................cc...
        `, SpriteKind.HouseDecoration)
    tiles.placeOnTile(Table, tiles.getTileLocation(4, 4))
    SmallShelf = sprites.create(img`
        .cccccccccccccc.
        cb777777777777bc
        c77777777777777c
        c77777777777777c
        c77777777777777c
        c77777777777777c
        c77777777777777c
        c77777777777777c
        c76666666666667c
        c66666666666666c
        c67777777777776c
        c6c666c66c666c6c
        f6c666cddc666c6f
        f6c6666cc6666c6f
        f6cccccccccccc6f
        f66666666666666f
        f67777777777776f
        f6c666c66c666c6f
        f6c666cddc666c6f
        f6c6666cc6666c6f
        f6cccccccccccc6f
        f66666666666666f
        f6ffffffffffff6f
        ffffffffffffffff
        `, SpriteKind.HouseDecoration)
    tiles.placeOnTile(SmallShelf, tiles.getTileLocation(9, 4))
    tiles.placeOnTile(Dungeoneer, tiles.getTileLocation(4, 7))
}
sprites.onOverlap(SpriteKind.Boss1, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-4)
    music.knock.play()
    scene.cameraShake(2, 500)
    pause(1000)
})
sprites.onOverlap(SpriteKind.QuestGirl, SpriteKind.Player, function (sprite, otherSprite) {
    game.setDialogCursor(img`
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 4 4 c c c c f . 
        . f f c c 4 4 4 4 c c f f . 
        . f f f b f 4 4 f b f f f . 
        . f f 4 1 f d d f 1 4 f f . 
        . . f f d d d d d d f f . . 
        . . e f e 4 4 4 4 e f e . . 
        . e 4 f b 3 3 3 3 b f 4 e . 
        . 4 d f 3 3 3 3 3 3 c d 4 . 
        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `)
    if (Quests == 0) {
        game.showLongText("Oh, hello there. I'm Sophie. I heard that you have been protecting the area.", DialogLayout.Bottom)
        game.showLongText("I'm...uh... a bit scared of the monsters lurking around here. So, I have a some quests for you, and will reward you if you complete them.", DialogLayout.Bottom)
        game.showLongText("Can you please defeat 15 enemies? I will reward you with 30 points.", DialogLayout.Bottom)
        Quests = 1
    }
    if (Quests == 1) {
        game.showLongText("Check your stat menu to see your quest progress!", DialogLayout.Bottom)
    }
    if (Quests == 2) {
        game.showLongText("Oh, I see that you have defeated the monsters. (sighs in relief) I was worried about you.", DialogLayout.Bottom)
        game.showLongText("Here are your 30 points. Thank you!", DialogLayout.Bottom)
        music.powerUp.play()
        info.changeScoreBy(30)
        Quests = 0
        QuestCount = 0
    }
    pause(1000)
})
let Sophie: Sprite = null
let SmallShelf: Sprite = null
let Table: Sprite = null
let Shelf: Sprite = null
let Couch2: Sprite = null
let Couch: Sprite = null
let SkeLeft: animation.Animation = null
let SkeRight: animation.Animation = null
let SkeIdle: animation.Animation = null
let playerArrow: Sprite = null
let Shoppe: Sprite = null
let Dungeoneers_House: Sprite = null
let CoinDrop: Sprite = null
let enemyCobra: Sprite = null
let ARight: animation.Animation = null
let Aleft: animation.Animation = null
let AUp: animation.Animation = null
let ADown: animation.Animation = null
let MoveLeft: animation.Animation = null
let MoveRight: animation.Animation = null
let MoveDown: animation.Animation = null
let MoveUp: animation.Animation = null
let IdleLeft: animation.Animation = null
let IdleRight: animation.Animation = null
let IdleUp: animation.Animation = null
let IdleDown: animation.Animation = null
let WeaponChest2: Sprite = null
let WeaponChest: Sprite = null
let Tree: Sprite = null
let Smith: Sprite = null
let SkellyHealth: StatusBarSprite = null
let enemySkelly: Sprite = null
let BatHealth: StatusBarSprite = null
let enemyBat: Sprite = null
let CobraHealth: StatusBarSprite = null
let Vertical = 0
let AttackA: Sprite = null
let Horizontal = 0
let Coin: Sprite = null
let Boss1Drop: Sprite = null
let QuestCount = 0
let Quests = 0
let BokoblinBoshealth: StatusBarSprite = null
let BokoblinBoss: Sprite = null
let Unhurtable = 0
let DMG = 0
let Level = 0
let Experience: StatusBarSprite = null
let Dungeoneer: Sprite = null
scene.cameraFollowSprite(Dungeoneer)
info.setLife(3)
Dungeoneer = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f e e e e f f . . . . 
    . . . f e e e f f e e e f . . . 
    . . f f f f f 2 2 f f f f f . . 
    . . f f e 2 e 2 2 e 2 e f f . . 
    . . f e 2 f 2 f f 2 f 2 e f . . 
    . . f f f 2 2 e e 2 2 f f f . . 
    . f f e f 2 f e e f 2 f e f f . 
    . f e e f f e e e e f e e e f . 
    . . f e e e e e e e e e e f . . 
    . . . f e e e e e e e e f . . . 
    . . e 4 f f f f f f f f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
Dungeoneer.setPosition(0, 80)
Dungeoneer.setStayInScreen(true)
scene.cameraFollowSprite(Dungeoneer)
tiles.setTilemap(tilemap`level2`)
SkellySpawn()
let House1 = sprites.create(img`
    ....................e2e22e2e....................
    .................222eee22e2e222.................
    ..............222e22e2e22eee22e222..............
    ...........e22e22eeee2e22e2eeee22e22e...........
    ........eeee22e22e22e2e22e2e22e22e22eeee........
    .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
    ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
    4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
    6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
    46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
    46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
    4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
    6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
    4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
    6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
    46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
    6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
    46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
    46622e22e22e22eeecc6666666666cceee22e22e22e22664
    4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
    6c622e22eeecc66666cc64444446cc66666cceee22e226c6
    46622e22cc66666cc64444444444446cc66666cc22e22664
    46622cc6666ccc64444444444444444446ccc6666cc22664
    4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
    cccccccc6666666cb44444444444444bc6666666cccccccc
    64444444444446c444444444444444444c64444444444446
    66cb444444444cb411111111111111114bc444444444bc66
    666cccccccccccd166666666666666661dccccccccccc666
    6666444444444c116eeeeeeeeeeeeee611c4444444446666
    666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
    666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
    666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
    666edffdffde4c66f4effffffffff4ee66c4edffdffde666
    666edccdccde4c66f4effffffffffeee66c4edccdccde666
    666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
    c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
    c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
    cc66666666664c66e4e44e44e44feeee66c46666666666cc
    .c66444444444c66e4e44e44e44ffffe66c44444444466c.
    ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
    ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
    ....644444444c66f4e44e44e44e44ee66c444444446....
    .....64eee444c66f4e44e44e44e44ee66c444eee46.....
    ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
    `, SpriteKind.House)
let House2 = sprites.create(img`
    ....................8a8aa8a8....................
    .................aaa888aa8a8aaa.................
    ..............aaa8aa8a8aa888aa8aaa..............
    ...........8aa8aa8888a8aa8a8888aa8aa8...........
    ........8888aa8aa8aa8a8aa8a8aa8aa8aa8888........
    .....aaa8aa8aa8888aa8a8aa8a8aa8888aa8aa8aaa.....
    ...aa8888aa8aa8aa8aa888aa888aa8aa8aa8aa8888aa...
    dccaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aaccd
    bcb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bcb
    dbbaa8aa8888aa8aa8888a8aa8a8888aa8aa8888aa8aabbd
    dbbaa8aa8aa8aa8888aa8a8aa8a8aa8888aa8aa8aa8aabbd
    dccaa8888aa8aa8aa8aa888aa888aa8aa8aa8aa8888aaccd
    bcbaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aabcb
    dbb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bbd
    dbbaa8aa8888aa8aa8aa8a8aa8a8aa8aa8aa8888aa8aabbd
    dccaa8aa8aa8aa8aa8888a8aa8a8888aa8aa8aa8aa8aaccd
    bcbaa8888aa8aa8888aa888aa888aa8888aa8aa8888aabcb
    dbbaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aabbd
    dbb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bbd
    dccaa8aa8888aa8aa8aa8a8aa8a8aa8aa8aa8888aa8aaccd
    bcbaa8aa8aa8aa8aa8aa888aa888aa8aa8aa8aa8aa8aabcb
    dbbaa8888aa8aa8aa888ccbbbbcc888aa8aa8aa8888aabbd
    dbbaa8aa8aa8aa888ccbbbbbbbbbbcc888aa8aa8aa8aabbd
    dcc888aa8aa888ccbbbbbccccccbbbbbcc888aa8aa888ccd
    bcbaa8aa888ccbbbbbccbddddddbccbbbbbcc888aa8aabcb
    dbbaa8aaccbbbbbccbddddddddddddbccbbbbbccaa8aabbd
    dbbaaccbbbbcccbddddddddddddddddddbcccbbbbccaabbd
    dcccbbbbcccbdddbccbbbbbbbbbbbbccbdddbcccbbbbcccd
    ccccccccbbbbbbbcbddddddddddddddbcbbbbbbbcccccccc
    bddddddddddddbcddddddddddddddddddcbddddddddddddb
    bbcbdddddddddcbd1111111111111111dbcdddddddddbcbb
    bbbcccccccccccd1bbbbbbbbbbbbbbbb1dcccccccccccbbb
    bbbbdddddddddc11beeeeeeeeeeeeeeb11cdddddddddbbbb
    bbb8aaaaaaa8dc1be3b33b33b33b33beb1cd8aaaaaaa8bbb
    bbb888888888dc1be3b33b33b33b33beb1cd888888888bbb
    bbb833333338dcbbf3b3effffffe33bebbcd833333338bbb
    bbb83ff3ff38dcbbf3bffffffffff3bebbcd83ff3ff38bbb
    bbb83cc3cc38dcbbf3effffffffffebebbcd83cc3cc38bbb
    bbb833333338dcbbf3eeeeeeeeeeeebebbcd833333338bbb
    cbb83ff3ff38dcbbe3b33b33b33b33bebbcd83ff3ff38bbc
    cbb83cc3cc38dcbbe3b33b33b33b33bebbcd83cc3cc38bbc
    ccbbbbbbbbbbdcbbe3b33b33b33feeeebbcdbbbbbbbbbbcc
    .cbbdddddddddcbbe3b33b33b33ffffebbcdddddddddbbc.
    ..cbdbbbdbbbdcbbf3b33b33b33f33febbcdbbbdbbbdbc..
    ...cdbbbdbbbdcbbf3b33b33b33bffeebbcdbbbdbbbdc...
    ....bddddddddcbbf3b33b33b33b33bebbcddddddddb....
    .....bdbbbdddcbbf3b33b33b33b33bebbcdddbbbdb.....
    ......bcccbbbcbbe3b33b33b33b33bebbcbbbcccb......
    `, SpriteKind.House)
let House3 = sprites.create(img`
    ....................e2e22e2e....................
    .................222eee22e2e222.................
    ..............222e22e2e22eee22e222..............
    ...........e22e22eeee2e22e2eeee22e22e...........
    ........eeee22e22e22e2e22e2e22e22e22eeee........
    .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
    ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
    4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
    6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
    46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
    46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
    4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
    6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
    4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
    6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
    46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
    6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
    46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
    46622e22e22e22eeecc6666666666cceee22e22e22e22664
    4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
    6c622e22eeecc66666cc64444446cc66666cceee22e226c6
    46622e22cc66666cc64444444444446cc66666cc22e22664
    46622cc6666ccc64444444444444444446ccc6666cc22664
    4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
    cccccccc6666666cb44444444444444bc6666666cccccccc
    64444444444446c444444444444444444c64444444444446
    66cb444444444cb411111111111111114bc444444444bc66
    666cccccccccccd166666666666666661dccccccccccc666
    6666444444444c116eeeeeeeeeeeeee611c4444444446666
    666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
    666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
    666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
    666edffdffde4c66f4effffffffff4ee66c4edffdffde666
    666edccdccde4c66f4effffffffffeee66c4edccdccde666
    666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
    c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
    c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
    cc66666666664c66e4e44e44e44feeee66c46666666666cc
    .c66444444444c66e4e44e44e44ffffe66c44444444466c.
    ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
    ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
    ....644444444c66f4e44e44e44e44ee66c444444446....
    .....64eee444c66f4e44e44e44e44ee66c444eee46.....
    ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
    `, SpriteKind.House)
let House4 = sprites.create(img`
    ....................e2e22e2e....................
    .................222eee22e2e222.................
    ..............222e22e2e22eee22e222..............
    ...........e22e22eeee2e22e2eeee22e22e...........
    ........eeee22e22e22e2e22e2e22e22e22eeee........
    .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
    ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
    4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
    6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
    46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
    46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
    4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
    6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
    4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
    6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
    46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
    6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
    46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
    46622e22e22e22eeecc6666666666cceee22e22e22e22664
    4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
    6c622e22eeecc66666cc64444446cc66666cceee22e226c6
    46622e22cc66666cc64444444444446cc66666cc22e22664
    46622cc6666ccc64444444444444444446ccc6666cc22664
    4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
    cccccccc6666666cb44444444444444bc6666666cccccccc
    64444444444446c444444444444444444c64444444444446
    66cb444444444cb411111111111111114bc444444444bc66
    666cccccccccccd166666666666666661dccccccccccc666
    6666444444444c116eeeeeeeeeeeeee611c4444444446666
    666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
    666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
    666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
    666edffdffde4c66f4effffffffff4ee66c4edffdffde666
    666edccdccde4c66f4effffffffffeee66c4edccdccde666
    666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
    c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
    c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
    cc66666666664c66e4e44e44e44feeee66c46666666666cc
    .c66444444444c66e4e44e44e44ffffe66c44444444466c.
    ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
    ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
    ....644444444c66f4e44e44e44e44ee66c444444446....
    .....64eee444c66f4e44e44e44e44ee66c444eee46.....
    ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
    `, SpriteKind.House)
let House5 = sprites.create(img`
    ....................8a8aa8a8....................
    .................aaa888aa8a8aaa.................
    ..............aaa8aa8a8aa888aa8aaa..............
    ...........8aa8aa8888a8aa8a8888aa8aa8...........
    ........8888aa8aa8aa8a8aa8a8aa8aa8aa8888........
    .....aaa8aa8aa8888aa8a8aa8a8aa8888aa8aa8aaa.....
    ...aa8888aa8aa8aa8aa888aa888aa8aa8aa8aa8888aa...
    dccaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aaccd
    bcb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bcb
    dbbaa8aa8888aa8aa8888a8aa8a8888aa8aa8888aa8aabbd
    dbbaa8aa8aa8aa8888aa8a8aa8a8aa8888aa8aa8aa8aabbd
    dccaa8888aa8aa8aa8aa888aa888aa8aa8aa8aa8888aaccd
    bcbaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aabcb
    dbb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bbd
    dbbaa8aa8888aa8aa8aa8a8aa8a8aa8aa8aa8888aa8aabbd
    dccaa8aa8aa8aa8aa8888a8aa8a8888aa8aa8aa8aa8aaccd
    bcbaa8888aa8aa8888aa888aa888aa8888aa8aa8888aabcb
    dbbaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aabbd
    dbb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bbd
    dccaa8aa8888aa8aa8aa8a8aa8a8aa8aa8aa8888aa8aaccd
    bcbaa8aa8aa8aa8aa8aa888aa888aa8aa8aa8aa8aa8aabcb
    dbbaa8888aa8aa8aa888ccbbbbcc888aa8aa8aa8888aabbd
    dbbaa8aa8aa8aa888ccbbbbbbbbbbcc888aa8aa8aa8aabbd
    dcc888aa8aa888ccbbbbbccccccbbbbbcc888aa8aa888ccd
    bcbaa8aa888ccbbbbbccbddddddbccbbbbbcc888aa8aabcb
    dbbaa8aaccbbbbbccbddddddddddddbccbbbbbccaa8aabbd
    dbbaaccbbbbcccbddddddddddddddddddbcccbbbbccaabbd
    dcccbbbbcccbdddbccbbbbbbbbbbbbccbdddbcccbbbbcccd
    ccccccccbbbbbbbcbddddddddddddddbcbbbbbbbcccccccc
    bddddddddddddbcddddddddddddddddddcbddddddddddddb
    bbcbdddddddddcbd1111111111111111dbcdddddddddbcbb
    bbbcccccccccccd1bbbbbbbbbbbbbbbb1dcccccccccccbbb
    bbbbdddddddddc11beeeeeeeeeeeeeeb11cdddddddddbbbb
    bbb8aaaaaaa8dc1be3b33b33b33b33beb1cd8aaaaaaa8bbb
    bbb888888888dc1be3b33b33b33b33beb1cd888888888bbb
    bbb833333338dcbbf3b3effffffe33bebbcd833333338bbb
    bbb83ff3ff38dcbbf3bffffffffff3bebbcd83ff3ff38bbb
    bbb83cc3cc38dcbbf3effffffffffebebbcd83cc3cc38bbb
    bbb833333338dcbbf3eeeeeeeeeeeebebbcd833333338bbb
    cbb83ff3ff38dcbbe3b33b33b33b33bebbcd83ff3ff38bbc
    cbb83cc3cc38dcbbe3b33b33b33b33bebbcd83cc3cc38bbc
    ccbbbbbbbbbbdcbbe3b33b33b33feeeebbcdbbbbbbbbbbcc
    .cbbdddddddddcbbe3b33b33b33ffffebbcdddddddddbbc.
    ..cbdbbbdbbbdcbbf3b33b33b33f33febbcdbbbdbbbdbc..
    ...cdbbbdbbbdcbbf3b33b33b33bffeebbcdbbbdbbbdc...
    ....bddddddddcbbf3b33b33b33b33bebbcddddddddb....
    .....bdbbbdddcbbf3b33b33b33b33bebbcdddbbbdb.....
    ......bcccbbbcbbe3b33b33b33b33bebbcbbbcccb......
    `, SpriteKind.House)
let House6 = sprites.create(img`
    ....................8a8aa8a8....................
    .................aaa888aa8a8aaa.................
    ..............aaa8aa8a8aa888aa8aaa..............
    ...........8aa8aa8888a8aa8a8888aa8aa8...........
    ........8888aa8aa8aa8a8aa8a8aa8aa8aa8888........
    .....aaa8aa8aa8888aa8a8aa8a8aa8888aa8aa8aaa.....
    ...aa8888aa8aa8aa8aa888aa888aa8aa8aa8aa8888aa...
    dccaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aaccd
    bcb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bcb
    dbbaa8aa8888aa8aa8888a8aa8a8888aa8aa8888aa8aabbd
    dbbaa8aa8aa8aa8888aa8a8aa8a8aa8888aa8aa8aa8aabbd
    dccaa8888aa8aa8aa8aa888aa888aa8aa8aa8aa8888aaccd
    bcbaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aabcb
    dbb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bbd
    dbbaa8aa8888aa8aa8aa8a8aa8a8aa8aa8aa8888aa8aabbd
    dccaa8aa8aa8aa8aa8888a8aa8a8888aa8aa8aa8aa8aaccd
    bcbaa8888aa8aa8888aa888aa888aa8888aa8aa8888aabcb
    dbbaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aabbd
    dbb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bbd
    dccaa8aa8888aa8aa8aa8a8aa8a8aa8aa8aa8888aa8aaccd
    bcbaa8aa8aa8aa8aa8aa888aa888aa8aa8aa8aa8aa8aabcb
    dbbaa8888aa8aa8aa888ccbbbbcc888aa8aa8aa8888aabbd
    dbbaa8aa8aa8aa888ccbbbbbbbbbbcc888aa8aa8aa8aabbd
    dcc888aa8aa888ccbbbbbccccccbbbbbcc888aa8aa888ccd
    bcbaa8aa888ccbbbbbccbddddddbccbbbbbcc888aa8aabcb
    dbbaa8aaccbbbbbccbddddddddddddbccbbbbbccaa8aabbd
    dbbaaccbbbbcccbddddddddddddddddddbcccbbbbccaabbd
    dcccbbbbcccbdddbccbbbbbbbbbbbbccbdddbcccbbbbcccd
    ccccccccbbbbbbbcbddddddddddddddbcbbbbbbbcccccccc
    bddddddddddddbcddddddddddddddddddcbddddddddddddb
    bbcbdddddddddcbd1111111111111111dbcdddddddddbcbb
    bbbcccccccccccd1bbbbbbbbbbbbbbbb1dcccccccccccbbb
    bbbbdddddddddc11beeeeeeeeeeeeeeb11cdddddddddbbbb
    bbb8aaaaaaa8dc1be3b33b33b33b33beb1cd8aaaaaaa8bbb
    bbb888888888dc1be3b33b33b33b33beb1cd888888888bbb
    bbb833333338dcbbf3b3effffffe33bebbcd833333338bbb
    bbb83ff3ff38dcbbf3bffffffffff3bebbcd83ff3ff38bbb
    bbb83cc3cc38dcbbf3effffffffffebebbcd83cc3cc38bbb
    bbb833333338dcbbf3eeeeeeeeeeeebebbcd833333338bbb
    cbb83ff3ff38dcbbe3b33b33b33b33bebbcd83ff3ff38bbc
    cbb83cc3cc38dcbbe3b33b33b33b33bebbcd83cc3cc38bbc
    ccbbbbbbbbbbdcbbe3b33b33b33feeeebbcdbbbbbbbbbbcc
    .cbbdddddddddcbbe3b33b33b33ffffebbcdddddddddbbc.
    ..cbdbbbdbbbdcbbf3b33b33b33f33febbcdbbbdbbbdbc..
    ...cdbbbdbbbdcbbf3b33b33b33bffeebbcdbbbdbbbdc...
    ....bddddddddcbbf3b33b33b33b33bebbcddddddddb....
    .....bdbbbdddcbbf3b33b33b33b33bebbcdddbbbdb.....
    ......bcccbbbcbbe3b33b33b33b33bebbcbbbcccb......
    `, SpriteKind.House)
House1.setPosition(37, 280)
House2.setPosition(100, 280)
House3.setPosition(163, 280)
tiles.placeOnRandomTile(House4, assets.tile`myTile3`)
tiles.placeOnRandomTile(House5, assets.tile`myTile2`)
tiles.placeOnRandomTile(House6, assets.tile`myTile1`)
Dungeoneer.setPosition(0, 110)
scene.setBackgroundColor(7)
Experience = statusbars.create(7, 60, StatusBarKind.Energy)
Experience.setColor(6, 2)
Experience.positionDirection(CollisionDirection.Right)
Experience.value = 0
Experience.setBarBorder(1, 15)
Level = 1
Experience.setLabel(convertToText(Level))
ChestsSpawn()
TreeSpawn()
CoinSpawn()
SpawnHeroHouse()
DMG = 10
SpawnShoppeGuy()
playerAnimate()
let Speed = 100
game.splash("Welcome!", "Fight Mobs, Level Up, Find Chests, and Explore!")
game.splash("Movement and Attacks", "Use the buttons to move, and A to attack in the direction you're moving")
game.splash("Stat Menu", "Double-tap B to open your Stat Menu, there you can see your stats and your enemies stats, as well as their biomes!")
game.splash("Explore!", "Don't forget, lots of stuff is generated randomly, so explore the world! Enjoy!")
Unhurtable = 0
game.onUpdate(function () {
    if (Experience.value == Experience.max) {
        music.powerUp.play()
        game.setDialogCursor(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . 4 4 e d d d d d d e 4 4 . . 
            . . d 4 e e 4 4 4 4 e e 4 d . . 
            . . 4 e f 2 2 2 2 2 2 f e 4 . . 
            . . . . f 2 2 2 2 2 2 f . . . . 
            . . . . f 4 4 5 5 4 4 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . b b . . b b . . . . . 
            `)
        for (let value of sprites.allOfKind(SpriteKind.AttackA)) {
            value.destroy()
        }
        game.splash("Level Up!", "+1 Max Hearts, +10 DMG")
        Experience.value = 0
        Experience.max += 50
        Level += 1
        info.setLife(Level + 2)
        Experience.setLabel(convertToText(Level))
        DMG += 10
        ChestsSpawn()
        if (Level == 2) {
            game.setDialogCursor(img`
                . . f f f . . . . . . . . . . . 
                f f f c c . . . . . . . . f f f 
                f f c c c . c c . . . f c b b c 
                f f c 3 c c 3 c c f f b b b c . 
                f f c 3 b c 3 b c f b b c c c . 
                f c b b b b b b c f b c b c c . 
                c c 1 b b b 1 b c b b c b b c . 
                c b b b b b b b b b c c c b c . 
                c b 1 f f 1 c b b c c c c c . . 
                c f 1 f f 1 f b b b b f c . . . 
                f f f f f f f b b b b f c . . . 
                f f 2 2 2 2 f b b b b f c c . . 
                . f 2 2 2 2 2 b b b c f . . . . 
                . . f 2 2 2 b b b c f . . . . . 
                . . . f f f f f f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            game.splash("New Enemy Unlocked!", "Check your stat menu to find out about them!")
            BatSpawn()
        }
        if (Level == 3) {
            game.setDialogCursor(img`
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c 4 4 c c c c f . 
                . f f c c 4 4 4 4 c c f f . 
                . f f f b f 4 4 f b f f f . 
                . f f 4 1 f d d f 1 4 f f . 
                . . f f d d d d d d f f . . 
                . . e f e 4 4 4 4 e f e . . 
                . e 4 f b 3 3 3 3 b f 4 e . 
                . 4 d f 3 3 3 3 3 3 c d 4 . 
                . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                . . . . f f f f f f . . . . 
                . . . . f f . . f f . . . . 
                `)
            game.splash("Quests Unlocked!", "Meet Sophie in the village.")
            Sophie = sprites.create(img`
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c 4 4 c c c c f . 
                . f f c c 4 4 4 4 c c f f . 
                . f f f b f 4 4 f b f f f . 
                . f f 4 1 f d d f 1 4 f f . 
                . . f f d d d d d d f f . . 
                . . e f e 4 4 4 4 e f e . . 
                . e 4 f b 3 3 3 3 b f 4 e . 
                . 4 d f 3 3 3 3 3 3 c d 4 . 
                . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                . . . . f f f f f f . . . . 
                . . . . f f . . f f . . . . 
                `, SpriteKind.QuestGirl)
            tiles.placeOnTile(Sophie, tiles.getTileLocation(2, 19))
            Quests = 0
            QuestCount = 0
            animation.runImageAnimation(
            Sophie,
            [img`
                . . . . . . . . . . . . . . 
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c 4 4 c c c c f . 
                . f f c c 4 4 4 4 c c f f . 
                . f f f b f 4 4 f b f f f . 
                . f f 4 1 f d d f 1 4 f f . 
                . . f f d d d d d d f f . . 
                . . e f e 4 4 4 4 e f e . . 
                . e 4 f b 3 3 3 3 b f 4 e . 
                . 4 d f 3 3 3 3 3 3 c d 4 . 
                . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                . . . . f f f f f f . . . . 
                . . . . f f . . f f . . . . 
                `,img`
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c 4 4 c c c c f . 
                . f f c c 4 4 4 4 c c f f . 
                . f f f b f 4 4 f b f f f . 
                . f f 4 1 f d d f 1 4 f f . 
                . . f f d d d d d d f f . . 
                . . e f e 4 4 4 4 e f e . . 
                . e 4 f b 3 3 3 3 b f 4 e . 
                . 4 d f 3 3 3 3 3 3 c d 4 . 
                . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                . . . . f f f f f f . . . . 
                . . . . f f . . f f . . . . 
                . . . . f f . . f f . . . . 
                `],
            400,
            true
            )
            Sophie.say("Quests")
        }
        if (Level == 4) {
            game.setDialogCursor(img`
                . . . . . c c c c c c c . . . . 
                . . . . c 6 7 7 7 7 7 6 c . . . 
                . . . c 7 c 6 6 6 6 c 7 6 c . . 
                . . c 6 7 6 f 6 6 f 6 7 7 c . . 
                . . c 7 7 7 7 7 7 7 7 7 7 c . . 
                . . f 7 8 1 f f 1 6 7 7 7 f . . 
                . . f 6 f 1 f f 1 f 7 7 7 f . . 
                . . . f f 2 2 2 2 f 7 7 6 f . . 
                . . c c f 2 2 2 2 7 7 6 f c . . 
                . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
                c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
                f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
                f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
                f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
                . f 6 1 1 1 1 1 6 6 6 6 c . . . 
                . . f f c c c c c c c c . . . . 
                `)
            game.splash("New Enemy Unlocked!", "Check your stat menu to find out about them!")
            CobraSpawn()
        }
        if (Level == 5) {
            game.setDialogCursor(img`
                . . . . f f f f . . . . . 
                . . f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f f f c c f f f c . 
                f f f c f f f f f f f c . 
                c c c f f f e e f f c c . 
                f f f f f e e f f c c f . 
                f f f b f e e f b f f f . 
                . f 4 1 f 4 e f 1 4 f . . 
                . f e 4 4 e 4 4 4 e f . . 
                . f f f e e e e f f f . . 
                f e f b f 7 7 f b f e f . 
                e 4 f 7 f 7 7 f 7 f 4 e . 
                e e f 6 f 6 6 f 6 f e e . 
                . . . f f f f f f . . . . 
                . . . f f . . f f . . . . 
                `)
            game.splash("Upgrades Unlocked!", "Go and meet Smith in the village.")
            BlackSmithSpawn()
            Smith.say("80P, + 20 DMG")
        }
        if (Level == 7) {
            SpawnBoss1()
        }
    }
})
game.onUpdate(function () {
    if (Level > 3) {
        for (let value of sprites.allOfKind(SpriteKind.Cobra)) {
            if (Dungeoneer.y < value.y + 50 && (Dungeoneer.x < value.x + 50 && (Dungeoneer.y > value.y - 50 && Dungeoneer.x > value.x - 50))) {
                value.follow(Dungeoneer, 70)
            }
            if (value.vx == 0 && value.vy == 0) {
                value.setImage(img`
                    . . . c c c c c c . . . . . . . 
                    . . c 6 7 7 7 7 6 c . . . . . . 
                    . c 7 7 7 7 7 7 7 7 c . . . . . 
                    c 6 7 7 7 7 7 7 7 7 6 c . . . . 
                    c 7 c 6 6 6 6 c 7 7 7 c . . . . 
                    f 7 6 f 6 6 f 6 7 7 7 f . . . . 
                    f 7 7 7 7 7 7 7 7 7 7 f . . . . 
                    . f 7 7 7 7 6 c 7 7 6 f . . . . 
                    . . f c c c c 7 7 6 f c c c . . 
                    . . c 6 2 7 7 7 f c c 7 7 7 c . 
                    . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
                    . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
                    . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
                    . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
                    . . c 6 1 1 1 1 1 7 6 6 c c . . 
                    . . . c c c c c c c c c c . . . 
                    `)
            }
            if (value.vx > 0) {
                value.setImage(img`
                    . . . . . c c c c c c c . . . . 
                    . . . . c 6 7 7 7 7 7 6 c . . . 
                    . . . c 7 c 6 6 6 6 c 7 6 c . . 
                    . . c 6 7 6 f 6 6 f 6 7 7 c . . 
                    . . c 7 7 7 7 7 7 7 7 7 7 c . . 
                    . . f 7 8 1 f f 1 6 7 7 7 f . . 
                    . . f 6 f 1 f f 1 f 7 7 7 f . . 
                    . . . f f 2 2 2 2 f 7 7 6 f . . 
                    . . c c f 2 2 2 2 7 7 6 f c . . 
                    . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
                    c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
                    f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
                    f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
                    f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
                    . f 6 1 1 1 1 1 6 6 6 6 c . . . 
                    . . f f c c c c c c c c . . . . 
                    `)
            } else {
                value.setImage(img`
                    . . . . . c c c c c c c . . . . 
                    . . . . c 6 7 7 7 7 7 6 c . . . 
                    . . . c 7 c 6 6 6 6 c 7 6 c . . 
                    . . c 6 7 6 f 6 6 f 6 7 7 c . . 
                    . . c 7 7 7 7 7 7 7 7 7 7 c . . 
                    . . f 7 8 1 f f 1 6 7 7 7 f . . 
                    . . f 6 f 1 f f 1 f 7 7 7 f . . 
                    . . . f f 2 2 2 2 f 7 7 6 f . . 
                    . . c c f 2 2 2 2 7 7 6 f c . . 
                    . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
                    c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
                    f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
                    f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
                    f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
                    . f 6 1 1 1 1 1 6 6 6 6 c . . . 
                    . . f f c c c c c c c c . . . . 
                    `)
            }
        }
    }
})
game.onUpdate(function () {
    if (Level > 1) {
        for (let value of sprites.allOfKind(SpriteKind.Bat)) {
            if (Dungeoneer.y < value.y + 50 && (Dungeoneer.x < value.x + 50 && (Dungeoneer.y > value.y - 50 && Dungeoneer.x > value.x - 50))) {
                value.follow(Dungeoneer, 70)
            }
            if (value.vx == 0 && value.vy == 0) {
                value.setImage(img`
                    . . f f f . . . . . . . . . . . 
                    f f f c c . . . . . . . . f f f 
                    f f c c . . c c . . . f c b b c 
                    f f c 3 c c 3 c c f f b b b c . 
                    f f b 3 b c 3 b c f b b c c c . 
                    . c b b b b b b c f b c b c c . 
                    . c b b b b b b c b b c b b c . 
                    c b 1 b b b 1 b b b c c c b c . 
                    c b b b b b b b b c c c c c . . 
                    f b c b b b c b b b b f c . . . 
                    f b 1 f f f 1 b b b b f c c . . 
                    . f b b b b b b b b c f . . . . 
                    . . f b b b b b b c f . . . . . 
                    . . . f f f f f f f . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `)
            }
            if (value.vx > 0) {
                value.setImage(img`
                    . . . . . . . . . . . f f f . . 
                    f f f . . . . . . . . c c f f f 
                    c b b c f . . . c c . c c c f f 
                    . c b b b f f c c 3 c c 3 c f f 
                    . c c c b b f c b 3 c b 3 c f f 
                    . c c b c b f c b b b b b b c f 
                    . c b b c b b c b 1 b b b 1 c c 
                    . c b c c c b b b b b b b b b c 
                    . . c c c c c b b c 1 f f 1 b c 
                    . . . c f b b b b f 1 f f 1 f c 
                    . . . c f b b b b f f f f f f f 
                    . . c c f b b b b f 2 2 2 2 f f 
                    . . . . f c b b b 2 2 2 2 2 f . 
                    . . . . . f c b b b 2 2 2 f . . 
                    . . . . . . f f f f f f f . . . 
                    . . . . . . . . . . . . . . . . 
                    `)
            } else {
                value.setImage(img`
                    . . f f f . . . . . . . . . . . 
                    f f f c c . . . . . . . . f f f 
                    f f c c c . c c . . . f c b b c 
                    f f c 3 c c 3 c c f f b b b c . 
                    f f c 3 b c 3 b c f b b c c c . 
                    f c b b b b b b c f b c b c c . 
                    c c 1 b b b 1 b c b b c b b c . 
                    c b b b b b b b b b c c c b c . 
                    c b 1 f f 1 c b b c c c c c . . 
                    c f 1 f f 1 f b b b b f c . . . 
                    f f f f f f f b b b b f c . . . 
                    f f 2 2 2 2 f b b b b f c c . . 
                    . f 2 2 2 2 2 b b b c f . . . . 
                    . . f 2 2 2 b b b c f . . . . . 
                    . . . f f f f f f f . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `)
            }
        }
    }
})
game.onUpdate(function () {
    if (Level > 6) {
        for (let value of sprites.allOfKind(SpriteKind.Boss1)) {
            if (Dungeoneer.y < value.y + 50 && (Dungeoneer.x < value.x + 50 && (Dungeoneer.y > value.y - 50 && Dungeoneer.x > value.x - 50))) {
                value.follow(Dungeoneer, 70)
            }
            if (value.vx == 0 && value.vy == 0) {
                value.setImage(img`
                    ..............ffff.ffff..ff........
                    ...........fffe444f4444ffeef.......
                    ..........fe44444444444f4444f......
                    .........f4444444444444f44444f.....
                    .........f44444444444444f44444f....
                    ........f4eee44444eeee4ee444444f...
                    .......f44444ff44444444ef44444ef...
                    ......fffffffffffffffffffef444f....
                    .......f5ff5f44f55fff55feeefef.....
                    .......f5f45f444f5ff45f4eeeef......
                    .......f5555f4444f555f44eeeef......
                    ......fdffff444444fff444eeee8f.....
                    ......fddddd444444444444eeee88f....
                    ...ff.fddbddd4444444444444ee888f...
                    ..feef.fdbdbdd4444444444444ff884f..
                    ..feef..fbdbdd441111444444f888444f.
                    ..feefffffffddee1111eeeeffe888f444f
                    ..ffeef.....ffffffffffff4e8888.f44f
                    ...feef....ff44f88e444444e8888.f44f
                    ...ffeff..ff444f88e44444ee8888.f44f
                    ....feef.ff44fff88e444444ee888f4444
                    ....ffef.f44fff88e44dddd4eee88fe444
                    .....feef444ff4ee44ddddddeeeeef4444
                    ......fff44ff444444dfddfdd4eeeffe4e
                    .........4fff888888dfddfdd88888ffff
                    .........ff.f888888dddddd8ff888ff..
                    ...........f4488888ffddddf..f884f..
                    ..........f44444fff..fddf....f444f.
                    ..........fee44ff....fff.....fee4f.
                    ...........ffff...............fff..
                    `)
            }
            if (value.vx > 0) {
                value.setImage(img`
                    ........ff..ffff.ffff..............
                    .......feeff4444f444efff...........
                    ......f4444f44444444444ef..........
                    .....f44444f4444444444444f.........
                    ....f44444f44444444444444f.........
                    ...f444444ee4eeee44444eee4f........
                    ...fe44444fe44444444ff44444f.......
                    ....f444fefffffffffffffffffff......
                    .....fefeeef55fff55f44f5ff5f.......
                    ......feeee4f54ff5f444f54f5f.......
                    ......feeee44f555f4444f5555f.......
                    .....f8eeee444fff444444ffffdf......
                    ....f88eeee444444444444dddddf......
                    ...f888ee4444444444444dddbddf.ff...
                    ..f488ff4444444444444ddbdbdf.feef..
                    .f444888f444444111144ddbdbf..feef..
                    f444f888effeeee1111eeddfffffffeef..
                    f44f.8888e4ffffffffffff.....feeff..
                    f44f.8888e444444e88f44ff....feef...
                    f44f.8888ee44444e88f444ff..ffeff...
                    4444f888ee444444e88fff44ff.feef....
                    444ef88eee4dddd44e88fff44f.feff....
                    4444feeeeedddddd44ee4ff444feef.....
                    e4effeee4ddfddfd444444ff44fff......
                    ffff88888ddfddfd888888fff4.........
                    ..ff888ff8dddddd888888f.ff.........
                    ..f488f..fddddff8888844f...........
                    .f444f....fddf..fff44444f..........
                    .f4eef.....fff....ff44eef..........
                    ..fff...............ffff...........
                    `)
            } else {
                value.setImage(img`
                    ..............ffff.ffff..ff........
                    ...........fffe444f4444ffeef.......
                    ..........fe44444444444f4444f......
                    .........f4444444444444f44444f.....
                    .........f44444444444444f44444f....
                    ........f4eee44444eeee4ee444444f...
                    .......f44444ff44444444ef44444ef...
                    ......fffffffffffffffffffef444f....
                    .......f5ff5f44f55fff55feeefef.....
                    .......f5f45f444f5ff45f4eeeef......
                    .......f5555f4444f555f44eeeef......
                    ......fdffff444444fff444eeee8f.....
                    ......fddddd444444444444eeee88f....
                    ...ff.fddbddd4444444444444ee888f...
                    ..feef.fdbdbdd4444444444444ff884f..
                    ..feef..fbdbdd441111444444f888444f.
                    ..feefffffffddee1111eeeeffe888f444f
                    ..ffeef.....ffffffffffff4e8888.f44f
                    ...feef....ff44f88e444444e8888.f44f
                    ...ffeff..ff444f88e44444ee8888.f44f
                    ....feef.ff44fff88e444444ee888f4444
                    ....ffef.f44fff88e44dddd4eee88fe444
                    .....feef444ff4ee44ddddddeeeeef4444
                    ......fff44ff444444dfddfdd4eeeffe4e
                    .........4fff888888dfddfdd88888ffff
                    .........ff.f888888dddddd8ff888ff..
                    ...........f4488888ffddddf..f884f..
                    ..........f44444fff..fddf....f444f.
                    ..........fee44ff....fff.....fee4f.
                    ...........ffff...............fff..
                    `)
            }
        }
    }
})
game.onUpdateInterval(4000, function () {
    Shoppe.say("35 Points: Max Health Heal", 4000)
})
forever(function () {
	
})
forever(function () {
    if (Unhurtable == 1) {
        Dungeoneer.setFlag(SpriteFlag.Invisible, true)
        pause(100)
        Dungeoneer.setFlag(SpriteFlag.Invisible, false)
        pause(100)
    }
})
game.onUpdate(function () {
    if (QuestCount == 15) {
        game.setDialogCursor(img`
            . f f f . f f f f . f f f . 
            f f f f f c c c c f f f f f 
            f f f f b c c c c b f f f f 
            f f f c 3 c c c c 3 c f f f 
            . f 3 3 c c c c c c 3 3 f . 
            . f c c c c 4 4 c c c c f . 
            . f f c c 4 4 4 4 c c f f . 
            . f f f b f 4 4 f b f f f . 
            . f f 4 1 f d d f 1 4 f f . 
            . . f f d d d d d d f f . . 
            . . e f e 4 4 4 4 e f e . . 
            . e 4 f b 3 3 3 3 b f 4 e . 
            . 4 d f 3 3 3 3 3 3 c d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . f f f f f f . . . . 
            . . . . f f . . f f . . . . 
            `)
        game.splash("Quest Complete!", "Go and talk to Sophie for your reward.")
        QuestCount = 16
        Quests = 2
    }
})
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (Dungeoneer.y < value.y + 50 && (Dungeoneer.x < value.x + 50 && (Dungeoneer.y > value.y - 50 && Dungeoneer.x > value.x - 50))) {
            value.follow(Dungeoneer, 50)
        }
        if (value.vx == 0 && value.vy == 0) {
            value.setImage(img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ......fd11111111df......
                ......fddd1111dddf......
                ......fbdbfddfbdbf......
                ......fcdcf11fcdcf......
                .......fb111111bf.......
                ......fffcdb1bdffff.....
                ....fc111cbfbfc111cf....
                ....f1b1b1ffff1b1b1f....
                ....fbfbffffffbfbfbf....
                .........ffffff.........
                ...........fff..........
                ........................
                ........................
                ........................
                ........................
                `)
        }
        if (value.vx > 0) {
            value.setImage(img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......fd1111111f.......
                ......fdd1111111df......
                ......fddd111111df......
                ......fdddddd111df......
                ......fbddddbfd1df......
                ......fcbbbdcfddbf......
                .......fcbb11111f.......
                ........fffff1b1f.......
                ........fb111cfbf.......
                ........ffb1b1ff........
                ......f.fffbfbf.........
                ......ffffffff..........
                .......fffff............
                ........................
                ........................
                ........................
                ........................
                `)
        } else {
            value.setImage(img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f1111111df.......
                ......fd1111111ddf......
                ......fd111111dddf......
                ......fd111ddddddf......
                ......fd1dfbddddbf......
                ......fbddfcdbbbcf......
                .......f11111bbcf.......
                .......f1b1fffff........
                .......fbfc111bf........
                ........ff1b1bff........
                .........fbfbfff.f......
                ..........ffffffff......
                ............fffff.......
                ........................
                ........................
                ........................
                ........................
                `)
        }
    }
})
forever(function () {
    music.playMelody("E G F E B F A D ", 220)
    music.playMelody("E G F E A E G D ", 220)
    music.playMelody("E E F G F A G F ", 220)
    music.playMelody("C5 E F G F A G F ", 220)
    music.playMelody("C5 B C5 A B - C5 G ", 220)
    music.playMelody("C5 B C5 A B - C5 G ", 220)
    music.playMelody("G F E C C C C E ", 220)
    music.playMelody("G F E C C C C E ", 220)
})
game.onUpdate(function () {
    controller.moveSprite(Dungeoneer, Speed, Speed)
    if (Dungeoneer.vx > 0) {
        Vertical = 0
        Horizontal = 1
    }
    if (Dungeoneer.vx < 0) {
        Vertical = 0
        Horizontal = -1
    }
    if (Dungeoneer.vy > 0) {
        Vertical = 1
        Horizontal = 0
    }
    if (Dungeoneer.vy < 0) {
        Vertical = -1
        Horizontal = 0
    }
    if (controller.A.isPressed()) {
    	
    } else {
        if (Horizontal == 1) {
            if (Dungeoneer.vx != 0) {
                animation.setAction(Dungeoneer, ActionKind.WalkRight)
            } else {
                animation.setAction(Dungeoneer, ActionKind.IdleRight)
            }
        }
        if (Horizontal == -1) {
            if (Dungeoneer.vx != 0) {
                animation.setAction(Dungeoneer, ActionKind.WalkLeft)
            } else {
                animation.setAction(Dungeoneer, ActionKind.IdleLeft)
            }
        }
        if (Vertical == 1) {
            if (Dungeoneer.vy != 0) {
                animation.setAction(Dungeoneer, ActionKind.WalkDown)
            } else {
                animation.setAction(Dungeoneer, ActionKind.IdleDown)
            }
        }
        if (Vertical == -1) {
            if (Dungeoneer.vy != 0) {
                animation.setAction(Dungeoneer, ActionKind.WalkUp)
            } else {
                animation.setAction(Dungeoneer, ActionKind.IdleUp)
            }
        }
    }
})
