const db = window.db;
const auth = window.auth;

const dubbedMovies = [
  {id:"madagascar3",title:"מדגסקר 3: מקרקסים את אירופה",year:2012,src:"https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F165628%2FMadagascar_3_Europe%2527s_Most_Wanted_2012Hebrew_Dubbed_Also_English%25D7%259E%25D7%2593%25D7%2592%25D7%25A1%25D7%25A7%25D7%2590%25D7%25A8.mp4%3Fhash%3DAgADVg",img:"https://i.imgur.com/0oJ8rDH.jpeg"},
  {id:"robot_rose",title:"רוז הרובוטית",year:2024,src:"https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F165618%2F%25D7%25A8%25D7%2595%25D7%2596_%25D7%2594%25D7%25A8%25D7%2595%25D7%2591%25D7%2595%25D7%2598%25D7%2599%25D7%25AA_2024_The_Wild_Robot_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%2594%25D7%2595%25D7%25A2%25D7%259C%25D7%2594_%25D7%25A2%25D7%2599_%25F0%259D%2590%2581%25F0%259D%2590%258E.mp4%3Fhash%3DAgADrx",img:"https://i.imgur.com/lvGeaK6.jpeg"},
  {id:"the_spongebob_squarepants_movie",title:"בובספוג: הסרט",year:2004,src:"https://dl.dropboxusercontent.com/scl/fi/p56jdckyn522nj8dva4sm/_-_-_-_2004_.mp4?rlkey=6vihdhqghftrpu142mqeriagy&st=t7hsu9sw",img:"https://i.imgur.com/0rjGCU0.png"},
  {id:"big_hero_6",title:"6 גיבורים",year:2014,src:"https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F186137%2F6%2B%25D7%2592%25D7%2599%25D7%2591%25D7%2595%25D7%25A8%25D7%2599%25D7%259D%2B2014%2B%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591-Segment%2B1.mp4%3Fhash%3DAgAD_w",img:"https://i.imgur.com/rqrqITT.jpeg"}
];

