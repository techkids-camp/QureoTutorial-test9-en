### @hideIteration true
# QureoMinecraft

## エージェントをつかって、ブロックをおいてもらおう！

エージェントをつかってブロックをおいてもらうには、
``||agent.エージェントに前へ置かせる||``ブロックをつかうよ！

ひだりから「エージェントボタン」をクリックしてそのなかにあるブロックを``||loop.最初だけ||``のわくにいれちゃおう！

<span>
<style>
    g:has(> path[stroke="#005aa1"]){
        display:none !important;
    }
</style>
</span>

そのあとみぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたらプログラムがうごくよ！

```ghost
agent.place(FORWARD)
```