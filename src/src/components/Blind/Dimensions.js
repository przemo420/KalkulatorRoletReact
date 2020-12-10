import React from 'react'
export const Dimensions = ({ onChangeForm }) => {
    return(
        <div>
            <h4 class="mt-5">Wymiary</h4>
            <hr></hr>
            <div class="input-group">
                <input type="text" onChange={(e) => onChangeForm(e)}  class="form-control" placeholder="Szerokość plisy" value=""/>
                <span class="input-group-text">x</span>
                <input type="text" onChange={(e) => onChangeForm(e)}  class="form-control" placeholder="Wysokość plisy" value=""/>
            </div>
        </div>
    )
}