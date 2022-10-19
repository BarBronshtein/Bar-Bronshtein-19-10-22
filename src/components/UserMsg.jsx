import { useSelector } from 'react-redux';

const UserMsg = () => {
	const { msg } = useSelector(state => state.UserMsg);
	return (
		msg.txt && (
			<section className={msg.type ? `user-msg ${msg.type}` : 'user-msg'}>
				<div className="user-msg-wrapper">{msg.txt}</div>
			</section>
		)
	);
};

export default UserMsg;
