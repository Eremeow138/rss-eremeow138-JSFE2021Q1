import { BaseComponent } from './components/base-component';
import { Game } from './components/game/game';
import { Header } from './components/header/header';
import { ImageCategoryModel } from './models/image-category-model';

export class App extends BaseComponent {
  private readonly game: Game;

  constructor(private readonly root: HTMLElement) {
    super('div', ['application']);
    this.game = new Game();
  }

  render(): HTMLElement {
    this.root.appendChild(this.element);
    this.element.appendChild(new Header().render());
    this.element.appendChild(this.game.render());
    this.start();
    return this.element;
  }

  async start(): Promise<void> {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const cat = categories[0];
    const images = cat.images.map(name => `${cat.category}/${name}`);
    this.game.newGame(images);
  }
}
