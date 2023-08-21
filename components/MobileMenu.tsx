interface MobileMenuProps {
    visible?: boolean
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
    if (!visible) {
        return null
    }

    return (
        <div className="bg-black w-56 absolute top-8 lft-8 py-5 flex-col border-2 border-gray-800 flex">
            <div className="flex flex-col gap-4">

                <div className="px-4 text-center text-white">
                    Home
                </div>
                <div className="px-4 text-center text-white">
                    Series
                </div>
                <div className="px-4 text-center text-white">
                    Films
                </div>
                <div className="px-4 text-center text-white">
                    New & Popular
                </div>
                <div className="px-4 text-center text-white">
                    My List
                </div>
                <div className="px-4 text-center text-white">
                    Browse by Languages
                </div>

            </div>
        </div>
    )
}

export default MobileMenu;
