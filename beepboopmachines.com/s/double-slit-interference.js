var canvas;
var ctx;
var xWindow = 0.02*Math.PI; //positive or negative limit of the window in radians
var iTop = 2.2; //top of the intensity scale
var iBottom = -.1; //bottom of the intensity scale
var amplitude = 1; //1 arbitrary amplitude unit per um
var numSlits = 0; //the number of illuminated slits
var slitWidth; //the width of the slits in um
var wavelength; //the wavelength of the light in nm
var inspectionAngle; //the angle where the phasor stack is drawn
var calculator; //the Desmos calculator object
var expressions= []; //the list of desmos expressions
var loading = true; //a flag to identify when loading is taking place

//include the desmos .js file
var script = document.createElement('script');
script.src = "https://www.desmos.com/api/v0.8/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6";
document.head.appendChild(script)

function onLoad() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext('2d');
    
    //stick a click event handler to the canvas
    let canvasElem = document.querySelector("canvas");
    canvasElem.addEventListener("mousedown", function(e)
    {
        clickEvent(canvasElem, e);
    });
    
    //load calculator
    var elt = document.getElementById('calculator');
    calculator = Desmos.GraphingCalculator(elt, {expressionsCollapsed: true});
   
    loading = false;
    drawGraph();
}

function clickEvent(canvas, event) {
    loading = true;
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    //console.log("Coordinate x: " + x, 
    //            "Coordinate y: " + y);
    //drawGraph(tranX(x));
    
    //compute the inspection angle
    //setting the value of the element does not trigger a re-draw
    document.getElementById("inspectionAngle").value = tranX(x);
    loading = false;
    drawGraph();
}

