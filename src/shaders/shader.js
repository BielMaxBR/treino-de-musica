export default class Shader extends Phaser.Renderer.WebGL.Pipelines.PostFXPipeline {
  constructor(game) {
    super({
        game: game,
        renderTarget: true,
        fragShader:`
        //precision mediump float;
        //uniform sampler2D uMainSampler;
        //varying vec2 outTexCoord;
        void main(void) {
            //vec4 color = texture2D(uMainSampler, outTexCoord);
            //float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
            gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
        }
        `,
    });
  }

  onPreRender() {
    this.set1f('intensity', this._intensity);
  }
}