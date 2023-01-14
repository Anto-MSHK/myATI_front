import * as React from "react";
import { Card, Space } from "antd";
import styles from "./Weekend.module.css";

interface IWeekendCard {
    dayOfWeek?: string;
}

export const Weekend: React.FC<IWeekendCard> = ({ dayOfWeek }) => {
    return (
        <div className={styles.container}>
            <Card
                title={
                    <Space className={styles.space_antd}>
                        <span>{dayOfWeek}</span>
                        <span>Выходной</span>
                    </Space>
                }
            >
                <h1>
                    Нет пар
                </h1>
            </Card>
        </div>
    );
};
