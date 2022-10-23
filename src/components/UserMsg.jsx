import { useDispatch, useSelector } from 'react-redux';
import { clearMsg } from '../store/actions/userMsgActions';
const UserMsg = () => {
	const { msg } = useSelector(state => state.userMsgModule);
	const dispatch = useDispatch();
	const onClearMsg = () => dispatch(clearMsg());
	if (msg) setTimeout(onClearMsg, 3000);
	return (
		<section className={msg?.type ? `user-msg ${msg.type}` : 'user-msg'}>
			<div className="user-msg-wrapper flex column">
				<span>{msg?.txt}</span>
				<button className="btn user-msg-btn" onClick={onClearMsg}>
					Close
				</button>
			</div>
		</section>
	);
};

export default UserMsg;
