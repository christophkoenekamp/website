import React, { useEffect } from 'react';

type BannerProps = {
	banner: string;
	inputRef: React.RefObject<HTMLInputElement>;
};
const Banner = (props: BannerProps) => {
	const bannerMessageRef = React.useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (props.inputRef.current) {
			props.inputRef.current.disabled = true;
		}
		let index = 0;
		const typeText = setInterval(() => {
			if (!bannerMessageRef.current) {
				return;
			}
			bannerMessageRef.current.insertAdjacentText(
				'beforeend',
				props.banner[index++]
			);
			if (index === props.banner.length) {
				clearInterval(typeText);
				if (props.inputRef.current) {
					props.inputRef.current.disabled = false;
					props.inputRef.current.focus();
				}
			}
		}, 5);
	}, [props.inputRef, props.banner]);
	return <div ref={bannerMessageRef} className="terminal-banner"></div>;
};

export default Banner;
