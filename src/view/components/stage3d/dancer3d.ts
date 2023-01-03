import { FreeCamera, Color3, Vector3, HemisphericLight, MeshBuilder, Scene, Mesh, SceneLoader, ArcRotateCamera, Material, StandardMaterial } from "@babylonjs/core";
import { scalingConstant } from "../../../model/const";

// Constants
const headHeight = 22.5 / scalingConstant;
const headWidth = 22.5 / scalingConstant;
const headDepth = 22.5 / scalingConstant;

const buildHead = () => {
  const head = MeshBuilder.CreateBox("head", { width: headWidth, height: headHeight, depth: headDepth });

  // TODO: set coordinates
  head.position.y = 7 * headHeight;

  return head;
}

const buildNeck = () => {
  const neck = MeshBuilder.CreateBox("neck", { width: 0.5 * headWidth, height: headHeight, depth: 0.5 * headDepth })

  // TODO: set coordinates
  neck.position.y = 6 * headHeight;

  return neck;
}

const buildTorso = () => {
  const torso = MeshBuilder.CreateBox("torso", { width: 2 * headWidth, height: 3 * headHeight, depth: headDepth });

  // TODO: Set coordinates
  torso.position.y = 4.5 * headHeight;

  return torso;
}

const buildLeftArm = () => {
  const leftArm = MeshBuilder.CreateBox("leftArm", { width: 0.5 * headWidth, height: 3.5 * headHeight, depth: 0.5 * headDepth });
  // TODO: Set coordinates
  leftArm.position.y = 4.25 * headHeight;
  leftArm.position.x = -1.25 * headWidth;

  return leftArm;
}

const buildRightArm = () => {
  const rightArm = MeshBuilder.CreateBox("rightArm", { width: 0.5 * headWidth, height: 3.5 * headHeight, depth: 0.5 * headDepth });
  // TODO: Set coordinates
  rightArm.position.y = 4.25 * headHeight;
  rightArm.position.x = 1.25 * headWidth;

  return rightArm;
}

const buildLeftLeg = () => {
  const leftLeg = MeshBuilder.CreateBox("leftLeg", { width: 0.5 * headWidth, height: 4 * headHeight, depth: 0.5 * headDepth });
  // TODO: Set coordinates
  leftLeg.position.y = 2 * headHeight;
  leftLeg.position.x = -0.5 * headWidth;

  return leftLeg;
}

const buildRightLeg = () => {
  const rightLeg = MeshBuilder.CreateBox("rightLeg", { width: 0.5 * headWidth, height: 4 * headHeight, depth: 0.5 * headDepth });
  // TODO: Set coordinates
  rightLeg.position.y = 2 * headHeight;
  rightLeg.position.x = 0.5 * headWidth;

  return rightLeg;
}

const buildDancer = (xCoord: number, yCoord: number) => {
  const head = buildHead();
  const neck = buildNeck();
  const torso = buildTorso();
  const leftArm = buildLeftArm();
  const rightArm = buildRightArm();
  const leftLeg = buildLeftLeg();
  const rightLeg = buildRightLeg();

  const dancer = Mesh.MergeMeshes([head, neck, torso, leftArm, rightArm, leftLeg, rightLeg], true, false, undefined, false, true);

  if (dancer) {
    dancer.position.x = xCoord;
    dancer.position.z = -yCoord;
  }

  return dancer;
}

export default buildDancer;