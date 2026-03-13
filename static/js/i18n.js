const TRANSLATIONS = {
    tr: {
        // Navbar
        explore: 'Kesfet',
        trips: 'Geziler',
        messages: 'Mesajlar',
        profile: 'Profil',
        login: 'Giris Yap',
        register: 'Kayit Ol',
        logout: 'Cikis',

        // Hero
        hero_title_1: 'Yerel Rehberinle',
        hero_title_2: 'Dunyayi Kesfet',
        hero_desc: 'Gitmek istedigin sehirde gonullu bir yerel rehber bul. Ulkesini tanitmak isteyen kardeslerinle bulusup, turistlerin goremeyecegi yerleri kesfet.',
        plan_trip: 'Gezi Planla',
        see_trips: 'Gezileri Gor',

        // How it works
        step1_title: '1. Gezi Olustur',
        step1_desc: '"25 Mart\'ta Istanbul\'a geliyorum, birisi beni gezdirsin!" diye ilan ver.',
        step2_title: '2. Rehber Basvursun',
        step2_desc: 'O sehirdeki gonullu rehberler sana mesaj atar. Profillerine bak, birini sec.',
        step3_title: '3. Birlikte Kesfet',
        step3_desc: 'Bulusun, gez, kardeslik kur. Sonra sen de kendi sehrinde birine rehberlik et!',

        // Trips
        open_trips: 'Acik Geziler',
        new_trip: '+ Yeni Gezi',
        no_trips: 'Henuz acik gezi yok. Ilk geziyi sen olustur!',
        no_filter_trips: 'Filtreye uyan gezi bulunamadi.',
        filter_country: 'Ulke filtrele...',
        filter_city: 'Sehir filtrele...',
        applications: 'basvuru',
        open: 'Acik',

        // Create trip
        create_trip: 'Yeni Gezi Olustur',
        dest_country: 'Hedef Ulke',
        dest_city: 'Hedef Sehir',
        arrival: 'Varis Tarihi',
        departure: 'Donus Tarihi',
        trip_desc_placeholder: 'Gezinizi anlatin... (orn: Istanbul\'a ilk kez geliyorum, tarihi yerleri gezmek istiyorum)',
        interests_placeholder: 'Ilgi alanlari (virgul ile: tarih, yemek, doga)',
        cancel: 'Iptal',
        create: 'Olustur',
        required_fields: 'Ulke, sehir ve tarihler zorunlu',
        trip_created: 'Gezi olusturuldu!',

        // Trip detail
        back_trips: 'Gezilere don',
        apply_host: 'Rehber Olarak Basvur',
        apply_msg_placeholder: 'Mesajiniz (orn: Hosgeldin! Seni gezdirmekten mutluluk duyarim.)',
        apply: 'Basvur',
        applied: 'Basvurunuz gonderildi!',
        applications_title: 'Basvurular',
        no_applications: 'Henuz basvuru yok.',
        accept: 'Kabul',
        reject: 'Reddet',
        accepted: 'Kabul Edildi',
        rejected: 'Reddedildi',
        match_accepted: 'Eslesme kabul edildi!',

        // Auth
        login_title: 'Giris Yap',
        register_title: 'Kayit Ol',
        email: 'Email',
        password: 'Sifre (min 6 karakter)',
        password_login: 'Sifre',
        full_name: 'Ad Soyad',
        select_country: 'Ulke secin...',
        select_city: 'Sehir secin...',
        no_account: 'Hesabin yok mu?',
        has_account: 'Zaten hesabin var mi?',
        fill_all: 'Tum alanlari doldurun',
        min_password: 'Sifre en az 6 karakter olmali',
        welcome: 'Hosgeldin',
        welcome_back: 'Tekrar hosgeldin!',

        // Messages
        messages_title: 'Mesajlar',
        no_messages: 'Henuz mesaj yok',
        select_convo: 'Bir konusma sec',
        type_message: 'Mesaj yaz...',
        send: 'Gonder',
        cant_self_msg: 'Kendinize mesaj atamazsiniz',

        // Profile
        about_me: 'Hakkimda',
        country: 'Ulke',
        city: 'Sehir',
        interests: 'Ilgi Alanlari',
        volunteer_host: 'Gonullu Rehberim',
        volunteer_desc: 'Sehrime gelen gezginlere rehberlik etmek istiyorum',
        host_desc: 'Rehberlik Aciklamasi',
        host_desc_placeholder: 'orn: Nigde ve Kapadokya\'yi iyi bilirim, tarihi mekanlar ve yerel yemekler...',
        save: 'Kaydet',
        profile_updated: 'Profil guncellendi',
        trips_count: 'gezi',
        hosted_count: 'rehberlik',

        // Explore
        explore_title: 'Ulkeleri Kesfet',
        explore_desc: 'Gitmek istedigin ulkeyi sec, sehirlerini ve gezilecek yerlerini gor.',
        all_countries: 'Tum Ulkeler',
        city_count: 'sehir',
        place_count: 'gezilecek yer',
        places_title: 'Gezilecek Yerler',
        city_waiting: 'seni bekliyor!',
        city_cta: 'Yerel bir rehber esliginde bu sehri kesfet.',
        plan_this_city: 'Bu Sehre Gezi Planla',

        // Settings
        settings_saved: 'Ayarlar kaydedildi',
    },

    az: {
        // Navbar
        explore: 'Kesfet',
        trips: 'Seyahetler',
        messages: 'Mesajlar',
        profile: 'Profil',
        login: 'Daxil ol',
        register: 'Qeydiyyat',
        logout: 'Cixis',

        // Hero
        hero_title_1: 'Yerli Beledcinle',
        hero_title_2: 'Dunyani Kesfet',
        hero_desc: 'Getmek istediyin seherde konullu yerli beledci tap. Olkesini tanitmaq isteyen qardashlarinla gorusub, turistlerin gore bilmeyeceyi yerleri kesfet.',
        plan_trip: 'Seyahet Planla',
        see_trips: 'Seyahetlere Bax',

        // How it works
        step1_title: '1. Seyahet Yarat',
        step1_desc: '"25 Martda Istanbula gelirem, biri meni gezdirsin!" diye elan ver.',
        step2_title: '2. Beledci Muraciet Etsin',
        step2_desc: 'O seherdeki konullu beledciler sene mesaj yazir. Profillerine bax, birini sec.',
        step3_title: '3. Birlikde Kesfet',
        step3_desc: 'Gorusun, gez, qardashlig qur. Sonra sen de oz sehrinde birine beledcilik et!',

        // Trips
        open_trips: 'Aciq Seyahetler',
        new_trip: '+ Yeni Seyahet',
        no_trips: 'Hele aciq seyahet yoxdur. Ilk seyaheti sen yarat!',
        no_filter_trips: 'Filtreye uygun seyahet tapilmadi.',
        filter_country: 'Olke filtrle...',
        filter_city: 'Seher filtrle...',
        applications: 'muraciet',
        open: 'Aciq',

        // Create trip
        create_trip: 'Yeni Seyahet Yarat',
        dest_country: 'Hedef Olke',
        dest_city: 'Hedef Seher',
        arrival: 'Gelis Tarixi',
        departure: 'Donus Tarixi',
        trip_desc_placeholder: 'Seyahetinizi anladin... (mes: Istanbula ilk defe gelirem, tarixi yerleri gezmek isteyirem)',
        interests_placeholder: 'Maraq saheleri (vergul ile: tarix, yemek, tebiet)',
        cancel: 'Legv et',
        create: 'Yarat',
        required_fields: 'Olke, seher ve tarixler mecburidir',
        trip_created: 'Seyahet yaradildi!',

        // Trip detail
        back_trips: 'Seyahetlere qayit',
        apply_host: 'Beledci Olaraq Muraciet Et',
        apply_msg_placeholder: 'Mesajiniz (mes: Xos geldin! Seni gezdirmekden memnum olaram.)',
        apply: 'Muraciet et',
        applied: 'Muracietiniz gonderildi!',
        applications_title: 'Muracietler',
        no_applications: 'Hele muraciet yoxdur.',
        accept: 'Qebul et',
        reject: 'Red et',
        accepted: 'Qebul Edildi',
        rejected: 'Red Edildi',
        match_accepted: 'Esleshme qebul edildi!',

        // Auth
        login_title: 'Daxil ol',
        register_title: 'Qeydiyyat',
        email: 'Email',
        password: 'Shifre (min 6 simvol)',
        password_login: 'Shifre',
        full_name: 'Ad Soyad',
        select_country: 'Olke secin...',
        select_city: 'Seher secin...',
        no_account: 'Hesabin yoxdur?',
        has_account: 'Artiq hesabin var?',
        fill_all: 'Butun saheleri doldurun',
        min_password: 'Shifre en az 6 simvol olmalidir',
        welcome: 'Xos geldin',
        welcome_back: 'Tekrar xos geldin!',

        // Messages
        messages_title: 'Mesajlar',
        no_messages: 'Hele mesaj yoxdur',
        select_convo: 'Bir sohbet sec',
        type_message: 'Mesaj yaz...',
        send: 'Gonder',
        cant_self_msg: 'Ozunuze mesaj gondere bilmezsiniz',

        // Profile
        about_me: 'Haqqimda',
        country: 'Olke',
        city: 'Seher',
        interests: 'Maraq Saheleri',
        volunteer_host: 'Konullu Beledciyem',
        volunteer_desc: 'Seherime gelen seyahetcilere beledcilik etmek isteyirem',
        host_desc: 'Beledcilik Aciqlamasi',
        host_desc_placeholder: 'mes: Baki ve Abseronu yaxsi taniram, tarixi mekanlar ve milli yemekler...',
        save: 'Saxla',
        profile_updated: 'Profil yenilendi',
        trips_count: 'seyahet',
        hosted_count: 'beledcilik',

        // Explore
        explore_title: 'Olkeleri Kesfet',
        explore_desc: 'Getmek istediyin olkeni sec, seherlerini ve gezilecek yerlerini gor.',
        all_countries: 'Butun Olkeler',
        city_count: 'seher',
        place_count: 'gezilecek yer',
        places_title: 'Gezilecek Yerler',
        city_waiting: 'seni gozleyir!',
        city_cta: 'Yerli bir beledci ile bu seheri kesfet.',
        plan_this_city: 'Bu Sehere Seyahet Planla',

        // Settings
        settings_saved: 'Ayarlar saxlanildi',
    },

    en: {
        // Navbar
        explore: 'Explore',
        trips: 'Trips',
        messages: 'Messages',
        profile: 'Profile',
        login: 'Login',
        register: 'Sign Up',
        logout: 'Logout',

        // Hero
        hero_title_1: 'Discover the World',
        hero_title_2: 'With a Local Guide',
        hero_desc: 'Find a volunteer local guide in the city you want to visit. Meet locals who want to showcase their country and explore places tourists never see.',
        plan_trip: 'Plan a Trip',
        see_trips: 'See Trips',

        // How it works
        step1_title: '1. Create a Trip',
        step1_desc: 'Post "I\'m coming to Istanbul on March 25th, can someone show me around?"',
        step2_title: '2. Guides Apply',
        step2_desc: 'Volunteer guides in that city message you. Check their profiles and pick one.',
        step3_title: '3. Explore Together',
        step3_desc: 'Meet up, explore, build friendship. Then guide someone in your own city!',

        // Trips
        open_trips: 'Open Trips',
        new_trip: '+ New Trip',
        no_trips: 'No open trips yet. Be the first to create one!',
        no_filter_trips: 'No trips match your filter.',
        filter_country: 'Filter by country...',
        filter_city: 'Filter by city...',
        applications: 'applications',
        open: 'Open',

        // Create trip
        create_trip: 'Create New Trip',
        dest_country: 'Destination Country',
        dest_city: 'Destination City',
        arrival: 'Arrival Date',
        departure: 'Departure Date',
        trip_desc_placeholder: 'Describe your trip... (e.g. First time visiting Istanbul, want to see historical sites)',
        interests_placeholder: 'Interests (comma separated: history, food, nature)',
        cancel: 'Cancel',
        create: 'Create',
        required_fields: 'Country, city and dates are required',
        trip_created: 'Trip created!',

        // Trip detail
        back_trips: 'Back to trips',
        apply_host: 'Apply as Guide',
        apply_msg_placeholder: 'Your message (e.g. Welcome! I\'d love to show you around.)',
        apply: 'Apply',
        applied: 'Application sent!',
        applications_title: 'Applications',
        no_applications: 'No applications yet.',
        accept: 'Accept',
        reject: 'Reject',
        accepted: 'Accepted',
        rejected: 'Rejected',
        match_accepted: 'Match accepted!',

        // Auth
        login_title: 'Login',
        register_title: 'Sign Up',
        email: 'Email',
        password: 'Password (min 6 characters)',
        password_login: 'Password',
        full_name: 'Full Name',
        select_country: 'Select country...',
        select_city: 'Select city...',
        no_account: 'Don\'t have an account?',
        has_account: 'Already have an account?',
        fill_all: 'Please fill all fields',
        min_password: 'Password must be at least 6 characters',
        welcome: 'Welcome',
        welcome_back: 'Welcome back!',

        // Messages
        messages_title: 'Messages',
        no_messages: 'No messages yet',
        select_convo: 'Select a conversation',
        type_message: 'Type a message...',
        send: 'Send',
        cant_self_msg: 'You cannot message yourself',

        // Profile
        about_me: 'About Me',
        country: 'Country',
        city: 'City',
        interests: 'Interests',
        volunteer_host: 'Volunteer Guide',
        volunteer_desc: 'I want to guide travelers visiting my city',
        host_desc: 'Guide Description',
        host_desc_placeholder: 'e.g. I know Istanbul well, historical sites and local food...',
        save: 'Save',
        profile_updated: 'Profile updated',
        trips_count: 'trips',
        hosted_count: 'hosted',

        // Explore
        explore_title: 'Explore Countries',
        explore_desc: 'Pick a country you want to visit, discover its cities and attractions.',
        all_countries: 'All Countries',
        city_count: 'cities',
        place_count: 'attractions',
        places_title: 'Attractions',
        city_waiting: 'is waiting for you!',
        city_cta: 'Explore this city with a local guide.',
        plan_this_city: 'Plan a Trip to This City',

        // Settings
        settings_saved: 'Settings saved',
    },

    es: {
        // Navbar
        explore: 'Explorar',
        trips: 'Viajes',
        messages: 'Mensajes',
        profile: 'Perfil',
        login: 'Iniciar sesion',
        register: 'Registrarse',
        logout: 'Salir',

        // Hero
        hero_title_1: 'Descubre el Mundo',
        hero_title_2: 'Con un Guia Local',
        hero_desc: 'Encuentra un guia local voluntario en la ciudad que quieres visitar. Conoce a locales que quieren mostrar su pais y explora lugares que los turistas nunca ven.',
        plan_trip: 'Planear Viaje',
        see_trips: 'Ver Viajes',

        // How it works
        step1_title: '1. Crea un Viaje',
        step1_desc: 'Publica "Voy a Estambul el 25 de marzo, ¿alguien puede ensenarme la ciudad?"',
        step2_title: '2. Los Guias Aplican',
        step2_desc: 'Guias voluntarios de esa ciudad te escriben. Revisa sus perfiles y elige uno.',
        step3_title: '3. Exploren Juntos',
        step3_desc: 'Quedense, exploren, hagan amistad. Luego guia a alguien en tu propia ciudad!',

        // Trips
        open_trips: 'Viajes Abiertos',
        new_trip: '+ Nuevo Viaje',
        no_trips: 'Aun no hay viajes abiertos. Se el primero en crear uno!',
        no_filter_trips: 'No se encontraron viajes con ese filtro.',
        filter_country: 'Filtrar por pais...',
        filter_city: 'Filtrar por ciudad...',
        applications: 'solicitudes',
        open: 'Abierto',

        // Create trip
        create_trip: 'Crear Nuevo Viaje',
        dest_country: 'Pais de Destino',
        dest_city: 'Ciudad de Destino',
        arrival: 'Fecha de Llegada',
        departure: 'Fecha de Regreso',
        trip_desc_placeholder: 'Describe tu viaje... (ej: Primera vez en Estambul, quiero ver sitios historicos)',
        interests_placeholder: 'Intereses (separados por coma: historia, comida, naturaleza)',
        cancel: 'Cancelar',
        create: 'Crear',
        required_fields: 'Pais, ciudad y fechas son obligatorios',
        trip_created: 'Viaje creado!',

        // Trip detail
        back_trips: 'Volver a viajes',
        apply_host: 'Aplicar como Guia',
        apply_msg_placeholder: 'Tu mensaje (ej: Bienvenido! Me encantaria ensenarte la ciudad.)',
        apply: 'Aplicar',
        applied: 'Solicitud enviada!',
        applications_title: 'Solicitudes',
        no_applications: 'Aun no hay solicitudes.',
        accept: 'Aceptar',
        reject: 'Rechazar',
        accepted: 'Aceptado',
        rejected: 'Rechazado',
        match_accepted: 'Conexion aceptada!',

        // Auth
        login_title: 'Iniciar Sesion',
        register_title: 'Registrarse',
        email: 'Email',
        password: 'Contrasena (min 6 caracteres)',
        password_login: 'Contrasena',
        full_name: 'Nombre Completo',
        select_country: 'Seleccionar pais...',
        select_city: 'Seleccionar ciudad...',
        no_account: 'No tienes cuenta?',
        has_account: 'Ya tienes cuenta?',
        fill_all: 'Completa todos los campos',
        min_password: 'La contrasena debe tener al menos 6 caracteres',
        welcome: 'Bienvenido',
        welcome_back: 'Bienvenido de nuevo!',

        // Messages
        messages_title: 'Mensajes',
        no_messages: 'Aun no hay mensajes',
        select_convo: 'Selecciona una conversacion',
        type_message: 'Escribe un mensaje...',
        send: 'Enviar',
        cant_self_msg: 'No puedes enviarte un mensaje a ti mismo',

        // Profile
        about_me: 'Sobre Mi',
        country: 'Pais',
        city: 'Ciudad',
        interests: 'Intereses',
        volunteer_host: 'Guia Voluntario',
        volunteer_desc: 'Quiero guiar a viajeros que visiten mi ciudad',
        host_desc: 'Descripcion de Guia',
        host_desc_placeholder: 'ej: Conozco bien Barcelona, sitios historicos y comida local...',
        save: 'Guardar',
        profile_updated: 'Perfil actualizado',
        trips_count: 'viajes',
        hosted_count: 'guiados',

        // Explore
        explore_title: 'Explorar Paises',
        explore_desc: 'Elige un pais que quieras visitar, descubre sus ciudades y atracciones.',
        all_countries: 'Todos los Paises',
        city_count: 'ciudades',
        place_count: 'atracciones',
        places_title: 'Atracciones',
        city_waiting: 'te espera!',
        city_cta: 'Explora esta ciudad con un guia local.',
        plan_this_city: 'Planear Viaje a Esta Ciudad',

        // Settings
        settings_saved: 'Ajustes guardados',
    },
};
