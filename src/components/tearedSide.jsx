import React from 'react';

const TearedEdge = ({ direction, width = 1200, className }) => {
    const paperSvgHeight = 16;

    let svgSegment = paperSvgHeight / 2;
    let switchPointY = true;
    let polygonPointsX = [];
    let directionInput = direction === 'up' ? paperSvgHeight : 0;

    for (let i = 0; i <= width; i += svgSegment) {
      polygonPointsX.push(i)
    }

    let svgPoints = polygonPointsX.map(pointX => {
      let pointY = switchPointY ? directionInput : svgSegment;
      switchPointY = !switchPointY;
      return `${pointX},${pointY}`
    }).join(' ');

    return (
      <svg className={className} height={paperSvgHeight} width="100%" >
        <polygon width="100%" points={svgPoints} style={{ fill: "#f9f9f9" }} />
      </svg>
    );
}

export default TearedEdge;