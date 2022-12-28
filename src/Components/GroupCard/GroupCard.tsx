import React, { FC } from "react";
import { Card, Col } from "antd";
import { Link } from "react-router-dom";
import { useAppDispatch } from "src/State/hooks";

import { setGroup } from "src/State/Slices/groupSlice";

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

  return (
    <div className="card-box">
      <Col span={80}>
        <Card
          title={
            <Link to={`/schedule/${name}`}>
              <h2
                className={"groupName-title"}
                //  onClick={() => dispatch(handleGroupName)}
              >
                {name}
              </h2>{" "}
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
