import { DefaultSerializeable, Feedback as Feedback$1, Sound as Sound$1, Color as Color$1, CameraSettings, BaseProxy, BaseController, EventPayload, ModeBase, DataCaptureMode, DataCaptureContext, PrivateDataCaptureMode, DataCaptureOverlay, Brush as Brush$1, NativeCallerProvider } from 'scandit-capacitor-datacapture-core/dist/dts/core';

/**
 * Represents geographical regions associated with identification documents. This class is used to specify regions for various purposes, such as filtering captured documents or indicating where a document was issued. Regions include specific countries, broader areas and the generalized option “Any”.
 *
 * @since 7.0.0
 */
declare enum IdCaptureRegion {
    /**
     * Any Region.
     *
     * @since 7.0.0
     */
    Any = "any",
    /**
     * Any country contained in EU or Schengen Area, for simplicity this also includes the following states: {@link IdCaptureRegion.Andorra}, {@link IdCaptureRegion.Monaco}, {@link IdCaptureRegion.SanMarino}, {@link IdCaptureRegion.HolySee}. Note that this region does not include the {@link IdCaptureRegion.Uk}.
     *
     * @since 7.0.0
     */
    EuAndSchengen = "euAndSchengen",
    /**
     * Aruba.
     *
     * @since 7.0.0
     */
    Aruba = "aruba",
    /**
     * Afghanistan.
     *
     * @since 7.0.0
     */
    Afghanistan = "afghanistan",
    /**
     * Angola.
     *
     * @since 7.0.0
     */
    Angola = "angola",
    /**
     * Anguilla.
     *
     * @since 7.0.0
     */
    Anguilla = "anguilla",
    /**
     * Åland Islands.
     *
     * @since 7.0.0
     */
    AlandIslands = "alandIslands",
    /**
     * Albania.
     *
     * @since 7.0.0
     */
    Albania = "albania",
    /**
     * Andorra.
     *
     * @since 7.0.0
     */
    Andorra = "andorra",
    /**
     * United Arab Emirates.
     *
     * @since 7.0.0
     */
    Uae = "uae",
    /**
     * Argentina.
     *
     * @since 7.0.0
     */
    Argentina = "argentina",
    /**
     * Armenia.
     *
     * @since 7.0.0
     */
    Armenia = "armenia",
    /**
     * American Samoa.
     *
     * @since 7.0.0
     */
    AmericanSamoa = "americanSamoa",
    /**
     * Antarctica.
     *
     * @since 7.0.0
     */
    Antarctica = "antarctica",
    /**
     * French Southern Territories.
     *
     * @since 7.0.0
     */
    FrenchSouthernTerritories = "frenchSouthernTerritories",
    /**
     * Antigua and Barbuda.
     *
     * @since 7.0.0
     */
    AntiguaAndBarbuda = "antiguaAndBarbuda",
    /**
     * Australia.
     *
     * @since 7.0.0
     */
    Australia = "australia",
    /**
     * Austria.
     *
     * @since 7.0.0
     */
    Austria = "austria",
    /**
     * Azerbaijan.
     *
     * @since 7.0.0
     */
    Azerbaijan = "azerbaijan",
    /**
     * Burundi.
     *
     * @since 7.0.0
     */
    Burundi = "burundi",
    /**
     * Belgium.
     *
     * @since 7.0.0
     */
    Belgium = "belgium",
    /**
     * Benin.
     *
     * @since 7.0.0
     */
    Benin = "benin",
    /**
     * Bonaire, Sint Eustatius and Saba.
     *
     * @since 7.0.0
     */
    BonaireSintEustatiusAndSaba = "bonaireSintEustatiusAndSaba",
    /**
     * Burkina Faso.
     *
     * @since 7.0.0
     */
    BurkinaFaso = "burkinaFaso",
    /**
     * Bangladesh.
     *
     * @since 7.0.0
     */
    Bangladesh = "bangladesh",
    /**
     * Bulgaria.
     *
     * @since 7.0.0
     */
    Bulgaria = "bulgaria",
    /**
     * Bahrain.
     *
     * @since 7.0.0
     */
    Bahrain = "bahrain",
    /**
     * Bahamas.
     *
     * @since 7.0.0
     */
    Bahamas = "bahamas",
    /**
     * Bosnia and Herzegovina.
     *
     * @since 7.0.0
     */
    BosniaHerzegovina = "bosniaHerzegovina",
    /**
     * Saint Barthélemy.
     *
     * @since 7.0.0
     */
    SaintBarthelemy = "saintBarthelemy",
    /**
     * Belarus.
     *
     * @since 7.0.0
     */
    Belarus = "belarus",
    /**
     * Belize.
     *
     * @since 7.0.0
     */
    Belize = "belize",
    /**
     * Bermuda.
     *
     * @since 7.0.0
     */
    Bermuda = "bermuda",
    /**
     * Bolivia, Plurinational State of.
     *
     * @since 7.0.0
     */
    Bolivia = "bolivia",
    /**
     * Brazil.
     *
     * @since 7.0.0
     */
    Brazil = "brazil",
    /**
     * Barbados.
     *
     * @since 7.0.0
     */
    Barbados = "barbados",
    /**
     * Brunei Darussalam.
     *
     * @since 7.0.0
     */
    BruneiDarussalam = "bruneiDarussalam",
    /**
     * Bhutan.
     *
     * @since 7.0.0
     */
    Bhutan = "bhutan",
    /**
     * Bouvet Island.
     *
     * @since 7.0.0
     */
    BouvetIsland = "bouvetIsland",
    /**
     * Botswana.
     *
     * @since 7.0.0
     */
    Botswana = "botswana",
    /**
     * Central African Republic.
     *
     * @since 7.0.0
     */
    Car = "car",
    /**
     * Canada.
     *
     * @since 7.0.0
     */
    Canada = "canada",
    /**
     * Cocos (Keeling) Islands.
     *
     * @since 7.0.0
     */
    CocosIslands = "cocosIslands",
    /**
     * Switzerland.
     *
     * @since 7.0.0
     */
    Switzerland = "switzerland",
    /**
     * Chile.
     *
     * @since 7.0.0
     */
    Chile = "chile",
    /**
     * China.
     *
     * @since 7.0.0
     */
    China = "china",
    /**
     * Côte d’Ivoire.
     *
     * @since 7.0.0
     */
    CoteIvoire = "coteIvoire",
    /**
     * Cameroon.
     *
     * @since 7.0.0
     */
    Cameroon = "cameroon",
    /**
     * Democratic Republic of the Congo.
     *
     * @since 7.0.0
     */
    DemocraticRepublicOfCongo = "democraticRepublicOfCongo",
    /**
     * Congo.
     *
     * @since 7.0.0
     */
    Congo = "congo",
    /**
     * Cook Islands.
     *
     * @since 7.0.0
     */
    CookIslands = "cookIslands",
    /**
     * Colombia.
     *
     * @since 7.0.0
     */
    Colombia = "colombia",
    /**
     * Comoros.
     *
     * @since 7.0.0
     */
    Comoros = "comoros",
    /**
     * Cabo Verde.
     *
     * @since 7.0.0
     */
    CaboVerde = "caboVerde",
    /**
     * Costa Rica.
     *
     * @since 7.0.0
     */
    CostaRica = "costaRica",
    /**
     * Cuba.
     *
     * @since 7.0.0
     */
    Cuba = "cuba",
    /**
     * Curaçao.
     *
     * @since 7.0.0
     */
    Curacao = "curacao",
    /**
     * Christmas Island.
     *
     * @since 7.0.0
     */
    ChristmasIsland = "christmasIsland",
    /**
     * Cayman Islands.
     *
     * @since 7.0.0
     */
    CaymanIslands = "caymanIslands",
    /**
     * Cyprus.
     *
     * @since 7.0.0
     */
    Cyprus = "cyprus",
    /**
     * Czechia.
     *
     * @since 7.0.0
     */
    Czechia = "czechia",
    /**
     * Germany.
     *
     * @since 7.0.0
     */
    Germany = "germany",
    /**
     * Djibouti.
     *
     * @since 7.0.0
     */
    Djibouti = "djibouti",
    /**
     * Dominica.
     *
     * @since 7.0.0
     */
    Dominica = "dominica",
    /**
     * Denmark.
     *
     * @since 7.0.0
     */
    Denmark = "denmark",
    /**
     * Dominican Republic.
     *
     * @since 7.0.0
     */
    DominicanRepublic = "dominicanRepublic",
    /**
     * Algeria.
     *
     * @since 7.0.0
     */
    Algeria = "algeria",
    /**
     * Ecuador.
     *
     * @since 7.0.0
     */
    Ecuador = "ecuador",
    /**
     * Egypt.
     *
     * @since 7.0.0
     */
    Egypt = "egypt",
    /**
     * Eritrea.
     *
     * @since 7.0.0
     */
    Eritrea = "eritrea",
    /**
     * Western Sahara.
     *
     * @since 7.0.0
     */
    WesternSahara = "westernSahara",
    /**
     * Spain.
     *
     * @since 7.0.0
     */
    Spain = "spain",
    /**
     * Estonia.
     *
     * @since 7.0.0
     */
    Estonia = "estonia",
    /**
     * Ethiopia.
     *
     * @since 7.0.0
     */
    Ethiopia = "ethiopia",
    /**
     * Finland.
     *
     * @since 7.0.0
     */
    Finland = "finland",
    /**
     * Fiji.
     *
     * @since 7.0.0
     */
    Fiji = "fiji",
    /**
     * Falkland Islands (Malvinas).
     *
     * @since 7.0.0
     */
    FalklandIslands = "falklandIslands",
    /**
     * France.
     *
     * @since 7.0.0
     */
    France = "france",
    /**
     * Faroe Islands.
     *
     * @since 7.0.0
     */
    FaroeIslands = "faroeIslands",
    /**
     * Micronesia, Federated States of.
     *
     * @since 7.0.0
     */
    Micronesia = "micronesia",
    /**
     * Gabon.
     *
     * @since 7.0.0
     */
    Gabon = "gabon",
    /**
     * United Kingdom of Great Britain and Northern Ireland.
     *
     * @since 7.0.0
     */
    Uk = "uk",
    /**
     * Georgia.
     *
     * @since 7.0.0
     */
    Georgia = "georgia",
    /**
     * Guernsey.
     *
     * @since 7.0.0
     */
    Guernsey = "guernsey",
    /**
     * Ghana.
     *
     * @since 7.0.0
     */
    Ghana = "ghana",
    /**
     * Gibraltar.
     *
     * @since 7.0.0
     */
    Gibraltar = "gibraltar",
    /**
     * Guinea.
     *
     * @since 7.0.0
     */
    Guinea = "guinea",
    /**
     * Guadeloupe.
     *
     * @since 7.0.0
     */
    Guadeloupe = "guadeloupe",
    /**
     * Gambia.
     *
     * @since 7.0.0
     */
    Gambia = "gambia",
    /**
     * Guinea-Bissau.
     *
     * @since 7.0.0
     */
    GuineaBissau = "guineaBissau",
    /**
     * Equatorial Guinea.
     *
     * @since 7.0.0
     */
    EquatorialGuinea = "equatorialGuinea",
    /**
     * Greece.
     *
     * @since 7.0.0
     */
    Greece = "greece",
    /**
     * Grenada.
     *
     * @since 7.0.0
     */
    Grenada = "grenada",
    /**
     * Greenland.
     *
     * @since 7.0.0
     */
    Greenland = "greenland",
    /**
     * Guatemala.
     *
     * @since 7.0.0
     */
    Guatemala = "guatemala",
    /**
     * French Guiana.
     *
     * @since 7.0.0
     */
    FrenchGuiana = "frenchGuiana",
    /**
     * Guam.
     *
     * @since 7.0.0
     */
    Guam = "guam",
    /**
     * Guyana.
     *
     * @since 7.0.0
     */
    Guyana = "guyana",
    /**
     * Hong Kong.
     *
     * @since 7.0.0
     */
    HongKong = "hongKong",
    /**
     * Heard Island and McDonald Islands.
     *
     * @since 7.0.0
     */
    HeardIslandAndMcDonaldIslands = "heardIslandAndMcDonaldIslands",
    /**
     * Honduras.
     *
     * @since 7.0.0
     */
    Honduras = "honduras",
    /**
     * Croatia.
     *
     * @since 7.0.0
     */
    Croatia = "croatia",
    /**
     * Haiti.
     *
     * @since 7.0.0
     */
    Haiti = "haiti",
    /**
     * Hungary.
     *
     * @since 7.0.0
     */
    Hungary = "hungary",
    /**
     * Indonesia.
     *
     * @since 7.0.0
     */
    Indonesia = "indonesia",
    /**
     * Isle of Man.
     *
     * @since 7.0.0
     */
    IsleOfMan = "isleOfMan",
    /**
     * India.
     *
     * @since 7.0.0
     */
    India = "india",
    /**
     * British Indian Ocean Territory.
     *
     * @since 7.0.0
     */
    BritishIndianOceanTerritory = "britishIndianOceanTerritory",
    /**
     * Ireland.
     *
     * @since 7.0.0
     */
    Ireland = "ireland",
    /**
     * Iran, Islamic Republic of.
     *
     * @since 7.0.0
     */
    Iran = "iran",
    /**
     * Iraq.
     *
     * @since 7.0.0
     */
    Iraq = "iraq",
    /**
     * Iceland.
     *
     * @since 7.0.0
     */
    Iceland = "iceland",
    /**
     * Israel.
     *
     * @since 7.0.0
     */
    Israel = "israel",
    /**
     * Italy.
     *
     * @since 7.0.0
     */
    Italy = "italy",
    /**
     * Jamaica.
     *
     * @since 7.0.0
     */
    Jamaica = "jamaica",
    /**
     * Jersey.
     *
     * @since 7.0.0
     */
    Jersey = "jersey",
    /**
     * Jordan.
     *
     * @since 7.0.0
     */
    Jordan = "jordan",
    /**
     * Japan.
     *
     * @since 7.0.0
     */
    Japan = "japan",
    /**
     * Kazakhstan.
     *
     * @since 7.0.0
     */
    Kazakhstan = "kazakhstan",
    /**
     * Kenya.
     *
     * @since 7.0.0
     */
    Kenya = "kenya",
    /**
     * Kyrgyzstan.
     *
     * @since 7.0.0
     */
    Kyrgyzstan = "kyrgyzstan",
    /**
     * Cambodia.
     *
     * @since 7.0.0
     */
    Cambodia = "cambodia",
    /**
     * Kiribati.
     *
     * @since 7.0.0
     */
    Kiribati = "kiribati",
    /**
     * Saint Kitts and Nevis.
     *
     * @since 7.0.0
     */
    SaintKittsAndNevis = "saintKittsAndNevis",
    /**
     * Korea, Republic of.
     *
     * @since 7.0.0
     */
    SouthKorea = "southKorea",
    /**
     * Kuwait.
     *
     * @since 7.0.0
     */
    Kuwait = "kuwait",
    /**
     * Lao People’s Democratic Republic.
     *
     * @since 7.0.0
     */
    Lao = "lao",
    /**
     * Lebanon.
     *
     * @since 7.0.0
     */
    Lebanon = "lebanon",
    /**
     * Liberia.
     *
     * @since 7.0.0
     */
    Liberia = "liberia",
    /**
     * Libya.
     *
     * @since 7.0.0
     */
    Libya = "libya",
    /**
     * Saint Lucia.
     *
     * @since 7.0.0
     */
    SaintLucia = "saintLucia",
    /**
     * Liechtenstein.
     *
     * @since 7.0.0
     */
    Liechtenstein = "liechtenstein",
    /**
     * Sri Lanka.
     *
     * @since 7.0.0
     */
    SriLanka = "sriLanka",
    /**
     * Lesotho.
     *
     * @since 7.0.0
     */
    Lesotho = "lesotho",
    /**
     * Lithuania.
     *
     * @since 7.0.0
     */
    Lithuania = "lithuania",
    /**
     * Luxembourg.
     *
     * @since 7.0.0
     */
    Luxembourg = "luxembourg",
    /**
     * Latvia.
     *
     * @since 7.0.0
     */
    Latvia = "latvia",
    /**
     * Macao.
     *
     * @since 7.0.0
     */
    Macao = "macao",
    /**
     * Saint Martin (French part).
     *
     * @since 7.0.0
     */
    FrenchSaintMartin = "frenchSaintMartin",
    /**
     * Morocco.
     *
     * @since 7.0.0
     */
    Morocco = "morocco",
    /**
     * Monaco.
     *
     * @since 7.0.0
     */
    Monaco = "monaco",
    /**
     * Moldova, Republic of.
     *
     * @since 7.0.0
     */
    Moldova = "moldova",
    /**
     * Madagascar.
     *
     * @since 7.0.0
     */
    Madagascar = "madagascar",
    /**
     * Maldives.
     *
     * @since 7.0.0
     */
    Maldives = "maldives",
    /**
     * Mexico.
     *
     * @since 7.0.0
     */
    Mexico = "mexico",
    /**
     * Marshall Islands.
     *
     * @since 7.0.0
     */
    MarshallIslands = "marshallIslands",
    /**
     * North Macedonia.
     *
     * @since 7.0.0
     */
    NorthMacedonia = "northMacedonia",
    /**
     * Mali.
     *
     * @since 7.0.0
     */
    Mali = "mali",
    /**
     * Malta.
     *
     * @since 7.0.0
     */
    Malta = "malta",
    /**
     * Myanmar.
     *
     * @since 7.0.0
     */
    Myanmar = "myanmar",
    /**
     * Montenegro.
     *
     * @since 7.0.0
     */
    Montenegro = "montenegro",
    /**
     * Mongolia.
     *
     * @since 7.0.0
     */
    Mongolia = "mongolia",
    /**
     * Northern Mariana Islands.
     *
     * @since 7.0.0
     */
    NorthernMarianaIslands = "northernMarianaIslands",
    /**
     * Mozambique.
     *
     * @since 7.0.0
     */
    Mozambique = "mozambique",
    /**
     * Mauritania.
     *
     * @since 7.0.0
     */
    Mauritania = "mauritania",
    /**
     * Montserrat.
     *
     * @since 7.0.0
     */
    Montserrat = "montserrat",
    /**
     * Martinique.
     *
     * @since 7.0.0
     */
    Martinique = "martinique",
    /**
     * Mauritius.
     *
     * @since 7.0.0
     */
    Mauritius = "mauritius",
    /**
     * Malawi.
     *
     * @since 7.0.0
     */
    Malawi = "malawi",
    /**
     * Malaysia.
     *
     * @since 7.0.0
     */
    Malaysia = "malaysia",
    /**
     * Mayotte.
     *
     * @since 7.0.0
     */
    Mayotte = "mayotte",
    /**
     * Namibia.
     *
     * @since 7.0.0
     */
    Namibia = "namibia",
    /**
     * New Caledonia.
     *
     * @since 7.0.0
     */
    NewCaledonia = "newCaledonia",
    /**
     * Niger.
     *
     * @since 7.0.0
     */
    Niger = "niger",
    /**
     * Norfolk Island.
     *
     * @since 7.0.0
     */
    NorfolkIsland = "norfolkIsland",
    /**
     * Nigeria.
     *
     * @since 7.0.0
     */
    Nigeria = "nigeria",
    /**
     * Nicaragua.
     *
     * @since 7.0.0
     */
    Nicaragua = "nicaragua",
    /**
     * Niue.
     *
     * @since 7.0.0
     */
    Niue = "niue",
    /**
     * Kingdom of the Netherlands.
     *
     * @since 7.0.0
     */
    Netherlands = "netherlands",
    /**
     * Norway.
     *
     * @since 7.0.0
     */
    Norway = "norway",
    /**
     * Nepal.
     *
     * @since 7.0.0
     */
    Nepal = "nepal",
    /**
     * Nauru.
     *
     * @since 7.0.0
     */
    Nauru = "nauru",
    /**
     * New Zealand.
     *
     * @since 7.0.0
     */
    NewZealand = "newZealand",
    /**
     * Oman.
     *
     * @since 7.0.0
     */
    Oman = "oman",
    /**
     * Pakistan.
     *
     * @since 7.0.0
     */
    Pakistan = "pakistan",
    /**
     * Panama.
     *
     * @since 7.0.0
     */
    Panama = "panama",
    /**
     * Pitcairn.
     *
     * @since 7.0.0
     */
    Pitcairn = "pitcairn",
    /**
     * Peru.
     *
     * @since 7.0.0
     */
    Peru = "peru",
    /**
     * Philippines.
     *
     * @since 7.0.0
     */
    Philippines = "philippines",
    /**
     * Palau.
     *
     * @since 7.0.0
     */
    Palau = "palau",
    /**
     * Papua New Guinea.
     *
     * @since 7.0.0
     */
    PapuaNewGuinea = "papuaNewGuinea",
    /**
     * Poland.
     *
     * @since 7.0.0
     */
    Poland = "poland",
    /**
     * Puerto Rico.
     *
     * @since 7.0.0
     */
    PuertoRico = "puertoRico",
    /**
     * Korea, Democratic People’s Republic of.
     *
     * @since 7.0.0
     */
    NorthKorea = "northKorea",
    /**
     * Portugal.
     *
     * @since 7.0.0
     */
    Portugal = "portugal",
    /**
     * Paraguay.
     *
     * @since 7.0.0
     */
    Paraguay = "paraguay",
    /**
     * Palestine, State of.
     *
     * @since 7.0.0
     */
    Palestine = "palestine",
    /**
     * French Polynesia.
     *
     * @since 7.0.0
     */
    FrenchPolynesia = "frenchPolynesia",
    /**
     * Qatar.
     *
     * @since 7.0.0
     */
    Qatar = "qatar",
    /**
     * Réunion.
     *
     * @since 7.0.0
     */
    Reunion = "reunion",
    /**
     * Romania.
     *
     * @since 7.0.0
     */
    Romania = "romania",
    /**
     * Russian Federation.
     *
     * @since 7.0.0
     */
    Russia = "russia",
    /**
     * Rwanda.
     *
     * @since 7.0.0
     */
    Rwanda = "rwanda",
    /**
     * Saudi Arabia.
     *
     * @since 7.0.0
     */
    SaudiArabia = "saudiArabia",
    /**
     * Sudan.
     *
     * @since 7.0.0
     */
    Sudan = "sudan",
    /**
     * Senegal.
     *
     * @since 7.0.0
     */
    Senegal = "senegal",
    /**
     * Singapore.
     *
     * @since 7.0.0
     */
    Singapore = "singapore",
    /**
     * South Georgia and the South Sandwich Islands.
     *
     * @since 7.0.0
     */
    SouthGeorgiaAndTheSouthSandwichIslands = "southGeorgiaAndTheSouthSandwichIslands",
    /**
     * Saint Helena, Ascension and Tristan da Cunha.
     *
     * @since 7.0.0
     */
    SaintHelena = "saintHelena",
    /**
     * Svalbard and Jan Mayen.
     *
     * @since 7.0.0
     */
    SvalbardAndJanMayen = "svalbardAndJanMayen",
    /**
     * Solomon Islands.
     *
     * @since 7.0.0
     */
    SolomonIslands = "solomonIslands",
    /**
     * Sierra Leone.
     *
     * @since 7.0.0
     */
    SierraLeone = "sierraLeone",
    /**
     * El Salvador.
     *
     * @since 7.0.0
     */
    ElSalvador = "elSalvador",
    /**
     * San Marino.
     *
     * @since 7.0.0
     */
    SanMarino = "sanMarino",
    /**
     * Somalia.
     *
     * @since 7.0.0
     */
    Somalia = "somalia",
    /**
     * Saint Pierre and Miquelon.
     *
     * @since 7.0.0
     */
    SaintPierreAndMiquelon = "saintPierreAndMiquelon",
    /**
     * Serbia.
     *
     * @since 7.0.0
     */
    Serbia = "serbia",
    /**
     * South Sudan.
     *
     * @since 7.0.0
     */
    SouthSudan = "southSudan",
    /**
     * Sao Tome and Principe.
     *
     * @since 7.0.0
     */
    SaoTomeAndPrincipe = "saoTomeAndPrincipe",
    /**
     * Suriname.
     *
     * @since 7.0.0
     */
    Suriname = "suriname",
    /**
     * Slovakia.
     *
     * @since 7.0.0
     */
    Slovakia = "slovakia",
    /**
     * Slovenia.
     *
     * @since 7.0.0
     */
    Slovenia = "slovenia",
    /**
     * Sweden.
     *
     * @since 7.0.0
     */
    Sweden = "sweden",
    /**
     * Eswatini.
     *
     * @since 7.0.0
     */
    Eswatini = "eswatini",
    /**
     * Sint Maarten (Dutch part).
     *
     * @since 7.0.0
     */
    DutchSintMaarten = "dutchSintMaarten",
    /**
     * Seychelles.
     *
     * @since 7.0.0
     */
    Seychelles = "seychelles",
    /**
     * Syrian Arab Republic.
     *
     * @since 7.0.0
     */
    Syria = "syria",
    /**
     * Turks and Caicos Islands.
     *
     * @since 7.0.0
     */
    TurksAndCaicosIslands = "turksAndCaicosIslands",
    /**
     * Chad.
     *
     * @since 7.0.0
     */
    Chad = "chad",
    /**
     * Togo.
     *
     * @since 7.0.0
     */
    Togo = "togo",
    /**
     * Thailand.
     *
     * @since 7.0.0
     */
    Thailand = "thailand",
    /**
     * Tajikistan.
     *
     * @since 7.0.0
     */
    Tajikistan = "tajikistan",
    /**
     * Tokelau.
     *
     * @since 7.0.0
     */
    Tokelau = "tokelau",
    /**
     * Turkmenistan.
     *
     * @since 7.0.0
     */
    Turkmenistan = "turkmenistan",
    /**
     * Timor-Leste.
     *
     * @since 7.0.0
     */
    TimorLeste = "timorLeste",
    /**
     * Tonga.
     *
     * @since 7.0.0
     */
    Tonga = "tonga",
    /**
     * Trinidad and Tobago.
     *
     * @since 7.0.0
     */
    TrinidadAndTobago = "trinidadAndTobago",
    /**
     * Tunisia.
     *
     * @since 7.0.0
     */
    Tunisia = "tunisia",
    /**
     * Türkiye.
     *
     * @since 7.0.0
     */
    Turkey = "turkey",
    /**
     * Tuvalu.
     *
     * @since 7.0.0
     */
    Tuvalu = "tuvalu",
    /**
     * Taiwan, Province of China.
     *
     * @since 7.0.0
     */
    Taiwan = "taiwan",
    /**
     * Tanzania, United Republic of.
     *
     * @since 7.0.0
     */
    Tanzania = "tanzania",
    /**
     * Uganda.
     *
     * @since 7.0.0
     */
    Uganda = "uganda",
    /**
     * Ukraine.
     *
     * @since 7.0.0
     */
    Ukraine = "ukraine",
    /**
     * United States Minor Outlying Islands.
     *
     * @since 7.0.0
     */
    UsMinorOutlyingIslands = "usMinorOutlyingIslands",
    /**
     * Uruguay.
     *
     * @since 7.0.0
     */
    Uruguay = "uruguay",
    /**
     * United States of America.
     *
     * @since 7.0.0
     */
    Us = "us",
    /**
     * Uzbekistan.
     *
     * @since 7.0.0
     */
    Uzbekistan = "uzbekistan",
    /**
     * Holy See.
     *
     * @since 7.0.0
     */
    HolySee = "holySee",
    /**
     * Saint Vincent and the Grenadines.
     *
     * @since 7.0.0
     */
    SaintVincentAndTheGrenadines = "saintVincentAndTheGrenadines",
    /**
     * Venezuela (Bolivarian Republic of).
     *
     * @since 7.0.0
     */
    Venezuela = "venezuela",
    /**
     * Virgin Islands (British).
     *
     * @since 7.0.0
     */
    BritishVirginIslands = "britishVirginIslands",
    /**
     * Virgin Islands (U.S.).
     *
     * @since 7.0.0
     */
    UsVirginIslands = "usVirginIslands",
    /**
     * Viet Nam.
     *
     * @since 7.0.0
     */
    Vietnam = "vietnam",
    /**
     * Vanuatu.
     *
     * @since 7.0.0
     */
    Vanuatu = "vanuatu",
    /**
     * Wallis and Futuna.
     *
     * @since 7.0.0
     */
    WallisAndFutuna = "wallisAndFutuna",
    /**
     * Samoa.
     *
     * @since 7.0.0
     */
    Samoa = "samoa",
    /**
     * Kosovo.
     *
     * @since 7.0.0
     */
    Kosovo = "kosovo",
    /**
     * Yemen.
     *
     * @since 7.0.0
     */
    Yemen = "yemen",
    /**
     * South Africa.
     *
     * @since 7.0.0
     */
    SouthAfrica = "southAfrica",
    /**
     * Zambia.
     *
     * @since 7.0.0
     */
    Zambia = "zambia",
    /**
     * Zimbabwe.
     *
     * @since 7.0.0
     */
    Zimbabwe = "zimbabwe"
}

