### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## Let's use the agent to place blocks!

This time we'll use the ``||loops.repeat ~ times do||`` block! How many times should you place a block in front and move down? Try changing the number in the “repeat” section!

After that, press the button on the bottom right![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png) to start the program!

```ghost
for (let index = 0; index < 4; index++) {
    
}
hiragana_agent.place(FORWARD)
hiragana_agent.move(FORWARD, 1)
hiragana_agent.move()

```

```template
for (let index = 0; index < 1; index++) {
    hiragana_agent.place(FORWARD)
    hiragana_agent.move(DOWN, 1)
}
```