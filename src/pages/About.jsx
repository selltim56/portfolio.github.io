

function About() {

    return (
        <div className={" pt-8 z-20 relative "} id={"top"}>
            <section className={"container  flex items-center mt-[13vh] mb-36 gap-20"}>
                <div className={"w-fit relative"}>
                    <img src={"photo.jpg"} alt={"Photo Victor LE FLOCH"}
                         className={" rounded-t-full w-[500px] h-[500px] object-cover "}/>
                    <div className={"bg-green_primary h-10 w-[500px] "}></div>



                    <svg className={" absolute top-4 left-6 h-28 w-fit   "} xmlns="http://www.w3.org/2000/svg"
                         fill="none" height="66" viewBox="0 0 66 66" width="66">
                        <path
                            d="m28.1267 4.23225c1.1879-5.175299 8.5587-5.175287 9.7466.00001l3.7596 16.38014c.4287 1.8676 1.8871 3.326 3.7547 3.7547l16.3802 3.7596c5.1752 1.1879 5.1752 8.5587-.0001 9.7466l-16.3801 3.7596c-1.8676.4287-3.326 1.8871-3.7547 3.7547l-3.7596 16.3802c-1.1879 5.1752-8.5587 5.1752-9.7466-.0001l-3.7596-16.3801c-.4287-1.8676-1.8871-3.326-3.7547-3.7547l-16.38015-3.7596c-5.175299-1.1879-5.175287-8.5587.00001-9.7466l16.38014-3.7596c1.8676-.4287 3.326-1.8871 3.7547-3.7547z"
                            fill="#fff"/>
                    </svg>
                </div>
                <div className={"flex-1"}>
                    <h1 className={" viga-regular text-green_primary text-6xl pb-10 pt-8"}>Je suis Victor Le Floch</h1>
                    <p className={" viga-regular text-green_primary text-3xl py-6 "}>Je suis étudiant en Informatique et
                        passionné par le développement web.</p>
                    <div className={"space-y-4 "}>
                        <p className={"text-green_header font-semibold text-xl"}>Actuellement en 3e année de BUT Informatique à l'IUT de Lannion et en alternance en tant que développeur web dans l'entreprise Selltim. Vous trouverez sur ce site toutes les informations me concernant.</p>
                        <p className={"text-green_header font-semibold text-xl"}>Condimentum lacus tempor erat elementum lectus imperdiet iaculis, neque massa quisque vulputate mus sapien diam aptent, libero primis commodo augue dapibus ultrices.</p>
                    </div>

                </div>

            </section>


            <section className={"relative container  "}>
                <h2 className={" text-6xl viga-regular text-green_primary pb-12"}>Mon parcours</h2>

                <div className={" flex gap-6 "}>
                    {/*<p className={" cursor-pointer px-6 py-3 bg-green_primary/80 hover:bg-green_primary duration-300 text-white font-semibold rounded-2xl "}> Tout voir  </p>*/}

                    <p className={"  px-6 py-3 bg-[#d8b5e6]/80 duration-300 text-[#344542] font-semibold rounded-2xl "}> Parcours scolaire </p>
                    <p className={"  px-6 py-3 bg-[#efc9b2]/80 duration-300 text-[#344542] font-semibold rounded-2xl "}> Professionnel </p>
                </div>


                <div className={"grid relative grid-cols-8  text-[#344542] font-semibold -ml-[2%] w-[110%] "}>
                    <div className={"absolute z-10 bottom-0 left-0 w-full h-[80%] grid grid-cols-8"}>
                        <div className={"h-full w-0.5 bg-[#34454244] translate-x-4"}></div>
                        <div className={"h-full w-0.5 bg-[#34454244] translate-x-4"}></div>
                        <div className={"h-full w-0.5 bg-[#34454244] translate-x-4"}></div>
                        <div className={"h-full w-0.5 bg-[#34454244] translate-x-4"}></div>
                        <div className={"h-full w-0.5 bg-[#34454244] translate-x-4"}></div>
                        <div className={"h-full w-0.5 bg-[#34454244] translate-x-4"}></div>
                        <div className={"h-full w-0.5 bg-[#34454244] translate-x-4"}></div>
                        <div className={"h-full w-0.5 bg-[#34454244] translate-x-4"}></div>

                    </div>

                    <div className={" my-10"}>2017</div>
                    <div className={" my-10"}>2018</div>
                    <div className={" my-10"}>2019</div>
                    <div className={" my-10"}>2020</div>
                    <div className={" my-10"}>2021</div>
                    <div className={" my-10"}>2022</div>
                    <div className={" my-10"}>2023</div>
                    <div className={" my-10"}>2024</div>

                    <div className={"col-span-6"}></div>
                    <div
                        className={"mb-4 col-span-1  ml-[50%] -mr-[60%] relative z-20 bg-[#efc9b2]  py-3 px-6 rounded-full"}>
                        <p>2023 - 2024 : Selltim </p>
                        {/*<p>IUT Lannion (22), Université Rennes 1</p>*/}
                        <p></p>
                    </div>
                    <div></div>

                    <div className={"col-span-6"}></div>
                    <div
                        className={"mb-4 col-span-1  mr-[15%] relative z-20 bg-[#efc9b2]  py-3 px-4 rounded-full"}>
                        <p>2023 : Print Sh...</p>
                        {/*<p>IUT Lannion (22), Université Rennes 1</p>*/}
                        <p></p>
                    </div>
                    <div></div>

                    <div className={"col-span-4"}></div>
                    <div
                        className={"col-span-3 ml-[20%] -mr-[20%] relative z-20 bg-[#d8b5e6]  py-3 px-6 rounded-full"}>
                        <p>2021 - 2024 : BUT informatique</p>
                        {/*<p>IUT Lannion (22), Université Rennes 1</p>*/}
                        <p></p>
                    </div>
                    <div></div>

                    <div></div>
                    <div className={"mb-4 ml-[45%] -mr-[60%] relative z-20 bg-[#d8b5e6]  py-3 px-6 rounded-full"}>
                        <p>2019 : Obtention BIA</p>

                    </div>
                    <div className={"col-span-6"}></div>

                    <div></div>
                    <div
                        className={"col-span-3 ml-[15%] -mr-[20%] relative z-20 bg-[#d8b5e6]  py-3 mb-4 px-6 rounded-full"}>
                        <p>2018 - 2021 : Baccalauréat général</p>
                        {/*<p>Lycée Notre Dame du Vœu, Hennebont (56)</p>*/}
                        <p></p>
                    </div>
                    <div className={"col-span-4"}></div>


                    <div
                        className={"mb-4   -mr-[50%] relative z-20 bg-[#d8b5e6]  py-3 px-6 rounded-r-full"}>
                        <p>2018 : Brevet</p>
                        {/*<p>Brevet</p>*/}
                    </div>
                    <div className={" col-span-7"}></div>


                </div>
            </section>

            <section className={"container "}>
                <h2 className={" text-6xl viga-regular text-green_primary pb-6 "}>Mes passions </h2>

                <div className={"grid grid-cols-2 gap-16 my-10"}>
                    <div className={"bg-white/40 rounded-3xl  p-16 relative"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000"
                             className={" w-24 h-auto fill-green_header -rotate-12 absolute top-20 right-12"}
                             viewBox="-64 0 512 512">
                            <path
                                d="M80.95 472.23c-4.28 17.16 6.14 34.53 23.28 38.81 2.61.66 5.22.95 7.8.95 14.33 0 27.37-9.7 31.02-24.23l25.24-100.97-52.78-52.78-34.56 138.22zm14.89-196.12L137 117c2.19-8.42-3.14-16.95-11.92-19.06-43.88-10.52-88.35 15.07-99.32 57.17L.49 253.24c-2.19 8.42 3.14 16.95 11.92 19.06l63.56 15.25c8.79 2.1 17.68-3.02 19.87-11.44zM368 160h-16c-8.84 0-16 7.16-16 16v16h-34.75l-46.78-46.78C243.38 134.11 228.61 128 212.91 128c-27.02 0-50.47 18.3-57.03 44.52l-26.92 107.72a32.012 32.012 0 0 0 8.42 30.39L224 397.25V480c0 17.67 14.33 32 32 32s32-14.33 32-32v-82.75c0-17.09-6.66-33.16-18.75-45.25l-46.82-46.82c.15-.5.49-.89.62-1.41l19.89-79.57 22.43 22.43c6 6 14.14 9.38 22.62 9.38h48v240c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V176c.01-8.84-7.15-16-15.99-16zM240 96c26.51 0 48-21.49 48-48S266.51 0 240 0s-48 21.49-48 48 21.49 48 48 48z"/>
                        </svg>
                        <h3 className={"text-green_header text-4xl viga-regular"}> La randonnée </h3>

                    </div>
                    <div className={"bg-white/40 rounded-3xl  p-16 relative"}>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                               className={" w-24 h-auto fill-green_header -rotate-12 absolute top-20 right-12"}

                             fill="#000000" height="800px" width="800px" version="1.1" id="Icons" viewBox="0 0 32 32">
                            <g>
                                <path
                                    d="M3,16c-0.1,0-0.3,0-0.4-0.1c-0.2-0.1-0.4-0.3-0.5-0.6l-1.4-3.8C0.4,10.8,0.5,10,0.8,9.3C1.1,8.6,1.7,8,2.5,7.7l20.7-7.5   l0,0c0.8-0.3,1.6-0.2,2.3,0.1C26.2,0.6,26.7,1.2,27,2l1.4,3.8c0.1,0.2,0.1,0.5,0,0.8C28.2,6.8,28,6.9,27.8,7L3.3,15.9   C3.2,16,3.1,16,3,16z"/>
                            </g>
                                                        <g>
                                <path d="M30,20v-4c0-0.6-0.4-1-1-1H3c-0.6,0-1,0.4-1,1v4H30z"/>
                                                            <path d="M2,22v7c0,1.7,1.3,3,3,3h22c1.7,0,3-1.3,3-3v-7H2z"/>
                            </g>
                            </svg>
                        <h3 className={"text-green_header text-4xl viga-regular"}> Le cinéma </h3>

                    </div>
                    <div className={"bg-white/40 rounded-3xl  p-16 relative"}>
                        <h3 className={"text-green_header text-4xl viga-regular"}> Le développement web </h3>

                    </div>
                    <div className={"bg-white/40 rounded-3xl  p-16 relative"}>
                        <h3 className={"text-green_header text-4xl viga-regular"}> Le tennis de table </h3>

                    </div>

                </div>
            </section>

            <section>


            </section>

        </div>
    )
}

export default About