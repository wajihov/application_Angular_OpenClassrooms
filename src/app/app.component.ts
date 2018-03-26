import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts=[
    {
      titre: "Mon premier poste",
      content:"Je peux faire ce que je veux (passer ses limites): cette pensée est valable dans ma vie privé et j'essayais " +
      "d'augmenter de temps en temps et surtout dans cette nouvelle année 2018 pour avoir un job en développement en java j2ee ",
      created_it: new Date()
    },
    {
      titre: "Deuxième poste",
      content: "le travail dur et avec la durée (travail sur la durée): Je ne travaillais pas dur à 110% peux être manque de " +
      "confiance en soi que j'essayerai d'avancer et d'améliorer prochainement ",
      created_it: new Date()
    },
    {
      titre: "Troisième poste",
      content: "Je ne cherche pas la perfection (s'enfuir la perfection): cette pensée est bien et " +
      "j'ai travaillé dans de différentes projets avec la quantité  ",
      created_it: new Date()
    }
  ]
  /*posteOne="Mon premier poste";
  postTwo="Deuxième poste";
  postThree="Troisième poste";

  contentOne="Je peux faire ce que je veux (passer ses limites): cette pensée est valable dans ma vie privé et " +
    "j'essayais d'augmenter de temps en temps et surtout dans cette nouvelle année 2018 pour " +
    "avoir un job en développement en java j2ee ";
  contenteTwo="le travail dur et avec la durée (travail sur la durée): Je ne travaillais pas dur à 110% peux être manque de confiance en soi " +
    "que j'essayerai d'avancer et d'améliorer prochainement ";
  contexnteThree="Je ne cherche pas la perfection (s'enfuir la perfection): cette pensée est bien et" +
    " j'ai travaillé dans de différentes projets avec la quantité  ";
*/

  constructor(){}
}
