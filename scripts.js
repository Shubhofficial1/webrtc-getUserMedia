const videoEl = document.querySelector("#my-video");

let stream = null; // Initialized stream
let mediaStream = null; // Initialized mediaSteam for screen sharing feature

const constraints = {
  audio: true,
  video: true,
};

const getMicAndMicrophone = async (e) => {
  try {
    stream = await navigator.mediaDevices.getUserMedia(constraints);
    changeButtons([
      "green",
      "blue",
      "blue",
      "grey",
      "grey",
      "grey",
      "grey",
      "grey",
    ]);
    console.log(stream);
  } catch (err) {
    console.log("User denied permission to constraints");
    console.log(err);
  }
};

const showMyFeed = (e) => {
  console.log("ShowMyFeed is working");
  if (!stream) {
    alert("Stream still loading...");
    return;
  }
  videoEl.srcObject = stream;
  const tracks = stream.getTracks();
  console.log(tracks);
  changeButtons([
    "green",
    "green",
    "blue",
    "blue",
    "blue",
    "grey",
    "grey",
    "blue",
  ]);
};

const stopMyFeed = (e) => {
  console.log("StopMyFeed is working");
  if (!stream) {
    alert("Stream still loading...");
    return;
  }
  const tracks = stream.getTracks();
  tracks.forEach((track) => {
    console.log(track);
    track.stop(); // disassociates the track from the source.
  });
  changeButtons([
    "blue",
    "grey",
    "grey",
    "grey",
    "grey",
    "grey",
    "grey",
    "grey",
  ]);
};

document
  .querySelector("#share")
  .addEventListener("click", (e) => getMicAndMicrophone(e));
document
  .querySelector("#show-video")
  .addEventListener("click", (e) => showMyFeed(e));
document
  .querySelector("#stop-video")
  .addEventListener("click", (e) => stopMyFeed(e));
document
  .querySelector("#change-size")
  .addEventListener("click", (e) => changeVideoSize(e));
document
  .querySelector("#start-record")
  .addEventListener("click", (e) => startRecording(e));
document
  .querySelector("#stop-record")
  .addEventListener("click", (e) => stopRecording(e));
document
  .querySelector("#play-record")
  .addEventListener("click", (e) => playRecording(e));
document
  .querySelector("#share-screen")
  .addEventListener("click", (e) => shareScreen(e));
