import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper-bundle.min.css";
import "react-modal-video/css/modal-video.min.css";
import "../assets/css/animate.min.css";
import "../assets/css/gfp-icons.css";
import "../assets/css/fontawesome-all.min.css";
import "../assets/css/main.css";
import "swiper/swiper-bundle.min.css";
import { Web3Provider } from '@ethersproject/providers'
import { Web3ReactProvider } from '@web3-react/core'


function getLibrary(provider) {
  return new Web3Provider(provider); // this will vary according to whether you use e.g. ethers or web3.js
}

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
        <Component {...pageProps} />
    </Web3ReactProvider>  
  );
}
