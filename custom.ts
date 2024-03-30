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
//% color=#D83B01 weight=400 icon="\uf007" block="ひらがな_プレイヤー"
namespace hiragana_player{

    //% blockId=hiragana_player
    //% block="じぶんを $to にテレポートさせる"
    export function teleport(pos: Position): void {
        return player.teleport(pos);
    }
}

/**
 * Custom blocks
 */
//% color=#D83B01 weight=400 icon="\uf04b" block="ひらがな＿エージェント"
namespace hiragana_agent{

    //% blockId=hiragana_agent
    //% block="スロットばんごう $slot をセットする"
    export function setSlot(slot: number): void {
        return agent.setSlot(slot);
    }

    //% blockId=hiragana_agent
    //% block="えーじぇんとに $direction へおかせる"
    export function place(direction: SixDirection): void {
        return agent.place(direction);
    }


    //% blockID=hiragana_agent
    //% block="えーじぇんとに $direction へ $blocks だけうごかす"
    export function move(direction: SixDirection , blocks : number): void {
        return agent.move(direction,blocks);
    }
}