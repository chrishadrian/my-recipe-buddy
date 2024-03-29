import React, { useState } from 'react';
import { MenuItem } from 'react-pro-sidebar';

export default function StyledMenuItem(props) {
	const [isHovered, setIsHovered] = useState(false);
	const { children } = props;
	const menuItemStyle = {
		color: isHovered ? '#8BC34A' : 'white',
		// backgroundColor: isHovered ? 'black' : 'transparent',
		cursor: 'pointer',
		margin: '1% 0',
	};

	return (
		<MenuItem
			{...props}
			style={menuItemStyle}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{children}
		</MenuItem>
	);
}
