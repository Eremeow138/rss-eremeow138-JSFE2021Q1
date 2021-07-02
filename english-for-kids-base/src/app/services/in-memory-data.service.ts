import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService {
  private readonly categories = [
    {
      id: 1,
      name: 'Action (set A)',
      cards: [
        {
          word: 'cry',
          translation: 'плакать',
          image: 'assets/img/cry.jpg',
          audioSrc: 'assets/audio/cry.mp3',
        },
        {
          word: 'dance',
          translation: 'танцевать',
          image: 'assets/img/dance.jpg',
          audioSrc: 'assets/audio/dance.mp3',
        },
        {
          word: 'dive',
          translation: 'нырять',
          image: 'assets/img/dive.jpg',
          audioSrc: 'assets/audio/dive.mp3',
        },
        {
          word: 'draw',
          translation: 'рисовать',
          image: 'assets/img/draw.jpg',
          audioSrc: 'assets/audio/draw.mp3',
        },
        {
          word: 'fish',
          translation: 'ловить рыбу',
          image: 'assets/img/fish.jpg',
          audioSrc: 'assets/audio/fish.mp3',
        },
        {
          word: 'fly',
          translation: 'летать',
          image: 'assets/img/fly.jpg',
          audioSrc: 'assets/audio/fly.mp3',
        },
        {
          word: 'hug',
          translation: 'обнимать',
          image: 'assets/img/hug.jpg',
          audioSrc: 'assets/audio/hug.mp3',
        },
        {
          word: 'jump',
          translation: 'прыгать',
          image: 'assets/img/jump.jpg',
          audioSrc: 'assets/audio/jump.mp3',
        },
      ],
    },
    {
      id: 2,
      name: 'Action (set B)',
      cards: [
        {
          word: 'open',
          translation: 'открывать',
          image: 'assets/img/open.jpg',
          audioSrc: 'assets/audio/open.mp3',
        },
        {
          word: 'play',
          translation: 'играть',
          image: 'assets/img/play.jpg',
          audioSrc: 'assets/audio/play.mp3',
        },
        {
          word: 'point',
          translation: 'указывать',
          image: 'assets/img/point.jpg',
          audioSrc: 'assets/audio/point.mp3',
        },
        {
          word: 'ride',
          translation: 'ездить',
          image: 'assets/img/ride.jpg',
          audioSrc: 'assets/audio/ride.mp3',
        },
        {
          word: 'run',
          translation: 'бегать',
          image: 'assets/img/run.jpg',
          audioSrc: 'assets/audio/run.mp3',
        },
        {
          word: 'sing',
          translation: 'петь',
          image: 'assets/img/sing.jpg',
          audioSrc: 'assets/audio/sing.mp3',
        },
        {
          word: 'skip',
          translation: 'пропускать, прыгать',
          image: 'assets/img/skip.jpg',
          audioSrc: 'assets/audio/skip.mp3',
        },
        {
          word: 'swim',
          translation: 'плавать',
          image: 'assets/img/swim.jpg',
          audioSrc: 'assets/audio/swim.mp3',
        },
      ],
    },
    {
      id: 3,
      name: 'Animal (set A)',
      cards: [
        {
          word: 'cat',
          translation: 'кот',
          image: 'assets/img/cat.jpg',
          audioSrc: 'assets/audio/cat.mp3',
        },
        {
          word: 'chick',
          translation: 'цыплёнок',
          image: 'assets/img/chick.jpg',
          audioSrc: 'assets/audio/chick.mp3',
        },
        {
          word: 'chicken',
          translation: 'курица',
          image: 'assets/img/chicken.jpg',
          audioSrc: 'assets/audio/chicken.mp3',
        },
        {
          word: 'dog',
          translation: 'собака',
          image: 'assets/img/dog.jpg',
          audioSrc: 'assets/audio/dog.mp3',
        },
        {
          word: 'horse',
          translation: 'лошадь',
          image: 'assets/img/horse.jpg',
          audioSrc: 'assets/audio/horse.mp3',
        },
        {
          word: 'pig',
          translation: 'свинья',
          image: 'assets/img/pig.jpg',
          audioSrc: 'assets/audio/pig.mp3',
        },
        {
          word: 'rabbit',
          translation: 'кролик',
          image: 'assets/img/rabbit.jpg',
          audioSrc: 'assets/audio/rabbit.mp3',
        },
        {
          word: 'sheep',
          translation: 'овца',
          image: 'assets/img/sheep.jpg',
          audioSrc: 'assets/audio/sheep.mp3',
        },
      ],
    },
    {
      id: 4,
      name: 'Animal (set B)',
      cards: [
        {
          word: 'bird',
          translation: 'птица',
          image: 'assets/img/bird.jpg',
          audioSrc: 'assets/audio/bird.mp3',
        },
        {
          word: 'fish',
          translation: 'рыба',
          image: 'assets/img/fish1.jpg',
          audioSrc: 'assets/audio/fish.mp3',
        },
        {
          word: 'frog',
          translation: 'жаба',
          image: 'assets/img/frog.jpg',
          audioSrc: 'assets/audio/frog.mp3',
        },
        {
          word: 'giraffe',
          translation: 'жирафа',
          image: 'assets/img/giraffe.jpg',
          audioSrc: 'assets/audio/giraffe.mp3',
        },
        {
          word: 'lion',
          translation: 'лев',
          image: 'assets/img/lion.jpg',
          audioSrc: 'assets/audio/lion.mp3',
        },
        {
          word: 'mouse',
          translation: 'мышь',
          image: 'assets/img/mouse.jpg',
          audioSrc: 'assets/audio/mouse.mp3',
        },
        {
          word: 'turtle',
          translation: 'черепаха',
          image: 'assets/img/turtle.jpg',
          audioSrc: 'assets/audio/turtle.mp3',
        },
        {
          word: 'dolphin',
          translation: 'дельфин',
          image: 'assets/img/dolphin.jpg',
          audioSrc: 'assets/audio/dolphin.mp3',
        },
      ],
    },
    {
      id: 5,
      name: 'Clothes',
      cards: [
        {
          word: 'skirt',
          translation: 'юбка',
          image: 'assets/img/skirt.jpg',
          audioSrc: 'assets/audio/skirt.mp3',
        },
        {
          word: 'pants',
          translation: 'брюки',
          image: 'assets/img/pants.jpg',
          audioSrc: 'assets/audio/pants.mp3',
        },
        {
          word: 'blouse',
          translation: 'блузка',
          image: 'assets/img/blouse.jpg',
          audioSrc: 'assets/audio/blouse.mp3',
        },
        {
          word: 'dress',
          translation: 'платье',
          image: 'assets/img/dress.jpg',
          audioSrc: 'assets/audio/dress.mp3',
        },
        {
          word: 'boot',
          translation: 'ботинок',
          image: 'assets/img/boot.jpg',
          audioSrc: 'assets/audio/boot.mp3',
        },
        {
          word: 'shirt',
          translation: 'рубашка',
          image: 'assets/img/shirt.jpg',
          audioSrc: 'assets/audio/shirt.mp3',
        },
        {
          word: 'coat',
          translation: 'пальто',
          image: 'assets/img/coat.jpg',
          audioSrc: 'assets/audio/coat.mp3',
        },
        {
          word: 'shoe',
          translation: 'туфли',
          image: 'assets/img/shoe.jpg',
          audioSrc: 'assets/audio/shoe.mp3',
        },
      ],
    },
    {
      id: 6,
      name: 'Emotions',
      cards: [
        {
          word: 'sad',
          translation: 'грустный',
          image: 'assets/img/sad.jpg',
          audioSrc: 'assets/audio/sad.mp3',
        },
        {
          word: 'angry',
          translation: 'сердитый',
          image: 'assets/img/angry.jpg',
          audioSrc: 'assets/audio/angry.mp3',
        },
        {
          word: 'happy',
          translation: 'счастливый',
          image: 'assets/img/happy.jpg',
          audioSrc: 'assets/audio/happy.mp3',
        },
        {
          word: 'tired',
          translation: 'уставший',
          image: 'assets/img/tired.jpg',
          audioSrc: 'assets/audio/tired.mp3',
        },
        {
          word: 'surprised',
          translation: 'удивлённый',
          image: 'assets/img/surprised.jpg',
          audioSrc: 'assets/audio/surprised.mp3',
        },
        {
          word: 'scared',
          translation: 'испуганный',
          image: 'assets/img/scared.jpg',
          audioSrc: 'assets/audio/scared.mp3',
        },
        {
          word: 'smile',
          translation: 'улыбка',
          image: 'assets/img/smile.jpg',
          audioSrc: 'assets/audio/smile.mp3',
        },
        {
          word: 'laugh',
          translation: 'смех',
          image: 'assets/img/laugh.jpg',
          audioSrc: 'assets/audio/laugh.mp3',
        },
      ],
    },
    {
      id: 7,
      name: 'IT terms',
      cards: [
        {
          word: 'developer',
          translation: 'разработчик',
          image: 'assets/img/developer.jpg',
          audioSrc: 'assets/audio/developer.mp3',
        },
        {
          word: 'deadline',
          translation: 'срок',
          image: 'assets/img/deadline.jpg',
          audioSrc: 'assets/audio/deadline.mp3',
        },
        {
          word: 'fix',
          translation: 'исправить',
          image: 'assets/img/fix.jpg',
          audioSrc: 'assets/audio/fix.mp3',
        },
        {
          word: 'user experience',
          translation: 'пользовательский опыт',
          image: 'assets/img/user-experience.jpg',
          audioSrc: 'assets/audio/user-experience.mp3',
        },
        {
          word: 'digital',
          translation: 'цифровой',
          image: 'assets/img/digital.jpg',
          audioSrc: 'assets/audio/digital.mp3',
        },
        {
          word: 'cookies',
          translation: 'печенье',
          image: 'assets/img/cookies.jpg',
          audioSrc: 'assets/audio/cookies.mp3',
        },
        {
          word: 'comments',
          translation: 'комментарии',
          image: 'assets/img/comments.jpg',
          audioSrc: 'assets/audio/comments.mp3',
        },
        {
          word: 'implimentation',
          translation: 'реализация',
          image: 'assets/img/implimentation.jpg',
          audioSrc: 'assets/audio/implimentation.mp3',
        },
      ],
    },
    {
      id: 8,
      name: 'Beach',
      cards: [
        {
          word: 'shark',
          translation: 'акула',
          image: 'assets/img/shark.jpg',
          audioSrc: 'assets/audio/shark.mp3',
        },
        {
          word: 'catamaran',
          translation: 'катамаран',
          image: 'assets/img/catamaran.jpg',
          audioSrc: 'assets/audio/catamaran.mp3',
        },
        {
          word: 'crab',
          translation: 'краб',
          image: 'assets/img/crab.jpg',
          audioSrc: 'assets/audio/crab.mp3',
        },
        {
          word: 'palm',
          translation: 'пальма',
          image: 'assets/img/palm.jpg',
          audioSrc: 'assets/audio/palm.mp3',
        },
        {
          word: 'wave',
          translation: 'волна',
          image: 'assets/img/wave.jpg',
          audioSrc: 'assets/audio/wave.mp3',
        },
        {
          word: 'gull',
          translation: 'чайка',
          image: 'assets/img/gull.jpg',
          audioSrc: 'assets/audio/gull.mp3',
        },
        {
          word: 'lifeguard',
          translation: 'спасатель',
          image: 'assets/img/lifeguard.jpg',
          audioSrc: 'assets/audio/lifeguard.mp3',
        },
        {
          word: 'sand',
          translation: 'песок',
          image: 'assets/img/sand.jpg',
          audioSrc: 'assets/audio/sand.mp3',
        },
      ],
    },
  ];

  createDb() {
    const { categories } = this;
    return { categories };
  }
}
