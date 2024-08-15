


export const LegendItem = ({ color, label}: any) => {
    return (

    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 9 9"
        fill="none"
      >
<rect x="0.5" y="0.8689" width="15" height="15" fill={color} 


/>
</svg>   
      <span>{label
        
        }</span>
      </div>
     );
    }