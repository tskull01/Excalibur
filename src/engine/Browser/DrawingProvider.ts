export class ExcaliburCanvas {
  nativeCanvas: any;
  width: number;
  height: number;
}

export class ExcaliburDrawCtx {
  nativeCtx: any;
}

export interface IDrawingProvider {}

export class DrawingProvider implements IDrawingProvider {
  ctx: ExcaliburDrawCtx;
  canvas: ExcaliburCanvas;
}
