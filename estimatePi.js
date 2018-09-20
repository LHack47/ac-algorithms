// One of the most important numbers in mathematics is called "pi" (pronounced like "pie"). Pi represents how much
// bigger the circumference of a circle (the distance around it) is than the diameter of a circle (the distance across
// it). As an example, consider peeling a piece of fruit. If you peel one strip around the middle, the distance you
// cut is the circumference. If you cut across the middle, the distance you cut is the diameter.
//
// Pi is approximately 3.14159 (with more digits going on forever), but if you couldn't look it up, how could you figure
// it out? We can use the formula for the area of a circle: pi times the square of the radius. (The radius is half of
// the diameter.)
//
// Imagine you had a square dartboard 1 feet across and 1 feet high. Now, consider a circle that's twice as wide (that
// would be the diameter) as the square. In other words, the radius of the circle is the same as the width (or height)
// of the square.
//
// We want to know what the circumference is, but if we don't know the value of pi, we can figure it out using the darts
// and a lot of random throws, or at least the computer's approximation of that process.
//
// If we took the circle and the square and overlapped them, we could fit one quarter of the circle in the square.
// Here's a text "drawing" of the dartboard with a quarter of the circle drawn over it.
//  ____________
//  |^*--__    |
//  |      ^_  |
//  |        * |
//  |         \|
//  ------------
//
// Since each side of this is 1 foot, the area of the square is 1 x 1 = 1 square foot.
// The area of a circle is pi x radius x radius. In this case, the circle has a diameter of 2 feet, so the radius is 1
// foot, and the area is pi x 1 x 1 = pi. Therefore, the area of a quarter of the circle is pi / 4 square feet.
// In this case, we're saying we don't know what pi is -- we're just using it as a symbol to represent the value we're
// trying to figure out.
//
// Suppose we throw thousands of darts at the square without aiming. They will land basically everywhere. We can use
// this to approximate the area. For instance, if we split the square into a left half and a right half, each half
// should have approximately half of the total number of darts in it, because each half has half the area of the square.
// Similarly, a quarter of the square would have a quarter of the darts because it is a quarter of the area, etc. You
// could do the same with any shape: put it over the square and see how many darts land in it and you'll be able to
// compare the area of that shape with the area of the square.
//
// We can use this to estimate the value of pi: we know that the area inside the quarter circle is pi / 4 square feet
// by the rules of geometry. We also know that the area of the square is 1 square foot. (The units are the same so we
// will ignore the units from now on.) Thus, by comparing the number of darts that fall inside the circle with the
// number of darts in the square, we will know the ratio of the two areas.

function isInsideCircle(x, y) {
    // Is the x, y point inside a circle of radius 1?
    // Apply pythagorean theorem for length of the hypotenuse of a right triangle
    //  ____________
    //  |-x-*      |
    //  |  /|      |
    //  | / y      |
    //  |/  |      |
    //  ------------
    return Math.sqrt(x*x + y*y) <= 1.0;
}

var inCircle = 0;
var numDarts = 10000000;

for (var i = 0; i < numDarts; i++) {
    // pick a random point in the square
    var x = Math.random();
    var y = Math.random();

    if (isInsideCircle(x, y)) {
        inCircle++;
    }
}

// ratio of pi/4 to 1 is approximated by the ratio of darts in the circle to the overall darts thrown.
// In other words, (pi / 4) / (1) = (darts in circle) / (darts in square).
// Anything divided by 1 is itself, so we can simplify this to pi = 4 * (darts in circle) / (darts in square).

var approxPi = 4 * inCircle / numDarts;

console.log("Approximate pi: " + approxPi);
console.log("Actual pi: " + Math.PI);
