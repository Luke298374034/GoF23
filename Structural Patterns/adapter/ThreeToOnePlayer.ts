import { Player } from './Player';
import { Adpater } from './Adapter';
import { VGAPlayer} from './VGAPlayer'

export class ThreeToOnePlayer implements Player {
    private adpater: Adpater|VGAPlayer
    
    play(type: String): void {
        if (type == 'VGA') {
            this.adpater = new VGAPlayer();
            this.adpater.playVGA(type);
        } else if (type == 'HDMI' || type == 'DP') {
            this.adpater = new Adpater(type)
            this.adpater.play(type)
        }
    }
}