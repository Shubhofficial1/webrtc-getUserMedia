const audioinput = document.querySelector("#audio-input");
const audiooutput = document.querySelector("#audio-output");
const videoinput = document.querySelector("#video-input");

const getDevices = async () => {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    console.log(devices);
    devices.forEach((device) => {
      const option = document.createElement("option");
      option.value = device.deviceId;
      option.text = device.label;
      if (device.kind === "audioinput") {
        audioinput.appendChild(option);
      } else if (device.kind === "audiooutput") {
        audiooutput.appendChild(option);
      } else if (device.kind === "videoinput") {
        videoinput.appendChild(option);
      } else {
        console.log("Unsupported Device" + device);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

const changeAudioInput = async (e) => {
  // Changed audio input !!
  const deviceId = e.target.value;
  const newConstraints = {
    audio: { deviceId: { exact: deviceId } },
    video: true,
  };
  try {
    stream = await navigator.mediaDevices.getUserMedia(newConstraints);
    console.log(stream);
    const audioTracks = stream.getAudioTracks();
    console.log(audioTracks);
  } catch (err) {
    console.log(err);
  }
};

const changeAudioOutput = async (e) => {
  await videoEl.setSinkId(e.target.value);
  console.log("Changed Audio Output");
};

const changeVideo = async (e) => {
  // Changed video input !!
  const deviceId = e.target.value;
  const newConstraints = {
    audio: true,
    video: { deviceId: { exact: deviceId } },
  };
  try {
    stream = await navigator.mediaDevices.getUserMedia(newConstraints);
    console.log(stream);
    const videoTracks = stream.getVideoTracks();
    console.log(videoTracks);
  } catch (err) {
    console.log(err);
  }
};

getDevices();
