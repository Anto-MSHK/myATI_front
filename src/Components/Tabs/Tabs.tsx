import React, { useEffect, useRef, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import type { InputRef } from "antd";
import { Input, Tag, Tooltip } from "antd";
import styles from "./Tabs.module.css";
import { useAppSelector, useAppDispatch } from 'src/State/hooks';
import { removePin } from "src/State/Slices/pinsSlice";
import { Link } from 'react-router-dom';


export const Tabs: React.FC = () => {
    const dipatch = useAppDispatch()
    const items = Object.entries(useAppSelector(state => state.pins))
    /* const tags = [...pins.groups, ...pins.teachers] */
    /* const [tags, setTags] = useState<string[]>(["ВИС-21", "Чумак И.В."]); */
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState("");
    /* const [editInputIndex, setEditInputIndex] = useState(-1);
    const [editInputValue, setEditInputValue] = useState(""); */
    const inputRef = useRef<InputRef>(null);
    const editInputRef = useRef<InputRef>(null);

    useEffect(() => {
        if (inputVisible) {
            inputRef.current?.focus();
        }
    }, [inputVisible]);

    useEffect(() => {
        editInputRef.current?.focus();
    }, [inputValue]);

    const handleClose = (removedTag: string) => {
        dipatch(removePin(removedTag))
       /*  const newTags = tags.filter((tag) => tag !== removedTag); */
       
        /* setTags(newTags); */
    };

    const showInput = () => {
        setInputVisible(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleInputConfirm = () => {
        /* if (inputValue && tags.indexOf(inputValue) === -1) { */
           /*  setTags([...tags, inputValue]); */
       /*  } */
        setInputVisible(false);
        setInputValue("");
    };

   /*  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditInputValue(e.target.value);
    }; */

   /*  const handleEditInputConfirm = () => {
        const newTags = [...tags];
        newTags[editInputIndex] = editInputValue;
        setTags(newTags);
        setEditInputIndex(-1);
        setInputValue("");
    }; */

    return (
        <>
            {
            items && items.map(([key, tags]) => 
               tags && tags.map((tag,index) => {
                    
                

              /*   if (editInputIndex === index) {
                    return (
                        <Input
                            ref={editInputRef}
                            key={tag}
                            size="small"
                            className="tag-input"
                            value={editInputValue}
                            onChange={handleEditInputChange}
                            onBlur={handleEditInputConfirm}
                            onPressEnter={handleEditInputConfirm}
                        />
                    );
                } */
            
                const isLongTag = tag.length > 20;

                const tagElem = (
                  <Link to={`/schedule/${key.slice(0,-1)}/${tag}`}>
                    <Tag 
                        className={styles.edit_tag}
                        key={tag}
                        closable={true}
                        onClose={() => handleClose(tag)}
                    >
                        <span
                            
                            onDoubleClick={(e) => {
                                if (index !== 0) {
                                    /* setEditInputIndex(index);
                                    setEditInputValue(tag); */
                                    e.preventDefault();
                                }
                            }}
                        >
                            
                            {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                        </span>
                    </Tag>
                  </Link>
                );
              
                return isLongTag ? (
                    <Tooltip title={tag} key={tag}>
                        {tagElem}
                    </Tooltip>
                ) : (
                    tagElem
                );
                }))
            }
        </>
    );
};

export default Tabs;
