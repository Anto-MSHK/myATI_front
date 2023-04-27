import React, { FC } from "react";
import { Button, Card, Col } from "antd";
import { Link } from "react-router-dom";
import { useAppDispatch } from "src/State/hooks";
import styles from "./GroupCard.module.css";
import { PushpinOutlined } from "@ant-design/icons";

import { addPin } from "src/State/Slices/pinsSlice";
import { PinButton } from "../PinButton/PinButton";
import { useDispatch } from "react-redux";
import useScreenWidth from "src/Hooks/useScreenSize";

interface GroupCardI {
  name: string;
  faculty: string;
  elder?: string;
}

export const GroupCard: FC<GroupCardI> = ({ name, faculty, elder }) => {
  const dispatch = useAppDispatch();

  const widthSize = useScreenWidth();
  const mobileWidth = 500;
  //   const handleGroupName = () => {
  //     dispatch(setGroup(name));
  //   };
  const pinGroup = () => {
    dispatch(
      addPin({
        key: "groups",
        item: name,
      })
    );
  };

  return (
    <div
      className={styles.card_box}
      style={{ width: widthSize < mobileWidth ? "100%" : 220 }}
    >
      <Col span={80}>
        <Link to={`/schedule/group/${name}`}>
          <Card
            style={{ position: "relative" }}
            hoverable
            title={
              <a>
                <h2
                  className={styles.groupName_title}
                  //  onClick={() => dispatch(handleGroupName)}
                >
                  {name}
                </h2>{" "}
              </a>
            }
            extra={<PinButton type="groups" curItem={name} />}
          >
            Факультет:{" "}
            {faculty ? (
              faculty === "FVO" ? (
                "ФВО"
              ) : (
                "СПО"
              )
            ) : (
              <span>Неизвестен</span>
            )}
          </Card>
        </Link>
      </Col>
    </div>
  );
};
