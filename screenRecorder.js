let mediaRecorder;
let recordedBlobs;

const startRecording = () => {
  console.log("Started Recording");
  recordedBlobs = []; // An array to hold the blobs for playback
  mediaRecorder = new MediaRecorder(stream); // Initialized media recorder
  mediaRecorder.ondataavailable = (e) => {
    // On data available , it will run (when stream ends,or stopped or we specifically ask)
    console.log("Data is available for the media recorder");
    recordedBlobs.push(e.data);
  };
  mediaRecorder.start();
};

const stopRecording = () => {
  console.log("Stopped Recording");
  mediaRecorder.stop();
};

const playRecording = () => {
  console.log("Play Recording");
  const superBuffer = new Blob(recordedBlobs); // superBuffer is a super buffer of the array of blobs
  const recorderVideoEl = document.querySelector("#other-video");
  recorderVideoEl.src = window.URL.createObjectURL(superBuffer);
  recorderVideoEl.controls = true;
  recorderVideoEl.play();
};
