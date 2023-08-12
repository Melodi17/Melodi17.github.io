//global UI variables
var globalCanvas;
var globalBlockName;
var globalBlockOutput;
var globalBlockGates = [];
var globalClickedGatesQueue = [];

//the array of all gates
var globalGates = [];
var globalSavedStateGates;
var globalBlock = null; //data about the block of gates that have been built

//images of gates in different states
var Images = {};
var images = loadImages([
    {name: "one1", url: "./img/one1.png"},
    {name: "one2", url: "./img/one2.png"},
    {name: "one3", url: "./img/one3.png"},
    {name: "one4", url: "./img/one4.png"},
    {name: "gnd", url: "./img/gnd.png"},
    {name: "sw0-1", url: "./img/sw0-1.png"},
    {name: "sw0-2", url: "./img/sw0-2.png"},
    {name: "sw0-3", url: "./img/sw0-3.png"},
    {name: "sw0-4", url: "./img/sw0-4.png"},
    {name: "sw0-5", url: "./img/sw0-5.png"},
    {name: "sw0-6", url: "./img/sw0-6.png"},
    {name: "sw0-7", url: "./img/sw0-7.png"},
    {name: "sw1-1", url: "./img/sw1-1.png"},
    {name: "sw1-2", url: "./img/sw1-2.png"},
    {name: "sw1-3", url: "./img/sw1-3.png"},
    {name: "sw1-4", url: "./img/sw1-4.png"},
    {name: "sw1-5", url: "./img/sw1-5.png"},
    {name: "sw1-6", url: "./img/sw1-6.png"},
    {name: "sw1-7", url: "./img/sw1-7.png"},
    {name: "sw2-1", url: "./img/sw2-1.png"},
    {name: "sw2-2", url: "./img/sw2-2.png"},
    {name: "sw2-3", url: "./img/sw2-3.png"},
    {name: "sw2-4", url: "./img/sw2-4.png"},
    {name: "sw2-5", url: "./img/sw2-5.png"},
    {name: "sw2-6", url: "./img/sw2-6.png"},
    {name: "sw2-7", url: "./img/sw2-7.png"},
    {name: "sw3-1", url: "./img/sw3-1.png"},
    {name: "sw3-2", url: "./img/sw3-2.png"},
    {name: "sw3-3", url: "./img/sw3-3.png"},
    {name: "sw3-4", url: "./img/sw3-4.png"},
    {name: "sw3-5", url: "./img/sw3-5.png"},
    {name: "sw3-6", url: "./img/sw3-6.png"},
    {name: "sw3-7", url: "./img/sw3-7.png"},
    {name: "gnd", url: "./img/gnd.png"},
    {name: "not0-1", url: "./img/not0-1.png"},
    {name: "not0-2", url: "./img/not0-2.png"},
    {name: "not0-3", url: "./img/not0-3.png"},
    {name: "not0-4", url: "./img/not0-4.png"},
    {name: "not0-5", url: "./img/not0-5.png"},
    {name: "not0-6", url: "./img/not0-6.png"},
    {name: "not0-7", url: "./img/not0-7.png"},
    {name: "not0-8", url: "./img/not0-8.png"},
    {name: "not0-9", url: "./img/not0-9.png"},
    {name: "not0-10", url: "./img/not0-10.png"},
    {name: "not0-11", url: "./img/not0-11.png"},
    {name: "not1-1", url: "./img/not1-1.png"},
    {name: "not1-2", url: "./img/not1-2.png"},
    {name: "not1-3", url: "./img/not1-3.png"},
    {name: "not1-4", url: "./img/not1-4.png"},
    {name: "not1-5", url: "./img/not1-5.png"},
    {name: "not1-6", url: "./img/not1-6.png"},
    {name: "not1-7", url: "./img/not1-7.png"},
    {name: "not1-8", url: "./img/not1-8.png"},
    {name: "not1-9", url: "./img/not1-9.png"},
    {name: "not1-10", url: "./img/not1-10.png"},
    {name: "not1-11", url: "./img/not1-11.png"},
    {name: "mos-off", url: "./img/mos-off.png"},
    {name: "mos-on-0-1", url: "./img/mos-on-0-1.png"},
    {name: "mos-on-0-2", url: "./img/mos-on-0-2.png"},
    {name: "mos-on-0-3", url: "./img/mos-on-0-3.png"},
    {name: "mos-on-0-4", url: "./img/mos-on-0-4.png"},
    {name: "mos-on-0-5", url: "./img/mos-on-0-5.png"},
    {name: "mos-on-0-6", url: "./img/mos-on-0-6.png"},
    {name: "mos-on-0-7", url: "./img/mos-on-0-7.png"},
    {name: "mos-on-0-8", url: "./img/mos-on-0-8.png"},
    {name: "mos-on-0-9", url: "./img/mos-on-0-9.png"},
    {name: "mos-on-0-10", url: "./img/mos-on-0-10.png"},
    {name: "mos-on-0-11", url: "./img/mos-on-0-11.png"},
    {name: "mos-on-1-1", url: "./img/mos-on-1-1.png"},
    {name: "mos-on-1-2", url: "./img/mos-on-1-2.png"},
    {name: "mos-on-1-3", url: "./img/mos-on-1-3.png"},
    {name: "mos-on-1-4", url: "./img/mos-on-1-4.png"},
    {name: "mos-on-1-5", url: "./img/mos-on-1-5.png"},
    {name: "mos-on-1-6", url: "./img/mos-on-1-6.png"},
    {name: "mos-on-1-7", url: "./img/mos-on-1-7.png"},
    {name: "mos-on-1-8", url: "./img/mos-on-1-8.png"},
    {name: "mos-on-1-9", url: "./img/mos-on-1-9.png"},
    {name: "mos-on-1-10", url: "./img/mos-on-1-10.png"},
    {name: "mos-on-1-11", url: "./img/mos-on-1-11.png"},
    {name: "pmos-off", url: "./img/pmos-off.png"},
    {name: "pmos-on-0-0", url: "./img/pmos-on-0-0.png"},
    {name: "pmos-on-0-1", url: "./img/pmos-on-0-1.png"},
    {name: "pmos-on-0-2", url: "./img/pmos-on-0-2.png"},
    {name: "pmos-on-0-3", url: "./img/pmos-on-0-3.png"},
    {name: "pmos-on-0-4", url: "./img/pmos-on-0-4.png"},
    {name: "pmos-on-0-5", url: "./img/pmos-on-0-5.png"},
    {name: "pmos-on-0-6", url: "./img/pmos-on-0-6.png"},
    {name: "pmos-on-0-7", url: "./img/pmos-on-0-7.png"},
    {name: "pmos-on-0-8", url: "./img/pmos-on-0-8.png"},
    {name: "pmos-on-1-0", url: "./img/pmos-on-1-0.png"},
    {name: "pmos-on-1-1", url: "./img/pmos-on-1-1.png"},
    {name: "pmos-on-1-2", url: "./img/pmos-on-1-2.png"},
    {name: "pmos-on-1-3", url: "./img/pmos-on-1-3.png"},
    {name: "pmos-on-1-4", url: "./img/pmos-on-1-4.png"},
    {name: "pmos-on-1-5", url: "./img/pmos-on-1-5.png"},
    {name: "pmos-on-1-6", url: "./img/pmos-on-1-6.png"},
    {name: "pmos-on-1-7", url: "./img/pmos-on-1-7.png"},
    {name: "pmos-on-1-8", url: "./img/pmos-on-1-8.png"},
    {name: "and0-1", url: "./img/and0-1.png"},
    {name: "and0-2", url: "./img/and0-2.png"},
    {name: "and0-3", url: "./img/and0-3.png"},
    {name: "and0-4", url: "./img/and0-4.png"},
    {name: "and0-5", url: "./img/and0-5.png"},
    {name: "and0-6", url: "./img/and0-6.png"},
    {name: "and0-7", url: "./img/and0-7.png"},
    {name: "and0-8", url: "./img/and0-8.png"},
    {name: "and0-9", url: "./img/and0-9.png"},
    {name: "and0-10", url: "./img/and0-10.png"},
    {name: "and0-11", url: "./img/and0-11.png"},
    {name: "and1-1", url: "./img/and1-1.png"},
    {name: "and1-2", url: "./img/and1-2.png"},
    {name: "and1-3", url: "./img/and1-3.png"},
    {name: "and1-4", url: "./img/and1-4.png"},
    {name: "and1-5", url: "./img/and1-5.png"},
    {name: "and1-6", url: "./img/and1-6.png"},
    {name: "and1-7", url: "./img/and1-7.png"},
    {name: "and1-8", url: "./img/and1-8.png"},
    {name: "and1-9", url: "./img/and1-9.png"},
    {name: "and1-10", url: "./img/and1-10.png"},
    {name: "and1-11", url: "./img/and1-11.png"},
    {name: "or0-1", url: "./img/or0-1.png"},
    {name: "or0-2", url: "./img/or0-2.png"},
    {name: "or0-3", url: "./img/or0-3.png"},
    {name: "or0-4", url: "./img/or0-4.png"},
    {name: "or0-5", url: "./img/or0-5.png"},
    {name: "or0-6", url: "./img/or0-6.png"},
    {name: "or0-7", url: "./img/or0-7.png"},
    {name: "or0-8", url: "./img/or0-8.png"},
    {name: "or0-9", url: "./img/or0-9.png"},
    {name: "or0-10", url: "./img/or0-10.png"},
    {name: "or0-11", url: "./img/or0-11.png"},
    {name: "or1-1", url: "./img/or1-1.png"},
    {name: "or1-2", url: "./img/or1-2.png"},
    {name: "or1-3", url: "./img/or1-3.png"},
    {name: "or1-4", url: "./img/or1-4.png"},
    {name: "or1-5", url: "./img/or1-5.png"},
    {name: "or1-6", url: "./img/or1-6.png"},
    {name: "or1-7", url: "./img/or1-7.png"},
    {name: "or1-8", url: "./img/or1-8.png"},
    {name: "or1-9", url: "./img/or1-9.png"},
    {name: "or1-10", url: "./img/or1-10.png"},
    {name: "or1-11", url: "./img/or1-11.png"},
    {name: "7seg0-1", url: "./img/7seg0-1.png"},
    {name: "7seg0-2", url: "./img/7seg0-2.png"},
    {name: "7seg0-3", url: "./img/7seg0-3.png"},
    {name: "7seg0-4", url: "./img/7seg0-4.png"},
    {name: "7seg0-5", url: "./img/7seg0-5.png"},
    {name: "7seg0-6", url: "./img/7seg0-6.png"},
    {name: "7seg0-7", url: "./img/7seg0-7.png"},
    {name: "7seg0-8", url: "./img/7seg0-8.png"},
    {name: "7seg0-9", url: "./img/7seg0-9.png"},
    {name: "7seg0-10", url: "./img/7seg0-10.png"},
    {name: "7seg0-11", url: "./img/7seg0-11.png"},
    {name: "7seg0-12", url: "./img/7seg0-12.png"},
    {name: "7seg0-13", url: "./img/7seg0-13.png"},
    {name: "7seg0-14", url: "./img/7seg0-14.png"},
    {name: "7seg0-15", url: "./img/7seg0-15.png"},
    {name: "7seg1-1", url: "./img/7seg1-1.png"},
    {name: "7seg1-2", url: "./img/7seg1-2.png"},
    {name: "7seg1-3", url: "./img/7seg1-3.png"},
    {name: "7seg1-4", url: "./img/7seg1-4.png"},
    {name: "7seg1-5", url: "./img/7seg1-5.png"},
    {name: "7seg1-6", url: "./img/7seg1-6.png"},
    {name: "7seg1-7", url: "./img/7seg1-7.png"},
    {name: "7seg1-8", url: "./img/7seg1-8.png"},
    {name: "7seg1-9", url: "./img/7seg1-9.png"},
    {name: "7seg1-10", url: "./img/7seg1-10.png"},
    {name: "7seg1-11", url: "./img/7seg1-11.png"},
    {name: "7seg1-12", url: "./img/7seg1-12.png"},
    {name: "7seg1-13", url: "./img/7seg1-13.png"},
    {name: "7seg1-14", url: "./img/7seg1-14.png"},
    {name: "7seg1-15", url: "./img/7seg1-15.png"},
    {name: "source0", url: "./img/source0.png"},
    {name: "source1", url: "./img/source1.png"},
    {name: "xor0-1", url: "./img/xor0-1.png"},
    {name: "xor0-2", url: "./img/xor0-2.png"},
    {name: "xor0-3", url: "./img/xor0-3.png"},
    {name: "xor0-4", url: "./img/xor0-4.png"},
    {name: "xor0-5", url: "./img/xor0-5.png"},
    {name: "xor0-6", url: "./img/xor0-6.png"},
    {name: "xor0-7", url: "./img/xor0-7.png"},
    {name: "xor0-8", url: "./img/xor0-8.png"},
    {name: "xor0-9", url: "./img/xor0-9.png"},
    {name: "xor0-10", url: "./img/xor0-10.png"},
    {name: "xor1-1", url: "./img/xor1-1.png"},
    {name: "xor1-2", url: "./img/xor1-2.png"},
    {name: "xor1-3", url: "./img/xor1-3.png"},
    {name: "xor1-4", url: "./img/xor1-4.png"},
    {name: "xor1-5", url: "./img/xor1-5.png"},
    {name: "xor1-6", url: "./img/xor1-6.png"},
    {name: "xor1-7", url: "./img/xor1-7.png"},
    {name: "xor1-8", url: "./img/xor1-8.png"},
    {name: "xor1-9", url: "./img/xor1-9.png"},
    {name: "xor1-10", url: "./img/xor1-10.png"},
    {name: "clock0-1", url: "./img/clock0-1.png"},
    {name: "clock0-2", url: "./img/clock0-2.png"},
    {name: "clock0-3", url: "./img/clock0-3.png"},
    {name: "clock0-4", url: "./img/clock0-4.png"},
    {name: "clock0-5", url: "./img/clock0-5.png"},
    {name: "clock0-6", url: "./img/clock0-6.png"},
    {name: "clock0-7", url: "./img/clock0-7.png"},
    {name: "clock0-8", url: "./img/clock0-8.png"},
    {name: "clock0-9", url: "./img/clock0-9.png"},
    {name: "clock0-10", url: "./img/clock0-10.png"},
    {name: "clock0-11", url: "./img/clock0-11.png"},
    {name: "clock1-1", url: "./img/clock1-1.png"},
    {name: "clock1-2", url: "./img/clock1-2.png"},
    {name: "clock1-3", url: "./img/clock1-3.png"},
    {name: "clock1-4", url: "./img/clock1-4.png"},
    {name: "clock1-5", url: "./img/clock1-5.png"},
    {name: "clock1-6", url: "./img/clock1-6.png"},
    {name: "clock1-7", url: "./img/clock1-7.png"},
    {name: "clock1-8", url: "./img/clock1-8.png"},
    {name: "clock1-9", url: "./img/clock1-9.png"},
    {name: "clock1-10", url: "./img/clock1-10.png"},
    {name: "clock1-11", url: "./img/clock1-11.png"},
    {name: "expand", url: "./img/expand.png"}
    

]);

//animation variables
var globalRefreshRate = 100; //ms
var globalAnimationSpeed = 10; //pixels per period
var globalTimer
var globalRun = true;
var globalAcceleration = 1;
var globalRefreshLockout = false;
var globalHoveringGate = null;
var globalHoveringBackground = null;
var globalHoveringBackgroundLocation = {x: 0, y:0 };
var globalHoveringLine1 = null;
var globalHoveringLine2 = null;
var globalHoveringCondition;
var globalRotation = 0;
var globalGridSize = 10;

/*debug variables
var globalDebugTextInput;
var globalDebugSendCommand;
var globalDebugTextOutput;
*/

//UI variables
var globalUIOutput;
var globalTool; //this is the thing that the user is drawing with
var globalLastDownTarget = null;


//types of gates
var mosSize = {width: 19, height: 19};
var globalMosGate = {
                     size : mosSize,
                     active : false,
                     animationFrames: [
                         ["mos-off"],
                         ["mos-on-0-1","mos-on-0-2","mos-on-0-3","mos-on-0-4","mos-on-0-5","mos-on-0-6","mos-on-0-7","mos-on-0-8","mos-on-0-9","mos-on-0-10","mos-on-0-11"],
                         ["mos-on-1-1","mos-on-1-2","mos-on-1-3","mos-on-1-4","mos-on-1-5","mos-on-1-6","mos-on-1-7","mos-on-1-8","mos-on-1-9","mos-on-1-10","mos-on-1-11"]
                         ],
                     labels: [
                            {location: {x: mosSize.width/2, y: mosSize.height/2}, font: "10px Arial", text: "MOSFET"}  //function label
                            ],
                     inputs: [{x: 0, y: 10}, {x: 10, y: 0}],
                     outputs: [{x: 20, y: 10}]
                    };
//types of gates
var pmosSize = {width: 20, height: 20};
var globalPmosGate = {
                     size : pmosSize,
                     active : false,
                     animationFrames: [
                         ["pmos-off"],
                         ["pmos-on-0-0","pmos-on-0-1","pmos-on-0-2","pmos-on-0-3","pmos-on-0-4","pmos-on-0-5","pmos-on-0-6","pmos-on-0-7","pmos-on-0-8"],
                         ["pmos-on-1-0","pmos-on-1-1","pmos-on-1-2","pmos-on-1-3","pmos-on-1-4","pmos-on-1-5","pmos-on-1-6","pmos-on-1-7","pmos-on-1-8"]
                         ],
                     labels: [
                            {location: {x: pmosSize.width/2, y: pmosSize.height/2}, font: "10px Arial", text: "PMOSFET"}  //function label
                            ],
                     inputs: [{x: 0, y: 10}, {x: 10, y: 0}],
                     outputs: [{x: 20, y: 10}]
                    };
var orSize = {width: 20, height: 20};
var globalOrGate = {
                     size : orSize,
                     active : true,
                     animationFrames: [
                         ["or0-1","or0-2","or0-3","or0-4","or0-5","or0-6","or0-7","or0-8","or0-9","or0-10","or0-11"],
                         ["or1-1","or1-2","or1-3","or1-4","or1-5","or1-6","or1-7","or1-8","or1-9","or1-10","or1-11"]
                         ],
                     labels: [
                            {location: {x: orSize.width/2, y: orSize.height/2}, font: "10px Arial", text: "OR"}  //function label
                            ],
                     inputs: [{x: 7, y: 5}, {x: 12, y: 5}],
                     outputs: [{x: 10, y: 19}]
                    };
var xorSize = {width: 20, height: 20};
var globalXorGate = {
                     size : xorSize,
                     active : true,
                     animationFrames: [
                         ["xor0-1","xor0-2","xor0-3","xor0-4","xor0-5","xor0-6","xor0-7","xor0-8","xor0-9","xor0-10"],
                         ["xor1-1","xor1-2","xor1-3","xor1-4","xor1-5","xor1-6","xor1-7","xor1-8","xor1-9","xor1-10"]
                         ],
                     labels: [
                            {location: {x: xorSize.width/2, y: xorSize.height/2}, font: "10px Arial", text: "XOR"}  //function label
                            ],
                     inputs: [{x: 7, y: 5}, {x: 12, y: 5}],
                     outputs: [{x: 10, y: 19}]
                    };
var andSize = {width: 20, height: 20};
var globalAndGate = {
                     size : andSize,
                     active : true,
                     animationFrames: [
                         ["and0-1","and0-2","and0-3","and0-4","and0-5","and0-6","and0-7","and0-8","and0-9","and0-10","and0-11"],
                         ["and1-1","and1-2","and1-3","and1-4","and1-5","and1-6","and1-7","and1-8","and1-9","and1-10","and1-11"]
                         ],
                     labels: [
                            {location: {x: andSize.width/2, y: andSize.height/2}, font: "10px Arial", text: "AND"}  //function label
                            ],
                     inputs: [{x: 7, y: 0}, {x: 12, y: 0}],
                     outputs: [{x: 10, y: 19}]
                    };
var notSize = {width: 19, height: 19};
var globalNotGate = {
                     size : notSize,
                     active : true,
                     animationFrames: [
                         ["not0-1","not0-2","not0-3","not0-4","not0-5","not0-6","not0-7","not0-8","not0-9","not0-10","not0-11"],
                         ["not1-1","not1-2","not1-3","not1-4","not1-5","not1-6","not1-7","not1-8","not1-9","not1-10","not1-11"]
                         ],
                     labels: [
                            {location: {x: notSize.width/2, y: notSize.height/2}, font: "10px Arial", text: "NOT"}  //function label
                            ],
                     inputs: [{x: 10, y: 0}],
                     outputs: [{x: 10, y: 20}]
                    };
var Seg7Size = {width: 100, height: 20};
var global7SegGate = {
                     size : Seg7Size,
                     active : false,
                     animationFrames: [
                         ["7seg0-1","7seg0-2","7seg0-3","7seg0-4","7seg0-5","7seg0-6","7seg0-7","7seg0-8","7seg0-9","7seg0-10","7seg0-11","7seg0-12","7seg0-13","7seg0-14","7seg0-15"],
                         ["7seg1-1","7seg1-2","7seg1-3","7seg1-4","7seg1-5","7seg1-6","7seg1-7","7seg1-8","7seg1-9","7seg1-10","7seg1-11","7seg1-12","7seg1-13","7seg1-14","7seg1-15"]
                         ],
                     labels: [
                            {location: {x: Seg7Size.width/2, y: Seg7Size.height/2}, font: "10px Arial", text: "LED SEGMENT"}  //function label
                            ],
                     inputs: [{x: 0, y: 10}],
                     outputs: []
                    };
var logicalZeroSize = {width : 19, height : 19};
var globalLogicalZero = {
                     size : logicalZeroSize,
                     active : false,
                     animationFrames: [
                         ["gnd"]
                        ],
                     labels: [
                            {location: {x: logicalZeroSize.width, y: logicalZeroSize.height}, font: "10px Arial", text: "GND"}  //function label
                            ],
                     inputs: [],
                     outputs: [{x: 10, y: 0}]
                    };
var logicalOneSize = {width:19, height:19};
var globalLogicalOne = {
                    size: logicalOneSize,
                    active : true,
                    animationFrames: [
                        ["one1", "one2", "one3", "one4"]
                        ],
                    labels : [
                            {location: {x: logicalOneSize.width/2, y: logicalOneSize.height/2}, font: "10px Arial", text: "VCC"}  //function label
                            ],
                     inputs: [],
                     outputs: [{x: 10, y: 19}]
                    };
var switchSize = {width:19, height:19};
var globalSwitch = {
                    size: switchSize,
                    active : false,
                    animationFrames: [
                        ["sw0-7", "sw0-6", "sw0-5", "sw0-4", "sw0-3", "sw0-2", "sw0-1"],
                        ["sw1-7", "sw1-6", "sw1-5", "sw1-4", "sw1-3", "sw1-2", "sw1-1"],
                        ["sw2-7", "sw2-6", "sw2-5", "sw2-4", "sw2-3", "sw2-2", "sw2-1"],
                        ["sw3-7", "sw3-6", "sw3-5", "sw3-4", "sw3-3", "sw3-2", "sw3-1"]
                        ],  
                    labels : [
                            {location: {x: logicalOneSize.width/2, y: logicalOneSize.height/2}, font: "10px Arial", text: "SWITCH"}  //function label
                            ],
                     inputs: [{x: 4, y: 19}, {x: 15, y: 19}],
                     outputs: [{x: 10, y: 0}]
                    };
var sourceSize = {width:20, height:20};
var globalSource = {
                    size: switchSize,
                    active : true,
                    animationFrames: [
                        ["source0"],
                        ["source1"],
                        ],  
                    labels : [
                            {location: {x: sourceSize.width/2, y: sourceSize.height/2}, font: "10px Arial", text: "SOURCE"}  //function label
                            ],
                     inputs: [],
                     outputs: [{x: 10, y: 0}, {x: 10, y: 20}, {x: 0, y: 10}, {x: 20, y: 10}]
                    };
var clockSize = {width: 39, height: 19};
var globalClockGate = {
                     size : clockSize,
                     active : false,
                     animationFrames: [
                         ["clock0-1","clock0-2","clock0-3","clock0-4","clock0-5","clock0-6","clock0-7","clock0-8","clock0-9","clock0-10","clock0-11"],
                         ["clock1-1","clock1-2","clock1-3","clock1-4","clock1-5","clock1-6","clock1-7","clock1-8","clock1-9","clock1-10","clock1-11"]
                         ],
                     labels: [
                              //function label
                            ],
                     inputs: [],
                     outputs: [{x: 39, y: 9}]
                    };

//bind the user interface elements to global variables and start a new game
function initializeUI(UIOutput, blockName, blockOutput) {
    globalUIOutput = UIOutput;
    globalBlockName = blockName;
    globalBlockOutput = blockOutput;
    globalBlockName.value = "blockName";
    //console.log(globalBlockName.value);
    //output("hey");
}

function saveState() {
    output("Save State");
    globalSavedStateGates = [];
    for (let i = 0; i < globalGates.length; i++) {
        let g = null;
        let G = globalGates[i]
        if (globalGates[i].type == "switch") {
            g = new switchGate(G.location.x, G.location.y, G.rotation, G.name, G.outputs);
        }
        if (g != null) {
            g.inputs = G.inputs;
            g.output = G.output;
            g.state = G.state;
            g.active = G.active;
            g.animationFrame = G.animationFrame;
            globalSavedStateGates.push(g);
        }
    }
}
function restoreState() {
    output("Restore State");
    globalGates = globalSavedStateGates;
    drawRisky();
}
function backAccelerate() { output("backAccelerate")
                            if (globalAcceleration > 1) {
                                globalAcceleration--;
                            }
                            else {
                                globalRun = false;
                            }
                          }
function runPause() {   output("runPause");
                        globalRun = !globalRun;
                        globalAcceleration = 1;}
function forwardStep() {output("forwardStep");}
function forwardAccelerate() {  output("forwardAccelerate");
                                if (globalAcceleration < 100) {
                                    globalAcceleration++;
                                }
                             }
function resetButton() {output("resetButton");
                        resetLogic();
                        drawRisky();
                       }
function undoButton() { 
                        //remove gate
                        let undoGate = globalGates.pop();
                        //console.log("undoGate name : " + undoGate.name);
                        //scrub all inputs/outputs that reference this gate
                        removeConnections(undoGate);
                        drawRisky();

                        }

function deleteGate(gate) {
    //remove gate from globalGates
    let newGates = [];
    for (let i = 0; i < globalGates.length; i++) {
        if (globalGates[i].name != gate.name) {
            newGates.push(globalGates[i]);   
        }
    }
    globalGates = newGates;
    
    //set input of all gates receiving output from this gate to zero
    for (let j = 0; j < 2; j++) {
        for (let i = 0; i < gate.outputs[j].length; i++) {

            let targetGate = gate.outputs[j][i].gate; 
            let targetPosition = gate.outputs[j][i].position;

            targetGate.inputs[targetPosition] = 0;
            targetGate.active = true; //trigger a re-draw in case the new input changes the state of the gate   
        }
    }
    
    removeConnections(gate);
    
    //treat masks differently. only delete masks if they are opaque, but also delete all the gates within them
    if (gate.type == "mask") {
        for (let i = globalGates.length - 1; i >= 0; i--) {
            if (i < globalGates.length)  { //because the recursive call changes the length of globalGates, this double-check is necessary
                if (globalGates[i].mask != null) { //gates without masks are not going to be recursivly deleted
                    if (globalGates[i].mask.name == gate.name) {
                        deleteGate(globalGates[i]);   
                    }
                }
            }
        }   
    }
    
}

function removeConnections(gate) {
    //remove all references to gate in all other gates' outputs
    
    for (let i = 0; i < globalGates.length; i++) {
        let localGate = globalGates[i];
        for (let output = 0; output <= 1; output++) {
            let outputs = localGate.outputs[output];
            //console.log("outputs length: " + outputs.length);
            let newOutputs = [];
            for (let j = 0; j < outputs.length; j++) {
                let output = outputs[j];
                //console.log("output name : " + output.gate.name);
                if (output.gate.name != gate.name) {
                    newOutputs.push(output);
                }
            }
            if (newOutputs.length != outputs.length) {
                logOutputs(localGate);
                localGate.outputs[output] = newOutputs;  
                logOutputs(localGate);
            }
        }

    }
}

function logOutputs(gate) {
    //console.log("outputs of " + gate.name);
    for (let output = 0; output <= 1; output++) {
        let outputs = gate.outputs[output];
        for (let j = 0; j < outputs.length; j++) {
            let output = outputs[j];
            //console.log(output.gate.name);
        }

    }

      
}

//add "text" to the debugTextOutput box
function output(text) {
    globalUIOutput.value = text;
}

//react to build buttons
function buildSendCommand(objButton) {
    setCommand(objButton.value);
}

function setCommand(command) {
    //console.log(command);
    output(command);
    globalTool = command;  
    
    globalHoveringGate = null;
    globalHoveringLine1 = null;
    globalHoveringLine2 = null;
    repairBackground();
    globalHoveringBackground = null;
}

//bind the user interface elements to global variables and start a new game
function initializeCanvas(canvas) {
    globalCanvas = canvas;
    globalTool = "act";
    
    buildArcitecture();
    resetLogic();
    drawRisky();
    //drawImage("one2");
    
    //set up timer and click events
    globalTimer = setInterval(refreshSimulation, globalRefreshRate);
    globalCanvas.addEventListener('click', clickSimulation, false);
    globalCanvas.addEventListener("mousemove", mouseMove);
    //globalCanvas.addEventListener('keydown', checkKeyDown, false);
    
 /*   document.addEventListener('mousedown', function(event) {
        globalLastDownTarget = event.target;
        //console.log('mousedown');
    }, false);
    */
    
    document.addEventListener('keydown', function(event) {
        //console.log(event.keyCode + " down");
        if (event.keyCode == 82) {
            //r
            globalRotation = (globalRotation + 90 )%360;
            if (globalHoveringGate != null) {
                clearGate(globalHoveringGate);
                globalHoveringGate.rotation = globalRotation;
                drawGate(globalHoveringGate);
            }
        } else if (event.keyCode = 27) {
            setCommand("act");
        }
    }, false);
}

/*function checkKeyDown(e) {
    //console.log(e.keyCode);
}*/

function repairBackground() {
    
    if (globalHoveringBackground != null) {
        clearRectangle(globalHoveringBackgroundLocation.x, globalHoveringBackgroundLocation.y, globalHoveringBackground.width, globalHoveringBackground.height);
        globalCanvas.getContext('2d').drawImage(globalHoveringBackground, 0,0,globalHoveringBackground.width, globalHoveringBackground.height, globalHoveringBackgroundLocation.x,globalHoveringBackgroundLocation.y,globalHoveringBackground.width,globalHoveringBackground.height);
    }
}

function findAllIO(x, y, range) {
    let allIO = [];
    for (let i = 0; i < range; i++) { //search ONLY gates other than the last gate (
        //console.log("gate: " + globalGates[i].name + " length:" + globalGates[i].template.inputs.length);
        for (let j = 0; j < globalGates[i].template.inputs.length; j++ ) {
            let target
            if (globalGates[i].type != "line") {
                target = rotatePointOrigin({x: globalGates[i].template.inputs[j].x - globalGates[i].template.size.width/2, y: globalGates[i].template.inputs[j].y - globalGates[i].template.size.height/2}, globalGates[i].rotation); 
                target.x += globalGates[i].location.x + globalGates[i].template.size.width/2;
                target.y += globalGates[i].location.y + globalGates[i].template.size.height/2;
                //target = rotatePoint(globalGates[i].template.inputs[j], globalGates[i].template.size, globalGates[i].rotation);
                //target.x += globalGates[i].location.x;
                //target.y += globalGates[i].location.y;
            } else {
                target = {x: globalGates[i].template.inputs[j].x, y: globalGates[i].template.inputs[j].y};
            }
            if (target.x == x && target.y == y) {
                allIO.push({gate: globalGates[i], type: "input", position: j, x: x, y: y});
            }
        }
        for (let j = 0; j < globalGates[i].template.outputs.length; j++ ) {
            let target;
            if (globalGates[i].type != "line") {
                target = rotatePointOrigin({x: globalGates[i].template.outputs[j].x - globalGates[i].template.size.width/2, y: globalGates[i].template.outputs[j].y - globalGates[i].template.size.height/2}, globalGates[i].rotation); 
                target.x += globalGates[i].location.x + globalGates[i].template.size.width/2;
                target.y += globalGates[i].location.y + globalGates[i].template.size.height/2;
                //target = rotatePoint(globalGates[i].template.outputs[j], globalGates[i].template.size, globalGates[i].rotation);
                //target.x += globalGates[i].location.x;
                //target.y += globalGates[i].location.y;
            } else {
                target = {x: globalGates[i].template.outputs[j].x, y: globalGates[i].template.outputs[j].y};
            }
            if (target.x == x && target.y == y) {
                allIO.push({gate: globalGates[i], type: "output", position: j, x: x, y: y});
            }
        }
    }
    return allIO;
}

function findNearestIO(x, y) {
    let dx = 10;
    let dy = 10;
    let newx = x;
    let newy = y;
    let nearest = null;
    for (let i = 0; i < globalGates.length; i++) {
        //console.log("gate: " + globalGates[i].name + " length:" + globalGates[i].template.inputs.length);
        for (let j = 0; j < globalGates[i].template.inputs.length; j++ ) {
            let target
            if (globalGates[i].type != "line") {
                target = rotatePointOrigin({x: globalGates[i].template.inputs[j].x - globalGates[i].template.size.width/2, y: globalGates[i].template.inputs[j].y - globalGates[i].template.size.height/2}, globalGates[i].rotation); 
                target.x += globalGates[i].location.x + globalGates[i].template.size.width/2;
                target.y += globalGates[i].location.y + globalGates[i].template.size.height/2;
                //target = rotatePoint(globalGates[i].template.inputs[j], globalGates[i].template.size, globalGates[i].rotation);
                //target.x += globalGates[i].location.x;
                //target.y += globalGates[i].location.y;
            } else {
                target = {x: globalGates[i].template.inputs[j].x, y: globalGates[i].template.inputs[j].y};
            }
            if (Math.abs(x-target.x) + Math.abs(y-target.y) < 10 && Math.abs(x-target.x) + Math.abs(y-target.y) < dx + dy) {
                //console.log("Found Input at: " + target.x + ", " + target.y);
                dx = Math.abs(x-target.x);
                dy = Math.abs(y-target.y);
                newx = target.x;
                newy = target.y;
                nearest = {gate: globalGates[i], type: "input", position: j, x: newx, y: newy};
            }
        }
        for (let j = 0; j < globalGates[i].template.outputs.length; j++ ) {
            let target;
            if (globalGates[i].type != "line") {
                target = rotatePointOrigin({x: globalGates[i].template.outputs[j].x - globalGates[i].template.size.width/2, y: globalGates[i].template.outputs[j].y - globalGates[i].template.size.height/2}, globalGates[i].rotation); 
                target.x += globalGates[i].location.x + globalGates[i].template.size.width/2;
                target.y += globalGates[i].location.y + globalGates[i].template.size.height/2;
                //target = rotatePoint(globalGates[i].template.outputs[j], globalGates[i].template.size, globalGates[i].rotation);
                //target.x += globalGates[i].location.x;
                //target.y += globalGates[i].location.y;
            } else {
                target = {x: globalGates[i].template.outputs[j].x, y: globalGates[i].template.outputs[j].y};
            }
            if (Math.abs(x-target.x) + Math.abs(y-target.y) < 10 && Math.abs(x-target.x) + Math.abs(y-target.y) < dx + dy) {
                dx = Math.abs(x-target.x);
                dy = Math.abs(y-target.y);
                newx = target.x;
                newy = target.y;
                nearest = {gate: globalGates[i], type: "output", position: j, x: newx, y: newy};
            }
        }
    }
    return nearest;
}

//return a new instance of the gate specified by globalTool
function newGate(x, y, rotation, name){
    //sometimes new gates are made just for show
    let maskName = "null";
    if (globalBlock != null) { maskName = globalBlock.name + "Mask";}
    if (globalTool == "or") { return new orGate(x, y, rotation, name, [[],[]], maskName); }
    if (globalTool == "and") { return new andGate(x, y, rotation, name, [[],[]], maskName); }
    if (globalTool == "xor") { return new xorGate(x, y, rotation, name, [[],[]], maskName); }
    if (globalTool == "not") { return new notGate(x, y, rotation, name, [[],[]], maskName); }
    if (globalTool == "mos") { return new mosGate(x, y, rotation, name, [[],[]], maskName); }
    if (globalTool == "pmos") { return new pmosGate(x, y, rotation, name, [[],[]], maskName); }
    if (globalTool == "switch") { return new switchGate(x, y, rotation, name, [[],[]], maskName); }
    if (globalTool == "one") { return new oneGate(x, y, rotation, name, [[],[]], maskName); }
    if (globalTool == "gnd") { return new gndGate(x, y, rotation, name, [[],[]], maskName); }
    if (globalTool == "source") { return new sourceGate(x, y, rotation, name, [[],[]], maskName); }
    if (globalTool == "seg7") {return new seg7Gate(x, y, rotation, name, [[],[]], maskName); }
    if (globalTool == "clock") {return new clockGate(x, y, rotation, name, [[],[]], maskName); }

}

function mouseMove() {
    let rect = globalCanvas.getBoundingClientRect();
    let x = Math.round(event.clientX - rect.left);
    let y = Math.round(event.clientY - rect.top);
    //console.log("x: " + x + " y: " + y);

    repairBackground();
    
    if (globalTool != "act" && globalTool != "delete") {
        if (globalTool == "line") {
            // see if there is a nearby input or output
            let nearest = findNearestIO(x, y);
            //console.log("before x: " + x + ", y: " + y);
            if (nearest != null) {
                x = nearest.x;
                y = nearest.y;
            } else if (document.getElementById("snapToGrid").checked == true) {
                //adjust to nearest grid point only if the line is not overing over an input, output, or is already vertical or horizontal
                //console.log("before x: " + x + ", y: " + y);
                if (globalHoveringLine1 == null) {
                    x = Math.round(x + globalGridSize/2 - (x + globalGridSize/2)%globalGridSize);
                    y = Math.round(y + globalGridSize/2 - (y + globalGridSize/2)%globalGridSize);
                } else if (globalHoveringLine1.template.size.width == 0 && Math.abs(globalHoveringLine1.location.x - x) <= globalGridSize/2) {
                    y = Math.round(y + globalGridSize/2 - (y + globalGridSize/2)%globalGridSize);
                    x = globalHoveringLine1.location.x;
                } else if (globalHoveringLine1.template.size.height == 0 && Math.abs(globalHoveringLine1.location.y - y) <= globalGridSize/2) {
                    x = Math.round(x + globalGridSize/2 - (x + globalGridSize/2)%globalGridSize);
                    y = globalHoveringLine1.location.y;
                } else {
                    x = Math.round(x + globalGridSize/2 - (x + globalGridSize/2)%globalGridSize);
                    y = Math.round(y + globalGridSize/2 - (y + globalGridSize/2)%globalGridSize);
                }
                //console.log("after x: " + x + ", y: " + y);

            }
            //console.log("after x: " + x + ", y: " + y);
            if (globalHoveringLine1 == null){
                saveBackground(x-6 + (x-6)%2, y-6 + (y-6)%2, 12, 12);
                let ctx = globalCanvas.getContext("2d");  
                drawLine({x: x-3, y: y-3}, {x: x+3, y: y+3}, "Blue", ctx, 1);
                drawLine({x: x-3, y: y+3}, {x: x+3, y: y-3}, "Blue", ctx, 1);
            } else {
                //draw the first link
                if (document.getElementById("snapToGrid").checked == true) {
                    if (globalHoveringLine2 == null) {
                        globalHoveringCondition = Math.abs(globalHoveringLine1.template.lines[0].x - x) > Math.abs(globalHoveringLine1.template.lines[0].y - y);
                        //console.log("globalHoveringCondition: " + globalHoveringCondition);
                    }
                    else if (5 > Math.max(globalHoveringLine1.template.size.width, globalHoveringLine1.template.size.height, globalHoveringLine2.template.size.width, globalHoveringLine2.template.size.height)) { 
                        globalHoveringCondition = Math.abs(globalHoveringLine1.template.lines[0].x - x) > Math.abs(globalHoveringLine1.template.lines[0].y - y);
                        //console.log("globalHoveringCondition: " + globalHoveringCondition);
                    } 
                    if (globalHoveringCondition) {
                        globalHoveringLine1 = new lineSegment({x: globalHoveringLine1.template.lines[0].x, y: globalHoveringLine1.template.lines[0].y},{x:x, y:globalHoveringLine1.template.lines[0].y}, globalHoveringLine1.name, globalHoveringLine1.outputs);
                        globalHoveringLine2 = new lineSegment({x:x, y:globalHoveringLine1.template.lines[0].y}, {x:x,y:y}, "hovering line2", [[],[]]);
                    } else {
                        globalHoveringLine1 = new lineSegment({x: globalHoveringLine1.template.lines[0].x, y: globalHoveringLine1.template.lines[0].y},{x:globalHoveringLine1.template.lines[0].x, y:y}, globalHoveringLine1.name, globalHoveringLine1.outputs);
                        globalHoveringLine2 = new lineSegment({x:globalHoveringLine1.template.lines[0].x, y:y}, {x:x,y:y}, "hovering line2", [[],[]]);
                    }
                    saveBackground(Math.min(globalHoveringLine1.template.lines[0].x, x)-2 + (Math.min(globalHoveringLine1.template.lines[0].x, x)-2)%2, Math.min(globalHoveringLine1.template.lines[0].y, y)-2 + (Math.min(globalHoveringLine1.template.lines[0].y, y)-2)%2, Math.abs(globalHoveringLine1.template.lines[0].x - x)+4, Math.abs(globalHoveringLine1.template.lines[0].y - y)+4);
                } else {
                    globalHoveringLine2 = null;
                    globalHoveringLine1 = new lineSegment({x: globalHoveringLine1.template.lines[0].x, y: globalHoveringLine1.template.lines[0].y},{x:x, y:y}, globalHoveringLine1.name, globalHoveringLine1.outputs);
                    saveBackground(globalHoveringLine1.location.x-2 + (globalHoveringLine1.location.x-2)%2, globalHoveringLine1.location.y-2 + (globalHoveringLine1.location.y-2)%2, globalHoveringLine1.template.size.width + 4, globalHoveringLine1.template.size.height + 4);
                }
                globalHoveringLine1.animationFrame = globalHoveringLine1.template.animationFrames[globalHoveringLine1.animationLayer()].length - 1;
                drawGate(globalHoveringLine1);
                if (globalHoveringLine2 != null) { 
                    globalHoveringLine2.animationFrame = globalHoveringLine2.template.animationFrames[globalHoveringLine2.animationLayer()].length - 1;
                    drawGate(globalHoveringLine2);
                }
            }
        } else {
            globalHoveringGate = newGate(0,0,globalRotation,"temp " + globalTool + " gate");
            if (document.getElementById("snapToGrid").checked == true) {
                globalHoveringGate.location.x = Math.round((x + globalGridSize/2 - globalHoveringGate.template.size.width/2) - (x%globalGridSize));
                globalHoveringGate.location.y = Math.round((y + globalGridSize/2 - globalHoveringGate.template.size.height/2) - (y%globalGridSize));
            } else {
                globalHoveringGate.location.x = Math.round(x - globalHoveringGate.template.size.width/2);
                globalHoveringGate.location.y = Math.round(y - globalHoveringGate.template.size.height/2);
            }
            globalHoveringGate.animationFrame = globalHoveringGate.template.animationFrames[globalHoveringGate.animationLayer()].length - 1;
            let largestSide = Math.max(globalHoveringGate.template.size.width + 2, globalHoveringGate.template.size.height + 2);

            saveBackground(globalHoveringGate.location.x - largestSide + (globalHoveringGate.location.x - largestSide)%2, globalHoveringGate.location.y- largestSide + (globalHoveringGate.location.y- largestSide)%2, largestSide*2, largestSide*2);
            //saveBackground(globalHoveringGate.location.x, globalHoveringGate.location.y, globalHoveringGate.template.size.width, globalHoveringGate.template.size.height);

            //console.log("new or gate: " + globalHoveringGate.location.x + ", " + globalHoveringGate.location.y);
            drawGate(globalHoveringGate);
        }  
    } 
}

function saveBackground(x, y, w, h) {
    //console.log("rectangle to save: " + x + ", " + y + " w: " + w + " h: " + h);
    globalHoveringBackground = document.createElement('canvas');
    globalHoveringBackground.width = w;
    globalHoveringBackground.height = h;
    globalHoveringBackgroundLocation = {x: x, y: y};
    globalHoveringBackground.getContext('2d').drawImage(globalCanvas,globalHoveringBackgroundLocation.x,globalHoveringBackgroundLocation.y,globalHoveringBackground.width,globalHoveringBackground.height,0,0,globalHoveringBackground.width, globalHoveringBackground.height);
    //console.log("saving background: " + globalHoveringBackgroundLocation.x + ", " + globalHoveringBackgroundLocation.y + " w: " + globalHoveringBackground.width + " h: " + globalHoveringBackground.height);

}

function setBlock(x, y) {
    //if this is the first item drawn, set the state of the block
    //console.log("setting block: " + x + ", " + y);
    if (globalBlock == null) {
        globalBlock = {x: x, y: y, rotation: 0, name: globalBlockName.value};
        globalBlockOutput.value = "//" + globalBlock.name + "\n";
        globalBlockOutput.value += "let " + globalBlock.name + " = {x: " + x+ ", y: " + y + ", rotation: 0, name: \"" + globalBlock.name + "\"};\n";
        globalBlockOutput.value += "let " + globalBlock.name + "Mask = new maskGate({x: " + globalBlock.name + ".x , y: " + globalBlock.name + ".y}, {x: " + globalBlock.name + ".x, y: " + globalBlock.name + ".y}, \"" + globalBlock.name + "\", null);\n";
        globalBlockOutput.value += "globalGates.push("+ globalBlock.name + "Mask);";
        //console.log(globalBlockOutput.value);
    }
}

function addBlock(next) {
    //append to the gates the user has drawn
    globalBlockOutput.value = globalBlockOutput.value + "\n" + next;
}

function clickSimulation() {
    repairBackground();
    ////console.log("clicked!");
    //get the location
    let rect = globalCanvas.getBoundingClientRect();
    let x = Math.round(event.clientX - rect.left);
    let y = Math.round(event.clientY - rect.top);
    //console.log("x: " + x + " y: " + y);
    
    if (globalTool == "act") {
        //find out which element (if any) were clicked
        for (let i = 0; i < globalGates.length; i++) {
            let gate = globalGates[i];
            //console.log("checking gate: " + gate.name);
            //mask state 1 is transparent
            if (isMasked(gate) == false && (x >= gate.location.x) && (y >= gate.location.y) && (x <= (gate.location.x + gate.template.size.width)) && (y <= (gate.location.y + gate.template.size.height))) {
                //found the clicked thing!
                //console.log("found gate at: (" + x + ", " + y + ") " + gate.name + " x: " + gate.location.x + " y: " + gate.location.y + " width: " + gate.template.size.width + " height: " + gate.template.size.height);
                //gate.click();

                let point = {x: x - gate.location.x, y: y - gate.location.y};
                if (globalRun == true) {
                    //add the clicked gate to a queue of click events to work through at the end of the animation frame
                    globalClickedGatesQueue.push({gate: gate, point: point});
                } else {
                    //just click the dang thing
                    gate.click(point);
                }
            }
        }
    } else if (globalTool == "delete") { 
        //console.log("deleting...");
        //find out which element (if any) were clicked
        for (let i = 0; i < globalGates.length; i++) {
            let gate = globalGates[i];
            //console.log("checking gate: " + gate.name);
            //mask state 1 is transparent
            if ((x >= gate.location.x - 1) && (y >= gate.location.y - 1) && (x <= (gate.location.x + gate.template.size.width + 1)) && (y <= (gate.location.y + gate.template.size.height + 1))) {
                //found the clicked thing!
                //console.log("found gate at: (" + x + ", " + y + ") " + gate.name + " x: " + gate.location.x + " y: " + gate.location.y + " width: " + gate.template.size.width + " height: " + gate.template.size.height);
                
                //do not delete masks if they are transparent
                if (gate.type != "mask" || gate.state == 0) {
                    deleteGate(gate);
                    drawRisky();
                }
            }
        }
    } else if (globalTool == "line") {
        if (globalHoveringLine1 == null) {
            let nearest = findNearestIO(x, y);
            //console.log("before x: " + x + ", y: " + y);
            if (nearest != null) {
                x = nearest.x;
                y = nearest.y;
            } else if (document.getElementById("snapToGrid").checked == true) {
                //adjust to nearest grid point
                x = Math.round(x + globalGridSize/2 - (x + globalGridSize/2)%globalGridSize);
                y = Math.round(y + globalGridSize/2 - (y + globalGridSize/2)%globalGridSize);
            }
            
            //console.log("after x: " + x + ", y: " + y);
            //console.log("starting new line...");
            globalHoveringLine1 = new lineSegment({x: x, y: y}, {x: x+1, y: y}, "newLine", [[],[]]);
            globalHoveringLine1.animationFrame = globalHoveringLine1.template.animationFrames[globalHoveringLine1.animationLayer()].length - 1;
            saveBackground(globalHoveringLine1.location.x-15, globalHoveringLine1.location.y-15, globalHoveringLine1.template.size.width + 30, globalHoveringLine1.template.size.height + 30);
        } else  {
            setBlock(x, y);
            //store the new line
            setLine(globalHoveringLine1);
            
            //store the second line (if it is drawn)
            if (globalHoveringLine2 != null) {
                if (globalHoveringLine2.template.size.width + globalHoveringLine2.template.size.height > 0) {
                    setLine(globalHoveringLine2);

                    //globalGates.push(new lineSegment(globalHoveringLine2.template.lines[0], globalHoveringLine2.template.lines[1], "newLine", [[],[]]));
                    //drawGate(globalHoveringLine2);
                }
            }
            
            //clear the hovering elements
            globalHoveringLine1 = null;
            globalHoveringLine2 = null;
            globalHoveringBackground = null;
        }
    } else {
        if (globalHoveringGate != null) {
            //console.log("click new or gate: " + globalHoveringGate.location.x + ", " + globalHoveringGate.location.y);
            setBlock(x, y);
            //prepare the gate constructor
            globalBlockGates.push(newGate(globalHoveringGate.location.x, globalHoveringGate.location.y, globalHoveringGate.rotation, globalBlock.name + (globalBlockGates.length + 1)));
            
            //if      (globalTool == "or")    { globalBlockGates.push(new orGate(globalHoveringGate.location.x, globalHoveringGate.location.y, globalHoveringGate.rotation, globalBlock.name + (globalBlockGates.length + 1), [[],[]])); }
            //else if (globalTool == "and")   { globalBlockGates.push(new andGate(globalHoveringGate.location.x, globalHoveringGate.location.y, globalHoveringGate.rotation, globalBlock.name + (globalBlockGates.length + 1), [[],[]])); }
            
            //get the mask
            let maskName = "\"null\"";
            if (globalBlock != null && document.getElementById("maskedCircuit").checked == true) { maskName = globalBlock.name + "Mask";}
            //send the addition to the debug output
            addBlock("let " + globalBlock.name + globalBlockGates.length + "Rotation = rotatePointOrigin({x: " + (globalHoveringGate.location.x + globalHoveringGate.template.size.width/2 - globalBlock.x) + ", y: " +(globalHoveringGate.location.y + globalHoveringGate.template.size.height/2 - globalBlock.y) + "}, " + globalBlock.name + ".rotation);");
            addBlock("let " + globalBlock.name + globalBlockGates.length + " = new " + globalTool + "Gate(" + globalBlock.name + ".x - " + globalHoveringGate.template.size.width/2 + " + " + globalBlock.name + globalBlockGates.length + "Rotation.x, " + globalBlock.name + ".y - " + globalHoveringGate.template.size.height/2 + " + " + globalBlock.name + globalBlockGates.length + "Rotation.y, " + globalBlock.name + ".rotation + " + globalHoveringGate.rotation + ", \"" + globalBlock.name + globalBlockGates.length + "\",[[],[]], "+maskName+");");
            //save addBlock("let " + globalBlock.name + globalBlockGates.length + " = new orGate(" + globalBlock.name + ".x + " + (globalBlock.x - x) + ", " + globalBlock.name + ".y + " + (globalBlock.y - y) + ", " + globalBlock.name + ".rotation + " + globalHoveringGate.rotation + ", \"" + globalBlock.name + globalBlockGates.length + "\",[[],[]]);");
            addBlock("globalGates.push(" + globalBlock.name + globalBlockGates.length + ");");
            
            //update the dimensions of the mask
            
            //globalGates.push(new orGate(globalHoveringGate.location.x, globalHoveringGate.location.y, globalHoveringGate.rotation, globalHoveringGate.name, [[],[]]));
            globalGates.push(globalBlockGates[globalBlockGates.length - 1]);
            globalGates[globalGates.length-1].animationFrame = globalGates[globalGates.length-1].template.animationFrames[globalGates[globalGates.length-1].animationLayer()].length - 1;
            drawGate(globalHoveringGate);
            globalHoveringGate = null;
            globalHoveringBackground = null;
        }
    }
    
}

function setLine(newLine) {
    
    globalBlockGates.push(new lineSegment(newLine.template.lines[0], newLine.template.lines[1], globalBlock.name + (globalBlockGates.length + 1), [[],[]]));
    globalGates.push(globalBlockGates[globalBlockGates.length - 1]);
    drawGate(newLine);

    //get the mask
    let maskName = "\"null\"";
    if (globalBlock != null && document.getElementById("maskedCircuit").checked == true) { maskName = globalBlock.name + "Mask";}
    //add the new line to the debug output
    addBlock("let " + globalBlock.name + globalBlockGates.length + "Rotation0 = rotatePointOrigin({x: " + (newLine.template.lines[0].x - globalBlock.x) + ", y: " + (newLine.template.lines[0].y - globalBlock.y) + "}, " + globalBlock.name + ".rotation);");
    addBlock("let " + globalBlock.name + globalBlockGates.length + "Rotation1 = rotatePointOrigin({x: " + (newLine.template.lines[1].x - globalBlock.x) + ", y: " + (newLine.template.lines[1].y - globalBlock.y) + "}, " + globalBlock.name + ".rotation);");
    addBlock("let " + globalBlock.name + globalBlockGates.length + " = new lineSegment({x: " + globalBlock.name + globalBlockGates.length + "Rotation0.x + " + globalBlock.name + ".x, y: " + globalBlock.name + globalBlockGates.length + "Rotation0.y + " + globalBlock.name + ".y}, {x: " + globalBlock.name + globalBlockGates.length + "Rotation1.x + " + globalBlock.name + ".x, y: " + globalBlock.name + globalBlockGates.length + "Rotation1.y + " + globalBlock.name + ".y}, \"" + globalBlock.name + globalBlockGates.length + "\",[[],[]], "+maskName+");");
    //save addBlock("let " + globalBlock.name + globalBlockGates.length + " = new lineSegment({x: " + (newLine.template.lines[0].x + globalBlock.x) + " - " + globalBlock.name + ".x, y: " + (newLine.template.lines[0].y + globalBlock.y)  + " - " + globalBlock.name + ".y}, {x: " + (newLine.template.lines[1].x + globalBlock.x) + " - " + globalBlock.name + ".x, y: " + (newLine.template.lines[1].y + globalBlock.y) + " - " + globalBlock.name + ".y}, \"" + globalBlock.name + globalBlockGates.length + "\",[[],[]]);");
    addBlock("globalGates.push(" + globalBlock.name + globalBlockGates.length + ");");

    //make new connections
    for (let p = 0; p <= 1; p++) {
        let nearest = findNearestIO(newLine.template.lines[p].x, newLine.template.lines[p].y);
        if (nearest != null) {
            let allIO = findAllIO(nearest.x, nearest.y, globalGates.length - 1); //dont include the new line in the search for connections
            //console.log("connecting to IO. length: " + allIO.length);
            for (var i = 0; i < allIO.length; i++) {
                //console.log("connection type: " + allIO[i].type + " gate type: " + allIO[i].gate.type + " name: " + allIO[i].gate.name);
                if (allIO[i].gate.type != "line") {
                    if (allIO[i].type == "output") {
                        //console.log("connecting to output: " + allIO[i].gate.name);
                        allIO[i].gate.outputs[0].push({gate: globalGates[globalGates.length - 1], position: p});
                        allIO[i].gate.outputs[1].push({gate: globalGates[globalGates.length - 1], position: p});

                        //add connection to debug output
                        addBlock(allIO[i].gate.name + ".outputs[0].push({gate: " + globalBlock.name + globalBlockGates.length + ", position: " + p + "});");
                        addBlock(allIO[i].gate.name + ".outputs[1].push({gate: " + globalBlock.name + globalBlockGates.length + ", position: " + p + "});");

                    } else if (allIO[i].type == "input") {
                        //console.log("connecting to input: " + allIO[i].gate.name);
                        globalGates[globalGates.length -1].outputs[0].push({gate: allIO[i].gate, position: allIO[i].position});          
                        globalGates[globalGates.length -1].outputs[1].push({gate: allIO[i].gate, position: allIO[i].position});    

                        //add connection to debug output
                        addBlock(globalBlock.name + globalBlockGates.length + ".outputs[0].push({gate: " + allIO[i].gate.name + ", position: " + allIO[i].position + "});");
                        addBlock(globalBlock.name + globalBlockGates.length + ".outputs[1].push({gate: " + allIO[i].gate.name + ", position: " + allIO[i].position + "});");

                    }
                } else {
                    //connect line to line
                    if (allIO[i].type == "output") {
                        //console.log("connecting to output: " + allIO[i].gate.name);
                        allIO[i].gate.outputs[0].push({gate: globalGates[globalGates.length - 1], position: p});
                        globalGates[globalGates.length -1].outputs[(p+1)%2].push({gate: allIO[i].gate, position: 1});  

                        //add connection to debug output
                        addBlock(allIO[i].gate.name + ".outputs[0].push({gate: " + globalBlock.name + globalBlockGates.length + ", position: " + p + "});");
                        addBlock(globalBlock.name + globalBlockGates.length + ".outputs[" + (p+1)%2 + "].push({gate: " + allIO[i].gate.name + ", position: 1});");

                    } else if (allIO[i].type == "input") {
                        //console.log("connecting to input: " + allIO[i].gate.name);
                        allIO[i].gate.outputs[1].push({gate: globalGates[globalGates.length - 1], position: p});
                        globalGates[globalGates.length -1].outputs[(p+1)%2].push({gate: allIO[i].gate, position: 0});  

                        //add connection to debug output
                        addBlock(allIO[i].gate.name + ".outputs[1].push({gate: " + globalBlock.name + globalBlockGates.length + ", position: " + p + "});");
                        addBlock(globalBlock.name + globalBlockGates.length + ".outputs[" + (p+1)%2 + "].push({gate: " + allIO[i].gate.name + ", position: 0});");

                    }
                }
            }
        } /*else {
            //just add the line, no connections
            globalGates.push(new lineSegment(newLine.template.lines[0], newLine.template.lines[1], "newLine", [[],[]]));
            drawGate(newLine);
        }*/
    }
}


//called periodically to keep the simulation running
function refreshSimulation() {
    if (globalRun == true && globalRefreshLockout == false) {
        globalRefreshLockout = true;
        
        let numActiveGates = 0;
        for (let i = 0; i < globalGates.length; i++) {
            if (globalGates[i].active == true) {
                numActiveGates = numActiveGates + 1;
               //console.log("numActiveGates = " + numActiveGates);
                let localGate = globalGates[i];
                //console.log("animating: " + localGate.name + " frame: " + localGate.animationFrame + " Layer: " + localGate.animationLayer());
                drawGate(localGate);
                localGate.animationFrame = localGate.animationFrame + globalAcceleration;

                //check for end of animation
                if (localGate.animationFrame >= localGate.template.animationFrames[localGate.animationLayer()].length) {
                    //console.log("ending animation on frame: " + localGate.animationFrame);
                    //end of animation
                    //console.log("ending animation: " + localGate.name);
                    localGate.output = localGate.getLogicalOutput();
                    localGate.animationFrame = localGate.template.animationFrames[localGate.animationLayer()].length - 1;
                    drawGate(localGate); //draw the gate one more time to finish the animation
                    localGate.active = false;
                    for (let nextGatePtr = 0; nextGatePtr < localGate.outputs[localGate.state].length; nextGatePtr++) {
                        let nextGate = localGate.outputs[localGate.state][nextGatePtr].gate;
                        //console.log("next gate: " + nextGate.name);
                        //console.log("gate states: " + localGate.getLogicalOutput() + ", " + nextGate.inputs[localGate.outputs[localGate.state][nextGatePtr].position] );

                        //special rules for lines
                        if (nextGate.type == "line") {nextGate.state = localGate.outputs[localGate.state][nextGatePtr].position;}
                        //end special rules
                        //ask the next gate if it should also animate
                        nextGate.inputs[localGate.outputs[localGate.state][nextGatePtr].position] = localGate.getLogicalOutput();

                        if (nextGate.type == "mosfet") {

                            if (nextGate.inputs[1] == 0) {
                                //special rules for turning OFF a mosfet
                                //console.log("turning off: " + nextGate.name);
                                nextGate.animationFrame = nextGate.template.animationFrames[nextGate.animationLayer()].length -1;
                                drawGate(nextGate);
                                nextGate.active = false;
                            } else {
                                //special rules for turning ON a mosfet
                                //console.log("adding new gate (following mosfet) to animation: " + nextGate.name);
                                nextGate.animationFrame = 0;
                                nextGate.active = true;
                                //console.log("new state: " + nextGate.inputs[localGate.outputs[localGate.state][nextGatePtr].position]);
                            }
                        } else if (nextGate.type == "pmosfet") {

                            if (nextGate.inputs[1] == 1) {
                                //special rules for turning OFF a pmosfet
                                //console.log("turning off: " + nextGate.name);
                                nextGate.animationFrame = nextGate.template.animationFrames[nextGate.animationLayer()].length -1;
                                drawGate(nextGate);
                                nextGate.active = false;
                            } else {
                                //special rules for turning ON a pmosfet
                                //console.log("adding new gate (following pmosfet) to animation: " + nextGate.name);
                                nextGate.animationFrame = 0;
                                nextGate.active = true;
                                //console.log("new state: " + nextGate.inputs[localGate.outputs[localGate.state][nextGatePtr].position]);
                            }
                        } else {
                            if (nextGate.getLogicalOutput() != nextGate.output ) {
                                //console.log("adding new gate to animation: " + nextGate.name);
                                nextGate.animationFrame = 0;
                                nextGate.active = true;
                                //console.log("new state: " + nextGate.inputs[localGate.outputs[localGate.state][nextGatePtr].position]);
                            } else {
                                //console.log("no need to animate: " + nextGate.name);
                            }
                        } 
                    }
                }
            }
        }
        
       //console.log("numActiveGates = " + numActiveGates);
        if (numActiveGates == 0) {
            //console.log("stable state reached");
            //activate all clock gates
            for (let i = 0; i < globalGates.length; i++) {
                if (globalGates[i].type == "clock") {
                    //console.log("clocking: " + globalGates[i].name);
                    globalGates[i].state = (globalGates[i].state + 1 ) % 2;
                    globalGates[i].animationFrame = 0;
                    globalGates[i].active = true;
                    //console.log("frame: " + globalGates[i].animationFrame);
                }
            }
        }
        
    }
    globalRefreshLockout = false;
    
    //empty the clicked gates queue
    while (globalClickedGatesQueue.length > 0) {
        let next = globalClickedGatesQueue.pop();
        next.gate.click(next.point);
    }
}

function loadImages(list){
    let total = 0;
    //console.log("Loading...");
    for(let i = 0; i < list.length; i++){
        let img = new Image();
        Images[list[i].name] = img;
        img.onload = function(){
            total++;
            if(total == list.length){
                //console.log("Loaded.");
            }
        };
        img.src = list[i].url;
    }
}

//link to the debug UI controls
/*
function initializeDebug(debugTextInput, debugSendCommand, debugTextOutput) {
        
    globalDebugTextInput = debugTextInput;
    globalDebugSendCommand = debugSendCommand;
    globalDebugTextOutput = debugTextOutput;

    debugLog("Debug Log:");
}

//add "text" to the debugTextOutput box
function debugLog(text) {
    globalDebugTextOutput.value = globalDebugTextOutput.value + "\n" + text;
}

//react to debug button
function debugSendCommand() {
    let cmd = globalDebugTextInput.value;
    debugLog(cmd);
    //TODO, do something
    
}*/

//construct all the gates, and links
function buildArcitecture() {

    
    
//TFlipFlopB0Block
let TFlipFlopB0Block = {x: 930, y: 100, rotation: 0, name: "TFlipFlopB0Block"};
let TFlipFlopB0BlockMask = new maskGate({x: TFlipFlopB0Block.x -20 , y: TFlipFlopB0Block.y-20}, {x: TFlipFlopB0Block.x+260, y: TFlipFlopB0Block.y+150}, "TFlipFlopB0Block", null);
globalGates.push(TFlipFlopB0BlockMask);
let TFlipFlopB0Block1Rotation = rotatePointOrigin({x: -1.5, y: 3.5}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block1 = new notGate(TFlipFlopB0Block.x - 9.5 + TFlipFlopB0Block1Rotation.x, TFlipFlopB0Block.y - 9.5 + TFlipFlopB0Block1Rotation.y, TFlipFlopB0Block.rotation + 0, "TFlipFlopB0Block1",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block1);
let TFlipFlopB0Block2Rotation = rotatePointOrigin({x: -12, y: 33}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block2 = new andGate(TFlipFlopB0Block.x - 10 + TFlipFlopB0Block2Rotation.x, TFlipFlopB0Block.y - 10 + TFlipFlopB0Block2Rotation.y, TFlipFlopB0Block.rotation + 0, "TFlipFlopB0Block2",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block2);
let TFlipFlopB0Block3Rotation = rotatePointOrigin({x: 8, y: 33}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block3 = new andGate(TFlipFlopB0Block.x - 10 + TFlipFlopB0Block3Rotation.x, TFlipFlopB0Block.y - 10 + TFlipFlopB0Block3Rotation.y, TFlipFlopB0Block.rotation + 0, "TFlipFlopB0Block3",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block3);
let TFlipFlopB0Block4Rotation = rotatePointOrigin({x: -11.5, y: 63.5}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block4 = new notGate(TFlipFlopB0Block.x - 9.5 + TFlipFlopB0Block4Rotation.x, TFlipFlopB0Block.y - 9.5 + TFlipFlopB0Block4Rotation.y, TFlipFlopB0Block.rotation + 0, "TFlipFlopB0Block4",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block4);
let TFlipFlopB0Block5Rotation = rotatePointOrigin({x: 8.5, y: 63.5}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block5 = new notGate(TFlipFlopB0Block.x - 9.5 + TFlipFlopB0Block5Rotation.x, TFlipFlopB0Block.y - 9.5 + TFlipFlopB0Block5Rotation.y, TFlipFlopB0Block.rotation + 0, "TFlipFlopB0Block5",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block5);
let TFlipFlopB0Block6Rotation = rotatePointOrigin({x: -2, y: 93}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block6 = new andGate(TFlipFlopB0Block.x - 10 + TFlipFlopB0Block6Rotation.x, TFlipFlopB0Block.y - 10 + TFlipFlopB0Block6Rotation.y, TFlipFlopB0Block.rotation + 0, "TFlipFlopB0Block6",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block6);
let TFlipFlopB0Block7Rotation = rotatePointOrigin({x: -1.5, y: 123.5}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block7 = new notGate(TFlipFlopB0Block.x - 9.5 + TFlipFlopB0Block7Rotation.x, TFlipFlopB0Block.y - 9.5 + TFlipFlopB0Block7Rotation.y, TFlipFlopB0Block.rotation + 0, "TFlipFlopB0Block7",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block7);
let TFlipFlopB0Block8Rotation = rotatePointOrigin({x: 58, y: 13}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block8 = new andGate(TFlipFlopB0Block.x - 10 + TFlipFlopB0Block8Rotation.x, TFlipFlopB0Block.y - 10 + TFlipFlopB0Block8Rotation.y, TFlipFlopB0Block.rotation + 270, "TFlipFlopB0Block8",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block8);
let TFlipFlopB0Block9Rotation = rotatePointOrigin({x: 58, y: 53}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block9 = new andGate(TFlipFlopB0Block.x - 10 + TFlipFlopB0Block9Rotation.x, TFlipFlopB0Block.y - 10 + TFlipFlopB0Block9Rotation.y, TFlipFlopB0Block.rotation + 270, "TFlipFlopB0Block9",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block9);
let TFlipFlopB0Block10Rotation = rotatePointOrigin({x: 58, y: 93}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block10 = new andGate(TFlipFlopB0Block.x - 10 + TFlipFlopB0Block10Rotation.x, TFlipFlopB0Block.y - 10 + TFlipFlopB0Block10Rotation.y, TFlipFlopB0Block.rotation + 270, "TFlipFlopB0Block10",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block10);
let TFlipFlopB0Block11Rotation = rotatePointOrigin({x: 58, y: 133}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block11 = new andGate(TFlipFlopB0Block.x - 10 + TFlipFlopB0Block11Rotation.x, TFlipFlopB0Block.y - 10 + TFlipFlopB0Block11Rotation.y, TFlipFlopB0Block.rotation + 270, "TFlipFlopB0Block11",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block11);
let TFlipFlopB0Block12Rotation = rotatePointOrigin({x: 88, y: 93}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block12 = new andGate(TFlipFlopB0Block.x - 10 + TFlipFlopB0Block12Rotation.x, TFlipFlopB0Block.y - 10 + TFlipFlopB0Block12Rotation.y, TFlipFlopB0Block.rotation + 270, "TFlipFlopB0Block12",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block12);
let TFlipFlopB0Block13Rotation = rotatePointOrigin({x: 118.5, y: 93.5}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block13 = new notGate(TFlipFlopB0Block.x - 9.5 + TFlipFlopB0Block13Rotation.x, TFlipFlopB0Block.y - 9.5 + TFlipFlopB0Block13Rotation.y, TFlipFlopB0Block.rotation + 270, "TFlipFlopB0Block13",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block13);
let TFlipFlopB0Block14Rotation = rotatePointOrigin({x: 118.5, y: 133.5}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block14 = new notGate(TFlipFlopB0Block.x - 9.5 + TFlipFlopB0Block14Rotation.x, TFlipFlopB0Block.y - 9.5 + TFlipFlopB0Block14Rotation.y, TFlipFlopB0Block.rotation + 270, "TFlipFlopB0Block14",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block14);
let TFlipFlopB0Block15Rotation = rotatePointOrigin({x: 118.5, y: 53.5}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block15 = new notGate(TFlipFlopB0Block.x - 9.5 + TFlipFlopB0Block15Rotation.x, TFlipFlopB0Block.y - 9.5 + TFlipFlopB0Block15Rotation.y, TFlipFlopB0Block.rotation + 270, "TFlipFlopB0Block15",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block15);
let TFlipFlopB0Block16Rotation = rotatePointOrigin({x: 118.5, y: 13.5}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block16 = new notGate(TFlipFlopB0Block.x - 9.5 + TFlipFlopB0Block16Rotation.x, TFlipFlopB0Block.y - 9.5 + TFlipFlopB0Block16Rotation.y, TFlipFlopB0Block.rotation + 270, "TFlipFlopB0Block16",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block16);
let TFlipFlopB0Block17Rotation = rotatePointOrigin({x: 158, y: 53}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block17 = new andGate(TFlipFlopB0Block.x - 10 + TFlipFlopB0Block17Rotation.x, TFlipFlopB0Block.y - 10 + TFlipFlopB0Block17Rotation.y, TFlipFlopB0Block.rotation + 270, "TFlipFlopB0Block17",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block17);
let TFlipFlopB0Block18Rotation = rotatePointOrigin({x: 158, y: 93}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block18 = new andGate(TFlipFlopB0Block.x - 10 + TFlipFlopB0Block18Rotation.x, TFlipFlopB0Block.y - 10 + TFlipFlopB0Block18Rotation.y, TFlipFlopB0Block.rotation + 270, "TFlipFlopB0Block18",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block18);
let TFlipFlopB0Block19Rotation = rotatePointOrigin({x: 198, y: 53}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block19 = new orGate(TFlipFlopB0Block.x - 10 + TFlipFlopB0Block19Rotation.x, TFlipFlopB0Block.y - 10 + TFlipFlopB0Block19Rotation.y, TFlipFlopB0Block.rotation + 270, "TFlipFlopB0Block19",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block19);
let TFlipFlopB0Block20Rotation = rotatePointOrigin({x: 198, y: 93}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block20 = new orGate(TFlipFlopB0Block.x - 10 + TFlipFlopB0Block20Rotation.x, TFlipFlopB0Block.y - 10 + TFlipFlopB0Block20Rotation.y, TFlipFlopB0Block.rotation + 270, "TFlipFlopB0Block20",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block20);
let TFlipFlopB0Block21Rotation = rotatePointOrigin({x: 228.5, y: 53.5}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block21 = new notGate(TFlipFlopB0Block.x - 9.5 + TFlipFlopB0Block21Rotation.x, TFlipFlopB0Block.y - 9.5 + TFlipFlopB0Block21Rotation.y, TFlipFlopB0Block.rotation + 270, "TFlipFlopB0Block21",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block21);
let TFlipFlopB0Block22Rotation = rotatePointOrigin({x: 228.5, y: 93.5}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block22 = new notGate(TFlipFlopB0Block.x - 9.5 + TFlipFlopB0Block22Rotation.x, TFlipFlopB0Block.y - 9.5 + TFlipFlopB0Block22Rotation.y, TFlipFlopB0Block.rotation + 270, "TFlipFlopB0Block22",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block22);
let TFlipFlopB0Block23Rotation0 = rotatePointOrigin({x: 207, y: 53}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block23Rotation1 = rotatePointOrigin({x: 219, y: 53}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block23 = new lineSegment({x: TFlipFlopB0Block23Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block23Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block23Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block23Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block23",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block23);
TFlipFlopB0Block19.outputs[0].push({gate: TFlipFlopB0Block23, position: 0});
TFlipFlopB0Block19.outputs[1].push({gate: TFlipFlopB0Block23, position: 0});
TFlipFlopB0Block23.outputs[0].push({gate: TFlipFlopB0Block21, position: 0});
TFlipFlopB0Block23.outputs[1].push({gate: TFlipFlopB0Block21, position: 0});
let TFlipFlopB0Block24Rotation0 = rotatePointOrigin({x: 207, y: 93}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block24Rotation1 = rotatePointOrigin({x: 219, y: 93}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block24 = new lineSegment({x: TFlipFlopB0Block24Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block24Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block24Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block24Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block24",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block24);
TFlipFlopB0Block20.outputs[0].push({gate: TFlipFlopB0Block24, position: 0});
TFlipFlopB0Block20.outputs[1].push({gate: TFlipFlopB0Block24, position: 0});
TFlipFlopB0Block24.outputs[0].push({gate: TFlipFlopB0Block22, position: 0});
TFlipFlopB0Block24.outputs[1].push({gate: TFlipFlopB0Block22, position: 0});
let TFlipFlopB0Block25Rotation0 = rotatePointOrigin({x: 67, y: 133}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block25Rotation1 = rotatePointOrigin({x: 109, y: 133}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block25 = new lineSegment({x: TFlipFlopB0Block25Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block25Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block25Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block25Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block25",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block25);
TFlipFlopB0Block11.outputs[0].push({gate: TFlipFlopB0Block25, position: 0});
TFlipFlopB0Block11.outputs[1].push({gate: TFlipFlopB0Block25, position: 0});
TFlipFlopB0Block25.outputs[0].push({gate: TFlipFlopB0Block14, position: 0});
TFlipFlopB0Block25.outputs[1].push({gate: TFlipFlopB0Block14, position: 0});
let TFlipFlopB0Block26Rotation0 = rotatePointOrigin({x: 97, y: 93}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block26Rotation1 = rotatePointOrigin({x: 109, y: 93}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block26 = new lineSegment({x: TFlipFlopB0Block26Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block26Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block26Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block26Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block26",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block26);
TFlipFlopB0Block12.outputs[0].push({gate: TFlipFlopB0Block26, position: 0});
TFlipFlopB0Block12.outputs[1].push({gate: TFlipFlopB0Block26, position: 0});
TFlipFlopB0Block26.outputs[0].push({gate: TFlipFlopB0Block13, position: 0});
TFlipFlopB0Block26.outputs[1].push({gate: TFlipFlopB0Block13, position: 0});
let TFlipFlopB0Block27Rotation0 = rotatePointOrigin({x: 67, y: 53}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block27Rotation1 = rotatePointOrigin({x: 109, y: 53}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block27 = new lineSegment({x: TFlipFlopB0Block27Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block27Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block27Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block27Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block27",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block27);
TFlipFlopB0Block9.outputs[0].push({gate: TFlipFlopB0Block27, position: 0});
TFlipFlopB0Block9.outputs[1].push({gate: TFlipFlopB0Block27, position: 0});
TFlipFlopB0Block27.outputs[0].push({gate: TFlipFlopB0Block15, position: 0});
TFlipFlopB0Block27.outputs[1].push({gate: TFlipFlopB0Block15, position: 0});
let TFlipFlopB0Block28Rotation0 = rotatePointOrigin({x: 67, y: 13}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block28Rotation1 = rotatePointOrigin({x: 109, y: 13}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block28 = new lineSegment({x: TFlipFlopB0Block28Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block28Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block28Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block28Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block28",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block28);
TFlipFlopB0Block8.outputs[0].push({gate: TFlipFlopB0Block28, position: 0});
TFlipFlopB0Block8.outputs[1].push({gate: TFlipFlopB0Block28, position: 0});
TFlipFlopB0Block28.outputs[0].push({gate: TFlipFlopB0Block16, position: 0});
TFlipFlopB0Block28.outputs[1].push({gate: TFlipFlopB0Block16, position: 0});
let TFlipFlopB0Block29Rotation0 = rotatePointOrigin({x: -2, y: 102}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block29Rotation1 = rotatePointOrigin({x: -2, y: 114}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block29 = new lineSegment({x: TFlipFlopB0Block29Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block29Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block29Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block29Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block29",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block29);
TFlipFlopB0Block6.outputs[0].push({gate: TFlipFlopB0Block29, position: 0});
TFlipFlopB0Block6.outputs[1].push({gate: TFlipFlopB0Block29, position: 0});
let TFlipFlopB0Block30Rotation0 = rotatePointOrigin({x: -2, y: 114}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block30Rotation1 = rotatePointOrigin({x: -1, y: 114}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block30 = new lineSegment({x: TFlipFlopB0Block30Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block30Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block30Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block30Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block30",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block30);
TFlipFlopB0Block29.outputs[0].push({gate: TFlipFlopB0Block30, position: 0});
TFlipFlopB0Block30.outputs[1].push({gate: TFlipFlopB0Block29, position: 1});
TFlipFlopB0Block30.outputs[0].push({gate: TFlipFlopB0Block7, position: 0});
TFlipFlopB0Block30.outputs[1].push({gate: TFlipFlopB0Block7, position: 0});
let TFlipFlopB0Block31Rotation0 = rotatePointOrigin({x: -11, y: 74}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block31Rotation1 = rotatePointOrigin({x: -5, y: 74}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block31 = new lineSegment({x: TFlipFlopB0Block31Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block31Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block31Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block31Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block31",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block31);
TFlipFlopB0Block4.outputs[0].push({gate: TFlipFlopB0Block31, position: 0});
TFlipFlopB0Block4.outputs[1].push({gate: TFlipFlopB0Block31, position: 0});
let TFlipFlopB0Block32Rotation0 = rotatePointOrigin({x: -5, y: 74}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block32Rotation1 = rotatePointOrigin({x: -5, y: 83}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block32 = new lineSegment({x: TFlipFlopB0Block32Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block32Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block32Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block32Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block32",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block32);
TFlipFlopB0Block31.outputs[0].push({gate: TFlipFlopB0Block32, position: 0});
TFlipFlopB0Block32.outputs[1].push({gate: TFlipFlopB0Block31, position: 1});
TFlipFlopB0Block32.outputs[0].push({gate: TFlipFlopB0Block6, position: 0});
TFlipFlopB0Block32.outputs[1].push({gate: TFlipFlopB0Block6, position: 0});
let TFlipFlopB0Block33Rotation0 = rotatePointOrigin({x: 9, y: 74}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block33Rotation1 = rotatePointOrigin({x: 0, y: 74}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block33 = new lineSegment({x: TFlipFlopB0Block33Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block33Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block33Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block33Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block33",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block33);
TFlipFlopB0Block5.outputs[0].push({gate: TFlipFlopB0Block33, position: 0});
TFlipFlopB0Block5.outputs[1].push({gate: TFlipFlopB0Block33, position: 0});
let TFlipFlopB0Block34Rotation0 = rotatePointOrigin({x: 0, y: 74}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block34Rotation1 = rotatePointOrigin({x: 0, y: 83}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block34 = new lineSegment({x: TFlipFlopB0Block34Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block34Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block34Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block34Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block34",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block34);
TFlipFlopB0Block33.outputs[0].push({gate: TFlipFlopB0Block34, position: 0});
TFlipFlopB0Block34.outputs[1].push({gate: TFlipFlopB0Block33, position: 1});
TFlipFlopB0Block34.outputs[0].push({gate: TFlipFlopB0Block6, position: 1});
TFlipFlopB0Block34.outputs[1].push({gate: TFlipFlopB0Block6, position: 1});
let TFlipFlopB0Block35Rotation0 = rotatePointOrigin({x: -12, y: 42}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block35Rotation1 = rotatePointOrigin({x: -12, y: 54}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block35 = new lineSegment({x: TFlipFlopB0Block35Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block35Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block35Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block35Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block35",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block35);
TFlipFlopB0Block2.outputs[0].push({gate: TFlipFlopB0Block35, position: 0});
TFlipFlopB0Block2.outputs[1].push({gate: TFlipFlopB0Block35, position: 0});
let TFlipFlopB0Block36Rotation0 = rotatePointOrigin({x: -12, y: 54}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block36Rotation1 = rotatePointOrigin({x: -11, y: 54}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block36 = new lineSegment({x: TFlipFlopB0Block36Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block36Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block36Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block36Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block36",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block36);
TFlipFlopB0Block35.outputs[0].push({gate: TFlipFlopB0Block36, position: 0});
TFlipFlopB0Block36.outputs[1].push({gate: TFlipFlopB0Block35, position: 1});
TFlipFlopB0Block36.outputs[0].push({gate: TFlipFlopB0Block4, position: 0});
TFlipFlopB0Block36.outputs[1].push({gate: TFlipFlopB0Block4, position: 0});
let TFlipFlopB0Block37Rotation0 = rotatePointOrigin({x: 8, y: 42}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block37Rotation1 = rotatePointOrigin({x: 8, y: 54}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block37 = new lineSegment({x: TFlipFlopB0Block37Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block37Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block37Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block37Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block37",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block37);
TFlipFlopB0Block3.outputs[0].push({gate: TFlipFlopB0Block37, position: 0});
TFlipFlopB0Block3.outputs[1].push({gate: TFlipFlopB0Block37, position: 0});
let TFlipFlopB0Block38Rotation0 = rotatePointOrigin({x: 8, y: 54}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block38Rotation1 = rotatePointOrigin({x: 9, y: 54}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block38 = new lineSegment({x: TFlipFlopB0Block38Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block38Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block38Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block38Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block38",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block38);
TFlipFlopB0Block37.outputs[0].push({gate: TFlipFlopB0Block38, position: 0});
TFlipFlopB0Block38.outputs[1].push({gate: TFlipFlopB0Block37, position: 1});
TFlipFlopB0Block38.outputs[0].push({gate: TFlipFlopB0Block5, position: 0});
TFlipFlopB0Block38.outputs[1].push({gate: TFlipFlopB0Block5, position: 0});
let TFlipFlopB0Block39Rotation0 = rotatePointOrigin({x: -1, y: 14}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block39Rotation1 = rotatePointOrigin({x: 5, y: 14}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block39 = new lineSegment({x: TFlipFlopB0Block39Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block39Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block39Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block39Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block39",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block39);
TFlipFlopB0Block1.outputs[0].push({gate: TFlipFlopB0Block39, position: 0});
TFlipFlopB0Block1.outputs[1].push({gate: TFlipFlopB0Block39, position: 0});
let TFlipFlopB0Block40Rotation0 = rotatePointOrigin({x: 5, y: 14}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block40Rotation1 = rotatePointOrigin({x: 5, y: 23}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block40 = new lineSegment({x: TFlipFlopB0Block40Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block40Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block40Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block40Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block40",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block40);
TFlipFlopB0Block39.outputs[0].push({gate: TFlipFlopB0Block40, position: 0});
TFlipFlopB0Block40.outputs[1].push({gate: TFlipFlopB0Block39, position: 1});
TFlipFlopB0Block40.outputs[0].push({gate: TFlipFlopB0Block3, position: 0});
TFlipFlopB0Block40.outputs[1].push({gate: TFlipFlopB0Block3, position: 0});
let TFlipFlopB0Block41Rotation0 = rotatePointOrigin({x: 129, y: 93}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block41Rotation1 = rotatePointOrigin({x: 133, y: 93}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block41 = new lineSegment({x: TFlipFlopB0Block41Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block41Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block41Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block41Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block41",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block41);
TFlipFlopB0Block13.outputs[0].push({gate: TFlipFlopB0Block41, position: 0});
TFlipFlopB0Block13.outputs[1].push({gate: TFlipFlopB0Block41, position: 0});
let TFlipFlopB0Block42Rotation0 = rotatePointOrigin({x: 133, y: 93}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block42Rotation1 = rotatePointOrigin({x: 133, y: 98}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block42 = new lineSegment({x: TFlipFlopB0Block42Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block42Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block42Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block42Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block42",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block42);
TFlipFlopB0Block41.outputs[0].push({gate: TFlipFlopB0Block42, position: 0});
TFlipFlopB0Block42.outputs[1].push({gate: TFlipFlopB0Block41, position: 1});
let TFlipFlopB0Block43Rotation0 = rotatePointOrigin({x: 133, y: 98}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block43Rotation1 = rotatePointOrigin({x: 133, y: 96}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block43 = new lineSegment({x: TFlipFlopB0Block43Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block43Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block43Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block43Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block43",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block43);
TFlipFlopB0Block42.outputs[0].push({gate: TFlipFlopB0Block43, position: 0});
TFlipFlopB0Block43.outputs[1].push({gate: TFlipFlopB0Block42, position: 1});
let TFlipFlopB0Block44Rotation0 = rotatePointOrigin({x: 133, y: 96}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block44Rotation1 = rotatePointOrigin({x: 148, y: 96}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block44 = new lineSegment({x: TFlipFlopB0Block44Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block44Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block44Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block44Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block44",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block44);
TFlipFlopB0Block43.outputs[0].push({gate: TFlipFlopB0Block44, position: 0});
TFlipFlopB0Block44.outputs[1].push({gate: TFlipFlopB0Block43, position: 1});
TFlipFlopB0Block44.outputs[0].push({gate: TFlipFlopB0Block18, position: 0});
TFlipFlopB0Block44.outputs[1].push({gate: TFlipFlopB0Block18, position: 0});
let TFlipFlopB0Block45Rotation0 = rotatePointOrigin({x: 133, y: 98}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block45Rotation1 = rotatePointOrigin({x: 133, y: 108}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block45 = new lineSegment({x: TFlipFlopB0Block45Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block45Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block45Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block45Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block45",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block45);
TFlipFlopB0Block42.outputs[0].push({gate: TFlipFlopB0Block45, position: 0});
TFlipFlopB0Block45.outputs[1].push({gate: TFlipFlopB0Block42, position: 1});
TFlipFlopB0Block43.outputs[1].push({gate: TFlipFlopB0Block45, position: 0});
TFlipFlopB0Block45.outputs[1].push({gate: TFlipFlopB0Block43, position: 0});
let TFlipFlopB0Block46Rotation0 = rotatePointOrigin({x: 129, y: 133}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block46Rotation1 = rotatePointOrigin({x: 133, y: 133}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block46 = new lineSegment({x: TFlipFlopB0Block46Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block46Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block46Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block46Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block46",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block46);
TFlipFlopB0Block14.outputs[0].push({gate: TFlipFlopB0Block46, position: 0});
TFlipFlopB0Block14.outputs[1].push({gate: TFlipFlopB0Block46, position: 0});
let TFlipFlopB0Block47Rotation0 = rotatePointOrigin({x: 133, y: 133}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block47Rotation1 = rotatePointOrigin({x: 133, y: 118}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block47 = new lineSegment({x: TFlipFlopB0Block47Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block47Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block47Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block47Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block47",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block47);
TFlipFlopB0Block46.outputs[0].push({gate: TFlipFlopB0Block47, position: 0});
TFlipFlopB0Block47.outputs[1].push({gate: TFlipFlopB0Block46, position: 1});
let TFlipFlopB0Block48Rotation0 = rotatePointOrigin({x: 48, y: 131}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block48Rotation1 = rotatePointOrigin({x: 43, y: 131}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block48 = new lineSegment({x: TFlipFlopB0Block48Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block48Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block48Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block48Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block48",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block48);
TFlipFlopB0Block48.outputs[0].push({gate: TFlipFlopB0Block11, position: 1});
TFlipFlopB0Block48.outputs[1].push({gate: TFlipFlopB0Block11, position: 1});
let TFlipFlopB0Block49Rotation0 = rotatePointOrigin({x: 43, y: 131}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block49Rotation1 = rotatePointOrigin({x: 43, y: 118}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block49 = new lineSegment({x: TFlipFlopB0Block49Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block49Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block49Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block49Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block49",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block49);
TFlipFlopB0Block48.outputs[0].push({gate: TFlipFlopB0Block49, position: 0});
TFlipFlopB0Block49.outputs[1].push({gate: TFlipFlopB0Block48, position: 1});
let TFlipFlopB0Block50Rotation0 = rotatePointOrigin({x: 48, y: 96}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block50Rotation1 = rotatePointOrigin({x: 43, y: 96}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block50 = new lineSegment({x: TFlipFlopB0Block50Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block50Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block50Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block50Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block50",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block50);
TFlipFlopB0Block50.outputs[0].push({gate: TFlipFlopB0Block10, position: 0});
TFlipFlopB0Block50.outputs[1].push({gate: TFlipFlopB0Block10, position: 0});
let TFlipFlopB0Block51Rotation0 = rotatePointOrigin({x: 43, y: 96}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block51Rotation1 = rotatePointOrigin({x: 43, y: 108}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block51 = new lineSegment({x: TFlipFlopB0Block51Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block51Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block51Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block51Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block51",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block51);
TFlipFlopB0Block50.outputs[0].push({gate: TFlipFlopB0Block51, position: 0});
TFlipFlopB0Block51.outputs[1].push({gate: TFlipFlopB0Block50, position: 1});
let TFlipFlopB0Block52Rotation0 = rotatePointOrigin({x: 43, y: 108}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block52Rotation1 = rotatePointOrigin({x: 133, y: 118}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block52 = new lineSegment({x: TFlipFlopB0Block52Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block52Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block52Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block52Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block52",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block52);
TFlipFlopB0Block51.outputs[0].push({gate: TFlipFlopB0Block52, position: 0});
TFlipFlopB0Block52.outputs[1].push({gate: TFlipFlopB0Block51, position: 1});
TFlipFlopB0Block47.outputs[0].push({gate: TFlipFlopB0Block52, position: 1});
TFlipFlopB0Block52.outputs[0].push({gate: TFlipFlopB0Block47, position: 1});
let TFlipFlopB0Block53Rotation0 = rotatePointOrigin({x: 43, y: 118}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block53Rotation1 = rotatePointOrigin({x: 133, y: 108}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block53 = new lineSegment({x: TFlipFlopB0Block53Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block53Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block53Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block53Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block53",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block53);
TFlipFlopB0Block49.outputs[0].push({gate: TFlipFlopB0Block53, position: 0});
TFlipFlopB0Block53.outputs[1].push({gate: TFlipFlopB0Block49, position: 1});
TFlipFlopB0Block45.outputs[0].push({gate: TFlipFlopB0Block53, position: 1});
TFlipFlopB0Block53.outputs[0].push({gate: TFlipFlopB0Block45, position: 1});
let TFlipFlopB0Block54Rotation0 = rotatePointOrigin({x: -1, y: 134}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block54Rotation1 = rotatePointOrigin({x: -1, y: 136}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block54 = new lineSegment({x: TFlipFlopB0Block54Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block54Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block54Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block54Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block54",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block54);
TFlipFlopB0Block7.outputs[0].push({gate: TFlipFlopB0Block54, position: 0});
TFlipFlopB0Block7.outputs[1].push({gate: TFlipFlopB0Block54, position: 0});
let TFlipFlopB0Block55Rotation0 = rotatePointOrigin({x: -1, y: 136}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block55Rotation1 = rotatePointOrigin({x: 48, y: 136}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block55 = new lineSegment({x: TFlipFlopB0Block55Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block55Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block55Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block55Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block55",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block55);
TFlipFlopB0Block54.outputs[0].push({gate: TFlipFlopB0Block55, position: 0});
TFlipFlopB0Block55.outputs[1].push({gate: TFlipFlopB0Block54, position: 1});
TFlipFlopB0Block55.outputs[0].push({gate: TFlipFlopB0Block11, position: 0});
TFlipFlopB0Block55.outputs[1].push({gate: TFlipFlopB0Block11, position: 0});
let TFlipFlopB0Block56Rotation0 = rotatePointOrigin({x: 48, y: 11}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block56Rotation1 = rotatePointOrigin({x: 33, y: 11}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block56 = new lineSegment({x: TFlipFlopB0Block56Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block56Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block56Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block56Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block56",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block56);
TFlipFlopB0Block56.outputs[0].push({gate: TFlipFlopB0Block8, position: 1});
TFlipFlopB0Block56.outputs[1].push({gate: TFlipFlopB0Block8, position: 1});
let TFlipFlopB0Block57Rotation0 = rotatePointOrigin({x: 43, y: 108}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block57Rotation1 = rotatePointOrigin({x: 33, y: 108}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block57 = new lineSegment({x: TFlipFlopB0Block57Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block57Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block57Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block57Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block57",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block57);
TFlipFlopB0Block51.outputs[0].push({gate: TFlipFlopB0Block57, position: 0});
TFlipFlopB0Block57.outputs[1].push({gate: TFlipFlopB0Block51, position: 1});
TFlipFlopB0Block52.outputs[1].push({gate: TFlipFlopB0Block57, position: 0});
TFlipFlopB0Block57.outputs[1].push({gate: TFlipFlopB0Block52, position: 0});
let TFlipFlopB0Block58Rotation0 = rotatePointOrigin({x: 33, y: 108}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block58Rotation1 = rotatePointOrigin({x: 33, y: 11}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block58 = new lineSegment({x: TFlipFlopB0Block58Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block58Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block58Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block58Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block58",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block58);
TFlipFlopB0Block57.outputs[0].push({gate: TFlipFlopB0Block58, position: 0});
TFlipFlopB0Block58.outputs[1].push({gate: TFlipFlopB0Block57, position: 1});
TFlipFlopB0Block56.outputs[0].push({gate: TFlipFlopB0Block58, position: 1});
TFlipFlopB0Block58.outputs[0].push({gate: TFlipFlopB0Block56, position: 1});
let TFlipFlopB0Block59Rotation0 = rotatePointOrigin({x: 239, y: 53}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block59Rotation1 = rotatePointOrigin({x: 243, y: 53}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block59 = new lineSegment({x: TFlipFlopB0Block59Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block59Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block59Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block59Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block59",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block59);
TFlipFlopB0Block21.outputs[0].push({gate: TFlipFlopB0Block59, position: 0});
TFlipFlopB0Block21.outputs[1].push({gate: TFlipFlopB0Block59, position: 0});
let TFlipFlopB0Block60Rotation0 = rotatePointOrigin({x: 243, y: 53}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block60Rotation1 = rotatePointOrigin({x: 243, y: 18}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block60 = new lineSegment({x: TFlipFlopB0Block60Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block60Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block60Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block60Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block60",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block60);
TFlipFlopB0Block59.outputs[0].push({gate: TFlipFlopB0Block60, position: 0});
TFlipFlopB0Block60.outputs[1].push({gate: TFlipFlopB0Block59, position: 1});
let TFlipFlopB0Block61Rotation0 = rotatePointOrigin({x: 10, y: 23}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block61Rotation1 = rotatePointOrigin({x: 10, y: -2}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block61 = new lineSegment({x: TFlipFlopB0Block61Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block61Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block61Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block61Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block61",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block61);
TFlipFlopB0Block61.outputs[0].push({gate: TFlipFlopB0Block3, position: 1});
TFlipFlopB0Block61.outputs[1].push({gate: TFlipFlopB0Block3, position: 1});
let TFlipFlopB0Block62Rotation0 = rotatePointOrigin({x: 10, y: -2}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block62Rotation1 = rotatePointOrigin({x: 243, y: -2}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block62 = new lineSegment({x: TFlipFlopB0Block62Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block62Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block62Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block62Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block62",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block62);
TFlipFlopB0Block61.outputs[0].push({gate: TFlipFlopB0Block62, position: 0});
TFlipFlopB0Block62.outputs[1].push({gate: TFlipFlopB0Block61, position: 1});
let TFlipFlopB0Block63Rotation0 = rotatePointOrigin({x: 243, y: 18}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block63Rotation1 = rotatePointOrigin({x: 243, y: -2}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block63 = new lineSegment({x: TFlipFlopB0Block63Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block63Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block63Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block63Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block63",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block63);
TFlipFlopB0Block60.outputs[0].push({gate: TFlipFlopB0Block63, position: 0});
TFlipFlopB0Block63.outputs[1].push({gate: TFlipFlopB0Block60, position: 1});
TFlipFlopB0Block62.outputs[0].push({gate: TFlipFlopB0Block63, position: 1});
TFlipFlopB0Block63.outputs[0].push({gate: TFlipFlopB0Block62, position: 1});
let TFlipFlopB0Block64Rotation0 = rotatePointOrigin({x: -15, y: 23}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block64Rotation1 = rotatePointOrigin({x: -15, y: -12}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block64 = new lineSegment({x: TFlipFlopB0Block64Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block64Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block64Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block64Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block64",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block64);
TFlipFlopB0Block64.outputs[0].push({gate: TFlipFlopB0Block2, position: 0});
TFlipFlopB0Block64.outputs[1].push({gate: TFlipFlopB0Block2, position: 0});
let TFlipFlopB0Block65Rotation0 = rotatePointOrigin({x: -15, y: -12}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block65Rotation1 = rotatePointOrigin({x: 253, y: -12}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block65 = new lineSegment({x: TFlipFlopB0Block65Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block65Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block65Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block65Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block65",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block65);
TFlipFlopB0Block64.outputs[0].push({gate: TFlipFlopB0Block65, position: 0});
TFlipFlopB0Block65.outputs[1].push({gate: TFlipFlopB0Block64, position: 1});
let TFlipFlopB0Block66Rotation0 = rotatePointOrigin({x: 239, y: 93}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block66Rotation1 = rotatePointOrigin({x: 243, y: 93}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block66 = new lineSegment({x: TFlipFlopB0Block66Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block66Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block66Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block66Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block66",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block66);
TFlipFlopB0Block22.outputs[0].push({gate: TFlipFlopB0Block66, position: 0});
TFlipFlopB0Block22.outputs[1].push({gate: TFlipFlopB0Block66, position: 0});
let TFlipFlopB0Block67Rotation0 = rotatePointOrigin({x: 243, y: 93}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block67Rotation1 = rotatePointOrigin({x: 243, y: 78}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block67 = new lineSegment({x: TFlipFlopB0Block67Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block67Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block67Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block67Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block67",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block67);
TFlipFlopB0Block66.outputs[0].push({gate: TFlipFlopB0Block67, position: 0});
TFlipFlopB0Block67.outputs[1].push({gate: TFlipFlopB0Block66, position: 1});
let TFlipFlopB0Block68Rotation0 = rotatePointOrigin({x: 243, y: 93}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block68Rotation1 = rotatePointOrigin({x: 253, y: 93}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block68 = new lineSegment({x: TFlipFlopB0Block68Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block68Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block68Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block68Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block68",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block68);
TFlipFlopB0Block66.outputs[0].push({gate: TFlipFlopB0Block68, position: 0});
TFlipFlopB0Block68.outputs[1].push({gate: TFlipFlopB0Block66, position: 1});
TFlipFlopB0Block67.outputs[1].push({gate: TFlipFlopB0Block68, position: 0});
TFlipFlopB0Block68.outputs[1].push({gate: TFlipFlopB0Block67, position: 0});
let TFlipFlopB0Block69Rotation0 = rotatePointOrigin({x: 253, y: 93}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block69Rotation1 = rotatePointOrigin({x: 253, y: -12}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block69 = new lineSegment({x: TFlipFlopB0Block69Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block69Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block69Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block69Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block69",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block69);
TFlipFlopB0Block68.outputs[0].push({gate: TFlipFlopB0Block69, position: 0});
TFlipFlopB0Block69.outputs[1].push({gate: TFlipFlopB0Block68, position: 1});
TFlipFlopB0Block65.outputs[0].push({gate: TFlipFlopB0Block69, position: 1});
TFlipFlopB0Block69.outputs[0].push({gate: TFlipFlopB0Block65, position: 1});
let TFlipFlopB0Block70Rotation0 = rotatePointOrigin({x: 243, y: 53}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block70Rotation1 = rotatePointOrigin({x: 243, y: 68}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block70 = new lineSegment({x: TFlipFlopB0Block70Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block70Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block70Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block70Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block70",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block70);
TFlipFlopB0Block59.outputs[0].push({gate: TFlipFlopB0Block70, position: 0});
TFlipFlopB0Block70.outputs[1].push({gate: TFlipFlopB0Block59, position: 1});
TFlipFlopB0Block60.outputs[1].push({gate: TFlipFlopB0Block70, position: 0});
TFlipFlopB0Block70.outputs[1].push({gate: TFlipFlopB0Block60, position: 0});
let TFlipFlopB0Block71Rotation0 = rotatePointOrigin({x: 193, y: 51}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block71Rotation1 = rotatePointOrigin({x: 183, y: 51}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block71 = new lineSegment({x: TFlipFlopB0Block71Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block71Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block71Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block71Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block71",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block71);
TFlipFlopB0Block71.outputs[0].push({gate: TFlipFlopB0Block19, position: 1});
TFlipFlopB0Block71.outputs[1].push({gate: TFlipFlopB0Block19, position: 1});
let TFlipFlopB0Block72Rotation0 = rotatePointOrigin({x: 183, y: 51}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block72Rotation1 = rotatePointOrigin({x: 183, y: -22}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block72 = new lineSegment({x: TFlipFlopB0Block72Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block72Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block72Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block72Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block72",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block72);
TFlipFlopB0Block71.outputs[0].push({gate: TFlipFlopB0Block72, position: 0});
TFlipFlopB0Block72.outputs[1].push({gate: TFlipFlopB0Block71, position: 1});
let TFlipFlopB0Block73Rotation0 = rotatePointOrigin({x: 167, y: 93}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block73Rotation1 = rotatePointOrigin({x: 167, y: 91}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block73 = new lineSegment({x: TFlipFlopB0Block73Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block73Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block73Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block73Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block73",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block73);
TFlipFlopB0Block18.outputs[0].push({gate: TFlipFlopB0Block73, position: 0});
TFlipFlopB0Block18.outputs[1].push({gate: TFlipFlopB0Block73, position: 0});
let TFlipFlopB0Block74Rotation0 = rotatePointOrigin({x: 167, y: 91}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block74Rotation1 = rotatePointOrigin({x: 193, y: 91}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block74 = new lineSegment({x: TFlipFlopB0Block74Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block74Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block74Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block74Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block74",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block74);
TFlipFlopB0Block73.outputs[0].push({gate: TFlipFlopB0Block74, position: 0});
TFlipFlopB0Block74.outputs[1].push({gate: TFlipFlopB0Block73, position: 1});
TFlipFlopB0Block74.outputs[0].push({gate: TFlipFlopB0Block20, position: 1});
TFlipFlopB0Block74.outputs[1].push({gate: TFlipFlopB0Block20, position: 1});
let TFlipFlopB0Block75Rotation0 = rotatePointOrigin({x: 193, y: 96}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block75Rotation1 = rotatePointOrigin({x: 173, y: 96}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block75 = new lineSegment({x: TFlipFlopB0Block75Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block75Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block75Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block75Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block75",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block75);
TFlipFlopB0Block75.outputs[0].push({gate: TFlipFlopB0Block20, position: 0});
TFlipFlopB0Block75.outputs[1].push({gate: TFlipFlopB0Block20, position: 0});
let TFlipFlopB0Block76Rotation0 = rotatePointOrigin({x: 173, y: 96}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block76Rotation1 = rotatePointOrigin({x: 173, y: -22}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block76 = new lineSegment({x: TFlipFlopB0Block76Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block76Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block76Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block76Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block76",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block76);
TFlipFlopB0Block75.outputs[0].push({gate: TFlipFlopB0Block76, position: 0});
TFlipFlopB0Block76.outputs[1].push({gate: TFlipFlopB0Block75, position: 1});
let TFlipFlopB0Block77Rotation0 = rotatePointOrigin({x: 167, y: 53}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block77Rotation1 = rotatePointOrigin({x: 167, y: 56}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block77 = new lineSegment({x: TFlipFlopB0Block77Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block77Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block77Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block77Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block77",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block77);
TFlipFlopB0Block17.outputs[0].push({gate: TFlipFlopB0Block77, position: 0});
TFlipFlopB0Block17.outputs[1].push({gate: TFlipFlopB0Block77, position: 0});
let TFlipFlopB0Block78Rotation0 = rotatePointOrigin({x: 167, y: 56}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block78Rotation1 = rotatePointOrigin({x: 193, y: 56}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block78 = new lineSegment({x: TFlipFlopB0Block78Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block78Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block78Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block78Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block78",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block78);
TFlipFlopB0Block77.outputs[0].push({gate: TFlipFlopB0Block78, position: 0});
TFlipFlopB0Block78.outputs[1].push({gate: TFlipFlopB0Block77, position: 1});
TFlipFlopB0Block78.outputs[0].push({gate: TFlipFlopB0Block19, position: 0});
TFlipFlopB0Block78.outputs[1].push({gate: TFlipFlopB0Block19, position: 0});
let TFlipFlopB0Block79Rotation0 = rotatePointOrigin({x: 148, y: 91}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block79Rotation1 = rotatePointOrigin({x: 143, y: 91}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block79 = new lineSegment({x: TFlipFlopB0Block79Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block79Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block79Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block79Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block79",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block79);
TFlipFlopB0Block79.outputs[0].push({gate: TFlipFlopB0Block18, position: 1});
TFlipFlopB0Block79.outputs[1].push({gate: TFlipFlopB0Block18, position: 1});
let TFlipFlopB0Block80Rotation0 = rotatePointOrigin({x: 143, y: 91}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block80Rotation1 = rotatePointOrigin({x: 143, y: 78}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block80 = new lineSegment({x: TFlipFlopB0Block80Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block80Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block80Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block80Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block80",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block80);
TFlipFlopB0Block79.outputs[0].push({gate: TFlipFlopB0Block80, position: 0});
TFlipFlopB0Block80.outputs[1].push({gate: TFlipFlopB0Block79, position: 1});
let TFlipFlopB0Block81Rotation0 = rotatePointOrigin({x: 148, y: 56}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block81Rotation1 = rotatePointOrigin({x: 143, y: 56}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block81 = new lineSegment({x: TFlipFlopB0Block81Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block81Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block81Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block81Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block81",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block81);
TFlipFlopB0Block81.outputs[0].push({gate: TFlipFlopB0Block17, position: 0});
TFlipFlopB0Block81.outputs[1].push({gate: TFlipFlopB0Block17, position: 0});
let TFlipFlopB0Block82Rotation0 = rotatePointOrigin({x: 143, y: 56}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block82Rotation1 = rotatePointOrigin({x: 143, y: 68}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block82 = new lineSegment({x: TFlipFlopB0Block82Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block82Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block82Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block82Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block82",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block82);
TFlipFlopB0Block81.outputs[0].push({gate: TFlipFlopB0Block82, position: 0});
TFlipFlopB0Block82.outputs[1].push({gate: TFlipFlopB0Block81, position: 1});
let TFlipFlopB0Block83Rotation0 = rotatePointOrigin({x: 143, y: 78}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block83Rotation1 = rotatePointOrigin({x: 243, y: 68}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block83 = new lineSegment({x: TFlipFlopB0Block83Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block83Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block83Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block83Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block83",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block83);
TFlipFlopB0Block80.outputs[0].push({gate: TFlipFlopB0Block83, position: 0});
TFlipFlopB0Block83.outputs[1].push({gate: TFlipFlopB0Block80, position: 1});
TFlipFlopB0Block70.outputs[0].push({gate: TFlipFlopB0Block83, position: 1});
TFlipFlopB0Block83.outputs[0].push({gate: TFlipFlopB0Block70, position: 1});
let TFlipFlopB0Block84Rotation0 = rotatePointOrigin({x: 243, y: 78}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block84Rotation1 = rotatePointOrigin({x: 143, y: 68}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block84 = new lineSegment({x: TFlipFlopB0Block84Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block84Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block84Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block84Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block84",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block84);
TFlipFlopB0Block67.outputs[0].push({gate: TFlipFlopB0Block84, position: 0});
TFlipFlopB0Block84.outputs[1].push({gate: TFlipFlopB0Block67, position: 1});
TFlipFlopB0Block82.outputs[0].push({gate: TFlipFlopB0Block84, position: 1});
TFlipFlopB0Block84.outputs[0].push({gate: TFlipFlopB0Block82, position: 1});
let TFlipFlopB0Block85Rotation0 = rotatePointOrigin({x: 48, y: 91}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block85Rotation1 = rotatePointOrigin({x: 23, y: 91}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block85 = new lineSegment({x: TFlipFlopB0Block85Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block85Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block85Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block85Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block85",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block85);
TFlipFlopB0Block85.outputs[0].push({gate: TFlipFlopB0Block10, position: 1});
TFlipFlopB0Block85.outputs[1].push({gate: TFlipFlopB0Block10, position: 1});
let TFlipFlopB0Block86Rotation0 = rotatePointOrigin({x: 23, y: 91}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block86Rotation1 = rotatePointOrigin({x: 23, y: 56}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block86 = new lineSegment({x: TFlipFlopB0Block86Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block86Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block86Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block86Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block86",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block86);
TFlipFlopB0Block85.outputs[0].push({gate: TFlipFlopB0Block86, position: 0});
TFlipFlopB0Block86.outputs[1].push({gate: TFlipFlopB0Block85, position: 1});
let TFlipFlopB0Block87Rotation0 = rotatePointOrigin({x: 23, y: 56}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block87Rotation1 = rotatePointOrigin({x: 48, y: 56}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block87 = new lineSegment({x: TFlipFlopB0Block87Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block87Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block87Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block87Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block87",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block87);
TFlipFlopB0Block86.outputs[0].push({gate: TFlipFlopB0Block87, position: 0});
TFlipFlopB0Block87.outputs[1].push({gate: TFlipFlopB0Block86, position: 1});
TFlipFlopB0Block87.outputs[0].push({gate: TFlipFlopB0Block9, position: 0});
TFlipFlopB0Block87.outputs[1].push({gate: TFlipFlopB0Block9, position: 0});
let TFlipFlopB0Block88Rotation0 = rotatePointOrigin({x: 23, y: 56}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block88Rotation1 = rotatePointOrigin({x: 23, y: -22}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block88 = new lineSegment({x: TFlipFlopB0Block88Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block88Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block88Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block88Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block88",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block88);
TFlipFlopB0Block86.outputs[0].push({gate: TFlipFlopB0Block88, position: 0});
TFlipFlopB0Block88.outputs[1].push({gate: TFlipFlopB0Block86, position: 1});
TFlipFlopB0Block87.outputs[1].push({gate: TFlipFlopB0Block88, position: 0});
TFlipFlopB0Block88.outputs[1].push({gate: TFlipFlopB0Block87, position: 0});
let TFlipFlopB0Block89Rotation0 = rotatePointOrigin({x: 129, y: 53}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block89Rotation1 = rotatePointOrigin({x: 133, y: 53}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block89 = new lineSegment({x: TFlipFlopB0Block89Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block89Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block89Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block89Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block89",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block89);
TFlipFlopB0Block15.outputs[0].push({gate: TFlipFlopB0Block89, position: 0});
TFlipFlopB0Block15.outputs[1].push({gate: TFlipFlopB0Block89, position: 0});
let TFlipFlopB0Block90Rotation0 = rotatePointOrigin({x: 133, y: 53}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block90Rotation1 = rotatePointOrigin({x: 133, y: 38}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block90 = new lineSegment({x: TFlipFlopB0Block90Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block90Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block90Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block90Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block90",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block90);
TFlipFlopB0Block89.outputs[0].push({gate: TFlipFlopB0Block90, position: 0});
TFlipFlopB0Block90.outputs[1].push({gate: TFlipFlopB0Block89, position: 1});
let TFlipFlopB0Block91Rotation0 = rotatePointOrigin({x: 129, y: 13}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block91Rotation1 = rotatePointOrigin({x: 133, y: 13}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block91 = new lineSegment({x: TFlipFlopB0Block91Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block91Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block91Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block91Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block91",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block91);
TFlipFlopB0Block16.outputs[0].push({gate: TFlipFlopB0Block91, position: 0});
TFlipFlopB0Block16.outputs[1].push({gate: TFlipFlopB0Block91, position: 0});
let TFlipFlopB0Block92Rotation0 = rotatePointOrigin({x: 133, y: 13}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block92Rotation1 = rotatePointOrigin({x: 133, y: 28}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block92 = new lineSegment({x: TFlipFlopB0Block92Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block92Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block92Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block92Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block92",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block92);
TFlipFlopB0Block91.outputs[0].push({gate: TFlipFlopB0Block92, position: 0});
TFlipFlopB0Block92.outputs[1].push({gate: TFlipFlopB0Block91, position: 1});
let TFlipFlopB0Block93Rotation0 = rotatePointOrigin({x: 48, y: 51}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block93Rotation1 = rotatePointOrigin({x: 43, y: 51}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block93 = new lineSegment({x: TFlipFlopB0Block93Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block93Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block93Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block93Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block93",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block93);
TFlipFlopB0Block93.outputs[0].push({gate: TFlipFlopB0Block9, position: 1});
TFlipFlopB0Block93.outputs[1].push({gate: TFlipFlopB0Block9, position: 1});
let TFlipFlopB0Block94Rotation0 = rotatePointOrigin({x: 43, y: 51}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block94Rotation1 = rotatePointOrigin({x: 43, y: 38}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block94 = new lineSegment({x: TFlipFlopB0Block94Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block94Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block94Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block94Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block94",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block94);
TFlipFlopB0Block93.outputs[0].push({gate: TFlipFlopB0Block94, position: 0});
TFlipFlopB0Block94.outputs[1].push({gate: TFlipFlopB0Block93, position: 1});
let TFlipFlopB0Block95Rotation0 = rotatePointOrigin({x: 48, y: 16}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block95Rotation1 = rotatePointOrigin({x: 43, y: 16}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block95 = new lineSegment({x: TFlipFlopB0Block95Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block95Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block95Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block95Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block95",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block95);
TFlipFlopB0Block95.outputs[0].push({gate: TFlipFlopB0Block8, position: 0});
TFlipFlopB0Block95.outputs[1].push({gate: TFlipFlopB0Block8, position: 0});
let TFlipFlopB0Block96Rotation0 = rotatePointOrigin({x: 43, y: 16}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block96Rotation1 = rotatePointOrigin({x: 43, y: 28}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block96 = new lineSegment({x: TFlipFlopB0Block96Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block96Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block96Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block96Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block96",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block96);
TFlipFlopB0Block95.outputs[0].push({gate: TFlipFlopB0Block96, position: 0});
TFlipFlopB0Block96.outputs[1].push({gate: TFlipFlopB0Block95, position: 1});
let TFlipFlopB0Block97Rotation0 = rotatePointOrigin({x: 43, y: 28}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block97Rotation1 = rotatePointOrigin({x: 133, y: 38}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block97 = new lineSegment({x: TFlipFlopB0Block97Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block97Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block97Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block97Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block97",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block97);
TFlipFlopB0Block96.outputs[0].push({gate: TFlipFlopB0Block97, position: 0});
TFlipFlopB0Block97.outputs[1].push({gate: TFlipFlopB0Block96, position: 1});
TFlipFlopB0Block90.outputs[0].push({gate: TFlipFlopB0Block97, position: 1});
TFlipFlopB0Block97.outputs[0].push({gate: TFlipFlopB0Block90, position: 1});
let TFlipFlopB0Block98Rotation0 = rotatePointOrigin({x: 133, y: 28}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block98Rotation1 = rotatePointOrigin({x: 43, y: 38}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block98 = new lineSegment({x: TFlipFlopB0Block98Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block98Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block98Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block98Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block98",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block98);
TFlipFlopB0Block92.outputs[0].push({gate: TFlipFlopB0Block98, position: 0});
TFlipFlopB0Block98.outputs[1].push({gate: TFlipFlopB0Block92, position: 1});
TFlipFlopB0Block94.outputs[0].push({gate: TFlipFlopB0Block98, position: 1});
TFlipFlopB0Block98.outputs[0].push({gate: TFlipFlopB0Block94, position: 1});
let TFlipFlopB0Block99Rotation0 = rotatePointOrigin({x: 133, y: 53}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block99Rotation1 = rotatePointOrigin({x: 133, y: 51}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block99 = new lineSegment({x: TFlipFlopB0Block99Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block99Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block99Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block99Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block99",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block99);
TFlipFlopB0Block89.outputs[0].push({gate: TFlipFlopB0Block99, position: 0});
TFlipFlopB0Block99.outputs[1].push({gate: TFlipFlopB0Block89, position: 1});
TFlipFlopB0Block90.outputs[1].push({gate: TFlipFlopB0Block99, position: 0});
TFlipFlopB0Block99.outputs[1].push({gate: TFlipFlopB0Block90, position: 0});
let TFlipFlopB0Block100Rotation0 = rotatePointOrigin({x: 133, y: 51}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block100Rotation1 = rotatePointOrigin({x: 148, y: 51}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block100 = new lineSegment({x: TFlipFlopB0Block100Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block100Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block100Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block100Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block100",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block100);
TFlipFlopB0Block99.outputs[0].push({gate: TFlipFlopB0Block100, position: 0});
TFlipFlopB0Block100.outputs[1].push({gate: TFlipFlopB0Block99, position: 1});
TFlipFlopB0Block100.outputs[0].push({gate: TFlipFlopB0Block17, position: 1});
TFlipFlopB0Block100.outputs[1].push({gate: TFlipFlopB0Block17, position: 1});
let TFlipFlopB0Block101Rotation0 = rotatePointOrigin({x: 67, y: 93}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block101Rotation1 = rotatePointOrigin({x: 67, y: 96}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block101 = new lineSegment({x: TFlipFlopB0Block101Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block101Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block101Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block101Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block101",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block101);
TFlipFlopB0Block10.outputs[0].push({gate: TFlipFlopB0Block101, position: 0});
TFlipFlopB0Block10.outputs[1].push({gate: TFlipFlopB0Block101, position: 0});
let TFlipFlopB0Block102Rotation0 = rotatePointOrigin({x: 67, y: 96}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block102Rotation1 = rotatePointOrigin({x: 78, y: 96}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block102 = new lineSegment({x: TFlipFlopB0Block102Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block102Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block102Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block102Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block102",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block102);
TFlipFlopB0Block101.outputs[0].push({gate: TFlipFlopB0Block102, position: 0});
TFlipFlopB0Block102.outputs[1].push({gate: TFlipFlopB0Block101, position: 1});
TFlipFlopB0Block102.outputs[0].push({gate: TFlipFlopB0Block12, position: 0});
TFlipFlopB0Block102.outputs[1].push({gate: TFlipFlopB0Block12, position: 0});
let TFlipFlopB0Block103Rotation0 = rotatePointOrigin({x: 78, y: 91}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block103Rotation1 = rotatePointOrigin({x: 73, y: 91}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block103 = new lineSegment({x: TFlipFlopB0Block103Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block103Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block103Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block103Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block103",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block103);
TFlipFlopB0Block103.outputs[0].push({gate: TFlipFlopB0Block12, position: 1});
TFlipFlopB0Block103.outputs[1].push({gate: TFlipFlopB0Block12, position: 1});
let TFlipFlopB0Block104Rotation0 = rotatePointOrigin({x: 73, y: 91}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block104Rotation1 = rotatePointOrigin({x: 73, y: 78}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block104 = new lineSegment({x: TFlipFlopB0Block104Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block104Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block104Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block104Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block104",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block104);
TFlipFlopB0Block103.outputs[0].push({gate: TFlipFlopB0Block104, position: 0});
TFlipFlopB0Block104.outputs[1].push({gate: TFlipFlopB0Block103, position: 1});
let TFlipFlopB0Block105Rotation0 = rotatePointOrigin({x: 133, y: 53}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block105Rotation1 = rotatePointOrigin({x: 133, y: 68}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block105 = new lineSegment({x: TFlipFlopB0Block105Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block105Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block105Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block105Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block105",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block105);
TFlipFlopB0Block89.outputs[0].push({gate: TFlipFlopB0Block105, position: 0});
TFlipFlopB0Block105.outputs[1].push({gate: TFlipFlopB0Block89, position: 1});
TFlipFlopB0Block90.outputs[1].push({gate: TFlipFlopB0Block105, position: 0});
TFlipFlopB0Block105.outputs[1].push({gate: TFlipFlopB0Block90, position: 0});
TFlipFlopB0Block99.outputs[1].push({gate: TFlipFlopB0Block105, position: 0});
TFlipFlopB0Block105.outputs[1].push({gate: TFlipFlopB0Block99, position: 0});
let TFlipFlopB0Block106Rotation0 = rotatePointOrigin({x: 133, y: 68}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block106Rotation1 = rotatePointOrigin({x: 73, y: 78}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block106 = new lineSegment({x: TFlipFlopB0Block106Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block106Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block106Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block106Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block106",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block106);
TFlipFlopB0Block105.outputs[0].push({gate: TFlipFlopB0Block106, position: 0});
TFlipFlopB0Block106.outputs[1].push({gate: TFlipFlopB0Block105, position: 1});
TFlipFlopB0Block104.outputs[0].push({gate: TFlipFlopB0Block106, position: 1});
TFlipFlopB0Block106.outputs[0].push({gate: TFlipFlopB0Block104, position: 1});
let TFlipFlopB0Block107Rotation0 = rotatePointOrigin({x: 243, y: 53}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block107Rotation1 = rotatePointOrigin({x: 263, y: 53}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block107 = new lineSegment({x: TFlipFlopB0Block107Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block107Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block107Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block107Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block107",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block107);
TFlipFlopB0Block59.outputs[0].push({gate: TFlipFlopB0Block107, position: 0});
TFlipFlopB0Block107.outputs[1].push({gate: TFlipFlopB0Block59, position: 1});
TFlipFlopB0Block60.outputs[1].push({gate: TFlipFlopB0Block107, position: 0});
TFlipFlopB0Block107.outputs[1].push({gate: TFlipFlopB0Block60, position: 0});
TFlipFlopB0Block70.outputs[1].push({gate: TFlipFlopB0Block107, position: 0});
TFlipFlopB0Block107.outputs[1].push({gate: TFlipFlopB0Block70, position: 0});
let TFlipFlopB0Block108Rotation0 = rotatePointOrigin({x: 253, y: 93}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block108Rotation1 = rotatePointOrigin({x: 263, y: 93}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block108 = new lineSegment({x: TFlipFlopB0Block108Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block108Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block108Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block108Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block108",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block108);
TFlipFlopB0Block68.outputs[0].push({gate: TFlipFlopB0Block108, position: 0});
TFlipFlopB0Block108.outputs[1].push({gate: TFlipFlopB0Block68, position: 1});
TFlipFlopB0Block69.outputs[1].push({gate: TFlipFlopB0Block108, position: 0});
TFlipFlopB0Block108.outputs[1].push({gate: TFlipFlopB0Block69, position: 0});
let TFlipFlopB0Block109Rotation0 = rotatePointOrigin({x: -10, y: 23}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block109Rotation1 = rotatePointOrigin({x: -10, y: -22}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block109 = new lineSegment({x: TFlipFlopB0Block109Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block109Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block109Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block109Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block109",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block109);
TFlipFlopB0Block109.outputs[0].push({gate: TFlipFlopB0Block2, position: 1});
TFlipFlopB0Block109.outputs[1].push({gate: TFlipFlopB0Block2, position: 1});
let TFlipFlopB0Block110Rotation0 = rotatePointOrigin({x: -1, y: -6}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block110Rotation1 = rotatePointOrigin({x: -1, y: -22}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block110 = new lineSegment({x: TFlipFlopB0Block110Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block110Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block110Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block110Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block110",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block110);
TFlipFlopB0Block110.outputs[0].push({gate: TFlipFlopB0Block1, position: 0});
TFlipFlopB0Block110.outputs[1].push({gate: TFlipFlopB0Block1, position: 0});
let TFlipFlopB0Block111Rotation0 = rotatePointOrigin({x: -1, y: -22}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block111Rotation1 = rotatePointOrigin({x: -10, y: -22}, TFlipFlopB0Block.rotation);
let TFlipFlopB0Block111 = new lineSegment({x: TFlipFlopB0Block111Rotation0.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block111Rotation0.y + TFlipFlopB0Block.y}, {x: TFlipFlopB0Block111Rotation1.x + TFlipFlopB0Block.x, y: TFlipFlopB0Block111Rotation1.y + TFlipFlopB0Block.y}, "TFlipFlopB0Block111",[[],[]], TFlipFlopB0BlockMask);
globalGates.push(TFlipFlopB0Block111);
TFlipFlopB0Block110.outputs[0].push({gate: TFlipFlopB0Block111, position: 0});
TFlipFlopB0Block111.outputs[1].push({gate: TFlipFlopB0Block110, position: 1});
TFlipFlopB0Block109.outputs[0].push({gate: TFlipFlopB0Block111, position: 1});
TFlipFlopB0Block111.outputs[0].push({gate: TFlipFlopB0Block109, position: 1});    
    
//TFlipFlopB1Block
let TFlipFlopB1Block = {x: 630, y: 100, rotation: 0, name: "TFlipFlopB1Block"};
let TFlipFlopB1BlockMask = new maskGate({x: TFlipFlopB1Block.x -20 , y: TFlipFlopB1Block.y-20}, {x: TFlipFlopB1Block.x+260, y: TFlipFlopB1Block.y+150}, "TFlipFlopB1Block", null);
globalGates.push(TFlipFlopB1BlockMask);
let TFlipFlopB1Block1Rotation = rotatePointOrigin({x: -1.5, y: 3.5}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block1 = new notGate(TFlipFlopB1Block.x - 9.5 + TFlipFlopB1Block1Rotation.x, TFlipFlopB1Block.y - 9.5 + TFlipFlopB1Block1Rotation.y, TFlipFlopB1Block.rotation + 0, "TFlipFlopB1Block1",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block1);
let TFlipFlopB1Block2Rotation = rotatePointOrigin({x: -12, y: 33}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block2 = new andGate(TFlipFlopB1Block.x - 10 + TFlipFlopB1Block2Rotation.x, TFlipFlopB1Block.y - 10 + TFlipFlopB1Block2Rotation.y, TFlipFlopB1Block.rotation + 0, "TFlipFlopB1Block2",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block2);
let TFlipFlopB1Block3Rotation = rotatePointOrigin({x: 8, y: 33}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block3 = new andGate(TFlipFlopB1Block.x - 10 + TFlipFlopB1Block3Rotation.x, TFlipFlopB1Block.y - 10 + TFlipFlopB1Block3Rotation.y, TFlipFlopB1Block.rotation + 0, "TFlipFlopB1Block3",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block3);
let TFlipFlopB1Block4Rotation = rotatePointOrigin({x: -11.5, y: 63.5}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block4 = new notGate(TFlipFlopB1Block.x - 9.5 + TFlipFlopB1Block4Rotation.x, TFlipFlopB1Block.y - 9.5 + TFlipFlopB1Block4Rotation.y, TFlipFlopB1Block.rotation + 0, "TFlipFlopB1Block4",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block4);
let TFlipFlopB1Block5Rotation = rotatePointOrigin({x: 8.5, y: 63.5}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block5 = new notGate(TFlipFlopB1Block.x - 9.5 + TFlipFlopB1Block5Rotation.x, TFlipFlopB1Block.y - 9.5 + TFlipFlopB1Block5Rotation.y, TFlipFlopB1Block.rotation + 0, "TFlipFlopB1Block5",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block5);
let TFlipFlopB1Block6Rotation = rotatePointOrigin({x: -2, y: 93}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block6 = new andGate(TFlipFlopB1Block.x - 10 + TFlipFlopB1Block6Rotation.x, TFlipFlopB1Block.y - 10 + TFlipFlopB1Block6Rotation.y, TFlipFlopB1Block.rotation + 0, "TFlipFlopB1Block6",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block6);
let TFlipFlopB1Block7Rotation = rotatePointOrigin({x: -1.5, y: 123.5}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block7 = new notGate(TFlipFlopB1Block.x - 9.5 + TFlipFlopB1Block7Rotation.x, TFlipFlopB1Block.y - 9.5 + TFlipFlopB1Block7Rotation.y, TFlipFlopB1Block.rotation + 0, "TFlipFlopB1Block7",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block7);
let TFlipFlopB1Block8Rotation = rotatePointOrigin({x: 58, y: 13}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block8 = new andGate(TFlipFlopB1Block.x - 10 + TFlipFlopB1Block8Rotation.x, TFlipFlopB1Block.y - 10 + TFlipFlopB1Block8Rotation.y, TFlipFlopB1Block.rotation + 270, "TFlipFlopB1Block8",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block8);
let TFlipFlopB1Block9Rotation = rotatePointOrigin({x: 58, y: 53}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block9 = new andGate(TFlipFlopB1Block.x - 10 + TFlipFlopB1Block9Rotation.x, TFlipFlopB1Block.y - 10 + TFlipFlopB1Block9Rotation.y, TFlipFlopB1Block.rotation + 270, "TFlipFlopB1Block9",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block9);
let TFlipFlopB1Block10Rotation = rotatePointOrigin({x: 58, y: 93}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block10 = new andGate(TFlipFlopB1Block.x - 10 + TFlipFlopB1Block10Rotation.x, TFlipFlopB1Block.y - 10 + TFlipFlopB1Block10Rotation.y, TFlipFlopB1Block.rotation + 270, "TFlipFlopB1Block10",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block10);
let TFlipFlopB1Block11Rotation = rotatePointOrigin({x: 58, y: 133}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block11 = new andGate(TFlipFlopB1Block.x - 10 + TFlipFlopB1Block11Rotation.x, TFlipFlopB1Block.y - 10 + TFlipFlopB1Block11Rotation.y, TFlipFlopB1Block.rotation + 270, "TFlipFlopB1Block11",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block11);
let TFlipFlopB1Block12Rotation = rotatePointOrigin({x: 88, y: 93}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block12 = new andGate(TFlipFlopB1Block.x - 10 + TFlipFlopB1Block12Rotation.x, TFlipFlopB1Block.y - 10 + TFlipFlopB1Block12Rotation.y, TFlipFlopB1Block.rotation + 270, "TFlipFlopB1Block12",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block12);
let TFlipFlopB1Block13Rotation = rotatePointOrigin({x: 118.5, y: 93.5}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block13 = new notGate(TFlipFlopB1Block.x - 9.5 + TFlipFlopB1Block13Rotation.x, TFlipFlopB1Block.y - 9.5 + TFlipFlopB1Block13Rotation.y, TFlipFlopB1Block.rotation + 270, "TFlipFlopB1Block13",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block13);
let TFlipFlopB1Block14Rotation = rotatePointOrigin({x: 118.5, y: 133.5}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block14 = new notGate(TFlipFlopB1Block.x - 9.5 + TFlipFlopB1Block14Rotation.x, TFlipFlopB1Block.y - 9.5 + TFlipFlopB1Block14Rotation.y, TFlipFlopB1Block.rotation + 270, "TFlipFlopB1Block14",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block14);
let TFlipFlopB1Block15Rotation = rotatePointOrigin({x: 118.5, y: 53.5}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block15 = new notGate(TFlipFlopB1Block.x - 9.5 + TFlipFlopB1Block15Rotation.x, TFlipFlopB1Block.y - 9.5 + TFlipFlopB1Block15Rotation.y, TFlipFlopB1Block.rotation + 270, "TFlipFlopB1Block15",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block15);
let TFlipFlopB1Block16Rotation = rotatePointOrigin({x: 118.5, y: 13.5}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block16 = new notGate(TFlipFlopB1Block.x - 9.5 + TFlipFlopB1Block16Rotation.x, TFlipFlopB1Block.y - 9.5 + TFlipFlopB1Block16Rotation.y, TFlipFlopB1Block.rotation + 270, "TFlipFlopB1Block16",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block16);
let TFlipFlopB1Block17Rotation = rotatePointOrigin({x: 158, y: 53}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block17 = new andGate(TFlipFlopB1Block.x - 10 + TFlipFlopB1Block17Rotation.x, TFlipFlopB1Block.y - 10 + TFlipFlopB1Block17Rotation.y, TFlipFlopB1Block.rotation + 270, "TFlipFlopB1Block17",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block17);
let TFlipFlopB1Block18Rotation = rotatePointOrigin({x: 158, y: 93}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block18 = new andGate(TFlipFlopB1Block.x - 10 + TFlipFlopB1Block18Rotation.x, TFlipFlopB1Block.y - 10 + TFlipFlopB1Block18Rotation.y, TFlipFlopB1Block.rotation + 270, "TFlipFlopB1Block18",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block18);
let TFlipFlopB1Block19Rotation = rotatePointOrigin({x: 198, y: 53}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block19 = new orGate(TFlipFlopB1Block.x - 10 + TFlipFlopB1Block19Rotation.x, TFlipFlopB1Block.y - 10 + TFlipFlopB1Block19Rotation.y, TFlipFlopB1Block.rotation + 270, "TFlipFlopB1Block19",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block19);
let TFlipFlopB1Block20Rotation = rotatePointOrigin({x: 198, y: 93}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block20 = new orGate(TFlipFlopB1Block.x - 10 + TFlipFlopB1Block20Rotation.x, TFlipFlopB1Block.y - 10 + TFlipFlopB1Block20Rotation.y, TFlipFlopB1Block.rotation + 270, "TFlipFlopB1Block20",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block20);
let TFlipFlopB1Block21Rotation = rotatePointOrigin({x: 228.5, y: 53.5}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block21 = new notGate(TFlipFlopB1Block.x - 9.5 + TFlipFlopB1Block21Rotation.x, TFlipFlopB1Block.y - 9.5 + TFlipFlopB1Block21Rotation.y, TFlipFlopB1Block.rotation + 270, "TFlipFlopB1Block21",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block21);
let TFlipFlopB1Block22Rotation = rotatePointOrigin({x: 228.5, y: 93.5}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block22 = new notGate(TFlipFlopB1Block.x - 9.5 + TFlipFlopB1Block22Rotation.x, TFlipFlopB1Block.y - 9.5 + TFlipFlopB1Block22Rotation.y, TFlipFlopB1Block.rotation + 270, "TFlipFlopB1Block22",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block22);
let TFlipFlopB1Block23Rotation0 = rotatePointOrigin({x: 207, y: 53}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block23Rotation1 = rotatePointOrigin({x: 219, y: 53}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block23 = new lineSegment({x: TFlipFlopB1Block23Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block23Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block23Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block23Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block23",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block23);
TFlipFlopB1Block19.outputs[0].push({gate: TFlipFlopB1Block23, position: 0});
TFlipFlopB1Block19.outputs[1].push({gate: TFlipFlopB1Block23, position: 0});
TFlipFlopB1Block23.outputs[0].push({gate: TFlipFlopB1Block21, position: 0});
TFlipFlopB1Block23.outputs[1].push({gate: TFlipFlopB1Block21, position: 0});
let TFlipFlopB1Block24Rotation0 = rotatePointOrigin({x: 207, y: 93}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block24Rotation1 = rotatePointOrigin({x: 219, y: 93}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block24 = new lineSegment({x: TFlipFlopB1Block24Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block24Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block24Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block24Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block24",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block24);
TFlipFlopB1Block20.outputs[0].push({gate: TFlipFlopB1Block24, position: 0});
TFlipFlopB1Block20.outputs[1].push({gate: TFlipFlopB1Block24, position: 0});
TFlipFlopB1Block24.outputs[0].push({gate: TFlipFlopB1Block22, position: 0});
TFlipFlopB1Block24.outputs[1].push({gate: TFlipFlopB1Block22, position: 0});
let TFlipFlopB1Block25Rotation0 = rotatePointOrigin({x: 67, y: 133}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block25Rotation1 = rotatePointOrigin({x: 109, y: 133}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block25 = new lineSegment({x: TFlipFlopB1Block25Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block25Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block25Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block25Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block25",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block25);
TFlipFlopB1Block11.outputs[0].push({gate: TFlipFlopB1Block25, position: 0});
TFlipFlopB1Block11.outputs[1].push({gate: TFlipFlopB1Block25, position: 0});
TFlipFlopB1Block25.outputs[0].push({gate: TFlipFlopB1Block14, position: 0});
TFlipFlopB1Block25.outputs[1].push({gate: TFlipFlopB1Block14, position: 0});
let TFlipFlopB1Block26Rotation0 = rotatePointOrigin({x: 97, y: 93}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block26Rotation1 = rotatePointOrigin({x: 109, y: 93}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block26 = new lineSegment({x: TFlipFlopB1Block26Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block26Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block26Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block26Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block26",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block26);
TFlipFlopB1Block12.outputs[0].push({gate: TFlipFlopB1Block26, position: 0});
TFlipFlopB1Block12.outputs[1].push({gate: TFlipFlopB1Block26, position: 0});
TFlipFlopB1Block26.outputs[0].push({gate: TFlipFlopB1Block13, position: 0});
TFlipFlopB1Block26.outputs[1].push({gate: TFlipFlopB1Block13, position: 0});
let TFlipFlopB1Block27Rotation0 = rotatePointOrigin({x: 67, y: 53}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block27Rotation1 = rotatePointOrigin({x: 109, y: 53}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block27 = new lineSegment({x: TFlipFlopB1Block27Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block27Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block27Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block27Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block27",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block27);
TFlipFlopB1Block9.outputs[0].push({gate: TFlipFlopB1Block27, position: 0});
TFlipFlopB1Block9.outputs[1].push({gate: TFlipFlopB1Block27, position: 0});
TFlipFlopB1Block27.outputs[0].push({gate: TFlipFlopB1Block15, position: 0});
TFlipFlopB1Block27.outputs[1].push({gate: TFlipFlopB1Block15, position: 0});
let TFlipFlopB1Block28Rotation0 = rotatePointOrigin({x: 67, y: 13}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block28Rotation1 = rotatePointOrigin({x: 109, y: 13}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block28 = new lineSegment({x: TFlipFlopB1Block28Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block28Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block28Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block28Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block28",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block28);
TFlipFlopB1Block8.outputs[0].push({gate: TFlipFlopB1Block28, position: 0});
TFlipFlopB1Block8.outputs[1].push({gate: TFlipFlopB1Block28, position: 0});
TFlipFlopB1Block28.outputs[0].push({gate: TFlipFlopB1Block16, position: 0});
TFlipFlopB1Block28.outputs[1].push({gate: TFlipFlopB1Block16, position: 0});
let TFlipFlopB1Block29Rotation0 = rotatePointOrigin({x: -2, y: 102}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block29Rotation1 = rotatePointOrigin({x: -2, y: 114}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block29 = new lineSegment({x: TFlipFlopB1Block29Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block29Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block29Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block29Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block29",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block29);
TFlipFlopB1Block6.outputs[0].push({gate: TFlipFlopB1Block29, position: 0});
TFlipFlopB1Block6.outputs[1].push({gate: TFlipFlopB1Block29, position: 0});
let TFlipFlopB1Block30Rotation0 = rotatePointOrigin({x: -2, y: 114}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block30Rotation1 = rotatePointOrigin({x: -1, y: 114}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block30 = new lineSegment({x: TFlipFlopB1Block30Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block30Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block30Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block30Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block30",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block30);
TFlipFlopB1Block29.outputs[0].push({gate: TFlipFlopB1Block30, position: 0});
TFlipFlopB1Block30.outputs[1].push({gate: TFlipFlopB1Block29, position: 1});
TFlipFlopB1Block30.outputs[0].push({gate: TFlipFlopB1Block7, position: 0});
TFlipFlopB1Block30.outputs[1].push({gate: TFlipFlopB1Block7, position: 0});
let TFlipFlopB1Block31Rotation0 = rotatePointOrigin({x: -11, y: 74}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block31Rotation1 = rotatePointOrigin({x: -5, y: 74}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block31 = new lineSegment({x: TFlipFlopB1Block31Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block31Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block31Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block31Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block31",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block31);
TFlipFlopB1Block4.outputs[0].push({gate: TFlipFlopB1Block31, position: 0});
TFlipFlopB1Block4.outputs[1].push({gate: TFlipFlopB1Block31, position: 0});
let TFlipFlopB1Block32Rotation0 = rotatePointOrigin({x: -5, y: 74}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block32Rotation1 = rotatePointOrigin({x: -5, y: 83}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block32 = new lineSegment({x: TFlipFlopB1Block32Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block32Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block32Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block32Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block32",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block32);
TFlipFlopB1Block31.outputs[0].push({gate: TFlipFlopB1Block32, position: 0});
TFlipFlopB1Block32.outputs[1].push({gate: TFlipFlopB1Block31, position: 1});
TFlipFlopB1Block32.outputs[0].push({gate: TFlipFlopB1Block6, position: 0});
TFlipFlopB1Block32.outputs[1].push({gate: TFlipFlopB1Block6, position: 0});
let TFlipFlopB1Block33Rotation0 = rotatePointOrigin({x: 9, y: 74}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block33Rotation1 = rotatePointOrigin({x: 0, y: 74}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block33 = new lineSegment({x: TFlipFlopB1Block33Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block33Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block33Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block33Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block33",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block33);
TFlipFlopB1Block5.outputs[0].push({gate: TFlipFlopB1Block33, position: 0});
TFlipFlopB1Block5.outputs[1].push({gate: TFlipFlopB1Block33, position: 0});
let TFlipFlopB1Block34Rotation0 = rotatePointOrigin({x: 0, y: 74}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block34Rotation1 = rotatePointOrigin({x: 0, y: 83}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block34 = new lineSegment({x: TFlipFlopB1Block34Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block34Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block34Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block34Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block34",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block34);
TFlipFlopB1Block33.outputs[0].push({gate: TFlipFlopB1Block34, position: 0});
TFlipFlopB1Block34.outputs[1].push({gate: TFlipFlopB1Block33, position: 1});
TFlipFlopB1Block34.outputs[0].push({gate: TFlipFlopB1Block6, position: 1});
TFlipFlopB1Block34.outputs[1].push({gate: TFlipFlopB1Block6, position: 1});
let TFlipFlopB1Block35Rotation0 = rotatePointOrigin({x: -12, y: 42}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block35Rotation1 = rotatePointOrigin({x: -12, y: 54}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block35 = new lineSegment({x: TFlipFlopB1Block35Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block35Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block35Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block35Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block35",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block35);
TFlipFlopB1Block2.outputs[0].push({gate: TFlipFlopB1Block35, position: 0});
TFlipFlopB1Block2.outputs[1].push({gate: TFlipFlopB1Block35, position: 0});
let TFlipFlopB1Block36Rotation0 = rotatePointOrigin({x: -12, y: 54}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block36Rotation1 = rotatePointOrigin({x: -11, y: 54}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block36 = new lineSegment({x: TFlipFlopB1Block36Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block36Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block36Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block36Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block36",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block36);
TFlipFlopB1Block35.outputs[0].push({gate: TFlipFlopB1Block36, position: 0});
TFlipFlopB1Block36.outputs[1].push({gate: TFlipFlopB1Block35, position: 1});
TFlipFlopB1Block36.outputs[0].push({gate: TFlipFlopB1Block4, position: 0});
TFlipFlopB1Block36.outputs[1].push({gate: TFlipFlopB1Block4, position: 0});
let TFlipFlopB1Block37Rotation0 = rotatePointOrigin({x: 8, y: 42}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block37Rotation1 = rotatePointOrigin({x: 8, y: 54}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block37 = new lineSegment({x: TFlipFlopB1Block37Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block37Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block37Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block37Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block37",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block37);
TFlipFlopB1Block3.outputs[0].push({gate: TFlipFlopB1Block37, position: 0});
TFlipFlopB1Block3.outputs[1].push({gate: TFlipFlopB1Block37, position: 0});
let TFlipFlopB1Block38Rotation0 = rotatePointOrigin({x: 8, y: 54}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block38Rotation1 = rotatePointOrigin({x: 9, y: 54}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block38 = new lineSegment({x: TFlipFlopB1Block38Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block38Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block38Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block38Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block38",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block38);
TFlipFlopB1Block37.outputs[0].push({gate: TFlipFlopB1Block38, position: 0});
TFlipFlopB1Block38.outputs[1].push({gate: TFlipFlopB1Block37, position: 1});
TFlipFlopB1Block38.outputs[0].push({gate: TFlipFlopB1Block5, position: 0});
TFlipFlopB1Block38.outputs[1].push({gate: TFlipFlopB1Block5, position: 0});
let TFlipFlopB1Block39Rotation0 = rotatePointOrigin({x: -1, y: 14}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block39Rotation1 = rotatePointOrigin({x: 5, y: 14}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block39 = new lineSegment({x: TFlipFlopB1Block39Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block39Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block39Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block39Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block39",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block39);
TFlipFlopB1Block1.outputs[0].push({gate: TFlipFlopB1Block39, position: 0});
TFlipFlopB1Block1.outputs[1].push({gate: TFlipFlopB1Block39, position: 0});
let TFlipFlopB1Block40Rotation0 = rotatePointOrigin({x: 5, y: 14}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block40Rotation1 = rotatePointOrigin({x: 5, y: 23}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block40 = new lineSegment({x: TFlipFlopB1Block40Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block40Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block40Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block40Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block40",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block40);
TFlipFlopB1Block39.outputs[0].push({gate: TFlipFlopB1Block40, position: 0});
TFlipFlopB1Block40.outputs[1].push({gate: TFlipFlopB1Block39, position: 1});
TFlipFlopB1Block40.outputs[0].push({gate: TFlipFlopB1Block3, position: 0});
TFlipFlopB1Block40.outputs[1].push({gate: TFlipFlopB1Block3, position: 0});
let TFlipFlopB1Block41Rotation0 = rotatePointOrigin({x: 129, y: 93}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block41Rotation1 = rotatePointOrigin({x: 133, y: 93}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block41 = new lineSegment({x: TFlipFlopB1Block41Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block41Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block41Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block41Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block41",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block41);
TFlipFlopB1Block13.outputs[0].push({gate: TFlipFlopB1Block41, position: 0});
TFlipFlopB1Block13.outputs[1].push({gate: TFlipFlopB1Block41, position: 0});
let TFlipFlopB1Block42Rotation0 = rotatePointOrigin({x: 133, y: 93}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block42Rotation1 = rotatePointOrigin({x: 133, y: 98}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block42 = new lineSegment({x: TFlipFlopB1Block42Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block42Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block42Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block42Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block42",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block42);
TFlipFlopB1Block41.outputs[0].push({gate: TFlipFlopB1Block42, position: 0});
TFlipFlopB1Block42.outputs[1].push({gate: TFlipFlopB1Block41, position: 1});
let TFlipFlopB1Block43Rotation0 = rotatePointOrigin({x: 133, y: 98}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block43Rotation1 = rotatePointOrigin({x: 133, y: 96}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block43 = new lineSegment({x: TFlipFlopB1Block43Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block43Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block43Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block43Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block43",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block43);
TFlipFlopB1Block42.outputs[0].push({gate: TFlipFlopB1Block43, position: 0});
TFlipFlopB1Block43.outputs[1].push({gate: TFlipFlopB1Block42, position: 1});
let TFlipFlopB1Block44Rotation0 = rotatePointOrigin({x: 133, y: 96}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block44Rotation1 = rotatePointOrigin({x: 148, y: 96}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block44 = new lineSegment({x: TFlipFlopB1Block44Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block44Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block44Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block44Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block44",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block44);
TFlipFlopB1Block43.outputs[0].push({gate: TFlipFlopB1Block44, position: 0});
TFlipFlopB1Block44.outputs[1].push({gate: TFlipFlopB1Block43, position: 1});
TFlipFlopB1Block44.outputs[0].push({gate: TFlipFlopB1Block18, position: 0});
TFlipFlopB1Block44.outputs[1].push({gate: TFlipFlopB1Block18, position: 0});
let TFlipFlopB1Block45Rotation0 = rotatePointOrigin({x: 133, y: 98}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block45Rotation1 = rotatePointOrigin({x: 133, y: 108}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block45 = new lineSegment({x: TFlipFlopB1Block45Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block45Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block45Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block45Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block45",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block45);
TFlipFlopB1Block42.outputs[0].push({gate: TFlipFlopB1Block45, position: 0});
TFlipFlopB1Block45.outputs[1].push({gate: TFlipFlopB1Block42, position: 1});
TFlipFlopB1Block43.outputs[1].push({gate: TFlipFlopB1Block45, position: 0});
TFlipFlopB1Block45.outputs[1].push({gate: TFlipFlopB1Block43, position: 0});
let TFlipFlopB1Block46Rotation0 = rotatePointOrigin({x: 129, y: 133}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block46Rotation1 = rotatePointOrigin({x: 133, y: 133}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block46 = new lineSegment({x: TFlipFlopB1Block46Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block46Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block46Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block46Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block46",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block46);
TFlipFlopB1Block14.outputs[0].push({gate: TFlipFlopB1Block46, position: 0});
TFlipFlopB1Block14.outputs[1].push({gate: TFlipFlopB1Block46, position: 0});
let TFlipFlopB1Block47Rotation0 = rotatePointOrigin({x: 133, y: 133}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block47Rotation1 = rotatePointOrigin({x: 133, y: 118}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block47 = new lineSegment({x: TFlipFlopB1Block47Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block47Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block47Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block47Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block47",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block47);
TFlipFlopB1Block46.outputs[0].push({gate: TFlipFlopB1Block47, position: 0});
TFlipFlopB1Block47.outputs[1].push({gate: TFlipFlopB1Block46, position: 1});
let TFlipFlopB1Block48Rotation0 = rotatePointOrigin({x: 48, y: 131}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block48Rotation1 = rotatePointOrigin({x: 43, y: 131}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block48 = new lineSegment({x: TFlipFlopB1Block48Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block48Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block48Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block48Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block48",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block48);
TFlipFlopB1Block48.outputs[0].push({gate: TFlipFlopB1Block11, position: 1});
TFlipFlopB1Block48.outputs[1].push({gate: TFlipFlopB1Block11, position: 1});
let TFlipFlopB1Block49Rotation0 = rotatePointOrigin({x: 43, y: 131}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block49Rotation1 = rotatePointOrigin({x: 43, y: 118}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block49 = new lineSegment({x: TFlipFlopB1Block49Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block49Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block49Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block49Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block49",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block49);
TFlipFlopB1Block48.outputs[0].push({gate: TFlipFlopB1Block49, position: 0});
TFlipFlopB1Block49.outputs[1].push({gate: TFlipFlopB1Block48, position: 1});
let TFlipFlopB1Block50Rotation0 = rotatePointOrigin({x: 48, y: 96}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block50Rotation1 = rotatePointOrigin({x: 43, y: 96}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block50 = new lineSegment({x: TFlipFlopB1Block50Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block50Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block50Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block50Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block50",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block50);
TFlipFlopB1Block50.outputs[0].push({gate: TFlipFlopB1Block10, position: 0});
TFlipFlopB1Block50.outputs[1].push({gate: TFlipFlopB1Block10, position: 0});
let TFlipFlopB1Block51Rotation0 = rotatePointOrigin({x: 43, y: 96}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block51Rotation1 = rotatePointOrigin({x: 43, y: 108}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block51 = new lineSegment({x: TFlipFlopB1Block51Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block51Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block51Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block51Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block51",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block51);
TFlipFlopB1Block50.outputs[0].push({gate: TFlipFlopB1Block51, position: 0});
TFlipFlopB1Block51.outputs[1].push({gate: TFlipFlopB1Block50, position: 1});
let TFlipFlopB1Block52Rotation0 = rotatePointOrigin({x: 43, y: 108}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block52Rotation1 = rotatePointOrigin({x: 133, y: 118}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block52 = new lineSegment({x: TFlipFlopB1Block52Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block52Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block52Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block52Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block52",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block52);
TFlipFlopB1Block51.outputs[0].push({gate: TFlipFlopB1Block52, position: 0});
TFlipFlopB1Block52.outputs[1].push({gate: TFlipFlopB1Block51, position: 1});
TFlipFlopB1Block47.outputs[0].push({gate: TFlipFlopB1Block52, position: 1});
TFlipFlopB1Block52.outputs[0].push({gate: TFlipFlopB1Block47, position: 1});
let TFlipFlopB1Block53Rotation0 = rotatePointOrigin({x: 43, y: 118}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block53Rotation1 = rotatePointOrigin({x: 133, y: 108}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block53 = new lineSegment({x: TFlipFlopB1Block53Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block53Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block53Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block53Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block53",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block53);
TFlipFlopB1Block49.outputs[0].push({gate: TFlipFlopB1Block53, position: 0});
TFlipFlopB1Block53.outputs[1].push({gate: TFlipFlopB1Block49, position: 1});
TFlipFlopB1Block45.outputs[0].push({gate: TFlipFlopB1Block53, position: 1});
TFlipFlopB1Block53.outputs[0].push({gate: TFlipFlopB1Block45, position: 1});
let TFlipFlopB1Block54Rotation0 = rotatePointOrigin({x: -1, y: 134}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block54Rotation1 = rotatePointOrigin({x: -1, y: 136}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block54 = new lineSegment({x: TFlipFlopB1Block54Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block54Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block54Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block54Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block54",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block54);
TFlipFlopB1Block7.outputs[0].push({gate: TFlipFlopB1Block54, position: 0});
TFlipFlopB1Block7.outputs[1].push({gate: TFlipFlopB1Block54, position: 0});
let TFlipFlopB1Block55Rotation0 = rotatePointOrigin({x: -1, y: 136}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block55Rotation1 = rotatePointOrigin({x: 48, y: 136}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block55 = new lineSegment({x: TFlipFlopB1Block55Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block55Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block55Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block55Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block55",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block55);
TFlipFlopB1Block54.outputs[0].push({gate: TFlipFlopB1Block55, position: 0});
TFlipFlopB1Block55.outputs[1].push({gate: TFlipFlopB1Block54, position: 1});
TFlipFlopB1Block55.outputs[0].push({gate: TFlipFlopB1Block11, position: 0});
TFlipFlopB1Block55.outputs[1].push({gate: TFlipFlopB1Block11, position: 0});
let TFlipFlopB1Block56Rotation0 = rotatePointOrigin({x: 48, y: 11}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block56Rotation1 = rotatePointOrigin({x: 33, y: 11}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block56 = new lineSegment({x: TFlipFlopB1Block56Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block56Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block56Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block56Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block56",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block56);
TFlipFlopB1Block56.outputs[0].push({gate: TFlipFlopB1Block8, position: 1});
TFlipFlopB1Block56.outputs[1].push({gate: TFlipFlopB1Block8, position: 1});
let TFlipFlopB1Block57Rotation0 = rotatePointOrigin({x: 43, y: 108}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block57Rotation1 = rotatePointOrigin({x: 33, y: 108}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block57 = new lineSegment({x: TFlipFlopB1Block57Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block57Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block57Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block57Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block57",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block57);
TFlipFlopB1Block51.outputs[0].push({gate: TFlipFlopB1Block57, position: 0});
TFlipFlopB1Block57.outputs[1].push({gate: TFlipFlopB1Block51, position: 1});
TFlipFlopB1Block52.outputs[1].push({gate: TFlipFlopB1Block57, position: 0});
TFlipFlopB1Block57.outputs[1].push({gate: TFlipFlopB1Block52, position: 0});
let TFlipFlopB1Block58Rotation0 = rotatePointOrigin({x: 33, y: 108}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block58Rotation1 = rotatePointOrigin({x: 33, y: 11}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block58 = new lineSegment({x: TFlipFlopB1Block58Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block58Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block58Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block58Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block58",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block58);
TFlipFlopB1Block57.outputs[0].push({gate: TFlipFlopB1Block58, position: 0});
TFlipFlopB1Block58.outputs[1].push({gate: TFlipFlopB1Block57, position: 1});
TFlipFlopB1Block56.outputs[0].push({gate: TFlipFlopB1Block58, position: 1});
TFlipFlopB1Block58.outputs[0].push({gate: TFlipFlopB1Block56, position: 1});
let TFlipFlopB1Block59Rotation0 = rotatePointOrigin({x: 239, y: 53}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block59Rotation1 = rotatePointOrigin({x: 243, y: 53}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block59 = new lineSegment({x: TFlipFlopB1Block59Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block59Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block59Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block59Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block59",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block59);
TFlipFlopB1Block21.outputs[0].push({gate: TFlipFlopB1Block59, position: 0});
TFlipFlopB1Block21.outputs[1].push({gate: TFlipFlopB1Block59, position: 0});
let TFlipFlopB1Block60Rotation0 = rotatePointOrigin({x: 243, y: 53}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block60Rotation1 = rotatePointOrigin({x: 243, y: 18}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block60 = new lineSegment({x: TFlipFlopB1Block60Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block60Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block60Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block60Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block60",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block60);
TFlipFlopB1Block59.outputs[0].push({gate: TFlipFlopB1Block60, position: 0});
TFlipFlopB1Block60.outputs[1].push({gate: TFlipFlopB1Block59, position: 1});
let TFlipFlopB1Block61Rotation0 = rotatePointOrigin({x: 10, y: 23}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block61Rotation1 = rotatePointOrigin({x: 10, y: -2}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block61 = new lineSegment({x: TFlipFlopB1Block61Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block61Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block61Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block61Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block61",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block61);
TFlipFlopB1Block61.outputs[0].push({gate: TFlipFlopB1Block3, position: 1});
TFlipFlopB1Block61.outputs[1].push({gate: TFlipFlopB1Block3, position: 1});
let TFlipFlopB1Block62Rotation0 = rotatePointOrigin({x: 10, y: -2}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block62Rotation1 = rotatePointOrigin({x: 243, y: -2}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block62 = new lineSegment({x: TFlipFlopB1Block62Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block62Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block62Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block62Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block62",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block62);
TFlipFlopB1Block61.outputs[0].push({gate: TFlipFlopB1Block62, position: 0});
TFlipFlopB1Block62.outputs[1].push({gate: TFlipFlopB1Block61, position: 1});
let TFlipFlopB1Block63Rotation0 = rotatePointOrigin({x: 243, y: 18}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block63Rotation1 = rotatePointOrigin({x: 243, y: -2}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block63 = new lineSegment({x: TFlipFlopB1Block63Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block63Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block63Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block63Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block63",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block63);
TFlipFlopB1Block60.outputs[0].push({gate: TFlipFlopB1Block63, position: 0});
TFlipFlopB1Block63.outputs[1].push({gate: TFlipFlopB1Block60, position: 1});
TFlipFlopB1Block62.outputs[0].push({gate: TFlipFlopB1Block63, position: 1});
TFlipFlopB1Block63.outputs[0].push({gate: TFlipFlopB1Block62, position: 1});
let TFlipFlopB1Block64Rotation0 = rotatePointOrigin({x: -15, y: 23}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block64Rotation1 = rotatePointOrigin({x: -15, y: -12}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block64 = new lineSegment({x: TFlipFlopB1Block64Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block64Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block64Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block64Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block64",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block64);
TFlipFlopB1Block64.outputs[0].push({gate: TFlipFlopB1Block2, position: 0});
TFlipFlopB1Block64.outputs[1].push({gate: TFlipFlopB1Block2, position: 0});
let TFlipFlopB1Block65Rotation0 = rotatePointOrigin({x: -15, y: -12}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block65Rotation1 = rotatePointOrigin({x: 253, y: -12}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block65 = new lineSegment({x: TFlipFlopB1Block65Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block65Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block65Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block65Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block65",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block65);
TFlipFlopB1Block64.outputs[0].push({gate: TFlipFlopB1Block65, position: 0});
TFlipFlopB1Block65.outputs[1].push({gate: TFlipFlopB1Block64, position: 1});
let TFlipFlopB1Block66Rotation0 = rotatePointOrigin({x: 239, y: 93}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block66Rotation1 = rotatePointOrigin({x: 243, y: 93}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block66 = new lineSegment({x: TFlipFlopB1Block66Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block66Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block66Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block66Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block66",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block66);
TFlipFlopB1Block22.outputs[0].push({gate: TFlipFlopB1Block66, position: 0});
TFlipFlopB1Block22.outputs[1].push({gate: TFlipFlopB1Block66, position: 0});
let TFlipFlopB1Block67Rotation0 = rotatePointOrigin({x: 243, y: 93}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block67Rotation1 = rotatePointOrigin({x: 243, y: 78}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block67 = new lineSegment({x: TFlipFlopB1Block67Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block67Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block67Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block67Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block67",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block67);
TFlipFlopB1Block66.outputs[0].push({gate: TFlipFlopB1Block67, position: 0});
TFlipFlopB1Block67.outputs[1].push({gate: TFlipFlopB1Block66, position: 1});
let TFlipFlopB1Block68Rotation0 = rotatePointOrigin({x: 243, y: 93}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block68Rotation1 = rotatePointOrigin({x: 253, y: 93}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block68 = new lineSegment({x: TFlipFlopB1Block68Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block68Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block68Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block68Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block68",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block68);
TFlipFlopB1Block66.outputs[0].push({gate: TFlipFlopB1Block68, position: 0});
TFlipFlopB1Block68.outputs[1].push({gate: TFlipFlopB1Block66, position: 1});
TFlipFlopB1Block67.outputs[1].push({gate: TFlipFlopB1Block68, position: 0});
TFlipFlopB1Block68.outputs[1].push({gate: TFlipFlopB1Block67, position: 0});
let TFlipFlopB1Block69Rotation0 = rotatePointOrigin({x: 253, y: 93}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block69Rotation1 = rotatePointOrigin({x: 253, y: -12}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block69 = new lineSegment({x: TFlipFlopB1Block69Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block69Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block69Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block69Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block69",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block69);
TFlipFlopB1Block68.outputs[0].push({gate: TFlipFlopB1Block69, position: 0});
TFlipFlopB1Block69.outputs[1].push({gate: TFlipFlopB1Block68, position: 1});
TFlipFlopB1Block65.outputs[0].push({gate: TFlipFlopB1Block69, position: 1});
TFlipFlopB1Block69.outputs[0].push({gate: TFlipFlopB1Block65, position: 1});
let TFlipFlopB1Block70Rotation0 = rotatePointOrigin({x: 243, y: 53}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block70Rotation1 = rotatePointOrigin({x: 243, y: 68}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block70 = new lineSegment({x: TFlipFlopB1Block70Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block70Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block70Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block70Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block70",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block70);
TFlipFlopB1Block59.outputs[0].push({gate: TFlipFlopB1Block70, position: 0});
TFlipFlopB1Block70.outputs[1].push({gate: TFlipFlopB1Block59, position: 1});
TFlipFlopB1Block60.outputs[1].push({gate: TFlipFlopB1Block70, position: 0});
TFlipFlopB1Block70.outputs[1].push({gate: TFlipFlopB1Block60, position: 0});
let TFlipFlopB1Block71Rotation0 = rotatePointOrigin({x: 193, y: 51}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block71Rotation1 = rotatePointOrigin({x: 183, y: 51}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block71 = new lineSegment({x: TFlipFlopB1Block71Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block71Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block71Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block71Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block71",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block71);
TFlipFlopB1Block71.outputs[0].push({gate: TFlipFlopB1Block19, position: 1});
TFlipFlopB1Block71.outputs[1].push({gate: TFlipFlopB1Block19, position: 1});
let TFlipFlopB1Block72Rotation0 = rotatePointOrigin({x: 183, y: 51}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block72Rotation1 = rotatePointOrigin({x: 183, y: -22}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block72 = new lineSegment({x: TFlipFlopB1Block72Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block72Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block72Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block72Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block72",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block72);
TFlipFlopB1Block71.outputs[0].push({gate: TFlipFlopB1Block72, position: 0});
TFlipFlopB1Block72.outputs[1].push({gate: TFlipFlopB1Block71, position: 1});
let TFlipFlopB1Block73Rotation0 = rotatePointOrigin({x: 167, y: 93}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block73Rotation1 = rotatePointOrigin({x: 167, y: 91}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block73 = new lineSegment({x: TFlipFlopB1Block73Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block73Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block73Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block73Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block73",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block73);
TFlipFlopB1Block18.outputs[0].push({gate: TFlipFlopB1Block73, position: 0});
TFlipFlopB1Block18.outputs[1].push({gate: TFlipFlopB1Block73, position: 0});
let TFlipFlopB1Block74Rotation0 = rotatePointOrigin({x: 167, y: 91}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block74Rotation1 = rotatePointOrigin({x: 193, y: 91}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block74 = new lineSegment({x: TFlipFlopB1Block74Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block74Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block74Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block74Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block74",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block74);
TFlipFlopB1Block73.outputs[0].push({gate: TFlipFlopB1Block74, position: 0});
TFlipFlopB1Block74.outputs[1].push({gate: TFlipFlopB1Block73, position: 1});
TFlipFlopB1Block74.outputs[0].push({gate: TFlipFlopB1Block20, position: 1});
TFlipFlopB1Block74.outputs[1].push({gate: TFlipFlopB1Block20, position: 1});
let TFlipFlopB1Block75Rotation0 = rotatePointOrigin({x: 193, y: 96}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block75Rotation1 = rotatePointOrigin({x: 173, y: 96}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block75 = new lineSegment({x: TFlipFlopB1Block75Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block75Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block75Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block75Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block75",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block75);
TFlipFlopB1Block75.outputs[0].push({gate: TFlipFlopB1Block20, position: 0});
TFlipFlopB1Block75.outputs[1].push({gate: TFlipFlopB1Block20, position: 0});
let TFlipFlopB1Block76Rotation0 = rotatePointOrigin({x: 173, y: 96}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block76Rotation1 = rotatePointOrigin({x: 173, y: -22}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block76 = new lineSegment({x: TFlipFlopB1Block76Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block76Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block76Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block76Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block76",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block76);
TFlipFlopB1Block75.outputs[0].push({gate: TFlipFlopB1Block76, position: 0});
TFlipFlopB1Block76.outputs[1].push({gate: TFlipFlopB1Block75, position: 1});
let TFlipFlopB1Block77Rotation0 = rotatePointOrigin({x: 167, y: 53}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block77Rotation1 = rotatePointOrigin({x: 167, y: 56}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block77 = new lineSegment({x: TFlipFlopB1Block77Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block77Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block77Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block77Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block77",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block77);
TFlipFlopB1Block17.outputs[0].push({gate: TFlipFlopB1Block77, position: 0});
TFlipFlopB1Block17.outputs[1].push({gate: TFlipFlopB1Block77, position: 0});
let TFlipFlopB1Block78Rotation0 = rotatePointOrigin({x: 167, y: 56}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block78Rotation1 = rotatePointOrigin({x: 193, y: 56}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block78 = new lineSegment({x: TFlipFlopB1Block78Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block78Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block78Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block78Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block78",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block78);
TFlipFlopB1Block77.outputs[0].push({gate: TFlipFlopB1Block78, position: 0});
TFlipFlopB1Block78.outputs[1].push({gate: TFlipFlopB1Block77, position: 1});
TFlipFlopB1Block78.outputs[0].push({gate: TFlipFlopB1Block19, position: 0});
TFlipFlopB1Block78.outputs[1].push({gate: TFlipFlopB1Block19, position: 0});
let TFlipFlopB1Block79Rotation0 = rotatePointOrigin({x: 148, y: 91}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block79Rotation1 = rotatePointOrigin({x: 143, y: 91}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block79 = new lineSegment({x: TFlipFlopB1Block79Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block79Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block79Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block79Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block79",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block79);
TFlipFlopB1Block79.outputs[0].push({gate: TFlipFlopB1Block18, position: 1});
TFlipFlopB1Block79.outputs[1].push({gate: TFlipFlopB1Block18, position: 1});
let TFlipFlopB1Block80Rotation0 = rotatePointOrigin({x: 143, y: 91}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block80Rotation1 = rotatePointOrigin({x: 143, y: 78}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block80 = new lineSegment({x: TFlipFlopB1Block80Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block80Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block80Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block80Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block80",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block80);
TFlipFlopB1Block79.outputs[0].push({gate: TFlipFlopB1Block80, position: 0});
TFlipFlopB1Block80.outputs[1].push({gate: TFlipFlopB1Block79, position: 1});
let TFlipFlopB1Block81Rotation0 = rotatePointOrigin({x: 148, y: 56}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block81Rotation1 = rotatePointOrigin({x: 143, y: 56}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block81 = new lineSegment({x: TFlipFlopB1Block81Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block81Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block81Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block81Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block81",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block81);
TFlipFlopB1Block81.outputs[0].push({gate: TFlipFlopB1Block17, position: 0});
TFlipFlopB1Block81.outputs[1].push({gate: TFlipFlopB1Block17, position: 0});
let TFlipFlopB1Block82Rotation0 = rotatePointOrigin({x: 143, y: 56}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block82Rotation1 = rotatePointOrigin({x: 143, y: 68}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block82 = new lineSegment({x: TFlipFlopB1Block82Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block82Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block82Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block82Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block82",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block82);
TFlipFlopB1Block81.outputs[0].push({gate: TFlipFlopB1Block82, position: 0});
TFlipFlopB1Block82.outputs[1].push({gate: TFlipFlopB1Block81, position: 1});
let TFlipFlopB1Block83Rotation0 = rotatePointOrigin({x: 143, y: 78}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block83Rotation1 = rotatePointOrigin({x: 243, y: 68}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block83 = new lineSegment({x: TFlipFlopB1Block83Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block83Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block83Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block83Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block83",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block83);
TFlipFlopB1Block80.outputs[0].push({gate: TFlipFlopB1Block83, position: 0});
TFlipFlopB1Block83.outputs[1].push({gate: TFlipFlopB1Block80, position: 1});
TFlipFlopB1Block70.outputs[0].push({gate: TFlipFlopB1Block83, position: 1});
TFlipFlopB1Block83.outputs[0].push({gate: TFlipFlopB1Block70, position: 1});
let TFlipFlopB1Block84Rotation0 = rotatePointOrigin({x: 243, y: 78}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block84Rotation1 = rotatePointOrigin({x: 143, y: 68}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block84 = new lineSegment({x: TFlipFlopB1Block84Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block84Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block84Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block84Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block84",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block84);
TFlipFlopB1Block67.outputs[0].push({gate: TFlipFlopB1Block84, position: 0});
TFlipFlopB1Block84.outputs[1].push({gate: TFlipFlopB1Block67, position: 1});
TFlipFlopB1Block82.outputs[0].push({gate: TFlipFlopB1Block84, position: 1});
TFlipFlopB1Block84.outputs[0].push({gate: TFlipFlopB1Block82, position: 1});
let TFlipFlopB1Block85Rotation0 = rotatePointOrigin({x: 48, y: 91}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block85Rotation1 = rotatePointOrigin({x: 23, y: 91}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block85 = new lineSegment({x: TFlipFlopB1Block85Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block85Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block85Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block85Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block85",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block85);
TFlipFlopB1Block85.outputs[0].push({gate: TFlipFlopB1Block10, position: 1});
TFlipFlopB1Block85.outputs[1].push({gate: TFlipFlopB1Block10, position: 1});
let TFlipFlopB1Block86Rotation0 = rotatePointOrigin({x: 23, y: 91}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block86Rotation1 = rotatePointOrigin({x: 23, y: 56}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block86 = new lineSegment({x: TFlipFlopB1Block86Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block86Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block86Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block86Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block86",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block86);
TFlipFlopB1Block85.outputs[0].push({gate: TFlipFlopB1Block86, position: 0});
TFlipFlopB1Block86.outputs[1].push({gate: TFlipFlopB1Block85, position: 1});
let TFlipFlopB1Block87Rotation0 = rotatePointOrigin({x: 23, y: 56}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block87Rotation1 = rotatePointOrigin({x: 48, y: 56}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block87 = new lineSegment({x: TFlipFlopB1Block87Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block87Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block87Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block87Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block87",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block87);
TFlipFlopB1Block86.outputs[0].push({gate: TFlipFlopB1Block87, position: 0});
TFlipFlopB1Block87.outputs[1].push({gate: TFlipFlopB1Block86, position: 1});
TFlipFlopB1Block87.outputs[0].push({gate: TFlipFlopB1Block9, position: 0});
TFlipFlopB1Block87.outputs[1].push({gate: TFlipFlopB1Block9, position: 0});
let TFlipFlopB1Block88Rotation0 = rotatePointOrigin({x: 23, y: 56}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block88Rotation1 = rotatePointOrigin({x: 23, y: -22}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block88 = new lineSegment({x: TFlipFlopB1Block88Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block88Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block88Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block88Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block88",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block88);
TFlipFlopB1Block86.outputs[0].push({gate: TFlipFlopB1Block88, position: 0});
TFlipFlopB1Block88.outputs[1].push({gate: TFlipFlopB1Block86, position: 1});
TFlipFlopB1Block87.outputs[1].push({gate: TFlipFlopB1Block88, position: 0});
TFlipFlopB1Block88.outputs[1].push({gate: TFlipFlopB1Block87, position: 0});
let TFlipFlopB1Block89Rotation0 = rotatePointOrigin({x: 129, y: 53}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block89Rotation1 = rotatePointOrigin({x: 133, y: 53}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block89 = new lineSegment({x: TFlipFlopB1Block89Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block89Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block89Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block89Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block89",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block89);
TFlipFlopB1Block15.outputs[0].push({gate: TFlipFlopB1Block89, position: 0});
TFlipFlopB1Block15.outputs[1].push({gate: TFlipFlopB1Block89, position: 0});
let TFlipFlopB1Block90Rotation0 = rotatePointOrigin({x: 133, y: 53}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block90Rotation1 = rotatePointOrigin({x: 133, y: 38}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block90 = new lineSegment({x: TFlipFlopB1Block90Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block90Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block90Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block90Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block90",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block90);
TFlipFlopB1Block89.outputs[0].push({gate: TFlipFlopB1Block90, position: 0});
TFlipFlopB1Block90.outputs[1].push({gate: TFlipFlopB1Block89, position: 1});
let TFlipFlopB1Block91Rotation0 = rotatePointOrigin({x: 129, y: 13}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block91Rotation1 = rotatePointOrigin({x: 133, y: 13}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block91 = new lineSegment({x: TFlipFlopB1Block91Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block91Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block91Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block91Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block91",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block91);
TFlipFlopB1Block16.outputs[0].push({gate: TFlipFlopB1Block91, position: 0});
TFlipFlopB1Block16.outputs[1].push({gate: TFlipFlopB1Block91, position: 0});
let TFlipFlopB1Block92Rotation0 = rotatePointOrigin({x: 133, y: 13}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block92Rotation1 = rotatePointOrigin({x: 133, y: 28}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block92 = new lineSegment({x: TFlipFlopB1Block92Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block92Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block92Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block92Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block92",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block92);
TFlipFlopB1Block91.outputs[0].push({gate: TFlipFlopB1Block92, position: 0});
TFlipFlopB1Block92.outputs[1].push({gate: TFlipFlopB1Block91, position: 1});
let TFlipFlopB1Block93Rotation0 = rotatePointOrigin({x: 48, y: 51}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block93Rotation1 = rotatePointOrigin({x: 43, y: 51}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block93 = new lineSegment({x: TFlipFlopB1Block93Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block93Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block93Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block93Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block93",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block93);
TFlipFlopB1Block93.outputs[0].push({gate: TFlipFlopB1Block9, position: 1});
TFlipFlopB1Block93.outputs[1].push({gate: TFlipFlopB1Block9, position: 1});
let TFlipFlopB1Block94Rotation0 = rotatePointOrigin({x: 43, y: 51}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block94Rotation1 = rotatePointOrigin({x: 43, y: 38}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block94 = new lineSegment({x: TFlipFlopB1Block94Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block94Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block94Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block94Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block94",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block94);
TFlipFlopB1Block93.outputs[0].push({gate: TFlipFlopB1Block94, position: 0});
TFlipFlopB1Block94.outputs[1].push({gate: TFlipFlopB1Block93, position: 1});
let TFlipFlopB1Block95Rotation0 = rotatePointOrigin({x: 48, y: 16}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block95Rotation1 = rotatePointOrigin({x: 43, y: 16}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block95 = new lineSegment({x: TFlipFlopB1Block95Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block95Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block95Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block95Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block95",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block95);
TFlipFlopB1Block95.outputs[0].push({gate: TFlipFlopB1Block8, position: 0});
TFlipFlopB1Block95.outputs[1].push({gate: TFlipFlopB1Block8, position: 0});
let TFlipFlopB1Block96Rotation0 = rotatePointOrigin({x: 43, y: 16}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block96Rotation1 = rotatePointOrigin({x: 43, y: 28}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block96 = new lineSegment({x: TFlipFlopB1Block96Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block96Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block96Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block96Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block96",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block96);
TFlipFlopB1Block95.outputs[0].push({gate: TFlipFlopB1Block96, position: 0});
TFlipFlopB1Block96.outputs[1].push({gate: TFlipFlopB1Block95, position: 1});
let TFlipFlopB1Block97Rotation0 = rotatePointOrigin({x: 43, y: 28}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block97Rotation1 = rotatePointOrigin({x: 133, y: 38}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block97 = new lineSegment({x: TFlipFlopB1Block97Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block97Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block97Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block97Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block97",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block97);
TFlipFlopB1Block96.outputs[0].push({gate: TFlipFlopB1Block97, position: 0});
TFlipFlopB1Block97.outputs[1].push({gate: TFlipFlopB1Block96, position: 1});
TFlipFlopB1Block90.outputs[0].push({gate: TFlipFlopB1Block97, position: 1});
TFlipFlopB1Block97.outputs[0].push({gate: TFlipFlopB1Block90, position: 1});
let TFlipFlopB1Block98Rotation0 = rotatePointOrigin({x: 133, y: 28}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block98Rotation1 = rotatePointOrigin({x: 43, y: 38}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block98 = new lineSegment({x: TFlipFlopB1Block98Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block98Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block98Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block98Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block98",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block98);
TFlipFlopB1Block92.outputs[0].push({gate: TFlipFlopB1Block98, position: 0});
TFlipFlopB1Block98.outputs[1].push({gate: TFlipFlopB1Block92, position: 1});
TFlipFlopB1Block94.outputs[0].push({gate: TFlipFlopB1Block98, position: 1});
TFlipFlopB1Block98.outputs[0].push({gate: TFlipFlopB1Block94, position: 1});
let TFlipFlopB1Block99Rotation0 = rotatePointOrigin({x: 133, y: 53}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block99Rotation1 = rotatePointOrigin({x: 133, y: 51}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block99 = new lineSegment({x: TFlipFlopB1Block99Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block99Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block99Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block99Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block99",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block99);
TFlipFlopB1Block89.outputs[0].push({gate: TFlipFlopB1Block99, position: 0});
TFlipFlopB1Block99.outputs[1].push({gate: TFlipFlopB1Block89, position: 1});
TFlipFlopB1Block90.outputs[1].push({gate: TFlipFlopB1Block99, position: 0});
TFlipFlopB1Block99.outputs[1].push({gate: TFlipFlopB1Block90, position: 0});
let TFlipFlopB1Block100Rotation0 = rotatePointOrigin({x: 133, y: 51}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block100Rotation1 = rotatePointOrigin({x: 148, y: 51}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block100 = new lineSegment({x: TFlipFlopB1Block100Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block100Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block100Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block100Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block100",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block100);
TFlipFlopB1Block99.outputs[0].push({gate: TFlipFlopB1Block100, position: 0});
TFlipFlopB1Block100.outputs[1].push({gate: TFlipFlopB1Block99, position: 1});
TFlipFlopB1Block100.outputs[0].push({gate: TFlipFlopB1Block17, position: 1});
TFlipFlopB1Block100.outputs[1].push({gate: TFlipFlopB1Block17, position: 1});
let TFlipFlopB1Block101Rotation0 = rotatePointOrigin({x: 67, y: 93}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block101Rotation1 = rotatePointOrigin({x: 67, y: 96}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block101 = new lineSegment({x: TFlipFlopB1Block101Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block101Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block101Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block101Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block101",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block101);
TFlipFlopB1Block10.outputs[0].push({gate: TFlipFlopB1Block101, position: 0});
TFlipFlopB1Block10.outputs[1].push({gate: TFlipFlopB1Block101, position: 0});
let TFlipFlopB1Block102Rotation0 = rotatePointOrigin({x: 67, y: 96}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block102Rotation1 = rotatePointOrigin({x: 78, y: 96}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block102 = new lineSegment({x: TFlipFlopB1Block102Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block102Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block102Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block102Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block102",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block102);
TFlipFlopB1Block101.outputs[0].push({gate: TFlipFlopB1Block102, position: 0});
TFlipFlopB1Block102.outputs[1].push({gate: TFlipFlopB1Block101, position: 1});
TFlipFlopB1Block102.outputs[0].push({gate: TFlipFlopB1Block12, position: 0});
TFlipFlopB1Block102.outputs[1].push({gate: TFlipFlopB1Block12, position: 0});
let TFlipFlopB1Block103Rotation0 = rotatePointOrigin({x: 78, y: 91}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block103Rotation1 = rotatePointOrigin({x: 73, y: 91}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block103 = new lineSegment({x: TFlipFlopB1Block103Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block103Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block103Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block103Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block103",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block103);
TFlipFlopB1Block103.outputs[0].push({gate: TFlipFlopB1Block12, position: 1});
TFlipFlopB1Block103.outputs[1].push({gate: TFlipFlopB1Block12, position: 1});
let TFlipFlopB1Block104Rotation0 = rotatePointOrigin({x: 73, y: 91}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block104Rotation1 = rotatePointOrigin({x: 73, y: 78}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block104 = new lineSegment({x: TFlipFlopB1Block104Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block104Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block104Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block104Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block104",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block104);
TFlipFlopB1Block103.outputs[0].push({gate: TFlipFlopB1Block104, position: 0});
TFlipFlopB1Block104.outputs[1].push({gate: TFlipFlopB1Block103, position: 1});
let TFlipFlopB1Block105Rotation0 = rotatePointOrigin({x: 133, y: 53}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block105Rotation1 = rotatePointOrigin({x: 133, y: 68}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block105 = new lineSegment({x: TFlipFlopB1Block105Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block105Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block105Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block105Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block105",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block105);
TFlipFlopB1Block89.outputs[0].push({gate: TFlipFlopB1Block105, position: 0});
TFlipFlopB1Block105.outputs[1].push({gate: TFlipFlopB1Block89, position: 1});
TFlipFlopB1Block90.outputs[1].push({gate: TFlipFlopB1Block105, position: 0});
TFlipFlopB1Block105.outputs[1].push({gate: TFlipFlopB1Block90, position: 0});
TFlipFlopB1Block99.outputs[1].push({gate: TFlipFlopB1Block105, position: 0});
TFlipFlopB1Block105.outputs[1].push({gate: TFlipFlopB1Block99, position: 0});
let TFlipFlopB1Block106Rotation0 = rotatePointOrigin({x: 133, y: 68}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block106Rotation1 = rotatePointOrigin({x: 73, y: 78}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block106 = new lineSegment({x: TFlipFlopB1Block106Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block106Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block106Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block106Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block106",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block106);
TFlipFlopB1Block105.outputs[0].push({gate: TFlipFlopB1Block106, position: 0});
TFlipFlopB1Block106.outputs[1].push({gate: TFlipFlopB1Block105, position: 1});
TFlipFlopB1Block104.outputs[0].push({gate: TFlipFlopB1Block106, position: 1});
TFlipFlopB1Block106.outputs[0].push({gate: TFlipFlopB1Block104, position: 1});
let TFlipFlopB1Block107Rotation0 = rotatePointOrigin({x: 243, y: 53}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block107Rotation1 = rotatePointOrigin({x: 263, y: 53}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block107 = new lineSegment({x: TFlipFlopB1Block107Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block107Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block107Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block107Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block107",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block107);
TFlipFlopB1Block59.outputs[0].push({gate: TFlipFlopB1Block107, position: 0});
TFlipFlopB1Block107.outputs[1].push({gate: TFlipFlopB1Block59, position: 1});
TFlipFlopB1Block60.outputs[1].push({gate: TFlipFlopB1Block107, position: 0});
TFlipFlopB1Block107.outputs[1].push({gate: TFlipFlopB1Block60, position: 0});
TFlipFlopB1Block70.outputs[1].push({gate: TFlipFlopB1Block107, position: 0});
TFlipFlopB1Block107.outputs[1].push({gate: TFlipFlopB1Block70, position: 0});
let TFlipFlopB1Block108Rotation0 = rotatePointOrigin({x: 253, y: 93}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block108Rotation1 = rotatePointOrigin({x: 263, y: 93}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block108 = new lineSegment({x: TFlipFlopB1Block108Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block108Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block108Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block108Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block108",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block108);
TFlipFlopB1Block68.outputs[0].push({gate: TFlipFlopB1Block108, position: 0});
TFlipFlopB1Block108.outputs[1].push({gate: TFlipFlopB1Block68, position: 1});
TFlipFlopB1Block69.outputs[1].push({gate: TFlipFlopB1Block108, position: 0});
TFlipFlopB1Block108.outputs[1].push({gate: TFlipFlopB1Block69, position: 0});
let TFlipFlopB1Block109Rotation0 = rotatePointOrigin({x: -10, y: 23}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block109Rotation1 = rotatePointOrigin({x: -10, y: -22}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block109 = new lineSegment({x: TFlipFlopB1Block109Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block109Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block109Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block109Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block109",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block109);
TFlipFlopB1Block109.outputs[0].push({gate: TFlipFlopB1Block2, position: 1});
TFlipFlopB1Block109.outputs[1].push({gate: TFlipFlopB1Block2, position: 1});
let TFlipFlopB1Block110Rotation0 = rotatePointOrigin({x: -1, y: -6}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block110Rotation1 = rotatePointOrigin({x: -1, y: -22}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block110 = new lineSegment({x: TFlipFlopB1Block110Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block110Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block110Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block110Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block110",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block110);
TFlipFlopB1Block110.outputs[0].push({gate: TFlipFlopB1Block1, position: 0});
TFlipFlopB1Block110.outputs[1].push({gate: TFlipFlopB1Block1, position: 0});
let TFlipFlopB1Block111Rotation0 = rotatePointOrigin({x: -1, y: -22}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block111Rotation1 = rotatePointOrigin({x: -10, y: -22}, TFlipFlopB1Block.rotation);
let TFlipFlopB1Block111 = new lineSegment({x: TFlipFlopB1Block111Rotation0.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block111Rotation0.y + TFlipFlopB1Block.y}, {x: TFlipFlopB1Block111Rotation1.x + TFlipFlopB1Block.x, y: TFlipFlopB1Block111Rotation1.y + TFlipFlopB1Block.y}, "TFlipFlopB1Block111",[[],[]], TFlipFlopB1BlockMask);
globalGates.push(TFlipFlopB1Block111);
TFlipFlopB1Block110.outputs[0].push({gate: TFlipFlopB1Block111, position: 0});
TFlipFlopB1Block111.outputs[1].push({gate: TFlipFlopB1Block110, position: 1});
TFlipFlopB1Block109.outputs[0].push({gate: TFlipFlopB1Block111, position: 1});
TFlipFlopB1Block111.outputs[0].push({gate: TFlipFlopB1Block109, position: 1}); 
    
//TFlipFlopB2Block
let TFlipFlopB2Block = {x: 330, y: 100, rotation: 0, name: "TFlipFlopB2Block"};
let TFlipFlopB2BlockMask = new maskGate({x: TFlipFlopB2Block.x -20 , y: TFlipFlopB2Block.y-20}, {x: TFlipFlopB2Block.x+260, y: TFlipFlopB2Block.y+150}, "TFlipFlopB2Block", null);
globalGates.push(TFlipFlopB2BlockMask);
let TFlipFlopB2Block1Rotation = rotatePointOrigin({x: -1.5, y: 3.5}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block1 = new notGate(TFlipFlopB2Block.x - 9.5 + TFlipFlopB2Block1Rotation.x, TFlipFlopB2Block.y - 9.5 + TFlipFlopB2Block1Rotation.y, TFlipFlopB2Block.rotation + 0, "TFlipFlopB2Block1",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block1);
let TFlipFlopB2Block2Rotation = rotatePointOrigin({x: -12, y: 33}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block2 = new andGate(TFlipFlopB2Block.x - 10 + TFlipFlopB2Block2Rotation.x, TFlipFlopB2Block.y - 10 + TFlipFlopB2Block2Rotation.y, TFlipFlopB2Block.rotation + 0, "TFlipFlopB2Block2",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block2);
let TFlipFlopB2Block3Rotation = rotatePointOrigin({x: 8, y: 33}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block3 = new andGate(TFlipFlopB2Block.x - 10 + TFlipFlopB2Block3Rotation.x, TFlipFlopB2Block.y - 10 + TFlipFlopB2Block3Rotation.y, TFlipFlopB2Block.rotation + 0, "TFlipFlopB2Block3",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block3);
let TFlipFlopB2Block4Rotation = rotatePointOrigin({x: -11.5, y: 63.5}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block4 = new notGate(TFlipFlopB2Block.x - 9.5 + TFlipFlopB2Block4Rotation.x, TFlipFlopB2Block.y - 9.5 + TFlipFlopB2Block4Rotation.y, TFlipFlopB2Block.rotation + 0, "TFlipFlopB2Block4",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block4);
let TFlipFlopB2Block5Rotation = rotatePointOrigin({x: 8.5, y: 63.5}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block5 = new notGate(TFlipFlopB2Block.x - 9.5 + TFlipFlopB2Block5Rotation.x, TFlipFlopB2Block.y - 9.5 + TFlipFlopB2Block5Rotation.y, TFlipFlopB2Block.rotation + 0, "TFlipFlopB2Block5",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block5);
let TFlipFlopB2Block6Rotation = rotatePointOrigin({x: -2, y: 93}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block6 = new andGate(TFlipFlopB2Block.x - 10 + TFlipFlopB2Block6Rotation.x, TFlipFlopB2Block.y - 10 + TFlipFlopB2Block6Rotation.y, TFlipFlopB2Block.rotation + 0, "TFlipFlopB2Block6",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block6);
let TFlipFlopB2Block7Rotation = rotatePointOrigin({x: -1.5, y: 123.5}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block7 = new notGate(TFlipFlopB2Block.x - 9.5 + TFlipFlopB2Block7Rotation.x, TFlipFlopB2Block.y - 9.5 + TFlipFlopB2Block7Rotation.y, TFlipFlopB2Block.rotation + 0, "TFlipFlopB2Block7",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block7);
let TFlipFlopB2Block8Rotation = rotatePointOrigin({x: 58, y: 13}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block8 = new andGate(TFlipFlopB2Block.x - 10 + TFlipFlopB2Block8Rotation.x, TFlipFlopB2Block.y - 10 + TFlipFlopB2Block8Rotation.y, TFlipFlopB2Block.rotation + 270, "TFlipFlopB2Block8",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block8);
let TFlipFlopB2Block9Rotation = rotatePointOrigin({x: 58, y: 53}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block9 = new andGate(TFlipFlopB2Block.x - 10 + TFlipFlopB2Block9Rotation.x, TFlipFlopB2Block.y - 10 + TFlipFlopB2Block9Rotation.y, TFlipFlopB2Block.rotation + 270, "TFlipFlopB2Block9",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block9);
let TFlipFlopB2Block10Rotation = rotatePointOrigin({x: 58, y: 93}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block10 = new andGate(TFlipFlopB2Block.x - 10 + TFlipFlopB2Block10Rotation.x, TFlipFlopB2Block.y - 10 + TFlipFlopB2Block10Rotation.y, TFlipFlopB2Block.rotation + 270, "TFlipFlopB2Block10",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block10);
let TFlipFlopB2Block11Rotation = rotatePointOrigin({x: 58, y: 133}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block11 = new andGate(TFlipFlopB2Block.x - 10 + TFlipFlopB2Block11Rotation.x, TFlipFlopB2Block.y - 10 + TFlipFlopB2Block11Rotation.y, TFlipFlopB2Block.rotation + 270, "TFlipFlopB2Block11",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block11);
let TFlipFlopB2Block12Rotation = rotatePointOrigin({x: 88, y: 93}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block12 = new andGate(TFlipFlopB2Block.x - 10 + TFlipFlopB2Block12Rotation.x, TFlipFlopB2Block.y - 10 + TFlipFlopB2Block12Rotation.y, TFlipFlopB2Block.rotation + 270, "TFlipFlopB2Block12",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block12);
let TFlipFlopB2Block13Rotation = rotatePointOrigin({x: 118.5, y: 93.5}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block13 = new notGate(TFlipFlopB2Block.x - 9.5 + TFlipFlopB2Block13Rotation.x, TFlipFlopB2Block.y - 9.5 + TFlipFlopB2Block13Rotation.y, TFlipFlopB2Block.rotation + 270, "TFlipFlopB2Block13",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block13);
let TFlipFlopB2Block14Rotation = rotatePointOrigin({x: 118.5, y: 133.5}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block14 = new notGate(TFlipFlopB2Block.x - 9.5 + TFlipFlopB2Block14Rotation.x, TFlipFlopB2Block.y - 9.5 + TFlipFlopB2Block14Rotation.y, TFlipFlopB2Block.rotation + 270, "TFlipFlopB2Block14",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block14);
let TFlipFlopB2Block15Rotation = rotatePointOrigin({x: 118.5, y: 53.5}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block15 = new notGate(TFlipFlopB2Block.x - 9.5 + TFlipFlopB2Block15Rotation.x, TFlipFlopB2Block.y - 9.5 + TFlipFlopB2Block15Rotation.y, TFlipFlopB2Block.rotation + 270, "TFlipFlopB2Block15",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block15);
let TFlipFlopB2Block16Rotation = rotatePointOrigin({x: 118.5, y: 13.5}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block16 = new notGate(TFlipFlopB2Block.x - 9.5 + TFlipFlopB2Block16Rotation.x, TFlipFlopB2Block.y - 9.5 + TFlipFlopB2Block16Rotation.y, TFlipFlopB2Block.rotation + 270, "TFlipFlopB2Block16",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block16);
let TFlipFlopB2Block17Rotation = rotatePointOrigin({x: 158, y: 53}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block17 = new andGate(TFlipFlopB2Block.x - 10 + TFlipFlopB2Block17Rotation.x, TFlipFlopB2Block.y - 10 + TFlipFlopB2Block17Rotation.y, TFlipFlopB2Block.rotation + 270, "TFlipFlopB2Block17",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block17);
let TFlipFlopB2Block18Rotation = rotatePointOrigin({x: 158, y: 93}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block18 = new andGate(TFlipFlopB2Block.x - 10 + TFlipFlopB2Block18Rotation.x, TFlipFlopB2Block.y - 10 + TFlipFlopB2Block18Rotation.y, TFlipFlopB2Block.rotation + 270, "TFlipFlopB2Block18",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block18);
let TFlipFlopB2Block19Rotation = rotatePointOrigin({x: 198, y: 53}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block19 = new orGate(TFlipFlopB2Block.x - 10 + TFlipFlopB2Block19Rotation.x, TFlipFlopB2Block.y - 10 + TFlipFlopB2Block19Rotation.y, TFlipFlopB2Block.rotation + 270, "TFlipFlopB2Block19",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block19);
let TFlipFlopB2Block20Rotation = rotatePointOrigin({x: 198, y: 93}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block20 = new orGate(TFlipFlopB2Block.x - 10 + TFlipFlopB2Block20Rotation.x, TFlipFlopB2Block.y - 10 + TFlipFlopB2Block20Rotation.y, TFlipFlopB2Block.rotation + 270, "TFlipFlopB2Block20",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block20);
let TFlipFlopB2Block21Rotation = rotatePointOrigin({x: 228.5, y: 53.5}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block21 = new notGate(TFlipFlopB2Block.x - 9.5 + TFlipFlopB2Block21Rotation.x, TFlipFlopB2Block.y - 9.5 + TFlipFlopB2Block21Rotation.y, TFlipFlopB2Block.rotation + 270, "TFlipFlopB2Block21",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block21);
let TFlipFlopB2Block22Rotation = rotatePointOrigin({x: 228.5, y: 93.5}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block22 = new notGate(TFlipFlopB2Block.x - 9.5 + TFlipFlopB2Block22Rotation.x, TFlipFlopB2Block.y - 9.5 + TFlipFlopB2Block22Rotation.y, TFlipFlopB2Block.rotation + 270, "TFlipFlopB2Block22",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block22);
let TFlipFlopB2Block23Rotation0 = rotatePointOrigin({x: 207, y: 53}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block23Rotation1 = rotatePointOrigin({x: 219, y: 53}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block23 = new lineSegment({x: TFlipFlopB2Block23Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block23Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block23Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block23Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block23",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block23);
TFlipFlopB2Block19.outputs[0].push({gate: TFlipFlopB2Block23, position: 0});
TFlipFlopB2Block19.outputs[1].push({gate: TFlipFlopB2Block23, position: 0});
TFlipFlopB2Block23.outputs[0].push({gate: TFlipFlopB2Block21, position: 0});
TFlipFlopB2Block23.outputs[1].push({gate: TFlipFlopB2Block21, position: 0});
let TFlipFlopB2Block24Rotation0 = rotatePointOrigin({x: 207, y: 93}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block24Rotation1 = rotatePointOrigin({x: 219, y: 93}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block24 = new lineSegment({x: TFlipFlopB2Block24Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block24Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block24Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block24Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block24",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block24);
TFlipFlopB2Block20.outputs[0].push({gate: TFlipFlopB2Block24, position: 0});
TFlipFlopB2Block20.outputs[1].push({gate: TFlipFlopB2Block24, position: 0});
TFlipFlopB2Block24.outputs[0].push({gate: TFlipFlopB2Block22, position: 0});
TFlipFlopB2Block24.outputs[1].push({gate: TFlipFlopB2Block22, position: 0});
let TFlipFlopB2Block25Rotation0 = rotatePointOrigin({x: 67, y: 133}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block25Rotation1 = rotatePointOrigin({x: 109, y: 133}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block25 = new lineSegment({x: TFlipFlopB2Block25Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block25Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block25Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block25Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block25",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block25);
TFlipFlopB2Block11.outputs[0].push({gate: TFlipFlopB2Block25, position: 0});
TFlipFlopB2Block11.outputs[1].push({gate: TFlipFlopB2Block25, position: 0});
TFlipFlopB2Block25.outputs[0].push({gate: TFlipFlopB2Block14, position: 0});
TFlipFlopB2Block25.outputs[1].push({gate: TFlipFlopB2Block14, position: 0});
let TFlipFlopB2Block26Rotation0 = rotatePointOrigin({x: 97, y: 93}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block26Rotation1 = rotatePointOrigin({x: 109, y: 93}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block26 = new lineSegment({x: TFlipFlopB2Block26Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block26Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block26Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block26Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block26",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block26);
TFlipFlopB2Block12.outputs[0].push({gate: TFlipFlopB2Block26, position: 0});
TFlipFlopB2Block12.outputs[1].push({gate: TFlipFlopB2Block26, position: 0});
TFlipFlopB2Block26.outputs[0].push({gate: TFlipFlopB2Block13, position: 0});
TFlipFlopB2Block26.outputs[1].push({gate: TFlipFlopB2Block13, position: 0});
let TFlipFlopB2Block27Rotation0 = rotatePointOrigin({x: 67, y: 53}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block27Rotation1 = rotatePointOrigin({x: 109, y: 53}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block27 = new lineSegment({x: TFlipFlopB2Block27Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block27Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block27Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block27Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block27",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block27);
TFlipFlopB2Block9.outputs[0].push({gate: TFlipFlopB2Block27, position: 0});
TFlipFlopB2Block9.outputs[1].push({gate: TFlipFlopB2Block27, position: 0});
TFlipFlopB2Block27.outputs[0].push({gate: TFlipFlopB2Block15, position: 0});
TFlipFlopB2Block27.outputs[1].push({gate: TFlipFlopB2Block15, position: 0});
let TFlipFlopB2Block28Rotation0 = rotatePointOrigin({x: 67, y: 13}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block28Rotation1 = rotatePointOrigin({x: 109, y: 13}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block28 = new lineSegment({x: TFlipFlopB2Block28Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block28Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block28Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block28Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block28",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block28);
TFlipFlopB2Block8.outputs[0].push({gate: TFlipFlopB2Block28, position: 0});
TFlipFlopB2Block8.outputs[1].push({gate: TFlipFlopB2Block28, position: 0});
TFlipFlopB2Block28.outputs[0].push({gate: TFlipFlopB2Block16, position: 0});
TFlipFlopB2Block28.outputs[1].push({gate: TFlipFlopB2Block16, position: 0});
let TFlipFlopB2Block29Rotation0 = rotatePointOrigin({x: -2, y: 102}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block29Rotation1 = rotatePointOrigin({x: -2, y: 114}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block29 = new lineSegment({x: TFlipFlopB2Block29Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block29Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block29Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block29Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block29",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block29);
TFlipFlopB2Block6.outputs[0].push({gate: TFlipFlopB2Block29, position: 0});
TFlipFlopB2Block6.outputs[1].push({gate: TFlipFlopB2Block29, position: 0});
let TFlipFlopB2Block30Rotation0 = rotatePointOrigin({x: -2, y: 114}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block30Rotation1 = rotatePointOrigin({x: -1, y: 114}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block30 = new lineSegment({x: TFlipFlopB2Block30Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block30Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block30Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block30Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block30",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block30);
TFlipFlopB2Block29.outputs[0].push({gate: TFlipFlopB2Block30, position: 0});
TFlipFlopB2Block30.outputs[1].push({gate: TFlipFlopB2Block29, position: 1});
TFlipFlopB2Block30.outputs[0].push({gate: TFlipFlopB2Block7, position: 0});
TFlipFlopB2Block30.outputs[1].push({gate: TFlipFlopB2Block7, position: 0});
let TFlipFlopB2Block31Rotation0 = rotatePointOrigin({x: -11, y: 74}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block31Rotation1 = rotatePointOrigin({x: -5, y: 74}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block31 = new lineSegment({x: TFlipFlopB2Block31Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block31Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block31Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block31Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block31",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block31);
TFlipFlopB2Block4.outputs[0].push({gate: TFlipFlopB2Block31, position: 0});
TFlipFlopB2Block4.outputs[1].push({gate: TFlipFlopB2Block31, position: 0});
let TFlipFlopB2Block32Rotation0 = rotatePointOrigin({x: -5, y: 74}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block32Rotation1 = rotatePointOrigin({x: -5, y: 83}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block32 = new lineSegment({x: TFlipFlopB2Block32Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block32Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block32Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block32Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block32",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block32);
TFlipFlopB2Block31.outputs[0].push({gate: TFlipFlopB2Block32, position: 0});
TFlipFlopB2Block32.outputs[1].push({gate: TFlipFlopB2Block31, position: 1});
TFlipFlopB2Block32.outputs[0].push({gate: TFlipFlopB2Block6, position: 0});
TFlipFlopB2Block32.outputs[1].push({gate: TFlipFlopB2Block6, position: 0});
let TFlipFlopB2Block33Rotation0 = rotatePointOrigin({x: 9, y: 74}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block33Rotation1 = rotatePointOrigin({x: 0, y: 74}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block33 = new lineSegment({x: TFlipFlopB2Block33Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block33Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block33Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block33Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block33",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block33);
TFlipFlopB2Block5.outputs[0].push({gate: TFlipFlopB2Block33, position: 0});
TFlipFlopB2Block5.outputs[1].push({gate: TFlipFlopB2Block33, position: 0});
let TFlipFlopB2Block34Rotation0 = rotatePointOrigin({x: 0, y: 74}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block34Rotation1 = rotatePointOrigin({x: 0, y: 83}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block34 = new lineSegment({x: TFlipFlopB2Block34Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block34Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block34Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block34Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block34",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block34);
TFlipFlopB2Block33.outputs[0].push({gate: TFlipFlopB2Block34, position: 0});
TFlipFlopB2Block34.outputs[1].push({gate: TFlipFlopB2Block33, position: 1});
TFlipFlopB2Block34.outputs[0].push({gate: TFlipFlopB2Block6, position: 1});
TFlipFlopB2Block34.outputs[1].push({gate: TFlipFlopB2Block6, position: 1});
let TFlipFlopB2Block35Rotation0 = rotatePointOrigin({x: -12, y: 42}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block35Rotation1 = rotatePointOrigin({x: -12, y: 54}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block35 = new lineSegment({x: TFlipFlopB2Block35Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block35Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block35Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block35Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block35",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block35);
TFlipFlopB2Block2.outputs[0].push({gate: TFlipFlopB2Block35, position: 0});
TFlipFlopB2Block2.outputs[1].push({gate: TFlipFlopB2Block35, position: 0});
let TFlipFlopB2Block36Rotation0 = rotatePointOrigin({x: -12, y: 54}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block36Rotation1 = rotatePointOrigin({x: -11, y: 54}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block36 = new lineSegment({x: TFlipFlopB2Block36Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block36Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block36Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block36Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block36",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block36);
TFlipFlopB2Block35.outputs[0].push({gate: TFlipFlopB2Block36, position: 0});
TFlipFlopB2Block36.outputs[1].push({gate: TFlipFlopB2Block35, position: 1});
TFlipFlopB2Block36.outputs[0].push({gate: TFlipFlopB2Block4, position: 0});
TFlipFlopB2Block36.outputs[1].push({gate: TFlipFlopB2Block4, position: 0});
let TFlipFlopB2Block37Rotation0 = rotatePointOrigin({x: 8, y: 42}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block37Rotation1 = rotatePointOrigin({x: 8, y: 54}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block37 = new lineSegment({x: TFlipFlopB2Block37Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block37Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block37Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block37Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block37",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block37);
TFlipFlopB2Block3.outputs[0].push({gate: TFlipFlopB2Block37, position: 0});
TFlipFlopB2Block3.outputs[1].push({gate: TFlipFlopB2Block37, position: 0});
let TFlipFlopB2Block38Rotation0 = rotatePointOrigin({x: 8, y: 54}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block38Rotation1 = rotatePointOrigin({x: 9, y: 54}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block38 = new lineSegment({x: TFlipFlopB2Block38Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block38Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block38Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block38Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block38",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block38);
TFlipFlopB2Block37.outputs[0].push({gate: TFlipFlopB2Block38, position: 0});
TFlipFlopB2Block38.outputs[1].push({gate: TFlipFlopB2Block37, position: 1});
TFlipFlopB2Block38.outputs[0].push({gate: TFlipFlopB2Block5, position: 0});
TFlipFlopB2Block38.outputs[1].push({gate: TFlipFlopB2Block5, position: 0});
let TFlipFlopB2Block39Rotation0 = rotatePointOrigin({x: -1, y: 14}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block39Rotation1 = rotatePointOrigin({x: 5, y: 14}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block39 = new lineSegment({x: TFlipFlopB2Block39Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block39Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block39Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block39Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block39",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block39);
TFlipFlopB2Block1.outputs[0].push({gate: TFlipFlopB2Block39, position: 0});
TFlipFlopB2Block1.outputs[1].push({gate: TFlipFlopB2Block39, position: 0});
let TFlipFlopB2Block40Rotation0 = rotatePointOrigin({x: 5, y: 14}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block40Rotation1 = rotatePointOrigin({x: 5, y: 23}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block40 = new lineSegment({x: TFlipFlopB2Block40Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block40Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block40Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block40Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block40",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block40);
TFlipFlopB2Block39.outputs[0].push({gate: TFlipFlopB2Block40, position: 0});
TFlipFlopB2Block40.outputs[1].push({gate: TFlipFlopB2Block39, position: 1});
TFlipFlopB2Block40.outputs[0].push({gate: TFlipFlopB2Block3, position: 0});
TFlipFlopB2Block40.outputs[1].push({gate: TFlipFlopB2Block3, position: 0});
let TFlipFlopB2Block41Rotation0 = rotatePointOrigin({x: 129, y: 93}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block41Rotation1 = rotatePointOrigin({x: 133, y: 93}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block41 = new lineSegment({x: TFlipFlopB2Block41Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block41Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block41Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block41Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block41",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block41);
TFlipFlopB2Block13.outputs[0].push({gate: TFlipFlopB2Block41, position: 0});
TFlipFlopB2Block13.outputs[1].push({gate: TFlipFlopB2Block41, position: 0});
let TFlipFlopB2Block42Rotation0 = rotatePointOrigin({x: 133, y: 93}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block42Rotation1 = rotatePointOrigin({x: 133, y: 98}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block42 = new lineSegment({x: TFlipFlopB2Block42Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block42Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block42Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block42Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block42",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block42);
TFlipFlopB2Block41.outputs[0].push({gate: TFlipFlopB2Block42, position: 0});
TFlipFlopB2Block42.outputs[1].push({gate: TFlipFlopB2Block41, position: 1});
let TFlipFlopB2Block43Rotation0 = rotatePointOrigin({x: 133, y: 98}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block43Rotation1 = rotatePointOrigin({x: 133, y: 96}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block43 = new lineSegment({x: TFlipFlopB2Block43Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block43Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block43Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block43Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block43",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block43);
TFlipFlopB2Block42.outputs[0].push({gate: TFlipFlopB2Block43, position: 0});
TFlipFlopB2Block43.outputs[1].push({gate: TFlipFlopB2Block42, position: 1});
let TFlipFlopB2Block44Rotation0 = rotatePointOrigin({x: 133, y: 96}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block44Rotation1 = rotatePointOrigin({x: 148, y: 96}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block44 = new lineSegment({x: TFlipFlopB2Block44Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block44Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block44Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block44Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block44",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block44);
TFlipFlopB2Block43.outputs[0].push({gate: TFlipFlopB2Block44, position: 0});
TFlipFlopB2Block44.outputs[1].push({gate: TFlipFlopB2Block43, position: 1});
TFlipFlopB2Block44.outputs[0].push({gate: TFlipFlopB2Block18, position: 0});
TFlipFlopB2Block44.outputs[1].push({gate: TFlipFlopB2Block18, position: 0});
let TFlipFlopB2Block45Rotation0 = rotatePointOrigin({x: 133, y: 98}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block45Rotation1 = rotatePointOrigin({x: 133, y: 108}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block45 = new lineSegment({x: TFlipFlopB2Block45Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block45Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block45Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block45Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block45",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block45);
TFlipFlopB2Block42.outputs[0].push({gate: TFlipFlopB2Block45, position: 0});
TFlipFlopB2Block45.outputs[1].push({gate: TFlipFlopB2Block42, position: 1});
TFlipFlopB2Block43.outputs[1].push({gate: TFlipFlopB2Block45, position: 0});
TFlipFlopB2Block45.outputs[1].push({gate: TFlipFlopB2Block43, position: 0});
let TFlipFlopB2Block46Rotation0 = rotatePointOrigin({x: 129, y: 133}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block46Rotation1 = rotatePointOrigin({x: 133, y: 133}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block46 = new lineSegment({x: TFlipFlopB2Block46Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block46Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block46Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block46Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block46",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block46);
TFlipFlopB2Block14.outputs[0].push({gate: TFlipFlopB2Block46, position: 0});
TFlipFlopB2Block14.outputs[1].push({gate: TFlipFlopB2Block46, position: 0});
let TFlipFlopB2Block47Rotation0 = rotatePointOrigin({x: 133, y: 133}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block47Rotation1 = rotatePointOrigin({x: 133, y: 118}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block47 = new lineSegment({x: TFlipFlopB2Block47Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block47Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block47Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block47Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block47",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block47);
TFlipFlopB2Block46.outputs[0].push({gate: TFlipFlopB2Block47, position: 0});
TFlipFlopB2Block47.outputs[1].push({gate: TFlipFlopB2Block46, position: 1});
let TFlipFlopB2Block48Rotation0 = rotatePointOrigin({x: 48, y: 131}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block48Rotation1 = rotatePointOrigin({x: 43, y: 131}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block48 = new lineSegment({x: TFlipFlopB2Block48Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block48Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block48Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block48Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block48",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block48);
TFlipFlopB2Block48.outputs[0].push({gate: TFlipFlopB2Block11, position: 1});
TFlipFlopB2Block48.outputs[1].push({gate: TFlipFlopB2Block11, position: 1});
let TFlipFlopB2Block49Rotation0 = rotatePointOrigin({x: 43, y: 131}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block49Rotation1 = rotatePointOrigin({x: 43, y: 118}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block49 = new lineSegment({x: TFlipFlopB2Block49Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block49Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block49Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block49Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block49",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block49);
TFlipFlopB2Block48.outputs[0].push({gate: TFlipFlopB2Block49, position: 0});
TFlipFlopB2Block49.outputs[1].push({gate: TFlipFlopB2Block48, position: 1});
let TFlipFlopB2Block50Rotation0 = rotatePointOrigin({x: 48, y: 96}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block50Rotation1 = rotatePointOrigin({x: 43, y: 96}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block50 = new lineSegment({x: TFlipFlopB2Block50Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block50Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block50Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block50Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block50",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block50);
TFlipFlopB2Block50.outputs[0].push({gate: TFlipFlopB2Block10, position: 0});
TFlipFlopB2Block50.outputs[1].push({gate: TFlipFlopB2Block10, position: 0});
let TFlipFlopB2Block51Rotation0 = rotatePointOrigin({x: 43, y: 96}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block51Rotation1 = rotatePointOrigin({x: 43, y: 108}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block51 = new lineSegment({x: TFlipFlopB2Block51Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block51Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block51Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block51Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block51",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block51);
TFlipFlopB2Block50.outputs[0].push({gate: TFlipFlopB2Block51, position: 0});
TFlipFlopB2Block51.outputs[1].push({gate: TFlipFlopB2Block50, position: 1});
let TFlipFlopB2Block52Rotation0 = rotatePointOrigin({x: 43, y: 108}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block52Rotation1 = rotatePointOrigin({x: 133, y: 118}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block52 = new lineSegment({x: TFlipFlopB2Block52Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block52Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block52Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block52Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block52",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block52);
TFlipFlopB2Block51.outputs[0].push({gate: TFlipFlopB2Block52, position: 0});
TFlipFlopB2Block52.outputs[1].push({gate: TFlipFlopB2Block51, position: 1});
TFlipFlopB2Block47.outputs[0].push({gate: TFlipFlopB2Block52, position: 1});
TFlipFlopB2Block52.outputs[0].push({gate: TFlipFlopB2Block47, position: 1});
let TFlipFlopB2Block53Rotation0 = rotatePointOrigin({x: 43, y: 118}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block53Rotation1 = rotatePointOrigin({x: 133, y: 108}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block53 = new lineSegment({x: TFlipFlopB2Block53Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block53Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block53Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block53Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block53",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block53);
TFlipFlopB2Block49.outputs[0].push({gate: TFlipFlopB2Block53, position: 0});
TFlipFlopB2Block53.outputs[1].push({gate: TFlipFlopB2Block49, position: 1});
TFlipFlopB2Block45.outputs[0].push({gate: TFlipFlopB2Block53, position: 1});
TFlipFlopB2Block53.outputs[0].push({gate: TFlipFlopB2Block45, position: 1});
let TFlipFlopB2Block54Rotation0 = rotatePointOrigin({x: -1, y: 134}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block54Rotation1 = rotatePointOrigin({x: -1, y: 136}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block54 = new lineSegment({x: TFlipFlopB2Block54Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block54Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block54Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block54Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block54",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block54);
TFlipFlopB2Block7.outputs[0].push({gate: TFlipFlopB2Block54, position: 0});
TFlipFlopB2Block7.outputs[1].push({gate: TFlipFlopB2Block54, position: 0});
let TFlipFlopB2Block55Rotation0 = rotatePointOrigin({x: -1, y: 136}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block55Rotation1 = rotatePointOrigin({x: 48, y: 136}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block55 = new lineSegment({x: TFlipFlopB2Block55Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block55Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block55Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block55Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block55",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block55);
TFlipFlopB2Block54.outputs[0].push({gate: TFlipFlopB2Block55, position: 0});
TFlipFlopB2Block55.outputs[1].push({gate: TFlipFlopB2Block54, position: 1});
TFlipFlopB2Block55.outputs[0].push({gate: TFlipFlopB2Block11, position: 0});
TFlipFlopB2Block55.outputs[1].push({gate: TFlipFlopB2Block11, position: 0});
let TFlipFlopB2Block56Rotation0 = rotatePointOrigin({x: 48, y: 11}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block56Rotation1 = rotatePointOrigin({x: 33, y: 11}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block56 = new lineSegment({x: TFlipFlopB2Block56Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block56Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block56Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block56Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block56",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block56);
TFlipFlopB2Block56.outputs[0].push({gate: TFlipFlopB2Block8, position: 1});
TFlipFlopB2Block56.outputs[1].push({gate: TFlipFlopB2Block8, position: 1});
let TFlipFlopB2Block57Rotation0 = rotatePointOrigin({x: 43, y: 108}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block57Rotation1 = rotatePointOrigin({x: 33, y: 108}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block57 = new lineSegment({x: TFlipFlopB2Block57Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block57Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block57Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block57Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block57",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block57);
TFlipFlopB2Block51.outputs[0].push({gate: TFlipFlopB2Block57, position: 0});
TFlipFlopB2Block57.outputs[1].push({gate: TFlipFlopB2Block51, position: 1});
TFlipFlopB2Block52.outputs[1].push({gate: TFlipFlopB2Block57, position: 0});
TFlipFlopB2Block57.outputs[1].push({gate: TFlipFlopB2Block52, position: 0});
let TFlipFlopB2Block58Rotation0 = rotatePointOrigin({x: 33, y: 108}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block58Rotation1 = rotatePointOrigin({x: 33, y: 11}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block58 = new lineSegment({x: TFlipFlopB2Block58Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block58Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block58Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block58Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block58",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block58);
TFlipFlopB2Block57.outputs[0].push({gate: TFlipFlopB2Block58, position: 0});
TFlipFlopB2Block58.outputs[1].push({gate: TFlipFlopB2Block57, position: 1});
TFlipFlopB2Block56.outputs[0].push({gate: TFlipFlopB2Block58, position: 1});
TFlipFlopB2Block58.outputs[0].push({gate: TFlipFlopB2Block56, position: 1});
let TFlipFlopB2Block59Rotation0 = rotatePointOrigin({x: 239, y: 53}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block59Rotation1 = rotatePointOrigin({x: 243, y: 53}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block59 = new lineSegment({x: TFlipFlopB2Block59Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block59Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block59Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block59Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block59",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block59);
TFlipFlopB2Block21.outputs[0].push({gate: TFlipFlopB2Block59, position: 0});
TFlipFlopB2Block21.outputs[1].push({gate: TFlipFlopB2Block59, position: 0});
let TFlipFlopB2Block60Rotation0 = rotatePointOrigin({x: 243, y: 53}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block60Rotation1 = rotatePointOrigin({x: 243, y: 18}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block60 = new lineSegment({x: TFlipFlopB2Block60Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block60Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block60Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block60Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block60",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block60);
TFlipFlopB2Block59.outputs[0].push({gate: TFlipFlopB2Block60, position: 0});
TFlipFlopB2Block60.outputs[1].push({gate: TFlipFlopB2Block59, position: 1});
let TFlipFlopB2Block61Rotation0 = rotatePointOrigin({x: 10, y: 23}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block61Rotation1 = rotatePointOrigin({x: 10, y: -2}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block61 = new lineSegment({x: TFlipFlopB2Block61Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block61Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block61Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block61Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block61",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block61);
TFlipFlopB2Block61.outputs[0].push({gate: TFlipFlopB2Block3, position: 1});
TFlipFlopB2Block61.outputs[1].push({gate: TFlipFlopB2Block3, position: 1});
let TFlipFlopB2Block62Rotation0 = rotatePointOrigin({x: 10, y: -2}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block62Rotation1 = rotatePointOrigin({x: 243, y: -2}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block62 = new lineSegment({x: TFlipFlopB2Block62Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block62Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block62Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block62Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block62",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block62);
TFlipFlopB2Block61.outputs[0].push({gate: TFlipFlopB2Block62, position: 0});
TFlipFlopB2Block62.outputs[1].push({gate: TFlipFlopB2Block61, position: 1});
let TFlipFlopB2Block63Rotation0 = rotatePointOrigin({x: 243, y: 18}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block63Rotation1 = rotatePointOrigin({x: 243, y: -2}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block63 = new lineSegment({x: TFlipFlopB2Block63Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block63Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block63Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block63Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block63",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block63);
TFlipFlopB2Block60.outputs[0].push({gate: TFlipFlopB2Block63, position: 0});
TFlipFlopB2Block63.outputs[1].push({gate: TFlipFlopB2Block60, position: 1});
TFlipFlopB2Block62.outputs[0].push({gate: TFlipFlopB2Block63, position: 1});
TFlipFlopB2Block63.outputs[0].push({gate: TFlipFlopB2Block62, position: 1});
let TFlipFlopB2Block64Rotation0 = rotatePointOrigin({x: -15, y: 23}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block64Rotation1 = rotatePointOrigin({x: -15, y: -12}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block64 = new lineSegment({x: TFlipFlopB2Block64Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block64Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block64Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block64Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block64",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block64);
TFlipFlopB2Block64.outputs[0].push({gate: TFlipFlopB2Block2, position: 0});
TFlipFlopB2Block64.outputs[1].push({gate: TFlipFlopB2Block2, position: 0});
let TFlipFlopB2Block65Rotation0 = rotatePointOrigin({x: -15, y: -12}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block65Rotation1 = rotatePointOrigin({x: 253, y: -12}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block65 = new lineSegment({x: TFlipFlopB2Block65Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block65Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block65Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block65Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block65",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block65);
TFlipFlopB2Block64.outputs[0].push({gate: TFlipFlopB2Block65, position: 0});
TFlipFlopB2Block65.outputs[1].push({gate: TFlipFlopB2Block64, position: 1});
let TFlipFlopB2Block66Rotation0 = rotatePointOrigin({x: 239, y: 93}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block66Rotation1 = rotatePointOrigin({x: 243, y: 93}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block66 = new lineSegment({x: TFlipFlopB2Block66Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block66Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block66Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block66Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block66",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block66);
TFlipFlopB2Block22.outputs[0].push({gate: TFlipFlopB2Block66, position: 0});
TFlipFlopB2Block22.outputs[1].push({gate: TFlipFlopB2Block66, position: 0});
let TFlipFlopB2Block67Rotation0 = rotatePointOrigin({x: 243, y: 93}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block67Rotation1 = rotatePointOrigin({x: 243, y: 78}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block67 = new lineSegment({x: TFlipFlopB2Block67Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block67Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block67Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block67Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block67",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block67);
TFlipFlopB2Block66.outputs[0].push({gate: TFlipFlopB2Block67, position: 0});
TFlipFlopB2Block67.outputs[1].push({gate: TFlipFlopB2Block66, position: 1});
let TFlipFlopB2Block68Rotation0 = rotatePointOrigin({x: 243, y: 93}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block68Rotation1 = rotatePointOrigin({x: 253, y: 93}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block68 = new lineSegment({x: TFlipFlopB2Block68Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block68Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block68Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block68Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block68",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block68);
TFlipFlopB2Block66.outputs[0].push({gate: TFlipFlopB2Block68, position: 0});
TFlipFlopB2Block68.outputs[1].push({gate: TFlipFlopB2Block66, position: 1});
TFlipFlopB2Block67.outputs[1].push({gate: TFlipFlopB2Block68, position: 0});
TFlipFlopB2Block68.outputs[1].push({gate: TFlipFlopB2Block67, position: 0});
let TFlipFlopB2Block69Rotation0 = rotatePointOrigin({x: 253, y: 93}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block69Rotation1 = rotatePointOrigin({x: 253, y: -12}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block69 = new lineSegment({x: TFlipFlopB2Block69Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block69Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block69Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block69Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block69",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block69);
TFlipFlopB2Block68.outputs[0].push({gate: TFlipFlopB2Block69, position: 0});
TFlipFlopB2Block69.outputs[1].push({gate: TFlipFlopB2Block68, position: 1});
TFlipFlopB2Block65.outputs[0].push({gate: TFlipFlopB2Block69, position: 1});
TFlipFlopB2Block69.outputs[0].push({gate: TFlipFlopB2Block65, position: 1});
let TFlipFlopB2Block70Rotation0 = rotatePointOrigin({x: 243, y: 53}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block70Rotation1 = rotatePointOrigin({x: 243, y: 68}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block70 = new lineSegment({x: TFlipFlopB2Block70Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block70Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block70Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block70Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block70",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block70);
TFlipFlopB2Block59.outputs[0].push({gate: TFlipFlopB2Block70, position: 0});
TFlipFlopB2Block70.outputs[1].push({gate: TFlipFlopB2Block59, position: 1});
TFlipFlopB2Block60.outputs[1].push({gate: TFlipFlopB2Block70, position: 0});
TFlipFlopB2Block70.outputs[1].push({gate: TFlipFlopB2Block60, position: 0});
let TFlipFlopB2Block71Rotation0 = rotatePointOrigin({x: 193, y: 51}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block71Rotation1 = rotatePointOrigin({x: 183, y: 51}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block71 = new lineSegment({x: TFlipFlopB2Block71Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block71Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block71Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block71Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block71",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block71);
TFlipFlopB2Block71.outputs[0].push({gate: TFlipFlopB2Block19, position: 1});
TFlipFlopB2Block71.outputs[1].push({gate: TFlipFlopB2Block19, position: 1});
let TFlipFlopB2Block72Rotation0 = rotatePointOrigin({x: 183, y: 51}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block72Rotation1 = rotatePointOrigin({x: 183, y: -22}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block72 = new lineSegment({x: TFlipFlopB2Block72Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block72Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block72Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block72Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block72",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block72);
TFlipFlopB2Block71.outputs[0].push({gate: TFlipFlopB2Block72, position: 0});
TFlipFlopB2Block72.outputs[1].push({gate: TFlipFlopB2Block71, position: 1});
let TFlipFlopB2Block73Rotation0 = rotatePointOrigin({x: 167, y: 93}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block73Rotation1 = rotatePointOrigin({x: 167, y: 91}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block73 = new lineSegment({x: TFlipFlopB2Block73Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block73Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block73Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block73Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block73",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block73);
TFlipFlopB2Block18.outputs[0].push({gate: TFlipFlopB2Block73, position: 0});
TFlipFlopB2Block18.outputs[1].push({gate: TFlipFlopB2Block73, position: 0});
let TFlipFlopB2Block74Rotation0 = rotatePointOrigin({x: 167, y: 91}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block74Rotation1 = rotatePointOrigin({x: 193, y: 91}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block74 = new lineSegment({x: TFlipFlopB2Block74Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block74Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block74Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block74Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block74",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block74);
TFlipFlopB2Block73.outputs[0].push({gate: TFlipFlopB2Block74, position: 0});
TFlipFlopB2Block74.outputs[1].push({gate: TFlipFlopB2Block73, position: 1});
TFlipFlopB2Block74.outputs[0].push({gate: TFlipFlopB2Block20, position: 1});
TFlipFlopB2Block74.outputs[1].push({gate: TFlipFlopB2Block20, position: 1});
let TFlipFlopB2Block75Rotation0 = rotatePointOrigin({x: 193, y: 96}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block75Rotation1 = rotatePointOrigin({x: 173, y: 96}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block75 = new lineSegment({x: TFlipFlopB2Block75Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block75Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block75Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block75Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block75",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block75);
TFlipFlopB2Block75.outputs[0].push({gate: TFlipFlopB2Block20, position: 0});
TFlipFlopB2Block75.outputs[1].push({gate: TFlipFlopB2Block20, position: 0});
let TFlipFlopB2Block76Rotation0 = rotatePointOrigin({x: 173, y: 96}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block76Rotation1 = rotatePointOrigin({x: 173, y: -22}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block76 = new lineSegment({x: TFlipFlopB2Block76Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block76Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block76Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block76Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block76",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block76);
TFlipFlopB2Block75.outputs[0].push({gate: TFlipFlopB2Block76, position: 0});
TFlipFlopB2Block76.outputs[1].push({gate: TFlipFlopB2Block75, position: 1});
let TFlipFlopB2Block77Rotation0 = rotatePointOrigin({x: 167, y: 53}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block77Rotation1 = rotatePointOrigin({x: 167, y: 56}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block77 = new lineSegment({x: TFlipFlopB2Block77Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block77Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block77Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block77Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block77",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block77);
TFlipFlopB2Block17.outputs[0].push({gate: TFlipFlopB2Block77, position: 0});
TFlipFlopB2Block17.outputs[1].push({gate: TFlipFlopB2Block77, position: 0});
let TFlipFlopB2Block78Rotation0 = rotatePointOrigin({x: 167, y: 56}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block78Rotation1 = rotatePointOrigin({x: 193, y: 56}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block78 = new lineSegment({x: TFlipFlopB2Block78Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block78Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block78Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block78Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block78",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block78);
TFlipFlopB2Block77.outputs[0].push({gate: TFlipFlopB2Block78, position: 0});
TFlipFlopB2Block78.outputs[1].push({gate: TFlipFlopB2Block77, position: 1});
TFlipFlopB2Block78.outputs[0].push({gate: TFlipFlopB2Block19, position: 0});
TFlipFlopB2Block78.outputs[1].push({gate: TFlipFlopB2Block19, position: 0});
let TFlipFlopB2Block79Rotation0 = rotatePointOrigin({x: 148, y: 91}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block79Rotation1 = rotatePointOrigin({x: 143, y: 91}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block79 = new lineSegment({x: TFlipFlopB2Block79Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block79Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block79Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block79Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block79",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block79);
TFlipFlopB2Block79.outputs[0].push({gate: TFlipFlopB2Block18, position: 1});
TFlipFlopB2Block79.outputs[1].push({gate: TFlipFlopB2Block18, position: 1});
let TFlipFlopB2Block80Rotation0 = rotatePointOrigin({x: 143, y: 91}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block80Rotation1 = rotatePointOrigin({x: 143, y: 78}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block80 = new lineSegment({x: TFlipFlopB2Block80Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block80Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block80Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block80Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block80",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block80);
TFlipFlopB2Block79.outputs[0].push({gate: TFlipFlopB2Block80, position: 0});
TFlipFlopB2Block80.outputs[1].push({gate: TFlipFlopB2Block79, position: 1});
let TFlipFlopB2Block81Rotation0 = rotatePointOrigin({x: 148, y: 56}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block81Rotation1 = rotatePointOrigin({x: 143, y: 56}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block81 = new lineSegment({x: TFlipFlopB2Block81Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block81Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block81Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block81Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block81",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block81);
TFlipFlopB2Block81.outputs[0].push({gate: TFlipFlopB2Block17, position: 0});
TFlipFlopB2Block81.outputs[1].push({gate: TFlipFlopB2Block17, position: 0});
let TFlipFlopB2Block82Rotation0 = rotatePointOrigin({x: 143, y: 56}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block82Rotation1 = rotatePointOrigin({x: 143, y: 68}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block82 = new lineSegment({x: TFlipFlopB2Block82Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block82Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block82Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block82Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block82",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block82);
TFlipFlopB2Block81.outputs[0].push({gate: TFlipFlopB2Block82, position: 0});
TFlipFlopB2Block82.outputs[1].push({gate: TFlipFlopB2Block81, position: 1});
let TFlipFlopB2Block83Rotation0 = rotatePointOrigin({x: 143, y: 78}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block83Rotation1 = rotatePointOrigin({x: 243, y: 68}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block83 = new lineSegment({x: TFlipFlopB2Block83Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block83Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block83Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block83Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block83",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block83);
TFlipFlopB2Block80.outputs[0].push({gate: TFlipFlopB2Block83, position: 0});
TFlipFlopB2Block83.outputs[1].push({gate: TFlipFlopB2Block80, position: 1});
TFlipFlopB2Block70.outputs[0].push({gate: TFlipFlopB2Block83, position: 1});
TFlipFlopB2Block83.outputs[0].push({gate: TFlipFlopB2Block70, position: 1});
let TFlipFlopB2Block84Rotation0 = rotatePointOrigin({x: 243, y: 78}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block84Rotation1 = rotatePointOrigin({x: 143, y: 68}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block84 = new lineSegment({x: TFlipFlopB2Block84Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block84Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block84Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block84Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block84",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block84);
TFlipFlopB2Block67.outputs[0].push({gate: TFlipFlopB2Block84, position: 0});
TFlipFlopB2Block84.outputs[1].push({gate: TFlipFlopB2Block67, position: 1});
TFlipFlopB2Block82.outputs[0].push({gate: TFlipFlopB2Block84, position: 1});
TFlipFlopB2Block84.outputs[0].push({gate: TFlipFlopB2Block82, position: 1});
let TFlipFlopB2Block85Rotation0 = rotatePointOrigin({x: 48, y: 91}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block85Rotation1 = rotatePointOrigin({x: 23, y: 91}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block85 = new lineSegment({x: TFlipFlopB2Block85Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block85Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block85Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block85Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block85",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block85);
TFlipFlopB2Block85.outputs[0].push({gate: TFlipFlopB2Block10, position: 1});
TFlipFlopB2Block85.outputs[1].push({gate: TFlipFlopB2Block10, position: 1});
let TFlipFlopB2Block86Rotation0 = rotatePointOrigin({x: 23, y: 91}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block86Rotation1 = rotatePointOrigin({x: 23, y: 56}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block86 = new lineSegment({x: TFlipFlopB2Block86Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block86Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block86Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block86Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block86",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block86);
TFlipFlopB2Block85.outputs[0].push({gate: TFlipFlopB2Block86, position: 0});
TFlipFlopB2Block86.outputs[1].push({gate: TFlipFlopB2Block85, position: 1});
let TFlipFlopB2Block87Rotation0 = rotatePointOrigin({x: 23, y: 56}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block87Rotation1 = rotatePointOrigin({x: 48, y: 56}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block87 = new lineSegment({x: TFlipFlopB2Block87Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block87Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block87Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block87Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block87",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block87);
TFlipFlopB2Block86.outputs[0].push({gate: TFlipFlopB2Block87, position: 0});
TFlipFlopB2Block87.outputs[1].push({gate: TFlipFlopB2Block86, position: 1});
TFlipFlopB2Block87.outputs[0].push({gate: TFlipFlopB2Block9, position: 0});
TFlipFlopB2Block87.outputs[1].push({gate: TFlipFlopB2Block9, position: 0});
let TFlipFlopB2Block88Rotation0 = rotatePointOrigin({x: 23, y: 56}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block88Rotation1 = rotatePointOrigin({x: 23, y: -22}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block88 = new lineSegment({x: TFlipFlopB2Block88Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block88Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block88Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block88Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block88",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block88);
TFlipFlopB2Block86.outputs[0].push({gate: TFlipFlopB2Block88, position: 0});
TFlipFlopB2Block88.outputs[1].push({gate: TFlipFlopB2Block86, position: 1});
TFlipFlopB2Block87.outputs[1].push({gate: TFlipFlopB2Block88, position: 0});
TFlipFlopB2Block88.outputs[1].push({gate: TFlipFlopB2Block87, position: 0});
let TFlipFlopB2Block89Rotation0 = rotatePointOrigin({x: 129, y: 53}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block89Rotation1 = rotatePointOrigin({x: 133, y: 53}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block89 = new lineSegment({x: TFlipFlopB2Block89Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block89Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block89Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block89Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block89",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block89);
TFlipFlopB2Block15.outputs[0].push({gate: TFlipFlopB2Block89, position: 0});
TFlipFlopB2Block15.outputs[1].push({gate: TFlipFlopB2Block89, position: 0});
let TFlipFlopB2Block90Rotation0 = rotatePointOrigin({x: 133, y: 53}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block90Rotation1 = rotatePointOrigin({x: 133, y: 38}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block90 = new lineSegment({x: TFlipFlopB2Block90Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block90Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block90Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block90Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block90",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block90);
TFlipFlopB2Block89.outputs[0].push({gate: TFlipFlopB2Block90, position: 0});
TFlipFlopB2Block90.outputs[1].push({gate: TFlipFlopB2Block89, position: 1});
let TFlipFlopB2Block91Rotation0 = rotatePointOrigin({x: 129, y: 13}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block91Rotation1 = rotatePointOrigin({x: 133, y: 13}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block91 = new lineSegment({x: TFlipFlopB2Block91Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block91Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block91Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block91Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block91",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block91);
TFlipFlopB2Block16.outputs[0].push({gate: TFlipFlopB2Block91, position: 0});
TFlipFlopB2Block16.outputs[1].push({gate: TFlipFlopB2Block91, position: 0});
let TFlipFlopB2Block92Rotation0 = rotatePointOrigin({x: 133, y: 13}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block92Rotation1 = rotatePointOrigin({x: 133, y: 28}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block92 = new lineSegment({x: TFlipFlopB2Block92Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block92Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block92Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block92Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block92",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block92);
TFlipFlopB2Block91.outputs[0].push({gate: TFlipFlopB2Block92, position: 0});
TFlipFlopB2Block92.outputs[1].push({gate: TFlipFlopB2Block91, position: 1});
let TFlipFlopB2Block93Rotation0 = rotatePointOrigin({x: 48, y: 51}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block93Rotation1 = rotatePointOrigin({x: 43, y: 51}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block93 = new lineSegment({x: TFlipFlopB2Block93Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block93Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block93Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block93Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block93",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block93);
TFlipFlopB2Block93.outputs[0].push({gate: TFlipFlopB2Block9, position: 1});
TFlipFlopB2Block93.outputs[1].push({gate: TFlipFlopB2Block9, position: 1});
let TFlipFlopB2Block94Rotation0 = rotatePointOrigin({x: 43, y: 51}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block94Rotation1 = rotatePointOrigin({x: 43, y: 38}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block94 = new lineSegment({x: TFlipFlopB2Block94Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block94Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block94Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block94Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block94",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block94);
TFlipFlopB2Block93.outputs[0].push({gate: TFlipFlopB2Block94, position: 0});
TFlipFlopB2Block94.outputs[1].push({gate: TFlipFlopB2Block93, position: 1});
let TFlipFlopB2Block95Rotation0 = rotatePointOrigin({x: 48, y: 16}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block95Rotation1 = rotatePointOrigin({x: 43, y: 16}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block95 = new lineSegment({x: TFlipFlopB2Block95Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block95Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block95Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block95Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block95",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block95);
TFlipFlopB2Block95.outputs[0].push({gate: TFlipFlopB2Block8, position: 0});
TFlipFlopB2Block95.outputs[1].push({gate: TFlipFlopB2Block8, position: 0});
let TFlipFlopB2Block96Rotation0 = rotatePointOrigin({x: 43, y: 16}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block96Rotation1 = rotatePointOrigin({x: 43, y: 28}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block96 = new lineSegment({x: TFlipFlopB2Block96Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block96Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block96Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block96Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block96",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block96);
TFlipFlopB2Block95.outputs[0].push({gate: TFlipFlopB2Block96, position: 0});
TFlipFlopB2Block96.outputs[1].push({gate: TFlipFlopB2Block95, position: 1});
let TFlipFlopB2Block97Rotation0 = rotatePointOrigin({x: 43, y: 28}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block97Rotation1 = rotatePointOrigin({x: 133, y: 38}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block97 = new lineSegment({x: TFlipFlopB2Block97Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block97Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block97Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block97Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block97",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block97);
TFlipFlopB2Block96.outputs[0].push({gate: TFlipFlopB2Block97, position: 0});
TFlipFlopB2Block97.outputs[1].push({gate: TFlipFlopB2Block96, position: 1});
TFlipFlopB2Block90.outputs[0].push({gate: TFlipFlopB2Block97, position: 1});
TFlipFlopB2Block97.outputs[0].push({gate: TFlipFlopB2Block90, position: 1});
let TFlipFlopB2Block98Rotation0 = rotatePointOrigin({x: 133, y: 28}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block98Rotation1 = rotatePointOrigin({x: 43, y: 38}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block98 = new lineSegment({x: TFlipFlopB2Block98Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block98Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block98Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block98Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block98",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block98);
TFlipFlopB2Block92.outputs[0].push({gate: TFlipFlopB2Block98, position: 0});
TFlipFlopB2Block98.outputs[1].push({gate: TFlipFlopB2Block92, position: 1});
TFlipFlopB2Block94.outputs[0].push({gate: TFlipFlopB2Block98, position: 1});
TFlipFlopB2Block98.outputs[0].push({gate: TFlipFlopB2Block94, position: 1});
let TFlipFlopB2Block99Rotation0 = rotatePointOrigin({x: 133, y: 53}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block99Rotation1 = rotatePointOrigin({x: 133, y: 51}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block99 = new lineSegment({x: TFlipFlopB2Block99Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block99Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block99Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block99Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block99",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block99);
TFlipFlopB2Block89.outputs[0].push({gate: TFlipFlopB2Block99, position: 0});
TFlipFlopB2Block99.outputs[1].push({gate: TFlipFlopB2Block89, position: 1});
TFlipFlopB2Block90.outputs[1].push({gate: TFlipFlopB2Block99, position: 0});
TFlipFlopB2Block99.outputs[1].push({gate: TFlipFlopB2Block90, position: 0});
let TFlipFlopB2Block100Rotation0 = rotatePointOrigin({x: 133, y: 51}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block100Rotation1 = rotatePointOrigin({x: 148, y: 51}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block100 = new lineSegment({x: TFlipFlopB2Block100Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block100Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block100Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block100Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block100",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block100);
TFlipFlopB2Block99.outputs[0].push({gate: TFlipFlopB2Block100, position: 0});
TFlipFlopB2Block100.outputs[1].push({gate: TFlipFlopB2Block99, position: 1});
TFlipFlopB2Block100.outputs[0].push({gate: TFlipFlopB2Block17, position: 1});
TFlipFlopB2Block100.outputs[1].push({gate: TFlipFlopB2Block17, position: 1});
let TFlipFlopB2Block101Rotation0 = rotatePointOrigin({x: 67, y: 93}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block101Rotation1 = rotatePointOrigin({x: 67, y: 96}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block101 = new lineSegment({x: TFlipFlopB2Block101Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block101Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block101Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block101Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block101",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block101);
TFlipFlopB2Block10.outputs[0].push({gate: TFlipFlopB2Block101, position: 0});
TFlipFlopB2Block10.outputs[1].push({gate: TFlipFlopB2Block101, position: 0});
let TFlipFlopB2Block102Rotation0 = rotatePointOrigin({x: 67, y: 96}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block102Rotation1 = rotatePointOrigin({x: 78, y: 96}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block102 = new lineSegment({x: TFlipFlopB2Block102Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block102Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block102Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block102Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block102",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block102);
TFlipFlopB2Block101.outputs[0].push({gate: TFlipFlopB2Block102, position: 0});
TFlipFlopB2Block102.outputs[1].push({gate: TFlipFlopB2Block101, position: 1});
TFlipFlopB2Block102.outputs[0].push({gate: TFlipFlopB2Block12, position: 0});
TFlipFlopB2Block102.outputs[1].push({gate: TFlipFlopB2Block12, position: 0});
let TFlipFlopB2Block103Rotation0 = rotatePointOrigin({x: 78, y: 91}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block103Rotation1 = rotatePointOrigin({x: 73, y: 91}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block103 = new lineSegment({x: TFlipFlopB2Block103Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block103Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block103Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block103Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block103",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block103);
TFlipFlopB2Block103.outputs[0].push({gate: TFlipFlopB2Block12, position: 1});
TFlipFlopB2Block103.outputs[1].push({gate: TFlipFlopB2Block12, position: 1});
let TFlipFlopB2Block104Rotation0 = rotatePointOrigin({x: 73, y: 91}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block104Rotation1 = rotatePointOrigin({x: 73, y: 78}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block104 = new lineSegment({x: TFlipFlopB2Block104Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block104Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block104Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block104Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block104",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block104);
TFlipFlopB2Block103.outputs[0].push({gate: TFlipFlopB2Block104, position: 0});
TFlipFlopB2Block104.outputs[1].push({gate: TFlipFlopB2Block103, position: 1});
let TFlipFlopB2Block105Rotation0 = rotatePointOrigin({x: 133, y: 53}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block105Rotation1 = rotatePointOrigin({x: 133, y: 68}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block105 = new lineSegment({x: TFlipFlopB2Block105Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block105Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block105Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block105Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block105",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block105);
TFlipFlopB2Block89.outputs[0].push({gate: TFlipFlopB2Block105, position: 0});
TFlipFlopB2Block105.outputs[1].push({gate: TFlipFlopB2Block89, position: 1});
TFlipFlopB2Block90.outputs[1].push({gate: TFlipFlopB2Block105, position: 0});
TFlipFlopB2Block105.outputs[1].push({gate: TFlipFlopB2Block90, position: 0});
TFlipFlopB2Block99.outputs[1].push({gate: TFlipFlopB2Block105, position: 0});
TFlipFlopB2Block105.outputs[1].push({gate: TFlipFlopB2Block99, position: 0});
let TFlipFlopB2Block106Rotation0 = rotatePointOrigin({x: 133, y: 68}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block106Rotation1 = rotatePointOrigin({x: 73, y: 78}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block106 = new lineSegment({x: TFlipFlopB2Block106Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block106Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block106Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block106Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block106",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block106);
TFlipFlopB2Block105.outputs[0].push({gate: TFlipFlopB2Block106, position: 0});
TFlipFlopB2Block106.outputs[1].push({gate: TFlipFlopB2Block105, position: 1});
TFlipFlopB2Block104.outputs[0].push({gate: TFlipFlopB2Block106, position: 1});
TFlipFlopB2Block106.outputs[0].push({gate: TFlipFlopB2Block104, position: 1});
let TFlipFlopB2Block107Rotation0 = rotatePointOrigin({x: 243, y: 53}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block107Rotation1 = rotatePointOrigin({x: 263, y: 53}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block107 = new lineSegment({x: TFlipFlopB2Block107Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block107Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block107Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block107Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block107",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block107);
TFlipFlopB2Block59.outputs[0].push({gate: TFlipFlopB2Block107, position: 0});
TFlipFlopB2Block107.outputs[1].push({gate: TFlipFlopB2Block59, position: 1});
TFlipFlopB2Block60.outputs[1].push({gate: TFlipFlopB2Block107, position: 0});
TFlipFlopB2Block107.outputs[1].push({gate: TFlipFlopB2Block60, position: 0});
TFlipFlopB2Block70.outputs[1].push({gate: TFlipFlopB2Block107, position: 0});
TFlipFlopB2Block107.outputs[1].push({gate: TFlipFlopB2Block70, position: 0});
let TFlipFlopB2Block108Rotation0 = rotatePointOrigin({x: 253, y: 93}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block108Rotation1 = rotatePointOrigin({x: 263, y: 93}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block108 = new lineSegment({x: TFlipFlopB2Block108Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block108Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block108Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block108Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block108",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block108);
TFlipFlopB2Block68.outputs[0].push({gate: TFlipFlopB2Block108, position: 0});
TFlipFlopB2Block108.outputs[1].push({gate: TFlipFlopB2Block68, position: 1});
TFlipFlopB2Block69.outputs[1].push({gate: TFlipFlopB2Block108, position: 0});
TFlipFlopB2Block108.outputs[1].push({gate: TFlipFlopB2Block69, position: 0});
let TFlipFlopB2Block109Rotation0 = rotatePointOrigin({x: -10, y: 23}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block109Rotation1 = rotatePointOrigin({x: -10, y: -22}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block109 = new lineSegment({x: TFlipFlopB2Block109Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block109Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block109Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block109Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block109",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block109);
TFlipFlopB2Block109.outputs[0].push({gate: TFlipFlopB2Block2, position: 1});
TFlipFlopB2Block109.outputs[1].push({gate: TFlipFlopB2Block2, position: 1});
let TFlipFlopB2Block110Rotation0 = rotatePointOrigin({x: -1, y: -6}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block110Rotation1 = rotatePointOrigin({x: -1, y: -22}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block110 = new lineSegment({x: TFlipFlopB2Block110Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block110Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block110Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block110Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block110",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block110);
TFlipFlopB2Block110.outputs[0].push({gate: TFlipFlopB2Block1, position: 0});
TFlipFlopB2Block110.outputs[1].push({gate: TFlipFlopB2Block1, position: 0});
let TFlipFlopB2Block111Rotation0 = rotatePointOrigin({x: -1, y: -22}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block111Rotation1 = rotatePointOrigin({x: -10, y: -22}, TFlipFlopB2Block.rotation);
let TFlipFlopB2Block111 = new lineSegment({x: TFlipFlopB2Block111Rotation0.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block111Rotation0.y + TFlipFlopB2Block.y}, {x: TFlipFlopB2Block111Rotation1.x + TFlipFlopB2Block.x, y: TFlipFlopB2Block111Rotation1.y + TFlipFlopB2Block.y}, "TFlipFlopB2Block111",[[],[]], TFlipFlopB2BlockMask);
globalGates.push(TFlipFlopB2Block111);
TFlipFlopB2Block110.outputs[0].push({gate: TFlipFlopB2Block111, position: 0});
TFlipFlopB2Block111.outputs[1].push({gate: TFlipFlopB2Block110, position: 1});
TFlipFlopB2Block109.outputs[0].push({gate: TFlipFlopB2Block111, position: 1});
TFlipFlopB2Block111.outputs[0].push({gate: TFlipFlopB2Block109, position: 1}); 
    
//TFlipFlopB3Block
let TFlipFlopB3Block = {x: 30, y: 100, rotation: 0, name: "TFlipFlopB3Block"};
let TFlipFlopB3BlockMask = new maskGate({x: TFlipFlopB3Block.x -20 , y: TFlipFlopB3Block.y-20}, {x: TFlipFlopB3Block.x+260, y: TFlipFlopB3Block.y+150}, "TFlipFlopB3Block", null);
globalGates.push(TFlipFlopB3BlockMask);
let TFlipFlopB3Block1Rotation = rotatePointOrigin({x: -1.5, y: 3.5}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block1 = new notGate(TFlipFlopB3Block.x - 9.5 + TFlipFlopB3Block1Rotation.x, TFlipFlopB3Block.y - 9.5 + TFlipFlopB3Block1Rotation.y, TFlipFlopB3Block.rotation + 0, "TFlipFlopB3Block1",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block1);
let TFlipFlopB3Block2Rotation = rotatePointOrigin({x: -12, y: 33}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block2 = new andGate(TFlipFlopB3Block.x - 10 + TFlipFlopB3Block2Rotation.x, TFlipFlopB3Block.y - 10 + TFlipFlopB3Block2Rotation.y, TFlipFlopB3Block.rotation + 0, "TFlipFlopB3Block2",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block2);
let TFlipFlopB3Block3Rotation = rotatePointOrigin({x: 8, y: 33}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block3 = new andGate(TFlipFlopB3Block.x - 10 + TFlipFlopB3Block3Rotation.x, TFlipFlopB3Block.y - 10 + TFlipFlopB3Block3Rotation.y, TFlipFlopB3Block.rotation + 0, "TFlipFlopB3Block3",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block3);
let TFlipFlopB3Block4Rotation = rotatePointOrigin({x: -11.5, y: 63.5}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block4 = new notGate(TFlipFlopB3Block.x - 9.5 + TFlipFlopB3Block4Rotation.x, TFlipFlopB3Block.y - 9.5 + TFlipFlopB3Block4Rotation.y, TFlipFlopB3Block.rotation + 0, "TFlipFlopB3Block4",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block4);
let TFlipFlopB3Block5Rotation = rotatePointOrigin({x: 8.5, y: 63.5}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block5 = new notGate(TFlipFlopB3Block.x - 9.5 + TFlipFlopB3Block5Rotation.x, TFlipFlopB3Block.y - 9.5 + TFlipFlopB3Block5Rotation.y, TFlipFlopB3Block.rotation + 0, "TFlipFlopB3Block5",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block5);
let TFlipFlopB3Block6Rotation = rotatePointOrigin({x: -2, y: 93}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block6 = new andGate(TFlipFlopB3Block.x - 10 + TFlipFlopB3Block6Rotation.x, TFlipFlopB3Block.y - 10 + TFlipFlopB3Block6Rotation.y, TFlipFlopB3Block.rotation + 0, "TFlipFlopB3Block6",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block6);
let TFlipFlopB3Block7Rotation = rotatePointOrigin({x: -1.5, y: 123.5}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block7 = new notGate(TFlipFlopB3Block.x - 9.5 + TFlipFlopB3Block7Rotation.x, TFlipFlopB3Block.y - 9.5 + TFlipFlopB3Block7Rotation.y, TFlipFlopB3Block.rotation + 0, "TFlipFlopB3Block7",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block7);
let TFlipFlopB3Block8Rotation = rotatePointOrigin({x: 58, y: 13}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block8 = new andGate(TFlipFlopB3Block.x - 10 + TFlipFlopB3Block8Rotation.x, TFlipFlopB3Block.y - 10 + TFlipFlopB3Block8Rotation.y, TFlipFlopB3Block.rotation + 270, "TFlipFlopB3Block8",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block8);
let TFlipFlopB3Block9Rotation = rotatePointOrigin({x: 58, y: 53}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block9 = new andGate(TFlipFlopB3Block.x - 10 + TFlipFlopB3Block9Rotation.x, TFlipFlopB3Block.y - 10 + TFlipFlopB3Block9Rotation.y, TFlipFlopB3Block.rotation + 270, "TFlipFlopB3Block9",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block9);
let TFlipFlopB3Block10Rotation = rotatePointOrigin({x: 58, y: 93}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block10 = new andGate(TFlipFlopB3Block.x - 10 + TFlipFlopB3Block10Rotation.x, TFlipFlopB3Block.y - 10 + TFlipFlopB3Block10Rotation.y, TFlipFlopB3Block.rotation + 270, "TFlipFlopB3Block10",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block10);
let TFlipFlopB3Block11Rotation = rotatePointOrigin({x: 58, y: 133}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block11 = new andGate(TFlipFlopB3Block.x - 10 + TFlipFlopB3Block11Rotation.x, TFlipFlopB3Block.y - 10 + TFlipFlopB3Block11Rotation.y, TFlipFlopB3Block.rotation + 270, "TFlipFlopB3Block11",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block11);
let TFlipFlopB3Block12Rotation = rotatePointOrigin({x: 88, y: 93}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block12 = new andGate(TFlipFlopB3Block.x - 10 + TFlipFlopB3Block12Rotation.x, TFlipFlopB3Block.y - 10 + TFlipFlopB3Block12Rotation.y, TFlipFlopB3Block.rotation + 270, "TFlipFlopB3Block12",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block12);
let TFlipFlopB3Block13Rotation = rotatePointOrigin({x: 118.5, y: 93.5}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block13 = new notGate(TFlipFlopB3Block.x - 9.5 + TFlipFlopB3Block13Rotation.x, TFlipFlopB3Block.y - 9.5 + TFlipFlopB3Block13Rotation.y, TFlipFlopB3Block.rotation + 270, "TFlipFlopB3Block13",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block13);
let TFlipFlopB3Block14Rotation = rotatePointOrigin({x: 118.5, y: 133.5}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block14 = new notGate(TFlipFlopB3Block.x - 9.5 + TFlipFlopB3Block14Rotation.x, TFlipFlopB3Block.y - 9.5 + TFlipFlopB3Block14Rotation.y, TFlipFlopB3Block.rotation + 270, "TFlipFlopB3Block14",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block14);
let TFlipFlopB3Block15Rotation = rotatePointOrigin({x: 118.5, y: 53.5}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block15 = new notGate(TFlipFlopB3Block.x - 9.5 + TFlipFlopB3Block15Rotation.x, TFlipFlopB3Block.y - 9.5 + TFlipFlopB3Block15Rotation.y, TFlipFlopB3Block.rotation + 270, "TFlipFlopB3Block15",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block15);
let TFlipFlopB3Block16Rotation = rotatePointOrigin({x: 118.5, y: 13.5}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block16 = new notGate(TFlipFlopB3Block.x - 9.5 + TFlipFlopB3Block16Rotation.x, TFlipFlopB3Block.y - 9.5 + TFlipFlopB3Block16Rotation.y, TFlipFlopB3Block.rotation + 270, "TFlipFlopB3Block16",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block16);
let TFlipFlopB3Block17Rotation = rotatePointOrigin({x: 158, y: 53}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block17 = new andGate(TFlipFlopB3Block.x - 10 + TFlipFlopB3Block17Rotation.x, TFlipFlopB3Block.y - 10 + TFlipFlopB3Block17Rotation.y, TFlipFlopB3Block.rotation + 270, "TFlipFlopB3Block17",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block17);
let TFlipFlopB3Block18Rotation = rotatePointOrigin({x: 158, y: 93}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block18 = new andGate(TFlipFlopB3Block.x - 10 + TFlipFlopB3Block18Rotation.x, TFlipFlopB3Block.y - 10 + TFlipFlopB3Block18Rotation.y, TFlipFlopB3Block.rotation + 270, "TFlipFlopB3Block18",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block18);
let TFlipFlopB3Block19Rotation = rotatePointOrigin({x: 198, y: 53}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block19 = new orGate(TFlipFlopB3Block.x - 10 + TFlipFlopB3Block19Rotation.x, TFlipFlopB3Block.y - 10 + TFlipFlopB3Block19Rotation.y, TFlipFlopB3Block.rotation + 270, "TFlipFlopB3Block19",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block19);
let TFlipFlopB3Block20Rotation = rotatePointOrigin({x: 198, y: 93}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block20 = new orGate(TFlipFlopB3Block.x - 10 + TFlipFlopB3Block20Rotation.x, TFlipFlopB3Block.y - 10 + TFlipFlopB3Block20Rotation.y, TFlipFlopB3Block.rotation + 270, "TFlipFlopB3Block20",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block20);
let TFlipFlopB3Block21Rotation = rotatePointOrigin({x: 228.5, y: 53.5}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block21 = new notGate(TFlipFlopB3Block.x - 9.5 + TFlipFlopB3Block21Rotation.x, TFlipFlopB3Block.y - 9.5 + TFlipFlopB3Block21Rotation.y, TFlipFlopB3Block.rotation + 270, "TFlipFlopB3Block21",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block21);
let TFlipFlopB3Block22Rotation = rotatePointOrigin({x: 228.5, y: 93.5}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block22 = new notGate(TFlipFlopB3Block.x - 9.5 + TFlipFlopB3Block22Rotation.x, TFlipFlopB3Block.y - 9.5 + TFlipFlopB3Block22Rotation.y, TFlipFlopB3Block.rotation + 270, "TFlipFlopB3Block22",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block22);
let TFlipFlopB3Block23Rotation0 = rotatePointOrigin({x: 207, y: 53}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block23Rotation1 = rotatePointOrigin({x: 219, y: 53}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block23 = new lineSegment({x: TFlipFlopB3Block23Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block23Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block23Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block23Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block23",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block23);
TFlipFlopB3Block19.outputs[0].push({gate: TFlipFlopB3Block23, position: 0});
TFlipFlopB3Block19.outputs[1].push({gate: TFlipFlopB3Block23, position: 0});
TFlipFlopB3Block23.outputs[0].push({gate: TFlipFlopB3Block21, position: 0});
TFlipFlopB3Block23.outputs[1].push({gate: TFlipFlopB3Block21, position: 0});
let TFlipFlopB3Block24Rotation0 = rotatePointOrigin({x: 207, y: 93}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block24Rotation1 = rotatePointOrigin({x: 219, y: 93}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block24 = new lineSegment({x: TFlipFlopB3Block24Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block24Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block24Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block24Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block24",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block24);
TFlipFlopB3Block20.outputs[0].push({gate: TFlipFlopB3Block24, position: 0});
TFlipFlopB3Block20.outputs[1].push({gate: TFlipFlopB3Block24, position: 0});
TFlipFlopB3Block24.outputs[0].push({gate: TFlipFlopB3Block22, position: 0});
TFlipFlopB3Block24.outputs[1].push({gate: TFlipFlopB3Block22, position: 0});
let TFlipFlopB3Block25Rotation0 = rotatePointOrigin({x: 67, y: 133}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block25Rotation1 = rotatePointOrigin({x: 109, y: 133}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block25 = new lineSegment({x: TFlipFlopB3Block25Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block25Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block25Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block25Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block25",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block25);
TFlipFlopB3Block11.outputs[0].push({gate: TFlipFlopB3Block25, position: 0});
TFlipFlopB3Block11.outputs[1].push({gate: TFlipFlopB3Block25, position: 0});
TFlipFlopB3Block25.outputs[0].push({gate: TFlipFlopB3Block14, position: 0});
TFlipFlopB3Block25.outputs[1].push({gate: TFlipFlopB3Block14, position: 0});
let TFlipFlopB3Block26Rotation0 = rotatePointOrigin({x: 97, y: 93}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block26Rotation1 = rotatePointOrigin({x: 109, y: 93}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block26 = new lineSegment({x: TFlipFlopB3Block26Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block26Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block26Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block26Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block26",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block26);
TFlipFlopB3Block12.outputs[0].push({gate: TFlipFlopB3Block26, position: 0});
TFlipFlopB3Block12.outputs[1].push({gate: TFlipFlopB3Block26, position: 0});
TFlipFlopB3Block26.outputs[0].push({gate: TFlipFlopB3Block13, position: 0});
TFlipFlopB3Block26.outputs[1].push({gate: TFlipFlopB3Block13, position: 0});
let TFlipFlopB3Block27Rotation0 = rotatePointOrigin({x: 67, y: 53}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block27Rotation1 = rotatePointOrigin({x: 109, y: 53}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block27 = new lineSegment({x: TFlipFlopB3Block27Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block27Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block27Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block27Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block27",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block27);
TFlipFlopB3Block9.outputs[0].push({gate: TFlipFlopB3Block27, position: 0});
TFlipFlopB3Block9.outputs[1].push({gate: TFlipFlopB3Block27, position: 0});
TFlipFlopB3Block27.outputs[0].push({gate: TFlipFlopB3Block15, position: 0});
TFlipFlopB3Block27.outputs[1].push({gate: TFlipFlopB3Block15, position: 0});
let TFlipFlopB3Block28Rotation0 = rotatePointOrigin({x: 67, y: 13}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block28Rotation1 = rotatePointOrigin({x: 109, y: 13}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block28 = new lineSegment({x: TFlipFlopB3Block28Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block28Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block28Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block28Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block28",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block28);
TFlipFlopB3Block8.outputs[0].push({gate: TFlipFlopB3Block28, position: 0});
TFlipFlopB3Block8.outputs[1].push({gate: TFlipFlopB3Block28, position: 0});
TFlipFlopB3Block28.outputs[0].push({gate: TFlipFlopB3Block16, position: 0});
TFlipFlopB3Block28.outputs[1].push({gate: TFlipFlopB3Block16, position: 0});
let TFlipFlopB3Block29Rotation0 = rotatePointOrigin({x: -2, y: 102}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block29Rotation1 = rotatePointOrigin({x: -2, y: 114}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block29 = new lineSegment({x: TFlipFlopB3Block29Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block29Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block29Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block29Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block29",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block29);
TFlipFlopB3Block6.outputs[0].push({gate: TFlipFlopB3Block29, position: 0});
TFlipFlopB3Block6.outputs[1].push({gate: TFlipFlopB3Block29, position: 0});
let TFlipFlopB3Block30Rotation0 = rotatePointOrigin({x: -2, y: 114}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block30Rotation1 = rotatePointOrigin({x: -1, y: 114}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block30 = new lineSegment({x: TFlipFlopB3Block30Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block30Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block30Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block30Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block30",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block30);
TFlipFlopB3Block29.outputs[0].push({gate: TFlipFlopB3Block30, position: 0});
TFlipFlopB3Block30.outputs[1].push({gate: TFlipFlopB3Block29, position: 1});
TFlipFlopB3Block30.outputs[0].push({gate: TFlipFlopB3Block7, position: 0});
TFlipFlopB3Block30.outputs[1].push({gate: TFlipFlopB3Block7, position: 0});
let TFlipFlopB3Block31Rotation0 = rotatePointOrigin({x: -11, y: 74}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block31Rotation1 = rotatePointOrigin({x: -5, y: 74}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block31 = new lineSegment({x: TFlipFlopB3Block31Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block31Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block31Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block31Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block31",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block31);
TFlipFlopB3Block4.outputs[0].push({gate: TFlipFlopB3Block31, position: 0});
TFlipFlopB3Block4.outputs[1].push({gate: TFlipFlopB3Block31, position: 0});
let TFlipFlopB3Block32Rotation0 = rotatePointOrigin({x: -5, y: 74}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block32Rotation1 = rotatePointOrigin({x: -5, y: 83}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block32 = new lineSegment({x: TFlipFlopB3Block32Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block32Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block32Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block32Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block32",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block32);
TFlipFlopB3Block31.outputs[0].push({gate: TFlipFlopB3Block32, position: 0});
TFlipFlopB3Block32.outputs[1].push({gate: TFlipFlopB3Block31, position: 1});
TFlipFlopB3Block32.outputs[0].push({gate: TFlipFlopB3Block6, position: 0});
TFlipFlopB3Block32.outputs[1].push({gate: TFlipFlopB3Block6, position: 0});
let TFlipFlopB3Block33Rotation0 = rotatePointOrigin({x: 9, y: 74}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block33Rotation1 = rotatePointOrigin({x: 0, y: 74}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block33 = new lineSegment({x: TFlipFlopB3Block33Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block33Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block33Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block33Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block33",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block33);
TFlipFlopB3Block5.outputs[0].push({gate: TFlipFlopB3Block33, position: 0});
TFlipFlopB3Block5.outputs[1].push({gate: TFlipFlopB3Block33, position: 0});
let TFlipFlopB3Block34Rotation0 = rotatePointOrigin({x: 0, y: 74}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block34Rotation1 = rotatePointOrigin({x: 0, y: 83}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block34 = new lineSegment({x: TFlipFlopB3Block34Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block34Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block34Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block34Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block34",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block34);
TFlipFlopB3Block33.outputs[0].push({gate: TFlipFlopB3Block34, position: 0});
TFlipFlopB3Block34.outputs[1].push({gate: TFlipFlopB3Block33, position: 1});
TFlipFlopB3Block34.outputs[0].push({gate: TFlipFlopB3Block6, position: 1});
TFlipFlopB3Block34.outputs[1].push({gate: TFlipFlopB3Block6, position: 1});
let TFlipFlopB3Block35Rotation0 = rotatePointOrigin({x: -12, y: 42}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block35Rotation1 = rotatePointOrigin({x: -12, y: 54}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block35 = new lineSegment({x: TFlipFlopB3Block35Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block35Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block35Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block35Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block35",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block35);
TFlipFlopB3Block2.outputs[0].push({gate: TFlipFlopB3Block35, position: 0});
TFlipFlopB3Block2.outputs[1].push({gate: TFlipFlopB3Block35, position: 0});
let TFlipFlopB3Block36Rotation0 = rotatePointOrigin({x: -12, y: 54}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block36Rotation1 = rotatePointOrigin({x: -11, y: 54}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block36 = new lineSegment({x: TFlipFlopB3Block36Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block36Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block36Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block36Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block36",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block36);
TFlipFlopB3Block35.outputs[0].push({gate: TFlipFlopB3Block36, position: 0});
TFlipFlopB3Block36.outputs[1].push({gate: TFlipFlopB3Block35, position: 1});
TFlipFlopB3Block36.outputs[0].push({gate: TFlipFlopB3Block4, position: 0});
TFlipFlopB3Block36.outputs[1].push({gate: TFlipFlopB3Block4, position: 0});
let TFlipFlopB3Block37Rotation0 = rotatePointOrigin({x: 8, y: 42}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block37Rotation1 = rotatePointOrigin({x: 8, y: 54}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block37 = new lineSegment({x: TFlipFlopB3Block37Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block37Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block37Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block37Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block37",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block37);
TFlipFlopB3Block3.outputs[0].push({gate: TFlipFlopB3Block37, position: 0});
TFlipFlopB3Block3.outputs[1].push({gate: TFlipFlopB3Block37, position: 0});
let TFlipFlopB3Block38Rotation0 = rotatePointOrigin({x: 8, y: 54}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block38Rotation1 = rotatePointOrigin({x: 9, y: 54}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block38 = new lineSegment({x: TFlipFlopB3Block38Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block38Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block38Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block38Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block38",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block38);
TFlipFlopB3Block37.outputs[0].push({gate: TFlipFlopB3Block38, position: 0});
TFlipFlopB3Block38.outputs[1].push({gate: TFlipFlopB3Block37, position: 1});
TFlipFlopB3Block38.outputs[0].push({gate: TFlipFlopB3Block5, position: 0});
TFlipFlopB3Block38.outputs[1].push({gate: TFlipFlopB3Block5, position: 0});
let TFlipFlopB3Block39Rotation0 = rotatePointOrigin({x: -1, y: 14}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block39Rotation1 = rotatePointOrigin({x: 5, y: 14}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block39 = new lineSegment({x: TFlipFlopB3Block39Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block39Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block39Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block39Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block39",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block39);
TFlipFlopB3Block1.outputs[0].push({gate: TFlipFlopB3Block39, position: 0});
TFlipFlopB3Block1.outputs[1].push({gate: TFlipFlopB3Block39, position: 0});
let TFlipFlopB3Block40Rotation0 = rotatePointOrigin({x: 5, y: 14}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block40Rotation1 = rotatePointOrigin({x: 5, y: 23}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block40 = new lineSegment({x: TFlipFlopB3Block40Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block40Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block40Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block40Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block40",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block40);
TFlipFlopB3Block39.outputs[0].push({gate: TFlipFlopB3Block40, position: 0});
TFlipFlopB3Block40.outputs[1].push({gate: TFlipFlopB3Block39, position: 1});
TFlipFlopB3Block40.outputs[0].push({gate: TFlipFlopB3Block3, position: 0});
TFlipFlopB3Block40.outputs[1].push({gate: TFlipFlopB3Block3, position: 0});
let TFlipFlopB3Block41Rotation0 = rotatePointOrigin({x: 129, y: 93}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block41Rotation1 = rotatePointOrigin({x: 133, y: 93}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block41 = new lineSegment({x: TFlipFlopB3Block41Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block41Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block41Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block41Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block41",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block41);
TFlipFlopB3Block13.outputs[0].push({gate: TFlipFlopB3Block41, position: 0});
TFlipFlopB3Block13.outputs[1].push({gate: TFlipFlopB3Block41, position: 0});
let TFlipFlopB3Block42Rotation0 = rotatePointOrigin({x: 133, y: 93}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block42Rotation1 = rotatePointOrigin({x: 133, y: 98}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block42 = new lineSegment({x: TFlipFlopB3Block42Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block42Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block42Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block42Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block42",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block42);
TFlipFlopB3Block41.outputs[0].push({gate: TFlipFlopB3Block42, position: 0});
TFlipFlopB3Block42.outputs[1].push({gate: TFlipFlopB3Block41, position: 1});
let TFlipFlopB3Block43Rotation0 = rotatePointOrigin({x: 133, y: 98}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block43Rotation1 = rotatePointOrigin({x: 133, y: 96}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block43 = new lineSegment({x: TFlipFlopB3Block43Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block43Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block43Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block43Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block43",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block43);
TFlipFlopB3Block42.outputs[0].push({gate: TFlipFlopB3Block43, position: 0});
TFlipFlopB3Block43.outputs[1].push({gate: TFlipFlopB3Block42, position: 1});
let TFlipFlopB3Block44Rotation0 = rotatePointOrigin({x: 133, y: 96}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block44Rotation1 = rotatePointOrigin({x: 148, y: 96}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block44 = new lineSegment({x: TFlipFlopB3Block44Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block44Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block44Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block44Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block44",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block44);
TFlipFlopB3Block43.outputs[0].push({gate: TFlipFlopB3Block44, position: 0});
TFlipFlopB3Block44.outputs[1].push({gate: TFlipFlopB3Block43, position: 1});
TFlipFlopB3Block44.outputs[0].push({gate: TFlipFlopB3Block18, position: 0});
TFlipFlopB3Block44.outputs[1].push({gate: TFlipFlopB3Block18, position: 0});
let TFlipFlopB3Block45Rotation0 = rotatePointOrigin({x: 133, y: 98}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block45Rotation1 = rotatePointOrigin({x: 133, y: 108}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block45 = new lineSegment({x: TFlipFlopB3Block45Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block45Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block45Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block45Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block45",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block45);
TFlipFlopB3Block42.outputs[0].push({gate: TFlipFlopB3Block45, position: 0});
TFlipFlopB3Block45.outputs[1].push({gate: TFlipFlopB3Block42, position: 1});
TFlipFlopB3Block43.outputs[1].push({gate: TFlipFlopB3Block45, position: 0});
TFlipFlopB3Block45.outputs[1].push({gate: TFlipFlopB3Block43, position: 0});
let TFlipFlopB3Block46Rotation0 = rotatePointOrigin({x: 129, y: 133}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block46Rotation1 = rotatePointOrigin({x: 133, y: 133}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block46 = new lineSegment({x: TFlipFlopB3Block46Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block46Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block46Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block46Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block46",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block46);
TFlipFlopB3Block14.outputs[0].push({gate: TFlipFlopB3Block46, position: 0});
TFlipFlopB3Block14.outputs[1].push({gate: TFlipFlopB3Block46, position: 0});
let TFlipFlopB3Block47Rotation0 = rotatePointOrigin({x: 133, y: 133}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block47Rotation1 = rotatePointOrigin({x: 133, y: 118}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block47 = new lineSegment({x: TFlipFlopB3Block47Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block47Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block47Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block47Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block47",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block47);
TFlipFlopB3Block46.outputs[0].push({gate: TFlipFlopB3Block47, position: 0});
TFlipFlopB3Block47.outputs[1].push({gate: TFlipFlopB3Block46, position: 1});
let TFlipFlopB3Block48Rotation0 = rotatePointOrigin({x: 48, y: 131}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block48Rotation1 = rotatePointOrigin({x: 43, y: 131}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block48 = new lineSegment({x: TFlipFlopB3Block48Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block48Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block48Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block48Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block48",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block48);
TFlipFlopB3Block48.outputs[0].push({gate: TFlipFlopB3Block11, position: 1});
TFlipFlopB3Block48.outputs[1].push({gate: TFlipFlopB3Block11, position: 1});
let TFlipFlopB3Block49Rotation0 = rotatePointOrigin({x: 43, y: 131}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block49Rotation1 = rotatePointOrigin({x: 43, y: 118}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block49 = new lineSegment({x: TFlipFlopB3Block49Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block49Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block49Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block49Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block49",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block49);
TFlipFlopB3Block48.outputs[0].push({gate: TFlipFlopB3Block49, position: 0});
TFlipFlopB3Block49.outputs[1].push({gate: TFlipFlopB3Block48, position: 1});
let TFlipFlopB3Block50Rotation0 = rotatePointOrigin({x: 48, y: 96}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block50Rotation1 = rotatePointOrigin({x: 43, y: 96}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block50 = new lineSegment({x: TFlipFlopB3Block50Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block50Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block50Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block50Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block50",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block50);
TFlipFlopB3Block50.outputs[0].push({gate: TFlipFlopB3Block10, position: 0});
TFlipFlopB3Block50.outputs[1].push({gate: TFlipFlopB3Block10, position: 0});
let TFlipFlopB3Block51Rotation0 = rotatePointOrigin({x: 43, y: 96}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block51Rotation1 = rotatePointOrigin({x: 43, y: 108}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block51 = new lineSegment({x: TFlipFlopB3Block51Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block51Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block51Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block51Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block51",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block51);
TFlipFlopB3Block50.outputs[0].push({gate: TFlipFlopB3Block51, position: 0});
TFlipFlopB3Block51.outputs[1].push({gate: TFlipFlopB3Block50, position: 1});
let TFlipFlopB3Block52Rotation0 = rotatePointOrigin({x: 43, y: 108}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block52Rotation1 = rotatePointOrigin({x: 133, y: 118}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block52 = new lineSegment({x: TFlipFlopB3Block52Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block52Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block52Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block52Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block52",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block52);
TFlipFlopB3Block51.outputs[0].push({gate: TFlipFlopB3Block52, position: 0});
TFlipFlopB3Block52.outputs[1].push({gate: TFlipFlopB3Block51, position: 1});
TFlipFlopB3Block47.outputs[0].push({gate: TFlipFlopB3Block52, position: 1});
TFlipFlopB3Block52.outputs[0].push({gate: TFlipFlopB3Block47, position: 1});
let TFlipFlopB3Block53Rotation0 = rotatePointOrigin({x: 43, y: 118}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block53Rotation1 = rotatePointOrigin({x: 133, y: 108}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block53 = new lineSegment({x: TFlipFlopB3Block53Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block53Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block53Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block53Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block53",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block53);
TFlipFlopB3Block49.outputs[0].push({gate: TFlipFlopB3Block53, position: 0});
TFlipFlopB3Block53.outputs[1].push({gate: TFlipFlopB3Block49, position: 1});
TFlipFlopB3Block45.outputs[0].push({gate: TFlipFlopB3Block53, position: 1});
TFlipFlopB3Block53.outputs[0].push({gate: TFlipFlopB3Block45, position: 1});
let TFlipFlopB3Block54Rotation0 = rotatePointOrigin({x: -1, y: 134}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block54Rotation1 = rotatePointOrigin({x: -1, y: 136}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block54 = new lineSegment({x: TFlipFlopB3Block54Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block54Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block54Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block54Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block54",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block54);
TFlipFlopB3Block7.outputs[0].push({gate: TFlipFlopB3Block54, position: 0});
TFlipFlopB3Block7.outputs[1].push({gate: TFlipFlopB3Block54, position: 0});
let TFlipFlopB3Block55Rotation0 = rotatePointOrigin({x: -1, y: 136}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block55Rotation1 = rotatePointOrigin({x: 48, y: 136}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block55 = new lineSegment({x: TFlipFlopB3Block55Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block55Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block55Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block55Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block55",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block55);
TFlipFlopB3Block54.outputs[0].push({gate: TFlipFlopB3Block55, position: 0});
TFlipFlopB3Block55.outputs[1].push({gate: TFlipFlopB3Block54, position: 1});
TFlipFlopB3Block55.outputs[0].push({gate: TFlipFlopB3Block11, position: 0});
TFlipFlopB3Block55.outputs[1].push({gate: TFlipFlopB3Block11, position: 0});
let TFlipFlopB3Block56Rotation0 = rotatePointOrigin({x: 48, y: 11}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block56Rotation1 = rotatePointOrigin({x: 33, y: 11}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block56 = new lineSegment({x: TFlipFlopB3Block56Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block56Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block56Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block56Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block56",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block56);
TFlipFlopB3Block56.outputs[0].push({gate: TFlipFlopB3Block8, position: 1});
TFlipFlopB3Block56.outputs[1].push({gate: TFlipFlopB3Block8, position: 1});
let TFlipFlopB3Block57Rotation0 = rotatePointOrigin({x: 43, y: 108}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block57Rotation1 = rotatePointOrigin({x: 33, y: 108}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block57 = new lineSegment({x: TFlipFlopB3Block57Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block57Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block57Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block57Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block57",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block57);
TFlipFlopB3Block51.outputs[0].push({gate: TFlipFlopB3Block57, position: 0});
TFlipFlopB3Block57.outputs[1].push({gate: TFlipFlopB3Block51, position: 1});
TFlipFlopB3Block52.outputs[1].push({gate: TFlipFlopB3Block57, position: 0});
TFlipFlopB3Block57.outputs[1].push({gate: TFlipFlopB3Block52, position: 0});
let TFlipFlopB3Block58Rotation0 = rotatePointOrigin({x: 33, y: 108}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block58Rotation1 = rotatePointOrigin({x: 33, y: 11}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block58 = new lineSegment({x: TFlipFlopB3Block58Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block58Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block58Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block58Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block58",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block58);
TFlipFlopB3Block57.outputs[0].push({gate: TFlipFlopB3Block58, position: 0});
TFlipFlopB3Block58.outputs[1].push({gate: TFlipFlopB3Block57, position: 1});
TFlipFlopB3Block56.outputs[0].push({gate: TFlipFlopB3Block58, position: 1});
TFlipFlopB3Block58.outputs[0].push({gate: TFlipFlopB3Block56, position: 1});
let TFlipFlopB3Block59Rotation0 = rotatePointOrigin({x: 239, y: 53}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block59Rotation1 = rotatePointOrigin({x: 243, y: 53}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block59 = new lineSegment({x: TFlipFlopB3Block59Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block59Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block59Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block59Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block59",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block59);
TFlipFlopB3Block21.outputs[0].push({gate: TFlipFlopB3Block59, position: 0});
TFlipFlopB3Block21.outputs[1].push({gate: TFlipFlopB3Block59, position: 0});
let TFlipFlopB3Block60Rotation0 = rotatePointOrigin({x: 243, y: 53}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block60Rotation1 = rotatePointOrigin({x: 243, y: 18}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block60 = new lineSegment({x: TFlipFlopB3Block60Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block60Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block60Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block60Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block60",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block60);
TFlipFlopB3Block59.outputs[0].push({gate: TFlipFlopB3Block60, position: 0});
TFlipFlopB3Block60.outputs[1].push({gate: TFlipFlopB3Block59, position: 1});
let TFlipFlopB3Block61Rotation0 = rotatePointOrigin({x: 10, y: 23}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block61Rotation1 = rotatePointOrigin({x: 10, y: -2}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block61 = new lineSegment({x: TFlipFlopB3Block61Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block61Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block61Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block61Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block61",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block61);
TFlipFlopB3Block61.outputs[0].push({gate: TFlipFlopB3Block3, position: 1});
TFlipFlopB3Block61.outputs[1].push({gate: TFlipFlopB3Block3, position: 1});
let TFlipFlopB3Block62Rotation0 = rotatePointOrigin({x: 10, y: -2}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block62Rotation1 = rotatePointOrigin({x: 243, y: -2}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block62 = new lineSegment({x: TFlipFlopB3Block62Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block62Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block62Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block62Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block62",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block62);
TFlipFlopB3Block61.outputs[0].push({gate: TFlipFlopB3Block62, position: 0});
TFlipFlopB3Block62.outputs[1].push({gate: TFlipFlopB3Block61, position: 1});
let TFlipFlopB3Block63Rotation0 = rotatePointOrigin({x: 243, y: 18}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block63Rotation1 = rotatePointOrigin({x: 243, y: -2}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block63 = new lineSegment({x: TFlipFlopB3Block63Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block63Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block63Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block63Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block63",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block63);
TFlipFlopB3Block60.outputs[0].push({gate: TFlipFlopB3Block63, position: 0});
TFlipFlopB3Block63.outputs[1].push({gate: TFlipFlopB3Block60, position: 1});
TFlipFlopB3Block62.outputs[0].push({gate: TFlipFlopB3Block63, position: 1});
TFlipFlopB3Block63.outputs[0].push({gate: TFlipFlopB3Block62, position: 1});
let TFlipFlopB3Block64Rotation0 = rotatePointOrigin({x: -15, y: 23}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block64Rotation1 = rotatePointOrigin({x: -15, y: -12}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block64 = new lineSegment({x: TFlipFlopB3Block64Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block64Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block64Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block64Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block64",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block64);
TFlipFlopB3Block64.outputs[0].push({gate: TFlipFlopB3Block2, position: 0});
TFlipFlopB3Block64.outputs[1].push({gate: TFlipFlopB3Block2, position: 0});
let TFlipFlopB3Block65Rotation0 = rotatePointOrigin({x: -15, y: -12}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block65Rotation1 = rotatePointOrigin({x: 253, y: -12}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block65 = new lineSegment({x: TFlipFlopB3Block65Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block65Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block65Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block65Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block65",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block65);
TFlipFlopB3Block64.outputs[0].push({gate: TFlipFlopB3Block65, position: 0});
TFlipFlopB3Block65.outputs[1].push({gate: TFlipFlopB3Block64, position: 1});
let TFlipFlopB3Block66Rotation0 = rotatePointOrigin({x: 239, y: 93}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block66Rotation1 = rotatePointOrigin({x: 243, y: 93}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block66 = new lineSegment({x: TFlipFlopB3Block66Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block66Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block66Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block66Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block66",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block66);
TFlipFlopB3Block22.outputs[0].push({gate: TFlipFlopB3Block66, position: 0});
TFlipFlopB3Block22.outputs[1].push({gate: TFlipFlopB3Block66, position: 0});
let TFlipFlopB3Block67Rotation0 = rotatePointOrigin({x: 243, y: 93}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block67Rotation1 = rotatePointOrigin({x: 243, y: 78}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block67 = new lineSegment({x: TFlipFlopB3Block67Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block67Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block67Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block67Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block67",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block67);
TFlipFlopB3Block66.outputs[0].push({gate: TFlipFlopB3Block67, position: 0});
TFlipFlopB3Block67.outputs[1].push({gate: TFlipFlopB3Block66, position: 1});
let TFlipFlopB3Block68Rotation0 = rotatePointOrigin({x: 243, y: 93}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block68Rotation1 = rotatePointOrigin({x: 253, y: 93}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block68 = new lineSegment({x: TFlipFlopB3Block68Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block68Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block68Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block68Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block68",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block68);
TFlipFlopB3Block66.outputs[0].push({gate: TFlipFlopB3Block68, position: 0});
TFlipFlopB3Block68.outputs[1].push({gate: TFlipFlopB3Block66, position: 1});
TFlipFlopB3Block67.outputs[1].push({gate: TFlipFlopB3Block68, position: 0});
TFlipFlopB3Block68.outputs[1].push({gate: TFlipFlopB3Block67, position: 0});
let TFlipFlopB3Block69Rotation0 = rotatePointOrigin({x: 253, y: 93}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block69Rotation1 = rotatePointOrigin({x: 253, y: -12}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block69 = new lineSegment({x: TFlipFlopB3Block69Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block69Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block69Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block69Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block69",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block69);
TFlipFlopB3Block68.outputs[0].push({gate: TFlipFlopB3Block69, position: 0});
TFlipFlopB3Block69.outputs[1].push({gate: TFlipFlopB3Block68, position: 1});
TFlipFlopB3Block65.outputs[0].push({gate: TFlipFlopB3Block69, position: 1});
TFlipFlopB3Block69.outputs[0].push({gate: TFlipFlopB3Block65, position: 1});
let TFlipFlopB3Block70Rotation0 = rotatePointOrigin({x: 243, y: 53}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block70Rotation1 = rotatePointOrigin({x: 243, y: 68}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block70 = new lineSegment({x: TFlipFlopB3Block70Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block70Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block70Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block70Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block70",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block70);
TFlipFlopB3Block59.outputs[0].push({gate: TFlipFlopB3Block70, position: 0});
TFlipFlopB3Block70.outputs[1].push({gate: TFlipFlopB3Block59, position: 1});
TFlipFlopB3Block60.outputs[1].push({gate: TFlipFlopB3Block70, position: 0});
TFlipFlopB3Block70.outputs[1].push({gate: TFlipFlopB3Block60, position: 0});
let TFlipFlopB3Block71Rotation0 = rotatePointOrigin({x: 193, y: 51}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block71Rotation1 = rotatePointOrigin({x: 183, y: 51}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block71 = new lineSegment({x: TFlipFlopB3Block71Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block71Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block71Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block71Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block71",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block71);
TFlipFlopB3Block71.outputs[0].push({gate: TFlipFlopB3Block19, position: 1});
TFlipFlopB3Block71.outputs[1].push({gate: TFlipFlopB3Block19, position: 1});
let TFlipFlopB3Block72Rotation0 = rotatePointOrigin({x: 183, y: 51}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block72Rotation1 = rotatePointOrigin({x: 183, y: -22}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block72 = new lineSegment({x: TFlipFlopB3Block72Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block72Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block72Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block72Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block72",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block72);
TFlipFlopB3Block71.outputs[0].push({gate: TFlipFlopB3Block72, position: 0});
TFlipFlopB3Block72.outputs[1].push({gate: TFlipFlopB3Block71, position: 1});
let TFlipFlopB3Block73Rotation0 = rotatePointOrigin({x: 167, y: 93}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block73Rotation1 = rotatePointOrigin({x: 167, y: 91}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block73 = new lineSegment({x: TFlipFlopB3Block73Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block73Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block73Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block73Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block73",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block73);
TFlipFlopB3Block18.outputs[0].push({gate: TFlipFlopB3Block73, position: 0});
TFlipFlopB3Block18.outputs[1].push({gate: TFlipFlopB3Block73, position: 0});
let TFlipFlopB3Block74Rotation0 = rotatePointOrigin({x: 167, y: 91}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block74Rotation1 = rotatePointOrigin({x: 193, y: 91}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block74 = new lineSegment({x: TFlipFlopB3Block74Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block74Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block74Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block74Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block74",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block74);
TFlipFlopB3Block73.outputs[0].push({gate: TFlipFlopB3Block74, position: 0});
TFlipFlopB3Block74.outputs[1].push({gate: TFlipFlopB3Block73, position: 1});
TFlipFlopB3Block74.outputs[0].push({gate: TFlipFlopB3Block20, position: 1});
TFlipFlopB3Block74.outputs[1].push({gate: TFlipFlopB3Block20, position: 1});
let TFlipFlopB3Block75Rotation0 = rotatePointOrigin({x: 193, y: 96}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block75Rotation1 = rotatePointOrigin({x: 173, y: 96}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block75 = new lineSegment({x: TFlipFlopB3Block75Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block75Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block75Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block75Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block75",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block75);
TFlipFlopB3Block75.outputs[0].push({gate: TFlipFlopB3Block20, position: 0});
TFlipFlopB3Block75.outputs[1].push({gate: TFlipFlopB3Block20, position: 0});
let TFlipFlopB3Block76Rotation0 = rotatePointOrigin({x: 173, y: 96}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block76Rotation1 = rotatePointOrigin({x: 173, y: -22}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block76 = new lineSegment({x: TFlipFlopB3Block76Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block76Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block76Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block76Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block76",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block76);
TFlipFlopB3Block75.outputs[0].push({gate: TFlipFlopB3Block76, position: 0});
TFlipFlopB3Block76.outputs[1].push({gate: TFlipFlopB3Block75, position: 1});
let TFlipFlopB3Block77Rotation0 = rotatePointOrigin({x: 167, y: 53}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block77Rotation1 = rotatePointOrigin({x: 167, y: 56}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block77 = new lineSegment({x: TFlipFlopB3Block77Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block77Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block77Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block77Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block77",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block77);
TFlipFlopB3Block17.outputs[0].push({gate: TFlipFlopB3Block77, position: 0});
TFlipFlopB3Block17.outputs[1].push({gate: TFlipFlopB3Block77, position: 0});
let TFlipFlopB3Block78Rotation0 = rotatePointOrigin({x: 167, y: 56}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block78Rotation1 = rotatePointOrigin({x: 193, y: 56}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block78 = new lineSegment({x: TFlipFlopB3Block78Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block78Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block78Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block78Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block78",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block78);
TFlipFlopB3Block77.outputs[0].push({gate: TFlipFlopB3Block78, position: 0});
TFlipFlopB3Block78.outputs[1].push({gate: TFlipFlopB3Block77, position: 1});
TFlipFlopB3Block78.outputs[0].push({gate: TFlipFlopB3Block19, position: 0});
TFlipFlopB3Block78.outputs[1].push({gate: TFlipFlopB3Block19, position: 0});
let TFlipFlopB3Block79Rotation0 = rotatePointOrigin({x: 148, y: 91}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block79Rotation1 = rotatePointOrigin({x: 143, y: 91}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block79 = new lineSegment({x: TFlipFlopB3Block79Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block79Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block79Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block79Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block79",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block79);
TFlipFlopB3Block79.outputs[0].push({gate: TFlipFlopB3Block18, position: 1});
TFlipFlopB3Block79.outputs[1].push({gate: TFlipFlopB3Block18, position: 1});
let TFlipFlopB3Block80Rotation0 = rotatePointOrigin({x: 143, y: 91}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block80Rotation1 = rotatePointOrigin({x: 143, y: 78}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block80 = new lineSegment({x: TFlipFlopB3Block80Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block80Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block80Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block80Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block80",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block80);
TFlipFlopB3Block79.outputs[0].push({gate: TFlipFlopB3Block80, position: 0});
TFlipFlopB3Block80.outputs[1].push({gate: TFlipFlopB3Block79, position: 1});
let TFlipFlopB3Block81Rotation0 = rotatePointOrigin({x: 148, y: 56}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block81Rotation1 = rotatePointOrigin({x: 143, y: 56}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block81 = new lineSegment({x: TFlipFlopB3Block81Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block81Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block81Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block81Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block81",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block81);
TFlipFlopB3Block81.outputs[0].push({gate: TFlipFlopB3Block17, position: 0});
TFlipFlopB3Block81.outputs[1].push({gate: TFlipFlopB3Block17, position: 0});
let TFlipFlopB3Block82Rotation0 = rotatePointOrigin({x: 143, y: 56}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block82Rotation1 = rotatePointOrigin({x: 143, y: 68}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block82 = new lineSegment({x: TFlipFlopB3Block82Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block82Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block82Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block82Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block82",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block82);
TFlipFlopB3Block81.outputs[0].push({gate: TFlipFlopB3Block82, position: 0});
TFlipFlopB3Block82.outputs[1].push({gate: TFlipFlopB3Block81, position: 1});
let TFlipFlopB3Block83Rotation0 = rotatePointOrigin({x: 143, y: 78}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block83Rotation1 = rotatePointOrigin({x: 243, y: 68}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block83 = new lineSegment({x: TFlipFlopB3Block83Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block83Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block83Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block83Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block83",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block83);
TFlipFlopB3Block80.outputs[0].push({gate: TFlipFlopB3Block83, position: 0});
TFlipFlopB3Block83.outputs[1].push({gate: TFlipFlopB3Block80, position: 1});
TFlipFlopB3Block70.outputs[0].push({gate: TFlipFlopB3Block83, position: 1});
TFlipFlopB3Block83.outputs[0].push({gate: TFlipFlopB3Block70, position: 1});
let TFlipFlopB3Block84Rotation0 = rotatePointOrigin({x: 243, y: 78}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block84Rotation1 = rotatePointOrigin({x: 143, y: 68}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block84 = new lineSegment({x: TFlipFlopB3Block84Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block84Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block84Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block84Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block84",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block84);
TFlipFlopB3Block67.outputs[0].push({gate: TFlipFlopB3Block84, position: 0});
TFlipFlopB3Block84.outputs[1].push({gate: TFlipFlopB3Block67, position: 1});
TFlipFlopB3Block82.outputs[0].push({gate: TFlipFlopB3Block84, position: 1});
TFlipFlopB3Block84.outputs[0].push({gate: TFlipFlopB3Block82, position: 1});
let TFlipFlopB3Block85Rotation0 = rotatePointOrigin({x: 48, y: 91}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block85Rotation1 = rotatePointOrigin({x: 23, y: 91}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block85 = new lineSegment({x: TFlipFlopB3Block85Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block85Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block85Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block85Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block85",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block85);
TFlipFlopB3Block85.outputs[0].push({gate: TFlipFlopB3Block10, position: 1});
TFlipFlopB3Block85.outputs[1].push({gate: TFlipFlopB3Block10, position: 1});
let TFlipFlopB3Block86Rotation0 = rotatePointOrigin({x: 23, y: 91}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block86Rotation1 = rotatePointOrigin({x: 23, y: 56}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block86 = new lineSegment({x: TFlipFlopB3Block86Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block86Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block86Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block86Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block86",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block86);
TFlipFlopB3Block85.outputs[0].push({gate: TFlipFlopB3Block86, position: 0});
TFlipFlopB3Block86.outputs[1].push({gate: TFlipFlopB3Block85, position: 1});
let TFlipFlopB3Block87Rotation0 = rotatePointOrigin({x: 23, y: 56}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block87Rotation1 = rotatePointOrigin({x: 48, y: 56}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block87 = new lineSegment({x: TFlipFlopB3Block87Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block87Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block87Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block87Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block87",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block87);
TFlipFlopB3Block86.outputs[0].push({gate: TFlipFlopB3Block87, position: 0});
TFlipFlopB3Block87.outputs[1].push({gate: TFlipFlopB3Block86, position: 1});
TFlipFlopB3Block87.outputs[0].push({gate: TFlipFlopB3Block9, position: 0});
TFlipFlopB3Block87.outputs[1].push({gate: TFlipFlopB3Block9, position: 0});
let TFlipFlopB3Block88Rotation0 = rotatePointOrigin({x: 23, y: 56}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block88Rotation1 = rotatePointOrigin({x: 23, y: -22}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block88 = new lineSegment({x: TFlipFlopB3Block88Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block88Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block88Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block88Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block88",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block88);
TFlipFlopB3Block86.outputs[0].push({gate: TFlipFlopB3Block88, position: 0});
TFlipFlopB3Block88.outputs[1].push({gate: TFlipFlopB3Block86, position: 1});
TFlipFlopB3Block87.outputs[1].push({gate: TFlipFlopB3Block88, position: 0});
TFlipFlopB3Block88.outputs[1].push({gate: TFlipFlopB3Block87, position: 0});
let TFlipFlopB3Block89Rotation0 = rotatePointOrigin({x: 129, y: 53}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block89Rotation1 = rotatePointOrigin({x: 133, y: 53}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block89 = new lineSegment({x: TFlipFlopB3Block89Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block89Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block89Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block89Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block89",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block89);
TFlipFlopB3Block15.outputs[0].push({gate: TFlipFlopB3Block89, position: 0});
TFlipFlopB3Block15.outputs[1].push({gate: TFlipFlopB3Block89, position: 0});
let TFlipFlopB3Block90Rotation0 = rotatePointOrigin({x: 133, y: 53}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block90Rotation1 = rotatePointOrigin({x: 133, y: 38}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block90 = new lineSegment({x: TFlipFlopB3Block90Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block90Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block90Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block90Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block90",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block90);
TFlipFlopB3Block89.outputs[0].push({gate: TFlipFlopB3Block90, position: 0});
TFlipFlopB3Block90.outputs[1].push({gate: TFlipFlopB3Block89, position: 1});
let TFlipFlopB3Block91Rotation0 = rotatePointOrigin({x: 129, y: 13}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block91Rotation1 = rotatePointOrigin({x: 133, y: 13}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block91 = new lineSegment({x: TFlipFlopB3Block91Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block91Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block91Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block91Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block91",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block91);
TFlipFlopB3Block16.outputs[0].push({gate: TFlipFlopB3Block91, position: 0});
TFlipFlopB3Block16.outputs[1].push({gate: TFlipFlopB3Block91, position: 0});
let TFlipFlopB3Block92Rotation0 = rotatePointOrigin({x: 133, y: 13}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block92Rotation1 = rotatePointOrigin({x: 133, y: 28}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block92 = new lineSegment({x: TFlipFlopB3Block92Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block92Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block92Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block92Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block92",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block92);
TFlipFlopB3Block91.outputs[0].push({gate: TFlipFlopB3Block92, position: 0});
TFlipFlopB3Block92.outputs[1].push({gate: TFlipFlopB3Block91, position: 1});
let TFlipFlopB3Block93Rotation0 = rotatePointOrigin({x: 48, y: 51}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block93Rotation1 = rotatePointOrigin({x: 43, y: 51}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block93 = new lineSegment({x: TFlipFlopB3Block93Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block93Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block93Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block93Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block93",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block93);
TFlipFlopB3Block93.outputs[0].push({gate: TFlipFlopB3Block9, position: 1});
TFlipFlopB3Block93.outputs[1].push({gate: TFlipFlopB3Block9, position: 1});
let TFlipFlopB3Block94Rotation0 = rotatePointOrigin({x: 43, y: 51}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block94Rotation1 = rotatePointOrigin({x: 43, y: 38}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block94 = new lineSegment({x: TFlipFlopB3Block94Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block94Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block94Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block94Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block94",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block94);
TFlipFlopB3Block93.outputs[0].push({gate: TFlipFlopB3Block94, position: 0});
TFlipFlopB3Block94.outputs[1].push({gate: TFlipFlopB3Block93, position: 1});
let TFlipFlopB3Block95Rotation0 = rotatePointOrigin({x: 48, y: 16}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block95Rotation1 = rotatePointOrigin({x: 43, y: 16}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block95 = new lineSegment({x: TFlipFlopB3Block95Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block95Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block95Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block95Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block95",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block95);
TFlipFlopB3Block95.outputs[0].push({gate: TFlipFlopB3Block8, position: 0});
TFlipFlopB3Block95.outputs[1].push({gate: TFlipFlopB3Block8, position: 0});
let TFlipFlopB3Block96Rotation0 = rotatePointOrigin({x: 43, y: 16}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block96Rotation1 = rotatePointOrigin({x: 43, y: 28}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block96 = new lineSegment({x: TFlipFlopB3Block96Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block96Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block96Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block96Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block96",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block96);
TFlipFlopB3Block95.outputs[0].push({gate: TFlipFlopB3Block96, position: 0});
TFlipFlopB3Block96.outputs[1].push({gate: TFlipFlopB3Block95, position: 1});
let TFlipFlopB3Block97Rotation0 = rotatePointOrigin({x: 43, y: 28}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block97Rotation1 = rotatePointOrigin({x: 133, y: 38}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block97 = new lineSegment({x: TFlipFlopB3Block97Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block97Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block97Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block97Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block97",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block97);
TFlipFlopB3Block96.outputs[0].push({gate: TFlipFlopB3Block97, position: 0});
TFlipFlopB3Block97.outputs[1].push({gate: TFlipFlopB3Block96, position: 1});
TFlipFlopB3Block90.outputs[0].push({gate: TFlipFlopB3Block97, position: 1});
TFlipFlopB3Block97.outputs[0].push({gate: TFlipFlopB3Block90, position: 1});
let TFlipFlopB3Block98Rotation0 = rotatePointOrigin({x: 133, y: 28}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block98Rotation1 = rotatePointOrigin({x: 43, y: 38}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block98 = new lineSegment({x: TFlipFlopB3Block98Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block98Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block98Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block98Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block98",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block98);
TFlipFlopB3Block92.outputs[0].push({gate: TFlipFlopB3Block98, position: 0});
TFlipFlopB3Block98.outputs[1].push({gate: TFlipFlopB3Block92, position: 1});
TFlipFlopB3Block94.outputs[0].push({gate: TFlipFlopB3Block98, position: 1});
TFlipFlopB3Block98.outputs[0].push({gate: TFlipFlopB3Block94, position: 1});
let TFlipFlopB3Block99Rotation0 = rotatePointOrigin({x: 133, y: 53}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block99Rotation1 = rotatePointOrigin({x: 133, y: 51}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block99 = new lineSegment({x: TFlipFlopB3Block99Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block99Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block99Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block99Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block99",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block99);
TFlipFlopB3Block89.outputs[0].push({gate: TFlipFlopB3Block99, position: 0});
TFlipFlopB3Block99.outputs[1].push({gate: TFlipFlopB3Block89, position: 1});
TFlipFlopB3Block90.outputs[1].push({gate: TFlipFlopB3Block99, position: 0});
TFlipFlopB3Block99.outputs[1].push({gate: TFlipFlopB3Block90, position: 0});
let TFlipFlopB3Block100Rotation0 = rotatePointOrigin({x: 133, y: 51}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block100Rotation1 = rotatePointOrigin({x: 148, y: 51}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block100 = new lineSegment({x: TFlipFlopB3Block100Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block100Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block100Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block100Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block100",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block100);
TFlipFlopB3Block99.outputs[0].push({gate: TFlipFlopB3Block100, position: 0});
TFlipFlopB3Block100.outputs[1].push({gate: TFlipFlopB3Block99, position: 1});
TFlipFlopB3Block100.outputs[0].push({gate: TFlipFlopB3Block17, position: 1});
TFlipFlopB3Block100.outputs[1].push({gate: TFlipFlopB3Block17, position: 1});
let TFlipFlopB3Block101Rotation0 = rotatePointOrigin({x: 67, y: 93}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block101Rotation1 = rotatePointOrigin({x: 67, y: 96}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block101 = new lineSegment({x: TFlipFlopB3Block101Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block101Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block101Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block101Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block101",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block101);
TFlipFlopB3Block10.outputs[0].push({gate: TFlipFlopB3Block101, position: 0});
TFlipFlopB3Block10.outputs[1].push({gate: TFlipFlopB3Block101, position: 0});
let TFlipFlopB3Block102Rotation0 = rotatePointOrigin({x: 67, y: 96}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block102Rotation1 = rotatePointOrigin({x: 78, y: 96}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block102 = new lineSegment({x: TFlipFlopB3Block102Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block102Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block102Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block102Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block102",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block102);
TFlipFlopB3Block101.outputs[0].push({gate: TFlipFlopB3Block102, position: 0});
TFlipFlopB3Block102.outputs[1].push({gate: TFlipFlopB3Block101, position: 1});
TFlipFlopB3Block102.outputs[0].push({gate: TFlipFlopB3Block12, position: 0});
TFlipFlopB3Block102.outputs[1].push({gate: TFlipFlopB3Block12, position: 0});
let TFlipFlopB3Block103Rotation0 = rotatePointOrigin({x: 78, y: 91}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block103Rotation1 = rotatePointOrigin({x: 73, y: 91}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block103 = new lineSegment({x: TFlipFlopB3Block103Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block103Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block103Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block103Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block103",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block103);
TFlipFlopB3Block103.outputs[0].push({gate: TFlipFlopB3Block12, position: 1});
TFlipFlopB3Block103.outputs[1].push({gate: TFlipFlopB3Block12, position: 1});
let TFlipFlopB3Block104Rotation0 = rotatePointOrigin({x: 73, y: 91}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block104Rotation1 = rotatePointOrigin({x: 73, y: 78}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block104 = new lineSegment({x: TFlipFlopB3Block104Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block104Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block104Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block104Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block104",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block104);
TFlipFlopB3Block103.outputs[0].push({gate: TFlipFlopB3Block104, position: 0});
TFlipFlopB3Block104.outputs[1].push({gate: TFlipFlopB3Block103, position: 1});
let TFlipFlopB3Block105Rotation0 = rotatePointOrigin({x: 133, y: 53}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block105Rotation1 = rotatePointOrigin({x: 133, y: 68}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block105 = new lineSegment({x: TFlipFlopB3Block105Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block105Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block105Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block105Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block105",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block105);
TFlipFlopB3Block89.outputs[0].push({gate: TFlipFlopB3Block105, position: 0});
TFlipFlopB3Block105.outputs[1].push({gate: TFlipFlopB3Block89, position: 1});
TFlipFlopB3Block90.outputs[1].push({gate: TFlipFlopB3Block105, position: 0});
TFlipFlopB3Block105.outputs[1].push({gate: TFlipFlopB3Block90, position: 0});
TFlipFlopB3Block99.outputs[1].push({gate: TFlipFlopB3Block105, position: 0});
TFlipFlopB3Block105.outputs[1].push({gate: TFlipFlopB3Block99, position: 0});
let TFlipFlopB3Block106Rotation0 = rotatePointOrigin({x: 133, y: 68}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block106Rotation1 = rotatePointOrigin({x: 73, y: 78}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block106 = new lineSegment({x: TFlipFlopB3Block106Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block106Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block106Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block106Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block106",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block106);
TFlipFlopB3Block105.outputs[0].push({gate: TFlipFlopB3Block106, position: 0});
TFlipFlopB3Block106.outputs[1].push({gate: TFlipFlopB3Block105, position: 1});
TFlipFlopB3Block104.outputs[0].push({gate: TFlipFlopB3Block106, position: 1});
TFlipFlopB3Block106.outputs[0].push({gate: TFlipFlopB3Block104, position: 1});
let TFlipFlopB3Block107Rotation0 = rotatePointOrigin({x: 243, y: 53}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block107Rotation1 = rotatePointOrigin({x: 263, y: 53}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block107 = new lineSegment({x: TFlipFlopB3Block107Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block107Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block107Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block107Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block107",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block107);
TFlipFlopB3Block59.outputs[0].push({gate: TFlipFlopB3Block107, position: 0});
TFlipFlopB3Block107.outputs[1].push({gate: TFlipFlopB3Block59, position: 1});
TFlipFlopB3Block60.outputs[1].push({gate: TFlipFlopB3Block107, position: 0});
TFlipFlopB3Block107.outputs[1].push({gate: TFlipFlopB3Block60, position: 0});
TFlipFlopB3Block70.outputs[1].push({gate: TFlipFlopB3Block107, position: 0});
TFlipFlopB3Block107.outputs[1].push({gate: TFlipFlopB3Block70, position: 0});
let TFlipFlopB3Block108Rotation0 = rotatePointOrigin({x: 253, y: 93}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block108Rotation1 = rotatePointOrigin({x: 263, y: 93}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block108 = new lineSegment({x: TFlipFlopB3Block108Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block108Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block108Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block108Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block108",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block108);
TFlipFlopB3Block68.outputs[0].push({gate: TFlipFlopB3Block108, position: 0});
TFlipFlopB3Block108.outputs[1].push({gate: TFlipFlopB3Block68, position: 1});
TFlipFlopB3Block69.outputs[1].push({gate: TFlipFlopB3Block108, position: 0});
TFlipFlopB3Block108.outputs[1].push({gate: TFlipFlopB3Block69, position: 0});
let TFlipFlopB3Block109Rotation0 = rotatePointOrigin({x: -10, y: 23}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block109Rotation1 = rotatePointOrigin({x: -10, y: -22}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block109 = new lineSegment({x: TFlipFlopB3Block109Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block109Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block109Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block109Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block109",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block109);
TFlipFlopB3Block109.outputs[0].push({gate: TFlipFlopB3Block2, position: 1});
TFlipFlopB3Block109.outputs[1].push({gate: TFlipFlopB3Block2, position: 1});
let TFlipFlopB3Block110Rotation0 = rotatePointOrigin({x: -1, y: -6}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block110Rotation1 = rotatePointOrigin({x: -1, y: -22}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block110 = new lineSegment({x: TFlipFlopB3Block110Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block110Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block110Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block110Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block110",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block110);
TFlipFlopB3Block110.outputs[0].push({gate: TFlipFlopB3Block1, position: 0});
TFlipFlopB3Block110.outputs[1].push({gate: TFlipFlopB3Block1, position: 0});
let TFlipFlopB3Block111Rotation0 = rotatePointOrigin({x: -1, y: -22}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block111Rotation1 = rotatePointOrigin({x: -10, y: -22}, TFlipFlopB3Block.rotation);
let TFlipFlopB3Block111 = new lineSegment({x: TFlipFlopB3Block111Rotation0.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block111Rotation0.y + TFlipFlopB3Block.y}, {x: TFlipFlopB3Block111Rotation1.x + TFlipFlopB3Block.x, y: TFlipFlopB3Block111Rotation1.y + TFlipFlopB3Block.y}, "TFlipFlopB3Block111",[[],[]], TFlipFlopB3BlockMask);
globalGates.push(TFlipFlopB3Block111);
TFlipFlopB3Block110.outputs[0].push({gate: TFlipFlopB3Block111, position: 0});
TFlipFlopB3Block111.outputs[1].push({gate: TFlipFlopB3Block110, position: 1});
TFlipFlopB3Block109.outputs[0].push({gate: TFlipFlopB3Block111, position: 1});
TFlipFlopB3Block111.outputs[0].push({gate: TFlipFlopB3Block109, position: 1}); 
    
 //BinaryTo7SegBlock
let BinaryTo7SegBlock = {x: 30, y: 350, rotation: 0, name: "BinaryTo7SegBlock"};
let BinaryTo7SegBlockMask = new maskGate({x: BinaryTo7SegBlock.x -20, y: BinaryTo7SegBlock.y -25}, {x: BinaryTo7SegBlock.x+510, y: BinaryTo7SegBlock.y+695}, "BinaryTo7SegBlock", null);
globalGates.push(BinaryTo7SegBlockMask);
let BinaryTo7SegBlock1Rotation = rotatePointOrigin({x: 0.5, y: -1.5}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock1 = new notGate(BinaryTo7SegBlock.x - 9.5 + BinaryTo7SegBlock1Rotation.x, BinaryTo7SegBlock.y - 9.5 + BinaryTo7SegBlock1Rotation.y, BinaryTo7SegBlock.rotation + 0, "BinaryTo7SegBlock1",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock1);
let BinaryTo7SegBlock2Rotation = rotatePointOrigin({x: 30.5, y: -1.5}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock2 = new notGate(BinaryTo7SegBlock.x - 9.5 + BinaryTo7SegBlock2Rotation.x, BinaryTo7SegBlock.y - 9.5 + BinaryTo7SegBlock2Rotation.y, BinaryTo7SegBlock.rotation + 0, "BinaryTo7SegBlock2",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock2);
let BinaryTo7SegBlock3Rotation = rotatePointOrigin({x: 60.5, y: -1.5}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock3 = new notGate(BinaryTo7SegBlock.x - 9.5 + BinaryTo7SegBlock3Rotation.x, BinaryTo7SegBlock.y - 9.5 + BinaryTo7SegBlock3Rotation.y, BinaryTo7SegBlock.rotation + 0, "BinaryTo7SegBlock3",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock3);
let BinaryTo7SegBlock4Rotation = rotatePointOrigin({x: 90.5, y: -1.5}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock4 = new notGate(BinaryTo7SegBlock.x - 9.5 + BinaryTo7SegBlock4Rotation.x, BinaryTo7SegBlock.y - 9.5 + BinaryTo7SegBlock4Rotation.y, BinaryTo7SegBlock.rotation + 0, "BinaryTo7SegBlock4",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock4);
let BinaryTo7SegBlock5Rotation0 = rotatePointOrigin({x: 1, y: -11}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock5Rotation1 = rotatePointOrigin({x: 1, y: -17}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock5 = new lineSegment({x: BinaryTo7SegBlock5Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock5Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock5Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock5Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock5",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock5);
BinaryTo7SegBlock5.outputs[0].push({gate: BinaryTo7SegBlock1, position: 0});
BinaryTo7SegBlock5.outputs[1].push({gate: BinaryTo7SegBlock1, position: 0});
let BinaryTo7SegBlock6Rotation0 = rotatePointOrigin({x: 1, y: -17}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock6Rotation1 = rotatePointOrigin({x: -15, y: -17}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock6 = new lineSegment({x: BinaryTo7SegBlock6Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock6Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock6Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock6Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock6",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock6);
BinaryTo7SegBlock5.outputs[0].push({gate: BinaryTo7SegBlock6, position: 0});
BinaryTo7SegBlock6.outputs[1].push({gate: BinaryTo7SegBlock5, position: 1});
let BinaryTo7SegBlock7Rotation0 = rotatePointOrigin({x: -15, y: -17}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock7Rotation1 = rotatePointOrigin({x: -15, y: 13}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock7 = new lineSegment({x: BinaryTo7SegBlock7Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock7Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock7Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock7Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock7",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock7);
BinaryTo7SegBlock6.outputs[0].push({gate: BinaryTo7SegBlock7, position: 0});
BinaryTo7SegBlock7.outputs[1].push({gate: BinaryTo7SegBlock6, position: 1});
let BinaryTo7SegBlock8Rotation0 = rotatePointOrigin({x: 31, y: -11}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock8Rotation1 = rotatePointOrigin({x: 31, y: -17}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock8 = new lineSegment({x: BinaryTo7SegBlock8Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock8Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock8Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock8Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock8",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock8);
BinaryTo7SegBlock8.outputs[0].push({gate: BinaryTo7SegBlock2, position: 0});
BinaryTo7SegBlock8.outputs[1].push({gate: BinaryTo7SegBlock2, position: 0});
let BinaryTo7SegBlock9Rotation0 = rotatePointOrigin({x: 31, y: -17}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock9Rotation1 = rotatePointOrigin({x: 15, y: -17}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock9 = new lineSegment({x: BinaryTo7SegBlock9Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock9Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock9Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock9Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock9",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock9);
BinaryTo7SegBlock8.outputs[0].push({gate: BinaryTo7SegBlock9, position: 0});
BinaryTo7SegBlock9.outputs[1].push({gate: BinaryTo7SegBlock8, position: 1});
let BinaryTo7SegBlock10Rotation0 = rotatePointOrigin({x: 15, y: -17}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock10Rotation1 = rotatePointOrigin({x: 15, y: 13}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock10 = new lineSegment({x: BinaryTo7SegBlock10Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock10Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock10Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock10Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock10",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock10);
BinaryTo7SegBlock9.outputs[0].push({gate: BinaryTo7SegBlock10, position: 0});
BinaryTo7SegBlock10.outputs[1].push({gate: BinaryTo7SegBlock9, position: 1});
let BinaryTo7SegBlock11Rotation0 = rotatePointOrigin({x: 61, y: -11}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock11Rotation1 = rotatePointOrigin({x: 61, y: -17}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock11 = new lineSegment({x: BinaryTo7SegBlock11Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock11Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock11Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock11Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock11",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock11);
BinaryTo7SegBlock11.outputs[0].push({gate: BinaryTo7SegBlock3, position: 0});
BinaryTo7SegBlock11.outputs[1].push({gate: BinaryTo7SegBlock3, position: 0});
let BinaryTo7SegBlock12Rotation0 = rotatePointOrigin({x: 61, y: -17}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock12Rotation1 = rotatePointOrigin({x: 45, y: -17}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock12 = new lineSegment({x: BinaryTo7SegBlock12Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock12Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock12Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock12Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock12",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock12);
BinaryTo7SegBlock11.outputs[0].push({gate: BinaryTo7SegBlock12, position: 0});
BinaryTo7SegBlock12.outputs[1].push({gate: BinaryTo7SegBlock11, position: 1});
let BinaryTo7SegBlock13Rotation0 = rotatePointOrigin({x: 45, y: -17}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock13Rotation1 = rotatePointOrigin({x: 45, y: 3}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock13 = new lineSegment({x: BinaryTo7SegBlock13Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock13Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock13Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock13Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock13",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock13);
BinaryTo7SegBlock12.outputs[0].push({gate: BinaryTo7SegBlock13, position: 0});
BinaryTo7SegBlock13.outputs[1].push({gate: BinaryTo7SegBlock12, position: 1});
let BinaryTo7SegBlock14Rotation0 = rotatePointOrigin({x: 91, y: -11}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock14Rotation1 = rotatePointOrigin({x: 91, y: -17}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock14 = new lineSegment({x: BinaryTo7SegBlock14Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock14Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock14Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock14Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock14",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock14);
BinaryTo7SegBlock14.outputs[0].push({gate: BinaryTo7SegBlock4, position: 0});
BinaryTo7SegBlock14.outputs[1].push({gate: BinaryTo7SegBlock4, position: 0});
let BinaryTo7SegBlock15Rotation0 = rotatePointOrigin({x: 91, y: -17}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock15Rotation1 = rotatePointOrigin({x: 75, y: -17}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock15 = new lineSegment({x: BinaryTo7SegBlock15Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock15Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock15Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock15Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock15",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock15);
BinaryTo7SegBlock14.outputs[0].push({gate: BinaryTo7SegBlock15, position: 0});
BinaryTo7SegBlock15.outputs[1].push({gate: BinaryTo7SegBlock14, position: 1});
let BinaryTo7SegBlock16Rotation0 = rotatePointOrigin({x: 75, y: -17}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock16Rotation1 = rotatePointOrigin({x: 75, y: 13}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock16 = new lineSegment({x: BinaryTo7SegBlock16Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock16Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock16Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock16Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock16",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock16);
BinaryTo7SegBlock15.outputs[0].push({gate: BinaryTo7SegBlock16, position: 0});
BinaryTo7SegBlock16.outputs[1].push({gate: BinaryTo7SegBlock15, position: 1});
let BinaryTo7SegBlock17Rotation = rotatePointOrigin({x: 110, y: 18}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock17 = new andGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock17Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock17Rotation.y, BinaryTo7SegBlock.rotation + 270, "BinaryTo7SegBlock17",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock17);
let BinaryTo7SegBlock18Rotation = rotatePointOrigin({x: 140, y: 38}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock18 = new andGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock18Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock18Rotation.y, BinaryTo7SegBlock.rotation + 270, "BinaryTo7SegBlock18",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock18);
let BinaryTo7SegBlock19Rotation = rotatePointOrigin({x: 110, y: 58}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock19 = new andGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock19Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock19Rotation.y, BinaryTo7SegBlock.rotation + 270, "BinaryTo7SegBlock19",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock19);
let BinaryTo7SegBlock20Rotation = rotatePointOrigin({x: 140, y: 78}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock20 = new andGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock20Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock20Rotation.y, BinaryTo7SegBlock.rotation + 270, "BinaryTo7SegBlock20",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock20);
let BinaryTo7SegBlock21Rotation = rotatePointOrigin({x: 110, y: 98}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock21 = new andGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock21Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock21Rotation.y, BinaryTo7SegBlock.rotation + 270, "BinaryTo7SegBlock21",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock21);
let BinaryTo7SegBlock22Rotation = rotatePointOrigin({x: 110, y: 118}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock22 = new andGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock22Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock22Rotation.y, BinaryTo7SegBlock.rotation + 270, "BinaryTo7SegBlock22",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock22);
let BinaryTo7SegBlock23Rotation = rotatePointOrigin({x: 110, y: 138}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock23 = new andGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock23Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock23Rotation.y, BinaryTo7SegBlock.rotation + 270, "BinaryTo7SegBlock23",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock23);
let BinaryTo7SegBlock24Rotation = rotatePointOrigin({x: 110, y: 158}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock24 = new andGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock24Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock24Rotation.y, BinaryTo7SegBlock.rotation + 270, "BinaryTo7SegBlock24",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock24);
let BinaryTo7SegBlock25Rotation = rotatePointOrigin({x: 140, y: 178}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock25 = new andGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock25Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock25Rotation.y, BinaryTo7SegBlock.rotation + 270, "BinaryTo7SegBlock25",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock25);
let BinaryTo7SegBlock26Rotation = rotatePointOrigin({x: 140, y: 198}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock26 = new andGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock26Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock26Rotation.y, BinaryTo7SegBlock.rotation + 270, "BinaryTo7SegBlock26",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock26);
let BinaryTo7SegBlock27Rotation = rotatePointOrigin({x: 110, y: 218}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock27 = new andGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock27Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock27Rotation.y, BinaryTo7SegBlock.rotation + 270, "BinaryTo7SegBlock27",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock27);
let BinaryTo7SegBlock28Rotation = rotatePointOrigin({x: 140, y: 238}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock28 = new andGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock28Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock28Rotation.y, BinaryTo7SegBlock.rotation + 270, "BinaryTo7SegBlock28",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock28);
let BinaryTo7SegBlock29Rotation = rotatePointOrigin({x: 140, y: 258}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock29 = new andGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock29Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock29Rotation.y, BinaryTo7SegBlock.rotation + 270, "BinaryTo7SegBlock29",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock29);
let BinaryTo7SegBlock30Rotation = rotatePointOrigin({x: 110, y: 278}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock30 = new andGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock30Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock30Rotation.y, BinaryTo7SegBlock.rotation + 270, "BinaryTo7SegBlock30",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock30);
let BinaryTo7SegBlock31Rotation = rotatePointOrigin({x: 140, y: 298}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock31 = new andGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock31Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock31Rotation.y, BinaryTo7SegBlock.rotation + 270, "BinaryTo7SegBlock31",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock31);
let BinaryTo7SegBlock32Rotation = rotatePointOrigin({x: 110, y: 318}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock32 = new andGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock32Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock32Rotation.y, BinaryTo7SegBlock.rotation + 270, "BinaryTo7SegBlock32",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock32);
let BinaryTo7SegBlock33Rotation = rotatePointOrigin({x: 140, y: 338}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock33 = new andGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock33Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock33Rotation.y, BinaryTo7SegBlock.rotation + 270, "BinaryTo7SegBlock33",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock33);
let BinaryTo7SegBlock34Rotation = rotatePointOrigin({x: 110, y: 358}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock34 = new andGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock34Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock34Rotation.y, BinaryTo7SegBlock.rotation + 270, "BinaryTo7SegBlock34",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock34);
let BinaryTo7SegBlock35Rotation = rotatePointOrigin({x: 140, y: 378}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock35 = new andGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock35Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock35Rotation.y, BinaryTo7SegBlock.rotation + 270, "BinaryTo7SegBlock35",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock35);
let BinaryTo7SegBlock36Rotation = rotatePointOrigin({x: 110, y: 398}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock36 = new andGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock36Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock36Rotation.y, BinaryTo7SegBlock.rotation + 270, "BinaryTo7SegBlock36",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock36);
let BinaryTo7SegBlock37Rotation = rotatePointOrigin({x: 110, y: 418}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock37 = new andGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock37Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock37Rotation.y, BinaryTo7SegBlock.rotation + 270, "BinaryTo7SegBlock37",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock37);
let BinaryTo7SegBlock38Rotation = rotatePointOrigin({x: 110, y: 438}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock38 = new andGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock38Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock38Rotation.y, BinaryTo7SegBlock.rotation + 270, "BinaryTo7SegBlock38",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock38);
let BinaryTo7SegBlock39Rotation = rotatePointOrigin({x: 110, y: 458}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock39 = new andGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock39Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock39Rotation.y, BinaryTo7SegBlock.rotation + 270, "BinaryTo7SegBlock39",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock39);
let BinaryTo7SegBlock40Rotation = rotatePointOrigin({x: 110, y: 478}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock40 = new andGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock40Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock40Rotation.y, BinaryTo7SegBlock.rotation + 270, "BinaryTo7SegBlock40",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock40);
let BinaryTo7SegBlock41Rotation = rotatePointOrigin({x: 110, y: 498}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock41 = new andGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock41Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock41Rotation.y, BinaryTo7SegBlock.rotation + 270, "BinaryTo7SegBlock41",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock41);
let BinaryTo7SegBlock42Rotation = rotatePointOrigin({x: 140, y: 518}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock42 = new andGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock42Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock42Rotation.y, BinaryTo7SegBlock.rotation + 270, "BinaryTo7SegBlock42",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock42);
let BinaryTo7SegBlock43Rotation = rotatePointOrigin({x: 110, y: 538}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock43 = new andGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock43Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock43Rotation.y, BinaryTo7SegBlock.rotation + 270, "BinaryTo7SegBlock43",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock43);
let BinaryTo7SegBlock44Rotation = rotatePointOrigin({x: 140, y: 558}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock44 = new andGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock44Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock44Rotation.y, BinaryTo7SegBlock.rotation + 270, "BinaryTo7SegBlock44",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock44);
let BinaryTo7SegBlock45Rotation = rotatePointOrigin({x: 110, y: 578}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock45 = new andGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock45Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock45Rotation.y, BinaryTo7SegBlock.rotation + 270, "BinaryTo7SegBlock45",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock45);
let BinaryTo7SegBlock46Rotation = rotatePointOrigin({x: 140, y: 598}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock46 = new andGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock46Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock46Rotation.y, BinaryTo7SegBlock.rotation + 270, "BinaryTo7SegBlock46",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock46);
let BinaryTo7SegBlock47Rotation0 = rotatePointOrigin({x: 100, y: 16}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock47Rotation1 = rotatePointOrigin({x: 1, y: 16}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock47 = new lineSegment({x: BinaryTo7SegBlock47Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock47Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock47Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock47Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock47",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock47);
BinaryTo7SegBlock47.outputs[0].push({gate: BinaryTo7SegBlock17, position: 1});
BinaryTo7SegBlock47.outputs[1].push({gate: BinaryTo7SegBlock17, position: 1});
let BinaryTo7SegBlock48Rotation0 = rotatePointOrigin({x: 1, y: 16}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock48Rotation1 = rotatePointOrigin({x: 1, y: 9}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock48 = new lineSegment({x: BinaryTo7SegBlock48Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock48Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock48Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock48Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock48",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock48);
BinaryTo7SegBlock47.outputs[0].push({gate: BinaryTo7SegBlock48, position: 0});
BinaryTo7SegBlock48.outputs[1].push({gate: BinaryTo7SegBlock47, position: 1});
BinaryTo7SegBlock1.outputs[0].push({gate: BinaryTo7SegBlock48, position: 1});
BinaryTo7SegBlock1.outputs[1].push({gate: BinaryTo7SegBlock48, position: 1});
let BinaryTo7SegBlock49Rotation0 = rotatePointOrigin({x: 100, y: 21}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock49Rotation1 = rotatePointOrigin({x: 45, y: 21}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock49 = new lineSegment({x: BinaryTo7SegBlock49Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock49Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock49Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock49Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock49",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock49);
BinaryTo7SegBlock49.outputs[0].push({gate: BinaryTo7SegBlock17, position: 0});
BinaryTo7SegBlock49.outputs[1].push({gate: BinaryTo7SegBlock17, position: 0});
let BinaryTo7SegBlock50Rotation0 = rotatePointOrigin({x: 45, y: 21}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock50Rotation1 = rotatePointOrigin({x: 45, y: 3}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock50 = new lineSegment({x: BinaryTo7SegBlock50Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock50Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock50Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock50Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock50",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock50);
BinaryTo7SegBlock49.outputs[0].push({gate: BinaryTo7SegBlock50, position: 0});
BinaryTo7SegBlock50.outputs[1].push({gate: BinaryTo7SegBlock49, position: 1});
BinaryTo7SegBlock13.outputs[0].push({gate: BinaryTo7SegBlock50, position: 1});
BinaryTo7SegBlock50.outputs[0].push({gate: BinaryTo7SegBlock13, position: 1});
let BinaryTo7SegBlock51Rotation0 = rotatePointOrigin({x: 119, y: 18}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock51Rotation1 = rotatePointOrigin({x: 125, y: 18}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock51 = new lineSegment({x: BinaryTo7SegBlock51Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock51Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock51Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock51Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock51",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock51);
BinaryTo7SegBlock17.outputs[0].push({gate: BinaryTo7SegBlock51, position: 0});
BinaryTo7SegBlock17.outputs[1].push({gate: BinaryTo7SegBlock51, position: 0});
let BinaryTo7SegBlock52Rotation0 = rotatePointOrigin({x: 125, y: 18}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock52Rotation1 = rotatePointOrigin({x: 125, y: 33}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock52 = new lineSegment({x: BinaryTo7SegBlock52Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock52Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock52Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock52Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock52",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock52);
BinaryTo7SegBlock51.outputs[0].push({gate: BinaryTo7SegBlock52, position: 0});
BinaryTo7SegBlock52.outputs[1].push({gate: BinaryTo7SegBlock51, position: 1});
let BinaryTo7SegBlock53Rotation0 = rotatePointOrigin({x: 130, y: 36}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock53Rotation1 = rotatePointOrigin({x: 125, y: 36}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock53 = new lineSegment({x: BinaryTo7SegBlock53Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock53Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock53Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock53Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock53",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock53);
BinaryTo7SegBlock53.outputs[0].push({gate: BinaryTo7SegBlock18, position: 1});
BinaryTo7SegBlock53.outputs[1].push({gate: BinaryTo7SegBlock18, position: 1});
let BinaryTo7SegBlock54Rotation0 = rotatePointOrigin({x: 125, y: 36}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock54Rotation1 = rotatePointOrigin({x: 125, y: 33}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock54 = new lineSegment({x: BinaryTo7SegBlock54Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock54Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock54Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock54Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock54",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock54);
BinaryTo7SegBlock53.outputs[0].push({gate: BinaryTo7SegBlock54, position: 0});
BinaryTo7SegBlock54.outputs[1].push({gate: BinaryTo7SegBlock53, position: 1});
BinaryTo7SegBlock52.outputs[0].push({gate: BinaryTo7SegBlock54, position: 1});
BinaryTo7SegBlock54.outputs[0].push({gate: BinaryTo7SegBlock52, position: 1});
let BinaryTo7SegBlock55Rotation0 = rotatePointOrigin({x: 130, y: 41}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock55Rotation1 = rotatePointOrigin({x: 75, y: 41}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock55 = new lineSegment({x: BinaryTo7SegBlock55Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock55Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock55Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock55Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock55",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock55);
BinaryTo7SegBlock55.outputs[0].push({gate: BinaryTo7SegBlock18, position: 0});
BinaryTo7SegBlock55.outputs[1].push({gate: BinaryTo7SegBlock18, position: 0});
let BinaryTo7SegBlock56Rotation0 = rotatePointOrigin({x: 75, y: 41}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock56Rotation1 = rotatePointOrigin({x: 75, y: 13}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock56 = new lineSegment({x: BinaryTo7SegBlock56Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock56Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock56Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock56Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock56",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock56);
BinaryTo7SegBlock55.outputs[0].push({gate: BinaryTo7SegBlock56, position: 0});
BinaryTo7SegBlock56.outputs[1].push({gate: BinaryTo7SegBlock55, position: 1});
BinaryTo7SegBlock16.outputs[0].push({gate: BinaryTo7SegBlock56, position: 1});
BinaryTo7SegBlock56.outputs[0].push({gate: BinaryTo7SegBlock16, position: 1});
let BinaryTo7SegBlock57Rotation0 = rotatePointOrigin({x: 100, y: 56}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock57Rotation1 = rotatePointOrigin({x: 15, y: 56}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock57 = new lineSegment({x: BinaryTo7SegBlock57Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock57Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock57Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock57Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock57",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock57);
BinaryTo7SegBlock57.outputs[0].push({gate: BinaryTo7SegBlock19, position: 1});
BinaryTo7SegBlock57.outputs[1].push({gate: BinaryTo7SegBlock19, position: 1});
let BinaryTo7SegBlock58Rotation0 = rotatePointOrigin({x: 15, y: 56}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock58Rotation1 = rotatePointOrigin({x: 15, y: 13}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock58 = new lineSegment({x: BinaryTo7SegBlock58Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock58Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock58Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock58Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock58",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock58);
BinaryTo7SegBlock57.outputs[0].push({gate: BinaryTo7SegBlock58, position: 0});
BinaryTo7SegBlock58.outputs[1].push({gate: BinaryTo7SegBlock57, position: 1});
BinaryTo7SegBlock10.outputs[0].push({gate: BinaryTo7SegBlock58, position: 1});
BinaryTo7SegBlock58.outputs[0].push({gate: BinaryTo7SegBlock10, position: 1});
let BinaryTo7SegBlock59Rotation0 = rotatePointOrigin({x: 100, y: 61}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock59Rotation1 = rotatePointOrigin({x: 45, y: 61}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock59 = new lineSegment({x: BinaryTo7SegBlock59Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock59Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock59Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock59Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock59",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock59);
BinaryTo7SegBlock59.outputs[0].push({gate: BinaryTo7SegBlock19, position: 0});
BinaryTo7SegBlock59.outputs[1].push({gate: BinaryTo7SegBlock19, position: 0});
let BinaryTo7SegBlock60Rotation0 = rotatePointOrigin({x: 45, y: 61}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock60Rotation1 = rotatePointOrigin({x: 45, y: 21}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock60 = new lineSegment({x: BinaryTo7SegBlock60Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock60Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock60Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock60Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock60",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock60);
BinaryTo7SegBlock59.outputs[0].push({gate: BinaryTo7SegBlock60, position: 0});
BinaryTo7SegBlock60.outputs[1].push({gate: BinaryTo7SegBlock59, position: 1});
BinaryTo7SegBlock49.outputs[0].push({gate: BinaryTo7SegBlock60, position: 1});
BinaryTo7SegBlock60.outputs[0].push({gate: BinaryTo7SegBlock49, position: 1});
BinaryTo7SegBlock50.outputs[1].push({gate: BinaryTo7SegBlock60, position: 1});
BinaryTo7SegBlock60.outputs[0].push({gate: BinaryTo7SegBlock50, position: 0});
let BinaryTo7SegBlock61Rotation0 = rotatePointOrigin({x: 119, y: 58}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock61Rotation1 = rotatePointOrigin({x: 125, y: 58}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock61 = new lineSegment({x: BinaryTo7SegBlock61Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock61Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock61Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock61Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock61",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock61);
BinaryTo7SegBlock19.outputs[0].push({gate: BinaryTo7SegBlock61, position: 0});
BinaryTo7SegBlock19.outputs[1].push({gate: BinaryTo7SegBlock61, position: 0});
let BinaryTo7SegBlock62Rotation0 = rotatePointOrigin({x: 125, y: 58}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock62Rotation1 = rotatePointOrigin({x: 125, y: 73}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock62 = new lineSegment({x: BinaryTo7SegBlock62Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock62Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock62Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock62Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock62",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock62);
BinaryTo7SegBlock61.outputs[0].push({gate: BinaryTo7SegBlock62, position: 0});
BinaryTo7SegBlock62.outputs[1].push({gate: BinaryTo7SegBlock61, position: 1});
let BinaryTo7SegBlock63Rotation0 = rotatePointOrigin({x: 130, y: 76}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock63Rotation1 = rotatePointOrigin({x: 125, y: 76}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock63 = new lineSegment({x: BinaryTo7SegBlock63Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock63Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock63Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock63Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock63",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock63);
BinaryTo7SegBlock63.outputs[0].push({gate: BinaryTo7SegBlock20, position: 1});
BinaryTo7SegBlock63.outputs[1].push({gate: BinaryTo7SegBlock20, position: 1});
let BinaryTo7SegBlock64Rotation0 = rotatePointOrigin({x: 125, y: 76}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock64Rotation1 = rotatePointOrigin({x: 125, y: 73}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock64 = new lineSegment({x: BinaryTo7SegBlock64Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock64Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock64Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock64Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock64",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock64);
BinaryTo7SegBlock63.outputs[0].push({gate: BinaryTo7SegBlock64, position: 0});
BinaryTo7SegBlock64.outputs[1].push({gate: BinaryTo7SegBlock63, position: 1});
BinaryTo7SegBlock62.outputs[0].push({gate: BinaryTo7SegBlock64, position: 1});
BinaryTo7SegBlock64.outputs[0].push({gate: BinaryTo7SegBlock62, position: 1});
let BinaryTo7SegBlock65Rotation0 = rotatePointOrigin({x: 130, y: 81}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock65Rotation1 = rotatePointOrigin({x: 91, y: 81}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock65 = new lineSegment({x: BinaryTo7SegBlock65Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock65Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock65Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock65Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock65",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock65);
BinaryTo7SegBlock65.outputs[0].push({gate: BinaryTo7SegBlock20, position: 0});
BinaryTo7SegBlock65.outputs[1].push({gate: BinaryTo7SegBlock20, position: 0});
let BinaryTo7SegBlock66Rotation0 = rotatePointOrigin({x: 91, y: 81}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock66Rotation1 = rotatePointOrigin({x: 91, y: 9}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock66 = new lineSegment({x: BinaryTo7SegBlock66Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock66Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock66Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock66Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock66",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock66);
BinaryTo7SegBlock65.outputs[0].push({gate: BinaryTo7SegBlock66, position: 0});
BinaryTo7SegBlock66.outputs[1].push({gate: BinaryTo7SegBlock65, position: 1});
BinaryTo7SegBlock4.outputs[0].push({gate: BinaryTo7SegBlock66, position: 1});
BinaryTo7SegBlock4.outputs[1].push({gate: BinaryTo7SegBlock66, position: 1});
let BinaryTo7SegBlock67Rotation0 = rotatePointOrigin({x: 100, y: 96}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock67Rotation1 = rotatePointOrigin({x: -15, y: 96}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock67 = new lineSegment({x: BinaryTo7SegBlock67Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock67Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock67Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock67Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock67",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock67);
BinaryTo7SegBlock67.outputs[0].push({gate: BinaryTo7SegBlock21, position: 1});
BinaryTo7SegBlock67.outputs[1].push({gate: BinaryTo7SegBlock21, position: 1});
let BinaryTo7SegBlock68Rotation0 = rotatePointOrigin({x: -15, y: 96}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock68Rotation1 = rotatePointOrigin({x: -15, y: 13}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock68 = new lineSegment({x: BinaryTo7SegBlock68Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock68Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock68Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock68Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock68",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock68);
BinaryTo7SegBlock67.outputs[0].push({gate: BinaryTo7SegBlock68, position: 0});
BinaryTo7SegBlock68.outputs[1].push({gate: BinaryTo7SegBlock67, position: 1});
BinaryTo7SegBlock7.outputs[0].push({gate: BinaryTo7SegBlock68, position: 1});
BinaryTo7SegBlock68.outputs[0].push({gate: BinaryTo7SegBlock7, position: 1});
let BinaryTo7SegBlock69Rotation0 = rotatePointOrigin({x: 100, y: 101}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock69Rotation1 = rotatePointOrigin({x: 91, y: 101}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock69 = new lineSegment({x: BinaryTo7SegBlock69Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock69Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock69Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock69Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock69",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock69);
BinaryTo7SegBlock69.outputs[0].push({gate: BinaryTo7SegBlock21, position: 0});
BinaryTo7SegBlock69.outputs[1].push({gate: BinaryTo7SegBlock21, position: 0});
let BinaryTo7SegBlock70Rotation0 = rotatePointOrigin({x: 91, y: 101}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock70Rotation1 = rotatePointOrigin({x: 91, y: 81}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock70 = new lineSegment({x: BinaryTo7SegBlock70Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock70Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock70Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock70Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock70",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock70);
BinaryTo7SegBlock69.outputs[0].push({gate: BinaryTo7SegBlock70, position: 0});
BinaryTo7SegBlock70.outputs[1].push({gate: BinaryTo7SegBlock69, position: 1});
BinaryTo7SegBlock65.outputs[0].push({gate: BinaryTo7SegBlock70, position: 1});
BinaryTo7SegBlock70.outputs[0].push({gate: BinaryTo7SegBlock65, position: 1});
BinaryTo7SegBlock66.outputs[1].push({gate: BinaryTo7SegBlock70, position: 1});
BinaryTo7SegBlock70.outputs[0].push({gate: BinaryTo7SegBlock66, position: 0});
let BinaryTo7SegBlock71Rotation0 = rotatePointOrigin({x: 100, y: 116}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock71Rotation1 = rotatePointOrigin({x: 31, y: 116}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock71 = new lineSegment({x: BinaryTo7SegBlock71Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock71Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock71Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock71Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock71",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock71);
BinaryTo7SegBlock71.outputs[0].push({gate: BinaryTo7SegBlock22, position: 1});
BinaryTo7SegBlock71.outputs[1].push({gate: BinaryTo7SegBlock22, position: 1});
let BinaryTo7SegBlock72Rotation0 = rotatePointOrigin({x: 31, y: 116}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock72Rotation1 = rotatePointOrigin({x: 31, y: 9}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock72 = new lineSegment({x: BinaryTo7SegBlock72Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock72Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock72Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock72Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock72",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock72);
BinaryTo7SegBlock71.outputs[0].push({gate: BinaryTo7SegBlock72, position: 0});
BinaryTo7SegBlock72.outputs[1].push({gate: BinaryTo7SegBlock71, position: 1});
BinaryTo7SegBlock2.outputs[0].push({gate: BinaryTo7SegBlock72, position: 1});
BinaryTo7SegBlock2.outputs[1].push({gate: BinaryTo7SegBlock72, position: 1});
let BinaryTo7SegBlock73Rotation0 = rotatePointOrigin({x: 100, y: 121}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock73Rotation1 = rotatePointOrigin({x: 91, y: 121}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock73 = new lineSegment({x: BinaryTo7SegBlock73Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock73Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock73Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock73Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock73",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock73);
BinaryTo7SegBlock73.outputs[0].push({gate: BinaryTo7SegBlock22, position: 0});
BinaryTo7SegBlock73.outputs[1].push({gate: BinaryTo7SegBlock22, position: 0});
let BinaryTo7SegBlock74Rotation0 = rotatePointOrigin({x: 91, y: 121}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock74Rotation1 = rotatePointOrigin({x: 91, y: 101}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock74 = new lineSegment({x: BinaryTo7SegBlock74Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock74Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock74Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock74Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock74",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock74);
BinaryTo7SegBlock73.outputs[0].push({gate: BinaryTo7SegBlock74, position: 0});
BinaryTo7SegBlock74.outputs[1].push({gate: BinaryTo7SegBlock73, position: 1});
BinaryTo7SegBlock69.outputs[0].push({gate: BinaryTo7SegBlock74, position: 1});
BinaryTo7SegBlock74.outputs[0].push({gate: BinaryTo7SegBlock69, position: 1});
BinaryTo7SegBlock70.outputs[1].push({gate: BinaryTo7SegBlock74, position: 1});
BinaryTo7SegBlock74.outputs[0].push({gate: BinaryTo7SegBlock70, position: 0});
let BinaryTo7SegBlock75Rotation0 = rotatePointOrigin({x: 100, y: 136}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock75Rotation1 = rotatePointOrigin({x: 31, y: 136}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock75 = new lineSegment({x: BinaryTo7SegBlock75Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock75Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock75Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock75Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock75",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock75);
BinaryTo7SegBlock75.outputs[0].push({gate: BinaryTo7SegBlock23, position: 1});
BinaryTo7SegBlock75.outputs[1].push({gate: BinaryTo7SegBlock23, position: 1});
let BinaryTo7SegBlock76Rotation0 = rotatePointOrigin({x: 31, y: 136}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock76Rotation1 = rotatePointOrigin({x: 31, y: 116}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock76 = new lineSegment({x: BinaryTo7SegBlock76Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock76Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock76Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock76Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock76",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock76);
BinaryTo7SegBlock75.outputs[0].push({gate: BinaryTo7SegBlock76, position: 0});
BinaryTo7SegBlock76.outputs[1].push({gate: BinaryTo7SegBlock75, position: 1});
BinaryTo7SegBlock71.outputs[0].push({gate: BinaryTo7SegBlock76, position: 1});
BinaryTo7SegBlock76.outputs[0].push({gate: BinaryTo7SegBlock71, position: 1});
BinaryTo7SegBlock72.outputs[1].push({gate: BinaryTo7SegBlock76, position: 1});
BinaryTo7SegBlock76.outputs[0].push({gate: BinaryTo7SegBlock72, position: 0});
let BinaryTo7SegBlock77Rotation0 = rotatePointOrigin({x: 100, y: 141}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock77Rotation1 = rotatePointOrigin({x: 61, y: 141}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock77 = new lineSegment({x: BinaryTo7SegBlock77Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock77Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock77Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock77Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock77",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock77);
BinaryTo7SegBlock77.outputs[0].push({gate: BinaryTo7SegBlock23, position: 0});
BinaryTo7SegBlock77.outputs[1].push({gate: BinaryTo7SegBlock23, position: 0});
let BinaryTo7SegBlock78Rotation0 = rotatePointOrigin({x: 61, y: 141}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock78Rotation1 = rotatePointOrigin({x: 61, y: 9}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock78 = new lineSegment({x: BinaryTo7SegBlock78Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock78Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock78Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock78Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock78",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock78);
BinaryTo7SegBlock77.outputs[0].push({gate: BinaryTo7SegBlock78, position: 0});
BinaryTo7SegBlock78.outputs[1].push({gate: BinaryTo7SegBlock77, position: 1});
BinaryTo7SegBlock3.outputs[0].push({gate: BinaryTo7SegBlock78, position: 1});
BinaryTo7SegBlock3.outputs[1].push({gate: BinaryTo7SegBlock78, position: 1});
let BinaryTo7SegBlock79Rotation0 = rotatePointOrigin({x: 100, y: 156}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock79Rotation1 = rotatePointOrigin({x: 1, y: 156}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock79 = new lineSegment({x: BinaryTo7SegBlock79Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock79Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock79Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock79Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock79",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock79);
BinaryTo7SegBlock79.outputs[0].push({gate: BinaryTo7SegBlock24, position: 1});
BinaryTo7SegBlock79.outputs[1].push({gate: BinaryTo7SegBlock24, position: 1});
let BinaryTo7SegBlock80Rotation0 = rotatePointOrigin({x: 1, y: 156}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock80Rotation1 = rotatePointOrigin({x: 1, y: 16}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock80 = new lineSegment({x: BinaryTo7SegBlock80Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock80Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock80Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock80Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock80",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock80);
BinaryTo7SegBlock79.outputs[0].push({gate: BinaryTo7SegBlock80, position: 0});
BinaryTo7SegBlock80.outputs[1].push({gate: BinaryTo7SegBlock79, position: 1});
BinaryTo7SegBlock47.outputs[0].push({gate: BinaryTo7SegBlock80, position: 1});
BinaryTo7SegBlock80.outputs[0].push({gate: BinaryTo7SegBlock47, position: 1});
BinaryTo7SegBlock48.outputs[1].push({gate: BinaryTo7SegBlock80, position: 1});
BinaryTo7SegBlock80.outputs[0].push({gate: BinaryTo7SegBlock48, position: 0});
let BinaryTo7SegBlock81Rotation0 = rotatePointOrigin({x: 100, y: 161}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock81Rotation1 = rotatePointOrigin({x: 31, y: 161}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock81 = new lineSegment({x: BinaryTo7SegBlock81Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock81Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock81Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock81Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock81",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock81);
BinaryTo7SegBlock81.outputs[0].push({gate: BinaryTo7SegBlock24, position: 0});
BinaryTo7SegBlock81.outputs[1].push({gate: BinaryTo7SegBlock24, position: 0});
let BinaryTo7SegBlock82Rotation0 = rotatePointOrigin({x: 31, y: 161}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock82Rotation1 = rotatePointOrigin({x: 31, y: 136}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock82 = new lineSegment({x: BinaryTo7SegBlock82Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock82Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock82Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock82Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock82",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock82);
BinaryTo7SegBlock81.outputs[0].push({gate: BinaryTo7SegBlock82, position: 0});
BinaryTo7SegBlock82.outputs[1].push({gate: BinaryTo7SegBlock81, position: 1});
BinaryTo7SegBlock75.outputs[0].push({gate: BinaryTo7SegBlock82, position: 1});
BinaryTo7SegBlock82.outputs[0].push({gate: BinaryTo7SegBlock75, position: 1});
BinaryTo7SegBlock76.outputs[1].push({gate: BinaryTo7SegBlock82, position: 1});
BinaryTo7SegBlock82.outputs[0].push({gate: BinaryTo7SegBlock76, position: 0});
let BinaryTo7SegBlock83Rotation0 = rotatePointOrigin({x: 119, y: 158}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock83Rotation1 = rotatePointOrigin({x: 125, y: 158}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock83 = new lineSegment({x: BinaryTo7SegBlock83Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock83Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock83Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock83Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock83",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock83);
BinaryTo7SegBlock24.outputs[0].push({gate: BinaryTo7SegBlock83, position: 0});
BinaryTo7SegBlock24.outputs[1].push({gate: BinaryTo7SegBlock83, position: 0});
let BinaryTo7SegBlock84Rotation0 = rotatePointOrigin({x: 125, y: 158}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock84Rotation1 = rotatePointOrigin({x: 125, y: 173}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock84 = new lineSegment({x: BinaryTo7SegBlock84Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock84Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock84Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock84Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock84",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock84);
BinaryTo7SegBlock83.outputs[0].push({gate: BinaryTo7SegBlock84, position: 0});
BinaryTo7SegBlock84.outputs[1].push({gate: BinaryTo7SegBlock83, position: 1});
let BinaryTo7SegBlock85Rotation0 = rotatePointOrigin({x: 130, y: 176}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock85Rotation1 = rotatePointOrigin({x: 125, y: 176}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock85 = new lineSegment({x: BinaryTo7SegBlock85Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock85Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock85Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock85Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock85",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock85);
BinaryTo7SegBlock85.outputs[0].push({gate: BinaryTo7SegBlock25, position: 1});
BinaryTo7SegBlock85.outputs[1].push({gate: BinaryTo7SegBlock25, position: 1});
let BinaryTo7SegBlock86Rotation0 = rotatePointOrigin({x: 125, y: 176}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock86Rotation1 = rotatePointOrigin({x: 125, y: 173}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock86 = new lineSegment({x: BinaryTo7SegBlock86Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock86Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock86Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock86Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock86",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock86);
BinaryTo7SegBlock85.outputs[0].push({gate: BinaryTo7SegBlock86, position: 0});
BinaryTo7SegBlock86.outputs[1].push({gate: BinaryTo7SegBlock85, position: 1});
BinaryTo7SegBlock84.outputs[0].push({gate: BinaryTo7SegBlock86, position: 1});
BinaryTo7SegBlock86.outputs[0].push({gate: BinaryTo7SegBlock84, position: 1});
let BinaryTo7SegBlock87Rotation0 = rotatePointOrigin({x: 130, y: 196}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock87Rotation1 = rotatePointOrigin({x: 125, y: 196}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock87 = new lineSegment({x: BinaryTo7SegBlock87Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock87Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock87Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock87Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock87",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock87);
BinaryTo7SegBlock87.outputs[0].push({gate: BinaryTo7SegBlock26, position: 1});
BinaryTo7SegBlock87.outputs[1].push({gate: BinaryTo7SegBlock26, position: 1});
let BinaryTo7SegBlock88Rotation0 = rotatePointOrigin({x: 125, y: 196}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock88Rotation1 = rotatePointOrigin({x: 125, y: 176}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock88 = new lineSegment({x: BinaryTo7SegBlock88Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock88Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock88Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock88Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock88",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock88);
BinaryTo7SegBlock87.outputs[0].push({gate: BinaryTo7SegBlock88, position: 0});
BinaryTo7SegBlock88.outputs[1].push({gate: BinaryTo7SegBlock87, position: 1});
BinaryTo7SegBlock85.outputs[0].push({gate: BinaryTo7SegBlock88, position: 1});
BinaryTo7SegBlock88.outputs[0].push({gate: BinaryTo7SegBlock85, position: 1});
BinaryTo7SegBlock86.outputs[1].push({gate: BinaryTo7SegBlock88, position: 1});
BinaryTo7SegBlock88.outputs[0].push({gate: BinaryTo7SegBlock86, position: 0});
let BinaryTo7SegBlock89Rotation0 = rotatePointOrigin({x: 130, y: 181}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock89Rotation1 = rotatePointOrigin({x: 91, y: 181}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock89 = new lineSegment({x: BinaryTo7SegBlock89Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock89Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock89Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock89Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock89",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock89);
BinaryTo7SegBlock89.outputs[0].push({gate: BinaryTo7SegBlock25, position: 0});
BinaryTo7SegBlock89.outputs[1].push({gate: BinaryTo7SegBlock25, position: 0});
let BinaryTo7SegBlock90Rotation0 = rotatePointOrigin({x: 91, y: 181}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock90Rotation1 = rotatePointOrigin({x: 91, y: 121}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock90 = new lineSegment({x: BinaryTo7SegBlock90Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock90Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock90Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock90Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock90",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock90);
BinaryTo7SegBlock89.outputs[0].push({gate: BinaryTo7SegBlock90, position: 0});
BinaryTo7SegBlock90.outputs[1].push({gate: BinaryTo7SegBlock89, position: 1});
BinaryTo7SegBlock73.outputs[0].push({gate: BinaryTo7SegBlock90, position: 1});
BinaryTo7SegBlock90.outputs[0].push({gate: BinaryTo7SegBlock73, position: 1});
BinaryTo7SegBlock74.outputs[1].push({gate: BinaryTo7SegBlock90, position: 1});
BinaryTo7SegBlock90.outputs[0].push({gate: BinaryTo7SegBlock74, position: 0});
let BinaryTo7SegBlock91Rotation0 = rotatePointOrigin({x: 130, y: 201}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock91Rotation1 = rotatePointOrigin({x: 45, y: 201}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock91 = new lineSegment({x: BinaryTo7SegBlock91Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock91Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock91Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock91Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock91",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock91);
BinaryTo7SegBlock91.outputs[0].push({gate: BinaryTo7SegBlock26, position: 0});
BinaryTo7SegBlock91.outputs[1].push({gate: BinaryTo7SegBlock26, position: 0});
let BinaryTo7SegBlock92Rotation0 = rotatePointOrigin({x: 45, y: 201}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock92Rotation1 = rotatePointOrigin({x: 45, y: 61}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock92 = new lineSegment({x: BinaryTo7SegBlock92Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock92Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock92Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock92Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock92",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock92);
BinaryTo7SegBlock91.outputs[0].push({gate: BinaryTo7SegBlock92, position: 0});
BinaryTo7SegBlock92.outputs[1].push({gate: BinaryTo7SegBlock91, position: 1});
BinaryTo7SegBlock59.outputs[0].push({gate: BinaryTo7SegBlock92, position: 1});
BinaryTo7SegBlock92.outputs[0].push({gate: BinaryTo7SegBlock59, position: 1});
BinaryTo7SegBlock60.outputs[1].push({gate: BinaryTo7SegBlock92, position: 1});
BinaryTo7SegBlock92.outputs[0].push({gate: BinaryTo7SegBlock60, position: 0});
let BinaryTo7SegBlock93Rotation0 = rotatePointOrigin({x: 100, y: 216}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock93Rotation1 = rotatePointOrigin({x: 1, y: 216}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock93 = new lineSegment({x: BinaryTo7SegBlock93Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock93Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock93Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock93Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock93",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock93);
BinaryTo7SegBlock93.outputs[0].push({gate: BinaryTo7SegBlock27, position: 1});
BinaryTo7SegBlock93.outputs[1].push({gate: BinaryTo7SegBlock27, position: 1});
let BinaryTo7SegBlock94Rotation0 = rotatePointOrigin({x: 1, y: 216}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock94Rotation1 = rotatePointOrigin({x: 1, y: 156}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock94 = new lineSegment({x: BinaryTo7SegBlock94Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock94Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock94Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock94Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock94",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock94);
BinaryTo7SegBlock93.outputs[0].push({gate: BinaryTo7SegBlock94, position: 0});
BinaryTo7SegBlock94.outputs[1].push({gate: BinaryTo7SegBlock93, position: 1});
BinaryTo7SegBlock79.outputs[0].push({gate: BinaryTo7SegBlock94, position: 1});
BinaryTo7SegBlock94.outputs[0].push({gate: BinaryTo7SegBlock79, position: 1});
BinaryTo7SegBlock80.outputs[1].push({gate: BinaryTo7SegBlock94, position: 1});
BinaryTo7SegBlock94.outputs[0].push({gate: BinaryTo7SegBlock80, position: 0});
let BinaryTo7SegBlock95Rotation0 = rotatePointOrigin({x: 100, y: 221}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock95Rotation1 = rotatePointOrigin({x: 15, y: 221}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock95 = new lineSegment({x: BinaryTo7SegBlock95Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock95Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock95Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock95Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock95",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock95);
BinaryTo7SegBlock95.outputs[0].push({gate: BinaryTo7SegBlock27, position: 0});
BinaryTo7SegBlock95.outputs[1].push({gate: BinaryTo7SegBlock27, position: 0});
let BinaryTo7SegBlock96Rotation0 = rotatePointOrigin({x: 15, y: 221}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock96Rotation1 = rotatePointOrigin({x: 15, y: 56}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock96 = new lineSegment({x: BinaryTo7SegBlock96Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock96Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock96Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock96Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock96",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock96);
BinaryTo7SegBlock95.outputs[0].push({gate: BinaryTo7SegBlock96, position: 0});
BinaryTo7SegBlock96.outputs[1].push({gate: BinaryTo7SegBlock95, position: 1});
BinaryTo7SegBlock57.outputs[0].push({gate: BinaryTo7SegBlock96, position: 1});
BinaryTo7SegBlock96.outputs[0].push({gate: BinaryTo7SegBlock57, position: 1});
BinaryTo7SegBlock58.outputs[1].push({gate: BinaryTo7SegBlock96, position: 1});
BinaryTo7SegBlock96.outputs[0].push({gate: BinaryTo7SegBlock58, position: 0});
let BinaryTo7SegBlock97Rotation0 = rotatePointOrigin({x: 119, y: 218}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock97Rotation1 = rotatePointOrigin({x: 125, y: 218}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock97 = new lineSegment({x: BinaryTo7SegBlock97Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock97Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock97Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock97Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock97",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock97);
BinaryTo7SegBlock27.outputs[0].push({gate: BinaryTo7SegBlock97, position: 0});
BinaryTo7SegBlock27.outputs[1].push({gate: BinaryTo7SegBlock97, position: 0});
let BinaryTo7SegBlock98Rotation0 = rotatePointOrigin({x: 125, y: 218}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock98Rotation1 = rotatePointOrigin({x: 125, y: 223}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock98 = new lineSegment({x: BinaryTo7SegBlock98Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock98Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock98Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock98Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock98",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock98);
BinaryTo7SegBlock97.outputs[0].push({gate: BinaryTo7SegBlock98, position: 0});
BinaryTo7SegBlock98.outputs[1].push({gate: BinaryTo7SegBlock97, position: 1});
let BinaryTo7SegBlock99Rotation0 = rotatePointOrigin({x: 130, y: 236}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock99Rotation1 = rotatePointOrigin({x: 125, y: 236}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock99 = new lineSegment({x: BinaryTo7SegBlock99Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock99Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock99Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock99Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock99",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock99);
BinaryTo7SegBlock99.outputs[0].push({gate: BinaryTo7SegBlock28, position: 1});
BinaryTo7SegBlock99.outputs[1].push({gate: BinaryTo7SegBlock28, position: 1});
let BinaryTo7SegBlock100Rotation0 = rotatePointOrigin({x: 125, y: 236}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock100Rotation1 = rotatePointOrigin({x: 125, y: 223}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock100 = new lineSegment({x: BinaryTo7SegBlock100Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock100Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock100Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock100Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock100",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock100);
BinaryTo7SegBlock99.outputs[0].push({gate: BinaryTo7SegBlock100, position: 0});
BinaryTo7SegBlock100.outputs[1].push({gate: BinaryTo7SegBlock99, position: 1});
BinaryTo7SegBlock98.outputs[0].push({gate: BinaryTo7SegBlock100, position: 1});
BinaryTo7SegBlock100.outputs[0].push({gate: BinaryTo7SegBlock98, position: 1});
let BinaryTo7SegBlock101Rotation0 = rotatePointOrigin({x: 130, y: 256}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock101Rotation1 = rotatePointOrigin({x: 125, y: 256}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock101 = new lineSegment({x: BinaryTo7SegBlock101Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock101Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock101Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock101Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock101",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock101);
BinaryTo7SegBlock101.outputs[0].push({gate: BinaryTo7SegBlock29, position: 1});
BinaryTo7SegBlock101.outputs[1].push({gate: BinaryTo7SegBlock29, position: 1});
let BinaryTo7SegBlock102Rotation0 = rotatePointOrigin({x: 125, y: 256}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock102Rotation1 = rotatePointOrigin({x: 125, y: 236}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock102 = new lineSegment({x: BinaryTo7SegBlock102Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock102Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock102Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock102Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock102",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock102);
BinaryTo7SegBlock101.outputs[0].push({gate: BinaryTo7SegBlock102, position: 0});
BinaryTo7SegBlock102.outputs[1].push({gate: BinaryTo7SegBlock101, position: 1});
BinaryTo7SegBlock99.outputs[0].push({gate: BinaryTo7SegBlock102, position: 1});
BinaryTo7SegBlock102.outputs[0].push({gate: BinaryTo7SegBlock99, position: 1});
BinaryTo7SegBlock100.outputs[1].push({gate: BinaryTo7SegBlock102, position: 1});
BinaryTo7SegBlock102.outputs[0].push({gate: BinaryTo7SegBlock100, position: 0});
let BinaryTo7SegBlock103Rotation0 = rotatePointOrigin({x: 130, y: 241}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock103Rotation1 = rotatePointOrigin({x: 75, y: 241}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock103 = new lineSegment({x: BinaryTo7SegBlock103Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock103Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock103Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock103Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock103",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock103);
BinaryTo7SegBlock103.outputs[0].push({gate: BinaryTo7SegBlock28, position: 0});
BinaryTo7SegBlock103.outputs[1].push({gate: BinaryTo7SegBlock28, position: 0});
let BinaryTo7SegBlock104Rotation0 = rotatePointOrigin({x: 75, y: 241}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock104Rotation1 = rotatePointOrigin({x: 75, y: 41}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock104 = new lineSegment({x: BinaryTo7SegBlock104Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock104Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock104Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock104Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock104",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock104);
BinaryTo7SegBlock103.outputs[0].push({gate: BinaryTo7SegBlock104, position: 0});
BinaryTo7SegBlock104.outputs[1].push({gate: BinaryTo7SegBlock103, position: 1});
BinaryTo7SegBlock55.outputs[0].push({gate: BinaryTo7SegBlock104, position: 1});
BinaryTo7SegBlock104.outputs[0].push({gate: BinaryTo7SegBlock55, position: 1});
BinaryTo7SegBlock56.outputs[1].push({gate: BinaryTo7SegBlock104, position: 1});
BinaryTo7SegBlock104.outputs[0].push({gate: BinaryTo7SegBlock56, position: 0});
let BinaryTo7SegBlock105Rotation0 = rotatePointOrigin({x: 130, y: 261}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock105Rotation1 = rotatePointOrigin({x: 61, y: 261}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock105 = new lineSegment({x: BinaryTo7SegBlock105Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock105Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock105Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock105Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock105",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock105);
BinaryTo7SegBlock105.outputs[0].push({gate: BinaryTo7SegBlock29, position: 0});
BinaryTo7SegBlock105.outputs[1].push({gate: BinaryTo7SegBlock29, position: 0});
let BinaryTo7SegBlock106Rotation0 = rotatePointOrigin({x: 61, y: 261}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock106Rotation1 = rotatePointOrigin({x: 61, y: 141}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock106 = new lineSegment({x: BinaryTo7SegBlock106Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock106Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock106Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock106Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock106",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock106);
BinaryTo7SegBlock105.outputs[0].push({gate: BinaryTo7SegBlock106, position: 0});
BinaryTo7SegBlock106.outputs[1].push({gate: BinaryTo7SegBlock105, position: 1});
BinaryTo7SegBlock77.outputs[0].push({gate: BinaryTo7SegBlock106, position: 1});
BinaryTo7SegBlock106.outputs[0].push({gate: BinaryTo7SegBlock77, position: 1});
BinaryTo7SegBlock78.outputs[1].push({gate: BinaryTo7SegBlock106, position: 1});
BinaryTo7SegBlock106.outputs[0].push({gate: BinaryTo7SegBlock78, position: 0});
let BinaryTo7SegBlock107Rotation0 = rotatePointOrigin({x: 100, y: 276}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock107Rotation1 = rotatePointOrigin({x: -15, y: 276}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock107 = new lineSegment({x: BinaryTo7SegBlock107Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock107Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock107Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock107Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock107",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock107);
BinaryTo7SegBlock107.outputs[0].push({gate: BinaryTo7SegBlock30, position: 1});
BinaryTo7SegBlock107.outputs[1].push({gate: BinaryTo7SegBlock30, position: 1});
let BinaryTo7SegBlock108Rotation0 = rotatePointOrigin({x: -15, y: 276}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock108Rotation1 = rotatePointOrigin({x: -15, y: 96}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock108 = new lineSegment({x: BinaryTo7SegBlock108Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock108Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock108Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock108Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock108",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock108);
BinaryTo7SegBlock107.outputs[0].push({gate: BinaryTo7SegBlock108, position: 0});
BinaryTo7SegBlock108.outputs[1].push({gate: BinaryTo7SegBlock107, position: 1});
BinaryTo7SegBlock67.outputs[0].push({gate: BinaryTo7SegBlock108, position: 1});
BinaryTo7SegBlock108.outputs[0].push({gate: BinaryTo7SegBlock67, position: 1});
BinaryTo7SegBlock68.outputs[1].push({gate: BinaryTo7SegBlock108, position: 1});
BinaryTo7SegBlock108.outputs[0].push({gate: BinaryTo7SegBlock68, position: 0});
let BinaryTo7SegBlock109Rotation0 = rotatePointOrigin({x: 100, y: 281}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock109Rotation1 = rotatePointOrigin({x: 31, y: 281}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock109 = new lineSegment({x: BinaryTo7SegBlock109Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock109Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock109Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock109Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock109",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock109);
BinaryTo7SegBlock109.outputs[0].push({gate: BinaryTo7SegBlock30, position: 0});
BinaryTo7SegBlock109.outputs[1].push({gate: BinaryTo7SegBlock30, position: 0});
let BinaryTo7SegBlock110Rotation0 = rotatePointOrigin({x: 31, y: 281}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock110Rotation1 = rotatePointOrigin({x: 31, y: 161}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock110 = new lineSegment({x: BinaryTo7SegBlock110Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock110Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock110Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock110Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock110",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock110);
BinaryTo7SegBlock109.outputs[0].push({gate: BinaryTo7SegBlock110, position: 0});
BinaryTo7SegBlock110.outputs[1].push({gate: BinaryTo7SegBlock109, position: 1});
BinaryTo7SegBlock81.outputs[0].push({gate: BinaryTo7SegBlock110, position: 1});
BinaryTo7SegBlock110.outputs[0].push({gate: BinaryTo7SegBlock81, position: 1});
BinaryTo7SegBlock82.outputs[1].push({gate: BinaryTo7SegBlock110, position: 1});
BinaryTo7SegBlock110.outputs[0].push({gate: BinaryTo7SegBlock82, position: 0});
let BinaryTo7SegBlock111Rotation0 = rotatePointOrigin({x: 119, y: 278}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock111Rotation1 = rotatePointOrigin({x: 125, y: 278}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock111 = new lineSegment({x: BinaryTo7SegBlock111Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock111Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock111Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock111Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock111",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock111);
BinaryTo7SegBlock30.outputs[0].push({gate: BinaryTo7SegBlock111, position: 0});
BinaryTo7SegBlock30.outputs[1].push({gate: BinaryTo7SegBlock111, position: 0});
let BinaryTo7SegBlock112Rotation0 = rotatePointOrigin({x: 125, y: 278}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock112Rotation1 = rotatePointOrigin({x: 125, y: 293}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock112 = new lineSegment({x: BinaryTo7SegBlock112Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock112Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock112Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock112Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock112",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock112);
BinaryTo7SegBlock111.outputs[0].push({gate: BinaryTo7SegBlock112, position: 0});
BinaryTo7SegBlock112.outputs[1].push({gate: BinaryTo7SegBlock111, position: 1});
let BinaryTo7SegBlock113Rotation0 = rotatePointOrigin({x: 130, y: 296}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock113Rotation1 = rotatePointOrigin({x: 125, y: 296}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock113 = new lineSegment({x: BinaryTo7SegBlock113Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock113Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock113Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock113Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock113",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock113);
BinaryTo7SegBlock113.outputs[0].push({gate: BinaryTo7SegBlock31, position: 1});
BinaryTo7SegBlock113.outputs[1].push({gate: BinaryTo7SegBlock31, position: 1});
let BinaryTo7SegBlock114Rotation0 = rotatePointOrigin({x: 125, y: 296}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock114Rotation1 = rotatePointOrigin({x: 125, y: 293}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock114 = new lineSegment({x: BinaryTo7SegBlock114Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock114Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock114Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock114Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock114",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock114);
BinaryTo7SegBlock113.outputs[0].push({gate: BinaryTo7SegBlock114, position: 0});
BinaryTo7SegBlock114.outputs[1].push({gate: BinaryTo7SegBlock113, position: 1});
BinaryTo7SegBlock112.outputs[0].push({gate: BinaryTo7SegBlock114, position: 1});
BinaryTo7SegBlock114.outputs[0].push({gate: BinaryTo7SegBlock112, position: 1});
let BinaryTo7SegBlock115Rotation0 = rotatePointOrigin({x: 130, y: 301}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock115Rotation1 = rotatePointOrigin({x: 61, y: 301}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock115 = new lineSegment({x: BinaryTo7SegBlock115Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock115Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock115Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock115Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock115",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock115);
BinaryTo7SegBlock115.outputs[0].push({gate: BinaryTo7SegBlock31, position: 0});
BinaryTo7SegBlock115.outputs[1].push({gate: BinaryTo7SegBlock31, position: 0});
let BinaryTo7SegBlock116Rotation0 = rotatePointOrigin({x: 61, y: 301}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock116Rotation1 = rotatePointOrigin({x: 61, y: 261}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock116 = new lineSegment({x: BinaryTo7SegBlock116Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock116Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock116Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock116Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock116",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock116);
BinaryTo7SegBlock115.outputs[0].push({gate: BinaryTo7SegBlock116, position: 0});
BinaryTo7SegBlock116.outputs[1].push({gate: BinaryTo7SegBlock115, position: 1});
BinaryTo7SegBlock105.outputs[0].push({gate: BinaryTo7SegBlock116, position: 1});
BinaryTo7SegBlock116.outputs[0].push({gate: BinaryTo7SegBlock105, position: 1});
BinaryTo7SegBlock106.outputs[1].push({gate: BinaryTo7SegBlock116, position: 1});
BinaryTo7SegBlock116.outputs[0].push({gate: BinaryTo7SegBlock106, position: 0});
let BinaryTo7SegBlock117Rotation0 = rotatePointOrigin({x: 100, y: 316}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock117Rotation1 = rotatePointOrigin({x: 61, y: 316}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock117 = new lineSegment({x: BinaryTo7SegBlock117Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock117Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock117Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock117Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock117",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock117);
BinaryTo7SegBlock117.outputs[0].push({gate: BinaryTo7SegBlock32, position: 1});
BinaryTo7SegBlock117.outputs[1].push({gate: BinaryTo7SegBlock32, position: 1});
let BinaryTo7SegBlock118Rotation0 = rotatePointOrigin({x: 61, y: 316}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock118Rotation1 = rotatePointOrigin({x: 61, y: 301}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock118 = new lineSegment({x: BinaryTo7SegBlock118Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock118Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock118Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock118Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock118",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock118);
BinaryTo7SegBlock117.outputs[0].push({gate: BinaryTo7SegBlock118, position: 0});
BinaryTo7SegBlock118.outputs[1].push({gate: BinaryTo7SegBlock117, position: 1});
BinaryTo7SegBlock115.outputs[0].push({gate: BinaryTo7SegBlock118, position: 1});
BinaryTo7SegBlock118.outputs[0].push({gate: BinaryTo7SegBlock115, position: 1});
BinaryTo7SegBlock116.outputs[1].push({gate: BinaryTo7SegBlock118, position: 1});
BinaryTo7SegBlock118.outputs[0].push({gate: BinaryTo7SegBlock116, position: 0});
let BinaryTo7SegBlock119Rotation0 = rotatePointOrigin({x: 100, y: 321}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock119Rotation1 = rotatePointOrigin({x: 75, y: 321}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock119 = new lineSegment({x: BinaryTo7SegBlock119Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock119Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock119Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock119Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock119",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock119);
BinaryTo7SegBlock119.outputs[0].push({gate: BinaryTo7SegBlock32, position: 0});
BinaryTo7SegBlock119.outputs[1].push({gate: BinaryTo7SegBlock32, position: 0});
let BinaryTo7SegBlock120Rotation0 = rotatePointOrigin({x: 75, y: 321}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock120Rotation1 = rotatePointOrigin({x: 75, y: 241}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock120 = new lineSegment({x: BinaryTo7SegBlock120Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock120Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock120Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock120Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock120",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock120);
BinaryTo7SegBlock119.outputs[0].push({gate: BinaryTo7SegBlock120, position: 0});
BinaryTo7SegBlock120.outputs[1].push({gate: BinaryTo7SegBlock119, position: 1});
BinaryTo7SegBlock103.outputs[0].push({gate: BinaryTo7SegBlock120, position: 1});
BinaryTo7SegBlock120.outputs[0].push({gate: BinaryTo7SegBlock103, position: 1});
BinaryTo7SegBlock104.outputs[1].push({gate: BinaryTo7SegBlock120, position: 1});
BinaryTo7SegBlock120.outputs[0].push({gate: BinaryTo7SegBlock104, position: 0});
let BinaryTo7SegBlock121Rotation0 = rotatePointOrigin({x: 119, y: 318}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock121Rotation1 = rotatePointOrigin({x: 125, y: 318}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock121 = new lineSegment({x: BinaryTo7SegBlock121Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock121Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock121Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock121Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock121",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock121);
BinaryTo7SegBlock32.outputs[0].push({gate: BinaryTo7SegBlock121, position: 0});
BinaryTo7SegBlock32.outputs[1].push({gate: BinaryTo7SegBlock121, position: 0});
let BinaryTo7SegBlock122Rotation0 = rotatePointOrigin({x: 125, y: 318}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock122Rotation1 = rotatePointOrigin({x: 125, y: 333}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock122 = new lineSegment({x: BinaryTo7SegBlock122Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock122Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock122Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock122Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock122",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock122);
BinaryTo7SegBlock121.outputs[0].push({gate: BinaryTo7SegBlock122, position: 0});
BinaryTo7SegBlock122.outputs[1].push({gate: BinaryTo7SegBlock121, position: 1});
let BinaryTo7SegBlock123Rotation0 = rotatePointOrigin({x: 130, y: 336}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock123Rotation1 = rotatePointOrigin({x: 125, y: 336}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock123 = new lineSegment({x: BinaryTo7SegBlock123Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock123Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock123Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock123Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock123",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock123);
BinaryTo7SegBlock123.outputs[0].push({gate: BinaryTo7SegBlock33, position: 1});
BinaryTo7SegBlock123.outputs[1].push({gate: BinaryTo7SegBlock33, position: 1});
let BinaryTo7SegBlock124Rotation0 = rotatePointOrigin({x: 125, y: 336}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock124Rotation1 = rotatePointOrigin({x: 125, y: 333}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock124 = new lineSegment({x: BinaryTo7SegBlock124Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock124Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock124Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock124Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock124",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock124);
BinaryTo7SegBlock123.outputs[0].push({gate: BinaryTo7SegBlock124, position: 0});
BinaryTo7SegBlock124.outputs[1].push({gate: BinaryTo7SegBlock123, position: 1});
BinaryTo7SegBlock122.outputs[0].push({gate: BinaryTo7SegBlock124, position: 1});
BinaryTo7SegBlock124.outputs[0].push({gate: BinaryTo7SegBlock122, position: 1});
let BinaryTo7SegBlock125Rotation0 = rotatePointOrigin({x: 130, y: 341}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock125Rotation1 = rotatePointOrigin({x: 15, y: 341}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock125 = new lineSegment({x: BinaryTo7SegBlock125Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock125Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock125Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock125Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock125",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock125);
BinaryTo7SegBlock125.outputs[0].push({gate: BinaryTo7SegBlock33, position: 0});
BinaryTo7SegBlock125.outputs[1].push({gate: BinaryTo7SegBlock33, position: 0});
let BinaryTo7SegBlock126Rotation0 = rotatePointOrigin({x: 15, y: 341}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock126Rotation1 = rotatePointOrigin({x: 15, y: 221}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock126 = new lineSegment({x: BinaryTo7SegBlock126Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock126Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock126Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock126Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock126",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock126);
BinaryTo7SegBlock125.outputs[0].push({gate: BinaryTo7SegBlock126, position: 0});
BinaryTo7SegBlock126.outputs[1].push({gate: BinaryTo7SegBlock125, position: 1});
BinaryTo7SegBlock95.outputs[0].push({gate: BinaryTo7SegBlock126, position: 1});
BinaryTo7SegBlock126.outputs[0].push({gate: BinaryTo7SegBlock95, position: 1});
BinaryTo7SegBlock96.outputs[1].push({gate: BinaryTo7SegBlock126, position: 1});
BinaryTo7SegBlock126.outputs[0].push({gate: BinaryTo7SegBlock96, position: 0});
let BinaryTo7SegBlock127Rotation0 = rotatePointOrigin({x: 100, y: 356}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock127Rotation1 = rotatePointOrigin({x: 1, y: 356}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock127 = new lineSegment({x: BinaryTo7SegBlock127Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock127Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock127Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock127Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock127",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock127);
BinaryTo7SegBlock127.outputs[0].push({gate: BinaryTo7SegBlock34, position: 1});
BinaryTo7SegBlock127.outputs[1].push({gate: BinaryTo7SegBlock34, position: 1});
let BinaryTo7SegBlock128Rotation0 = rotatePointOrigin({x: 1, y: 356}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock128Rotation1 = rotatePointOrigin({x: 1, y: 216}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock128 = new lineSegment({x: BinaryTo7SegBlock128Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock128Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock128Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock128Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock128",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock128);
BinaryTo7SegBlock127.outputs[0].push({gate: BinaryTo7SegBlock128, position: 0});
BinaryTo7SegBlock128.outputs[1].push({gate: BinaryTo7SegBlock127, position: 1});
BinaryTo7SegBlock93.outputs[0].push({gate: BinaryTo7SegBlock128, position: 1});
BinaryTo7SegBlock128.outputs[0].push({gate: BinaryTo7SegBlock93, position: 1});
BinaryTo7SegBlock94.outputs[1].push({gate: BinaryTo7SegBlock128, position: 1});
BinaryTo7SegBlock128.outputs[0].push({gate: BinaryTo7SegBlock94, position: 0});
let BinaryTo7SegBlock129Rotation0 = rotatePointOrigin({x: 100, y: 361}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock129Rotation1 = rotatePointOrigin({x: 61, y: 361}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock129 = new lineSegment({x: BinaryTo7SegBlock129Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock129Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock129Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock129Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock129",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock129);
BinaryTo7SegBlock129.outputs[0].push({gate: BinaryTo7SegBlock34, position: 0});
BinaryTo7SegBlock129.outputs[1].push({gate: BinaryTo7SegBlock34, position: 0});
let BinaryTo7SegBlock130Rotation0 = rotatePointOrigin({x: 61, y: 361}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock130Rotation1 = rotatePointOrigin({x: 61, y: 316}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock130 = new lineSegment({x: BinaryTo7SegBlock130Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock130Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock130Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock130Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock130",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock130);
BinaryTo7SegBlock129.outputs[0].push({gate: BinaryTo7SegBlock130, position: 0});
BinaryTo7SegBlock130.outputs[1].push({gate: BinaryTo7SegBlock129, position: 1});
BinaryTo7SegBlock117.outputs[0].push({gate: BinaryTo7SegBlock130, position: 1});
BinaryTo7SegBlock130.outputs[0].push({gate: BinaryTo7SegBlock117, position: 1});
BinaryTo7SegBlock118.outputs[1].push({gate: BinaryTo7SegBlock130, position: 1});
BinaryTo7SegBlock130.outputs[0].push({gate: BinaryTo7SegBlock118, position: 0});
let BinaryTo7SegBlock131Rotation0 = rotatePointOrigin({x: 119, y: 358}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock131Rotation1 = rotatePointOrigin({x: 125, y: 358}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock131 = new lineSegment({x: BinaryTo7SegBlock131Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock131Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock131Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock131Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock131",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock131);
BinaryTo7SegBlock34.outputs[0].push({gate: BinaryTo7SegBlock131, position: 0});
BinaryTo7SegBlock34.outputs[1].push({gate: BinaryTo7SegBlock131, position: 0});
let BinaryTo7SegBlock132Rotation0 = rotatePointOrigin({x: 125, y: 358}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock132Rotation1 = rotatePointOrigin({x: 125, y: 373}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock132 = new lineSegment({x: BinaryTo7SegBlock132Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock132Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock132Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock132Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock132",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock132);
BinaryTo7SegBlock131.outputs[0].push({gate: BinaryTo7SegBlock132, position: 0});
BinaryTo7SegBlock132.outputs[1].push({gate: BinaryTo7SegBlock131, position: 1});
let BinaryTo7SegBlock133Rotation0 = rotatePointOrigin({x: 130, y: 376}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock133Rotation1 = rotatePointOrigin({x: 125, y: 376}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock133 = new lineSegment({x: BinaryTo7SegBlock133Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock133Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock133Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock133Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock133",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock133);
BinaryTo7SegBlock133.outputs[0].push({gate: BinaryTo7SegBlock35, position: 1});
BinaryTo7SegBlock133.outputs[1].push({gate: BinaryTo7SegBlock35, position: 1});
let BinaryTo7SegBlock134Rotation0 = rotatePointOrigin({x: 125, y: 376}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock134Rotation1 = rotatePointOrigin({x: 125, y: 373}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock134 = new lineSegment({x: BinaryTo7SegBlock134Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock134Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock134Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock134Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock134",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock134);
BinaryTo7SegBlock133.outputs[0].push({gate: BinaryTo7SegBlock134, position: 0});
BinaryTo7SegBlock134.outputs[1].push({gate: BinaryTo7SegBlock133, position: 1});
BinaryTo7SegBlock132.outputs[0].push({gate: BinaryTo7SegBlock134, position: 1});
BinaryTo7SegBlock134.outputs[0].push({gate: BinaryTo7SegBlock132, position: 1});
let BinaryTo7SegBlock135Rotation0 = rotatePointOrigin({x: 130, y: 381}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock135Rotation1 = rotatePointOrigin({x: 91, y: 381}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock135 = new lineSegment({x: BinaryTo7SegBlock135Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock135Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock135Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock135Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock135",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock135);
BinaryTo7SegBlock135.outputs[0].push({gate: BinaryTo7SegBlock35, position: 0});
BinaryTo7SegBlock135.outputs[1].push({gate: BinaryTo7SegBlock35, position: 0});
let BinaryTo7SegBlock136Rotation0 = rotatePointOrigin({x: 91, y: 381}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock136Rotation1 = rotatePointOrigin({x: 91, y: 181}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock136 = new lineSegment({x: BinaryTo7SegBlock136Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock136Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock136Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock136Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock136",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock136);
BinaryTo7SegBlock135.outputs[0].push({gate: BinaryTo7SegBlock136, position: 0});
BinaryTo7SegBlock136.outputs[1].push({gate: BinaryTo7SegBlock135, position: 1});
BinaryTo7SegBlock89.outputs[0].push({gate: BinaryTo7SegBlock136, position: 1});
BinaryTo7SegBlock136.outputs[0].push({gate: BinaryTo7SegBlock89, position: 1});
BinaryTo7SegBlock90.outputs[1].push({gate: BinaryTo7SegBlock136, position: 1});
BinaryTo7SegBlock136.outputs[0].push({gate: BinaryTo7SegBlock90, position: 0});
let BinaryTo7SegBlock137Rotation0 = rotatePointOrigin({x: 100, y: 396}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock137Rotation1 = rotatePointOrigin({x: 1, y: 396}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock137 = new lineSegment({x: BinaryTo7SegBlock137Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock137Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock137Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock137Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock137",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock137);
BinaryTo7SegBlock137.outputs[0].push({gate: BinaryTo7SegBlock36, position: 1});
BinaryTo7SegBlock137.outputs[1].push({gate: BinaryTo7SegBlock36, position: 1});
let BinaryTo7SegBlock138Rotation0 = rotatePointOrigin({x: 1, y: 396}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock138Rotation1 = rotatePointOrigin({x: 1, y: 356}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock138 = new lineSegment({x: BinaryTo7SegBlock138Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock138Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock138Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock138Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock138",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock138);
BinaryTo7SegBlock137.outputs[0].push({gate: BinaryTo7SegBlock138, position: 0});
BinaryTo7SegBlock138.outputs[1].push({gate: BinaryTo7SegBlock137, position: 1});
BinaryTo7SegBlock127.outputs[0].push({gate: BinaryTo7SegBlock138, position: 1});
BinaryTo7SegBlock138.outputs[0].push({gate: BinaryTo7SegBlock127, position: 1});
BinaryTo7SegBlock128.outputs[1].push({gate: BinaryTo7SegBlock138, position: 1});
BinaryTo7SegBlock138.outputs[0].push({gate: BinaryTo7SegBlock128, position: 0});
let BinaryTo7SegBlock139Rotation0 = rotatePointOrigin({x: 100, y: 401}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock139Rotation1 = rotatePointOrigin({x: 75, y: 401}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock139 = new lineSegment({x: BinaryTo7SegBlock139Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock139Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock139Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock139Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock139",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock139);
BinaryTo7SegBlock139.outputs[0].push({gate: BinaryTo7SegBlock36, position: 0});
BinaryTo7SegBlock139.outputs[1].push({gate: BinaryTo7SegBlock36, position: 0});
let BinaryTo7SegBlock140Rotation0 = rotatePointOrigin({x: 75, y: 401}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock140Rotation1 = rotatePointOrigin({x: 75, y: 321}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock140 = new lineSegment({x: BinaryTo7SegBlock140Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock140Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock140Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock140Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock140",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock140);
BinaryTo7SegBlock139.outputs[0].push({gate: BinaryTo7SegBlock140, position: 0});
BinaryTo7SegBlock140.outputs[1].push({gate: BinaryTo7SegBlock139, position: 1});
BinaryTo7SegBlock119.outputs[0].push({gate: BinaryTo7SegBlock140, position: 1});
BinaryTo7SegBlock140.outputs[0].push({gate: BinaryTo7SegBlock119, position: 1});
BinaryTo7SegBlock120.outputs[1].push({gate: BinaryTo7SegBlock140, position: 1});
BinaryTo7SegBlock140.outputs[0].push({gate: BinaryTo7SegBlock120, position: 0});
let BinaryTo7SegBlock141Rotation0 = rotatePointOrigin({x: 100, y: 416}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock141Rotation1 = rotatePointOrigin({x: -15, y: 416}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock141 = new lineSegment({x: BinaryTo7SegBlock141Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock141Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock141Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock141Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock141",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock141);
BinaryTo7SegBlock141.outputs[0].push({gate: BinaryTo7SegBlock37, position: 1});
BinaryTo7SegBlock141.outputs[1].push({gate: BinaryTo7SegBlock37, position: 1});
let BinaryTo7SegBlock142Rotation0 = rotatePointOrigin({x: -15, y: 416}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock142Rotation1 = rotatePointOrigin({x: -15, y: 276}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock142 = new lineSegment({x: BinaryTo7SegBlock142Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock142Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock142Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock142Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock142",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock142);
BinaryTo7SegBlock141.outputs[0].push({gate: BinaryTo7SegBlock142, position: 0});
BinaryTo7SegBlock142.outputs[1].push({gate: BinaryTo7SegBlock141, position: 1});
BinaryTo7SegBlock107.outputs[0].push({gate: BinaryTo7SegBlock142, position: 1});
BinaryTo7SegBlock142.outputs[0].push({gate: BinaryTo7SegBlock107, position: 1});
BinaryTo7SegBlock108.outputs[1].push({gate: BinaryTo7SegBlock142, position: 1});
BinaryTo7SegBlock142.outputs[0].push({gate: BinaryTo7SegBlock108, position: 0});
let BinaryTo7SegBlock143Rotation0 = rotatePointOrigin({x: 100, y: 421}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock143Rotation1 = rotatePointOrigin({x: 45, y: 421}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock143 = new lineSegment({x: BinaryTo7SegBlock143Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock143Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock143Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock143Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock143",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock143);
BinaryTo7SegBlock143.outputs[0].push({gate: BinaryTo7SegBlock37, position: 0});
BinaryTo7SegBlock143.outputs[1].push({gate: BinaryTo7SegBlock37, position: 0});
let BinaryTo7SegBlock144Rotation0 = rotatePointOrigin({x: 45, y: 421}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock144Rotation1 = rotatePointOrigin({x: 45, y: 201}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock144 = new lineSegment({x: BinaryTo7SegBlock144Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock144Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock144Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock144Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock144",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock144);
BinaryTo7SegBlock143.outputs[0].push({gate: BinaryTo7SegBlock144, position: 0});
BinaryTo7SegBlock144.outputs[1].push({gate: BinaryTo7SegBlock143, position: 1});
BinaryTo7SegBlock91.outputs[0].push({gate: BinaryTo7SegBlock144, position: 1});
BinaryTo7SegBlock144.outputs[0].push({gate: BinaryTo7SegBlock91, position: 1});
BinaryTo7SegBlock92.outputs[1].push({gate: BinaryTo7SegBlock144, position: 1});
BinaryTo7SegBlock144.outputs[0].push({gate: BinaryTo7SegBlock92, position: 0});
let BinaryTo7SegBlock145Rotation0 = rotatePointOrigin({x: 100, y: 436}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock145Rotation1 = rotatePointOrigin({x: -15, y: 436}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock145 = new lineSegment({x: BinaryTo7SegBlock145Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock145Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock145Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock145Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock145",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock145);
BinaryTo7SegBlock145.outputs[0].push({gate: BinaryTo7SegBlock38, position: 1});
BinaryTo7SegBlock145.outputs[1].push({gate: BinaryTo7SegBlock38, position: 1});
let BinaryTo7SegBlock146Rotation0 = rotatePointOrigin({x: -15, y: 436}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock146Rotation1 = rotatePointOrigin({x: -15, y: 416}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock146 = new lineSegment({x: BinaryTo7SegBlock146Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock146Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock146Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock146Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock146",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock146);
BinaryTo7SegBlock145.outputs[0].push({gate: BinaryTo7SegBlock146, position: 0});
BinaryTo7SegBlock146.outputs[1].push({gate: BinaryTo7SegBlock145, position: 1});
BinaryTo7SegBlock141.outputs[0].push({gate: BinaryTo7SegBlock146, position: 1});
BinaryTo7SegBlock146.outputs[0].push({gate: BinaryTo7SegBlock141, position: 1});
BinaryTo7SegBlock142.outputs[1].push({gate: BinaryTo7SegBlock146, position: 1});
BinaryTo7SegBlock146.outputs[0].push({gate: BinaryTo7SegBlock142, position: 0});
let BinaryTo7SegBlock147Rotation0 = rotatePointOrigin({x: 100, y: 441}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock147Rotation1 = rotatePointOrigin({x: 15, y: 441}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock147 = new lineSegment({x: BinaryTo7SegBlock147Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock147Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock147Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock147Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock147",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock147);
BinaryTo7SegBlock147.outputs[0].push({gate: BinaryTo7SegBlock38, position: 0});
BinaryTo7SegBlock147.outputs[1].push({gate: BinaryTo7SegBlock38, position: 0});
let BinaryTo7SegBlock148Rotation0 = rotatePointOrigin({x: 15, y: 441}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock148Rotation1 = rotatePointOrigin({x: 15, y: 341}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock148 = new lineSegment({x: BinaryTo7SegBlock148Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock148Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock148Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock148Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock148",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock148);
BinaryTo7SegBlock147.outputs[0].push({gate: BinaryTo7SegBlock148, position: 0});
BinaryTo7SegBlock148.outputs[1].push({gate: BinaryTo7SegBlock147, position: 1});
BinaryTo7SegBlock125.outputs[0].push({gate: BinaryTo7SegBlock148, position: 1});
BinaryTo7SegBlock148.outputs[0].push({gate: BinaryTo7SegBlock125, position: 1});
BinaryTo7SegBlock126.outputs[1].push({gate: BinaryTo7SegBlock148, position: 1});
BinaryTo7SegBlock148.outputs[0].push({gate: BinaryTo7SegBlock126, position: 0});
let BinaryTo7SegBlock149Rotation0 = rotatePointOrigin({x: 100, y: 456}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock149Rotation1 = rotatePointOrigin({x: 45, y: 456}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock149 = new lineSegment({x: BinaryTo7SegBlock149Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock149Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock149Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock149Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock149",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock149);
BinaryTo7SegBlock149.outputs[0].push({gate: BinaryTo7SegBlock39, position: 1});
BinaryTo7SegBlock149.outputs[1].push({gate: BinaryTo7SegBlock39, position: 1});
let BinaryTo7SegBlock150Rotation0 = rotatePointOrigin({x: 45, y: 456}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock150Rotation1 = rotatePointOrigin({x: 45, y: 421}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock150 = new lineSegment({x: BinaryTo7SegBlock150Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock150Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock150Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock150Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock150",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock150);
BinaryTo7SegBlock149.outputs[0].push({gate: BinaryTo7SegBlock150, position: 0});
BinaryTo7SegBlock150.outputs[1].push({gate: BinaryTo7SegBlock149, position: 1});
BinaryTo7SegBlock143.outputs[0].push({gate: BinaryTo7SegBlock150, position: 1});
BinaryTo7SegBlock150.outputs[0].push({gate: BinaryTo7SegBlock143, position: 1});
BinaryTo7SegBlock144.outputs[1].push({gate: BinaryTo7SegBlock150, position: 1});
BinaryTo7SegBlock150.outputs[0].push({gate: BinaryTo7SegBlock144, position: 0});
let BinaryTo7SegBlock151Rotation0 = rotatePointOrigin({x: 100, y: 461}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock151Rotation1 = rotatePointOrigin({x: 91, y: 461}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock151 = new lineSegment({x: BinaryTo7SegBlock151Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock151Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock151Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock151Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock151",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock151);
BinaryTo7SegBlock151.outputs[0].push({gate: BinaryTo7SegBlock39, position: 0});
BinaryTo7SegBlock151.outputs[1].push({gate: BinaryTo7SegBlock39, position: 0});
let BinaryTo7SegBlock152Rotation0 = rotatePointOrigin({x: 91, y: 461}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock152Rotation1 = rotatePointOrigin({x: 91, y: 381}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock152 = new lineSegment({x: BinaryTo7SegBlock152Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock152Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock152Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock152Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock152",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock152);
BinaryTo7SegBlock151.outputs[0].push({gate: BinaryTo7SegBlock152, position: 0});
BinaryTo7SegBlock152.outputs[1].push({gate: BinaryTo7SegBlock151, position: 1});
BinaryTo7SegBlock135.outputs[0].push({gate: BinaryTo7SegBlock152, position: 1});
BinaryTo7SegBlock152.outputs[0].push({gate: BinaryTo7SegBlock135, position: 1});
BinaryTo7SegBlock136.outputs[1].push({gate: BinaryTo7SegBlock152, position: 1});
BinaryTo7SegBlock152.outputs[0].push({gate: BinaryTo7SegBlock136, position: 0});
let BinaryTo7SegBlock153Rotation0 = rotatePointOrigin({x: 100, y: 476}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock153Rotation1 = rotatePointOrigin({x: 15, y: 476}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock153 = new lineSegment({x: BinaryTo7SegBlock153Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock153Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock153Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock153Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock153",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock153);
BinaryTo7SegBlock153.outputs[0].push({gate: BinaryTo7SegBlock40, position: 1});
BinaryTo7SegBlock153.outputs[1].push({gate: BinaryTo7SegBlock40, position: 1});
let BinaryTo7SegBlock154Rotation0 = rotatePointOrigin({x: 15, y: 476}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock154Rotation1 = rotatePointOrigin({x: 15, y: 441}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock154 = new lineSegment({x: BinaryTo7SegBlock154Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock154Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock154Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock154Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock154",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock154);
BinaryTo7SegBlock153.outputs[0].push({gate: BinaryTo7SegBlock154, position: 0});
BinaryTo7SegBlock154.outputs[1].push({gate: BinaryTo7SegBlock153, position: 1});
BinaryTo7SegBlock147.outputs[0].push({gate: BinaryTo7SegBlock154, position: 1});
BinaryTo7SegBlock154.outputs[0].push({gate: BinaryTo7SegBlock147, position: 1});
BinaryTo7SegBlock148.outputs[1].push({gate: BinaryTo7SegBlock154, position: 1});
BinaryTo7SegBlock154.outputs[0].push({gate: BinaryTo7SegBlock148, position: 0});
let BinaryTo7SegBlock155Rotation0 = rotatePointOrigin({x: 100, y: 481}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock155Rotation1 = rotatePointOrigin({x: 91, y: 481}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock155 = new lineSegment({x: BinaryTo7SegBlock155Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock155Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock155Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock155Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock155",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock155);
BinaryTo7SegBlock155.outputs[0].push({gate: BinaryTo7SegBlock40, position: 0});
BinaryTo7SegBlock155.outputs[1].push({gate: BinaryTo7SegBlock40, position: 0});
let BinaryTo7SegBlock156Rotation0 = rotatePointOrigin({x: 91, y: 481}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock156Rotation1 = rotatePointOrigin({x: 91, y: 461}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock156 = new lineSegment({x: BinaryTo7SegBlock156Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock156Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock156Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock156Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock156",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock156);
BinaryTo7SegBlock155.outputs[0].push({gate: BinaryTo7SegBlock156, position: 0});
BinaryTo7SegBlock156.outputs[1].push({gate: BinaryTo7SegBlock155, position: 1});
BinaryTo7SegBlock151.outputs[0].push({gate: BinaryTo7SegBlock156, position: 1});
BinaryTo7SegBlock156.outputs[0].push({gate: BinaryTo7SegBlock151, position: 1});
BinaryTo7SegBlock152.outputs[1].push({gate: BinaryTo7SegBlock156, position: 1});
BinaryTo7SegBlock156.outputs[0].push({gate: BinaryTo7SegBlock152, position: 0});
let BinaryTo7SegBlock157Rotation0 = rotatePointOrigin({x: 100, y: 496}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock157Rotation1 = rotatePointOrigin({x: 61, y: 496}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock157 = new lineSegment({x: BinaryTo7SegBlock157Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock157Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock157Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock157Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock157",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock157);
BinaryTo7SegBlock157.outputs[0].push({gate: BinaryTo7SegBlock41, position: 1});
BinaryTo7SegBlock157.outputs[1].push({gate: BinaryTo7SegBlock41, position: 1});
let BinaryTo7SegBlock158Rotation0 = rotatePointOrigin({x: 61, y: 496}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock158Rotation1 = rotatePointOrigin({x: 61, y: 361}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock158 = new lineSegment({x: BinaryTo7SegBlock158Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock158Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock158Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock158Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock158",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock158);
BinaryTo7SegBlock157.outputs[0].push({gate: BinaryTo7SegBlock158, position: 0});
BinaryTo7SegBlock158.outputs[1].push({gate: BinaryTo7SegBlock157, position: 1});
BinaryTo7SegBlock129.outputs[0].push({gate: BinaryTo7SegBlock158, position: 1});
BinaryTo7SegBlock158.outputs[0].push({gate: BinaryTo7SegBlock129, position: 1});
BinaryTo7SegBlock130.outputs[1].push({gate: BinaryTo7SegBlock158, position: 1});
BinaryTo7SegBlock158.outputs[0].push({gate: BinaryTo7SegBlock130, position: 0});
let BinaryTo7SegBlock159Rotation0 = rotatePointOrigin({x: 100, y: 501}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock159Rotation1 = rotatePointOrigin({x: 91, y: 501}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock159 = new lineSegment({x: BinaryTo7SegBlock159Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock159Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock159Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock159Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock159",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock159);
BinaryTo7SegBlock159.outputs[0].push({gate: BinaryTo7SegBlock41, position: 0});
BinaryTo7SegBlock159.outputs[1].push({gate: BinaryTo7SegBlock41, position: 0});
let BinaryTo7SegBlock160Rotation0 = rotatePointOrigin({x: 91, y: 501}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock160Rotation1 = rotatePointOrigin({x: 91, y: 481}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock160 = new lineSegment({x: BinaryTo7SegBlock160Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock160Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock160Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock160Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock160",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock160);
BinaryTo7SegBlock159.outputs[0].push({gate: BinaryTo7SegBlock160, position: 0});
BinaryTo7SegBlock160.outputs[1].push({gate: BinaryTo7SegBlock159, position: 1});
BinaryTo7SegBlock155.outputs[0].push({gate: BinaryTo7SegBlock160, position: 1});
BinaryTo7SegBlock160.outputs[0].push({gate: BinaryTo7SegBlock155, position: 1});
BinaryTo7SegBlock156.outputs[1].push({gate: BinaryTo7SegBlock160, position: 1});
BinaryTo7SegBlock160.outputs[0].push({gate: BinaryTo7SegBlock156, position: 0});
let BinaryTo7SegBlock161Rotation0 = rotatePointOrigin({x: 119, y: 498}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock161Rotation1 = rotatePointOrigin({x: 125, y: 498}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock161 = new lineSegment({x: BinaryTo7SegBlock161Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock161Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock161Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock161Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock161",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock161);
BinaryTo7SegBlock41.outputs[0].push({gate: BinaryTo7SegBlock161, position: 0});
BinaryTo7SegBlock41.outputs[1].push({gate: BinaryTo7SegBlock161, position: 0});
let BinaryTo7SegBlock162Rotation0 = rotatePointOrigin({x: 125, y: 498}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock162Rotation1 = rotatePointOrigin({x: 125, y: 513}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock162 = new lineSegment({x: BinaryTo7SegBlock162Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock162Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock162Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock162Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock162",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock162);
BinaryTo7SegBlock161.outputs[0].push({gate: BinaryTo7SegBlock162, position: 0});
BinaryTo7SegBlock162.outputs[1].push({gate: BinaryTo7SegBlock161, position: 1});
let BinaryTo7SegBlock163Rotation0 = rotatePointOrigin({x: 130, y: 516}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock163Rotation1 = rotatePointOrigin({x: 125, y: 516}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock163 = new lineSegment({x: BinaryTo7SegBlock163Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock163Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock163Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock163Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock163",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock163);
BinaryTo7SegBlock163.outputs[0].push({gate: BinaryTo7SegBlock42, position: 1});
BinaryTo7SegBlock163.outputs[1].push({gate: BinaryTo7SegBlock42, position: 1});
let BinaryTo7SegBlock164Rotation0 = rotatePointOrigin({x: 125, y: 516}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock164Rotation1 = rotatePointOrigin({x: 125, y: 513}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock164 = new lineSegment({x: BinaryTo7SegBlock164Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock164Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock164Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock164Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock164",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock164);
BinaryTo7SegBlock163.outputs[0].push({gate: BinaryTo7SegBlock164, position: 0});
BinaryTo7SegBlock164.outputs[1].push({gate: BinaryTo7SegBlock163, position: 1});
BinaryTo7SegBlock162.outputs[0].push({gate: BinaryTo7SegBlock164, position: 1});
BinaryTo7SegBlock164.outputs[0].push({gate: BinaryTo7SegBlock162, position: 1});
let BinaryTo7SegBlock165Rotation0 = rotatePointOrigin({x: 130, y: 521}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock165Rotation1 = rotatePointOrigin({x: -15, y: 521}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock165 = new lineSegment({x: BinaryTo7SegBlock165Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock165Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock165Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock165Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock165",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock165);
BinaryTo7SegBlock165.outputs[0].push({gate: BinaryTo7SegBlock42, position: 0});
BinaryTo7SegBlock165.outputs[1].push({gate: BinaryTo7SegBlock42, position: 0});
let BinaryTo7SegBlock166Rotation0 = rotatePointOrigin({x: -15, y: 521}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock166Rotation1 = rotatePointOrigin({x: -15, y: 436}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock166 = new lineSegment({x: BinaryTo7SegBlock166Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock166Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock166Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock166Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock166",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock166);
BinaryTo7SegBlock165.outputs[0].push({gate: BinaryTo7SegBlock166, position: 0});
BinaryTo7SegBlock166.outputs[1].push({gate: BinaryTo7SegBlock165, position: 1});
BinaryTo7SegBlock145.outputs[0].push({gate: BinaryTo7SegBlock166, position: 1});
BinaryTo7SegBlock166.outputs[0].push({gate: BinaryTo7SegBlock145, position: 1});
BinaryTo7SegBlock146.outputs[1].push({gate: BinaryTo7SegBlock166, position: 1});
BinaryTo7SegBlock166.outputs[0].push({gate: BinaryTo7SegBlock146, position: 0});
let BinaryTo7SegBlock167Rotation0 = rotatePointOrigin({x: 100, y: 536}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock167Rotation1 = rotatePointOrigin({x: -15, y: 536}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock167 = new lineSegment({x: BinaryTo7SegBlock167Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock167Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock167Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock167Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock167",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock167);
BinaryTo7SegBlock167.outputs[0].push({gate: BinaryTo7SegBlock43, position: 1});
BinaryTo7SegBlock167.outputs[1].push({gate: BinaryTo7SegBlock43, position: 1});
let BinaryTo7SegBlock168Rotation0 = rotatePointOrigin({x: -15, y: 536}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock168Rotation1 = rotatePointOrigin({x: -15, y: 521}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock168 = new lineSegment({x: BinaryTo7SegBlock168Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock168Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock168Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock168Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock168",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock168);
BinaryTo7SegBlock167.outputs[0].push({gate: BinaryTo7SegBlock168, position: 0});
BinaryTo7SegBlock168.outputs[1].push({gate: BinaryTo7SegBlock167, position: 1});
BinaryTo7SegBlock165.outputs[0].push({gate: BinaryTo7SegBlock168, position: 1});
BinaryTo7SegBlock168.outputs[0].push({gate: BinaryTo7SegBlock165, position: 1});
BinaryTo7SegBlock166.outputs[1].push({gate: BinaryTo7SegBlock168, position: 1});
BinaryTo7SegBlock168.outputs[0].push({gate: BinaryTo7SegBlock166, position: 0});
let BinaryTo7SegBlock169Rotation0 = rotatePointOrigin({x: 100, y: 541}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock169Rotation1 = rotatePointOrigin({x: 75, y: 541}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock169 = new lineSegment({x: BinaryTo7SegBlock169Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock169Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock169Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock169Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock169",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock169);
BinaryTo7SegBlock169.outputs[0].push({gate: BinaryTo7SegBlock43, position: 0});
BinaryTo7SegBlock169.outputs[1].push({gate: BinaryTo7SegBlock43, position: 0});
let BinaryTo7SegBlock170Rotation0 = rotatePointOrigin({x: 75, y: 541}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock170Rotation1 = rotatePointOrigin({x: 75, y: 401}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock170 = new lineSegment({x: BinaryTo7SegBlock170Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock170Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock170Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock170Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock170",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock170);
BinaryTo7SegBlock169.outputs[0].push({gate: BinaryTo7SegBlock170, position: 0});
BinaryTo7SegBlock170.outputs[1].push({gate: BinaryTo7SegBlock169, position: 1});
BinaryTo7SegBlock139.outputs[0].push({gate: BinaryTo7SegBlock170, position: 1});
BinaryTo7SegBlock170.outputs[0].push({gate: BinaryTo7SegBlock139, position: 1});
BinaryTo7SegBlock140.outputs[1].push({gate: BinaryTo7SegBlock170, position: 1});
BinaryTo7SegBlock170.outputs[0].push({gate: BinaryTo7SegBlock140, position: 0});
let BinaryTo7SegBlock171Rotation0 = rotatePointOrigin({x: 119, y: 538}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock171Rotation1 = rotatePointOrigin({x: 125, y: 538}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock171 = new lineSegment({x: BinaryTo7SegBlock171Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock171Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock171Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock171Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock171",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock171);
BinaryTo7SegBlock43.outputs[0].push({gate: BinaryTo7SegBlock171, position: 0});
BinaryTo7SegBlock43.outputs[1].push({gate: BinaryTo7SegBlock171, position: 0});
let BinaryTo7SegBlock172Rotation0 = rotatePointOrigin({x: 125, y: 538}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock172Rotation1 = rotatePointOrigin({x: 125, y: 553}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock172 = new lineSegment({x: BinaryTo7SegBlock172Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock172Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock172Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock172Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock172",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock172);
BinaryTo7SegBlock171.outputs[0].push({gate: BinaryTo7SegBlock172, position: 0});
BinaryTo7SegBlock172.outputs[1].push({gate: BinaryTo7SegBlock171, position: 1});
let BinaryTo7SegBlock173Rotation0 = rotatePointOrigin({x: 130, y: 556}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock173Rotation1 = rotatePointOrigin({x: 125, y: 556}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock173 = new lineSegment({x: BinaryTo7SegBlock173Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock173Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock173Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock173Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock173",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock173);
BinaryTo7SegBlock173.outputs[0].push({gate: BinaryTo7SegBlock44, position: 1});
BinaryTo7SegBlock173.outputs[1].push({gate: BinaryTo7SegBlock44, position: 1});
let BinaryTo7SegBlock174Rotation0 = rotatePointOrigin({x: 125, y: 556}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock174Rotation1 = rotatePointOrigin({x: 125, y: 553}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock174 = new lineSegment({x: BinaryTo7SegBlock174Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock174Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock174Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock174Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock174",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock174);
BinaryTo7SegBlock173.outputs[0].push({gate: BinaryTo7SegBlock174, position: 0});
BinaryTo7SegBlock174.outputs[1].push({gate: BinaryTo7SegBlock173, position: 1});
BinaryTo7SegBlock172.outputs[0].push({gate: BinaryTo7SegBlock174, position: 1});
BinaryTo7SegBlock174.outputs[0].push({gate: BinaryTo7SegBlock172, position: 1});
let BinaryTo7SegBlock175Rotation0 = rotatePointOrigin({x: 130, y: 561}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock175Rotation1 = rotatePointOrigin({x: 61, y: 561}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock175 = new lineSegment({x: BinaryTo7SegBlock175Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock175Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock175Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock175Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock175",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock175);
BinaryTo7SegBlock175.outputs[0].push({gate: BinaryTo7SegBlock44, position: 0});
BinaryTo7SegBlock175.outputs[1].push({gate: BinaryTo7SegBlock44, position: 0});
let BinaryTo7SegBlock176Rotation0 = rotatePointOrigin({x: 61, y: 561}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock176Rotation1 = rotatePointOrigin({x: 61, y: 496}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock176 = new lineSegment({x: BinaryTo7SegBlock176Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock176Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock176Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock176Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock176",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock176);
BinaryTo7SegBlock175.outputs[0].push({gate: BinaryTo7SegBlock176, position: 0});
BinaryTo7SegBlock176.outputs[1].push({gate: BinaryTo7SegBlock175, position: 1});
BinaryTo7SegBlock157.outputs[0].push({gate: BinaryTo7SegBlock176, position: 1});
BinaryTo7SegBlock176.outputs[0].push({gate: BinaryTo7SegBlock157, position: 1});
BinaryTo7SegBlock158.outputs[1].push({gate: BinaryTo7SegBlock176, position: 1});
BinaryTo7SegBlock176.outputs[0].push({gate: BinaryTo7SegBlock158, position: 0});
let BinaryTo7SegBlock177Rotation0 = rotatePointOrigin({x: 100, y: 576}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock177Rotation1 = rotatePointOrigin({x: 31, y: 576}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock177 = new lineSegment({x: BinaryTo7SegBlock177Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock177Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock177Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock177Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock177",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock177);
BinaryTo7SegBlock177.outputs[0].push({gate: BinaryTo7SegBlock45, position: 1});
BinaryTo7SegBlock177.outputs[1].push({gate: BinaryTo7SegBlock45, position: 1});
let BinaryTo7SegBlock178Rotation0 = rotatePointOrigin({x: 31, y: 576}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock178Rotation1 = rotatePointOrigin({x: 31, y: 281}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock178 = new lineSegment({x: BinaryTo7SegBlock178Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock178Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock178Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock178Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock178",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock178);
BinaryTo7SegBlock177.outputs[0].push({gate: BinaryTo7SegBlock178, position: 0});
BinaryTo7SegBlock178.outputs[1].push({gate: BinaryTo7SegBlock177, position: 1});
BinaryTo7SegBlock109.outputs[0].push({gate: BinaryTo7SegBlock178, position: 1});
BinaryTo7SegBlock178.outputs[0].push({gate: BinaryTo7SegBlock109, position: 1});
BinaryTo7SegBlock110.outputs[1].push({gate: BinaryTo7SegBlock178, position: 1});
BinaryTo7SegBlock178.outputs[0].push({gate: BinaryTo7SegBlock110, position: 0});
let BinaryTo7SegBlock179Rotation0 = rotatePointOrigin({x: 100, y: 581}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock179Rotation1 = rotatePointOrigin({x: 45, y: 581}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock179 = new lineSegment({x: BinaryTo7SegBlock179Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock179Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock179Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock179Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock179",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock179);
BinaryTo7SegBlock179.outputs[0].push({gate: BinaryTo7SegBlock45, position: 0});
BinaryTo7SegBlock179.outputs[1].push({gate: BinaryTo7SegBlock45, position: 0});
let BinaryTo7SegBlock180Rotation0 = rotatePointOrigin({x: 45, y: 581}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock180Rotation1 = rotatePointOrigin({x: 45, y: 456}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock180 = new lineSegment({x: BinaryTo7SegBlock180Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock180Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock180Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock180Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock180",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock180);
BinaryTo7SegBlock179.outputs[0].push({gate: BinaryTo7SegBlock180, position: 0});
BinaryTo7SegBlock180.outputs[1].push({gate: BinaryTo7SegBlock179, position: 1});
BinaryTo7SegBlock149.outputs[0].push({gate: BinaryTo7SegBlock180, position: 1});
BinaryTo7SegBlock180.outputs[0].push({gate: BinaryTo7SegBlock149, position: 1});
BinaryTo7SegBlock150.outputs[1].push({gate: BinaryTo7SegBlock180, position: 1});
BinaryTo7SegBlock180.outputs[0].push({gate: BinaryTo7SegBlock150, position: 0});
let BinaryTo7SegBlock181Rotation0 = rotatePointOrigin({x: 119, y: 578}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock181Rotation1 = rotatePointOrigin({x: 125, y: 578}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock181 = new lineSegment({x: BinaryTo7SegBlock181Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock181Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock181Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock181Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock181",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock181);
BinaryTo7SegBlock45.outputs[0].push({gate: BinaryTo7SegBlock181, position: 0});
BinaryTo7SegBlock45.outputs[1].push({gate: BinaryTo7SegBlock181, position: 0});
let BinaryTo7SegBlock182Rotation0 = rotatePointOrigin({x: 125, y: 578}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock182Rotation1 = rotatePointOrigin({x: 125, y: 593}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock182 = new lineSegment({x: BinaryTo7SegBlock182Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock182Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock182Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock182Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock182",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock182);
BinaryTo7SegBlock181.outputs[0].push({gate: BinaryTo7SegBlock182, position: 0});
BinaryTo7SegBlock182.outputs[1].push({gate: BinaryTo7SegBlock181, position: 1});
let BinaryTo7SegBlock183Rotation0 = rotatePointOrigin({x: 130, y: 596}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock183Rotation1 = rotatePointOrigin({x: 125, y: 596}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock183 = new lineSegment({x: BinaryTo7SegBlock183Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock183Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock183Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock183Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock183",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock183);
BinaryTo7SegBlock183.outputs[0].push({gate: BinaryTo7SegBlock46, position: 1});
BinaryTo7SegBlock183.outputs[1].push({gate: BinaryTo7SegBlock46, position: 1});
let BinaryTo7SegBlock184Rotation0 = rotatePointOrigin({x: 125, y: 596}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock184Rotation1 = rotatePointOrigin({x: 125, y: 593}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock184 = new lineSegment({x: BinaryTo7SegBlock184Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock184Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock184Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock184Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock184",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock184);
BinaryTo7SegBlock183.outputs[0].push({gate: BinaryTo7SegBlock184, position: 0});
BinaryTo7SegBlock184.outputs[1].push({gate: BinaryTo7SegBlock183, position: 1});
BinaryTo7SegBlock182.outputs[0].push({gate: BinaryTo7SegBlock184, position: 1});
BinaryTo7SegBlock184.outputs[0].push({gate: BinaryTo7SegBlock182, position: 1});
let BinaryTo7SegBlock185Rotation0 = rotatePointOrigin({x: 130, y: 601}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock185Rotation1 = rotatePointOrigin({x: 75, y: 601}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock185 = new lineSegment({x: BinaryTo7SegBlock185Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock185Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock185Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock185Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock185",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock185);
BinaryTo7SegBlock185.outputs[0].push({gate: BinaryTo7SegBlock46, position: 0});
BinaryTo7SegBlock185.outputs[1].push({gate: BinaryTo7SegBlock46, position: 0});
let BinaryTo7SegBlock186Rotation0 = rotatePointOrigin({x: 75, y: 601}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock186Rotation1 = rotatePointOrigin({x: 75, y: 541}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock186 = new lineSegment({x: BinaryTo7SegBlock186Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock186Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock186Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock186Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock186",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock186);
BinaryTo7SegBlock185.outputs[0].push({gate: BinaryTo7SegBlock186, position: 0});
BinaryTo7SegBlock186.outputs[1].push({gate: BinaryTo7SegBlock185, position: 1});
BinaryTo7SegBlock169.outputs[0].push({gate: BinaryTo7SegBlock186, position: 1});
BinaryTo7SegBlock186.outputs[0].push({gate: BinaryTo7SegBlock169, position: 1});
BinaryTo7SegBlock170.outputs[1].push({gate: BinaryTo7SegBlock186, position: 1});
BinaryTo7SegBlock186.outputs[0].push({gate: BinaryTo7SegBlock170, position: 0});
let BinaryTo7SegBlock187Rotation = rotatePointOrigin({x: 160, y: 618}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock187 = new orGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock187Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock187Rotation.y, BinaryTo7SegBlock.rotation + 0, "BinaryTo7SegBlock187",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock187);
let BinaryTo7SegBlock188Rotation = rotatePointOrigin({x: 180, y: 618}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock188 = new orGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock188Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock188Rotation.y, BinaryTo7SegBlock.rotation + 0, "BinaryTo7SegBlock188",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock188);
let BinaryTo7SegBlock189Rotation = rotatePointOrigin({x: 200, y: 618}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock189 = new orGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock189Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock189Rotation.y, BinaryTo7SegBlock.rotation + 0, "BinaryTo7SegBlock189",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock189);
let BinaryTo7SegBlock190Rotation = rotatePointOrigin({x: 170, y: 648}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock190 = new orGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock190Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock190Rotation.y, BinaryTo7SegBlock.rotation + 0, "BinaryTo7SegBlock190",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock190);
let BinaryTo7SegBlock191Rotation = rotatePointOrigin({x: 180, y: 678}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock191 = new orGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock191Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock191Rotation.y, BinaryTo7SegBlock.rotation + 0, "BinaryTo7SegBlock191",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock191);
let BinaryTo7SegBlock192Rotation = rotatePointOrigin({x: 220, y: 618}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock192 = new orGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock192Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock192Rotation.y, BinaryTo7SegBlock.rotation + 0, "BinaryTo7SegBlock192",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock192);
let BinaryTo7SegBlock193Rotation = rotatePointOrigin({x: 240, y: 618}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock193 = new orGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock193Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock193Rotation.y, BinaryTo7SegBlock.rotation + 0, "BinaryTo7SegBlock193",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock193);
let BinaryTo7SegBlock194Rotation = rotatePointOrigin({x: 260, y: 618}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock194 = new orGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock194Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock194Rotation.y, BinaryTo7SegBlock.rotation + 0, "BinaryTo7SegBlock194",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock194);
let BinaryTo7SegBlock195Rotation = rotatePointOrigin({x: 230, y: 648}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock195 = new orGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock195Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock195Rotation.y, BinaryTo7SegBlock.rotation + 0, "BinaryTo7SegBlock195",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock195);
let BinaryTo7SegBlock196Rotation = rotatePointOrigin({x: 240, y: 678}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock196 = new orGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock196Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock196Rotation.y, BinaryTo7SegBlock.rotation + 0, "BinaryTo7SegBlock196",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock196);
let BinaryTo7SegBlock197Rotation0 = rotatePointOrigin({x: 125, y: 18}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock197Rotation1 = rotatePointOrigin({x: 157, y: 18}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock197 = new lineSegment({x: BinaryTo7SegBlock197Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock197Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock197Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock197Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock197",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock197);
BinaryTo7SegBlock51.outputs[0].push({gate: BinaryTo7SegBlock197, position: 0});
BinaryTo7SegBlock197.outputs[1].push({gate: BinaryTo7SegBlock51, position: 1});
BinaryTo7SegBlock52.outputs[1].push({gate: BinaryTo7SegBlock197, position: 0});
BinaryTo7SegBlock197.outputs[1].push({gate: BinaryTo7SegBlock52, position: 0});
let BinaryTo7SegBlock198Rotation0 = rotatePointOrigin({x: 157, y: 18}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock198Rotation1 = rotatePointOrigin({x: 157, y: 613}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock198 = new lineSegment({x: BinaryTo7SegBlock198Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock198Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock198Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock198Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock198",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock198);
BinaryTo7SegBlock197.outputs[0].push({gate: BinaryTo7SegBlock198, position: 0});
BinaryTo7SegBlock198.outputs[1].push({gate: BinaryTo7SegBlock197, position: 1});
BinaryTo7SegBlock198.outputs[0].push({gate: BinaryTo7SegBlock187, position: 0});
BinaryTo7SegBlock198.outputs[1].push({gate: BinaryTo7SegBlock187, position: 0});
let BinaryTo7SegBlock199Rotation0 = rotatePointOrigin({x: 125, y: 58}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock199Rotation1 = rotatePointOrigin({x: 162, y: 58}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock199 = new lineSegment({x: BinaryTo7SegBlock199Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock199Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock199Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock199Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock199",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock199);
BinaryTo7SegBlock61.outputs[0].push({gate: BinaryTo7SegBlock199, position: 0});
BinaryTo7SegBlock199.outputs[1].push({gate: BinaryTo7SegBlock61, position: 1});
BinaryTo7SegBlock62.outputs[1].push({gate: BinaryTo7SegBlock199, position: 0});
BinaryTo7SegBlock199.outputs[1].push({gate: BinaryTo7SegBlock62, position: 0});
let BinaryTo7SegBlock200Rotation0 = rotatePointOrigin({x: 162, y: 58}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock200Rotation1 = rotatePointOrigin({x: 162, y: 613}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock200 = new lineSegment({x: BinaryTo7SegBlock200Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock200Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock200Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock200Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock200",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock200);
BinaryTo7SegBlock199.outputs[0].push({gate: BinaryTo7SegBlock200, position: 0});
BinaryTo7SegBlock200.outputs[1].push({gate: BinaryTo7SegBlock199, position: 1});
BinaryTo7SegBlock200.outputs[0].push({gate: BinaryTo7SegBlock187, position: 1});
BinaryTo7SegBlock200.outputs[1].push({gate: BinaryTo7SegBlock187, position: 1});
let BinaryTo7SegBlock201Rotation0 = rotatePointOrigin({x: 119, y: 98}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock201Rotation1 = rotatePointOrigin({x: 177, y: 98}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock201 = new lineSegment({x: BinaryTo7SegBlock201Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock201Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock201Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock201Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock201",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock201);
BinaryTo7SegBlock21.outputs[0].push({gate: BinaryTo7SegBlock201, position: 0});
BinaryTo7SegBlock21.outputs[1].push({gate: BinaryTo7SegBlock201, position: 0});
let BinaryTo7SegBlock202Rotation0 = rotatePointOrigin({x: 177, y: 98}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock202Rotation1 = rotatePointOrigin({x: 177, y: 613}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock202 = new lineSegment({x: BinaryTo7SegBlock202Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock202Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock202Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock202Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock202",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock202);
BinaryTo7SegBlock201.outputs[0].push({gate: BinaryTo7SegBlock202, position: 0});
BinaryTo7SegBlock202.outputs[1].push({gate: BinaryTo7SegBlock201, position: 1});
BinaryTo7SegBlock202.outputs[0].push({gate: BinaryTo7SegBlock188, position: 0});
BinaryTo7SegBlock202.outputs[1].push({gate: BinaryTo7SegBlock188, position: 0});
let BinaryTo7SegBlock203Rotation0 = rotatePointOrigin({x: 119, y: 118}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock203Rotation1 = rotatePointOrigin({x: 182, y: 118}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock203 = new lineSegment({x: BinaryTo7SegBlock203Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock203Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock203Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock203Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock203",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock203);
BinaryTo7SegBlock22.outputs[0].push({gate: BinaryTo7SegBlock203, position: 0});
BinaryTo7SegBlock22.outputs[1].push({gate: BinaryTo7SegBlock203, position: 0});
let BinaryTo7SegBlock204Rotation0 = rotatePointOrigin({x: 182, y: 118}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock204Rotation1 = rotatePointOrigin({x: 182, y: 613}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock204 = new lineSegment({x: BinaryTo7SegBlock204Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock204Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock204Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock204Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock204",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock204);
BinaryTo7SegBlock203.outputs[0].push({gate: BinaryTo7SegBlock204, position: 0});
BinaryTo7SegBlock204.outputs[1].push({gate: BinaryTo7SegBlock203, position: 1});
BinaryTo7SegBlock204.outputs[0].push({gate: BinaryTo7SegBlock188, position: 1});
BinaryTo7SegBlock204.outputs[1].push({gate: BinaryTo7SegBlock188, position: 1});
let BinaryTo7SegBlock205Rotation0 = rotatePointOrigin({x: 149, y: 238}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock205Rotation1 = rotatePointOrigin({x: 197, y: 238}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock205 = new lineSegment({x: BinaryTo7SegBlock205Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock205Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock205Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock205Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock205",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock205);
BinaryTo7SegBlock28.outputs[0].push({gate: BinaryTo7SegBlock205, position: 0});
BinaryTo7SegBlock28.outputs[1].push({gate: BinaryTo7SegBlock205, position: 0});
let BinaryTo7SegBlock206Rotation0 = rotatePointOrigin({x: 197, y: 238}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock206Rotation1 = rotatePointOrigin({x: 197, y: 613}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock206 = new lineSegment({x: BinaryTo7SegBlock206Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock206Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock206Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock206Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock206",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock206);
BinaryTo7SegBlock205.outputs[0].push({gate: BinaryTo7SegBlock206, position: 0});
BinaryTo7SegBlock206.outputs[1].push({gate: BinaryTo7SegBlock205, position: 1});
BinaryTo7SegBlock206.outputs[0].push({gate: BinaryTo7SegBlock189, position: 0});
BinaryTo7SegBlock206.outputs[1].push({gate: BinaryTo7SegBlock189, position: 0});
let BinaryTo7SegBlock207Rotation0 = rotatePointOrigin({x: 149, y: 298}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock207Rotation1 = rotatePointOrigin({x: 202, y: 298}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock207 = new lineSegment({x: BinaryTo7SegBlock207Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock207Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock207Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock207Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock207",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock207);
BinaryTo7SegBlock31.outputs[0].push({gate: BinaryTo7SegBlock207, position: 0});
BinaryTo7SegBlock31.outputs[1].push({gate: BinaryTo7SegBlock207, position: 0});
let BinaryTo7SegBlock208Rotation0 = rotatePointOrigin({x: 202, y: 298}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock208Rotation1 = rotatePointOrigin({x: 202, y: 613}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock208 = new lineSegment({x: BinaryTo7SegBlock208Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock208Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock208Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock208Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock208",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock208);
BinaryTo7SegBlock207.outputs[0].push({gate: BinaryTo7SegBlock208, position: 0});
BinaryTo7SegBlock208.outputs[1].push({gate: BinaryTo7SegBlock207, position: 1});
BinaryTo7SegBlock208.outputs[0].push({gate: BinaryTo7SegBlock189, position: 1});
BinaryTo7SegBlock208.outputs[1].push({gate: BinaryTo7SegBlock189, position: 1});
let BinaryTo7SegBlock209Rotation0 = rotatePointOrigin({x: 160, y: 627}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock209Rotation1 = rotatePointOrigin({x: 160, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock209 = new lineSegment({x: BinaryTo7SegBlock209Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock209Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock209Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock209Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock209",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock209);
BinaryTo7SegBlock187.outputs[0].push({gate: BinaryTo7SegBlock209, position: 0});
BinaryTo7SegBlock187.outputs[1].push({gate: BinaryTo7SegBlock209, position: 0});
let BinaryTo7SegBlock210Rotation0 = rotatePointOrigin({x: 180, y: 627}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock210Rotation1 = rotatePointOrigin({x: 180, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock210 = new lineSegment({x: BinaryTo7SegBlock210Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock210Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock210Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock210Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock210",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock210);
BinaryTo7SegBlock188.outputs[0].push({gate: BinaryTo7SegBlock210, position: 0});
BinaryTo7SegBlock188.outputs[1].push({gate: BinaryTo7SegBlock210, position: 0});
let BinaryTo7SegBlock211Rotation0 = rotatePointOrigin({x: 170, y: 657}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock211Rotation1 = rotatePointOrigin({x: 170, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock211 = new lineSegment({x: BinaryTo7SegBlock211Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock211Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock211Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock211Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock211",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock211);
BinaryTo7SegBlock190.outputs[0].push({gate: BinaryTo7SegBlock211, position: 0});
BinaryTo7SegBlock190.outputs[1].push({gate: BinaryTo7SegBlock211, position: 0});
let BinaryTo7SegBlock212Rotation0 = rotatePointOrigin({x: 167, y: 643}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock212Rotation1 = rotatePointOrigin({x: 167, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock212 = new lineSegment({x: BinaryTo7SegBlock212Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock212Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock212Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock212Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock212",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock212);
BinaryTo7SegBlock212.outputs[0].push({gate: BinaryTo7SegBlock190, position: 0});
BinaryTo7SegBlock212.outputs[1].push({gate: BinaryTo7SegBlock190, position: 0});
let BinaryTo7SegBlock213Rotation0 = rotatePointOrigin({x: 167, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock213Rotation1 = rotatePointOrigin({x: 160, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock213 = new lineSegment({x: BinaryTo7SegBlock213Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock213Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock213Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock213Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock213",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock213);
BinaryTo7SegBlock212.outputs[0].push({gate: BinaryTo7SegBlock213, position: 0});
BinaryTo7SegBlock213.outputs[1].push({gate: BinaryTo7SegBlock212, position: 1});
BinaryTo7SegBlock209.outputs[0].push({gate: BinaryTo7SegBlock213, position: 1});
BinaryTo7SegBlock213.outputs[0].push({gate: BinaryTo7SegBlock209, position: 1});
let BinaryTo7SegBlock214Rotation0 = rotatePointOrigin({x: 172, y: 643}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock214Rotation1 = rotatePointOrigin({x: 172, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock214 = new lineSegment({x: BinaryTo7SegBlock214Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock214Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock214Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock214Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock214",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock214);
BinaryTo7SegBlock214.outputs[0].push({gate: BinaryTo7SegBlock190, position: 1});
BinaryTo7SegBlock214.outputs[1].push({gate: BinaryTo7SegBlock190, position: 1});
let BinaryTo7SegBlock215Rotation0 = rotatePointOrigin({x: 172, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock215Rotation1 = rotatePointOrigin({x: 180, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock215 = new lineSegment({x: BinaryTo7SegBlock215Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock215Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock215Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock215Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock215",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock215);
BinaryTo7SegBlock214.outputs[0].push({gate: BinaryTo7SegBlock215, position: 0});
BinaryTo7SegBlock215.outputs[1].push({gate: BinaryTo7SegBlock214, position: 1});
BinaryTo7SegBlock210.outputs[0].push({gate: BinaryTo7SegBlock215, position: 1});
BinaryTo7SegBlock215.outputs[0].push({gate: BinaryTo7SegBlock210, position: 1});
let BinaryTo7SegBlock216Rotation0 = rotatePointOrigin({x: 177, y: 673}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock216Rotation1 = rotatePointOrigin({x: 177, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock216 = new lineSegment({x: BinaryTo7SegBlock216Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock216Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock216Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock216Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock216",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock216);
BinaryTo7SegBlock216.outputs[0].push({gate: BinaryTo7SegBlock191, position: 0});
BinaryTo7SegBlock216.outputs[1].push({gate: BinaryTo7SegBlock191, position: 0});
let BinaryTo7SegBlock217Rotation0 = rotatePointOrigin({x: 177, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock217Rotation1 = rotatePointOrigin({x: 170, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock217 = new lineSegment({x: BinaryTo7SegBlock217Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock217Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock217Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock217Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock217",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock217);
BinaryTo7SegBlock216.outputs[0].push({gate: BinaryTo7SegBlock217, position: 0});
BinaryTo7SegBlock217.outputs[1].push({gate: BinaryTo7SegBlock216, position: 1});
BinaryTo7SegBlock211.outputs[0].push({gate: BinaryTo7SegBlock217, position: 1});
BinaryTo7SegBlock217.outputs[0].push({gate: BinaryTo7SegBlock211, position: 1});
let BinaryTo7SegBlock218Rotation0 = rotatePointOrigin({x: 200, y: 627}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock218Rotation1 = rotatePointOrigin({x: 200, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock218 = new lineSegment({x: BinaryTo7SegBlock218Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock218Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock218Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock218Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock218",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock218);
BinaryTo7SegBlock189.outputs[0].push({gate: BinaryTo7SegBlock218, position: 0});
BinaryTo7SegBlock189.outputs[1].push({gate: BinaryTo7SegBlock218, position: 0});
let BinaryTo7SegBlock219Rotation0 = rotatePointOrigin({x: 200, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock219Rotation1 = rotatePointOrigin({x: 195, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock219 = new lineSegment({x: BinaryTo7SegBlock219Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock219Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock219Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock219Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock219",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock219);
BinaryTo7SegBlock218.outputs[0].push({gate: BinaryTo7SegBlock219, position: 0});
BinaryTo7SegBlock219.outputs[1].push({gate: BinaryTo7SegBlock218, position: 1});
let BinaryTo7SegBlock220Rotation0 = rotatePointOrigin({x: 182, y: 673}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock220Rotation1 = rotatePointOrigin({x: 182, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock220 = new lineSegment({x: BinaryTo7SegBlock220Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock220Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock220Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock220Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock220",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock220);
BinaryTo7SegBlock220.outputs[0].push({gate: BinaryTo7SegBlock191, position: 1});
BinaryTo7SegBlock220.outputs[1].push({gate: BinaryTo7SegBlock191, position: 1});
let BinaryTo7SegBlock221Rotation0 = rotatePointOrigin({x: 182, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock221Rotation1 = rotatePointOrigin({x: 195, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock221 = new lineSegment({x: BinaryTo7SegBlock221Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock221Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock221Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock221Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock221",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock221);
BinaryTo7SegBlock220.outputs[0].push({gate: BinaryTo7SegBlock221, position: 0});
BinaryTo7SegBlock221.outputs[1].push({gate: BinaryTo7SegBlock220, position: 1});
BinaryTo7SegBlock219.outputs[0].push({gate: BinaryTo7SegBlock221, position: 1});
BinaryTo7SegBlock221.outputs[0].push({gate: BinaryTo7SegBlock219, position: 1});
let BinaryTo7SegBlock222Rotation0 = rotatePointOrigin({x: 149, y: 38}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock222Rotation1 = rotatePointOrigin({x: 217, y: 38}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock222 = new lineSegment({x: BinaryTo7SegBlock222Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock222Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock222Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock222Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock222",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock222);
BinaryTo7SegBlock18.outputs[0].push({gate: BinaryTo7SegBlock222, position: 0});
BinaryTo7SegBlock18.outputs[1].push({gate: BinaryTo7SegBlock222, position: 0});
let BinaryTo7SegBlock223Rotation0 = rotatePointOrigin({x: 217, y: 38}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock223Rotation1 = rotatePointOrigin({x: 217, y: 613}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock223 = new lineSegment({x: BinaryTo7SegBlock223Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock223Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock223Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock223Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock223",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock223);
BinaryTo7SegBlock222.outputs[0].push({gate: BinaryTo7SegBlock223, position: 0});
BinaryTo7SegBlock223.outputs[1].push({gate: BinaryTo7SegBlock222, position: 1});
BinaryTo7SegBlock223.outputs[0].push({gate: BinaryTo7SegBlock192, position: 0});
BinaryTo7SegBlock223.outputs[1].push({gate: BinaryTo7SegBlock192, position: 0});
let BinaryTo7SegBlock224Rotation0 = rotatePointOrigin({x: 182, y: 118}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock224Rotation1 = rotatePointOrigin({x: 222, y: 118}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock224 = new lineSegment({x: BinaryTo7SegBlock224Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock224Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock224Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock224Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock224",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock224);
BinaryTo7SegBlock203.outputs[0].push({gate: BinaryTo7SegBlock224, position: 0});
BinaryTo7SegBlock224.outputs[1].push({gate: BinaryTo7SegBlock203, position: 1});
BinaryTo7SegBlock204.outputs[1].push({gate: BinaryTo7SegBlock224, position: 0});
BinaryTo7SegBlock224.outputs[1].push({gate: BinaryTo7SegBlock204, position: 0});
let BinaryTo7SegBlock225Rotation0 = rotatePointOrigin({x: 222, y: 118}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock225Rotation1 = rotatePointOrigin({x: 222, y: 613}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock225 = new lineSegment({x: BinaryTo7SegBlock225Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock225Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock225Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock225Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock225",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock225);
BinaryTo7SegBlock224.outputs[0].push({gate: BinaryTo7SegBlock225, position: 0});
BinaryTo7SegBlock225.outputs[1].push({gate: BinaryTo7SegBlock224, position: 1});
BinaryTo7SegBlock225.outputs[0].push({gate: BinaryTo7SegBlock192, position: 1});
BinaryTo7SegBlock225.outputs[1].push({gate: BinaryTo7SegBlock192, position: 1});
let BinaryTo7SegBlock226Rotation0 = rotatePointOrigin({x: 119, y: 138}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock226Rotation1 = rotatePointOrigin({x: 237, y: 138}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock226 = new lineSegment({x: BinaryTo7SegBlock226Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock226Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock226Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock226Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock226",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock226);
BinaryTo7SegBlock23.outputs[0].push({gate: BinaryTo7SegBlock226, position: 0});
BinaryTo7SegBlock23.outputs[1].push({gate: BinaryTo7SegBlock226, position: 0});
let BinaryTo7SegBlock227Rotation0 = rotatePointOrigin({x: 237, y: 138}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock227Rotation1 = rotatePointOrigin({x: 237, y: 613}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock227 = new lineSegment({x: BinaryTo7SegBlock227Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock227Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock227Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock227Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock227",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock227);
BinaryTo7SegBlock226.outputs[0].push({gate: BinaryTo7SegBlock227, position: 0});
BinaryTo7SegBlock227.outputs[1].push({gate: BinaryTo7SegBlock226, position: 1});
BinaryTo7SegBlock227.outputs[0].push({gate: BinaryTo7SegBlock193, position: 0});
BinaryTo7SegBlock227.outputs[1].push({gate: BinaryTo7SegBlock193, position: 0});
let BinaryTo7SegBlock228Rotation0 = rotatePointOrigin({x: 125, y: 158}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock228Rotation1 = rotatePointOrigin({x: 242, y: 158}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock228 = new lineSegment({x: BinaryTo7SegBlock228Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock228Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock228Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock228Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock228",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock228);
BinaryTo7SegBlock83.outputs[0].push({gate: BinaryTo7SegBlock228, position: 0});
BinaryTo7SegBlock228.outputs[1].push({gate: BinaryTo7SegBlock83, position: 1});
BinaryTo7SegBlock84.outputs[1].push({gate: BinaryTo7SegBlock228, position: 0});
BinaryTo7SegBlock228.outputs[1].push({gate: BinaryTo7SegBlock84, position: 0});
let BinaryTo7SegBlock229Rotation0 = rotatePointOrigin({x: 242, y: 158}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock229Rotation1 = rotatePointOrigin({x: 242, y: 613}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock229 = new lineSegment({x: BinaryTo7SegBlock229Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock229Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock229Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock229Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock229",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock229);
BinaryTo7SegBlock228.outputs[0].push({gate: BinaryTo7SegBlock229, position: 0});
BinaryTo7SegBlock229.outputs[1].push({gate: BinaryTo7SegBlock228, position: 1});
BinaryTo7SegBlock229.outputs[0].push({gate: BinaryTo7SegBlock193, position: 1});
BinaryTo7SegBlock229.outputs[1].push({gate: BinaryTo7SegBlock193, position: 1});
let BinaryTo7SegBlock230Rotation0 = rotatePointOrigin({x: 149, y: 378}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock230Rotation1 = rotatePointOrigin({x: 257, y: 378}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock230 = new lineSegment({x: BinaryTo7SegBlock230Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock230Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock230Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock230Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock230",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock230);
BinaryTo7SegBlock35.outputs[0].push({gate: BinaryTo7SegBlock230, position: 0});
BinaryTo7SegBlock35.outputs[1].push({gate: BinaryTo7SegBlock230, position: 0});
let BinaryTo7SegBlock231Rotation0 = rotatePointOrigin({x: 257, y: 378}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock231Rotation1 = rotatePointOrigin({x: 257, y: 613}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock231 = new lineSegment({x: BinaryTo7SegBlock231Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock231Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock231Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock231Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock231",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock231);
BinaryTo7SegBlock230.outputs[0].push({gate: BinaryTo7SegBlock231, position: 0});
BinaryTo7SegBlock231.outputs[1].push({gate: BinaryTo7SegBlock230, position: 1});
BinaryTo7SegBlock231.outputs[0].push({gate: BinaryTo7SegBlock194, position: 0});
BinaryTo7SegBlock231.outputs[1].push({gate: BinaryTo7SegBlock194, position: 0});
let BinaryTo7SegBlock232Rotation0 = rotatePointOrigin({x: 149, y: 558}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock232Rotation1 = rotatePointOrigin({x: 262, y: 558}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock232 = new lineSegment({x: BinaryTo7SegBlock232Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock232Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock232Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock232Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock232",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock232);
BinaryTo7SegBlock44.outputs[0].push({gate: BinaryTo7SegBlock232, position: 0});
BinaryTo7SegBlock44.outputs[1].push({gate: BinaryTo7SegBlock232, position: 0});
let BinaryTo7SegBlock233Rotation0 = rotatePointOrigin({x: 262, y: 558}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock233Rotation1 = rotatePointOrigin({x: 262, y: 613}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock233 = new lineSegment({x: BinaryTo7SegBlock233Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock233Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock233Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock233Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock233",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock233);
BinaryTo7SegBlock232.outputs[0].push({gate: BinaryTo7SegBlock233, position: 0});
BinaryTo7SegBlock233.outputs[1].push({gate: BinaryTo7SegBlock232, position: 1});
BinaryTo7SegBlock233.outputs[0].push({gate: BinaryTo7SegBlock194, position: 1});
BinaryTo7SegBlock233.outputs[1].push({gate: BinaryTo7SegBlock194, position: 1});
let BinaryTo7SegBlock234Rotation0 = rotatePointOrigin({x: 220, y: 627}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock234Rotation1 = rotatePointOrigin({x: 220, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock234 = new lineSegment({x: BinaryTo7SegBlock234Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock234Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock234Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock234Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock234",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock234);
BinaryTo7SegBlock192.outputs[0].push({gate: BinaryTo7SegBlock234, position: 0});
BinaryTo7SegBlock192.outputs[1].push({gate: BinaryTo7SegBlock234, position: 0});
let BinaryTo7SegBlock235Rotation0 = rotatePointOrigin({x: 240, y: 627}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock235Rotation1 = rotatePointOrigin({x: 240, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock235 = new lineSegment({x: BinaryTo7SegBlock235Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock235Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock235Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock235Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock235",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock235);
BinaryTo7SegBlock193.outputs[0].push({gate: BinaryTo7SegBlock235, position: 0});
BinaryTo7SegBlock193.outputs[1].push({gate: BinaryTo7SegBlock235, position: 0});
let BinaryTo7SegBlock236Rotation0 = rotatePointOrigin({x: 220, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock236Rotation1 = rotatePointOrigin({x: 227, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock236 = new lineSegment({x: BinaryTo7SegBlock236Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock236Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock236Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock236Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock236",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock236);
BinaryTo7SegBlock234.outputs[0].push({gate: BinaryTo7SegBlock236, position: 0});
BinaryTo7SegBlock236.outputs[1].push({gate: BinaryTo7SegBlock234, position: 1});
let BinaryTo7SegBlock237Rotation0 = rotatePointOrigin({x: 227, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock237Rotation1 = rotatePointOrigin({x: 227, y: 643}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock237 = new lineSegment({x: BinaryTo7SegBlock237Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock237Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock237Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock237Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock237",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock237);
BinaryTo7SegBlock236.outputs[0].push({gate: BinaryTo7SegBlock237, position: 0});
BinaryTo7SegBlock237.outputs[1].push({gate: BinaryTo7SegBlock236, position: 1});
BinaryTo7SegBlock237.outputs[0].push({gate: BinaryTo7SegBlock195, position: 0});
BinaryTo7SegBlock237.outputs[1].push({gate: BinaryTo7SegBlock195, position: 0});
let BinaryTo7SegBlock238Rotation0 = rotatePointOrigin({x: 232, y: 643}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock238Rotation1 = rotatePointOrigin({x: 232, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock238 = new lineSegment({x: BinaryTo7SegBlock238Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock238Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock238Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock238Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock238",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock238);
BinaryTo7SegBlock238.outputs[0].push({gate: BinaryTo7SegBlock195, position: 1});
BinaryTo7SegBlock238.outputs[1].push({gate: BinaryTo7SegBlock195, position: 1});
let BinaryTo7SegBlock239Rotation0 = rotatePointOrigin({x: 232, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock239Rotation1 = rotatePointOrigin({x: 240, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock239 = new lineSegment({x: BinaryTo7SegBlock239Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock239Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock239Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock239Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock239",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock239);
BinaryTo7SegBlock238.outputs[0].push({gate: BinaryTo7SegBlock239, position: 0});
BinaryTo7SegBlock239.outputs[1].push({gate: BinaryTo7SegBlock238, position: 1});
BinaryTo7SegBlock235.outputs[0].push({gate: BinaryTo7SegBlock239, position: 1});
BinaryTo7SegBlock239.outputs[0].push({gate: BinaryTo7SegBlock235, position: 1});
let BinaryTo7SegBlock240Rotation0 = rotatePointOrigin({x: 230, y: 657}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock240Rotation1 = rotatePointOrigin({x: 230, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock240 = new lineSegment({x: BinaryTo7SegBlock240Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock240Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock240Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock240Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock240",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock240);
BinaryTo7SegBlock195.outputs[0].push({gate: BinaryTo7SegBlock240, position: 0});
BinaryTo7SegBlock195.outputs[1].push({gate: BinaryTo7SegBlock240, position: 0});
let BinaryTo7SegBlock241Rotation0 = rotatePointOrigin({x: 237, y: 673}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock241Rotation1 = rotatePointOrigin({x: 237, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock241 = new lineSegment({x: BinaryTo7SegBlock241Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock241Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock241Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock241Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock241",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock241);
BinaryTo7SegBlock241.outputs[0].push({gate: BinaryTo7SegBlock196, position: 0});
BinaryTo7SegBlock241.outputs[1].push({gate: BinaryTo7SegBlock196, position: 0});
let BinaryTo7SegBlock242Rotation0 = rotatePointOrigin({x: 237, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock242Rotation1 = rotatePointOrigin({x: 230, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock242 = new lineSegment({x: BinaryTo7SegBlock242Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock242Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock242Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock242Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock242",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock242);
BinaryTo7SegBlock241.outputs[0].push({gate: BinaryTo7SegBlock242, position: 0});
BinaryTo7SegBlock242.outputs[1].push({gate: BinaryTo7SegBlock241, position: 1});
BinaryTo7SegBlock240.outputs[0].push({gate: BinaryTo7SegBlock242, position: 1});
BinaryTo7SegBlock242.outputs[0].push({gate: BinaryTo7SegBlock240, position: 1});
let BinaryTo7SegBlock243Rotation0 = rotatePointOrigin({x: 260, y: 627}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock243Rotation1 = rotatePointOrigin({x: 260, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock243 = new lineSegment({x: BinaryTo7SegBlock243Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock243Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock243Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock243Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock243",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock243);
BinaryTo7SegBlock194.outputs[0].push({gate: BinaryTo7SegBlock243, position: 0});
BinaryTo7SegBlock194.outputs[1].push({gate: BinaryTo7SegBlock243, position: 0});
let BinaryTo7SegBlock244Rotation0 = rotatePointOrigin({x: 260, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock244Rotation1 = rotatePointOrigin({x: 255, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock244 = new lineSegment({x: BinaryTo7SegBlock244Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock244Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock244Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock244Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock244",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock244);
BinaryTo7SegBlock243.outputs[0].push({gate: BinaryTo7SegBlock244, position: 0});
BinaryTo7SegBlock244.outputs[1].push({gate: BinaryTo7SegBlock243, position: 1});
let BinaryTo7SegBlock245Rotation0 = rotatePointOrigin({x: 242, y: 673}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock245Rotation1 = rotatePointOrigin({x: 242, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock245 = new lineSegment({x: BinaryTo7SegBlock245Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock245Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock245Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock245Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock245",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock245);
BinaryTo7SegBlock245.outputs[0].push({gate: BinaryTo7SegBlock196, position: 1});
BinaryTo7SegBlock245.outputs[1].push({gate: BinaryTo7SegBlock196, position: 1});
let BinaryTo7SegBlock246Rotation0 = rotatePointOrigin({x: 242, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock246Rotation1 = rotatePointOrigin({x: 255, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock246 = new lineSegment({x: BinaryTo7SegBlock246Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock246Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock246Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock246Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock246",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock246);
BinaryTo7SegBlock245.outputs[0].push({gate: BinaryTo7SegBlock246, position: 0});
BinaryTo7SegBlock246.outputs[1].push({gate: BinaryTo7SegBlock245, position: 1});
BinaryTo7SegBlock244.outputs[0].push({gate: BinaryTo7SegBlock246, position: 1});
BinaryTo7SegBlock246.outputs[0].push({gate: BinaryTo7SegBlock244, position: 1});
let BinaryTo7SegBlock247Rotation = rotatePointOrigin({x: 280, y: 618}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock247 = new orGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock247Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock247Rotation.y, BinaryTo7SegBlock.rotation + 0, "BinaryTo7SegBlock247",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock247);
let BinaryTo7SegBlock248Rotation = rotatePointOrigin({x: 310, y: 618}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock248 = new orGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock248Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock248Rotation.y, BinaryTo7SegBlock.rotation + 0, "BinaryTo7SegBlock248",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock248);
let BinaryTo7SegBlock249Rotation = rotatePointOrigin({x: 290, y: 648}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock249 = new orGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock249Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock249Rotation.y, BinaryTo7SegBlock.rotation + 0, "BinaryTo7SegBlock249",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock249);
let BinaryTo7SegBlock250Rotation = rotatePointOrigin({x: 300, y: 678}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock250 = new orGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock250Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock250Rotation.y, BinaryTo7SegBlock.rotation + 0, "BinaryTo7SegBlock250",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock250);
let BinaryTo7SegBlock251Rotation0 = rotatePointOrigin({x: 125, y: 218}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock251Rotation1 = rotatePointOrigin({x: 277, y: 218}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock251 = new lineSegment({x: BinaryTo7SegBlock251Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock251Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock251Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock251Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock251",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock251);
BinaryTo7SegBlock97.outputs[0].push({gate: BinaryTo7SegBlock251, position: 0});
BinaryTo7SegBlock251.outputs[1].push({gate: BinaryTo7SegBlock97, position: 1});
BinaryTo7SegBlock98.outputs[1].push({gate: BinaryTo7SegBlock251, position: 0});
BinaryTo7SegBlock251.outputs[1].push({gate: BinaryTo7SegBlock98, position: 0});
let BinaryTo7SegBlock252Rotation0 = rotatePointOrigin({x: 277, y: 218}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock252Rotation1 = rotatePointOrigin({x: 277, y: 613}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock252 = new lineSegment({x: BinaryTo7SegBlock252Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock252Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock252Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock252Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock252",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock252);
BinaryTo7SegBlock251.outputs[0].push({gate: BinaryTo7SegBlock252, position: 0});
BinaryTo7SegBlock252.outputs[1].push({gate: BinaryTo7SegBlock251, position: 1});
BinaryTo7SegBlock252.outputs[0].push({gate: BinaryTo7SegBlock247, position: 0});
BinaryTo7SegBlock252.outputs[1].push({gate: BinaryTo7SegBlock247, position: 0});
let BinaryTo7SegBlock253Rotation0 = rotatePointOrigin({x: 125, y: 278}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock253Rotation1 = rotatePointOrigin({x: 282, y: 278}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock253 = new lineSegment({x: BinaryTo7SegBlock253Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock253Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock253Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock253Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock253",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock253);
BinaryTo7SegBlock111.outputs[0].push({gate: BinaryTo7SegBlock253, position: 0});
BinaryTo7SegBlock253.outputs[1].push({gate: BinaryTo7SegBlock111, position: 1});
BinaryTo7SegBlock112.outputs[1].push({gate: BinaryTo7SegBlock253, position: 0});
BinaryTo7SegBlock253.outputs[1].push({gate: BinaryTo7SegBlock112, position: 0});
let BinaryTo7SegBlock254Rotation0 = rotatePointOrigin({x: 282, y: 278}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock254Rotation1 = rotatePointOrigin({x: 282, y: 613}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock254 = new lineSegment({x: BinaryTo7SegBlock254Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock254Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock254Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock254Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock254",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock254);
BinaryTo7SegBlock253.outputs[0].push({gate: BinaryTo7SegBlock254, position: 0});
BinaryTo7SegBlock254.outputs[1].push({gate: BinaryTo7SegBlock253, position: 1});
BinaryTo7SegBlock254.outputs[0].push({gate: BinaryTo7SegBlock247, position: 1});
BinaryTo7SegBlock254.outputs[1].push({gate: BinaryTo7SegBlock247, position: 1});
let BinaryTo7SegBlock255Rotation0 = rotatePointOrigin({x: 125, y: 318}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock255Rotation1 = rotatePointOrigin({x: 292, y: 318}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock255 = new lineSegment({x: BinaryTo7SegBlock255Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock255Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock255Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock255Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock255",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock255);
BinaryTo7SegBlock121.outputs[0].push({gate: BinaryTo7SegBlock255, position: 0});
BinaryTo7SegBlock255.outputs[1].push({gate: BinaryTo7SegBlock121, position: 1});
BinaryTo7SegBlock122.outputs[1].push({gate: BinaryTo7SegBlock255, position: 0});
BinaryTo7SegBlock255.outputs[1].push({gate: BinaryTo7SegBlock122, position: 0});
let BinaryTo7SegBlock256Rotation0 = rotatePointOrigin({x: 292, y: 318}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock256Rotation1 = rotatePointOrigin({x: 292, y: 643}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock256 = new lineSegment({x: BinaryTo7SegBlock256Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock256Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock256Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock256Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock256",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock256);
BinaryTo7SegBlock255.outputs[0].push({gate: BinaryTo7SegBlock256, position: 0});
BinaryTo7SegBlock256.outputs[1].push({gate: BinaryTo7SegBlock255, position: 1});
BinaryTo7SegBlock256.outputs[0].push({gate: BinaryTo7SegBlock249, position: 1});
BinaryTo7SegBlock256.outputs[1].push({gate: BinaryTo7SegBlock249, position: 1});
let BinaryTo7SegBlock257Rotation0 = rotatePointOrigin({x: 125, y: 358}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock257Rotation1 = rotatePointOrigin({x: 307, y: 358}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock257 = new lineSegment({x: BinaryTo7SegBlock257Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock257Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock257Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock257Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock257",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock257);
BinaryTo7SegBlock131.outputs[0].push({gate: BinaryTo7SegBlock257, position: 0});
BinaryTo7SegBlock257.outputs[1].push({gate: BinaryTo7SegBlock131, position: 1});
BinaryTo7SegBlock132.outputs[1].push({gate: BinaryTo7SegBlock257, position: 0});
BinaryTo7SegBlock257.outputs[1].push({gate: BinaryTo7SegBlock132, position: 0});
let BinaryTo7SegBlock258Rotation0 = rotatePointOrigin({x: 307, y: 358}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock258Rotation1 = rotatePointOrigin({x: 307, y: 613}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock258 = new lineSegment({x: BinaryTo7SegBlock258Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock258Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock258Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock258Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock258",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock258);
BinaryTo7SegBlock257.outputs[0].push({gate: BinaryTo7SegBlock258, position: 0});
BinaryTo7SegBlock258.outputs[1].push({gate: BinaryTo7SegBlock257, position: 1});
BinaryTo7SegBlock258.outputs[0].push({gate: BinaryTo7SegBlock248, position: 0});
BinaryTo7SegBlock258.outputs[1].push({gate: BinaryTo7SegBlock248, position: 0});
let BinaryTo7SegBlock259Rotation0 = rotatePointOrigin({x: 119, y: 398}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock259Rotation1 = rotatePointOrigin({x: 312, y: 398}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock259 = new lineSegment({x: BinaryTo7SegBlock259Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock259Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock259Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock259Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock259",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock259);
BinaryTo7SegBlock36.outputs[0].push({gate: BinaryTo7SegBlock259, position: 0});
BinaryTo7SegBlock36.outputs[1].push({gate: BinaryTo7SegBlock259, position: 0});
let BinaryTo7SegBlock260Rotation0 = rotatePointOrigin({x: 312, y: 398}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock260Rotation1 = rotatePointOrigin({x: 312, y: 613}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock260 = new lineSegment({x: BinaryTo7SegBlock260Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock260Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock260Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock260Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock260",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock260);
BinaryTo7SegBlock259.outputs[0].push({gate: BinaryTo7SegBlock260, position: 0});
BinaryTo7SegBlock260.outputs[1].push({gate: BinaryTo7SegBlock259, position: 1});
BinaryTo7SegBlock260.outputs[0].push({gate: BinaryTo7SegBlock248, position: 1});
BinaryTo7SegBlock260.outputs[1].push({gate: BinaryTo7SegBlock248, position: 1});
let BinaryTo7SegBlock261Rotation0 = rotatePointOrigin({x: 280, y: 627}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock261Rotation1 = rotatePointOrigin({x: 280, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock261 = new lineSegment({x: BinaryTo7SegBlock261Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock261Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock261Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock261Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock261",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock261);
BinaryTo7SegBlock247.outputs[0].push({gate: BinaryTo7SegBlock261, position: 0});
BinaryTo7SegBlock247.outputs[1].push({gate: BinaryTo7SegBlock261, position: 0});
let BinaryTo7SegBlock262Rotation0 = rotatePointOrigin({x: 287, y: 643}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock262Rotation1 = rotatePointOrigin({x: 287, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock262 = new lineSegment({x: BinaryTo7SegBlock262Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock262Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock262Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock262Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock262",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock262);
BinaryTo7SegBlock262.outputs[0].push({gate: BinaryTo7SegBlock249, position: 0});
BinaryTo7SegBlock262.outputs[1].push({gate: BinaryTo7SegBlock249, position: 0});
let BinaryTo7SegBlock263Rotation0 = rotatePointOrigin({x: 287, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock263Rotation1 = rotatePointOrigin({x: 280, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock263 = new lineSegment({x: BinaryTo7SegBlock263Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock263Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock263Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock263Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock263",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock263);
BinaryTo7SegBlock262.outputs[0].push({gate: BinaryTo7SegBlock263, position: 0});
BinaryTo7SegBlock263.outputs[1].push({gate: BinaryTo7SegBlock262, position: 1});
BinaryTo7SegBlock261.outputs[0].push({gate: BinaryTo7SegBlock263, position: 1});
BinaryTo7SegBlock263.outputs[0].push({gate: BinaryTo7SegBlock261, position: 1});
let BinaryTo7SegBlock264Rotation0 = rotatePointOrigin({x: 290, y: 657}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock264Rotation1 = rotatePointOrigin({x: 290, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock264 = new lineSegment({x: BinaryTo7SegBlock264Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock264Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock264Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock264Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock264",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock264);
BinaryTo7SegBlock249.outputs[0].push({gate: BinaryTo7SegBlock264, position: 0});
BinaryTo7SegBlock249.outputs[1].push({gate: BinaryTo7SegBlock264, position: 0});
let BinaryTo7SegBlock265Rotation0 = rotatePointOrigin({x: 297, y: 673}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock265Rotation1 = rotatePointOrigin({x: 297, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock265 = new lineSegment({x: BinaryTo7SegBlock265Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock265Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock265Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock265Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock265",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock265);
BinaryTo7SegBlock265.outputs[0].push({gate: BinaryTo7SegBlock250, position: 0});
BinaryTo7SegBlock265.outputs[1].push({gate: BinaryTo7SegBlock250, position: 0});
let BinaryTo7SegBlock266Rotation0 = rotatePointOrigin({x: 297, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock266Rotation1 = rotatePointOrigin({x: 290, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock266 = new lineSegment({x: BinaryTo7SegBlock266Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock266Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock266Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock266Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock266",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock266);
BinaryTo7SegBlock265.outputs[0].push({gate: BinaryTo7SegBlock266, position: 0});
BinaryTo7SegBlock266.outputs[1].push({gate: BinaryTo7SegBlock265, position: 1});
BinaryTo7SegBlock264.outputs[0].push({gate: BinaryTo7SegBlock266, position: 1});
BinaryTo7SegBlock266.outputs[0].push({gate: BinaryTo7SegBlock264, position: 1});
let BinaryTo7SegBlock267Rotation0 = rotatePointOrigin({x: 310, y: 627}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock267Rotation1 = rotatePointOrigin({x: 310, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock267 = new lineSegment({x: BinaryTo7SegBlock267Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock267Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock267Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock267Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock267",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock267);
BinaryTo7SegBlock248.outputs[0].push({gate: BinaryTo7SegBlock267, position: 0});
BinaryTo7SegBlock248.outputs[1].push({gate: BinaryTo7SegBlock267, position: 0});
let BinaryTo7SegBlock268Rotation0 = rotatePointOrigin({x: 302, y: 673}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock268Rotation1 = rotatePointOrigin({x: 302, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock268 = new lineSegment({x: BinaryTo7SegBlock268Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock268Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock268Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock268Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock268",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock268);
BinaryTo7SegBlock268.outputs[0].push({gate: BinaryTo7SegBlock250, position: 1});
BinaryTo7SegBlock268.outputs[1].push({gate: BinaryTo7SegBlock250, position: 1});
let BinaryTo7SegBlock269Rotation0 = rotatePointOrigin({x: 302, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock269Rotation1 = rotatePointOrigin({x: 310, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock269 = new lineSegment({x: BinaryTo7SegBlock269Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock269Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock269Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock269Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock269",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock269);
BinaryTo7SegBlock268.outputs[0].push({gate: BinaryTo7SegBlock269, position: 0});
BinaryTo7SegBlock269.outputs[1].push({gate: BinaryTo7SegBlock268, position: 1});
BinaryTo7SegBlock267.outputs[0].push({gate: BinaryTo7SegBlock269, position: 1});
BinaryTo7SegBlock269.outputs[0].push({gate: BinaryTo7SegBlock267, position: 1});
let BinaryTo7SegBlock270Rotation = rotatePointOrigin({x: 330, y: 618}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock270 = new orGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock270Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock270Rotation.y, BinaryTo7SegBlock.rotation + 0, "BinaryTo7SegBlock270",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock270);
let BinaryTo7SegBlock271Rotation = rotatePointOrigin({x: 360, y: 618}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock271 = new orGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock271Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock271Rotation.y, BinaryTo7SegBlock.rotation + 0, "BinaryTo7SegBlock271",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock271);
let BinaryTo7SegBlock272Rotation = rotatePointOrigin({x: 340, y: 648}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock272 = new orGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock272Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock272Rotation.y, BinaryTo7SegBlock.rotation + 0, "BinaryTo7SegBlock272",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock272);
let BinaryTo7SegBlock273Rotation = rotatePointOrigin({x: 350, y: 678}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock273 = new orGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock273Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock273Rotation.y, BinaryTo7SegBlock.rotation + 0, "BinaryTo7SegBlock273",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock273);
let BinaryTo7SegBlock274Rotation0 = rotatePointOrigin({x: 149, y: 78}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock274Rotation1 = rotatePointOrigin({x: 327, y: 78}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock274 = new lineSegment({x: BinaryTo7SegBlock274Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock274Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock274Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock274Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock274",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock274);
BinaryTo7SegBlock20.outputs[0].push({gate: BinaryTo7SegBlock274, position: 0});
BinaryTo7SegBlock20.outputs[1].push({gate: BinaryTo7SegBlock274, position: 0});
let BinaryTo7SegBlock275Rotation0 = rotatePointOrigin({x: 327, y: 78}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock275Rotation1 = rotatePointOrigin({x: 327, y: 613}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock275 = new lineSegment({x: BinaryTo7SegBlock275Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock275Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock275Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock275Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock275",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock275);
BinaryTo7SegBlock274.outputs[0].push({gate: BinaryTo7SegBlock275, position: 0});
BinaryTo7SegBlock275.outputs[1].push({gate: BinaryTo7SegBlock274, position: 1});
BinaryTo7SegBlock275.outputs[0].push({gate: BinaryTo7SegBlock270, position: 0});
BinaryTo7SegBlock275.outputs[1].push({gate: BinaryTo7SegBlock270, position: 0});
let BinaryTo7SegBlock276Rotation0 = rotatePointOrigin({x: 149, y: 178}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock276Rotation1 = rotatePointOrigin({x: 332, y: 178}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock276 = new lineSegment({x: BinaryTo7SegBlock276Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock276Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock276Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock276Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock276",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock276);
BinaryTo7SegBlock25.outputs[0].push({gate: BinaryTo7SegBlock276, position: 0});
BinaryTo7SegBlock25.outputs[1].push({gate: BinaryTo7SegBlock276, position: 0});
let BinaryTo7SegBlock277Rotation0 = rotatePointOrigin({x: 332, y: 178}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock277Rotation1 = rotatePointOrigin({x: 332, y: 613}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock277 = new lineSegment({x: BinaryTo7SegBlock277Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock277Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock277Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock277Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock277",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock277);
BinaryTo7SegBlock276.outputs[0].push({gate: BinaryTo7SegBlock277, position: 0});
BinaryTo7SegBlock277.outputs[1].push({gate: BinaryTo7SegBlock276, position: 1});
BinaryTo7SegBlock277.outputs[0].push({gate: BinaryTo7SegBlock270, position: 1});
BinaryTo7SegBlock277.outputs[1].push({gate: BinaryTo7SegBlock270, position: 1});
let BinaryTo7SegBlock278Rotation0 = rotatePointOrigin({x: 149, y: 338}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock278Rotation1 = rotatePointOrigin({x: 342, y: 338}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock278 = new lineSegment({x: BinaryTo7SegBlock278Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock278Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock278Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock278Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock278",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock278);
BinaryTo7SegBlock33.outputs[0].push({gate: BinaryTo7SegBlock278, position: 0});
BinaryTo7SegBlock33.outputs[1].push({gate: BinaryTo7SegBlock278, position: 0});
let BinaryTo7SegBlock279Rotation0 = rotatePointOrigin({x: 342, y: 338}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock279Rotation1 = rotatePointOrigin({x: 342, y: 643}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock279 = new lineSegment({x: BinaryTo7SegBlock279Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock279Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock279Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock279Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock279",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock279);
BinaryTo7SegBlock278.outputs[0].push({gate: BinaryTo7SegBlock279, position: 0});
BinaryTo7SegBlock279.outputs[1].push({gate: BinaryTo7SegBlock278, position: 1});
BinaryTo7SegBlock279.outputs[0].push({gate: BinaryTo7SegBlock272, position: 1});
BinaryTo7SegBlock279.outputs[1].push({gate: BinaryTo7SegBlock272, position: 1});
let BinaryTo7SegBlock280Rotation0 = rotatePointOrigin({x: 149, y: 518}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock280Rotation1 = rotatePointOrigin({x: 357, y: 518}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock280 = new lineSegment({x: BinaryTo7SegBlock280Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock280Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock280Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock280Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock280",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock280);
BinaryTo7SegBlock42.outputs[0].push({gate: BinaryTo7SegBlock280, position: 0});
BinaryTo7SegBlock42.outputs[1].push({gate: BinaryTo7SegBlock280, position: 0});
let BinaryTo7SegBlock281Rotation0 = rotatePointOrigin({x: 357, y: 518}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock281Rotation1 = rotatePointOrigin({x: 357, y: 613}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock281 = new lineSegment({x: BinaryTo7SegBlock281Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock281Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock281Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock281Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock281",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock281);
BinaryTo7SegBlock280.outputs[0].push({gate: BinaryTo7SegBlock281, position: 0});
BinaryTo7SegBlock281.outputs[1].push({gate: BinaryTo7SegBlock280, position: 1});
BinaryTo7SegBlock281.outputs[0].push({gate: BinaryTo7SegBlock271, position: 0});
BinaryTo7SegBlock281.outputs[1].push({gate: BinaryTo7SegBlock271, position: 0});
let BinaryTo7SegBlock282Rotation0 = rotatePointOrigin({x: 149, y: 598}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock282Rotation1 = rotatePointOrigin({x: 362, y: 598}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock282 = new lineSegment({x: BinaryTo7SegBlock282Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock282Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock282Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock282Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock282",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock282);
BinaryTo7SegBlock46.outputs[0].push({gate: BinaryTo7SegBlock282, position: 0});
BinaryTo7SegBlock46.outputs[1].push({gate: BinaryTo7SegBlock282, position: 0});
let BinaryTo7SegBlock283Rotation0 = rotatePointOrigin({x: 362, y: 598}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock283Rotation1 = rotatePointOrigin({x: 362, y: 613}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock283 = new lineSegment({x: BinaryTo7SegBlock283Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock283Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock283Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock283Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock283",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock283);
BinaryTo7SegBlock282.outputs[0].push({gate: BinaryTo7SegBlock283, position: 0});
BinaryTo7SegBlock283.outputs[1].push({gate: BinaryTo7SegBlock282, position: 1});
BinaryTo7SegBlock283.outputs[0].push({gate: BinaryTo7SegBlock271, position: 1});
BinaryTo7SegBlock283.outputs[1].push({gate: BinaryTo7SegBlock271, position: 1});
let BinaryTo7SegBlock284Rotation0 = rotatePointOrigin({x: 330, y: 627}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock284Rotation1 = rotatePointOrigin({x: 330, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock284 = new lineSegment({x: BinaryTo7SegBlock284Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock284Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock284Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock284Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock284",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock284);
BinaryTo7SegBlock270.outputs[0].push({gate: BinaryTo7SegBlock284, position: 0});
BinaryTo7SegBlock270.outputs[1].push({gate: BinaryTo7SegBlock284, position: 0});
let BinaryTo7SegBlock285Rotation0 = rotatePointOrigin({x: 340, y: 657}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock285Rotation1 = rotatePointOrigin({x: 340, y: 657}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock285 = new lineSegment({x: BinaryTo7SegBlock285Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock285Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock285Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock285Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock285",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock285);
BinaryTo7SegBlock272.outputs[0].push({gate: BinaryTo7SegBlock285, position: 0});
BinaryTo7SegBlock272.outputs[1].push({gate: BinaryTo7SegBlock285, position: 0});
BinaryTo7SegBlock272.outputs[0].push({gate: BinaryTo7SegBlock285, position: 1});
BinaryTo7SegBlock272.outputs[1].push({gate: BinaryTo7SegBlock285, position: 1});
let BinaryTo7SegBlock286Rotation0 = rotatePointOrigin({x: 340, y: 657}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock286Rotation1 = rotatePointOrigin({x: 340, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock286 = new lineSegment({x: BinaryTo7SegBlock286Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock286Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock286Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock286Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock286",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock286);
BinaryTo7SegBlock272.outputs[0].push({gate: BinaryTo7SegBlock286, position: 0});
BinaryTo7SegBlock272.outputs[1].push({gate: BinaryTo7SegBlock286, position: 0});
BinaryTo7SegBlock285.outputs[1].push({gate: BinaryTo7SegBlock286, position: 0});
BinaryTo7SegBlock286.outputs[1].push({gate: BinaryTo7SegBlock285, position: 0});
BinaryTo7SegBlock285.outputs[0].push({gate: BinaryTo7SegBlock286, position: 0});
BinaryTo7SegBlock286.outputs[1].push({gate: BinaryTo7SegBlock285, position: 1});
let BinaryTo7SegBlock287Rotation0 = rotatePointOrigin({x: 337, y: 643}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock287Rotation1 = rotatePointOrigin({x: 337, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock287 = new lineSegment({x: BinaryTo7SegBlock287Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock287Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock287Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock287Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock287",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock287);
BinaryTo7SegBlock287.outputs[0].push({gate: BinaryTo7SegBlock272, position: 0});
BinaryTo7SegBlock287.outputs[1].push({gate: BinaryTo7SegBlock272, position: 0});
let BinaryTo7SegBlock288Rotation0 = rotatePointOrigin({x: 337, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock288Rotation1 = rotatePointOrigin({x: 330, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock288 = new lineSegment({x: BinaryTo7SegBlock288Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock288Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock288Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock288Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock288",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock288);
BinaryTo7SegBlock287.outputs[0].push({gate: BinaryTo7SegBlock288, position: 0});
BinaryTo7SegBlock288.outputs[1].push({gate: BinaryTo7SegBlock287, position: 1});
BinaryTo7SegBlock284.outputs[0].push({gate: BinaryTo7SegBlock288, position: 1});
BinaryTo7SegBlock288.outputs[0].push({gate: BinaryTo7SegBlock284, position: 1});
let BinaryTo7SegBlock289Rotation0 = rotatePointOrigin({x: 347, y: 673}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock289Rotation1 = rotatePointOrigin({x: 347, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock289 = new lineSegment({x: BinaryTo7SegBlock289Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock289Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock289Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock289Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock289",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock289);
BinaryTo7SegBlock289.outputs[0].push({gate: BinaryTo7SegBlock273, position: 0});
BinaryTo7SegBlock289.outputs[1].push({gate: BinaryTo7SegBlock273, position: 0});
let BinaryTo7SegBlock290Rotation0 = rotatePointOrigin({x: 347, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock290Rotation1 = rotatePointOrigin({x: 340, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock290 = new lineSegment({x: BinaryTo7SegBlock290Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock290Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock290Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock290Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock290",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock290);
BinaryTo7SegBlock289.outputs[0].push({gate: BinaryTo7SegBlock290, position: 0});
BinaryTo7SegBlock290.outputs[1].push({gate: BinaryTo7SegBlock289, position: 1});
BinaryTo7SegBlock286.outputs[0].push({gate: BinaryTo7SegBlock290, position: 1});
BinaryTo7SegBlock290.outputs[0].push({gate: BinaryTo7SegBlock286, position: 1});
let BinaryTo7SegBlock291Rotation0 = rotatePointOrigin({x: 360, y: 627}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock291Rotation1 = rotatePointOrigin({x: 360, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock291 = new lineSegment({x: BinaryTo7SegBlock291Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock291Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock291Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock291Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock291",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock291);
BinaryTo7SegBlock271.outputs[0].push({gate: BinaryTo7SegBlock291, position: 0});
BinaryTo7SegBlock271.outputs[1].push({gate: BinaryTo7SegBlock291, position: 0});
let BinaryTo7SegBlock292Rotation0 = rotatePointOrigin({x: 352, y: 673}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock292Rotation1 = rotatePointOrigin({x: 352, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock292 = new lineSegment({x: BinaryTo7SegBlock292Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock292Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock292Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock292Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock292",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock292);
BinaryTo7SegBlock292.outputs[0].push({gate: BinaryTo7SegBlock273, position: 1});
BinaryTo7SegBlock292.outputs[1].push({gate: BinaryTo7SegBlock273, position: 1});
let BinaryTo7SegBlock293Rotation0 = rotatePointOrigin({x: 352, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock293Rotation1 = rotatePointOrigin({x: 360, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock293 = new lineSegment({x: BinaryTo7SegBlock293Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock293Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock293Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock293Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock293",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock293);
BinaryTo7SegBlock292.outputs[0].push({gate: BinaryTo7SegBlock293, position: 0});
BinaryTo7SegBlock293.outputs[1].push({gate: BinaryTo7SegBlock292, position: 1});
BinaryTo7SegBlock291.outputs[0].push({gate: BinaryTo7SegBlock293, position: 1});
BinaryTo7SegBlock293.outputs[0].push({gate: BinaryTo7SegBlock291, position: 1});
let BinaryTo7SegBlock294Rotation = rotatePointOrigin({x: 380, y: 618}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock294 = new orGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock294Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock294Rotation.y, BinaryTo7SegBlock.rotation + 0, "BinaryTo7SegBlock294",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock294);
let BinaryTo7SegBlock295Rotation = rotatePointOrigin({x: 400, y: 618}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock295 = new orGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock295Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock295Rotation.y, BinaryTo7SegBlock.rotation + 0, "BinaryTo7SegBlock295",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock295);
let BinaryTo7SegBlock296Rotation = rotatePointOrigin({x: 390, y: 648}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock296 = new orGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock296Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock296Rotation.y, BinaryTo7SegBlock.rotation + 0, "BinaryTo7SegBlock296",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock296);
let BinaryTo7SegBlock297Rotation0 = rotatePointOrigin({x: 1, y: -17}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock297Rotation1 = rotatePointOrigin({x: 1, y: -27}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock297 = new lineSegment({x: BinaryTo7SegBlock297Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock297Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock297Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock297Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock297",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock297);
BinaryTo7SegBlock5.outputs[0].push({gate: BinaryTo7SegBlock297, position: 0});
BinaryTo7SegBlock297.outputs[1].push({gate: BinaryTo7SegBlock5, position: 1});
BinaryTo7SegBlock6.outputs[1].push({gate: BinaryTo7SegBlock297, position: 0});
BinaryTo7SegBlock297.outputs[1].push({gate: BinaryTo7SegBlock6, position: 0});
let BinaryTo7SegBlock298Rotation0 = rotatePointOrigin({x: 31, y: -17}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock298Rotation1 = rotatePointOrigin({x: 31, y: -27}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock298 = new lineSegment({x: BinaryTo7SegBlock298Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock298Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock298Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock298Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock298",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock298);
BinaryTo7SegBlock8.outputs[0].push({gate: BinaryTo7SegBlock298, position: 0});
BinaryTo7SegBlock298.outputs[1].push({gate: BinaryTo7SegBlock8, position: 1});
BinaryTo7SegBlock9.outputs[1].push({gate: BinaryTo7SegBlock298, position: 0});
BinaryTo7SegBlock298.outputs[1].push({gate: BinaryTo7SegBlock9, position: 0});
let BinaryTo7SegBlock299Rotation0 = rotatePointOrigin({x: 61, y: -17}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock299Rotation1 = rotatePointOrigin({x: 61, y: -27}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock299 = new lineSegment({x: BinaryTo7SegBlock299Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock299Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock299Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock299Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock299",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock299);
BinaryTo7SegBlock11.outputs[0].push({gate: BinaryTo7SegBlock299, position: 0});
BinaryTo7SegBlock299.outputs[1].push({gate: BinaryTo7SegBlock11, position: 1});
BinaryTo7SegBlock12.outputs[1].push({gate: BinaryTo7SegBlock299, position: 0});
BinaryTo7SegBlock299.outputs[1].push({gate: BinaryTo7SegBlock12, position: 0});
let BinaryTo7SegBlock300Rotation0 = rotatePointOrigin({x: 91, y: -17}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock300Rotation1 = rotatePointOrigin({x: 91, y: -27}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock300 = new lineSegment({x: BinaryTo7SegBlock300Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock300Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock300Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock300Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock300",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock300);
BinaryTo7SegBlock14.outputs[0].push({gate: BinaryTo7SegBlock300, position: 0});
BinaryTo7SegBlock300.outputs[1].push({gate: BinaryTo7SegBlock14, position: 1});
BinaryTo7SegBlock15.outputs[1].push({gate: BinaryTo7SegBlock300, position: 0});
BinaryTo7SegBlock300.outputs[1].push({gate: BinaryTo7SegBlock15, position: 0});
let BinaryTo7SegBlock301Rotation0 = rotatePointOrigin({x: 222, y: 118}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock301Rotation1 = rotatePointOrigin({x: 377, y: 118}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock301 = new lineSegment({x: BinaryTo7SegBlock301Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock301Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock301Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock301Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock301",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock301);
BinaryTo7SegBlock224.outputs[0].push({gate: BinaryTo7SegBlock301, position: 0});
BinaryTo7SegBlock301.outputs[1].push({gate: BinaryTo7SegBlock224, position: 1});
BinaryTo7SegBlock225.outputs[1].push({gate: BinaryTo7SegBlock301, position: 0});
BinaryTo7SegBlock301.outputs[1].push({gate: BinaryTo7SegBlock225, position: 0});
let BinaryTo7SegBlock302Rotation0 = rotatePointOrigin({x: 377, y: 118}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock302Rotation1 = rotatePointOrigin({x: 377, y: 613}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock302 = new lineSegment({x: BinaryTo7SegBlock302Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock302Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock302Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock302Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock302",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock302);
BinaryTo7SegBlock301.outputs[0].push({gate: BinaryTo7SegBlock302, position: 0});
BinaryTo7SegBlock302.outputs[1].push({gate: BinaryTo7SegBlock301, position: 1});
BinaryTo7SegBlock302.outputs[0].push({gate: BinaryTo7SegBlock294, position: 0});
BinaryTo7SegBlock302.outputs[1].push({gate: BinaryTo7SegBlock294, position: 0});
let BinaryTo7SegBlock303Rotation0 = rotatePointOrigin({x: 119, y: 418}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock303Rotation1 = rotatePointOrigin({x: 382, y: 418}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock303 = new lineSegment({x: BinaryTo7SegBlock303Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock303Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock303Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock303Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock303",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock303);
BinaryTo7SegBlock37.outputs[0].push({gate: BinaryTo7SegBlock303, position: 0});
BinaryTo7SegBlock37.outputs[1].push({gate: BinaryTo7SegBlock303, position: 0});
let BinaryTo7SegBlock304Rotation0 = rotatePointOrigin({x: 382, y: 418}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock304Rotation1 = rotatePointOrigin({x: 382, y: 613}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock304 = new lineSegment({x: BinaryTo7SegBlock304Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock304Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock304Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock304Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock304",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock304);
BinaryTo7SegBlock303.outputs[0].push({gate: BinaryTo7SegBlock304, position: 0});
BinaryTo7SegBlock304.outputs[1].push({gate: BinaryTo7SegBlock303, position: 1});
BinaryTo7SegBlock304.outputs[0].push({gate: BinaryTo7SegBlock294, position: 1});
BinaryTo7SegBlock304.outputs[1].push({gate: BinaryTo7SegBlock294, position: 1});
let BinaryTo7SegBlock305Rotation0 = rotatePointOrigin({x: 119, y: 438}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock305Rotation1 = rotatePointOrigin({x: 397, y: 438}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock305 = new lineSegment({x: BinaryTo7SegBlock305Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock305Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock305Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock305Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock305",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock305);
BinaryTo7SegBlock38.outputs[0].push({gate: BinaryTo7SegBlock305, position: 0});
BinaryTo7SegBlock38.outputs[1].push({gate: BinaryTo7SegBlock305, position: 0});
let BinaryTo7SegBlock306Rotation0 = rotatePointOrigin({x: 397, y: 438}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock306Rotation1 = rotatePointOrigin({x: 397, y: 613}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock306 = new lineSegment({x: BinaryTo7SegBlock306Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock306Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock306Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock306Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock306",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock306);
BinaryTo7SegBlock305.outputs[0].push({gate: BinaryTo7SegBlock306, position: 0});
BinaryTo7SegBlock306.outputs[1].push({gate: BinaryTo7SegBlock305, position: 1});
BinaryTo7SegBlock306.outputs[0].push({gate: BinaryTo7SegBlock295, position: 0});
BinaryTo7SegBlock306.outputs[1].push({gate: BinaryTo7SegBlock295, position: 0});
let BinaryTo7SegBlock307Rotation0 = rotatePointOrigin({x: 119, y: 458}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock307Rotation1 = rotatePointOrigin({x: 402, y: 458}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock307 = new lineSegment({x: BinaryTo7SegBlock307Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock307Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock307Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock307Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock307",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock307);
BinaryTo7SegBlock39.outputs[0].push({gate: BinaryTo7SegBlock307, position: 0});
BinaryTo7SegBlock39.outputs[1].push({gate: BinaryTo7SegBlock307, position: 0});
let BinaryTo7SegBlock308Rotation0 = rotatePointOrigin({x: 402, y: 458}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock308Rotation1 = rotatePointOrigin({x: 402, y: 613}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock308 = new lineSegment({x: BinaryTo7SegBlock308Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock308Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock308Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock308Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock308",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock308);
BinaryTo7SegBlock307.outputs[0].push({gate: BinaryTo7SegBlock308, position: 0});
BinaryTo7SegBlock308.outputs[1].push({gate: BinaryTo7SegBlock307, position: 1});
BinaryTo7SegBlock308.outputs[0].push({gate: BinaryTo7SegBlock295, position: 1});
BinaryTo7SegBlock308.outputs[1].push({gate: BinaryTo7SegBlock295, position: 1});
let BinaryTo7SegBlock309Rotation0 = rotatePointOrigin({x: 380, y: 627}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock309Rotation1 = rotatePointOrigin({x: 380, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock309 = new lineSegment({x: BinaryTo7SegBlock309Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock309Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock309Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock309Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock309",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock309);
BinaryTo7SegBlock294.outputs[0].push({gate: BinaryTo7SegBlock309, position: 0});
BinaryTo7SegBlock294.outputs[1].push({gate: BinaryTo7SegBlock309, position: 0});
let BinaryTo7SegBlock310Rotation0 = rotatePointOrigin({x: 400, y: 627}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock310Rotation1 = rotatePointOrigin({x: 400, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock310 = new lineSegment({x: BinaryTo7SegBlock310Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock310Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock310Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock310Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock310",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock310);
BinaryTo7SegBlock295.outputs[0].push({gate: BinaryTo7SegBlock310, position: 0});
BinaryTo7SegBlock295.outputs[1].push({gate: BinaryTo7SegBlock310, position: 0});
let BinaryTo7SegBlock311Rotation0 = rotatePointOrigin({x: 387, y: 643}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock311Rotation1 = rotatePointOrigin({x: 387, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock311 = new lineSegment({x: BinaryTo7SegBlock311Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock311Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock311Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock311Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock311",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock311);
BinaryTo7SegBlock311.outputs[0].push({gate: BinaryTo7SegBlock296, position: 0});
BinaryTo7SegBlock311.outputs[1].push({gate: BinaryTo7SegBlock296, position: 0});
let BinaryTo7SegBlock312Rotation0 = rotatePointOrigin({x: 387, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock312Rotation1 = rotatePointOrigin({x: 380, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock312 = new lineSegment({x: BinaryTo7SegBlock312Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock312Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock312Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock312Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock312",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock312);
BinaryTo7SegBlock311.outputs[0].push({gate: BinaryTo7SegBlock312, position: 0});
BinaryTo7SegBlock312.outputs[1].push({gate: BinaryTo7SegBlock311, position: 1});
BinaryTo7SegBlock309.outputs[0].push({gate: BinaryTo7SegBlock312, position: 1});
BinaryTo7SegBlock312.outputs[0].push({gate: BinaryTo7SegBlock309, position: 1});
let BinaryTo7SegBlock313Rotation0 = rotatePointOrigin({x: 392, y: 643}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock313Rotation1 = rotatePointOrigin({x: 392, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock313 = new lineSegment({x: BinaryTo7SegBlock313Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock313Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock313Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock313Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock313",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock313);
BinaryTo7SegBlock313.outputs[0].push({gate: BinaryTo7SegBlock296, position: 1});
BinaryTo7SegBlock313.outputs[1].push({gate: BinaryTo7SegBlock296, position: 1});
let BinaryTo7SegBlock314Rotation0 = rotatePointOrigin({x: 392, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock314Rotation1 = rotatePointOrigin({x: 400, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock314 = new lineSegment({x: BinaryTo7SegBlock314Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock314Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock314Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock314Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock314",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock314);
BinaryTo7SegBlock313.outputs[0].push({gate: BinaryTo7SegBlock314, position: 0});
BinaryTo7SegBlock314.outputs[1].push({gate: BinaryTo7SegBlock313, position: 1});
BinaryTo7SegBlock310.outputs[0].push({gate: BinaryTo7SegBlock314, position: 1});
BinaryTo7SegBlock314.outputs[0].push({gate: BinaryTo7SegBlock310, position: 1});
let BinaryTo7SegBlock315Rotation = rotatePointOrigin({x: 420, y: 618}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock315 = new orGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock315Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock315Rotation.y, BinaryTo7SegBlock.rotation + 0, "BinaryTo7SegBlock315",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock315);
let BinaryTo7SegBlock316Rotation = rotatePointOrigin({x: 440, y: 618}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock316 = new orGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock316Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock316Rotation.y, BinaryTo7SegBlock.rotation + 0, "BinaryTo7SegBlock316",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock316);
let BinaryTo7SegBlock317Rotation = rotatePointOrigin({x: 430, y: 648}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock317 = new orGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock317Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock317Rotation.y, BinaryTo7SegBlock.rotation + 0, "BinaryTo7SegBlock317",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock317);
let BinaryTo7SegBlock318Rotation0 = rotatePointOrigin({x: 282, y: 278}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock318Rotation1 = rotatePointOrigin({x: 417, y: 278}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock318 = new lineSegment({x: BinaryTo7SegBlock318Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock318Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock318Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock318Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock318",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock318);
BinaryTo7SegBlock253.outputs[0].push({gate: BinaryTo7SegBlock318, position: 0});
BinaryTo7SegBlock318.outputs[1].push({gate: BinaryTo7SegBlock253, position: 1});
BinaryTo7SegBlock254.outputs[1].push({gate: BinaryTo7SegBlock318, position: 0});
BinaryTo7SegBlock318.outputs[1].push({gate: BinaryTo7SegBlock254, position: 0});
let BinaryTo7SegBlock319Rotation0 = rotatePointOrigin({x: 417, y: 278}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock319Rotation1 = rotatePointOrigin({x: 417, y: 613}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock319 = new lineSegment({x: BinaryTo7SegBlock319Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock319Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock319Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock319Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock319",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock319);
BinaryTo7SegBlock318.outputs[0].push({gate: BinaryTo7SegBlock319, position: 0});
BinaryTo7SegBlock319.outputs[1].push({gate: BinaryTo7SegBlock318, position: 1});
BinaryTo7SegBlock319.outputs[0].push({gate: BinaryTo7SegBlock315, position: 0});
BinaryTo7SegBlock319.outputs[1].push({gate: BinaryTo7SegBlock315, position: 0});
let BinaryTo7SegBlock320Rotation0 = rotatePointOrigin({x: 382, y: 418}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock320Rotation1 = rotatePointOrigin({x: 422, y: 418}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock320 = new lineSegment({x: BinaryTo7SegBlock320Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock320Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock320Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock320Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock320",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock320);
BinaryTo7SegBlock303.outputs[0].push({gate: BinaryTo7SegBlock320, position: 0});
BinaryTo7SegBlock320.outputs[1].push({gate: BinaryTo7SegBlock303, position: 1});
BinaryTo7SegBlock304.outputs[1].push({gate: BinaryTo7SegBlock320, position: 0});
BinaryTo7SegBlock320.outputs[1].push({gate: BinaryTo7SegBlock304, position: 0});
let BinaryTo7SegBlock321Rotation0 = rotatePointOrigin({x: 422, y: 418}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock321Rotation1 = rotatePointOrigin({x: 422, y: 613}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock321 = new lineSegment({x: BinaryTo7SegBlock321Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock321Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock321Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock321Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock321",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock321);
BinaryTo7SegBlock320.outputs[0].push({gate: BinaryTo7SegBlock321, position: 0});
BinaryTo7SegBlock321.outputs[1].push({gate: BinaryTo7SegBlock320, position: 1});
BinaryTo7SegBlock321.outputs[0].push({gate: BinaryTo7SegBlock315, position: 1});
BinaryTo7SegBlock321.outputs[1].push({gate: BinaryTo7SegBlock315, position: 1});
let BinaryTo7SegBlock322Rotation0 = rotatePointOrigin({x: 119, y: 478}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock322Rotation1 = rotatePointOrigin({x: 437, y: 478}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock322 = new lineSegment({x: BinaryTo7SegBlock322Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock322Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock322Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock322Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock322",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock322);
BinaryTo7SegBlock40.outputs[0].push({gate: BinaryTo7SegBlock322, position: 0});
BinaryTo7SegBlock40.outputs[1].push({gate: BinaryTo7SegBlock322, position: 0});
let BinaryTo7SegBlock323Rotation0 = rotatePointOrigin({x: 437, y: 478}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock323Rotation1 = rotatePointOrigin({x: 437, y: 613}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock323 = new lineSegment({x: BinaryTo7SegBlock323Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock323Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock323Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock323Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock323",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock323);
BinaryTo7SegBlock322.outputs[0].push({gate: BinaryTo7SegBlock323, position: 0});
BinaryTo7SegBlock323.outputs[1].push({gate: BinaryTo7SegBlock322, position: 1});
BinaryTo7SegBlock323.outputs[0].push({gate: BinaryTo7SegBlock316, position: 0});
BinaryTo7SegBlock323.outputs[1].push({gate: BinaryTo7SegBlock316, position: 0});
let BinaryTo7SegBlock324Rotation0 = rotatePointOrigin({x: 125, y: 498}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock324Rotation1 = rotatePointOrigin({x: 442, y: 498}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock324 = new lineSegment({x: BinaryTo7SegBlock324Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock324Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock324Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock324Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock324",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock324);
BinaryTo7SegBlock161.outputs[0].push({gate: BinaryTo7SegBlock324, position: 0});
BinaryTo7SegBlock324.outputs[1].push({gate: BinaryTo7SegBlock161, position: 1});
BinaryTo7SegBlock162.outputs[1].push({gate: BinaryTo7SegBlock324, position: 0});
BinaryTo7SegBlock324.outputs[1].push({gate: BinaryTo7SegBlock162, position: 0});
let BinaryTo7SegBlock325Rotation0 = rotatePointOrigin({x: 442, y: 498}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock325Rotation1 = rotatePointOrigin({x: 442, y: 613}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock325 = new lineSegment({x: BinaryTo7SegBlock325Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock325Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock325Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock325Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock325",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock325);
BinaryTo7SegBlock324.outputs[0].push({gate: BinaryTo7SegBlock325, position: 0});
BinaryTo7SegBlock325.outputs[1].push({gate: BinaryTo7SegBlock324, position: 1});
BinaryTo7SegBlock325.outputs[0].push({gate: BinaryTo7SegBlock316, position: 1});
BinaryTo7SegBlock325.outputs[1].push({gate: BinaryTo7SegBlock316, position: 1});
let BinaryTo7SegBlock326Rotation0 = rotatePointOrigin({x: 420, y: 627}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock326Rotation1 = rotatePointOrigin({x: 420, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock326 = new lineSegment({x: BinaryTo7SegBlock326Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock326Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock326Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock326Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock326",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock326);
BinaryTo7SegBlock315.outputs[0].push({gate: BinaryTo7SegBlock326, position: 0});
BinaryTo7SegBlock315.outputs[1].push({gate: BinaryTo7SegBlock326, position: 0});
let BinaryTo7SegBlock327Rotation0 = rotatePointOrigin({x: 440, y: 627}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock327Rotation1 = rotatePointOrigin({x: 440, y: 627}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock327 = new lineSegment({x: BinaryTo7SegBlock327Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock327Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock327Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock327Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock327",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock327);
BinaryTo7SegBlock316.outputs[0].push({gate: BinaryTo7SegBlock327, position: 0});
BinaryTo7SegBlock316.outputs[1].push({gate: BinaryTo7SegBlock327, position: 0});
BinaryTo7SegBlock316.outputs[0].push({gate: BinaryTo7SegBlock327, position: 1});
BinaryTo7SegBlock316.outputs[1].push({gate: BinaryTo7SegBlock327, position: 1});
let BinaryTo7SegBlock328Rotation0 = rotatePointOrigin({x: 440, y: 627}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock328Rotation1 = rotatePointOrigin({x: 440, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock328 = new lineSegment({x: BinaryTo7SegBlock328Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock328Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock328Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock328Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock328",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock328);
BinaryTo7SegBlock316.outputs[0].push({gate: BinaryTo7SegBlock328, position: 0});
BinaryTo7SegBlock316.outputs[1].push({gate: BinaryTo7SegBlock328, position: 0});
BinaryTo7SegBlock327.outputs[1].push({gate: BinaryTo7SegBlock328, position: 0});
BinaryTo7SegBlock328.outputs[1].push({gate: BinaryTo7SegBlock327, position: 0});
BinaryTo7SegBlock327.outputs[0].push({gate: BinaryTo7SegBlock328, position: 0});
BinaryTo7SegBlock328.outputs[1].push({gate: BinaryTo7SegBlock327, position: 1});
let BinaryTo7SegBlock329Rotation0 = rotatePointOrigin({x: 427, y: 643}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock329Rotation1 = rotatePointOrigin({x: 427, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock329 = new lineSegment({x: BinaryTo7SegBlock329Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock329Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock329Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock329Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock329",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock329);
BinaryTo7SegBlock329.outputs[0].push({gate: BinaryTo7SegBlock317, position: 0});
BinaryTo7SegBlock329.outputs[1].push({gate: BinaryTo7SegBlock317, position: 0});
let BinaryTo7SegBlock330Rotation0 = rotatePointOrigin({x: 427, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock330Rotation1 = rotatePointOrigin({x: 420, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock330 = new lineSegment({x: BinaryTo7SegBlock330Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock330Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock330Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock330Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock330",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock330);
BinaryTo7SegBlock329.outputs[0].push({gate: BinaryTo7SegBlock330, position: 0});
BinaryTo7SegBlock330.outputs[1].push({gate: BinaryTo7SegBlock329, position: 1});
BinaryTo7SegBlock326.outputs[0].push({gate: BinaryTo7SegBlock330, position: 1});
BinaryTo7SegBlock330.outputs[0].push({gate: BinaryTo7SegBlock326, position: 1});
let BinaryTo7SegBlock331Rotation0 = rotatePointOrigin({x: 432, y: 643}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock331Rotation1 = rotatePointOrigin({x: 432, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock331 = new lineSegment({x: BinaryTo7SegBlock331Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock331Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock331Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock331Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock331",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock331);
BinaryTo7SegBlock331.outputs[0].push({gate: BinaryTo7SegBlock317, position: 1});
BinaryTo7SegBlock331.outputs[1].push({gate: BinaryTo7SegBlock317, position: 1});
let BinaryTo7SegBlock332Rotation0 = rotatePointOrigin({x: 432, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock332Rotation1 = rotatePointOrigin({x: 440, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock332 = new lineSegment({x: BinaryTo7SegBlock332Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock332Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock332Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock332Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock332",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock332);
BinaryTo7SegBlock331.outputs[0].push({gate: BinaryTo7SegBlock332, position: 0});
BinaryTo7SegBlock332.outputs[1].push({gate: BinaryTo7SegBlock331, position: 1});
BinaryTo7SegBlock328.outputs[0].push({gate: BinaryTo7SegBlock332, position: 1});
BinaryTo7SegBlock332.outputs[0].push({gate: BinaryTo7SegBlock328, position: 1});
let BinaryTo7SegBlock333Rotation = rotatePointOrigin({x: 460, y: 618}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock333 = new orGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock333Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock333Rotation.y, BinaryTo7SegBlock.rotation + 0, "BinaryTo7SegBlock333",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock333);
let BinaryTo7SegBlock334Rotation = rotatePointOrigin({x: 490, y: 618}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock334 = new orGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock334Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock334Rotation.y, BinaryTo7SegBlock.rotation + 0, "BinaryTo7SegBlock334",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock334);
let BinaryTo7SegBlock335Rotation = rotatePointOrigin({x: 470, y: 648}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock335 = new orGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock335Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock335Rotation.y, BinaryTo7SegBlock.rotation + 0, "BinaryTo7SegBlock335",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock335);
let BinaryTo7SegBlock336Rotation = rotatePointOrigin({x: 480, y: 678}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock336 = new orGate(BinaryTo7SegBlock.x - 10 + BinaryTo7SegBlock336Rotation.x, BinaryTo7SegBlock.y - 10 + BinaryTo7SegBlock336Rotation.y, BinaryTo7SegBlock.rotation + 0, "BinaryTo7SegBlock336",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock336);
let BinaryTo7SegBlock337Rotation0 = rotatePointOrigin({x: 149, y: 198}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock337Rotation1 = rotatePointOrigin({x: 457, y: 198}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock337 = new lineSegment({x: BinaryTo7SegBlock337Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock337Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock337Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock337Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock337",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock337);
BinaryTo7SegBlock26.outputs[0].push({gate: BinaryTo7SegBlock337, position: 0});
BinaryTo7SegBlock26.outputs[1].push({gate: BinaryTo7SegBlock337, position: 0});
let BinaryTo7SegBlock338Rotation0 = rotatePointOrigin({x: 457, y: 198}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock338Rotation1 = rotatePointOrigin({x: 457, y: 613}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock338 = new lineSegment({x: BinaryTo7SegBlock338Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock338Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock338Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock338Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock338",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock338);
BinaryTo7SegBlock337.outputs[0].push({gate: BinaryTo7SegBlock338, position: 0});
BinaryTo7SegBlock338.outputs[1].push({gate: BinaryTo7SegBlock337, position: 1});
BinaryTo7SegBlock338.outputs[0].push({gate: BinaryTo7SegBlock333, position: 0});
BinaryTo7SegBlock338.outputs[1].push({gate: BinaryTo7SegBlock333, position: 0});
let BinaryTo7SegBlock339Rotation0 = rotatePointOrigin({x: 149, y: 258}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock339Rotation1 = rotatePointOrigin({x: 462, y: 258}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock339 = new lineSegment({x: BinaryTo7SegBlock339Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock339Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock339Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock339Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock339",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock339);
BinaryTo7SegBlock29.outputs[0].push({gate: BinaryTo7SegBlock339, position: 0});
BinaryTo7SegBlock29.outputs[1].push({gate: BinaryTo7SegBlock339, position: 0});
let BinaryTo7SegBlock340Rotation0 = rotatePointOrigin({x: 462, y: 258}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock340Rotation1 = rotatePointOrigin({x: 462, y: 613}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock340 = new lineSegment({x: BinaryTo7SegBlock340Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock340Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock340Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock340Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock340",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock340);
BinaryTo7SegBlock339.outputs[0].push({gate: BinaryTo7SegBlock340, position: 0});
BinaryTo7SegBlock340.outputs[1].push({gate: BinaryTo7SegBlock339, position: 1});
BinaryTo7SegBlock340.outputs[0].push({gate: BinaryTo7SegBlock333, position: 1});
BinaryTo7SegBlock340.outputs[1].push({gate: BinaryTo7SegBlock333, position: 1});
let BinaryTo7SegBlock341Rotation0 = rotatePointOrigin({x: 417, y: 278}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock341Rotation1 = rotatePointOrigin({x: 472, y: 278}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock341 = new lineSegment({x: BinaryTo7SegBlock341Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock341Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock341Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock341Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock341",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock341);
BinaryTo7SegBlock318.outputs[0].push({gate: BinaryTo7SegBlock341, position: 0});
BinaryTo7SegBlock341.outputs[1].push({gate: BinaryTo7SegBlock318, position: 1});
BinaryTo7SegBlock319.outputs[1].push({gate: BinaryTo7SegBlock341, position: 0});
BinaryTo7SegBlock341.outputs[1].push({gate: BinaryTo7SegBlock319, position: 0});
let BinaryTo7SegBlock342Rotation0 = rotatePointOrigin({x: 472, y: 278}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock342Rotation1 = rotatePointOrigin({x: 472, y: 643}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock342 = new lineSegment({x: BinaryTo7SegBlock342Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock342Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock342Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock342Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock342",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock342);
BinaryTo7SegBlock341.outputs[0].push({gate: BinaryTo7SegBlock342, position: 0});
BinaryTo7SegBlock342.outputs[1].push({gate: BinaryTo7SegBlock341, position: 1});
BinaryTo7SegBlock342.outputs[0].push({gate: BinaryTo7SegBlock335, position: 1});
BinaryTo7SegBlock342.outputs[1].push({gate: BinaryTo7SegBlock335, position: 1});
let BinaryTo7SegBlock343Rotation0 = rotatePointOrigin({x: 402, y: 458}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock343Rotation1 = rotatePointOrigin({x: 487, y: 458}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock343 = new lineSegment({x: BinaryTo7SegBlock343Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock343Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock343Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock343Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock343",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock343);
BinaryTo7SegBlock307.outputs[0].push({gate: BinaryTo7SegBlock343, position: 0});
BinaryTo7SegBlock343.outputs[1].push({gate: BinaryTo7SegBlock307, position: 1});
BinaryTo7SegBlock308.outputs[1].push({gate: BinaryTo7SegBlock343, position: 0});
BinaryTo7SegBlock343.outputs[1].push({gate: BinaryTo7SegBlock308, position: 0});
let BinaryTo7SegBlock344Rotation0 = rotatePointOrigin({x: 487, y: 458}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock344Rotation1 = rotatePointOrigin({x: 487, y: 613}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock344 = new lineSegment({x: BinaryTo7SegBlock344Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock344Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock344Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock344Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock344",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock344);
BinaryTo7SegBlock343.outputs[0].push({gate: BinaryTo7SegBlock344, position: 0});
BinaryTo7SegBlock344.outputs[1].push({gate: BinaryTo7SegBlock343, position: 1});
BinaryTo7SegBlock344.outputs[0].push({gate: BinaryTo7SegBlock334, position: 0});
BinaryTo7SegBlock344.outputs[1].push({gate: BinaryTo7SegBlock334, position: 0});
let BinaryTo7SegBlock345Rotation0 = rotatePointOrigin({x: 125, y: 538}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock345Rotation1 = rotatePointOrigin({x: 492, y: 538}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock345 = new lineSegment({x: BinaryTo7SegBlock345Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock345Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock345Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock345Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock345",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock345);
BinaryTo7SegBlock171.outputs[0].push({gate: BinaryTo7SegBlock345, position: 0});
BinaryTo7SegBlock345.outputs[1].push({gate: BinaryTo7SegBlock171, position: 1});
BinaryTo7SegBlock172.outputs[1].push({gate: BinaryTo7SegBlock345, position: 0});
BinaryTo7SegBlock345.outputs[1].push({gate: BinaryTo7SegBlock172, position: 0});
let BinaryTo7SegBlock346Rotation0 = rotatePointOrigin({x: 492, y: 538}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock346Rotation1 = rotatePointOrigin({x: 492, y: 613}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock346 = new lineSegment({x: BinaryTo7SegBlock346Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock346Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock346Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock346Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock346",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock346);
BinaryTo7SegBlock345.outputs[0].push({gate: BinaryTo7SegBlock346, position: 0});
BinaryTo7SegBlock346.outputs[1].push({gate: BinaryTo7SegBlock345, position: 1});
BinaryTo7SegBlock346.outputs[0].push({gate: BinaryTo7SegBlock334, position: 1});
BinaryTo7SegBlock346.outputs[1].push({gate: BinaryTo7SegBlock334, position: 1});
let BinaryTo7SegBlock347Rotation0 = rotatePointOrigin({x: 460, y: 627}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock347Rotation1 = rotatePointOrigin({x: 460, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock347 = new lineSegment({x: BinaryTo7SegBlock347Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock347Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock347Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock347Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock347",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock347);
BinaryTo7SegBlock333.outputs[0].push({gate: BinaryTo7SegBlock347, position: 0});
BinaryTo7SegBlock333.outputs[1].push({gate: BinaryTo7SegBlock347, position: 0});
let BinaryTo7SegBlock348Rotation0 = rotatePointOrigin({x: 490, y: 627}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock348Rotation1 = rotatePointOrigin({x: 490, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock348 = new lineSegment({x: BinaryTo7SegBlock348Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock348Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock348Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock348Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock348",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock348);
BinaryTo7SegBlock334.outputs[0].push({gate: BinaryTo7SegBlock348, position: 0});
BinaryTo7SegBlock334.outputs[1].push({gate: BinaryTo7SegBlock348, position: 0});
let BinaryTo7SegBlock349Rotation0 = rotatePointOrigin({x: 470, y: 657}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock349Rotation1 = rotatePointOrigin({x: 470, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock349 = new lineSegment({x: BinaryTo7SegBlock349Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock349Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock349Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock349Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock349",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock349);
BinaryTo7SegBlock335.outputs[0].push({gate: BinaryTo7SegBlock349, position: 0});
BinaryTo7SegBlock335.outputs[1].push({gate: BinaryTo7SegBlock349, position: 0});
let BinaryTo7SegBlock350Rotation0 = rotatePointOrigin({x: 467, y: 643}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock350Rotation1 = rotatePointOrigin({x: 467, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock350 = new lineSegment({x: BinaryTo7SegBlock350Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock350Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock350Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock350Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock350",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock350);
BinaryTo7SegBlock350.outputs[0].push({gate: BinaryTo7SegBlock335, position: 0});
BinaryTo7SegBlock350.outputs[1].push({gate: BinaryTo7SegBlock335, position: 0});
let BinaryTo7SegBlock351Rotation0 = rotatePointOrigin({x: 467, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock351Rotation1 = rotatePointOrigin({x: 460, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock351 = new lineSegment({x: BinaryTo7SegBlock351Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock351Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock351Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock351Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock351",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock351);
BinaryTo7SegBlock350.outputs[0].push({gate: BinaryTo7SegBlock351, position: 0});
BinaryTo7SegBlock351.outputs[1].push({gate: BinaryTo7SegBlock350, position: 1});
BinaryTo7SegBlock347.outputs[0].push({gate: BinaryTo7SegBlock351, position: 1});
BinaryTo7SegBlock351.outputs[0].push({gate: BinaryTo7SegBlock347, position: 1});
let BinaryTo7SegBlock352Rotation0 = rotatePointOrigin({x: 477, y: 673}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock352Rotation1 = rotatePointOrigin({x: 477, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock352 = new lineSegment({x: BinaryTo7SegBlock352Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock352Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock352Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock352Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock352",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock352);
BinaryTo7SegBlock352.outputs[0].push({gate: BinaryTo7SegBlock336, position: 0});
BinaryTo7SegBlock352.outputs[1].push({gate: BinaryTo7SegBlock336, position: 0});
let BinaryTo7SegBlock353Rotation0 = rotatePointOrigin({x: 477, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock353Rotation1 = rotatePointOrigin({x: 470, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock353 = new lineSegment({x: BinaryTo7SegBlock353Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock353Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock353Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock353Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock353",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock353);
BinaryTo7SegBlock352.outputs[0].push({gate: BinaryTo7SegBlock353, position: 0});
BinaryTo7SegBlock353.outputs[1].push({gate: BinaryTo7SegBlock352, position: 1});
BinaryTo7SegBlock349.outputs[0].push({gate: BinaryTo7SegBlock353, position: 1});
BinaryTo7SegBlock353.outputs[0].push({gate: BinaryTo7SegBlock349, position: 1});
let BinaryTo7SegBlock354Rotation0 = rotatePointOrigin({x: 490, y: 633}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock354Rotation1 = rotatePointOrigin({x: 490, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock354 = new lineSegment({x: BinaryTo7SegBlock354Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock354Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock354Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock354Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock354",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock354);
BinaryTo7SegBlock348.outputs[0].push({gate: BinaryTo7SegBlock354, position: 0});
BinaryTo7SegBlock354.outputs[1].push({gate: BinaryTo7SegBlock348, position: 1});
let BinaryTo7SegBlock355Rotation0 = rotatePointOrigin({x: 482, y: 673}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock355Rotation1 = rotatePointOrigin({x: 482, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock355 = new lineSegment({x: BinaryTo7SegBlock355Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock355Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock355Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock355Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock355",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock355);
BinaryTo7SegBlock355.outputs[0].push({gate: BinaryTo7SegBlock336, position: 1});
BinaryTo7SegBlock355.outputs[1].push({gate: BinaryTo7SegBlock336, position: 1});
let BinaryTo7SegBlock356Rotation0 = rotatePointOrigin({x: 482, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock356Rotation1 = rotatePointOrigin({x: 490, y: 663}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock356 = new lineSegment({x: BinaryTo7SegBlock356Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock356Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock356Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock356Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock356",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock356);
BinaryTo7SegBlock355.outputs[0].push({gate: BinaryTo7SegBlock356, position: 0});
BinaryTo7SegBlock356.outputs[1].push({gate: BinaryTo7SegBlock355, position: 1});
BinaryTo7SegBlock354.outputs[0].push({gate: BinaryTo7SegBlock356, position: 1});
BinaryTo7SegBlock356.outputs[0].push({gate: BinaryTo7SegBlock354, position: 1});
let BinaryTo7SegBlock357Rotation0 = rotatePointOrigin({x: 480, y: 687}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock357Rotation1 = rotatePointOrigin({x: 480, y: 693}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock357 = new lineSegment({x: BinaryTo7SegBlock357Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock357Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock357Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock357Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock357",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock357);
BinaryTo7SegBlock336.outputs[0].push({gate: BinaryTo7SegBlock357, position: 0});
BinaryTo7SegBlock336.outputs[1].push({gate: BinaryTo7SegBlock357, position: 0});
let BinaryTo7SegBlock359Rotation0 = rotatePointOrigin({x: 390, y: 657}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock359Rotation1 = rotatePointOrigin({x: 390, y: 693}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock359 = new lineSegment({x: BinaryTo7SegBlock359Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock359Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock359Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock359Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock359",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock359);
BinaryTo7SegBlock296.outputs[0].push({gate: BinaryTo7SegBlock359, position: 0});
BinaryTo7SegBlock296.outputs[1].push({gate: BinaryTo7SegBlock359, position: 0});
let BinaryTo7SegBlock360Rotation0 = rotatePointOrigin({x: 350, y: 687}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock360Rotation1 = rotatePointOrigin({x: 350, y: 693}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock360 = new lineSegment({x: BinaryTo7SegBlock360Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock360Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock360Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock360Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock360",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock360);
BinaryTo7SegBlock273.outputs[0].push({gate: BinaryTo7SegBlock360, position: 0});
BinaryTo7SegBlock273.outputs[1].push({gate: BinaryTo7SegBlock360, position: 0});
let BinaryTo7SegBlock361Rotation0 = rotatePointOrigin({x: 300, y: 687}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock361Rotation1 = rotatePointOrigin({x: 300, y: 693}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock361 = new lineSegment({x: BinaryTo7SegBlock361Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock361Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock361Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock361Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock361",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock361);
BinaryTo7SegBlock250.outputs[0].push({gate: BinaryTo7SegBlock361, position: 0});
BinaryTo7SegBlock250.outputs[1].push({gate: BinaryTo7SegBlock361, position: 0});
let BinaryTo7SegBlock362Rotation0 = rotatePointOrigin({x: 240, y: 687}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock362Rotation1 = rotatePointOrigin({x: 240, y: 693}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock362 = new lineSegment({x: BinaryTo7SegBlock362Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock362Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock362Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock362Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock362",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock362);
BinaryTo7SegBlock196.outputs[0].push({gate: BinaryTo7SegBlock362, position: 0});
BinaryTo7SegBlock196.outputs[1].push({gate: BinaryTo7SegBlock362, position: 0});
let BinaryTo7SegBlock363Rotation0 = rotatePointOrigin({x: 180, y: 687}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock363Rotation1 = rotatePointOrigin({x: 180, y: 693}, BinaryTo7SegBlock.rotation);
let BinaryTo7SegBlock363 = new lineSegment({x: BinaryTo7SegBlock363Rotation0.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock363Rotation0.y + BinaryTo7SegBlock.y}, {x: BinaryTo7SegBlock363Rotation1.x + BinaryTo7SegBlock.x, y: BinaryTo7SegBlock363Rotation1.y + BinaryTo7SegBlock.y}, "BinaryTo7SegBlock363",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlock363);
BinaryTo7SegBlock191.outputs[0].push({gate: BinaryTo7SegBlock363, position: 0});
BinaryTo7SegBlock191.outputs[1].push({gate: BinaryTo7SegBlock363, position: 0});   
//BinaryTo7SegBlockFix1
let BinaryTo7SegBlockFix1 = {x: BinaryTo7SegBlock.x + 440, y: BinaryTo7SegBlock.y + 675, rotation: 0, name: "BinaryTo7SegBlockFix1"};
let BinaryTo7SegBlockFix11Rotation = rotatePointOrigin({x: 1, y: 2}, BinaryTo7SegBlockFix1.rotation);
let BinaryTo7SegBlockFix11 = new orGate(BinaryTo7SegBlockFix1.x - 10 + BinaryTo7SegBlockFix11Rotation.x, BinaryTo7SegBlockFix1.y - 10 + BinaryTo7SegBlockFix11Rotation.y, BinaryTo7SegBlockFix1.rotation + 0, "BinaryTo7SegBlockFix11",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlockFix11);
let BinaryTo7SegBlockFix12Rotation0 = rotatePointOrigin({x: -9, y: -19}, BinaryTo7SegBlockFix1.rotation);
let BinaryTo7SegBlockFix12Rotation1 = rotatePointOrigin({x: -9, y: -13}, BinaryTo7SegBlockFix1.rotation);
let BinaryTo7SegBlockFix12 = new lineSegment({x: BinaryTo7SegBlockFix12Rotation0.x + BinaryTo7SegBlockFix1.x, y: BinaryTo7SegBlockFix12Rotation0.y + BinaryTo7SegBlockFix1.y}, {x: BinaryTo7SegBlockFix12Rotation1.x + BinaryTo7SegBlockFix1.x, y: BinaryTo7SegBlockFix12Rotation1.y + BinaryTo7SegBlockFix1.y}, "BinaryTo7SegBlockFix12",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlockFix12);
BinaryTo7SegBlock317.outputs[0].push({gate: BinaryTo7SegBlockFix12, position: 0});
BinaryTo7SegBlock317.outputs[1].push({gate: BinaryTo7SegBlockFix12, position: 0});
let BinaryTo7SegBlockFix13Rotation0 = rotatePointOrigin({x: -9, y: -13}, BinaryTo7SegBlockFix1.rotation);
let BinaryTo7SegBlockFix13Rotation1 = rotatePointOrigin({x: -2, y: -13}, BinaryTo7SegBlockFix1.rotation);
let BinaryTo7SegBlockFix13 = new lineSegment({x: BinaryTo7SegBlockFix13Rotation0.x + BinaryTo7SegBlockFix1.x, y: BinaryTo7SegBlockFix13Rotation0.y + BinaryTo7SegBlockFix1.y}, {x: BinaryTo7SegBlockFix13Rotation1.x + BinaryTo7SegBlockFix1.x, y: BinaryTo7SegBlockFix13Rotation1.y + BinaryTo7SegBlockFix1.y}, "BinaryTo7SegBlockFix13",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlockFix13);
BinaryTo7SegBlockFix12.outputs[0].push({gate: BinaryTo7SegBlockFix13, position: 0});
BinaryTo7SegBlockFix13.outputs[1].push({gate: BinaryTo7SegBlockFix12, position: 1});
let BinaryTo7SegBlockFix14Rotation0 = rotatePointOrigin({x: -2, y: -13}, BinaryTo7SegBlockFix1.rotation);
let BinaryTo7SegBlockFix14Rotation1 = rotatePointOrigin({x: -2, y: -3}, BinaryTo7SegBlockFix1.rotation);
let BinaryTo7SegBlockFix14 = new lineSegment({x: BinaryTo7SegBlockFix14Rotation0.x + BinaryTo7SegBlockFix1.x, y: BinaryTo7SegBlockFix14Rotation0.y + BinaryTo7SegBlockFix1.y}, {x: BinaryTo7SegBlockFix14Rotation1.x + BinaryTo7SegBlockFix1.x, y: BinaryTo7SegBlockFix14Rotation1.y + BinaryTo7SegBlockFix1.y}, "BinaryTo7SegBlockFix14",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlockFix14);
BinaryTo7SegBlockFix13.outputs[0].push({gate: BinaryTo7SegBlockFix14, position: 0});
BinaryTo7SegBlockFix14.outputs[1].push({gate: BinaryTo7SegBlockFix13, position: 1});
BinaryTo7SegBlockFix14.outputs[0].push({gate: BinaryTo7SegBlockFix11, position: 0});
BinaryTo7SegBlockFix14.outputs[1].push({gate: BinaryTo7SegBlockFix11, position: 0});
let BinaryTo7SegBlockFix15Rotation0 = rotatePointOrigin({x: 3, y: -3}, BinaryTo7SegBlockFix1.rotation);
let BinaryTo7SegBlockFix15Rotation1 = rotatePointOrigin({x: 11, y: -45}, BinaryTo7SegBlockFix1.rotation);
let BinaryTo7SegBlockFix15 = new lineSegment({x: BinaryTo7SegBlockFix15Rotation0.x + BinaryTo7SegBlockFix1.x, y: BinaryTo7SegBlockFix15Rotation0.y + BinaryTo7SegBlockFix1.y}, {x: BinaryTo7SegBlockFix15Rotation1.x + BinaryTo7SegBlockFix1.x, y: BinaryTo7SegBlockFix15Rotation1.y + BinaryTo7SegBlockFix1.y}, "BinaryTo7SegBlockFix15",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlockFix15);
BinaryTo7SegBlockFix15.outputs[0].push({gate: BinaryTo7SegBlockFix11, position: 1});
BinaryTo7SegBlockFix15.outputs[1].push({gate: BinaryTo7SegBlockFix11, position: 1});
let BinaryTo7SegBlockFix16Rotation0 = rotatePointOrigin({x: -290, y: -418}, BinaryTo7SegBlockFix1.rotation);
let BinaryTo7SegBlockFix16Rotation1 = rotatePointOrigin({x: 11, y: -418}, BinaryTo7SegBlockFix1.rotation);
let BinaryTo7SegBlockFix16 = new lineSegment({x: BinaryTo7SegBlockFix16Rotation0.x + BinaryTo7SegBlockFix1.x, y: BinaryTo7SegBlockFix16Rotation0.y + BinaryTo7SegBlockFix1.y}, {x: BinaryTo7SegBlockFix16Rotation1.x + BinaryTo7SegBlockFix1.x, y: BinaryTo7SegBlockFix16Rotation1.y + BinaryTo7SegBlockFix1.y}, "BinaryTo7SegBlockFix16",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlockFix16);
BinaryTo7SegBlock29.outputs[0].push({gate: BinaryTo7SegBlockFix16, position: 0});
BinaryTo7SegBlock29.outputs[1].push({gate: BinaryTo7SegBlockFix16, position: 0});
BinaryTo7SegBlock339.outputs[1].push({gate: BinaryTo7SegBlockFix16, position: 0});
BinaryTo7SegBlockFix16.outputs[1].push({gate: BinaryTo7SegBlock339, position: 0});
let BinaryTo7SegBlockFix17Rotation0 = rotatePointOrigin({x: 11, y: -418}, BinaryTo7SegBlockFix1.rotation);
let BinaryTo7SegBlockFix17Rotation1 = rotatePointOrigin({x: 11, y: -45}, BinaryTo7SegBlockFix1.rotation);
let BinaryTo7SegBlockFix17 = new lineSegment({x: BinaryTo7SegBlockFix17Rotation0.x + BinaryTo7SegBlockFix1.x, y: BinaryTo7SegBlockFix17Rotation0.y + BinaryTo7SegBlockFix1.y}, {x: BinaryTo7SegBlockFix17Rotation1.x + BinaryTo7SegBlockFix1.x, y: BinaryTo7SegBlockFix17Rotation1.y + BinaryTo7SegBlockFix1.y}, "BinaryTo7SegBlockFix17",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlockFix17);
BinaryTo7SegBlockFix16.outputs[0].push({gate: BinaryTo7SegBlockFix17, position: 0});
BinaryTo7SegBlockFix17.outputs[1].push({gate: BinaryTo7SegBlockFix16, position: 1});
BinaryTo7SegBlockFix15.outputs[0].push({gate: BinaryTo7SegBlockFix17, position: 1});
BinaryTo7SegBlockFix17.outputs[0].push({gate: BinaryTo7SegBlockFix15, position: 1});
let BinaryTo7SegBlockFix18Rotation0 = rotatePointOrigin({x: 1, y: 11}, BinaryTo7SegBlockFix1.rotation);
let BinaryTo7SegBlockFix18Rotation1 = rotatePointOrigin({x: 1, y: 17}, BinaryTo7SegBlockFix1.rotation);
let BinaryTo7SegBlockFix18 = new lineSegment({x: BinaryTo7SegBlockFix18Rotation0.x + BinaryTo7SegBlockFix1.x, y: BinaryTo7SegBlockFix18Rotation0.y + BinaryTo7SegBlockFix1.y}, {x: BinaryTo7SegBlockFix18Rotation1.x + BinaryTo7SegBlockFix1.x, y: BinaryTo7SegBlockFix18Rotation1.y + BinaryTo7SegBlockFix1.y}, "BinaryTo7SegBlockFix18",[[],[]], BinaryTo7SegBlockMask);
globalGates.push(BinaryTo7SegBlockFix18);
BinaryTo7SegBlockFix11.outputs[0].push({gate: BinaryTo7SegBlockFix18, position: 0});
BinaryTo7SegBlockFix11.outputs[1].push({gate: BinaryTo7SegBlockFix18, position: 0});
  
//clockAndReset
let clockAndReset = {x: 20, y: 25, rotation: 0, name: "clockAndReset"};
let clockAndResetMask = new maskGate({x: clockAndReset.x , y: clockAndReset.y}, {x: clockAndReset.x, y: clockAndReset.y}, "clockAndReset", null);
globalGates.push(clockAndResetMask);
let clockAndReset1Rotation = rotatePointOrigin({x: 5.5, y: 0.5}, clockAndReset.rotation);
let clockAndReset1 = new clockGate(clockAndReset.x - 19.5 + clockAndReset1Rotation.x, clockAndReset.y - 9.5 + clockAndReset1Rotation.y, clockAndReset.rotation + 0, "clockAndReset1",[[],[]], "null");
globalGates.push(clockAndReset1);
let clockAndReset2Rotation = rotatePointOrigin({x: 65, y: 0}, clockAndReset.rotation);
let clockAndReset2 = new orGate(clockAndReset.x - 10 + clockAndReset2Rotation.x, clockAndReset.y - 10 + clockAndReset2Rotation.y, clockAndReset.rotation + 270, "clockAndReset2",[[],[]], "null");
globalGates.push(clockAndReset2);
let clockAndReset3Rotation0 = rotatePointOrigin({x: 25, y: 0}, clockAndReset.rotation);
let clockAndReset3Rotation1 = rotatePointOrigin({x: 30, y: 0}, clockAndReset.rotation);
let clockAndReset3 = new lineSegment({x: clockAndReset3Rotation0.x + clockAndReset.x, y: clockAndReset3Rotation0.y + clockAndReset.y}, {x: clockAndReset3Rotation1.x + clockAndReset.x, y: clockAndReset3Rotation1.y + clockAndReset.y}, "clockAndReset3",[[],[]], "null");
globalGates.push(clockAndReset3);
clockAndReset1.outputs[0].push({gate: clockAndReset3, position: 0});
clockAndReset1.outputs[1].push({gate: clockAndReset3, position: 0});
let clockAndReset4Rotation0 = rotatePointOrigin({x: 30, y: 0}, clockAndReset.rotation);
let clockAndReset4Rotation1 = rotatePointOrigin({x: 30, y: 15}, clockAndReset.rotation);
let clockAndReset4 = new lineSegment({x: clockAndReset4Rotation0.x + clockAndReset.x, y: clockAndReset4Rotation0.y + clockAndReset.y}, {x: clockAndReset4Rotation1.x + clockAndReset.x, y: clockAndReset4Rotation1.y + clockAndReset.y}, "clockAndReset4",[[],[]], "null");
globalGates.push(clockAndReset4);
clockAndReset3.outputs[0].push({gate: clockAndReset4, position: 0});
clockAndReset4.outputs[1].push({gate: clockAndReset3, position: 1});
let clockAndReset5Rotation0 = rotatePointOrigin({x: 30, y: 15}, clockAndReset.rotation);
let clockAndReset5Rotation1 = rotatePointOrigin({x: 33, y: 15}, clockAndReset.rotation);
let clockAndReset5 = new lineSegment({x: clockAndReset5Rotation0.x + clockAndReset.x, y: clockAndReset5Rotation0.y + clockAndReset.y}, {x: clockAndReset5Rotation1.x + clockAndReset.x, y: clockAndReset5Rotation1.y + clockAndReset.y}, "clockAndReset5",[[],[]], "null");
globalGates.push(clockAndReset5);
clockAndReset4.outputs[0].push({gate: clockAndReset5, position: 0});
clockAndReset5.outputs[1].push({gate: clockAndReset4, position: 1});
let clockAndReset6Rotation0 = rotatePointOrigin({x: 33, y: 15}, clockAndReset.rotation);
let clockAndReset6Rotation1 = rotatePointOrigin({x: 33, y: 53}, clockAndReset.rotation);
let clockAndReset6 = new lineSegment({x: clockAndReset6Rotation0.x + clockAndReset.x, y: clockAndReset6Rotation0.y + clockAndReset.y}, {x: clockAndReset6Rotation1.x + clockAndReset.x, y: clockAndReset6Rotation1.y + clockAndReset.y}, "clockAndReset6",[[],[]], "null");
globalGates.push(clockAndReset6);
clockAndReset5.outputs[0].push({gate: clockAndReset6, position: 0});
clockAndReset6.outputs[1].push({gate: clockAndReset5, position: 1});
TFlipFlopB3Block88.outputs[0].push({gate: clockAndReset6, position: 1});
clockAndReset6.outputs[0].push({gate: TFlipFlopB3Block88, position: 1});
let clockAndReset7Rotation0 = rotatePointOrigin({x: 30, y: 0}, clockAndReset.rotation);
let clockAndReset7Rotation1 = rotatePointOrigin({x: 30, y: 3}, clockAndReset.rotation);
let clockAndReset7 = new lineSegment({x: clockAndReset7Rotation0.x + clockAndReset.x, y: clockAndReset7Rotation0.y + clockAndReset.y}, {x: clockAndReset7Rotation1.x + clockAndReset.x, y: clockAndReset7Rotation1.y + clockAndReset.y}, "clockAndReset7",[[],[]], "null");
globalGates.push(clockAndReset7);
clockAndReset3.outputs[0].push({gate: clockAndReset7, position: 0});
clockAndReset7.outputs[1].push({gate: clockAndReset3, position: 1});
clockAndReset4.outputs[1].push({gate: clockAndReset7, position: 0});
clockAndReset7.outputs[1].push({gate: clockAndReset4, position: 0});
let clockAndReset8Rotation0 = rotatePointOrigin({x: 30, y: 3}, clockAndReset.rotation);
let clockAndReset8Rotation1 = rotatePointOrigin({x: 60, y: 3}, clockAndReset.rotation);
let clockAndReset8 = new lineSegment({x: clockAndReset8Rotation0.x + clockAndReset.x, y: clockAndReset8Rotation0.y + clockAndReset.y}, {x: clockAndReset8Rotation1.x + clockAndReset.x, y: clockAndReset8Rotation1.y + clockAndReset.y}, "clockAndReset8",[[],[]], "null");
globalGates.push(clockAndReset8);
clockAndReset7.outputs[0].push({gate: clockAndReset8, position: 0});
clockAndReset8.outputs[1].push({gate: clockAndReset7, position: 1});
clockAndReset8.outputs[0].push({gate: clockAndReset2, position: 0});
clockAndReset8.outputs[1].push({gate: clockAndReset2, position: 0});
let clockAndReset9Rotation0 = rotatePointOrigin({x: 74, y: 0}, clockAndReset.rotation);
let clockAndReset9Rotation1 = rotatePointOrigin({x: 80, y: 0}, clockAndReset.rotation);
let clockAndReset9 = new lineSegment({x: clockAndReset9Rotation0.x + clockAndReset.x, y: clockAndReset9Rotation0.y + clockAndReset.y}, {x: clockAndReset9Rotation1.x + clockAndReset.x, y: clockAndReset9Rotation1.y + clockAndReset.y}, "clockAndReset9",[[],[]], "null");
globalGates.push(clockAndReset9);
clockAndReset2.outputs[0].push({gate: clockAndReset9, position: 0});
clockAndReset2.outputs[1].push({gate: clockAndReset9, position: 0});
let clockAndReset10Rotation0 = rotatePointOrigin({x: 80, y: 0}, clockAndReset.rotation);
let clockAndReset10Rotation1 = rotatePointOrigin({x: 80, y: -15}, clockAndReset.rotation);
let clockAndReset10 = new lineSegment({x: clockAndReset10Rotation0.x + clockAndReset.x, y: clockAndReset10Rotation0.y + clockAndReset.y}, {x: clockAndReset10Rotation1.x + clockAndReset.x, y: clockAndReset10Rotation1.y + clockAndReset.y}, "clockAndReset10",[[],[]], "null");
globalGates.push(clockAndReset10);
clockAndReset9.outputs[0].push({gate: clockAndReset10, position: 0});
clockAndReset10.outputs[1].push({gate: clockAndReset9, position: 1});
let clockAndReset11Rotation0 = rotatePointOrigin({x: 80, y: -15}, clockAndReset.rotation);
let clockAndReset11Rotation1 = rotatePointOrigin({x: 50, y: -15}, clockAndReset.rotation);
let clockAndReset11 = new lineSegment({x: clockAndReset11Rotation0.x + clockAndReset.x, y: clockAndReset11Rotation0.y + clockAndReset.y}, {x: clockAndReset11Rotation1.x + clockAndReset.x, y: clockAndReset11Rotation1.y + clockAndReset.y}, "clockAndReset11",[[],[]], "null");
globalGates.push(clockAndReset11);
clockAndReset10.outputs[0].push({gate: clockAndReset11, position: 0});
clockAndReset11.outputs[1].push({gate: clockAndReset10, position: 1});
let clockAndReset12Rotation0 = rotatePointOrigin({x: 60, y: -2}, clockAndReset.rotation);
let clockAndReset12Rotation1 = rotatePointOrigin({x: 50, y: -2}, clockAndReset.rotation);
let clockAndReset12 = new lineSegment({x: clockAndReset12Rotation0.x + clockAndReset.x, y: clockAndReset12Rotation0.y + clockAndReset.y}, {x: clockAndReset12Rotation1.x + clockAndReset.x, y: clockAndReset12Rotation1.y + clockAndReset.y}, "clockAndReset12",[[],[]], "null");
globalGates.push(clockAndReset12);
clockAndReset12.outputs[0].push({gate: clockAndReset2, position: 1});
clockAndReset12.outputs[1].push({gate: clockAndReset2, position: 1});
let clockAndReset13Rotation0 = rotatePointOrigin({x: 50, y: -2}, clockAndReset.rotation);
let clockAndReset13Rotation1 = rotatePointOrigin({x: 50, y: -15}, clockAndReset.rotation);
let clockAndReset13 = new lineSegment({x: clockAndReset13Rotation0.x + clockAndReset.x, y: clockAndReset13Rotation0.y + clockAndReset.y}, {x: clockAndReset13Rotation1.x + clockAndReset.x, y: clockAndReset13Rotation1.y + clockAndReset.y}, "clockAndReset13",[[],[]], "null");
globalGates.push(clockAndReset13);
clockAndReset12.outputs[0].push({gate: clockAndReset13, position: 0});
clockAndReset13.outputs[1].push({gate: clockAndReset12, position: 1});
clockAndReset11.outputs[0].push({gate: clockAndReset13, position: 1});
clockAndReset13.outputs[0].push({gate: clockAndReset11, position: 1});
let clockAndReset14Rotation = rotatePointOrigin({x: 105.5, y: 0.5}, clockAndReset.rotation);
let clockAndReset14 = new notGate(clockAndReset.x - 9.5 + clockAndReset14Rotation.x, clockAndReset.y - 9.5 + clockAndReset14Rotation.y, clockAndReset.rotation + 270, "clockAndReset14",[[],[]], "null");
globalGates.push(clockAndReset14);
let clockAndReset15Rotation0 = rotatePointOrigin({x: 80, y: 0}, clockAndReset.rotation);
let clockAndReset15Rotation1 = rotatePointOrigin({x: 96, y: 0}, clockAndReset.rotation);
let clockAndReset15 = new lineSegment({x: clockAndReset15Rotation0.x + clockAndReset.x, y: clockAndReset15Rotation0.y + clockAndReset.y}, {x: clockAndReset15Rotation1.x + clockAndReset.x, y: clockAndReset15Rotation1.y + clockAndReset.y}, "clockAndReset15",[[],[]], "null");
globalGates.push(clockAndReset15);
clockAndReset9.outputs[0].push({gate: clockAndReset15, position: 0});
clockAndReset15.outputs[1].push({gate: clockAndReset9, position: 1});
clockAndReset10.outputs[1].push({gate: clockAndReset15, position: 0});
clockAndReset15.outputs[1].push({gate: clockAndReset10, position: 0});
clockAndReset15.outputs[0].push({gate: clockAndReset14, position: 0});
clockAndReset15.outputs[1].push({gate: clockAndReset14, position: 0});
let clockAndReset16Rotation0 = rotatePointOrigin({x: 116, y: 0}, clockAndReset.rotation);
let clockAndReset16Rotation1 = rotatePointOrigin({x: 193, y: 0}, clockAndReset.rotation);
let clockAndReset16 = new lineSegment({x: clockAndReset16Rotation0.x + clockAndReset.x, y: clockAndReset16Rotation0.y + clockAndReset.y}, {x: clockAndReset16Rotation1.x + clockAndReset.x, y: clockAndReset16Rotation1.y + clockAndReset.y}, "clockAndReset16",[[],[]], "null");
globalGates.push(clockAndReset16);
clockAndReset14.outputs[0].push({gate: clockAndReset16, position: 0});
clockAndReset14.outputs[1].push({gate: clockAndReset16, position: 0});
let clockAndReset17Rotation0 = rotatePointOrigin({x: 193, y: 0}, clockAndReset.rotation);
let clockAndReset17Rotation1 = rotatePointOrigin({x: 193, y: 53}, clockAndReset.rotation);
let clockAndReset17 = new lineSegment({x: clockAndReset17Rotation0.x + clockAndReset.x, y: clockAndReset17Rotation0.y + clockAndReset.y}, {x: clockAndReset17Rotation1.x + clockAndReset.x, y: clockAndReset17Rotation1.y + clockAndReset.y}, "clockAndReset17",[[],[]], "null");
globalGates.push(clockAndReset17);
clockAndReset16.outputs[0].push({gate: clockAndReset17, position: 0});
clockAndReset17.outputs[1].push({gate: clockAndReset16, position: 1});
TFlipFlopB3Block72.outputs[0].push({gate: clockAndReset17, position: 1});
clockAndReset17.outputs[0].push({gate: TFlipFlopB3Block72, position: 1});
let clockAndReset18Rotation0 = rotatePointOrigin({x: 193, y: 0}, clockAndReset.rotation);
let clockAndReset18Rotation1 = rotatePointOrigin({x: 493, y: 0}, clockAndReset.rotation);
let clockAndReset18 = new lineSegment({x: clockAndReset18Rotation0.x + clockAndReset.x, y: clockAndReset18Rotation0.y + clockAndReset.y}, {x: clockAndReset18Rotation1.x + clockAndReset.x, y: clockAndReset18Rotation1.y + clockAndReset.y}, "clockAndReset18",[[],[]], "null");
globalGates.push(clockAndReset18);
clockAndReset16.outputs[0].push({gate: clockAndReset18, position: 0});
clockAndReset18.outputs[1].push({gate: clockAndReset16, position: 1});
clockAndReset17.outputs[1].push({gate: clockAndReset18, position: 0});
clockAndReset18.outputs[1].push({gate: clockAndReset17, position: 0});
let clockAndReset19Rotation0 = rotatePointOrigin({x: 493, y: 0}, clockAndReset.rotation);
let clockAndReset19Rotation1 = rotatePointOrigin({x: 493, y: 53}, clockAndReset.rotation);
let clockAndReset19 = new lineSegment({x: clockAndReset19Rotation0.x + clockAndReset.x, y: clockAndReset19Rotation0.y + clockAndReset.y}, {x: clockAndReset19Rotation1.x + clockAndReset.x, y: clockAndReset19Rotation1.y + clockAndReset.y}, "clockAndReset19",[[],[]], "null");
globalGates.push(clockAndReset19);
clockAndReset18.outputs[0].push({gate: clockAndReset19, position: 0});
clockAndReset19.outputs[1].push({gate: clockAndReset18, position: 1});
TFlipFlopB2Block72.outputs[0].push({gate: clockAndReset19, position: 1});
clockAndReset19.outputs[0].push({gate: TFlipFlopB2Block72, position: 1});
let clockAndReset20Rotation0 = rotatePointOrigin({x: 493, y: 0}, clockAndReset.rotation);
let clockAndReset20Rotation1 = rotatePointOrigin({x: 793, y: 0}, clockAndReset.rotation);
let clockAndReset20 = new lineSegment({x: clockAndReset20Rotation0.x + clockAndReset.x, y: clockAndReset20Rotation0.y + clockAndReset.y}, {x: clockAndReset20Rotation1.x + clockAndReset.x, y: clockAndReset20Rotation1.y + clockAndReset.y}, "clockAndReset20",[[],[]], "null");
globalGates.push(clockAndReset20);
clockAndReset18.outputs[0].push({gate: clockAndReset20, position: 0});
clockAndReset20.outputs[1].push({gate: clockAndReset18, position: 1});
clockAndReset19.outputs[1].push({gate: clockAndReset20, position: 0});
clockAndReset20.outputs[1].push({gate: clockAndReset19, position: 0});
let clockAndReset21Rotation0 = rotatePointOrigin({x: 793, y: 0}, clockAndReset.rotation);
let clockAndReset21Rotation1 = rotatePointOrigin({x: 793, y: 53}, clockAndReset.rotation);
let clockAndReset21 = new lineSegment({x: clockAndReset21Rotation0.x + clockAndReset.x, y: clockAndReset21Rotation0.y + clockAndReset.y}, {x: clockAndReset21Rotation1.x + clockAndReset.x, y: clockAndReset21Rotation1.y + clockAndReset.y}, "clockAndReset21",[[],[]], "null");
globalGates.push(clockAndReset21);
clockAndReset20.outputs[0].push({gate: clockAndReset21, position: 0});
clockAndReset21.outputs[1].push({gate: clockAndReset20, position: 1});
TFlipFlopB1Block72.outputs[0].push({gate: clockAndReset21, position: 1});
clockAndReset21.outputs[0].push({gate: TFlipFlopB1Block72, position: 1});
let clockAndReset22Rotation0 = rotatePointOrigin({x: 793, y: 0}, clockAndReset.rotation);
let clockAndReset22Rotation1 = rotatePointOrigin({x: 1093, y: 0}, clockAndReset.rotation);
let clockAndReset22 = new lineSegment({x: clockAndReset22Rotation0.x + clockAndReset.x, y: clockAndReset22Rotation0.y + clockAndReset.y}, {x: clockAndReset22Rotation1.x + clockAndReset.x, y: clockAndReset22Rotation1.y + clockAndReset.y}, "clockAndReset22",[[],[]], "null");
globalGates.push(clockAndReset22);
clockAndReset20.outputs[0].push({gate: clockAndReset22, position: 0});
clockAndReset22.outputs[1].push({gate: clockAndReset20, position: 1});
clockAndReset21.outputs[1].push({gate: clockAndReset22, position: 0});
clockAndReset22.outputs[1].push({gate: clockAndReset21, position: 0});
let clockAndReset23Rotation0 = rotatePointOrigin({x: 1093, y: 0}, clockAndReset.rotation);
let clockAndReset23Rotation1 = rotatePointOrigin({x: 1093, y: 53}, clockAndReset.rotation);
let clockAndReset23 = new lineSegment({x: clockAndReset23Rotation0.x + clockAndReset.x, y: clockAndReset23Rotation0.y + clockAndReset.y}, {x: clockAndReset23Rotation1.x + clockAndReset.x, y: clockAndReset23Rotation1.y + clockAndReset.y}, "clockAndReset23",[[],[]], "null");
globalGates.push(clockAndReset23);
clockAndReset22.outputs[0].push({gate: clockAndReset23, position: 0});
clockAndReset23.outputs[1].push({gate: clockAndReset22, position: 1});
TFlipFlopB0Block72.outputs[0].push({gate: clockAndReset23, position: 1});
clockAndReset23.outputs[0].push({gate: TFlipFlopB0Block72, position: 1});
let clockAndReset24Rotation0 = rotatePointOrigin({x: 33, y: 15}, clockAndReset.rotation);
let clockAndReset24Rotation1 = rotatePointOrigin({x: 333, y: 15}, clockAndReset.rotation);
let clockAndReset24 = new lineSegment({x: clockAndReset24Rotation0.x + clockAndReset.x, y: clockAndReset24Rotation0.y + clockAndReset.y}, {x: clockAndReset24Rotation1.x + clockAndReset.x, y: clockAndReset24Rotation1.y + clockAndReset.y}, "clockAndReset24",[[],[]], "null");
globalGates.push(clockAndReset24);
clockAndReset5.outputs[0].push({gate: clockAndReset24, position: 0});
clockAndReset24.outputs[1].push({gate: clockAndReset5, position: 1});
clockAndReset6.outputs[1].push({gate: clockAndReset24, position: 0});
clockAndReset24.outputs[1].push({gate: clockAndReset6, position: 0});
let clockAndReset25Rotation0 = rotatePointOrigin({x: 333, y: 15}, clockAndReset.rotation);
let clockAndReset25Rotation1 = rotatePointOrigin({x: 333, y: 53}, clockAndReset.rotation);
let clockAndReset25 = new lineSegment({x: clockAndReset25Rotation0.x + clockAndReset.x, y: clockAndReset25Rotation0.y + clockAndReset.y}, {x: clockAndReset25Rotation1.x + clockAndReset.x, y: clockAndReset25Rotation1.y + clockAndReset.y}, "clockAndReset25",[[],[]], "null");
globalGates.push(clockAndReset25);
clockAndReset24.outputs[0].push({gate: clockAndReset25, position: 0});
clockAndReset25.outputs[1].push({gate: clockAndReset24, position: 1});
TFlipFlopB2Block88.outputs[0].push({gate: clockAndReset25, position: 1});
clockAndReset25.outputs[0].push({gate: TFlipFlopB2Block88, position: 1});
let clockAndReset26Rotation0 = rotatePointOrigin({x: 333, y: 15}, clockAndReset.rotation);
let clockAndReset26Rotation1 = rotatePointOrigin({x: 633, y: 15}, clockAndReset.rotation);
let clockAndReset26 = new lineSegment({x: clockAndReset26Rotation0.x + clockAndReset.x, y: clockAndReset26Rotation0.y + clockAndReset.y}, {x: clockAndReset26Rotation1.x + clockAndReset.x, y: clockAndReset26Rotation1.y + clockAndReset.y}, "clockAndReset26",[[],[]], "null");
globalGates.push(clockAndReset26);
clockAndReset24.outputs[0].push({gate: clockAndReset26, position: 0});
clockAndReset26.outputs[1].push({gate: clockAndReset24, position: 1});
clockAndReset25.outputs[1].push({gate: clockAndReset26, position: 0});
clockAndReset26.outputs[1].push({gate: clockAndReset25, position: 0});
let clockAndReset27Rotation0 = rotatePointOrigin({x: 633, y: 15}, clockAndReset.rotation);
let clockAndReset27Rotation1 = rotatePointOrigin({x: 633, y: 53}, clockAndReset.rotation);
let clockAndReset27 = new lineSegment({x: clockAndReset27Rotation0.x + clockAndReset.x, y: clockAndReset27Rotation0.y + clockAndReset.y}, {x: clockAndReset27Rotation1.x + clockAndReset.x, y: clockAndReset27Rotation1.y + clockAndReset.y}, "clockAndReset27",[[],[]], "null");
globalGates.push(clockAndReset27);
clockAndReset26.outputs[0].push({gate: clockAndReset27, position: 0});
clockAndReset27.outputs[1].push({gate: clockAndReset26, position: 1});
TFlipFlopB1Block88.outputs[0].push({gate: clockAndReset27, position: 1});
clockAndReset27.outputs[0].push({gate: TFlipFlopB1Block88, position: 1});
let clockAndReset28Rotation0 = rotatePointOrigin({x: 633, y: 15}, clockAndReset.rotation);
let clockAndReset28Rotation1 = rotatePointOrigin({x: 933, y: 15}, clockAndReset.rotation);
let clockAndReset28 = new lineSegment({x: clockAndReset28Rotation0.x + clockAndReset.x, y: clockAndReset28Rotation0.y + clockAndReset.y}, {x: clockAndReset28Rotation1.x + clockAndReset.x, y: clockAndReset28Rotation1.y + clockAndReset.y}, "clockAndReset28",[[],[]], "null");
globalGates.push(clockAndReset28);
clockAndReset26.outputs[0].push({gate: clockAndReset28, position: 0});
clockAndReset28.outputs[1].push({gate: clockAndReset26, position: 1});
clockAndReset27.outputs[1].push({gate: clockAndReset28, position: 0});
clockAndReset28.outputs[1].push({gate: clockAndReset27, position: 0});
let clockAndReset29Rotation0 = rotatePointOrigin({x: 933, y: 15}, clockAndReset.rotation);
let clockAndReset29Rotation1 = rotatePointOrigin({x: 933, y: 53}, clockAndReset.rotation);
let clockAndReset29 = new lineSegment({x: clockAndReset29Rotation0.x + clockAndReset.x, y: clockAndReset29Rotation0.y + clockAndReset.y}, {x: clockAndReset29Rotation1.x + clockAndReset.x, y: clockAndReset29Rotation1.y + clockAndReset.y}, "clockAndReset29",[[],[]], "null");
globalGates.push(clockAndReset29);
clockAndReset28.outputs[0].push({gate: clockAndReset29, position: 0});
clockAndReset29.outputs[1].push({gate: clockAndReset28, position: 1});
TFlipFlopB0Block88.outputs[0].push({gate: clockAndReset29, position: 1});
clockAndReset29.outputs[0].push({gate: TFlipFlopB0Block88, position: 1});

//counterInterconnects
let counterInterconnects = {x: 1201, y: 68, rotation: 0, name: "counterInterconnects"};
let counterInterconnectsMask = new maskGate({x: counterInterconnects.x , y: counterInterconnects.y}, {x: counterInterconnects.x, y: counterInterconnects.y}, "counterInterconnects", null);
globalGates.push(counterInterconnectsMask);
let counterInterconnects1Rotation0 = rotatePointOrigin({x: -8, y: 85}, counterInterconnects.rotation);
let counterInterconnects1Rotation1 = rotatePointOrigin({x: -1, y: 85}, counterInterconnects.rotation);
let counterInterconnects1 = new lineSegment({x: counterInterconnects1Rotation0.x + counterInterconnects.x, y: counterInterconnects1Rotation0.y + counterInterconnects.y}, {x: counterInterconnects1Rotation1.x + counterInterconnects.x, y: counterInterconnects1Rotation1.y + counterInterconnects.y}, "counterInterconnects1",[[],[]], "null");
globalGates.push(counterInterconnects1);
TFlipFlopB0Block107.outputs[0].push({gate: counterInterconnects1, position: 0});
counterInterconnects1.outputs[1].push({gate: TFlipFlopB0Block107, position: 1});
let counterInterconnects2Rotation0 = rotatePointOrigin({x: -1, y: 85}, counterInterconnects.rotation);
let counterInterconnects2Rotation1 = rotatePointOrigin({x: -1, y: 2}, counterInterconnects.rotation);
let counterInterconnects2 = new lineSegment({x: counterInterconnects2Rotation0.x + counterInterconnects.x, y: counterInterconnects2Rotation0.y + counterInterconnects.y}, {x: counterInterconnects2Rotation1.x + counterInterconnects.x, y: counterInterconnects2Rotation1.y + counterInterconnects.y}, "counterInterconnects2",[[],[]], "null");
globalGates.push(counterInterconnects2);
counterInterconnects1.outputs[0].push({gate: counterInterconnects2, position: 0});
counterInterconnects2.outputs[1].push({gate: counterInterconnects1, position: 1});
let counterInterconnects3Rotation0 = rotatePointOrigin({x: -1, y: 2}, counterInterconnects.rotation);
let counterInterconnects3Rotation1 = rotatePointOrigin({x: -1, y: -8}, counterInterconnects.rotation);
let counterInterconnects3 = new lineSegment({x: counterInterconnects3Rotation0.x + counterInterconnects.x, y: counterInterconnects3Rotation0.y + counterInterconnects.y}, {x: counterInterconnects3Rotation1.x + counterInterconnects.x, y: counterInterconnects3Rotation1.y + counterInterconnects.y}, "counterInterconnects3",[[],[]], "null");
globalGates.push(counterInterconnects3);
counterInterconnects2.outputs[0].push({gate: counterInterconnects3, position: 0});
counterInterconnects3.outputs[1].push({gate: counterInterconnects2, position: 1});
let counterInterconnects4Rotation0 = rotatePointOrigin({x: -1, y: -8}, counterInterconnects.rotation);
let counterInterconnects4Rotation1 = rotatePointOrigin({x: -561, y: -8}, counterInterconnects.rotation);
let counterInterconnects4 = new lineSegment({x: counterInterconnects4Rotation0.x + counterInterconnects.x, y: counterInterconnects4Rotation0.y + counterInterconnects.y}, {x: counterInterconnects4Rotation1.x + counterInterconnects.x, y: counterInterconnects4Rotation1.y + counterInterconnects.y}, "counterInterconnects4",[[],[]], "null");
globalGates.push(counterInterconnects4);
counterInterconnects3.outputs[0].push({gate: counterInterconnects4, position: 0});
counterInterconnects4.outputs[1].push({gate: counterInterconnects3, position: 1});
let counterInterconnects5Rotation0 = rotatePointOrigin({x: -561, y: -8}, counterInterconnects.rotation);
let counterInterconnects5Rotation1 = rotatePointOrigin({x: -572, y: -8}, counterInterconnects.rotation);
let counterInterconnects5 = new lineSegment({x: counterInterconnects5Rotation0.x + counterInterconnects.x, y: counterInterconnects5Rotation0.y + counterInterconnects.y}, {x: counterInterconnects5Rotation1.x + counterInterconnects.x, y: counterInterconnects5Rotation1.y + counterInterconnects.y}, "counterInterconnects5",[[],[]], "null");
globalGates.push(counterInterconnects5);
counterInterconnects4.outputs[0].push({gate: counterInterconnects5, position: 0});
counterInterconnects5.outputs[1].push({gate: counterInterconnects4, position: 1});
let counterInterconnects6Rotation0 = rotatePointOrigin({x: -572, y: -8}, counterInterconnects.rotation);
let counterInterconnects6Rotation1 = rotatePointOrigin({x: -572, y: 10}, counterInterconnects.rotation);
let counterInterconnects6 = new lineSegment({x: counterInterconnects6Rotation0.x + counterInterconnects.x, y: counterInterconnects6Rotation0.y + counterInterconnects.y}, {x: counterInterconnects6Rotation1.x + counterInterconnects.x, y: counterInterconnects6Rotation1.y + counterInterconnects.y}, "counterInterconnects6",[[],[]], "null");
globalGates.push(counterInterconnects6);
counterInterconnects5.outputs[0].push({gate: counterInterconnects6, position: 0});
counterInterconnects6.outputs[1].push({gate: counterInterconnects5, position: 1});
TFlipFlopB1Block110.outputs[0].push({gate: counterInterconnects6, position: 1});
counterInterconnects6.outputs[0].push({gate: TFlipFlopB1Block110, position: 1});
TFlipFlopB1Block111.outputs[1].push({gate: counterInterconnects6, position: 1});
counterInterconnects6.outputs[0].push({gate: TFlipFlopB1Block111, position: 0});
let counterInterconnects7Rotation = rotatePointOrigin({x: -596, y: -13}, counterInterconnects.rotation);
let counterInterconnects7 = new andGate(counterInterconnects.x - 10 + counterInterconnects7Rotation.x, counterInterconnects.y - 10 + counterInterconnects7Rotation.y, counterInterconnects.rotation + 90, "counterInterconnects7",[[],[]], "null");
globalGates.push(counterInterconnects7);
let counterInterconnects8Rotation0 = rotatePointOrigin({x: -308, y: 85}, counterInterconnects.rotation);
let counterInterconnects8Rotation1 = rotatePointOrigin({x: -301, y: 85}, counterInterconnects.rotation);
let counterInterconnects8 = new lineSegment({x: counterInterconnects8Rotation0.x + counterInterconnects.x, y: counterInterconnects8Rotation0.y + counterInterconnects.y}, {x: counterInterconnects8Rotation1.x + counterInterconnects.x, y: counterInterconnects8Rotation1.y + counterInterconnects.y}, "counterInterconnects8",[[],[]], "null");
globalGates.push(counterInterconnects8);
TFlipFlopB1Block107.outputs[0].push({gate: counterInterconnects8, position: 0});
counterInterconnects8.outputs[1].push({gate: TFlipFlopB1Block107, position: 1});
let counterInterconnects9Rotation0 = rotatePointOrigin({x: -301, y: 85}, counterInterconnects.rotation);
let counterInterconnects9Rotation1 = rotatePointOrigin({x: -301, y: -18}, counterInterconnects.rotation);
let counterInterconnects9 = new lineSegment({x: counterInterconnects9Rotation0.x + counterInterconnects.x, y: counterInterconnects9Rotation0.y + counterInterconnects.y}, {x: counterInterconnects9Rotation1.x + counterInterconnects.x, y: counterInterconnects9Rotation1.y + counterInterconnects.y}, "counterInterconnects9",[[],[]], "null");
globalGates.push(counterInterconnects9);
counterInterconnects8.outputs[0].push({gate: counterInterconnects9, position: 0});
counterInterconnects9.outputs[1].push({gate: counterInterconnects8, position: 1});
let counterInterconnects10Rotation0 = rotatePointOrigin({x: -301, y: -18}, counterInterconnects.rotation);
let counterInterconnects10Rotation1 = rotatePointOrigin({x: -571, y: -18}, counterInterconnects.rotation);
let counterInterconnects10 = new lineSegment({x: counterInterconnects10Rotation0.x + counterInterconnects.x, y: counterInterconnects10Rotation0.y + counterInterconnects.y}, {x: counterInterconnects10Rotation1.x + counterInterconnects.x, y: counterInterconnects10Rotation1.y + counterInterconnects.y}, "counterInterconnects10",[[],[]], "null");
globalGates.push(counterInterconnects10);
counterInterconnects9.outputs[0].push({gate: counterInterconnects10, position: 0});
counterInterconnects10.outputs[1].push({gate: counterInterconnects9, position: 1});
let counterInterconnects11Rotation0 = rotatePointOrigin({x: -586, y: -16}, counterInterconnects.rotation);
let counterInterconnects11Rotation1 = rotatePointOrigin({x: -571, y: -16}, counterInterconnects.rotation);
let counterInterconnects11 = new lineSegment({x: counterInterconnects11Rotation0.x + counterInterconnects.x, y: counterInterconnects11Rotation0.y + counterInterconnects.y}, {x: counterInterconnects11Rotation1.x + counterInterconnects.x, y: counterInterconnects11Rotation1.y + counterInterconnects.y}, "counterInterconnects11",[[],[]], "null");
globalGates.push(counterInterconnects11);
counterInterconnects11.outputs[0].push({gate: counterInterconnects7, position: 0});
counterInterconnects11.outputs[1].push({gate: counterInterconnects7, position: 0});
let counterInterconnects12Rotation0 = rotatePointOrigin({x: -571, y: -16}, counterInterconnects.rotation);
let counterInterconnects12Rotation1 = rotatePointOrigin({x: -571, y: -18}, counterInterconnects.rotation);
let counterInterconnects12 = new lineSegment({x: counterInterconnects12Rotation0.x + counterInterconnects.x, y: counterInterconnects12Rotation0.y + counterInterconnects.y}, {x: counterInterconnects12Rotation1.x + counterInterconnects.x, y: counterInterconnects12Rotation1.y + counterInterconnects.y}, "counterInterconnects12",[[],[]], "null");
globalGates.push(counterInterconnects12);
counterInterconnects11.outputs[0].push({gate: counterInterconnects12, position: 0});
counterInterconnects12.outputs[1].push({gate: counterInterconnects11, position: 1});
counterInterconnects10.outputs[0].push({gate: counterInterconnects12, position: 1});
counterInterconnects12.outputs[0].push({gate: counterInterconnects10, position: 1});
let counterInterconnects13Rotation0 = rotatePointOrigin({x: -572, y: -8}, counterInterconnects.rotation);
let counterInterconnects13Rotation1 = rotatePointOrigin({x: -586, y: -8}, counterInterconnects.rotation);
let counterInterconnects13 = new lineSegment({x: counterInterconnects13Rotation0.x + counterInterconnects.x, y: counterInterconnects13Rotation0.y + counterInterconnects.y}, {x: counterInterconnects13Rotation1.x + counterInterconnects.x, y: counterInterconnects13Rotation1.y + counterInterconnects.y}, "counterInterconnects13",[[],[]], "null");
globalGates.push(counterInterconnects13);
counterInterconnects5.outputs[0].push({gate: counterInterconnects13, position: 0});
counterInterconnects13.outputs[1].push({gate: counterInterconnects5, position: 1});
counterInterconnects6.outputs[1].push({gate: counterInterconnects13, position: 0});
counterInterconnects13.outputs[1].push({gate: counterInterconnects6, position: 0});
let counterInterconnects14Rotation0 = rotatePointOrigin({x: -586, y: -8}, counterInterconnects.rotation);
let counterInterconnects14Rotation1 = rotatePointOrigin({x: -586, y: -11}, counterInterconnects.rotation);
let counterInterconnects14 = new lineSegment({x: counterInterconnects14Rotation0.x + counterInterconnects.x, y: counterInterconnects14Rotation0.y + counterInterconnects.y}, {x: counterInterconnects14Rotation1.x + counterInterconnects.x, y: counterInterconnects14Rotation1.y + counterInterconnects.y}, "counterInterconnects14",[[],[]], "null");
globalGates.push(counterInterconnects14);
counterInterconnects13.outputs[0].push({gate: counterInterconnects14, position: 0});
counterInterconnects14.outputs[1].push({gate: counterInterconnects13, position: 1});
counterInterconnects14.outputs[0].push({gate: counterInterconnects7, position: 1});
counterInterconnects14.outputs[1].push({gate: counterInterconnects7, position: 1});
let counterInterconnects15Rotation0 = rotatePointOrigin({x: -605, y: -13}, counterInterconnects.rotation);
let counterInterconnects15Rotation1 = rotatePointOrigin({x: -872, y: -13}, counterInterconnects.rotation);
let counterInterconnects15 = new lineSegment({x: counterInterconnects15Rotation0.x + counterInterconnects.x, y: counterInterconnects15Rotation0.y + counterInterconnects.y}, {x: counterInterconnects15Rotation1.x + counterInterconnects.x, y: counterInterconnects15Rotation1.y + counterInterconnects.y}, "counterInterconnects15",[[],[]], "null");
globalGates.push(counterInterconnects15);
counterInterconnects7.outputs[0].push({gate: counterInterconnects15, position: 0});
counterInterconnects7.outputs[1].push({gate: counterInterconnects15, position: 0});
let counterInterconnects16Rotation0 = rotatePointOrigin({x: -872, y: -13}, counterInterconnects.rotation);
let counterInterconnects16Rotation1 = rotatePointOrigin({x: -872, y: 10}, counterInterconnects.rotation);
let counterInterconnects16 = new lineSegment({x: counterInterconnects16Rotation0.x + counterInterconnects.x, y: counterInterconnects16Rotation0.y + counterInterconnects.y}, {x: counterInterconnects16Rotation1.x + counterInterconnects.x, y: counterInterconnects16Rotation1.y + counterInterconnects.y}, "counterInterconnects16",[[],[]], "null");
globalGates.push(counterInterconnects16);
counterInterconnects15.outputs[0].push({gate: counterInterconnects16, position: 0});
counterInterconnects16.outputs[1].push({gate: counterInterconnects15, position: 1});
TFlipFlopB2Block110.outputs[0].push({gate: counterInterconnects16, position: 1});
counterInterconnects16.outputs[0].push({gate: TFlipFlopB2Block110, position: 1});
TFlipFlopB2Block111.outputs[1].push({gate: counterInterconnects16, position: 1});
counterInterconnects16.outputs[0].push({gate: TFlipFlopB2Block111, position: 0});
let counterInterconnects17Rotation0 = rotatePointOrigin({x: -608, y: 85}, counterInterconnects.rotation);
let counterInterconnects17Rotation1 = rotatePointOrigin({x: -601, y: 85}, counterInterconnects.rotation);
let counterInterconnects17 = new lineSegment({x: counterInterconnects17Rotation0.x + counterInterconnects.x, y: counterInterconnects17Rotation0.y + counterInterconnects.y}, {x: counterInterconnects17Rotation1.x + counterInterconnects.x, y: counterInterconnects17Rotation1.y + counterInterconnects.y}, "counterInterconnects17",[[],[]], "null");
globalGates.push(counterInterconnects17);
TFlipFlopB2Block107.outputs[0].push({gate: counterInterconnects17, position: 0});
counterInterconnects17.outputs[1].push({gate: TFlipFlopB2Block107, position: 1});
let counterInterconnects18Rotation0 = rotatePointOrigin({x: -601, y: 85}, counterInterconnects.rotation);
let counterInterconnects18Rotation1 = rotatePointOrigin({x: -601, y: 2}, counterInterconnects.rotation);
let counterInterconnects18 = new lineSegment({x: counterInterconnects18Rotation0.x + counterInterconnects.x, y: counterInterconnects18Rotation0.y + counterInterconnects.y}, {x: counterInterconnects18Rotation1.x + counterInterconnects.x, y: counterInterconnects18Rotation1.y + counterInterconnects.y}, "counterInterconnects18",[[],[]], "null");
globalGates.push(counterInterconnects18);
counterInterconnects17.outputs[0].push({gate: counterInterconnects18, position: 0});
counterInterconnects18.outputs[1].push({gate: counterInterconnects17, position: 1});
let counterInterconnects19Rotation0 = rotatePointOrigin({x: -601, y: 2}, counterInterconnects.rotation);
let counterInterconnects19Rotation1 = rotatePointOrigin({x: -601, y: 2}, counterInterconnects.rotation);
let counterInterconnects19 = new lineSegment({x: counterInterconnects19Rotation0.x + counterInterconnects.x, y: counterInterconnects19Rotation0.y + counterInterconnects.y}, {x: counterInterconnects19Rotation1.x + counterInterconnects.x, y: counterInterconnects19Rotation1.y + counterInterconnects.y}, "counterInterconnects19",[[],[]], "null");
globalGates.push(counterInterconnects19);
counterInterconnects18.outputs[0].push({gate: counterInterconnects19, position: 0});
counterInterconnects19.outputs[1].push({gate: counterInterconnects18, position: 1});
counterInterconnects18.outputs[0].push({gate: counterInterconnects19, position: 1});
counterInterconnects19.outputs[0].push({gate: counterInterconnects18, position: 1});
let counterInterconnects20Rotation0 = rotatePointOrigin({x: -601, y: 2}, counterInterconnects.rotation);
let counterInterconnects20Rotation1 = rotatePointOrigin({x: -611, y: 2}, counterInterconnects.rotation);
let counterInterconnects20 = new lineSegment({x: counterInterconnects20Rotation0.x + counterInterconnects.x, y: counterInterconnects20Rotation0.y + counterInterconnects.y}, {x: counterInterconnects20Rotation1.x + counterInterconnects.x, y: counterInterconnects20Rotation1.y + counterInterconnects.y}, "counterInterconnects20",[[],[]], "null");
globalGates.push(counterInterconnects20);
counterInterconnects18.outputs[0].push({gate: counterInterconnects20, position: 0});
counterInterconnects20.outputs[1].push({gate: counterInterconnects18, position: 1});
counterInterconnects19.outputs[1].push({gate: counterInterconnects20, position: 0});
counterInterconnects20.outputs[1].push({gate: counterInterconnects19, position: 0});
counterInterconnects19.outputs[0].push({gate: counterInterconnects20, position: 0});
counterInterconnects20.outputs[1].push({gate: counterInterconnects19, position: 1});
let counterInterconnects21Rotation0 = rotatePointOrigin({x: -611, y: 2}, counterInterconnects.rotation);
let counterInterconnects21Rotation1 = rotatePointOrigin({x: -611, y: 2}, counterInterconnects.rotation);
let counterInterconnects21 = new lineSegment({x: counterInterconnects21Rotation0.x + counterInterconnects.x, y: counterInterconnects21Rotation0.y + counterInterconnects.y}, {x: counterInterconnects21Rotation1.x + counterInterconnects.x, y: counterInterconnects21Rotation1.y + counterInterconnects.y}, "counterInterconnects21",[[],[]], "null");
globalGates.push(counterInterconnects21);
counterInterconnects20.outputs[0].push({gate: counterInterconnects21, position: 0});
counterInterconnects21.outputs[1].push({gate: counterInterconnects20, position: 1});
counterInterconnects20.outputs[0].push({gate: counterInterconnects21, position: 1});
counterInterconnects21.outputs[0].push({gate: counterInterconnects20, position: 1});
let counterInterconnects22Rotation0 = rotatePointOrigin({x: -611, y: 2}, counterInterconnects.rotation);
let counterInterconnects22Rotation1 = rotatePointOrigin({x: -618, y: -5}, counterInterconnects.rotation);
let counterInterconnects22 = new lineSegment({x: counterInterconnects22Rotation0.x + counterInterconnects.x, y: counterInterconnects22Rotation0.y + counterInterconnects.y}, {x: counterInterconnects22Rotation1.x + counterInterconnects.x, y: counterInterconnects22Rotation1.y + counterInterconnects.y}, "counterInterconnects22",[[],[]], "null");
globalGates.push(counterInterconnects22);
counterInterconnects20.outputs[0].push({gate: counterInterconnects22, position: 0});
counterInterconnects22.outputs[1].push({gate: counterInterconnects20, position: 1});
counterInterconnects21.outputs[1].push({gate: counterInterconnects22, position: 0});
counterInterconnects22.outputs[1].push({gate: counterInterconnects21, position: 0});
counterInterconnects21.outputs[0].push({gate: counterInterconnects22, position: 0});
counterInterconnects22.outputs[1].push({gate: counterInterconnects21, position: 1});
let counterInterconnects23Rotation = rotatePointOrigin({x: -916, y: -13}, counterInterconnects.rotation);
let counterInterconnects23 = new andGate(counterInterconnects.x - 10 + counterInterconnects23Rotation.x, counterInterconnects.y - 10 + counterInterconnects23Rotation.y, counterInterconnects.rotation + 90, "counterInterconnects23",[[],[]], "null");
globalGates.push(counterInterconnects23);
let counterInterconnects24Rotation0 = rotatePointOrigin({x: -618, y: -5}, counterInterconnects.rotation);
let counterInterconnects24Rotation1 = rotatePointOrigin({x: -891, y: -5}, counterInterconnects.rotation);
let counterInterconnects24 = new lineSegment({x: counterInterconnects24Rotation0.x + counterInterconnects.x, y: counterInterconnects24Rotation0.y + counterInterconnects.y}, {x: counterInterconnects24Rotation1.x + counterInterconnects.x, y: counterInterconnects24Rotation1.y + counterInterconnects.y}, "counterInterconnects24",[[],[]], "null");
globalGates.push(counterInterconnects24);
counterInterconnects22.outputs[0].push({gate: counterInterconnects24, position: 0});
counterInterconnects24.outputs[1].push({gate: counterInterconnects22, position: 1});
let counterInterconnects25Rotation0 = rotatePointOrigin({x: -906, y: -11}, counterInterconnects.rotation);
let counterInterconnects25Rotation1 = rotatePointOrigin({x: -891, y: -11}, counterInterconnects.rotation);
let counterInterconnects25 = new lineSegment({x: counterInterconnects25Rotation0.x + counterInterconnects.x, y: counterInterconnects25Rotation0.y + counterInterconnects.y}, {x: counterInterconnects25Rotation1.x + counterInterconnects.x, y: counterInterconnects25Rotation1.y + counterInterconnects.y}, "counterInterconnects25",[[],[]], "null");
globalGates.push(counterInterconnects25);
counterInterconnects25.outputs[0].push({gate: counterInterconnects23, position: 1});
counterInterconnects25.outputs[1].push({gate: counterInterconnects23, position: 1});
let counterInterconnects26Rotation0 = rotatePointOrigin({x: -891, y: -11}, counterInterconnects.rotation);
let counterInterconnects26Rotation1 = rotatePointOrigin({x: -891, y: -5}, counterInterconnects.rotation);
let counterInterconnects26 = new lineSegment({x: counterInterconnects26Rotation0.x + counterInterconnects.x, y: counterInterconnects26Rotation0.y + counterInterconnects.y}, {x: counterInterconnects26Rotation1.x + counterInterconnects.x, y: counterInterconnects26Rotation1.y + counterInterconnects.y}, "counterInterconnects26",[[],[]], "null");
globalGates.push(counterInterconnects26);
counterInterconnects25.outputs[0].push({gate: counterInterconnects26, position: 0});
counterInterconnects26.outputs[1].push({gate: counterInterconnects25, position: 1});
counterInterconnects24.outputs[0].push({gate: counterInterconnects26, position: 1});
counterInterconnects26.outputs[0].push({gate: counterInterconnects24, position: 1});
let counterInterconnects27Rotation0 = rotatePointOrigin({x: -906, y: -16}, counterInterconnects.rotation);
let counterInterconnects27Rotation1 = rotatePointOrigin({x: -872, y: -16}, counterInterconnects.rotation);
let counterInterconnects27 = new lineSegment({x: counterInterconnects27Rotation0.x + counterInterconnects.x, y: counterInterconnects27Rotation0.y + counterInterconnects.y}, {x: counterInterconnects27Rotation1.x + counterInterconnects.x, y: counterInterconnects27Rotation1.y + counterInterconnects.y}, "counterInterconnects27",[[],[]], "null");
globalGates.push(counterInterconnects27);
counterInterconnects27.outputs[0].push({gate: counterInterconnects23, position: 0});
counterInterconnects27.outputs[1].push({gate: counterInterconnects23, position: 0});
let counterInterconnects28Rotation0 = rotatePointOrigin({x: -872, y: -16}, counterInterconnects.rotation);
let counterInterconnects28Rotation1 = rotatePointOrigin({x: -872, y: -13}, counterInterconnects.rotation);
let counterInterconnects28 = new lineSegment({x: counterInterconnects28Rotation0.x + counterInterconnects.x, y: counterInterconnects28Rotation0.y + counterInterconnects.y}, {x: counterInterconnects28Rotation1.x + counterInterconnects.x, y: counterInterconnects28Rotation1.y + counterInterconnects.y}, "counterInterconnects28",[[],[]], "null");
globalGates.push(counterInterconnects28);
counterInterconnects27.outputs[0].push({gate: counterInterconnects28, position: 0});
counterInterconnects28.outputs[1].push({gate: counterInterconnects27, position: 1});
counterInterconnects15.outputs[0].push({gate: counterInterconnects28, position: 1});
counterInterconnects28.outputs[0].push({gate: counterInterconnects15, position: 1});
counterInterconnects16.outputs[1].push({gate: counterInterconnects28, position: 1});
counterInterconnects28.outputs[0].push({gate: counterInterconnects16, position: 0});
let counterInterconnects29Rotation0 = rotatePointOrigin({x: -925, y: -13}, counterInterconnects.rotation);
let counterInterconnects29Rotation1 = rotatePointOrigin({x: -1172, y: -13}, counterInterconnects.rotation);
let counterInterconnects29 = new lineSegment({x: counterInterconnects29Rotation0.x + counterInterconnects.x, y: counterInterconnects29Rotation0.y + counterInterconnects.y}, {x: counterInterconnects29Rotation1.x + counterInterconnects.x, y: counterInterconnects29Rotation1.y + counterInterconnects.y}, "counterInterconnects29",[[],[]], "null");
globalGates.push(counterInterconnects29);
counterInterconnects23.outputs[0].push({gate: counterInterconnects29, position: 0});
counterInterconnects23.outputs[1].push({gate: counterInterconnects29, position: 0});
let counterInterconnects30Rotation0 = rotatePointOrigin({x: -1172, y: -13}, counterInterconnects.rotation);
let counterInterconnects30Rotation1 = rotatePointOrigin({x: -1172, y: 10}, counterInterconnects.rotation);
let counterInterconnects30 = new lineSegment({x: counterInterconnects30Rotation0.x + counterInterconnects.x, y: counterInterconnects30Rotation0.y + counterInterconnects.y}, {x: counterInterconnects30Rotation1.x + counterInterconnects.x, y: counterInterconnects30Rotation1.y + counterInterconnects.y}, "counterInterconnects30",[[],[]], "null");
globalGates.push(counterInterconnects30);
counterInterconnects29.outputs[0].push({gate: counterInterconnects30, position: 0});
counterInterconnects30.outputs[1].push({gate: counterInterconnects29, position: 1});
TFlipFlopB3Block110.outputs[0].push({gate: counterInterconnects30, position: 1});
counterInterconnects30.outputs[0].push({gate: TFlipFlopB3Block110, position: 1});
TFlipFlopB3Block111.outputs[1].push({gate: counterInterconnects30, position: 1});
counterInterconnects30.outputs[0].push({gate: TFlipFlopB3Block111, position: 0});    

//counterEnable
let counterEnable = {x: 924, y: 8, rotation: 0, name: "counterEnable"};
let counterEnableMask = new maskGate({x: counterEnable.x , y: counterEnable.y}, {x: counterEnable.x, y: counterEnable.y}, "counterEnable", null);
globalGates.push(counterEnableMask);
let counterEnable1Rotation = rotatePointOrigin({x: 1.5, y: -2.5}, counterEnable.rotation);
let counterEnable1 = new oneGate(counterEnable.x - 9.5 + counterEnable1Rotation.x, counterEnable.y - 9.5 + counterEnable1Rotation.y, counterEnable.rotation + 0, "counterEnable1",[[],[]], "null");
globalGates.push(counterEnable1);
let counterEnable2Rotation0 = rotatePointOrigin({x: 5, y: 70}, counterEnable.rotation);
let counterEnable2Rotation1 = rotatePointOrigin({x: 5, y: 7}, counterEnable.rotation);
let counterEnable2 = new lineSegment({x: counterEnable2Rotation0.x + counterEnable.x, y: counterEnable2Rotation0.y + counterEnable.y}, {x: counterEnable2Rotation1.x + counterEnable.x, y: counterEnable2Rotation1.y + counterEnable.y}, "counterEnable2",[[],[]], "null");
globalGates.push(counterEnable2);
TFlipFlopB0Block110.outputs[0].push({gate: counterEnable2, position: 0});
counterEnable2.outputs[1].push({gate: TFlipFlopB0Block110, position: 1});
TFlipFlopB0Block111.outputs[1].push({gate: counterEnable2, position: 0});
counterEnable2.outputs[1].push({gate: TFlipFlopB0Block111, position: 0});
let counterEnable3Rotation0 = rotatePointOrigin({x: 5, y: 7}, counterEnable.rotation);
let counterEnable3Rotation1 = rotatePointOrigin({x: 2, y: 7}, counterEnable.rotation);
let counterEnable3 = new lineSegment({x: counterEnable3Rotation0.x + counterEnable.x, y: counterEnable3Rotation0.y + counterEnable.y}, {x: counterEnable3Rotation1.x + counterEnable.x, y: counterEnable3Rotation1.y + counterEnable.y}, "counterEnable3",[[],[]], "null");
globalGates.push(counterEnable3);
counterEnable2.outputs[0].push({gate: counterEnable3, position: 0});
counterEnable3.outputs[1].push({gate: counterEnable2, position: 1});
counterEnable1.outputs[0].push({gate: counterEnable3, position: 1});
counterEnable1.outputs[1].push({gate: counterEnable3, position: 1});    

//counterToConverterInterconnects
let counterToConverterInterconnects = {x: 298, y: 261, rotation: 0, name: "counterToConverterInterconnects"};
let counterToConverterInterconnectsMask = new maskGate({x: counterToConverterInterconnects.x , y: counterToConverterInterconnects.y}, {x: counterToConverterInterconnects.x, y: counterToConverterInterconnects.y}, "counterToConverterInterconnects", null);
globalGates.push(counterToConverterInterconnectsMask);
let counterToConverterInterconnects1Rotation0 = rotatePointOrigin({x: -267, y: 62}, counterToConverterInterconnects.rotation);
let counterToConverterInterconnects1Rotation1 = rotatePointOrigin({x: -267, y: -1}, counterToConverterInterconnects.rotation);
let counterToConverterInterconnects1 = new lineSegment({x: counterToConverterInterconnects1Rotation0.x + counterToConverterInterconnects.x, y: counterToConverterInterconnects1Rotation0.y + counterToConverterInterconnects.y}, {x: counterToConverterInterconnects1Rotation1.x + counterToConverterInterconnects.x, y: counterToConverterInterconnects1Rotation1.y + counterToConverterInterconnects.y}, "counterToConverterInterconnects1",[[],[]], "null");
globalGates.push(counterToConverterInterconnects1);
BinaryTo7SegBlock297.outputs[0].push({gate: counterToConverterInterconnects1, position: 0});
counterToConverterInterconnects1.outputs[1].push({gate: BinaryTo7SegBlock297, position: 1});
let counterToConverterInterconnects2Rotation0 = rotatePointOrigin({x: -267, y: -1}, counterToConverterInterconnects.rotation);
let counterToConverterInterconnects2Rotation1 = rotatePointOrigin({x: 2, y: -1}, counterToConverterInterconnects.rotation);
let counterToConverterInterconnects2 = new lineSegment({x: counterToConverterInterconnects2Rotation0.x + counterToConverterInterconnects.x, y: counterToConverterInterconnects2Rotation0.y + counterToConverterInterconnects.y}, {x: counterToConverterInterconnects2Rotation1.x + counterToConverterInterconnects.x, y: counterToConverterInterconnects2Rotation1.y + counterToConverterInterconnects.y}, "counterToConverterInterconnects2",[[],[]], "null");
globalGates.push(counterToConverterInterconnects2);
counterToConverterInterconnects1.outputs[0].push({gate: counterToConverterInterconnects2, position: 0});
counterToConverterInterconnects2.outputs[1].push({gate: counterToConverterInterconnects1, position: 1});
let counterToConverterInterconnects3Rotation0 = rotatePointOrigin({x: -5, y: -108}, counterToConverterInterconnects.rotation);
let counterToConverterInterconnects3Rotation1 = rotatePointOrigin({x: 2, y: -108}, counterToConverterInterconnects.rotation);
let counterToConverterInterconnects3 = new lineSegment({x: counterToConverterInterconnects3Rotation0.x + counterToConverterInterconnects.x, y: counterToConverterInterconnects3Rotation0.y + counterToConverterInterconnects.y}, {x: counterToConverterInterconnects3Rotation1.x + counterToConverterInterconnects.x, y: counterToConverterInterconnects3Rotation1.y + counterToConverterInterconnects.y}, "counterToConverterInterconnects3",[[],[]], "null");
globalGates.push(counterToConverterInterconnects3);
TFlipFlopB3Block107.outputs[0].push({gate: counterToConverterInterconnects3, position: 0});
counterToConverterInterconnects3.outputs[1].push({gate: TFlipFlopB3Block107, position: 1});
let counterToConverterInterconnects4Rotation0 = rotatePointOrigin({x: 2, y: -108}, counterToConverterInterconnects.rotation);
let counterToConverterInterconnects4Rotation1 = rotatePointOrigin({x: 2, y: -1}, counterToConverterInterconnects.rotation);
let counterToConverterInterconnects4 = new lineSegment({x: counterToConverterInterconnects4Rotation0.x + counterToConverterInterconnects.x, y: counterToConverterInterconnects4Rotation0.y + counterToConverterInterconnects.y}, {x: counterToConverterInterconnects4Rotation1.x + counterToConverterInterconnects.x, y: counterToConverterInterconnects4Rotation1.y + counterToConverterInterconnects.y}, "counterToConverterInterconnects4",[[],[]], "null");
globalGates.push(counterToConverterInterconnects4);
counterToConverterInterconnects3.outputs[0].push({gate: counterToConverterInterconnects4, position: 0});
counterToConverterInterconnects4.outputs[1].push({gate: counterToConverterInterconnects3, position: 1});
counterToConverterInterconnects2.outputs[0].push({gate: counterToConverterInterconnects4, position: 1});
counterToConverterInterconnects4.outputs[0].push({gate: counterToConverterInterconnects2, position: 1});
let counterToConverterInterconnects5Rotation0 = rotatePointOrigin({x: -237, y: 62}, counterToConverterInterconnects.rotation);
let counterToConverterInterconnects5Rotation1 = rotatePointOrigin({x: -237, y: 9}, counterToConverterInterconnects.rotation);
let counterToConverterInterconnects5 = new lineSegment({x: counterToConverterInterconnects5Rotation0.x + counterToConverterInterconnects.x, y: counterToConverterInterconnects5Rotation0.y + counterToConverterInterconnects.y}, {x: counterToConverterInterconnects5Rotation1.x + counterToConverterInterconnects.x, y: counterToConverterInterconnects5Rotation1.y + counterToConverterInterconnects.y}, "counterToConverterInterconnects5",[[],[]], "null");
globalGates.push(counterToConverterInterconnects5);
BinaryTo7SegBlock298.outputs[0].push({gate: counterToConverterInterconnects5, position: 0});
counterToConverterInterconnects5.outputs[1].push({gate: BinaryTo7SegBlock298, position: 1});
let counterToConverterInterconnects6Rotation0 = rotatePointOrigin({x: -237, y: 9}, counterToConverterInterconnects.rotation);
let counterToConverterInterconnects6Rotation1 = rotatePointOrigin({x: 302, y: 9}, counterToConverterInterconnects.rotation);
let counterToConverterInterconnects6 = new lineSegment({x: counterToConverterInterconnects6Rotation0.x + counterToConverterInterconnects.x, y: counterToConverterInterconnects6Rotation0.y + counterToConverterInterconnects.y}, {x: counterToConverterInterconnects6Rotation1.x + counterToConverterInterconnects.x, y: counterToConverterInterconnects6Rotation1.y + counterToConverterInterconnects.y}, "counterToConverterInterconnects6",[[],[]], "null");
globalGates.push(counterToConverterInterconnects6);
counterToConverterInterconnects5.outputs[0].push({gate: counterToConverterInterconnects6, position: 0});
counterToConverterInterconnects6.outputs[1].push({gate: counterToConverterInterconnects5, position: 1});
let counterToConverterInterconnects7Rotation0 = rotatePointOrigin({x: 302, y: -108}, counterToConverterInterconnects.rotation);
let counterToConverterInterconnects7Rotation1 = rotatePointOrigin({x: 302, y: 9}, counterToConverterInterconnects.rotation);
let counterToConverterInterconnects7 = new lineSegment({x: counterToConverterInterconnects7Rotation0.x + counterToConverterInterconnects.x, y: counterToConverterInterconnects7Rotation0.y + counterToConverterInterconnects.y}, {x: counterToConverterInterconnects7Rotation1.x + counterToConverterInterconnects.x, y: counterToConverterInterconnects7Rotation1.y + counterToConverterInterconnects.y}, "counterToConverterInterconnects7",[[],[]], "null");
globalGates.push(counterToConverterInterconnects7);
counterInterconnects17.outputs[0].push({gate: counterToConverterInterconnects7, position: 0});
counterToConverterInterconnects7.outputs[1].push({gate: counterInterconnects17, position: 1});
counterInterconnects18.outputs[1].push({gate: counterToConverterInterconnects7, position: 0});
counterToConverterInterconnects7.outputs[1].push({gate: counterInterconnects18, position: 0});
counterToConverterInterconnects6.outputs[0].push({gate: counterToConverterInterconnects7, position: 1});
counterToConverterInterconnects7.outputs[0].push({gate: counterToConverterInterconnects6, position: 1});
let counterToConverterInterconnects8Rotation0 = rotatePointOrigin({x: -207, y: 62}, counterToConverterInterconnects.rotation);
let counterToConverterInterconnects8Rotation1 = rotatePointOrigin({x: -207, y: 19}, counterToConverterInterconnects.rotation);
let counterToConverterInterconnects8 = new lineSegment({x: counterToConverterInterconnects8Rotation0.x + counterToConverterInterconnects.x, y: counterToConverterInterconnects8Rotation0.y + counterToConverterInterconnects.y}, {x: counterToConverterInterconnects8Rotation1.x + counterToConverterInterconnects.x, y: counterToConverterInterconnects8Rotation1.y + counterToConverterInterconnects.y}, "counterToConverterInterconnects8",[[],[]], "null");
globalGates.push(counterToConverterInterconnects8);
BinaryTo7SegBlock299.outputs[0].push({gate: counterToConverterInterconnects8, position: 0});
counterToConverterInterconnects8.outputs[1].push({gate: BinaryTo7SegBlock299, position: 1});
let counterToConverterInterconnects9Rotation0 = rotatePointOrigin({x: -207, y: 19}, counterToConverterInterconnects.rotation);
let counterToConverterInterconnects9Rotation1 = rotatePointOrigin({x: 602, y: 19}, counterToConverterInterconnects.rotation);
let counterToConverterInterconnects9 = new lineSegment({x: counterToConverterInterconnects9Rotation0.x + counterToConverterInterconnects.x, y: counterToConverterInterconnects9Rotation0.y + counterToConverterInterconnects.y}, {x: counterToConverterInterconnects9Rotation1.x + counterToConverterInterconnects.x, y: counterToConverterInterconnects9Rotation1.y + counterToConverterInterconnects.y}, "counterToConverterInterconnects9",[[],[]], "null");
globalGates.push(counterToConverterInterconnects9);
counterToConverterInterconnects8.outputs[0].push({gate: counterToConverterInterconnects9, position: 0});
counterToConverterInterconnects9.outputs[1].push({gate: counterToConverterInterconnects8, position: 1});
let counterToConverterInterconnects10Rotation0 = rotatePointOrigin({x: 602, y: -108}, counterToConverterInterconnects.rotation);
let counterToConverterInterconnects10Rotation1 = rotatePointOrigin({x: 602, y: 19}, counterToConverterInterconnects.rotation);
let counterToConverterInterconnects10 = new lineSegment({x: counterToConverterInterconnects10Rotation0.x + counterToConverterInterconnects.x, y: counterToConverterInterconnects10Rotation0.y + counterToConverterInterconnects.y}, {x: counterToConverterInterconnects10Rotation1.x + counterToConverterInterconnects.x, y: counterToConverterInterconnects10Rotation1.y + counterToConverterInterconnects.y}, "counterToConverterInterconnects10",[[],[]], "null");
globalGates.push(counterToConverterInterconnects10);
counterInterconnects8.outputs[0].push({gate: counterToConverterInterconnects10, position: 0});
counterToConverterInterconnects10.outputs[1].push({gate: counterInterconnects8, position: 1});
counterInterconnects9.outputs[1].push({gate: counterToConverterInterconnects10, position: 0});
counterToConverterInterconnects10.outputs[1].push({gate: counterInterconnects9, position: 0});
counterToConverterInterconnects9.outputs[0].push({gate: counterToConverterInterconnects10, position: 1});
counterToConverterInterconnects10.outputs[0].push({gate: counterToConverterInterconnects9, position: 1});
let counterToConverterInterconnects11Rotation0 = rotatePointOrigin({x: -177, y: 62}, counterToConverterInterconnects.rotation);
let counterToConverterInterconnects11Rotation1 = rotatePointOrigin({x: -177, y: 29}, counterToConverterInterconnects.rotation);
let counterToConverterInterconnects11 = new lineSegment({x: counterToConverterInterconnects11Rotation0.x + counterToConverterInterconnects.x, y: counterToConverterInterconnects11Rotation0.y + counterToConverterInterconnects.y}, {x: counterToConverterInterconnects11Rotation1.x + counterToConverterInterconnects.x, y: counterToConverterInterconnects11Rotation1.y + counterToConverterInterconnects.y}, "counterToConverterInterconnects11",[[],[]], "null");
globalGates.push(counterToConverterInterconnects11);
BinaryTo7SegBlock300.outputs[0].push({gate: counterToConverterInterconnects11, position: 0});
counterToConverterInterconnects11.outputs[1].push({gate: BinaryTo7SegBlock300, position: 1});
let counterToConverterInterconnects12Rotation0 = rotatePointOrigin({x: -177, y: 29}, counterToConverterInterconnects.rotation);
let counterToConverterInterconnects12Rotation1 = rotatePointOrigin({x: 892, y: 29}, counterToConverterInterconnects.rotation);
let counterToConverterInterconnects12 = new lineSegment({x: counterToConverterInterconnects12Rotation0.x + counterToConverterInterconnects.x, y: counterToConverterInterconnects12Rotation0.y + counterToConverterInterconnects.y}, {x: counterToConverterInterconnects12Rotation1.x + counterToConverterInterconnects.x, y: counterToConverterInterconnects12Rotation1.y + counterToConverterInterconnects.y}, "counterToConverterInterconnects12",[[],[]], "null");
globalGates.push(counterToConverterInterconnects12);
counterToConverterInterconnects11.outputs[0].push({gate: counterToConverterInterconnects12, position: 0});
counterToConverterInterconnects12.outputs[1].push({gate: counterToConverterInterconnects11, position: 1});
let counterToConverterInterconnects13Rotation0 = rotatePointOrigin({x: 902, y: -108}, counterToConverterInterconnects.rotation);
let counterToConverterInterconnects13Rotation1 = rotatePointOrigin({x: 902, y: 29}, counterToConverterInterconnects.rotation);
let counterToConverterInterconnects13 = new lineSegment({x: counterToConverterInterconnects13Rotation0.x + counterToConverterInterconnects.x, y: counterToConverterInterconnects13Rotation0.y + counterToConverterInterconnects.y}, {x: counterToConverterInterconnects13Rotation1.x + counterToConverterInterconnects.x, y: counterToConverterInterconnects13Rotation1.y + counterToConverterInterconnects.y}, "counterToConverterInterconnects13",[[],[]], "null");
globalGates.push(counterToConverterInterconnects13);
counterInterconnects1.outputs[0].push({gate: counterToConverterInterconnects13, position: 0});
counterToConverterInterconnects13.outputs[1].push({gate: counterInterconnects1, position: 1});
counterInterconnects2.outputs[1].push({gate: counterToConverterInterconnects13, position: 0});
counterToConverterInterconnects13.outputs[1].push({gate: counterInterconnects2, position: 0});
let counterToConverterInterconnects14Rotation0 = rotatePointOrigin({x: 902, y: 29}, counterToConverterInterconnects.rotation);
let counterToConverterInterconnects14Rotation1 = rotatePointOrigin({x: 892, y: 29}, counterToConverterInterconnects.rotation);
let counterToConverterInterconnects14 = new lineSegment({x: counterToConverterInterconnects14Rotation0.x + counterToConverterInterconnects.x, y: counterToConverterInterconnects14Rotation0.y + counterToConverterInterconnects.y}, {x: counterToConverterInterconnects14Rotation1.x + counterToConverterInterconnects.x, y: counterToConverterInterconnects14Rotation1.y + counterToConverterInterconnects.y}, "counterToConverterInterconnects14",[[],[]], "null");
globalGates.push(counterToConverterInterconnects14);
counterToConverterInterconnects13.outputs[0].push({gate: counterToConverterInterconnects14, position: 0});
counterToConverterInterconnects14.outputs[1].push({gate: counterToConverterInterconnects13, position: 1});
counterToConverterInterconnects12.outputs[0].push({gate: counterToConverterInterconnects14, position: 1});
counterToConverterInterconnects14.outputs[0].push({gate: counterToConverterInterconnects12, position: 1});    

//sevenSegmentDisplay
let sevenSegmentDisplay = {x: 890, y: 718, rotation: 0, name: "sevenSegmentDisplay"};
let sevenSegmentDisplay1Rotation = rotatePointOrigin({x: 5, y: -3}, sevenSegmentDisplay.rotation);
let sevenSegmentDisplay1 = new seg7Gate(sevenSegmentDisplay.x - 50 + sevenSegmentDisplay1Rotation.x, sevenSegmentDisplay.y - 10 + sevenSegmentDisplay1Rotation.y, sevenSegmentDisplay.rotation + 0, "sevenSegmentDisplay1",[[],[]], "null");
globalGates.push(sevenSegmentDisplay1);
let sevenSegmentDisplay2Rotation = rotatePointOrigin({x: 65, y: 57}, sevenSegmentDisplay.rotation);
let sevenSegmentDisplay2 = new seg7Gate(sevenSegmentDisplay.x - 50 + sevenSegmentDisplay2Rotation.x, sevenSegmentDisplay.y - 10 + sevenSegmentDisplay2Rotation.y, sevenSegmentDisplay.rotation + 270, "sevenSegmentDisplay2",[[],[]], "null");
globalGates.push(sevenSegmentDisplay2);
let sevenSegmentDisplay3Rotation = rotatePointOrigin({x: 5, y: 117}, sevenSegmentDisplay.rotation);
let sevenSegmentDisplay3 = new seg7Gate(sevenSegmentDisplay.x - 50 + sevenSegmentDisplay3Rotation.x, sevenSegmentDisplay.y - 10 + sevenSegmentDisplay3Rotation.y, sevenSegmentDisplay.rotation + 0, "sevenSegmentDisplay3",[[],[]], "null");
globalGates.push(sevenSegmentDisplay3);
let sevenSegmentDisplay4Rotation = rotatePointOrigin({x: -55, y: 57}, sevenSegmentDisplay.rotation);
let sevenSegmentDisplay4 = new seg7Gate(sevenSegmentDisplay.x - 50 + sevenSegmentDisplay4Rotation.x, sevenSegmentDisplay.y - 10 + sevenSegmentDisplay4Rotation.y, sevenSegmentDisplay.rotation + 270, "sevenSegmentDisplay4",[[],[]], "null");
globalGates.push(sevenSegmentDisplay4);
let sevenSegmentDisplay5Rotation = rotatePointOrigin({x: -55, y: 177}, sevenSegmentDisplay.rotation);
let sevenSegmentDisplay5 = new seg7Gate(sevenSegmentDisplay.x - 50 + sevenSegmentDisplay5Rotation.x, sevenSegmentDisplay.y - 10 + sevenSegmentDisplay5Rotation.y, sevenSegmentDisplay.rotation + 270, "sevenSegmentDisplay5",[[],[]], "null");
globalGates.push(sevenSegmentDisplay5);
let sevenSegmentDisplay6Rotation = rotatePointOrigin({x: 65, y: 177}, sevenSegmentDisplay.rotation);
let sevenSegmentDisplay6 = new seg7Gate(sevenSegmentDisplay.x - 50 + sevenSegmentDisplay6Rotation.x, sevenSegmentDisplay.y - 10 + sevenSegmentDisplay6Rotation.y, sevenSegmentDisplay.rotation + 270, "sevenSegmentDisplay6",[[],[]], "null");
globalGates.push(sevenSegmentDisplay6);
let sevenSegmentDisplay7Rotation = rotatePointOrigin({x: 5, y: 237}, sevenSegmentDisplay.rotation);
let sevenSegmentDisplay7 = new seg7Gate(sevenSegmentDisplay.x - 50 + sevenSegmentDisplay7Rotation.x, sevenSegmentDisplay.y - 10 + sevenSegmentDisplay7Rotation.y, sevenSegmentDisplay.rotation + 0, "sevenSegmentDisplay7",[[],[]], "null");
globalGates.push(sevenSegmentDisplay7);
    
    
//converterToDisplayInterconnects
let converterToDisplayInterconnects = {x: 547, y: 1051, rotation: 0, name: "converterToDisplayInterconnects"};
let converterToDisplayInterconnectsMask = new maskGate({x: converterToDisplayInterconnects.x , y: converterToDisplayInterconnects.y}, {x: converterToDisplayInterconnects.x, y: converterToDisplayInterconnects.y}, "converterToDisplayInterconnects", null);
globalGates.push(converterToDisplayInterconnectsMask);
let converterToDisplayInterconnects1Rotation0 = rotatePointOrigin({x: -37, y: -8}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects1Rotation1 = rotatePointOrigin({x: -37, y: -1}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects1 = new lineSegment({x: converterToDisplayInterconnects1Rotation0.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects1Rotation0.y + converterToDisplayInterconnects.y}, {x: converterToDisplayInterconnects1Rotation1.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects1Rotation1.y + converterToDisplayInterconnects.y}, "converterToDisplayInterconnects1",[[],[]], "null");
globalGates.push(converterToDisplayInterconnects1);
BinaryTo7SegBlock357.outputs[0].push({gate: converterToDisplayInterconnects1, position: 0});
converterToDisplayInterconnects1.outputs[1].push({gate: BinaryTo7SegBlock357, position: 1});
let converterToDisplayInterconnects2Rotation0 = rotatePointOrigin({x: -37, y: -1}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects2Rotation1 = rotatePointOrigin({x: 3, y: -1}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects2 = new lineSegment({x: converterToDisplayInterconnects2Rotation0.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects2Rotation0.y + converterToDisplayInterconnects.y}, {x: converterToDisplayInterconnects2Rotation1.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects2Rotation1.y + converterToDisplayInterconnects.y}, "converterToDisplayInterconnects2",[[],[]], "null");
globalGates.push(converterToDisplayInterconnects2);
converterToDisplayInterconnects1.outputs[0].push({gate: converterToDisplayInterconnects2, position: 0});
converterToDisplayInterconnects2.outputs[1].push({gate: converterToDisplayInterconnects1, position: 1});
let converterToDisplayInterconnects3Rotation0 = rotatePointOrigin({x: -76, y: -9}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects3Rotation1 = rotatePointOrigin({x: -76, y: 9}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects3 = new lineSegment({x: converterToDisplayInterconnects3Rotation0.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects3Rotation0.y + converterToDisplayInterconnects.y}, {x: converterToDisplayInterconnects3Rotation1.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects3Rotation1.y + converterToDisplayInterconnects.y}, "converterToDisplayInterconnects3",[[],[]], "null");
globalGates.push(converterToDisplayInterconnects3);
BinaryTo7SegBlockFix18.outputs[0].push({gate: converterToDisplayInterconnects3, position: 0});
converterToDisplayInterconnects3.outputs[1].push({gate: BinaryTo7SegBlockFix18, position: 1});
let converterToDisplayInterconnects4Rotation0 = rotatePointOrigin({x: -76, y: 9}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects4Rotation1 = rotatePointOrigin({x: 13, y: 9}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects4 = new lineSegment({x: converterToDisplayInterconnects4Rotation0.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects4Rotation0.y + converterToDisplayInterconnects.y}, {x: converterToDisplayInterconnects4Rotation1.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects4Rotation1.y + converterToDisplayInterconnects.y}, "converterToDisplayInterconnects4",[[],[]], "null");
globalGates.push(converterToDisplayInterconnects4);
converterToDisplayInterconnects3.outputs[0].push({gate: converterToDisplayInterconnects4, position: 0});
converterToDisplayInterconnects4.outputs[1].push({gate: converterToDisplayInterconnects3, position: 1});
let converterToDisplayInterconnects5Rotation0 = rotatePointOrigin({x: -127, y: -8}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects5Rotation1 = rotatePointOrigin({x: -127, y: 19}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects5 = new lineSegment({x: converterToDisplayInterconnects5Rotation0.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects5Rotation0.y + converterToDisplayInterconnects.y}, {x: converterToDisplayInterconnects5Rotation1.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects5Rotation1.y + converterToDisplayInterconnects.y}, "converterToDisplayInterconnects5",[[],[]], "null");
globalGates.push(converterToDisplayInterconnects5);
BinaryTo7SegBlock359.outputs[0].push({gate: converterToDisplayInterconnects5, position: 0});
converterToDisplayInterconnects5.outputs[1].push({gate: BinaryTo7SegBlock359, position: 1});
let converterToDisplayInterconnects6Rotation0 = rotatePointOrigin({x: -127, y: 19}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects6Rotation1 = rotatePointOrigin({x: 23, y: 19}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects6 = new lineSegment({x: converterToDisplayInterconnects6Rotation0.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects6Rotation0.y + converterToDisplayInterconnects.y}, {x: converterToDisplayInterconnects6Rotation1.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects6Rotation1.y + converterToDisplayInterconnects.y}, "converterToDisplayInterconnects6",[[],[]], "null");
globalGates.push(converterToDisplayInterconnects6);
converterToDisplayInterconnects5.outputs[0].push({gate: converterToDisplayInterconnects6, position: 0});
converterToDisplayInterconnects6.outputs[1].push({gate: converterToDisplayInterconnects5, position: 1});
let converterToDisplayInterconnects7Rotation0 = rotatePointOrigin({x: -167, y: -8}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects7Rotation1 = rotatePointOrigin({x: -167, y: 29}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects7 = new lineSegment({x: converterToDisplayInterconnects7Rotation0.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects7Rotation0.y + converterToDisplayInterconnects.y}, {x: converterToDisplayInterconnects7Rotation1.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects7Rotation1.y + converterToDisplayInterconnects.y}, "converterToDisplayInterconnects7",[[],[]], "null");
globalGates.push(converterToDisplayInterconnects7);
BinaryTo7SegBlock360.outputs[0].push({gate: converterToDisplayInterconnects7, position: 0});
converterToDisplayInterconnects7.outputs[1].push({gate: BinaryTo7SegBlock360, position: 1});
let converterToDisplayInterconnects8Rotation0 = rotatePointOrigin({x: -167, y: 29}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects8Rotation1 = rotatePointOrigin({x: 33, y: 29}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects8 = new lineSegment({x: converterToDisplayInterconnects8Rotation0.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects8Rotation0.y + converterToDisplayInterconnects.y}, {x: converterToDisplayInterconnects8Rotation1.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects8Rotation1.y + converterToDisplayInterconnects.y}, "converterToDisplayInterconnects8",[[],[]], "null");
globalGates.push(converterToDisplayInterconnects8);
converterToDisplayInterconnects7.outputs[0].push({gate: converterToDisplayInterconnects8, position: 0});
converterToDisplayInterconnects8.outputs[1].push({gate: converterToDisplayInterconnects7, position: 1});
let converterToDisplayInterconnects9Rotation0 = rotatePointOrigin({x: -217, y: -8}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects9Rotation1 = rotatePointOrigin({x: -217, y: 39}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects9 = new lineSegment({x: converterToDisplayInterconnects9Rotation0.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects9Rotation0.y + converterToDisplayInterconnects.y}, {x: converterToDisplayInterconnects9Rotation1.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects9Rotation1.y + converterToDisplayInterconnects.y}, "converterToDisplayInterconnects9",[[],[]], "null");
globalGates.push(converterToDisplayInterconnects9);
BinaryTo7SegBlock361.outputs[0].push({gate: converterToDisplayInterconnects9, position: 0});
converterToDisplayInterconnects9.outputs[1].push({gate: BinaryTo7SegBlock361, position: 1});
let converterToDisplayInterconnects10Rotation0 = rotatePointOrigin({x: -217, y: 39}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects10Rotation1 = rotatePointOrigin({x: 43, y: 39}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects10 = new lineSegment({x: converterToDisplayInterconnects10Rotation0.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects10Rotation0.y + converterToDisplayInterconnects.y}, {x: converterToDisplayInterconnects10Rotation1.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects10Rotation1.y + converterToDisplayInterconnects.y}, "converterToDisplayInterconnects10",[[],[]], "null");
globalGates.push(converterToDisplayInterconnects10);
converterToDisplayInterconnects9.outputs[0].push({gate: converterToDisplayInterconnects10, position: 0});
converterToDisplayInterconnects10.outputs[1].push({gate: converterToDisplayInterconnects9, position: 1});
let converterToDisplayInterconnects11Rotation0 = rotatePointOrigin({x: -277, y: -8}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects11Rotation1 = rotatePointOrigin({x: -277, y: 49}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects11 = new lineSegment({x: converterToDisplayInterconnects11Rotation0.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects11Rotation0.y + converterToDisplayInterconnects.y}, {x: converterToDisplayInterconnects11Rotation1.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects11Rotation1.y + converterToDisplayInterconnects.y}, "converterToDisplayInterconnects11",[[],[]], "null");
globalGates.push(converterToDisplayInterconnects11);
BinaryTo7SegBlock362.outputs[0].push({gate: converterToDisplayInterconnects11, position: 0});
converterToDisplayInterconnects11.outputs[1].push({gate: BinaryTo7SegBlock362, position: 1});
let converterToDisplayInterconnects12Rotation0 = rotatePointOrigin({x: -277, y: 49}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects12Rotation1 = rotatePointOrigin({x: 53, y: 49}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects12 = new lineSegment({x: converterToDisplayInterconnects12Rotation0.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects12Rotation0.y + converterToDisplayInterconnects.y}, {x: converterToDisplayInterconnects12Rotation1.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects12Rotation1.y + converterToDisplayInterconnects.y}, "converterToDisplayInterconnects12",[[],[]], "null");
globalGates.push(converterToDisplayInterconnects12);
converterToDisplayInterconnects11.outputs[0].push({gate: converterToDisplayInterconnects12, position: 0});
converterToDisplayInterconnects12.outputs[1].push({gate: converterToDisplayInterconnects11, position: 1});
let converterToDisplayInterconnects13Rotation0 = rotatePointOrigin({x: -337, y: -8}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects13Rotation1 = rotatePointOrigin({x: -337, y: 59}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects13 = new lineSegment({x: converterToDisplayInterconnects13Rotation0.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects13Rotation0.y + converterToDisplayInterconnects.y}, {x: converterToDisplayInterconnects13Rotation1.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects13Rotation1.y + converterToDisplayInterconnects.y}, "converterToDisplayInterconnects13",[[],[]], "null");
globalGates.push(converterToDisplayInterconnects13);
BinaryTo7SegBlock363.outputs[0].push({gate: converterToDisplayInterconnects13, position: 0});
converterToDisplayInterconnects13.outputs[1].push({gate: BinaryTo7SegBlock363, position: 1});
let converterToDisplayInterconnects14Rotation0 = rotatePointOrigin({x: -337, y: 59}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects14Rotation1 = rotatePointOrigin({x: 63, y: 59}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects14 = new lineSegment({x: converterToDisplayInterconnects14Rotation0.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects14Rotation0.y + converterToDisplayInterconnects.y}, {x: converterToDisplayInterconnects14Rotation1.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects14Rotation1.y + converterToDisplayInterconnects.y}, "converterToDisplayInterconnects14",[[],[]], "null");
globalGates.push(converterToDisplayInterconnects14);
converterToDisplayInterconnects13.outputs[0].push({gate: converterToDisplayInterconnects14, position: 0});
converterToDisplayInterconnects14.outputs[1].push({gate: converterToDisplayInterconnects13, position: 1});
let converterToDisplayInterconnects15Rotation0 = rotatePointOrigin({x: 298, y: -336}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects15Rotation1 = rotatePointOrigin({x: 63, y: -336}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects15 = new lineSegment({x: converterToDisplayInterconnects15Rotation0.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects15Rotation0.y + converterToDisplayInterconnects.y}, {x: converterToDisplayInterconnects15Rotation1.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects15Rotation1.y + converterToDisplayInterconnects.y}, "converterToDisplayInterconnects15",[[],[]], "null");
globalGates.push(converterToDisplayInterconnects15);
converterToDisplayInterconnects15.outputs[0].push({gate: sevenSegmentDisplay1, position: 0});
converterToDisplayInterconnects15.outputs[1].push({gate: sevenSegmentDisplay1, position: 0});
let converterToDisplayInterconnects16Rotation0 = rotatePointOrigin({x: 63, y: -336}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects16Rotation1 = rotatePointOrigin({x: 63, y: 59}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects16 = new lineSegment({x: converterToDisplayInterconnects16Rotation0.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects16Rotation0.y + converterToDisplayInterconnects.y}, {x: converterToDisplayInterconnects16Rotation1.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects16Rotation1.y + converterToDisplayInterconnects.y}, "converterToDisplayInterconnects16",[[],[]], "null");
globalGates.push(converterToDisplayInterconnects16);
converterToDisplayInterconnects15.outputs[0].push({gate: converterToDisplayInterconnects16, position: 0});
converterToDisplayInterconnects16.outputs[1].push({gate: converterToDisplayInterconnects15, position: 1});
converterToDisplayInterconnects14.outputs[0].push({gate: converterToDisplayInterconnects16, position: 1});
converterToDisplayInterconnects16.outputs[0].push({gate: converterToDisplayInterconnects14, position: 1});
let converterToDisplayInterconnects17Rotation0 = rotatePointOrigin({x: 408, y: -226}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects17Rotation1 = rotatePointOrigin({x: 408, y: -221}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects17 = new lineSegment({x: converterToDisplayInterconnects17Rotation0.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects17Rotation0.y + converterToDisplayInterconnects.y}, {x: converterToDisplayInterconnects17Rotation1.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects17Rotation1.y + converterToDisplayInterconnects.y}, "converterToDisplayInterconnects17",[[],[]], "null");
globalGates.push(converterToDisplayInterconnects17);
converterToDisplayInterconnects17.outputs[0].push({gate: sevenSegmentDisplay2, position: 0});
converterToDisplayInterconnects17.outputs[1].push({gate: sevenSegmentDisplay2, position: 0});
let converterToDisplayInterconnects18Rotation0 = rotatePointOrigin({x: 408, y: -221}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects18Rotation1 = rotatePointOrigin({x: 423, y: -221}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects18 = new lineSegment({x: converterToDisplayInterconnects18Rotation0.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects18Rotation0.y + converterToDisplayInterconnects.y}, {x: converterToDisplayInterconnects18Rotation1.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects18Rotation1.y + converterToDisplayInterconnects.y}, "converterToDisplayInterconnects18",[[],[]], "null");
globalGates.push(converterToDisplayInterconnects18);
converterToDisplayInterconnects17.outputs[0].push({gate: converterToDisplayInterconnects18, position: 0});
converterToDisplayInterconnects18.outputs[1].push({gate: converterToDisplayInterconnects17, position: 1});
let converterToDisplayInterconnects19Rotation0 = rotatePointOrigin({x: 423, y: -221}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects19Rotation1 = rotatePointOrigin({x: 423, y: -81}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects19 = new lineSegment({x: converterToDisplayInterconnects19Rotation0.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects19Rotation0.y + converterToDisplayInterconnects.y}, {x: converterToDisplayInterconnects19Rotation1.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects19Rotation1.y + converterToDisplayInterconnects.y}, "converterToDisplayInterconnects19",[[],[]], "null");
globalGates.push(converterToDisplayInterconnects19);
converterToDisplayInterconnects18.outputs[0].push({gate: converterToDisplayInterconnects19, position: 0});
converterToDisplayInterconnects19.outputs[1].push({gate: converterToDisplayInterconnects18, position: 1});
let converterToDisplayInterconnects20Rotation0 = rotatePointOrigin({x: 408, y: -106}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects20Rotation1 = rotatePointOrigin({x: 408, y: -71}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects20 = new lineSegment({x: converterToDisplayInterconnects20Rotation0.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects20Rotation0.y + converterToDisplayInterconnects.y}, {x: converterToDisplayInterconnects20Rotation1.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects20Rotation1.y + converterToDisplayInterconnects.y}, "converterToDisplayInterconnects20",[[],[]], "null");
globalGates.push(converterToDisplayInterconnects20);
converterToDisplayInterconnects20.outputs[0].push({gate: sevenSegmentDisplay6, position: 0});
converterToDisplayInterconnects20.outputs[1].push({gate: sevenSegmentDisplay6, position: 0});
let converterToDisplayInterconnects21Rotation0 = rotatePointOrigin({x: 408, y: -71}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects21Rotation1 = rotatePointOrigin({x: 383, y: -71}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects21 = new lineSegment({x: converterToDisplayInterconnects21Rotation0.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects21Rotation0.y + converterToDisplayInterconnects.y}, {x: converterToDisplayInterconnects21Rotation1.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects21Rotation1.y + converterToDisplayInterconnects.y}, "converterToDisplayInterconnects21",[[],[]], "null");
globalGates.push(converterToDisplayInterconnects21);
converterToDisplayInterconnects20.outputs[0].push({gate: converterToDisplayInterconnects21, position: 0});
converterToDisplayInterconnects21.outputs[1].push({gate: converterToDisplayInterconnects20, position: 1});
let converterToDisplayInterconnects22Rotation0 = rotatePointOrigin({x: 383, y: -71}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects22Rotation1 = rotatePointOrigin({x: 43, y: -71}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects22 = new lineSegment({x: converterToDisplayInterconnects22Rotation0.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects22Rotation0.y + converterToDisplayInterconnects.y}, {x: converterToDisplayInterconnects22Rotation1.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects22Rotation1.y + converterToDisplayInterconnects.y}, "converterToDisplayInterconnects22",[[],[]], "null");
globalGates.push(converterToDisplayInterconnects22);
converterToDisplayInterconnects21.outputs[0].push({gate: converterToDisplayInterconnects22, position: 0});
converterToDisplayInterconnects22.outputs[1].push({gate: converterToDisplayInterconnects21, position: 1});
let converterToDisplayInterconnects23Rotation0 = rotatePointOrigin({x: 43, y: -71}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects23Rotation1 = rotatePointOrigin({x: 43, y: 39}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects23 = new lineSegment({x: converterToDisplayInterconnects23Rotation0.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects23Rotation0.y + converterToDisplayInterconnects.y}, {x: converterToDisplayInterconnects23Rotation1.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects23Rotation1.y + converterToDisplayInterconnects.y}, "converterToDisplayInterconnects23",[[],[]], "null");
globalGates.push(converterToDisplayInterconnects23);
converterToDisplayInterconnects22.outputs[0].push({gate: converterToDisplayInterconnects23, position: 0});
converterToDisplayInterconnects23.outputs[1].push({gate: converterToDisplayInterconnects22, position: 1});
converterToDisplayInterconnects10.outputs[0].push({gate: converterToDisplayInterconnects23, position: 1});
converterToDisplayInterconnects23.outputs[0].push({gate: converterToDisplayInterconnects10, position: 1});
let converterToDisplayInterconnects24Rotation0 = rotatePointOrigin({x: 423, y: -81}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects24Rotation1 = rotatePointOrigin({x: 53, y: -81}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects24 = new lineSegment({x: converterToDisplayInterconnects24Rotation0.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects24Rotation0.y + converterToDisplayInterconnects.y}, {x: converterToDisplayInterconnects24Rotation1.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects24Rotation1.y + converterToDisplayInterconnects.y}, "converterToDisplayInterconnects24",[[],[]], "null");
globalGates.push(converterToDisplayInterconnects24);
converterToDisplayInterconnects19.outputs[0].push({gate: converterToDisplayInterconnects24, position: 0});
converterToDisplayInterconnects24.outputs[1].push({gate: converterToDisplayInterconnects19, position: 1});
let converterToDisplayInterconnects25Rotation0 = rotatePointOrigin({x: 53, y: -81}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects25Rotation1 = rotatePointOrigin({x: 53, y: 49}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects25 = new lineSegment({x: converterToDisplayInterconnects25Rotation0.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects25Rotation0.y + converterToDisplayInterconnects.y}, {x: converterToDisplayInterconnects25Rotation1.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects25Rotation1.y + converterToDisplayInterconnects.y}, "converterToDisplayInterconnects25",[[],[]], "null");
globalGates.push(converterToDisplayInterconnects25);
converterToDisplayInterconnects24.outputs[0].push({gate: converterToDisplayInterconnects25, position: 0});
converterToDisplayInterconnects25.outputs[1].push({gate: converterToDisplayInterconnects24, position: 1});
converterToDisplayInterconnects12.outputs[0].push({gate: converterToDisplayInterconnects25, position: 1});
converterToDisplayInterconnects25.outputs[0].push({gate: converterToDisplayInterconnects12, position: 1});
let converterToDisplayInterconnects26Rotation0 = rotatePointOrigin({x: 298, y: -96}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects26Rotation1 = rotatePointOrigin({x: 33, y: -96}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects26 = new lineSegment({x: converterToDisplayInterconnects26Rotation0.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects26Rotation0.y + converterToDisplayInterconnects.y}, {x: converterToDisplayInterconnects26Rotation1.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects26Rotation1.y + converterToDisplayInterconnects.y}, "converterToDisplayInterconnects26",[[],[]], "null");
globalGates.push(converterToDisplayInterconnects26);
converterToDisplayInterconnects26.outputs[0].push({gate: sevenSegmentDisplay7, position: 0});
converterToDisplayInterconnects26.outputs[1].push({gate: sevenSegmentDisplay7, position: 0});
let converterToDisplayInterconnects27Rotation0 = rotatePointOrigin({x: 33, y: -96}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects27Rotation1 = rotatePointOrigin({x: 33, y: 29}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects27 = new lineSegment({x: converterToDisplayInterconnects27Rotation0.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects27Rotation0.y + converterToDisplayInterconnects.y}, {x: converterToDisplayInterconnects27Rotation1.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects27Rotation1.y + converterToDisplayInterconnects.y}, "converterToDisplayInterconnects27",[[],[]], "null");
globalGates.push(converterToDisplayInterconnects27);
converterToDisplayInterconnects26.outputs[0].push({gate: converterToDisplayInterconnects27, position: 0});
converterToDisplayInterconnects27.outputs[1].push({gate: converterToDisplayInterconnects26, position: 1});
converterToDisplayInterconnects8.outputs[0].push({gate: converterToDisplayInterconnects27, position: 1});
converterToDisplayInterconnects27.outputs[0].push({gate: converterToDisplayInterconnects8, position: 1});
let converterToDisplayInterconnects28Rotation0 = rotatePointOrigin({x: 288, y: -106}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects28Rotation1 = rotatePointOrigin({x: 23, y: -106}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects28 = new lineSegment({x: converterToDisplayInterconnects28Rotation0.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects28Rotation0.y + converterToDisplayInterconnects.y}, {x: converterToDisplayInterconnects28Rotation1.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects28Rotation1.y + converterToDisplayInterconnects.y}, "converterToDisplayInterconnects28",[[],[]], "null");
globalGates.push(converterToDisplayInterconnects28);
converterToDisplayInterconnects28.outputs[0].push({gate: sevenSegmentDisplay5, position: 0});
converterToDisplayInterconnects28.outputs[1].push({gate: sevenSegmentDisplay5, position: 0});
let converterToDisplayInterconnects29Rotation0 = rotatePointOrigin({x: 23, y: -106}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects29Rotation1 = rotatePointOrigin({x: 23, y: 19}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects29 = new lineSegment({x: converterToDisplayInterconnects29Rotation0.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects29Rotation0.y + converterToDisplayInterconnects.y}, {x: converterToDisplayInterconnects29Rotation1.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects29Rotation1.y + converterToDisplayInterconnects.y}, "converterToDisplayInterconnects29",[[],[]], "null");
globalGates.push(converterToDisplayInterconnects29);
converterToDisplayInterconnects28.outputs[0].push({gate: converterToDisplayInterconnects29, position: 0});
converterToDisplayInterconnects29.outputs[1].push({gate: converterToDisplayInterconnects28, position: 1});
converterToDisplayInterconnects6.outputs[0].push({gate: converterToDisplayInterconnects29, position: 1});
converterToDisplayInterconnects29.outputs[0].push({gate: converterToDisplayInterconnects6, position: 1});
let converterToDisplayInterconnects30Rotation0 = rotatePointOrigin({x: 288, y: -226}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects30Rotation1 = rotatePointOrigin({x: 13, y: -226}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects30 = new lineSegment({x: converterToDisplayInterconnects30Rotation0.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects30Rotation0.y + converterToDisplayInterconnects.y}, {x: converterToDisplayInterconnects30Rotation1.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects30Rotation1.y + converterToDisplayInterconnects.y}, "converterToDisplayInterconnects30",[[],[]], "null");
globalGates.push(converterToDisplayInterconnects30);
converterToDisplayInterconnects30.outputs[0].push({gate: sevenSegmentDisplay4, position: 0});
converterToDisplayInterconnects30.outputs[1].push({gate: sevenSegmentDisplay4, position: 0});
let converterToDisplayInterconnects31Rotation0 = rotatePointOrigin({x: 13, y: -226}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects31Rotation1 = rotatePointOrigin({x: 13, y: 9}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects31 = new lineSegment({x: converterToDisplayInterconnects31Rotation0.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects31Rotation0.y + converterToDisplayInterconnects.y}, {x: converterToDisplayInterconnects31Rotation1.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects31Rotation1.y + converterToDisplayInterconnects.y}, "converterToDisplayInterconnects31",[[],[]], "null");
globalGates.push(converterToDisplayInterconnects31);
converterToDisplayInterconnects30.outputs[0].push({gate: converterToDisplayInterconnects31, position: 0});
converterToDisplayInterconnects31.outputs[1].push({gate: converterToDisplayInterconnects30, position: 1});
converterToDisplayInterconnects4.outputs[0].push({gate: converterToDisplayInterconnects31, position: 1});
converterToDisplayInterconnects31.outputs[0].push({gate: converterToDisplayInterconnects4, position: 1});
let converterToDisplayInterconnects32Rotation0 = rotatePointOrigin({x: 298, y: -216}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects32Rotation1 = rotatePointOrigin({x: 3, y: -216}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects32 = new lineSegment({x: converterToDisplayInterconnects32Rotation0.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects32Rotation0.y + converterToDisplayInterconnects.y}, {x: converterToDisplayInterconnects32Rotation1.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects32Rotation1.y + converterToDisplayInterconnects.y}, "converterToDisplayInterconnects32",[[],[]], "null");
globalGates.push(converterToDisplayInterconnects32);
converterToDisplayInterconnects32.outputs[0].push({gate: sevenSegmentDisplay3, position: 0});
converterToDisplayInterconnects32.outputs[1].push({gate: sevenSegmentDisplay3, position: 0});
let converterToDisplayInterconnects33Rotation0 = rotatePointOrigin({x: 3, y: -216}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects33Rotation1 = rotatePointOrigin({x: 3, y: -1}, converterToDisplayInterconnects.rotation);
let converterToDisplayInterconnects33 = new lineSegment({x: converterToDisplayInterconnects33Rotation0.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects33Rotation0.y + converterToDisplayInterconnects.y}, {x: converterToDisplayInterconnects33Rotation1.x + converterToDisplayInterconnects.x, y: converterToDisplayInterconnects33Rotation1.y + converterToDisplayInterconnects.y}, "converterToDisplayInterconnects33",[[],[]], "null");
globalGates.push(converterToDisplayInterconnects33);
converterToDisplayInterconnects32.outputs[0].push({gate: converterToDisplayInterconnects33, position: 0});
converterToDisplayInterconnects33.outputs[1].push({gate: converterToDisplayInterconnects32, position: 1});
converterToDisplayInterconnects2.outputs[0].push({gate: converterToDisplayInterconnects33, position: 1});
converterToDisplayInterconnects33.outputs[0].push({gate: converterToDisplayInterconnects2, position: 1});    

//binaryCountDisplay
let binaryCountDisplay = {x: 845, y: 430, rotation: 0, name: "binaryCountDisplay"};
let binaryCountDisplayMask = new maskGate({x: binaryCountDisplay.x , y: binaryCountDisplay.y}, {x: binaryCountDisplay.x, y: binaryCountDisplay.y}, "binaryCountDisplay", null);
globalGates.push(binaryCountDisplayMask);
let binaryCountDisplay1Rotation = rotatePointOrigin({x: 0, y: 5}, binaryCountDisplay.rotation);
let binaryCountDisplay1 = new seg7Gate(binaryCountDisplay.x - 50 + binaryCountDisplay1Rotation.x, binaryCountDisplay.y - 10 + binaryCountDisplay1Rotation.y, binaryCountDisplay.rotation + 90, "binaryCountDisplay1",[[],[]], "null");
globalGates.push(binaryCountDisplay1);
let binaryCountDisplay2Rotation = rotatePointOrigin({x: 80, y: 5}, binaryCountDisplay.rotation);
let binaryCountDisplay2 = new seg7Gate(binaryCountDisplay.x - 50 + binaryCountDisplay2Rotation.x, binaryCountDisplay.y - 10 + binaryCountDisplay2Rotation.y, binaryCountDisplay.rotation + 90, "binaryCountDisplay2",[[],[]], "null");
globalGates.push(binaryCountDisplay2);
let binaryCountDisplay3Rotation = rotatePointOrigin({x: 160, y: 5}, binaryCountDisplay.rotation);
let binaryCountDisplay3 = new seg7Gate(binaryCountDisplay.x - 50 + binaryCountDisplay3Rotation.x, binaryCountDisplay.y - 10 + binaryCountDisplay3Rotation.y, binaryCountDisplay.rotation + 90, "binaryCountDisplay3",[[],[]], "null");
globalGates.push(binaryCountDisplay3);
let binaryCountDisplay4Rotation = rotatePointOrigin({x: -80, y: 5}, binaryCountDisplay.rotation);
let binaryCountDisplay4 = new seg7Gate(binaryCountDisplay.x - 50 + binaryCountDisplay4Rotation.x, binaryCountDisplay.y - 10 + binaryCountDisplay4Rotation.y, binaryCountDisplay.rotation + 90, "binaryCountDisplay4",[[],[]], "null");
globalGates.push(binaryCountDisplay4);
let binaryCountDisplay5Rotation0 = rotatePointOrigin({x: 355, y: -140}, binaryCountDisplay.rotation);
let binaryCountDisplay5Rotation1 = rotatePointOrigin({x: 160, y: -140}, binaryCountDisplay.rotation);
let binaryCountDisplay5 = new lineSegment({x: binaryCountDisplay5Rotation0.x + binaryCountDisplay.x, y: binaryCountDisplay5Rotation0.y + binaryCountDisplay.y}, {x: binaryCountDisplay5Rotation1.x + binaryCountDisplay.x, y: binaryCountDisplay5Rotation1.y + binaryCountDisplay.y}, "binaryCountDisplay5",[[],[]], "null");
globalGates.push(binaryCountDisplay5);
counterToConverterInterconnects13.outputs[0].push({gate: binaryCountDisplay5, position: 0});
binaryCountDisplay5.outputs[1].push({gate: counterToConverterInterconnects13, position: 1});
counterToConverterInterconnects14.outputs[1].push({gate: binaryCountDisplay5, position: 0});
binaryCountDisplay5.outputs[1].push({gate: counterToConverterInterconnects14, position: 0});
let binaryCountDisplay6Rotation0 = rotatePointOrigin({x: 160, y: -140}, binaryCountDisplay.rotation);
let binaryCountDisplay6Rotation1 = rotatePointOrigin({x: 160, y: -45}, binaryCountDisplay.rotation);
let binaryCountDisplay6 = new lineSegment({x: binaryCountDisplay6Rotation0.x + binaryCountDisplay.x, y: binaryCountDisplay6Rotation0.y + binaryCountDisplay.y}, {x: binaryCountDisplay6Rotation1.x + binaryCountDisplay.x, y: binaryCountDisplay6Rotation1.y + binaryCountDisplay.y}, "binaryCountDisplay6",[[],[]], "null");
globalGates.push(binaryCountDisplay6);
binaryCountDisplay5.outputs[0].push({gate: binaryCountDisplay6, position: 0});
binaryCountDisplay6.outputs[1].push({gate: binaryCountDisplay5, position: 1});
binaryCountDisplay6.outputs[0].push({gate: binaryCountDisplay3, position: 0});
binaryCountDisplay6.outputs[1].push({gate: binaryCountDisplay3, position: 0});
let binaryCountDisplay7Rotation0 = rotatePointOrigin({x: 55, y: -150}, binaryCountDisplay.rotation);
let binaryCountDisplay7Rotation1 = rotatePointOrigin({x: 80, y: -150}, binaryCountDisplay.rotation);
let binaryCountDisplay7 = new lineSegment({x: binaryCountDisplay7Rotation0.x + binaryCountDisplay.x, y: binaryCountDisplay7Rotation0.y + binaryCountDisplay.y}, {x: binaryCountDisplay7Rotation1.x + binaryCountDisplay.x, y: binaryCountDisplay7Rotation1.y + binaryCountDisplay.y}, "binaryCountDisplay7",[[],[]], "null");
globalGates.push(binaryCountDisplay7);
counterToConverterInterconnects9.outputs[0].push({gate: binaryCountDisplay7, position: 0});
binaryCountDisplay7.outputs[1].push({gate: counterToConverterInterconnects9, position: 1});
counterToConverterInterconnects10.outputs[0].push({gate: binaryCountDisplay7, position: 0});
binaryCountDisplay7.outputs[1].push({gate: counterToConverterInterconnects10, position: 1});
let binaryCountDisplay8Rotation0 = rotatePointOrigin({x: 80, y: -150}, binaryCountDisplay.rotation);
let binaryCountDisplay8Rotation1 = rotatePointOrigin({x: 80, y: -45}, binaryCountDisplay.rotation);
let binaryCountDisplay8 = new lineSegment({x: binaryCountDisplay8Rotation0.x + binaryCountDisplay.x, y: binaryCountDisplay8Rotation0.y + binaryCountDisplay.y}, {x: binaryCountDisplay8Rotation1.x + binaryCountDisplay.x, y: binaryCountDisplay8Rotation1.y + binaryCountDisplay.y}, "binaryCountDisplay8",[[],[]], "null");
globalGates.push(binaryCountDisplay8);
binaryCountDisplay7.outputs[0].push({gate: binaryCountDisplay8, position: 0});
binaryCountDisplay8.outputs[1].push({gate: binaryCountDisplay7, position: 1});
binaryCountDisplay8.outputs[0].push({gate: binaryCountDisplay2, position: 0});
binaryCountDisplay8.outputs[1].push({gate: binaryCountDisplay2, position: 0});
let binaryCountDisplay9Rotation0 = rotatePointOrigin({x: -245, y: -160}, binaryCountDisplay.rotation);
let binaryCountDisplay9Rotation1 = rotatePointOrigin({x: 0, y: -160}, binaryCountDisplay.rotation);
let binaryCountDisplay9 = new lineSegment({x: binaryCountDisplay9Rotation0.x + binaryCountDisplay.x, y: binaryCountDisplay9Rotation0.y + binaryCountDisplay.y}, {x: binaryCountDisplay9Rotation1.x + binaryCountDisplay.x, y: binaryCountDisplay9Rotation1.y + binaryCountDisplay.y}, "binaryCountDisplay9",[[],[]], "null");
globalGates.push(binaryCountDisplay9);
counterToConverterInterconnects6.outputs[0].push({gate: binaryCountDisplay9, position: 0});
binaryCountDisplay9.outputs[1].push({gate: counterToConverterInterconnects6, position: 1});
counterToConverterInterconnects7.outputs[0].push({gate: binaryCountDisplay9, position: 0});
binaryCountDisplay9.outputs[1].push({gate: counterToConverterInterconnects7, position: 1});
let binaryCountDisplay10Rotation0 = rotatePointOrigin({x: 0, y: -160}, binaryCountDisplay.rotation);
let binaryCountDisplay10Rotation1 = rotatePointOrigin({x: 0, y: -45}, binaryCountDisplay.rotation);
let binaryCountDisplay10 = new lineSegment({x: binaryCountDisplay10Rotation0.x + binaryCountDisplay.x, y: binaryCountDisplay10Rotation0.y + binaryCountDisplay.y}, {x: binaryCountDisplay10Rotation1.x + binaryCountDisplay.x, y: binaryCountDisplay10Rotation1.y + binaryCountDisplay.y}, "binaryCountDisplay10",[[],[]], "null");
globalGates.push(binaryCountDisplay10);
binaryCountDisplay9.outputs[0].push({gate: binaryCountDisplay10, position: 0});
binaryCountDisplay10.outputs[1].push({gate: binaryCountDisplay9, position: 1});
binaryCountDisplay10.outputs[0].push({gate: binaryCountDisplay1, position: 0});
binaryCountDisplay10.outputs[1].push({gate: binaryCountDisplay1, position: 0});
let binaryCountDisplay11Rotation0 = rotatePointOrigin({x: -545, y: -170}, binaryCountDisplay.rotation);
let binaryCountDisplay11Rotation1 = rotatePointOrigin({x: -80, y: -170}, binaryCountDisplay.rotation);
let binaryCountDisplay11 = new lineSegment({x: binaryCountDisplay11Rotation0.x + binaryCountDisplay.x, y: binaryCountDisplay11Rotation0.y + binaryCountDisplay.y}, {x: binaryCountDisplay11Rotation1.x + binaryCountDisplay.x, y: binaryCountDisplay11Rotation1.y + binaryCountDisplay.y}, "binaryCountDisplay11",[[],[]], "null");
globalGates.push(binaryCountDisplay11);
counterToConverterInterconnects2.outputs[0].push({gate: binaryCountDisplay11, position: 0});
binaryCountDisplay11.outputs[1].push({gate: counterToConverterInterconnects2, position: 1});
counterToConverterInterconnects4.outputs[0].push({gate: binaryCountDisplay11, position: 0});
binaryCountDisplay11.outputs[1].push({gate: counterToConverterInterconnects4, position: 1});
let binaryCountDisplay12Rotation0 = rotatePointOrigin({x: -80, y: -170}, binaryCountDisplay.rotation);
let binaryCountDisplay12Rotation1 = rotatePointOrigin({x: -80, y: -45}, binaryCountDisplay.rotation);
let binaryCountDisplay12 = new lineSegment({x: binaryCountDisplay12Rotation0.x + binaryCountDisplay.x, y: binaryCountDisplay12Rotation0.y + binaryCountDisplay.y}, {x: binaryCountDisplay12Rotation1.x + binaryCountDisplay.x, y: binaryCountDisplay12Rotation1.y + binaryCountDisplay.y}, "binaryCountDisplay12",[[],[]], "null");
globalGates.push(binaryCountDisplay12);
binaryCountDisplay11.outputs[0].push({gate: binaryCountDisplay12, position: 0});
binaryCountDisplay12.outputs[1].push({gate: binaryCountDisplay11, position: 1});
binaryCountDisplay12.outputs[0].push({gate: binaryCountDisplay4, position: 0});
binaryCountDisplay12.outputs[1].push({gate: binaryCountDisplay4, position: 0});    
    
//end build    
}

function resetLogic() {
    for (let i = 0; i < globalGates.length; i++) {
        let gate = globalGates[i];
        //set to the default state (BUT masks default to transparent for this input-less display)
        if (gate.type == "mask") {
            gate.state = 1;
        } else {
            gate.state = 0; //set to default state
        }
        
        //reset all inputs
        for (let input = 0; input < gate.inputs.length; input++) {
            gate.inputs[input] = 0;
        }
        gate.output = 0;
        //console.log("resetting: " + gate.name + " animation layer: " + gate.animationLayer() + " active template: " + gate.template.active + " output: " + gate.output + " logical output: " +gate.getLogicalOutput());;
        if (gate.template.active == false || gate.output == gate.getLogicalOutput()) {
            //some gates are not active components and should reset fully animated. Others are active, but are already stabilized
            gate.animationFrame = gate.template.animationFrames[gate.animationLayer()].length-1;
            gate.active = false;
        } else {
            gate.animationFrame = 0;
            gate.active = true;
        }
        /*
        //console.log("resetting: " + gate.name + " animationFrames: " + gate.template.animationFrames[gate.animationLayer()].length-1);
        if (gate.output != gate.getLogicalOutput()) {
            gate.active = true;
            //console.log("new Active gate: " + gate.name);
        } else {
            gate.active = false;
        }
        */
    }
}

function mosGate(locationX, locationY, rotation, name, outputs, mask) {
    this.type = "mosfet";
    this.location = {x: locationX, y: locationY};
    this.rotation = rotation;
    this.template = globalMosGate;
    this.name = name;
    this.inputs = [0, 0]; //first is the data input, second is the gate input
    this.output = 0;
    this.outputs = outputs;
    this.state = 0;
    this.active = false;
    this.animationFrame = 0;
    this.mask = mask;
    mosGate.prototype.animationLayer = function () {if (this.inputs[1] == 0) {return 0;} else {return this.inputs[0] + 1;}}
    mosGate.prototype.getLogicalOutput = function() {if (this.inputs[1] == 1) {return this.inputs[0];} else { return this.output;}};
    mosGate.prototype.click = function (point) {};
    //globalGates.push(this);
}

function pmosGate(locationX, locationY, rotation, name, outputs, mask) {
    this.type = "pmosfet";
    this.location = {x: locationX, y: locationY};
    this.rotation = rotation;
    this.template = globalPmosGate;
    this.name = name;
    this.inputs = [0, 0]; //first is the data input, second is the gate input
    this.output = 0;
    this.outputs = outputs;
    this.state = 0;
    this.active = false;
    this.animationFrame = 0;
    this.mask = mask;
    pmosGate.prototype.animationLayer = function () {if (this.inputs[1] == 1) {return 0;} else {return this.inputs[0] + 1;}}
    pmosGate.prototype.getLogicalOutput = function() {if (this.inputs[1] == 0) {return this.inputs[0];} else { return this.output;}};
    pmosGate.prototype.click = function (point) {};
    //globalGates.push(this);
}

function switchGate(locationX, locationY, rotation, name, outputs, mask) {
    this.type = "switch";
    this.location = {x: locationX, y: locationY};
    this.rotation = rotation;
    this.template = globalSwitch;
    this.name = name;
    this.inputs = [0, 0];
    this.output = 0;
    this.outputs = outputs;
    this.state = 0;
    this.active = false;
    this.animationFrame = 0;
    this.mask = mask;
    switchGate.prototype.animationLayer = function () {if (this.state == 0) {return this.inputs[0];} else {return this.inputs[1]+2;}};
    switchGate.prototype.getLogicalOutput = function() {if (this.state == 0) {return this.inputs[0];} else { return this.inputs[1];}};
    switchGate.prototype.click = function (point) {  if (this.lockout() == false) {
                                                this.state = (this.state + 1) % 2;
                                                //console.log(this.name + " in state " + this.state);
                                                this.active = true;
                                                if (this.inputs[0] != this.inputs[1]) { this.animationFrame = 0;}
                                                else { this.animationFrame = this.template.animationFrames[this.animationLayer()].length - 1;}
                                             }};
    //globalGates.push(this);
    
    //gate specific things
    switchGate.prototype.lockout = function () { //check to see if the animation is done yet
                                                let lock = false;
                                                if (this.animationFrame == this.template.animationFrames[this.animationLayer()].length - 1) {
                                                    //check to see if data is still propagating on any outputs
                                                    for (let lockctr = 0; lockctr < this.outputs[this.state].length ; lockctr++ ) {
                                                        let lockgate = this.outputs[this.state][lockctr];
                                                        if (lockgate.active == true) {
                                                            lock = true;
                                                            //console.log("lockout due to active output: " + lock);
                                                        }
                                                    }
                                                } else { lock = true;
                                                        //console.log("lockout due to animating: " + lock); 
                                               }
                                                //console.log("lockout: " + lock);
                                                return lock;
                                            };
}

function sourceGate(locationX, locationY, rotation, name, outputs, mask) {
    this.type = "source";
    this.location = {x: locationX, y: locationY};
    this.rotation = 0; //sources should never rotate
    this.template = globalSource;
    this.name = name;
    this.inputs = [];
    this.output = 0;
    this.outputs = outputs;
    this.state = 0;
    this.active = true;
    this.animationFrame = 0;
    this.mask = mask;
    sourceGate.prototype.animationLayer = function () {return this.state;};
    sourceGate.prototype.getLogicalOutput = function() {return this.state;};
    sourceGate.prototype.click = function (point) {  if (this.lockout() == false) {
                                                this.state = (this.state + 1) % 2;
                                                //console.log(this.name + " in state " + this.state);
                                                this.active = true;
                                                this.animationFrame = 0;
                                             }};
    //globalGates.push(this);
    
    //gate specific things
    sourceGate.prototype.lockout = function () { //check to see if the animation is done yet
                                                let lock = false;
                                                if (this.animationFrame == this.template.animationFrames[this.animationLayer()].length - 1) {
                                                    //check to see if data is still propagating on any outputs
                                                    for (let lockctr = 0; lockctr < this.outputs[this.state].length ; lockctr++ ) {
                                                        let lockgate = this.outputs[this.state][lockctr];
                                                        if (lockgate.active == true) {
                                                            lock = true;
                                                            //console.log("lockout due to active output: " + lock);
                                                        }
                                                    }
                                                } else { lock = true;
                                                        //console.log("lockout due to animating: " + lock); 
                                                }
                                                //console.log("lockout: " + lock);
                                                return lock;
                                            };
}

function clockGate(locationX, locationY, rotation, name, outputs, mask) {
    this.type = "clock";
    this.location = {x: locationX, y: locationY};
    this.rotation = 0; //sources should never rotate
    this.template = globalClockGate;
    this.name = name;
    this.inputs = [];
    this.output = 0;
    this.outputs = outputs;
    this.state = 0;
    this.active = false;
    this.animationFrame = 0;
    this.mask = mask;
    clockGate.prototype.animationLayer = function () {return this.state;};
    clockGate.prototype.getLogicalOutput = function() {return this.state;};
    clockGate.prototype.click = function (point) {  };
    
    //gate specific things

}

function lineSegment(start, finish, name, outputs, mask) {
    this.type = "line";
    this.location = {x: Math.min(start.x, finish.x), y: Math.min(start.y,finish.y)};
    //this.location = {x: start.x, y: start.y};    
    this.rotation = 0;

    this.name = name;
    this.inputs = [0, 0];
    this.output = 0;
    this.outputs = outputs;
    this.state = 0;
    this.active = false;
    this.animationFrame = 0;
    this.mask = mask;
    lineSegment.prototype.animationLayer = function () {return this.state;};
    lineSegment.prototype.getLogicalOutput = function() {return this.inputs[this.state];};
    lineSegment.prototype.click = function (point) {};
    //this.template.size = {width: Math.abs(start.x - finish.x), height: Math.abs(start.y-finish.y)};
    this.template = {
            size: {width: Math.abs(start.x - finish.x), height: Math.abs(start.y-finish.y)},
            active : false,
            animationFrames: [{length: Math.sqrt(Math.pow(start.x - finish.x, 2) + Math.pow(start.y-finish.y,2))/globalAnimationSpeed},
                             {length: Math.sqrt(Math.pow(start.x - finish.x, 2) + Math.pow(start.y-finish.y,2))/globalAnimationSpeed}],
            lines: [start, finish],
            curves: [],
            labels: [],
            inputs: [start], 
            outputs: [finish] 
    }

    //globalGates.push(this);
}

function maskGate(start, finish, name, mask) {
    this.type = "mask";
    this.location = {x: Math.min(start.x, finish.x), y: Math.min(start.y,finish.y)};
    //this.location = {x: start.x, y: start.y};    
    this.rotation = 0;

    this.name = name;
    this.inputs = [];
    this.output = 0;
    this.outputs = [[],[]];
    this.state = 0; //state 0 is opaque, state 1 is transparent 
    this.active = true;
    this.animationFrame = 0;
    this.mask = mask;
    maskGate.prototype.animationLayer = function () {return this.state;};
    maskGate.prototype.getLogicalOutput = function() {return this.inputs[this.state];};
    maskGate.prototype.click = function (point) {    
                                                //if the mask is opaque, open it
                                                if (this.state == 0) { //state 0 is opaque
                                                    this.state = (this.state + 1) % 2;
                                                    this.active = true;
                                                    drawRisky();
                                                } 
                                                //otherwise, check to see if the click occured on the expand icon
                                                else if (Images[this.template.animationFrames[1][0]].width + 1 >= point.x && Images[this.template.animationFrames[1][0]].height + 1 >= point.y) {
                                                    this.state = (this.state + 1) % 2;
                                                    this.active = true;
                                                    drawRisky(); 
                                                }
                                           };
    //this.template.size = {width: Math.abs(start.x - finish.x), height: Math.abs(start.y-finish.y)};
    this.template = {
            size: {width: Math.abs(start.x - finish.x), height: Math.abs(start.y-finish.y)},
            active : true, 
            animationFrames: [
                                ["expand"],  //not used
                                ["expand"]
                             ],
            //animationFrames: [{length: 1},
            //                 {length: 1}],
            lines: [start, finish],
            curves: [],
            labels: [
                    {location: {x: Math.abs(start.x - finish.x)/2, y: -3}, font: "10px Arial", text: name}  //function label
                    ],
            inputs: [], 
            outputs: [] 
    }

    //globalGates.push(this);
}

/*
function arcSegment(start, finish, outputs, mask) {
    this.type = "
    this.outputs = outputs;"
    this.inputs = [0];
    this.start = start;
    this.finish = finish;
    this.drawing = 100; 
}*/

function oneGate(locationX, locationY, rotation, name, outputs, mask) {
    this.type = "logical one";
    this.location = {x: locationX, y: locationY};
    this.rotation = rotation;
    this.template = globalLogicalOne;
    this.name = name;
    this.inputs = [];
    this.output = 0;
    this.outputs = outputs;
    this.state = 0;
    this.active = false;
    this.animationFrame = 0;
    this.mask = mask;
    oneGate.prototype.animationLayer = function () {return 0;};
    oneGate.prototype.getLogicalOutput = function() {return 1;};
    oneGate.prototype.click = function (point) {};
    //globalGates.push(this);

}

function gndGate(locationX, locationY, rotation, name, outputs, mask) {
    this.type = "logical zero";
    this.location = {x: locationX, y: locationY};
    this.rotation = rotation;
    this.template = globalLogicalZero;
    this.name = name;
    this.inputs = [];
    this.output = 0;
    this.outputs = outputs;
    this.state = 0;
    this.active = false;
    this.animationFrame = 0;
    this.mask = mask;
    gndGate.prototype.animationLayer = function () {return 0;};
    gndGate.prototype.getLogicalOutput = function() {return 0;};
    gndGate.prototype.click = function (point) {};
    //globalGates.push(this);

}

function orGate(locationX, locationY, rotation, name, outputs, mask) {
    this.type = "or";
    this.location = {x: locationX, y: locationY};
    this.rotation = rotation;
    this.template = globalOrGate;
    this.name = name;
    this.inputs = [0,0];
    this.output = 0;
    this.outputs = outputs;
    this.state = 0;
    this.active = false;
    this.animationFrame = 0;
    this.mask = mask;
    orGate.prototype.animationLayer = function () {if (this.inputs[0] == 1 || this.inputs[1] == 1) {return 0;} else {return 1;}};
    orGate.prototype.getLogicalOutput = function() {if (this.inputs[0] == 1 || this.inputs[1] == 1) {return 1;} else {return 0;}};
    orGate.prototype.click = function (point) {};
    //globalGates.push(this);

}

function xorGate(locationX, locationY, rotation, name, outputs, mask) {
    this.type = "xor";
    this.location = {x: locationX, y: locationY};
    this.rotation = rotation;
    this.template = globalXorGate;
    this.name = name;
    this.inputs = [0,0];
    this.output = 0;
    this.outputs = outputs;
    this.state = 0;
    this.active = false;
    this.animationFrame = 0;
    this.mask = mask;
    xorGate.prototype.animationLayer = function () {if (this.inputs[0] == this.inputs[1]) {return 1;} else {return 0;}};
    xorGate.prototype.getLogicalOutput = function() {if (this.inputs[0] == this.inputs[1]) {return 0;} else {return 1;}};
    xorGate.prototype.click = function (point) {};
    //globalGates.push(this);

}

function andGate(locationX, locationY, rotation, name, outputs, mask) {
    this.type = "and";
    this.location = {x: locationX, y: locationY};
    this.rotation = rotation;
    this.template = globalAndGate;
    this.name = name;
    this.inputs = [0,0];
    this.output = 0;
    this.outputs = outputs;
    this.state = 0;
    this.active = false;
    this.animationFrame = 0;
    this.mask = mask;
    andGate.prototype.animationLayer = function () {if (this.inputs[0] == 1 && this.inputs[1] == 1) {return 0;} else {return 1;}};
    andGate.prototype.getLogicalOutput = function() {if (this.inputs[0] == 1 && this.inputs[1] == 1) {return 1;} else {return 0;}};
    andGate.prototype.click = function (point) {};
    //globalGates.push(this);

}

function notGate(locationX, locationY, rotation, name, outputs, mask) {
    this.type = "not";
    this.location = {x: locationX, y: locationY};
    this.rotation = rotation;
    this.template = globalNotGate;
    this.name = name;
    this.inputs = [0];
    this.output = 0;
    this.outputs = outputs;
    this.state = 0;
    this.active = false;
    this.animationFrame = 0;
    this.mask = mask;
    notGate.prototype.animationLayer = function () {return (this.inputs[0]+1)%2;};
    notGate.prototype.getLogicalOutput = function() {return (this.inputs[0]+1)%2;};
    notGate.prototype.click = function (point) {};
    //globalGates.push(this);

}

function seg7Gate(locationX, locationY, rotation, name, mask) {
    this.type = "7seg";
    this.location = {x: locationX, y: locationY};
    this.rotation = rotation;
    this.template = global7SegGate;
    this.name = name;
    this.inputs = [0];
    this.output = 0;
    this.outputs = [[],[]];
    this.state = 0;
    this.active = false;
    this.animationFrame = 0;
    this.mask = mask;
    seg7Gate.prototype.animationLayer = function () {return (this.inputs[0]+1)%2;};
    seg7Gate.prototype.getLogicalOutput = function() {return this.inputs[0];};
    seg7Gate.prototype.click = function (point) {};
    //globalGates.push(this);

}
function clearGate(gate) {
    //console.log("clearing gate: " + gate.name);
    clearRectangle(gate.location.x, gate.location.y, gate.template.size.width, gate.template.size.height);
}

function clearRectangle(x, y, width, height) {
    //console.log("clearing rectangle: " + x + ", " + y + ", " + width + ", " + height);
    let ctx = globalCanvas.getContext("2d");  
    ctx.clearRect(x, y, width, height);   
}

//draw the current state of Risky on the canvas
function drawRisky() {
    //clear the whole canvas
    let ctx = globalCanvas.getContext("2d");  
    clearRectangle(0, 0, globalCanvas.width, globalCanvas.height);

    //debugLog("gate at: " + globalGates[0].location.x + ", " + globalGates[0].location.y);
    //draw all the gates in a loop
    for (let i = 0; i < globalGates.length; i++) {
        let localGate = globalGates[i];

        drawGate(localGate);

        //only draw labels if not masked
        if (isMasked(localGate)== false) { //state 1 is transparent

            //draw each label, excluding the name of the gate
            ctx.font = "10px Arial";
            ctx.fillStyle = "black";
            ctx.textAlign = "center";
            //ctx.fillText(localGate.name, localGate.location.x, localGate.location.y);
            let labels = localGate.template.labels;
            for (let textCounter = 0; textCounter < labels.length; textCounter++) {
                let label = labels[textCounter];
                ////console.log(label);
                let location = rotatePoint(label.location, localGate.template.size, localGate.rotation);
                ctx.font = label.font
                ctx.fillText(label.text, localGate.location.x + location.x, localGate.location.y + location.y); 
            }
        }
    }
}

function drawGate(localGate){
    let ctx = globalCanvas.getContext("2d");

    //lines are drawn differently to other gates
    if (localGate.type == "line") {
        //only draw if the mask is transparent 
        if (isMasked(localGate) == false) { 
            //console.log("drawing line: " + localGate.name);

            /*check to see if this line needs an update in state
            if (localGate.getLogicalOutput() == localGate.inputs[0]) {
                //this line is already correctly stated. remove from animation
                localGate.animationFrame = 0;
                //console.log("deanimating: " + localGate.name);
                localGate.active = false;
            } else {*/

            //set the draw colors:
            //get the color from the state
            let strokeStyleOut;
            let strokeStyleIn;
            if (localGate.inputs[localGate.state] == 1) {
                //the gate should be loaded with charge
                strokeStyleIn = "red";
                strokeStyleOut = "black";
            } else {
                //the gate should be unloaded with charge
                strokeStyleIn = "black";
                strokeStyleOut = "red";
            }
            /*
            if (localGate.getLogicalOutput() == 1) {
                //the gate is already loaded with charge
            } else {

            }*/
            //get the midpoint
            let start = localGate.template.lines[localGate.state];
            let end = localGate.template.lines[(localGate.state+1)%2];
            let mid = {x: start.x + ((end.x - start.x) * (localGate.animationFrame+1)) / localGate.template.animationFrames[localGate.state].length,
                      y: start.y + ((end.y - start.y) * (localGate.animationFrame+1)) / localGate.template.animationFrames[localGate.state].length};
            if ((Math.pow((start.x-end.x),2) + Math.pow((start.y-end.y),2)) < (Math.pow((start.x-mid.x),2) + Math.pow((start.y-mid.y),2))) {
                mid = end;
            }
            //clear the line
            drawLine(start, end, "white", ctx, 2);
            //draw the line
            drawLine(start, mid, strokeStyleIn, ctx, 1);
            drawLine(mid, end, strokeStyleOut, ctx, 1);
        }
    }
    else if (localGate.type == "mask") {
        if (isMasked(localGate) == false) {
            //console.log("drawing mask: " + localGate.name);
            ctx.beginPath();
            ctx.rect(localGate.location.x, localGate.location.y, localGate.template.size.width, localGate.template.size.height);
            if (localGate.state == 0) { //state 0 is opaque
                ctx.fillStyle = "#FFFFFF";
                ctx.fill();
                ctx.lineWidth = 3;
                ctx.strokeStyle = "black";
                ctx.stroke();
            } else {
                ctx.lineWidth = 3;
                ctx.strokeStyle = "#EEEEEE";
                ctx.stroke();

                //draw the expand image
                let img = localGate.template.animationFrames[localGate.animationLayer()][localGate.animationFrame];
                //console.log("drawing :" + img + " state: " + localGate.state + " frame: " + localGate.animationFrame);
                drawImage(img, localGate.location.x, localGate.location.y, localGate.template.size.width, localGate.template.size.height, localGate.rotation, ctx);
            }
            localGate.active = false;
        }
    }
    else {
        //only draw if not masked
        if (isMasked(localGate) == false) { 
            //console.log("retreiving image for gate :" + localGate.name + " state: " + localGate.state + " charging: " + localGate.getLogicalOutput() + " animation layer: " + localGate.animationLayer() + " animationFrame: " + localGate.animationFrame);
            let img = localGate.template.animationFrames[localGate.animationLayer()][localGate.animationFrame];
            //console.log("drawing :" + img + " state: " + localGate.state + " frame: " + localGate.animationFrame);
            drawImage(img, localGate.location.x, localGate.location.y, localGate.template.size.width, localGate.template.size.height, localGate.rotation, ctx);
        }
    }
}

function drawLine(start, end, color, ctx, width) {
    //console.log("Drawing line from " + start.x + ", " + start.y + " to " + end.x + ", " + end.y + " in color: " + color);
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineWidth = width;
    ctx.lineTo(end.x, end.y);
    ctx.strokeStyle = color;
    ctx.stroke();
}

function drawImage(img, x, y, w, h, rotation, ctx){
    
    // save the unrotated context of the canvas so we can restore it later
    // the alternative is to untranslate & unrotate after drawing
    ctx.save();

    // move to the center of the image to draw
    ctx.translate(x + w/2,y + h/2);

    // rotate the canvas to the specified degrees
    ctx.rotate(rotation*Math.PI/180);

    // draw the image
    // since the context is rotated, the image will be rotated also
    if (rotation *180 == 90) {
        ctx.drawImage(Images[img], -h/2,-w/2);
    } else {
        ctx.drawImage(Images[img], -w/2,-h/2);
    }
    
    // we’re done with the rotating so restore the unrotated context
    ctx.restore();
}

//rotate a point on a shape around clockwise
function rotatePoint(point, size, rotation) {
    if (rotation == 90) {
        return {x: size.height - point.y, y: size.width - point.x};
    } else if (rotation == 180) {
        return {x: size.width - point.x, y: size.height - point.y};
    } else if (rotation == 270) {
        return {x: point.y, y: point.x};
    } else {
        return {x: point.x, y: point.y}; //no rotation
    }   
}

//rotate a point around the origin (0,0)
function rotatePointOrigin(point, rotation) {
    if (rotation == 270) {
        return {x: point.y, y:  -1 * point.x};
    } else if (rotation == 180) {
        return {x: -1 * point.x, y: -1 * point.y};
    } else if (rotation == 90) {
        return {x: -1 * point.y, y: point.x};
    } else {
        return {x: point.x, y: point.y}; //no rotation
    }   
}

//dig up through the nested masks to see if this gate is visible or not
function isMasked(gate) {
    let mask = gate.mask;
    if (mask == null) {return false; } //where there is no mask, this gate is never masked
    if (mask.state == 0) {return true; } //state 0 is opaque
    else {return isMasked(mask); } //if this mask is transparent, but has it's own mask, defer to the parent mask
}