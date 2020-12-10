import React from 'react'
export const Dimensions = ({ onChangeForm }) => {
    return(
        <div className="form-group">
            <h4 className="mt-5">Wymiary</h4>
            <hr></hr>
            <div className="input-group">
                <input type="text" onChange={(e) => onChangeForm(e)} name="width" className="form-control" placeholder="Minimalna szerokość 50cm" value="" />
                <span className="input-group-text">x</span>
                <input type="text" onChange={(e) => onChangeForm(e)} name="height" className="form-control" placeholder="Minimalna wysokość 50cm" value=""/>
            </div>
        </div>
    )
}