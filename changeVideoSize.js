const supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
console.log(supportedConstraints);

const changeVideoSize = () => {
  stream.getTracks().forEach((track) => {
    const capabilities = track.getCapabilities();
    console.log(capabilities);
  });
};
