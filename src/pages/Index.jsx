import {NavLink} from "react-router-dom";

function Index() {

    return (
        <div className={" pt-8 z-20 relative "} id={"top"}>

            <section className={"container relative"}>
                <div
                    className={" pt-44 pb-16 text-green_primary flex flex-col justify-center items-center text-7xl viga-regular"}>
                    <h1>Bonjour. Je suis Victor, </h1>
                    <p>Développeur web. </p>
                </div>
                <p className={"text-center text-2xl roboto-regular text-green_header"}>Je suis étudiant en Informatique
                    et passionné par le développement web. </p>

                <div>
                    <svg className={" absolute top-32 left-40 h-24 w-fit "} xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 66 66" >
                        <path
                            d="m28.1267 4.23225c1.1879-5.175299 8.5587-5.175287 9.7466.00001l3.7596 16.38014c.4287 1.8676 1.8871 3.326 3.7547 3.7547l16.3802 3.7596c5.1752 1.1879 5.1752 8.5587-.0001 9.7466l-16.3801 3.7596c-1.8676.4287-3.326 1.8871-3.7547 3.7547l-3.7596 16.3802c-1.1879 5.1752-8.5587 5.1752-9.7466-.0001l-3.7596-16.3801c-.4287-1.8676-1.8871-3.326-3.7547-3.7547l-16.38015-3.7596c-5.175299-1.1879-5.175287-8.5587.00001-9.7466l16.38014-3.7596c1.8676-.4287 3.326-1.8871 3.7547-3.7547z"
                            fill="#fff"/>
                    </svg>
                    <svg className={" absolute bottom-32 right-48 h-18 w-fit   "} xmlns="http://www.w3.org/2000/svg" fill="none" height="66" viewBox="0 0 66 66" width="66">
                        <path
                            d="m28.1267 4.23225c1.1879-5.175299 8.5587-5.175287 9.7466.00001l3.7596 16.38014c.4287 1.8676 1.8871 3.326 3.7547 3.7547l16.3802 3.7596c5.1752 1.1879 5.1752 8.5587-.0001 9.7466l-16.3801 3.7596c-1.8676.4287-3.326 1.8871-3.7547 3.7547l-3.7596 16.3802c-1.1879 5.1752-8.5587 5.1752-9.7466-.0001l-3.7596-16.3801c-.4287-1.8676-1.8871-3.326-3.7547-3.7547l-16.38015-3.7596c-5.175299-1.1879-5.175287-8.5587.00001-9.7466l16.38014-3.7596c1.8676-.4287 3.326-1.8871 3.7547-3.7547z"
                            fill="#fff"/>
                    </svg>
                </div>
            </section>

            <section className={"container mt-28 grid grid-cols-3 gap-16"}>
                <NavLink to="/about"  className={"relative group hover:-translate-y-1  shadow-[0_5px_20px_-0px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-0px_rgba(0,0,0,0.2)]  bg-[#d890f1] h-96 w-full rounded-[50px] p-8 duration-300"} >
                    <div>
                        <p className={" text-[#344542] uppercase viga-regular text-right   text-3xl "}>À propos </p>
                        {/*<p className={" text-[#344542]  font-semibold roboto-regular text-right mt-2"}>Lorem ipsum dolor*/}
                        {/*    sit amet </p>*/}
                    </div>

                    <div className={"absolute overflow-hidden rounded-[50px] top-0 left-0 h-full w-full "}>
                        <div
                            className={"bg-[#ffffff60] rounded-[20px] absolute group-hover:top-44 top-40 duration-300  -right-8 w-full h-full "}>
                            <div className={" absolute top-0 left-0 w-full h-10 bg-white/30 rounded-t-[20px] flex"}>

                            </div>
                        </div>
                    </div>

                    <div className={"absolute -top-8 left-20 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-500 "}>
                        <svg className={" absolute top-0 left-0 h-12 w-fit "} xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 66 66">
                            <path
                                d="m28.1267 4.23225c1.1879-5.175299 8.5587-5.175287 9.7466.00001l3.7596 16.38014c.4287 1.8676 1.8871 3.326 3.7547 3.7547l16.3802 3.7596c5.1752 1.1879 5.1752 8.5587-.0001 9.7466l-16.3801 3.7596c-1.8676.4287-3.326 1.8871-3.7547 3.7547l-3.7596 16.3802c-1.1879 5.1752-8.5587 5.1752-9.7466-.0001l-3.7596-16.3801c-.4287-1.8676-1.8871-3.326-3.7547-3.7547l-16.38015-3.7596c-5.175299-1.1879-5.175287-8.5587.00001-9.7466l16.38014-3.7596c1.8676-.4287 3.326-1.8871 3.7547-3.7547z"
                                fill="#fff"/>
                        </svg>
                        <svg className={" absolute top-8 left-12 h-10 w-fit "} xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 66 66">
                            <path
                                d="m28.1267 4.23225c1.1879-5.175299 8.5587-5.175287 9.7466.00001l3.7596 16.38014c.4287 1.8676 1.8871 3.326 3.7547 3.7547l16.3802 3.7596c5.1752 1.1879 5.1752 8.5587-.0001 9.7466l-16.3801 3.7596c-1.8676.4287-3.326 1.8871-3.7547 3.7547l-3.7596 16.3802c-1.1879 5.1752-8.5587 5.1752-9.7466-.0001l-3.7596-16.3801c-.4287-1.8676-1.8871-3.326-3.7547-3.7547l-16.38015-3.7596c-5.175299-1.1879-5.175287-8.5587.00001-9.7466l16.38014-3.7596c1.8676-.4287 3.326-1.8871 3.7547-3.7547z"
                                fill="#fff"/>
                        </svg>
                        <svg className={" absolute top-16 left-0 h-20 w-fit "} xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 66 66">
                            <path
                                d="m28.1267 4.23225c1.1879-5.175299 8.5587-5.175287 9.7466.00001l3.7596 16.38014c.4287 1.8676 1.8871 3.326 3.7547 3.7547l16.3802 3.7596c5.1752 1.1879 5.1752 8.5587-.0001 9.7466l-16.3801 3.7596c-1.8676.4287-3.326 1.8871-3.7547 3.7547l-3.7596 16.3802c-1.1879 5.1752-8.5587 5.1752-9.7466-.0001l-3.7596-16.3801c-.4287-1.8676-1.8871-3.326-3.7547-3.7547l-16.38015-3.7596c-5.175299-1.1879-5.175287-8.5587.00001-9.7466l16.38014-3.7596c1.8676-.4287 3.326-1.8871 3.7547-3.7547z"
                                fill="#fff"/>
                        </svg>
                    </div>
                </NavLink>
                <NavLink to="/skills"
                         className={" mx-auto w-11/12  relative col-span-2 group hover:-translate-y-1  shadow-[0_5px_20px_-0px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-0px_rgba(0,0,0,0.1)]  bg-[#9adfd5] h-96 rounded-[50px] p-8 duration-300"}>


                    <div>
                        <p className={" text-[#344542] uppercase viga-regular text-right   text-3xl "}>Mes
                            compétences </p>
                        {/*<p className={" text-[#344542]  font-semibold roboto-regular text-right mt-2"}>Lorem ipsum dolor*/}
                        {/*    sit amet dolor sit amet </p>*/}
                    </div>

                    <div className={"absolute overflow-hidden rounded-[50px] top-0 left-0 h-full w-full "}>
                        <div
                            className={"bg-[#ffffff60] rounded-[20px] absolute group-hover:top-44 top-40 duration-300  -right-32 w-full h-full "}>
                            <div className={" absolute top-0 left-0 w-full h-10 bg-white/30 rounded-t-[20px] flex"}>

                            </div>
                        </div>
                    </div>


                    <svg
                        className={" text-white h-32 w-fit absolute translate-y-8 group-hover:translate-y-0  -top-8 left-16 -rotate-12 opacity-0 group-hover:opacity-100 duration-500 "}
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        fill="currentColor"
                        version="1.2" baseProfile="tiny" id="shape" viewBox="0 0 256 256">
                        <path
                            d="M237,19H19c-8.2,0-14.9,6.7-14.9,14.9v188.3c0,8.2,6.7,14.9,14.9,14.9h218c8.2,0,14.9-6.7,14.9-14.9V33.9  C251.9,25.7,245.2,19,237,19z M199.8,28.9c5.4,0,9.9,4.5,9.9,9.9c0,5.5-4.5,9.9-9.9,9.9s-9.9-4.5-9.9-9.9S194.4,28.9,199.8,28.9z   M172.6,28.9c5.4,0,9.9,4.5,9.9,9.9c0,5.5-4.5,9.9-9.9,9.9s-9.9-4.5-9.9-9.9S167.1,28.9,172.6,28.9z M237,223.9H19V58.6h218V223.9z   M227.1,48.7c-5.4,0-9.9-4.5-9.9-9.9s4.5-9.9,9.9-9.9s9.9,4.5,9.9,9.9C237,44.3,232.5,48.7,227.1,48.7z M96,74h76.1v14.4H96V74z   M126,106.9h96.3v14.3H126V106.9z M126,135.5h96.3v14.3H126V135.5z M126,164.5h96.3v14.3H126V164.5z M32.6,193.1h189.8v14.3H32.6  V193.1z M32.6,106.9h67.8v70.7H32.6V106.9z"/>
                    </svg>

                    <svg
                        className={" text-white h-28 w-fit translate-y-6 group-hover:translate-y-0  absolute -top-12 right-[45%] rotate-6 opacity-0 group-hover:opacity-100 duration-500 "}
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        fill="none">
                        <path
                            d="M3 8.2C3 7.07989 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.07989 21 8.2V15.8C21 16.9201 21 17.4802 20.782 17.908C20.5903 18.2843 20.2843 18.5903 19.908 18.782C19.4802 19 18.9201 19 17.8 19H6.2C5.07989 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2Z"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 9L7 12L10 15M14 9L17 12L14 15" stroke="currentColor" stroke-width="2"
                              stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>


                </NavLink>

                <NavLink to={"/projects"}
                   className={" mx-auto w-11/12  relative col-span-2 group hover:-translate-y-1  shadow-[0_5px_20px_-0px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-0px_rgba(0,0,0,0.1)]  bg-[#f0b695] h-96 rounded-[50px] p-8 duration-300"}>
                    <div>
                        <p className={" text-[#344542] uppercase viga-regular text-right   text-3xl "}>Mes projets </p>
                        {/*<p className={" text-[#344542]  font-semibold roboto-regular text-right mt-2"}>Lorem ipsum dolor*/}
                        {/*    sit amet dolor sit amet </p>*/}
                    </div>

                    <div className={"absolute overflow-hidden rounded-[50px] top-0 left-0 h-full w-full "}>
                        <div
                            className={"bg-[#ffffff60] rounded-[20px] absolute group-hover:top-44 top-40 duration-300  -right-28 w-full h-full "}>
                            <div className={" absolute top-0 left-0 w-full h-10 bg-white/30 rounded-t-[20px] flex"}>

                            </div>
                        </div>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={"translate-y-6 group-hover:translate-y-0  text-white h-44 w-fit absolute -top-14 right-1/2 rotate-12 opacity-0 group-hover:opacity-100 duration-500 "}
                         viewBox="0 0 100 100">
                        <path
                            d="M75.87,29.25l-9-8.88A1.13,1.13,0,0,0,66,20a1.39,1.39,0,0,0-1.38,1.38v6.38a3.89,3.89,0,0,0,3.87,3.87h6.37a1.39,1.39,0,0,0,1.38-1.38A1.66,1.66,0,0,0,75.87,29.25Z"
                            fill-rule="evenodd"/>
                        <path
                            d="M29.63,62.63v-31a5.84,5.84,0,0,0-5.88,5.75V74.12A5.87,5.87,0,0,0,29.63,80H58.75a5.84,5.84,0,0,0,5.88-5.75H41.25C34.88,74.25,29.63,74.25,29.63,62.63Z"
                            fill-rule="evenodd"/>
                        <path
                            d="M74.25,37.38H64.5a5.84,5.84,0,0,1-5.87-5.75V21.88A1.77,1.77,0,0,0,56.75,20H41.25a5.84,5.84,0,0,0-5.87,5.75V62.5a5.76,5.76,0,0,0,5.88,5.75H70.38a5.84,5.84,0,0,0,5.88-5.75V39.38A2,2,0,0,0,74.25,37.38ZM49.91,62.22a2.49,2.49,0,0,1-2.49,2.49h-5A2.49,2.49,0,0,1,40,62.22v-5a2.49,2.49,0,0,1,2.49-2.49h5a2.49,2.49,0,0,1,2.49,2.49Zm0-13.68A2.49,2.49,0,0,1,47.43,51h-5A2.49,2.49,0,0,1,40,48.54v-5a2.49,2.49,0,0,1,2.49-2.49h5a2.49,2.49,0,0,1,2.49,2.49ZM63.59,62.22A2.49,2.49,0,0,1,61.1,64.7h-5a2.49,2.49,0,0,1-2.49-2.49v-5a2.49,2.49,0,0,1,2.49-2.49h5a2.49,2.49,0,0,1,2.49,2.49Zm0-13.68A2.49,2.49,0,0,1,61.1,51h-5a2.49,2.49,0,0,1-2.49-2.49v-5a2.49,2.49,0,0,1,2.49-2.49h5a2.49,2.49,0,0,1,2.49,2.49Z"
                            fill-rule="evenodd"/>
                    </svg>

                    <svg
                        className={"translate-x-8 group-hover:translate-x-0  text-white h-32 w-fit absolute top-32 -left-10 -rotate-12 opacity-0 group-hover:opacity-100 duration-500 "}
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        fill="none">
                        <path d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20" stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                </NavLink>


                <NavLink to={"/"}
                   className={"relative group hover:-translate-y-1  shadow-[0_5px_20px_-0px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-0px_rgba(0,0,0,0.2)]  bg-[#b7e0ff] h-96 w-full rounded-[50px] p-8 duration-300"}>
                    <div>
                        <p className={" text-[#344542] uppercase viga-regular text-right   text-3xl "}>Me contacter</p>
                        {/*<p className={" text-[#344542]  font-semibold roboto-regular text-right mt-2"}>Lorem ipsum dolor*/}
                        {/*    sit amet </p>*/}
                    </div>

                    <div className={"absolute overflow-hidden rounded-[50px] top-0 left-0 h-full w-full "}>
                        <div
                            className={"bg-[#ffffff60] rounded-[20px] absolute group-hover:top-44 top-40 duration-300  -right-16 w-full h-full "}>
                            <div className={" absolute top-0 left-0 w-full h-10 bg-white/30 rounded-t-[20px] flex"}>

                            </div>
                        </div>
                    </div>

                    <svg className={"translate-y-6 group-hover:translate-y-0  text-white h-40 w-fit absolute -top-14 left-4 -rotate-3 opacity-0 group-hover:opacity-100 duration-500 "} xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                         viewBox="-4 0 19 19" >
                        <path
                            d="M10.114 2.69v13.76a1.123 1.123 0 0 1-1.12 1.12H2.102a1.123 1.123 0 0 1-1.12-1.12V2.69a1.123 1.123 0 0 1 1.12-1.12h6.892a1.123 1.123 0 0 1 1.12 1.12zm-1.12 1.844H2.102V14.78h6.892zm-5.31-1.418a.56.56 0 0 0 .56.56h2.61a.56.56 0 0 0 0-1.12h-2.61a.56.56 0 0 0-.56.56zm2.423 13.059a.558.558 0 1 0-.559.558.558.558 0 0 0 .559-.558z"/>
                    </svg>


                </NavLink>

            </section>
        </div>
    )
}

export default Index