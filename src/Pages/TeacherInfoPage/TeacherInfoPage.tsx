import React, { useState, useEffect, useCallback } from "react";
import {
  Card,
  Switch,
  Space,
  Input,
  Select,
  Dropdown,
  MenuProps,
  Button,
} from "antd";
import { ITeacher } from "src/Types/TeacherTypes";
import { useFetchTeachersQuery } from "src/State/services/TeachersApi";
import { TeachersList } from "src/Components/TeachersList/TeachersList";
import { TeacherCard } from "src/Components/TeacherCard/TeacherCard";
import { TopDotEdu } from "src/Components/TopDotEdu/TopDotEdu";
import styles from "./TeacherInfoPage.module.css";
import { useParams } from "react-router-dom";
import { TopDot } from "src/Components/TopDot/TopDot";
import { UserOutlined } from "@ant-design/icons";
import useScreenWidth from "src/Hooks/useScreenSize";
import { IdcardFilled } from "@ant-design/icons";

export const TeacherInfoPage: React.FC = () => {
  const { teacherName } = useParams();
  const { data: fetchedTeachers, isLoading } = useFetchTeachersQuery();
  const [teachers, setTeachers] = useState<ITeacher[]>([]);
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [valueView, setValueView] = useState("info");

  const widthSize = useScreenWidth();
  const cutWidth = 1000;
  const mobileWidth = 600;

  useEffect(() => {
    console.log(teacherName);
    if (teachers.length && teacherName) setSelectedTeacher(teacherName);
  }, []);

  useEffect(() => {
    if (fetchedTeachers?.length) {
      setSelectedTeacher(fetchedTeachers[0].name);
      setTeachers(fetchedTeachers);
    }
  }, [fetchedTeachers]);

  const sortTeachers = (sort: string) => {
    if (sort === "По алфавиту") {
      setTeachers([...teachers].sort((a, b) => a.name.localeCompare(b.name)));
      return;
    }
    setTeachers([...teachers].sort((a, b) => b.name.localeCompare(a.name)));
  };

  const onSearch = useCallback(
    (searchQuery: string) => {
      console.log("вызвана функция поиска");
      if (searchQuery) {
        setTeachers(
          [...teachers].filter((teacher) =>
            teacher.name.toLowerCase().includes(searchQuery.toLocaleLowerCase())
          )
        );
      } else fetchedTeachers ? setTeachers(fetchedTeachers) : setTeachers([]);

      console.log(teachers);
    },
    [teachers]
  );

  const items_min_menu: MenuProps["items"] = [
    {
      label: (
        <TeachersList
          teachersList={teachers}
          selectedTeacher={teacherName}
          style={{ width: "100%" }}
          onClick={() => {
            setInputIsActive((prev) => !prev);
          }}
        />
      ),
      key: "2",
    },
  ];

  const [inputIsActive, setInputIsActive] = useState(false);
  return (
    <>
      <TopDotEdu
        title={"Преподаватели"}
        sortTeachers={sortTeachers}
        onSearch={onSearch}
      />

      <Card
        loading={isLoading}
        style={{
          //  width: "100%",
          position: "relative",
          borderRadius: "0 0 10px 10px",
          paddingTop: "3px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
          margin: widthSize > mobileWidth ? "0px 15px" : 0,
        }}
        bodyStyle={{ padding: "10px 10px 10px 10px" }}
      >
        {widthSize < cutWidth && (
          <div className={styles.main_teachers} style={{ display: "block" }}>
            <Dropdown
              menu={{ items: items_min_menu }}
              trigger={["click"]}
              onOpenChange={() => {
                setInputIsActive((prev) => !prev);
              }}
            >
              <Button
                style={{
                  background: widthSize > cutWidth ? undefined : "#4096FF",
                  color: "white",
                  width: "100%",
                  height: 50,
                  marginBottom: 10,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {inputIsActive && (
                  <div
                    onClick={(e) => e?.stopPropagation()}
                    style={{ width: "100%" }}
                  >
                    <Input
                      className={styles.input_antd}
                      placeholder="Поиск..."
                      allowClear
                      size="small"
                      onChange={(e) => {
                        onSearch(e.target.value);
                      }}
                    />
                  </div>
                )}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: inputIsActive ? 10 : 0,
                  }}
                >
                  <IdcardFilled
                    style={{
                      color: widthSize > cutWidth ? undefined : "white",
                      fontSize: 22,
                      marginRight: 5,
                    }}
                  />{" "}
                  <h2>{!inputIsActive ? "Найти" : "Поиск"}</h2>
                </div>
              </Button>
            </Dropdown>
          </div>
        )}
        <div
          className={styles.main_teachers}
          style={{ display: widthSize > cutWidth ? "flex" : "block" }}
        >
          {teachers.length ? (
            <>
              {widthSize > cutWidth && (
                <div className={styles.menu_wrapper_teachers}>
                  <TeachersList
                    teachersList={teachers}
                    selectedTeacher={teacherName}
                  />
                </div>
              )}
              {selectedTeacher && (
                <div
                  className={styles.container}
                  style={{ marginLeft: widthSize > cutWidth ? 10 : 0 }}
                >
                  {teacherName ? (
                    <TeacherCard
                      name={teacherName}
                      valueView={valueView}
                      setValueView={setValueView}
                    />
                  ) : (
                    <Card
                      style={{
                        width: "100%",
                        backgroundColor: "#001529",
                        borderWidth: 0,
                        height: "100%",
                      }}
                      bodyStyle={{
                        height: "100%",
                        display: "flex",
                        color: "white",
                      }}
                    >
                      <h2>
                        <UserOutlined className={styles.userOutlined_antd} />
                        <p>выберите из списка</p>
                      </h2>
                    </Card>
                  )}
                </div>
              )}
            </>
          ) : (
            <h3>Преподаватели не найдены</h3>
          )}
        </div>
      </Card>
    </>
  );
};
