import { Link, useParams } from "react-router-dom";
import React from "react";

export default function Item() {

  const itemsLR = [
    {
      id: "1",
      name: "Lord Of The Rings Spear Of Eomer",
      imageUrl: "1.jfif",
      price: 98.22,
      color: "Salmon",
      quantity: 1,
      detail: 'Éomer was a captain of the king’s cavalry, Marshal of the Mark, and one of Rohan’s mightiest warriors. He bravely fought alongside King Theoden against the forces of Mordor at the battle of Helm’s Deep and on the Pelennor Fields to protect the white city of Minas Tirith and the hope of all Middle-earth. When the Haradrim army attacked from atop their great beasts of war, the Mûmakil, Éomer led a charge against them. He took two of the beasts down with one throw of his mighty spear. This authentically detailed replica is a reproduction of the actual filming prop built by Weta Workshop and used in “The Lord Of The Rings” films presented by New Line Cinema. The 84” long spear is crafted of wood and reinforced polyresin cold cast steel, with precisely-molded details and coloring. It is presented with a polyresin wall display, sculpted in the horse iconography of Rohan, and includes a certificate of authenticity. The spear comes in two sections that are easy to assemble.'
    },
    {
      id: "2",
      name: "Lord Of The Rings Sword Of Théodred",
      imageUrl: "2.jfif",
      price: 104.02,
      color: "Salmon",
      quantity: 1,
      detail: 'The sword of Théodred, fallen son of King Théoden. Théodred ‘s sword was the mate to the sword of Éowyn, his cousin. It was virtually identical, except for its green enameling on the hilt and green leather grip. This authentically detailed sword replica is a reproduction of the actual filming prop sword crafted by Weta Workshop of New Zealand and used in THE LORD OF THE RINGS: THE TWO TOWERS™ film presented by New Line Cinema. This meticulously detailed sword, with an overall length of 36 1/2", features a solid metal guard and pommel with an antique brass plated finish and a tough TPU grip. The 30 1/8" false-edged blade is crafted of tempered stainless steel with a wide filler groove. Each sword is individually serial numbered and presented with a wood wall display and certificate of authenticity.'
    },
    {
      id: "3",
      name: "The Mace Of Sauron And Ring Red Eye Edition With War Banner",
      imageUrl: "3.jfif",
      price: 63.77,
      color: "Salmon",
      quantity: 1,
      detail: "A replica of the massive mace wielded by the Dark Lord Sauron in the prologue of The Lord of the Rings: The Fellowship of the Ring. When Sauron's forces battled the Last Alliance of Elves and Men on the slopes of Mount Doom, Sauron emerged on the battlefield wearing blackened steel armor. In one iron gauntlet he held a massive six-bladed, black iron war mace. On one finger he wore the source of his power, The One Ring. With every swing of this terrible weapon Sauron crushed his foes, sending intimidation and fear throughout the ranks of all who would stand against him. This replica of the actor scale prop used in the movie is crafted of reinforced fiberglass-resin with an aged iron finish. Close attention to detail is a top priority in every piece, down to the intaglio-etched surface and corroded metal coloring. The oversized One Ring worn by Sauron is also included, crafted in gold plated solid metal. Displays on a polystone wall mount (mounting hardware and instructions included)."
    },
    {
      id: "4",
      name: "Lord Of The Rings Helm Of King Theoden",
      imageUrl: "4.jfif",
      price: 274.02,
      color: "Salmon",
      quantity: 1,
      detail: 'Théoden’s armor and weapons were the finest in Rohan. His steel helm was ornately engraved and enameled, featuring a horse head crest. The surface was highly decorated with sun and horse motifs of bronze and copper. The leather neck guard was embossed with Rohirric designs. This authentically detailed replica is a reproduction of the actual filming prop built by Weta Workshop and used in “The Lord Of The Rings” films presented by New Line Cinema. The helm is crafted of reinforced polyresin and genuine leather, with precisely-molded details and coloring. It is presented with a polystone and wood display, sculpted in the shape of Théoden’s neck and shoulder armor. It includes a certificate of authenticity, and each piece is individually serial numbered on a metal shield.'
    },
    {
      id: "5",
      name: "LOTR™ - STING™ The Sword Of Frodo Baggins With Wall Plaque",
      imageUrl: "5.jfif",
      price: 78.50,
      color: "Salmon",
      quantity: 1,
      detail: "With over 100 million copies sold in over 40 languages, millions have grown up with The Lord of the Rings, the classic epic tale considered by millions to be the greatest fantasy-adventure story ever told. J.R.R. Tolkien's phenomenal epic trilogy chronicles the struggle between good and evil for possession of a magical ring. The book trilogy, named the most popular book of the 20th Century, has been presented in a series of feature films from New Line Cinema. Solid metal guard and pommel, antique metal finish. Plastic handle, Elven vine design on 420 stainless steel blade. Wood display plaque and certificate of authenticity. 22' overall. 15' blade."
    },
    {
      id: "6",
      name: "LOTR™ Officially Licensed Glamdring Sword Of Gandalf",
      imageUrl: "6.jfif",
      price: 85.20,
      color: "Salmon",
      quantity: 1,
      detail: 'With over 100 million copies sold in over 40 languages, millions have grown up with The Lord of the Rings, the classic epic tale considered by millions to be the greatest fantasy-adventure story ever told. J.R.R. Tolkiens phenomenal epic trilogy chronicles the struggle between good and evil for possession of a magical ring. The book trilogy, named the most popular book of the 20th Century, has been presented in a series of feature films from New Line Cinema. Solid metal guard and pommel, antique metal finish. Genuine leather-wrapped grip. 420 stainless steel blade, false-edged. Wood display plaque. Certificate of authenticity. 47 5/8" overall. 35 1/4" blade.'
    },
    {
      id: "7",
      name: "Sword Of The Witch King",
      imageUrl: "7.jfif",
      price: 91.60,
      color: "Salmon",
      quantity: 1,
      detail: 'With over 100 million copies sold in over 40 languages, millions have grown up with The Lord of the Rings, the classic epic tale considered by millions to be the greatest fantasy-adventure story ever told. J.R.R. Tolkiens phenomenal epic trilogy chronicles the struggle between good and evil for possession of a magical ring. The book trilogy, named the most popular book of the 20th Century, has been presented in a series of feature films from New Line Cinema. Solid metal cross guard and pommel, antique metal finish. Genuine leather-wrapped grip. 420 stainless steel blade, false-edged. Wood display plaque. Certificate of authenticity. 54 5/8" overall. 39 3/4" blade.'
    },
    {
      id: "8",
      name: "Sword Of Narsil",
      imageUrl: "8.jfif",
      price: 47.18,
      color: "Salmon",
      quantity: 1,
      detail: 'With over 100 million copies sold in over 40 languages, millions have grown up with The Lord of the Rings, the classic epic tale considered by millions to be the greatest fantasy-adventure story ever told. J.R.R. Tolkiens phenomenal epic trilogy chronicles the struggle between good and evil for possession of a magical ring. The book trilogy, named the most popular book of the 20th Century, has been presented in a series of feature films from New Line Cinema. Solid metal cross guard and pommel, antique silver plated finish. 24-K gold plated fittings. Genuine leather-wrapped grip. 420 stainless steel blade, false-edged. Wood display plaque. Certificate of authenticity. 52 7/8" overall. 40 5/8" blade.'
    },
    {
      id: "9",
      name: "Lord Of The Rings Ringwraith Sword",
      imageUrl: "9.jfif",
      price: 24.01,
      color: "Salmon",
      quantity: 1,
      detail: "Ringwraiths, also called Dark Riders or the Nazgul, are the shadow servants of Sauron. There are nine of them to represent the nine mortal kings that Sauron corrupted with his Ring of Power. They can sense when the Ring of Power is near and can see the Ringbearer even more clearly when he puts it on. The Ringwraith's sword was built by armorers of the dark land of Mordor, under the command of their evil master Sauron. This authentically detailed replica is a reproduction of the actual filming prop built by Weta Workshop and used in “The Lord Of The Rings” films presented by New Line Cinema. This massive sword features an authentic battle-worn solid metal crossguard and pommel, genuine leather-wrapped grips and a rat-tail tang construction. The 39 3/4” acid-etched, tempered 420 J2 stainless steel blade is false-edged and has a thickness of 1/4”. Included is a 10”x 13 7/8”x 3/4” wooden display plaque silk-screened with the mark of the Eye of Sauron, master of the Ringwraiths. Also includ"
    },
    {
      id: "10",
      name: "Officially Licensed Hadhafang Sword Of Arwen Evenstar",
      imageUrl: "10.jfif",
      price: 99.90,
      color: "Salmon",
      quantity: 1,
      detail: "With over 100 million copies sold in over 40 languages, millions have grown up with The Lord of the Rings, the classic epic tale considered by millions to be the greatest fantasy-adventure story ever told. J.R.R. Tolkien's phenomenal epic trilogy chronicles the struggle between good and evil for possession of a magical ring. The book trilogy, named the most popular book of the 20th Century, has been presented in a series of feature films from New Line Cinema. Solid metal pommel. Wooden handgrip, Elven vine design. 420 stainless steel blade, sharp-edged. Wooden display stand. Certificate of authenticity. 38 1/8' overall. 30' blade."
    },
    {
      id: "11",
      name: "The Lord Of The Rings Sword Of Strider",
      imageUrl: "11.jfif",
      price: 214.02,
      color: "Salmon",
      quantity: 1,
      detail: 'With over 100 million copies sold in over 40 languages, millions have grown up with The Lord of the Rings, the classic epic tale considered by millions to be the greatest fantasy-adventure story ever told. J.R.R. Tolkiens phenomenal epic trilogy chronicles the struggle between good and evil for possession of a magical ring. The book trilogy, named the most popular book of the 20th Century, has been presented in a series of feature films from New Line Cinema. Solid metal cross guard and pommel, antique metal finish. Genuine leather-wrapped grip. 420 stainless steel blade, false-edged. Wood display plaque and certificate of authenticity. 47 1/4" overall. 36" blade.'
    },
    {
      id: "12",
      name: "Sting Scabbard",
      imageUrl: "12.jfif",
      price: 324.02,
      color: "Salmon",
      quantity: 1,
      detail: "With over 100 million copies sold in over 40 languages, millions have grown up with The Lord of the Rings, the classic epic tale considered by millions to be the greatest fantasy-adventure story ever told. J.R.R. Tolkien's phenomenal epic trilogy chronicles the struggle between good and evil for possession of a magical ring. The book trilogy, named the most popular book of the 20th Century, has been presented in a series of feature films from New Line Cinema. Fits UC1264 and UC1424, each sold separately. Solid metal collar and tip, antique metal finish. Genuine leather wrap. Certificate of authenticity. 17 3/8' overall."
    },
  ];

  const { id } = useParams()

  const item = itemsLR.find(x => x.id === id);

  const OnAddToCart = (id) => {
    let cart = [];
    cart.push(id);
    localStorage.setItem("cart", cart);
  };

  return (
    <>
      <section class="text-gray-700 body-font mt-12 bg-transparent">
        <div class="container px-5 py-24 mx-auto rounded-lg">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={require(`./../../assets/LR_Swords/${item.imageUrl}`)} alt={item.imageUrl} />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{item.name}</h1>
              <div class="flex mb-4">
                <span class="flex items-center">
                  <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-orange-600" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-orange-600" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-orange-600" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-orange-600" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-orange-600" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span class="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  <a class="text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a class="ml-2 text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a class="ml-2 text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p class="leading-relaxed">{item.detail}</p>
              <div class="flex mt-10">
                <span class="title-font font-medium text-2xl text-gray-900">${item.price}</span>
                <Link onClick={() => OnAddToCart(item.id)} class="flex ml-auto text-white bg-orange-700 border-0 py-2 px-6 focus:outline-none hover:bg-orange-900 rounded" to="/cart">Buy</Link>
                <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
