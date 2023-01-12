import { Card, Menu, Spin, Switch, Space, FloatButton } from 'antd';
import React from 'react'
import { CustomerServiceOutlined, CommentOutlined } from '@ant-design/icons';
import { ITeacher } from 'src/Types/TeacherTypes';
/* import '../Teachers.less' */


import { useState, useEffect } from 'react';



import { lessonTeacher, dayTeacher, lessonDataTeacher } from 'src/Types/TeacherScheduleTypes';
import { TeacherDayCard } from 'src/Components/TeacherCard/TeacherDayCard';
import { useFetchTeacherScheduleQuery } from 'src/State/services/ScheduleApi';


/* export interface TeacherCardI {
    name: string
} */

const week: any = {
    0: "Понедельник",
    1: "Вторник",
    2: "Среда",
    3: "Четверг",
    4: "Пятница",
    5: "Суббота",
};
interface ITeacherSchedule {
    name: string,
    valueView: string,
    setValueView: React.Dispatch<React.SetStateAction<string>> 
}

const TeacherSchedule: React.FC<ITeacherSchedule > = ({ name, setValueView }) => {



    const { data: teacherSchedule, isFetching } = useFetchTeacherScheduleQuery(name)
    const [isWeekendHidden, setIsWeekendHidden] = useState(true)
    const [mergedTeacherSchedule, setMergedTeacherSchedule] = useState<dayTeacher[]>([])



    return (


        <Card
            className='teacherCard'
            loading={isFetching}

            style={{
                width: "100%",
                backgroundColor: "#001529",
                height: "100%",
                borderWidth: 0,
            }}
            bodyStyle={{
                padding: 15,
            }}>

            <div style={{ width: "100%", marginBottom: 10 }}>
                <h3
                    style={{
                        padding: "5px 0 5px 10px",
                        color: "white",
                        fontWeight: 500,
                    }}
                >
                    Расписание
                </h3>
            </div>

            <Card>
                {" "}
                <div style={{ display: 'flex' }}>
                    <h2 >
                        {name}
                    </h2>
                    <h2 style={{ color: '#7a8187', marginLeft: '5px' }}>

                    </h2>
                </div>

            </Card>
            <div className='scrollable-list' style={{ maxHeight: '480px' }} >

                <div style={{ marginBottom: "20px" }} >
                    {
                        teacherSchedule?.map((day, index) => (

                            isWeekendHidden && !day.lessons.length
                                ?
                                <div key={(`${day.lessons} +${index}`)} ></div>
                                :
                                <TeacherDayCard key={(`${day.lessons} +${index}`)}
                                    {...day}
                                />

                        ))
                    }
                    <FloatButton
                        type="primary"
                        style={{ right: 150, bottom: 300, width: '100px', height: '20px'}}
                        shape = 'square'
                        onClick={() => setValueView('info')} 
                        description = 'Сведения'
                        />
                </div>

            </div>
        </Card>

    )
}

export default TeacherSchedule 