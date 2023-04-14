const orderHistory = [
  {
    orderDate: 'August 4, 2020',
    totalOrder: '$' + (34.0).toFixed(2),
    orderRecipient: 'JS Masher',
    orderNumber: 114 - 3941689 - 8772232,
    orderDetailsUrl: 'details url',
    invoiceUrl: 'invoice url',
    orderedItems: [
      {
        orderImage: 'image url',
        title: 'JavaScript for impatient programmers',
        authors: ['Rauschmayer, Dr. Axel'],
        returnNote: 'Return window closed on ' + 'Sep 7, 2020',
        deliveryDate: 'Delivered ' + 'Aug 8, 2020',
        deliveryNote:
          'Your package was delivered. It was handed directly to resident',
        price: 31.55,
        displayedPrice: '$' + (31.55).toFixed(2),
        buyAgainUrl: 'buyagain url',
        viewUrl: 'viewitem url',
        reviewUrl: 'review url',
        supportUrl: 'support url',
      },
    ],
  },
  {
    orderDate: 'July 19, 2020',
    totalOrder: '$' + (44.53).toFixed(2),
    orderRecipient: 'JS Masher',
    orderNumber: 113 - 9984268 - 1280257,
    orderDetailsUrl: 'details url',
    invoiceUrl: 'invoice url',
    orderedItems: [
      {
        orderImage: 'image url',
        title: 'The Timeless Way of Building',
        authors: ['Alexander, Christopher'],
        returnNote: 'Return window closed on ' + 'Aug 19, 2020',
        deliveryDate: 'Delivered ' + 'Jul 20, 2020',
        deliveryNote:
          'Your package was delivered. It was handed directly to resident',
        price: 41.33,
        displayedPrice: '$' + (41.33).toFixed(2),
        buyAgainUrl: 'buyagain url',
        viewUrl: 'viewitem url',
        reviewUrl: 'review url',
        supportUrl: 'support url',
      },
    ],
  },
  {
    orderDate: 'Jul 4, 2020',
    totalOrder: '$' + (17.22).toFixed(2),
    orderRecipient: 'JS Masher',
    orderNumber: 114 - 28755557 - 9059409,
    orderDetailsUrl: 'details url',
    invoiceUrl: 'invoice url',
    orderedItems: [
      {
        orderImage: 'image url',
        title:
          'Gamecube Controller Adapter, Super Smash Bros Switch Gamecube Adapter for WII U, PC Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
        authors: [],
        returnNote: 'Return window closed on ' + 'Aug 5, 2020',
        deliveryDate: 'Delivered ' + 'Aug 8, 2020',
        deliveryNote:
          'Your package was delivered. It was handed directly to resident',
        price: 15.98,
        displayedPrice: '$' + (15.98).toFixed(2),
        buyAgainUrl: 'buyagain url',
        viewUrl: 'viewitem url',
        reviewUrl: 'review url',
        supportUrl: 'support url',
      },
    ],
  },
  {
    orderDate: 'Jul 3, 2020',
    totalOrder: '$' + (138.93).toFixed(2),
    orderRecipient: 'JS Masher',
    orderNumber: 113 - 2883177 - 2648248,
    orderDetailsUrl: 'details url',
    invoiceUrl: 'invoice url',
    orderedItems: [
      {
        orderImage: 'image url',
        title:
          'Gamecube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        authors: [],
        returnNote: 'Return window closed on ' + 'Aug 4, 2020',
        deliveryDate: 'Delivered ' + 'Jul 5, 2020',
        deliveryNote:
          'Your package was delivered. It was handed directly to resident',
        price: 94.95,
        displayedPrice: '$' + (94.95).toFixed(2),
        buyAgainUrl: 'buyagain url',
        viewUrl: 'viewitem url',
        reviewUrl: 'review url',
        supportUrl: 'support url',
      },
      {
        orderImage: 'image url',
        title: 'The Art of Sql',
        authors: ['Faroult, Stephanie'],
        returnNote: 'Return window closed on ' + 'Aug 4, 2020',
        deliveryDate: 'Delivered ' + 'Jul 5, 2020',
        deliveryNote:
          'Your package was delivered. It was handed directly to resident',
        price: 33.99,
        displayedPrice: '$' + (33.99).toFixed(2),
        buyAgainUrl: 'buyagain url',
        viewUrl: 'viewitem url',
        reviewUrl: 'review url',
        supportUrl: 'support url',
      },
    ],
  },
];

console.log('-------- order history ---------');
console.log('title of latest order: ', orderHistory[0].orderedItems[0].title);
const oldest = orderHistory.length - 1;
console.log(
  'title of first item in oldest order: ',
  orderHistory[oldest].orderedItems[0].title
);
console.log(
  'price of second item in oldest order: ',
  orderHistory[oldest].orderedItems[1].displayedPrice
);
