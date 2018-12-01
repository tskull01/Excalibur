/// <reference path='../../lib/excalibur.d.ts' />

ex.Physics.acc = new ex.Vector(0, 100);
var game = new ex.Engine({
  width: 600,
  height: 400,
  canvasElementId: 'game',
  origin: new ex.Vector(0, 0),
  preserveOriginOnResize: true,
  displayMode: ex.DisplayMode.FullScreen
});
game.isDebug = true;

var actor = new ex.Actor({
  pos: new ex.Vector(100, 100),
  width: 50,
  height: 50,
  color: ex.Color.Red,
  collisionType: ex.CollisionType.Active
});

var floor = new ex.Actor({
  pos: new ex.Vector(0, game.drawHeight),
  color: ex.Color.Black,
  anchor: new ex.Vector(0, 0.5),
  width: game.drawWidth,
  height: 40,
  collisionType: ex.CollisionType.Fixed
});

floor.on('preupdate', () => {
  if (floor.getWidth() !== game.canvasWidth) {
    floor.setWidth(game.canvasWidth);
    floor.x = 0;
  }
  if (floor.getWorldPos().y !== game.drawHeight) {
    floor.y = game.drawHeight;
  }
});

game.add(actor);
game.add(floor);
game.start();
