import { useState } from "react";
import Header from './Header'

const Layout = ({ children }) => {
	const [state, setState] = useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	return (
		<>
         <Header state={state} setState={setState} />
			<div>{children}</div>
		</>
	);
};

export default Layout;
