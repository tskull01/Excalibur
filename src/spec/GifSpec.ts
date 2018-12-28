/// <reference path="support/js-imagediff.d.ts" />
/// <reference path="Mocks.ts" />

describe('A Gif', () => {
  let engine: ex.Engine;
  let gif: ex.Gif;
  beforeEach(() => {
    jasmine.addMatchers(imagediff.jasmine);
    engine = TestUtils.engine({
      width: 100,
      height: 100
    });

    gif = new ex.Gif('base/src/spec/images/GifSpec/sword.gif', ex.Color.Black.clone());
  });
  afterEach(() => {
    engine.stop();
    engine = null;
  });

  it('should load', (done) => {
    gif.load().then(() => {
      expect(gif).toBeDefined();

      let spriteFrame: ex.Sprite = gif.asSprite();
      expect(spriteFrame).toBeDefined();
      expect(spriteFrame.drawHeight).toBe(100);
      expect(spriteFrame.drawWidth).toBe(100);

      var sprite: ex.Sprite = gif.asSprite();
      expect(gif.isLoaded()).toBe(true);
      (<any>sprite)._applyEffects();
      sprite.draw(engine.ctx, 0, 0);

      imagediff.expectCanvasImageMatches('GifSpec/frame1.png', engine.canvas, done);
    });
  });
});
