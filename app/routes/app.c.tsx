import { Outlet } from "@remix-run/react";

export default function CountryLayout() {
	return (
		<div style={{ border: "1px solid pink" }}>
			<h1>Country Layout</h1>
			<Outlet />
		</div>
	);
}
