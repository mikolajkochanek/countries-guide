import './NavBar.css'
export default function NavBar({navItems, children}) {

    const areChildrenPassed = !!children;

    const renderedChildren = areChildrenPassed ? <div className='children-container'>{children}</div> : null;

    const renderedNavItems = navItems.map((navItem,index) => {
       return <li className='nav-item' key={index}>{navItem}</li>
    })

    return <nav> 
        <div className='brand'>
            <span className="brand-blue">World </span>
            <span className="brand-red">Explorer</span>
        </div>
        
        <div className='nav-container'>
            <ul>
                {renderedNavItems}
            </ul>
        </div>

        {renderedChildren}
        
        </nav>


}