/**
 * An enumeration that identifies specific types of Region Specific documents. These documents are tailored to fulfill unique roles or comply with local regulations within a particular region or jurisdiction. Examples include the APEC Business Travel Card, China Exit-Entry Permit, and Germany eID. Each subtype helps differentiate these documents based on their purpose and regional usage.
 *
 * @since 7.0.0
 */
declare enum RegionSpecificSubtype {
    /**
     * US Border Crossing Card.
     *
     * @since 7.0.0
     */
    UsBorderCrossingCard = "usBorderCrossingCard",
    /**
     * China Exit Entry Permit.
     *
     * @since 7.0.0
     */
    ChinaExitEntryPermit = "chinaExitEntryPermit",
    /**
     * US Global Entry Card.
     *
     * @since 7.0.0
     */
    UsGlobalEntryCard = "usGlobalEntryCard",
    /**
     * China Mainland Travel Permit Taiwan.
     *
     * @since 7.0.0
     */
    ChinaMainlandTravelPermitTaiwan = "chinaMainlandTravelPermitTaiwan",
    /**
     * US Nexus Card.
     *
     * @since 7.0.0
     */
    UsNexusCard = "usNexusCard",
    /**
     * China Mainland Travel Permit Hong Kong Macau.
     *
     * @since 7.0.0
     */
    ChinaMainlandTravelPermitHongKongMacau = "chinaMainlandTravelPermitHongKongMacau",
    /**
     * Apec Business Travel Card.
     *
     * @since 7.0.0
     */
    ApecBusinessTravelCard = "apecBusinessTravelCard",
    /**
     * Pakistan Afghan Citizen Card.
     *
     * @since 7.0.0
     */
    PakistanAfghanCitizenCard = "pakistanAfghanCitizenCard",
    /**
     * Singapore Fin Card.
     *
     * @since 7.0.0
     */
    SingaporeFinCard = "singaporeFinCard",
    /**
     * Malaysia Ikad.
     *
     * @since 7.0.0
     */
    MalaysiaIkad = "malaysiaIkad",
    /**
     * Malaysia Mykad.
     *
     * @since 7.0.0
     */
    MalaysiaMykad = "malaysiaMykad",
    /**
     * Malaysia Mypr.
     *
     * @since 7.0.0
     */
    MalaysiaMypr = "malaysiaMypr",
    /**
     * Mexico Consular Voter Id.
     *
     * @since 7.0.0
     */
    MexicoConsularVoterId = "mexicoConsularVoterId",
    /**
     * Germany Eid.
     *
     * @since 7.0.0
     */
    GermanyEid = "germanyEid",
    /**
     * US Common Access Card.
     *
     * @since 7.0.0
     */
    UsCommonAccessCard = "usCommonAccessCard",
    /**
     * Philippines Multipurpose Id.
     *
     * @since 7.0.0
     */
    PhilippinesMultipurposeId = "philippinesMultipurposeId",
    /**
     * Malaysia Mykas.
     *
     * @since 7.0.0
     */
    MalaysiaMykas = "malaysiaMykas",
    /**
     * Malaysia Mykid.
     *
     * @since 7.0.0
     */
    MalaysiaMykid = "malaysiaMykid",
    /**
     * Malaysia Mytentera.
     *
     * @since 7.0.0
     */
    MalaysiaMytentera = "malaysiaMytentera",
    /**
     * Mexico Professional Id.
     *
     * @since 7.0.0
     */
    MexicoProfessionalId = "mexicoProfessionalId",
    /**
     * Malaysia Refugee Id.
     *
     * @since 7.0.0
     */
    MalaysiaRefugeeId = "malaysiaRefugeeId",
    /**
     * Canada Tribal Id.
     *
     * @since 7.0.0
     */
    CanadaTribalId = "canadaTribalId",
    /**
     * US Uniformed Services Id.
     *
     * @since 7.0.0
     */
    UsUniformedServicesId = "usUniformedServicesId",
    /**
     * US Veteran Id.
     *
     * @since 7.0.0
     */
    UsVeteranId = "usVeteranId",
    /**
     * Philippines Work Permit.
     *
     * @since 7.0.0
     */
    PhilippinesWorkPermit = "philippinesWorkPermit",
    /**
     * Singapore Work Permit.
     *
     * @since 7.0.0
     */
    SingaporeWorkPermit = "singaporeWorkPermit",
    /**
     * US Work Permit.
     *
     * @since 7.0.0
     */
    UsWorkPermit = "usWorkPermit",
    /**
     * Philippines Social Security Card.
     *
     * @since 7.0.0
     */
    PhilippinesSocialSecurityCard = "philippinesSocialSecurityCard",
    /**
     * Sweden Social Security Card.
     *
     * @since 7.0.0
     */
    SwedenSocialSecurityCard = "swedenSocialSecurityCard",
    /**
     * Canada Social Security Card.
     *
     * @since 7.0.0
     */
    CanadaSocialSecurityCard = "canadaSocialSecurityCard",
    /**
     * US Social Security Card.
     *
     * @since 7.0.0
     */
    UsSocialSecurityCard = "usSocialSecurityCard",
    /**
     * Belgium Minors Id.
     *
     * @since 7.0.0
     */
    BelgiumMinorsId = "belgiumMinorsId",
    /**
     * Colombia Minors Id.
     *
     * @since 7.0.0
     */
    ColombiaMinorsId = "colombiaMinorsId",
    /**
     * Peru Minors Id.
     *
     * @since 7.0.0
     */
    PeruMinorsId = "peruMinorsId",
    /**
     * Bolivia Minors Id.
     *
     * @since 7.0.0
     */
    BoliviaMinorsId = "boliviaMinorsId",
    /**
     * Hungary Address Card.
     *
     * @since 7.0.0
     */
    HungaryAddressCard = "hungaryAddressCard",
    /**
     * Uk Asylum Request.
     *
     * @since 7.0.0
     */
    UkAsylumRequest = "ukAsylumRequest",
    /**
     * Canada Citizenship Certificate.
     *
     * @since 7.0.0
     */
    CanadaCitizenshipCertificate = "canadaCitizenshipCertificate",
    /**
     * Singapore Employment Pass.
     *
     * @since 7.0.0
     */
    SingaporeEmploymentPass = "singaporeEmploymentPass",
    /**
     * Canada Minors Public Services Card.
     *
     * @since 7.0.0
     */
    CanadaMinorsPublicServicesCard = "canadaMinorsPublicServicesCard",
    /**
     * Malaysia Mypolis.
     *
     * @since 7.0.0
     */
    MalaysiaMypolis = "malaysiaMypolis",
    /**
     * Philippines Nbi Clearance.
     *
     * @since 7.0.0
     */
    PhilippinesNbiClearance = "philippinesNbiClearance",
    /**
     * India Pan Card.
     *
     * @since 7.0.0
     */
    IndiaPanCard = "indiaPanCard",
    /**
     * Philippines Postal Id.
     *
     * @since 7.0.0
     */
    PhilippinesPostalId = "philippinesPostalId",
    /**
     * Pakistan Proof Of Registration.
     *
     * @since 7.0.0
     */
    PakistanProofOfRegistration = "pakistanProofOfRegistration",
    /**
     * Singapore S Pass.
     *
     * @since 7.0.0
     */
    SingaporeSPass = "singaporeSPass",
    /**
     * Sweden Sis Id.
     *
     * @since 7.0.0
     */
    SwedenSisId = "swedenSisId",
    /**
     * Colombia Temporary Protection Permit.
     *
     * @since 7.0.0
     */
    ColombiaTemporaryProtectionPermit = "colombiaTemporaryProtectionPermit",
    /**
     * US Twic Card.
     *
     * @since 7.0.0
     */
    UsTwicCard = "usTwicCard",
    /**
     * US Weapon Permit.
     *
     * @since 7.0.0
     */
    UsWeaponPermit = "usWeaponPermit",
    /**
     * Canada Weapon Permit.
     *
     * @since 7.0.0
     */
    CanadaWeaponPermit = "canadaWeaponPermit",
    /**
     * Ireland Public Services Card.
     *
     * @since 7.0.0
     */
    IrelandPublicServicesCard = "irelandPublicServicesCard",
    /**
     * Canada Public Services Card.
     *
     * @since 7.0.0
     */
    CanadaPublicServicesCard = "canadaPublicServicesCard",
    /**
     * Pakistan Consular Id.
     *
     * @since 7.0.0
     */
    PakistanConsularId = "pakistanConsularId",
    /**
     * Guatemala Consular Id.
     *
     * @since 7.0.0
     */
    GuatemalaConsularId = "guatemalaConsularId",
    /**
     * Mexico Consular Id.
     *
     * @since 7.0.0
     */
    MexicoConsularId = "mexicoConsularId",
    /**
     * Philippines Tax Id.
     *
     * @since 7.0.0
     */
    PhilippinesTaxId = "philippinesTaxId",
    /**
     * Mexico Tax Id.
     *
     * @since 7.0.0
     */
    MexicoTaxId = "mexicoTaxId",
    /**
     * China One Way Permit.
     *
     * @since 7.0.0
     */
    ChinaOneWayPermit = "chinaOneWayPermit",
    /**
     * US Medical Marijuana Card.
     *
     * @since 7.0.0
     */
    UsMedicalMarijuanaCard = "usMedicalMarijuanaCard",
    /**
     * US Municipal Id.
     *
     * @since 7.0.0
     */
    UsMunicipalId = "usMunicipalId",
    /**
     * Australia Asic Card.
     *
     * @since 7.0.0
     */
    AustraliaAsicCard = "australiaAsicCard",
    /**
     * UAE Vehicle Registration Card.
     *
     * @since 7.0.0
     */
    UaeVehicleRegistrationCard = "uaeVehicleRegistrationCard",
    /**
     * UAE Esaad Card.
     *
     * @since 7.6.0
     */
    UaeEsaadCard = "uaeEsaadCard",
    /**
     * Uk Military Id.
     *
     * @since 7.6.0
     */
    UkMilitaryId = "ukMilitaryId",
    /**
     * China Business Travel Permit to HK/Macau.
     *
     * @since 8.5.0
     */
    ChinaBusinessTravelPermitHongKongMacau = "chinaBusinessTravelPermitHongKongMacau",
    /**
     * Ireland Age Card.
     *
     * @since 8.5.0
     */
    IrelandAgeCard = "irelandAgeCard"
}

/**
 * Indicates whether the document is REAL ID compliant.
 *
 * @since 7.5.0
 */
declare enum UsRealIdStatus {
    /**
     * 1. For driver’s licenses and IDs issued by US states, territories and District of Colombia: your license doesn’t include the feature to read the REAL ID indicator. Please contact Scandit if you would like to use this feature.
     * 2. Value returned for all other documents.
     *
     * @since 7.5.0
     */
    NotAvailable = "notAvailable",
    /**
     * The document is not REAL ID compliant
     *
     * @since 7.5.0
     */
    NotRealIdCompliant = "notRealIdCompliant",
    /**
     * The document is REAL ID compliant
     *
     * @since 7.5.0
     */
    RealIdCompliant = "realIdCompliant"
}

/**
 * Types associated with the document classes below
 *
 * @since 7.0.0
 */
declare enum IdCaptureDocumentType$1 {
    /**
     * ID card identification document. Associated with {@link IdCard}.
     *
     * @since 7.0.0
     */
    IdCard = "idCard",
    /**
     * Driver license identification document. Associated with {@link DriverLicense}.
     *
     * @since 7.0.0
     */
    DriverLicense = "driverLicense",
    /**
     * Passport identification document. Associated with {@link Passport}.
     *
     * @since 7.0.0
     */
    Passport = "passport",
    /**
     * Visa (ICAO) identification document. Associated with {@link VisaIcao}.
     *
     * @since 7.0.0
     */
    VisaIcao = "visaIcao",
    /**
     * Region specific identification document. Associated with {@link RegionSpecific}.
     *
     * @since 7.0.0
     */
    RegionSpecific = "regionSpecific",
    /**
     * Residence Permit. Associated with {@link ResidencePermit}.
     *
     * @since 7.0.0
     */
    ResidencePermit = "residencePermit",
    /**
     * Health insurance card. Associated with {@link HealthInsuranceCard}.
     *
     * @since 7.0.0
     */
    HealthInsuranceCard = "healthInsuranceCard",
    /**
     * Visa letter document. Associated with {@link VisaLetter} (experimental document type).
     *
     * @since 8.7.0
     */
    VisaLetter = "visaLetter"
}

/**
 * An enumeration of possible application status for a visa.
 *
 * @since 8.7.0
 */
declare enum ApplicationStatus {
    /**
     * The visa application was approved.
     *
     * @since 8.7.0
     */
    Approved = "approved",
    /**
     * The visa application was granted.
     *
     * @since 8.7.0
     */
    Granted = "granted",
    /**
     * The visa application is pending.
     *
     * @since 8.7.0
     */
    Pending = "pending",
    /**
     * The visa application was denied.
     *
     * @since 8.7.0
     */
    Denied = "denied",
    /**
     * The visa application was revoked.
     *
     * @since 8.7.0
     */
    Revoked = "revoked",
    /**
     * The visa application has expired.
     *
     * @since 8.7.0
     */
    Expired = "expired",
    /**
     * The visa application was cancelled.
     *
     * @since 8.7.0
     */
    Cancelled = "cancelled",
    /**
     * The visa application is of an unknown status.
     *
     * @since 8.7.0
     */
    Other = "other",
    /**
     * The visa application is of an unknown status.
     *
     * @since 8.7.0
     */
    Unknown = "unknown"
}

/**
 * Sub-category of a passport.
 *
 * The type is derived from the second letter of the MRZ document code, as defined in ICAO Doc 9303-4. ICAO made these letters mandatory for passports issued from 1 January 2026. Before that, some issuing states used the letters with other meanings. The type is the first match of these rules:
 *
 * - China: the document number decides. A number that starts with `E` is {@link PassportType.National}, and a number that starts with `SE` or `PE` is {@link PassportType.Official}.
 * - Switzerland: `PM` is {@link PassportType.National} when the passport expires before 1 January 2036, `PN` is {@link PassportType.Diplomatic}, and other letters have their ICAO meaning.
 * - These issuing states and document codes are {@link PassportType.National}. For South Korea, only when the passport expires before 1 January 2036. For `PR`, `PS` and `PT`, only when the MRZ nationality is the issuing state.
 *   - `PM`: South Africa, South Korea.
 *   - `PO`: Afghanistan, Burundi, Cameroon, Comoros, Guinea, Laos, Madagascar, Niger, Sierra Leone.
 *   - `PE`: Mongolia, Myanmar, Romania.
 *   - `PR`: Barbados, Maldives, Myanmar, South Korea, Venezuela.
 *   - `PS`: Myanmar, South Korea.
 *   - `PT`: Myanmar.
 * - When the MRZ nationality is the issuing state, `PS` is {@link PassportType.Official}, and `PR` and `PT` are {@link PassportType.National}. A refugee, stateless or alien document is not issued to a citizen of the issuing state.
 * - `P<`, `P` and `PP` are {@link PassportType.National}, `PD` is {@link PassportType.Diplomatic}, `PK` is {@link PassportType.Seafarer}, `PL` is {@link PassportType.LaissezPasser} and `PU` is {@link PassportType.EmergencyTravelDocument}.
 * - A passport that expires on or after 1 January 2036 has the ICAO meaning of the letter.
 * - All other passports are `Unknown`.
 *
 * When the type is {@link PassportType.National} or `Unknown`, an MRZ nationality of `XXA` makes it {@link PassportType.Stateless}, and `XXB` or `XXC` makes it {@link PassportType.Refugee}.
 *
 * Before 8.7, passports were reported with the ICAO meaning of the second letter.
 *
 * @since 8.7.0
 */
declare enum PassportType {
    /**
     * A regular national passport.
     *
     * @since 8.7.0
     */
    National = "national",
    /**
     * Emergency passport.
     *
     * @since 8.7.0
     */
    Emergency = "emergency",
    /**
     * Diplomatic passport.
     *
     * @since 8.7.0
     */
    Diplomatic = "diplomatic",
    /**
     * Official or service passport.
     *
     * @since 8.7.0
     */
    Official = "official",
    /**
     * Refugee travel document.
     *
     * @since 8.7.0
     */
    Refugee = "refugee",
    /**
     * Alien passport.
     *
     * @since 8.7.0
     */
    Alien = "alien",
    /**
     * Stateless person’s travel document.
     *
     * @since 8.7.0
     */
    Stateless = "stateless",
    /**
     * Laissez-passer issued by an international organisation.
     *
     * @since 8.7.0
     */
    LaissezPasser = "laissezPasser",
    /**
     * Military passport.
     *
     * @since 8.7.0
     */
    Military = "military",
    /**
     * Seafarer passport.
     *
     * @since 8.7.0
     */
    Seafarer = "seafarer",
    /**
     * Emergency travel document, a single-sheet document as defined in ICAO Doc 9303-8. Distinct from {@link PassportType.Emergency}, which is an emergency passport booklet. Before 8.7 both were reported as {@link PassportType.Emergency}.
     *
     * @since 8.7.0
     */
    EmergencyTravelDocument = "emergencyTravelDocument",
    /**
     * The passport type cannot be determined reliably from the machine-readable zone. A passport of this type is not rejected unless {@link PassportType.Unknown} is in {@link IdCaptureSettings.rejectPassportTypes}.
     *
     * @since 8.7.0
     */
    Unknown = "unknown"
}






