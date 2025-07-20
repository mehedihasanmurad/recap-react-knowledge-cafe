import Profile from "../../assets/images/profile.png"

const Header = () => {
    return (
        <header className="flex justify-between items-center max-w-7xl mx-auto border-b-2 pb-2">
            <h1 className='text-4xl font-semibold'>Knowledge Cafe</h1>
            <img src={Profile} alt="" />
        </header>
    );
};

export default Header;