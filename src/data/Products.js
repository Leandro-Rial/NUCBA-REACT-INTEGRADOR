export const products = [
    {
        id: 1,
        title: 'iPhone 11',
        img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/116/601/products/11-white1-0cf2573483ec6e523f16406320688333-640-0.png',
        desc: 'iPhone 11 64GB White',
        price: 1200,
        category: 'iPhone',
    },
    {
        id: 2,
        title: 'iPhone 12',
        img: 'https://pngimg.com/uploads/iphone_12/iphone_12_PNG19.png',
        desc: 'iPhone 12 64GB White',
        price: 1300,
        category: 'iPhone',
    },
    {
        id: 3,
        title: 'iPhone X',
        img: 'https://e7.pngegg.com/pngimages/840/382/png-clipart-apple-iphone-8-plus-iphone-se-ios-apple-iphone-x-64gb-silver-cosmetics-album-gadget-mobile-phone-case.png',
        desc: 'iPhone X 64GB White',
        price: 1000,
        category: 'iPhone',
    },
    {
        id: 4,
        title: 'iPhone 13',
        img: 'https://flyclipart.com/thumbs/iphone-13-pro-max-graphite-1686914.png',
        desc: 'iPhone 13 64GB White',
        price: 1500,
        category: 'iPhone',
    },
    {
        id: 5,
        title: 'Samsung s21',
        img: 'https://505technology.com/wp-content/uploads/2021/02/s21-image.png',
        desc: 'Samsung s21 128GB',
        price: 1100,
        category: 'Samsung',
    },
    {
        id: 6,
        title: 'Samsung s22',
        img: 'https://images.samsung.com/is/image/samsung/p6pim/es/2202/gallery/es-galaxy-s22-plus-s906-sm-s906blbdeub-530863188',
        desc: 'Samsung s22 128GB',
        price: 1300,
        category: 'Samsung',
    },
    {
        id: 7,
        title: 'Samsung A52',
        img: 'https://storage.comprasmartphone.com/smartphones/samsung-galaxy-a52.png',
        desc: 'Samsung s21 128GB',
        price: 1500,
        category: 'Samsung',
    },
    {
        id: 8,
        title: 'Samsung A72',
        img: 'https://foxmoviles.com/wp-content/uploads/2021/05/A72-AZUL.png',
        desc: 'Samsung s21 128GB',
        price: 1500,
        category: 'Samsung',
    },
    {
        id: 9,
        title: 'Macbook Air m1',
        img: 'https://www.sintagmatecnologia.com.ar/Temp/App_WebSite/App_PictureFiles/Items/194252056639_800.jpg',
        desc: 'Macbook Air m1 8GB 512SSD',
        price: 800,
        category: 'Macbook',
    },
    {
        id: 10,
        title: 'Macbook Pro m1',
        img: 'https://www.ijunkie.com/wp-content/uploads/2020/11/Apple-Event-%E2%80%94-November-10-41-52-screenshot-1024x576.png',
        desc: 'Macbook Pro m1 8GB 512SSD',
        price: 1000,
        category: 'Macbook',
    },
    {
        id: 11,
        title: 'Macbook Air m2',
        img: 'https://cdn.redmondpie.com/wp-content/uploads/2022/06/image_2022-06-07_013839817.png',
        desc: 'Macbook Air m2 8GB 512SSD',
        price: 1200,
        category: 'Macbook',
    },
    {
        id: 12,
        title: 'Macbook Pro m2',
        img: 'https://itechstore.com.ar/wp-content/uploads/2022/08/1654597828_1710415.webp',
        desc: 'Macbook Pro m2 8GB 512SSD',
        price: 1500,
        category: 'Macbook',
    },
    {
        id: 13,
        title: 'Microsoft Surface laptop 3',
        img: 'https://flyclipart.com/thumbs/iphone-13-pro-max-graphite-1686914.png',
        desc: 'Microsoft Surface laptop',
        price: 1300,
        category: 'Microsoft Surface',
    },
    {
        id: 14,
        title: 'Microsoft Surface laptop 4',
        img: 'https://m.media-amazon.com/images/I/61QktdGY6BS._AC_SX522_.jpg',
        desc: 'Microsoft Surface laptop',
        price: 1500,
        category: 'Microsoft Surface',
    },
    {
        id: 15,
        title: 'Huawei matebook 13',
        img: 'https://www.notebookcheck.org/uploads/tx_nbc2/4_zu_3_Teaser_Huawei_MateBook_13_2020_AMD-R5.jpg',
        desc: 'Huawei matebook 13',
        price: 900,
        category: 'Huawei',
    },
    {
        id: 16,
        title: 'Huawei matebook 14',
        img: 'https://www.notebookcheck.org/uploads/tx_nbc2/teaser_60.jpg',
        desc: 'Huawei matebook 14',
        price: 1000,
        category: 'Huawei',
    },
]

export const TotalProducts = products.length;

export const Products = products.reduce((acc, product) => {
    if (!acc[product.category]) {
        acc[product.category] = [];
    }
    acc[product.category] = [...acc[product.category], product];

    return acc;
}, {});