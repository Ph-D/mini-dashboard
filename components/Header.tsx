import Link from 'next/link';
import DarkModeButton from './DarkModeButton';

function Header() {
	return (
		<header>
		<div className='grid grid-cols-2 p-10 items-center shadow-md z-10 bg-white dark:bg-zinc-900'>
				<Link href='/' prefetch={false}>
						<h1 className='text-4xl text-left'><span
						className='font-bold text-blue-500 dark:text-blue-400'
						>MINI</span>DASHBOARD</h1>
				</Link>
				<div className='flex items-center justify-end space-x-2'>
						{/* DarkModeButton */}
						<DarkModeButton />
				</div>
		</div>
</header>
	);
}

export default Header;
