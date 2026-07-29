/** @format */
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link } from "react-router-dom";
import { IoChevronDown } from "react-icons/io5";

export type NavDropdownItem = {
	label: string;
	to: string;
};

type NavDropdownProps = {
	label: string;
	items: NavDropdownItem[];
};

const NavDropdown = ({ label, items }: NavDropdownProps) => {
	return (
		<Menu as="div" className="relative">
			<MenuButton className="flex items-center gap-1 font-figtree font-medium text-black hover:-translate-y-0.5 hover:text-[#008056] transition-transform">
				{label}
				<IoChevronDown size={14} />
			</MenuButton>
			<MenuItems
				anchor="bottom start"
				className="z-50 mt-2 w-56 rounded-lg border border-slate-100 bg-white py-2 shadow-lg focus:outline-none"
			>
				{items.map((item) => (
					<MenuItem key={item.to}>
						<Link
							to={item.to}
							className="block px-4 py-2 font-figtree text-sm text-slate-700 data-[focus]:bg-[#F2FCF9] data-[focus]:text-[#008056]"
						>
							{item.label}
						</Link>
					</MenuItem>
				))}
			</MenuItems>
		</Menu>
	);
};

export default NavDropdown;