interface DateResultJSON {
    day?: number | null;
    month?: number | null;
    year: number;
}
interface CommonIdFieldsJSON {
    firstName: string | null;
    lastName: string | null;
    fullName: string;
    sex: string | null;
    dateOfBirth: DateResultJSON | null;
    nationality: string | null;
    nationalityISO: string | null;
    address: string | null;
    documentNumber: string | null;
    dateOfExpiry: DateResultJSON | null;
    dateOfIssue: DateResultJSON | null;
}
interface ProfessionalDrivingPermitJSON {
    dateOfExpiry: DateResultJSON;
    codes: string[];
}
interface VehicleRestrictionJSON {
    vehicleCode: string;
    vehicleRestriction: string;
    dateOfIssue: DateResultJSON;
}
interface DrivingLicenseCategoryJSON {
    code: string;
    dateOfIssue: DateResultJSON | null;
    dateOfExpiry: DateResultJSON | null;
}
interface DrivingLicenseDetailsJSON {
    drivingLicenseCategories: DrivingLicenseCategoryJSON[];
    restrictions: string | null;
    endorsements: string | null;
}
interface VisaDetailsJSON {
    fullName: string | null;
    visaNumber: string | null;
    passportNumber: string | null;
    foilNumber: string | null;
    issuingCountryIso: string | null;
    issuingAuthority: string | null;
    geographicValidity: string | null;
    visaType: string | null;
    durationInDays: number | null;
    numberOfEntries: number | null;
    multipleEntries: boolean | null;
    applicationStatus: ApplicationStatus | null;
    dateOfIssue: DateResultJSON | null;
    validFrom: DateResultJSON | null;
    validUntil: DateResultJSON | null;
}
interface DataConsistencyResultJSON {
    allChecksPassed: boolean;
    failedChecks: string[];
    skippedChecks: string[];
    passedChecks: string[];
    frontReviewImage: string | null;
}
interface MobileDocumentResultJSON extends CommonIdFieldsJSON {
    portrait: string | null;
    signature: string | null;
    issuingAuthority: string;
    administrativeNumber: string | null;
    height: number | null;
    weight: number | null;
    eyeColor: string | null;
    hairColor: string | null;
    birthPlace: string | null;
    drivingLicenseCategories: DrivingLicenseCategoryJSON[];
    residentCity: string | null;
    residentCountry: string | null;
    age: number | null;
    issuingCountryIso: string | null;
    issuingJurisdictionIso: string | null;
}
interface MobileDocumentOCRResultJSON {
    firstName: string | null;
    lastName: string | null;
    fullName: string;
    dateOfBirth: DateResultJSON | null;
    documentNumber: string | null;
    dateOfExpiry: DateResultJSON | null;
    issuingJurisdiction: string | null;
    issuingJurisdictionIso: string | null;
    sex: string | null;
    nationality: string | null;
    nationalityISO: string | null;
    address: string | null;
    documentAdditionalNumber: string | null;
    dateOfIssue: DateResultJSON | null;
}
interface VerificationResultJSON {
    dataConsistencyResult: DataConsistencyResultJSON | null;
    aamvaBarcodeVerification: AamvaBarcodeVerificationResultJSON | null;
}
interface ImageInfoJSON {
    front: ImageJSON | null;
    back: ImageJSON | null;
}
interface ImageJSON {
    face: string | null;
    frame: string | null;
    croppedDocument: string | null;
}
interface CapturedIdJSON extends CommonIdFieldsJSON {
    age: number | null;
    isExpired: boolean | null;
    documentType: IdCaptureDocumentType$1 | null;
    documentSubtype: RegionSpecificSubtype | null;
    issuingCountryIso: string | null;
    issuingCountry: IdCaptureRegion;
    documentAdditionalNumber: string | null;
    visaNumber: string | null;
    passportNumber: string | null;
    isCapturingComplete: boolean;
    imageInfo: ImageInfoJSON | null;
    barcodeResult: BarcodeResultJSON | null;
    mrzResult: MRZResultJSON | null;
    vizResult: VIZResultJSON | null;
    mobileDocumentResult: MobileDocumentResultJSON | null;
    mobileDocumentOcrResult: MobileDocumentOCRResultJSON | null;
    verificationResult: VerificationResultJSON | null;
    nfcResult: NfcResultJSON | null;
    rejectionDiagnosticJSON: string;
    isCitizenPassport: boolean;
    anonymizedFields: string[];
}
interface BarcodeResultJSON extends CommonIdFieldsJSON {
    aamvaVersion: number;
    isRealId: boolean;
    aliasFamilyName: string | null;
    aliasGivenName: string | null;
    aliasSuffixName: string | null;
    cardRevisionDate: DateResultJSON | null;
    documentDiscriminatorNumber: string | null;
    driverNamePrefix: string | null;
    driverNameSuffix: string | null;
    endorsementsCode: string | null;
    eyeColor: string | null;
    firstNameWithoutMiddleName: string | null;
    firstNameTruncation: string | null;
    hairColor: string | null;
    heightCm: number | null;
    heightInch: number | null;
    iin: string;
    issuingJurisdiction: string;
    issuingJurisdictionIso: string;
    jurisdictionVersion: number;
    lastNameTruncation: string | null;
    middleName: string | null;
    middleNameTruncation: string | null;
    placeOfBirth: string | null;
    race: string | null;
    restrictionsCode: string | null;
    vehicleClass: string | null;
    weightKg: number | null;
    weightLbs: number | null;
    dictionary: {
        [key: string]: string;
    } | null;
    documentCopy: string;
    personalIdNumber: string;
    bloodType: string;
    categories: string[];
    identificationType: string;
    version: string;
    personDesignatorDocument: number;
    personDesignatorTypeCode: string;
    ediPersonIdentifier: string;
    personnelCategoryCode: string;
    branchOfService: string;
    personnelEntitlementConditionType: string;
    rank: string;
    payPlanCode: string;
    payPlanGradeCode: string;
    cardInstanceIdentifier: string;
    personMiddleInitial: string;
    licenseCountryOfIssue: string;
    personalIdNumberType: string;
    driverRestrictionCodes: number[];
    professionalDrivingPermit: ProfessionalDrivingPermitJSON | null;
    vehicleRestrictions: VehicleRestrictionJSON[];
    countryOfBirth: string;
    countryOfBirthIso: string;
    citizenshipStatus: string;
    champusEffectiveDate: DateResultJSON | null;
    champusExpiryDate: DateResultJSON | null;
    civilianHealthCareFlagCode: string;
    civilianHealthCareFlagDescription: string;
    commissaryFlagCode: string;
    commissaryFlagDescription: string;
    deersDependentSuffixCode: number;
    deersDependentSuffixDescription: string;
    directCareFlagCode: string;
    directCareFlagDescription: string;
    exchangeFlagCode: string;
    exchangeFlagDescription: string;
    familySequenceNumber: number;
    formNumber: string;
    genevaConventionCategory: string | null;
    height: number;
    jpegData: string;
    mwrFlagCode: string;
    mwrFlagDescription: string;
    payGrade: string | null;
    relationshipCode: string | null;
    relationshipDescription: string | null;
    securityCode: string;
    serviceCode: string;
    sponsorFlag: string;
    sponsorPersonDesignatorIdentifier: number | null;
    sponsorName: string | null;
    statusCode: string;
    statusCodeDescription: string;
    weight: number;
}
interface AamvaBarcodeVerificationResultJSON {
    allChecksPassed: boolean;
    verificationStatus: 'authentic' | 'maybeForged' | 'forged';
}
interface MRZResultJSON extends CommonIdFieldsJSON {
    documentCode: string;
    namesAreTruncated: boolean;
    optionalDataInLine1: string | null;
    optionalDataInLine2: string | null;
    capturedMrz: string;
    personalIdNumber: string | null;
    renewalTimes: number | null;
    fullNameSimplifiedChinese: string | null;
    omittedCharacterCountInGbkName: number | null;
    omittedNameCount: number | null;
    issuingAuthorityCode: string | null;
    passportIssuerIso: string | null;
    passportNumber: string | null;
    visaNumber: string | null;
    visaNumberOfEntries: number | null;
    visaMultipleEntries: boolean | null;
    visaDurationInDays: number | null;
    passportType: PassportType | null;
    passportDateOfExpiry: DateResultJSON | null;
}
interface VIZResultJSON extends CommonIdFieldsJSON {
    additionalAddressInformation: string | null;
    additionalNameInformation: string | null;
    documentAdditionalNumber: string | null;
    employer: string | null;
    issuingAuthority: string | null;
    issuingJurisdiction: string;
    issuingJurisdictionIso: string;
    maritalStatus: string | null;
    personalIdNumber: string | null;
    placeOfBirth: string | null;
    profession: string | null;
    race: string | null;
    religion: string | null;
    residentialStatus: string | null;
    capturedSides: string;
    usRealIdStatus: UsRealIdStatus | null;
    isBackSideCaptureSupported: boolean;
    bloodType: string | null;
    sponsor: string | null;
    mothersName: string | null;
    fathersName: string | null;
    visaNumber: string | null;
    passportNumber: string | null;
    vehicleOwner: string | null;
    drivingLicenseDetails: DrivingLicenseDetailsJSON | null;
    visaDetails: VisaDetailsJSON | null;
}
interface NfcResultJSON {
    firstName: string | null;
    lastName: string | null;
    fullName: string | null;
    documentNumber: string | null;
    documentAdditionalNumber: string | null;
    issuingCountryIso: string | null;
    issuingCountry: string | null;
    issuingAuthority: string | null;
    dateOfIssue: DateResultJSON | null;
    dateOfExpiry: DateResultJSON | null;
    dateOfBirth: DateResultJSON | null;
    faceImage: string | null;
    signatureImage: string | null;
    chipVerificationStatus: string;
    cloneDetectionStatus: string;
}



/**
 * A date extracted from a personal identification document. May represent either a full date (day, month, year), just a month and a year or just a year.
 *
 * @since 6.14.0
 */
declare class DateResult {
    private _day;
    private _month;
    private _year;
    /**
     * Constructs a new instance of this class from an optional day, optional month and a year.
     *
     * @since 8.3.0
     */
    constructor(day: number | null, month: number | null, year: number);
    /**
     * The extracted day of the month or 0 if this result represents a month and a year only.
     *
     * @since 6.14.0
     */
    get day(): number;
    /**
     * A number from 1 to 12 representing the extracted month, where 1 represents January, 2 - February and so on or 0 if the results represents a year only.
     *
     * @since 6.14.0
     */
    get month(): number;
    /**
     * The extracted year.
     *
     * @since 6.14.0
     */
    get year(): number;
    /**
     * A Date corresponding to this DateResult using the local timezone. If the day information is missing, it is set to the 1st day of the month, if the month information is missing, it is set to the 1st month of the year
     *
     * @since 6.21.0
     */
    get localDate(): Date;
    /**
     * A Date corresponding to this DateResult. The timezone is set to UTC, the time to midnight. If the day information is missing, it is set to the 1st day of the month, if the month information is missing, it is set to the 1st month of the year.
     *
     * @since 6.21.0
     */
    get utcDate(): Date;
    private static fromJSON;
}
interface PrivateDateResult {
    fromJSON(json: DateResultJSON | null): DateResult | null;
}

/**
 * The verification status returned by the barcode verifier
 *
 * @since 8.0.0
 */
declare enum DataConsistencyCheck {
    /**
     * Comparison of issuing country between zones
     *
     * @since 8.0.0
     */
    IssuingCountryComparison = "issuingCountryComparison",
    /**
     * Comparison of issuing jurisdiction between zones
     *
     * @since 8.0.0
     */
    IssuingJurisdictionComparison = "issuingJurisdictionComparison",
    /**
     * Comparison of full name between zones
     *
     * @since 8.0.0
     */
    FullNameComparison = "fullNameComparison",
    /**
     * Comparison of document number between zones
     *
     * @since 8.0.0
     */
    DocumentNumberComparison = "documentNumberComparison",
    /**
     * Comparison of date of birth between zones
     *
     * @since 8.0.0
     */
    DateOfBirthComparison = "dateOfBirthComparison",
    /**
     * Comparison of date of expiry between zones
     *
     * @since 8.0.0
     */
    DateOfExpiryComparison = "dateOfExpiryComparison",
    /**
     * Comparison of date of issue between zones
     *
     * @since 8.0.0
     */
    DateOfIssueComparison = "dateOfIssueComparison"
}

/**
 * This enum specifies what type of anonymization should be applied. Note: This only affects specific fields on certain documents.
 *
 * @since 6.21.0
 */
declare enum IdAnonymizationMode {
    /**
     * No Anonymization, the result will contain all data.
     *
     * @since 6.21.0
     */
    None = "none",
    /**
     * Sensitive data is removed from result fields.
     *
     * @since 6.21.0
     */
    FieldsOnly = "fieldsOnly",
    /**
     * Black boxes cover sensitive data in result images. Note: Frame anonymization requires that relevant fields are successfully captured by the SDK. For Visual Inspection Zone (VIZ) data anonymization, IdImageType.CroppedDocument must be enabled.
     *
     * @since 6.21.0
     */
    ImagesOnly = "imagesOnly",
    /**
     * A combination of ImagesOnly and FieldsOnly modes. Note: Frame anonymization requires that relevant fields are successfully captured by the SDK. For Visual Inspection Zone (VIZ) data anonymization, IdImageType.CroppedDocument must be enabled.
     *
     * @since 6.21.0
     */
    FieldsAndImages = "fieldsAndImages"
}

/**
 * Possible image types that can be extracted from a recognized document.
 *
 * @since 6.14.0
 */
declare enum IdImageType {
    /**
     * A photo of the document’s holder.
     *
     * @since 6.14.0
     */
    Face = "face",
    /**
     * A cropped image of the document.
     *
     * @since 7.0.0
     */
    CroppedDocument = "croppedDocument",
    /**
     * An image of the full frame the document was captured on.
     *
     * @since 7.0.0
     */
    Frame = "frame"
}

/**
 * Sides of a personal identification document scanned by ID Capture.
 *
 * @since 6.14.0
 */
declare enum CapturedSides {
    /**
     * Only the front side of a document.
     *
     * @since 6.14.0
     */
    FrontOnly = "frontOnly",
    /**
     * Both the front and the back side of a document.
     *
     * @since 6.14.0
     */
    FrontAndBack = "frontAndBack"
}

/**
 * Sets the position of the textual hints.
 *
 * @since 6.23.0
 */
declare enum TextHintPosition {
    /**
     * Places the text hint above viewfinder.
     *
     * @since 6.23.0
     */
    AboveViewfinder = "aboveViewfinder",
    /**
     * Places the text hint below viewfinder.
     *
     * @since 6.23.0
     */
    BelowViewfinder = "belowViewfinder"
}

/**
 * Possible reasons why a document can be rejected.
 *
 * When multiple rejection conditions apply, only the highest-priority reason is reported. The evaluation order, from highest to lowest priority, is:
 *
 * 1. {@link RejectionReason.NotAcceptedDocumentType} — document is in the rejected list
 * 2. {@link RejectionReason.NotAcceptedDocumentType} — document is not in the accepted list
 * 3. {@link RejectionReason.ForgedAamvaBarcode}
 * 4. {@link RejectionReason.NotRealIdCompliant}
 * 5. {@link RejectionReason.InconsistentData}
 * 6. {@link RejectionReason.HolderUnderage}
 * 7. {@link RejectionReason.DocumentExpired}
 * 8. {@link RejectionReason.DocumentExpiresSoon}
 * 9. {@link RejectionReason.Timeout}
 * 10. {@link RejectionReason.DocumentVoided}, {@link RejectionReason.InvalidFormat}, and others
 *
 * Although {@link RejectionReason.InvalidFormat} has the lowest priority in the evaluation order, it arises when a document cannot be parsed at all. In that case, document type and authenticity cannot be determined, so higher-priority reasons are not applicable in practice.
 *
 * For two-sided documents, {@link RejectionReason.InconsistentData} is only evaluated after both sides have been captured. If the front side triggers a rejection — such as {@link RejectionReason.HolderUnderage}, {@link RejectionReason.DocumentExpired}, or {@link RejectionReason.DocumentExpiresSoon} — the back side is not scanned and {@link RejectionReason.InconsistentData} is never evaluated, even though it ranks higher in the precedence order.
 *
 * @since 6.25.0
 */
declare enum RejectionReason {
    /**
     * The type of the presented document is not enabled in the settings.
     *
     * @since 6.25.0
     */
    NotAcceptedDocumentType = "notAcceptedDocumentType",
    /**
     * The document format is incorrect.
     *
     * @since 6.25.0
     */
    InvalidFormat = "invalidFormat",
    /**
     * The document is voided.
     *
     * @since 6.25.0
     */
    DocumentVoided = "documentVoided",
    /**
     * The capture process resulted in a timeout.
     *
     * @since 7.0.0
     */
    Timeout = "timeout",
    /**
     * The capture process resulted in no result. This reason is only used in conjunction with a single image frame source. ID Capture is automatically :meth:id.IdCapture.Reset when this rejection happens. Currently only used by the Web platform
     *
     * @since 7.0.0
     */
    SingleImageNotRecognized = "singleImageNotRecognized",
    /**
     * The document is expired.
     *
     * @since 7.1.0
     */
    DocumentExpired = "documentExpired",
    /**
     * The document will expire soon.
     *
     * @since 7.1.0
     */
    DocumentExpiresSoon = "documentExpiresSoon",
    /**
     * The document is not REAL ID compliant.
     *
     * @since 7.1.0
     */
    NotRealIdCompliant = "notRealIdCompliant",
    /**
     * The document’s holder is underage.
     *
     * @since 7.1.0
     */
    HolderUnderage = "holderUnderage",
    /**
     * The document has a forged AAMVA barcode.
     *
     * @since 7.1.0
     */
    ForgedAamvaBarcode = "forgedAamvaBarcode",
    /**
     * The document has inconsistent data.
     *
     * @since 7.1.0
     */
    InconsistentData = "inconsistentData",
    /**
     * An error occurred while retrieving the document data via Bluetooth.
     *
     * @since 7.5.0
     */
    BluetoothCommunicationError = "bluetoothCommunicationError",
    /**
     * Bluetooth is not supported, disabled, or missing required permissions on your device.
     *
     * @since 7.5.0
     */
    BluetoothUnavailable = "bluetoothUnavailable",
    /**
     * A request to the cloud failed. The service may be temporarily unavailable.
     *
     * @since 8.7.0
     */
    CloudRequestFailed = "cloudRequestFailed",
    /**
     * The cloud manipulation check flagged the document as manipulated.
     *
     * @since 8.7.0
     */
    ManipulatedDocument = "manipulatedDocument"
}

/**
 * Sides of a document.
 *
 * @since 7.0.0
 */
declare enum IdSide {
    /**
     * Front side of a document.
     *
     * @since 7.0.0
     */
    Front = "front",
    /**
     * Back side of the document.
     *
     * @since 7.0.0
     */
    Back = "back"
}



/**
 * A class that contains the extracted images from a document.
 *
 * @since 7.0.0
 */
declare class IdImages {
    private json;
    private static fromJSON;
    /**
     * Returns a photo of the document’s holder. This method is only supported for documents whose Visual Inspection Zone (VIZ) has been captured.
     *
     * By default, this method returns the image as a base64-encoded string. If {@link DataCaptureContextSettings.frameDataSettings} is configured to use the filesystem cache, it returns the path to the cached file instead.
     *
     * @since 7.0.0
     */
    get face(): string | null;
    /**
     * Returns the full frame the document was captured on.
     *
     * By default, this method returns the image as a base64-encoded string. If {@link DataCaptureContextSettings.frameDataSettings} is configured to use the filesystem cache, it returns the path to the cached file instead.
     *
     * @since 7.0.0
     */
    get frame(): string | null;
    /**
     * Returns the full frame the specified document side was captured on.
     *
     * By default, this method returns the image as a base64-encoded string. If {@link DataCaptureContextSettings.frameDataSettings} is configured to use the filesystem cache, it returns the path to the cached file instead.
     *
     * @since 7.0.0
     */
    getFrame(side: IdSide): string | null;
    /**
     * Returns a cropped image of the specified document side. This method is only supported for documents whose Visual Inspection Zone (VIZ) has been captured.
     *
     * By default, this method returns the image as a base64-encoded string. If {@link DataCaptureContextSettings.frameDataSettings} is configured to use the filesystem cache, it returns the path to the cached file instead.
     *
     * @since 7.0.0
     */
    getCroppedDocument(side: IdSide): string | null;
}
interface PrivateIdImages {
    fromJSON(json: ImageInfoJSON | null): IdImages;
}

interface DurationJSON {
    days: number;
    months: number;
    years: number;
}
interface PrivateDuration {
    fromJSON(json: DurationJSON): Duration$1;
}
/**
 * Represents a duration of time in terms of days, months, and years.
 *
 * @since 7.6.0
 */
declare class Duration$1 extends DefaultSerializeable {
    private _days;
    private _months;
    private _years;
    /**
     * The number of days in the duration.
     *
     * @since 7.6.0
     */
    get days(): number;
    /**
     * The number of months in the duration.
     *
     * @since 7.6.0
     */
    get months(): number;
    /**
     * The number of years in the duration.
     *
     * @since 7.6.0
     */
    get years(): number;
    private static fromJSON;
    /**
     * Creates a new Duration instance.
     *
     * @since 7.6.0
     */
    constructor(days: number, months: number, years: number);
}

/**
 * An enumeration of possible sexes.
 *
 * @since 8.0.0
 */
declare enum Sex {
    /**
     * Female sex.
     *
     * @since 8.0.0
     */
    Female = "female",
    /**
     * Male sex.
     *
     * @since 8.0.0
     */
    Male = "male",
    /**
     * Unspecified sex.
     *
     * @since 8.0.0
     */
    Unspecified = "unspecified"
}

/**
 * The layout style of the {@link IdCaptureOverlay}.
 *
 * @since 6.14.0
 */
declare enum IdLayoutStyle {
    /**
     * Layout style with rounded corners.
     *
     * @since 6.14.0
     */
    Rounded = "rounded",
    /**
     * Layout style with square corners.
     *
     * @since 6.14.0
     */
    Square = "square"
}

/**
 * The style of the lines drawn as part of the IdLayout.
 *
 * @since 6.14.0
 */
declare enum IdLayoutLineStyle {
    /**
     * Draws lines with a width of 3 dips/points.
     *
     * @since 6.14.0
     */
    Light = "light",
    /**
     * Draws lines with a width of 5 dips/points.
     *
     * @since 6.14.0
     */
    Bold = "bold"
}

interface IdDefaults {
    IdCapture: {
        Feedback: {
            idCaptured: Feedback$1;
            idRejected: Feedback$1;
        };
        DefaultSuccessSound: Sound$1;
        DefaultFailureSound: Sound$1;
        IdCaptureOverlayDefaults: {
            defaultCapturedBrush: {
                fillColor: Color$1;
                strokeColor: Color$1;
                strokeWidth: number;
            };
            defaultLocalizedBrush: {
                fillColor: Color$1;
                strokeColor: Color$1;
                strokeWidth: number;
            };
            defaultRejectedBrush: {
                fillColor: Color$1;
                strokeColor: Color$1;
                strokeWidth: number;
            };
            defaultIdLayoutStyle: IdLayoutStyle;
            defaultIdLayoutLineStyle: IdLayoutLineStyle;
        };
        RecommendedCameraSettings: CameraSettings;
        IdCaptureSettings: {
            anonymizationMode: IdAnonymizationMode;
            anonymizeDefaultFields: boolean;
            rejectVoidedIds: boolean;
            decodeBackOfEuropeanDrivingLicense: boolean;
            rejectExpiredIds: boolean;
            rejectIdsExpiringIn: Duration$1 | null;
            rejectNotRealIdCompliant: boolean;
            rejectForgedAamvaBarcodes: boolean;
            rejectInconsistentData: boolean;
            rejectHolderBelowAge: number | null;
            rejectionTimeoutSeconds: number;
            notifyOnSideCapture: boolean;
        };
    };
}
declare function parseIdDefaults(jsonDefaults: any): IdDefaults;

declare function getIdDefaults(): IdDefaults;

declare function setIdDefaultsLoader(loader: () => void): void;
declare function ensureIdDefaults(): IdDefaults;
declare function loadIdDefaults(jsonDefaults: any): void;

/**
 * Assembles the nested JSON shape that IdDefaults.parseIdDefaults expects, out of the flat
 * generated defaults, restricted to the keys that are knowable statically at build time.
 *
 * Excluded (genuinely dynamic, native-only) key:
 * - RecommendedCameraSettings (mirrors IdCaptureDefaults.getDynamic() on Android)
 */
declare function buildStaticIdDefaultsJson(platform: 'android' | 'ios'): unknown;

/**
 * The verification status returned by the barcode verifier
 *
 * @since 6.28.0
 */
declare enum AamvaBarcodeVerificationStatus {
    /**
     * The barcode is authentic
     *
     * @since 6.28.0
     */
    Authentic = "authentic",
    /**
     * The barcode is likely forged
     *
     * @since 6.28.0
     */
    LikelyForged = "maybeForged",
    /**
     * The barcode is forged
     *
     * @since 6.28.0
     */
    Forged = "forged"
}

/**
 * The result of a verification of AAMVA-compliant personal identification document returned in {@link VerificationResult} when {@link IdCaptureSettings.rejectForgedAamvaBarcodes} is enabled.
 *
 * @since 6.21.0
 */
declare class AamvaBarcodeVerificationResult {
    private json;
    /**
     * All checks passed and nothing suspicious about the document was detected.
     *
     * @since 6.21.0
     */
    get allChecksPassed(): boolean;
    private _status;
    /**
     * Verification status containing the result of the verification
     *
     * @since 6.28.0
     */
    get status(): AamvaBarcodeVerificationStatus;
    private static fromJSON;
}

/**
 * The professional driving permit (PrDP) of the Driver’s License holder.
 *
 * @since 6.14.0
 */
declare class ProfessionalDrivingPermit {
    private json;
    /**
     * The date when this permit expires.
     *
     * @since 6.14.0
     */
    get dateOfExpiry(): DateResult;
    /**
     * The categories of the permit. Check the information printed on the Driver’s License for the list of valid PrDP categories.
     *
     * @since 6.14.0
     */
    get codes(): string[];
    private static fromJSON;
}
interface PrivateProfessionalDrivingPermit {
    fromJSON(json: ProfessionalDrivingPermitJSON | null): ProfessionalDrivingPermit | null;
}

