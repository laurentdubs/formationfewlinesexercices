// Complete and add needed car properties:
const car = {
  speed: 0,
  minutes: 0,
  distance: 0,

  start: function () {
    this.speed = 0;
    this.minutes = 0;
    this.distance = 0;
    //console.log(`${this.speed}`);
    return this;
  },
  changeSpeed: function (speed) {
    this.speed = speed;
    //console.log(`${this.speed}`);
    return this;
  },
  drive: function (minutes) {
    this.minutes = minutes;
    //console.log(`${this.minutes}`);
    this.distance += (this.speed * this.minutes) / 60;
    //console.log(`${this.distance}`);
    return this;
  },
  showDistance: function () {
    console.log(`${this.distance} Km`);
    return this;
  },
};

module.exports = car;
