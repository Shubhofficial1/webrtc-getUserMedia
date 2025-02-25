// const supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
// console.log(supportedConstraints);

const changeVideoSize = () => {
  //   Contains both audio track & video track
  //   stream.getTracks().forEach((track) => {
  //     const capabilities = track.getCapabilities();
  //     console.log(capabilities);
  //   });

  stream.getVideoTracks().forEach((track) => {
    // track is a video track , we can get it's capabilities from .getCapabilities()
    // or we can apply new constraints with applyConstraints()
    const capabilities = track.getCapabilities();
    const height = document.querySelector("#vid-height").value;
    const width = document.querySelector("#vid-width").value;
    const videoConstraints = {
      height: {
        exact:
          height < capabilities.height.max ? height : capabilities.height.max,
      },
      width: {
        exact: width < capabilities.width.max ? width : capabilities.width.max,
      },
    };
    track.applyConstraints(videoConstraints);
  });
};
