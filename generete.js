var Solution = function(radius, x_center, y_center) {
    this.radius = radius;
    this.x_center = x_center;
    this.y_center = y_center;
};

Solution.prototype.randPoint = function() {
let x = 1;
let y = 1;
while(x*x + y*y > 1){
    x = 2*Math.random() - 1;
    y = 2*Math.random() - 1;
}
return [this.x_center + this.radius*x, this.y_center + this.radius*y]
};