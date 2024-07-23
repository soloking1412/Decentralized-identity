import { ethers } from "ethers";
import identiFi from "./identiFi.json";

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;
  if (ethereum) {
    const signer = provider.getSigner();
    const contractReader = new ethers.Contract(
      "0x69b532335ebcd98301A74A9c6e04accBe6d84B35",
      identiFi.abi,
      signer
    );

    return contractReader;
  }
};
