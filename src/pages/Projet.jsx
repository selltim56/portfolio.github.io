import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Projet() {
    const [project, setProject] = useState(null);
    const { projectSlug } = useParams();




    useEffect(() => {
        if (projectSlug) {
            fetch('../projets.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {

                    const selectedProject = data.find(item => item.slug === projectSlug);
                    setProject(selectedProject);
                })
                .catch(error => {
                    console.error('Error fetching project:', error);
                });
        }
    }, [projectSlug]);

    if (!project) {
        return <div>Chargement...</div>;
    }



    return (
        <div className={"pt-32 "}>
            <section className={"container w-9/12"}>

                <h1 className={"text-6xl uppercase viga-regular text-green_primary text-center mb-4"}>
                    {project.title}
                </h1>
                <p className={"text-center mb-12 text-2xl text-green_primary viga-regular "}>{project.date}</p>




                {project.image !== "" ?
                    <div className={"container !p-0 h-[500px] overflow-hidden rounded-2xl "}>
                        <img className={"   !object-cover object-top rounded-2xl w-full"} src={"../"+project.image} alt={"image projet"}></img>
                    </div>
                    :
                    <div className={" h-24"}></div>

                }

            </section>
            <section className="container w-9/12 !pt-0">
                <div className={"flex gap-5 flex-wrap pt-0 -mt-12 mb-8 text-2xl"}>
                    {(project.front).map(
                        fr => (
                            <p className={"px-6 py-3 bg-[#efc9b2] text-green_header font-semibold rounded-lg"}> {fr} </p>)
                    )}
                    {project.back.map(
                        ba => (
                            <p className={"px-6 py-3 bg-[#d8b5e6] text-green_header font-semibold rounded-lg"}> {ba} </p>)
                    )}
                </div>
                <p className={" text-2xl text-green_header font-semibold py-2 pb-6"}>{project.description}</p>


                {/*<h2 className={"text-4xl text-green_primary viga-regular mt-4"}> Lorem Ipsum </h2>*/}
                {/*<p className={" text-xl text-green_header font-semibold py-2 "}>Lorem ipsum dolor sit amet consectetur*/}
                {/*    adipiscing elit, penatibus dis risus blandit sagittis cubilia magna cras, purus dignissim praesent*/}
                {/*    aliquam suspendisse mauris. Purus nunc quisque augue suspendisse donec montes ridiculus, morbi*/}
                {/*    habitant sapien commodo pellentesque faucibus.</p>*/}

                {/*<h2 className={"text-4xl text-green_primary viga-regular mt-4"}> Lorem Ipsum </h2>*/}
                {/*<p className={" text-xl text-green_header font-semibold py-2 "}>Lorem ipsum dolor sit amet consectetur*/}
                {/*    adipiscing elit, penatibus dis risus blandit sagittis cubilia magna cras, purus dignissim praesent*/}
                {/*    aliquam suspendisse mauris. Purus nunc quisque augue suspendisse donec montes ridiculus, morbi*/}
                {/*    habitant sapien commodo pellentesque faucibus.</p>*/}


                {/*<h2 className={"text-4xl text-green_primary viga-regular mt-4"}> Lorem Ipsum </h2>*/}
                {/*<p className={" text-xl text-green_header font-semibold py-2 "}>Lorem ipsum dolor sit amet consectetur*/}
                {/*    adipiscing elit, penatibus dis risus blandit sagittis cubilia magna cras, purus dignissim praesent*/}
                {/*    aliquam suspendisse mauris. Purus nunc quisque augue suspendisse donec montes ridiculus, morbi*/}
                {/*    habitant sapien commodo pellentesque faucibus.</p>*/}

                {/*<h2 className={"text-4xl text-green_primary viga-regular mt-4"}> Lorem Ipsum </h2>*/}
                {/*<p className={" text-xl text-green_header font-semibold py-2 "}>Lorem ipsum dolor sit amet consectetur*/}
                {/*    adipiscing elit, penatibus dis risus blandit sagittis cubilia magna cras, purus dignissim praesent*/}
                {/*    aliquam suspendisse mauris. Purus nunc quisque augue suspendisse donec montes ridiculus, morbi*/}
                {/*    habitant sapien commodo pellentesque faucibus.</p>*/}

            </section>
        </div>
    );
}

export default Projet;
