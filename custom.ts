//% color=#D83B01 weight=400 icon="\uf04b" block=エージェント
namespace agentHiragana {
    //% blockId=agentMoveHiragana
    //% block="エージェントを $direction に $value ブロックいどうさせる"
    export function agentMoveHiragana(direction: SixDirection, value: number){
        agent.move(direction, value);
    }

    //% blockId=agentSetHiragana
    //% block="エージェントを $direction へ置かせる"
    export function agentSetHiragana(direction: SixDirection) {
        agent.place(direction);
    }
}