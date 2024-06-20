import { Disclosure } from "@headlessui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";
import { useConnect } from "wagmi";
import { injected } from "wagmi/connectors";

export default function Header() {
  const [hideConnectBtn, setHideConnectBtn] = useState(false);
  const { connect } = useConnect();

  useEffect(() => {
    if (window.ethereum && window.ethereum.isMiniPay) {
      setHideConnectBtn(true);
      connect({ connector: injected({ target: "metaMask" }) });
    }
  }, []);

  return (
    <Disclosure as="nav" className="">
      <>
        <div className="">
          <div className="">
            <div className="">
              {!hideConnectBtn && (
                <ConnectButton
                  showBalance={{
                    smallScreen: true,
                    largeScreen: false,
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </>
    </Disclosure>
  );
}
