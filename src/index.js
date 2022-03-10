import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);
ReactDOM.render(<App />,document.getElementById('root'));

