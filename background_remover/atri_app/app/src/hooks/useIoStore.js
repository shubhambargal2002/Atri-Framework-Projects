import create from "zustand";

const useIoStore = create((set) => {
  return {
  "Home": {
    "Upload1": {
      "io": {
        "files": {
          "type": "files",
          "mode": "upload"
        }
      }
    },
    "Upload2": {
      "io": {
        "files": {
          "type": "files",
          "mode": "upload"
        }
      }
    }
  }
}});

export default useIoStore;
