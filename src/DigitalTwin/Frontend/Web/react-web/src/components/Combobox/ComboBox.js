import React, { Component } from 'react';
import './ComboBox.css';
function Combobox() {
    
        return (
            <>
                <div className="form-group contForCombobox">
                    <label className="textForSign ">Вид культуры</label>
                    <select className="form-control" id="FormControlSelect">
                        <option className="opt">Выберите культуру...</option>
                        <option className="opt">Овес</option>
                        <option className="opt">Рис</option>
                    </select>
                </div>
            </>
        )
    }export default Combobox;