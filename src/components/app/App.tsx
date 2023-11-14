import { Action } from '../action/action';
import { Actions } from '../actions/actions';
import { Info } from '../info/info';
import { Key } from '../key/key';
import { Keyboard } from '../keyboard/keyboard';

export default function App() {
  return (
    <div className="container">
      <Info></Info>
      <main className="phone">
        <Keyboard>
          <Key></Key>
        </Keyboard>
        <Actions>
          <Action></Action>
        </Actions>
      </main>
    </div>
  );
}