/**
 * @since 6.14.0
 */
declare class VehicleRestriction {
    private json;
    /**
     * The category of motor vehicle the Driver’s License is valid for. Check the information printed on the Driver’s License for the list of valid codes.
     *
     * @since 6.14.0
     */
    get vehicleCode(): string;
    /**
     * The restriction that applies to the motor vehicle category. Check the information printed on the Driver’s License for the list of possible restrictions.
     *
     * @since 6.14.0
     */
    get vehicleRestriction(): string;
    /**
     * The date when this vehicle restriction starts to apply.
     *
     * @since 6.14.0
     */
    get dateOfIssue(): DateResult;
    private static fromJSON;
}
interface PrivateVehicleRestriction {
    fromJSON(json: VehicleRestrictionJSON | null): VehicleRestriction;
}

/**
 * This class represents the data extracted from a document’s barcode. It aggregates information from various barcode types supported by the library. Some properties may not apply to certain document types and will be set to *null* if the corresponding data is not encoded in the barcode. For a complete overview of supported barcode types, refer to our supported documents.
 *
 * @since 7.0.0
 */
declare class BarcodeResult {
    private json;
    private static fromJSON;
    private constructor();
    /**
     * The version level of the PDF417 barcode format. See the AAMVA DL/ID Card Design Standard for more details.
     *
     * @since 7.0.0
     */
    get aamvaVersion(): number | null;
    /**
     * Other family name by which cardholder is known.
     *
     * @since 7.0.0
     */
    get aliasFamilyName(): string | null;
    /**
     * Other given name by which cardholder is known.
     *
     * @since 7.0.0
     */
    get aliasGivenName(): string | null;
    /**
     * Other suffix name by which cardholder is known.
     *
     * @since 7.0.0
     */
    get aliasSuffixName(): string | null;
    /**
     * The blood type of the holder in the Rh system (A+, A-, B+, B-, O+, O-, AB+ or AB-).
     *
     * @since 7.0.0
     */
    get bloodType(): string | null;
    /**
     * The holder’s branch of service.
     *
     * @since 7.0.0
     */
    get branchOfService(): string | null;
    /**
     * Machine-generated code that is used for security purposes.
     *
     * @since 7.0.0
     */
    get cardInstanceIdentifier(): string | null;
    /**
     * Card revision date.
     *
     * @since 7.0.0
     */
    get cardRevisionDate(): DateResult | null;
    /**
     * Driving license categories.
     *
     * @since 7.0.0
     */
    get categories(): string[];
    /**
     * The CHAMPUS effective date.
     *
     * @since 7.0.0
     */
    get champusEffectiveDate(): DateResult | null;
    /**
     * The CHAMPUS expiration date.
     *
     * @since 7.0.0
     */
    get champusExpiryDate(): DateResult | null;
    /**
     * Whether the holder is a citizen or a permanent resident.
     *
     * @since 7.0.0
     */
    get citizenshipStatus(): string | null;
    /**
     * The code of the civilian health care privilege/benefit flag.
     *
     * @since 7.0.0
     */
    get civilianHealthCareFlagCode(): string | null;
    /**
     * The description of the civilian health care privilege/benefit flag.
     *
     * @since 7.0.0
     */
    get civilianHealthCareFlagDescription(): string | null;
    /**
     * The code of the commissary privilege/benefit flag.
     *
     * @since 7.0.0
     */
    get commissaryFlagCode(): string | null;
    /**
     * The description of the commissary privilege/benefit flag.
     *
     * @since 7.0.0
     */
    get commissaryFlagDescription(): string | null;
    /**
     * The human-readable name of the holder’s country of birth.
     *
     * @since 7.0.0
     */
    get countryOfBirth(): string | null;
    /**
     * The three-letter country code (ISO 3166-1) of the holder’s country of birth.
     *
     * @since 7.0.0
     */
    get countryOfBirthIso(): string | null;
    /**
     * The code of the relationship of a dependent to his or her sponsor.
     *
     * @since 7.0.0
     */
    get deersDependentSuffixCode(): number | null;
    /**
     * The description of the relationship of a dependent to his or her sponsor.
     *
     * @since 7.0.0
     */
    get deersDependentSuffixDescription(): string | null;
    /**
     * The code of the direct care privilege/benefit flag.
     *
     * @since 7.0.0
     */
    get directCareFlagCode(): string | null;
    /**
     * The description of the direct care privilege/benefit flag.
     *
     * @since 7.0.0
     */
    get directCareFlagDescription(): string | null;
    /**
     * Identifies if the document has been duplicated.
     *
     * @since 7.0.0
     */
    get documentCopy(): string | null;
    /**
     * The document discriminator number.
     *
     * @since 7.0.0
     */
    get documentDiscriminatorNumber(): string | null;
    /**
     * The name prefix of the card holder.
     *
     * @since 7.0.0
     */
    get driverNamePrefix(): string | null;
    /**
     * The name suffix of the card holder.
     *
     * @since 7.0.0
     */
    get driverNameSuffix(): string | null;
    /**
     * The driver restriction codes. Empty array means that there is no restrictions. Number 1 stands for glasses/contact lenses. Number 2 stands for artificial limbs.
     *
     * @since 7.0.0
     */
    get driverRestrictionCodes(): number[];
    /**
     * The holder’s DEERS-assigned numeric identifier.
     *
     * @since 7.0.0
     */
    get ediPersonIdentifier(): string | null;
    /**
     * The endorsement code.
     *
     * @since 7.0.0
     */
    get endorsementsCode(): string | null;
    /**
     * The code of the exchange privilege/benefit flag.
     *
     * @since 7.0.0
     */
    get exchangeFlagCode(): string | null;
    /**
     * The description of the exchange privilege/benefit flag.
     *
     * @since 7.0.0
     */
    get exchangeFlagDescription(): string | null;
    /**
     * The holder’s eye color.
     *
     * @since 7.0.0
     */
    get eyeColor(): string | null;
    /**
     * Used to distinguish among sponsors who have the same SSN.
     *
     * @since 7.0.0
     */
    get familySequenceNumber(): number | null;
    /**
     * The first name truncation. A code that indicates whether a field has been truncated (‘T’), has not been truncated (‘N’), unknown whether truncated (‘U’), or the information is not present in the document (*null*).
     *
     * @since 7.0.0
     */
    get firstNameTruncation(): string | null;
    /**
     * The first name of the document holder. It doesn’t contain middle name(s).
     *
     * @since 7.0.0
     */
    get firstNameWithoutMiddleName(): string | null;
    /**
     * The form number.
     *
     * @since 7.0.0
     */
    get formNumber(): string | null;
    /**
     * The sponsor’s appropriate Geneva Convention Category.
     *
     * @since 7.0.0
     */
    get genevaConventionCategory(): string | null;
    /**
     * The holder’s hair color.
     *
     * @since 7.0.0
     */
    get hairColor(): string | null;
    /**
     * The height of the card holder in centimeters.
     *
     * @since 7.0.0
     */
    get heightCm(): number | null;
    /**
     * The height of the card holder in inches.
     *
     * @since 7.0.0
     */
    get heightInch(): number | null;
    /**
     * The Issuer Identification Number which uniquely identifies the issuing jurisdiction.
     *
     * @since 7.0.0
     */
    get iin(): string | null;
    /**
     * The identification type of the driver’s license.
     *
     * @since 7.0.0
     */
    get identificationType(): string | null;
    /**
     * The human readable name of the issuing jurisdiction (for example: an issuing state, territory or federal district for USA, or an issuing province or territory for Canada).
     *
     * @since 7.0.0
     */
    get issuingJurisdiction(): string | null;
    /**
     * The ISO code of the issuing jurisdiction (for example: an issuing state, territory or federal district for USA, or an issuing province or territory for Canada).
     *
     * @since 7.0.0
     */
    get issuingJurisdictionIso(): string | null;
    /**
     * A compressed version of the photograph printed on the front of the card.
     *
     * @since 7.0.0
     */
    get jpegData(): string | null;
    /**
     * The jurisdiction specific version number of the implementation.
     *
     * @since 7.0.0
     */
    get jurisdictionVersion(): number | null;
    /**
     * The last name truncation. A code that indicates whether a field has been truncated (‘T’), has not been truncated (‘N’), unknown whether truncated (‘U’), or the information is not present in the document (*null*).
     *
     * @since 7.0.0
     */
    get lastNameTruncation(): string | null;
    /**
     * The name of the country, where the Driver’s License was issued.
     *
     * @since 7.0.0
     */
    get licenseCountryOfIssue(): string | null;
    /**
     * The middle name of the card holder.
     *
     * @since 7.0.0
     */
    get middleName(): string | null;
    /**
     * The middle name truncation. A code that indicates whether a field has been truncated (‘T’), has not been truncated (‘N’), unknown whether truncated (‘U’), or the information is not present in the document (*null*).
     *
     * @since 7.0.0
     */
    get middleNameTruncation(): string | null;
    /**
     * The code of the Morale, Welfare & Recreation (MWR) privilege/benefit flag.
     *
     * @since 7.0.0
     */
    get mwrFlagCode(): string | null;
    /**
     * The description of the Morale, Welfare & Recreation (MWR) privilege/benefit flag.
     *
     * @since 7.0.0
     */
    get mwrFlagDescription(): string | null;
    /**
     * The pay grade of the sponsor. Available since version 2.
     *
     * @since 7.0.0
     */
    get payGrade(): string | null;
    /**
     * The holder’s pay plan code.
     *
     * @since 7.0.0
     */
    get payPlanCode(): string | null;
    /**
     * The holder’s pay plan grade code.
     *
     * @since 7.0.0
     */
    get payPlanGradeCode(): string | null;
    /**
     * The person’s designator identifier (usually, the cardholder’s SSN).
     *
     * @since 7.0.0
     */
    get personDesignatorDocument(): number | null;
    /**
     * The card’s person designator type code.
     *
     * @since 7.0.0
     */
    get personDesignatorTypeCode(): string | null;
    /**
     * The holder’s middle name initial.
     *
     * @since 7.0.0
     */
    get personMiddleInitial(): string | null;
    /**
     * The personal ID number of this Driver’s License holder.
     *
     * @since 7.0.0
     */
    get personalIdNumber(): string | null;
    /**
     * The kind of personal ID number used - “02” means the number of the South Africa ID card.
     *
     * @since 7.0.0
     */
    get personalIdNumberType(): string | null;
    /**
     * The holder’s personnel category code.
     *
     * @since 7.0.0
     */
    get personnelCategoryCode(): string | null;
    /**
     * The holder’s personnel entitlement condition type code.
     *
     * @since 7.0.0
     */
    get personnelEntitlementConditionType(): string | null;
    /**
     * The place of birth of the card holder.
     *
     * @since 7.0.0
     */
    get placeOfBirth(): string | null;
    /**
     * Whether the holder of this License is allowed to transport goods, dangerous goods or passengers for an income.
     *
     * @since 7.0.0
     */
    get professionalDrivingPermit(): ProfessionalDrivingPermit | null;
    /**
     * The race of the card holder.
     *
     * @since 7.0.0
     */
    get race(): string | null;
    /**
     * The holder’s rank.
     *
     * @since 7.0.0
     */
    get rank(): string | null;
    /**
     * The code of the dependent’s relationship to the sponsor.
     *
     * @since 7.0.0
     */
    get relationshipCode(): string | null;
    /**
     * The description of the dependent’s relationship to the sponsor.
     *
     * @since 7.0.0
     */
    get relationshipDescription(): string | null;
    /**
     * The restriction code.
     *
     * @since 7.0.0
     */
    get restrictionsCode(): string | null;
    /**
     * The card security code.
     *
     * @since 7.0.0
     */
    get securityCode(): string | null;
    /**
     * The service code.
     *
     * @since 7.0.0
     */
    get serviceCode(): string | null;
    /**
     * Indicates whether the card holder is sponsor or dependent.
     *
     * @since 7.0.0
     */
    get sponsorFlag(): string | null;
    /**
     * The name of the sponsor.
     *
     * @since 7.0.0
     */
    get sponsorName(): string | null;
    /**
     * The sponsor’s designator identifier (Usually, the cardholder’s SSN).
     *
     * @since 7.0.0
     */
    get sponsorPersonDesignatorIdentifier(): number | null;
    /**
     * The status of the sponsor.
     *
     * @since 7.0.0
     */
    get statusCode(): string | null;
    /**
     * The description of the the code of the status of the sponsor.
     *
     * @since 7.0.0
     */
    get statusCodeDescription(): string | null;
    /**
     * The vehicle classification.
     *
     * @since 7.0.0
     */
    get vehicleClass(): string | null;
    /**
     * The categories of motor vehicles that the holder of this License is permitted to drive.
     *
     * @since 7.0.0
     */
    get vehicleRestrictions(): VehicleRestriction[];
    /**
     * The version of the barcode.
     *
     * @since 7.0.0
     */
    get version(): string | null;
    /**
     * The weight of the card holder in kilograms.
     *
     * @since 7.0.0
     */
    get weightKg(): number | null;
    /**
     * Thw weight of the card holder in pounds.
     *
     * @since 7.0.0
     */
    get weightLbs(): number | null;
    /**
     * Returns true if the document is a Real ID.
     *
     * @since 7.0.0
     */
    get isRealId(): boolean | null;
    /**
     * The mappings between all the barcode data element IDs and their values. The keys of this collection are the element IDs as defined in the AAMVA Driver License/Identification specification. For example, the specification defines a data element “Customer First Name” with the ID “DAC”. Therefore if a scanned barcode contains a string “DACMICHAEL”, then this collection will contain a mapping with “DAC” as the key and “MICHAEL” as the value. This collection contains all the data elements of the barcode - including those that are exposed also explicitly as fields of this class.
     *
     * See Barcode Data Elements for all the possible keys and their meaning.
     *
     * @since 7.0.0
     */
    get barcodeDataElements(): {
        [key: string]: string;
    };
    /**
     * The first name of the document holder.
     *
     * @since 8.0.0
     */
    get firstName(): string | null;
    /**
     * The last name of the document holder.
     *
     * @since 8.0.0
     */
    get lastName(): string | null;
    /**
     * The full name of the document holder.
     *
     * @since 8.0.0
     */
    get fullName(): string | null;
    /**
     * The sex of the document holder.
     *
     * @since 8.0.0
     */
    get sex(): string | null;
    /**
     * The date of birth of the document holder.
     *
     * @since 8.0.0
     */
    get dateOfBirth(): DateResult | null;
    /**
     * The nationality of the document holder.
     *
     * @since 8.0.0
     */
    get nationality(): string | null;
    /**
     * The address of the document holder.
     *
     * @since 8.0.0
     */
    get address(): string | null;
    /**
     * The document number of the ID.
     *
     * @since 8.0.0
     */
    get documentNumber(): string | null;
    /**
     * The expiry date of the document.
     *
     * @since 8.0.0
     */
    get dateOfExpiry(): DateResult | null;
    /**
     * The issue date of the document.
     *
     * @since 8.0.0
     */
    get dateOfIssue(): DateResult | null;
}
interface PrivateBarcodeResult {
    fromJSON(json: BarcodeResultJSON): BarcodeResult;
}

/**
 * This class represents data extracted from a Machine Readable Zone (MRZ). It consolidates information from MRZs that comply with the Machine Readable Travel Documents ICAO standard, as well as various MRZ-like formats supported by the library. Some properties may not apply to certain document types and will be set to nil if the corresponding data is not encoded in the MRZ. For a complete list of supported MRZ types, refer to supported documents.
 *
 * The ID Capture mode supports all versions of Machine Readable Travel Documents (MRTD) specified by the International Civil Aviation Organization (ICAO).The ICAO specifies four types of MRTDs:[TD1 - ID cards](https://www.icao.int/sites/default/files/publications/DocSeries/9303_p5_cons_en.pdf) (id cards)[TD2 - other official travel documents](https://www.icao.int/sites/default/files/publications/DocSeries/9303_p6_cons_en.pdf) (other official travel documents)[TD3/MRP - passports](https://www.icao.int/sites/default/files/publications/DocSeries/9303_p4_cons_en.pdf) (passports)[MRV (A & B type) - visas](https://www.icao.int/sites/default/files/publications/DocSeries/9303_p7_cons_en.pdf) (visas)In addition, the ID Capture mode supports the following non-ICAO standards:SwissDL - Swiss driving license[TD2/FrenchID - French ID](https://en.wikipedia.org/wiki/National_identity_card_(France)) (French identity card)Use the following regex pattern to filter out MRTD codes:TypeRegexTD1 Regex Pattern([A-Z0-9<]{30}\n?){3}TD2 Regex Pattern([A-Z0-9<]{36}\n?){2}TD2 French Regex PatternSame as TD2 Regex PatternTD3 Regex Pattern([A-Z0-9<]{44}\n?){2}MRV_A Regex PatternSame as TD2 Regex PatternMRV_B Regex PatternSame as TD3 Regex PatternSwiss Driving License Regex Pattern[A-Z0-9<]{9}\n([A-Z0-9<]{30}\n?){2}
 *
 * @since 6.14.0
 */
declare class MRZResult {
    private json;
    /**
     * The document type code. One of the following values:
     *
     * P[passport type id] - indicates a passport,ID - indicates an id card,CA - indicates a Canada permanent resident card.CP - indicates a Asia-Pacific Economic Cooperation Business Travel CardCS - indicates an Exit-Entry Permit for Travelling to and from Hong Kong and Macau (往来港澳通行证);CD - indicates an Exit-Entry Permit for Travelling to and from Taiwan (往来台灣通行证).CR - indicates a Mainland Travel Permit for Hong Kong & Macau Residents.CT - indicates a Mainland Travel Permit for Taiwan Residents.
     *
     * @since 6.14.0
     */
    get documentCode(): string;
    /**
     * Indicates whether first or last name is truncated. For more information please refer to the [official specification](https://www.icao.int/sites/default/files/publications/DocSeries/9303_p5_cons_en.pdf).
     *
     * @since 6.14.0
     */
    get namesAreTruncated(): boolean;
    /**
     * Optional data field from line 1 of the MRZ, for use of the issuing country or the organization.
     *
     * For TD-1 documents (such as ID cards), this contains the optional data from the first line. For other document types, this field may be null if no optional data is present on the first line.
     *
     * If {@link IdCaptureSettings.anonymizationMode} is enabled for the field results, the returned value might be *null* for certain documents.
     *
     * @since 7.6.0
     */
    get optionalDataInLine1(): string | null;
    /**
     * Optional data field from line 2 of the MRZ, for use of the issuing country or the organization.
     *
     * If {@link IdCaptureSettings.anonymizationMode} is enabled for the field results, the returned value might be *null* for certain documents.
     *
     * @since 7.6.0
     */
    get optionalDataInLine2(): string | null;
    /**
     * The full MRZ text as it appears on a document.
     *
     * If {@link IdCaptureSettings.anonymizationMode} is enabled for the field results, the returned value might be *null* for certain documents.
     *
     * @since 6.14.0
     */
    get capturedMrz(): string | null;
    /**
     * The personal ID Number of the document holder.
     *
     * @since 7.0.0
     */
    get personalIdNumber(): string | null;
    /**
     * The number of times the document has been renewed.
     *
     * @since 7.0.0
     */
    get renewalTimes(): number | null;
    /**
     * The holder’s name in Simplified Chinese characters.
     *
     * @since 7.0.0
     */
    get fullNameSimplifiedChinese(): string | null;
    /**
     * The number of Chinese characters omitted in in GBK (a character encoding for Simplified Chinese characters used in the People’s Republic of China) name.
     *
     * @since 7.0.0
     */
    get omittedCharacterCountInGbkName(): number | null;
    /**
     * The number of names that couldn’t be displayed in the MRZ.
     *
     * @since 7.0.0
     */
    get omittedNameCount(): number | null;
    /**
     * The code of the authority that issued this document.
     *
     * @since 7.0.0
     */
    get issuingAuthorityCode(): string | null;
    /**
     * The ISO code of the issuing jurisdiction.
     *
     * @since 7.0.0
     */
    get passportIssuerIso(): string | null;
    /**
     * The passport number of the document holder.
     *
     * @since 7.0.0
     */
    get passportNumber(): string | null;
    /**
     * The visa number, populated when a per-country rule maps it from the MRZ.
     *
     * @since 8.7.0
     */
    get visaNumber(): string | null;
    /**
     * The number of entries the visa permits, parsed on a best-effort basis from optional data in line 2.
     *
     * @since 8.7.0
     */
    get visaNumberOfEntries(): number | null;
    /**
     * Whether the visa permits multiple entries, parsed on a best-effort basis from optional data in line 2.
     *
     * @since 8.7.0
     */
    get visaMultipleEntries(): boolean | null;
    /**
     * The duration of stay in days the visa permits, parsed on a best-effort basis from optional data in line 2.
     *
     * @since 8.7.0
     */
    get visaDurationInDays(): number | null;
    /**
     * Sub-category of a passport derived from the MRZ document code.
     *
     * @since 8.7.0
     */
    get passportType(): PassportType | null;
    /**
     * The expiry date of the holder’s passport.
     *
     * @since 7.0.0
     */
    get passportDateOfExpiry(): DateResult | null;
    /**
     * The first name of the document holder. Certain documents do not distinguish between given name and surname. If the name cannot be split reliably, this field may be null.
     *
     * @since 8.0.0
     */
    get firstName(): string | null;
    /**
     * The last name of the document holder. Certain documents do not distinguish between given name and surname. If the name cannot be split reliably, this field may be null.
     *
     * @since 8.0.0
     */
    get lastName(): string | null;
    /**
     * The full name of the document holder.
     *
     * @since 8.0.0
     */
    get fullName(): string | null;
    /**
     * The sex of the document holder.
     *
     * @since 8.0.0
     */
    get sex(): string | null;
    /**
     * The date of birth of the document holder.
     *
     * @since 8.0.0
     */
    get dateOfBirth(): DateResult | null;
    /**
     * The nationality of the document holder.
     *
     * @since 8.0.0
     */
    get nationality(): string | null;
    /**
     * The address of the document holder.
     *
     * @since 8.0.0
     */
    get address(): string | null;
    /**
     * The document number of the ID.
     *
     * @since 8.0.0
     */
    get documentNumber(): string | null;
    /**
     * The expiry date of the document.
     *
     * @since 8.0.0
     */
    get dateOfExpiry(): DateResult | null;
    /**
     * The issue date of the document.
     *
     * @since 8.0.0
     */
    get dateOfIssue(): DateResult | null;
    private static fromJSON;
}
interface PrivateMRZResult {
    fromJSON(json: MRZResultJSON): MRZResult;
}

/**
 * @since 8.0.0
 */
declare class DrivingLicenseCategory {
    private json;
    /**
     * Driver’s license code representing type of vehicle.
     *
     * @since 8.0.0
     */
    get code(): string;
    /**
     * The date of issue for the accompanying driver’s license code.
     *
     * @since 8.0.0
     */
    get dateOfIssue(): DateResult | null;
    /**
     * The date of expiry for the accompanying driver’s license code.
     *
     * @since 8.0.0
     */
    get dateOfExpiry(): DateResult | null;
    private static fromJSON;
}
interface PrivateDrivingLicenseCategory {
    fromJSON(json: DrivingLicenseCategoryJSON | null): DrivingLicenseCategory | null;
}

/**
 * @since 8.0.0
 */
declare class DrivingLicenseDetails {
    private json;
    private _drivingLicenseCategories;
    private static fromJSON;
    /**
     * Additional information from driver licenses such as vehicle categories.
     *
     * @since 8.0.0
     */
    get drivingLicenseCategories(): DrivingLicenseCategory[];
    /**
     * The restrictions to driving privileges for the driver license owner.
     *
     * @since 8.0.0
     */
    get restrictions(): string | null;
    /**
     * The additional privileges granted to the driver license owner.
     *
     * @since 8.0.0
     */
    get endorsements(): string | null;
}
interface PrivateDrivingLicenseDetails {
    fromJSON(json: DrivingLicenseDetailsJSON | null): DrivingLicenseDetails | null;
}

/**
 * This class represents data extracted from a visa document processed in the cloud.
 *
 * @since 8.7.0
 */
