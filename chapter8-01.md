### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```template
player.onChat("run", function () {
    if (agentInspectDetect.agentDetect(AgentDetection.Block, FORWARD) == true) {
        agent.destroy(FORWARD)
    } else {
        agent.place(FORWARD)
    }
})
```