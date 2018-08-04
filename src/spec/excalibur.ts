/**
 * The current Excalibur version string
 * @description `process.env.__EX_VERSION` gets replaced by Webpack on build
 */
export var EX_VERSION = 'test'; //process.env.__EX_VERSION;

// This file is used as the bundle entrypoint and exports everything
// that will be exposed as the `ex` global variable.

export * from '../../build/dist/Engine';
export { Actor, IActorArgs, CollisionType } from '../../build/dist/Actor';
export * from '../../build/dist/Algebra';
export * from '../../build/dist/Camera';
export * from '../../build/dist/Class';
export * from '../../build/dist/Configurable';
export * from '../../build/dist/Debug';
export * from '../../build/dist/EventDispatcher';
export * from '../../build/dist/Events/MediaEvents';
export * from '../../build/dist/Events';
export * from '../../build/dist/Group';
export { Label, FontStyle, FontUnit, TextAlign, BaseAlign } from '../../build/dist/Label';
export * from '../../build/dist/Loader';
export { Particle, ParticleEmitter, IParticleArgs, IParticleEmitterArgs, EmitterType } from '../../build/dist/Particles';
export * from '../../build/dist/Physics';
export * from '../../build/dist/Promises';
export * from '../../build/dist/Scene';
export { TileMap, Cell, ITileMapArgs, ICellArgs, TileSprite } from '../../build/dist/TileMap';
export * from '../../build/dist/Timer';
export * from '../../build/dist/Trigger';
export * from '../../build/dist/UIActor';

export * from '../../build/dist/Actions/Index';
export * from '../../build/dist/Collision/Index';
export * from '../../build/dist/Drawing/Index';
export * from '../../build/dist/Interfaces/Index';
export * from '../../build/dist/Math/Index';
export * from '../../build/dist/PostProcessing/Index';
export * from '../../build/dist/Resources/Index';

// ex.Events namespace
import * as events from '../../build/dist/Events';
export { events as Events };

// ex.Input namespace
import * as input from '../../build/dist/Input/Index';
export { input as Input };

// ex.Traits namespace
import * as traits from '../../build/dist/Traits/Index';
export { traits as Traits };

// ex.Util namespaces
import * as util from '../../build/dist/Util/Index';
export { util as Util };

export * from '../../build/dist/Util/Decorators';
export * from '../../build/dist/Util/Detector';
export * from '../../build/dist/Util/CullingBox';
export * from '../../build/dist/Util/EasingFunctions';
export * from '../../build/dist/Util/Log';
export * from '../../build/dist/Util/SortedList';