declare class VisaDetails {
    private json;
    private static fromJSON;
    /**
     * The full name of the person holding the visa or applicant on the document.
     *
     * @since 8.7.0
     */
    get fullName(): string | null;
    /**
     * The number of the visa.
     *
     * @since 8.7.0
     */
    get visaNumber(): string | null;
    /**
     * The number of the passport referenced by the visa.
     *
     * @since 8.7.0
     */
    get passportNumber(): string | null;
    /**
     * The foil number of the visa, if available. Typically an eight-digit alphanumeric code printed in red ink on a U.S. visa sticker, usually found in the lower right-hand corner.
     *
     * @since 8.7.0
     */
    get foilNumber(): string | null;
    /**
     * The ISO code (Alpha-3 code) of the country issuing the document.
     *
     * @since 8.7.0
     */
    get issuingCountryIso(): string | null;
    /**
     * The authority that issued the document, or the place where it was issued.
     *
     * @since 8.7.0
     */
    get issuingAuthority(): string | null;
    /**
     * The geographic validity of the document. For example “Schengen States” or “United States of America”.
     *
     * @since 8.7.0
     */
    get geographicValidity(): string | null;
    /**
     * The type of the visa. Usually a single character like ‘C’, ‘A’ or ‘D’.
     *
     * @since 8.7.0
     */
    get visaType(): string | null;
    /**
     * The duration of the visa in days.
     *
     * @since 8.7.0
     */
    get durationInDays(): number | null;
    /**
     * The number of entries allowed on the visa.
     *
     * @since 8.7.0
     */
    get numberOfEntries(): number | null;
    /**
     * Whether the visa allows multiple entries.
     *
     * @since 8.7.0
     */
    get multipleEntries(): boolean | null;
    /**
     * The status of the application for the document.
     *
     * @since 8.7.0
     */
    get applicationStatus(): ApplicationStatus | null;
    /**
     * The date when the visa was issued.
     *
     * @since 8.7.0
     */
    get dateOfIssue(): DateResult | null;
    /**
     * The start date of the visa validity.
     *
     * @since 8.7.0
     */
    get validFrom(): DateResult | null;
    /**
     * The end date of the visa validity. Sometimes also called “expiry date”.
     *
     * @since 8.7.0
     */
    get validUntil(): DateResult | null;
}
interface PrivateVisaDetails {
    fromJSON(json: VisaDetailsJSON | null): VisaDetails | null;
}

/**
 * Document scan results with information obtained from documents or their parts intended to be read by humans (for example Visual Inspection Zone (VIZ) of a Machine-Readable Travel Document (MRTD)).
 *
 * @since 6.14.0
 */
declare class VIZResult {
    private json;
    /**
     * The additional address information of the document holder.
     *
     * @since 6.14.0
     */
    get additionalAddressInformation(): string | null;
    /**
     * The additional name information of the document holder that might be present on the document.
     *
     * The content of this field varies by document type:**German passports and IDs**: Contains the maiden name or birth name of the document holder**French passports**: Contains the married name of the document holder
     *
     * @since 6.14.0
     */
    get additionalNameInformation(): string | null;
    /**
     * The additional number of the document.
     *
     * If {@link IdCaptureSettings.anonymizationMode} is enabled for the field results, the returned value might be *null* for certain documents.
     *
     * @since 6.14.0
     */
    get documentAdditionalNumber(): string | null;
    /**
     * The employer of the document holder.
     *
     * @since 6.14.0
     */
    get employer(): string | null;
    /**
     * The government body issuing this ID, e.g. the Department of Motor Vehicles.
     *
     * @since 6.14.0
     */
    get issuingAuthority(): string | null;
    /**
     * A human readable name of the issuing jurisdiction (for example: an issuing state, territory or federal district for USA, or an issuing province or territory for Canada).
     *
     * @since 6.14.0
     */
    get issuingJurisdiction(): string | null;
    /**
     * The ISO code of the issuing jurisdiction (for example: an issuing state, territory or federal district for the USA, or an issuing province or territory for Canada). *null* if the issuing jurisdiction has no valid ISO code (for example cities in Mexico).
     *
     * The returned value will only contain the jurisdiction specific code: for instance for California the returned value would be “CA” and not “US-CA”.Please note that for the New York City ID, this field is set to “NYC” as ISO-3166-2 does not specify city-level names.
     *
     * @since 6.14.0
     */
    get issuingJurisdictionIso(): string | null;
    /**
     * The marital status of the document holder.
     *
     * @since 6.14.0
     */
    get maritalStatus(): string | null;
    /**
     * The personal identification number.
     *
     * If {@link IdCaptureSettings.anonymizationMode} is enabled for the field results, the returned value might be *null* for certain documents.
     *
     * @since 6.14.0
     */
    get personalIdNumber(): string | null;
    /**
     * The place of birth of the document holder.
     *
     * @since 6.14.0
     */
    get placeOfBirth(): string | null;
    /**
     * The profession of the document holder.
     *
     * @since 6.14.0
     */
    get profession(): string | null;
    /**
     * The race of the document holder.
     *
     * @since 6.14.0
     */
    get race(): string | null;
    /**
     * The religion of the document holder.
     *
     * If {@link IdCaptureSettings.anonymizationMode} is enabled for the field results, the returned value might be *null* for certain documents.
     *
     * @since 6.14.0
     */
    get religion(): string | null;
    /**
     * The residential status of the document holder.
     *
     * @since 6.14.0
     */
    get residentialStatus(): string | null;
    private get usRealIdStatus();
    /**
     * The sides of the document that were scanned to extract this VizResult.
     *
     * @since 6.14.0
     */
    get capturedSides(): CapturedSides;
    /**
     * Indicates whether the document supports scanning of the back side.
     *
     * @since 6.14.0
     */
    get isBackSideCaptureSupported(): boolean;
    /**
     * The blood type of the document owner.
     *
     * @since 6.25.0
     */
    get bloodType(): string | null;
    /**
     * The sponsor of the document owner.
     *
     * @since 6.25.0
     */
    get sponsor(): string | null;
    /**
     * The mother’s name of the document owner.
     *
     * @since 6.25.0
     */
    get mothersName(): string | null;
    /**
     * The father’s name of the document owner.
     *
     * @since 6.25.0
     */
    get fathersName(): string | null;
    /**
     * The passport number of the document holder.
     *
     * @since 7.0.0
     */
    get passportNumber(): string | null;
    /**
     * The visa number of the document holder.
     *
     * @since 7.0.0
     */
    get visaNumber(): string | null;
    /**
     * The owner of the vehicle.
     *
     * @since 8.0.0
     */
    get vehicleOwner(): string | null;
    /**
     * Extra information about the scanned driver’s license
     *
     * @since 8.0.0
     */
    get drivingLicenseDetails(): DrivingLicenseDetails | null;
    /**
     * Extra information about the scanned visa.
     *
     * @since 8.7.0
     */
    get visaDetails(): VisaDetails | null;
    /**
     * The first name of the document holder. Separated by spaces if more than one name is present. Certain documents do not distinguish between given name and surname. If the name cannot be split reliably, this field may be null.
     *
     * @since 7.0.0
     */
    get firstName(): string | null;
    /**
     * The last name of the document holder. Separated by spaces if more than one name is present. Certain documents do not distinguish between given name and surname. If the name cannot be split reliably, this field may be null.
     *
     * @since 7.0.0
     */
    get lastName(): string | null;
    /**
     * The full name of the document holder.
     *
     * @since 7.0.0
     */
    get fullName(): string | null;
    /**
     * The sex of the document holder.
     *
     * @since 8.0.0
     */
    get sex(): string | null;
    /**
     * The date of birth of the document holder.
     *
     * @since 8.0.0
     */
    get dateOfBirth(): DateResult | null;
    /**
     * The nationality of the document holder.
     *
     * @since 8.0.0
     */
    get nationality(): string | null;
    /**
     * The address of the document holder.
     *
     * @since 8.0.0
     */
    get address(): string | null;
    /**
     * The document number of the ID.
     *
     * @since 8.0.0
     */
    get documentNumber(): string | null;
    /**
     * The expiry date of the document.
     *
     * @since 8.0.0
     */
    get dateOfExpiry(): DateResult | null;
    /**
     * The issue date of the document.
     *
     * @since 8.0.0
     */
    get dateOfIssue(): DateResult | null;
    private static fromJSON;
}
interface PrivateVIZResult {
    fromJSON(json: VIZResultJSON): VIZResult;
    readonly usRealIdStatus: UsRealIdStatus | null;
}

/**
 * A category of documents, such as ID cards, driver’s licenses, or passports.
 *
 * @since 7.0.0
 */
interface IdCaptureDocument {
    /**
     * Specifies the region (e.g., country) where the document was issued.
     *
     * @since 7.0.0
     */
    readonly region: IdCaptureRegion;
    /**
     * Enum {@link IdCaptureDocumentType} associated with this instance.
     *
     * @since 8.2.0
     */
    readonly documentType: IdCaptureDocumentType$1;
    /**
     * Indicates whether the document is of type {@link IdCard}.
     *
     * @since 7.0.0
     */
    isIdCard: boolean;
    /**
     * Indicates whether the document is of type {@link DriverLicense}.
     *
     * @since 7.0.0
     */
    isDriverLicense: boolean;
    /**
     * Indicates whether the document is of type {@link Passport}.
     *
     * @since 7.0.0
     */
    isPassport: boolean;
    /**
     * Indicates whether the document is of type {@link VisaIcao}.
     *
     * @since 7.0.0
     */
    isVisaIcao: boolean;
    /**
     * Indicates whether the document is of type {@link RegionSpecific}.
     *
     * @since 7.0.0
     */
    isRegionSpecific: boolean;
    /**
     * Indicates whether the document is of type {@link ResidencePermit}.
     *
     * @since 7.0.0
     */
    isResidencePermit: boolean;
    /**
     * Indicates whether the document is of type {@link HealthInsuranceCard}.
     *
     * @since 7.0.0
     */
    isHealthInsuranceCard: boolean;
    /**
     * Indicates whether the document is of type {@link VisaLetter}.
     *
     * @since 8.7.0
     */
    isVisaLetter: boolean;
}

/**
 * A category of documents that confirms the holder’s right to drive or operate vehicles.
 *
 * @since 7.0.0
 */
declare class DriverLicense extends DefaultSerializeable implements IdCaptureDocument {
    private readonly _region;
    private readonly _documentType;
    /**
     * Creates a new {@link DriverLicense} instance.
     *
     * @since 7.0.0
     */
    constructor(region: IdCaptureRegion);
    /**
     * Enum {@link IdCaptureDocumentType} associated with this instance.
     *
     * @since 8.2.0
     */
    get documentType(): IdCaptureDocumentType$1;
    /**
     * Specifies the region (e.g., country) where the document was issued.
     *
     * @since 8.2.0
     */
    get region(): IdCaptureRegion;
    get isIdCard(): boolean;
    get isDriverLicense(): boolean;
    get isPassport(): boolean;
    get isVisaIcao(): boolean;
    get isRegionSpecific(): boolean;
    get isResidencePermit(): boolean;
    get isHealthInsuranceCard(): boolean;
    get isVisaLetter(): boolean;
}

/**
 * A category of documents that provide proof of an individual’s health insurance coverage, typically issued by a health insurer or government agency.
 *
 * @since 7.0.0
 */
declare class HealthInsuranceCard extends DefaultSerializeable implements IdCaptureDocument {
    private readonly _region;
    private readonly _documentType;
    /**
     * Creates a new {@link HealthInsuranceCard} instance.
     *
     * @since 7.0.0
     */
    constructor(region: IdCaptureRegion);
    /**
     * Enum {@link IdCaptureDocumentType} associated with this instance.
     *
     * @since 8.2.0
     */
    get documentType(): IdCaptureDocumentType$1;
    /**
     * Specifies the region (e.g., country) where the document was issued.
     *
     * @since 8.2.0
     */
    get region(): IdCaptureRegion;
    get isIdCard(): boolean;
    get isDriverLicense(): boolean;
    get isPassport(): boolean;
    get isVisaIcao(): boolean;
    get isRegionSpecific(): boolean;
    get isResidencePermit(): boolean;
    get isHealthInsuranceCard(): boolean;
    get isVisaLetter(): boolean;
}

/**
 * A category of state-issued documents primarily designed to confirm a citizen’s identity, voting rights, or age. This category includes documents commonly referred to as ID Cards, Voting IDs, and Proof of Age Cards. It also encompasses Passport Cards issued by certain jurisdictions, which provide limited travel rights.
 *
 * While other documents (e.g., driver’s licenses, passports, residence permits) may serve as identification in certain regions, they are not included in this category.
 *
 * @since 7.0.0
 */
declare class IdCard extends DefaultSerializeable implements IdCaptureDocument {
    private readonly _region;
    private readonly _documentType;
    /**
     * Creates a new {@link IdCard} instance.
     *
     * @since 7.0.0
     */
    constructor(region: IdCaptureRegion);
    /**
     * Enum {@link IdCaptureDocumentType} associated with this instance.
     *
     * @since 8.2.0
     */
    get documentType(): IdCaptureDocumentType$1;
    /**
     * Specifies the region (e.g., country) where the document was issued.
     *
     * @since 8.2.0
     */
    get region(): IdCaptureRegion;
    get isIdCard(): boolean;
    get isDriverLicense(): boolean;
    get isPassport(): boolean;
    get isVisaIcao(): boolean;
    get isRegionSpecific(): boolean;
    get isResidencePermit(): boolean;
    get isHealthInsuranceCard(): boolean;
    get isVisaLetter(): boolean;
}

/**
 * A category of official government-issued documents that verify a person’s identity and nationality, enabling international travel.
 *
 * Passport Cards and other documents used for regional travel are not included in this category.
 *
 * @since 7.0.0
 */
declare class Passport extends DefaultSerializeable implements IdCaptureDocument {
    private readonly _region;
    private readonly _documentType;
    /**
     * Creates a new {@link Passport} instance.
     *
     * @since 7.0.0
     */
    constructor(region: IdCaptureRegion);
    /**
     * Enum {@link IdCaptureDocumentType} associated with this instance.
     *
     * @since 8.2.0
     */
    get documentType(): IdCaptureDocumentType$1;
    /**
     * Specifies the region (e.g., country) where the document was issued.
     *
     * @since 8.2.0
     */
    get region(): IdCaptureRegion;
    get isIdCard(): boolean;
    get isDriverLicense(): boolean;
    get isPassport(): boolean;
    get isVisaIcao(): boolean;
    get isRegionSpecific(): boolean;
    get isResidencePermit(): boolean;
    get isHealthInsuranceCard(): boolean;
    get isVisaLetter(): boolean;
}

/**
 * A category of documents that do not fall into other established categories and lack a recognized international standard. These documents grant privileges or serve specific purposes within a particular region or jurisdiction, often related to local regulations or services.
 *
 * @since 7.0.0
 */
declare class RegionSpecific extends DefaultSerializeable implements IdCaptureDocument {
    private readonly _region;
    private readonly _documentSubtype;
    private readonly _documentType;
    /**
     * Creates a new {@link RegionSpecific} instance.
     *
     * @since 7.0.0
     */
    constructor(subtype: RegionSpecificSubtype);
    /**
     * Enum {@link IdCaptureDocumentType} associated with this instance.
     *
     * @since 8.2.0
     */
    get documentType(): IdCaptureDocumentType$1;
    /**
     * Specifies the region (e.g., country) where the document was issued.
     *
     * @since 8.2.0
     */
    get region(): IdCaptureRegion;
    /**
     * Enum {@link RegionSpecificSubtype} indicating the region-specific subtype associated with this instance.
     *
     * @since 7.0.0
     */
    get subtype(): RegionSpecificSubtype;
    get isIdCard(): boolean;
    get isDriverLicense(): boolean;
    get isPassport(): boolean;
    get isVisaIcao(): boolean;
    get isRegionSpecific(): boolean;
    get isResidencePermit(): boolean;
    get isHealthInsuranceCard(): boolean;
    get isVisaLetter(): boolean;
}

/**
 * A category of documents issued to confirm the identity of non-citizens and their right to reside for an extended period within a given jurisdiction. These are sometimes referred to as Resident IDs or Alien IDs.
 *
 * @since 7.0.0
 */
declare class ResidencePermit extends DefaultSerializeable implements IdCaptureDocument {
    private readonly _region;
    private readonly _documentType;
    /**
     * Creates a new {@link ResidencePermit} instance.
     *
     * @since 7.0.0
     */
    constructor(region: IdCaptureRegion);
    /**
     * Enum {@link IdCaptureDocumentType} associated with this instance.
     *
     * @since 8.2.0
     */
    get documentType(): IdCaptureDocumentType$1;
    /**
     * Specifies the region (e.g., country) where the document was issued.
     *
     * @since 8.2.0
     */
    get region(): IdCaptureRegion;
    get isIdCard(): boolean;
    get isDriverLicense(): boolean;
    get isPassport(): boolean;
    get isVisaIcao(): boolean;
    get isRegionSpecific(): boolean;
    get isResidencePermit(): boolean;
    get isHealthInsuranceCard(): boolean;
    get isVisaLetter(): boolean;
}

/**
 * A category of travel documents that temporarily permit a foreigner to enter, remain in, or leave the issuing jurisdiction. Only documents that comply with the ICAO Machine Readable Travel Document (MRTD) standard are included in this category.
 *
 * This category does not include documents that grant similar privileges but do not adhere to the ICAO MRTD standard, such as the US Border Crossing Card or travel permits for autonomous regions like Hong Kong and Macao issued by China.
 *
 * @since 7.0.0
 */
declare class VisaIcao extends DefaultSerializeable implements IdCaptureDocument {
    private readonly _region;
    private readonly _documentType;
    /**
     * Creates a new {@link VisaIcao} instance.
     *
     * @since 7.0.0
     */
    constructor(region: IdCaptureRegion);
    /**
     * Enum {@link IdCaptureDocumentType} associated with this instance.
     *
     * @since 8.2.0
     */
    get documentType(): IdCaptureDocumentType$1;
    /**
     * Specifies the region (e.g., country) where the document was issued.
     *
     * @since 8.2.0
     */
    get region(): IdCaptureRegion;
    get isIdCard(): boolean;
    get isDriverLicense(): boolean;
    get isPassport(): boolean;
    get isVisaIcao(): boolean;
    get isRegionSpecific(): boolean;
    get isResidencePermit(): boolean;
    get isHealthInsuranceCard(): boolean;
    get isVisaLetter(): boolean;
}

/**
 * Visa document issued by an authority to enter, remain or leave a territory.
 *
 * This document type is experimental and may be subject to change in the future. This document can only be used with a compliant license key. Please contact Scandit Support to enable this feature.
 *
 * @since 8.7.0
 */
declare class VisaLetter extends DefaultSerializeable implements IdCaptureDocument {
    private readonly _region;
    private readonly _documentType;
    /**
     * Creates a new {@link VisaLetter} instance.
     *
     * @since 8.7.0
     */
    constructor(region: IdCaptureRegion);
    /**
     * Enum {@link IdCaptureDocumentType} associated with this instance.
     *
     * @since 8.7.0
     */
    get documentType(): IdCaptureDocumentType$1;
    /**
     * Specifies the region (e.g., country) where the document was issued.
     *
     * @since 8.7.0
     */
    get region(): IdCaptureRegion;
    get isIdCard(): boolean;
    get isDriverLicense(): boolean;
    get isPassport(): boolean;
    get isVisaIcao(): boolean;
    get isRegionSpecific(): boolean;
    get isResidencePermit(): boolean;
    get isHealthInsuranceCard(): boolean;
    get isVisaLetter(): boolean;
}



/**
 * This class represents data extracted from mobile documents using optical character recognition (OCR). It contains information from mobile driver’s licenses captured using OCR-based scanning methods, such as Australian mobile driver licenses. Some properties may not apply to certain document types and will be set to nil if the corresponding data is not available or could not be extracted via OCR.
 *
 * @since 8.0.0
 */
declare class MobileDocumentOCRResult {
    private json;
    /**
     * The first name of the document holder extracted via OCR.
     *
     * @since 8.0.0
     */
    get firstName(): string | null;
    /**
     * The last name of the document holder extracted via OCR.
     *
     * @since 8.0.0
     */
    get lastName(): string | null;
    /**
     * The full name of the document holder extracted via OCR.
     *
     * @since 8.0.0
     */
    get fullName(): string | null;
    /**
     * The date of birth of the document holder extracted via OCR.
     *
     * @since 8.0.0
     */
    get dateOfBirth(): DateResult | null;
    /**
     * The document number extracted via OCR.
     *
     * @since 8.0.0
     */
    get documentNumber(): string | null;
    /**
     * The date of expiry of the document extracted via OCR.
     *
     * @since 8.0.0
     */
    get dateOfExpiry(): DateResult | null;
    /**
     * The issuing jurisdiction of the document extracted via OCR.
     *
     * @since 8.0.0
     */
    get issuingJurisdiction(): string | null;
    /**
     * The ISO code of the issuing jurisdiction extracted via OCR.
     *
     * @since 8.0.0
     */
    get issuingJurisdictionIso(): string | null;
    /**
     * The sex of the document holder extracted via OCR.
     *
     * @since 8.0.0
     */
    get sex(): string | null;
    /**
     * The nationality of the document holder extracted via OCR.
     *
     * @since 8.0.0
     */
    get nationality(): string | null;
    /**
     * The address of the document holder extracted via OCR.
     *
     * @since 8.0.0
     */
    get address(): string | null;
    /**
     * The additional document number extracted via OCR.
     *
     * @since 8.0.0
     */
    get documentAdditionalNumber(): string | null;
    /**
     * The date of issue of the document extracted via OCR.
     *
     * @since 8.0.0
     */
    get dateOfIssue(): DateResult | null;
    private static fromJSON;
}
interface PrivateMobileDocumentOCRResult {
    fromJSON(json: MobileDocumentOCRResultJSON | null): MobileDocumentOCRResult | null;
}

/**
 * This class represents data extracted from mobile identity documents. It contains information from mobile driver’s licenses and other mobile identity documents that comply with various standards such as ISO 18013-5. Some properties may not apply to certain document types and will be set to nil if the corresponding data is not available in the mobile document.
 *
 * @since 8.0.0
 */
declare class MobileDocumentResult {
    private json;
    private _drivingLicenseCategories;
    /**
     * The portrait image of the document holder, as a base64 string.
     *
     * @since 8.0.0
     */
    get portrait(): string | null;
    /**
     * The signature image of the document holder, as a base64 string. The type is nullable for symmetry with the portrait property, but a document without a signature yields an empty string rather than *null*, so check for emptiness before using the value as an image source.
     *
     * @since 8.7.0
     */
    get signature(): string | null;
    /**
     * The authority that issued the mobile document.
     *
     * @since 8.0.0
     */
    get issuingAuthority(): string;
    /**
     * The administrative number associated with the mobile document.
     *
     * @since 8.0.0
     */
    get administrativeNumber(): string | null;
    /**
     * The height of the document holder in centimeters.
     *
     * @since 8.0.0
     */
    get height(): number | null;
    /**
     * The weight of the document holder in kilograms.
     *
     * @since 8.0.0
     */
    get weight(): number | null;
    /**
     * The eye color of the document holder.
     *
     * @since 8.0.0
     */
    get eyeColor(): string | null;
    /**
     * The hair color of the document holder.
     *
     * @since 8.0.0
     */
    get hairColor(): string | null;
    /**
     * The place of birth of the document holder.
     *
     * @since 8.0.0
     */
    get birthPlace(): string | null;
    /**
     * The list of driving license categories associated with the mobile document. Each category contains information about the type of vehicle the holder is authorized to operate and the validity period of the authorization.
     *
     * @since 8.0.0
     */
    get drivingLicenseCategories(): DrivingLicenseCategory[];
    /**
     * The city of residence of the document holder.
     *
     * @since 8.0.0
     */
    get residentCity(): string | null;
    /**
     * The country of residence of the document holder.
     *
     * @since 8.0.0
     */
    get residentCountry(): string | null;
    /**
     * The first name of the document holder.
     *
     * @since 8.0.0
     */
    get firstName(): string | null;
    /**
     * The last name of the document holder.
     *
     * @since 8.0.0
     */
    get lastName(): string | null;
    /**
     * The full name of the document holder.
     *
     * @since 8.0.0
     */
    get fullName(): string | null;
    /**
     * The sex of the document holder as a string.
     *
     * @since 8.0.0
     */
    get sex(): string | null;
    /**
     * The date of birth of the document holder.
     *
     * @since 8.0.0
     */
    get dateOfBirth(): DateResult | null;
    /**
     * The age of the document holder.
     *
     * @since 8.0.0
     */
    get age(): number | null;
    /**
     * The nationality of the document holder.
     *
     * @since 8.0.0
     */
    get nationality(): string | null;
    /**
     * The address of the document holder.
     *
     * @since 8.0.0
     */
    get address(): string | null;
    /**
     * The ISO code of the issuing country.
     *
     * @since 8.0.0
     */
    get issuingCountryIso(): string | null;
    /**
     * The ISO code of the issuing jurisdiction.
     *
     * @since 8.0.0
     */
    get issuingJurisdictionIso(): string | null;
    /**
     * The document number.
     *
     * @since 8.0.0
     */
    get documentNumber(): string | null;
    /**
     * The date of expiry of the document.
     *
     * @since 8.0.0
     */
    get dateOfExpiry(): DateResult | null;
    /**
     * The date of issue of the document.
     *
     * @since 8.0.0
     */
    get dateOfIssue(): DateResult | null;
    private static fromJSON;
}
interface PrivateMobileDocumentResult {
    fromJSON(json: MobileDocumentResultJSON | null): MobileDocumentResult | null;
}

