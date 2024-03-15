
const Header = () => {
    return (
        <div>
            <div className="navbar w-full md:w-8/12 mx-auto py-12 px-4 lg:px-0">
                <div className="flex justify-between">
                    <a className="text-4xl font-extrabold cursor-pointer ml-4 lg:ml-0">Knowledge Cafe</a>
                    <div className="flex ">
                        <ul className="menu flex gap-10 menu menu-horizontal px-1">
                            <li><a href="" className="text-lg">Home</a></li>
                            <li><a href="" className="text-lg">About</a></li>
                            <li><a href="" className="text-lg">Pages</a></li>
                            <li><a href="" className="text-lg">Blog</a></li>
                            <li><button className="btn text-lg">Login</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
