import React, { FC, useEffect, useState, useRef } from "react";
import { Button } from "antd";
import { PushpinOutlined, ShoppingOutlined } from "@ant-design/icons";
import { useAppSelector, useAppDispatch } from 'src/State/hooks';
import { render } from '@testing-library/react';
import { addPin, removePin } from 'src/State/Slices/pinsSlice';


interface PinButtonI {
  disabled?: boolean;
  style?: React.CSSProperties;
  curItem: string;
  type: string
}

export const PinButton: FC<PinButtonI> = ({ disabled, style, curItem, type }) => {
  const items = useAppSelector(state => state.pins)
  const iconStyle = {
    fontSize: 12
  }
  const [icon, setIcon] = useState<JSX.Element>()
  const [isItemPinned, setIsItemPinned] = useState<boolean>()
  const dispatch = useAppDispatch()
  const pinObj = {
    key: type,
    item: curItem
  }

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
      setIcon(<ShoppingOutlined style={iconStyle} disabled={disabled} />)
      setIsItemPinned(true)
    }
    else {
      setIcon(<PushpinOutlined style={iconStyle} disabled={disabled} />)
      setIsItemPinned(false)
    }
  }, [items, isItemPinned])


  const pinItem = () => {
    dispatch(addPin(pinObj))
    setIsItemPinned(true)
    setIcon(<ShoppingOutlined style={iconStyle} disabled={disabled} />)
  }
  const unpinItem = () => {
    dispatch(removePin(curItem))
    setIsItemPinned(false)
    setIcon(<PushpinOutlined style={iconStyle} disabled={disabled} />)

  }
  const handlePin = () => {
    console.log(isItemPinned);
    isItemPinned
      ?
      unpinItem()
      :
      pinItem()
  }
  return (
    <Button
      onClick={() => handlePin()}
      style={{ width: 32, ...style }}
      icon={icon}
    />
  );
};
