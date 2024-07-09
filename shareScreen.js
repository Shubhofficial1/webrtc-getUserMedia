const shareScreen = async () => {
  console.log("Screen Share started");

  const options = {
    video: true,
    audio: true,
    surfaceSwitching: "include",
  };

  try {
    mediaStream = await navigator.mediaDevices.getDisplayMedia(options);
  } catch (err) {
    console.log(err);
  }
  changeButtons([
    "green",
    "green",
    "blue",
    "blue",
    "green",
    "green",
    "green",
    "green",
  ]);
};
