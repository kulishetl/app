import React from 'react';
import Input from './Input';

function InputDate() {
  return (
    <div>
      <h2>Выбор дат для определения диапазона данных в файле "Биллинг"</h2>
      <Input />
      <span>---------</span>
      <Input />
    </div>
  );
}

export default InputDate;