/**
 * The verification result of a comparison between the human-readable data of the document with the data encoded in either MRZ or barcode.
 *
 * This result is returned in {@link VerificationResult} when {@link IdCaptureSettings.rejectInconsistentData} is enabled.
 *
 * @since 8.0.0
 */
declare class DataConsistencyResult {
    private json;
    /**
     * All checks passed and nothing suspicious about the document was detected.
     *
     * @since 8.0.0
     */
    get allChecksPassed(): boolean;
    /**
     * The checks that failed
     *
     * @since 8.0.0
     */
    get failedChecks(): DataConsistencyCheck[];
    /**
     * The checks that were skipped
     *
     * @since 8.0.0
     */
    get skippedChecks(): DataConsistencyCheck[];
    /**
     * The checks that passed
     *
     * @since 8.0.0
     */
    get passedChecks(): DataConsistencyCheck[];
    /**
     * Image with mismatched fields highlighted. Requires calling {@link IdCaptureSettings.setShouldPassImageTypeToResult} with {@link IdImageType.CroppedDocument} enabled before creating the {@link IdCapture} instance.
     *
     * @since 8.0.0
     */
    get frontReviewImage(): string | null;
    private static fromJSON;
}
interface PrivateDataConsistencyResult {
    fromJSON(json: DataConsistencyResultJSON | null): DataConsistencyResult | null;
}

/**
 * The verification result of identification documents
 *
 * @since 8.0.0
 */
declare class VerificationResult {
    private json;
    private _dataConsistency;
    private _aamvaBarcodeVerification;
    /**
     * The verification result of a comparison between the human-readable data of the document with the data encoded in either MRZ or barcode when {@link IdCaptureSettings.rejectInconsistentData} is enabled
     *
     * @since 8.0.0
     */
    get dataConsistency(): DataConsistencyResult | null;
    /**
     * The verification result of AAMVA-compliant personal identification documents when {@link IdCaptureSettings.rejectForgedAamvaBarcodes} is enabled
     *
     * @since 8.0.0
     */
    get aamvaBarcodeVerification(): AamvaBarcodeVerificationResult | null;
    private static fromJSON;
}
interface PrivateVerificationResult {
    fromJSON(json: VerificationResultJSON | null): VerificationResult;
}

/**
 * An enumeration of possible ID document field types that can be referenced for anonymization purposes.
 *
 * @since 8.0.0
 */
declare enum IdFieldType {
    /**
     * Additional address information field.
     *
     * @since 8.0.0
     */
    AdditionalAddressInformation = "additionalAddressInformation",
    /**
     * Additional name information field.
     *
     * @since 8.0.0
     */
    AdditionalNameInformation = "additionalNameInformation",
    /**
     * Address field.
     *
     * @since 8.0.0
     */
    Address = "address",
    /**
     * Age field.
     *
     * @since 8.0.0
     */
    Age = "age",
    /**
     * Barcode dictionary field.
     *
     * @since 8.0.0
     */
    BarcodeDictionary = "barcodeDictionary",
    /**
     * Blood type field.
     *
     * @since 8.0.0
     */
    BloodType = "bloodType",
    /**
     * Date of birth field.
     *
     * @since 8.0.0
     */
    DateOfBirth = "dateOfBirth",
    /**
     * Date of expiry field.
     *
     * @since 8.0.0
     */
    DateOfExpiry = "dateOfExpiry",
    /**
     * Date of issue field.
     *
     * @since 8.0.0
     */
    DateOfIssue = "dateOfIssue",
    /**
     * Document additional number field.
     *
     * @since 8.0.0
     */
    DocumentAdditionalNumber = "documentAdditionalNumber",
    /**
     * Document number field.
     *
     * @since 8.0.0
     */
    DocumentNumber = "documentNumber",
    /**
     * Employer field.
     *
     * @since 8.0.0
     */
    Employer = "employer",
    /**
     * Father’s name field.
     *
     * @since 8.0.0
     */
    FathersName = "fathersName",
    /**
     * First name field.
     *
     * @since 8.0.0
     */
    FirstName = "firstName",
    /**
     * Full name field.
     *
     * @since 8.0.0
     */
    FullName = "fullName",
    /**
     * Issuing authority field.
     *
     * @since 8.0.0
     */
    IssuingAuthority = "issuingAuthority",
    /**
     * Last name field.
     *
     * @since 8.0.0
     */
    LastName = "lastName",
    /**
     * Marital status field.
     *
     * @since 8.0.0
     */
    MaritalStatus = "maritalStatus",
    /**
     * Mother’s name field.
     *
     * @since 8.0.0
     */
    MothersName = "mothersName",
    /**
     * MRZ optional data in line 1 field.
     *
     * @since 8.0.0
     */
    MrzOptionalDataInLine1 = "mrzOptionalDataInLine1",
    /**
     * MRZ optional data in line 2 field.
     *
     * @since 8.0.0
     */
    MrzOptionalDataInLine2 = "mrzOptionalDataInLine2",
    /**
     * Nationality field.
     *
     * @since 8.0.0
     */
    Nationality = "nationality",
    /**
     * Personal ID number field.
     *
     * @since 8.0.0
     */
    PersonalIdNumber = "personalIdNumber",
    /**
     * Place of birth field.
     *
     * @since 8.0.0
     */
    PlaceOfBirth = "placeOfBirth",
    /**
     * Profession field.
     *
     * @since 8.0.0
     */
    Profession = "profession",
    /**
     * Race field.
     *
     * @since 8.0.0
     */
    Race = "race",
    /**
     * Religion field.
     *
     * @since 8.0.0
     */
    Religion = "religion",
    /**
     * Residential status field.
     *
     * @since 8.0.0
     */
    ResidentialStatus = "residentialStatus",
    /**
     * Sex field.
     *
     * @since 8.0.0
     */
    Sex = "sex"
}

/**
 * This class represents the result of a document scan. It provides commonly present information, such as the holder’s name and date of birth, directly accessible at the top level. Additional document-specific details can be accessed through properties representing different zones of the document, such as the barcode, machine-readable zone (MRZ), and visual inspection zone (VIZ).
 *
 * Note that not all properties are relevant to every document type. If a property is not applicable or the corresponding data could not be read, it will be set to *null*.
 *
 * @since 6.14.0
 */
declare class CapturedId {
    private _mobileDocument;
    private _mobileDocumentOcr;
    private _verificationResult;
    private json;
    private _document;
    private _barcodeResult;
    private _mrzResult;
    private _vizResult;
    private _images;
    private static fromJSON;
    private static getDocument;
    /**
     * The age of the document holder. Calculated as the difference in full years between the birth date and the current local date. If *null* is returned it means that the full birth date is not available. The returned value depends on the device date. The same document may result in different values for devices with different dates (e.g. in different time zones, or with a date set manually by the user).
     *
     * @since 6.21.0
     */
    get age(): number | null;
    /**
     * Whether this document is expired. Calculated by comparing the document’s expiration date with the current local date. *true* if the document is expired and *false* when either not expired, or never expires. *null* is returned if the value of this property could not be determined - for example if the date of expiry is not present, or if the date of expiry couldn’t be captured. Please note that the system time is used for computation of this field so users of the device are capable of changing the result of the field by changing the system time.
     *
     * @since 6.21.0
     */
    get isExpired(): boolean | null;
    /**
     * Indicates whether the passport was issued to a citizen of the issuing country. Returns *false* for travel documents such as refugee, stateless, or alien passports, and for any passports issued by organizations rather than states.
     *
     * @since 8.0.0
     */
    get isCitizenPassport(): boolean;
    /**
     * The document type.
     *
     * @since 7.0.0
     */
    get document(): IdCaptureDocument | null;
    /**
     * The ISO (Alpha-3 code) abbreviation of the issuing country of the document.
     *
     * @since 6.14.0
     */
    get issuingCountryIso(): string | null;
    /**
     * Issuing country of the document.
     *
     * @since 7.0.0
     */
    get issuingCountry(): IdCaptureRegion;
    /**
     * If {@link IdCaptureSettings.anonymizationMode} is enabled for the field results, the returned value might be *null* for certain documents.
     *
     * @since 6.21.0
     */
    get documentAdditionalNumber(): string | null;
    /**
     * The visa number, resolved across the captured zones (MRZ preferred over VIZ).
     *
     * @since 8.7.0
     */
    get visaNumber(): string | null;
    /**
     * The passport number, resolved across the captured zones (MRZ preferred over VIZ).
     *
     * @since 8.7.0
     */
    get passportNumber(): string | null;
    /**
     * Whether the document capture is complete. Returns *true* when all sides of a multi-sided document have been captured, or when capturing a single-sided document. Returns *false* when only partial data is available (e.g., front side of a two-sided document).
     *
     * @since 8.7.0
     */
    get isCapturingComplete(): boolean;
    /**
     * The additional information extracted from a barcode on a document.
     *
     * @since 7.0.0
     */
    get barcode(): BarcodeResult | null;
    /**
     * The additional information extracted from the Machine Readable Zone (MRZ) of a Machine Readable Travel Document (MRTD).
     *
     * @since 6.14.0
     */
    get mrzResult(): MRZResult | null;
    /**
     * The additional information extracted from a documents or its part intended to be read by humans (for example Visual Inspection Zone (VIZ) of a Machine-Readable Travel Document (MRTD)).
     *
     * @since 6.14.0
     */
    get vizResult(): VIZResult | null;
    /**
     * Indicates whether the document is of type {@link IdCard}.
     *
     * @since 7.0.0
     */
    isIdCard(): boolean;
    /**
     * Indicates whether the document is REAL ID compliant.
     *
     * @since 7.5.0
     */
    get usRealIdStatus(): UsRealIdStatus;
    /**
     * Indicates whether the document is of type {@link DriverLicense}.
     *
     * @since 7.0.0
     */
    isDriverLicense(): boolean;
    /**
     * Indicates whether the document is of type {@link Passport}.
     *
     * @since 7.0.0
     */
    isPassport(): boolean;
    /**
     * Indicates whether the document is of type {@link VisaIcao}.
     *
     * @since 7.0.0
     */
    isVisaIcao(): boolean;
    /**
     * Indicates whether the document is of type {@link VisaLetter} (experimental document type).
     *
     * @since 8.7.0
     */
    isVisaLetter(): boolean;
    /**
     * Indicates whether the document is of type {@link RegionSpecificSubtype}.
     *
     * @since 7.0.0
     */
    isRegionSpecific(subtype: RegionSpecificSubtype): boolean;
    /**
     * Indicates whether the document is of type {@link ResidencePermit}.
     *
     * @since 7.0.0
     */
    isResidencePermit(): boolean;
    /**
     * Indicates whether the document is of type {@link HealthInsuranceCard}.
     *
     * @since 7.0.0
     */
    isHealthInsuranceCard(): boolean;
    /**
     * The images extracted from a document.
     *
     * @since 7.0.0
     */
    get images(): IdImages;
    /**
     * The first name of the document holder. Separated by spaces if more than one name is present. Characters can be all uppercase for document types which don’t capitalize names (for example names encoded in ICAO Machine Readable Zones). Certain documents do not distinguish between given name and surname. If the name cannot be split reliably, this field may be null.
     *
     * @since 6.14.0
     */
    get firstName(): string | null;
    /**
     * The last name of the document holder. Separated by spaces if more than one name is present. Characters can be all uppercase for document types which don’t capitalize names (for example names encoded in ICAO Machine Readable Zones). Certain documents do not distinguish between given name and surname. If the name cannot be split reliably, this field may be null.
     *
     * @since 6.14.0
     */
    get lastName(): string | null;
    /**
     * The full name of the document holder. Characters can be all uppercase for document types which don’t capitalize names (for example names encoded in ICAO Machine Readable Zones).
     *
     * @since 6.14.0
     */
    get fullName(): string | null;
    /**
     * The description of the document holder’s sex.
     *
     * @since 6.14.0
     */
    get sex(): string | null;
    /**
     * The date of birth of the document holder. If the document doesn’t provide two first digits of the year then the date of birth is always set to be earlier than or equal to the scan date. For example if the year of scanning is 2021 and the document returns that the year of birth is 14 then the returned year is set to 2014. However if the document returns that the year of birth is 24 then the returned year is set to 1924.
     *
     * @since 6.14.0
     */
    get dateOfBirth(): DateResult | null;
    /**
     * The nationality of the document holder as raw OCR text from the document. The format and language vary by jurisdiction (e.g., “DEUTSCH”, “AMERICAN”, “POLSKA”, “DEU”).
     *
     * For a standardized ISO 3166-1 alpha-3 country code representation, use {@link CapturedId.nationalityISO}.
     *
     * @since 6.14.0
     */
    get nationality(): string | null;
    /**
     * The holder’s nationality as an ISO 3166-1 alpha-3 country code (e.g., “DEU”, “USA”, “POL”).
     *
     * Returns *null* if the nationality cannot be determined or is ambiguous.
     *
     * @since 8.1.0
     */
    get nationalityISO(): string | null;
    /**
     * The address of the document holder.
     *
     * @since 6.14.0
     */
    get address(): string | null;
    /**
     * The document number.
     *
     * @since 6.14.0
     */
    get documentNumber(): string | null;
    /**
     * The date of expiry of the document. Returning *null* with {@link CapturedId.isExpired} = *false* indicates that the document never expires.
     *
     * @since 6.14.0
     */
    get dateOfExpiry(): DateResult | null;
    /**
     * The date of issue of the document. Please note that some documents may specify the exact date of issue, while other the month and the year only.
     *
     * @since 6.14.0
     */
    get dateOfIssue(): DateResult | null;
    /**
     * The sex of the document holder.
     *
     * @since 8.0.0
     */
    get sexType(): Sex;
    /**
     * The additional information extracted from a mobile identity document.
     *
     * @since 8.0.0
     */
    get mobileDocument(): MobileDocumentResult | null;
    /**
     * The additional information extracted from a mobile document using optical character recognition (OCR). This property is populated when scanning mobile driver licenses with OCR-based capture enabled (for example, Australian mobile driver licenses when the mobile scanner is enabled).
     *
     * @since 8.0.0
     */
    get mobileDocumentOcr(): MobileDocumentOCRResult | null;
    /**
     * Results of verifications automatically performed when {@link IdCaptureSettings.rejectInconsistentData} or {@link IdCaptureSettings.rejectForgedAamvaBarcodes} are enabled.
     *
     * @since 8.0.0
     */
    get verificationResult(): VerificationResult;
    /**
     * Returns a JSON string containing detailed diagnostic information about the reasons for document rejection.
     *
     * @since 8.3.0
     */
    get rejectionDiagnosticJSON(): string;
    /**
     * Returns all fields that have been anonymized in this captured document.
     *
     * Only fields that were actually present in the captured document and were subsequently anonymized are included.
     *
     * @since 8.0.0
     */
    get anonymizedFields(): IdFieldType[];
    /**
     * Checks whether the specified field has been anonymized.
     *
     * Returns *true* if the field was present in the captured document and was anonymized according to the {@link IdCaptureSettings.anonymizationMode} setting, *false* otherwise.
     *
     * A field that is not present in the document always returns *false*, even if anonymization is enabled for that field type.
     *
     * This method is useful for determining which fields have been redacted, particularly when using {@link IdCaptureSettings.anonymizationMode} set to {@link IdAnonymizationMode.FieldsOnly} or {@link IdAnonymizationMode.FieldsAndImages}.
     *
     * Param IdFieldType fieldThe field type to check for anonymization.
     *
     * @since 8.0.0
     */
    isAnonymized(field: IdFieldType): boolean;
}
interface PrivateCapturedId {
    fromJSON(json: CapturedIdJSON): CapturedId;
}

/**
 * Represents data elements that can be requested from mobile identity documents (mdocs) compliant with ISO 18013-5 and AAMVA standards. These elements are used to specify which data fields the application intends to retain, as required by the IntentToRetain flag in ISO 18013-5 mdoc requests.
 *
 * @since 8.0.0
 */
declare enum MobileDocumentDataElement {
    /**
     * The family name of the document holder. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    FamilyName = "familyName",
    /**
     * The given name of the document holder. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    GivenName = "givenName",
    /**
     * The date of birth of the document holder. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    BirthDate = "birthDate",
    /**
     * The date of issue of the document. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    IssueDate = "issueDate",
    /**
     * The date of expiry of the document. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    ExpiryDate = "expiryDate",
    /**
     * The country that issued the document. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    IssuingCountry = "issuingCountry",
    /**
     * The authority that issued the document. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    IssuingAuthority = "issuingAuthority",
    /**
     * The unique document number. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    DocumentNumber = "documentNumber",
    /**
     * The portrait image of the document holder. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    Portrait = "portrait",
    /**
     * The usual mark or signature image of the document holder. Part of the ISO 18013-5 namespace.
     *
     * @since 8.7.0
     */
    SignatureUsualMark = "signatureUsualMark",
    /**
     * The driving privileges and categories. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    DrivingPrivileges = "drivingPrivileges",
    /**
     * An administrative number associated with the document. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    AdministrativeNumber = "administrativeNumber",
    /**
     * The sex of the document holder as defined by ISO standards. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    SexIso = "sexIso",
    /**
     * The height of the document holder in centimeters. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    Height = "height",
    /**
     * The weight of the document holder in kilograms. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    Weight = "weight",
    /**
     * The eye color of the document holder. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    EyeColour = "eyeColour",
    /**
     * The hair color of the document holder. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    HairColour = "hairColour",
    /**
     * The place of birth of the document holder. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    BirthPlace = "birthPlace",
    /**
     * The resident address of the document holder. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    ResidentAddress = "residentAddress",
    /**
     * The jurisdiction that issued the document. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    IssuingJurisdiction = "issuingJurisdiction",
    /**
     * The nationality of the document holder. Part of the ISO 18013-5 namespace.
     *
     * @since 8.0.0
     */
    Nationality = "nationality",
    /**
     * A suffix for the name. Part of the AAMVA namespace.
     *
     * @since 8.0.0
     */
    NameSuffix = "nameSuffix",
    /**
     * Indicates whether the family name was truncated. Part of the AAMVA namespace.
     *
     * @since 8.0.0
     */
    FamilyNameTruncation = "familyNameTruncation",
    /**
     * Indicates whether the given name was truncated. Part of the AAMVA namespace.
     *
     * @since 8.0.0
     */
    GivenNameTruncation = "givenNameTruncation",
    /**
     * Also known as (AKA) family name. Part of the AAMVA namespace.
     *
     * @since 8.0.0
     */
    AkaFamilyName = "akaFamilyName",
    /**
     * Also known as (AKA) given name. Part of the AAMVA namespace.
     *
     * @since 8.0.0
     */
    AkaGivenName = "akaGivenName",
    /**
     * Also known as (AKA) name suffix. Part of the AAMVA namespace.
     *
     * @since 8.0.0
     */
    AkaSuffix = "akaSuffix",
    /**
     * A range representing the weight of the document holder. Part of the AAMVA namespace.
     *
     * @since 8.0.0
     */
    WeightRange = "weightRange",
    /**
     * The race or ethnicity of the document holder. Part of the AAMVA namespace.
     *
     * @since 8.0.0
     */
    RaceEthnicity = "raceEthnicity",
    /**
     * The county of residence. Part of the AAMVA namespace.
     *
     * @since 8.0.0
     */
    ResidentCounty = "residentCounty",
    /**
     * The sex of the document holder as defined by AAMVA standards. Part of the AAMVA namespace.
     *
     * @since 8.0.0
     */
    SexAamva = "sexAamva",
    /**
     * The AAMVA version number. Part of the AAMVA namespace.
     *
     * @since 8.0.0
     */
    AamvaVersion = "aamvaVersion"
}

/** @since 6.14.0 */
interface IdCapture$1 {
    type: 'idCapture';
    settings?: IdCaptureSettings$1;
    enabled?: boolean;
    /**
     * Instance of {@link IdCaptureFeedback}, determines what feedback (vibration, sound) should be emitted during the ID Capture process.
     *
     * @since 6.21.0
     */
    feedback?: IdCaptureFeedback$1;
    /**
     * Sets or retrieves an external transaction ID. This ID is attached to ID scan analytics data, to be linkable to customer transactions. Set to *null* to clear the transaction ID.
     *
     * @since 8.0.0
     */
    externalTransactionId?: string | null;
    modeId?: number;
    parentId?: number | null;
    hasListeners?: boolean;
}
/**
 * Settings to configure an {@link IdCapture} instance.
 *
 * @since 6.14.0
 */
