import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Button as Button2 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Input as Input1 } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image2 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useFlex18Cb, useFlex17Cb, useFlex14Cb, useFlex15Cb, useFlex16Cb, useFlex25Cb, useFlex24Cb, useButton9Cb, useInput4Cb, useInput6Cb, useTextBox10Cb, useTextBox11Cb, useImage2Cb, useTextBox12Cb, useTextBox13Cb, useTextBox18Cb, useButton11Cb, useButton12Cb } from "../page-cbs/Login";
import "../page-css/Login.css";
import "../custom/Login";

export default function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex18Props = useStore((state)=>state["Login"]["Flex18"]);
const Flex18IoProps = useIoStore((state)=>state["Login"]["Flex18"]);
const Flex18Cb = useFlex18Cb()
const Flex17Props = useStore((state)=>state["Login"]["Flex17"]);
const Flex17IoProps = useIoStore((state)=>state["Login"]["Flex17"]);
const Flex17Cb = useFlex17Cb()
const Flex14Props = useStore((state)=>state["Login"]["Flex14"]);
const Flex14IoProps = useIoStore((state)=>state["Login"]["Flex14"]);
const Flex14Cb = useFlex14Cb()
const Flex15Props = useStore((state)=>state["Login"]["Flex15"]);
const Flex15IoProps = useIoStore((state)=>state["Login"]["Flex15"]);
const Flex15Cb = useFlex15Cb()
const Flex16Props = useStore((state)=>state["Login"]["Flex16"]);
const Flex16IoProps = useIoStore((state)=>state["Login"]["Flex16"]);
const Flex16Cb = useFlex16Cb()
const Flex25Props = useStore((state)=>state["Login"]["Flex25"]);
const Flex25IoProps = useIoStore((state)=>state["Login"]["Flex25"]);
const Flex25Cb = useFlex25Cb()
const Flex24Props = useStore((state)=>state["Login"]["Flex24"]);
const Flex24IoProps = useIoStore((state)=>state["Login"]["Flex24"]);
const Flex24Cb = useFlex24Cb()
const Button9Props = useStore((state)=>state["Login"]["Button9"]);
const Button9IoProps = useIoStore((state)=>state["Login"]["Button9"]);
const Button9Cb = useButton9Cb()
const Input4Props = useStore((state)=>state["Login"]["Input4"]);
const Input4IoProps = useIoStore((state)=>state["Login"]["Input4"]);
const Input4Cb = useInput4Cb()
const Input6Props = useStore((state)=>state["Login"]["Input6"]);
const Input6IoProps = useIoStore((state)=>state["Login"]["Input6"]);
const Input6Cb = useInput6Cb()
const TextBox10Props = useStore((state)=>state["Login"]["TextBox10"]);
const TextBox10IoProps = useIoStore((state)=>state["Login"]["TextBox10"]);
const TextBox10Cb = useTextBox10Cb()
const TextBox11Props = useStore((state)=>state["Login"]["TextBox11"]);
const TextBox11IoProps = useIoStore((state)=>state["Login"]["TextBox11"]);
const TextBox11Cb = useTextBox11Cb()
const Image2Props = useStore((state)=>state["Login"]["Image2"]);
const Image2IoProps = useIoStore((state)=>state["Login"]["Image2"]);
const Image2Cb = useImage2Cb()
const TextBox12Props = useStore((state)=>state["Login"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["Login"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const TextBox13Props = useStore((state)=>state["Login"]["TextBox13"]);
const TextBox13IoProps = useIoStore((state)=>state["Login"]["TextBox13"]);
const TextBox13Cb = useTextBox13Cb()
const TextBox18Props = useStore((state)=>state["Login"]["TextBox18"]);
const TextBox18IoProps = useIoStore((state)=>state["Login"]["TextBox18"]);
const TextBox18Cb = useTextBox18Cb()
const Button11Props = useStore((state)=>state["Login"]["Button11"]);
const Button11IoProps = useIoStore((state)=>state["Login"]["Button11"]);
const Button11Cb = useButton11Cb()
const Button12Props = useStore((state)=>state["Login"]["Button12"]);
const Button12IoProps = useIoStore((state)=>state["Login"]["Button12"]);
const Button12Cb = useButton12Cb()

  return (<>
  <Flex2 className="p-Login Flex25 bpt" {...Flex25Props} {...Flex25Cb} {...Flex25IoProps}>
<TextBox2 className="p-Login TextBox18 bpt" {...TextBox18Props} {...TextBox18Cb} {...TextBox18IoProps}/>
<Flex2 className="p-Login Flex24 bpt" {...Flex24Props} {...Flex24Cb} {...Flex24IoProps}>
<Button2 className="p-Login Button11 bpt" {...Button11Props} {...Button11Cb} {...Button11IoProps}/>
<Button2 className="p-Login Button12 bpt" {...Button12Props} {...Button12Cb} {...Button12IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Login Flex18 bpt" {...Flex18Props} {...Flex18Cb} {...Flex18IoProps}>
<Flex2 className="p-Login Flex17 bpt" {...Flex17Props} {...Flex17Cb} {...Flex17IoProps}>
<Flex2 className="p-Login Flex16 bpt" {...Flex16Props} {...Flex16Cb} {...Flex16IoProps}>
<TextBox2 className="p-Login TextBox13 bpt" {...TextBox13Props} {...TextBox13Cb} {...TextBox13IoProps}/>
<TextBox2 className="p-Login TextBox12 bpt" {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
</Flex2>
<Flex2 className="p-Login Flex15 bpt" {...Flex15Props} {...Flex15Cb} {...Flex15IoProps}>
<Image2 className="p-Login Image2 bpt" {...Image2Props} {...Image2Cb} {...Image2IoProps}/>
</Flex2>
<Input1 className="p-Login Input6 bpt" {...Input6Props} {...Input6Cb} {...Input6IoProps}/>
<Input1 className="p-Login Input4 bpt" {...Input4Props} {...Input4Cb} {...Input4IoProps}/>
<Button2 className="p-Login Button9 bpt" {...Button9Props} {...Button9Cb} {...Button9IoProps}/>
<Flex2 className="p-Login Flex14 bpt" {...Flex14Props} {...Flex14Cb} {...Flex14IoProps}>
<TextBox2 className="p-Login TextBox10 bpt" {...TextBox10Props} {...TextBox10Cb} {...TextBox10IoProps}/>
<TextBox2 className="p-Login TextBox11 bpt" {...TextBox11Props} {...TextBox11Cb} {...TextBox11IoProps}/>
</Flex2>
</Flex2>
</Flex2>
  </>);
}
