import { Category } from './category';

const categories: Category[] = [
  {
    id: 1,
    name: 'Action (set A)',
    cards: [
      {
        id: 1,
        word: 'cry',
        translation: 'плакать',
        image: 'http://localhost:3000/img/cry.jpg',
        audioSrc: 'http://localhost:3000/audio/cry.mp3',
      },
      {
        id: 2,
        word: 'dance',
        translation: 'танцевать',
        image: 'http://localhost:3000/img/dance.jpg',
        audioSrc: 'http://localhost:3000/audio/dance.mp3',
      },
      {
        id: 3,
        word: 'dive',
        translation: 'нырять',
        image: 'http://localhost:3000/img/dive.jpg',
        audioSrc: 'http://localhost:3000/audio/dive.mp3',
      },
      {
        id: 4,
        word: 'draw',
        translation: 'рисовать',
        image: 'http://localhost:3000/img/draw.jpg',
        audioSrc: 'http://localhost:3000/audio/draw.mp3',
      },
      {
        id: 5,
        word: 'fish',
        translation: 'ловить рыбу',
        image: 'http://localhost:3000/img/fish.jpg',
        audioSrc: 'http://localhost:3000/audio/fish.mp3',
      },
      {
        id: 6,
        word: 'fly',
        translation: 'летать',
        image: 'http://localhost:3000/img/fly.jpg',
        audioSrc: 'http://localhost:3000/audio/fly.mp3',
      },
      {
        id: 7,
        word: 'hug',
        translation: 'обнимать',
        image: 'http://localhost:3000/img/hug.jpg',
        audioSrc: 'http://localhost:3000/audio/hug.mp3',
      },
      {
        id: 8,
        word: 'jump',
        translation: 'прыгать',
        image: 'http://localhost:3000/img/jump.jpg',
        audioSrc: 'http://localhost:3000/audio/jump.mp3',
      },
    ],
  },
  {
    id: 2,
    name: 'Action (set B)',
    cards: [
      {
        id: 9,
        word: 'open',
        translation: 'открывать',
        image: 'http://localhost:3000/img/open.jpg',
        audioSrc: 'http://localhost:3000/audio/open.mp3',
      },
      {
        id: 10,
        word: 'play',
        translation: 'играть',
        image: 'http://localhost:3000/img/play.jpg',
        audioSrc: 'http://localhost:3000/audio/play.mp3',
      },
      {
        id: 11,
        word: 'point',
        translation: 'указывать',
        image: 'http://localhost:3000/img/point.jpg',
        audioSrc: 'http://localhost:3000/audio/point.mp3',
      },
      {
        id: 12,
        word: 'ride',
        translation: 'ездить',
        image: 'http://localhost:3000/img/ride.jpg',
        audioSrc: 'http://localhost:3000/audio/ride.mp3',
      },
      {
        id: 13,
        word: 'run',
        translation: 'бегать',
        image: 'http://localhost:3000/img/run.jpg',
        audioSrc: 'http://localhost:3000/audio/run.mp3',
      },
      {
        id: 14,
        word: 'sing',
        translation: 'петь',
        image: 'http://localhost:3000/img/sing.jpg',
        audioSrc: 'http://localhost:3000/audio/sing.mp3',
      },
      {
        id: 15,
        word: 'skip',
        translation: 'пропускать, прыгать',
        image: 'http://localhost:3000/img/skip.jpg',
        audioSrc: 'http://localhost:3000/audio/skip.mp3',
      },
      {
        id: 16,
        word: 'swim',
        translation: 'плавать',
        image: 'http://localhost:3000/img/swim.jpg',
        audioSrc: 'http://localhost:3000/audio/swim.mp3',
      },
    ],
  },
  {
    id: 3,
    name: 'Animal (set A)',
    cards: [
      {
        id: 17,
        word: 'cat',
        translation: 'кот',
        image: 'http://localhost:3000/img/cat.jpg',
        audioSrc: 'http://localhost:3000/audio/cat.mp3',
      },
      {
        id: 18,
        word: 'chick',
        translation: 'цыплёнок',
        image: 'http://localhost:3000/img/chick.jpg',
        audioSrc: 'http://localhost:3000/audio/chick.mp3',
      },
      {
        id: 19,
        word: 'chicken',
        translation: 'курица',
        image: 'http://localhost:3000/img/chicken.jpg',
        audioSrc: 'http://localhost:3000/audio/chicken.mp3',
      },
      {
        id: 20,
        word: 'dog',
        translation: 'собака',
        image: 'http://localhost:3000/img/dog.jpg',
        audioSrc: 'http://localhost:3000/audio/dog.mp3',
      },
      {
        id: 21,
        word: 'horse',
        translation: 'лошадь',
        image: 'http://localhost:3000/img/horse.jpg',
        audioSrc: 'http://localhost:3000/audio/horse.mp3',
      },
      {
        id: 22,
        word: 'pig',
        translation: 'свинья',
        image: 'http://localhost:3000/img/pig.jpg',
        audioSrc: 'http://localhost:3000/audio/pig.mp3',
      },
      {
        id: 23,
        word: 'rabbit',
        translation: 'кролик',
        image: 'http://localhost:3000/img/rabbit.jpg',
        audioSrc: 'http://localhost:3000/audio/rabbit.mp3',
      },
      {
        id: 24,
        word: 'sheep',
        translation: 'овца',
        image: 'http://localhost:3000/img/sheep.jpg',
        audioSrc: 'http://localhost:3000/audio/sheep.mp3',
      },
    ],
  },
  {
    id: 4,
    name: 'Animal (set B)',
    cards: [
      {
        id: 25,
        word: 'bird',
        translation: 'птица',
        image: 'http://localhost:3000/img/bird.jpg',
        audioSrc: 'http://localhost:3000/audio/bird.mp3',
      },
      {
        id: 26,
        word: 'fish',
        translation: 'рыба',
        image: 'http://localhost:3000/img/fish1.jpg',
        audioSrc: 'http://localhost:3000/audio/fish.mp3',
      },
      {
        id: 27,
        word: 'frog',
        translation: 'жаба',
        image: 'http://localhost:3000/img/frog.jpg',
        audioSrc: 'http://localhost:3000/audio/frog.mp3',
      },
      {
        id: 28,
        word: 'giraffe',
        translation: 'жирафа',
        image: 'http://localhost:3000/img/giraffe.jpg',
        audioSrc: 'http://localhost:3000/audio/giraffe.mp3',
      },
      {
        id: 29,
        word: 'lion',
        translation: 'лев',
        image: 'http://localhost:3000/img/lion.jpg',
        audioSrc: 'http://localhost:3000/audio/lion.mp3',
      },
      {
        id: 30,
        word: 'mouse',
        translation: 'мышь',
        image: 'http://localhost:3000/img/mouse.jpg',
        audioSrc: 'http://localhost:3000/audio/mouse.mp3',
      },
      {
        id: 31,
        word: 'turtle',
        translation: 'черепаха',
        image: 'http://localhost:3000/img/turtle.jpg',
        audioSrc: 'http://localhost:3000/audio/turtle.mp3',
      },
      {
        id: 32,
        word: 'dolphin',
        translation: 'дельфин',
        image: 'http://localhost:3000/img/dolphin.jpg',
        audioSrc: 'http://localhost:3000/audio/dolphin.mp3',
      },
    ],
  },
  {
    id: 5,
    name: 'Clothes',
    cards: [
      {
        id: 33,
        word: 'skirt',
        translation: 'юбка',
        image: 'http://localhost:3000/img/skirt.jpg',
        audioSrc: 'http://localhost:3000/audio/skirt.mp3',
      },
      {
        id: 34,
        word: 'pants',
        translation: 'брюки',
        image: 'http://localhost:3000/img/pants.jpg',
        audioSrc: 'http://localhost:3000/audio/pants.mp3',
      },
      {
        id: 35,
        word: 'blouse',
        translation: 'блузка',
        image: 'http://localhost:3000/img/blouse.jpg',
        audioSrc: 'http://localhost:3000/audio/blouse.mp3',
      },
      {
        id: 36,
        word: 'dress',
        translation: 'платье',
        image: 'http://localhost:3000/img/dress.jpg',
        audioSrc: 'http://localhost:3000/audio/dress.mp3',
      },
      {
        id: 37,
        word: 'boot',
        translation: 'ботинок',
        image: 'http://localhost:3000/img/boot.jpg',
        audioSrc: 'http://localhost:3000/audio/boot.mp3',
      },
      {
        id: 38,
        word: 'shirt',
        translation: 'рубашка',
        image: 'http://localhost:3000/img/shirt.jpg',
        audioSrc: 'http://localhost:3000/audio/shirt.mp3',
      },
      {
        id: 39,
        word: 'coat',
        translation: 'пальто',
        image: 'http://localhost:3000/img/coat.jpg',
        audioSrc: 'http://localhost:3000/audio/coat.mp3',
      },
      {
        id: 40,
        word: 'shoe',
        translation: 'туфли',
        image: 'http://localhost:3000/img/shoe.jpg',
        audioSrc: 'http://localhost:3000/audio/shoe.mp3',
      },
    ],
  },
  {
    id: 6,
    name: 'Emotions',
    cards: [
      {
        id: 41,
        word: 'sad',
        translation: 'грустный',
        image: 'http://localhost:3000/img/sad.jpg',
        audioSrc: 'http://localhost:3000/audio/sad.mp3',
      },
      {
        id: 42,
        word: 'angry',
        translation: 'сердитый',
        image: 'http://localhost:3000/img/angry.jpg',
        audioSrc: 'http://localhost:3000/audio/angry.mp3',
      },
      {
        id: 43,
        word: 'happy',
        translation: 'счастливый',
        image: 'http://localhost:3000/img/happy.jpg',
        audioSrc: 'http://localhost:3000/audio/happy.mp3',
      },
      {
        id: 44,
        word: 'tired',
        translation: 'уставший',
        image: 'http://localhost:3000/img/tired.jpg',
        audioSrc: 'http://localhost:3000/audio/tired.mp3',
      },
      {
        id: 45,
        word: 'surprised',
        translation: 'удивлённый',
        image: 'http://localhost:3000/img/surprised.jpg',
        audioSrc: 'http://localhost:3000/audio/surprised.mp3',
      },
      {
        id: 46,
        word: 'scared',
        translation: 'испуганный',
        image: 'http://localhost:3000/img/scared.jpg',
        audioSrc: 'http://localhost:3000/audio/scared.mp3',
      },
      {
        id: 47,
        word: 'smile',
        translation: 'улыбка',
        image: 'http://localhost:3000/img/smile.jpg',
        audioSrc: 'http://localhost:3000/audio/smile.mp3',
      },
      {
        id: 48,
        word: 'laugh',
        translation: 'смех',
        image: 'http://localhost:3000/img/laugh.jpg',
        audioSrc: 'http://localhost:3000/audio/laugh.mp3',
      },
    ],
  },
  {
    id: 7,
    name: 'IT terms',
    cards: [
      {
        id: 49,
        word: 'developer',
        translation: 'разработчик',
        image: 'http://localhost:3000/img/developer.jpg',
        audioSrc: 'http://localhost:3000/audio/developer.mp3',
      },
      {
        id: 50,
        word: 'deadline',
        translation: 'срок',
        image: 'http://localhost:3000/img/deadline.jpg',
        audioSrc: 'http://localhost:3000/audio/deadline.mp3',
      },
      {
        id: 51,
        word: 'fix',
        translation: 'исправить',
        image: 'http://localhost:3000/img/fix.jpg',
        audioSrc: 'http://localhost:3000/audio/fix.mp3',
      },
      {
        id: 52,
        word: 'user experience',
        translation: 'пользовательский опыт',
        image: 'http://localhost:3000/img/user-experience.jpg',
        audioSrc: 'http://localhost:3000/audio/user-experience.mp3',
      },
      {
        id: 53,
        word: 'digital',
        translation: 'цифровой',
        image: 'http://localhost:3000/img/digital.jpg',
        audioSrc: 'http://localhost:3000/audio/digital.mp3',
      },
      {
        id: 54,
        word: 'cookies',
        translation: 'печенье',
        image: 'http://localhost:3000/img/cookies.jpg',
        audioSrc: 'http://localhost:3000/audio/cookies.mp3',
      },
      {
        id: 55,
        word: 'comments',
        translation: 'комментарии',
        image: 'http://localhost:3000/img/comments.jpg',
        audioSrc: 'http://localhost:3000/audio/comments.mp3',
      },
      {
        id: 56,
        word: 'implimentation',
        translation: 'реализация',
        image: 'http://localhost:3000/img/implimentation.jpg',
        audioSrc: 'http://localhost:3000/audio/implimentation.mp3',
      },
    ],
  },
  {
    id: 8,
    name: 'Beach',
    cards: [
      {
        id: 57,
        word: 'shark',
        translation: 'акула',
        image: 'http://localhost:3000/img/shark.jpg',
        audioSrc: 'http://localhost:3000/audio/shark.mp3',
      },
      {
        id: 58,
        word: 'catamaran',
        translation: 'катамаран',
        image: 'http://localhost:3000/img/catamaran.jpg',
        audioSrc: 'http://localhost:3000/audio/catamaran.mp3',
      },
      {
        id: 59,
        word: 'crab',
        translation: 'краб',
        image: 'http://localhost:3000/img/crab.jpg',
        audioSrc: 'http://localhost:3000/audio/crab.mp3',
      },
      {
        id: 60,
        word: 'palm',
        translation: 'пальма',
        image: 'http://localhost:3000/img/palm.jpg',
        audioSrc: 'http://localhost:3000/audio/palm.mp3',
      },
      {
        id: 61,
        word: 'wave',
        translation: 'волна',
        image: 'http://localhost:3000/img/wave.jpg',
        audioSrc: 'http://localhost:3000/audio/wave.mp3',
      },
      {
        id: 62,
        word: 'gull',
        translation: 'чайка',
        image: 'http://localhost:3000/img/gull.jpg',
        audioSrc: 'http://localhost:3000/audio/gull.mp3',
      },
      {
        id: 63,
        word: 'lifeguard',
        translation: 'спасатель',
        image: 'http://localhost:3000/img/lifeguard.jpg',
        audioSrc: 'http://localhost:3000/audio/lifeguard.mp3',
      },
      {
        id: 64,
        word: 'sand',
        translation: 'песок',
        image: 'http://localhost:3000/img/sand.jpg',
        audioSrc: 'http://localhost:3000/audio/sand.mp3',
      },
    ],
  },
];

