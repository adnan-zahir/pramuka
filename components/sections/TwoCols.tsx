import classNames from 'classnames';

export default function TwoCols({
	reverse,
	gap = 4,
	children,
}: {
	reverse?: boolean;
	gap?: number;
	children: any;
}) {
	return (
		<div
			className={classNames(
				'flex md:flex-row',
				reverse ? 'flex-col-reverse' : 'flex-col',
				'gap-' + gap
			)}
		>
			{children}
		</div>
	);
}
