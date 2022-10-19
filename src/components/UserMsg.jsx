import { useSelector } from 'react-redux';

const UserMsg = () => {
	const { msg } = useSelector(state => state.UserMsg);
	return (
		msg.txt && (
			<section className={msg.msgType ? `user-msg ${msg.msgType}` : 'user-msg'}>
				<div className="user-msg-wrapper">{msg.txt}</div>
			</section>
		)
	);
};

export default UserMsg;
