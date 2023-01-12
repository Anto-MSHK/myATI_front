import * as React from "react";
import { Menu, MenuProps } from "antd";
import { useState, useEffect } from "react";
import { ITeacher } from "src/Types/TeacherTypes";
import { useAppDispatch, useAppSelector } from "./../../State/hooks";
import { setTeacher } from "src/State/Slices/teachersSlice";
import "./TeachersList.css";
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

interface TeachersListComponent {
  teachersList: ITeacher[];
  isLoading?: boolean;
  selectedTeacher?: string;
}

export const TeachersList: React.FC<TeachersListComponent> = ({
  teachersList,
  selectedTeacher,
}) => {
  const history = useNavigate();
  const [currentTeacher, setCurrentTeacher] = useState("");
  const dispatch = useAppDispatch();
  //   const teacher = useAppSelector((state) => state.teachers.teacherName);

  useEffect(() => {
    if (selectedTeacher) {
      setCurrentTeacher(selectedTeacher);
    } else if (teachersList.length) {
      setCurrentTeacher(teachersList[0].name);
    }
  }, [teachersList]);

  useEffect(() => {
    let element = document.getElementById(selectedTeacher as string);
    setCurrentTeacher(selectedTeacher as string);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [selectedTeacher]);

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
            /*   window.history.pushState(
              "edu",
              `teacher`,
              `/edu/teacher/${teacher}`
            ); */
            history(`${teacher}`);
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
