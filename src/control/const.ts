const scalingConstant = 0.031;
// unit: m
const UccStageTotalWidth = 33.46 / scalingConstant;
const UccStageDepth = 15 / scalingConstant;

const MaxStageWidth = 33 / scalingConstant; // max width
const MaxStageDepth = 19 / scalingConstant; // max depth

// unit: pixels
const DefaultGridGap = 20;
const GridGapIncrement = 5;

export { UccStageDepth, UccStageTotalWidth, MaxStageWidth, MaxStageDepth , scalingConstant, DefaultGridGap, GridGapIncrement }