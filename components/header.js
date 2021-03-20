import Link from 'next/link'

const Header = (props) => {
  return (
    <nav>
      <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/devworks"><a>Dev</a></Link></li>
        <li><Link href="/"><a>Design</a></Link></li>
        <li><Link href="/lab"><a>Lab</a></Link></li>
        <li><Link href="/"><a>Contact</a></Link></li>
        <li><Link href="/"><a>Account</a></Link></li>
      </ul>
    </nav>
  );
}
export default Header;