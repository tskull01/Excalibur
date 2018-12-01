ex.Physics.acc = new ex.Vector(0, 200);
ex.Physics.collisionResolutionStrategy = ex.CollisionResolutionStrategy.RigidBody;
ex.Physics.allowRigidBodyRotation = false;
var game = new ex.Engine({
  width: 600,
  height: 400
});

var actor = new ex.Actor({
  pos: new ex.Vector(100, 100),
  width: 50,
  height: 50,
  color: ex.Color.Red,
  collisionType: ex.CollisionType.Active
});

game.input.pointers.primary.on('down', () => {
  actor.vel.x = 100;
});

var floor = new ex.Actor({
  pos: new ex.Vector(game.halfDrawWidth, game.drawHeight),
  anchor: new ex.Vector(0.5, 0.5),
  width: game.drawWidth,
  height: 40,
  color: ex.Color.Black,
  collisionType: ex.CollisionType.Fixed
});

var block = new ex.Actor({
  pos: new ex.Vector(game.halfDrawWidth, game.drawHeight - 45),
  width: 50,
  height: 50,
  color: ex.Color.Green,
  collisionType: ex.CollisionType.Active
});
var block2 = new ex.Actor({
  pos: new ex.Vector(game.halfDrawWidth + 25, game.drawHeight - 45),
  width: 50,
  height: 50,
  color: ex.Color.Green.clone().darken(0.5),
  collisionType: ex.CollisionType.Active
});
var block3 = new ex.Actor({
  pos: new ex.Vector(game.halfDrawWidth + 50, game.drawHeight - 45),
  width: 50,
  height: 50,
  color: ex.Color.Green.clone().darken(0.75),
  collisionType: ex.CollisionType.Active
});

actor.body.mass = 0.01;

block.body.mass = 50000000;
block.body.friction = 5000000000000000;
block.body.restitution = 0.1;

block2.body.mass = 50000000;
block2.body.friction = 5000000000000000;
block2.body.restitution = 0.1;

block3.body.mass = 50000000;
block3.body.friction = 5000000000000000;
block3.body.restitution = 0.1;

game.add(block);
game.add(block2);
game.add(block3);
game.add(floor);
game.add(actor);
game.start();
