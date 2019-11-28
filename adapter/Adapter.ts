import {DPPlayer} from './DPPlayer';
import {HDMIPlayer} from './HDMIPlayer';
import {Player} from './Player';

export class Adpater implements Player {
    private player:Player;

    constructor(type: String) {
        if(type == 'DP') this.player = new DPPlayer();
        if(type == 'HDMI') this.player = new HDMIPlayer();
    }

    play(type: String): void {
        //if... else ...
        this.player.play(type);
    }
}