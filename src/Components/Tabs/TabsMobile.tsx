import { Button, Dropdown, List, Menu, MenuProps, Space } from "antd";
import React from "react";
import { CloseCircleFilled, PushpinOutlined } from "@ant-design/icons";
import Tabs from "./Tabs";
import { useAppDispatch, useAppSelector } from "src/State/hooks";
import { relative } from "path";
import { Link } from "react-router-dom";
import { removePin } from "src/State/Slices/pinsSlice";
export const TabsMobile = () => {
  const pins = Object.entries(useAppSelector((state) => state.pins));
  const dispatch = useAppDispatch();
  const handleClose = (removedTag: string) => {
    dispatch(removePin(removedTag));
  };

  const items: MenuProps["items"] = [
    { label: "нет закрелённых", type: "group" },
  ];
  pins.map(([key, tags]) =>
    tags.map((pin) => {
      items.push({
        label: (
          <Link
            to={`/${
              key.slice(0, -1) === "group" ? "schedule" : "edu"
            }/${key.slice(0, -1)}/${pin}`}
          >
            <Menu.Item
              style={{
                padding: "15px",
                display: "flex",
                justifyContent: "space-between",
                position: "relative",
                margin: 5,
              }}
            >
              <h3 style={{ display: "inline", color: "#1677ff" }}>{pin}</h3>
              <Button
                icon={<CloseCircleFilled />}
                onClick={(e) => {
                  e.preventDefault();
                  handleClose(pin);
                }}
                style={{
                  position: "absolute",
                  right: 10,
                  top: 0,
                  bottom: 0,
                  zIndex: 10,
                  margin: "auto",
                }}
                type="primary"
              ></Button>
            </Menu.Item>
          </Link>
        ),
        key: 0,
      });
    })
  );

  if (items.length > 1) items.shift();
  //   const items: MenuProps["items"] = [
  //     {
  //       label: (
  //         <div style={{ display: "flex", flexDirection: "column" }}>
  //           {pins.groups.length > 0 || pins.teachers.length > 0 ? (
  //   <Tabs />;
  //           ) : (
  //             <h4 style={{ fontWeight: 600, margin: "5px" }}>нет закреплённых</h4>
  //           )}
  //         </div>
  //       ),
  //       key: "0",
  //     },
  //   ];

  return (
    <Dropdown
      menu={{
        items,
        style: {
          border: "1px solid #1677ff",
          boxShadow: "0px 12px 24px 0px rgba(34, 60, 80, 0.2)",
        },
      }}
      overlayStyle={{
        width: "100%",
        padding: "5px 10px",
      }}
      trigger={["click"]}
    >
      <Space>
        <Button>
          Закладки
          <PushpinOutlined />
        </Button>
      </Space>
    </Dropdown>
  );
};

export default TabsMobile;
