export default class shader extends Phaser.Renderer.WebGL.Pipelines.PostFXPipeline {
  constructor(game) {
      super({
          game: game,
          renderTarget: true,
          fragShader: '...',  // GLSL shader
          uniforms: []
      });
  }

  onPreRender() {
      // this.set1f('intensity', this._intensity);
      this.colorMatrix.grayscale(this._intensity);
  }

  onDraw(renderTarget) {
      this.colorMatrix.grayscale(this._intensity);
      this.drawFrame(renderTarget, this.fullFrame1);
      this.bindAndDraw(this.fullFrame1);
  }
}