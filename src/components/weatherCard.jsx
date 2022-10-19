import React from 'react';

const weatherCard = props => {
	return <article className="weather-card">{props.children}</article>;
};

export default weatherCard;
