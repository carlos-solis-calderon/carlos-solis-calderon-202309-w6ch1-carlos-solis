import { useSelector } from 'react-redux';
import { RootState } from '../../core/store';

export function Info() {
  const callState = useSelector((state: RootState) => state.call.isCalling);

  return <span className={callState ? 'message' : 'off'}>Calling...</span>;
}
