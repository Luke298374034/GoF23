import {AdvancedPlayer} from './AdvancedPlayer';

export class DPPlayer implements AdvancedPlayer {
    play(dpSetting: string): void {
        console.log('play', dpSetting)
    }
}