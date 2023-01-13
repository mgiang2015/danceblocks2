import { Color3, Vector3, HemisphericLight, MeshBuilder, Scene, ArcRotateCamera, StandardMaterial, Color4 } from "@babylonjs/core";
import SceneComponent from 'babylonjs-hook'; // if you install 'babylonjs-hook' NPM.
import { useAppSelector } from "../../../control/hooks";
import { selectCurrentBlocking, selectStageDepth, selectStageWidth } from "../../../control/stateSlice";
import buildDancer from "./dancer3d";

// Scene rendering and what we need for the scene
export default function Stage3d() {
    // Get state from store to create all the dancers
    const currentBlocking = useAppSelector(selectCurrentBlocking);
    const stageDepth = useAppSelector(selectStageDepth);
    const stageWidth = useAppSelector(selectStageWidth);

    const onSceneReady = (scene: Scene, currentBlocking?: Blocking) => {
        // This creates and positions a free camera (non-mesh)
        const camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 800, new Vector3(0, 0, 0))
      
        // This targets the camera to scene origin
        camera.setTarget(Vector3.Zero());
      
        const canvas = scene.getEngine().getRenderingCanvas();
      
        // This attaches the camera to the canvas
        camera.attachControl(canvas, true);
      
        // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
        const light = new HemisphericLight("light", new Vector3(0, 0.5, -1), scene);
        light.intensity = 1;
    
        // change environment color
        scene.clearColor = new Color4(1,1,1,1);
        
        // Create ground lul
        const ground = MeshBuilder.CreateGround("ground", {width: stageWidth, height: stageDepth});
        const groundMaterial = new StandardMaterial("groundMaterial");
        groundMaterial.diffuseColor = new Color3(255/255,255/255,255/255);
        ground.material = groundMaterial;
    
        if (currentBlocking) {
            currentBlocking.dancers.forEach((dancer) => {
                buildDancer(dancer.xCoord - stageWidth / 2, dancer.yCoord - stageDepth / 2, dancer.color);
            })
        }
    };
      
    /**
     * Will run on every frame render.  We are spinning the box on y-axis.
     * This can be used to implement cannon / special visuals later on
        
    const onRender = (scene: Scene) => {
        
    };
    */
    
      
    return (
        <div style={{height: stageDepth, width: stageWidth}}>
            <SceneComponent style={{height: '100%', width: '100%'}} antialias onSceneReady={(scene) => onSceneReady(scene, currentBlocking)} id="my-canvas" />
        </div>
    )
  };