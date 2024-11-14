/**
 * Custom blocks
 */
//% color=#D83B01 weight=400 icon="\uf1e6" block="Agent"
namespace hiragana_agent {

    //% blockId=hiragana_agent_8
    //% block="agent teleport to player"
    export function teleportToPlayer(): void {
        return agent.teleportToPlayer();
    }

    //% blockId=hiragana_agent_7
    //% block="agent inspect $kind $direction"
    export function inspect(kind: AgentInspection, direction: SixDirection): number {
        return agent.inspect(kind, direction);
    }

    //% blockId=hiragana_agent_6
    //% block="agent detect $kind $direction"
    export function detect(kind: AgentDetection, direction: SixDirection): boolean {
        return agent.detect(kind, direction);
    }

    //% blockId=hiragana_agent_5
    //% block="agent teleport to %t_pos=minecraftCreatePosition"
    export function teleport(t_pos: Position): void {
        let agentTrune: CompassDirection
        let agentOrient = agent.getOrientation()
        if (agentOrient == 0){
            agentTrune = SOUTH
        }else if (agentOrient == -180){
            agentTrune = NORTH
        }else if (agentOrient == -90){
            agentTrune = EAST
        }else if (agentOrient == 90){
            agentTrune = WEST
        } else {
            agentTrune = SOUTH
        }
        return agent.teleport(positions.add(agent.getPosition(),t_pos), agentTrune);
    }

    //% blockId=hiragana_agent_4
    //% block="agent set active slot $slot"
    export function setSlot(slot: number): void {
        return agent.setSlot(slot);
    }

    //% blockId=hiragana_agent_3
    //% block="agent destroy $direction"
    export function destroy(direction: SixDirection): void {
        return agent.destroy(direction);
    }

    //% blockId=hiragana_agent_2
    //% block="agent place $direction"
    export function place(direction: SixDirection): void {
        return agent.place(direction);
    }

    //% blockId=hiragana_agent_1
    //% block="agent turn $direction"
    export function turn(direction: TurnDirection): void {
        return agent.turn(direction);
    }


    //% blockID=hiragana_agent_0
    //% block="agent move $direction by $blocks"
    //% blocks.defl=1
    export function move(direction: SixDirection, blocks: number): void {
        return agent.move(direction, blocks);
    }
}