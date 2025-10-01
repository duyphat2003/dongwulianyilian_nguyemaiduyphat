
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/plugin_boosts/utils/Intersection.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2f4dfDdP95AjIAwGFL34sfm', 'Intersection');
// framework/plugin_boosts/utils/Intersection.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Intersection = /** @class */ (function () {
    function Intersection() {
    }
    // contains and intesect
    Intersection.circleIntersectRect = function (circle_pt, radius, rect) {
        var cx = 0;
        var cy = 0;
        //Find the point on the collision box closest to the center of the circle
        if (circle_pt.x < rect.x)
            cx = rect.x;
        else if (circle_pt.x > rect.x + rect.width)
            cx = rect.x + rect.width;
        else
            cx = circle_pt.x;
        if (circle_pt.y < rect.y)
            cy = rect.y;
        else if (circle_pt.y > rect.y + rect.height)
            cy = rect.y + rect.height;
        else
            cy = circle_pt.y;
        var v2 = cc.v2(cx, cy);
        v2.subSelf(circle_pt);
        if (v2.magSqr() < radius * radius)
            return true;
        return false;
    };
    return Intersection;
}());
exports.default = Intersection;
/***
// 矩形和圆形碰撞检测
bool IsCirlceCollisionRect(float circleXPos, float circleYPos, float radius, float rectX, float rectY, float rectW, float rectH)
{
    float arcR  = radius;
    float arcOx = circleXPos;
    float arcOy = circleYPos;

    //分别判断矩形4个顶点与圆心的距离是否<=圆半径；如果<=，说明碰撞成功
    if(((rectX-arcOx) * (rectX-arcOx) + (rectY-arcOy) * (rectY-arcOy)) <= arcR * arcR)
        return true;
    if(((rectX+rectW-arcOx) * (rectX+rectW-arcOx) + (rectY-arcOy) * (rectY-arcOy)) <= arcR * arcR)
        return true;
    if(((rectX-arcOx) * (rectX-arcOx) + (rectY+rectH-arcOy) * (rectY+rectH-arcOy)) <= arcR * arcR)
        return true;
    if(((rectX+rectW-arcOx) * (rectX+rectW-arcOx) + (rectY+rectH-arcOy) * (rectY+rectH-arcOy)) <= arcR * arcR)
        return true;

    //判断当圆心的Y坐标进入矩形内时X的位置，如果X在(rectX-arcR)到(rectX+rectW+arcR)这个范围内，则碰撞成功
    float minDisX = 0;
    if(arcOy >= rectY && arcOy <= rectY + rectH)
    {
        if(arcOx < rectX)
            minDisX = rectX - arcOx;
        else if(arcOx > rectX + rectW)
            minDisX = arcOx - rectX - rectW;
        else
            return true;
        if(minDisX <= arcR)
            return true;
    }

    //判断当圆心的X坐标进入矩形内时Y的位置，如果X在(rectY-arcR)到(rectY+rectH+arcR)这个范围内，则碰撞成功
    float minDisY = 0;
    if(arcOx >= rectX && arcOx <= rectX + rectW)
    {
        if(arcOy < rectY)
            minDisY = rectY - arcOy;
        else if(arcOy > rectY + rectH)
            minDisY = arcOy - rectY - rectH;
        else
            return true;
        if(minDisY <= arcR)
            return true;
    }

    return false;
}

// 线段和线段碰撞检测
bool IsLineCollisionLine(cocos2d::CCPoint p1, cocos2d::CCPoint p2, cocos2d::CCPoint p3, cocos2d::CCPoint p4)
{
    float x1 = p1.x, x2 = p2.x, x3 = p3.x, x4 = p4.x;
    float y1 = p1.y, y2 = p2.y, y3 = p3.y, y4 = p4.y;

    float d = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    // If d is zero, there is no intersection
    if (d == 0)
        return false;

    // Get the x and y
    float pre = (x1*y2 - y1*x2), post = (x3*y4 - y3*x4);
    float x = ( pre * (x3 - x4) - (x1 - x2) * post ) / d;
    float y = ( pre * (y3 - y4) - (y1 - y2) * post ) / d;

    // Check if the x and y coordinates are within both lines
    if ( x < MIN(x1, x2) || x > MAX(x1, x2) ||
        x < MIN(x3, x4) || x > MAX(x3, x4) )
        return false;

    if ( y < MIN(y1, y2) || y > MAX(y1, y2) ||
        y < MIN(y3, y4) || y > MAX(y3, y4) )
        return false;

    return true;
}

static float mult(cocos2d::CCPoint a, cocos2d::CCPoint b, cocos2d::CCPoint c)
{
    return (a.x-c.x)*(b.y-c.y)-(b.x-c.x)*(a.y-c.y);
}

bool IsLineCollisionLine2(cocos2d::CCPoint aa, cocos2d::CCPoint bb, cocos2d::CCPoint cc, cocos2d::CCPoint dd)
{
    if ( MAX(aa.x, bb.x)<MIN(cc.x, dd.x) )
        return false;

    if ( MAX(aa.y, bb.y)<MIN(cc.y, dd.y) )
        return false;

    if ( MAX(cc.x, dd.x)<MIN(aa.x, bb.x) )
        return false;

    if ( MAX(cc.y, dd.y)<MIN(aa.y, bb.y) )
        return false;

    if (mult(cc, bb, aa)*mult(bb, dd, aa)<0.0001f)
        return false;

    if (mult(aa, dd, cc)*mult(dd, bb, cc)<0.0001f)
        return false;

    return true;
}

// 线段和矩形碰撞检测
bool IsLineCollisionRect(cocos2d::CCPoint lineStartPoint, cocos2d::CCPoint lineEndPoint, cocos2d::CCPoint rectleftBottomPoint, float width, float height)
{
    // 因为这个方法专门进行射线光束的碰撞检测，所以暂不进行线段在矩形内的碰撞检测
    cocos2d::CCPoint leftLineStartPoint = rectleftBottomPoint;
    cocos2d::CCPoint leftLineEndPoint   = cocos2d::CCPoint(leftLineStartPoint.x, leftLineStartPoint.y+height);

    cocos2d::CCPoint rightLineStartPoint= cocos2d::CCPoint(leftLineStartPoint.x+width, leftLineStartPoint.y);
    cocos2d::CCPoint rightLineEndPoint  = cocos2d::CCPoint(leftLineStartPoint.x+width, leftLineStartPoint.y+height);

    cocos2d::CCPoint topLineStartPoint  = cocos2d::CCPoint(leftLineStartPoint.x, leftLineStartPoint.y+height);
    cocos2d::CCPoint topLineEndPoint    = cocos2d::CCPoint(leftLineStartPoint.x+width, leftLineStartPoint.y+height);

    cocos2d::CCPoint bottomLineStartPoint= cocos2d::CCPoint(leftLineStartPoint.x, leftLineStartPoint.y);
    cocos2d::CCPoint bottomLineEndPoint  = cocos2d::CCPoint(leftLineStartPoint.x+width, leftLineStartPoint.y);
    
    cocos2d::CCPoint leftBottomLineStartPoint= rectleftBottomPoint;
    cocos2d::CCPoint rightTopLineEndPoint    = rightLineEndPoint;

    cocos2d::CCPoint leftTopLineStartPoint   = leftLineEndPoint;
    cocos2d::CCPoint rightBottomLineEndPoint = rightLineStartPoint;


    do
    {
        if (IsLineCollisionLine2(lineStartPoint, lineEndPoint, leftLineStartPoint, leftLineEndPoint))
            break;

        if (IsLineCollisionLine2(lineStartPoint, lineEndPoint, rightLineStartPoint, rightLineEndPoint))
            break;

        if (IsLineCollisionLine2(lineStartPoint, lineEndPoint, topLineStartPoint, topLineEndPoint))
            break;

        if (IsLineCollisionLine2(lineStartPoint, lineEndPoint, bottomLineStartPoint, bottomLineEndPoint))
            break;

        if (IsLineCollisionLine2(lineStartPoint, lineEndPoint, leftBottomLineStartPoint, rightTopLineEndPoint))
            break;

        if (IsLineCollisionLine2(lineStartPoint, lineEndPoint, leftTopLineStartPoint, rightBottomLineEndPoint))
            break;

        return false;
    }
    while (false);

    return true;
}

static  bool  IsRectCollisionRect2(cocos2d::CCPoint rect1CenterPoint, float rect1W, float rect1H, cocos2d::CCPoint rect2CenterPoint, float rect2W, float rect2H)
{
    cocos2d::CCPoint leftTopPoint     = cocos2d::CCPoint(rect2CenterPoint.x-rect2W/2.0f, rect2CenterPoint.y+rect2H/2.0f);
    cocos2d::CCPoint leftBottomPoint  = cocos2d::CCPoint(rect2CenterPoint.x-rect2W/2.0f, rect2CenterPoint.y-rect2H/2.0f);
    cocos2d::CCPoint rightTopPoint    = cocos2d::CCPoint(rect2CenterPoint.x+rect2W/2.0f, rect2CenterPoint.y+rect2H/2.0f);
    cocos2d::CCPoint rightBottomPoint = cocos2d::CCPoint(rect2CenterPoint.x+rect2W/2.0f, rect2CenterPoint.y-rect2H/2.0f);

    if ( (leftTopPoint.x>(rect1CenterPoint.x-rect1W/2.0f)) && (leftTopPoint.x<(rect1CenterPoint.x+rect1W/2.0f))
        && (leftTopPoint.y>(rect1CenterPoint.y-rect1H/2.0f)) && (leftTopPoint.y<(rect1CenterPoint.y+rect1H/2.0f)))
        return true;

    if ( (leftBottomPoint.x>(rect1CenterPoint.x-rect1W/2.0f)) && (leftBottomPoint.x<(rect1CenterPoint.x+rect1W/2.0f))
        && (leftBottomPoint.y>(rect1CenterPoint.y-rect1H/2.0f)) && (leftBottomPoint.y<(rect1CenterPoint.y+rect1H/2.0f)))
        return true;

    if ( (rightTopPoint.x>(rect1CenterPoint.x-rect1W/2.0f)) && (rightTopPoint.x<(rect1CenterPoint.x+rect1W/2.0f))
        && (rightTopPoint.y>(rect1CenterPoint.y-rect1H/2.0f)) && (rightTopPoint.y<(rect1CenterPoint.y+rect1H/2.0f)))
        return true;

    if ( (rightBottomPoint.x>(rect1CenterPoint.x-rect1W/2.0f)) && (rightBottomPoint.x<(rect1CenterPoint.x+rect1W/2.0f))
        && (rightBottomPoint.y>(rect1CenterPoint.y-rect1H/2.0f)) && (rightBottomPoint.y<(rect1CenterPoint.y+rect1H/2.0f)))
        return true;

    return false;
}

// 矩形和矩形碰撞检测
bool  IsRectCollisionRect(cocos2d::CCPoint rect1CenterPoint, float rect1W, float rect1H, cocos2d::CCPoint rect2CenterPoint, float rect2W, float rect2H)
{
    if (IsRectCollisionRect2(rect1CenterPoint, rect1W, rect1H, rect2CenterPoint, rect2W, rect2H))
        return true;
    
    if (IsRectCollisionRect2(rect2CenterPoint, rect2W, rect2H, rect1CenterPoint, rect1W, rect1H))
        return true;

    return false;
}

**/ 

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxwbHVnaW5fYm9vc3RzXFx1dGlsc1xcSW50ZXJzZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBeUJBLENBQUM7SUF2Qkcsd0JBQXdCO0lBQ2pCLGdDQUFtQixHQUExQixVQUEyQixTQUFpQixFQUFFLE1BQU0sRUFBRSxJQUFJO1FBQ3RELElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUNWLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUNWLHlFQUF5RTtRQUN6RSxJQUFJLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDcEIsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUE7YUFDVixJQUFJLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSztZQUN0QyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBOztZQUV4QixFQUFFLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQTtRQUNwQixJQUFJLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDcEIsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUE7YUFDVixJQUFJLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTTtZQUN2QyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFBOztZQUV6QixFQUFFLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQTtRQUNwQixJQUFJLEVBQUUsR0FBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxFQUFFLENBQUMsQ0FBQTtRQUNwQixFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3JCLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxHQUFHLE1BQU0sR0FBRyxNQUFNO1lBQzdCLE9BQU8sSUFBSSxDQUFBO1FBQ2YsT0FBTyxLQUFLLENBQUE7SUFDaEIsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0F6QkEsQUF5QkMsSUFBQTs7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWlNRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVyc2VjdGlvblxyXG57XHJcbiAgICAvLyBjb250YWlucyBhbmQgaW50ZXNlY3RcclxuICAgIHN0YXRpYyBjaXJjbGVJbnRlcnNlY3RSZWN0KGNpcmNsZV9wdDpjYy5WZWMyLMKgcmFkaXVzLMKgcmVjdCl7XHJcbiAgICDCoMKgwqDCoGxldMKgY3jCoD0gMFxyXG4gICAgwqDCoMKgwqBsZXTCoGN5wqA9IDBcclxuICAgIMKgwqDCoMKgLy9GaW5kwqB0aGXCoHBvaW50wqBvbsKgdGhlwqBjb2xsaXNpb27CoGJveMKgY2xvc2VzdMKgdG/CoHRoZcKgY2VudGVywqBvZsKgdGhlwqBjaXJjbGVcclxuICAgIMKgwqDCoMKgaWbCoChjaXJjbGVfcHQueMKgPMKgcmVjdC54KVxyXG4gICAgwqDCoMKgwqDCoMKgwqDCoGN4wqA9wqByZWN0LnhcclxuICAgIMKgwqDCoMKgZWxzZSBpZsKgKGNpcmNsZV9wdC54wqA+wqByZWN0LnjCoCvCoHJlY3Qud2lkdGgpXHJcbiAgICDCoMKgwqDCoMKgwqDCoMKgY3jCoD3CoHJlY3QueMKgK8KgcmVjdC53aWR0aFxyXG4gICAgwqDCoMKgwqBlbHNlXHJcbiAgICDCoMKgwqDCoMKgwqDCoMKgY3jCoD3CoGNpcmNsZV9wdC54XHJcbiAgICDCoMKgwqDCoGlmwqAoY2lyY2xlX3B0LnnCoDzCoHJlY3QuecKgKVxyXG4gICAgwqDCoMKgwqDCoMKgwqDCoGN5wqA9wqByZWN0LnlcclxuICAgIMKgwqDCoMKgZWxzZSBpZijCoGNpcmNsZV9wdC55wqA+wqByZWN0LnnCoCvCoHJlY3QuaGVpZ2h0KVxyXG4gICAgwqDCoMKgwqDCoMKgwqDCoGN5wqA9wqByZWN0LnnCoCvCoHJlY3QuaGVpZ2h0XHJcbiAgICDCoMKgwqDCoGVsc2VcclxuICAgIMKgwqDCoMKgwqDCoMKgwqBjecKgPcKgY2lyY2xlX3B0LnlcclxuICAgICAgICBsZXQgdjIgPWNjLnYyKGN4LGN5KSBcclxuICAgICAgICB2Mi5zdWJTZWxmKGNpcmNsZV9wdCkgICAgXHJcbiAgICDCoMKgwqDCoGlmwqAodjIubWFnU3FyKCnCoDzCoHJhZGl1cyAqIHJhZGl1cylcclxuICAgIMKgwqDCoMKgwqDCoMKgwqByZXR1cm7CoHRydWVcclxuICAgIMKgwqDCoMKgcmV0dXJuwqBmYWxzZVxyXG4gICAgfVxyXG59XHJcbi8qKipcclxuLy8g55+p5b2i5ZKM5ZyG5b2i56Kw5pKe5qOA5rWLXHJcbmJvb2wgSXNDaXJsY2VDb2xsaXNpb25SZWN0KGZsb2F0IGNpcmNsZVhQb3MsIGZsb2F0IGNpcmNsZVlQb3MsIGZsb2F0IHJhZGl1cywgZmxvYXQgcmVjdFgsIGZsb2F0IHJlY3RZLCBmbG9hdCByZWN0VywgZmxvYXQgcmVjdEgpXHJcbntcclxuICAgIGZsb2F0IGFyY1IgID0gcmFkaXVzO1xyXG4gICAgZmxvYXQgYXJjT3ggPSBjaXJjbGVYUG9zO1xyXG4gICAgZmxvYXQgYXJjT3kgPSBjaXJjbGVZUG9zO1xyXG5cclxuICAgIC8v5YiG5Yir5Yik5pat55+p5b2iNOS4qumhtueCueS4juWchuW/g+eahOi3neemu+aYr+WQpjw95ZyG5Y2K5b6E77yb5aaC5p6cPD3vvIzor7TmmI7norDmkp7miJDlip8gICBcclxuICAgIGlmKCgocmVjdFgtYXJjT3gpICogKHJlY3RYLWFyY094KSArIChyZWN0WS1hcmNPeSkgKiAocmVjdFktYXJjT3kpKSA8PSBhcmNSICogYXJjUikgICBcclxuICAgICAgICByZXR1cm4gdHJ1ZTsgICBcclxuICAgIGlmKCgocmVjdFgrcmVjdFctYXJjT3gpICogKHJlY3RYK3JlY3RXLWFyY094KSArIChyZWN0WS1hcmNPeSkgKiAocmVjdFktYXJjT3kpKSA8PSBhcmNSICogYXJjUikgICBcclxuICAgICAgICByZXR1cm4gdHJ1ZTsgICBcclxuICAgIGlmKCgocmVjdFgtYXJjT3gpICogKHJlY3RYLWFyY094KSArIChyZWN0WStyZWN0SC1hcmNPeSkgKiAocmVjdFkrcmVjdEgtYXJjT3kpKSA8PSBhcmNSICogYXJjUikgICBcclxuICAgICAgICByZXR1cm4gdHJ1ZTsgICBcclxuICAgIGlmKCgocmVjdFgrcmVjdFctYXJjT3gpICogKHJlY3RYK3JlY3RXLWFyY094KSArIChyZWN0WStyZWN0SC1hcmNPeSkgKiAocmVjdFkrcmVjdEgtYXJjT3kpKSA8PSBhcmNSICogYXJjUikgICBcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAvL+WIpOaWreW9k+WchuW/g+eahFnlnZDmoIfov5vlhaXnn6nlvaLlhoXml7ZY55qE5L2N572u77yM5aaC5p6cWOWcqChyZWN0WC1hcmNSKeWIsChyZWN0WCtyZWN0VythcmNSKei/meS4quiMg+WbtOWGhe+8jOWImeeisOaSnuaIkOWKnyAgIFxyXG4gICAgZmxvYXQgbWluRGlzWCA9IDA7ICAgXHJcbiAgICBpZihhcmNPeSA+PSByZWN0WSAmJiBhcmNPeSA8PSByZWN0WSArIHJlY3RIKVxyXG4gICAgeyAgIFxyXG4gICAgICAgIGlmKGFyY094IDwgcmVjdFgpICAgXHJcbiAgICAgICAgICAgIG1pbkRpc1ggPSByZWN0WCAtIGFyY094OyAgIFxyXG4gICAgICAgIGVsc2UgaWYoYXJjT3ggPiByZWN0WCArIHJlY3RXKSAgIFxyXG4gICAgICAgICAgICBtaW5EaXNYID0gYXJjT3ggLSByZWN0WCAtIHJlY3RXOyAgIFxyXG4gICAgICAgIGVsc2UgICAgXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlOyAgIFxyXG4gICAgICAgIGlmKG1pbkRpc1ggPD0gYXJjUikgICBcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7ICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy/liKTmlq3lvZPlnIblv4PnmoRY5Z2Q5qCH6L+b5YWl55+p5b2i5YaF5pe2WeeahOS9jee9ru+8jOWmguaenFjlnKgocmVjdFktYXJjUinliLAocmVjdFkrcmVjdEgrYXJjUinov5nkuKrojIPlm7TlhoXvvIzliJnnorDmkp7miJDlip9cclxuICAgIGZsb2F0IG1pbkRpc1kgPSAwOyAgIFxyXG4gICAgaWYoYXJjT3ggPj0gcmVjdFggJiYgYXJjT3ggPD0gcmVjdFggKyByZWN0VylcclxuICAgIHsgICBcclxuICAgICAgICBpZihhcmNPeSA8IHJlY3RZKSAgIFxyXG4gICAgICAgICAgICBtaW5EaXNZID0gcmVjdFkgLSBhcmNPeTsgICBcclxuICAgICAgICBlbHNlIGlmKGFyY095ID4gcmVjdFkgKyByZWN0SCkgICBcclxuICAgICAgICAgICAgbWluRGlzWSA9IGFyY095IC0gcmVjdFkgLSByZWN0SDsgICBcclxuICAgICAgICBlbHNlICBcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7ICAgXHJcbiAgICAgICAgaWYobWluRGlzWSA8PSBhcmNSKSAgIFxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTsgICBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7IFxyXG59XHJcblxyXG4vLyDnur/mrrXlkoznur/mrrXnorDmkp7mo4DmtYtcclxuYm9vbCBJc0xpbmVDb2xsaXNpb25MaW5lKGNvY29zMmQ6OkNDUG9pbnQgcDEsIGNvY29zMmQ6OkNDUG9pbnQgcDIsIGNvY29zMmQ6OkNDUG9pbnQgcDMsIGNvY29zMmQ6OkNDUG9pbnQgcDQpXHJcbntcclxuICAgIGZsb2F0IHgxID0gcDEueCwgeDIgPSBwMi54LCB4MyA9IHAzLngsIHg0ID0gcDQueDtcclxuICAgIGZsb2F0IHkxID0gcDEueSwgeTIgPSBwMi55LCB5MyA9IHAzLnksIHk0ID0gcDQueTtcclxuXHJcbiAgICBmbG9hdCBkID0gKHgxIC0geDIpICogKHkzIC0geTQpIC0gKHkxIC0geTIpICogKHgzIC0geDQpO1xyXG4gICAgLy8gSWYgZCBpcyB6ZXJvLCB0aGVyZSBpcyBubyBpbnRlcnNlY3Rpb25cclxuICAgIGlmIChkID09IDApIFxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAvLyBHZXQgdGhlIHggYW5kIHlcclxuICAgIGZsb2F0IHByZSA9ICh4MSp5MiAtIHkxKngyKSwgcG9zdCA9ICh4Myp5NCAtIHkzKng0KTtcclxuICAgIGZsb2F0IHggPSAoIHByZSAqICh4MyAtIHg0KSAtICh4MSAtIHgyKSAqIHBvc3QgKSAvIGQ7XHJcbiAgICBmbG9hdCB5ID0gKCBwcmUgKiAoeTMgLSB5NCkgLSAoeTEgLSB5MikgKiBwb3N0ICkgLyBkO1xyXG5cclxuICAgIC8vIENoZWNrIGlmIHRoZSB4IGFuZCB5IGNvb3JkaW5hdGVzIGFyZSB3aXRoaW4gYm90aCBsaW5lc1xyXG4gICAgaWYgKCB4IDwgTUlOKHgxLCB4MikgfHwgeCA+IE1BWCh4MSwgeDIpIHx8XHJcbiAgICAgICAgeCA8IE1JTih4MywgeDQpIHx8IHggPiBNQVgoeDMsIHg0KSApXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGlmICggeSA8IE1JTih5MSwgeTIpIHx8IHkgPiBNQVgoeTEsIHkyKSB8fFxyXG4gICAgICAgIHkgPCBNSU4oeTMsIHk0KSB8fCB5ID4gTUFYKHkzLCB5NCkgKSBcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbnN0YXRpYyBmbG9hdCBtdWx0KGNvY29zMmQ6OkNDUG9pbnQgYSwgY29jb3MyZDo6Q0NQb2ludCBiLCBjb2NvczJkOjpDQ1BvaW50IGMpXHJcbntcclxuICAgIHJldHVybiAoYS54LWMueCkqKGIueS1jLnkpLShiLngtYy54KSooYS55LWMueSk7XHJcbn1cclxuXHJcbmJvb2wgSXNMaW5lQ29sbGlzaW9uTGluZTIoY29jb3MyZDo6Q0NQb2ludCBhYSwgY29jb3MyZDo6Q0NQb2ludCBiYiwgY29jb3MyZDo6Q0NQb2ludCBjYywgY29jb3MyZDo6Q0NQb2ludCBkZClcclxue1xyXG4gICAgaWYgKCBNQVgoYWEueCwgYmIueCk8TUlOKGNjLngsIGRkLngpIClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgaWYgKCBNQVgoYWEueSwgYmIueSk8TUlOKGNjLnksIGRkLnkpIClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgaWYgKCBNQVgoY2MueCwgZGQueCk8TUlOKGFhLngsIGJiLngpIClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgaWYgKCBNQVgoY2MueSwgZGQueSk8TUlOKGFhLnksIGJiLnkpIClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgaWYgKG11bHQoY2MsIGJiLCBhYSkqbXVsdChiYiwgZGQsIGFhKTwwLjAwMDFmKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBpZiAobXVsdChhYSwgZGQsIGNjKSptdWx0KGRkLCBiYiwgY2MpPDAuMDAwMWYpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG4vLyDnur/mrrXlkoznn6nlvaLnorDmkp7mo4DmtYtcclxuYm9vbCBJc0xpbmVDb2xsaXNpb25SZWN0KGNvY29zMmQ6OkNDUG9pbnQgbGluZVN0YXJ0UG9pbnQsIGNvY29zMmQ6OkNDUG9pbnQgbGluZUVuZFBvaW50LCBjb2NvczJkOjpDQ1BvaW50IHJlY3RsZWZ0Qm90dG9tUG9pbnQsIGZsb2F0IHdpZHRoLCBmbG9hdCBoZWlnaHQpXHJcbntcclxuICAgIC8vIOWboOS4uui/meS4quaWueazleS4k+mXqOi/m+ihjOWwhOe6v+WFieadn+eahOeisOaSnuajgOa1i++8jOaJgOS7peaaguS4jei/m+ihjOe6v+auteWcqOefqeW9ouWGheeahOeisOaSnuajgOa1i1xyXG4gICAgY29jb3MyZDo6Q0NQb2ludCBsZWZ0TGluZVN0YXJ0UG9pbnQgPSByZWN0bGVmdEJvdHRvbVBvaW50O1xyXG4gICAgY29jb3MyZDo6Q0NQb2ludCBsZWZ0TGluZUVuZFBvaW50ICAgPSBjb2NvczJkOjpDQ1BvaW50KGxlZnRMaW5lU3RhcnRQb2ludC54LCBsZWZ0TGluZVN0YXJ0UG9pbnQueStoZWlnaHQpO1xyXG5cclxuICAgIGNvY29zMmQ6OkNDUG9pbnQgcmlnaHRMaW5lU3RhcnRQb2ludD0gY29jb3MyZDo6Q0NQb2ludChsZWZ0TGluZVN0YXJ0UG9pbnQueCt3aWR0aCwgbGVmdExpbmVTdGFydFBvaW50LnkpO1xyXG4gICAgY29jb3MyZDo6Q0NQb2ludCByaWdodExpbmVFbmRQb2ludCAgPSBjb2NvczJkOjpDQ1BvaW50KGxlZnRMaW5lU3RhcnRQb2ludC54K3dpZHRoLCBsZWZ0TGluZVN0YXJ0UG9pbnQueStoZWlnaHQpO1xyXG5cclxuICAgIGNvY29zMmQ6OkNDUG9pbnQgdG9wTGluZVN0YXJ0UG9pbnQgID0gY29jb3MyZDo6Q0NQb2ludChsZWZ0TGluZVN0YXJ0UG9pbnQueCwgbGVmdExpbmVTdGFydFBvaW50LnkraGVpZ2h0KTtcclxuICAgIGNvY29zMmQ6OkNDUG9pbnQgdG9wTGluZUVuZFBvaW50ICAgID0gY29jb3MyZDo6Q0NQb2ludChsZWZ0TGluZVN0YXJ0UG9pbnQueCt3aWR0aCwgbGVmdExpbmVTdGFydFBvaW50LnkraGVpZ2h0KTtcclxuXHJcbiAgICBjb2NvczJkOjpDQ1BvaW50IGJvdHRvbUxpbmVTdGFydFBvaW50PSBjb2NvczJkOjpDQ1BvaW50KGxlZnRMaW5lU3RhcnRQb2ludC54LCBsZWZ0TGluZVN0YXJ0UG9pbnQueSk7XHJcbiAgICBjb2NvczJkOjpDQ1BvaW50IGJvdHRvbUxpbmVFbmRQb2ludCAgPSBjb2NvczJkOjpDQ1BvaW50KGxlZnRMaW5lU3RhcnRQb2ludC54K3dpZHRoLCBsZWZ0TGluZVN0YXJ0UG9pbnQueSk7XHJcbiAgICBcclxuICAgIGNvY29zMmQ6OkNDUG9pbnQgbGVmdEJvdHRvbUxpbmVTdGFydFBvaW50PSByZWN0bGVmdEJvdHRvbVBvaW50O1xyXG4gICAgY29jb3MyZDo6Q0NQb2ludCByaWdodFRvcExpbmVFbmRQb2ludCAgICA9IHJpZ2h0TGluZUVuZFBvaW50O1xyXG5cclxuICAgIGNvY29zMmQ6OkNDUG9pbnQgbGVmdFRvcExpbmVTdGFydFBvaW50ICAgPSBsZWZ0TGluZUVuZFBvaW50O1xyXG4gICAgY29jb3MyZDo6Q0NQb2ludCByaWdodEJvdHRvbUxpbmVFbmRQb2ludCA9IHJpZ2h0TGluZVN0YXJ0UG9pbnQ7XHJcblxyXG5cclxuICAgIGRvIFxyXG4gICAge1xyXG4gICAgICAgIGlmIChJc0xpbmVDb2xsaXNpb25MaW5lMihsaW5lU3RhcnRQb2ludCwgbGluZUVuZFBvaW50LCBsZWZ0TGluZVN0YXJ0UG9pbnQsIGxlZnRMaW5lRW5kUG9pbnQpKVxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgaWYgKElzTGluZUNvbGxpc2lvbkxpbmUyKGxpbmVTdGFydFBvaW50LCBsaW5lRW5kUG9pbnQsIHJpZ2h0TGluZVN0YXJ0UG9pbnQsIHJpZ2h0TGluZUVuZFBvaW50KSlcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGlmIChJc0xpbmVDb2xsaXNpb25MaW5lMihsaW5lU3RhcnRQb2ludCwgbGluZUVuZFBvaW50LCB0b3BMaW5lU3RhcnRQb2ludCwgdG9wTGluZUVuZFBvaW50KSlcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGlmIChJc0xpbmVDb2xsaXNpb25MaW5lMihsaW5lU3RhcnRQb2ludCwgbGluZUVuZFBvaW50LCBib3R0b21MaW5lU3RhcnRQb2ludCwgYm90dG9tTGluZUVuZFBvaW50KSlcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGlmIChJc0xpbmVDb2xsaXNpb25MaW5lMihsaW5lU3RhcnRQb2ludCwgbGluZUVuZFBvaW50LCBsZWZ0Qm90dG9tTGluZVN0YXJ0UG9pbnQsIHJpZ2h0VG9wTGluZUVuZFBvaW50KSlcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGlmIChJc0xpbmVDb2xsaXNpb25MaW5lMihsaW5lU3RhcnRQb2ludCwgbGluZUVuZFBvaW50LCBsZWZ0VG9wTGluZVN0YXJ0UG9pbnQsIHJpZ2h0Qm90dG9tTGluZUVuZFBvaW50KSlcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gXHJcbiAgICB3aGlsZSAoZmFsc2UpO1xyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5zdGF0aWMgIGJvb2wgIElzUmVjdENvbGxpc2lvblJlY3QyKGNvY29zMmQ6OkNDUG9pbnQgcmVjdDFDZW50ZXJQb2ludCwgZmxvYXQgcmVjdDFXLCBmbG9hdCByZWN0MUgsIGNvY29zMmQ6OkNDUG9pbnQgcmVjdDJDZW50ZXJQb2ludCwgZmxvYXQgcmVjdDJXLCBmbG9hdCByZWN0MkgpXHJcbntcclxuICAgIGNvY29zMmQ6OkNDUG9pbnQgbGVmdFRvcFBvaW50ICAgICA9IGNvY29zMmQ6OkNDUG9pbnQocmVjdDJDZW50ZXJQb2ludC54LXJlY3QyVy8yLjBmLCByZWN0MkNlbnRlclBvaW50LnkrcmVjdDJILzIuMGYpO1xyXG4gICAgY29jb3MyZDo6Q0NQb2ludCBsZWZ0Qm90dG9tUG9pbnQgID0gY29jb3MyZDo6Q0NQb2ludChyZWN0MkNlbnRlclBvaW50LngtcmVjdDJXLzIuMGYsIHJlY3QyQ2VudGVyUG9pbnQueS1yZWN0MkgvMi4wZik7XHJcbiAgICBjb2NvczJkOjpDQ1BvaW50IHJpZ2h0VG9wUG9pbnQgICAgPSBjb2NvczJkOjpDQ1BvaW50KHJlY3QyQ2VudGVyUG9pbnQueCtyZWN0MlcvMi4wZiwgcmVjdDJDZW50ZXJQb2ludC55K3JlY3QySC8yLjBmKTtcclxuICAgIGNvY29zMmQ6OkNDUG9pbnQgcmlnaHRCb3R0b21Qb2ludCA9IGNvY29zMmQ6OkNDUG9pbnQocmVjdDJDZW50ZXJQb2ludC54K3JlY3QyVy8yLjBmLCByZWN0MkNlbnRlclBvaW50LnktcmVjdDJILzIuMGYpO1xyXG5cclxuICAgIGlmICggKGxlZnRUb3BQb2ludC54PihyZWN0MUNlbnRlclBvaW50LngtcmVjdDFXLzIuMGYpKSAmJiAobGVmdFRvcFBvaW50Lng8KHJlY3QxQ2VudGVyUG9pbnQueCtyZWN0MVcvMi4wZikpIFxyXG4gICAgICAgICYmIChsZWZ0VG9wUG9pbnQueT4ocmVjdDFDZW50ZXJQb2ludC55LXJlY3QxSC8yLjBmKSkgJiYgKGxlZnRUb3BQb2ludC55PChyZWN0MUNlbnRlclBvaW50LnkrcmVjdDFILzIuMGYpKSlcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBpZiAoIChsZWZ0Qm90dG9tUG9pbnQueD4ocmVjdDFDZW50ZXJQb2ludC54LXJlY3QxVy8yLjBmKSkgJiYgKGxlZnRCb3R0b21Qb2ludC54PChyZWN0MUNlbnRlclBvaW50LngrcmVjdDFXLzIuMGYpKSBcclxuICAgICAgICAmJiAobGVmdEJvdHRvbVBvaW50Lnk+KHJlY3QxQ2VudGVyUG9pbnQueS1yZWN0MUgvMi4wZikpICYmIChsZWZ0Qm90dG9tUG9pbnQueTwocmVjdDFDZW50ZXJQb2ludC55K3JlY3QxSC8yLjBmKSkpXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgaWYgKCAocmlnaHRUb3BQb2ludC54PihyZWN0MUNlbnRlclBvaW50LngtcmVjdDFXLzIuMGYpKSAmJiAocmlnaHRUb3BQb2ludC54PChyZWN0MUNlbnRlclBvaW50LngrcmVjdDFXLzIuMGYpKSBcclxuICAgICAgICAmJiAocmlnaHRUb3BQb2ludC55PihyZWN0MUNlbnRlclBvaW50LnktcmVjdDFILzIuMGYpKSAmJiAocmlnaHRUb3BQb2ludC55PChyZWN0MUNlbnRlclBvaW50LnkrcmVjdDFILzIuMGYpKSlcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBpZiAoIChyaWdodEJvdHRvbVBvaW50Lng+KHJlY3QxQ2VudGVyUG9pbnQueC1yZWN0MVcvMi4wZikpICYmIChyaWdodEJvdHRvbVBvaW50Lng8KHJlY3QxQ2VudGVyUG9pbnQueCtyZWN0MVcvMi4wZikpIFxyXG4gICAgICAgICYmIChyaWdodEJvdHRvbVBvaW50Lnk+KHJlY3QxQ2VudGVyUG9pbnQueS1yZWN0MUgvMi4wZikpICYmIChyaWdodEJvdHRvbVBvaW50Lnk8KHJlY3QxQ2VudGVyUG9pbnQueStyZWN0MUgvMi4wZikpKVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLy8g55+p5b2i5ZKM55+p5b2i56Kw5pKe5qOA5rWLXHJcbmJvb2wgIElzUmVjdENvbGxpc2lvblJlY3QoY29jb3MyZDo6Q0NQb2ludCByZWN0MUNlbnRlclBvaW50LCBmbG9hdCByZWN0MVcsIGZsb2F0IHJlY3QxSCwgY29jb3MyZDo6Q0NQb2ludCByZWN0MkNlbnRlclBvaW50LCBmbG9hdCByZWN0MlcsIGZsb2F0IHJlY3QySClcclxue1xyXG4gICAgaWYgKElzUmVjdENvbGxpc2lvblJlY3QyKHJlY3QxQ2VudGVyUG9pbnQsIHJlY3QxVywgcmVjdDFILCByZWN0MkNlbnRlclBvaW50LCByZWN0MlcsIHJlY3QySCkpXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICBcclxuICAgIGlmIChJc1JlY3RDb2xsaXNpb25SZWN0MihyZWN0MkNlbnRlclBvaW50LCByZWN0MlcsIHJlY3QySCwgcmVjdDFDZW50ZXJQb2ludCwgcmVjdDFXLCByZWN0MUgpKVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuKiovIl19