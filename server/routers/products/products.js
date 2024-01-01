const products = [
  {
    id: "1",
    name: "Cinder",
    price: "100",
    image:
      "https://res.cloudinary.com/dpud9tn8q/image/upload/v1704107267/books/cxj4rrojj6o8ts2rsnuy.jpg",
  },
  {
    id: "2",
    name: "The Lightning Thief",
    price: "250",
    image:
      "https://res.cloudinary.com/dpud9tn8q/image/upload/v1704107267/books/dkz60gwbi1cuuqnmhsfw.jpg",
  },
  {
    id: "3",
    name: "Scarlet",
    price: "150",
    image:
      "https://res.cloudinary.com/dpud9tn8q/image/upload/v1704107268/books/om2aguw0uryjy0gvaohh.jpg",
  },
  {
    id: "4",
    name: "Cress",
    price: "225",
    image:
      "https://res.cloudinary.com/dpud9tn8q/image/upload/v1704107269/books/gdza2p9avjncerak6inb.jpg",
  },
  {
    id: "5",
    name: "The Sea of Monsters",
    price: "504.59",
    image:
      "https://res.cloudinary.com/dpud9tn8q/image/upload/v1704107268/books/aeusg2lns2ktofkwzsus.jpg",
  },
  {
    id: "6",
    name: "The Titan's Curse",
    price: "400",
    image:
      "https://res.cloudinary.com/dpud9tn8q/image/upload/v1704107269/books/iyf7v40cnmrilfip1wgd.jpg",
  },
  {
    id: "7",
    name: "Winter",
    price: "549",
    image:
      "https://res.cloudinary.com/dpud9tn8q/image/upload/v1704107269/books/mygskejgxtdzobs28sjo.jpg",
  },
  {
    id: "8",
    name: "Throne of Glass",
    price: "249",
    image:
      "https://res.cloudinary.com/dpud9tn8q/image/upload/v1704107269/books/fm0edhj46hucreragrjj.jpg",
  },
  {
    id: "9",
    name: "A Court of Thorns and Roses",
    price: "99",
    image:
      "https://res.cloudinary.com/dpud9tn8q/image/upload/v1704107270/books/bovbjrngcjdhl2l5bbq5.jpg",
  },
  {
    id: "10",
    name: "Ella Enchanted",
    price: "299",
    image:
      "https://res.cloudinary.com/dpud9tn8q/image/upload/v1704107270/books/zxwhqbxwdw854aketroa.jpg",
  },
  {
    id: "11",
    name: "Tales of Old: Greek Mythology",
    price: "79",
    image:
      "https://res.cloudinary.com/dpud9tn8q/image/upload/v1704107270/books/blkbehy3awg0hlngjik4.jpg",
  },
  {
    id: "12",
    name: "The Red Pyramid",
    price: "120",
    image:
      "https://res.cloudinary.com/dpud9tn8q/image/upload/v1704107270/books/umzyoom8q29dskep4i9o.jpg",
  },
  {
    id: "13",
    name: "The Mark of Athena",
    price: "300",
    image:
      "https://res.cloudinary.com/dpud9tn8q/image/upload/v1704107270/books/oi9bgylcnnigrpxggrlw.jpg",
  },
  {
    id: "14",
    name: "The Son of Neptune",
    price: "320",
    image:
      "https://res.cloudinary.com/dpud9tn8q/image/upload/v1704107269/books/ptrbhe4fy9p3yjs6ayey.jpg",
  },
  {
    id: "15",
    name: "The Goddess Test",
    price: "350",
    image:
      "https://res.cloudinary.com/dpud9tn8q/image/upload/v1704107268/books/ryukevbscjfzbjxeehze.jpg",
  },
  {
    id: "16",
    name: "Beastly",
    price: "250",
    image:
      "https://res.cloudinary.com/dpud9tn8q/image/upload/v1704107268/books/mihy4y9zs1bvhh5qfe8z.jpg",
  },
  {
    id: "17",
    name: "Harry Potter and the Sorcerer's Stone",
    price: "400",
    image:
      "https://res.cloudinary.com/dpud9tn8q/image/upload/v1704107269/books/zp1bl86y4t7on8mfmfhd.jpg",
  },
  {
    id: "18",
    name: "Harry Potter and the Deathly Hallows",
    price: "430",
    image:
      "https://res.cloudinary.com/dpud9tn8q/image/upload/v1704107269/books/rh3enoqm2bjdxycfyelt.jpg",
  },
  {
    id: "19",
    name: "Cruel Beauty",
    price: "450",
    image:
      "https://res.cloudinary.com/dpud9tn8q/image/upload/v1704107270/books/fdv8sgfc6laefqodb1bu.jpg",
  },
  {
    id: "20",
    name: "A Retelling of the Story of Beauty and the Beast",
    price: "1000",
    image:
      "https://res.cloudinary.com/dpud9tn8q/image/upload/v1704107270/books/dvmw0oejrga57yhnanju.jpg",
  },
  {
    id: "21",
    name: "Starcrossed",
    price: "500",
    image:
      "https://res.cloudinary.com/dpud9tn8q/image/upload/v1704107270/books/stqkfnq1ham6qu8oba80.jpg",
  },
  {
    id: "22",
    name: "The Lion, the Witch and the Wardrobe",
    price: "600",
    image:
      "https://res.cloudinary.com/dpud9tn8q/image/upload/v1704107270/books/ez0olnafkseqplkj7iky.jpg",
  },
  {
    id: "23",
    name: "Harry Potter and the Goblet of Fire",
    price: "700",
    image:
      "https://res.cloudinary.com/dpud9tn8q/image/upload/v1704107270/books/ljduemq0pldwnjrfprop.jpg",
  },
  {
    id: "24",
    name: "Goddess of Light",
    price: "400",
    image:
      "https://res.cloudinary.com/dpud9tn8q/image/upload/v1704107271/books/gxnh0pngk7hq2nxlyt2a.jpg",
  },
  {
    id: "25",
    name: "Radiant Darkness",
    price: "399",
    image:
      "https://res.cloudinary.com/dpud9tn8q/image/upload/v1704107271/books/t9zzm5lwpopji9xn8fqh.jpg",
  },
  {
    id: "26",
    name: "The Song of Achilles",
    price: "499",
    image:
      "https://res.cloudinary.com/dpud9tn8q/image/upload/v1704107271/books/q1ptqn4zbcpxetymvkwy.jpg",
  },
  {
    id: "27",
    name: "Harry Potter and the Order of the Phoenix",
    price: "899",
    image:
      "https://res.cloudinary.com/dpud9tn8q/image/upload/v1704107271/books/zwwzt4gvoqflvhfp4jom.jpg",
  },
  {
    id: "28",
    name: "Harry Potter and the Half-Blood Prince",
    price: "999",
    image:
      "https://res.cloudinary.com/dpud9tn8q/image/upload/v1704107271/books/glkurxji4d16s7eakjqa.jpg",
  },
  {
    id: "29",
    name: "Splintered",
    price: "299",
    image:
      "https://res.cloudinary.com/dpud9tn8q/image/upload/v1704107271/books/y29eydzxjmyyfhbvpj0w.jpg",
  },
  {
    id: "30",
    name: "Tiger Lily",
    price: "599",
    image:
      "https://res.cloudinary.com/dpud9tn8q/image/upload/v1704107271/books/yxfctwboicopccsc54ki.jpg",
  },
];

module.exports = products;
