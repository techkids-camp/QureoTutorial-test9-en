### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## Let's get the agent to place blocks!

This time we'll use the ``||loops.repeat ~ times do||`` block! How many times do you think you should repeat “move left and go forward”?

After that, press the button on the bottom right![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png) to start the program!

```ghost
for (let index = 0; index < 4; index++) {
    
}
hiragana_agent.place(FORWARD)
hiragana_agent.move(FORWARD, 1)
```

```template
for (let index = 0; index < 0; index++) {
    hiragana_agent.move(LEFT, 1)
    hiragana_agent.move(FORWARD, 1)
}
hiragana_agent.place(FORWARD)
```