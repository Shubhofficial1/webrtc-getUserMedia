let mediaRecorder;
let recordedBlobs;

const startRecording = () => {
  if (!stream) {
    alert("No Current Feed");
    return;
  }
  // TODO : make both work
  // We can do like below if we want screen record functionality :
  // if (!mediaStream) {
  //   alert("No Current Feed");
  //   return;
  // }
  console.log("Started Recording");
  recordedBlobs = []; // An array to hold the blobs for playback
  mediaRecorder = new MediaRecorder(stream); // Initialized media recorder
  // mediaRecorder = new MediaRecorder(mediaStream); // Initialized like this for screen share
  mediaRecorder.ondataavailable = (e) => {
    // On data available , it will run (when stream ends,or stopped or we specifically ask)
    console.log("Data is available for the media recorder");
    recordedBlobs.push(e.data);
  };
  mediaRecorder.start();
  changeButtons([
    "green",
    "green",
    "blue",
    "blue",
    "green",
    "blue",
    "grey",
    "blue",
  ]);
};

const stopRecording = () => {
  if (!mediaRecorder) {
    alert("Please Record before stopping");
    return;
  }
  console.log("Stopped Recording");
  mediaRecorder.stop();
  changeButtons([
    "green",
    "green",
    "blue",
    "blue",
    "green",
    "green",
    "blue",
    "blue",
  ]);
};

const playRecording = () => {
  if (!recordedBlobs) {
    alert("No Recording Saved");
    return;
  }
  console.log("Play Recording");
  const superBuffer = new Blob(recordedBlobs); // superBuffer is a super buffer of the array of blobs
  const recorderVideoEl = document.querySelector("#other-video");
  recorderVideoEl.src = window.URL.createObjectURL(superBuffer);
  recorderVideoEl.controls = true;
  recorderVideoEl.play();
  changeButtons([
    "green",
    "green",
    "blue",
    "blue",
    "green",
    "green",
    "green",
    "blue",
  ]);
};
