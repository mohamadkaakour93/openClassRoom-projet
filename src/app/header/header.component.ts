import { Component ,OnInit} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  ngOnInit(): void {
  // Logique pour changer dynamiquement les couleurs du h1 toutes les 2 secondes
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  const text = 'SNAPFACE APP';  // Le texte à afficher dans le h1
  let colorfulText = '';

  // Fonction pour colorier chaque lettre du texte
  const colorText = () => {
    colorfulText = ''; // Réinitialiser le texte coloré
    for (let i = 0; i < text.length; i++) {
      const color = colors[(i + Math.floor(Date.now() / 2000)) % colors.length];
      colorfulText += `<span style="color:${color};">${text[i]}</span>`;
    }

    // Injecter le texte coloré dans l'élément h1
    const textElement = document.getElementById('colorfulText');
    if (textElement) {
      textElement.innerHTML = colorfulText;
    }
  };

  // Appeler la fonction au départ
  colorText();

  // Changer les couleurs toutes les 2 secondes (2000 ms)
  setInterval(() => {
    colorText();
  }, 2000);

}}