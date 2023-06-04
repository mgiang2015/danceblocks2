const scalingConstant = 0.031;
// unit: m
const UccStageTotalWidth = 33.46 / scalingConstant;
const UccStageDepth = 15 / scalingConstant;

const MaxStageWidth = 33 / scalingConstant; // max width
const MaxStageDepth = 19 / scalingConstant; // max depth

// unit: pixels
const DefaultGridGap = 20;
const GridGapIncrement = 5;

// default values for store
const NEW_DANCER_NAME = "New Dancer";
const NEW_DANCER_COLOR = "#A020F0";
const NEW_BLOCKING_NAME = "New Formation";
const NEW_DANCER_XCOORD = 100
const NEW_DANCER_YCOORD = 100

export { UccStageDepth, UccStageTotalWidth, MaxStageWidth, MaxStageDepth , scalingConstant, DefaultGridGap, GridGapIncrement, NEW_DANCER_NAME, NEW_BLOCKING_NAME, NEW_DANCER_COLOR, NEW_DANCER_XCOORD, NEW_DANCER_YCOORD }