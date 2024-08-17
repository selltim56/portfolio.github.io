import {NavLink} from "react-router-dom";


function Page_404() {

    return (
        <div className={"!pt-44 container"}>
            <h1 className={"text-7xl viga-regular text-green_primary"}>404</h1>
            <p className={"text-4xl viga-regular text-green_primary pb-16 pt-6 "}>Il semblerait que vous vous soyez perdue.</p>
            <NavLink
                to="/"
                className={ "px-8 py-4 text-3xl font-semibold rounded-3xl bg-green_primary/80 hover:bg-green_primary duration-300 text-white block w-fit" }
            >
                Revenir à l'accueil
            </NavLink>
        </div>
    )
}

export default Page_404