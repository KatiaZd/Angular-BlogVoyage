export interface IArticles {
    id: number;
    country: string;
    city: string;
    startDate: Date;
    endDate: Date;
    mainImage: string;
    secondaryImages: string[];
    text: string;
    positivePoints: string[];
    negativePoints: string[];
    tips: string[];
    summary: string;
    isTop: boolean;

}

export const ARTICLES: IArticles[] = [
        {
            id: 1,
            country: 'Albanie',
            city: 'Tirana',
            startDate: new Date('2022-02-14'),
            endDate: new Date('2022-05-17'),
            mainImage: 'assets/img/albanie/albanie.png',
            secondaryImages: [
                'assets/img/albanie/albanie1.jpg',
                'assets/img/albanie/albanie2.jpg',
                'assets/img/albanie/albanie3.jpg',
            ],
            text: "L'Albanie est un pays magnifique avec une riche histoire, des plages de sable fin et des montagnes majestueuses. Si vous cherchez à explorer un endroit encore peu connu, alors l'Albanie est la destination parfaite pour vous. Lors de votre voyage en Albanie, vous pourrez explorer la ville animée de Tirana, avec ses bâtiments colorés et sa vie nocturne dynamique. Vous pourrez également visiter les villes historiques de Berat et Gjirokastra, toutes deux inscrites au patrimoine mondial de l'UNESCO pour leur architecture unique et leur histoire fascinante. Les plages de la côte albanaise sont également incontournables, avec leurs eaux cristallines et leurs paysages à couper le souffle. Les plages les plus célèbres incluent celle de Saranda et celle de Dhermi, où vous pourrez vous détendre sur le sable chaud et profiter du soleil. Mais l'Albanie ne se limite pas aux villes et aux plages, vous pourrez également explorer les montagnes des Alpes albanaises, avec des vues imprenables sur la nature et des sentiers de randonnée inoubliables. Le parc national de Theth est un endroit idéal pour les randonneurs expérimentés, avec des cascades spectaculaires et des vues panoramiques à couper le souffle. En bref, un voyage en Albanie est une expérience unique et inoubliable qui vous permettra de découvrir un pays authentique et encore peu exploité par les touristes. ",
            positivePoints: [
                'Un pays très simple à sillonner, sans embrouilles ni complexité',
                'Des habitants gentils, spontanés et qui cherchent le contact',
                'Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques'
            ],
            negativePoints: [
                'Le climat torride en juillet-août, sauf en montagne',
                'La côte très fréquentée l’été et de plus en plus bétonnée'
            ],
            tips: [
                "Les Albanais sont connus pour leur hospitalité chaleureuse, n'hésitez pas à engager la conversation avec eux et à leur demander des recommandations sur les endroits à visiter.",
            ],
            summary: 'L’Albanie est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l’Albanie.',
            isTop: true,
        },

        {
            id: 2,
            country: 'Grèce',
            city: 'Athènes',
            startDate: new Date('2022-04-14'),
            endDate: new Date('2022-05-17'),
            mainImage: 'assets/img/grece/grece1.jpg',
            secondaryImages: [
                'assets/img/grece/grece2.jpg',
                'assets/img/grece/grece3.jpg',
                'assets/img/grece/grece4.jpg',
                'assets/img/grece/grece5.jpg',
                'assets/img/grece/grece.png',
                
            ],
            text: "La Grèce est un pays magnifique qui offre une expérience de voyage incomparable. Avec son histoire riche et sa culture vibrante, elle est une destination populaire pour les voyageurs du monde entier. Lors de votre voyage en Grèce, vous pourrez explorer la ville animée d'Athènes, la capitale du pays, avec ses célèbres sites historiques comme l'Acropole et le Parthénon. Vous pourrez également visiter les îles grecques, avec leurs plages de sable blanc, leurs eaux cristallines et leurs villages pittoresques. Les îles grecques les plus célèbres incluent Santorin, Mykonos, Rhodes et Corfou, chacune avec sa propre ambiance et ses sites à découvrir. Vous pourrez vous détendre sur les plages, déguster des spécialités locales dans les tavernes et explorer les rues pavées des villages traditionnels. En dehors des villes et des îles, la Grèce offre également une beauté naturelle à couper le souffle. Les montagnes du Péloponnèse, les gorges de Samarie en Crète et les formations rocheuses de Meteora sont autant d'exemples de la nature sauvage et magnifique de la Grèce. En bref, un voyage en Grèce est une expérience inoubliable qui vous permettra de découvrir une culture riche, une beauté naturelle spectaculaire et des plages à couper le souffle.",
            positivePoints: [
                "L'histoire et la culture : La Grèce est un pays qui a eu une influence majeure sur la culture occidentale et qui est reconnu pour son patrimoine historique riche. La Grèce antique a vu naître la démocratie, la philosophie et les Jeux olympiques, tandis que l'architecture grecque classique est encore admirée dans le monde entier aujourd'hui. De plus, la Grèce a également une culture vivante et vibrante avec des traditions musicales et culinaires uniques.",
                "La beauté naturelle : La Grèce offre une beauté naturelle incroyable avec ses eaux cristallines, ses plages de sable doré, ses montagnes majestueuses et ses îles pittoresques. Les îles grecques sont parmi les plus belles au monde, tandis que le continent offre également de nombreux sites naturels spectaculaires, tels que les gorges de Samarie et le mont Olympe.",
                "La nourriture : La cuisine grecque est célèbre pour ses saveurs fraîches et méditerranéennes, avec des plats traditionnels tels que la moussaka, la feta, les olives, l'huile d'olive et les fruits de mer frais. Les tavernes locales proposent souvent une cuisine délicieuse à des prix abordables, et vous pourrez également découvrir de nombreux marchés locaux qui vendent des produits frais et savoureux."
            ],
            negativePoints: [
                "Le tourisme de masse : La Grèce est une destination de voyage populaire et attire des millions de touristes chaque année, en particulier pendant la haute saison estivale. Cela peut entraîner une saturation de certaines zones touristiques et une surcharge de l'infrastructure locale, avec des problèmes tels que la congestion de la circulation, la pollution et une pression sur les ressources naturelles. Cependant, certaines régions moins touristiques peuvent offrir une expérience plus authentique et moins fréquentée."
            ],
            tips: [
                "Mon conseil serait de sortir des sentiers battus et d'explorer les régions moins connues de la Grèce. Bien que les îles grecques les plus populaires soient magnifiques et incontournables, elles peuvent parfois être surpeuplées et coûteuses.En explorant les régions moins touristiques, vous pourriez découvrir des coins cachés de la Grèce, avec des sites historiques, des plages isolées, des villages traditionnels et des paysages naturels spectaculaires. Vous pourriez également rencontrer des habitants locaux et découvrir leur mode de vie, leur culture et leur cuisine locale. La Grèce est un pays riche en diversité, et explorer les régions moins fréquentées pourrait vous permettre de découvrir une expérience de voyage plus authentique et mémorable."
            ],
            summary:"Explorez les régions moins connues de la Grèce pour découvrir une expérience de voyage plus authentique et mémorable.",
            isTop: false,
        },

        {
            id: 3,
            country: 'Algérie',
            city: 'Alger',
            startDate: new Date('2022-04-14'),
            endDate: new Date('2022-05-17'),
            mainImage: 'assets/img/algerie/biskra.jpg',
            secondaryImages: [
                'assets/img/algerie/alger2.jpg',
                'assets/img/algerie/alger4.jpg',
                'assets/img/algerie/bejaia.jpg',
                'assets/img/algerie/capCarbon.jpg',
                'assets/img/algerie/annaba.jpg',
                'assets/img/algerie/casbah.jpg',
                'assets/img/algerie/timgad.jpg',
                'assets/img/algerie/vendeur.jpg',
                'assets/img/algerie/kabylie.jpg',
                'assets/img/algerie/kabylie1.jpg',
                'assets/img/algerie/kabylie2.jpg',
                'assets/img/algerie/kabylie3.jpg',
                'assets/img/algerie/oran.jpg',
                'assets/img/algerie/sahara1.jpg',
                'assets/img/algerie/sahara2.jpg',
                'assets/img/algerie/sahara3.jpg',
                'assets/img/algerie/alger3.jpg',
                
            ],
            text: "Qui devinerait qu'en Algérie des sites antiques romains d'une extrême beauté se dévoilent aux visiteurs, ici en Kabylie, là dans les Aurès ou l'Algérois ? Qui soupçonnerait que de magnifiques oasis ont donné naissance à l'un des systèmes d'irrigation les plus ingénieux au monde ? Nous entendons malheureusement trop peu parler de cette Algérie pour en connaître ses richesses matérielles et immatérielles. Les échos nous arrivant nourrissent inlassablement une vision inexacte et faussée du pays. Constamment montrée du doigt pour son retard en matière de tourisme, l’Algérie n’a certes pas suivi la frénésie touristique qui s’est emparée du Maroc et de la Tunisie, mais elle invite aussi audacieusement à découvrir ses secrets, son histoire, son passé tumultueux et ses richesses authentiques. Certains diront qu’il n’existe pas de tourisme en Algérie, mais c’est faux. Les infrastructures hôtelières sont en constante amélioration et les progrès sont nets. Sans oublier les infrastructures routières qui se sont considérablement développées ces dernières années avec, par exemple, la mise en place d’une autoroute Est-Ouest permettant de relier Alger à Oran en seulement 4 heures...Pour ce qui est de la sécurité, l’Algérie est un pays globalement sûr, en dehors de la région du Djudjura en Kabylie, ou encore le parc du Tassili n’Ajjer et le désert aux portes de Tamanrasset qui restent tous deux fermés aux touristes. Mais, quoi qu’il en soit, les autorités et les locaux savent où il ne faut pas se rendre et il est important de les écouter et de ne pas jouer au téméraire si on vous dit que c’est risqué de faire tel ou tel déplacement. Mais, en raison de ces problèmes de sécurité rarissimes, l’Algérie doit-elle pour autant être ignorée ? Les plus beaux voyages ne sont-ils pas ceux de la découverte d’un pays sans maquillage, ni artifice ? L’Algérie dévoile avec sincérité et sans pudeur ses mille et un contrastes. Parfois repoussante et lunatique, mais éternellement accueillante et envoûtante, elle invite à des explorations plus complexes et plus intimes. Et une fois qu’on a découvert l’Algérie, on a qu’une seule envie : la redécouvrir encore et encore et y revenir, malgré tous les préjugés sur ce magnifique pays. Et puis un jour, on se surprend alors à répéter en coeur avec les Algériens « 1, 2, 3, viva l’Algérie » parce que c’est un pays sublime et incroyablement attachant.",
            positivePoints: [
                "La chaleur de l'accueil des locaux, qui sont connus pour être accueillants et hospitaliers envers les visiteurs.",
                "La diversité des paysages, avec des montagnes, des déserts, des oasis, des plages et des villes historiques.",
                "La richesse du patrimoine culturel, avec des sites antiques romains, des villes historiques et des villages traditionnels.",
                "La cuisine locale, avec des plats traditionnels et des spécialités régionales.",
                "La diversité des activités, avec des randonnées, des visites culturelles, des activités nautiques et des excursions dans le désert."
            ],
            negativePoints: [
                "L'Algérie peut être très chaud en été, avec des températures dépassant les 40°C. Privilégiez le printemps ou l'automne",
                "Les précautions de sécurité à prendre, notamment dans les régions frontalières et dans le sud du pays.",

            ],
            tips: [
                "Si vous planifiez un voyage en Algérie, assurez-vous de bien vous informer sur les formalités d'entrée et les réglementations en matière de sécurité, notamment pour les zones à éviter. Il est également conseillé de se munir d'une carte SIM locale pour rester connecté et de respecter les coutumes et les traditions locales pour éviter les malentendus et les faux-pas.",
            ],
            summary: "L'Algérie est un pays riche en patrimoine culturel et naturel, offrant aux visiteurs une expérience de voyage authentique et inoubliable, malgré sa faible notoriété touristique. Les infrastructures hôtelières et routières sont en amélioration constante, et bien que des précautions de sécurité doivent être prises, l'Algérie est un pays globalement sûr. En explorant ses merveilles, on découvre ses mille et un contrastes, et on ne peut s'empêcher de tomber amoureux de ce pays attachant.",
            isTop: false,
        },

        {
            id: 4,
            country: 'Tunisie',
            city: 'Tunis',
            startDate: new Date('2022-04-14'),
            endDate: new Date('2022-05-17'),
            mainImage: 'assets/img/tunisie/tunisieTunis.png',
            secondaryImages: [
                'assets/img/tunisie/tunisie1.jpg',
                'assets/img/tunisie/tunisie2.jpg',
                'assets/img/tunisie/tunisie3.jpg',
                'assets/img/tunisie/tunisie4.jpg',
                'assets/img/tunisie/tunisie5.jpg',
                'assets/img/tunisie/tunisie6.jpg',
                'assets/img/tunisie/tunisie7.jpg',
                
            ],
            text: "La Tunisie est une destination de choix pour les amateurs de culture, d'histoire et de détente. Avec ses magnifiques plages, ses sites archéologiques impressionnants et ses villes animées, la Tunisie offre une variété d'expériences pour tous les types de voyageurs. Des villes historiques comme Tunis et Carthage aux paysages pittoresques de Sidi Bou Said et de la ville côtière de Hammamet, il y a tant à voir et à découvrir. De plus, la Tunisie est également connue pour sa délicieuse cuisine, sa riche tradition artisanale et son hospitalité chaleureuse. Que vous soyez à la recherche de vacances culturelles ou de détente, la Tunisie ne manquera pas de vous séduire.",
            positivePoints: [
                "Les plages et la détente : la Tunisie est bordée par la mer Méditerranée, offrant de magnifiques plages pour se détendre et se baigner, notamment à Hammamet, Sousse et Djerba",
                "Le climat : la Tunisie bénéficie d'un climat agréable toute l'année, avec des hivers doux et des étés chauds, ce qui en fait une destination idéale pour les vacances.",
                "La culture : la Tunisie est un pays riche en histoire et en culture, avec des sites archéologiques impressionnants, des villes historiques et des traditions artisanales uniques."
            ],
            negativePoints: [
                "Certaines zones touristiques peuvent être surpeuplées et bondées, ce qui peut rendre l'expérience touristique moins agréable.",
                "L'extrème chaleur de l'été peut rendre les visites et les activités extérieures difficiles.",
                " Il reste encore des zones à risque et des menaces terroristes qui peuvent survenir à tout moment, ce qui nécessite une certaine vigilance et une attention particulière",
            ],
            tips: [
                "Prenez une paire de tong !",
                
            ],
            summary: 'Si vous voyagez en Tunisie, assurez-vous de goûter aux délicieuses spécialités culinaires locales et de vous immerger dans la culture riche et diversifiée du pays.',
            isTop: false,
        },

        {
            id: 5,
            country: 'Monténégro',
            city: 'Podgorica',
            startDate: new Date('2022-04-14'),
            endDate: new Date('2022-05-17'),
            mainImage: 'assets/img/montenegro/montenegro5.jpg',
            secondaryImages: [
                'assets/img/montenegro/montenegro1.jpg',
                'assets/img/montenegro/montenegro2.jpg',
                'assets/img/montenegro/montenegro3.jpg',
                'assets/img/montenegro/montenegro4.jpg',
            ],
            text: "Le Monténégro est un petit pays situé sur la côte Adriatique, offrant des paysages montagneux à couper le souffle et des plages de sable fin bordées d'eaux cristallines. Les villes médiévales préservées, comme Kotor et Budva, sont des joyaux culturels à ne pas manquer, tandis que le parc national de Durmitor offre des activités de plein air telles que la randonnée, le rafting et le ski en hiver. Les Monténégrins sont accueillants et fiers de leur pays, offrant une expérience de voyage authentique et inoubliable.",
            positivePoints: [
                "La beauté naturelle : Le Monténégro est connu pour sa beauté naturelle, avec des montagnes majestueuses, des lacs cristallins et des côtes spectaculaires. Les amoureux de la nature trouveront de nombreux endroits pour explorer et apprécier la biodiversité de la région.",
                "La richesse culturelle : Le Monténégro est un pays avec une longue et riche histoire, avec des influences des cultures slave, turque et vénitienne. Les villes comme Kotor et Budva sont des exemples de l'architecture et de l'histoire intéressantes à découvrir, tout en appréciant la vie moderne des habitants.",
                "La gastronomie : Le Monténégro offre une gastronomie locale unique qui mérite d'être découverte. Les plats typiques comprennent le jambon de Njeguši, le fromage de Kolašin, le poisson frais de la mer Adriatique, et bien sûr, la rakija, une eau-de-vie traditionnelle de la région."
            ],
            negativePoints: [
                "Malgré les efforts de développement, certaines zones du pays peuvent être moins développées sur le plan touristique et des infrastructures de base peuvent manquer dans certaines régions reculées.",
                "En été, le Monténégro peut être très fréquenté, surtout sur les côtes, ce qui peut parfois rendre difficile la recherche d'un hébergement abordable et l'accès aux attractions populaires peut être limité en raison de la foule."
            ],
            tips: [
                "N'oubliez pas d'apporter des chaussures de randonnée confortables, car le Monténégro est un pays montagneux avec de nombreuses opportunités pour la randonnée et l'exploration de la nature.",
            ],
            summary: "Le Monténégro est un pays magnifique avec une nature préservée et des sites historiques intéressants, bien que le tourisme y soit encore en développement. Il est conseillé de se renseigner sur les conditions routières avant de voyager et de prendre en compte les différences culturelles pour une expérience de voyage réussie.",
            isTop: false,
        },


    ]
            


