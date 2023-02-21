import React, { FC, useEffect, useState } from "react";
import { Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";
import useScreenWidth from "src/Hooks/useScreenSize";

export const Breadcrumbs = () => {
  const [tabs, setTabs] = useState<
    ({ name: string; href?: string } | undefined)[]
  >([]);
  const location = useLocation();

  const [path, setPath] = useState("");
  const [previousPath, setPreviousPath] = useState("");

  const widthSize = useScreenWidth();
  const mobileWidth = 600;

  useEffect(() => {
    console.log(path);
    setPreviousPath(path);
    setPath(location.pathname);
    let tabs_eng = location.pathname.split("/");
    let result_tabs = tabs_eng.map((tab, index) => {
      if (tab === "schedule" && tabs_eng[index + 1] !== "teacher")
        return { name: "Группы" };
      else if (tab === "schedule" && tabs_eng[index + 1] === "teacher")
        return { name: "Преподаватели", href: "/edu/teacher" };
      else if (tab === "teacher" && tabs_eng[index - 1] !== "schedule")
        return { name: "Преподаватели" };
      else if (tab === "subjects" && tabs_eng[index - 1] !== "schedule")
        return { name: "Предметы" };
      else if (tab === "fvo") return { name: "ФВО" };
      else if (tab === "spo") return { name: "СПО" };
      else if (tab === "groups") return { name: "Группы" };
      else if (tab === "edu") return { name: "Структура" };
      else if (
        index === tabs_eng.length - 1 &&
        tabs_eng[index - 2] === "schedule"
      )
        return { name: decodeURIComponent(tab), href: `/edu/teacher/${tab}` };
      else if (index === tabs_eng.length - 1)
        return { name: decodeURIComponent(tab) };
    });
    setTabs(result_tabs as any);
  }, [location.pathname]);
  return (
    <Breadcrumb
      separator=">"
      style={{
        alignContent: "center",
        fontSize: widthSize < mobileWidth ? 14 : 18,
        marginLeft: widthSize < mobileWidth ? 45 : 0,
      }}
    >
      {tabs.map((tab) => {
        if (tab?.href)
          return (
            <Breadcrumb.Item href={tab?.href} className={"activeBreadCrumb"}>
              {tab?.name}
            </Breadcrumb.Item>
          );
        else return <Breadcrumb.Item>{tab?.name}</Breadcrumb.Item>;
      })}
    </Breadcrumb>
  );
};
