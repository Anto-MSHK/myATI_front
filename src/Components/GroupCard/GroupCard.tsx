import React, { FC } from "react";
import { Button, Card, Col } from "antd";
import { Link } from "react-router-dom";
import { useAppDispatch } from 'src/State/hooks';
import styles from "./GroupCard.module.css";
import { PushpinOutlined } from "@ant-design/icons";

import { addPin } from "src/State/Slices/pinsSlice";
import { PinButton } from "../PinButton/PinButton";
import { useDispatch } from 'react-redux';

interface GroupCardI {
  name: string;
  faculty: string;
  elder?: string;
}

export const GroupCard: FC<GroupCardI> = ({ name, faculty, elder }) => {
  const dispatch = useAppDispatch();
  

  //   const handleGroupName = () => {
  //     dispatch(setGroup(name));
  //   };
  const pinGroup = () => {
    dispatch(addPin({
      key: 'groups',
      item: name,
    }))
  }

  return (
    <div className={styles.card_box}>
      <Col span={80}>
        <Card
          title={
            <Link to={`/schedule/group/${name}`}>
              <h2
                className={styles.groupName_title}
                //  onClick={() => dispatch(handleGroupName)}
              >
                {name}
              </h2>{" "}
            </Link>
          }
          extra={<div /* onClick={() => pinGroup()} */><PinButton type="groups" curItem={name}/></div>}
        >
          Староста: {elder ? elder : <span>Неизвестен</span>}
        </Card>
      </Col>
    </div>
  );
};
