import { Injectable } from '@angular/core';
import { Ingresso } from './ingresso.service';

export const INGRESSOS: Ingresso[] = [
  {
    id: "1",
    horario: "12h",
    dia: "12/02",
    preco: "5",
    imagem: "../../assets/imagem-ticket.jpg",
    comentario: [
      {
        rating: 5,
        comment: 'Imagine all the eatables, living in conFusion!',
        author: 'John Lemon',
        date: '2012-10-16T17:57:28.556094Z'
    },
    {
        rating: 4,
        comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
        author: 'Paul McVites',
        date: '2014-09-05T17:57:28.556094Z'
    },
    {
        rating: 3,
        comment: 'Eat it, just eat it!',
        author: 'Michael Jaikishan',
        date: '2015-02-13T17:57:28.556094Z'
    },
    {
        rating: 4,
        comment: 'Ultimate, Reaching for the stars!',
        author: 'Ringo Starry',
        date: '2013-12-02T17:57:28.556094Z'
    },
    {
        rating: 2,
        comment: 'It\'s your birthday, we\'re gonna party!',
        author: '25 Cent',
        date: '2011-12-02T17:57:28.556094Z'
    }
    ]
  },
  {
    id: "2",
    horario: "12h:10",
    dia: "10/02",
    preco: "5",
    imagem: "../../assets/imagem-ticket.jpg",
    comentario: [
      {
        rating: 20,
        comment: 'Imagine all the eatables, living in conFusion!',
        author: 'John Lemon',
        date: '2012-10-16T17:57:28.556094Z'
    },
    {
        rating: 4,
        comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
        author: 'Paul McVites',
        date: '2014-09-05T17:57:28.556094Z'
    },
    {
        rating: 3,
        comment: 'Eat it, just eat it!',
        author: 'Michael Jaikishan',
        date: '2015-02-13T17:57:28.556094Z'
    },
    {
        rating: 4,
        comment: 'Ultimate, Reaching for the stars!',
        author: 'Ringo Starry',
        date: '2013-12-02T17:57:28.556094Z'
    },
    {
        rating: 2,
        comment: 'It\'s your birthday, we\'re gonna party!',
        author: '25 Cent',
        date: '2011-12-02T17:57:28.556094Z'
    }
    ]
  },
  {
    id: "3",
    horario: "12:20",
    dia: "11/02",
    preco: "5",
    imagem: "../../assets/imagem-ticket.jpg",
    comentario: [
      {
        rating: 5,
        comment: 'Imagine all the eatables, living in conFusion!',
        author: 'John Lemon',
        date: '2012-10-16T17:57:28.556094Z'
    },
    {
        rating: 4,
        comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
        author: 'Paul McVites',
        date: '2014-09-05T17:57:28.556094Z'
    },
    {
        rating: 3,
        comment: 'Eat it, just eat it!',
        author: 'Michael Jaikishan',
        date: '2015-02-13T17:57:28.556094Z'
    },
    {
        rating: 4,
        comment: 'Ultimate, Reaching for the stars!',
        author: 'Ringo Starry',
        date: '2013-12-02T17:57:28.556094Z'
    },
    {
        rating: 2,
        comment: 'It\'s your birthday, we\'re gonna party!',
        author: '25 Cent',
        date: '2011-12-02T17:57:28.556094Z'
    }
    ]
  },
  {
    id: "4",
    horario: "12:30",
    dia: "10/02",
    preco: "5",
    imagem: "../../assets/imagem-ticket.jpg",
    comentario: [
      {
        rating: 5,
        comment: 'Imagine all the eatables, living in conFusion!',
        author: 'John Lemon',
        date: '2012-10-16T17:57:28.556094Z'
    },
    {
        rating: 4,
        comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
        author: 'Paul McVites',
        date: '2014-09-05T17:57:28.556094Z'
    },
    {
        rating: 3,
        comment: 'Eat it, just eat it!',
        author: 'Michael Jaikishan',
        date: '2015-02-13T17:57:28.556094Z'
    },
    {
        rating: 4,
        comment: 'Ultimate, Reaching for the stars!',
        author: 'Ringo Starry',
        date: '2013-12-02T17:57:28.556094Z'
    },
    {
        rating: 2,
        comment: 'It\'s your birthday, we\'re gonna party!',
        author: '25 Cent',
        date: '2011-12-02T17:57:28.556094Z'
    }
    ]
  }
]

@Injectable({
  providedIn: 'root'
})
export class IngressosService {

  constructor() { }
}
