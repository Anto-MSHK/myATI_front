import React from "react";
import { Avatar, Card, Collapse, Image, Space, Tag } from "antd";
import { IWidget } from "src/Components/GroupsWidget/GroupsWidget";
import styles from "./InfoWidget.module.css";
import { PinButton } from "../PinButton/PinButton";
import { useAppDispatch } from "src/State/hooks";
import { addPin } from "src/State/Slices/pinsSlice";
import { UserOutlined, CaretRightOutlined } from "@ant-design/icons";
import { title } from "process";
export const InfoWidget: React.FC<IWidget> = ({ teacher }) => {
  const dispatch = useAppDispatch();
  const pinTeacher = () => {
    dispatch(
      addPin({
        key: "teachers",
        item: teacher.name,
      })
    );
  };
  return (
    <div>
      <div>
        <div className={styles.container}>
          <h3>Сведения</h3>
          <Card size="small" bodyStyle={{ width: "100%" }}>
            {" "}
            <div style={{ position: "absolute", top: 10, right: 10 }}>
              <PinButton
                key={teacher.name}
                type="teachers"
                curItem={teacher.name}
                style={{ margin: "0 0 0 10px" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
              }}
            >
              {teacher.photo_url && (
                <div
                  style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                    overflow: "hidden",
                    marginBottom: 10,
                  }}
                >
                  <Image
                    style={{
                      objectFit: "cover",
                    }}
                    width={170}
                    height={170}
                    src={teacher.photo_url}
                    alt="avatar"
                  />
                </div>
              )}
              <h2
                className={styles.name}
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  margin: "auto 0",
                  width: "fit-content",
                  lineHeight: 1,
                  marginBottom: 5,
                }}
              >
                {teacher.fullName ? teacher.fullName : teacher.name}
                {teacher.degree && (
                  <i
                    className={styles.degree}
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      margin: "auto 0",
                      width: "fit-content",
                    }}
                  >
                    {" "}
                    ({teacher.degree})
                  </i>
                )}
              </h2>
              {teacher.cathedra && (
                <div>
                  <i style={{ fontWeight: 500, fontSize: 13 }}>Кафедра:</i>
                  <Tag
                    style={{
                      marginLeft: 5,
                      padding: 5,
                      whiteSpace: "pre-wrap",
                      lineHeight: 1,
                    }}
                  >
                    {teacher.cathedra}
                  </Tag>
                </div>
              )}
              {teacher.additional && (
                <h2
                  className={styles.degree}
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    margin: "auto 0",
                    width: "fit-content",
                    marginLeft: 8,
                  }}
                >
                  {teacher.additional}
                </h2>
              )}{" "}
            </div>
          </Card>
        </div>
        {teacher.allInfo && (
          <Collapse
            size="small"
            bordered={false}
            style={{
              backgroundColor: "white",
            }}
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
            items={[
              {
                key: 1,
                children: (
                  <p
                    style={{ marginTop: 10 }}
                    dangerouslySetInnerHTML={{
                      __html: teacher.allInfo
                        .replace(/^(.*):/gm, "<br/><strong>$1:</strong>")
                        .substring(6)
                        .split("\n")
                        .join("<br/>"),
                    }}
                  />
                ),
                label: "Информация с сайта atidstu.ru",
              },
            ]}
          />
        )}
      </div>
    </div>
  );
};
