import useEmblaCarousel from "embla-carousel-react";
import {NavLink} from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";


function Competences() {


    function fermer_popup(id_popup){
        const popup_competence = document.getElementById(id_popup);
        popup_competence.style.display = "none";
    }

    function open_competence(id_popup) {
        const popup_competence = document.getElementById(id_popup);
        popup_competence.style.display = "flex";
    }




    function openLevel(levelId, levelsClass, btnsClass, elementId) {
        // Get the DOM elements based on the provided IDs and classes
        const levelElement = document.getElementById(levelId);
        const levels = document.getElementsByClassName(levelsClass);
        const buttons = document.getElementsByClassName(btnsClass);
        const buttonElement = document.getElementById(elementId);

        // Reset the background color of all buttons
        for (const button of buttons) {
            button.style.background = "#d5d8cf88";
        }

        // Set the background color of the selected button
        buttonElement.style.background = "#d5d8cf";

        // Hide all levels
        for (const level of levels) {
            level.style.display = "none";
        }

        // Display the selected level
        levelElement.style.display = "block";
    }


    const [emblaRef1] = useEmblaCarousel();
    const [emblaRef2] = useEmblaCarousel();
    const [emblaRef3] = useEmblaCarousel();
    const [emblaRef4] = useEmblaCarousel();
    const [emblaRef5] = useEmblaCarousel();
    const [emblaRef6] = useEmblaCarousel();


    return (
        <div className={"pt-44 relative"} id={"top"}>

            <section className={"container "}>
                <h1 className={" viga-regular text-green_primary text-6xl"}> Mes compétences</h1>
                <div className={" text-green_header text-xl pt-10 space-y-3 w-4/5 font-semibold"}>
                    <p>Grâce à ma formation en BUT Informatique, j'ai acquis des compétences solides en programmation (Python, Java, C++), développement web (HTML, CSS, JavaScript), et gestion de bases de données (SQL, NoSQL). Je maîtrise également la gestion de projet, la modélisation, l'analyse et les principes de cybersécurité. </p>
                    <p>En plus de ma formation académique, mes expériences professionnelles m'ont permis de développer une expertise en développement de logiciels et d'applications, intégration de systèmes, et automatisation des processus. Toujours à l'affût des nouvelles technologies, je suis capable de proposer des solutions innovantes et adaptées. Mon sens du travail en équipe, ma communication efficace et ma capacité d'adaptation sont autant d'atouts que je mets au service de chaque projet.</p>
                </div>
                <a className={" bg-green_primary/80 hover:bg-green_primary duration-300 text-white rounded-xl px-6 py-4 block mt-8 w-fit"}
                   href={"programme_national_du_but_informatique.pdf"} target={"_blank"}> Programme BUT Informatique</a>
            </section>

            <section className={" grid grid-cols-1 container gap-16 "}>
                <article className={"-ml-16 grid grid-cols-2 gap-16"}>
                    <div onClick={()=>{open_competence("popup_realiser")}} className={"  px-16 py-10 cursor-pointer relative group hover:-translate-y-1 h-64 bg-[#9adfd5] text-[#344542] rounded-[50px] shadow-[0_5px_20px_-0px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_50px_-0px_rgba(0,0,0,0.2)] duration-300"}>
                        <p className={"viga-regular uppercase text-3xl pb-3 "}> UE 1 </p>
                        <p className={"viga-regular uppercase text-5xl "}> Réaliser </p>
                    </div>
                    <div onClick={()=>{open_competence("popup_optimiser")}} className={"  px-16 py-10 cursor-pointer relative group hover:-translate-y-1 h-64 bg-[#e7c1cc] text-[#344542] rounded-[50px] shadow-[0_5px_20px_-0px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_50px_-0px_rgba(0,0,0,0.2)] duration-300 "}>
                        <p className={"viga-regular uppercase text-3xl pb-3 "}> UE 2 </p>
                        <p className={"viga-regular uppercase text-5xl "}> Optimiser </p>

                    </div>
                </article>
                <article className={"-mr-16 grid grid-cols-2 gap-16"}>
                    <div onClick={()=>{open_competence("popup_administer")}} className={" px-16 py-10 cursor-pointer relative group hover:-translate-y-1 h-64 bg-[#d3c8E8] text-[#344542]  rounded-[50px] shadow-[0_5px_20px_-0px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_50px_-0px_rgba(0,0,0,0.2)] duration-300 "}>
                        <p className={"viga-regular uppercase text-3xl pb-3 "}> UE 3 </p>
                        <p className={"viga-regular uppercase text-5xl "}> Administer </p>

                    </div>
                    <div onClick={()=>{open_competence("popup_gerer")}} className={" px-16 py-10 cursor-pointer relative group hover:-translate-y-1 h-64 bg-[#f0b695] text-[#344542] rounded-[50px] shadow-[0_5px_20px_-0px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_50px_-0px_rgba(0,0,0,0.2)] duration-300 "}>
                        <p className={"viga-regular uppercase text-3xl pb-3 "}> UE 4 </p>
                        <p className={"viga-regular uppercase text-5xl "}> Gérer </p>

                    </div>
                </article>
                <article className={"-ml-16 grid grid-cols-2 gap-16"}>
                    <div onClick={()=>{open_competence("popup_conduire")}}  className={"  px-16 py-10 cursor-pointer relative group hover:-translate-y-1 h-64 bg-[#b7e0ff] text-[#344542] rounded-[50px] shadow-[0_5px_20px_-0px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_50px_-0px_rgba(0,0,0,0.2)] duration-300 "}>
                        <p className={"viga-regular uppercase text-3xl pb-3 "}> UE 5 </p>
                        <p className={"viga-regular uppercase text-5xl "}> Conduire </p>

                    </div>
                    <div onClick={()=>{open_competence("popup_collaborer")}}  className={"  px-16 py-10 cursor-pointer relative group hover:-translate-y-1 h-64 bg-[#d8b5e6] text-[#344542] rounded-[50px] shadow-[0_5px_20px_-0px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_50px_-0px_rgba(0,0,0,0.2)] duration-300 "}>
                        <p className={"viga-regular uppercase text-3xl pb-3 "}> UE 6 </p>
                        <p className={"viga-regular uppercase text-5xl "}> Collaborer </p>

                    </div>
                </article>


            </section>
            <div  id={"popup_realiser"}
                 className={"z-50 fixed top-0 left-0 h-screen w-[100%] backdrop-blur-xl bg-black/40 hidden justify-center items-center"}>

                <div
                    className={" competences pb-24 overflow-y-scroll relative h-[90%] w-[95%] max-w-[1200px] bg-[#ede7de] flex flex-col items-center rounded-xl"}>

                    <div onClick={()=>{fermer_popup("popup_realiser")}} className={"w-full sticky top-0 left-0 flex justify-end"}>
                        <div
                            className={"p-2  hover:scale-110 bg-white/60  cursor-pointer rounded-2xl duration-300 m-6 "}>
                            <svg className={"text-green_primary  duration-300 h-10 w-10"} fill="currentColor"
                                 viewBox="0 0 32 32"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5 c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4 C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z"></path>
                                </g>
                            </svg>
                        </div>

                    </div>

                    <div className={"-mt-8 w-11/12 max-w-[1000px] relative "}>
                        <div
                            className={" pb-8 text-green_primary flex flex-col justify-center items-center text-7xl viga-regular "}>
                            <p className={"text-4xl pb-4 "}>UE1</p>
                            <h2>Réaliser</h2>
                        </div>

                        {/*<div className={" container rounded-2xl w-11/12 h-[400px]  bg-white/60"}></div>*/}

                        <div className={"mx-auto w-11/12"}>

                            <div className={"py-12"}>
                                <div className={" flex gap-2"}>
                                    <p onClick={() => {
                                        openLevel("rea_niv_1", "rea_niveau", "rea_niveau_boutons", "rea_niveau_boutons_1")
                                    }} id={"rea_niveau_boutons_1"}
                                       className={" rea_niveau_boutons cursor-pointer px-6 py-3 text-xl text-green_primary rounded-t-2xl font-semibold font-semibold font-semibold bg-green_primary/10"}>Niveau
                                        1</p>
                                    <p onClick={() => {
                                        openLevel("rea_niv_2", "rea_niveau", "rea_niveau_boutons", "rea_niveau_boutons_2")
                                    }} id={"rea_niveau_boutons_2"}
                                       className={" rea_niveau_boutons cursor-pointer px-6 py-3 text-xl text-green_primary rounded-t-2xl font-semibold font-semibold font-semibold bg-[#d5d8cf88]"}>Niveau
                                        2</p>
                                    <p onClick={() => {
                                        openLevel("rea_niv_3", "rea_niveau", "rea_niveau_boutons", "rea_niveau_boutons_3")
                                    }} id={"rea_niveau_boutons_3"}
                                       className={" rea_niveau_boutons cursor-pointer px-6 py-3 text-xl text-green_primary rounded-t-2xl font-semibold font-semibold font-semibold bg-[#d5d8cf88]"}>Niveau
                                        3</p>
                                </div>

                                <ul id={"rea_niv_1"}
                                    className={"rea_niveau rounded-2xl rounded-tl-none bg-green_primary/10 py-10 pl-8 pr-4 text-green_primary  text-xl space-y-2 font-semibold"}>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC11.01</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Implémenter des conceptions simples</p></li>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC11.02</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Élaborer des conceptions simples</p></li>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC11.03</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Faire des essais et évaluer leurs résultats en regard des spécifications</p>
                                    </li>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC11.04</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Développer des interfaces utilisateurs</p></li>

                                </ul>
                                <ul id={"rea_niv_2"}
                                    className={"hidden rea_niveau rounded-2xl rounded-tl-none bg-green_primary/10 py-10 pl-8 pr-4  text-green_primary  text-xl space-y-2 font-semibold"}>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC21.01</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Élaborer et implémenter les spécifications fonctionnelles et non
                                            fonctionnelles à partir des exigences</p></li>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC21.02</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Appliquer des principes d'accessibilité et d'ergonomie </p></li>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC21.03</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Adopter de bonnes pratiques de conception et de programmation </p></li>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC21.04</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Vérifier et valider la qualité de l'application par les tests</p></li>
                                </ul>
                                <ul id={"rea_niv_3"}
                                    className={"hidden rea_niveau rounded-2xl rounded-tl-none bg-green_primary/10 py-10 pl-8 pr-4  text-green_primary  text-xl space-y-2 font-semibold"}>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC31.01</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Choisir et implémenter les architectures adaptées </p></li>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC31.02</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Faire évoluer une application existante </p></li>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC31.03</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Intégrer des solutions dans un environnement de production </p></li>
                                </ul>


                            </div>


                            <h3 className={"text-4xl viga-regular text-green_primary pb-4"}> Développer des
                                applications </h3>
                            <p className={"text-xl text-green_header font-semibold py-2"}>
                                Le développement d'applications informatiques se divise en plusieurs niveaux de
                                compétence. Un développeur doit créer des applications en suivant des spécifications
                                précises, concevoir des solutions adaptées aux besoins du client, coder de manière
                                efficace, et tester les applications pour garantir leur bon fonctionnement.
                            </p>
                            <p className={"text-xl text-green_header font-semibold py-2"}>

                                À un niveau avancé, il adapte les applications pour divers supports comme les systèmes
                                embarqués, les applications web et mobiles, ainsi que l'Internet des objets (IoT). Il
                                veille à l'intégration harmonieuse des applications dans les environnements existants,
                                choisit les ressources techniques optimales et documente soigneusement son travail pour
                                faciliter la maintenance et l'évolution future.
                            </p>
                            <p className={"text-xl text-green_header font-semibold py-2"}>

                                Cette progression de compétences permet de développer des applications robustes et
                                adaptées à divers contextes, tout en assurant leur qualité et leur pérennité.
                            </p>


                            <h3 className={"text-5xl viga-regular text-green_primary pt-8 pb-6"}> Projets : </h3>
                            <section className="w-full py-4 overflow-hidden">
                                <div className="embla  w-full relative" ref={emblaRef1}>
                                    <div className="embla__container  gap-6 grid grid-cols-2  ">

                                        <div key={"rea-yams"}
                                             className="embla__slide basis-5/12 mx-6 flex flex-col gap-5 bg-white/50 rounded-3xl min-w-0 p-4 shrink-0">

                                            {/*<div className="w-full h-52 rounded-2xl bg-gray-400/40"></div>*/}
                                            <img className={"w-full h-52 rounded-2xl object-cover object-top"}
                                                 src={"yams.png"}></img>

                                            <div className="space-y-4 flex flex-col justify-between flex-1">
                                                <div className={"space-y-4"}>

                                                    <h3 className="viga-regular text-4xl text-green_header line_clamp_1">Yams</h3>
                                                    <div className={"flex flex-wrap gap-4"}>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC11.01</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC11.02</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC11.04</p>
                                                    </div>
                                                </div>
                                                <p className="flex justify-end">
                                                    <NavLink
                                                        className={"text-lg font-semibold px-8 py-3 bg-green_primary/80 hover:bg-green_primary duration-300 w-fit block rounded-2xl text-white"}
                                                        to={`/project/yams`}>Voir plus</NavLink>
                                                </p>
                                            </div>
                                        </div>
                                        <div key={"rea-koh-frais"}
                                             className="embla__slide basis-5/12 mx-6 flex flex-col gap-5 bg-white/50 rounded-3xl min-w-0 p-4 shrink-0">

                                            {/*<div className="w-full h-52 rounded-2xl bg-gray-400/40"></div>*/}
                                            <img className={"w-full h-52 rounded-2xl object-cover object-top"}
                                                 src={"koh-frais.png"}></img>

                                            <div className="space-y-4 flex flex-col justify-between flex-1">
                                                <div className={"space-y-4"}>

                                                    <h3 className="viga-regular text-4xl text-green_header line_clamp_1">Koh
                                                        Frais</h3>
                                                    <div className={"flex flex-wrap gap-4"}>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC11.01</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC11.02</p>
                                                    </div>
                                                </div>
                                                <p className="flex justify-end">
                                                    <NavLink
                                                        className={"text-lg font-semibold px-8 py-3 bg-green_primary/80 hover:bg-green_primary duration-300 w-fit block rounded-2xl text-white"}
                                                        to={`/project/koh-frais`}>Voir plus</NavLink>
                                                </p>
                                            </div>
                                        </div>
                                        <div key={"rea-album-photo"}
                                             className="embla__slide basis-5/12 mx-6 flex flex-col gap-5 bg-white/50 rounded-3xl min-w-0 p-4 shrink-0">

                                            {/*<div className="w-full h-52 rounded-2xl bg-gray-400/40"></div>*/}
                                            <img className={"w-full h-52 rounded-2xl object-cover object-top"}
                                                 src={"album.png"}></img>

                                            <div className="space-y-4 flex flex-col justify-between flex-1">
                                                <div className={"space-y-4"}>

                                                    <h3 className="viga-regular text-4xl text-green_header line_clamp_1">Album
                                                        photo</h3>
                                                    <div className={"flex flex-wrap gap-4"}>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC21.01</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC21.02</p>

                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC21.03</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC21.04</p>

                                                    </div>
                                                </div>
                                                <p className="flex justify-end">
                                                    <NavLink
                                                        className={"text-lg font-semibold px-8 py-3 bg-green_primary/80 hover:bg-green_primary duration-300 w-fit block rounded-2xl text-white"}
                                                        to={`/project/album-photo`}>Voir plus</NavLink>
                                                </p>
                                            </div>
                                        </div>
                                        <div key={"opt-cayden"}
                                             className="embla__slide basis-5/12 mx-6 flex flex-col gap-5 bg-white/50 rounded-3xl min-w-0 p-4 shrink-0">

                                            {/*<div className="w-full h-52 rounded-2xl bg-gray-400/40"></div>*/}
                                            <img className={"w-full h-52 rounded-2xl object-cover object-top"}
                                                 src={"cayden.png"}></img>

                                            <div className="space-y-4 flex flex-col justify-between flex-1">
                                                <div className={"space-y-4"}>

                                                    <h3 className="viga-regular text-4xl text-green_header line_clamp_1">Cayden
                                                        Quest </h3>
                                                    <div className={"flex flex-wrap gap-4"}>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC31.01</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC31.02</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC31.03</p>
                                                    </div>
                                                </div>
                                                <p className="flex justify-end">
                                                <NavLink
                                                        className={"text-lg font-semibold px-8 py-3 bg-green_primary/80 hover:bg-green_primary duration-300 w-fit block rounded-2xl text-white"}
                                                        to={`/project/cayden-quest`}>Voir plus</NavLink>
                                                </p>
                                            </div>
                                        </div>
                                        <div key={"rea-alizon"}
                                             className="embla__slide basis-5/12 mx-6 flex flex-col gap-5 bg-white/50 rounded-3xl min-w-0 p-4 shrink-0">

                                            <div className="w-full h-52 rounded-2xl bg-gray-400/40"></div>
                                            {/*<img className={"w-full h-52 rounded-2xl object-cover object-top"}*/}
                                            {/*     src={"huit-reines.jpg"}></img>*/}

                                            <div className="space-y-4 flex flex-col justify-between flex-1">
                                                <div className={"space-y-4"}>

                                                    <h3 className="viga-regular text-4xl text-green_header line_clamp_1">Alizon</h3>
                                                    <div className={"flex flex-wrap gap-4"}>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC21.01</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC21.02</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC21.03</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC21.04</p>
                                                    </div>
                                                </div>
                                                <p className="flex justify-end">
                                                    <NavLink
                                                        className={"text-lg font-semibold px-8 py-3 bg-green_primary/80 hover:bg-green_primary duration-300 w-fit block rounded-2xl text-white"}
                                                        to={`/project/alizon`}>Voir plus</NavLink>
                                                </p>
                                            </div>
                                        </div>


                                    </div>
                                    {/*<button*/}
                                    {/*    className="embla__prev bg-green_primary/60 hover:bg-green_primary duration-300 p-4 rounded-full absolute top-1/2 -translate-y-1/2 left-2"*/}
                                    {/*    onClick={scrollPrev}>*/}
                                    {/*    <svg className={"w-8"} viewBox="0 0 24 24" fill="none"*/}
                                    {/*         xmlns="http://www.w3.org/2000/svg">*/}
                                    {/*        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>*/}
                                    {/*        <g id="SVGRepo_tracerCarrier" stroke-linecap="round"*/}
                                    {/*           stroke-linejoin="round"></g>*/}
                                    {/*        <g id="SVGRepo_iconCarrier">*/}
                                    {/*            <path*/}
                                    {/*                d="M16.1795 3.26875C15.7889 2.87823 15.1558 2.87823 14.7652 3.26875L8.12078 9.91322C6.94952 11.0845 6.94916 12.9833 8.11996 14.155L14.6903 20.7304C15.0808 21.121 15.714 21.121 16.1045 20.7304C16.495 20.3399 16.495 19.7067 16.1045 19.3162L9.53246 12.7442C9.14194 12.3536 9.14194 11.7205 9.53246 11.33L16.1795 4.68297C16.57 4.29244 16.57 3.65928 16.1795 3.26875Z"*/}
                                    {/*                fill="#fff"></path>*/}
                                    {/*        </g>*/}
                                    {/*    </svg>*/}
                                    {/*</button>*/}
                                    {/*<button*/}
                                    {/*    className="embla__next  bg-green_primary/60 hover:bg-green_primary duration-300 p-4 rounded-full absolute top-1/2 -translate-y-1/2 right-2"*/}
                                    {/*    onClick={scrollNext}>*/}
                                    {/*    <svg className={"w-8 rotate-180"} viewBox="0 0 24 24" fill="none"*/}
                                    {/*         xmlns="http://www.w3.org/2000/svg">*/}
                                    {/*        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>*/}
                                    {/*        <g id="SVGRepo_tracerCarrier" stroke-linecap="round"*/}
                                    {/*           stroke-linejoin="round"></g>*/}
                                    {/*        <g id="SVGRepo_iconCarrier">*/}
                                    {/*            <path*/}
                                    {/*                d="M16.1795 3.26875C15.7889 2.87823 15.1558 2.87823 14.7652 3.26875L8.12078 9.91322C6.94952 11.0845 6.94916 12.9833 8.11996 14.155L14.6903 20.7304C15.0808 21.121 15.714 21.121 16.1045 20.7304C16.495 20.3399 16.495 19.7067 16.1045 19.3162L9.53246 12.7442C9.14194 12.3536 9.14194 11.7205 9.53246 11.33L16.1795 4.68297C16.57 4.29244 16.57 3.65928 16.1795 3.26875Z"*/}
                                    {/*                fill="#fff"></path>*/}
                                    {/*        </g>*/}
                                    {/*    </svg>*/}
                                    {/*</button>*/}
                                </div>
                            </section>
                        </div>

                    </div>

                </div>


            </div>
            <div id={"popup_optimiser"}
                 className={"z-50 fixed hidden top-0 left-0 h-screen w-[100%] backdrop-blur-xl bg-black/40  justify-center items-center"}>

                <div
                    className={" competences pb-24 overflow-y-scroll relative h-[90%] w-[95%] max-w-[1200px] bg-[#ede7de] flex flex-col items-center rounded-xl"}>

                    <div onClick={() => {
                        fermer_popup("popup_optimiser")
                    }} className={"w-full sticky top-0 left-0 flex justify-end"}>
                        <div
                            className={"p-2  hover:scale-110 bg-white/60  cursor-pointer rounded-2xl duration-300 m-6 "}>
                            <svg className={"text-green_primary  duration-300 h-10 w-10"} fill="currentColor"
                                 viewBox="0 0 32 32"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5 c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4 C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z"></path>
                                </g>
                            </svg>
                        </div>

                    </div>

                    <div className={"-mt-8 w-11/12 max-w-[1000px] relative "}>
                        <div
                            className={" pb-12 text-green_primary flex flex-col justify-center items-center text-7xl viga-regular "}>
                            <p className={"text-4xl pb-4 "}>UE2</p>
                            <h2>Optimiser</h2>
                        </div>

                        {/*<div className={" container rounded-2xl w-11/12 h-[400px]  bg-white/60"}></div>*/}

                        <div className={"mx-auto w-11/12"}>


                            <div className={"py-12"}>
                                <div className={" flex gap-2"}>
                                    <p onClick={() => {
                                        openLevel("opt_niv_1", "opt_niveau", "opt_niveau_boutons", "opt_niveau_boutons_1")
                                    }} id={"opt_niveau_boutons_1"}
                                       className={" opt_niveau_boutons cursor-pointer px-6 py-3 text-xl text-green_primary rounded-t-2xl font-semibold font-semibold font-semibold bg-green_primary/10"}>Niveau
                                        1</p>
                                    <p onClick={() => {
                                        openLevel("opt_niv_2", "opt_niveau", "opt_niveau_boutons", "opt_niveau_boutons_2")
                                    }} id={"opt_niveau_boutons_2"}
                                       className={" opt_niveau_boutons cursor-pointer px-6 py-3 text-xl text-green_primary rounded-t-2xl font-semibold font-semibold font-semibold bg-[#d5d8cf88]"}>Niveau
                                        2</p>
                                    <p onClick={() => {
                                        openLevel("opt_niv_3", "opt_niveau", "opt_niveau_boutons", "opt_niveau_boutons_3")
                                    }} id={"opt_niveau_boutons_3"}
                                       className={" opt_niveau_boutons cursor-pointer px-6 py-3 text-xl text-green_primary rounded-t-2xl font-semibold font-semibold font-semibold bg-[#d5d8cf88]"}>Niveau
                                        3</p>
                                </div>

                                <ul id={"opt_niv_1"}
                                    className={"opt_niveau rounded-2xl rounded-tl-none bg-green_primary/10 py-10 pl-8 pr-4 text-green_primary  text-xl space-y-2 font-semibold"}>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC12.01</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p>Analyser un problème avec méthode (découpage en éléments algorithmiques
                                            simples, structure de données...)</p></li>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC12.02</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Comparer des algorithmes pour des problèmes classiques (tris simples,
                                            recherche...) </p></li>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC12.03</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Faire des essais et évaluer leurs résultats en regard des spécifications</p>
                                    </li>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC12.04</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Formaliser et mettre en œuvre des outils mathématiques pour
                                            l’informatique</p></li>

                                </ul>
                                <ul id={"opt_niv_2"}
                                    className={"hidden opt_niveau rounded-2xl rounded-tl-none bg-green_primary/10 py-10 pl-8 pr-4  text-green_primary  text-xl space-y-2 font-semibold"}>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC22.01</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Choisir des structures de données complexes adaptées au problème </p></li>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC22.02</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Utiliser des techniques algorithmiques adaptées pour des problèmes complexes
                                            (par ex. recherche opérationnelle, méthodes arborescentes, optimisation
                                            globale, intelligence artificielle...) </p></li>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC22.03</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Comprendre les enjeux et moyens de sécurisation des données et du code </p>
                                    </li>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC22.04</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Évaluer l’impact environnemental et sociétal des solutions proposées </p>
                                    </li>
                                </ul>
                                <ul id={"opt_niv_3"}
                                    className={"hidden opt_niveau rounded-2xl rounded-tl-none bg-green_primary/10 py-10 pl-8 pr-4  text-green_primary  text-xl space-y-2 font-semibold"}>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC32.01</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Anticiper les résultats de diverses métriques (temps d’exécution, occupation
                                            mémoire, montée en charge...) </p></li>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC32.02</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Profiler, analyser et justifier le comportement d’un code existant </p></li>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC32.03</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Choisir et utiliser des bibliothèques et méthodes dédiées au domaine
                                            d'application (imagerie, immersion, intelligence artificielle, jeux vidéos,
                                            parallélisme, calcul formel...)</p></li>
                                </ul>

                            </div>

                            <h3 className={"text-4xl viga-regular text-green_primary pb-4"}> Optimisation des
                                applications </h3>
                            <p className={"text-xl text-green_header font-semibold py-2"}>
                                L'optimisation des applications en développement se décline en plusieurs niveaux de
                                compétence. Un développeur doit d'abord appréhender et construire des algorithmes de
                                base pour résoudre des problèmes simples. Ensuite, il sélectionne et implémente les
                                algorithmes adéquats pour répondre à des problèmes plus complexes, en tenant compte des
                                contraintes de performance et d'efficacité.</p>

                            <p className={"text-xl text-green_header font-semibold py-2"}> À un niveau avancé, le
                                développeur analyse les performances des applications et optimise le code pour améliorer
                                leur efficacité. Il formalise et modélise des situations complexes pour identifier les
                                solutions algorithmiques appropriées, recense et utilise les algorithmes et structures
                                de données usuels, et applique des schémas de raisonnement logique et mathématique pour
                                justifier ses choix. Enfin, il valide les résultats obtenus à l'aide de méthodes de test
                                rigoureuses et en analysant les performances. </p>


                            <p className={"text-xl text-green_header font-semibold py-2"}> Cette progression de
                                compétences permet de développer des applications performantes et optimisées, capables
                                de répondre efficacement à des problématiques variées et complexes.
                            </p>


                            <h3 className={"text-5xl viga-regular text-green_primary pt-8 pb-6"}> Projets : </h3>
                            <section className="w-full py-4 overflow-hidden">
                                <div className="embla   w-full relative" ref={emblaRef2}>
                                    <div className="embla__container gap-6 grid grid-cols-2 ">
                                        <div key={"opt-probleme-huit-reines"}
                                             className="embla__slide basis-5/12 mx-6 flex flex-col gap-5 bg-white/50 rounded-3xl min-w-0 p-4 shrink-0">

                                            {/*<div className="w-full h-52 rounded-2xl bg-gray-400/40"></div>*/}
                                            <img className={"w-full h-52 rounded-2xl object-cover object-top"}
                                                 src={"huit-reines.jpg"}></img>

                                            <div className="space-y-4 flex flex-col justify-between flex-1">
                                                <div className={"space-y-4"}>

                                                    <h3 className="viga-regular text-4xl text-green_header line_clamp_1">Problème
                                                        des huit reines</h3>
                                                    <div className={"flex flex-wrap gap-4"}>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC12.01</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC12.04</p>
                                                    </div>
                                                </div>
                                                <p className="flex justify-end">
                                                    <NavLink
                                                        className={"text-lg font-semibold px-8 py-3 bg-green_primary/80 hover:bg-green_primary duration-300 w-fit block rounded-2xl text-white"}
                                                        to={`/project/probleme-huit-reines`}>Voir plus</NavLink>
                                                </p>
                                            </div>
                                        </div>
                                        <div key={"opt-album-photo"}
                                             className="embla__slide basis-5/12 mx-6 flex flex-col gap-5 bg-white/50 rounded-3xl min-w-0 p-4 shrink-0">

                                            {/*<div className="w-full h-52 rounded-2xl bg-gray-400/40"></div>*/}
                                            <img className={"w-full h-52 rounded-2xl object-cover object-top"}
                                                 src={"album.png"}></img>

                                            <div className="space-y-4 flex flex-col justify-between flex-1">
                                                <div className={"space-y-4"}>

                                                    <h3 className="viga-regular text-4xl text-green_header line_clamp_1">Album
                                                        photo</h3>
                                                    <div className={"flex flex-wrap gap-4"}>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC22.01</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC22.03</p>
                                                    </div>
                                                </div>
                                                <p className="flex justify-end">
                                                    <NavLink
                                                        className={"text-lg font-semibold px-8 py-3 bg-green_primary/80 hover:bg-green_primary duration-300 w-fit block rounded-2xl text-white"}
                                                        to={`/project/album-photo`}>Voir plus</NavLink>
                                                </p>
                                            </div>
                                        </div>
                                        <div key={"opt-cayden"}
                                             className="embla__slide basis-5/12 mx-6 flex flex-col gap-5 bg-white/50 rounded-3xl min-w-0 p-4 shrink-0">

                                            {/*<div className="w-full h-52 rounded-2xl bg-gray-400/40"></div>*/}
                                            <img className={"w-full h-52 rounded-2xl object-cover object-top"}
                                                 src={"cayden.png"}></img>

                                            <div className="space-y-4 flex flex-col justify-between flex-1">
                                                <div className={"space-y-4"}>

                                                    <h3 className="viga-regular text-4xl text-green_header line_clamp_1">Cayden
                                                        Quest </h3>
                                                    <div className={"flex flex-wrap gap-4"}>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC32.03</p>
                                                    </div>
                                                </div>
                                                <p className="flex justify-end">
                                                    <NavLink
                                                        className={"text-lg font-semibold px-8 py-3 bg-green_primary/80 hover:bg-green_primary duration-300 w-fit block rounded-2xl text-white"}
                                                        to={`/project/cayden-quest`}>Voir plus</NavLink>
                                                </p>
                                            </div>
                                        </div>
                                        <div key={"opt-alizon"}
                                             className="embla__slide basis-5/12 mx-6 flex flex-col gap-5 bg-white/50 rounded-3xl min-w-0 p-4 shrink-0">

                                            <div className="w-full h-52 rounded-2xl bg-gray-400/40"></div>
                                            {/*<img className={"w-full h-52 rounded-2xl object-cover object-top"}*/}
                                            {/*     src={"huit-reines.jpg"}></img>*/}

                                            <div className="space-y-4 flex flex-col justify-between flex-1">
                                                <div className={"space-y-4"}>

                                                    <h3 className="viga-regular text-4xl text-green_header line_clamp_1">Alizon</h3>
                                                    <div className={"flex flex-wrap gap-4"}>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC22.01</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC22.02</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC22.03</p>
                                                    </div>
                                                </div>
                                                <p className="flex justify-end">
                                                    <NavLink
                                                        className={"text-lg font-semibold px-8 py-3 bg-green_primary/80 hover:bg-green_primary duration-300 w-fit block rounded-2xl text-white"}
                                                        to={`/project/alizon`}>Voir plus</NavLink>
                                                </p>
                                            </div>
                                        </div>
                                        <div key={"opt-neologia"}
                                             className="embla__slide basis-5/12 mx-6 flex flex-col gap-5 bg-white/50 rounded-3xl min-w-0 p-4 shrink-0">

                                            <div className="w-full h-52 rounded-2xl bg-gray-400/40"></div>
                                            {/*<img className={"w-full h-52 rounded-2xl object-cover object-top"}*/}
                                            {/*     src={"koh-frais.png"}></img>*/}

                                            <div className="space-y-4 flex flex-col justify-between flex-1">
                                                <div className={"space-y-4"}>

                                                    <h3 className="viga-regular text-4xl text-green_header line_clamp_1">Projet
                                                        NEOLOGIA</h3>
                                                    <div className={"flex flex-wrap gap-4"}>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC12.01</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC12.04</p>
                                                    </div>
                                                </div>
                                                <p className="flex justify-end">
                                                    <NavLink
                                                        className={"text-lg font-semibold px-8 py-3 bg-green_primary/80 hover:bg-green_primary duration-300 w-fit block rounded-2xl text-white"}
                                                        to={`/project/neologia`}>Voir plus</NavLink>
                                                </p>
                                            </div>
                                        </div>
                                        <div key={"opt-comparaison-algo"}
                                             className="embla__slide basis-5/12 mx-6 flex flex-col gap-5 bg-white/50 rounded-3xl min-w-0 p-4 shrink-0">

                                            <div className="w-full h-52 rounded-2xl bg-gray-400/40"></div>
                                            {/*<img className={"w-full h-52 rounded-2xl object-cover object-top"}*/}
                                            {/*     src={"koh-frais.png"}></img>*/}

                                            <div className="space-y-4 flex flex-col justify-between flex-1">
                                                <div className={"space-y-4"}>

                                                    <h3 className="viga-regular text-4xl text-green_header line_clamp_1">Comparaison
                                                        d'approches algorithmiques</h3>
                                                    <div className={"flex flex-wrap gap-4"}>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC12.02</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC12.03</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC12.04</p>
                                                    </div>
                                                </div>
                                                <p className="flex justify-end">
                                                    <NavLink
                                                        className={"text-lg font-semibold px-8 py-3 bg-green_primary/80 hover:bg-green_primary duration-300 w-fit block rounded-2xl text-white"}
                                                        to={`/project/comparaison-algo`}>Voir plus</NavLink>
                                                </p>
                                            </div>
                                        </div>


                                    </div>
                                    {/*<button*/}
                                    {/*    className="embla__prev bg-green_primary/60 hover:bg-green_primary duration-300 p-4 rounded-full absolute top-1/2 -translate-y-1/2 left-2"*/}
                                    {/*    onClick={scrollPrev}>*/}
                                    {/*    <svg className={"w-8"} viewBox="0 0 24 24" fill="none"*/}
                                    {/*         xmlns="http://www.w3.org/2000/svg">*/}
                                    {/*        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>*/}
                                    {/*        <g id="SVGRepo_tracerCarrier" stroke-linecap="round"*/}
                                    {/*           stroke-linejoin="round"></g>*/}
                                    {/*        <g id="SVGRepo_iconCarrier">*/}
                                    {/*            <path*/}
                                    {/*                d="M16.1795 3.26875C15.7889 2.87823 15.1558 2.87823 14.7652 3.26875L8.12078 9.91322C6.94952 11.0845 6.94916 12.9833 8.11996 14.155L14.6903 20.7304C15.0808 21.121 15.714 21.121 16.1045 20.7304C16.495 20.3399 16.495 19.7067 16.1045 19.3162L9.53246 12.7442C9.14194 12.3536 9.14194 11.7205 9.53246 11.33L16.1795 4.68297C16.57 4.29244 16.57 3.65928 16.1795 3.26875Z"*/}
                                    {/*                fill="#fff"></path>*/}
                                    {/*        </g>*/}
                                    {/*    </svg>*/}
                                    {/*</button>*/}
                                    {/*<button*/}
                                    {/*    className="embla__next  bg-green_primary/60 hover:bg-green_primary duration-300 p-4 rounded-full absolute top-1/2 -translate-y-1/2 right-2"*/}
                                    {/*    onClick={scrollNext}>*/}
                                    {/*    <svg className={"w-8 rotate-180"} viewBox="0 0 24 24" fill="none"*/}
                                    {/*         xmlns="http://www.w3.org/2000/svg">*/}
                                    {/*        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>*/}
                                    {/*        <g id="SVGRepo_tracerCarrier" stroke-linecap="round"*/}
                                    {/*           stroke-linejoin="round"></g>*/}
                                    {/*        <g id="SVGRepo_iconCarrier">*/}
                                    {/*            <path*/}
                                    {/*                d="M16.1795 3.26875C15.7889 2.87823 15.1558 2.87823 14.7652 3.26875L8.12078 9.91322C6.94952 11.0845 6.94916 12.9833 8.11996 14.155L14.6903 20.7304C15.0808 21.121 15.714 21.121 16.1045 20.7304C16.495 20.3399 16.495 19.7067 16.1045 19.3162L9.53246 12.7442C9.14194 12.3536 9.14194 11.7205 9.53246 11.33L16.1795 4.68297C16.57 4.29244 16.57 3.65928 16.1795 3.26875Z"*/}
                                    {/*                fill="#fff"></path>*/}
                                    {/*        </g>*/}
                                    {/*    </svg>*/}
                                    {/*</button>*/}
                                </div>
                            </section>
                        </div>

                    </div>

                </div>


            </div>
            <div id={"popup_administer"}
                 className={"z-50 fixed hidden top-0 left-0 h-screen w-[100%] backdrop-blur-xl bg-black/40  justify-center items-center"}>

                <div
                    className={" competences pb-24 overflow-y-scroll relative h-[90%] w-[95%] max-w-[1200px] bg-[#ede7de] flex flex-col items-center rounded-xl"}>

                    <div onClick={() => {
                        fermer_popup("popup_administer")
                    }} className={"w-full sticky top-0 left-0 flex justify-end"}>
                        <div
                            className={"p-2  hover:scale-110 bg-white/60  cursor-pointer rounded-2xl duration-300 m-6 "}>
                            <svg className={"text-green_primary  duration-300 h-10 w-10"} fill="currentColor"
                                 viewBox="0 0 32 32"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5 c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4 C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z"></path>
                                </g>
                            </svg>
                        </div>

                    </div>

                    <div className={"-mt-8 w-11/12 max-w-[1000px] relative "}>
                        <div
                            className={" pb-12 text-green_primary flex flex-col justify-center items-center text-7xl viga-regular "}>
                            <p className={"text-4xl pb-4 "}>UE3</p>
                            <h2>Administrer</h2>
                        </div>

                        {/*<div className={" container rounded-2xl w-11/12 h-[400px]  bg-white/60"}></div>*/}

                        <div className={"mx-auto w-11/12"}>

                            <div className={"py-12"}>
                                <div className={" flex gap-2"}>
                                    <p onClick={() => {
                                        openLevel("adm_niv_1", "adm_niveau", "adm_niveau_boutons", "adm_niveau_boutons_1")
                                    }} id={"adm_niveau_boutons_1"}
                                       className={" adm_niveau_boutons cursor-pointer px-6 py-3 text-xl text-green_primary rounded-t-2xl font-semibold font-semibold bg-green_primary/10"}>Niveau
                                        1</p>
                                    <p onClick={() => {
                                        openLevel("adm_niv_2", "adm_niveau", "adm_niveau_boutons", "adm_niveau_boutons_2")
                                    }} id={"adm_niveau_boutons_2"}
                                       className={" adm_niveau_boutons cursor-pointer px-6 py-3 text-xl text-green_primary rounded-t-2xl font-semibold font-semibold bg-[#d5d8cf88]"}>Niveau
                                        2</p>
                                </div>

                                <ul id={"adm_niv_1"}
                                    className={"adm_niveau rounded-2xl rounded-tl-none bg-green_primary/10 py-10 pl-8 pr-4 text-green_primary  text-xl space-y-2 font-semibold"}>
                                    <li className={"list-disc flex gap-2"}>
                                        <p className={" min-w-20"}>AC13.01</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p>Identifier les différents composants (matériels et logiciels) d’un système
                                            numérique</p></li>
                                    <li className={"list-disc flex gap-2"}>
                                        <p className={" min-w-20"}>AC13.02</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Utiliser les fonctionnalités de base d’un système multitâches /
                                            multiutilisateurs </p></li>
                                    <li className={"list-disc flex gap-2"}>
                                        <p className={" min-w-20"}>AC13.03</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Installer et configurer un système d’exploitation et des outils de
                                            développement</p>
                                    </li>
                                    <li className={"list-disc flex gap-2"}>
                                        <p className={" min-w-20"}>AC13.04</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Configurer un poste de travail dans un réseau d’entreprise</p></li>
                                </ul>
                                <ul id={"adm_niv_2"}
                                    className={"hidden adm_niveau rounded-2xl rounded-tl-none bg-green_primary/10 py-10 pl-8 pr-4  text-green_primary  text-xl space-y-2 font-semibold"}>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC23.01</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Concevoir et développer des applications communicantes </p></li>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC23.02</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Utiliser des serveurs et des services réseaux virtualisés </p></li>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC23.03</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Sécuriser les services et données d’un système </p>
                                    </li>
                                </ul>

                            </div>

                            <h3 className={"text-4xl viga-regular text-green_primary pb-4"}> Gestion des infrastructures
                                et réseaux </h3>
                            <p className={"text-xl text-green_header font-semibold py-2"}>La gestion des infrastructures
                                et réseaux comporte plusieurs niveaux de compétence. Un administrateur doit d'abord
                                installer et configurer un poste de travail selon les besoins de l'utilisateur. Ensuite,
                                il déploie des services dans une architecture réseau, en assurant leur sécurité et leur
                                disponibilité.</p>

                            <p className={"text-xl text-green_header font-semibold py-2"}>Les tâches essentielles
                                incluent l'installation, la configuration et la maintenance des infrastructures
                                informatiques et des réseaux, l'optimisation du système informatique pour garantir une
                                performance optimale et une haute disponibilité, et la mise en place de politiques de
                                sécurité pour protéger les données et les systèmes contre les menaces. Il doit également
                                surveiller et gérer les ressources réseau pour garantir une utilisation efficace et
                                éviter les surcharges.</p>

                            <p className={"text-xl text-green_header font-semibold py-2"}>Cette progression de
                                compétences permet de maintenir des infrastructures robustes et sécurisées, assurant
                                ainsi la performance et la fiabilité des systèmes informatiques.</p>


                            <h3 className={"text-5xl viga-regular text-green_primary pt-8 pb-6"}> Projets : </h3>
                            <section className="w-full py-4 overflow-hidden">
                                <div className="embla  w-full relative" ref={emblaRef3}>
                                    <div className="embla__container  gap-6 grid grid-cols-2 ">

                                        <div key={"adm-album-photo"}
                                             className="embla__slide basis-5/12 mx-6 flex flex-col gap-5 bg-white/50 rounded-3xl min-w-0 p-4 shrink-0">

                                            {/*<div className="w-full h-52 rounded-2xl bg-gray-400/40"></div>*/}
                                            <img className={"w-full h-52 rounded-2xl object-cover object-top"}
                                                 src={"album.png"}></img>

                                            <div className="space-y-4 flex flex-col justify-between flex-1">
                                                <div className={"space-y-4"}>

                                                    <h3 className="viga-regular text-4xl text-green_header line_clamp_1">Album
                                                        photo</h3>
                                                    <div className={"flex flex-wrap gap-4"}>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC23.02</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC23.03</p>
                                                    </div>
                                                </div>
                                                <p className="flex justify-end">
                                                    <NavLink
                                                        className={"text-lg font-semibold px-8 py-3 bg-green_primary/80 hover:bg-green_primary duration-300 w-fit block rounded-2xl text-white"}
                                                        to={`/project/album-photo`}>Voir plus</NavLink>
                                                </p>
                                            </div>
                                        </div>
                                        <div key={"adm-alizon"}
                                             className="embla__slide basis-5/12 mx-6 flex flex-col gap-5 bg-white/50 rounded-3xl min-w-0 p-4 shrink-0">

                                            <div className="w-full h-52 rounded-2xl bg-gray-400/40"></div>
                                            {/*<img className={"w-full h-52 rounded-2xl object-cover object-top"}*/}
                                            {/*     src={"huit-reines.jpg"}></img>*/}

                                            <div className="space-y-4 flex flex-col justify-between flex-1">
                                                <div className={"space-y-4"}>

                                                    <h3 className="viga-regular text-4xl text-green_header line_clamp_1">Alizon</h3>
                                                    <div className={"flex flex-wrap gap-4"}>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC13.01</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC13.02</p>
                                                    </div>
                                                </div>
                                                <p className="flex justify-end">
                                                    <NavLink
                                                        className={"text-lg font-semibold px-8 py-3 bg-green_primary/80 hover:bg-green_primary duration-300 w-fit block rounded-2xl text-white"}
                                                        to={`/project/alizon`}>Voir plus</NavLink>
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                    {/*<button*/}
                                    {/*    className="embla__prev bg-green_primary/60 hover:bg-green_primary duration-300 p-4 rounded-full absolute top-1/2 -translate-y-1/2 left-2"*/}
                                    {/*    onClick={scrollPrev}>*/}
                                    {/*    <svg className={"w-8"} viewBox="0 0 24 24" fill="none"*/}
                                    {/*         xmlns="http://www.w3.org/2000/svg">*/}
                                    {/*        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>*/}
                                    {/*        <g id="SVGRepo_tracerCarrier" stroke-linecap="round"*/}
                                    {/*           stroke-linejoin="round"></g>*/}
                                    {/*        <g id="SVGRepo_iconCarrier">*/}
                                    {/*            <path*/}
                                    {/*                d="M16.1795 3.26875C15.7889 2.87823 15.1558 2.87823 14.7652 3.26875L8.12078 9.91322C6.94952 11.0845 6.94916 12.9833 8.11996 14.155L14.6903 20.7304C15.0808 21.121 15.714 21.121 16.1045 20.7304C16.495 20.3399 16.495 19.7067 16.1045 19.3162L9.53246 12.7442C9.14194 12.3536 9.14194 11.7205 9.53246 11.33L16.1795 4.68297C16.57 4.29244 16.57 3.65928 16.1795 3.26875Z"*/}
                                    {/*                fill="#fff"></path>*/}
                                    {/*        </g>*/}
                                    {/*    </svg>*/}
                                    {/*</button>*/}
                                    {/*<button*/}
                                    {/*    className="embla__next  bg-green_primary/60 hover:bg-green_primary duration-300 p-4 rounded-full absolute top-1/2 -translate-y-1/2 right-2"*/}
                                    {/*    onClick={scrollNext}>*/}
                                    {/*    <svg className={"w-8 rotate-180"} viewBox="0 0 24 24" fill="none"*/}
                                    {/*         xmlns="http://www.w3.org/2000/svg">*/}
                                    {/*        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>*/}
                                    {/*        <g id="SVGRepo_tracerCarrier" stroke-linecap="round"*/}
                                    {/*           stroke-linejoin="round"></g>*/}
                                    {/*        <g id="SVGRepo_iconCarrier">*/}
                                    {/*            <path*/}
                                    {/*                d="M16.1795 3.26875C15.7889 2.87823 15.1558 2.87823 14.7652 3.26875L8.12078 9.91322C6.94952 11.0845 6.94916 12.9833 8.11996 14.155L14.6903 20.7304C15.0808 21.121 15.714 21.121 16.1045 20.7304C16.495 20.3399 16.495 19.7067 16.1045 19.3162L9.53246 12.7442C9.14194 12.3536 9.14194 11.7205 9.53246 11.33L16.1795 4.68297C16.57 4.29244 16.57 3.65928 16.1795 3.26875Z"*/}
                                    {/*                fill="#fff"></path>*/}
                                    {/*        </g>*/}
                                    {/*    </svg>*/}
                                    {/*</button>*/}
                                </div>
                            </section>
                        </div>

                    </div>

                </div>


            </div>
            <div id={"popup_gerer"}
                 className={"z-50 fixed top-0 left-0 h-screen w-[100%] backdrop-blur-xl bg-black/40 hidden justify-center items-center"}>

                <div
                    className={" competences pb-24 overflow-y-scroll relative h-[90%] w-[95%] max-w-[1200px] bg-[#ede7de] flex flex-col items-center rounded-xl"}>

                    <div onClick={() => {
                        fermer_popup("popup_gerer")
                    }} className={"w-full sticky top-0 left-0 flex justify-end"}>
                        <div
                            className={"p-2  hover:scale-110 bg-white/60  cursor-pointer rounded-2xl duration-300 m-6 "}>
                            <svg className={"text-green_primary  duration-300 h-10 w-10"} fill="currentColor"
                                 viewBox="0 0 32 32"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5 c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4 C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z"></path>
                                </g>
                            </svg>
                        </div>

                    </div>

                    <div className={"-mt-8 w-11/12 max-w-[1000px] relative "}>
                        <div
                            className={" pb-12 text-green_primary flex flex-col justify-center items-center text-7xl viga-regular "}>
                            <p className={"text-4xl pb-4 "}>UE4</p>
                            <h2>Gérer</h2>
                        </div>

                        {/*<div className={" container rounded-2xl w-11/12 h-[400px]  bg-white/60"}></div>*/}

                        <div className={"mx-auto w-11/12"}>

                            <div className={"py-12"}>
                                <div className={" flex gap-2"}>
                                    <p onClick={() => {
                                        openLevel("ger_niv_1", "ger_niveau", "ger_niveau_boutons", "ger_niveau_boutons_1")
                                    }} id={"ger_niveau_boutons_1"}
                                       className={" ger_niveau_boutons cursor-pointer px-6 py-3 text-xl text-green_primary rounded-t-2xl font-semibold font-semibold bg-green_primary/10"}>Niveau
                                        1</p>
                                    <p onClick={() => {
                                        openLevel("ger_niv_2", "ger_niveau", "ger_niveau_boutons", "ger_niveau_boutons_2")
                                    }} id={"ger_niveau_boutons_2"}
                                       className={" ger_niveau_boutons cursor-pointer px-6 py-3 text-xl text-green_primary rounded-t-2xl font-semibold font-semibold bg-[#d5d8cf88]"}>Niveau
                                        2</p>
                                </div>

                                <ul id={"ger_niv_1"}
                                    className={"ger_niveau rounded-2xl rounded-tl-none bg-green_primary/10 py-10 pl-8 pr-4 text-green_primary  text-xl space-y-2 font-semibold"}>
                                    <li className={"list-disc flex gap-2"}>
                                        <p className={" min-w-20"}>AC14.01</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p>Mettre à jour et interroger une base de données relationnelle (en requêtes
                                            directes ou à travers une application)</p></li>
                                    <li className={"list-disc flex gap-2"}>
                                        <p className={" min-w-20"}>AC14.02</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Visualiser des données </p></li>
                                    <li className={"list-disc flex gap-2"}>
                                        <p className={" min-w-20"}>AC14.03</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Concevoir une base de données relationnelle à partir d’un cahier des
                                            charges</p>
                                    </li>
                                </ul>
                                <ul id={"ger_niv_2"}
                                    className={"hidden ger_niveau rounded-2xl rounded-tl-none bg-green_primary/10 py-10 pl-8 pr-4  text-green_primary  text-xl space-y-2 font-semibold"}>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC24.01</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Optimiser les modèles de données de l’entreprise </p></li>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC24.02</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Assurer la sécurité des données (intégrité et confidentialité) </p></li>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC24.03</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Organiser la restitution de données à travers la programmation et la
                                            visualisation </p>
                                    </li>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC24.04</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Manipuler des données hétérogènes </p>
                                    </li>
                                </ul>

                            </div>

                            <h3 className={"text-4xl viga-regular text-green_primary pb-4"}> Gestion de bases de
                                données </h3>
                            <p className={"text-xl text-green_header font-semibold py-2"}>La gestion des bases de
                                données se décline en plusieurs niveaux de compétence. Un gestionnaire doit d'abord
                                concevoir et mettre en place une base de données à partir d’un cahier des charges
                                client, en assurant la cohérence et l'intégrité des données. Ensuite, il optimise la
                                base de données, interagit avec des applications et met en œuvre des mécanismes de
                                sécurité pour protéger les données.</p>

                            <p className={"text-xl text-green_header font-semibold py-2"}>Les tâches essentielles
                                incluent l'intégration et le développement de nouveaux composants de bases de données en
                                respectant les standards techniques, l'élaboration de plans de test et le recettage pour
                                garantir la qualité des bases de données, la participation au paramétrage et au
                                développement des modules d’un progiciel de gestion intégré (ERP), et la mise en place
                                de stratégies de sauvegarde et de récupération pour éviter les pertes de données.</p>


                            <p className={"text-xl text-green_header font-semibold py-2"}>Cette progression de
                                compétences permet de gérer des bases de données robustes et sécurisées, assurant ainsi
                                leur performance et leur fiabilité.</p>


                            <h3 className={"text-5xl viga-regular text-green_primary pt-8 pb-6"}> Projets : </h3>
                            <section className="w-full py-4 overflow-hidden">
                                <div className="embla  w-full relative" ref={emblaRef3}>
                                    <div className="embla__container  gap-6 grid grid-cols-2 ">

                                        <div key={"ger-album-photo"}
                                             className="embla__slide basis-5/12 mx-6 flex flex-col gap-5 bg-white/50 rounded-3xl min-w-0 p-4 shrink-0">

                                            {/*<div className="w-full h-52 rounded-2xl bg-gray-400/40"></div>*/}
                                            <img className={"w-full h-52 rounded-2xl object-cover object-top"}
                                                 src={"album.png"}></img>

                                            <div className="space-y-4 flex flex-col justify-between flex-1">
                                                <div className={"space-y-4"}>

                                                    <h3 className="viga-regular text-4xl text-green_header line_clamp_1">Album
                                                        photo</h3>
                                                    <div className={"flex flex-wrap gap-4"}>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC24.03</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC24.04</p>
                                                    </div>
                                                </div>
                                                <p className="flex justify-end">
                                                    <NavLink
                                                        className={"text-lg font-semibold px-8 py-3 bg-green_primary/80 hover:bg-green_primary duration-300 w-fit block rounded-2xl text-white"}
                                                        to={`/project/album-photo`}>Voir plus</NavLink>
                                                </p>
                                            </div>
                                        </div>
                                        <div key={"ger-exploitation-bdd"}
                                             className="embla__slide basis-5/12 mx-6 flex flex-col gap-5 bg-white/50 rounded-3xl min-w-0 p-4 shrink-0">

                                            <div className="w-full h-52 rounded-2xl bg-gray-400/40"></div>
                                            {/*<img className={"w-full h-52 rounded-2xl object-cover object-top"}*/}
                                            {/*     src={"huit-reines.jpg"}></img>*/}

                                            <div className="space-y-4 flex flex-col justify-between flex-1">
                                                <div className={"space-y-4"}>

                                                    <h3 className="viga-regular text-4xl text-green_header line_clamp_1">Exploitation d'une base de données</h3>
                                                    <div className={"flex flex-wrap gap-4"}>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC14.01</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC14.02</p>
                                                    </div>
                                                </div>
                                                <p className="flex justify-end">
                                                    <NavLink
                                                        className={"text-lg font-semibold px-8 py-3 bg-green_primary/80 hover:bg-green_primary duration-300 w-fit block rounded-2xl text-white"}
                                                        to={`/project/exploitation-bdd`}>Voir plus</NavLink>
                                                </p>
                                            </div>
                                        </div>
                                        <div key={"ger-alizon"}
                                             className="embla__slide basis-5/12 mx-6 flex flex-col gap-5 bg-white/50 rounded-3xl min-w-0 p-4 shrink-0">

                                            <div className="w-full h-52 rounded-2xl bg-gray-400/40"></div>
                                            {/*<img className={"w-full h-52 rounded-2xl object-cover object-top"}*/}
                                            {/*     src={"huit-reines.jpg"}></img>*/}

                                            <div className="space-y-4 flex flex-col justify-between flex-1">
                                                <div className={"space-y-4"}>

                                                    <h3 className="viga-regular text-4xl text-green_header line_clamp_1">Alizon</h3>
                                                    <div className={"flex flex-wrap gap-4"}>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC24.01</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC24.02</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC24.03</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC24.04</p>
                                                    </div>
                                                </div>
                                                <p className="flex justify-end">
                                                    <NavLink
                                                        className={"text-lg font-semibold px-8 py-3 bg-green_primary/80 hover:bg-green_primary duration-300 w-fit block rounded-2xl text-white"}
                                                        to={`/project/alizon`}>Voir plus</NavLink>
                                                </p>
                                            </div>
                                        </div>


                                    </div>
                                    {/*<button*/}
                                    {/*    className="embla__prev bg-green_primary/60 hover:bg-green_primary duration-300 p-4 rounded-full absolute top-1/2 -translate-y-1/2 left-2"*/}
                                    {/*    onClick={scrollPrev}>*/}
                                    {/*    <svg className={"w-8"} viewBox="0 0 24 24" fill="none"*/}
                                    {/*         xmlns="http://www.w3.org/2000/svg">*/}
                                    {/*        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>*/}
                                    {/*        <g id="SVGRepo_tracerCarrier" stroke-linecap="round"*/}
                                    {/*           stroke-linejoin="round"></g>*/}
                                    {/*        <g id="SVGRepo_iconCarrier">*/}
                                    {/*            <path*/}
                                    {/*                d="M16.1795 3.26875C15.7889 2.87823 15.1558 2.87823 14.7652 3.26875L8.12078 9.91322C6.94952 11.0845 6.94916 12.9833 8.11996 14.155L14.6903 20.7304C15.0808 21.121 15.714 21.121 16.1045 20.7304C16.495 20.3399 16.495 19.7067 16.1045 19.3162L9.53246 12.7442C9.14194 12.3536 9.14194 11.7205 9.53246 11.33L16.1795 4.68297C16.57 4.29244 16.57 3.65928 16.1795 3.26875Z"*/}
                                    {/*                fill="#fff"></path>*/}
                                    {/*        </g>*/}
                                    {/*    </svg>*/}
                                    {/*</button>*/}
                                    {/*<button*/}
                                    {/*    className="embla__next  bg-green_primary/60 hover:bg-green_primary duration-300 p-4 rounded-full absolute top-1/2 -translate-y-1/2 right-2"*/}
                                    {/*    onClick={scrollNext}>*/}
                                    {/*    <svg className={"w-8 rotate-180"} viewBox="0 0 24 24" fill="none"*/}
                                    {/*         xmlns="http://www.w3.org/2000/svg">*/}
                                    {/*        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>*/}
                                    {/*        <g id="SVGRepo_tracerCarrier" stroke-linecap="round"*/}
                                    {/*           stroke-linejoin="round"></g>*/}
                                    {/*        <g id="SVGRepo_iconCarrier">*/}
                                    {/*            <path*/}
                                    {/*                d="M16.1795 3.26875C15.7889 2.87823 15.1558 2.87823 14.7652 3.26875L8.12078 9.91322C6.94952 11.0845 6.94916 12.9833 8.11996 14.155L14.6903 20.7304C15.0808 21.121 15.714 21.121 16.1045 20.7304C16.495 20.3399 16.495 19.7067 16.1045 19.3162L9.53246 12.7442C9.14194 12.3536 9.14194 11.7205 9.53246 11.33L16.1795 4.68297C16.57 4.29244 16.57 3.65928 16.1795 3.26875Z"*/}
                                    {/*                fill="#fff"></path>*/}
                                    {/*        </g>*/}
                                    {/*    </svg>*/}
                                    {/*</button>*/}
                                </div>
                            </section>
                        </div>

                    </div>

                </div>


            </div>
            <div id={"popup_conduire"}
                 className={"z-50 fixed top-0 left-0 h-screen w-[100%] backdrop-blur-xl bg-black/40 hidden justify-center items-center"}>

                <div
                    className={" competences pb-24 overflow-y-scroll relative h-[90%] w-[95%] max-w-[1200px] bg-[#ede7de] flex flex-col items-center rounded-xl"}>

                    <div onClick={() => {
                        fermer_popup("popup_conduire")
                    }} className={"w-full sticky top-0 left-0 flex justify-end"}>
                        <div
                            className={"p-2  hover:scale-110 bg-white/60  cursor-pointer rounded-2xl duration-300 m-6 "}>
                            <svg className={"text-green_primary  duration-300 h-10 w-10"} fill="currentColor"
                                 viewBox="0 0 32 32"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5 c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4 C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z"></path>
                                </g>
                            </svg>
                        </div>

                    </div>

                    <div className={"-mt-8 w-11/12 max-w-[1000px] relative "}>
                        <div
                            className={" pb-12 text-green_primary flex flex-col justify-center items-center text-7xl viga-regular "}>
                            <p className={"text-4xl pb-4 "}>UE5</p>
                            <h2>Conduire</h2>
                        </div>

                        {/*<div className={" container rounded-2xl w-11/12 h-[400px]  bg-white/60"}></div>*/}

                        <div className={"mx-auto w-11/12"}>

                            <div className={"py-12"}>
                                <div className={" flex gap-2"}>
                                    <p onClick={() => {
                                        openLevel("cond_niv_1", "cond_niveau", "cond_niveau_boutons", "cond_niveau_boutons_1")
                                    }} id={"cond_niveau_boutons_1"}
                                       className={" cond_niveau_boutons cursor-pointer px-6 py-3 text-xl text-green_primary rounded-t-2xl font-semibold font-semibold bg-green_primary/10"}>Niveau
                                        1</p>
                                    <p onClick={() => {
                                        openLevel("cond_niv_2", "cond_niveau", "cond_niveau_boutons", "cond_niveau_boutons_2")
                                    }} id={"cond_niveau_boutons_2"}
                                       className={" cond_niveau_boutons cursor-pointer px-6 py-3 text-xl text-green_primary rounded-t-2xl font-semibold font-semibold bg-[#d5d8cf88]"}>Niveau
                                        2</p>
                                </div>

                                <ul id={"cond_niv_1"}
                                    className={"cond_niveau rounded-2xl rounded-tl-none bg-green_primary/10 py-10 pl-8 pr-4 text-green_primary  text-xl space-y-2 font-semibold"}>
                                    <li className={"list-disc flex gap-2"}>
                                        <p className={" min-w-20"}>AC15.01</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p>Appréhender les besoins du client et de l'utilisateur</p></li>
                                    <li className={"list-disc flex gap-2"}>
                                        <p className={" min-w-20"}>AC15.02</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Mettre en place les outils de gestion de projet </p></li>
                                    <li className={"list-disc flex gap-2"}>
                                        <p className={" min-w-20"}>AC15.03</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Identifier les acteurs et les différentes phases d’un cycle de
                                            développement</p>
                                    </li>
                                </ul>
                                <ul id={"cond_niv_2"}
                                    className={"hidden cond_niveau rounded-2xl rounded-tl-none bg-green_primary/10 py-10 pl-8 pr-4  text-green_primary  text-xl space-y-2 font-semibold"}>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC25.01</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Identifier les processus présents dans une organisation en vue d’améliorer
                                            les systèmes d’information </p></li>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC25.02</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Formaliser les besoins du client et de l'utilisateur </p></li>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC25.03</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Identifier les critères de faisabilité d’un projet informatique</p>
                                    </li>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC25.04</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Définir et mettre en œuvre une démarche de suivi de projet </p>
                                    </li>
                                </ul>

                            </div>

                            <h3 className={"text-4xl viga-regular text-green_primary pb-4"}> Gestion de projets
                                informatiques </h3>
                            <p className={"text-xl text-green_header font-semibold"}>La gestion de projets informatiques
                                se décline en plusieurs niveaux de compétence. Un chef de projet doit d'abord identifier
                                les besoins métiers des clients et des utilisateurs pour définir les objectifs du
                                projet. Ensuite, il applique une démarche de suivi de projet en utilisant des méthodes
                                appropriées, comme les méthodes agiles.</p>

                            <p className={"text-xl text-green_header font-semibold py-2"}>Les tâches essentielles incluent la
                                participation à la planification de la production, en définissant les étapes clés et les
                                délais, le suivi des résultats et des performances du projet à l'aide d'indicateurs de
                                performance, l'identification et l'analyse des dysfonctionnements pour organiser les
                                changements nécessaires, et la maîtrise des environnements d'exploitation, tels que les
                                environnements cloud, ainsi que les outils et méthodes associés pour gérer efficacement
                                les projets informatiques.</p>

                            <p className={"text-xl text-green_header font-semibold py-2"}>Cette progression de compétences
                                permet de conduire des projets informatiques de manière structurée et efficace, en
                                assurant leur succès et leur alignement avec les besoins des clients.</p>


                            <h3 className={"text-5xl viga-regular text-green_primary pt-8 pb-6"}> Projets : </h3>
                            <section className="w-full py-4 overflow-hidden">
                                <div className="embla  w-full relative" ref={emblaRef3}>
                                    <div className="embla__container  gap-6 grid grid-cols-2 ">

                                        <div key={"adm-album-photo"}
                                             className="embla__slide basis-5/12 mx-6 flex flex-col gap-5 bg-white/50 rounded-3xl min-w-0 p-4 shrink-0">

                                            {/*<div className="w-full h-52 rounded-2xl bg-gray-400/40"></div>*/}
                                            <img className={"w-full h-52 rounded-2xl object-cover object-top"}
                                                 src={"album.png"}></img>

                                            <div className="space-y-4 flex flex-col justify-between flex-1">
                                                <div className={"space-y-4"}>

                                                    <h3 className="viga-regular text-4xl text-green_header line_clamp_1">Album
                                                        photo</h3>
                                                    <div className={"flex flex-wrap gap-4"}>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC25.01</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC25.02</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC25.03</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC25.04</p>
                                                    </div>
                                                </div>
                                                <p className="flex justify-end">
                                                    <NavLink
                                                        className={"text-lg font-semibold px-8 py-3 bg-green_primary/80 hover:bg-green_primary duration-300 w-fit block rounded-2xl text-white"}
                                                        to={`/project/album-photo`}>Voir plus</NavLink>
                                                </p>
                                            </div>
                                        </div>
                                        <div key={"adm-cayden"}
                                             className="embla__slide basis-5/12 mx-6 flex flex-col gap-5 bg-white/50 rounded-3xl min-w-0 p-4 shrink-0">

                                            {/*<div className="w-full h-52 rounded-2xl bg-gray-400/40"></div>*/}
                                            <img className={"w-full h-52 rounded-2xl object-cover object-top"}
                                                 src={"cayden.png"}></img>

                                            <div className="space-y-4 flex flex-col justify-between flex-1">
                                                <div className={"space-y-4"}>

                                                    <h3 className="viga-regular text-4xl text-green_header line_clamp_1">Cayden
                                                        Quest </h3>
                                                    <div className={"flex flex-wrap gap-4"}>

                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC25.01</p>
                                                    </div>
                                                </div>
                                                <p className="flex justify-end">
                                                    <NavLink
                                                        className={"text-lg font-semibold px-8 py-3 bg-green_primary/80 hover:bg-green_primary duration-300 w-fit block rounded-2xl text-white"}
                                                        to={`/project/cayden-quest`}>Voir plus</NavLink>
                                                </p>
                                            </div>
                                        </div>
                                        <div key={"adm-koh-frais"}
                                             className="embla__slide  mx-6 flex flex-col gap-5 bg-white/50 rounded-3xl min-w-0 p-4 shrink-0">

                                            {/*<div className="w-full h-52 rounded-2xl bg-gray-400/40"></div>*/}
                                            <img className={"w-full h-52 rounded-2xl object-cover object-top"}
                                                 src={"koh-frais.png"}></img>

                                            <div className="space-y-4 flex flex-col justify-between flex-1">
                                                <div className={"space-y-4"}>

                                                    <h3 className="viga-regular text-4xl text-green_header line_clamp_1">Koh frais</h3>
                                                    <div className={"flex flex-wrap gap-4"}>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC15.01</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC15.02</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC15.03</p>
                                                    </div>
                                                </div>
                                                <p className="flex justify-end">
                                                    <NavLink
                                                        className={"text-lg font-semibold px-8 py-3 bg-green_primary/80 hover:bg-green_primary duration-300 w-fit block rounded-2xl text-white"}
                                                        to={`/project/koh-frais`}>Voir plus</NavLink>
                                                </p>
                                            </div>
                                        </div>
                                        <div key={"adm-alizon"}
                                             className="embla__slide  mx-6 flex flex-col gap-5 bg-white/50 rounded-3xl min-w-0 p-4 shrink-0">

                                            <div className="w-full h-52 rounded-2xl bg-gray-400/40"></div>
                                            {/*<img className={"w-full h-52 rounded-2xl object-cover object-top"}*/}
                                            {/*     src={"huit-reines.jpg"}></img>*/}

                                            <div className="space-y-4 flex flex-col justify-between flex-1">
                                                <div className={"space-y-4"}>

                                                    <h3 className="viga-regular text-4xl text-green_header line_clamp_1">Alizon</h3>
                                                    <div className={"flex flex-wrap gap-4"}>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC25.01</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC25.02</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC25.03</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC25.04</p>
                                                    </div>
                                                </div>
                                                <p className="flex justify-end">
                                                    <NavLink
                                                        className={"text-lg font-semibold px-8 py-3 bg-green_primary/80 hover:bg-green_primary duration-300 w-fit block rounded-2xl text-white"}
                                                        to={`/project/alizon`}>Voir plus</NavLink>
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                    {/*<button*/}
                                    {/*    className="embla__prev bg-green_primary/60 hover:bg-green_primary duration-300 p-4 rounded-full absolute top-1/2 -translate-y-1/2 left-2"*/}
                                    {/*    onClick={scrollPrev}>*/}
                                    {/*    <svg className={"w-8"} viewBox="0 0 24 24" fill="none"*/}
                                    {/*         xmlns="http://www.w3.org/2000/svg">*/}
                                    {/*        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>*/}
                                    {/*        <g id="SVGRepo_tracerCarrier" stroke-linecap="round"*/}
                                    {/*           stroke-linejoin="round"></g>*/}
                                    {/*        <g id="SVGRepo_iconCarrier">*/}
                                    {/*            <path*/}
                                    {/*                d="M16.1795 3.26875C15.7889 2.87823 15.1558 2.87823 14.7652 3.26875L8.12078 9.91322C6.94952 11.0845 6.94916 12.9833 8.11996 14.155L14.6903 20.7304C15.0808 21.121 15.714 21.121 16.1045 20.7304C16.495 20.3399 16.495 19.7067 16.1045 19.3162L9.53246 12.7442C9.14194 12.3536 9.14194 11.7205 9.53246 11.33L16.1795 4.68297C16.57 4.29244 16.57 3.65928 16.1795 3.26875Z"*/}
                                    {/*                fill="#fff"></path>*/}
                                    {/*        </g>*/}
                                    {/*    </svg>*/}
                                    {/*</button>*/}
                                    {/*<button*/}
                                    {/*    className="embla__next  bg-green_primary/60 hover:bg-green_primary duration-300 p-4 rounded-full absolute top-1/2 -translate-y-1/2 right-2"*/}
                                    {/*    onClick={scrollNext}>*/}
                                    {/*    <svg className={"w-8 rotate-180"} viewBox="0 0 24 24" fill="none"*/}
                                    {/*         xmlns="http://www.w3.org/2000/svg">*/}
                                    {/*        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>*/}
                                    {/*        <g id="SVGRepo_tracerCarrier" stroke-linecap="round"*/}
                                    {/*           stroke-linejoin="round"></g>*/}
                                    {/*        <g id="SVGRepo_iconCarrier">*/}
                                    {/*            <path*/}
                                    {/*                d="M16.1795 3.26875C15.7889 2.87823 15.1558 2.87823 14.7652 3.26875L8.12078 9.91322C6.94952 11.0845 6.94916 12.9833 8.11996 14.155L14.6903 20.7304C15.0808 21.121 15.714 21.121 16.1045 20.7304C16.495 20.3399 16.495 19.7067 16.1045 19.3162L9.53246 12.7442C9.14194 12.3536 9.14194 11.7205 9.53246 11.33L16.1795 4.68297C16.57 4.29244 16.57 3.65928 16.1795 3.26875Z"*/}
                                    {/*                fill="#fff"></path>*/}
                                    {/*        </g>*/}
                                    {/*    </svg>*/}
                                    {/*</button>*/}
                                </div>
                            </section>
                        </div>

                    </div>

                </div>


            </div>
            <div id={"popup_collaborer"}
                 className={"z-50 fixed top-0 left-0 h-screen w-[100%] backdrop-blur-xl bg-black/40 hidden justify-center items-center"}>

                <div
                    className={" competences pb-24 overflow-y-scroll relative h-[90%] w-[95%] max-w-[1200px] bg-[#ede7de] flex flex-col items-center rounded-xl"}>

                    <div onClick={() => {
                        fermer_popup("popup_collaborer")
                    }} className={"w-full sticky top-0 left-0 flex justify-end"}>
                        <div
                            className={"p-2  hover:scale-110 bg-white/60  cursor-pointer rounded-2xl duration-300 m-6 "}>
                            <svg className={"text-green_primary  duration-300 h-10 w-10"} fill="currentColor"
                                 viewBox="0 0 32 32"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5 c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4 C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z"></path>
                                </g>
                            </svg>
                        </div>

                    </div>

                    <div className={"-mt-8 w-11/12 max-w-[1000px] relative "}>
                        <div
                            className={" pb-12 text-green_primary flex flex-col justify-center items-center text-7xl viga-regular "}>
                            <p className={"text-4xl pb-4 "}>UE6</p>
                            <h2>Collaborer</h2>
                        </div>

                        {/*<div className={" container rounded-2xl w-11/12 h-[400px]  bg-white/60"}></div>*/}

                        <div className={"mx-auto w-11/12"}>

                            <div className={"py-12"}>
                                <div className={" flex gap-2"}>
                                    <p onClick={() => {
                                        openLevel("coll_niv_1", "coll_niveau", "coll_niveau_boutons", "coll_niveau_boutons_1")
                                    }} id={"coll_niveau_boutons_1"}
                                       className={" coll_niveau_boutons cursor-pointer px-6 py-3 text-xl text-green_primary rounded-t-2xl font-semibold font-semibold bg-green_primary/10"}>Niveau
                                        1</p>
                                    <p onClick={() => {
                                        openLevel("coll_niv_2", "coll_niveau", "coll_niveau_boutons", "coll_niveau_boutons_2")
                                    }} id={"coll_niveau_boutons_2"}
                                       className={" coll_niveau_boutons cursor-pointer px-6 py-3 text-xl text-green_primary rounded-t-2xl font-semibold font-semibold bg-[#d5d8cf88]"}>Niveau
                                        2</p>
                                    <p onClick={() => {
                                        openLevel("coll_niv_3", "coll_niveau", "coll_niveau_boutons", "coll_niveau_boutons_3")
                                    }} id={"coll_niveau_boutons_3"}
                                       className={" coll_niveau_boutons cursor-pointer px-6 py-3 text-xl text-green_primary rounded-t-2xl font-semibold font-semibold bg-[#d5d8cf88]"}>Niveau
                                        3</p>
                                </div>

                                <ul id={"coll_niv_1"}
                                    className={"coll_niveau rounded-2xl rounded-tl-none bg-green_primary/10 py-10 pl-8 pr-4 text-green_primary  text-xl space-y-2 font-semibold"}>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC16.01</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p>Appréhender l’écosystème numérique</p></li>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC16.02</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Découvrir les aptitudes requises selon les différents secteurs
                                            informatiques </p></li>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC16.03</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Identifier les statuts, les fonctions et les rôles de chaque membre d’une
                                            équipe pluridisciplinaire</p>
                                    </li>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC16.04</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Acquérir les compétences interpersonnelles pour travailler en équipe</p>
                                    </li>

                                </ul>
                                <ul id={"coll_niv_2"}
                                    className={"hidden coll_niveau rounded-2xl rounded-tl-none bg-green_primary/10 py-10 pl-8 pr-4  text-green_primary  text-xl space-y-2 font-semibold"}>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC26.01</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Comprendre la diversité, la structure et la dimension de l’informatique dans
                                            une organisation (ESN, DSI,...) </p></li>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC26.02</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Appliquer une démarche pour intégrer une équipe informatique au sein d’une
                                            organisation </p></li>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC26.03</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Mobiliser les compétences interpersonnelles pour travailler dans une équipe
                                            informatique </p>
                                    </li>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC26.04</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Rendre compte de son activité professionnelle </p>
                                    </li>
                                </ul>
                                <ul id={"coll_niv_3"}
                                    className={"hidden coll_niveau rounded-2xl rounded-tl-none bg-green_primary/10 py-10 pl-8 pr-4  text-green_primary  text-xl space-y-2 font-semibold"}>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC36.01</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Organiser et partager une veille technologique et informationnelle </p></li>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC36.02</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Identifier les enjeux de l’économie de l’innovation numérique </p></li>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC36.03</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Guider la conduite du changement informatique au sein d’une organisation</p>
                                    </li>
                                    <li className={"list-disc flex gap-2"}><p className={" min-w-20"}>AC36.04</p>
                                        <div className={"min-w-0.5 bg-green_primary h-max-content"}></div>
                                        <p> Accompagner le management de projet informatique</p></li>
                                </ul>

                            </div>

                            <h3 className={"text-4xl viga-regular text-green_primary pb-4"}> Travail en équipe </h3>
                            <p className={"text-xl text-green_header font-semibold py-2"}>Le travail en équipe dans le
                                domaine informatique requiert différents niveaux de compétence. Un collaborateur doit
                                d'abord identifier ses aptitudes pour contribuer efficacement à une équipe. Ensuite, il
                                situe son rôle et ses missions au sein de l'équipe informatique, en collaborant de
                                manière constructive avec les autres membres.</p>

                            <p className={"text-xl text-green_header font-semibold py-2"}>À un niveau avancé, il est
                                capable de manager une équipe informatique en coordonnant les activités et en assurant
                                une communication efficace. Les composantes essentielles incluent l'adaptation aux
                                différentes dynamiques de groupe, la coordination des acteurs techniques et de la
                                maîtrise d'ouvrage, l'utilisation des outils de l'informatique décisionnelle pour
                                collecter et analyser des indicateurs de performance, et la création d'un environnement
                                de travail collaboratif et productif.</p>

                            <p className={"text-xl text-green_header font-semibold py-2"}>Cette progression de
                                compétences permet de favoriser une collaboration efficace au sein des équipes
                                informatiques, assurant ainsi le succès des projets et la satisfaction des parties
                                prenantes.</p>


                            <h3 className={"text-5xl viga-regular text-green_primary pt-8 pb-6"}> Projets : </h3>
                            <section className="w-full py-4 overflow-hidden">
                                <div className="embla  w-full relative" ref={emblaRef3}>
                                    <div className="embla__container  gap-6 grid grid-cols-2 ">

                                        <div key={"col-album-photo"}
                                             className="embla__slide  mx-6 flex flex-col gap-5 bg-white/50 rounded-3xl min-w-0 p-4 shrink-0">

                                            {/*<div className="w-full h-52 rounded-2xl bg-gray-400/40"></div>*/}
                                            <img className={"w-full h-52 rounded-2xl object-cover object-top"}
                                                 src={"album.png"}></img>

                                            <div className="space-y-4 flex flex-col justify-between flex-1">
                                                <div className={"space-y-4"}>

                                                    <h3 className="viga-regular text-4xl text-green_header line_clamp_1">Album
                                                        photo</h3>
                                                    <div className={"flex flex-wrap gap-4"}>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC36.02</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC36.03</p>
                                                    </div>
                                                </div>
                                                <p className="flex justify-end">
                                                    <NavLink
                                                        className={"text-lg font-semibold px-8 py-3 bg-green_primary/80 hover:bg-green_primary duration-300 w-fit block rounded-2xl text-white"}
                                                        to={`/project/album-photo`}>Voir plus</NavLink>
                                                </p>
                                            </div>
                                        </div>
                                        <div key={"col-cayden"}
                                             className="embla__slide  mx-6 flex flex-col gap-5 bg-white/50 rounded-3xl min-w-0 p-4 shrink-0">

                                            {/*<div className="w-full h-52 rounded-2xl bg-gray-400/40"></div>*/}
                                            <img className={"w-full h-52 rounded-2xl object-cover object-top"}
                                                 src={"cayden.png"}></img>

                                            <div className="space-y-4 flex flex-col justify-between flex-1">
                                                <div className={"space-y-4"}>

                                                    <h3 className="viga-regular text-4xl text-green_header line_clamp_1">Cayden
                                                        Quest </h3>
                                                    <div className={"flex flex-wrap gap-4"}>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC36.03</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC36.04</p>
                                                    </div>
                                                </div>
                                                <p className="flex justify-end">
                                                    <NavLink
                                                        className={"text-lg font-semibold px-8 py-3 bg-green_primary/80 hover:bg-green_primary duration-300 w-fit block rounded-2xl text-white"}
                                                        to={`/project/cayden-quest`}>Voir plus</NavLink>
                                                </p>
                                            </div>
                                        </div>
                                        <div key={"col-koh-frais"}
                                             className="embla__slide  mx-6 flex flex-col gap-5 bg-white/50 rounded-3xl min-w-0 p-4 shrink-0">

                                            {/*<div className="w-full h-52 rounded-2xl bg-gray-400/40"></div>*/}
                                            <img className={"w-full h-52 rounded-2xl object-cover object-top"}
                                                 src={"koh-frais.png"}></img>

                                            <div className="space-y-4 flex flex-col justify-between flex-1">
                                                <div className={"space-y-4"}>

                                                    <h3 className="viga-regular text-4xl text-green_header line_clamp_1">Koh
                                                        frais</h3>
                                                    <div className={"flex flex-wrap gap-4"}>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC16.02</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC16.03</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC16.04</p>
                                                    </div>
                                                </div>
                                                <p className="flex justify-end">
                                                    <NavLink
                                                        className={"text-lg font-semibold px-8 py-3 bg-green_primary/80 hover:bg-green_primary duration-300 w-fit block rounded-2xl text-white"}
                                                        to={`/project/koh-frais`}>Voir plus</NavLink>
                                                </p>
                                            </div>
                                        </div>
                                        <div key={"col-alizon"}
                                             className="embla__slide  mx-6 flex flex-col gap-5 bg-white/50 rounded-3xl min-w-0 p-4 shrink-0">

                                            <div className="w-full h-52 rounded-2xl bg-gray-400/40"></div>
                                            {/*<img className={"w-full h-52 rounded-2xl object-cover object-top"}*/}
                                            {/*     src={"huit-reines.jpg"}></img>*/}

                                            <div className="space-y-4 flex flex-col justify-between flex-1">
                                                <div className={"space-y-4"}>

                                                    <h3 className="viga-regular text-4xl text-green_header line_clamp_1">Alizon</h3>
                                                    <div className={"flex flex-wrap gap-4"}>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC26.01</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC26.02</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC26.03</p>
                                                        <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header text-lg font-semibold rounded-lg w-fit"}> AC26.04</p>
                                                    </div>
                                                </div>
                                                <p className="flex justify-end">
                                                    <NavLink
                                                        className={"text-lg font-semibold px-8 py-3 bg-green_primary/80 hover:bg-green_primary duration-300 w-fit block rounded-2xl text-white"}
                                                        to={`/project/alizon`}>Voir plus</NavLink>
                                                </p>
                                            </div>
                                        </div>


                                    </div>
                                    {/*<button*/}
                                    {/*    className="embla__prev bg-green_primary/60 hover:bg-green_primary duration-300 p-4 rounded-full absolute top-1/2 -translate-y-1/2 left-2"*/}
                                    {/*    onClick={scrollPrev}>*/}
                                    {/*    <svg className={"w-8"} viewBox="0 0 24 24" fill="none"*/}
                                    {/*         xmlns="http://www.w3.org/2000/svg">*/}
                                    {/*        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>*/}
                                    {/*        <g id="SVGRepo_tracerCarrier" stroke-linecap="round"*/}
                                    {/*           stroke-linejoin="round"></g>*/}
                                    {/*        <g id="SVGRepo_iconCarrier">*/}
                                    {/*            <path*/}
                                    {/*                d="M16.1795 3.26875C15.7889 2.87823 15.1558 2.87823 14.7652 3.26875L8.12078 9.91322C6.94952 11.0845 6.94916 12.9833 8.11996 14.155L14.6903 20.7304C15.0808 21.121 15.714 21.121 16.1045 20.7304C16.495 20.3399 16.495 19.7067 16.1045 19.3162L9.53246 12.7442C9.14194 12.3536 9.14194 11.7205 9.53246 11.33L16.1795 4.68297C16.57 4.29244 16.57 3.65928 16.1795 3.26875Z"*/}
                                    {/*                fill="#fff"></path>*/}
                                    {/*        </g>*/}
                                    {/*    </svg>*/}
                                    {/*</button>*/}
                                    {/*<button*/}
                                    {/*    className="embla__next  bg-green_primary/60 hover:bg-green_primary duration-300 p-4 rounded-full absolute top-1/2 -translate-y-1/2 right-2"*/}
                                    {/*    onClick={scrollNext}>*/}
                                    {/*    <svg className={"w-8 rotate-180"} viewBox="0 0 24 24" fill="none"*/}
                                    {/*         xmlns="http://www.w3.org/2000/svg">*/}
                                    {/*        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>*/}
                                    {/*        <g id="SVGRepo_tracerCarrier" stroke-linecap="round"*/}
                                    {/*           stroke-linejoin="round"></g>*/}
                                    {/*        <g id="SVGRepo_iconCarrier">*/}
                                    {/*            <path*/}
                                    {/*                d="M16.1795 3.26875C15.7889 2.87823 15.1558 2.87823 14.7652 3.26875L8.12078 9.91322C6.94952 11.0845 6.94916 12.9833 8.11996 14.155L14.6903 20.7304C15.0808 21.121 15.714 21.121 16.1045 20.7304C16.495 20.3399 16.495 19.7067 16.1045 19.3162L9.53246 12.7442C9.14194 12.3536 9.14194 11.7205 9.53246 11.33L16.1795 4.68297C16.57 4.29244 16.57 3.65928 16.1795 3.26875Z"*/}
                                    {/*                fill="#fff"></path>*/}
                                    {/*        </g>*/}
                                    {/*    </svg>*/}
                                    {/*</button>*/}
                                </div>
                            </section>
                        </div>

                    </div>

                </div>


            </div>
        </div>
    )


}

export default Competences