import React, { FC } from "react";
import { SmileOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Card, Result, Statistic, Tag } from "antd";
import Meta from "antd/es/card/Meta";
import styles from "./PanelChooseItem.module.css";
import { Link } from "react-router-dom";
import useScreenWidth from "src/Hooks/useScreenSize";

export interface PanelChooseItemI {
  title: React.ReactNode | string;
  desc: React.ReactNode | string;
  mini_cards: {
    link: string;
    title?: React.ReactNode | string;
    desc?: string;
    icon?: React.ReactNode;
  }[];
}
export const PanelChooseItem: FC<PanelChooseItemI> = ({
  title,
  desc,
  mini_cards,
}) => {
  const widthSize = useScreenWidth();
  const cutWidth = 1000;
  const mobileWidth = 450;
  return (
    <Card
      size="small"
      className={styles.main}
      style={{ width: "100%", maxWidth: 500, overflow: "hidden" }}
      cover={
        <div className={styles.cards_container}>
          {mini_cards.map((card) => (
            <Card hoverable style={{ width: "100%", height: 120 }} size="small">
              <Link to={card.link}>
                <Statistic
                  style={{ marginTop: 8 }}
                  title={widthSize > mobileWidth ? card.title : undefined}
                  value={card.desc}
                  valueStyle={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: "#1677FF",
                  }}
                  suffix={card.icon ? card.icon : undefined}
                />
              </Link>
            </Card>
          ))}
        </div>
      }
      actions={[]}
    >
      <Meta
        style={{ padding: "10px 0" }}
        title={<h1 style={{ fontWeight: 600 }}>{title}</h1>}
        description={desc}
      />
    </Card>
  );
};
