import { Component } from '@angular/core';
import { ARTICLES, IArticles } from 'src/app/mocks/articles.mock';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.css']
})
export class ArticlesPageComponent {

  // METHODE AU PARENT POUR RECUPERER LES INFO DES ENFANTS ET METTRE A JOUR LA PAGE ARTICLE SELON L'ARTICLE CLIQUER DONC L'ID DE L'ARTICLE CLIQUER

  //Récupérer mon mock
  Articles: IArticles[] = ARTICLES;

  // Propriété pour stocker l'article sélectionné
  articleInfo? : IArticles;

  // Configuration de la navigation dans le constructeur
  constructor(
    // Garde en mémoire l'info de la route paramétrée, le ID de l'URL est l'ID de l'article
    private activatedRoute: ActivatedRoute, 
    
    // Service d'Angular pour interréagir avec le navigateur -> permet de revenir en arrière sur la vue précedemment consultée
    private location: Location) {}

    //Configuration du ngOnInit pour la bonne récupération des éléments par id au lancement de la page article/:id (rooter)
    ngOnInit(): void {
      this.getArticleId();
    }

    // Méthode pour récupérer l'article par son ID
    getArticleId(): void {
      // Récupération de l'ID de l'article
      const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  
      // Récupération de l'article par son ID
      this.articleInfo = this.Articles.find(article => article.id === id);

      // Récupération de l'objet du mock ARTICLES dont l'id est similaire à celui de l'url
      const displayedArticleInfo = this.Articles.find((article: IArticles) => article.id === id);

      //Assignement de l'objet à la variable articleInfo si j'a iun article dans ma liste
      if (displayedArticleInfo) {
        this.articleInfo = displayedArticleInfo;
      }
    }
}
