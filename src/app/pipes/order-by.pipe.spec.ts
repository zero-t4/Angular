import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  const expectedReturn = [
    {
      id: 0,
      title: 'First Title',
      creationDate: new Date('2018-06-14'),
      duration: 60,
      description: 'some description',
    },
    {
      id: 1,
      title: 'Second Title',
      creationDate: new Date('2018-06-11'),
      duration: 20,
      description: 'Cool description',
    },
    {
      id: 2,
      title: 'Third Title',
      creationDate: new Date('2018-06-01'),
      duration: 44,
      description: 'Awesome description',
    },
  ];

  it('create an instance', () => {
    const pipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });

  it('test OrderByPipe should return formatted array 1 ', () => {
    const pipe = new OrderByPipe();
    expect(pipe.transform([
      {
        id: 0,
        title: 'First Title',
        creationDate: new Date('2018-06-14'),
        duration: 60,
        description: 'some description',
      },
      // moved upper in order to see - how orderBy pipe works
      {
        id: 2,
        title: 'Third Title',
        creationDate: new Date('2018-06-01'),
        duration: 44,
        description: 'Awesome description',
      },
      {
        id: 1,
        title: 'Second Title',
        creationDate: new Date('2018-06-11'),
        duration: 20,
        description: 'Cool description',
      },
    ])).toEqual(expectedReturn);
  });

  it('test OrderByPipe should return formatted array 2 ', () => {
    const pipe = new OrderByPipe();
    expect(pipe.transform([
      {
        id: 1,
        title: 'Second Title',
        creationDate: new Date('2018-06-11'),
        duration: 20,
        description: 'Cool description',
      },
      {
        id: 2,
        title: 'Third Title',
        creationDate: new Date('2018-06-01'),
        duration: 44,
        description: 'Awesome description',
      },
      {
        id: 0,
        title: 'First Title',
        creationDate: new Date('2018-06-14'),
        duration: 60,
        description: 'some description',
      },
    ])).toEqual(expectedReturn);
  });

});
