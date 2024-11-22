import "./home.scss"

const Home = () => {

    return (
            <div id="container">
                <button id="buttonLogin">Se connecter</button>
                <div id="content">
                    <div id="titleContent">
                        <p id="title">Qu'est-ce que Trouve Ton Match ?</p>
                    </div>
                    <div id="description">
                        <p>
                        Trouve Ton Match est une application qui vous permettra
                            de trouver LA personne pour vous accompagner et
                            vous soutenir, une épaule sur laquelle vous reposer.
                        </p>
                        <p>
                            Le but étant de créer un climat de confiance avec
                            cette personne afin que vous puissiez vous tourner
                            vers elle lorsque vous avez des soucis ou
                            des besoins.
                        </p>
                        <p>
                            Cette marraine / parrain peut être un chef d’entreprise
                            ou un cadre dirigeant ayant de l’expérience et
                            un réseau important pour faire appel à des partenaires experts dans vos besoins.
                        </p>
                    </div>
                </div>
            </div>
    );
}

export default Home;