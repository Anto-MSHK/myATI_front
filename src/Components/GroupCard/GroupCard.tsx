import React, { FC } from "react";
import { Card, Col } from "antd";
import { Link } from "react-router-dom";
import { useAppDispatch } from "src/State/hooks";

import { setGroup } from "src/State/Slices/groupSlice";

interface GroupCardI {
  name: string;
  elder?: string;
}

export const GroupCard: FC<GroupCardI> = ({ name, elder }) => {
  const dispatch = useAppDispatch();

  //   const handleGroupName = () => {
  //     dispatch(setGroup(name));
  //   };

  return (
    <div className="card-box">
      <Col span={80}>
        <Card
          title={
            <Link to={`/group/${name}`}>
              <span
                className={"groupName-title"}
                //  onClick={() => dispatch(handleGroupName)}
              >
                {name}
              </span>{" "}
            </Link>
          }
          //  extra={<CardExtra />}
        >
          Староста: {elder ? elder : <span>Неизвестен</span>}
        </Card>
      </Col>
    </div>
  );
};
