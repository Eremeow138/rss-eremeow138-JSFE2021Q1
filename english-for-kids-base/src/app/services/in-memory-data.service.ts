import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService {
  private readonly categories = [
    {
      id: 1,
      name: 'Action (set A)',
      words: [
        {
          word: 'cry',
          translation: 'плакать',
          image: 'assets/img/cry.jpg',
          audioSrc: 'audio/cry.mp3',
        },
        {
          word: 'dance',
          translation: 'танцевать',
          image: 'assets/img/dance.jpg',
          audioSrc: 'audio/dance.mp3',
        },
        {
          word: 'dive',
          translation: 'нырять',
          image: 'assets/img/dive.jpg',
          audioSrc: 'audio/dive.mp3',
        },
        {
          word: 'draw',
          translation: 'рисовать',
          image: 'assets/img/draw.jpg',
          audioSrc: 'audio/draw.mp3',
        },
        {
          word: 'fish',
          translation: 'ловить рыбу',
          image: 'assets/img/fish.jpg',
          audioSrc: 'audio/fish.mp3',
        },
        {
          word: 'fly',
          translation: 'летать',
          image: 'assets/img/fly.jpg',
          audioSrc: 'audio/fly.mp3',
        },
        {
          word: 'hug',
          translation: 'обнимать',
          image: 'assets/img/hug.jpg',
          audioSrc: 'audio/hug.mp3',
        },
        {
          word: 'jump',
          translation: 'прыгать',
          image: 'assets/img/jump.jpg',
          audioSrc: 'audio/jump.mp3',
        },
      ],
    },
    {
      id: 2,
      name: 'Action (set B)',
      words: [
        {
          word: 'open',
          translation: 'открывать',
          image: 'assets/img/open.jpg',
          audioSrc: 'audio/open.mp3',
        },
        {
          word: 'play',
          translation: 'играть',
          image: 'assets/img/play.jpg',
          audioSrc: 'audio/play.mp3',
        },
        {
          word: 'point',
          translation: 'указывать',
          image: 'assets/img/point.jpg',
          audioSrc: 'audio/point.mp3',
        },
        {
          word: 'ride',
          translation: 'ездить',
          image: 'assets/img/ride.jpg',
          audioSrc: 'audio/ride.mp3',
        },
        {
          word: 'run',
          translation: 'бегать',
          image: 'assets/img/run.jpg',
          audioSrc: 'audio/run.mp3',
        },
        {
          word: 'sing',
          translation: 'петь',
          image: 'assets/img/sing.jpg',
          audioSrc: 'audio/sing.mp3',
        },
        {
          word: 'skip',
          translation: 'пропускать, прыгать',
          image: 'assets/img/skip.jpg',
          audioSrc: 'audio/skip.mp3',
        },
        {
          word: 'swim',
          translation: 'плавать',
          image: 'assets/img/swim.jpg',
          audioSrc: 'audio/swim.mp3',
        },
      ],
    },
    {
      id: 3,
      name: 'Animal (set A)',
      words: [
        {
          word: 'cat',
          translation: 'кот',
          image: 'assets/img/cat.jpg',
          audioSrc: 'audio/cat.mp3',
        },
        {
          word: 'chick',
          translation: 'цыплёнок',
          image: 'assets/img/chick.jpg',
          audioSrc: 'audio/chick.mp3',
        },
        {
          word: 'chicken',
          translation: 'курица',
          image: 'assets/img/chicken.jpg',
          audioSrc: 'audio/chicken.mp3',
        },
        {
          word: 'dog',
          translation: 'собака',
          image: 'assets/img/dog.jpg',
          audioSrc: 'audio/dog.mp3',
        },
        {
          word: 'horse',
          translation: 'лошадь',
          image: 'assets/img/horse.jpg',
          audioSrc: 'audio/horse.mp3',
        },
        {
          word: 'pig',
          translation: 'свинья',
          image: 'assets/img/pig.jpg',
          audioSrc: 'audio/pig.mp3',
        },
        {
          word: 'rabbit',
          translation: 'кролик',
          image: 'assets/img/rabbit.jpg',
          audioSrc: 'audio/rabbit.mp3',
        },
        {
          word: 'sheep',
          translation: 'овца',
          image: 'assets/img/sheep.jpg',
          audioSrc: 'audio/sheep.mp3',
        },
      ],
    },
    {
      id: 4,
      name: 'Animal (set B)',
      words: [
        {
          word: 'bird',
          translation: 'птица',
          image: 'assets/img/bird.jpg',
          audioSrc: 'audio/bird.mp3',
        },
        {
          word: 'fish',
          translation: 'рыба',
          image: 'assets/img/fish1.jpg',
          audioSrc: 'audio/fish.mp3',
        },
        {
          word: 'frog',
          translation: 'жаба',
          image: 'assets/img/frog.jpg',
          audioSrc: 'audio/frog.mp3',
        },
        {
          word: 'giraffe',
          translation: 'жирафа',
          image: 'assets/img/giraffe.jpg',
          audioSrc: 'audio/giraffe.mp3',
        },
        {
          word: 'lion',
          translation: 'лев',
          image: 'assets/img/lion.jpg',
          audioSrc: 'audio/lion.mp3',
        },
        {
          word: 'mouse',
          translation: 'мышь',
          image: 'assets/img/mouse.jpg',
          audioSrc: 'audio/mouse.mp3',
        },
        {
          word: 'turtle',
          translation: 'черепаха',
          image: 'assets/img/turtle.jpg',
          audioSrc: 'audio/turtle.mp3',
        },
        {
          word: 'dolphin',
          translation: 'дельфин',
          image: 'assets/img/dolphin.jpg',
          audioSrc: 'audio/dolphin.mp3',
        },
      ],
    },
    {
      id: 5,
      name: 'Clothes',
      words: [
        {
          word: 'skirt',
          translation: 'юбка',
          image: 'assets/img/skirt.jpg',
          audioSrc: 'audio/skirt.mp3',
        },
        {
          word: 'pants',
          translation: 'брюки',
          image: 'assets/img/pants.jpg',
          audioSrc: 'audio/pants.mp3',
        },
        {
          word: 'blouse',
          translation: 'блузка',
          image: 'assets/img/blouse.jpg',
          audioSrc: 'audio/blouse.mp3',
        },
        {
          word: 'dress',
          translation: 'платье',
          image: 'assets/img/dress.jpg',
          audioSrc: 'audio/dress.mp3',
        },
        {
          word: 'boot',
          translation: 'ботинок',
          image: 'assets/img/boot.jpg',
          audioSrc: 'audio/boot.mp3',
        },
        {
          word: 'shirt',
          translation: 'рубашка',
          image: 'assets/img/shirt.jpg',
          audioSrc: 'audio/shirt.mp3',
        },
        {
          word: 'coat',
          translation: 'пальто',
          image: 'assets/img/coat.jpg',
          audioSrc: 'audio/coat.mp3',
        },
        {
          word: 'shoe',
          translation: 'туфли',
          image: 'assets/img/shoe.jpg',
          audioSrc: 'audio/shoe.mp3',
        },
      ],
    },
    {
      id: 6,
      name: 'Emotions',
      words: [
        {
          word: 'sad',
          translation: 'грустный',
          image: 'assets/img/sad.jpg',
          audioSrc: 'audio/sad.mp3',
        },
        {
          word: 'angry',
          translation: 'сердитый',
          image: 'assets/img/angry.jpg',
          audioSrc: 'audio/angry.mp3',
        },
        {
          word: 'happy',
          translation: 'счастливый',
          image: 'assets/img/happy.jpg',
          audioSrc: 'audio/happy.mp3',
        },
        {
          word: 'tired',
          translation: 'уставший',
          image: 'assets/img/tired.jpg',
          audioSrc: 'audio/tired.mp3',
        },
        {
          word: 'surprised',
          translation: 'удивлённый',
          image: 'assets/img/surprised.jpg',
          audioSrc: 'audio/surprised.mp3',
        },
        {
          word: 'scared',
          translation: 'испуганный',
          image: 'assets/img/scared.jpg',
          audioSrc: 'audio/scared.mp3',
        },
        {
          word: 'smile',
          translation: 'улыбка',
          image: 'assets/img/smile.jpg',
          audioSrc: 'audio/smile.mp3',
        },
        {
          word: 'laugh',
          translation: 'смех',
          image: 'assets/img/laugh.jpg',
          audioSrc: 'audio/laugh.mp3',
        },
      ],
    },
  ];

  createDb() {
    const { categories } = this;
    return { categories };
  }
}
