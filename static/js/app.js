function wandermate() {
    return {
        page: 'home',
        user: null,
        token: localStorage.getItem('wm_token') || '',

        // Dil
        lang: localStorage.getItem('wm_lang') || 'tr',

        // Turk lehceleri
        turkLehceleri: {
            tr: { name: 'Istanbul Turkcesi', flag: '🇹🇷' },
            az: { name: 'Azerbaycan Turkcesi', flag: '🇦🇿' },
            kk: { name: 'Kazakistan Turkcesi', flag: '🇰🇿' },
            uz: { name: 'Ozbekistan Turkcesi', flag: '🇺🇿' },
            tk: { name: 'Turkmenistan Turkcesi', flag: '🇹🇲' },
            ky: { name: 'Kirgizistan Turkcesi', flag: '🇰🇬' },
        },

        // Diger diller
        digerDiller: {
            en: { name: 'English', flag: '🇬🇧' },
            es: { name: 'Espanol', flag: '🇪🇸' },
        },

        // Ulke -> dil eslesmesi (otomatik)
        countryLangMap: {
            'Turkiye': 'tr',
            'Azerbaycan': 'az',
            'KKTC (Kuzey Kibris)': 'tr',
            'GKRC (Guney Kibris)': 'en',
            'Ispanya': 'es',
            'Kasakhistan': 'kk',
            'Ozbekistan': 'uz',
            'Turkmenistan': 'tk',
            'Kirgizistan': 'ky',
        },

        t(key) {
            if (typeof TRANSLATIONS === 'undefined') return key;
            // Dil varsa direkt kullan, yoksa Turk lehcelerini tr'ye fallback yap
            const dict = TRANSLATIONS[this.lang] || TRANSLATIONS['tr'];
            return dict[key] || key;
        },

        setLang(code) {
            this.lang = code;
            localStorage.setItem('wm_lang', code);
        },

        autoLangFromCountry(country) {
            const mapped = this.countryLangMap[country];
            if (mapped) {
                this.setLang(mapped);
            }
        },

        getAllLangs() {
            const all = {};
            for (const [code, data] of Object.entries(this.turkLehceleri)) {
                all[code] = data;
            }
            for (const [code, data] of Object.entries(this.digerDiller)) {
                all[code] = data;
            }
            return all;
        },

        getLangName() {
            const all = this.getAllLangs();
            return all[this.lang]?.name || 'Istanbul Turkcesi';
        },

        getLangFlag() {
            const all = this.getAllLangs();
            return all[this.lang]?.flag || '🇹🇷';
        },

        // Ulke-Sehir verisi
        countryCity: {
            'Azerbaycan': [
                'Baku', 'Gence', 'Sumgayit', 'Mingecevir', 'Lenkeran', 'Seki', 'Sirvan', 'Nahcivan',
                'Samaxi', 'Kurdamir', 'Salyan', 'Agdam', 'Agdas', 'Agsu', 'Astara', 'Balaken',
                'Berde', 'Beylagan', 'Bilasuvar', 'Cabrayil', 'Celilabad', 'Daskasan', 'Fuzuli',
                'Gadabay', 'Goranboy', 'Goycay', 'Goygol', 'Haciqabul', 'Imisli', 'Ismayilli',
                'Kelbecer', 'Lacin', 'Lerik', 'Masalli', 'Neftcala', 'Oguz', 'Qax', 'Qazax',
                'Qobustan', 'Quba', 'Qusar', 'Saatli', 'Sabran', 'Samux', 'Siyezen',
                'Tartar', 'Tovuz', 'Ucar', 'Xacmaz', 'Xizi', 'Yardimli', 'Yevlax', 'Zangilan', 'Zaqatala', 'Zardab',
            ],
            'Ispanya': [
                'A Coruna', 'Albacete', 'Alicante', 'Almeria', 'Avila', 'Badajoz', 'Barselona', 'Bilbao',
                'Burgos', 'Caceres', 'Cadiz', 'Cartagena', 'Castellon', 'Ceuta', 'Ciudad Real', 'Cordoba',
                'Cuenca', 'Elche', 'Gijon', 'Girona', 'Granada', 'Guadalajara', 'Huelva', 'Huesca',
                'Ibiza', 'Jaen', 'Jerez', 'Las Palmas', 'Leon', 'Lleida', 'Logrono', 'Lugo',
                'Madrid', 'Malaga', 'Mallorca', 'Melilla', 'Murcia', 'Ourense', 'Oviedo', 'Palencia',
                'Pamplona', 'Pontevedra', 'Salamanca', 'San Sebastian', 'Santander', 'Santiago de Compostela',
                'Segovia', 'Sevilla', 'Soria', 'Tarragona', 'Tenerife', 'Teruel', 'Toledo', 'Valencia',
                'Valladolid', 'Vigo', 'Vitoria', 'Zamora', 'Zaragoza',
            ],
            'GKRC (Guney Kibris)': [
                'Limasol', 'Larnaka', 'Baf', 'Ayia Napa', 'Protaras', 'Paralimni',
                'Polis', 'Pissouri', 'Episkopi', 'Dherynia', 'Oroklini', 'Sotira',
            ],
            'KKTC (Kuzey Kibris)': [
                'Lefkosa', 'Girne', 'Magusa', 'Guzelyurt', 'Iskele', 'Lefke',
                'Yeni Bogazici', 'Alsancak', 'Lapta', 'Catalkoy', 'Dipkarpaz', 'Gecitkale',
                'Mehmetcik', 'Tatlisu', 'Akdogan', 'Beyarmudu',
            ],
            'Turkiye': [
                'Adana', 'Adiyaman', 'Afyonkarahisar', 'Agri', 'Aksaray', 'Amasya', 'Ankara', 'Antalya', 'Ardahan', 'Artvin',
                'Aydin', 'Balikesir', 'Bartin', 'Batman', 'Bayburt', 'Bilecik', 'Bingol', 'Bitlis', 'Bolu', 'Burdur',
                'Bursa', 'Canakkale', 'Cankiri', 'Corum', 'Denizli', 'Diyarbakir', 'Duzce', 'Edirne', 'Elazig', 'Erzincan',
                'Erzurum', 'Eskisehir', 'Gaziantep', 'Giresun', 'Gumushane', 'Hakkari', 'Hatay', 'Igdir', 'Isparta', 'Istanbul',
                'Izmir', 'Kahramanmaras', 'Karabuk', 'Karaman', 'Kars', 'Kastamonu', 'Kayseri', 'Kirikkale', 'Kirklareli', 'Kirsehir',
                'Kilis', 'Kocaeli', 'Konya', 'Kutahya', 'Malatya', 'Manisa', 'Mardin', 'Mersin', 'Mugla', 'Mus',
                'Nevsehir', 'Nigde', 'Ordu', 'Osmaniye', 'Rize', 'Sakarya', 'Samsun', 'Sanliurfa', 'Siirt', 'Sinop',
                'Sirnak', 'Sivas', 'Tekirdag', 'Tokat', 'Trabzon', 'Tunceli', 'Usak', 'Van', 'Yalova', 'Yozgat', 'Zonguldak',
            ],
        },

        get countries() { return Object.keys(this.countryCity).sort(); },
        getCities(country) { return this.countryCity[country] || []; },

        // Auth
        // Konusulabilecek diller
        spokenLanguages: [
            'Turkce', 'Azerbaycanca', 'Ingilizce', 'Ispanyolca', 'Rusca', 'Arapca',
            'Fransizca', 'Almanca', 'Italyanca', 'Portekizce', 'Farsca', 'Urduca',
            'Japonca', 'Korece', 'Cince', 'Hintce', 'Yunanca', 'Bulgarca',
            'Romence', 'Macarca', 'Lehce', 'Ukraynaca', 'Gurcuce', 'Kazakca',
            'Ozbekce', 'Turkmence', 'Kirgizca', 'Tatarca', 'Isaret Dili',
        ],

        authForm: { email: '', password: '', full_name: '', country: '', city: '', languages: [] },
        authError: '',
        verifyEmail: '',
        verifyCode: '',
        verifyHint: '',
        verifyError: '',

        // Trips
        homeTrips: [],
        tripList: [],
        tripFilter: { country: '', city: '' },
        tripForm: { destination_country: '', destination_city: '', arrival_date: '', departure_date: '', description: '', interests: '' },
        tripError: '',
        currentTrip: null,
        tripMatches: [],
        matchMessage: '',

        // Messages
        conversations: [],
        chatWith: null,
        chatPartnerName: '',
        chatMessages: [],
        newMessage: '',
        unreadTotal: 0,

        // Profile
        profileForm: { bio: '', country: '', city: '', interests: '', is_host: false, host_description: '', languages: [] },

        // Explore
        placesData: typeof PLACES_DATA !== 'undefined' ? PLACES_DATA : {},
        exploreSelected: { country: '', city: '' },

        // UI
        toast: false,
        toastMsg: '',

        async init() {
            if (this.token) {
                try {
                    const res = await this.api('GET', '/api/auth/me');
                    this.user = res;
                    this.syncProfile();
                } catch (e) {
                    this.token = '';
                    localStorage.removeItem('wm_token');
                }
            }
            await this.loadHomeTrips();

            // Sayfa degisince yukle
            this.$watch('page', (val) => {
                if (val === 'home') this.loadHomeTrips();
                if (val === 'trips') this.loadTrips();
                if (val === 'messages') this.loadConversations();
            });

            // Her 30 saniye mesaj kontrol
            setInterval(() => {
                if (this.user) this.checkUnread();
            }, 30000);
        },

        // --- API ---
        async api(method, path, body = null) {
            const opts = {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            if (this.token) opts.headers['Authorization'] = `Bearer ${this.token}`;
            if (body) opts.body = JSON.stringify(body);
            const res = await fetch(path, opts);
            if (!res.ok) {
                const err = await res.json().catch(() => ({}));
                throw new Error(err.detail || `Hata: ${res.status}`);
            }
            return res.json();
        },

        showToast(msg) {
            this.toastMsg = msg;
            this.toast = true;
            setTimeout(() => this.toast = false, 3000);
        },

        // --- Auth ---
        async register() {
            this.authError = '';
            if (!this.authForm.full_name || !this.authForm.email || !this.authForm.password) {
                this.authError = 'Tum alanlari doldurun';
                return;
            }
            if (this.authForm.password.length < 6) {
                this.authError = 'Sifre en az 6 karakter olmali';
                return;
            }
            try {
                const payload = { ...this.authForm, languages: this.authForm.languages.join(',') };
                const res = await this.api('POST', '/api/auth/register', payload);
                if (res.needs_verification) {
                    this.verifyEmail = res.email;
                    this.verifyHint = res.code_hint || '';
                    this.verifyCode = '';
                    this.verifyError = '';
                    this.page = 'verify';
                    return;
                }
                this.token = res.token;
                this.user = res.user;
                localStorage.setItem('wm_token', this.token);
                this.syncProfile();
                this.showToast('Hosgeldin ' + this.user.full_name + '!');
                this.page = 'home';
            } catch (e) {
                this.authError = e.message;
            }
        },

        async login() {
            this.authError = '';
            try {
                const res = await this.api('POST', '/api/auth/login', {
                    email: this.authForm.email,
                    password: this.authForm.password,
                });
                if (res.needs_verification) {
                    this.verifyEmail = res.email;
                    this.verifyHint = res.code_hint || '';
                    this.verifyCode = '';
                    this.verifyError = '';
                    this.page = 'verify';
                    return;
                }
                this.token = res.token;
                this.user = res.user;
                localStorage.setItem('wm_token', this.token);
                this.syncProfile();
                this.showToast('Tekrar hosgeldin!');
                this.page = 'home';
            } catch (e) {
                this.authError = e.message;
            }
        },

        async verifyAccount() {
            this.verifyError = '';
            if (!this.verifyCode || this.verifyCode.length !== 6) {
                this.verifyError = '6 haneli dogrulama kodunu girin';
                return;
            }
            try {
                const res = await this.api('POST', '/api/auth/verify', {
                    email: this.verifyEmail,
                    code: this.verifyCode,
                });
                this.token = res.token;
                this.user = res.user;
                localStorage.setItem('wm_token', this.token);
                this.syncProfile();
                this.showToast('Hesabiniz dogrulandi! Hosgeldin ' + this.user.full_name + '!');
                this.page = 'home';
            } catch (e) {
                this.verifyError = e.message;
            }
        },

        async resendCode() {
            try {
                const res = await this.api('POST', '/api/auth/resend-code', { email: this.verifyEmail });
                this.verifyHint = res.code_hint || '';
                this.showToast('Yeni kod gonderildi!');
            } catch (e) {
                this.verifyError = e.message;
            }
        },

        logout() {
            this.user = null;
            this.token = '';
            localStorage.removeItem('wm_token');
            this.page = 'home';
        },

        syncProfile() {
            if (!this.user) return;
            const langs = this.user.languages || this.user.spoken_languages || '';
            this.profileForm = {
                bio: this.user.bio || '',
                country: this.user.country || '',
                city: this.user.city || '',
                interests: this.user.interests || '',
                is_host: this.user.is_host || false,
                host_description: this.user.host_description || '',
                languages: langs ? langs.split(',').map(l => l.trim()).filter(Boolean) : [],
            };
        },

        toggleLang(arr, lang) {
            const idx = arr.indexOf(lang);
            if (idx >= 0) arr.splice(idx, 1);
            else arr.push(lang);
        },

        // --- Trips ---
        async loadHomeTrips() {
            try {
                this.homeTrips = await this.api('GET', '/api/trips?status=open');
            } catch (e) { console.error(e); }
        },

        async loadTrips() {
            try {
                const params = new URLSearchParams({ status: 'open' });
                if (this.tripFilter.country) params.set('country', this.tripFilter.country);
                if (this.tripFilter.city) params.set('city', this.tripFilter.city);
                this.tripList = await this.api('GET', `/api/trips?${params}`);
            } catch (e) { console.error(e); }
        },

        async createTrip() {
            this.tripError = '';
            if (!this.tripForm.destination_country || !this.tripForm.destination_city || !this.tripForm.arrival_date || !this.tripForm.departure_date) {
                this.tripError = 'Ulke, sehir ve tarihler zorunlu';
                return;
            }
            try {
                await this.api('POST', '/api/trips', this.tripForm);
                this.showToast('Gezi olusturuldu!');
                this.tripForm = { destination_country: '', destination_city: '', arrival_date: '', departure_date: '', description: '', interests: '' };
                this.page = 'trips';
            } catch (e) {
                this.tripError = e.message;
            }
        },

        async viewTrip(id) {
            try {
                this.currentTrip = await this.api('GET', `/api/trips/${id}`);
                this.tripMatches = await this.api('GET', `/api/trips/${id}/matches`);
                this.matchMessage = '';
                this.page = 'trip-detail';
            } catch (e) { this.showToast(e.message); }
        },

        async applyAsHost() {
            try {
                await this.api('POST', `/api/trips/${this.currentTrip.id}/match`, { message: this.matchMessage });
                this.showToast('Basvurunuz gonderildi!');
                this.tripMatches = await this.api('GET', `/api/trips/${this.currentTrip.id}/matches`);
            } catch (e) { this.showToast(e.message); }
        },

        async acceptMatch(matchId) {
            try {
                await this.api('PATCH', `/api/trips/matches/${matchId}/accept`);
                this.showToast('Eslesme kabul edildi!');
                this.tripMatches = await this.api('GET', `/api/trips/${this.currentTrip.id}/matches`);
            } catch (e) { this.showToast(e.message); }
        },

        async rejectMatch(matchId) {
            try {
                await this.api('PATCH', `/api/trips/matches/${matchId}/reject`);
                this.tripMatches = await this.api('GET', `/api/trips/${this.currentTrip.id}/matches`);
            } catch (e) { this.showToast(e.message); }
        },

        // --- Messages ---
        async loadConversations() {
            try {
                this.conversations = await this.api('GET', '/api/messages/conversations');
                this.unreadTotal = this.conversations.reduce((sum, c) => sum + c.unread_count, 0);
            } catch (e) { console.error(e); }
        },

        async openChat(userId) {
            this.chatWith = userId;
            const conv = this.conversations.find(c => c.user_id === userId);
            this.chatPartnerName = conv ? conv.user_name : '';
            try {
                this.chatMessages = await this.api('GET', `/api/messages/${userId}`);
                await this.loadConversations();
                this.$nextTick(() => {
                    const box = document.getElementById('chatBox');
                    if (box) box.scrollTop = box.scrollHeight;
                });
            } catch (e) { console.error(e); }
        },

        async sendMessage() {
            if (!this.newMessage.trim() || !this.chatWith) return;
            try {
                await this.api('POST', '/api/messages', {
                    receiver_id: this.chatWith,
                    content: this.newMessage.trim(),
                });
                this.newMessage = '';
                this.chatMessages = await this.api('GET', `/api/messages/${this.chatWith}`);
                this.$nextTick(() => {
                    const box = document.getElementById('chatBox');
                    if (box) box.scrollTop = box.scrollHeight;
                });
            } catch (e) { this.showToast(e.message); }
        },

        async checkUnread() {
            try {
                const convos = await this.api('GET', '/api/messages/conversations');
                this.unreadTotal = convos.reduce((sum, c) => sum + c.unread_count, 0);
            } catch (e) {}
        },

        // --- Profile ---
        async updateProfile() {
            try {
                const payload = { ...this.profileForm, languages: this.profileForm.languages.join(',') };
                this.user = await this.api('PUT', '/api/auth/me', payload);
                this.syncProfile();
                this.showToast(this.t('profile_updated'));
            } catch (e) { this.showToast(e.message); }
        },

        // --- Explore ---
        exploreCountry(country) {
            this.exploreSelected.country = country;
            this.exploreSelected.city = '';
            this.page = 'explore-country';
        },

        exploreCity(city) {
            this.exploreSelected.city = city;
            this.page = 'explore-city';
        },

        startTripFromExplore() {
            if (!this.user) {
                this.page = 'register';
                return;
            }
            this.tripForm.destination_country = this.exploreSelected.country;
            this.tripForm.destination_city = this.exploreSelected.city;
            this.page = 'create-trip';
        },

        // --- Helpers ---
        formatDate(dateStr) {
            if (!dateStr) return '';
            const d = new Date(dateStr);
            return d.toLocaleDateString('tr-TR', { day: 'numeric', month: 'short', year: 'numeric' });
        },
    };
}
