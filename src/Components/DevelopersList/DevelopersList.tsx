// DevelopersList.js
import React from "react";
import DeveloperCard from "../DeveloperCard/DeveloperCard";
import styles from "./DevelopersList.module.css";
import useScreenWidth from "src/Hooks/useScreenSize";
interface Developer {
  name: string;
  role: string;
  avatar: string;
  social: {
    github?: string;
    vk?: string;
  };
}

export const DevelopersList = () => {
  const widthSize = useScreenWidth();
  const cutWidth = 1000;
  const mobileWidth = 600;

  const developers: Developer[] = [
    {
      name: "Антон Мащенко",
      role: "frontend/backend",
      avatar:
        "https://sun9-14.userapi.com/impg/UclJKu2JqTn1W9521eqXMB-e2rVmyjgGOG75Lw/zkfDK24NjSs.jpg?size=2560x1703&quality=95&sign=8f9e20c7a6646817560a699f2c07cc6a&type=album",
      social: {
        github: "https://github.com/Anto-MSHK",
        vk: "https://vk.com/antomshk",
      },
    },
    {
      name: "Юрий Мартыненко",
      role: "frontend",
      avatar:
        "https://sun9-60.userapi.com/impg/tXK13HwTS7hVCRgWCLYlExHt--pTfonY24GhDA/VY2K0rnRxQM.jpg?size=2560x2214&quality=95&sign=3f303986dbadf737dcc07d08a41ecdb6&type=album",
      social: {
        github: "https://github.com/YourecMart",
        vk: "https://vk.com/imyourec",
      },
    },
    {
      name: "Никита Лесняк",
      role: "frontend",
      avatar:
        "https://sun9-4.userapi.com/impg/wnw-VriDZfgGSfbAv-pqgpnvxZwOn9nQQ31fbg/DdBAKhOw4CY.jpg?size=1620x2160&quality=95&sign=e19e6536bc7936fbcd1059c693a7b5a2&type=album",
      social: {
        github: "https://github.com/S1lveRain",
        vk: "https://vk.com/raindesu",
      },
    },
    {
      name: "Максим Лебедев",
      role: "frontend",
      avatar:
        "https://sun9-75.userapi.com/impg/Gj003P2GT90GCdoHtvGy_8vGACnpYyi3bFD9TQ/mORCD5BPOxM.jpg?size=987x1075&quality=95&sign=dd34b4343e2588e02cec5d3915a7c9a3&type=album",
      social: {
        github: "https://github.com/DULCETq",
        vk: "https://vk.com/dulcetenough",
      },
    },
    {
      name: "Андрей Артёменко",
      role: "frontend",
      avatar:
        "https://sun6-23.userapi.com/impg/B26vAN3BpiLjX6Lphr-FzZPNaas1aVARoIZ3JQ/ax_Jh9BGky8.jpg?size=1624x2160&quality=96&sign=6c3634b7ae735c5a88ee1c97953a1383&type=album",
      social: {
        github: "https://github.com/Zadirab",
        vk: "https://vk.com/night_flow",
      },
    },
  ];

  return (
    <div
      className={styles.developers_list}
      style={{
        flexWrap: widthSize > cutWidth ? undefined : "wrap",
        marginBottom: 15,
      }}
    >
      {developers.map((developer, index) => (
        <DeveloperCard key={index} {...developer} />
      ))}
    </div>
  );
};

export default DevelopersList;
