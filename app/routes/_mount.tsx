import { Outlet } from "@remix-run/react";

export default function Mount() {
	return (
		<div>
			Mount
			<Outlet />
		</div>
	);
}
