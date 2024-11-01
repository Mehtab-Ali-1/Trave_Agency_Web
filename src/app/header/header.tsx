import Image from "next/image";
import Link from "next/link";

function Header (){
    return(
        <main>
            {/* ********************************************************************* */}
                         {/* header */}
            <header className="flex space-around place-content-between mx-10 mt-8">
                <div className="ml-36 font-bold text-5xl">
                    <h1 className="">Jad<span className="text-pink-600">oo</span></h1>
                </div>
                <div className="flex gap-6" >
                    <ul className="flex gap-6">
                        <li className="hover:text-pink-600 p-2 active:bg-slate-400"><Link href="#">Home</Link></li>
                        <li className="hover:text-pink-600 p-2 active:bg-slate-400 "><Link href="#destination/page.tsx">Destination</Link></li>
                        <li className="hover:text-pink-600 p-2 active:bg-slate-400 "><Link href="#">Hotel</Link></li>
                        <li className="hover:text-pink-600 p-2 active:bg-slate-400 "><Link href="#">Flight</Link></li>
                        <li className="hover:text-pink-600  p-2 active:bg-slate-400 "><Link href="#">Bookings</Link></li>
                        <li className="hover:text-pink-600   p-2 active:bg-slate-400 "><Link href="#">Login</Link></li>
                        <li className="border-gray-500 border-2 px-1 hover:text-pink-600 p-2"><Link href="#">Sign up</Link></li> 
                    </ul>
                    <select className="hover:text-pink-600 p-2 active:bg-slate-400 " name="language" id="language">
                            <option value="language">Eng</option>
                            <option value="eng">Eng</option>
                        </select>
                </div>
            </header>
{/* ******************************************************************************* */}
            {/* Body */}
            {/* first section */}

            <div className="flex mt-16 ml-14 gap-7">
                <div className="flex-1 ">
                    <p className="text-pink-600 uppercase text-lg mt-12">best destination around the world</p>
                    <h2 className="font-bold text-6xl font-serif mt-3">Travel, enjoy and live a new and full life</h2>
                    <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ea repellendus unde impedit quam in maiores soluta! Ad, officia nostrum modi possimus, nobis odit voluptatibus perferendis repellat.</p>
                    <div className="flex mt-5 justify-center gap-14 ">
                    <Link className="bg-yellow-400 py-2 px-4 rounded-lg hover:bg-yellow-500 active:bg-yellow-600" href="#">show me more</Link>
                    <Link className="flex items-center gap-2 bg-slate-300 py-2 px-4 rounded-lg hover:bg-slate-400 active:bg-slate-500" href="#"><Image className="" src="/playicon.png" alt="play" height={25} width={25} />Play Demo</Link>
                    </div>
                </div>
                <div className="flex-1 justify-center items-center">
                <Image src="/aeroplane.jpg" alt="aeroplane" height={300} width={500}/>
                </div>
            </div>
{/* ***************************************************************************** */}

            {/* second section */}
            <div className="text-center pt-16">
                <p className="uppercase">category</p>
                <h1 className="text-5xl font-serif my-6">We Offer Best Services</h1>
            </div>
            {/* second section with image icons */}
            <div className="flex raw-span-3 mt-16 mx-8 gap-6 text-center items-center justify-center ">
                <div className="flex-col m-5 justify-center">
                    <Image className="ml-24 mb-3" src="/weathericon.png" alt="weather" height={60} width={60}/>
                    <h1 className="text-2xl font-semibold my-6">Calculated Weather</h1>
                    <p className="">Built Wicker longer admire do borton vanity itself do in it.</p>
                </div>
                <div className="m-5">
                    <Image className="ml-24"  src="/aeroplaneicon1.png" alt="aero" height={60} width={60}/>
                    <h1 className="text-2xl font-semibold my-6">Best Flights</h1>
                    <p>Engrossed listening.Park gate sell they west hard for the.</p>
                </div>
                <div className="m-5">
                    <Image className="ml-24"  src="/eventicon.png" alt="event" height={60} width={60}/>
                    <h1 className="text-2xl font-semibold my-6">Local Events</h1>
                    <p>Barton vanity itself do in it. Prefered to men it engrossed listening.</p>
                </div>
                <div className="m-5">
                    <Image className="ml-24"  src="/settingicon.png" alt="setting" height={55} width={55}/>
                    <h1 className="text-2xl font-semibold my-6">Customization</h1>
                    <p>We deliver outsourced aviation services for military customers.</p>
                </div>
            </div>
{/* ******************************************************************************* */}

            {/* third section */}
            <div className="text-center pt-16">
                <p>Top Selling</p>
                <h1 className="text-5xl font-serif my-6">Top Destinations</h1>
            </div>

            {/* third section with image icon */}
            <section className="flex justify-center gap-8 rounded-t-lg mt-16">
            <div className="rounded-3xl bg-slate-200 hover:bg-slate-300 active:bg-slate-400 transition ease-in-out delay-50 hover:-translate-y-2 hover:scale-110 duration-300">
                <Link href="#">
                    <Image className="h-72 w-80 mb-4 rounded-t-3xl" src="/place1.jpg" alt="place" height={100} width={300} />
                    <div className="flex justify-around mb-2 font-semibold">
                        <p>Rome Italy</p>
                        <p>$5.42k</p>
                    </div>
                    <div className="flex gap-4 ml-8 items-center">
                        <Image src="/messageicon.png" alt="mess" height={30} width={30}/>
                        <p>10 Days Trip</p>
                    </div>
                </Link>
            </div>
            <div className="rounded-3xl bg-slate-200 hover:bg-slate-300 active:bg-slate-400 transition ease-in-out delay-50 hover:-translate-y-2 hover:scale-110 duration-300">
                <Link href="/">
                    <Image className="h-72 w-80 mb-4 rounded-t-3xl" src="/place2.jpg" alt="place" height={50} width={200} />
                    <div className="flex justify-around mb-2 font-semibold">
                        <p>London, UK</p>
                        <p>$4.2k</p>
                    </div>
                    <div className="flex gap-4 ml-8  items-center">
                        <Image src="/messageicon.png" alt="mess" height={30} width={30}/>
                        <p>12 Days Trip</p>
                    </div>
                </Link>
            </div>
            <div className="rounded-3xl bg-slate-200 hover:bg-slate-300 active:bg-slate-400 transition ease-in-out delay-50 hover:-translate-y-2 hover:scale-110 duration-300">
                <Link href="/">
                    <Image className="h-72 w-80 rounded-t-3xl mb-4" src="/place3.jpg" alt="place" height={50} width={200} />
                    <div className="flex justify-around mb-2 font-semibold">
                        <p>Full Europe</p>
                        <p>$15k</p>
                    </div>
                    <div className="flex gap-4 ml-8  items-center">
                        <Image src="/messageicon.png"alt="mess" height={30} width={30}/>
                        <p>28 Days Trip</p>
                    </div>
                </Link>
            </div>
            </section>
            {/* ******************************************************************************* */}
            {/* fourth section */}
            <section className="flex justify-center mx-20 mt-28">
                <div className="flex-1 ">
                    <div className="text-start">
                    <p className="">Easy and Fast</p>
                    <h1 className="text-3xl font-serif font-bold my-8">Book Your Next Trip <br /> In 3 Easy Steps</h1>
                    </div>
                    {/* ******************* */}
                    {/* firsticon */}
                    <div className="flex gap-8 mt-5 items-center">
                    <div className="h-14 w-32 bg-amber-400 rounded-xl flex items-center justify-center">
                        <Image className="h-12 w-30 p-1" src="/box.png" alt="box" height={10} width={45}/>
                        </div>
                        <div>
                            <h1 className="font-semibold">Choose Destination</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores quae fuga sed iusto ipsum hic quis quia at tenetur placeat.</p>
                        </div>
                    </div>
                    {/* secondicon */}
                    <div className="flex gap-8 mt-5 items-center">
                        <div className="h-14 w-32 bg-orange-600 rounded-xl flex items-center justify-center">
                        <Image className="h-12 w-30 p-1" src="/paymenticon.png" alt="pament" height={10} width={45}/>
                        </div>
                        <div>
                            <h1 className="font-semibold">Make Payment</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores quae fuga sed iusto ipsum hic quis quia at tenetur placeat.</p>
                        </div>
                    </div>
                    {/* thirdicon */}
                    <div className="flex gap-8 mt-5 items-center">
                    <div className="h-14 w-32 bg-teal-400 rounded-xl flex items-center justify-center">
                        <Image className="h-12 w-30 p-1" src="/caricon.png" alt="caricon" height={10} width={45}/>
                        </div>
                        <div>
                            <h1 className="font-semibold">Reach Airport on Selected Date</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores quae fuga sed iusto ipsum hic quis quia at tenetur placeat.</p>
                        </div>
                    </div>
                </div>
                    {/* picture4 */}
                <div className="flex-1">
                    <div className="flex justify-center">
                        <div className=" bg-slate-200 px-10 pb-2 pt-5 rounded-3xl">
                        <Image className="w-72 h-80 rounded-3xl" alt="place" src="/place4image.webp" height={250} width={150}/>
                        <p className="mt-4 font-semibold text-xl">Trip to Greece</p>
                        <p className="text-start">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Suscipit repudiandae, natus <br /> fugit modi necessitatibus rem.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* ******************************************************************************* */}
            {/* fifth section */}
            <div className="flex my-36 justify-around text-2xl font-bold">
                <ul className="flex gap-24">
                    <li className="p-2 hover:bg-slate-300 hover:rounded-lg active:bg-slate-400">axon</li>
                    <li className="p-2 hover:bg-slate-300 hover:rounded-lg active:bg-slate-400">Jetstar</li>
                    <li className="p-2 hover:bg-slate-300 hover:rounded-lg active:bg-slate-400">Expedia</li>
                    <li className="p-2 hover:bg-slate-300 hover:rounded-lg active:bg-slate-400">GANTAS</li>
                    <li className="p-2 hover:bg-slate-300 hover:rounded-lg active:bg-slate-400">Alitalia</li>
                </ul>
            </div>
            {/* ************************************************ */}
            <div className="flex bg-slate-200 h-52 mx-20 my-28 justify-center items-center text-center rounded-r-full rounded-l-full">
            <div className="">
                <div className="text-3xl font-serif font-semibold">Subscribe to get information, latest news and other <br /> interesting offers about jadoo</div>
                <div className="pt-4 flex gap-14 justify-center">
                <input className="h-12 w-96 pl-6 rounded-lg" type="email" placeholder="Your email" />
                <button className="bg-yellow-400 text-lg px-4 rounded-lg hover:bg-yellow-500 active:bg-yellow-600" type="button" >Subscribe</button>
                </div>
                </div>
            </div>
            {/* ****************************************************** */}
                {/* FOOTER */}
            <footer className="mt-24 bg-slate-300 pt-10 pb-12">
                <div className="flex justify-around items-center leading-7">
                    {/* firstLine */}
                    <div>
                        <h1 className="text-4xl font-bold from-neutral-800 pb-4" >Jadoo</h1>
                        <p>Lorem ipsum dolor sit <br /> amet consectetur adipisicing elit. <br /> Saepe, assumenda?</p>
                    </div>
                    {/* secondLine */}
                    <div>
                        <ul>
                            <li className="font-bold text-lg pb-1">Company</li>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Mobile</li>
                        </ul>
                    </div>
                    {/* thirdLine */}
                    <div>
                        <ul>
                            <li className="font-bold text-lg pb-1">Contact</li>
                            <li>Help/FAQ</li>
                            <li>Press</li>
                            <li>Affiliates</li>
                        </ul>
                    </div>
                    {/* fourthLine */}
                    <div>
                        <ul>
                            <li className="font-bold text-lg pb-1">More</li>
                            <li>Airlinefees</li>
                            <li>Airline</li>
                            <li>Low fare tips</li>
                        </ul>
                    </div>
                </div>
                    {/* fifthLine */}
                    {/* icons */}
                    <div className="my-10">
                        <ul className="flex justify-center gap-6">
                            <li className="transition ease-in-out delay-50 hover:-translate-y-2 hover:scale-110 duration-300"><Link href="https://www.facebook.com/profile.php?id=100024441846165"><Image src="/facebookicon.png" alt="facebook" height={35} width={35}/></Link></li>
                            <li className="transition ease-in-out delay-50 hover:-translate-y-2 hover:scale-110 duration-300"><Link href="https://www.instagram.com/mehtab_ali_011___/?next=%2Fproud.mp%2Ffeed%2F"><Image src="/instagramicon.png" alt="insta" height={35} width={35}/></Link></li>
                            <li className="transition ease-in-out delay-50 hover:-translate-y-2 hover:scale-110 duration-300"><Link href="https://www.linkedin.com/in/mehtab-ali-561651301/"><Image src="/linkedinicon.png" alt="linkedin" height={35} width={35}/></Link></li>
                            <li className="transition ease-in-out delay-50 hover:-translate-y-2 hover:scale-110 duration-300"><Link href="http://twitter.com/"><Image src="/twittericon.png" alt="twitter" height={35} width={35}/></Link></li>
                            <li className="transition ease-in-out delay-50 hover:-translate-y-2 hover:scale-110 duration-300"><Link href="https://github.com/Mehtab-Ali-1"><Image src="/githubicon.png" alt="github" height={35} width={35}/></Link></li>
                        </ul>
                    </div>
            </footer>
        </main>
    )
}
export default Header;