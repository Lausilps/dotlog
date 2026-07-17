import React from 'react';
export function Checkbox({label,checked,defaultChecked,onChange,style,...rest}){
  return <label className="cd-check" style={style}>
    <input type="checkbox" checked={checked} defaultChecked={defaultChecked} onChange={onChange} {...rest}/>
    <span className="cd-check-on">[✓]</span><span className="cd-check-off">[&nbsp;]</span>
    {label&&<span>{label}</span>}
  </label>;
}
