import { Helmet, HelmetProvider } from "react-helmet-async";
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};
const Orphan = ({ titleSeo, description, Author, Keyword, URL, Image }) => {
    // For SEO
    const metatitle = String(titleSeo || "Trusted Home & Commercial Appliance Repair in Dubai");
    const metadescription = String(description || "FAJ, founded in 2010, provides expert home & commercial appliances repair in Dubai. Skilled technicians service all major brands with reliable results.");
    const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
    const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/The-Most-Common-Reasons-for-Appliance-Breakdowns/public");
    const metaKeyword = String(Keyword || "FAJ");
    const metaURL = String(URL || "https://www.fajservices.ae/orphan/");

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>{metatitle}</title>
                    <meta name="description" content={metadescription} />
                    <meta name="keywords" content={metaKeyword} />
                    <meta name="author" content={metaAuthor} />
                    <meta name="robots" content="index, follow" />

                    <link rel="canonical" href={metaURL} />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:title" content={metatitle} />
                    <meta property="og:description" content={metadescription} />
                    <meta property="og:url" content={metaURL} />
                    <meta property="og:image" content={metaImage} />

                    {/* Twitter Card */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={metatitle} />
                    <meta name="twitter:description" content={metadescription} />
                    <meta name="twitter:image" content={metaImage} />
                    
                </Helmet>
            </HelmetProvider>

            <section
                className="cs_page_heading cs_bg_filed cs_primary_bg"
                style={{ backgroundImage: `url(${getImageSrc('page_heading_1')})` }}
            >
            </section>
            <section>
                <div className="container my-5">
                    <h1 className="cs_fs_30">Services</h1>
                    <div className="row">
                        <ul>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/تصليح-مكيفات-الهواء-خدمة-وصيانة-دبي/">شركةتصليح مكيفات الهواء خدمة وصيانة دبي</a></li>
                            <li><a href="https://www.fajservices.ae/dubai/ac-repair-near-me/">AC Repair Near Me - Expert AC Service and Maintenance</a></li>
                            <li><a href="https://www.fajservices.ae/dubai/near-me/ ">Near Me</a></li>
                            <li><a href="https://www.fajservices.ae/electrical-plumbing-service/">Electrical Plumbing</a></li>
                            <li><a href="https://www.fajservices.ae/our-team/">Our Team</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/ecovacs-vacuum-cleaner-repair-and-service-in-dubai/">Ecovacs Vacuum Cleaner Repair and Service in Dubai</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/roborock-vacuum-cleaner-repair-service-in-dubai/">Roborock Vacuum Cleaner Repair and Service in Dubai</a></li>
                            <li><a href="https://www.fajservices.ae/services/kitchen-equipment-maintenance/unox-commercial-oven-repair-and-maintenance-service-dubai/">Unox Commercial Oven Repair and Maintenance Service Dubai</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/flamingo-villas/">Flamingo Villas</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-aweer/">Al Aweer</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-mizhar/">Al Mizhar</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/hudaiba/">Hudaiba</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dubai-internet-city/">Dubai Internet City</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/the-gardens/">The Gardens</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/al-jafiliya/">Al Jafiliya</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/victory-heights/">Victory Heights</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dubai-international-financial-centre/">Dubai International Financial Centre</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/dubailand-mazaya/">Dubai Land & Mazaya</a></li>
                            <li><a href="https://www.fajservices.ae/faj-price-list/">FAJ Price List</a></li>
                            <li><a href="https://www.fajservices.ae/dubai-service-center-coffee-machine/">Dubai Service Center Coffee Machine</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/nikai/">Nikai</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-qusais/">Al Qusais</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/bryant/">Bryant</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/rheem/">Rheem</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/sanyo/">Sanyo</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jumeirah-village/">Jumeirah Village</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/the-ritz-carlton-difc/">The Ritz Carlton Difc</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/super-general/">Super General</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/liebherr/">Liebherr</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/ariston/">Ariston</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jvc/">Jvc</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jebel-ali-free-zone/">Jebel Ali Free Zone</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/zanussi/">Zanussi</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/kitchenaid/">Kitchenaid</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/haier/">Haier</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/hitachi/">Hitachi</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/daewoo/">Daewoo</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/al-waha-community/">Al Waha Community</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-sufouh/">Al Sufouh</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/mcquay/">Mcquay</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/toshiba/">Toshiba</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/elica/">Elica</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-quoz-industrial-area/">Al Quoz Industrial Area</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/kitchenaid-stand-mixer-repair/">Kitchenaid Stand Mixer Repair</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/aeg/">Aeg</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-karama/">Al Karama</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/cooline/">Cooline</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/the-springs/">The Springs</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/smeg/">Smeg</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-mirdif/">Al Mirdif</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/o-general/">O General</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jumeirah-golf-estates/">Jumeirah Golf Estates</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/la-germania/">La Germania</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/skm/">Skm</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/deira/">Deira</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-rashidiya/">Al Rashidiya</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-manara/">Al Manara</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/indesit/">Indesit</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/samsung/">Samsung</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/dubai-media-city/">Dubai Media City</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-raffa/">Al Raffa</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/hitachi/">Hitachi</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/the-meadows/">The Meadows</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jumeirah/">Jumeirah</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jlt/">Jlt</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/beko/">Beko</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/neff/">Neff</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/al-wasl/">Al Wasl</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/motor-city/">Motor City</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/hudaiba/">Hudaiba</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/ifb/">Ifb</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jafza/">Jafza</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/academy-city/">Academy City</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-furjan/">Al Furjan</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/ge-general-electric/">Ge General Electric</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jebel-ali-dip/">Jebel Ali Dip</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/arabian-ranches-2/">Arabian Ranches 2</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/miele/">Miele</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/limestone-house-difc/">Limestone House Difc</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/cedre-villas-silicon-oasis-dubai/">Cedre Villas Silicon Oasis Dubai</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/impz/">Impz</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/old-town-dubai/">Old Town Dubai</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-badaa/">Al Badaa</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/boston/">Boston</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/the-lakes/">The Lakes</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/gorenje/">Gorenje</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/speed-queen/">Speed Queen</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/delonghi/">Delonghi</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-quoz/">Al Quoz</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/al-karama/">Al Karama</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dubailand-the-villa-point/">Dubailand The Villa Point</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/samsung/">Samsung</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/gibson/">Gibson</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/lennox/">Lennox</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/faber/">Faber</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dubai-studio-city/">Dubai Studio City</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-safa/">Al Safa</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/nad-al-sheba/">Nad Al Sheba</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jebel-ali-village/">Jebel Ali Village</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/haier/">Haier</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/kenmore/">Kenmore</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/remraam/">Remraam</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/umm-suqeim/">Umm Suqeim</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/victory-heights/">Victory Heights</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/sub-zero/">Sub Zero</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jvt/">Jvt</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/umm-ramool/">Umm Ramool</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dubai-silicon-oasis/">Dubai Silicon Oasis</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/marvel/">Marvel</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dubai-healthcare-city/">Dubai Healthcare City</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/franke/">Franke</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/toshiba/">Toshiba</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/hoover/">Hoover</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/the-greens/">The Greens</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/knowledge-village/">Knowledge Village</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dubailand-mazaya-queue/">Dubailand Mazaya Queue</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/bay-square/">Bay Square</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/ras-al-khor-industrial-area/">Ras Al Khor Industrial Area</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/oud-metha/">Metha</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/dubai-internet-city/">Dubai Internet City</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/hisense/">Hisense</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-khawaneej/">Al Khawaneej</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/media-city/">Media City</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jebel-ali/">Jebel Ali</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/the-villa/">The Villa</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/admiral/">Admiral</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/business-bay/">Business Bay</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/electrolux/">Electrolux</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/lg/">Lg</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/nad-al-hammar/">Nad Al Hammar</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/deira/">Deira</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jumeirah-islands/">Jumeirah Islands</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/york/">York</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/sharp/">Sharp</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/kelvinator/">Kelvinator</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/siemens/">Siemens</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/south-ridge/">South Ridge</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/mitsubishi/">Mitsubishi</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/gaggenau/">Gaggenau</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/baumatic/">Baumatic</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/daewoo/">Daewoo</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/westpoint/">Westpoint</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/sanyo/">Sanyo</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/midea/">Midea</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/the-greens/">The Greens</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/teka/">Teka</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/panasonic/">Panasonic</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/remraam-2/">Remraam 2</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dip/">Dip</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/crafft/">Crafft</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/viking/">Viking</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dubai-production-city/">Dubai Production City</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/umm-al-sheif/">Umm Al Sheif</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/difc/">Difc</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/fagor/">Fagor</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/blomberg/">Blomberg</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/bur-dubai/">Bur Dubai</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/bur-dubai/">Bur Dubai</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/dubailand-the-villa/">Dubailand The Villa</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jumeirah-heights/">Jumeirah Heights</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dubai-marina/">Dubai Marina</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jumeirah-park/">Jumeirah Park</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/bompani/">Bompani</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/unimac/">Unimac</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/maytag/">Maytag</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/blue-star/">Blue Star</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/de-dietrich/">De Dietrich</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/daikool/">Daikool</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/mudon/">Mudon</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/difc/">Difc</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/whirlpool/">Whirlpool</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/the-views/">The Views</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dubai-hills-estate/">Dubai Hills Estate</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/kenwood/">Kenwood</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/sub-zero/">Sub Zero</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-jafiliya/">Al Jafiliya</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/westpoint/">Westpoint</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/arabian-ranches/">Arabian Ranches</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/thermador/">Thermador</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/foster/">Foster</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jumeirah-lake-towers/">Jumeirah Lake Towers</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/terim/">Terim</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/lg/">Lg</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dubai-sport-city/">Dubai Sport City</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-barsha-south/">Al Barsha South</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-warqa/">Al Warqa</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/aftron/">Aftron</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/coleman/">Coleman</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/hotpoint/">Hotpoint</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/whirlpool/">Whirlpool</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/supra/">Supra</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/frigidaire/">Frigidaire</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/white-westinghouse/">White Westinghouse</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/al-manara/">Al Manara</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/sears/">Sears</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/mankhool/">Mankhool</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-tawar/">Al Tawar</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/fisher-paykel/">Fisher Paykel</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/trane/">Trane</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/candy/">Candy</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/bosch/">bosch</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-satwa/">Al Satwa</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/bertazzoni/">Bertazzoni</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/tcl/">Tcl</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jebel-ali-industrial-area/">Jebel Ali Industrial Area</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/downtown/">Downtown</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/ruud/">Ruud</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/dip/">Dip</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/layan-community/">Layan Community</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/the-ritz-carlton-difc/">The Ritz Carlton Difc</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/wolf/">Wolf</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/white-westinghouse/">White Westinghouse</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/palm-jumeirah/">Palm Jumeirah</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jge/">Jge</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/al-raffa/">Al Raffa</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/jumeirah-park/">Jumeirah Park</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/layan-community/">Layan Community</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/umm-al-sheif/">Umm Al Sheif</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/mankhool/">Mankhool</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/oud-metha/">Oud Metha</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/jbr-dubai/">Jbr Dubai</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/the-villa/">The Villa</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/al-sufouh/">Al Sufouh</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-mamzar/">Al Mamzar</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/al-satwa/">Al Satwa</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/al-quoz/">Al Quoz</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/remraam/">Remraam</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/tecom/">Tecom</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/index-tower-difc/">Index Tower Difc</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/international-media-and-production-zone/">International Media And Production Zone</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/international-media-and-production-zone/">International Media And Production Zone</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/jumeirah-dubai/">Jumeirah Dubai</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dubai-investments-park/">Dubai Investments Park</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/jebel-ali-free-zone/">Jebel Ali Free Zone</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/jge/">Jge</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/al-badaa/">Al Badaa</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/jebel-ali/">Jebel Ali</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/smeg-mixer-repair/">Smeg Mixer Repair</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/jumeirah-village/">Jumeirah Village</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/arabian-ranches-2/">Arabian Ranches 2</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/flamingo-villas-dubai/">Flamingo Villas Dubai</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/al-mamzar/">Al Mamzar</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/the-lakes/">The Lakes</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/jumeirah-heights/">Jumeirah Heights</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/falcon-city-dubai/">Falcon City Dubai</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/jumeirah-islands/">Jumeirah Islands</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/discovery-gardens/">Discovery Gardens</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-wasl/">Al Wasl</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/al-bada/">Al Bada</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-bada/">Al Bada</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/dubai-healthcare-city/">Dubai Healthcare City</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/the-limestone-house-difc/">The Limestone House Difc</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/the-springs/">The Springs</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/al-mizhar/">Al Mizhar</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/burj-khalifa-lake/">Burj Khalifa Lake</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/al-furjan/">Al Furjan</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/index-tower-difc/">Index Tower Difc</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/town-dubai/">Town Dubai</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/the-views/">The Views</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/">Home Aplliances Coverage Area</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/dubailand-mazaya-queue-point/">Dubailand Mazaya Queue Point</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/jebel-ali-dip/">Jebel Ali Dip</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/al-ghadeer-community/">Al Ghadeer Community</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/jebel-ali-industrial-area/">Jebel Ali Industrial Area</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/nad-al-sheba/">Nad Al Sheba</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-waha-community/">Al Waha Community</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/mudon/ ">Mudon</a></li>
                            <li><a href="https://www.fajservices.ae/services/kitchen-equipment-maintenance/rational-commercial-kitchen-equipment-repair-and-maintenance-service-dubai/">Rational Commercial kitchen Equipment</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/cedre-villas-silicon-oasis-dubai/">Cedre Villas Silicon Oasis</a></li>
                            <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/the-gardens/">The Gardens</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/al-barsha-south/">Al Barsha South</a></li>
                            <li><a href="https://www.fajservices.ae/blog/types-of-air-conditioners/">Types of Air Conditioners</a></li>
                            <li><a href="https://www.fajservices.ae/blog/what-is-vent-mode/">What is Vent Mode</a></li>
                            <li><a href="https://www.fajservices.ae/blog/benefits-of-smart-thermostats/">Benefits of Smart Thermostats</a></li>
                            <li><a href="https://www.fajservices.ae/blog/how-to-reset-o-general-ac/">How to Reset O General AC</a></li>
                            <li><a href="https://www.fajservices.ae/blog/is-air-fryer-healthy/">Is Air Fryer Healthy</a></li>
                            <li><a href="https://www.fajservices.ae/blog/ac-compressor-replacement-signs-causes-when-to-replace/">AC Compressor Replacement - Signs, Causes & When to Replace</a></li>
                            <li><a href="https://www.fajservices.ae/blog/top-10-signs-you-need-ac-repair-in-dubai/">Top 10 Signs You Need AC Repair in Dubai</a></li>
                            <li><a href="https://www.fajservices.ae/blog/top-10-signs-you-need-ac-service-in-dubai/">Top 10 Signs You Need AC Service in Dubai</a></li>
                            <li><a href="https://www.fajservices.ae/blog/washing-machine-problems-and-solutions-dubai/">Washing Machine Problems and Solutions Dubai</a></li>
                            <li><a href="https://www.fajservices.ae/blog/espresso-machine-cleaning-schedule-and-how-to-do-it/">Espresso Machine Cleaning Schedule and How To Do It</a></li>
                            <li><a href="https://www.fajservices.ae/blog/what-is-the-ideal-room-temperature-for-comfortable-living-across-different-ages-including-children-and-adults/">What is the Ideal Room Temperature for Comfortable Living Across Different Ages Including Children and Adults</a></li>
                            <li><a href="https://www.fajservices.ae/blog/how-ac-filter-boost-coling-perrformance-and-air-quality/">How AC Filter Boost Cooling Performance and Air Quality</a></li>
                            <li><a href="https://www.fajservices.ae/blog/how-to-choose-the-right-ac-repair-service/">How to Choose the Right AC Repair Service</a></li>
                            <li><a href="https://www.fajservices.ae/blog/the-complete-handbook-for-maintaining-a-dust-free-air-conditioner-in-dubai/">The Complete Handbook for Maintaining a Dust Free Air Conditioner in Dubai</a></li>
                            <li><a href="https://www.fajservices.ae/blog/how-to-clean-bosch-washing-machine/">How to Clean Bosch Washing Machine</a></li>
                            <li><a href="https://www.fajservices.ae/blog/10-coffee-machine-problems-and-how-to-diy-fix-them-like-a-pro/">10 Coffee Machine Problems and How to DIY Fix Them Like a Pro</a></li>
                            <li><a href="https://www.fajservices.ae/blog/how-bagless-vacuum-cleaner-work/">How Bagless Vacuum Cleaner Work</a></li>
                            <li><a href="https://www.fajservices.ae/blog/dishwasher-cleaning-guide/">Dishwasher Cleaning Guide</a></li>
                            <li><a href="https://www.fajservices.ae/blog/how-to-clean-your-oven/">How to Clean Your Oven</a></li>
                            <li><a href="https://www.fajservices.ae/blog/midea-air-conditioner-maintenance-guide/">Midea Air Conditioner Maintenance Guide</a></li>
                            <li><a href="https://www.fajservices.ae/blog/how-to-clean-ac-condenser/">How to Clean AC Condenser</a></li>
                            <li><a href="https://www.fajservices.ae/blog/a-guide-to-diy-refrigerator-maintenance-at-home-keep-your-fridge-running-like-new/">A Guide to DIY Refrigerator Maintenance at Home - Keep Your Fridge Running Like New</a></li>
                            <li><a href="https://www.fajservices.ae/blog/ac-repair-dubai-questions-before-hiring-ac-repair-companies-dubai/">AC Repair Dubai - Questions Before Hiring AC Repair Companies Dubai</a></li>
                            <li><a href="https://www.fajservices.ae/blog/the-ultimate-guide-to-ac-maintenance-in-dubai-for-Long-lasting-cooling-performance/">Guide for AC Maintenance</a></li>
                            <li><a href="https://www.fajservices.ae/blog/repair-or-replac-what-to-do-with-a-broken-washing-machine-in-dubai/">Repair or Replace in Washing Machine</a></li>
                            <li><a href="https://www.fajservices.ae/blog/how-to-clean-an-air-conditioner-ac-drain-line-for-better-cooling-performance/">How to Clean an Air Conditioner AC Drain Line for Better Cooling Performance</a></li>
                            <li><a href="https://www.fajservices.ae/blog/how-do-you-clean-a-refrigerator-complete-guide-to-refrigerator-maintenance/">How Do You Clean a Refrigerator? Complete Guide to Refrigerator Maintenance</a></li>
                            <li><a href="https://www.fajservices.ae/blog/the-ultimate-guide-to-ac-service-for-healthier-air-and-better-indoor-air-quality/">The Ultimate Guide to AC Service for Healthier Air and Better Indoor Air Quality</a></li>
                            <li><a href="https://www.fajservices.ae/blog/how-to-calculate-ac-tonnage-for-a-room-complete-guide-to-ac-tonnage-calculation/">How to Calculate AC Tonnage for a Room: Complete Guide to AC Tonnage Calculation</a></li>
                            <li><a href="https://www.fajservices.ae/blog/top-10-signs-your-ac-needs-maintenance-in-dubai/">Top 10 Signs Your AC Needs Maintenance in Dubai</a></li>
                            <li><a href="https://www.fajservices.ae/blog/repair-or-replace-what-to-do-with-a-broken-washing-machine-in-dubai/">Repair or Replace? What to Do with a Broken Washing Machine in Dubai</a></li>
                            <li><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/bosch/">Bosch Home Appliances Repair Services</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Orphan;