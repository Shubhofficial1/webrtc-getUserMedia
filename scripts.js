const videoEl = document.querySelector("#my-video");

let stream = null;

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