function drawGraph(){ //inspectionAngle points to the spot where the phasor stack will be drawn
    if (loading) {return;}
    
    //TODO: validate input
    var structureUpdates = false; //used to detect changes to the scneario that require an update of the desmos graph
    var errorMsg = "";
    var fail = false;
    
    var numSlitsPrev = numSlits;
    numSlits = document.getElementById("numSlits").value;
    if (isNaN(numSlits)) { errorMsg = "Enter only positive integers"; fail = true;}
    else if (Number(numSlits) < 1 || Number(numSlits) != Math.floor(numSlits)) {errorMsg = "Enter only positive integers"; fail = true;}
    //else if (Number(numSlits) > 50) {errorMsg = "Warning: increasing the number of slits beyond 50 produces severe artifacts due to the pattern being finer than the separation between pixels" }
    else { errorMsg = "";}
    document.getElementById("numSlitsError").innerHTML = errorMsg;
    if (fail) {return;}
    if (numSlitsPrev != numSlits) {structureUpdates = true;}
    
    var slitWidthPrev = slitWidth;
    slitWidth = document.getElementById("slitWidth").value;
    if (isNaN(slitWidth)) { errorMsg = "Enter only numbers greater than zero"; fail = true;}
    else if (Number(slitWidth) <= 0) {errorMsg = "Enter only numbers greater than zero"; fail = true;}
    else { errorMsg = "";}
    document.getElementById("slitWidthError").innerHTML = errorMsg;
    if (fail) {return;}
    //if (slitWidthPrev != slitWidth) {structureUpdates = true;}

    var slitSeparationPrev = slitSeparation;
    slitSeparation = document.getElementById("slitSeparation").value
    if (isNaN(slitSeparation)) { errorMsg = "Enter only numbers greater than the width of the slits"; fail = true;}
    else if (Number(slitSeparation) <= Number(slitWidth)) {errorMsg = "Enter only numbers greater than the width of the slits"; fail = true;}
    else { errorMsg = "";}
    document.getElementById("slitSeparationError").innerHTML = errorMsg;
    if (fail) {return;}
    //if (slitSeparationPrev != slitSeparation) {structureUpdates = true;}

    var wavelengthPrev = wavelength;
    wavelength = document.getElementById("wavelength").value
    if (isNaN(wavelength)) { errorMsg = "Enter only numbers greater than 0"; fail = true;}
    else if (Number(wavelength) <= 0) {errorMsg = "Enter only numbers greater than 0"; fail = true;}
    else { errorMsg = "";}
    document.getElementById("wavelengthError").innerHTML = errorMsg;
    if (fail) {return;}
    //if (wavelengthPrev != wavelength) {structureUpdates = true;}

    var inspectionAnglePrev = inspectionAngle;
    inspectionAngle = document.getElementById("inspectionAngle").value
    if (isNaN(inspectionAngle)) { errorMsg = "Enter only numbers that lie between -" + xWindow + " and " + xWindow; fail = true;}
    else if (Number(inspectionAngle) < -xWindow || Number(inspectionAngle) > xWindow) {errorMsg = "Enter only numbers that lie between -" + xWindow + " and " + xWindow; fail = true;}
    else { errorMsg = "";}
    document.getElementById("inspectionAngleError").innerHTML = errorMsg;
    if (fail) {return;}
    //set the scale for the inspection angle element
    document.getElementById("inspectionAngle").step = (2*xWindow/canvas.width);
    document.getElementById("inspectionAngle").min = -0.999*xWindow;
    document.getElementById("inspectionAngle").max = xWindow;

    
    //measure the dimensions of the graph:
    var peakI = numSlits*amplitude*slitWidth;
    iTop = peakI*1.1;
    iBottom = -peakI*0.1;
    
    //clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
   //draw the x-axis
    ctx.beginPath();
    ctx.moveTo(tranA(-xWindow), tranI(0));
    ctx.lineTo(tranA(xWindow), tranI(0));
    ctx.stroke();
    ctx.font = "12px Arial";
    ctx.fillText(Math.round(-xWindow/(.02*Math.PI))/100+" pi", tranA(-xWindow/2), tranI(0)+14); 
    ctx.fillText(Math.round(xWindow/(.02*Math.PI))/100+" pi", tranA(xWindow/2), tranI(0)+14); 
    
    //draw the y-axis
    ctx.beginPath();
    ctx.moveTo(tranA(0), tranI(iTop));
    ctx.lineTo(tranA(0), tranI(iBottom));
    ctx.stroke();
    ctx.fillText(peakI + " amplitude (arbitrary units)", tranA(0), tranI(peakI)); 

    //draw the envalope curve
    var x = 0;
    var y = tranI(computeAmplitude(tranX(x)));
    ctx.strokeStyle = "lightgrey";
    ctx.beginPath();
    ctx.moveTo(x,y)
    for (x = 1; x < canvas.width; x++) {
        y = tranI(numSlits*envalopeLimit(tranX(x)));
        ctx.lineTo(x, y);
    }
    ctx.stroke();   
    
    //draw the amplitude curve for multi-slit interference
    var x = 0;
    var y = tranI(computeAmplitude(tranX(x)));
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(x,y)
    for (x = 1; x < canvas.width; x++) {
        y = tranI(computeAmplitude(tranX(x)));
        ctx.lineTo(x, y);
    }
    ctx.stroke();
    
    //draw the phasor stack
    var phasors = [];
    var sumOfAngles = 0;
    var envalopeLimitValue = envalopeLimit(inspectionAngle);
    for (var i = 0; i < numSlits; i++) {
        phasors.push({intensity: envalopeLimitValue, phase: i*inspectionAngle*(wavelength/slitSeparation)*2*Math.PI});
    }
    //orient phasors so that the stack points upwards
    var phasorSum = {x: 0, y: 0};
    for (var i = 0; i < phasors.length; i++) {
        phasorSum.x += phasors[i].intensity * Math.cos(phasors[i].phase);
        phasorSum.y += phasors[i].intensity * Math.sin(phasors[i].phase);
    }
    var correctionAngle = Math.atan(phasorSum.y/phasorSum.x);
    //Math.atan only returns angles in the second and third quadrant, so correct for cases on the other side:
    if (phasorSum.x < 0) { correctionAngle += Math.PI;}
    correctionAngle = Math.PI/2 - correctionAngle;
    //apply correction to all phasors
    for (var i = 0; i < phasors.length; i++) {
        phasors[i].phase += correctionAngle;
    }
    //draw the phasor stack
    ctx.beginPath();
    var point = {x: tranA(inspectionAngle), y: tranI(0)};
    ctx.moveTo(point.x, point.y);
    for (var i = 0; i < phasors.length; i++) {
        point.x += tranItoPx(phasors[i].intensity * Math.cos(phasors[i].phase));
        point.y -= tranItoPx(phasors[i].intensity * Math.sin(phasors[i].phase));
        ctx.lineTo(Math.floor(point.x), Math.floor(point.y));
    }
    ctx.stroke();
    
    //TODO: replace structure updates with just an update for number of slits. slitwidth, slitseperation, and wavelength can be expressions in desmos to speed up shifting graphs
    //if the structure of the scenario has changed, an updated to the desmos graph is required
    if (structureUpdates) {
        //resize the calculator
        calculator.setMathBounds({
            left: -1*2*Math.PI,
            right: 2*Math.PI,
            bottom: -1*peakI,
            top: peakI
        });
        //remove any old expressions:
        calculator.removeExpressions(expressions);
        //compute the new expressions:
        expressions = [];
        expressions.push({id:"theta", latex:"t="+inspectionAngle});
        expressions.push({id:"wavelength", latex:"l="+wavelength});
        expressions.push({id:"d", latex:"d="+slitSeparation});
        expressions.push({id:"b", latex:"b="+slitWidth});
        var finalExpression = 'A = 0';
        //var Aprime = Math.floor(100*envalopeLimit(inspectionAngle))/100;
        for (var i = 0; i < numSlits; i++) {
            //var phi = Math.floor(100*(i*(wavelength/slitSeparation)*2*Math.PI))/100;
            var phiNumber = Math.floor(100*i*2*Math.PI)/100;
            var phiString = phiNumber + '*l/d'
                //from: http://hyperphysics.phy-astr.gsu.edu/hbase/phyopt/sinint.html
                //var delta = Math.floor(100*Math.PI*slitWidth*1000/wavelength)/100;                
                var delta = '3.14*1000*b*sin(t)/l';
            expressions.push({id:'slit'+i, latex:'A_{'+i+'}='+amplitude+'*b*sin('+delta+')*sin(x+t*'+phiString+')/('+delta+')'}); 
            finalExpression += '+A_{'+i+'}';
        }
        expressions.push({id: "finalExpression", latex: finalExpression});
        //fill in the new expressions into demos
        calculator.setExpressions(expressions);
    } //otherwise, just update the inspection angle 
    else {
        if (slitWidthPrev != slitWidth) {calculator.setExpression({id:"b", latex:"b="+slitWidth});}
        if (slitSeparationPrev != slitSeparation) {calculator.setExpression({id:"d", latex:"d="+slitSeparation});}
        if (wavelengthPrev != wavelength) {calculator.setExpression({id:"wavelength", latex:"l="+wavelength});}
        if (inspectionAnglePrev != inspectionAngle) {calculator.setExpression({id:"theta", latex:"t="+inspectionAngle});}
        
        //calculator.setExpression({id:"theta", latex:"t="+inspectionAngle});
    }
}

