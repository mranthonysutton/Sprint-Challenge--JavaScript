// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(attr) {
    this.length = attr.length;
    this.width = attr.width;
    this.height = attr.height;
  }

  volume(length, width, height) {
    return this.length * this.width * this.height;
  }

  surfaceArea(length, width, height) {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

class CubeMaker extends CuboidMaker {
  constructor(attr) {
    super(attr);
  }

  cubeVolume(length) {
    return Math.pow(this.length, 3);
  }

  cubeSurfaceArea(length) {
    return 6 * Math.pow(this.length, 2);
  }
}

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

const cube = new CubeMaker({
  length: 10,
  width: 10,
  height: 10
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
console.log(cube.cubeVolume()); // 10 * 10 * 10 === 1000
console.log(cube.cubeSurfaceArea()); // 6 * (10 * 10)) === 600
