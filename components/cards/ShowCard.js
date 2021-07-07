import { createPortal } from "react-dom";
import { useRef, useEffect, useState } from "react";

export default function ShowCard({ children, selector }) {
	const ref = useRef();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		ref.current = document.querySelector(selector);
		setMounted(true);
	}, [selector]);

	return mounted ? createPortal(children, ref.current) : null;
}
