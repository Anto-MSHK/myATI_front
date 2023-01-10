import * as React from "react";
import { Menu, MenuProps } from "antd";
import { useState, useEffect } from "react";
import { ITeacher } from "src/Types/TeacherTypes";
import { useAppDispatch, useAppSelector } from "./../../State/hooks";
import { setTeacher } from "src/State/Slices/teachersSlice";
import "./TeachersList.css";

type MenuItem = Required<MenuProps>["items"][number];

interface TeachersListComponent {
  teachersList: ITeacher[];
  isLoading?: boolean;
}

export const TeachersList: React.FC<TeachersListComponent> = ({
  teachersList,
}) => {
  const [currentTeacher, setCurrentTeacher] = useState("");
  const dispatch = useAppDispatch();
  const teacher = useAppSelector((state) => state.teachers.teacherName);

  useEffect(() => {
    if (teachersList.length) {
      setCurrentTeacher(teachersList[0].name);
    }
  }, [teachersList]);

  useEffect(() => {
    let element = document.getElementById(teacher);
    setCurrentTeacher(teacher);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [teacher]);

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    id: string
  ): MenuItem {
    return {
      key,
      label,
      id,
    } as MenuItem;
  }

  const items: MenuProps["items"] = teachersList.map((teacher) =>
    getItem(teacher.name, teacher.name, teacher.name)
  );

  return (
    <div className="menu-subjects-wrapper">
      <Menu
        id="menu"
        onClick={(e) => {
          if (e.domEvent.currentTarget.textContent) {
            let teacher = e.domEvent.currentTarget.textContent;
            dispatch(setTeacher(teacher));
            setCurrentTeacher(e.key);
            console.log(currentTeacher);
            window.history.pushState(
              "edu",
              `teacher`,
              `/edu/teacher/${teacher}`
            );
          }
        }}
        selectable
        className="scrollable-list"
        mode="inline"
        selectedKeys={[currentTeacher]}
        items={items}
        style={{ height: "500px", width: 250 }}
      />
    </div>
  );
};