export function getCategories(): Promise<Category[]> {
  return Promise.resolve<Category[]>(categories);
}

export function getCategoryById(
  categoryId: number,
): Promise<Category | undefined> {
  return Promise.resolve(
    categories.find(category => category.id === categoryId),
  );
}

export function createCategory(newCategory: Category): Promise<Category> {
  const isExist =
    typeof categories.find(
      category =>
        newCategory.name.toLowerCase() === category.name.toLowerCase(),
    ) !== 'undefined';
  if (isExist) {
    return Promise.reject(
      new Error(`Category with name ${newCategory.name} is already exists`),
    );
  }

  const id = categories.length + 1;
  const model = { ...newCategory, id };
  categories.push(model);

  return Promise.resolve(model);
}

export function deleteCategory(id: number): Promise<void> {
  const index = categories.findIndex(category => category.id === id);
  if (index < 0) {
    Promise.reject(new Error('Category not found'));
  }
  categories.splice(index, 1);
  return Promise.resolve();
}

export function updateCategory(freshCategory: Category): Promise<Category> {
  const index = categories.findIndex(
    category => category.id === freshCategory.id,
  );
  if (index < 0) {
    Promise.reject(new Error('Category not found'));
  }
  categories[index] = freshCategory;
  return Promise.resolve(categories[index]);
}
