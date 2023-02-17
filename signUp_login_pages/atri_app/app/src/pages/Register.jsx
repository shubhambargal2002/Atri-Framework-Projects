import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useFlex9Cb, useFlex10Cb, useFlex11Cb, useFlex12Cb, useFlex13Cb, useInput1Cb, useInput2Cb, useInput3Cb, useButton8Cb, useTextBox6Cb, useTextBox7Cb, useImage1Cb, useTextBox8Cb, useTextBox9Cb } from "../page-cbs/Register";
import "../page-css/Register.css";
import "../custom/Register";

export default function Register() {
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

  const Flex9Props = useStore((state)=>state["Register"]["Flex9"]);
const Flex9IoProps = useIoStore((state)=>state["Register"]["Flex9"]);
const Flex9Cb = useFlex9Cb()
const Flex10Props = useStore((state)=>state["Register"]["Flex10"]);
const Flex10IoProps = useIoStore((state)=>state["Register"]["Flex10"]);
const Flex10Cb = useFlex10Cb()
const Flex11Props = useStore((state)=>state["Register"]["Flex11"]);
const Flex11IoProps = useIoStore((state)=>state["Register"]["Flex11"]);
const Flex11Cb = useFlex11Cb()
const Flex12Props = useStore((state)=>state["Register"]["Flex12"]);
const Flex12IoProps = useIoStore((state)=>state["Register"]["Flex12"]);
const Flex12Cb = useFlex12Cb()
const Flex13Props = useStore((state)=>state["Register"]["Flex13"]);
const Flex13IoProps = useIoStore((state)=>state["Register"]["Flex13"]);
const Flex13Cb = useFlex13Cb()
const Input1Props = useStore((state)=>state["Register"]["Input1"]);
const Input1IoProps = useIoStore((state)=>state["Register"]["Input1"]);
const Input1Cb = useInput1Cb()
const Input2Props = useStore((state)=>state["Register"]["Input2"]);
const Input2IoProps = useIoStore((state)=>state["Register"]["Input2"]);
const Input2Cb = useInput2Cb()
const Input3Props = useStore((state)=>state["Register"]["Input3"]);
const Input3IoProps = useIoStore((state)=>state["Register"]["Input3"]);
const Input3Cb = useInput3Cb()
const Button8Props = useStore((state)=>state["Register"]["Button8"]);
const Button8IoProps = useIoStore((state)=>state["Register"]["Button8"]);
const Button8Cb = useButton8Cb()
const TextBox6Props = useStore((state)=>state["Register"]["TextBox6"]);
const TextBox6IoProps = useIoStore((state)=>state["Register"]["TextBox6"]);
const TextBox6Cb = useTextBox6Cb()
const TextBox7Props = useStore((state)=>state["Register"]["TextBox7"]);
const TextBox7IoProps = useIoStore((state)=>state["Register"]["TextBox7"]);
const TextBox7Cb = useTextBox7Cb()
const Image1Props = useStore((state)=>state["Register"]["Image1"]);
const Image1IoProps = useIoStore((state)=>state["Register"]["Image1"]);
const Image1Cb = useImage1Cb()
const TextBox8Props = useStore((state)=>state["Register"]["TextBox8"]);
const TextBox8IoProps = useIoStore((state)=>state["Register"]["TextBox8"]);
const TextBox8Cb = useTextBox8Cb()
const TextBox9Props = useStore((state)=>state["Register"]["TextBox9"]);
const TextBox9IoProps = useIoStore((state)=>state["Register"]["TextBox9"]);
const TextBox9Cb = useTextBox9Cb()

  return (<>
  <Flex1 className="p-Register Flex9 bpt" {...Flex9Props} {...Flex9Cb} {...Flex9IoProps}>
<Flex1 className="p-Register Flex10 bpt" {...Flex10Props} {...Flex10Cb} {...Flex10IoProps}>
<Flex1 className="p-Register Flex11 bpt" {...Flex11Props} {...Flex11Cb} {...Flex11IoProps}>
<TextBox1 className="p-Register TextBox6 bpt" {...TextBox6Props} {...TextBox6Cb} {...TextBox6IoProps}/>
<TextBox1 className="p-Register TextBox7 bpt" {...TextBox7Props} {...TextBox7Cb} {...TextBox7IoProps}/>
</Flex1>
<Flex1 className="p-Register Flex12 bpt" {...Flex12Props} {...Flex12Cb} {...Flex12IoProps}>
<Image1 className="p-Register Image1 bpt" {...Image1Props} {...Image1Cb} {...Image1IoProps}/>
</Flex1>
<Input className="p-Register Input1 bpt" {...Input1Props} {...Input1Cb} {...Input1IoProps}/>
<Input className="p-Register Input2 bpt" {...Input2Props} {...Input2Cb} {...Input2IoProps}/>
<Input className="p-Register Input3 bpt" {...Input3Props} {...Input3Cb} {...Input3IoProps}/>
<Button1 className="p-Register Button8 bpt" {...Button8Props} {...Button8Cb} {...Button8IoProps}/>
<Flex1 className="p-Register Flex13 bpt" {...Flex13Props} {...Flex13Cb} {...Flex13IoProps}>
<TextBox1 className="p-Register TextBox9 bpt" {...TextBox9Props} {...TextBox9Cb} {...TextBox9IoProps}/>
<TextBox1 className="p-Register TextBox8 bpt" {...TextBox8Props} {...TextBox8Cb} {...TextBox8IoProps}/>
</Flex1>
</Flex1>
</Flex1>
  </>);
}
