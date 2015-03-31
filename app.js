
var paper = Raphael(10, 50, screen.width, screen.height);
var circle = paper.circle(80, 100, 50);
circle.attr({
    "fill": "red"
}); //attr 方法用于设定对象属性

// Add freeTransform
var ft = paper.freeTransform(circle, {
    keepRatio: true,
    draw: ['bbox']
});

var rect = paper .rect(200, 200, 100, 100)
.attr('fill', 'red');

var ft2 = paper.freeTransform(rect, {
    keepRatio: true,
    draw: ['bbox']
});