const subtitledMovies = [
  {id:"yes_lah_bitzim",title:"יש לה ביצים",year:2006,src:"https://tj.tbnbotsnetwork.workers.dev/165634/1080p+BluRay+2006+%D7%96%D7%99%D7%A8%D7%94+%D7%9E%D7%93%D7%99%D7%94+%D7%99%D7%A9+%D7%9C%D7%94+%D7%91%D7%99%D7%A6%D7%99%D7%9D.mp4?hash=AgADdB",img:"https://i.imgur.com/EiccKVQ.jpeg"},
  {id:"kara_robinson_story",title:"הילדה שנמלטה: הסיפור של קארה רובינסון",year:2023,src:"https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F165638%2F%25D7%2594%25D7%2599%25D7%259C%25D7%2593%25D7%2594_%25D7%25A9%25D7%25A0%25D7%259E%25D7%259C%25D7%2598%25D7%2594_%25D7%2594%25D7%25A1%25D7%2599%25D7%25A4%25D7%2595%25D7%25A8_%25D7%25A9%25D7%259C_%25D7%25A7%25D7%2590%25D7%25A8%25D7%2594_%25D7%25A8%25D7%2595%25D7%2591%25D7%2599%25D7%25A0%25D7%25A1%25D7%2595%25D7%259F_2023.mp4%3Fhash%3DAgADTx",img:"https://i.imgur.com/tANPbX3.jpeg"},
  {id:"flow",title:"עם הזרם",year:2024,src:"https://xstreamx.films365.org/movie/da067ce8-a5dd-4965-85d8-e2e86f747a10/Flow",img:"https://i.imgur.com/PbXM7QV.jpeg"},
  {id:"a_minecraft_movie",title:"מיינקראפט: הסרט",year:2025,src:"https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F165648%2F%25D7%259E%25D7%2599%25D7%2599%25D7%25A0%25D7%25A7%25D7%25A8%25D7%2590%25D7%25A4%25D7%2598_%25D7%2594%25D7%25A1%25D7%25A8%25D7%2598_2025_%25D7%25AA%25D7%25A8%25D7%2592%25D7%2595%25D7%259D_%25D7%259E%25D7%2595%25D7%2591%25D7%25A0%25D7%2594_1080p_WEB_DL_%25D7%2594%25D7%2595%25D7%25A2%25D7%259C%25D7%2594_%25D7%25A2%2522%25D7%2599_%25F0%259D%2590%2581%25F0%259D%2590%258E%25F0%259D%2590%2592%25F0%259D%2590%2592.mp4%3Fhash%3DAgADmh",img:"https://i.imgur.com/7UVvdLg.jpeg"},
  {id:"a_good_day_to_die_hard",title:"מת לחיות ביום טוב",year:2013,src:"https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F165659%2F1080p%2BBluRay%2B2013%2B%25D7%2596.%25D7%259E%2B%25D7%259E%25D7%25AA%2B%25D7%259C%25D7%2597%25D7%2599%25D7%2595%25D7%25AA%2B%25D7%2591%25D7%2599%25D7%2595%25D7%259D%2B%25D7%2598%25D7%2595%25D7%2591.mp4%3Fhash%3DAgADeQ",img:"https://i.imgur.com/Pqwlb3W.jpeg"},
  {id:"snow_white",title:"שלגיה",year:2025,src:"https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F165623%2F%25D7%25A9%25D7%259C%25D7%2592%25D7%2599%25D7%2594_2025_Snow_White_1080p_WEB_DL_%25D7%2594%25D7%2595%25D7%25A2%25D7%259C%25D7%2594_%25D7%25A2%25D7%2599_%25F0%259D%2590%2581%25F0%259D%2590%258E%25F0%259D%2590%2592%25F0%259D%2590%2592.mp4%3Fhash%3DAgADBh",img:"https://i.imgur.com/qhkzqtv.jpeg"},
  {id:"wicked",title:"מרשעת",year:2024,src:"https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F165672%2F%25D7%259E%25D7%25A8%25D7%25A9%25D7%25A2%25D7%25AA_2024_Wicked_%25D7%2594%25D7%2595%25D7%25A2%25D7%259C%25D7%2594_%25D7%25A2%2522%25D7%2599_%25F0%259D%2590%2581%25F0%259D%2590%258E%25F0%259D%2590%2592%25F0%259D%2590%2592.mp4%3Fhash%3DAgADvR",img:"https://i.imgur.com/NoCQY3d.jpeg"},
  {id:"eternal_sunshine_of_the_spotless_mind",title:"שמש נצחית בראש צלול",year:2004,src:"https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F187999%2F1080p%2BBluRay%2B2004%2B%25D7%25A9%25D7%259E%25D7%25A9%2B%25D7%25A0%25D7%25A6%25D7%2597%25D7%2599%25D7%25AA%2B%25D7%2591%25D7%25A8%25D7%2590%25D7%25A9%2B%25D7%25A6%25D7%259C%25D7%2595%25D7%259C.mp4%3Fhash%3DAgADzw",img:"https://i.imgur.com/UyIx6WU.jpeg"},
  {id:"joker",title:"ג'וקר",year:2019,src:"https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F165626%2F1080p%2BBluRay%2B2019%2B%25D7%2596%25D7%2599%25D7%25A8%25D7%2594%2B%25D7%259E%25D7%2593%25D7%2599%25D7%2594%2B%25D7%2592%2527%25D7%2595%25D7%25A7%25D7%25A8.mp4%3Fhash%3DAgADDA",img:"https://i.imgur.com/q390vHH.jpeg"},
  {id:"coraline",title:"קורליין ודלת הקסמים",year:2009,src:"https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F165692%2FCoraline.2009.1080p.BluRay.x264.AAC5.1-%255BYTS.MX%255D.mp4%3Fhash%3DAgADMx",img:"https://i.imgur.com/DcIuBV9.jpeg"},
  {id:"harry_potter_and_the_philosopher's_stone",title:"הארי פוטר ואבן החכמים",year:2001,src:"https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F162615%2F1080p%2BBluRay%2B2001%2B%25D7%2596%25D7%2599%25D7%25A8%25D7%2594%2B%25D7%259E%25D7%2593%25D7%2599%25D7%2594%2B%25D7%2594%25D7%2590%25D7%25A8%25D7%2599%2B%25D7%25A4%25D7%2595%25D7%2598%25D7%25A8%2B1.mp4%3Fhash%3DAgADPQ",img:"https://i.imgur.com/ahNuo3q.jpeg"},
  {id:"twilight",title:"דמדומים",year:2008,src:"https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F168120%2F1080p%2BBluRay%2B2008%2B%25D7%2596%25D7%2599%25D7%25A8%25D7%2594%2B%25D7%259E%25D7%2593%25D7%2599%25D7%2594%2B%25D7%2593%25D7%259E%25D7%2593%25D7%2595%25D7%259E%25D7%2599%25D7%259D.mp4%3Fhash%3DAgAD7A",img:"https://i.imgur.com/fV3ekwT.jpeg"},
  {id:"the_twilight_saga:_new_moon",title:"דמדומים 2: ירח חדש",year:2009,src:"https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F167980%2F1080p%2BBluRay%2B2009%2B%25D7%2596%25D7%2599%25D7%25A8%25D7%2594%2B%25D7%259E%25D7%2593%25D7%2599%25D7%2594%2B%25D7%2593%25D7%259E%25D7%2593%25D7%2595%25D7%259E%25D7%2599%25D7%259D%2B2.mp4%3Fhash%3DAgADtw",img:"https://i.imgur.com/KKN6x2i.jpeg"},
  {id:"the_twilight_saga:_eclipse",title:"דמדומים 3: ליקוי חמה",year:2010,src:"https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F168004%2F1080p%2BBluRay%2B2010%2B%25D7%2596%25D7%2599%25D7%25A8%25D7%2594%2B%25D7%259E%25D7%2593%25D7%2599%25D7%2594%2B%25D7%2593%25D7%259E%25D7%2593%25D7%2595%25D7%259E%25D7%2599%25D7%259D%2B3.mp4%3Fhash%3DAgADyg",img:"https://i.imgur.com/fvB40Oi.jpeg"},
  {id:"the_twilight_saga:_breaking_dawn",title:"דמדומים 4: שחר מפציע - חלק 1",year:2011,src:"https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F168009%2F1080p%2BBluRay%2B2011%2B%25D7%2596.%25D7%259E%2B%25D7%2593%25D7%259E%25D7%2593%25D7%2595%25D7%259E%25D7%2599%25D7%259D%2B4%2B%25D7%2597%25D7%259C%25D7%25A7%2B1.mp4%3Fhash%3DAgADzA",img:"https://i.imgur.com/uENbjgk.jpeg"},
  {id:"the_twilight_saga:_breaking_dawn_part_2",title:"דמדומים 4: שחר מפציע - חלק 2",year:2012,src:"https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F168012%2F1080p%2BBluRay%2B2012%2B%25D7%2596.%25D7%259E%2B%25D7%2593%25D7%259E%25D7%2593%25D7%2595%25D7%259E%25D7%2599%25D7%259D%2B4%2B%25D7%2597%25D7%259C%25D7%25A7%2B2.mp4%3Fhash%3DAgAD1Q",img:"https://i.imgur.com/92hguFz.jpeg"},
  {id:"harry_potter_and_the_chamber_of_secrets",title:"הארי פוטר וחדר הסודות",year:2002,src:"https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F163371%2F1080p%2BBluRay%2B2002%2B%25D7%2596%25D7%2599%25D7%25A8%25D7%2594%2B%25D7%259E%25D7%2593%25D7%2599%25D7%2594%2B%25D7%2594%25D7%2590%25D7%25A8%25D7%2599%2B%25D7%25A4%25D7%2595%25D7%2598%25D7%25A8%2B2.mp4%3Fhash%3DAgADPg",img:"https://i.imgur.com/jA7SGNn.png"},
  {id:"harry_potter_and_the_prisoner_of_azkaban",title:"הארי פוטר והאסיר מאזקבאן",year:2004,src:"https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F163418%2F1080p%2BBluRay%2B2004%2B%25D7%2596%25D7%2599%25D7%25A8%25D7%2594%2B%25D7%259E%25D7%2593%25D7%2599%25D7%2594%2B%25D7%2594%25D7%2590%25D7%25A8%25D7%2599%2B%25D7%25A4%25D7%2595%25D7%2598%25D7%25A8%2B3.mp4%3Fhash%3DAgADPw",img:"https://i.imgur.com/QueMvLs.png"},
  {id:"harry_potter_and_the_goblet_of_fire",title:"הארי פוטר וגביע האש",year:2005,src:"https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F163453%2F1080p%2BBluRay%2B2005%2B%25D7%2596%25D7%2599%25D7%25A8%25D7%2594%2B%25D7%259E%25D7%2593%25D7%2599%25D7%2594%2B%25D7%2594%25D7%2590%25D7%25A8%25D7%2599%2B%25D7%25A4%25D7%2595%25D7%2598%25D7%25A8%2B4.mp4%3Fhash%3DAgADQA",img:"https://i.imgur.com/DP4Pwti.png"},
  {id:"harry_potter_and_the_order_of_the_phoenix",title:"הארי פוטר ומסדר עוף החול",year:2007,src:"https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F163470%2F1080p%2BBluRay%2B2007%2B%25D7%2596%25D7%2599%25D7%25A8%25D7%2594%2B%25D7%259E%25D7%2593%25D7%2599%25D7%2594%2B%25D7%2594%25D7%2590%25D7%25A8%25D7%2599%2B%25D7%25A4%25D7%2595%25D7%2598%25D7%25A8%2B5.mp4%3Fhash%3DAgADQQ",img:"https://i.imgur.com/4oNTsO5.jpeg"},
  {id:"harry_potter_and_the_half_blood_prince",title:"הארי פוטר והנסיך חצוי-הדם",year:2009,src:"https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F163510%2F1080p%2BBluRay%2B2009%2B%25D7%2596%25D7%2599%25D7%25A8%25D7%2594%2B%25D7%259E%25D7%2593%25D7%2599%25D7%2594%2B%25D7%2594%25D7%2590%25D7%25A8%25D7%2599%2B%25D7%25A4%25D7%2595%25D7%2598%25D7%25A8%2B6.mp4%3Fhash%3DAgADQg",img:"https://i.imgur.com/ddKYQQQ.jpeg"},
  {id:"harry_potter_and_the_deathly_hallows_part_1",title:"הארי פוטר ואוצרות המוות - חלק 1",year:2010,src:"https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F163538%2F1080p%2BBluRay%2B2010%2B%25D7%2596%25D7%2599%25D7%25A8%25D7%2594%2B%25D7%259E%25D7%2593%25D7%2599%25D7%2594%2B%25D7%2594%25D7%2590%25D7%25A8%25D7%2599%2B%25D7%25A4%25D7%2595%25D7%2598%25D7%25A8%2B7%2B%25D7%25971.mp4%3Fhash%3DAgADQw",img:"https://i.imgur.com/BwjwVcM.jpeg"},
  {id:"harry_potter_and_the_deathly_hallows_part_2",title:"הארי פוטר ואוצרות המוות - חלק 2",year:2011,src:"https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F163558%2F1080p%2BBluRay%2B2011%2B%25D7%2596%25D7%2599%25D7%25A8%25D7%2594%2B%25D7%259E%25D7%2593%25D7%2599%25D7%2594%2B%25D7%2594%25D7%2590%25D7%25A8%25D7%2599%2B%25D7%25A4%25D7%2595%25D7%2598%25D7%25A8%2B7%2B%25D7%25972.mp4%3Fhash%3DAgADRA",img:"https://i.imgur.com/vDpaaTG.jpeg"},
  {id:"the_notebook",title:"היומן",year:2004,src:"https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F163576%2F1080p%2BBluRay%2B2004%2B%25D7%2596%25D7%2599%25D7%25A8%25D7%2594%2B%25D7%259E%25D7%2593%25D7%2599%25D7%2594%2B%25D7%2594%25D7%2599%25D7%2595%25D7%259E%25D7%259F.mp4%3Fhash%3DAgADeR",img:"https://i.imgur.com/2duKzlH.jpeg"},
  {id:"the_flash",title:"הפלאש",year:2023,src:"https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F163634%2F1080p%2BBluRay%2B2023%2B%25D7%2596%25D7%2599%25D7%25A8%25D7%2594%2B%25D7%259E%25D7%2593%25D7%2599%25D7%2594%2B%25D7%2594%25D7%25A4%25D7%259C%25D7%2590%25D7%25A9.mp4%3Fhash%3DAgADdh",img:"https://i.imgur.com/BBxGlky.jpeg"},
  {id:"men_in_black_ii",title:"גברים בשחור 2",year:2002,src:"https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F163757%2F1080p%2BBluRay%2B2002%2B%25D7%2596%25D7%2599%25D7%25A8%25D7%2594%2B%25D7%259E%25D7%2593%25D7%2599%25D7%2594%2B%25D7%2592%25D7%2591%25D7%25A8%25D7%2599%25D7%259D%2B%25D7%2591%25D7%25A9%25D7%2597%25D7%2595%25D7%25A8%2B2.mp4%3Fhash%3DAgADZA",img:"https://i.imgur.com/SBef41T.jpeg"},
  {id:"charlie's_angels",title:"המלאכיות של צ'רלי",year:2000,src:"https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F163764%2F1080p%2BBluRay%2B2000%2B%25D7%2596.%25D7%259E%2B%25D7%2594%25D7%259E%25D7%259C%25D7%2590%25D7%259B%25D7%2599%25D7%2595%25D7%25AA%2B%25D7%25A9%25D7%259C%2B%25D7%25A6%2527%25D7%25A8%25D7%259C%25D7%2599.mp4%3Fhash%3DAgADvw",img:"https://i.imgur.com/sTiTYFI.jpeg"},
  {id:"charlie's_angels:_full_throttle",title:"המלאכיות של צ'רלי: בהילוך גבוה",year:2003,src:"https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F163777%2F%25D7%2594%25D7%259E%25D7%259C%25D7%2590%25D7%259B%25D7%2599%25D7%2595%25D7%25AA_%25D7%25A9%25D7%259C_%25D7%25A6%2527%25D7%2590%25D7%25A8%25D7%259C%25D7%2599_%25D7%2591%25D7%2594%25D7%2599%25D7%259C%25D7%2595%25D7%259A_%25D7%2592%25D7%2591%25D7%2595%25D7%2594_2003.mp4%3Fhash%3DAgADUg",img:"https://i.imgur.com/zEciMnc.jpeg"},
  {id:"charlie's_angels",title:"המלאכיות של צ'רלי",year:2019,src:"https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F163788%2F1080p%2BBluRay%2B2019%2B%25D7%2596.%25D7%259E%2B%25D7%2594%25D7%259E%25D7%259C%25D7%2590%25D7%259B%25D7%2599%25D7%2595%25D7%25AA%2B%25D7%25A9%25D7%259C%2B%25D7%25A6%2527%25D7%25A8%25D7%259C%25D7%2599.mp4%3Fhash%3DAgADXg",img:"https://i.imgur.com/Mz8duur.jpeg"},
  {id:"thunderbolts*",title:"ת'אנדרבולטס*",year:2025,src:"https://xstreamx.films365.org/movie/43c9266f-11da-4fd6-be37-9d6d299646a9/Thunderbolts*",img:"https://i.imgur.com/X84xvHT.jpeg",subtitles: [
      { label:"עברית",src:"/subs/Thunderbolts*/Hebrew.vtt",lang:"he"},
      { label:"אנגלית",src:"/subs/Thunderbolts*/English.vtt",lang:"en"}
    ]
  },
   {id:"sinners",title:"חוטאים",year:2025,src:"https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F167189%2F%25D7%2597%25D7%2595%25D7%2598%25D7%2590%25D7%2599%25D7%259D%2B2025%2B1080p%2BWEB-DL%2B%25F0%259D%2590%2581%25F0%259D%2590%258E%25F0%259D%2590%2592%25F0%259D%2590%2592.mp4%3Fhash%3DAgADWR",img:"https://i.imgur.com/qdbYgzM.jpeg"},
  {id:"me_before_you",title:"ללכת בדרכך",year:2016,src:"https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F172973%2F1080p%2BBluRay%2B2016%2B%25D7%2596%25D7%2599%25D7%25A8%25D7%2594%2B%25D7%259E%25D7%2593%25D7%2599%25D7%2594%2B%25D7%259C%25D7%259C%25D7%259B%25D7%25AA%2B%25D7%2591%25D7%2593%25D7%25A8%25D7%259B%25D7%259A.mp4%3Fhash%3DAgAD3w",img:"https://i.imgur.com/vfdhodJ.jpeg"}
];

