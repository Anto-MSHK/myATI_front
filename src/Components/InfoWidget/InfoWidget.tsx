import React from "react";
import { Card } from "antd";
import { IWidget } from "src/Components/GroupsWidget/GroupsWidget";
import styles from "./InfoWidget.module.css";

export const InfoWidget: React.FC<IWidget> = ({ teacher }) => {
    return (
        <div>
            <div>
                <div className={styles.container}>
                    <h3>
                        Сведения
                    </h3>
                    <Card size="small">
                        {" "}
                        <div>
                            <h2>{teacher.name}</h2>
                            {teacher.degree && (
                                <h2 className={styles.degree}>
                                    ({teacher.degree})
                                </h2>
                            )}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};
