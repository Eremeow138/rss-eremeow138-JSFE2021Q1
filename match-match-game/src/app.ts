import { Game } from './components/game/game';
import { ContentField } from './components/content-field/content-field';
import { ImageCategoryModel } from './models/image-category-model';

export class App {
  private readonly game: Game;

  private readonly contentField: ContentField;

  constructor(private readonly rootElement: HTMLElement) {
    this.game = new Game();
    this.contentField = new ContentField();
    this.contentField.element.appendChild(this.game.element);
    this.rootElement.appendChild(this.contentField.element);
  }

  async start(): Promise<void> {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const cat = categories[0];
    const images = cat.images.map(name => `${cat.category}/${name}`);
    this.game.newGame(images);
  }
}
