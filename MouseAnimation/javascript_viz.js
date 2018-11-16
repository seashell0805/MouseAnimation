var mousePoint = view.center;
var amount = 20;
var colors = ['pink', 'white'];
//draw each rectangle, total 20
for (var i = 0; i < amount; i++) {
	var rect = new Rectangle([0, 0], [20, 20]);
	rect.center = mousePoint;
	var path = new Path.Rectangle(rect, 6); //rect corner
	path.fillColor = colors[i % 2]; //rect color
	var scale = (1 - i / amount) * 15; //rect size
	path.scale(scale);
}

function onMouseMove(event) {
	mousePoint = event.point;
}

var children = project.activeLayer.children; //the number of rectangle
// console.log(children.length);
function onFrame(event) {
	for (var i = 0, l = children.length; i < l; i++) {
		var item = children[i]; 
        //receive data from mousepoint
        var delta = (mousePoint - item.position); 
		if (delta.length > 0.1)
			item.position += delta;
        item.rotate(10);
	}
}