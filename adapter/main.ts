import { ThreeToOnePlayer } from './ThreeToOnePlayer'

let player = new ThreeToOnePlayer()
player.play('VGA')
player.play('HDMI')
player.play('DP')

// AdvancedPlayer                 Player                    
//     |   高級介面                  |    定義新的介面並實作  
//     |                            |                      
//     |                    --------------------            
//     |                    |                  |            
//     |                    |                  |            
//     |          use       |       use        |            
// 新的播放器 <----------- 轉接器 <--------- 新的3in1播放器    
//                                             |             
//                                             |    實作     
//                                          舊的播放器       
//                                                          
//                                                          
// 與其說舊的播放器接了轉接頭可以撥新的播放器
// 不如說是在舊的播放器裡結合了轉接頭變成一個新的播放器
// 
// 會這樣設計估計是要無痛串接AdvancedPlayer Interface(原本已經擁有了 或是不好改規格)
// 所以才會再設計一個轉接器 並不是全部重做
// 這樣設計也是符合SOLID精神
// 
// 可以跟 Proxy、Decorator 比較看看