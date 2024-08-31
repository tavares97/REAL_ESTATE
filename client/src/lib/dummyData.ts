export type ListData = {
  id: number;
  title: string;
  img?: string;
  bedroom: number;
  bathroom: number;
  price: number;
  address: string;
  latitude: number;
  longitude: number;
};

export const listData: ListData[] = [
  {
    id: 1,
    title: "A Great Apartment Next to the Beach!",
    img: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bedroom: 2,
    bathroom: 1,
    price: 1000,
    address: "Praça 1º de Maio 1, Vialonga",
    latitude: 38.876854120314974,
    longitude: -9.082577310414559,
  },
  {
    id: 2,
    title: "An Awesome Apartment Near the Park! Almost too good to be true!",
    img: "https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bedroom: 3,
    bathroom: 2,
    price: 1500,
    address: "R. dos Lusíadas 18, 2625-012 Póvoa de Santa Iria",
    latitude: 38.85699234948274,
    longitude: -9.073716596494238,
  },
  {
    id: 3,
    title: "A New Apartment in the City!",
    img: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bedroom: 1,
    bathroom: 1,
    price: 800,
    address: "101 Baker Street, London",
    latitude: 53.4808,
    longitude: -2.2426,
  },
  {
    id: 4,
    title: "Great Location! Great Price! Great Apartment!",
    img: "https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bedroom: 2,
    bathroom: 1,
    price: 1000,
    address: "R. Amílcar Cabral, 2625-705 Vialonga",
    latitude: 38.87060288219415,
    longitude: -9.090688352772778,
  },
  {
    id: 5,
    title: "Apartment 5",
    img: "https://images.pexels.com/photos/276625/pexels-photo-276625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bedroom: 3,
    bathroom: 2,
    price: 1500,
    address: "R. Moreira Feyo 7, 2675-575 Odivelas",
    latitude: 38.79749962152809,
    longitude: -9.1953500318892,
  },
  {
    id: 6,
    title: "Apartment 6",
    img: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bedroom: 1,
    bathroom: 1,
    price: 800,
    address:
      "R. Mar da China Nº 1 Fração 3.1, Edifício Mar do Oriente, 1990-137 Lisboa",
    latitude: 38.77212426686175,
    longitude: -9.09616786252748,
  },
  {
    id: 7,
    title: "Apartment 7",
    img: "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bedroom: 2,
    bathroom: 1,
    price: 1000,
    address: "R. Octávio Pato 12-26, Lisboa",
    latitude: 38.778575753845246,
    longitude: -9.145199073005832,
  },
  {
    id: 8,
    title: "Apartment 8",
    img: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bedroom: 3,
    bathroom: 2,
    price: 1500,
    address: "R. Olival 50-56, Frielas",
    latitude: 38.82423704175282,
    longitude: -9.143098965644327,
  },
];

export interface singlePostData extends ListData {
  id: number;
  title: string;
  price: number;
  images: string[];
  bedroom: number;
  bathroom: number;
  size: number;
  latitude: number;
  longitude: number;
  city: string;
  address: string;
  school: string;
  description: string;
  bus: string;
  restaurant: string;
}

export const singlePostData: singlePostData = {
  id: 1,
  title: "Beautiful Apartment",
  price: 1200,
  images: [
    "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ],
  bedroom: 2,
  bathroom: 1,
  size: 861,
  latitude: 38.876854120314974,
  longitude: -9.082577310414559,
  city: "London",
  address: "1234 Broadway St",
  school: "250m away",
  bus: "100m away",
  restaurant: "50m away",
  description:
    "Future alike hill pull picture swim magic chain seed engineer nest outer raise bound easy poetry gain loud weigh me recognize farmer bare danger. actually put square leg vessels earth engine matter key cup indeed body film century shut place environment were stage vertical roof bottom lady function breeze darkness beside tin view local breathe carbon swam declared magnet escape has from pile apart route coffee storm someone hold space use ahead sheep jungle closely natural attached part top grain your grade trade corn salmon trouble new bend most teacher range anybody every seat fifteen eventually",
};

export const userData = {
  id: 1,
  name: "John Doe",
  email: "Xy0oI@example.com",
  img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
};
