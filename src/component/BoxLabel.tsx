import React from 'react';

interface Props {
    title: string,
    label: string,
    textBox: any,
}

const BoxLabel = ({title, label, textBox}: Props) => {

  return (
        <div className="box width-30 padding-40"> 
            <div className='font-bold'>
            <span>{title}</span> 
        </div> 
        <label className='mt-40'>{label}</label> 
        {textBox}
        </div>  
  );
} 

export default BoxLabel;
