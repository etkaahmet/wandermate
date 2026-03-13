const PLACES_DATA = {
    'Turkiye': {
        image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&h=500&fit=crop',
        description: 'Dogu ile Batinin bulusma noktasi, binlerce yillik tarih ve essiz dogal guzellikler.',
        cities: {
            'Istanbul': {
                image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&h=500&fit=crop',
                description: 'Iki kitanin sehri. Tarih, kultur ve lezzet baskenti.',
                places: [
                    { name: 'Ayasofya', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=600&h=400&fit=crop', description: '1500 yillik tarih, Bizans mimari saheseri. Hem cami hem muze.' },
                    { name: 'Topkapi Sarayi', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop', description: 'Osmanli padisahlarinin 400 yil boyunca yasadigi saray.' },
                    { name: 'Kapali Carsi', image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=600&h=400&fit=crop', description: 'Dunyanin en eski ve buyuk kapali carsisi. 4000+ dukkan.' },
                    { name: 'Galata Kulesi', image: 'https://images.unsplash.com/photo-1575999080931-59de49a4cc3b?w=600&h=400&fit=crop', description: '14. yuzyildan kalma kule, Istanbul panoramasi.' },
                    { name: 'Sultanahmet Camii', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&h=400&fit=crop', description: 'Mavi Cami olarak bilinen, 6 minareli Osmanli saheseri.' },
                    { name: 'Bogazici', image: 'https://images.unsplash.com/photo-1549918864-48ac978761a4?w=600&h=400&fit=crop', description: 'Istanbul Bogazi, Asya ile Avrupayi ayiran essiz su yolu.' },
                ]
            },
            'Ankara': {
                image: 'https://images.unsplash.com/photo-1569396116180-210c182bedb8?w=800&h=500&fit=crop',
                description: 'Turkiye Cumhuriyetinin baskenti, Ataturk un sehri.',
                places: [
                    { name: 'Anitkabir', image: 'https://images.unsplash.com/photo-1590070082786-60415a219e25?w=600&h=400&fit=crop', description: 'Mustafa Kemal Ataturk un mozolesi. Turkiyenin en kutsal mekani.' },
                    { name: 'Ankara Kalesi', image: 'https://images.unsplash.com/photo-1632391045192-1e9c36c78d9f?w=600&h=400&fit=crop', description: 'Sehrin en eski yapisi, Roma ve Bizans donemlerinden kalma.' },
                    { name: 'Kocatepe Camii', image: 'https://images.unsplash.com/photo-1603917378711-5dd73bca4f10?w=600&h=400&fit=crop', description: 'Ankaranin en buyuk camii, modern Osmanli mimarisi.' },
                    { name: 'Atakule', image: 'https://images.unsplash.com/photo-1600623052005-f9c68a12c445?w=600&h=400&fit=crop', description: '125 metre yuksekliginde sehir panoramasi sunan kule.' },
                ]
            },
            'Antalya': {
                image: 'https://images.unsplash.com/photo-1593238739364-18cfde865948?w=800&h=500&fit=crop',
                description: 'Turkiye nin turizm baskenti, turkuaz deniz ve antik kentler.',
                places: [
                    { name: 'Kaleici', image: 'https://images.unsplash.com/photo-1593238739364-18cfde865948?w=600&h=400&fit=crop', description: 'Tarihi sehir merkezi, dar sokaklar ve Osmanli evleri.' },
                    { name: 'Duden Selalesi', image: 'https://images.unsplash.com/photo-1604158964045-2736732be11f?w=600&h=400&fit=crop', description: 'Denize dokulen muhtesem selale.' },
                    { name: 'Aspendos', image: 'https://images.unsplash.com/photo-1600623052005-f9c68a12c445?w=600&h=400&fit=crop', description: 'Dunyanin en iyi korunmus Roma tiyatrosu. 15.000 kisilik.' },
                    { name: 'Konyaalti Plaji', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop', description: 'Turkuaz deniz ve daglarla cevrili efsane plaj.' },
                    { name: 'Olimpos', image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600&h=400&fit=crop', description: 'Antik kent kalintilari ve dogal guzellik ic ice.' },
                ]
            },
            'Nigde': {
                image: 'https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?w=800&h=500&fit=crop',
                description: 'Kapadokyanin giris kapisi, tarihi ve dogal guzellikler.',
                places: [
                    { name: 'Alaaddin Camii', image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=600&h=400&fit=crop', description: '13. yuzyil Selcuklu eseri, Nigdenin simgesi.' },
                    { name: 'Nigde Kalesi', image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=600&h=400&fit=crop', description: 'Selcuklu doneminden kalma tarihi kale.' },
                    { name: 'Eski Gumuskoy Kilisesi', image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=600&h=400&fit=crop', description: 'Bizans donemi kilisesi, tarihi freskler.' },
                    { name: 'Aladaglar Milli Parki', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=400&fit=crop', description: 'Orta Toroslar in en yuksek daglari, dagcilik ve trekking.' },
                    { name: 'Gumuskoy Yeralti Sehri', image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=600&h=400&fit=crop', description: 'Kapadokya bolgesindeki yeralti sehirlerinden biri.' },
                ]
            },
            'Nevsehir': {
                image: 'https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?w=800&h=500&fit=crop',
                description: 'Kapadokya nin kalbi, peri bacalari ve balon turlari.',
                places: [
                    { name: 'Goreme Acik Hava Muzesi', image: 'https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?w=600&h=400&fit=crop', description: 'UNESCO Dunya Mirasi, kayaya oyulmus kiliseler ve freskler.' },
                    { name: 'Peri Bacalari', image: 'https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=600&h=400&fit=crop', description: 'Dunyanin en ilginc dogal olusumlari, volkanik kayalar.' },
                    { name: 'Derinkuyu Yeralti Sehri', image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=600&h=400&fit=crop', description: '85 metre derinlikte, 20.000 kisi barinabilir.' },
                    { name: 'Uchhisar Kalesi', image: 'https://images.unsplash.com/photo-1625127515586-4da498a07db5?w=600&h=400&fit=crop', description: 'Kapadokyanin en yuksek noktasi, 360 derece panorama.' },
                    { name: 'Balon Turu', image: 'https://images.unsplash.com/photo-1507041957456-9c397ce39c97?w=600&h=400&fit=crop', description: 'Gun dogumunda sicak hava balonu ile Kapadokya uzeri ucus.' },
                ]
            },
            'Yozgat': {
                image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800&h=500&fit=crop',
                description: 'Bozok yaylasinin kalbi, ormanlar ve tarihi Selcuklu mirasi.',
                places: [
                    { name: 'Yozgat Camligi Milli Parki', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&h=400&fit=crop', description: 'Turkiye nin ilk milli parki, cam ormanlari ve dogal yasam.' },
                    { name: 'Basilica Therma (Sarikaya Roma Hamami)', image: 'https://images.unsplash.com/photo-1589429048058-19dd4c582b9f?w=600&h=400&fit=crop', description: 'Roma doneminden kalma antik termal hamam, sicak su kaynaklari.' },
                    { name: 'Yozgat Saat Kulesi', image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=600&h=400&fit=crop', description: 'Sehir merkezindeki tarihi Osmanli saat kulesi.' },
                    { name: 'Bozok Universitesi ve Hatti Mirasi', image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=600&h=400&fit=crop', description: 'Bozok yoresinin tarihi ve kulturel zenginligi.' },
                    { name: 'Cekerek Irmagi Vadisi', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=400&fit=crop', description: 'Dogal guzellikler, trekking ve kamp alanlari.' },
                    { name: 'Akdagmadeni Dag Yolu', image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=600&h=400&fit=crop', description: 'Akdagmadeni ilcesindeki dogal dag yolu, muhtesem manzara ve trekking rotasi.' },
                ]
            },
            'Izmir': {
                image: 'https://images.unsplash.com/photo-1590167409767-c0e8cfb21e03?w=800&h=500&fit=crop',
                description: 'Ege nin incisi, deniz, tarih ve modern yasam.',
                places: [
                    { name: 'Saat Kulesi', image: 'https://images.unsplash.com/photo-1590167409767-c0e8cfb21e03?w=600&h=400&fit=crop', description: 'Konak Meydani ndaki Izmir in simgesi.' },
                    { name: 'Efes Antik Kenti', image: 'https://images.unsplash.com/photo-1589429048058-19dd4c582b9f?w=600&h=400&fit=crop', description: 'Dunyanin en iyi korunmus antik kentlerinden biri.' },
                    { name: 'Kemeralti Carsisi', image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&h=400&fit=crop', description: 'Tarihi carsi, yerel tatlar ve el sanatlari.' },
                    { name: 'Kordon', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop', description: 'Deniz kenari yuruyus yolu, gun batimi manzarasi.' },
                    { name: 'Alacati', image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600&h=400&fit=crop', description: 'Tas evler, butik oteller ve ruzgar sorfu cenneti.' },
                ]
            },
        }
    },

    'Ispanya': {
        image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&h=500&fit=crop',
        description: 'Flamenko, tapas ve muhtesem mimari. Akdeniz in ates ulkesi.',
        cities: {
            'Barselona': {
                image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&h=500&fit=crop',
                description: 'Gaudi nin sehri, Akdeniz sahili ve essiz mimari.',
                places: [
                    { name: 'Sagrada Familia', image: 'https://images.unsplash.com/photo-1583779457711-ab081da06a85?w=600&h=400&fit=crop', description: 'Gaudi nin tamamlanmamis saheseri. 1882 den beri insaat devam ediyor.' },
                    { name: 'Park Guell', image: 'https://images.unsplash.com/photo-1587116861219-230ac19df971?w=600&h=400&fit=crop', description: 'Gaudi nin renkli mozaik cennet bahcesi. UNESCO listesinde.' },
                    { name: 'La Rambla', image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&h=400&fit=crop', description: 'Barsalonanin en unlu caddesi. Sokak sanatcilari ve kafeler.' },
                    { name: 'Casa Batllo', image: 'https://images.unsplash.com/photo-1561632669-7f55f7975606?w=600&h=400&fit=crop', description: 'Gaudi nin dalgali cepheli fantastik binasi.' },
                    { name: 'Camp Nou', image: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=600&h=400&fit=crop', description: 'FC Barcelona nin efsanevi stadyumu, 99.000 kisilik.' },
                    { name: 'Barceloneta Plaji', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop', description: 'Sehir merkezine yakin Akdeniz plaji.' },
                ]
            },
            'Madrid': {
                image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=500&fit=crop',
                description: 'Ispanya nin baskenti, sanat, gece hayati ve futbol.',
                places: [
                    { name: 'Prado Muzesi', image: 'https://images.unsplash.com/photo-1574352538013-2124a4c4c08b?w=600&h=400&fit=crop', description: 'Dunyanin en onemli sanat muzelerinden. Goya, Velazquez, El Greco.' },
                    { name: 'Retiro Parki', image: 'https://images.unsplash.com/photo-1558015029-87c8e79d19f5?w=600&h=400&fit=crop', description: '125 hektarlik yesil alan, kristal saray ve gol.' },
                    { name: 'Puerta del Sol', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=600&h=400&fit=crop', description: 'Madrid in kalbi, Ispanya nin kilometre sifir noktasi.' },
                    { name: 'Santiago Bernabeu', image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&h=400&fit=crop', description: 'Real Madrid in efsanevi stadyumu.' },
                    { name: 'Gran Via', image: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=600&h=400&fit=crop', description: 'Madrid in en canli caddesi, alisveris ve tiyatrolar.' },
                ]
            },
            'Sevilla': {
                image: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=800&h=500&fit=crop',
                description: 'Flamenko nun dogdugu sehir, narenciye kokan sokaklar.',
                places: [
                    { name: 'Plaza de Espana', image: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=600&h=400&fit=crop', description: 'Yarim daire seklinde muhtesem meydan, seramik suslemeler.' },
                    { name: 'Alcazar Sarayi', image: 'https://images.unsplash.com/photo-1583941553221-35fce4c15729?w=600&h=400&fit=crop', description: 'Mudejar mimarisi, Game of Thrones cekim mekani.' },
                    { name: 'Sevilla Katedrali', image: 'https://images.unsplash.com/photo-1588168584284-64e62d4ce2b5?w=600&h=400&fit=crop', description: 'Dunyanin en buyuk Gotik katedrali, Giralda kulesi.' },
                    { name: 'Triana Mahallesi', image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&h=400&fit=crop', description: 'Flamenko, seramik atolyeleri ve otantik tapas barlari.' },
                ]
            },
            'Valencia': {
                image: 'https://images.unsplash.com/photo-1599832163927-a0ed939d3b6b?w=800&h=500&fit=crop',
                description: 'Paella nin anavatani, futuristik mimari ve plajlar.',
                places: [
                    { name: 'Sanat ve Bilim Sehri', image: 'https://images.unsplash.com/photo-1599832163927-a0ed939d3b6b?w=600&h=400&fit=crop', description: 'Calatrava nin futuristik bina kompleksi. Akvaryum, planetaryum.' },
                    { name: 'La Lonja', image: 'https://images.unsplash.com/photo-1558015029-87c8e79d19f5?w=600&h=400&fit=crop', description: 'UNESCO listesindeki 15. yuzyil ipek borsasi.' },
                    { name: 'Turia Parki', image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600&h=400&fit=crop', description: 'Eski nehir yataginda 9 km lik yesil park.' },
                    { name: 'Malvarrosa Plaji', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop', description: 'Valencia nin en populer plaji, paella restoranlari.' },
                ]
            },
            'Granada': {
                image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&h=500&fit=crop',
                description: 'Elhamra Sarayi nin sehri, Endulus mirasi.',
                places: [
                    { name: 'Elhamra Sarayi (Alhambra)', image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&h=400&fit=crop', description: 'Dunyanin en guzel Islam mimarisi ornegi. 13. yuzyil Nasri saheseri.' },
                    { name: 'Albaicin Mahallesi', image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&h=400&fit=crop', description: 'UNESCO listesindeki tarihi Arap mahallesi, dar sokaklar.' },
                    { name: 'Sierra Nevada', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=400&fit=crop', description: 'Avrupa nin en guneydeki kayak merkezi.' },
                    { name: 'Sacromonte', image: 'https://images.unsplash.com/photo-1558015029-87c8e79d19f5?w=600&h=400&fit=crop', description: 'Magaralarda flamenko gosterileri, Romanlar in mahallesi.' },
                ]
            },
        }
    },

    'Azerbaycan': {
        image: 'https://images.unsplash.com/photo-1609856878074-cf31e21ccb6b?w=800&h=500&fit=crop',
        description: 'Ates Ulkesi. Modern mimari, antik tarih ve Turk kardeslik.',
        cities: {
            'Baku': {
                image: 'https://images.unsplash.com/photo-1609856878074-cf31e21ccb6b?w=800&h=500&fit=crop',
                description: 'Hazar Denizi kiyisinda modern ve tarihi dokunun birlestigi baskent.',
                places: [
                    { name: 'Alev Kuleleri (Flame Towers)', image: 'https://images.unsplash.com/photo-1609856878074-cf31e21ccb6b?w=600&h=400&fit=crop', description: 'Baku nun simgesi, alev seklinde 3 gokdelen. Gece isik gosterisi.' },
                    { name: 'Iceri Seher (Eski Sehir)', image: 'https://images.unsplash.com/photo-1597076545399-91a3ff0e71b3?w=600&h=400&fit=crop', description: 'UNESCO listesindeki tarihi sur ici, dar sokaklar ve tarihi yapilar.' },
                    { name: 'Kiz Kalesi', image: 'https://images.unsplash.com/photo-1597076545399-91a3ff0e71b3?w=600&h=400&fit=crop', description: '12. yuzyil kulesi, Baku nun en eski yapisi.' },
                    { name: 'Haydar Aliyev Merkezi', image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=400&fit=crop', description: 'Zaha Hadid tasarimi, futuristik kultur merkezi.' },
                    { name: 'Bulvar (Sahil Parki)', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop', description: 'Hazar kiyisinda 3 km lik yuruyus yolu ve park.' },
                    { name: 'Ateshgah (Ates Tapinagi)', image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=600&h=400&fit=crop', description: 'Dogal gaz atesinin yandigi Zerdust tapinagi.' },
                ]
            },
            'Gence': {
                image: 'https://images.unsplash.com/photo-1558015029-87c8e79d19f5?w=800&h=500&fit=crop',
                description: 'Azerbaycan in ikinci buyuk sehri, Nizami nin dogdugu yer.',
                places: [
                    { name: 'Nizami Gencevi Mozolesi', image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=600&h=400&fit=crop', description: 'Buyuk Turk sairi Nizami nin anit mezari.' },
                    { name: 'Imamzade Turbe', image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=600&h=400&fit=crop', description: '12. yuzyil dini yapi, mavi cini suslemeler.' },
                    { name: 'Sise Evi (Bottle House)', image: 'https://images.unsplash.com/photo-1558015029-87c8e79d19f5?w=600&h=400&fit=crop', description: '50.000 cam siseden yapilmis benzersiz ev.' },
                    { name: 'Heydar Aliyev Parki', image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600&h=400&fit=crop', description: 'Sehrin en buyuk parki, yesil alan ve dinlenme.' },
                ]
            },
            'Seki': {
                image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800&h=500&fit=crop',
                description: 'Ipek Yolu sehri, Kafkas daglari eteginde tarihi hazine.',
                places: [
                    { name: 'Seki Han Sarayi', image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=600&h=400&fit=crop', description: '18. yuzyil sarayi, vitray pencereler ve duvar resimleri. UNESCO.' },
                    { name: 'Karavansaray', image: 'https://images.unsplash.com/photo-1558015029-87c8e79d19f5?w=600&h=400&fit=crop', description: 'Ipek Yolu doneminden kalma tarihi han, simdi otel.' },
                    { name: 'Seki Kalesi', image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=600&h=400&fit=crop', description: 'Sehre hakim tepedeki tarihi kale kalintilari.' },
                    { name: 'Peki (Seki Halvasi)', image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&h=400&fit=crop', description: 'Azerbaycan in en unlu tatlisi, geleneksel Seki paklavasi.' },
                ]
            },
            'Nahcivan': {
                image: 'https://images.unsplash.com/photo-1558015029-87c8e79d19f5?w=800&h=500&fit=crop',
                description: 'Ozerk cumhuriyet, Nuh un diyari olarak bilinen kadim topraklar.',
                places: [
                    { name: 'Momune Hatun Turbesi', image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=600&h=400&fit=crop', description: '12. yuzyil Selcuklu mimarisi, geometrik suslemeler.' },
                    { name: 'Asabi Kehf (Yedi Uyuyanlar)', image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=600&h=400&fit=crop', description: 'Yedi Uyuyanlar efsanesinin mekanlarindan biri.' },
                    { name: 'Tuz Magarasi', image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=600&h=400&fit=crop', description: 'Dogal tuz magarasi, sifa turizmi.' },
                ]
            },
        }
    },

    'KKTC (Kuzey Kibris)': {
        image: 'https://images.unsplash.com/photo-1600699319674-87be25e30464?w=800&h=500&fit=crop',
        description: 'Akdeniz in saklı cenneti, tarihi kaleler ve bozulmamis plajlar.',
        cities: {
            'Girne': {
                image: 'https://images.unsplash.com/photo-1600699319674-87be25e30464?w=800&h=500&fit=crop',
                description: 'Tarihi liman, kaleler ve Akdeniz manzarasi.',
                places: [
                    { name: 'Girne Kalesi', image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=600&h=400&fit=crop', description: 'Lusignan doneminden kalma liman kalesi, icinde batik gemi muzesi.' },
                    { name: 'Bellapais Manastiri', image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=600&h=400&fit=crop', description: '13. yuzyil Gotik manastir, muhtesem deniz manzarasi.' },
                    { name: 'St. Hilarion Kalesi', image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=600&h=400&fit=crop', description: 'Dag tepesinde peri masali kalesi, Walt Disney ye ilham vermis.' },
                    { name: 'Girne Limani', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop', description: 'Tarihi liman, balik restoranlari ve gun batimi.' },
                    { name: 'Escape Beach', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop', description: 'Girne nin en populer plaji, turkuaz deniz.' },
                ]
            },
            'Magusa': {
                image: 'https://images.unsplash.com/photo-1558015029-87c8e79d19f5?w=800&h=500&fit=crop',
                description: 'Othello nun sehri, Venedik surlarıyla cevrili tarihi kent.',
                places: [
                    { name: 'Lala Mustafa Pasa Camii', image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=600&h=400&fit=crop', description: 'Eski St. Nicholas Katedrali, Gotik mimari saheseri.' },
                    { name: 'Othello Kalesi', image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=600&h=400&fit=crop', description: 'Shakespeare in Othello suna ilham veren Venedik kalesi.' },
                    { name: 'Venedik Surlari', image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=600&h=400&fit=crop', description: '16. yuzyil Venedik surlari, sehri cevreleyen muhtesem yapilar.' },
                    { name: 'Salamis Antik Kenti', image: 'https://images.unsplash.com/photo-1589429048058-19dd4c582b9f?w=600&h=400&fit=crop', description: 'Roma donemi harabeleri, amfitiyatro ve hamam kalintilari.' },
                    { name: 'Maras (Kapali Sehir)', image: 'https://images.unsplash.com/photo-1558015029-87c8e79d19f5?w=600&h=400&fit=crop', description: '1974 ten beri kapali hayalet sehir, zaman kapsulu.' },
                ]
            },
            'Lefkosa': {
                image: 'https://images.unsplash.com/photo-1558015029-87c8e79d19f5?w=800&h=500&fit=crop',
                description: 'Dunyanin son bolunmus baskenti, Kuzey ve Guney.',
                places: [
                    { name: 'Selimiye Camii', image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=600&h=400&fit=crop', description: 'Eski St. Sophia Katedrali, Gotik-Osmanli karisimi.' },
                    { name: 'Buyuk Han', image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&h=400&fit=crop', description: '1572 Osmanli hani, simdi kafeler ve el sanatlari dukkanları.' },
                    { name: 'Arasta Sokagi', image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&h=400&fit=crop', description: 'Geleneksel alisveris sokagi, hediyelik esyalar.' },
                    { name: 'Ledra Gecis Noktasi', image: 'https://images.unsplash.com/photo-1558015029-87c8e79d19f5?w=600&h=400&fit=crop', description: 'Kuzey-Guney sinir gecisi, bolunmus sehrin simgesi.' },
                ]
            },
            'Guzelyurt': {
                image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800&h=500&fit=crop',
                description: 'Portakal bahceleriyle unlu, sakin ve dogal sehir.',
                places: [
                    { name: 'St. Mamas Kilisesi ve Muzesi', image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=600&h=400&fit=crop', description: 'Ikonalariyla unlu tarihi kilise, arkeoloji muzesi.' },
                    { name: 'Soli Antik Kenti', image: 'https://images.unsplash.com/photo-1589429048058-19dd4c582b9f?w=600&h=400&fit=crop', description: 'Roma donemi mozaikleri ve amfitiyatro kalintilari.' },
                    { name: 'Vuni Sarayi', image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=600&h=400&fit=crop', description: 'MO 5. yuzyil Pers sarayi kalintilari, deniz manzarali.' },
                ]
            },
        }
    },

    'GKRC (Guney Kibris)': {
        image: 'https://images.unsplash.com/photo-1600699319674-87be25e30464?w=800&h=500&fit=crop',
        description: 'Akdeniz adasi, antik tarih ve turkuaz sahiller.',
        cities: {
            'Limasol': {
                image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop',
                description: 'Kibris in en kozmopolit sehri, sarap ve plajlar.',
                places: [
                    { name: 'Kourion Antik Kenti', image: 'https://images.unsplash.com/photo-1589429048058-19dd4c582b9f?w=600&h=400&fit=crop', description: 'Deniz manzarali Roma amfitiyatrosu ve mozaikler.' },
                    { name: 'Limasol Kalesi', image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=600&h=400&fit=crop', description: 'Ortacag kalesi, Richard Arslanrek burada evlendi.' },
                    { name: 'Limasol Marina', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop', description: 'Luks marina, restoranlar ve alisveris.' },
                ]
            },
            'Baf': {
                image: 'https://images.unsplash.com/photo-1558015029-87c8e79d19f5?w=800&h=500&fit=crop',
                description: 'Afrodit in dogdugu sehir, UNESCO dunya mirasi.',
                places: [
                    { name: 'Krallar Mezarligi', image: 'https://images.unsplash.com/photo-1589429048058-19dd4c582b9f?w=600&h=400&fit=crop', description: 'MO 4. yuzyil kayaya oyulmus anit mezarlar.' },
                    { name: 'Baf Arkeoloji Parki', image: 'https://images.unsplash.com/photo-1589429048058-19dd4c582b9f?w=600&h=400&fit=crop', description: 'Roma donemi mozaikleri, UNESCO listesinde.' },
                    { name: 'Afrodit Kayasi', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop', description: 'Efsaneye gore ask tanricasi Afrodit burada dogdu.' },
                ]
            },
            'Larnaka': {
                image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop',
                description: 'Tuz golu, flamingolar ve palmiye sahili.',
                places: [
                    { name: 'Hala Sultan Tekkesi', image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=600&h=400&fit=crop', description: 'Islam in 4. kutsal mekani, tuz golu kenarinda.' },
                    { name: 'Larnaka Tuz Golu', image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600&h=400&fit=crop', description: 'Kista flamingolarin toplandigi dogal gol.' },
                    { name: 'Finikoudes Sahili', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop', description: 'Palmiye agaclaryla cevrili unlu sahil yolu.' },
                    { name: 'St. Lazarus Kilisesi', image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=600&h=400&fit=crop', description: '9. yuzyil Bizans kilisesi, Hz. Lazar in mezari.' },
                ]
            },
        }
    },
};
