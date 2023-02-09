import * as React from "react";
import { Menu, MenuProps } from "antd";
import { useState, useEffect } from "react";
import { ITeacher } from "src/Types/TeacherTypes";
import { useAppDispatch, useAppSelector } from "./../../State/hooks";
import { setTeacher } from "src/State/Slices/teachersSlice";
import styles from "./TeachersList.module.css";
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

interface TeachersListComponent {
  teachersList: ITeacher[];
  isLoading?: boolean;
  selectedTeacher?: string;
  style?: React.CSSProperties;
  onClick?: () => any;
}

export const TeachersList: React.FC<TeachersListComponent> = ({
  teachersList,
  selectedTeacher,
  style,
  onClick,
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
    <div
      className={styles.menu_subjects_wrapper}
      // onClick={(e) => e?.stopPropagation()}
    >
      <Menu
        onBlur={() => {
          onClick && onClick();
        }}
        id="menu"
        onClick={(e) => {
          //  onClick && onClick();
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
        style={style}
        selectable
        className={styles.scrollable_list}
        mode="inline"
        selectedKeys={[currentTeacher]}
        items={items}
      />
    </div>
  );
};
