let startTime, endTime, running = false, duration = 0;

function Start() {
    if (running)
        return;
    running = true;
    startTime = new Date().getTime();
}

function Stop() {
    if (!running)
        return;
    running = false;
    endTime = new Date().getTime();
    duration += (endTime - startTime) / 1000;
}

function Reset() {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
}

function GetDuration() {
    return duration;
}


function GetCurrentTime(){
    return new Date();
}

// Export the function to public
module.exports.GetCurrentTime = GetCurrentTime;
module.exports.GetDuration = GetDuration;
module.exports.Start = Start;
module.exports.Stop = Stop;
module.exports.Reset = Reset;