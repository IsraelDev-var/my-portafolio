const ShowMenu = ({handleShowMenu}) => {
  return (
    <section className="bg-zinc-900/70 p-2  fixed top-0 left-0 right-0 flex flex-col h-[600px]  w-full">
        <i className='bx bx-x  text-white self-end ' onClick={handleShowMenu}></i>
        <h3 className="tittle__menu grid place-items-center p-2 text-white">Menu</h3>
    <ul className="menu text-white flex h-full space-y-8 flex-col gap-8  items-center">
        <li >
            <a onClick={handleShowMenu} className="nav__link" href="#home">Home</a>
        </li>
        <li >
            <a onClick={handleShowMenu} className="nav__link" href="#about">About Me</a>
        </li>
        <li >
        <a onClick={handleShowMenu} className="nav__link" href="#projects">Projects</a>
        </li>
        <li >
            <a onClick={handleShowMenu} className="nav__link" href="#contact">Contact Me</a>
        </li>
    </ul>
    
</section>
)
}
export default ShowMenu