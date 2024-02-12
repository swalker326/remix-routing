import { Outlet } from "@remix-run/react";

export default function App() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				padding: "6px",
				border: "1px solid blue",
			}}
		>
			<div>App Navigation</div>
			<div style={{ flex: 1 }}>
				<Outlet />
			</div>
			<div>App Footer</div>
		</div>
	);
}
