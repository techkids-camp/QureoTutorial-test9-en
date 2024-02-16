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