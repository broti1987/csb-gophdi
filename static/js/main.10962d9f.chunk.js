(this["webpackJsonpikigai-breathe"]=this["webpackJsonpikigai-breathe"]||[]).push([[0],{33:function(e,t,r){},38:function(e,t,r){"use strict";r.r(t);var a=r(2),n=r(23),s=r.n(n),c=(r(33),r(7)),i=r(11),u=r(3),o=r(29),f=r(13),l=r(24),h=r(9),v=r(25),d=r(26),j=r(5);Object(i.b)({EffectComposer:o.a,ShaderPass:f.a,SavePass:l.a,RenderPass:d.a});var m={uniforms:{tDiffuse1:{value:null},tDiffuse2:{value:null},tDiffuse3:{value:null}},vertexShader:"\n    varying vec2 vUv;\n    void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);\n    }\n  ",fragmentShader:"\n    varying vec2 vUv;\n    uniform sampler2D tDiffuse1;\n    uniform sampler2D tDiffuse2;\n    uniform sampler2D tDiffuse3;\n    \n    void main() {\n      vec4 del0 = texture2D(tDiffuse1, vUv);\n      vec4 del1 = texture2D(tDiffuse2, vUv);\n      vec4 del2 = texture2D(tDiffuse3, vUv);\n      float alpha = min(min(del0.a, del1.a), del2.a);\n      gl_FragColor = vec4(del0.r, del1.g, del2.b, alpha);\n    }\n  "};function b(){var e=Object(a.useRef)(),t=Object(a.useRef)(),r=Object(a.useRef)(),n=Object(a.useRef)(!1),s=Object(i.d)(),c=s.scene,o=s.gl,f=s.size,l=s.camera,d=Object(a.useMemo)((function(){return{rtA:new u.WebGLRenderTarget(f.width,f.height),rtB:new u.WebGLRenderTarget(f.width,f.height)}}),[f]),b=d.rtA,g=d.rtB;Object(a.useEffect)((function(){e.current.setSize(f.width,f.height)}),[f]),Object(i.c)((function(){var a=n.current?g:b,s=n.current?b:g;t.current.renderTarget=s,r.current.uniforms.tDiffuse2.value=a.texture,r.current.uniforms.tDiffuse3.value=s.texture,n.current=!n.current,e.current.render()}),1);var p=o.getPixelRatio();return Object(j.jsxs)("effectComposer",{ref:e,args:[o],children:[Object(j.jsx)("renderPass",{attachArray:"passes",scene:c,camera:l}),Object(j.jsx)("shaderPass",{attachArray:"passes",ref:r,args:[m,"tDiffuse1"],needsSwap:!1}),Object(j.jsx)("savePass",{attachArray:"passes",ref:t,needsSwap:!0}),Object(j.jsx)("shaderPass",{attachArray:"passes",args:[v.a],"uniforms-resolution-value-x":1/(f.width*p),"uniforms-resolution-value-y":1/(f.height*p)}),Object(j.jsx)("shaderPass",{attachArray:"passes",args:[h.a]})]})}var g=function(e,t,r,a){return 2*r/Math.PI*Math.atan(Math.sin(2*Math.PI*e*a)/t)};function p(){var e=Object(a.useRef)(),t=Object(a.useMemo)((function(){var e=new u.Vector3,t=new u.Matrix4,r=Object(c.a)(Array(1e4)).map((function(e,t){var r=new u.Vector3;return r.x=t%100-50,r.y=Math.floor(t/100)-50,r.y+=t%2*.5,r.x+=.3*Math.random(),r.y+=.3*Math.random(),r})),a=new u.Vector3(1,0,0),n=r.map((function(e){return e.length()+.5*Math.cos(8*e.angleTo(a))}));return{vec:e,transform:t,positions:r,distances:n}}),[]),r=t.vec,n=t.transform,s=t.positions,o=t.distances;return Object(i.c)((function(t){for(var a=t.clock,c=0;c<1e4;++c){var i=o[c],u=a.elapsedTime-i/25,f=g(u,.15+.2*i/72,.4,1/3.8);r.copy(s[c]).multiplyScalar(f+1.3),n.setPosition(r),e.current.setMatrixAt(c,n)}e.current.instanceMatrix.needsUpdate=!0})),Object(j.jsxs)("instancedMesh",{ref:e,args:[null,null,1e4],children:[Object(j.jsx)("circleBufferGeometry",{args:[.15]}),Object(j.jsx)("meshBasicMaterial",{})]})}function x(){return Object(j.jsxs)(i.a,{orthographic:!0,camera:{zoom:20},colorManagement:!1,children:[Object(j.jsx)("color",{attach:"background",args:["black"]}),Object(j.jsx)(b,{}),Object(j.jsx)(p,{})]})}s.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.10962d9f.chunk.js.map