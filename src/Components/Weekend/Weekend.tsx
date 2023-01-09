import * as React from "react";
import { Card, Space } from "antd";
import "./Weekend.scss";

interface IWeekendCard {
    dayOfWeek?: string;
}

export const Weekend: React.FC<IWeekendCard> = ({ dayOfWeek }) => {
    return (
        <div className="container">
            <Card
                title={
                    <Space className="title-space">
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
