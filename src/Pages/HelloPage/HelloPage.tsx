import { SmileOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Result, Tag } from "antd";

import styles from "./HelloPage.module.css";
import DevelopersList from "src/Components/DevelopersList/DevelopersList";
import {
  PanelChooseItem,
  PanelChooseItemI,
} from "src/Components/ForHelloPage/PanelChooseItem.tsx/PanelChooseItem";
import { Banner } from "src/Components/ForHelloPage/Banner/Banner";
import useScreenWidth from "src/Hooks/useScreenSize";
export const HelloPage = () => {
  const widthSize = useScreenWidth();
  const cutWidth = 900;
  const mobileWidth = 600;

  const cards_list: PanelChooseItemI[] = [
    {
      title: "Я студент",
      desc: "выбери свой факультет",
      mini_cards: [
        {
          link: "/groups/fvo",
          title: "Факультет высшего образования",
          desc: "ВО",
        },
        {
          link: "/groups/spo",
          title: "Факультет среднего образования",
          desc: "СПО",
        },
      ],
    },
    {
      title: "Я преподаватель",
      desc: (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Tag>beta</Tag>
          <p style={{ margin: 0 }}>на стадии тестирования</p>
        </div>
      ),
      mini_cards: [
        {
          link: "/edu/teacher",
          title: "Преподаватели ТИ ДГТУ",
          desc: "Открой список",
          icon: <ArrowRightOutlined />,
        },
      ],
    },
  ];
  return (
    <div>
      <Banner />
      <div id={"scroll"} className={styles.content}>
        <Result
          className={styles.info}
          icon={<SmileOutlined />}
          style={{ height: widthSize > cutWidth ? "85vh" : undefined }}
          title="Привет, выбери роль"
          extra={
            <div
              style={{
                display: "flex",
                gap: 20,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: widthSize > cutWidth ? "row" : "column",
              }}
            >
              {cards_list.map((card) => (
                <PanelChooseItem {...card} />
              ))}
            </div>
          }
        />
      </div>
    </div>
  );
};
