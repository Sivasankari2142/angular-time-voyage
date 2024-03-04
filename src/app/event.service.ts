import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  eventsList = [
    {
      Id: 1,
      Name: 'Stone Age',
      Description:
        'The Stone Age was the prehistoric cultural stage, or level of human development, that was characterized by the creation and use of stone tools. The Stone Age is divided into three separate periods, namely the Paleolithic (Old Stone Age), Mesolithic (Middle Stone Age), and Neolithic (New Stone Age).',
      ImageURL: '../assets/images/stone-age.jpg',
      ThumbnailImgUrl: '../assets/images/stone-age-1.jpg',
      VideoURL: 'https://www.youtube.com/watch?v=0u8bDJD5x1g',
    },
    {
      Id: 2,
      Name: 'Bronze Age',
      Description:
        'The Bronze Age was the time from around 2,000BC to 700BC when people used bronze. In the Stone Age, flint was shaped and used as tools and weapons, but in the Bronze Age, stone was gradually replaced by bronze. Bronze was made by melting tin and copper, and mixing them together.',
      ImageURL: '../assets/images/bronze-age.png',
      ThumbnailImgUrl: '../assets/images/bronze-age.png',
      VideoURL: 'https://www.youtube.com/watch?v=jLsWmAR0m_E',
    },
    {
      Id: 3,
      Name: 'Iron Age',
      Description:
        'The Iron Age lasted from around 1200 to 500 B.C.E. and followed the Bronze Age. The Iron Age was marked by the widespread use of iron and steel, but the exact dates of the age varied throughout the world depending on local factors and trade over long distances.',
      ImageURL: '../assets/images/iron-age.jpg',
      ThumbnailImgUrl: '../assets/images/iron-age.jpg',
      VideoURL: 'https://www.youtube.com/watch?v=KrHnsbTTO0Y',
    },
    {
      Id: 4,
      Name: 'Classical Age',
      Description:
        'Classical age is a generic term used to indicate the period in European history characterized by the flourishing of the Greek and Roman civilizations in the Mediterranean basin. It began with the rise of the Greek city-states and is traditionally considered to end with the fall of the Western Roman Empire.',
      ImageURL: '../assets/images/classical-age.webp',
      ThumbnailImgUrl: '../assets/images/classical-age.webp',
      VideoURL: 'https://www.youtube.com/watch?v=jc1DnmuC3Y8',
    },
    {
      Id: 5,
      Name: 'Medieval Age',
      Description:
        'Middle Ages, the period in European history from the collapse of Roman civilization in the 5th century ce to the period of the Renaissance (variously interpreted as beginning in the 13th, 14th, or 15th century, depending on the region of Europe and other factors). A brief treatment of the Middle Ages follows.',
      ImageURL: '../assets/images/medieval-age.jpg',
      ThumbnailImgUrl: '../assets/images/medieval-age.jpg',
      VideoURL: 'https://www.youtube.com/watch?v=6EAMqKUimr8',
    },
    {
      Id: 6,
      Name: 'Modern Age',
      Description:
        'The Modern Age, or modernity, is the postmedieval era, a wide span of time marked in part by technological innovations, urbanization, scientific discoveries, and globalization. The Modern Age is generally split into two parts: the early and the late modern periods.',
      ImageURL: '../assets/images/modern-age.jpg',
      ThumbnailImgUrl: '../assets/images/modern-age.jpg',
      VideoURL: 'https://www.youtube.com/watch?v=0u8bDJD5x1g',
    },
  ];
  constructor() {}

  getEventsList(): any {
    return this.eventsList;
  }
}