//compute an amplitude at a given angle
function computeAmplitude(angle) {
    var i;
    var xSum = 0;
    var ySum = 0;
    var localAmplitude = envalopeLimit(angle);
    for (i = 0; i < numSlits; i++) {
        xSum += localAmplitude*Math.cos(i*angle*(wavelength/slitSeparation)*2*Math.PI);
        ySum += localAmplitude*Math.sin(i*angle*(wavelength/slitSeparation)*2*Math.PI);
    } 
    return Math.sqrt(xSum*xSum + ySum*ySum);
}

//compute the envalope amplitude for a single slit
function envalopeLimit(angle) {
    //from: http://hyperphysics.phy-astr.gsu.edu/hbase/phyopt/sinint.html
    var delta = Math.PI*slitWidth*1000*Math.sin(angle)/wavelength;
    return Math.abs(amplitude*slitWidth*Math.sin(delta)/delta);
}

//turn an angle into an x-coordinate
function tranA(angle) {
    var x = (canvas.width / 2) * (1 + angle / xWindow);
    return Math.floor(x);   
}


//turn an intensity into a y-coordinate
function tranI(i) {
    var y = (canvas.height/(iTop-iBottom))*(iTop - i);
    return Math.floor(y);
}

//turn a angle/intensity coordinate pair into an x/y coordinate pair
function tranC(angle, i) {
    return {x: tranA(angle), y: tranI(i)};
}
    
//turn a x coordinate into an angle
function tranX(x){
    var angle = (x/canvas.width)*2*xWindow - xWindow;
    return angle;
}

//turn an intensity into a raw length in pixels, unrounded
function tranItoPx(i) {
    return i * canvas.height / (iTop - iBottom);    
}

