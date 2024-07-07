let stream = null;

const constraints = {
  audio: true,
  video: true,
};

const getMicAndMicrophone = async (e) => {
  try {
    stream = await navigator.mediaDevices.getUserMedia(constraints);
    console.log(stream);
  } catch (err) {
    console.log("User denied permission to constraints");
  }
};

document
  .querySelector("#share")
  .addEventListener("click", (e) => getMicAndMicrophone(e));
