enum hiraganaDirection {
    //% block="西(Xのマイナスほうこう)"
    WEST = 4,
    //% block="東(Xのプラスほうこう)"
    EAST = 1,
    //% block="北(Zのマイナスほうこう)"
    NORTH = 0,
    //% block="南(Zのプラスほうこう)"
    SOUTH = 2,
}


//% color=#D83B01 weight=400 icon="\uf04b" block=エージェント
namespace agentHiragana {
    //% blockId=agentMoveHiragana
    //% block="エージェントを $direction に $value ブロックいどうさせる"
    export function agentMoveHiragana(direction: SixDirection, value: number) {
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
        agent.destroy(direction);
    }

    //% blockId=agentTurnHiragana
    //% block="エージェントのむきを $direction にかえる"
    export function agentTurnHiragana(direction: TurnDirection) {
        agent.turn(direction);
    }

    //% blockId=agentInspectHiragana
    //% block="エージェントにどんなブロックか、 $direction をかくにんさせる"
    export function agentInspectHiragana(direction: SixDirection): number {
        return agent.inspect(AgentInspection.Block, direction);
    }

    //% blockId=agentDetectHiragana
    //% block="エージェントブロックがあるか、 $direction をかくにんさせる"
    export function agentDetectHiragana(direction: SixDirection): boolean {
        return agent.detect(AgentDetection.Block, direction);
    }

    //% blockId=agentTeleportHiragana
    //% block="エージェントを $position=minecraftCreatePosition へ $direction むきにテレポートさせる"
    export function agentTeleportHiragana(position: Position = pos(0, 0, 0), direction: hiraganaDirection) {
        agent.teleport(positions.add(
            agent.getPosition(),
            position
        ), direction);
    }

    //% blockId=agentTeleportPlayerHiragana
    //% block="エージェントをじぶんのいちにもどす"
    export function agentTeleportPlayerHiragana() {
        agent.teleportToPlayer();
    }
    
}