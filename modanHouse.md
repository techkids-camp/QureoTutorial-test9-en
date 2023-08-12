### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをつかって、たてものをつくってもらおう！

プログラムはすでにかんせいしているからうごかすだけだよ！

そのあとみぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたらプログラムがうごくよ！

```ghost
function くうらん () {
    for (let index = 0; index < 4; index++) {
        agent.place(FORWARD)
        agent.move(UP, 1)
    }
    agent.place(FORWARD)
    agent.move(DOWN, 1)
}
function くうらん2 () {
    agent.move(DOWN, 5)
    agent.move(RIGHT, 1)
    agent.move(FORWARD, 1)
    agent.turn(LEFT_TURN)
}
player.onChat("run", function () {
    agent.move(FORWARD, 3)
    for (let index = 0; index < 5; index++) {
        agent.setSlot(1)
        くうらん()
        for (let index = 0; index < 3; index++) {
            agent.place(UP)
            agent.move(BACK, 1)
        }
        agent.place(UP)
        agent.move(FORWARD, 3)
        agent.move(DOWN, 3)
        agent.move(LEFT, 1)
    }
    agent.move(BACK, 3)
    agent.turn(RIGHT_TURN)
    for (let index = 0; index < 3; index++) {
        agent.place(FORWARD)
        agent.move(UP, 1)
    }
    agent.place(FORWARD)
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 3)
    agent.turn(LEFT_TURN)
    agent.move(BACK, 2)
    agent.setSlot(2)
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 3; index++) {
            agent.place(FORWARD)
            agent.move(DOWN, 1)
        }
        agent.place(FORWARD)
        agent.move(UP, 3)
        agent.move(LEFT, 1)
    }
    agent.move(BACK, 3)
    agent.move(DOWN, 3)
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, 2)
    for (let index = 0; index < 3; index++) {
        agent.place(FORWARD)
        agent.move(UP, 1)
    }
    agent.place(FORWARD)
    agent.move(DOWN, 1)
    for (let index = 0; index < 3; index++) {
        agent.place(UP)
        agent.move(BACK, 1)
    }
    agent.place(UP)
    agent.move(FORWARD, 2)
    agent.setSlot(3)
    agent.place(FORWARD)
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
    agent.place(FORWARD)
    agent.move(DOWN, 1)
    agent.place(UP)
    agent.place(FORWARD)
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
    agent.place(FORWARD)
    agent.move(DOWN, 1)
    agent.place(FORWARD)
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
    agent.place(FORWARD)
    agent.turn(RIGHT_TURN)
    agent.move(BACK, 1)
    agent.setSlot(4)
    agent.place(FORWARD)
    agent.move(UP, 2)
    agent.turn(RIGHT_TURN)
    agent.setSlot(5)
    for (let index = 0; index < 2; index++) {
        agent.place(FORWARD)
        agent.move(BACK, 1)
    }
    agent.place(FORWARD)
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
    agent.move(DOWN, 2)
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 5; index++) {
            agent.setSlot(2)
            agent.place(FORWARD)
            agent.move(UP, 1)
            agent.setSlot(3)
            agent.place(DOWN)
        }
        agent.turn(LEFT_TURN)
        for (let index = 0; index < 7; index++) {
            agent.move(BACK, 1)
            agent.place(FORWARD)
        }
        くうらん2()
        for (let index = 0; index < 5; index++) {
            agent.setSlot(3)
            agent.place(FORWARD)
            agent.move(UP, 1)
            agent.setSlot(2)
            agent.place(DOWN)
        }
        agent.turn(LEFT_TURN)
        agent.setSlot(3)
        for (let index = 0; index < 7; index++) {
            agent.move(BACK, 1)
            agent.place(FORWARD)
        }
        agent.move(DOWN, 5)
        agent.move(LEFT, 1)
        agent.move(FORWARD, 1)
        agent.turn(LEFT_TURN)
    }
    agent.turn(LEFT_TURN)
    agent.setSlot(3)
    for (let index = 0; index < 3; index++) {
        agent.move(UP, 1)
        for (let index = 0; index < 7; index++) {
            agent.place(DOWN)
            agent.move(BACK, 1)
        }
        agent.move(UP, 1)
        for (let index = 0; index < 7; index++) {
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
    }
})


```

