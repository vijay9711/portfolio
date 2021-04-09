<template>
  <div class="project">
      <div id="container"></div>
  </div>
</template>

<script>
import * as Three from 'three'

export default {
  name: 'ThreeTest',
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null
    }
  },
  methods: {
    init() {
        let container = document.getElementById('container');

        this.camera = new Three.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
        this.camera.position.z = 1;
        // this.camera.position.x = .5;
        // this.camera.position.y = .2;


        this.scene = new Three.Scene();

        let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
        let material = new Three.MeshNormalMaterial();

        this.mesh = new Three.Mesh(geometry, material);
        this.scene.add(this.mesh);

        this.renderer = new Three.WebGLRenderer({antialias: true});
        this.renderer.setSize( window.innerWidth ,window.innerHeight, container.clientHeight);
        container.appendChild(this.renderer.domElement);
    },
    animate() {
        requestAnimationFrame(this.animate);
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.02;
        this.renderer.render(this.scene, this.camera);
    }
  },
  mounted() {
      this.init();
      this.animate();
  }
}
</script>

<style scoped>
.project{
  height: 100vh;
}
</style>
<style>

#container > canvas{
  height: 100vh !important;
}
</style>