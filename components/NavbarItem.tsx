interface NavbarItemProps {
    label: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label }) => {
    return (
        <div className="text-white cursor-pointer hover:text-gray-500 transition text-xl">
            {label}
        </div>
    )
}

export default NavbarItem;
