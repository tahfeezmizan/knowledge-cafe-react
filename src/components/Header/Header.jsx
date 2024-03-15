
const Header = () => {
    return (
        <div>
            {/* header content section  */}
            <div class="navbar w-full md:w-8/12 mx-auto py-12 px-4 lg:px-0">
                <div class="navbar-start">
                    <div class="dropdown">
                        <div tabindex="0" role="button" class="lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabindex="0"
                            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href="" class="text-lg">Home</a></li>
                            <li><a href="" class="text-lg">About</a></li>
                            <li><a href="" class="text-lg">Pages</a></li>
                            <li><a href="" class="text-lg">Blog</a></li>
                            <li><a href="" class="text-lg">Contact</a></li>
                        </ul>
                    </div>
                    <a class="text-4xl font-extrabold cursor-pointer ml-4 lg:ml-0">Knowledge Cafe</a>
                </div>
                <div class="navbar-end hidden lg:flex">
                    <ul class="menu menu-horizontal px-1">
                        <li><a href="" class="text-lg hover:bg-transparent">Home</a></li>
                        <li><a href="" class="text-lg hover:bg-transparent">About</a></li>
                        <li><a href="" class="text-lg hover:bg-transparent">Pages</a></li>
                        <li><a href="" class="text-lg hover:bg-transparent">Blog</a></li>
                        <li><a href="" class="text-lg hover:bg-transparent">Contact</a></li>
                    </ul>
                </div>
            </div>
            );
};

            export default Header;