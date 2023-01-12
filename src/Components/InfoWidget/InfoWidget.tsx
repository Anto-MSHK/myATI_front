import React from 'react';
import {Card} from "antd";

export const InfoWidget = (props: any) => {
    return (
        <div>
            <div>
                <div style={{ width: "100%", marginBottom: 10 }}>
                    <h3
                        style={{
                            padding: "5px 0 5px 10px",
                            color: "white",
                            fontWeight: 500,
                        }}
                    >
                        Сведения
                    </h3>
                    <Card>
                        {" "}
                        <div style={{ display: 'flex' }}>
                            <h2 >
                                {props.name}
                            </h2>
                            <h2 style={{ color: '#7a8187', marginLeft: '5px' }}>
                                {props.degree}
                            </h2>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};