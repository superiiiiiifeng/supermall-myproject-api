var express = require('express');
var cors = require('cors');
// var bodyParser=require('body-parser');//post请求获得请求体

var app = express();

//配置body-parser第三方插件
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());

// 解决跨域问题
// 方法1
// app.all('*',function(req,res,next){
//   res.header('Access-Control-Allow-Origin','*');
//   res.header('Access-Control-Allow-Headers','X-Requested-With');
//   res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
//   res.header('X-Powered-By','3.2.1');
//   res.header('Content-Type','application/json;charset=utf-8');
//   next();
// });
// 方法2
app.use(cors());

var data = {
  banners: [
    {
      id: 1,
      link: 'https://act.mogu.com/fastbuy/indexh5?acm=3.mce.1_10_1sdo0.140378.0.eopZPspkDB6eD.pos_870-m_662012-sd_119-mf_4537_1211936-idx_0-mfs_4-dm1_5000&ptp=32._mf1_1239_4537.banner_140378.1.QrTMMWUV',
      image: 'https://m.360buyimg.com/babel/s1171x462_jfs/t1/159926/22/6603/53553/60210432E62e157f3/9efe0be54241e4aa.jpg!q50.jpg'
    },
    {
      id: 2,
      link: 'https://act.mogu.com/minchuanphb3?acm=3.mce.1_10_1sdny.140378.0.eopZPspkDB6eE.pos_871-m_662011-sd_119-mf_4537_1211936-idx_3-mfs_4-dm1_5000&ptp=32._mf1_1239_4537.banner_140378.4.QrTMMWUV',
      image: 'https://m.360buyimg.com/babel/s1171x462_jfs/t1/171261/14/5575/46231/601b4d02Ef909e9f7/7e22df2932d5c660.jpg!q50.jpg'
    },
    {
      id: 3,
      link: 'https://act.mogu.com/fastbuy/indexh5?acm=3.mce.1_10_1sdo0.140378.0.eopZPspkDB6eD.pos_870-m_662012-sd_119-mf_4537_1211936-idx_0-mfs_4-dm1_5000&ptp=32._mf1_1239_4537.banner_140378.1.QrTMMWUV',
      image: 'https://m.360buyimg.com/babel/s1171x462_jfs/t1/151871/14/17148/42873/601bb79cEf888b5ff/594dd5ebe5dc7517.jpg!q50.jpg'
    },
    {
      id: 4,
      link: 'https://act.mogu.com/minchuanphb3?acm=3.mce.1_10_1sdny.140378.0.eopZPspkDB6eE.pos_871-m_662011-sd_119-mf_4537_1211936-idx_3-mfs_4-dm1_5000&ptp=32._mf1_1239_4537.banner_140378.4.QrTMMWUV',
      image: 'https://m.360buyimg.com/babel/s1171x462_jfs/t1/169006/16/5875/134509/6020dd81Ee4860767/9781828d1812721c.jpg!q50.jpg'
    }
  ],
  recommends: [
    {
      id: 1,
      title: '春秋新款打底衫',
      image: 'https://s5.mogucdn.com/mlcdn/c45406/190218_7i9497e08093ldec7c1l01c8c1hda_640x960.jpg_180x180.v1cAC.40.webp',
      link: 'https://act.mogu.com/minchuanphb0?acm=3.pa.1_38_1g60.0..lPg0osplu9Ecr.sd_116-swt_1106-imt_69-dit_-rtp_1&rankId=1g60&maitId=151088'
    },
    {
      id: 2,
      title: '秋装新款卫衣女',
      image: 'https://s5.mogucdn.com/mlcdn/c45406/200828_0flje33hd016l85h43bbij730hc60_5000x7500.jpg_640x640.v1cAC.40.webp',
      link: 'https://act.mogu.com/minchuanphb0?acm=3.pa.1_38_1fp6.0..nqOLCspluVD1n.sd_116-swt_1106-imt_69-dit_-rtp_1&rankId=1fp6&maitId=151088'
    },
    {
      id: 3,
      title: '高端轻奢连衣裙',
      image: 'https://s5.mogucdn.com/mlcdn/c45406/201025_1el933cg870i8g6a00bdlaacc42jg_640x960.jpg_640x640.v1cAC.40.webp',
      link: 'https://act.mogu.com/minchuanphb0?acm=3.pa.1_38_1fow.0..nqOLCspluVD1n.sd_116-swt_1106-imt_69-dit_-rtp_1&rankId=1fow&maitId=151088'
    },
    {
      id: 4,
      title: '高腰弹力牛仔裤',
      image: 'https://s5.mogucdn.com/mlcdn/c45406/201122_83ahbflde7glagc616284ie05jbi9_5249x7999.jpg_640x640.v1cAC.40.webp',
      link: 'https://act.mogu.com/minchuanphb0?acm=3.pa.1_38_1fp2.0..0Kytrsplwaart.sd_116-swt_1106-imt_69-dit_-rtp_1-mf_85371_1289443&rankId=1fp2&maitId=151088&ptp=32._mf1_2524_85371.0.0.eSWPigiS'
    }
  ],
};
var goods = {
  'pops': {
        page: 1,
        list: [
        {
          id: 1,
          image: 'https://s5.mogucdn.com/mlcdn/c45406/200905_17ig759d5458kl28cf7ch3b27fc6b_640x960.jpg_320x428.v1cAC.40.webp',
          link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mvwk5u&acm=3.ms.1_4_1mvwk5u.46.36613-102778-68998.jMfkaspmej3ht.sd_117-swt_46-imt_6-c_1_17_589532801_0_0_3-t_jMfkaspmej3ht-lc_17-pit_1-qid_4897-dit_-idx_5-dm1_5001&cparam=MTYxMzYzODQwNl8xMWtfMTNkODI0MmQxZGU0M2Y1NjQ2YmE1N2ZiODMyZTViZGZfMTdfMF81ODk1MzI4MDFfNGY4Zl8wXzBfMF8zMF8xXzNfbG9jLTA=',
          title: '2020秋冬新款毛呢半身裙女高腰简约A字裙小香风百搭包臀裙潮',
          price: 59,
          type: 'pops'
        },
        {
          id: 2,
          image: 'https://s5.mogucdn.com/mlcdn/c45406/200805_6f834g8laf9jkk5bjiah4615ghl3d_4224x6333.jpg_320x428.v1cAC.40.webp',
          link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mvaqac&acm=3.ms.1_4_1mvaqac.46.36613-102778-69000.mLA6Gspmejub4.sd_117-swt_46-imt_6-c_1_17_584960866_0_0_3-t_jMfkaspmej3ht-lc_17-pit_1-qid_4897-dit_159-idx_40-dm1_5001&cparam=MTYxMzYzODQwOF8xMWtfYjJlODQ3NmMxNjgwYWYwMTc0NzdlZTZjYzQ4YjU2ODhfMTdfMF81ODQ5NjA4NjZfNGY4OV8wXzBfMF8zMzhfMV8zX2xvYy0w',
          title: '秋季韩版2020新款抽绳时尚百搭收腰显瘦小个子A字长袖连衣裙',
          price: 69.9,
          type: 'pops'
        },
        {
          id: 3,
          image: 'https://s5.mogucdn.com/mlcdn/776a41/210215_31haca3ch5f7eih56436b4dil31di_750x1125.png_360x480.v1cAC.40.webp',
          link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mvaqac&acm=3.ms.1_4_1mvaqac.46.36613-102778-69000.mLA6Gspmejub4.sd_117-swt_46-imt_6-c_1_17_584960866_0_0_3-t_jMfkaspmej3ht-lc_17-pit_1-qid_4897-dit_159-idx_40-dm1_5001&cparam=MTYxMzYzODQwOF8xMWtfYjJlODQ3NmMxNjgwYWYwMTc0NzdlZTZjYzQ4YjU2ODhfMTdfMF81ODQ5NjA4NjZfNGY4OV8wXzBfMF8zMzhfMV8zX2xvYy0w',
          title: '学院风套装女2020早秋新款韩版甜美针织毛衣百褶半身裙两件套',
          price: 46.9,
          type: 'pops'
        },
        {
          id: 4,
          image: 'https://s5.mogucdn.com/mlcdn/776a41/210215_5e2a92f95lik71l2hibb386ah0lff_750x1125.png_360x480.v1cAC.40.webp',
          link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mvaqac&acm=3.ms.1_4_1mvaqac.46.36613-102778-69000.mLA6Gspmejub4.sd_117-swt_46-imt_6-c_1_17_584960866_0_0_3-t_jMfkaspmej3ht-lc_17-pit_1-qid_4897-dit_159-idx_40-dm1_5001&cparam=MTYxMzYzODQwOF8xMWtfYjJlODQ3NmMxNjgwYWYwMTc0NzdlZTZjYzQ4YjU2ODhfMTdfMF81ODQ5NjA4NjZfNGY4OV8wXzBfMF8zMzhfMV8zX2xvYy0w',
          title: '小个子套装女2020秋装新款复古日系针织衫小香风半身裙两件套',
          price: 46.9,
          type: 'pops'
        },
        {
          id: 5,
          image: 'https://s5.mogucdn.com/mlcdn/c45406/191027_1g4chj1aakfh1fj8g175004gi2dll_4635x6953.jpg_360x480.v1cAC.40.webp',
          link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mvaqac&acm=3.ms.1_4_1mvaqac.46.36613-102778-69000.mLA6Gspmejub4.sd_117-swt_46-imt_6-c_1_17_584960866_0_0_3-t_jMfkaspmej3ht-lc_17-pit_1-qid_4897-dit_159-idx_40-dm1_5001&cparam=MTYxMzYzODQwOF8xMWtfYjJlODQ3NmMxNjgwYWYwMTc0NzdlZTZjYzQ4YjU2ODhfMTdfMF81ODQ5NjA4NjZfNGY4OV8wXzBfMF8zMzhfMV8zX2xvYy0w',
          title: '半高领毛衣打底衫女洋气秋冬新款内搭修身加绒加厚针织衫长袖上衣',
          price: 39.9,
          type: 'pops'
        },
        {
          id: 6,
          image: 'https://s5.mogucdn.com/mlcdn/776a41/210215_5d07g5lh6l33fk167lgll61fhl269_750x1125.png_360x480.v1cAC.40.webp',
          link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mvaqac&acm=3.ms.1_4_1mvaqac.46.36613-102778-69000.mLA6Gspmejub4.sd_117-swt_46-imt_6-c_1_17_584960866_0_0_3-t_jMfkaspmej3ht-lc_17-pit_1-qid_4897-dit_159-idx_40-dm1_5001&cparam=MTYxMzYzODQwOF8xMWtfYjJlODQ3NmMxNjgwYWYwMTc0NzdlZTZjYzQ4YjU2ODhfMTdfMF81ODQ5NjA4NjZfNGY4OV8wXzBfMF8zMzhfMV8zX2xvYy0w',
          title: '时尚大码女装连帽卡通漫画印花宽松上衣百搭秋装新款人物长袖卫衣',
          price: 44.9,
          type: 'pops'
        },
        {
          id: 7,
          image: 'https://s5.mogucdn.com/mlcdn/c45406/191020_6lk494k6b914fcd50abl0l68j73j5_640x960.jpg_360x480.v1cAC.40.webp',
          link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mvaqac&acm=3.ms.1_4_1mvaqac.46.36613-102778-69000.mLA6Gspmejub4.sd_117-swt_46-imt_6-c_1_17_584960866_0_0_3-t_jMfkaspmej3ht-lc_17-pit_1-qid_4897-dit_159-idx_40-dm1_5001&cparam=MTYxMzYzODQwOF8xMWtfYjJlODQ3NmMxNjgwYWYwMTc0NzdlZTZjYzQ4YjU2ODhfMTdfMF81ODQ5NjA4NjZfNGY4OV8wXzBfMF8zMzhfMV8zX2xvYy0w',
          title: '小香风重工钉珠喇叭袖双排扣水貂绒外套大衣打底毛衣半身裙三件套',
          price: 89,
          type: 'pops'
        },
        {
          id: 8,
          image: 'https://s5.mogucdn.com/mlcdn/c45406/200904_2iaji4j21cadaa0ekl0jhhg7d10d6_640x960.jpg_360x480.v1cAC.40.webp',
          link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mvaqac&acm=3.ms.1_4_1mvaqac.46.36613-102778-69000.mLA6Gspmejub4.sd_117-swt_46-imt_6-c_1_17_584960866_0_0_3-t_jMfkaspmej3ht-lc_17-pit_1-qid_4897-dit_159-idx_40-dm1_5001&cparam=MTYxMzYzODQwOF8xMWtfYjJlODQ3NmMxNjgwYWYwMTc0NzdlZTZjYzQ4YjU2ODhfMTdfMF81ODQ5NjA4NjZfNGY4OV8wXzBfMF8zMzhfMV8zX2xvYy0w',
          title: '棉质秋装新款衬衫领假两件套上衣炸街卫衣女ins潮韩版宽松外套',
          price: 59,
          type: 'pops'
        },
        {
          id: 9,
          image: 'https://s5.mogucdn.com/mlcdn/c45406/200326_3ej3g5dkl6580jf66b9b39ei0k12i_640x960.jpg_360x480.v1cAC.40.webp',
          link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mvaqac&acm=3.ms.1_4_1mvaqac.46.36613-102778-69000.mLA6Gspmejub4.sd_117-swt_46-imt_6-c_1_17_584960866_0_0_3-t_jMfkaspmej3ht-lc_17-pit_1-qid_4897-dit_159-idx_40-dm1_5001&cparam=MTYxMzYzODQwOF8xMWtfYjJlODQ3NmMxNjgwYWYwMTc0NzdlZTZjYzQ4YjU2ODhfMTdfMF81ODQ5NjA4NjZfNGY4OV8wXzBfMF8zMzhfMV8zX2xvYy0w',
          title: '百搭大码女装潮夏日新款超火学生字母图案印花休闲V领短袖T恤衫',
          price: 35.9,
          type: 'pops'
        },
        {
          id: 11,
          image: 'https://s5.mogucdn.com/mlcdn/c45406/200526_5e0760ki8be7bi80ekbb3166i9b58_640x960.jpg_360x480.v1cAC.40.webp',
          link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mvaqac&acm=3.ms.1_4_1mvaqac.46.36613-102778-69000.mLA6Gspmejub4.sd_117-swt_46-imt_6-c_1_17_584960866_0_0_3-t_jMfkaspmej3ht-lc_17-pit_1-qid_4897-dit_159-idx_40-dm1_5001&cparam=MTYxMzYzODQwOF8xMWtfYjJlODQ3NmMxNjgwYWYwMTc0NzdlZTZjYzQ4YjU2ODhfMTdfMF81ODQ5NjA4NjZfNGY4OV8wXzBfMF8zMzhfMV8zX2xvYy0w',
          title: '国风旗袍复古高雅年轻款少女长款气质蕾丝连衣裙',
          price: 99,
          type: 'pops'
        },
        {
          id: 12,
          image: 'https://s5.mogucdn.com/mlcdn/c45406/191027_1g4chj1aakfh1fj8g175004gi2dll_4635x6953.jpg_360x480.v1cAC.40.webp',
          link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mvaqac&acm=3.ms.1_4_1mvaqac.46.36613-102778-69000.mLA6Gspmejub4.sd_117-swt_46-imt_6-c_1_17_584960866_0_0_3-t_jMfkaspmej3ht-lc_17-pit_1-qid_4897-dit_159-idx_40-dm1_5001&cparam=MTYxMzYzODQwOF8xMWtfYjJlODQ3NmMxNjgwYWYwMTc0NzdlZTZjYzQ4YjU2ODhfMTdfMF81ODQ5NjA4NjZfNGY4OV8wXzBfMF8zMzhfMV8zX2xvYy0w',
          title: '半高领毛衣打底衫女洋气秋冬新款内搭修身加绒加厚针织衫长袖上衣',
          price: 39.9,
          type: 'pops'
        },
        {
          id: 13,
          image: 'https://s5.mogucdn.com/mlcdn/c45406/200512_5dhah0hf9h8iaij4561ja4hi0c6h4_640x960.jpg_360x480.v1cAC.40.webp',
          link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mvaqac&acm=3.ms.1_4_1mvaqac.46.36613-102778-69000.mLA6Gspmejub4.sd_117-swt_46-imt_6-c_1_17_584960866_0_0_3-t_jMfkaspmej3ht-lc_17-pit_1-qid_4897-dit_159-idx_40-dm1_5001&cparam=MTYxMzYzODQwOF8xMWtfYjJlODQ3NmMxNjgwYWYwMTc0NzdlZTZjYzQ4YjU2ODhfMTdfMF81ODQ5NjA4NjZfNGY4OV8wXzBfMF8zMzhfMV8zX2xvYy0w',
          title: '2020夏复古开叉蕾丝旗袍连衣裙短裤两件套修身洋气小个子套装',
          price: 119,
          type: 'pops'
        },
        {
          id: 14,
          image: 'https://s5.mogucdn.com/mlcdn/c45406/200730_7f3gafjc85jh77b22kh8hbabfce84_640x960.jpg_360x480.v1cAC.40.webp',
          link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mvaqac&acm=3.ms.1_4_1mvaqac.46.36613-102778-69000.mLA6Gspmejub4.sd_117-swt_46-imt_6-c_1_17_584960866_0_0_3-t_jMfkaspmej3ht-lc_17-pit_1-qid_4897-dit_159-idx_40-dm1_5001&cparam=MTYxMzYzODQwOF8xMWtfYjJlODQ3NmMxNjgwYWYwMTc0NzdlZTZjYzQ4YjU2ODhfMTdfMF81ODQ5NjA4NjZfNGY4OV8wXzBfMF8zMzhfMV8zX2xvYy0w',
          title: '秋装新款减龄设计感泡泡袖衬衫+格子背带连衣裙小个子两件套装女',
          price: 65.9,
          type: 'pops'
        },
        {
          id: 15,
          image: 'https://s5.mogucdn.com/mlcdn/c45406/190824_5h1d0dlfhe8i18ddg823d27jdbkll_1000x1500.jpg_360x480.v1cAC.40.webp',
          link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mvaqac&acm=3.ms.1_4_1mvaqac.46.36613-102778-69000.mLA6Gspmejub4.sd_117-swt_46-imt_6-c_1_17_584960866_0_0_3-t_jMfkaspmej3ht-lc_17-pit_1-qid_4897-dit_159-idx_40-dm1_5001&cparam=MTYxMzYzODQwOF8xMWtfYjJlODQ3NmMxNjgwYWYwMTc0NzdlZTZjYzQ4YjU2ODhfMTdfMF81ODQ5NjA4NjZfNGY4OV8wXzBfMF8zMzhfMV8zX2xvYy0w',
          title: '秋季新款法式风复古风名媛两件套装白衬衫+吊带粗花呢背心裙套装',
          price: 69,
          type: 'pops'
        }
      ]
    },
  'news': {
      page: 1,
      list: [
        {
          id: 1,
          image: 'https://s5.mogucdn.com/mlcdn/c45406/200730_3dia1dgii9jh87379d8flgc243303_640x960.jpg_360x480.v1cAC.40.webp',
          link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mvwk5u&acm=3.ms.1_4_1mvwk5u.46.36613-102778-68998.jMfkaspmej3ht.sd_117-swt_46-imt_6-c_1_17_589532801_0_0_3-t_jMfkaspmej3ht-lc_17-pit_1-qid_4897-dit_-idx_5-dm1_5001&cparam=MTYxMzYzODQwNl8xMWtfMTNkODI0MmQxZGU0M2Y1NjQ2YmE1N2ZiODMyZTViZGZfMTdfMF81ODk1MzI4MDFfNGY4Zl8wXzBfMF8zMF8xXzNfbG9jLTA=',
          title: '秋季新款网红百搭纯色气质长袖衬衫女设计感上衣+高腰牛仔裤套装',
          price: 56,
          type: 'news'
        },
        {
          id: 2,
          image: 'https://s5.mogucdn.com/mlcdn/55cf19/200325_5k68e8ddcefla4bjkdfd55ci02l3b_640x960.jpg_360x480.v1cAC.40.webp',
          link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mvwk5u&acm=3.ms.1_4_1mvwk5u.46.36613-102778-68998.jMfkaspmej3ht.sd_117-swt_46-imt_6-c_1_17_589532801_0_0_3-t_jMfkaspmej3ht-lc_17-pit_1-qid_4897-dit_-idx_5-dm1_5001&cparam=MTYxMzYzODQwNl8xMWtfMTNkODI0MmQxZGU0M2Y1NjQ2YmE1N2ZiODMyZTViZGZfMTdfMF81ODk1MzI4MDFfNGY4Zl8wXzBfMF8zMF8xXzNfbG9jLTA=',
          title: '2020春夏甜美娃娃领细带蝴蝶白衬衫上衣高腰半身裙两件套套装',
          price: 65,
          type: 'news'
        },
        {
          id: 3,
          image: 'https://s5.mogucdn.com/mlcdn/c45406/200906_8845he0d0g74dfh4ji0d4jfk0ikbc_3332x4999.jpg_360x480.v1cAC.40.webp',
          link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mvwk5u&acm=3.ms.1_4_1mvwk5u.46.36613-102778-68998.jMfkaspmej3ht.sd_117-swt_46-imt_6-c_1_17_589532801_0_0_3-t_jMfkaspmej3ht-lc_17-pit_1-qid_4897-dit_-idx_5-dm1_5001&cparam=MTYxMzYzODQwNl8xMWtfMTNkODI0MmQxZGU0M2Y1NjQ2YmE1N2ZiODMyZTViZGZfMTdfMF81ODk1MzI4MDFfNGY4Zl8wXzBfMF8zMF8xXzNfbG9jLTA=',
          title: '仙女裙子秋季日系软妹网纱蝴蝶结木耳花边羽毛连衣裙学生女公主裙',
          price: 100.7,
          type: 'news'
        },
        {
          id: 4,
          image: 'https://s5.mogucdn.com/mlcdn/c45406/200618_7lc572chi402j0k62dh25ib5kjf06_3888x5832.jpg_360x480.v1cAC.40.webp',
          link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mvwk5u&acm=3.ms.1_4_1mvwk5u.46.36613-102778-68998.jMfkaspmej3ht.sd_117-swt_46-imt_6-c_1_17_589532801_0_0_3-t_jMfkaspmej3ht-lc_17-pit_1-qid_4897-dit_-idx_5-dm1_5001&cparam=MTYxMzYzODQwNl8xMWtfMTNkODI0MmQxZGU0M2Y1NjQ2YmE1N2ZiODMyZTViZGZfMTdfMF81ODk1MzI4MDFfNGY4Zl8wXzBfMF8zMF8xXzNfbG9jLTA=',
          title: '夏季法式甜美仙女智熏桔梗连衣裙气质显瘦森系polo西装百褶裙',
          price: 79.5,
          type: 'news'
        },
        {
          id: 5,
          image: 'https://s5.mogucdn.com/mlcdn/c45406/200727_1c69jb46bjji37j645a1ab949hc29_800x1201.jpg_360x480.v1cAC.40.webp',
          link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mvwk5u&acm=3.ms.1_4_1mvwk5u.46.36613-102778-68998.jMfkaspmej3ht.sd_117-swt_46-imt_6-c_1_17_589532801_0_0_3-t_jMfkaspmej3ht-lc_17-pit_1-qid_4897-dit_-idx_5-dm1_5001&cparam=MTYxMzYzODQwNl8xMWtfMTNkODI0MmQxZGU0M2Y1NjQ2YmE1N2ZiODMyZTViZGZfMTdfMF81ODk1MzI4MDFfNGY4Zl8wXzBfMF8zMF8xXzNfbG9jLTA=',
          title: '大码女装胖mm早秋西装炸街外套韩版宽松白色休闲中长薄款牛奶衬',
          price: 79,
          type: 'news'
        },
        {
          id: 6,
          image: 'https://s5.mogucdn.com/mlcdn/c45406/200728_3ad5fak2efdlechck7331c7ig7bd9_640x960.jpg_360x480.v1cAC.40.webp',
          link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mvwk5u&acm=3.ms.1_4_1mvwk5u.46.36613-102778-68998.jMfkaspmej3ht.sd_117-swt_46-imt_6-c_1_17_589532801_0_0_3-t_jMfkaspmej3ht-lc_17-pit_1-qid_4897-dit_-idx_5-dm1_5001&cparam=MTYxMzYzODQwNl8xMWtfMTNkODI0MmQxZGU0M2Y1NjQ2YmE1N2ZiODMyZTViZGZfMTdfMF81ODk1MzI4MDFfNGY4Zl8wXzBfMF8zMF8xXzNfbG9jLTA=',
          title: '韩版减龄学院风V领针织毛衣白衬衫领带高腰格子百褶裙三件套装秋',
          price: 18,
          type: 'news'
        },
        {
          id: 7,
          image: 'https://s5.mogucdn.com/mlcdn/c45406/200514_2ijkgj88a645flg5khc88b25gf13l_3332x4999.jpg_360x480.v1cAC.40.webp',
          link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mvwk5u&acm=3.ms.1_4_1mvwk5u.46.36613-102778-68998.jMfkaspmej3ht.sd_117-swt_46-imt_6-c_1_17_589532801_0_0_3-t_jMfkaspmej3ht-lc_17-pit_1-qid_4897-dit_-idx_5-dm1_5001&cparam=MTYxMzYzODQwNl8xMWtfMTNkODI0MmQxZGU0M2Y1NjQ2YmE1N2ZiODMyZTViZGZfMTdfMF81ODk1MzI4MDFfNGY4Zl8wXzBfMF8zMF8xXzNfbG9jLTA=',
          title: '公主范法式白色连衣裙女夏2020新款韩版气质小个子仙女裙子潮',
          price: 111.3,
          type: 'news'
        },
        {
          id: 8,
          image: 'https://s5.mogucdn.com/mlcdn/c45406/200815_4b9j4blb3g7kj670j14i1chb552kf_640x960.jpg_360x480.v1cAC.40.webp',
          link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mvwk5u&acm=3.ms.1_4_1mvwk5u.46.36613-102778-68998.jMfkaspmej3ht.sd_117-swt_46-imt_6-c_1_17_589532801_0_0_3-t_jMfkaspmej3ht-lc_17-pit_1-qid_4897-dit_-idx_5-dm1_5001&cparam=MTYxMzYzODQwNl8xMWtfMTNkODI0MmQxZGU0M2Y1NjQ2YmE1N2ZiODMyZTViZGZfMTdfMF81ODk1MzI4MDFfNGY4Zl8wXzBfMF8zMF8xXzNfbG9jLTA=',
          title: '学院海军领徽章锁骨针织外套女韩版宽松减龄春秋毛衣开衫+牛仔裤',
          price: 78.4,
          type: 'news'
        },
        {
          id: 9,
          image: 'https://s5.mogucdn.com/mlcdn/c45406/180824_79k6agj999j8d45d82e9g5ef0ga1b_640x960.jpg_360x480.v1cAC.40.webp',
          link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mvwk5u&acm=3.ms.1_4_1mvwk5u.46.36613-102778-68998.jMfkaspmej3ht.sd_117-swt_46-imt_6-c_1_17_589532801_0_0_3-t_jMfkaspmej3ht-lc_17-pit_1-qid_4897-dit_-idx_5-dm1_5001&cparam=MTYxMzYzODQwNl8xMWtfMTNkODI0MmQxZGU0M2Y1NjQ2YmE1N2ZiODMyZTViZGZfMTdfMF81ODk1MzI4MDFfNGY4Zl8wXzBfMF8zMF8xXzNfbG9jLTA=',
          title: '新款两件套秋天女装时尚套装秋款气质秋季针织韩版套裙a型',
          price: 78.4,
          type: 'news'
        },
        {
          id: 10,
          image: 'https://s5.mogucdn.com/mlcdn/c45406/200904_4hd3ei8k2682k40jbc9f436lb8ih1_640x960.jpg_360x480.v1cAC.40.webp',
          link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mvwk5u&acm=3.ms.1_4_1mvwk5u.46.36613-102778-68998.jMfkaspmej3ht.sd_117-swt_46-imt_6-c_1_17_589532801_0_0_3-t_jMfkaspmej3ht-lc_17-pit_1-qid_4897-dit_-idx_5-dm1_5001&cparam=MTYxMzYzODQwNl8xMWtfMTNkODI0MmQxZGU0M2Y1NjQ2YmE1N2ZiODMyZTViZGZfMTdfMF81ODk1MzI4MDFfNGY4Zl8wXzBfMF8zMF8xXzNfbG9jLTA=',
          title: '棉质卫衣春秋韩版宽松bf慵懒风中长款假两件ins薄款上衣外套',
          price: 59,
          type: 'news'
        }
      ]
    },
  'sell': {
      page: 1,
      list: [
        {
          id: 1,
          image: 'https://s5.mogucdn.com/mlcdn/c45406/190605_2d5bbdhgedai4e0jk24d0df5f8kbi_800x1200.jpg_360x480.v1cAC.40.webp',
          link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mvwk5u&acm=3.ms.1_4_1mvwk5u.46.36613-102778-68998.jMfkaspmej3ht.sd_117-swt_46-imt_6-c_1_17_589532801_0_0_3-t_jMfkaspmej3ht-lc_17-pit_1-qid_4897-dit_-idx_5-dm1_5001&cparam=MTYxMzYzODQwNl8xMWtfMTNkODI0MmQxZGU0M2Y1NjQ2YmE1N2ZiODMyZTViZGZfMTdfMF81ODk1MzI4MDFfNGY4Zl8wXzBfMF8zMF8xXzNfbG9jLTA=',
          title: '温柔仙女风蕾丝气质连衣裙修身层层钩花镂空文艺复古中式收腰长裙',
          price: 188,
          type: 'sell'
        },
        {
          id: 2,
          image: 'https://s5.mogucdn.com/mlcdn/c45406/200327_144efc7el9a512ihebd56f5c5707i_800x1200.jpg_360x480.v1cAC.40.webp',
          link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mvwk5u&acm=3.ms.1_4_1mvwk5u.46.36613-102778-68998.jMfkaspmej3ht.sd_117-swt_46-imt_6-c_1_17_589532801_0_0_3-t_jMfkaspmej3ht-lc_17-pit_1-qid_4897-dit_-idx_5-dm1_5001&cparam=MTYxMzYzODQwNl8xMWtfMTNkODI0MmQxZGU0M2Y1NjQ2YmE1N2ZiODMyZTViZGZfMTdfMF81ODk1MzI4MDFfNGY4Zl8wXzBfMF8zMF8xXzNfbG9jLTA=',
          title: '2020春夏仙女裙森系复古日常汉服显瘦小个子旗袍改良版连衣裙',
          price: 109,
          type: 'sell'
        },
        {
          id: 3,
          image: 'https://s5.mogucdn.com/mlcdn/c45406/200430_627976670e6e8k99112eghe3g7k9c_640x960.jpg_360x480.v1cAC.40.webp',
          link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mvwk5u&acm=3.ms.1_4_1mvwk5u.46.36613-102778-68998.jMfkaspmej3ht.sd_117-swt_46-imt_6-c_1_17_589532801_0_0_3-t_jMfkaspmej3ht-lc_17-pit_1-qid_4897-dit_-idx_5-dm1_5001&cparam=MTYxMzYzODQwNl8xMWtfMTNkODI0MmQxZGU0M2Y1NjQ2YmE1N2ZiODMyZTViZGZfMTdfMF81ODk1MzI4MDFfNGY4Zl8wXzBfMF8zMF8xXzNfbG9jLTA=',
          title: '20夏季新款V领修身裙子显瘦吊带裙性感包臀裙打底裙连衣裙女装',
          price: 56,
          type: 'sell'
        },
        {
          id: 4,
          image: 'https://s5.mogucdn.com/mlcdn/c45406/200820_56b8d8cjj7di737ai99kae72i2jb4_640x960.jpg_360x480.v1cAC.40.webp',
          link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mvwk5u&acm=3.ms.1_4_1mvwk5u.46.36613-102778-68998.jMfkaspmej3ht.sd_117-swt_46-imt_6-c_1_17_589532801_0_0_3-t_jMfkaspmej3ht-lc_17-pit_1-qid_4897-dit_-idx_5-dm1_5001&cparam=MTYxMzYzODQwNl8xMWtfMTNkODI0MmQxZGU0M2Y1NjQ2YmE1N2ZiODMyZTViZGZfMTdfMF81ODk1MzI4MDFfNGY4Zl8wXzBfMF8zMF8xXzNfbG9jLTA=',
          title: '卫衣女秋装宽松韩版2020新款薄款上衣潮外套休闲时尚套装',
          price: 39.9,
          type: 'sell'
        },
        {
          id: 5,
          image: 'https://s5.mogucdn.com/mlcdn/c45406/200906_6d3078a6he2bh49khg219207kbfbj_640x960.jpg_360x480.v1cAC.40.webp',
          link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mvwk5u&acm=3.ms.1_4_1mvwk5u.46.36613-102778-68998.jMfkaspmej3ht.sd_117-swt_46-imt_6-c_1_17_589532801_0_0_3-t_jMfkaspmej3ht-lc_17-pit_1-qid_4897-dit_-idx_5-dm1_5001&cparam=MTYxMzYzODQwNl8xMWtfMTNkODI0MmQxZGU0M2Y1NjQ2YmE1N2ZiODMyZTViZGZfMTdfMF81ODk1MzI4MDFfNGY4Zl8wXzBfMF8zMF8xXzNfbG9jLTA=',
          title: '2020初秋新款修身显瘦性感包臀吊带连衣裙针织开衫两件套装女',
          price: 170,
          type: 'sell'
        },
        {
          id: 6,
          image: 'https://s5.mogucdn.com/mlcdn/c45406/200614_02i3egjkaejgj0jg2efl2af418j9k_3999x5999.jpg_360x480.v1cAC.40.webp',
          link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mvwk5u&acm=3.ms.1_4_1mvwk5u.46.36613-102778-68998.jMfkaspmej3ht.sd_117-swt_46-imt_6-c_1_17_589532801_0_0_3-t_jMfkaspmej3ht-lc_17-pit_1-qid_4897-dit_-idx_5-dm1_5001&cparam=MTYxMzYzODQwNl8xMWtfMTNkODI0MmQxZGU0M2Y1NjQ2YmE1N2ZiODMyZTViZGZfMTdfMF81ODk1MzI4MDFfNGY4Zl8wXzBfMF8zMF8xXzNfbG9jLTA=',
          title: '2020新款夏季女韩休闲时尚套装小个子显高洋气减龄短裤两件套',
          price: 99,
          type: 'sell'
        },
        {
          id: 7,
          image: 'https://s5.mogucdn.com/mlcdn/c45406/200819_67310hdcgf5b1f7h1f5idj4k1bhfd_640x832.jpg_360x480.v1cAC.40.webp',
          link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mvwk5u&acm=3.ms.1_4_1mvwk5u.46.36613-102778-68998.jMfkaspmej3ht.sd_117-swt_46-imt_6-c_1_17_589532801_0_0_3-t_jMfkaspmej3ht-lc_17-pit_1-qid_4897-dit_-idx_5-dm1_5001&cparam=MTYxMzYzODQwNl8xMWtfMTNkODI0MmQxZGU0M2Y1NjQ2YmE1N2ZiODMyZTViZGZfMTdfMF81ODk1MzI4MDFfNGY4Zl8wXzBfMF8zMF8xXzNfbG9jLTA=',
          title: '秋季新款薄针织开衫女韩版慵懒风百搭上衣宽松外搭短款毛衣外套潮',
          price: 59.9,
          type: 'sell'
        },
        {
          id: 8,
          image: 'https://s5.mogucdn.com/mlcdn/55cf19/200907_77174dhih0af1798jf01jlci2l7d9_640x960.jpg_360x480.v1cAC.40.webp',
          link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mvwk5u&acm=3.ms.1_4_1mvwk5u.46.36613-102778-68998.jMfkaspmej3ht.sd_117-swt_46-imt_6-c_1_17_589532801_0_0_3-t_jMfkaspmej3ht-lc_17-pit_1-qid_4897-dit_-idx_5-dm1_5001&cparam=MTYxMzYzODQwNl8xMWtfMTNkODI0MmQxZGU0M2Y1NjQ2YmE1N2ZiODMyZTViZGZfMTdfMF81ODk1MzI4MDFfNGY4Zl8wXzBfMF8zMF8xXzNfbG9jLTA=',
          title: '秋装女装新款日系软妹甜美宽松显瘦中长款假两件长袖娃娃领连衣裙',
          price: 83.7,
          type: 'sell'
        },
        {
          id: 9,
          image: 'https://s5.mogucdn.com/mlcdn/c45406/180824_79k6agj999j8d45d82e9g5ef0ga1b_640x960.jpg_360x480.v1cAC.40.webp',
          link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mvwk5u&acm=3.ms.1_4_1mvwk5u.46.36613-102778-68998.jMfkaspmej3ht.sd_117-swt_46-imt_6-c_1_17_589532801_0_0_3-t_jMfkaspmej3ht-lc_17-pit_1-qid_4897-dit_-idx_5-dm1_5001&cparam=MTYxMzYzODQwNl8xMWtfMTNkODI0MmQxZGU0M2Y1NjQ2YmE1N2ZiODMyZTViZGZfMTdfMF81ODk1MzI4MDFfNGY4Zl8wXzBfMF8zMF8xXzNfbG9jLTA=',
          title: '新款两件套秋天女装时尚套装秋款气质秋季针织韩版套裙a型',
          price: 78.4,
          type: 'sell'
        },
        {
          id: 10,
          image: 'https://s5.mogucdn.com/mlcdn/c45406/200904_4hd3ei8k2682k40jbc9f436lb8ih1_640x960.jpg_360x480.v1cAC.40.webp',
          link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mvwk5u&acm=3.ms.1_4_1mvwk5u.46.36613-102778-68998.jMfkaspmej3ht.sd_117-swt_46-imt_6-c_1_17_589532801_0_0_3-t_jMfkaspmej3ht-lc_17-pit_1-qid_4897-dit_-idx_5-dm1_5001&cparam=MTYxMzYzODQwNl8xMWtfMTNkODI0MmQxZGU0M2Y1NjQ2YmE1N2ZiODMyZTViZGZfMTdfMF81ODk1MzI4MDFfNGY4Zl8wXzBfMF8zMF8xXzNfbG9jLTA=',
          title: '棉质卫衣春秋韩版宽松bf慵懒风中长款假两件ins薄款上衣外套',
          price: 59,
          type: 'sell'
        }
      ]
    }
};

app.get('/home/MultiData',(req,res) => {
      res.status(200);
      res.json(data)
    }
);
app.get('/home/goods',(req,res) => {
      res.status(200);
      res.json(goods)
    }
);
app.get('/detail',(req,res) => {
  // console.log(req.query.id);
  // console.log(req.query.type === 'pops');
  var obj = goods[req.query.type].list;
  var index = 0,
      currentIndex = 0;
  currentIndex = parseInt(req.query.id);
  index = obj.indexOf(obj.filter(d => d.id === currentIndex)[0]);
  res.status(200);
  res.json(obj[index])
    }
);
var server = app.listen(8888,function () {
  console.log('server is running...');
});