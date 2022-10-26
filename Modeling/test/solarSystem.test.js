// This code was largely accepted directly from copilot. YMMV

// mocha tests for the solarSystem class

const assert = require('assert');
const { describe } = require('node:test');
const SolarSystem = require('../solarSystem.js');

describe('SolarSystem', function() {
  describe('constructor', function() {
    it('should set the name', function() {
      const solarSystem = new SolarSystem('Sol');
      assert.equal(solarSystem.name, 'Sol');
    });
  });
}
);

describe('gravity calculation', function() {
  it('should calculate the force of gravity between two objects', function() {
    const solarSystem = new SolarSystem('Sol');
    const earth = new Planet({name: 'Earth', mass: 1, x: 0, y: 0});
    const moon = new Planet({name: 'Moon', mass: 0.1, x: 0, y: 1});
    const force = solarSystem.calculateGravity(earth, moon);
    assert.equal(force, 0.1);
  });
});
