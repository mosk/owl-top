import styles from './Tag.module.css';
import cn from 'classnames';
import { TagProps } from './Tag.props';

export const Tag = ({ size = 'md', color = 'primary', href, children, className, ...props }: TagProps): JSX.Element => {
	return (
		<div
			className={cn(styles.tag, className, {
				[styles.md]: size == 'md',
				[styles.lg]: size == 'lg',
				[styles.primary]: color == 'primary',
				[styles.ghost]: color == 'ghost',
				[styles.grey]: color == 'grey',
				[styles.green]: color == 'green',
				[styles.red]: color == 'red'
			})}
			{...props}
		>
			{ 
				href ? <a href={href}>{children}</a> : <>{children}</>
			}
		</div>
	);
};