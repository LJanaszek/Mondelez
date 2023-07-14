export interface ImagesBase {
    id: string,
    text: string,
    correct: string,
    imgSrc?: string,
  };
  
  
  export const IMAGES: ImagesBase[] = [
      {
          id:'1',
          text:'jakiś tekst alternatywny',
          correct:'1',
          imgSrc:'http://placekitten.com/400/300'
      },{
        id:'2',
        text:'alt',
        correct: '2',
        imgSrc:'http://placekitten.com/400/300'
      },{
        id:'3',
        text:'alt',
        correct: '3',
        imgSrc:'http://placekitten.com/401/300'
      }
    
    ]