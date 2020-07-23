import {AdvancedPlayer} from './AdvancedPlayer';

export class HDMIPlayer implements AdvancedPlayer {
    play(hdmiSetting: string): void {
        console.log('play', hdmiSetting)
    }
}