interface IdCaptureSettings$1 {
    imageToResult?: ImageToResultSettings;
    /**
     * When enabled, this setting removes protected data from images and result fields of certain document types. Enabling anonymization helps to remain compliant with local legal requirements which restrict the collection of some data. Examples of affected fields are the document number on German IDs or the personal ID number on Dutch driver’s licenses. By default set to {@link IdAnonymizationMode.FieldsOnly}.
     *
     * @since 6.21.0
     */
    anonymizationMode?: 'none' | 'fieldsOnly' | 'imagesOnly' | 'fieldsAndImages';
    /**
     * This setting enables rejection of voided documents. This feature has been primarily developed for US Driver’s Licenses, the results might not be accurate when scanning other document types.
     *
     * @since 6.25.0
     */
    rejectVoidedIds?: boolean;
    /**
     * Enables rejection of expired documents. When enabled, expired documents are routed to IdCaptureListener.didRejectId() with {@link RejectionReason.DocumentExpired} instead of being reported as captured.
     *
     * @since 7.6.0
     */
    rejectExpiredIds?: boolean;
    /**
     * Enables rejection of documents with a forged AAMVA barcode. When enabled, forged documents are routed to IdCaptureListener.didRejectId() with {@link RejectionReason.ForgedAamvaBarcode}. Verification is performed automatically by the SDK — no separate verifier object is required on iOS.
     *
     * @since 7.6.0
     */
    rejectForgedAamvaBarcodes?: boolean;
    /**
     * Enables rejection of documents that are not REAL ID compliant.
     *
     * @since 7.6.0
     */
    rejectNotRealIdCompliant?: boolean;
    /**
     * Enables rejection of documents with inconsistent data between zones (e.g., barcode vs. VIZ). When enabled, inconsistent documents are routed to IdCaptureListener.didRejectId() with {@link RejectionReason.InconsistentData}.
     *
     * The detailed result, including a front review image, is accessible via {@link CapturedId.verificationResult}. See also {@link IdCaptureSettings.setShouldPassImageTypeToResult}.
     *
     * @since 7.6.0
     */
    rejectInconsistentData?: boolean;
    /**
     * Enables rejection of documents whose holder is below the specified age. When set, underage documents are routed to IdCaptureListener.didRejectId() with {@link RejectionReason.HolderUnderage}.
     *
     * @since 7.6.0
     */
    rejectHolderBelowAge?: number | null;
    /**
     * Enables rejection of passports whose {@link PassportType} is in the given set. The sub-type is derived from the machine-readable zone, so this applies to documents scanned with an MRZ. Matching documents are routed to IdCaptureListener.didRejectId() with {@link RejectionReason.NotAcceptedDocumentType}. Empty by default, which rejects nothing. A passport whose type cannot be determined reliably is reported as `Unknown`, and is rejected only if that value is in the set. See {@link PassportType} for the rules.
     *
     * @since 8.7.0
     */
    rejectPassportTypes?: ('national' | 'emergency' | 'diplomatic' | 'official' | 'refugee' | 'alien' | 'stateless' | 'laissezPasser' | 'military' | 'seafarer' | 'emergencyTravelDocument' | 'unknown')[];
    /**
     * Enables rejection of documents that will expire within the specified duration. The duration components are applied on the date of expiry in the following order: years, months and days. Enabling this setting automatically enables the rejection of expired IDs.
     *
     * @since 7.6.0
     */
    rejectIdsExpiringIn?: Duration | null;
    /**
     * This setting enables the extraction of additional data about vehicle categories from the back of European driver’s licenses, like issue and expiry dates.
     *
     * @since 7.0.0
     */
    decodeBackOfEuropeanDrivingLicense?: boolean;
    /**
     * Documents that should be accepted by the ID Capture scanner. You may accept individual document categories (like ID cards or passports) globally or narrow the selection by region or country, offering granular control over the scanning configuration.
     *
     * All documents not specified by this setting are rejected.
     *
     * Refer to the Supported Documents section for the full list of document types and regions.
     *
     * @since 7.0.0
     */
    acceptedDocuments?: Document[];
    /**
     * Documents to reject during ID capture, even if they match types defined in “acceptedDocuments”. This property is useful for enforcing restrictions on documents from certain regions or countries.
     *
     * Refer to the Supported Documents section for the full list of document types and regions.
     *
     * @since 7.0.0
     */
    rejectedDocuments?: Document[];
    /**
     * When enabled, callbacks will be fired for both front and back side captures when scanning double-sided documents. This allows applications to receive partial results even if the back side scan fails. When disabled (default), callbacks are only fired when document recognition is complete. Use {@link CapturedId.isCapturingComplete} to determine if the captured result represents a complete or partial recognition.
     *
     * @since 8.6.1
     */
    notifyOnSideCapture?: boolean;
    /**
     * Defines the scanner configuration for capturing identity documents, including physical documents and mobile documents.
     *
     * For physical document scanning, assign an {@link IdCaptureScanner} wrapping either a {@link FullDocumentScanner} (comprehensive scanning of all zones and both sides of card-format documents) or a {@link SingleSideScanner} (targeted zone scanning). For mobile documents (mDL, mdoc), use a {@link MobileDocumentScanner} instead. There is no default that captures any document — this property must be explicitly set before creating the {@link IdCapture} instance.
     *
     * @since 7.0.0
     */
    scanner?: ScannerType;
    /**
     * The timeout in seconds for document localization without successful capture. When a document is localized but not captured within this duration, the IdCaptureListener.didRejectId() callback is triggered with {@link RejectionReason.Timeout}. Default is 6 seconds. Values less than or equal to 0 reset to the default value.
     *
     * @since 8.7.0
     */
    rejectionTimeoutSeconds?: number;
    captureTrigger?: 'auto' | 'buttonTap';
    anonymizationMap?: unknown;
    /**
     * Controls whether the SDK applies default anonymization rules for specific document types and regions. When enabled, the SDK automatically anonymizes fields that are protected by default for certain document types.
     *
     * When disabled, only fields explicitly added via {@link IdCaptureSettings.addAnonymizedField} will be anonymized.
     *
     * This provides fine-grained control over which data is anonymized, allowing compliance with specific legal requirements. Default is *true*.
     *
     * @since 8.2.0
     */
    anonymizeDefaultFields?: boolean;
}
interface ImageToResultSettings {
    face?: boolean;
    croppedDocument?: boolean;
    frame?: boolean;
}
/**
 * Represents a duration of time in terms of days, months, and years.
 *
 * @since 7.6.0
 */
interface Duration {
    /**
     * The number of days in the duration.
     *
     * @since 7.6.0
     */
    days?: number;
    /**
     * The number of months in the duration.
     *
     * @since 7.6.0
     */
    months?: number;
    /**
     * The number of years in the duration.
     *
     * @since 7.6.0
     */
    years?: number;
}
interface Document {
    documentType?: IdCaptureDocumentType;
    documentSubtype?: string | null;
    region?: string | null;
}
/**
 * Types associated with the document classes below
 *
 * @since 7.0.0
 */
type IdCaptureDocumentType = 'driverLicense' | 'idCard' | 'passport' | 'visaIcao' | 'residencePermit' | 'healthInsuranceCard' | 'regionSpecific' | 'visaLetter';
interface ScannerType {
    physicalDocument?: PhysicalDocumentScanner$1 | null;
    mobileDocument?: MobileDocumentScanner$1 | null;
    allowCloudScanning?: boolean;
}
/**
 * Sealed interface representing scanner configurations for physical identity documents (cards and booklets). Physical documents include ID cards, driver’s licenses, passports, and other government-issued documents.Implementations:{@link SingleSideScanner} - Scans specific zones (barcode, MRZ, VIZ) of a document{@link FullDocumentScanner} - Scans all supported parts of a document, including both sides for card-format documents
 *
 * @since 8.0.0
 */
interface PhysicalDocumentScanner$1 {
    isFull: boolean;
    options: ScannerTypeOptions;
}
interface ScannerTypeOptions {
    barcode: boolean;
    machineReadableZone: boolean;
    visualInspectionZone: boolean;
    freeFormText?: boolean;
    manipulationCheck?: boolean;
}
/**
 * Configures scanning of mobile identity documents, including ISO 18013-5 compliant mobile driver’s licenses (mDL) and OCR-based mobile documents.
 *
 * @since 8.0.0
 */
interface MobileDocumentScanner$1 {
    /**
     * Indicates whether ISO 18013-5 mDL scanning is enabled. When enabled, the scanner can read mobile driver’s licenses that comply with the ISO 18013-5 standard via Bluetooth Low Energy (BLE) communication.
     *
     * @since 8.0.0
     */
    iso180135?: boolean;
    /**
     * Indicates whether OCR is enabled to extract data from mobile documents using a proprietary format. Note that this feature requires the ScanditLabelCaptureText library.
     *
     * @since 8.0.0
     */
    ocr?: boolean;
    /**
     * The set of data elements that the application intends to retain from scanned mobile documents. This information is used to set the IntentToRetain flag in ISO 18013-5 mdoc requests, which is required for legal compliance with data protection standards. An empty set indicates no elements will be retained, and IntentToRetain will be set to false for all fields.
     *
     * @since 8.0.0
     */
    elementsToRetain?: MobileDocumentScannerElementsToRetainItem[];
}
interface MobileDocumentScannerElementsToRetainItem {
    namespace: string;
    field: string;
}
/**
 * Determines what feedback (vibration, sound) should be emitted during the ID Capture process.
 *
 * The feedback is specified for each {@link IdCapture} instance separately and can be changed through the {@link IdCapture.feedback} property by either modifying an existing instance of this class, or by assigning a new one.
 *
 * @since 6.21.0
 */
interface IdCaptureFeedback$1 {
    /**
     * A {@link Feedback} that is emitted when IdCaptureListener.didCaptureId() event is triggered.
     *
     * @since 6.21.0
     */
    idCaptured?: Feedback;
    /**
     * A {@link Feedback} that is emitted when IdCaptureListener.didRejectId() event is triggered.
     *
     * @since 6.21.0
     */
    idRejected?: Feedback;
}
/**
 * A feedback consisting of a sound and vibration, for example to be provided by a device when a code has been successfully scanned.
 *
 * @since 6.8.0
 */
interface Feedback {
    /**
     * The sound to be played when a feedback is required. If *null*, no sound is played. Depending on the device’s ring mode and/or volume settings, no sound may be played even if this property is properly set to a non-*null* instance.
     *
     * @since 6.8.0
     */
    sound?: Sound | null;
    /**
     * The vibration to be emitted when a feedback is required. If *null*, no vibration is emitted. This property is further influenced by the device’s ring mode: the device may not vibrate even if this property is properly set to a non-*null* instance.
     *
     * @since 6.8.0
     */
    vibration?: Vibration | null;
}
/**
 * A sound, to be played for example when a code has been successfully scanned.
 *
 * @since 6.8.0
 */
interface Sound {
    /**
     * The name of the resource file, including the extension.
     *
     * On iOS, the file must be added as a resource file, on Android it must be added specifically under app/src/main/assets.
     *
     * @since 6.8.0
     */
    resource?: string;
}
/**
 * A vibration, to be emitted for example when a code has been successfully scanned.
 *
 * @since 6.8.0
 */
interface Vibration {
    type?: 'default' | 'selectionHaptic' | 'successHaptic' | 'impactHaptic' | 'impactHapticLight' | 'failureHaptic' | 'waveForm';
    timings?: number[];
    amplitudes?: number[];
}
/**
 * Overlay that guides the user through the {@link IdCapture} process.
 *
 * In order to display this overlay, add it to {@link DataCaptureView|data capture view}.
 *
 * This overlay shows a viewfinder, automatically selected based on IdCaptureSettings.AcceptedDocuments and IdCaptureSettings.Scanner, along with animations and textual hints, that allow the user to capture smoothly and avoid common pitfalls. It is designed to work out-of-the-box for a wide range of use-cases.
 *
 * You can tweak the look of the viewfinder by setting {@link IdCaptureOverlay.idLayoutStyle} and {@link IdCaptureOverlay.idLayoutLineStyle}. Additionally you can configure the brush used to highlight localized, captured, or rejected documents.
 *
 * You can translate the texts used by the viewfinder into various languages by adding adding string resources with the following ids to your app:
 *
 * | Resource id | Comment |
 * | --- | --- |
 * | scandit_id_capture_camera_too_far | Document cannot be captured, because the camera is too far. |
 * | scandit_id_capture_document_partially_visible | Document cannot be captured, because it’s only partially visible - either covered or not fully fitting the frame of the camera. |
 * | scandit_id_capture_tap_shutter_to_scan | Ask the user to tap the shutter button to let {@link IdCapture} start capturing a document |
 * | scandit_id_capture_looking_for_document | Tell the user that {@link IdCapture} is looking for a document to capture |
 * | scandit_id_capture_hold_still | Ask the user to hold still the device so that the document can be captured |
 * | scandit_id_capture_show_document | Ask the user to show a document, front of card capture scenario or multiple document types selected. |
 * | scandit_id_capture_show_passport | Ask the user to show the passport. |
 * | scandit_id_capture_show_front_of_document | Ask the user to show the front side of a document in the front & back capture scenario. |
 * | scandit_id_capture_show_back_of_document | Ask the user to show the back side of a document in the front & back capture scenario. |
 * | scandit_id_capture_show_barcode_on_document | Ask the user to show the barcode on a document, either when a barcode type is selected or the back side of a document in the front & back capture scenario contains only a barcode. |
 * | scandit_id_capture_show_visa | Ask the user to show the visa. |
 *
 * @since 6.14.0
 */
interface IdCaptureOverlay$1 {
    type: 'idCapture';
    idLayout?: 'td1' | 'td2' | 'td3' | 'mrvA' | 'viz' | 'pdf417' | 'auto' | 'none';
    /**
     * The ID layout style of the overlay. By default this is {@link IdLayoutStyle.Rounded}.
     *
     * @since 6.14.0
     */
    idLayoutStyle?: 'rounded' | 'square';
    /**
     * The ID layout line style. By default this is {@link IdLayoutLineStyle.Light}.
     *
     * @since 6.14.0
     */
    idLayoutLineStyle?: 'light' | 'bold';
    /**
     * The brush used to draw rectangular highlights around captured personal identification documents or their parts such as barcodes or Machine Readable Zones (MRZs). By default it equals DefaultCapturedBrush.
     *
     * To disable highlights use {@link Brush.transparent}.
     *
     * @since 6.14.0
     */
    capturedBrush?: Brush;
    /**
     * The brush used to draw rectangular highlights around localized personal identification documents or their parts such as barcodes or Machine Readable Zones (MRZs). A document or its part is considered localized when it’s detected in a frame, but its data is not yet extracted. By default it equals DefaultLocalizedBrush.
     *
     * To disable highlights use {@link Brush.transparent}.
     *
     * @since 6.14.0
     */
    localizedBrush?: Brush;
    /**
     * The brush used to draw rectangular highlights around personal identification documents or their parts (such as barcodes), which were detected in a frame but rejected. For example, data encoded in a barcode may have an unsupported format. By default it equals DefaultRejectedBrush.
     *
     * To disable highlights use {@link Brush.transparent}.
     *
     * @since 6.14.0
     */
    rejectedBrush?: Brush;
    /**
     * Indicates whether text hints are shown or not. True by default.
     *
     * @since 6.23.0
     */
    showTextHints?: boolean;
    /**
     * The text hint position of the overlay. By default this is {@link TextHintPosition.AboveViewfinder}.
     *
     * @since 6.23.0
     */
    textHintPosition?: 'aboveViewfinder' | 'belowViewfinder';
    frontSideTextHint?: string | null;
    backSideTextHint?: string | null;
    moveCloserTextHint?: string;
    moveFurtherAwayTextHint?: string;
    tapShutterToScanTextHint?: string;
    lookingForDocumentTextHint?: string;
    holdStillTextHint?: string;
    modeId?: number;
}
/**
 * Brushes define how objects are drawn on screen and allow to change their fill and stroke color as well as the stroke width. They are, for example, used to change the styling of barcode locations, or other objects drawn on top of the video preview. Brushes are immutable. Once created none of the members can be modified.
 *
 * @since 6.8.0
 */
interface Brush {
    fill?: Fill;
    stroke?: Stroke;
}
interface Fill {
    color?: Color;
}
/** @since 6.8.0 */
type Color = string;
interface Stroke {
    color?: Color;
    width?: number;
}



interface IdCaptureControllerHost {
    readonly modeId: number;
    toJSON(): IdCapture$1;
}

/**
 * Sealed interface representing scanner configurations for physical identity documents (cards and booklets). Physical documents include ID cards, driver’s licenses, passports, and other government-issued documents.Implementations:{@link SingleSideScanner} - Scans specific zones (barcode, MRZ, VIZ) of a document{@link FullDocumentScanner} - Scans all supported parts of a document, including both sides for card-format documents
 *
 * @since 8.0.0
 */
interface PhysicalDocumentScanner {
}

/**
 * Configures scanning of mobile identity documents, including ISO 18013-5 compliant mobile driver’s licenses (mDL) and OCR-based mobile documents.
 *
 * @since 8.0.0
 */
declare class MobileDocumentScanner extends DefaultSerializeable {
    private readonly _iso180135;
    private readonly _ocr;
    private readonly _elementsToRetain;
    private readonly _elementsToRetainJson;
    /**
     * Creates a new MobileDocumentScanner instance with specified elements to retain.
     *
     * Each requested data field includes a boolean IntentToRetain in device request according to ISO 18013-5 standards. This parameter allows you to specify which fields your application intends to retain, ensuring compliance with legal requirements. By default, IntentToRetain is set to false for all fields unless they are included in elementsToRetain.
     *
     * @since 8.0.0
     */
    constructor(iso180135: boolean, ocr: boolean, elementsToRetain?: Set<MobileDocumentDataElement>);
    /**
     * Indicates whether ISO 18013-5 mDL scanning is enabled. When enabled, the scanner can read mobile driver’s licenses that comply with the ISO 18013-5 standard via Bluetooth Low Energy (BLE) communication.
     *
     * @since 8.0.0
     */
    get iso180135(): boolean;
    /**
     * Indicates whether OCR is enabled to extract data from mobile documents using a proprietary format. Note that this feature requires the ScanditLabelCaptureText library.
     *
     * @since 8.0.0
     */
    get ocr(): boolean;
    /**
     * The set of data elements that the application intends to retain from scanned mobile documents. This information is used to set the IntentToRetain flag in ISO 18013-5 mdoc requests, which is required for legal compliance with data protection standards. An empty set indicates no elements will be retained, and IntentToRetain will be set to false for all fields.
     *
     * @since 8.0.0
     */
    get elementsToRetain(): Set<MobileDocumentDataElement>;
}

/**
 * Configures the scanner for capturing identity documents. This data class allows configuring both physical document scanning (ID cards, passports, driver’s licenses) and mobile document scanning (ISO 18013-5 mDL).
 *
 * @since 8.0.0
 */
declare class IdCaptureScanner extends DefaultSerializeable {
    private readonly _physicalDocumentScanner;
    private readonly _mobileDocumentScanner;
    /**
     * Creates a new IdCaptureScanner instance.
     *
     * Param PhysicalDocumentScanner? physicalDocumentConfiguration for scanning physical documents. See {@link PhysicalDocumentScanner} for options.Param MobileDocumentScanner? mobileDocumentConfiguration for scanning mobile documents. See {@link MobileDocumentScanner} for options.
     *
     * @since 8.0.0
     */
    constructor(physicalDocumentScanner?: PhysicalDocumentScanner, mobileDocumentScanner?: MobileDocumentScanner);
    /**
     * Configuration for scanning physical documents (cards and booklets). Can be null if only mobile documents are to be scanned.
     *
     * @since 8.0.0
     */
    get physicalDocument(): PhysicalDocumentScanner | null;
    /**
     * Configuration for scanning mobile documents. Can be null if only physical documents are to be scanned.
     *
     * @since 8.0.0
     */
    get mobileDocument(): MobileDocumentScanner | null;
    /**
     * Sets a property to the provided value. Use this method to set properties that are not yet part of a stable API. Properties set through this method may change in a future release.
     *
     * @since 8.7.0
     */
    setProperty(name: string, value: any): void;
    /**
     * Retrieves the value of a previously set property. In case the property does not exist, *null* is returned.
     *
     * @since 8.7.0
     */
    getProperty(name: string): any;
}

/**
 * Represents a scanner configuration that focuses on specific parts of a document (referred to as “zones”) rather than the entire document. The scanner can be customized to extract data from one or more of the following zones: barcodes, Machine-Readable Zone (MRZ) and Human-Readable Zone (Visual Inspection Zone, VIZ).This scanner type is useful for tailored use cases, such as extracting specific data points from documents or handling scenarios where different document types encode information in varying zones. When multiple zones are enabled, the scanner intelligently captures data from the zone available on the presented document.
 *
 * @since 8.0.0
 */
declare class SingleSideScanner extends DefaultSerializeable implements PhysicalDocumentScanner {
    protected readonly _barcode: boolean;
    protected readonly _machineReadableZone: boolean;
    protected readonly _visualInspectionZone: boolean;
    protected readonly _freeFormText: boolean;
    private readonly _isFull;
    private options;
    /**
     * Creates a new SingleSideScanner instance. Note that the freeFormText parameter is experimental and cannot be used without a compliant license key.
     *
     * @since 8.7.0
     */
    constructor(barcode: boolean, machineReadableZone: boolean, visualInspectionZone: boolean);
    /**
     * @param freeFormText Extracts free-form text from the document. Experimental: it has no effect
     * without a compliant license key.
     */
    constructor(barcode: boolean, machineReadableZone: boolean, visualInspectionZone: boolean, freeFormText: boolean);
    /**
     * Extracts data from barcodes on identity documents
     *
     * @since 8.0.0
     */
    get barcode(): boolean;
    /**
     * Extracts data from the Machine Readable Zone on identity documents
     *
     * @since 8.0.0
     */
    get machineReadableZone(): boolean;
    /**
     * Extracts all information from the front side of a card format document or equivalent to “Full Document” for booklet documents
     *
     * @since 8.0.0
     */
    get visualInspectionZone(): boolean;
    /**
     * Extracts free-form text from the document. This parameter is experimental and cannot be used without a compliant license key.
     *
     * @since 8.7.0
     */
    get freeFormText(): boolean;
}

/**
 * Represents a scanner configuration that captures data from all supported parts of a document. This includes the human-readable zone (visual inspection zone, VIZ), the machine-readable zone (MRZ), and barcodes, provided they are present and supported by the library.For card-format documents (e.g., driver’s licenses or ID cards), both the front and back are scanned. The user is prompted to scan the back after the front, and the combined result is returned.For booklet-format documents (e.g., passports), the identity page is scanned, encompassing both the human-readable and machine-readable parts. This scanner type is ideal for use cases requiring comprehensive data extraction, data consistency checks, or full-document image capture.
 *
 * @since 8.0.0
 */
declare class FullDocumentScanner extends DefaultSerializeable implements PhysicalDocumentScanner {
    protected readonly _barcode: boolean;
    protected readonly _machineReadableZone: boolean;
    protected readonly _visualInspectionZone: boolean;
    private readonly _isFull;
    private options;
    /**
     * Creates a new FullDocumentScanner instance.
     *
     * @since 8.0.0
     */
    constructor();
}

/**
 * Settings to configure an {@link IdCapture} instance.
 *
 * @since 6.14.0
 */
