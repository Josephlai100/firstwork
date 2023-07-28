import Link from "next/link"

function MainNavigation(){
    return(
        <div>
            {/* <h1>Nav</h1> */}
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'>About Us</Link></li>
                <li><Link href='/contact'>Contact Us</Link></li>
                <li><Link href='/admin/adminDashboard'>Admin Dashboard</Link></li>
                <li><Link href='/users'>Users Dashboard</Link></li>
                <li><Link href='/users/users-login'>Users Login</Link></li>
            </ul>

        </div>
    )
}

export default MainNavigation