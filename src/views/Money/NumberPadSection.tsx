import React from 'react';
import {Wrapper} from './NumberPadSection/Wrapper';
import {generageOutput} from './NumberPadSection/generateOutput';

type PropsType = {
  value: number,
  onChange: (value: number) => void,
  onOK?: () => void
}

const NumberPadSection: React.FC<PropsType> = (props) => {
  const setOutput = (output: string) => {
    let outputValue;
    if (output.length > 16) {
      outputValue = parseFloat(output.slice(0, 16));
    } else if (output.length === 0) {
      outputValue = 0;
    } else {
      outputValue = parseFloat(output);
    }
    props.onChange(outputValue);
  };
  // const [output, _setOutput] = useState('0');
  const output = props.value.toString();


  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) return;

    if (text === 'OK') {
      if(props.onOK){
        props.onOK()
      }
      return;
    }

    if ('0123456789.'.split('').concat(['C', 'CE']).indexOf(text) >= 0) {

      setOutput(generageOutput(text, output));
    }
  };

  return (
    <Wrapper>
      <div className='output'>{output}</div>
      <div className='Pad clearfix' onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>C</button>

        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>CE</button>

        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className='ok'>OK</button>
        <button className='zero'>0</button>
        <button className='dot'>.</button>
      </div>
    </Wrapper>
  );
};

export {NumberPadSection};