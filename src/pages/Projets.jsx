import {useCallback, useEffect, useState} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { NavLink } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";

function Projets() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);



    const [projects, setProjects] = useState([]);


    useEffect(() => {
        // Chargez les données depuis le fichier JSON ou une API
        fetch('projets.json')
            .then(response => response.json())
            .then(data => setProjects(data));
    }, []);

    return (
        <div className="pt-44" id={"top"}>
            <section className="container">
                <h1 className="viga-regular text-green_primary text-6xl">Mes projets</h1>
                <div className="text-green_header text-xl font-semibold pt-10 space-y-3 w-3/4">
                    <p>Bienvenue sur ma page projet ! Ici, je partage quelques-unes de mes réalisations les plus significatives effectuées durant mon parcours en BUT Informatique, ainsi que des projets développés lors de mes stages et mes initiatives personnelles. </p>
                    <p> Ces projets incluent la création de sites web dynamiques, le développement d'applications Java, et des applications web. Chaque projet m'a permis de renforcer mes compétences en programmation, en design web et en gestion de bases de données, tout en me donnant l'occasion de relever des défis et d'innover.</p>
                </div>
            </section>

            <section className="w-full py-24">
                <div className="embla  w-full relative" ref={emblaRef}>
                    <div className="embla__container flex ">
                        {projects.map(project => (
                            <div key={project.slug}
                                className="embla__slide basis-3/12 mx-6 flex flex-col gap-5 bg-white/50 rounded-3xl min-w-0 p-4 shrink-0">
                                {project.image !== "" ?
                                    <img className={"w-full h-52 rounded-2xl object-cover object-top"} src={project.image}></img>
                                    :
                                    <div className="w-full h-52 rounded-2xl bg-gray-400/40"></div>

                                }

                                <div className="space-y-4">
                                    <div className={"flex gap-2 flex-wrap"}>
                                        {(project.front).map(
                                            fr => ( <p className={"px-4 py-1.5 bg-[#efc9b2] text-green_header font-semibold rounded-lg"}> {fr} </p>)
                                        )}
                                        {project.back.map(
                                            ba => ( <p className={"px-4 py-1.5 bg-[#d8b5e6] text-green_header font-semibold rounded-lg"}> {ba} </p>)
                                        )}
                                    </div>
                                    <h3 className="viga-regular text-4xl text-green_header line_clamp_1">{project.title}</h3>
                                    <p className={"text-green_header text-lg font-semibold line_clamp_3"}>{project.description}</p>
                                    <p className="flex justify-end">
                                        <NavLink className={"text-lg font-semibold px-8 py-3 bg-green_primary/80 hover:bg-green_primary duration-300 w-fit block rounded-2xl text-white"} to={`/project/${project.slug}`}>Voir plus</NavLink>
                                    </p>
                                </div>
                            </div>
                        ))}

                </div>
                <button
                    className="embla__prev backdrop-blur-lg bg-green_primary/80 hover:bg-green_primary duration-300 p-4 rounded-full absolute -top-12 -translate-y-1/2 left-12"
                        onClick={scrollPrev}>
                        <svg className={"w-8" } viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M16.1795 3.26875C15.7889 2.87823 15.1558 2.87823 14.7652 3.26875L8.12078 9.91322C6.94952 11.0845 6.94916 12.9833 8.11996 14.155L14.6903 20.7304C15.0808 21.121 15.714 21.121 16.1045 20.7304C16.495 20.3399 16.495 19.7067 16.1045 19.3162L9.53246 12.7442C9.14194 12.3536 9.14194 11.7205 9.53246 11.33L16.1795 4.68297C16.57 4.29244 16.57 3.65928 16.1795 3.26875Z"
                                    fill="#fff"></path>
                            </g>
                        </svg>
                    </button>
                    <button
                        className="embla__next backdrop-blur-lg bg-green_primary/80 hover:bg-green_primary duration-300 p-4 rounded-full absolute -top-12 -translate-y-1/2 right-12"
                        onClick={scrollNext}>
                        <svg className={"w-8 rotate-180"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M16.1795 3.26875C15.7889 2.87823 15.1558 2.87823 14.7652 3.26875L8.12078 9.91322C6.94952 11.0845 6.94916 12.9833 8.11996 14.155L14.6903 20.7304C15.0808 21.121 15.714 21.121 16.1045 20.7304C16.495 20.3399 16.495 19.7067 16.1045 19.3162L9.53246 12.7442C9.14194 12.3536 9.14194 11.7205 9.53246 11.33L16.1795 4.68297C16.57 4.29244 16.57 3.65928 16.1795 3.26875Z"
                                    fill="#fff"></path>
                            </g>
                        </svg>
                    </button>
                </div>
            </section>



            {/*<section className="container text-center">*/}
            {/*    <NavLink*/}
            {/*        to="/all-projects"*/}
            {/*        className="text-white bg-green_primary/80 hover:bg-green_primary duration-300 px-8 py-4 rounded-3xl text-xl"*/}
            {/*    >*/}
            {/*        Voir tout les projets*/}
            {/*    </NavLink>*/}
            {/*</section>*/}
        </div>
    );
}

export default Projets;
