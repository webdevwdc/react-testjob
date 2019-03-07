import React from 'react';

/**
 * A progress bar component of a item
 * @namespace ProgressBar
 * @param  {string} color
 * @param  {number} progressValue=0
 * @param  {number} totalValue
 * @memberof App
 */
const ProgressBar = ({ color = '#ffffff', progressValue = 0, totalValue = 0 }) => {
    const width = ((progressValue / totalValue) * 100);
    return (
        <div className="progressBar">
            <div className="valueContainer">
                <div className="baseValue"   style={{ 'width': width + '%'}}>0</div>
                <div className="progressValue colorWhite" style={{width: `calc(100% - ${width}% - 48px)`}}>{progressValue}</div>
                <div className="totalValue">{totalValue}</div>
            </div>
            <div className="progressContainer">
                <div style={{ 'width': width + '%', height: '18px', backgroundColor: color }}>
                    <span className="startingLine"></span>
                    <span className="progressLine" style={{ width: `calc(100% - ${width}%)` }}></span>
                </div>
            </div>
        </div>
    );
}


export default ProgressBar;