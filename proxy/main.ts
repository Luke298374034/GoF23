import { ProxyImage } from './ProxyImage'

let image = new ProxyImage("test_10mb.jpg");

//image will be loaded from disk
image.display(); 

//image will not be loaded from disk
image.display(); 

// ProxyImage 與 RealImage 都實作了 Image
// 而 ProxyImage 又結合了 RealImage 藉此操作他
// 看起來就是可以在代理的時候 加一些其他的功能囉~

