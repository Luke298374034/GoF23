"use strict";
exports.__esModule = true;
var ProxyImage_1 = require("./ProxyImage");
var image = new ProxyImage_1.ProxyImage("test_10mb.jpg");
//image will be loaded from disk
image.display();
//image will not be loaded from disk
image.display();
