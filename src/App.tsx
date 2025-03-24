import { useEffect, useState } from 'react'
import { Spin, message, } from "antd";
import './App.css'
import axios from "axios";

const App = () => {
  const BASEURL = import.meta.env.VITE_BASEURL;
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const getApiData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASEURL}/worldbook/items/`);
      const data = response?.data;
      setData(data);
    } catch (error) {
      message.error("Unable to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getApiData();

    const updateHeight = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div className="app" style={{ height: `${screenHeight}px` }}>
      <div className="desktop" style={{ height: `${screenHeight}px` }}>
        <div className="first-container-desktop">
          <img src="/WB-MOBILE-VERSION_0018_Globe-Top.png" alt="Top Globe" className="top-globe-desktop" />
          <img src="/WB-MOBILE-VERSION_0017_Logo-main.png" alt="World Book logo" className="logo-desktop" />
          <img src="/WB-Site_desktop-view_0015_Flare.png" alt="flare" className="flare-desktop" />
        </div>
        <div className="second-container-desktop">
          <img src="/WB-Site_desktop-view_0016_model-back.png" alt="Background" className="second-background-desktop" />
          <img src="/WB-Site_desktop-view_0014_SAME-NAME,-SAME-TRUST-in-A-NEW-AVTAR-!.png" alt="Same Name Text" className="same-name-text-desktop" />
          <img src="/switch-to-Wb-button_1.gif" alt="Switch to World Book" className="switch-btn-desktop" />
          <img src="/WB-MOBILE-VERSION_0013_Moderl.png" alt="Person" className="person-desktop" />
        </div>
        <div className="third-container-desktop">
          <img src="/WB-MOBILE-VERSION_0012_Layer-23.png" alt="Background" className="third-background-desktop" />
          <img src="/WB-Site_desktop-view_0010_Globe.png" alt="bottom-globe" className="bottom-globe-desktop" />
          <img src="/WB-MOBILE-VERSION_0006_PICK-Your-Site-!.png" alt="pick-your-sited" className="pick-your-site-desktop" />
          <img src="/WB-MOBILE-VERSION_0005_Choose-your-arena,where-legends-rise-and-possibilities-are-infi.png" alt="description" className="description-desktop" />
          <div className="website-container-desktop">
            {loading ? (
              <Spin size="large" />
            ) : (
              <div className='website-container-row-desktop'>
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="website-container-col-desktop"
                    style={{ marginLeft: "0" }}
                  >
                    <a
                      href={item.link}
                      className="box-desktop"
                      onClick={(e) => {
                        e.preventDefault();
                        const finalLink = item.link.startsWith("http") ? item.link : `https://${item.link}`;
                        window.open(finalLink, "_blank", "noopener,noreferrer");
                      }}
                    >
                      <img
                        src={`data:image/png;base64,${item.image_base64}`}
                        alt={`Item ${index + 1}`}
                        className="website-container-image-desktop"
                      />
                    </a>

                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="wa-and-support-desktop">
            <a className="wa-desktop">
              <img src="/WB-MOBILE-VERSION_0001_WA-button.png" alt="WA" className="wa-img-desktop" />
            </a>
            <div className="support-desktop">
              <img src="/WB-MOBILE-VERSION_0000_ps-button.png" alt="Support" className="support-img-desktop" />
            </div>
          </div>
        </div>
        <div className="footer-desktop">
          <img src="/WB-MOBILE-VERSION_0004_18+-Only-PLAY-WISELY..png" alt="18+" className="eighteen-plus-desktop" />
          <img src="/WB-MOBILE-VERSION_0002_SECURED-PAYMENT-SYSTEM.png" alt="secure-payment" className="secure-payment-desktop" />
          <img src="/WB-MOBILE-VERSION_0003_DMCA--PROTECTION.png" alt="dmca-protection" className="dmca-protection-desktop" />
        </div>
      </div>
      <div className="mobile" style={{ height: `${screenHeight}px` }}>
        <div className="first-container">
          <img src="/WB-MOBILE-VERSION_0018_Globe-Top.png" alt="Top Globe" className="top-globe" />
          <img src="/WB-MOBILE-VERSION_0017_Logo-main.png" alt="World Book logo" className="logo" />
          <img src="/WB-MOBILE-VERSION_0015_Flare.png" alt="flare" className="flare" />
        </div>
        <div className="second-container">
          <img src="/WB-MOBILE-VERSION_0016_Base.png" alt="Background" className="second-background" />
          <img src="/WB-MOBILE-VERSION_0014_SAME-NAME-SAME-TRUST-in-A-NEW--AVTAR-!.png" alt="Same Name Text" className="same-name-text" />
          <img src="/switch-to-Wb-button_1.gif" alt="Switch to World Book" className="switch-btn" />
          <img src="/WB-MOBILE-VERSION_0013_Moderl.png" alt="Person" className="person" />
        </div>
        <div className="third-container">
          <img src="/WB-MOBILE-VERSION_0012_Layer-23.png" alt="Background" className="third-background" />
          <img src="/WB-MOBILE-VERSION_0010_globe-bottom.png" alt="bottom-globe" className="bottom-globe" />
          <img src="/WB-MOBILE-VERSION_0006_PICK-Your-Site-!.png" alt="pick-your-sited" className="pick-your-site" />
          <img src="/WB-MOBILE-VERSION_0005_Choose-your-arena,where-legends-rise-and-possibilities-are-infi.png" alt="description" className="description" />
          <div className="website-container">
            {loading ? (
              <Spin size="large" />
            ) : (
              <div className='website-container-row'>
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="website-container-col"
                    style={{ marginTop: index === 1 ? "-9%" : index === 2 ? "-18%" : "0" }}
                  >
                    <a
                      href={item.link}
                      className="box"
                      onClick={(e) => {
                        e.preventDefault();
                        const finalLink = item.link.startsWith("http") ? item.link : `https://${item.link}`;
                        window.open(finalLink, "_blank", "noopener,noreferrer");
                      }}
                    >
                      <img
                        src={`data:image/png;base64,${item.image_base64}`}
                        alt={`Item ${index + 1}`}
                        className="website-container-image"
                      />
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="wa-and-support">
            <a className="wa">
              <img src="/WB-MOBILE-VERSION_0001_WA-button.png" alt="WA" className="wa-img" />
            </a>
            <div className="support">
              <img src="/WB-MOBILE-VERSION_0000_ps-button.png" alt="Support" className="support-img" />
            </div>
          </div>
        </div>
        <div className="footer">
          <img src="/WB-MOBILE-VERSION_0004_18+-Only-PLAY-WISELY..png" alt="18+" className="eighteen-plus" />
          <img src="/WB-MOBILE-VERSION_0002_SECURED-PAYMENT-SYSTEM.png" alt="secure-payment" className="secure-payment" />
          <img src="/WB-MOBILE-VERSION_0003_DMCA--PROTECTION.png" alt="dmca-protection" className="dmca-protection" />
        </div>
      </div>
    </div>
  )
}

export default App