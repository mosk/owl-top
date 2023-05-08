import styles from './P.module.css';
import cn from 'classnames';
import { PProps } from './P.props';

export const P = ({ size = 'md', children, className, ...props}: PProps): JSX.Element => {
	return (
		<p
			className={cn(styles.p, className, {
				[styles.lg]: size == 'lg',
				[styles.md]: size == 'md',
				[styles.sm]: size == 'sm'
			})}
			{...props}
		>
			{children}
		</p>
	);
};