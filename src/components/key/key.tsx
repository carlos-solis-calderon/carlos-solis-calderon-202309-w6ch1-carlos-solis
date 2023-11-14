import { useDispatch } from 'react-redux';
import { create, remove } from '../../core/features/phone.number/phoneSlice';
import { useState } from 'react';

export function Key() {
  const initialState = { phoneNumber: '' };

  const [phoneState, setPhoneState] = useState(initialState);
  const dispatcher = useDispatch();

  const handleClick = (key: string) => {
    if (phoneState.phoneNumber.length === 10) {
      return;
    }

    setPhoneState((prevState) => ({
      ...prevState,
      phoneNumber: prevState.phoneNumber + key,
    }));

    dispatcher(create(phoneState));
  };

  const handleDelete = () => {
    setPhoneState(initialState);
    dispatcher(remove());
  };
  return (
    <>
      <li>
        <button onClick={() => handleClick('1')} className="key" value={1}>
          1
        </button>
      </li>
      <li>
        <button onClick={() => handleClick('2')} className="key" value={2}>
          2
        </button>
      </li>
      <li>
        <button onClick={() => handleClick('3')} className="key" value={3}>
          3
        </button>
      </li>
      <li>
        <button onClick={() => handleClick('4')} className="key" value={4}>
          4
        </button>
      </li>
      <li>
        <button onClick={() => handleClick('5')} className="key" value={5}>
          5
        </button>
      </li>
      <li>
        <button onClick={() => handleClick('6')} className="key" value={6}>
          6
        </button>
      </li>
      <li>
        <button onClick={() => handleClick('7')} className="key" value={7}>
          7
        </button>
      </li>
      <li>
        <button onClick={() => handleClick('8')} className="key" value={8}>
          8
        </button>
      </li>
      <li>
        <button onClick={() => handleClick('9')} className="key" value={9}>
          9
        </button>
      </li>
      <li>
        <button onClick={() => handleClick('0')} className="key" value={0}>
          0
        </button>
      </li>
      <li>
        <button className="key big" onClick={handleDelete}>
          delete
        </button>
      </li>
    </>
  );
}
