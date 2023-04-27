import React, { FC, useEffect, useState, useRef } from "react";
import { Button } from "antd";
import { PushpinOutlined, ShoppingOutlined } from "@ant-design/icons";
import { useAppSelector, useAppDispatch } from "src/State/hooks";
import { render } from "@testing-library/react";
import { addPin, removePin } from "src/State/Slices/pinsSlice";
import pinBtnActive from "src/icons/pin_active.png";
import pinBtnDisactive from "src/icons/pin_disactive.png";

interface PinButtonI {
  disabled?: boolean;
  style?: React.CSSProperties;
  curItem: string;
  type: string;
}

export const PinButton: FC<PinButtonI> = ({
  disabled,
  style,
  curItem,
  type,
}) => {
  const items = useAppSelector((state) => state.pins);
  const iconStyle = {
    fontSize: 12,
  };
  const [icon, setIcon] = useState<JSX.Element>();
  const [isItemPinned, setIsItemPinned] = useState<boolean>();
  const dispatch = useAppDispatch();
  const pinObj = {
    key: type,
    item: curItem,
  };

  useEffect(() => {
    /* Object.entries(items).some(([key, pins]) => { 
      
        if (pins.includes(curItem)) {   
          setIcon(<ShoppingOutlined style={iconStyle} disabled={disabled} />)
          setIsItemPinned(true)
         
        } 
       else  {
          setIcon(<PushpinOutlined style={iconStyle} disabled={disabled} />)
        }
    }) */
    if (Object.entries(items).some(([key, pins]) => pins.includes(curItem))) {
      setIcon(<img style={{ width: 16, height: 16 }} src={pinBtnActive} />);
      setIsItemPinned(true);
    } else {
      setIcon(<img style={{ width: 16, height: 16 }} src={pinBtnDisactive} />);
      setIsItemPinned(false);
    }
  }, [items, isItemPinned]);

  const pinItem = () => {
    dispatch(addPin(pinObj));
    setIsItemPinned(true);
    setIcon(<img style={{ width: 16, height: 16 }} src={pinBtnActive} />);
  };
  const unpinItem = () => {
    dispatch(removePin(curItem));
    setIsItemPinned(false);
    setIcon(<img style={{ width: 16, height: 16 }} src={pinBtnDisactive} />);
  };
  const handlePin = () => {
    console.log(isItemPinned);
    isItemPinned ? unpinItem() : pinItem();
  };
  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        handlePin();
      }}
      style={{ width: 32, ...style }}
      icon={icon}
    />
  );
};