declare class IdCaptureSettings extends DefaultSerializeable {
    /**
     * When enabled, this setting removes protected data from images and result fields of certain document types. Enabling anonymization helps to remain compliant with local legal requirements which restrict the collection of some data. Examples of affected fields are the document number on German IDs or the personal ID number on Dutch driver’s licenses. By default set to {@link IdAnonymizationMode.FieldsOnly}.
     *
     * @since 6.21.0
     */
    anonymizationMode: IdAnonymizationMode;
    /**
     * Controls whether the SDK applies default anonymization rules for specific document types and regions. When enabled, the SDK automatically anonymizes fields that are protected by default for certain document types.
     *
     * When disabled, only fields explicitly added via {@link IdCaptureSettings.addAnonymizedField} will be anonymized.
     *
     * This provides fine-grained control over which data is anonymized, allowing compliance with specific legal requirements. Default is *true*.
     *
     * @since 8.2.0
     */
    anonymizeDefaultFields: boolean;
    /**
     * This setting enables rejection of voided documents. This feature has been primarily developed for US Driver’s Licenses, the results might not be accurate when scanning other document types.
     *
     * @since 6.25.0
     */
    rejectVoidedIds: boolean;
    /**
     * This setting enables the extraction of additional data about vehicle categories from the back of European driver’s licenses, like issue and expiry dates.
     *
     * @since 7.0.0
     */
    decodeBackOfEuropeanDrivingLicense: boolean;
    /**
     * Documents that should be accepted by the ID Capture scanner. You may accept individual document categories (like ID cards or passports) globally or narrow the selection by region or country, offering granular control over the scanning configuration.
     *
     * All documents not specified by this setting are rejected.
     *
     * Refer to the Supported Documents section for the full list of document types and regions.
     *
     * @since 7.0.0
     */
    acceptedDocuments: IdCaptureDocument[];
    /**
     * Documents to reject during ID capture, even if they match types defined in “acceptedDocuments”. This property is useful for enforcing restrictions on documents from certain regions or countries.
     *
     * Refer to the Supported Documents section for the full list of document types and regions.
     *
     * @since 7.0.0
     */
    rejectedDocuments: IdCaptureDocument[];
    /**
     * Enables rejection of passports whose {@link PassportType} is in the given set. The sub-type is derived from the machine-readable zone, so this applies to documents scanned with an MRZ. Matching documents are routed to IdCaptureListener.didRejectId() with {@link RejectionReason.NotAcceptedDocumentType}. Empty by default, which rejects nothing. A passport whose type cannot be determined reliably is reported as `Unknown`, and is rejected only if that value is in the set. See {@link PassportType} for the rules.
     *
     * @since 8.7.0
     */
    rejectPassportTypes: Set<PassportType>;
    /**
     * Defines the scanner configuration for capturing identity documents, including physical documents and mobile documents.
     *
     * For physical document scanning, assign an {@link IdCaptureScanner} wrapping either a {@link FullDocumentScanner} (comprehensive scanning of all zones and both sides of card-format documents) or a {@link SingleSideScanner} (targeted zone scanning). For mobile documents (mDL, mdoc), use a {@link MobileDocumentScanner} instead. There is no default that captures any document — this property must be explicitly set before creating the {@link IdCapture} instance.
     *
     * @since 7.0.0
     */
    scanner: IdCaptureScanner;
    /**
     * Enables rejection of expired documents. When enabled, expired documents are routed to IdCaptureListener.didRejectId() with {@link RejectionReason.DocumentExpired} instead of being reported as captured.
     *
     * @since 7.6.0
     */
    rejectExpiredIds: boolean;
    /**
     * Enables rejection of documents that will expire within the specified duration. The duration components are applied on the date of expiry in the following order: years, months and days. Enabling this setting automatically enables the rejection of expired IDs.
     *
     * @since 7.6.0
     */
    rejectIdsExpiringIn: Duration$1 | null;
    /**
     * Enables rejection of documents that are not REAL ID compliant.
     *
     * @since 7.6.0
     */
    rejectNotRealIdCompliant: boolean;
    /**
     * Enables rejection of documents with a forged AAMVA barcode. When enabled, forged documents are routed to IdCaptureListener.didRejectId() with {@link RejectionReason.ForgedAamvaBarcode}. Verification is performed automatically by the SDK — no separate verifier object is required on iOS.
     *
     * @since 7.6.0
     */
    rejectForgedAamvaBarcodes: boolean;
    /**
     * Enables rejection of documents with inconsistent data between zones (e.g., barcode vs. VIZ). When enabled, inconsistent documents are routed to IdCaptureListener.didRejectId() with {@link RejectionReason.InconsistentData}.
     *
     * The detailed result, including a front review image, is accessible via {@link CapturedId.verificationResult}. See also {@link IdCaptureSettings.setShouldPassImageTypeToResult}.
     *
     * @since 7.6.0
     */
    rejectInconsistentData: boolean;
    /**
     * Enables rejection of documents whose holder is below the specified age. When set, underage documents are routed to IdCaptureListener.didRejectId() with {@link RejectionReason.HolderUnderage}.
     *
     * @since 7.6.0
     */
    rejectHolderBelowAge: number | null;
    /**
     * The timeout in seconds for document localization without successful capture. When a document is localized but not captured within this duration, the IdCaptureListener.didRejectId() callback is triggered with {@link RejectionReason.Timeout}. Default is 6 seconds. Values less than or equal to 0 reset to the default value.
     *
     * @since 8.7.0
     */
    rejectionTimeoutSeconds: number;
    /**
     * When enabled, callbacks will be fired for both front and back side captures when scanning double-sided documents. This allows applications to receive partial results even if the back side scan fails. When disabled (default), callbacks are only fired when document recognition is complete. Use {@link CapturedId.isCapturingComplete} to determine if the captured result represents a complete or partial recognition.
     *
     * @since 8.6.1
     */
    notifyOnSideCapture: boolean;
    private properties;
    private imageToResult;
    private anonymizationMap;
    /**
     * Creates a new default settings. By default the scanner is an instance of {@link SingleSideScanner} that does not scan anything, and {@link IdCaptureSettings.acceptedDocuments} is empty.
     *
     * @since 6.14.0
     */
    constructor();
    private static get idCaptureDefaults();
    /**
     * Sets a property to the provided value. Use this method to set properties that are not yet part of a stable API. Properties set through this method may change in a future release.
     *
     * @since 6.14.0
     */
    setProperty(name: string, value: any): void;
    /**
     * Retrieves the value of a previously set property. In case the property does not exist, *null* is returned. Use this method to get properties that are not yet part of a stable API. These properties may change in a future release.
     *
     * @since 6.14.0
     */
    getProperty(name: string): any;
    /**
     * Sets whether an {@link IdCapture} created with these settings should extract an image (specified by the given type) from recognized documents and return it as part of {@link CapturedId}. Note that the image may still not be returned, for example, if it’s not present in a document or if it’s not recognized. Default is *false*.
     *
     * @since 6.14.0
     */
    setShouldPassImageTypeToResult(type: IdImageType, shouldPass: boolean): void;
    /**
     * Gets whether an {@link IdCapture} created with these settings should extract an image (specified by the given type) from recognized documents and return it as part of {@link CapturedId}. Note that the image may still not be returned, for example, if it’s not present in a document or if it’s not recognized. Default is *false*.
     *
     * @since 6.14.0
     */
    getShouldPassImageTypeToResult(type: IdImageType): boolean;
    /**
     * Adds a specific field to be anonymized for the specified document type and region. This method allows fine-grained control over which fields are anonymized, complementing the global {@link IdCaptureSettings.anonymizationMode} setting. Fields added through this method will be anonymized in addition to any default anonymization rules for the document type.
     *
     * @since 8.0.0
     */
    addAnonymizedField(document: IdCaptureDocument, fieldType: IdFieldType): void;
    /**
     * Removes a previously added anonymized field for the specified document type and region. This method provides fine-grained control over anonymization settings, allowing dynamic adjustment of which fields should be anonymized. If the field was not previously added, this operation has no effect.
     *
     * @since 8.7.0
     */
    removeAnonymizedField(document: IdCaptureDocument, fieldType: IdFieldType): void;
    /**
     * Removes all previously added anonymized fields from the settings.
     *
     * @since 8.7.0
     */
    clearAnonymizedFields(): void;
    toJSON(): IdCaptureSettings$1;
}

/**
 * Determines what feedback (vibration, sound) should be emitted during the ID Capture process.
 *
 * The feedback is specified for each {@link IdCapture} instance separately and can be changed through the {@link IdCapture.feedback} property by either modifying an existing instance of this class, or by assigning a new one.
 *
 * @since 6.21.0
 */
declare class IdCaptureFeedback extends DefaultSerializeable {
    private withController;
    /**
     * Returns an id capture feedback with default configuration:
     *
     * - default beep sound is loaded,
     * - beeping for the id captured event is enabled,
     * - vibration for the id captured event is enabled,
     * - beeping for the id rejected event is disabled,
     * - vibration for the id rejected event is disabled,
     * - beeping for the id capture timeout event is disabled,
     * - vibration for the id capture timeout event is disabled.
     *
     * @since 6.21.0
     */
    static get defaultFeedback(): IdCaptureFeedback;
    private _idCaptured;
    /**
     * A {@link Feedback} that is emitted when IdCaptureListener.didCaptureId() event is triggered.
     *
     * @since 6.21.0
     */
    get idCaptured(): Feedback$1;
    set idCaptured(idCaptured: Feedback$1);
    private _idRejected;
    /**
     * A {@link Feedback} that is emitted when IdCaptureListener.didRejectId() event is triggered.
     *
     * @since 6.21.0
     */
    get idRejected(): Feedback$1;
    set idRejected(idRejected: Feedback$1);
    /**
     * Returns the default success sound
     *
     * @since 8.0.0
     */
    static get defaultSuccessSound(): Sound$1;
    /**
     * Returns the default failure sound
     *
     * @since 8.0.0
     */
    static get defaultFailureSound(): Sound$1;
    private static fromJSON;
    private static get idDefaults();
    /**
     * Empty constructor. Constructs a new feedback that will not emit any sound, nor vibration.
     *
     * @since 8.7.0
     */
    constructor();
    private static withFeedbacks;
    private updateFeedback;
    toJSON(): IdCaptureFeedback$1;
}
interface PrivateIdCaptureFeedback {
    fromJSON(json: IdCaptureFeedbackJSON): IdCaptureFeedback;
}
interface IdCaptureFeedbackJSON {
    idCaptured: Feedback$1;
    idRejected: Feedback$1;
    idCaptureTimeout: Feedback$1;
}

/**
 * ID module - identity document scanning and verification
 * Generated from schema definition.
 *
 * Single entry point interface - all operations go through $executeId.
 * The IdController handles method-specific logic and calls this proxy.
 * The NativeProxy automatically handles the `$` prefix for native method calls.
 */
interface IdProxy extends BaseProxy {
    /**
     * Single entry point for all Id operations.
     * Routes to appropriate native command based on moduleName and methodName.
     *
     * @param params Object containing:
     *   - moduleName: The name of the module to execute against
     *   - methodName: The name of the method to execute
     *   - ...other parameters specific to the method
     *
     * @returns Promise resolving to the result (type depends on methodName)
     *
     * Note: This method is called with the `$` prefix ($executeId) which is
     * automatically handled by NativeProxy to route to native implementation.
     */
    $executeId(params: {
        moduleName: string;
        methodName: string;
        [key: string]: any;
    }): Promise<any>;
}



declare class IdCaptureController extends BaseController<IdProxy> {
    private idCapture;
    private adapter;
    constructor(idCapture?: IdCaptureControllerHost | null);
    reset(): Promise<void>;
    setModeEnabledState(enabled: boolean): Promise<void>;
    updateIdCaptureMode(): Promise<void>;
    applyIdCaptureModeSettings(newSettings: IdCaptureSettings): Promise<void>;
    updateFeedback(feedback: IdCaptureFeedback): Promise<void>;
    private get modeId();
}

interface IdCaptureListenerControllerHost {
    readonly modeId: number;
    readonly isEnabled: boolean;
}

declare enum IdCaptureListenerEvents {
    didCapture = "IdCaptureListener.didCaptureId",
    didReject = "IdCaptureListener.didRejectId"
}



declare function resetPayloadParserWarnings(): void;
declare class IdCaptureListenerController extends BaseController<IdProxy> {
    private idCapture;
    private adapter;
    constructor(idCapture: IdCaptureListenerControllerHost);
    handleDidCapture(onCapture: (capturedId: CapturedId) => void, _ev: EventPayload, data: Record<string, unknown>): Promise<void>;
    handleDidReject(onReject: (rejectedId: CapturedId | null, rejectionReason: RejectionReason) => void, _ev: EventPayload, data: Record<string, unknown>): Promise<void>;
    private enrichCapturedIdJson;
    private get modeId();
}



interface IdCaptureOverlayControllerHost {
    toJSON(): IdCaptureOverlay$1;
}



declare class IdCaptureOverlayController extends BaseController<IdProxy> {
    private overlay;
    private adapter;
    constructor(overlay: IdCaptureOverlayControllerHost);
    updateIdCaptureOverlay(overlay: IdCaptureOverlayControllerHost): Promise<void>;
    dispose(): void;
}



/**
 * Listener interface for id capture.
 *
 * @since 6.14.0
 */
interface IdCaptureListener {
    /**
     * Called whenever a document is recognized and parsed.
     *
     * Set {@link IdCapture.isEnabled} to *false* at the start of this callback to prevent additional captures while the result is being handled, and restore it to *true* when processing is complete. This method is called on a background thread — dispatch any UI work to the main thread.
     *
     * @since 7.0.0
     */
    didCaptureId?(idCapture: IdCapture, capturedId: CapturedId): void;
    /**
     * Called whenever a personal identification document or its part is recognized in a frame, but rejected. A document is rejected if (a) it’s not enabled in the settings, (b) it’s a barcode of a correct symbology or a Machine Readable Zone (MRZ), but the data is encoded in an unexpected/incorrect format, (c) it meets the requirement of a rejection rule defined in the settings (for instance, voided ID rejection or expired ID rejection).
     *
     * This method is called on a background thread — dispatch any UI work to the main thread.
     *
     * @since 7.0.0
     */
    didRejectId?(idCapture: IdCapture, rejectedId: CapturedId | null, reason: RejectionReason): void;
}



/**
 * @since 6.14.0
 */
declare class IdCapture extends ModeBase<IdCaptureController, IdCaptureListenerController> implements DataCaptureMode {
    protected parentId: number | null;
    protected type: string;
    private settings;
    /**
     * Instance of {@link IdCaptureFeedback}, determines what feedback (vibration, sound) should be emitted during the ID Capture process.
     *
     * @since 6.21.0
     */
    get feedback(): IdCaptureFeedback;
    set feedback(feedback: IdCaptureFeedback);
    private _isEnabled;
    private _externalTransactionId;
    private _feedback;
    private get listeners();
    /**
     * Creates the recommended camera settings to use with this mode.
     *
     * @since 7.6.0
     */
    static createRecommendedCameraSettings(): CameraSettings;
    /**
     * Implemented from {@link DataCaptureMode}. See {@link DataCaptureMode.context}.
     *
     * @since 6.14.0
     */
    get context(): DataCaptureContext | null;
    /**
     * Implemented from {@link DataCaptureMode}. See {@link DataCaptureMode.isEnabled}.
     *
     * @since 6.14.0
     */
    get isEnabled(): boolean;
    set isEnabled(isEnabled: boolean);
    /**
     * Sets or retrieves an external transaction ID. This ID is attached to ID scan analytics data, to be linkable to customer transactions. Set to *null* to clear the transaction ID.
     *
     * @since 8.0.0
     */
    get externalTransactionId(): string | null;
    set externalTransactionId(externalTransactionId: string | null);
    private static get idCaptureDefaults();
    protected createController(): IdCaptureController;
    protected createListenerController(): IdCaptureListenerController;
    /**
     * Constructs a new {@link IdCapture} with the provided settings.
     *
     * @since 7.6.0
     */
    constructor(settings: IdCaptureSettings);
    /**
     * Asynchronously applies the new settings to the ID Capture. If the scanner is currently running, the task will complete when the next frame is processed, and will use the new settings for that frame. If the scanner is currently *not* running, the task will complete as soon as the settings have been stored and won’t wait until the next frame is going to be processed.
     *
     * @since 6.21.0
     */
    applySettings(settings: IdCaptureSettings): Promise<void>;
    /**
     * Adds the listener to this id capture instance.
     *
     * In case the same listener is already observing this instance, calling this method will not add the listener again.
     *
     * @since 6.14.0
     */
    addListener(listener: IdCaptureListener): Promise<void>;
    /**
     * Removes listener from this id capture instance.
     *
     * In case the listener is not currently observing this instance, calling this method has no effect.
     *
     * @since 6.14.0
     */
    removeListener(listener: IdCaptureListener): Promise<void>;
    /**
     * Resets the ongoing scanning process. This method can be used to abandon scanning the back side of a document.
     *
     * @since 6.14.0
     */
    reset(): Promise<void>;
    toJSON(): IdCapture$1;
}
interface PrivateIdCapture extends PrivateDataCaptureMode {
    _context: DataCaptureContext | null;
    listeners: IdCaptureListener[];
    parentId: number | null;
}

/**
 * Overlay that guides the user through the {@link IdCapture} process.
 *
 * In order to display this overlay, add it to {@link DataCaptureView|data capture view}.
 *
 * This overlay shows a viewfinder, automatically selected based on IdCaptureSettings.AcceptedDocuments and IdCaptureSettings.Scanner, along with animations and textual hints, that allow the user to capture smoothly and avoid common pitfalls. It is designed to work out-of-the-box for a wide range of use-cases.
 *
 * You can tweak the look of the viewfinder by setting {@link IdCaptureOverlay.idLayoutStyle} and {@link IdCaptureOverlay.idLayoutLineStyle}. Additionally you can configure the brush used to highlight localized, captured, or rejected documents.
 *
 * You can translate the texts used by the viewfinder into various languages by adding adding string resources with the following ids to your app:
 *
 * | Resource id | Comment |
 * | --- | --- |
 * | scandit_id_capture_camera_too_far | Document cannot be captured, because the camera is too far. |
 * | scandit_id_capture_document_partially_visible | Document cannot be captured, because it’s only partially visible - either covered or not fully fitting the frame of the camera. |
 * | scandit_id_capture_tap_shutter_to_scan | Ask the user to tap the shutter button to let {@link IdCapture} start capturing a document |
 * | scandit_id_capture_looking_for_document | Tell the user that {@link IdCapture} is looking for a document to capture |
 * | scandit_id_capture_hold_still | Ask the user to hold still the device so that the document can be captured |
 * | scandit_id_capture_show_document | Ask the user to show a document, front of card capture scenario or multiple document types selected. |
 * | scandit_id_capture_show_passport | Ask the user to show the passport. |
 * | scandit_id_capture_show_front_of_document | Ask the user to show the front side of a document in the front & back capture scenario. |
 * | scandit_id_capture_show_back_of_document | Ask the user to show the back side of a document in the front & back capture scenario. |
 * | scandit_id_capture_show_barcode_on_document | Ask the user to show the barcode on a document, either when a barcode type is selected or the back side of a document in the front & back capture scenario contains only a barcode. |
 * | scandit_id_capture_show_visa | Ask the user to show the visa. |
 *
 * @since 6.14.0
 */
declare class IdCaptureOverlay extends DefaultSerializeable implements DataCaptureOverlay {
    private type;
    private controller;
    private _view;
    private modeId;
    private get view();
    private set view(value);
    private _idLayoutStyle;
    private _idLayoutLineStyle;
    private _textHintPosition;
    private _showTextHints;
    private static get idCaptureDefaults();
    /**
     * Returns the default value for the ID layout style of the overlay.
     *
     * @since 8.0.0
     */
    static get defaultIdLayoutStyle(): IdLayoutStyle;
    /**
     * Returns the default value for the ID layout line style of the overlay.
     *
     * @since 8.0.0
     */
    static get defaultIdLayoutLineStyle(): IdLayoutLineStyle;
    private static buildBrush;
    /**
     * The default brush used to draw rectangular highlights around captured personal identification documents or their parts such as barcodes or Machine Readable Zones (MRZs). By default, the stroke of a highlight is 3dp white and the fill is transparent.
     *
     * @since 8.7.0
     */
    static get defaultCapturedBrush(): Brush$1;
    /**
     * The default brush used to draw rectangular highlights around localized personal identification documents or their parts such as barcodes or Machine Readable Zones (MRZs). A document or its part is considered localized when it’s detected in a frame, but its data is not yet extracted. By default, the fill of the highlight is white (alpha 50%) and the border is transparent.
     *
     * @since 8.7.0
     */
    static get defaultLocalizedBrush(): Brush$1;
    /**
     * The default brush used to draw rectangular highlights around personal identification documents or their parts (such as barcodes), which were detected in a frame, but rejected. For example, data encoded in a barcode may have an unsupported format. By default, the fill of the highlight is white (alpha 50%) and the border is transparent.
     *
     * @since 8.7.0
     */
    static get defaultRejectedBrush(): Brush$1;
    private _defaultCapturedBrush;
    private _defaultLocalizedBrush;
    private _defaultRejectedBrush;
    private _capturedBrush;
    private _localizedBrush;
    private _rejectedBrush;
    private _frontSideTextHint;
    private _backSideTextHint;
    /**
     * Constructs a new IdCaptureOverlay. For the overlay to be displayed on screen, it must be added to a {@link DataCaptureView}.
     *
     * @since 7.6.0
     */
    constructor(mode: IdCapture);
    /**
     * Sets text for textual hint displayed when scanning the front of document.
     *
     * @since 6.22.0
     */
    setFrontSideTextHint(text: string): void;
    /**
     * Sets text for textual hint displayed when scanning the back of document.
     *
     * @since 6.22.0
     */
    setBackSideTextHint(text: string): void;
    /**
     * The ID layout style of the overlay. By default this is {@link IdLayoutStyle.Rounded}.
     *
     * @since 6.14.0
     */
    get idLayoutStyle(): IdLayoutStyle;
    set idLayoutStyle(style: IdLayoutStyle);
    /**
     * The ID layout line style. By default this is {@link IdLayoutLineStyle.Light}.
     *
     * @since 6.14.0
     */
    get idLayoutLineStyle(): IdLayoutLineStyle;
    set idLayoutLineStyle(lineStyle: IdLayoutLineStyle);
    /**
     * The brush used to draw rectangular highlights around captured personal identification documents or their parts such as barcodes or Machine Readable Zones (MRZs). By default it equals DefaultCapturedBrush.
     *
     * To disable highlights use {@link Brush.transparent}.
     *
     * @since 6.14.0
     */
    get capturedBrush(): Brush$1;
    set capturedBrush(brush: Brush$1);
    /**
     * The brush used to draw rectangular highlights around localized personal identification documents or their parts such as barcodes or Machine Readable Zones (MRZs). A document or its part is considered localized when it’s detected in a frame, but its data is not yet extracted. By default it equals DefaultLocalizedBrush.
     *
     * To disable highlights use {@link Brush.transparent}.
     *
     * @since 6.14.0
     */
    get localizedBrush(): Brush$1;
    set localizedBrush(brush: Brush$1);
    /**
     * The brush used to draw rectangular highlights around personal identification documents or their parts (such as barcodes), which were detected in a frame but rejected. For example, data encoded in a barcode may have an unsupported format. By default it equals DefaultRejectedBrush.
     *
     * To disable highlights use {@link Brush.transparent}.
     *
     * @since 6.14.0
     */
    get rejectedBrush(): Brush$1;
    set rejectedBrush(brush: Brush$1);
    get defaultCapturedBrush(): Brush$1;
    get defaultLocalizedBrush(): Brush$1;
    get defaultRejectedBrush(): Brush$1;
    /**
     * The text hint position of the overlay. By default this is {@link TextHintPosition.AboveViewfinder}.
     *
     * @since 6.23.0
     */
    get textHintPosition(): TextHintPosition;
    set textHintPosition(position: TextHintPosition);
    /**
     * Indicates whether text hints are shown or not. True by default.
     *
     * @since 6.23.0
     */
    get showTextHints(): boolean;
    set showTextHints(enabled: boolean);
    toJSON(): IdCaptureOverlay$1;
}

declare const ID_PROXY_TYPE_NAMES: readonly ["IdProxy"];
type IdProxyType = (typeof ID_PROXY_TYPE_NAMES)[number];
interface IdNativeCallerProvider extends NativeCallerProvider<IdProxyType> {
}

declare function registerIdProxies(provider: IdNativeCallerProvider): void;

export { AamvaBarcodeVerificationResult, AamvaBarcodeVerificationStatus, ApplicationStatus, BarcodeResult, CapturedId, CapturedSides, DataConsistencyCheck, DataConsistencyResult, DateResult, DriverLicense, DrivingLicenseCategory, DrivingLicenseDetails, Duration$1 as Duration, FullDocumentScanner, HealthInsuranceCard, ID_PROXY_TYPE_NAMES, IdAnonymizationMode, IdCaptureController, IdCaptureFeedback, IdCaptureListenerController, IdCaptureListenerEvents, IdCaptureOverlay, IdCaptureOverlayController, IdCaptureScanner, IdCaptureSettings, IdCard, IdFieldType, IdImageType, IdImages, IdLayoutLineStyle, IdLayoutStyle, IdSide, MRZResult, MobileDocumentDataElement, MobileDocumentOCRResult, MobileDocumentResult, MobileDocumentScanner, Passport, PassportType, ProfessionalDrivingPermit, RegionSpecific, RejectionReason, ResidencePermit, Sex, SingleSideScanner, TextHintPosition, VIZResult, VehicleRestriction, VerificationResult, VisaDetails, VisaIcao, VisaLetter, buildStaticIdDefaultsJson, ensureIdDefaults, getIdDefaults, loadIdDefaults, parseIdDefaults, registerIdProxies, resetPayloadParserWarnings, setIdDefaultsLoader };
export type { AamvaBarcodeVerificationResultJSON, BarcodeResultJSON, CapturedIdJSON, CommonIdFieldsJSON, DataConsistencyResultJSON, DateResultJSON, DrivingLicenseCategoryJSON, DrivingLicenseDetailsJSON, DurationJSON, IdCaptureDocument, IdCaptureFeedbackJSON, IdCaptureListener, IdDefaults, IdNativeCallerProvider, IdProxyType, ImageInfoJSON, ImageJSON, MRZResultJSON, MobileDocumentOCRResultJSON, MobileDocumentResultJSON, NfcResultJSON, PhysicalDocumentScanner, PrivateBarcodeResult, PrivateCapturedId, PrivateDataConsistencyResult, PrivateDateResult, PrivateDrivingLicenseCategory, PrivateDrivingLicenseDetails, PrivateDuration, PrivateIdCapture, PrivateIdCaptureFeedback, PrivateIdImages, PrivateMRZResult, PrivateMobileDocumentOCRResult, PrivateMobileDocumentResult, PrivateProfessionalDrivingPermit, PrivateVIZResult, PrivateVehicleRestriction, PrivateVerificationResult, PrivateVisaDetails, ProfessionalDrivingPermitJSON, VIZResultJSON, VehicleRestrictionJSON, VerificationResultJSON, VisaDetailsJSON };
export { IdCapture, IdCaptureDocumentType$1 as IdCaptureDocumentType, IdCaptureRegion, RegionSpecificSubtype, UsRealIdStatus };
