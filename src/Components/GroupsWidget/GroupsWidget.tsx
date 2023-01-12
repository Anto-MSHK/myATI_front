import React from 'react';
import {Button, Card, Row} from "antd";

export const GroupsWidget = (props: any) => {

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
                <h3
                    style={{
                        padding: "5px 0 5px 10px",
                        color: "white",
                        fontWeight: 500,
                    }}
                >
                    Группы
                </h3>
                <Card
                    bodyStyle={{ padding: 15 }}
                    style={{ borderRadius: "10px 10px 0 0" }}
                >

                    <Row gutter={[5, 5]} style={{ gap: 10 }} justify={"start"}>
                        {" "}
                        {
                            props.data?.groups &&
                            props.data?.groups.map((group: any) => (
                                <Card size="small">{group}</Card>
                            ))}
                    </Row>
                </Card>
            </div>
            <Button type="primary" style={{ borderRadius: "0 0 10px 10px " }}>
                Открыть расписание
            </Button>
        </div>
    );
};