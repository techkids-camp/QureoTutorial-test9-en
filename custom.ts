/**
 * Custom blocks
 */
//% color=#D83B01 weight=400 icon="\uf04b" block="エージェントチェック"
namespace agentInspectDetect{
    //% blockId=agentInspect
    //% block="エージェントにどんな $kind か、 $direction を確認させる"
    export function agentInspect(kind: AgentInspection, direction: SixDirection): number {
        return agent.inspect(kind, direction);
    }

    //% blockId=agentDetect
    //% block="エージェントに $kind があるか、 $direction を確認させる"
    export function agentDetect(kind: AgentDetection, direction: SixDirection): boolean {
        return agent.detect(kind, direction);
    }
}

/**
 * Custom blocks
 */
//% color=#D83B01 weight=400 icon="\uf04b" block="ひらがな_プレイヤー"
namespace hiragana_player{

    //% blockId=hiragana_player
    //% block="じぶんを $to にテレポートさせる"
    export function agentDetect(pos: Position): void {
        return player.teleport(pos);
    }
}

/**
 * Custom blocks
 */
//% color=#D83B01 weight=400 icon="\uf04b" block="ひらがな＿エージェント"
namespace hiragana_egent{

    //% blockId=hiragana_egent
    //% block="えーじぇんとに $direction へおかせる"
    export function agentDetect(direction: SixDirection): void {
        return egent.place(direction);
    }
}