import { Color3, MeshBuilder, Mesh, StandardMaterial } from "@babylonjs/core";
import { scalingConstant } from "../../../control/const";

// Constants
const headHeight = 0.225 / scalingConstant;
const headWidth = 0.225 / scalingConstant;
const headDepth = 0.225 / scalingConstant;

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

function degreeToRad(degrees: number) {
  let pi = Math.PI;
  return degrees * (pi / 180);
}

const buildDancer = (xCoord: number, yCoord: number, angle: number, color: string) => {
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
    dancer.rotation.y = degreeToRad(angle);
    // build material for dancers
    const dancerMaterial = new StandardMaterial("dancerMaterial");
    
    // convert dancer color to rgb
    var r = parseInt(color.slice(1, 3), 16),
    g = parseInt(color.slice(3, 5), 16),
    b = parseInt(color.slice(5, 7), 16);
    dancerMaterial.diffuseColor = new Color3(r / 255, g / 255, b / 255);

    dancer.material = dancerMaterial;
  }

  return dancer;
}

export default buildDancer;