const israeliMovies = [
  {id:"full_speed",title:"פול ספיד",year:2021,src:"https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F165528%2F1080p%2BWEB-DL%2B2021%2B%25D7%2596%25D7%2599%25D7%25A8%25D7%2594%2B%25D7%259E%25D7%2593%25D7%2599%25D7%2594%2B%25D7%25A4%25D7%2595%25D7%259C%2B%25D7%25A1%25D7%25A4%25D7%2599%25D7%2593.mp4%3Fhash%3DAgADqR",img:"https://i.imgur.com/jXQKZmw.jpeg"}
];

// סדרות
const dubbedSeries = [
id: "jurassic_world_camp_cretaceous",
  title: "עולם היורה: מחנה הקרטיקון",
  year: 2020,
  img: "https://i.imgur.com/1srs35S.jpeg",
  episodesTotal: 37,
  isSeries: true,
  seasons: [
    {
      name: "עונה 1",
      episodes: [
        {title: "פרק 1", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F165562%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A21_%25D7%25A41.mp4%3Fhash%3DAgAD3w"},
        {title: "פרק 2", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169343%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A21_%25D7%25A42.mp4%3Fhash%3DAgAD4A"},
        {title: "פרק 3", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169363%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A21_%25D7%25A43.mp4%3Fhash%3DAgAD4g"},
        {title: "פרק 4", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169371%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A21_%25D7%25A44.mp4%3Fhash%3DAgAD4Q"},
        {title: "פרק 5", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169375%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A21_%25D7%25A45.mp4%3Fhash%3DAgAD4w"},
        {title: "פרק 6", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169431%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A21_%25D7%25A46.mp4%3Fhash%3DAgAD5A"},
        {title: "פרק 7", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169437%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A21_%25D7%25A47.mp4%3Fhash%3DAgAD5g"},
        {title: "פרק 8", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169439%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A21_%25D7%25A48.mp4%3Fhash%3DAgAD5Q"}
      ]
    },
    {
      name: "עונה 2",
      episodes: [
        {title: "פרק 1", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169845%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A22_%25D7%25A41.mp4%3Fhash%3DAgAD5w"},
        {title: "פרק 2", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169864%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A22_%25D7%25A42.mp4%3Fhash%3DAgAD6A"},
        {title: "פרק 3", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169866%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A22_%25D7%25A43.mp4%3Fhash%3DAgAD6Q"},
        {title: "פרק 4", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169868%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A22_%25D7%25A44.mp4%3Fhash%3DAgAD6g"},
        {title: "פרק 5", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169870%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A22_%25D7%25A45.mp4%3Fhash%3DAgAD7A"},
        {title: "פרק 6", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169872%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A22_%25D7%25A46.mp4%3Fhash%3DAgAD7Q"},
        {title: "פרק 7", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169874%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A22_%25D7%25A47.mp4%3Fhash%3DAgAD7g"},
        {title: "פרק 8", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169878%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A22_%25D7%25A48.mp4%3Fhash%3DAgAD6w"}
      ]
    },
    {
      name: "עונה 3",
      episodes: [
        {title: "פרק 1", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169912%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A23_%25D7%25A41.mp4%3Fhash%3DAgAD7w"},
        {title: "פרק 2", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169913%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A23_%25D7%25A42.mp4%3Fhash%3DAgAD8Q"},
        {title: "פרק 3", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169920%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A23_%25D7%25A43.mp4%3Fhash%3DAgAD8A"},
        {title: "פרק 4", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169921%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A23_%25D7%25A44.mp4%3Fhash%3DAgAD8g"},
        {title: "פרק 5", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169924%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A23_%25D7%25A45.mp4%3Fhash%3DAgAD8w"},
        {title: "פרק 6", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169925%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A23_%25D7%25A46.mp4%3Fhash%3DAgAD9A"},
        {title: "פרק 7", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169928%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A23_%25D7%25A47.mp4%3Fhash%3DAgAD9g"},
        {title: "פרק 8", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169929%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A23_%25D7%25A48.mp4%3Fhash%3DAgAD9Q"},
        {title: "פרק 9", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169931%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A23_%25D7%25A49.mp4%3Fhash%3DAgAD-A"},
        {title: "פרק 10", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169934%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A23_%25D7%25A410.mp4%3Fhash%3DAgAD9w"}
      ]
    },
    {
      name: "עונה 4",
      episodes: [
        {title: "פרק 1", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169944%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A24_%25D7%25A41.mp4%3Fhash%3DAgAD_A"},
        {title: "פרק 2", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169945%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A24_%25D7%25A42.mp4%3Fhash%3DAgAD-w"},
        {title: "פרק 3", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169957%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A24_%25D7%25A43.mp4%3Fhash%3DAgAD-g"},
        {title: "פרק 4", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169952%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A24_%25D7%25A44.mp4%3Fhash%3DAgAD-Q"},
        {title: "פרק 5", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169948%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A24_%25D7%25A45.mp4%3Fhash%3DAgAEDw"},
        {title: "פרק 6", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169949%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A24_%25D7%25A46.mp4%3Fhash%3DAgADAQ"},
        {title: "פרק 7", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169953%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A24_%25D7%25A47.mp4%3Fhash%3DAgADAg"},
        {title: "פרק 8", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169955%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A24_%25D7%25A48.mp4%3Fhash%3DAgADAw"},
        {title: "פרק 9", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169956%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A24_%25D7%25A49.mp4%3Fhash%3DAgADBA"},
        {title: "פרק 10", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169960%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A24_%25D7%25A410.mp4%3Fhash%3DAgADBg"},
        {title: "פרק 11", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F169963%2F%25D7%259E_T_M_%25D7%25A2%25D7%2595%25D7%259C%25D7%259D_%25D7%2594%25D7%2599%25D7%2595%25D7%25A8%25D7%2594_%25D7%259E%25D7%2597%25D7%25A0%25D7%2594_%25D7%2594%25D7%25A7%25D7%25A8%25D7%2598%25D7%2599%25D7%25A7%25D7%2595%25D7%259F_%25D7%259E%25D7%2593%25D7%2595%25D7%2591%25D7%2591_%25D7%25A24_%25D7%25A411.mp4%3Fhash%3DAgADBQ"}
       ]
     }
   ]
 }
];

const subtitledSeries = [
  {
    id: "ahsoka",
    title: "אסוקה",
    year: 2023,
    img: "https://i.imgur.com/K33GYDG.jpeg",
    episodesTotal: 8,
    isSeries: true,
    seasons: [
      {
        name: "עונה 1",
        episodes: [
          {title: "פרק 1", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F193404%2F%25D7%2590%25D7%25A1%25D7%2595%25D7%25A7%25D7%2594%2B%25D7%25A21%2B%25D7%25A41%2B1080P%2B%25D7%25A2%2522%25D7%2599%2B%25D7%2599%25D7%2594%25D7%2595%25D7%2593%25D7%2594%2B%25D7%2591%25D7%259F%2B%25D7%2592%25D7%2591%25D7%2599%25D7%25A8.mp4%3Fhash%3DAgADfQ"},
          {title: "פרק 2", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F193391%2F%25D7%2590%25D7%25A1%25D7%2595%25D7%25A7%25D7%2594%2B%25D7%25A21%2B%25D7%25A42%2B1080P%2B%25D7%25A2%2522%25D7%2599%2B%25D7%2599%25D7%2594%25D7%2595%25D7%2593%25D7%2594%2B%25D7%2591%25D7%259F%2B%25D7%2592%25D7%2591%25D7%2599%25D7%25A8.mp4%3Fhash%3DAgADmQ"},
          {title: "פרק 3", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F193399%2F%25D7%2590%25D7%25A1%25D7%2595%25D7%25A7%25D7%2594_%25D7%25A21_%25D7%25A43_1080P_%25D7%25A2%2522%25D7%2599_%25D7%2599%25D7%2594%25D7%2595%25D7%2593%25D7%2594_%25D7%2591%25D7%259F_%25D7%2592%25D7%2591%25D7%2599%25D7%25A8_.mp4%3Fhash%3DAgADzx"},
          {title: "פרק 4", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F193392%2F%25D7%2590%25D7%25A1%25D7%2595%25D7%25A7%25D7%2594%2B%25D7%25A21%2B%25D7%25A44%2B1080P%2B%25D7%25A2%2522%25D7%2599%2B%25D7%2599%25D7%2594%25D7%2595%25D7%2593%25D7%2594%2B%25D7%2591%25D7%259F%2B%25D7%2592%25D7%2591%25D7%2599%25D7%25A8.mp4%3Fhash%3DAgAD5w"},
          {title: "פרק 5", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F193395%2F%25D7%2590%25D7%25A1%25D7%2595%25D7%25A7%25D7%2594%2B%25D7%25A21%2B%25D7%25A45%2B1080P%2B%25D7%25A2%2522%25D7%2599%2B%25D7%2599%25D7%2594%25D7%2595%25D7%2593%25D7%2594%2B%25D7%2591%25D7%259F%2B%25D7%2592%25D7%2591%25D7%2599%25D7%25A8.mp4%3Fhash%3DAgADIh"},
          {title: "פרק 6", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F193396%2F%25D7%2590%25D7%25A1%25D7%2595%25D7%25A7%25D7%2594%2B%25D7%25A21%2B%25D7%25A46%2B1080P%2B%25D7%25A2%2522%25D7%2599%2B%25D7%2599%25D7%2594%25D7%2595%25D7%2593%25D7%2594%2B%25D7%2591%25D7%259F%2B%25D7%2592%25D7%2591%25D7%2599%25D7%25A8.mp4%3Fhash%3DAgADJR"},
          {title: "פרק 7", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F193400%2F%25D7%2590%25D7%25A1%25D7%2595%25D7%25A7%25D7%2594%2B%25D7%25A21%2B%25D7%25A47%2B1080P%2B%25D7%25A2%2522%25D7%2599%2B%25D7%2599%25D7%2594%25D7%2595%25D7%2593%25D7%2594%2B%25D7%2591%25D7%259F%2B%25D7%2592%25D7%2591%25D7%2599%25D7%25A8.mp4%3Fhash%3DAgADjh"},
          {title: "פרק 8", src: "https://zilomedia.yaarmiler20.workers.dev/?url=https%3A%2F%2Ftj.tbnbotsnetwork.workers.dev%2F193402%2F%25D7%2590%25D7%25A1%25D7%2595%25D7%25A7%25D7%2594%2B%25D7%25A21%2B%25D7%25A48%2B1080P%2B%25D7%25A2%2522%25D7%2599%2B%25D7%2599%25D7%2594%25D7%2595%25D7%2593%25D7%2594%2B%25D7%2591%25D7%259F%2B%25D7%2592%25D7%2591%25D7%2599%25D7%25A8.mp4%3Fhash%3DAgADsA"}
        ]
      }
    ]
  }
];

const israeliSeries = [

];

// ערוצים חיים
const channels = [
  // דוג': {title:"ערוץ 12", img:"...", src:"..."}
];

// --- מיון לפי א"ב ---
let fullDubbedMovies = [...dubbedMovies].sort((a, b) => a.title.localeCompare(b.title, 'he'));
let fullSubtitledMovies = [...subtitledMovies].sort((a, b) => a.title.localeCompare(b.title, 'he'));
let fullIsraeliMovies = [...israeliMovies].sort((a, b) => a.title.localeCompare(b.title, 'he'));
let fullDubbedSeries = [...dubbedSeries].sort((a, b) => a.title.localeCompare(b.title, 'he'));
let fullSubtitledSeries = [...subtitledSeries].sort((a, b) => a.title.localeCompare(b.title, 'he'));
let fullIsraeliSeries = [...israeliSeries].sort((a, b) => a.title.localeCompare(b.title, 'he'));

// --- רנדרינג אוניברסלי לסרטים/סדרות/ערוצים ---
function renderContent(list, containerId, type) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  list.forEach((item) => {
    const div = document.createElement("div");
    div.className = type;
    div.tabIndex = 0;
    if (type === "channel") {
      div.innerHTML = `<div class="image-container"><img src="${item.img}" alt="${item.title}" /></div>
        <p>${item.title}</p>`;
      div.onclick = () => playChannel(item);
    } else {
      div.innerHTML = `
        <div class="image-container">
          <img src="${item.img}" alt="${item.title}" />
          ${item.isSeries && item.episodesTotal ? `<span class="episodes-badge">${item.episodesTotal}</span>` : ""}
        </div>
        <p>${item.title}</p>
        <div class="year">${item.year}</div>
      `;
      div.onclick = () => {
        if (item.isSeries && item.seasons) {
          openSeriesModal(item);
        } else if (item.src) {
          playMovie(item);
        }
      };
    }
    container.appendChild(div);
  });
}

// --- רנדרינג ראשוני של כל הקטגוריות ---
function renderAll() {
  renderContent(fullDubbedMovies, "movies-dubbed-list", "movie");
  renderContent(fullSubtitledMovies, "movies-subtitled-list", "movie");
  renderContent(fullIsraeliMovies, "movies-israeli-list", "movie");
  renderContent(fullDubbedSeries, "series-dubbed-list", "series");
  renderContent(fullSubtitledSeries, "series-subtitled-list", "series");
  renderContent(fullIsraeliSeries, "series-israeli-list", "series");
  renderContent(channels, "channels-list", "channel");
}

// --- חיפוש אוניברסלי ---
document.getElementById("search").addEventListener("input", function() {
  const val = this.value.trim().toLowerCase();
  function filter(list) {
    return list.filter(m => m.title.toLowerCase().includes(val));
  }
  renderContent(val ? filter(fullDubbedMovies) : fullDubbedMovies, "movies-dubbed-list", "movie");
  renderContent(val ? filter(fullSubtitledMovies) : fullSubtitledMovies, "movies-subtitled-list", "movie");
  renderContent(val ? filter(fullIsraeliMovies) : fullIsraeliMovies, "movies-israeli-list", "movie");
  renderContent(val ? filter(fullDubbedSeries) : fullDubbedSeries, "series-dubbed-list", "series");
  renderContent(val ? filter(fullSubtitledSeries) : fullSubtitledSeries, "series-subtitled-list", "series");
  renderContent(val ? filter(fullIsraeliSeries) : fullIsraeliSeries, "series-israeli-list", "series");
  renderContent(val ? filter(channels) : channels, "channels-list", "channel");
});

// --- ניווט קטגוריות ---
document.querySelectorAll('#main-nav button').forEach(btn => {
  btn.onclick = function() {
    document.querySelectorAll('#main-nav button').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    document.querySelectorAll('.category-section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(this.dataset.section).classList.add('active');
  };
});

// --- אתחול ראשוני ---
document.addEventListener('DOMContentLoaded', function() {
  renderAll();
  document.querySelector('#main-nav button').click();
  var loaderExitBtn = document.getElementById('loader-exit-btn');
  if (loaderExitBtn) loaderExitBtn.onclick = closePlayer;
});

// --- נגן ווידאו, סדרות, כתוביות, שמירת התקדמות ---
// (הקוד שלך כפי שהוא, כמעט ללא שינוי!)

// --- סדרות (מודל עונות ופרקים) ---
const modalBg = document.getElementById('series-modal-bg');
const modal = document.getElementById('series-modal');
const modalTitle = document.getElementById('series-title');
const modalSeasonRow = modal.querySelector('.season-row');
const modalEpisodesList = modal.querySelector('.episodes-list');
let modalSeriesData = null;
let modalSeasonIdx = 0;

let currentSeriesEpisodes = null;
let currentEpisodeIdx = null;

function openSeriesModal(seriesData){
  modalSeriesData = seriesData;
  modalSeasonIdx = 0;
  modalTitle.textContent = seriesData.title;
  renderSeasons(seriesData);
  renderEpisodes(seriesData, 0);
  modalBg.classList.add("active");
}
function closeSeriesModal(){
  modalBg.classList.remove("active");
  modalSeriesData = null;
  modalSeasonIdx = 0;
}
function renderSeasons(seriesData){
  modalSeasonRow.innerHTML = "";
  seriesData.seasons.forEach((season, i) => {
    const btn = document.createElement("button");
    btn.className = "season-btn" + (i===modalSeasonIdx ? " selected" : "");
    btn.textContent = season.name || `עונה ${i+1}`;
    btn.tabIndex = 0;
    btn.onclick = ()=>{
      modalSeasonIdx = i;
      renderSeasons(seriesData);
      renderEpisodes(seriesData, i);
    };
    modalSeasonRow.appendChild(btn);
  });
}
function renderEpisodes(seriesData, seasonIdx){
  modalEpisodesList.innerHTML = "";
  const season = seriesData.seasons[seasonIdx];
  currentSeriesEpisodes = season.episodes.map((ep, epIdx) => ({
    ...ep,
    id: seriesData.id + "_s" + (seasonIdx+1) + "_e" + (epIdx+1),
    title: `${seriesData.title} - ${season.name} - ${ep.title}`,
    src: ep.src,
    img: seriesData.img,
    year: seriesData.year,
    subtitles: ep.subtitles || []
  }));
  season.episodes.forEach((ep, epIdx) => {
    const btn = document.createElement("button");
    btn.className = "episode-btn";
    btn.textContent = ep.title || `פרק ${epIdx+1}`;
    btn.tabIndex = 0;
    btn.onclick = ()=>{
      closeSeriesModal();
      if (ep.src) {
        currentEpisodeIdx = epIdx;
        playMovie(currentSeriesEpisodes[epIdx]);
        updateEpisodeNavButtons();
      } else {
        alert("קישור לפרק לא זמין.");
      }
    };
    modalEpisodesList.appendChild(btn);
  });
}
modalBg.addEventListener("mousedown", e=>{
  if(e.target===modalBg) closeSeriesModal();
});

// --- נגן וידאו מתקדם ---
const playerContainer = document.getElementById("player-container");
const videoPlayer = document.getElementById("video-player");
const loader = document.getElementById("loader");
const customControls = document.getElementById("custom-controls");
const nowPlayingTitle = document.getElementById("now-playing-title");
const playpauseBtn = document.getElementById("playpause-btn");
const playpauseIcon = document.getElementById("playpause-icon");
const rewindBtn = document.getElementById("rewind-btn");
const forwardBtn = document.getElementById("forward-btn");
const fullscreenBtn = document.getElementById("fullscreen-btn");
const progressBar = document.getElementById("progress-bar");
const currentTimeSpan = document.getElementById("current-time");
const durationSpan = document.getElementById("duration");
const exitBtn = document.getElementById("exit-btn");
const prevEpisodeBtn = document.getElementById('prev-episode-btn');
const nextEpisodeBtn = document.getElementById('next-episode-btn');

function updateEpisodeNavButtons() {
  if (currentSeriesEpisodes && currentSeriesEpisodes.length > 1 && currentEpisodeIdx !== null) {
    prevEpisodeBtn.style.display = (currentEpisodeIdx > 0) ? 'inline-flex' : 'none';
    nextEpisodeBtn.style.display = (currentEpisodeIdx < currentSeriesEpisodes.length - 1) ? 'inline-flex' : 'none';
  } else {
    prevEpisodeBtn.style.display = 'none';
    nextEpisodeBtn.style.display = 'none';
  }
}
prevEpisodeBtn.onclick = function() {
  if (currentSeriesEpisodes && currentEpisodeIdx > 0) {
    currentEpisodeIdx--;
    playMovie(currentSeriesEpisodes[currentEpisodeIdx]);
    updateEpisodeNavButtons();
  }
};
nextEpisodeBtn.onclick = function() {
  if (currentSeriesEpisodes && currentEpisodeIdx < currentSeriesEpisodes.length - 1) {
    currentEpisodeIdx++;
    playMovie(currentSeriesEpisodes[currentEpisodeIdx]);
    updateEpisodeNavButtons();
  }
};

let currentMovie = null;
let seeking = false;
let videoLoaded = false;
let hideControlsTimer = null;
let playerIsOpen = false;

function showVideoAndControls() {
  if (videoLoaded) return;
  loader.style.display = "none";
  videoPlayer.style.display = "block";
  customControls.style.display = "flex";
  customControls.classList.remove("hide");
  nowPlayingTitle.style.display = "block";
  updatePlayPauseIcon();
  updateProgressBar();
  durationSpan.textContent = formatTime(videoPlayer.duration);
  videoLoaded = true;
  videoPlayer.play();
  startHideControlsTimer();
}
["canplay","loadeddata","playing","loadedmetadata"].forEach(event=>{
  videoPlayer.addEventListener(event, showVideoAndControls);
});
async function playMovie(movie) {
  if (!movie || !movie.src) {
    alert("לא נמצא קישור וידאו. אנא נסה סרט אחר.");
    return;
  }
  addSubtitlesToVideo(movie.subtitles);
  updateSubtitleMenu();
  currentMovie = movie;
  if (currentSeriesEpisodes && movie && movie.id) {
    const idx = currentSeriesEpisodes.findIndex(ep => ep.id === movie.id);
    if (idx !== -1) currentEpisodeIdx = idx;
  } else {
    currentSeriesEpisodes = null;
    currentEpisodeIdx = null;
  }
  playerContainer.style.display = "flex";
  loader.style.display = "block";
  videoPlayer.style.display = "none";
  customControls.style.display = "none";
  customControls.classList.remove("hide");
  nowPlayingTitle.textContent = movie.title || '';
  videoPlayer.src = "";
  videoPlayer.removeAttribute('controls');
  videoLoaded = false;
  document.body.style.overflow = "hidden";
  playerIsOpen = true;
  setTimeout(async () => {
    videoPlayer.src = movie.src;
    videoPlayer.load();
    videoPlayer.focus();
    videoPlayer.onloadedmetadata = async function() {
      updateSubtitleMenu();
      let lastPos = await getProgressForUser(movie.id);
      if ((!lastPos || isNaN(lastPos)) && localStorage.getItem("zilo_lastpos_" + movie.id)) {
        lastPos = localStorage.getItem("zilo_lastpos_" + movie.id);
      }
      if (lastPos && !isNaN(lastPos) && videoPlayer.duration > 0) {
        if (parseInt(lastPos,10) < videoPlayer.duration-10) {
          videoPlayer.currentTime = parseInt(lastPos, 10);
        }
      }
    };
  }, 50);
  updateEpisodeNavButtons();
}
function playChannel(channel) {
  playMovie({ ...channel, id: channel.title, title: channel.title, isSeries: false, src: channel.src, img: channel.img, year: "" });
}
function closePlayer() {
  playerContainer.style.display = "none";
  videoPlayer.pause();
  videoPlayer.src = "";
  document.body.style.overflow = "";
  customControls.style.display = "none";
  loader.style.display = "none";
  videoPlayer.style.display = "none";
  videoLoaded = false;
  playerIsOpen = false;
  nowPlayingTitle.style.display = "none";
  clearTimeout(hideControlsTimer);
  if (document.fullscreenElement) {
    document.exitFullscreen();
  }
  currentSeriesEpisodes = null;
  currentEpisodeIdx = null;
  updateEpisodeNavButtons();
}
playpauseBtn.onclick = function() {
  if (videoPlayer.paused || videoPlayer.ended) {
    videoPlayer.play();
  } else {
    videoPlayer.pause();
  }
  updatePlayPauseIcon();
  showControls();
};
rewindBtn.onclick = function() {
  videoPlayer.currentTime = Math.max(0, videoPlayer.currentTime - 10);
  showControls();
};
forwardBtn.onclick = function() {
  videoPlayer.currentTime = Math.min(videoPlayer.duration || 0, videoPlayer.currentTime + 10);
  showControls();
};
fullscreenBtn.onclick = function() {
  if (!document.fullscreenElement) {
    if (playerContainer.requestFullscreen) playerContainer.requestFullscreen();
  } else {
    if (document.exitFullscreen) document.exitFullscreen();
  }
  showControls();
};
function updateProgressBar() {
  if (videoPlayer.duration && !seeking) {
    progressBar.value = (videoPlayer.currentTime / videoPlayer.duration) * 100 || 0;
    currentTimeSpan.textContent = formatTime(videoPlayer.currentTime);
    durationSpan.textContent = formatTime(videoPlayer.duration);
  }
}
videoPlayer.addEventListener("timeupdate", updateProgressBar);
videoPlayer.addEventListener("loadedmetadata", function() {
  durationSpan.textContent = formatTime(videoPlayer.duration);
  updateProgressBar();
});
progressBar.addEventListener("input", function() {
  seeking = true;
  if (videoPlayer.duration) {
    const seekTo = (progressBar.value / 100) * videoPlayer.duration;
    currentTimeSpan.textContent = formatTime(seekTo);
  }
});
progressBar.addEventListener("change", function() {
  if (videoPlayer.duration) {
    videoPlayer.currentTime = (progressBar.value / 100) * videoPlayer.duration;
  }
  seeking = false;
});
progressBar.addEventListener("mousedown", function() { seeking = true; });
progressBar.addEventListener("mouseup", function() { seeking = false; showControls(); });
function formatTime(seconds) {
  seconds = Math.floor(seconds);
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) {
    return `${h}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
  } else {
    return `${m}:${s.toString().padStart(2,'0')}`;
  }
}
function updatePlayPauseIcon() {
  if (videoPlayer.paused || videoPlayer.ended) {
    playpauseIcon.innerHTML = '<polygon points="6,4 26,16 6,28" fill="#00BFFF"/>';
  } else {
    playpauseIcon.innerHTML =
      '<rect x="7" y="4" width="5" height="24" rx="2" fill="#00BFFF"/>' +
      '<rect x="18" y="4" width="5" height="24" rx="2" fill="#00BFFF"/>';
  }
}
videoPlayer.onplay = updatePlayPauseIcon;
videoPlayer.onpause = updatePlayPauseIcon;
function showControls() {
  customControls.classList.remove("hide");
  nowPlayingTitle.style.display = "block";
  playerContainer.classList.remove("hide-cursor");
  startHideControlsTimer();
}
function startHideControlsTimer() {
  clearTimeout(hideControlsTimer);
  hideControlsTimer = setTimeout(() => {
    customControls.classList.add("hide");
    nowPlayingTitle.style.display = "none";
    playerContainer.classList.add("hide-cursor");
  }, 5000);
}
["mousemove","mousedown","keydown","touchstart"].forEach(evt => {
  playerContainer.addEventListener(evt, showControls);
});
videoPlayer.addEventListener("click", showControls);
customControls.addEventListener("mousemove", showControls);

// --- שמירת התקדמות למשתמש ---
function saveProgressForUser(movieId, seconds) {
  const user = firebase.auth().currentUser;
  if (!user) return;
  db.collection("user_progress").doc(user.uid).set({
    [movieId]: seconds
  }, {merge:true})
  .then(() => {
    console.log(`Saved progress for ${movieId}: ${seconds} (user: ${user.uid})`);
  })
  .catch(error => {
    console.error("Error saving progress to Firestore:", error);
  });
}
async function getProgressForUser(movieId) {
  const user = firebase.auth().currentUser;
  if (!user) return null;
  const doc = await db.collection("user_progress").doc(user.uid).get();
  if (doc.exists && doc.data() && doc.data()[movieId] !== undefined) {
    return doc.data()[movieId];
  }
  return null;
}
exitBtn.onclick = function() {
  if (currentMovie && currentMovie.id && videoPlayer.duration) {
    const pos = Math.floor(videoPlayer.currentTime);
    localStorage.setItem("zilo_lastpos_" + currentMovie.id, pos);
    if (firebase.auth().currentUser) {
      saveProgressForUser(currentMovie.id, pos);
    }
  }
  closePlayer();
};
window.addEventListener('beforeunload', function() {
  if (currentMovie && currentMovie.id && videoPlayer.duration) {
    const pos = Math.floor(videoPlayer.currentTime);
    localStorage.setItem("zilo_lastpos_" + currentMovie.id, pos);
    if (firebase.auth().currentUser) {
      saveProgressForUser(currentMovie.id, pos);
    }
  }
});
videoPlayer.addEventListener('ended', function() {
  if (currentMovie && currentMovie.id) {
    localStorage.removeItem("zilo_lastpos_" + currentMovie.id);
  }
});

// --- כתוביות (כולל תפריט בחירה) ---
function clearSubtitles() {
  var videoPlayer = document.getElementById('video-player');
  Array.from(videoPlayer.querySelectorAll("track")).forEach(track => track.remove());
}
function addSubtitlesToVideo(subtitles) {
  var videoPlayer = document.getElementById('video-player');
  clearSubtitles();
  if (!subtitles || !Array.isArray(subtitles) || !subtitles.length) return;
  subtitles.forEach(function(sub, idx) {
    var track = document.createElement('track');
    track.kind = "subtitles";
    track.label = sub.label || sub.lang || ('כתוביות ' + (idx+1));
    track.srclang = sub.lang || "";
    track.src = sub.src;
    track.default = false;
    videoPlayer.appendChild(track);
  });
  setTimeout(updateSubtitleMenu, 200);
}
function updateSubtitleMenu() {
  const videoPlayer = document.getElementById('video-player');
  const subtitleBtn = document.getElementById('subtitle-btn');
  const subtitleMenu = document.getElementById('subtitle-menu');
  subtitleMenu.innerHTML = '';
  const tracks = Array.from(videoPlayer.textTracks);
  const offBtn = document.createElement('button');
  offBtn.textContent = 'ללא כתוביות';
  offBtn.onclick = function() {
    tracks.forEach(track=>track.mode="disabled");
    updateSubtitleMenu();
    subtitleMenu.style.display = "none";
  };
  if (!tracks.some(track=>track.mode==="showing")) offBtn.className = "selected";
  subtitleMenu.appendChild(offBtn);
  tracks.forEach((track, idx) => {
    const btn = document.createElement('button');
    btn.textContent = track.label || track.language || ('כתוביות '+(idx+1));
    btn.onclick = function() {
      tracks.forEach((t, i) => t.mode = (i===idx) ? "showing" : "disabled");
      updateSubtitleMenu();
      subtitleMenu.style.display = "none";
    };
    if (track.mode === "showing") btn.className = "selected";
    subtitleMenu.appendChild(btn);
  });
}
document.getElementById("subtitle-btn").addEventListener("click", function(e){
  const menu = document.getElementById("subtitle-menu");
  if(menu.style.display==="block") { menu.style.display="none"; return; }
  updateSubtitleMenu();
  menu.style.display="block";
  const rect = this.getBoundingClientRect();
  menu.style.right = (window.innerWidth - rect.right + 10) + "px";
  menu.style.bottom = (window.innerHeight - rect.top + 50) + "px";
});
window.addEventListener("click", function(e){
  if(!e.target.closest("#subtitle-btn") && !e.target.closest("#subtitle-menu")) {
    document.getElementById("subtitle-menu").style.display="none";
  }
});
