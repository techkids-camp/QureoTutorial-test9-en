//% color=#D83B01 weight=400 icon="\uf04b" block=エージェント
namespace agentHiragana {
    //% blockId=agentMoveHiragana
    //% block="エージェントを $direction に $value ブロックいどうさせる"
    export function agentMoveHiragana(direction: SixDirection, value: number){
        agent.move(direction, value);
    }

    //% blockId=agentSetHiragana
    //% block="エージェントを $direction へおかせる"
    export function agentSetHiragana(direction: SixDirection) {
        agent.place(direction);
    }

    //% blockId=agentBreakHiragana
    //% block="エージェントに $direction をはかいさせる"
    export function agentBreakHiragana(direction: SixDirection) {
        agent.destory(direction);
    }
}