import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../core/store';
import { phoneStatus } from '../../core/features/phone.call/callSlice';

export function Action() {
  const dispatcher = useDispatch();

  const handleCall = () => {
    dispatcher(phoneStatus({ isCalling: true }));
    console.log(callState);
  };

  const handleHang = () => {
    dispatcher(phoneStatus({ isCalling: false }));
    console.log(callState);
  };

  const phoneState = useSelector((state: RootState) => state.phone);
  const callState = useSelector((state: RootState) => state.call.isCalling);

  return (
    <>
      <span className="number">{phoneState.phoneNumber}</span>
      <a
        href="#"
        className={callState ? 'call' : 'call active'}
        onClick={handleCall}
      >
        Call
      </a>
      <a
        href="#"
        className={callState ? 'hang active' : 'hang'}
        onClick={handleHang}
      >
        Hang
      </a>
    </>
  );
}