```template
function くうらん () {
    for (let index = 0; index < 4; index++) {
        agent.place(FORWARD)
        agent.move(UP, 1)
    }
    agent.place(FORWARD)
    agent.move(DOWN, 1)
}
function くうらん2 () {
    agent.move(DOWN, 5)
    agent.move(RIGHT, 1)
    agent.move(FORWARD, 1)
    agent.turn(LEFT_TURN)
}
player.onChat("run", function () {
    agent.move(FORWARD, 3)
    for (let index = 0; index < 5; index++) {
        agent.setSlot(1)
        くうらん()
        for (let index = 0; index < 3; index++) {
            agent.place(UP)
            agent.move(BACK, 1)
        }
        agent.place(UP)
        agent.move(FORWARD, 3)
        agent.move(DOWN, 3)
        agent.move(LEFT, 1)
    }
    agent.move(BACK, 3)
    agent.turn(RIGHT_TURN)
    for (let index = 0; index < 3; index++) {
        agent.place(FORWARD)
        agent.move(UP, 1)
    }
    agent.place(FORWARD)
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 3)
    agent.turn(LEFT_TURN)
    agent.move(BACK, 2)
    agent.setSlot(2)
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 3; index++) {
            agent.place(FORWARD)
            agent.move(DOWN, 1)
        }
        agent.place(FORWARD)
        agent.move(UP, 3)
        agent.move(LEFT, 1)
    }
    agent.move(BACK, 3)
    agent.move(DOWN, 3)
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, 2)
    for (let index = 0; index < 3; index++) {
        agent.place(FORWARD)
        agent.move(UP, 1)
    }
    agent.place(FORWARD)
    agent.move(DOWN, 1)
    for (let index = 0; index < 3; index++) {
        agent.place(UP)
        agent.move(BACK, 1)
    }
    agent.place(UP)
    agent.move(FORWARD, 2)
    agent.setSlot(3)
    agent.place(FORWARD)
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
    agent.place(FORWARD)
    agent.move(DOWN, 1)
    agent.place(UP)
    agent.place(FORWARD)
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
    agent.place(FORWARD)
    agent.move(DOWN, 1)
    agent.place(FORWARD)
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
    agent.place(FORWARD)
    agent.turn(RIGHT_TURN)
    agent.move(BACK, 1)
    agent.setSlot(4)
    agent.place(FORWARD)
    agent.move(UP, 2)
    agent.turn(RIGHT_TURN)
    agent.setSlot(5)
    for (let index = 0; index < 2; index++) {
        agent.place(FORWARD)
        agent.move(BACK, 1)
    }
    agent.place(FORWARD)
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
    agent.move(DOWN, 2)
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 5; index++) {
            agent.setSlot(2)
            agent.place(FORWARD)
            agent.move(UP, 1)
            agent.setSlot(3)
            agent.place(DOWN)
        }
        agent.turn(LEFT_TURN)
        for (let index = 0; index < 7; index++) {
            agent.move(BACK, 1)
            agent.place(FORWARD)
        }
        くうらん2()
        for (let index = 0; index < 5; index++) {
            agent.setSlot(3)
            agent.place(FORWARD)
            agent.move(UP, 1)
            agent.setSlot(2)
            agent.place(DOWN)
        }
        agent.turn(LEFT_TURN)
        agent.setSlot(3)
        for (let index = 0; index < 7; index++) {
            agent.move(BACK, 1)
            agent.place(FORWARD)
        }
        agent.move(DOWN, 5)
        agent.move(LEFT, 1)
        agent.move(FORWARD, 1)
        agent.turn(LEFT_TURN)
    }
    agent.turn(LEFT_TURN)
    agent.setSlot(3)
    for (let index = 0; index < 3; index++) {
        agent.move(UP, 1)
        for (let index = 0; index < 7; index++) {
            agent.place(DOWN)
            agent.move(BACK, 1)
        }
        agent.move(UP, 1)
        for (let index = 0; index < 7; index++) {
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
    }
})

```