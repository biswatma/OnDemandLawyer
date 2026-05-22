// ===== DUMMY DATA =====
const LAWYERS = [
    {
        id: 1,
        name: "Adv. Rajesh Khanna",
        initials: "RK",
        tier: "senior",
        rate: 50,
        specialty: "Criminal Law",
        experience: "20 yrs exp",
        rating: 4.9,
        reviews: 312,
        available: true,
        modes: ["videocam", "call"],
        bio: "Senior Advocate practicing at the Supreme Court of India with over 20 years of experience in criminal defense and constitutional law. Former Additional Solicitor General. Handled over 500+ criminal cases with 92% acquittal rate.",
        languages: ["English", "Hindi", "Punjabi"],
        tags: ["Criminal Defense", "Constitutional Law", "Bail Matters", "White Collar Crime"],
        barCouncil: "D/1234/2004",
        latOffset: 0.0018,
        lngOffset: -0.0012,
        image: "assets/lawyer_rajesh.png"
    },
    {
        id: 2,
        name: "Adv. Priya Sharma",
        initials: "PS",
        tier: "mid-level",
        rate: 30,
        specialty: "Family Law",
        experience: "8 yrs exp",
        rating: 4.7,
        reviews: 187,
        available: true,
        modes: ["videocam", "call"],
        bio: "Specialist in family law, divorce proceedings, and child custody cases. Known for compassionate yet firm representation. Regularly appears in Family Courts across Delhi NCR.",
        languages: ["English", "Hindi"],
        tags: ["Divorce", "Child Custody", "Domestic Violence", "Alimony"],
        barCouncil: "D/5678/2016",
        latOffset: -0.0010,
        lngOffset: 0.0016,
        image: "assets/lawyer_priya.png"
    },
    {
        id: 3,
        name: "Adv. Amit Patel",
        initials: "AP",
        tier: "junior",
        rate: 15,
        specialty: "Property Law",
        experience: "3 yrs exp",
        rating: 4.5,
        reviews: 64,
        available: true,
        modes: ["videocam", "call"],
        bio: "Energetic property law practitioner specializing in land acquisition disputes, RERA compliance, and tenant-landlord matters. Affordable rates with thorough case preparation.",
        languages: ["English", "Hindi", "Gujarati"],
        tags: ["Property Disputes", "RERA", "Tenant Law", "Land Acquisition"],
        barCouncil: "G/9012/2021",
        latOffset: -0.0018,
        lngOffset: -0.0014,
        image: "assets/lawyer_amit.png"
    },
    {
        id: 4,
        name: "Adv. Meera Iyer",
        initials: "MI",
        tier: "senior",
        rate: 45,
        specialty: "Corporate Law",
        experience: "15 yrs exp",
        rating: 4.8,
        reviews: 256,
        available: true,
        modes: ["videocam", "call"],
        bio: "Corporate law veteran specializing in M&A, startup advisory, and regulatory compliance. Former General Counsel at a Fortune 500 company. Advises top-tier tech companies on cross-border transactions.",
        languages: ["English", "Hindi", "Tamil"],
        tags: ["M&A", "Startup Advisory", "Compliance", "IPO"],
        barCouncil: "TN/3456/2009",
        latOffset: 0.0012,
        lngOffset: 0.0018,
        image: "assets/lawyer_meera.png"
    },
    {
        id: 5,
        name: "Adv. Sanjay Verma",
        initials: "SV",
        tier: "mid-level",
        rate: 25,
        specialty: "Tax Law",
        experience: "10 yrs exp",
        rating: 4.6,
        reviews: 142,
        available: false,
        modes: ["call"],
        bio: "Chartered Accountant turned Tax Advocate. Expert in GST litigation, income tax appeals, and international taxation. Represented clients before ITAT and High Court.",
        languages: ["English", "Hindi"],
        tags: ["GST", "Income Tax", "ITAT Appeals", "International Tax"],
        barCouncil: "D/7890/2014",
        latOffset: -0.0015,
        lngOffset: 0.0006,
        image: null
    },
    {
        id: 6,
        name: "Adv. Ananya Das",
        initials: "AD",
        tier: "junior",
        rate: 12,
        specialty: "Labour Law",
        experience: "2 yrs exp",
        rating: 4.3,
        reviews: 28,
        available: true,
        modes: ["videocam", "call"],
        bio: "Labour law specialist focusing on industrial disputes, wrongful termination, and PF/ESI matters. Passionate about workers' rights and employment equity.",
        languages: ["English", "Hindi", "Bengali"],
        tags: ["Industrial Disputes", "Wrongful Termination", "PF/ESI", "Employment"],
        barCouncil: "WB/1234/2022",
        latOffset: 0.0022,
        lngOffset: -0.0020,
        image: null
    },
    {
        id: 7,
        name: "Adv. Vikram Singh",
        initials: "VS",
        tier: "senior",
        rate: 55,
        specialty: "Civil Litigation",
        experience: "22 yrs exp",
        rating: 4.9,
        reviews: 389,
        available: true,
        modes: ["videocam", "call"],
        bio: "One of Delhi's most decorated civil litigators. Handled landmark property partition cases and injunction matters. Senior panel lawyer for major insurance companies.",
        languages: ["English", "Hindi", "Urdu"],
        tags: ["Civil Litigation", "Injunctions", "Insurance", "Property Partition"],
        barCouncil: "D/0001/2002",
        latOffset: -0.0006,
        lngOffset: -0.0024,
        image: null
    },
    {
        id: 8,
        name: "Adv. Kavita Reddy",
        initials: "KR",
        tier: "mid-level",
        rate: 35,
        specialty: "Cyber Law",
        experience: "6 yrs exp",
        rating: 4.7,
        reviews: 98,
        available: true,
        modes: ["videocam", "call"],
        bio: "Tech-savvy advocate specializing in cybercrime, data privacy (DPDP Act), and IT Act matters. Consultant to multiple fintech startups on regulatory compliance.",
        languages: ["English", "Hindi", "Telugu"],
        tags: ["Cybercrime", "Data Privacy", "IT Act", "Fintech Compliance"],
        barCouncil: "AP/5678/2018",
        latOffset: 0.0024,
        lngOffset: 0.0010,
        image: null
    }
];

const HISTORY_DATA = [
    {
        lawyerId: 1,
        date: "May 20, 2026",
        duration: "18 min",
        cost: 900,
        type: "Video Call",
        caseType: "Criminal Defense"
    },
    {
        lawyerId: 2,
        date: "May 17, 2026",
        duration: "12 min",
        cost: 360,
        type: "Voice Call",
        caseType: "Divorce Consultation"
    },
    {
        lawyerId: 4,
        date: "May 14, 2026",
        duration: "25 min",
        cost: 1125,
        type: "Video Call",
        caseType: "Startup Advisory"
    },
    {
        lawyerId: 3,
        date: "May 10, 2026",
        duration: "8 min",
        cost: 120,
        type: "Voice Call",
        caseType: "Property Dispute"
    },
    {
        lawyerId: 8,
        date: "May 5, 2026",
        duration: "15 min",
        cost: 525,
        type: "Video Call",
        caseType: "Data Privacy Issue"
    }
];

// ===== STATE =====
const state = {
    currentScreen: 'market',
    userLocation: { lat: 28.6139, lng: 77.2090 }, // Default: New Delhi
    locationName: 'New Delhi, India',
    map: null,
    markers: [],
    callTimer: null,
    callSeconds: 0,
    callCost: 0,
    callRate: 0,
    activeLawyer: null,
    matchTimeout: null
};

// ===== DOM REFS =====
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    setupLocationModal();
    setupNavigation();
    setupRequestForm();
    setupCallControls();
    renderHistory();
});

// ===== LOCATION =====
function setupLocationModal() {
    const modal = $('#location-modal');
    const btnAllow = $('#btn-allow-location');
    const btnSkip = $('#btn-skip-location');

    btnAllow.addEventListener('click', () => {
        if ('geolocation' in navigator) {
            btnAllow.innerHTML = '<span class="material-symbols-outlined" style="animation: soft-pulse 1s infinite;">my_location</span> Detecting...';
            btnAllow.disabled = true;
            
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    state.userLocation.lat = pos.coords.latitude;
                    state.userLocation.lng = pos.coords.longitude;
                    reverseGeocode(pos.coords.latitude, pos.coords.longitude).then(name => {
                        state.locationName = name;
                        $('#header-loc-value').textContent = name;
                        $('#jurisdiction-text').textContent = name;
                    });
                    dismissModal(modal);
                },
                (err) => {
                    console.warn('Location error:', err.message);
                    showToast('Using default location: New Delhi');
                    dismissModal(modal);
                },
                { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
            );
        } else {
            showToast('Geolocation not supported');
            dismissModal(modal);
        }
    });

    btnSkip.addEventListener('click', () => {
        state.locationName = 'New Delhi, India';
        $('#header-loc-value').textContent = state.locationName;
        showToast('Using default location: New Delhi');
        dismissModal(modal);
    });
}

function dismissModal(modal) {
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
        $('#app').classList.remove('hidden');
        initMap();
        renderLawyerList();
        
        // Let the shell render fully so Leaflet has exact dimensions
        setTimeout(() => {
            if (state.map) {
                state.map.invalidateSize();
                renderLawyerMarkers();
            }
        }, 100);
    }, 400);
}

async function reverseGeocode(lat, lng) {
    try {
        const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`);
        const data = await res.json();
        const city = data.address.city || data.address.town || data.address.village || data.address.state_district || '';
        const state_name = data.address.state || '';
        const country = data.address.country || '';
        if (city && country) return `${city}, ${country}`;
        if (state_name && country) return `${state_name}, ${country}`;
        return data.display_name?.split(',').slice(0, 2).join(',') || 'Unknown Location';
    } catch (e) {
        return 'New Delhi, India';
    }
}

// ===== MAP =====
function initMap() {
    if (state.map) return;
    
    state.map = L.map('map', {
        zoomControl: false,
        attributionControl: true
    }).setView([state.userLocation.lat, state.userLocation.lng], 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
    }).addTo(state.map);

    // User location marker
    const userIcon = L.divIcon({
        className: 'user-marker',
        html: `<div style="width:16px;height:16px;border-radius:50%;background:#4285f4;border:3px solid white;box-shadow:0 2px 8px rgba(66,133,244,0.4);"></div>`,
        iconSize: [16, 16],
        iconAnchor: [8, 8]
    });
    L.marker([state.userLocation.lat, state.userLocation.lng], { icon: userIcon }).addTo(state.map);

    // Recenter
    $('#btn-recenter').addEventListener('click', () => {
        if (state.map && state.markers.length > 0) {
            const points = [[state.userLocation.lat, state.userLocation.lng]];
            state.markers.forEach(m => points.push([m.getLatLng().lat, m.getLatLng().lng]));
            const bounds = L.latLngBounds(points);
            state.map.fitBounds(bounds, { padding: [40, 40], maxZoom: 15, animate: true });
        } else {
            state.map.setView([state.userLocation.lat, state.userLocation.lng], 14, { animate: true });
        }
    });

    // Fix map size after container is visible
    setTimeout(() => state.map.invalidateSize(), 300);
}

function renderLawyerMarkers() {
    if (!state.map) return;

    // Clear old
    state.markers.forEach(m => state.map.removeLayer(m));
    state.markers = [];

    const points = [];
    // Always include user location
    points.push([state.userLocation.lat, state.userLocation.lng]);

    LAWYERS.forEach(lawyer => {
        if (!lawyer.available) return;

        const lat = state.userLocation.lat + lawyer.latOffset;
        const lng = state.userLocation.lng + lawyer.lngOffset;
        points.push([lat, lng]);
        
        const tierClass = lawyer.tier === 'senior' ? 'senior' : (lawyer.tier === 'mid-level' ? 'mid-level' : 'junior');
        
        const icon = L.divIcon({
            className: 'custom-leaflet-marker',
            html: `
                <div class="custom-map-marker ${tierClass}">
                    <div class="custom-marker-icon-wrap">
                        <svg viewBox="0 0 48 48" width="28" height="28">
                            <!-- Robe main body -->
                            <path d="M24,4 L12,14 L12,44 L36,44 L36,14 Z" fill="#1a1a2e" />
                            <!-- Sleeves shadows -->
                            <path d="M12,14 L6,28 L8,44 L12,44 Z" fill="#0b0b18" />
                            <path d="M36,14 L42,28 L40,44 L36,44 Z" fill="#0b0b18" />
                            <!-- White neck bands (Advocate Collar Tabs) -->
                            <path d="M21,12 L21,24 L23,24 L23,12 Z" fill="#ffffff" />
                            <path d="M25,12 L25,24 L27,24 L27,12 Z" fill="#ffffff" />
                            <!-- Collar inner V reveal -->
                            <path d="M20,4 L24,12 L28,4 Z" fill="#ffffff" />
                        </svg>
                    </div>
                    <div class="custom-marker-price">₹${lawyer.rate}/min</div>
                </div>
            `,
            iconSize: [64, 80],
            iconAnchor: [32, 70]
        });

        const marker = L.marker([lat, lng], { icon }).addTo(state.map);
        marker.on('click', () => openLawyerDetail(lawyer));
        state.markers.push(marker);
    });

    // Automatically fit map bounds to show all markers beautifully
    if (points.length > 1 && state.map) {
        const bounds = L.latLngBounds(points);
        state.map.fitBounds(bounds, { padding: [40, 40], maxZoom: 15 });
    }
}

// ===== NAVIGATION =====
function setupNavigation() {
    // Bottom nav
    $$('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const screen = item.dataset.screen;
            navigateTo(screen);
        });
    });

    // FAB
    $('#btn-find-lawyer').addEventListener('click', () => navigateTo('request'));

    // Header back
    $('#header-back-btn').addEventListener('click', () => navigateTo('market'));

    // Search
    $('#btn-search').addEventListener('click', () => showToast('Search coming soon!'));
}

function navigateTo(screen) {
    // Hide all screens
    $$('.screen').forEach(s => s.classList.remove('active'));

    // Show target
    const target = $(`#screen-${screen}`);
    if (target) target.classList.add('active');

    // Update state
    state.currentScreen = screen;

    // Update nav
    $$('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.screen === screen);
        const icon = item.querySelector('.material-symbols-outlined');
        if (item.dataset.screen === screen) {
            icon.classList.add('fill');
        } else {
            icon.classList.remove('fill');
        }
    });

    // Header context
    const headerLoc = $('#header-location');
    const headerTitle = $('#header-title');
    const backBtn = $('#header-back-btn');
    const bottomNav = $('#bottom-nav');
    const appHeader = $('#app-header');

    // Reset
    headerLoc.classList.remove('hidden');
    headerTitle.classList.add('hidden');
    backBtn.classList.add('hidden');
    bottomNav.classList.remove('hidden');
    appHeader.classList.remove('hidden');
    appHeader.style.background = '';
    appHeader.style.color = '';

    if (screen === 'market') {
        if (state.map) setTimeout(() => state.map.invalidateSize(), 100);
    } else if (screen === 'request') {
        headerLoc.classList.add('hidden');
        headerTitle.classList.remove('hidden');
        headerTitle.textContent = 'New Request';
        backBtn.classList.remove('hidden');
    } else if (screen === 'matching') {
        appHeader.classList.add('hidden');
        bottomNav.classList.add('hidden');
    } else if (screen === 'call') {
        appHeader.classList.add('hidden');
        bottomNav.classList.add('hidden');
    } else if (screen === 'history') {
        headerLoc.classList.add('hidden');
        headerTitle.classList.remove('hidden');
        headerTitle.textContent = 'History';
    } else if (screen === 'profile') {
        headerLoc.classList.add('hidden');
        headerTitle.classList.remove('hidden');
        headerTitle.textContent = 'Profile';
    }
}

// ===== RENDER LAWYER LIST =====
function renderLawyerList() {
    const container = $('#lawyer-list');
    container.innerHTML = '';

    LAWYERS.forEach(lawyer => {
        const card = document.createElement('div');
        card.className = `lawyer-card ${lawyer.tier}`;
        card.innerHTML = `
            <div class="lawyer-card-status">
                <span class="status-dot ${lawyer.available ? '' : 'offline'}"></span>
                ${lawyer.available ? 'Available' : 'Offline'}
            </div>
            <div class="lawyer-card-body">
                ${lawyer.image ? 
                    `<img class="lawyer-avatar ${lawyer.tier}" src="${lawyer.image}" alt="${lawyer.name}">` : 
                    `<div class="lawyer-avatar ${lawyer.tier}">${lawyer.initials}</div>`
                }
                <div class="lawyer-card-info">
                    <div class="lawyer-tier-row">
                        <span class="tier-badge ${lawyer.tier}">${formatTier(lawyer.tier)}</span>
                    </div>
                    <h3 class="lawyer-name ${lawyer.tier}">${lawyer.name}</h3>
                    <p class="lawyer-spec">${lawyer.specialty} • ${lawyer.experience}</p>
                    <div class="lawyer-meta">
                        <div class="lawyer-rating">
                            <span class="material-symbols-outlined">star</span>
                            <span>${lawyer.rating}</span>
                        </div>
                        <div class="lawyer-modes">
                            ${lawyer.modes.map(m => `<span class="material-symbols-outlined">${m}</span>`).join('')}
                        </div>
                    </div>
                </div>
                <div class="lawyer-card-price-col">
                    <div class="lawyer-price-highlight ${lawyer.tier}">
                        <span class="price-currency">₹</span>
                        <span class="price-amount">${lawyer.rate}</span>
                        <span class="price-label">/min</span>
                    </div>
                </div>
            </div>
        `;
        card.addEventListener('click', () => openLawyerDetail(lawyer));
        container.appendChild(card);
    });
}

function formatTier(tier) {
    return tier === 'mid-level' ? 'Mid-level' : tier.charAt(0).toUpperCase() + tier.slice(1);
}

// ===== LAWYER DETAIL MODAL =====
function openLawyerDetail(lawyer) {
    state.activeLawyer = lawyer;
    const modal = $('#lawyer-detail-modal');
    const body = $('#detail-modal-content');

    // Reset scroll position so top details are not hidden/scrolled out of view
    const scrollContainer = $('.detail-modal');
    if (scrollContainer) {
        scrollContainer.scrollTop = 0;
    }

    body.innerHTML = `
        <div class="detail-profile-section">
            ${lawyer.image ? 
                `<img class="detail-avatar lawyer-avatar ${lawyer.tier}" src="${lawyer.image}" alt="${lawyer.name}">` : 
                `<div class="detail-avatar lawyer-avatar ${lawyer.tier}">${lawyer.initials}</div>`
            }
            <h2 class="detail-name">${lawyer.name}</h2>
            <p class="detail-spec">${lawyer.specialty} • ${lawyer.experience}</p>
            <div class="detail-rating-row">
                <div class="detail-rating">
                    <span class="material-symbols-outlined">star</span>
                    ${lawyer.rating} (${lawyer.reviews} reviews)
                </div>
                <span class="detail-rate ${lawyer.tier}">₹${lawyer.rate}/min</span>
            </div>
            <span class="tier-badge ${lawyer.tier}" style="display:inline-block;margin-top:10px;">${formatTier(lawyer.tier)}</span>
        </div>
        <div class="detail-actions">
            <button class="btn-primary" id="btn-video-call" ${!lawyer.available ? 'disabled style="opacity:0.5"' : ''}>
                <span class="material-symbols-outlined">videocam</span> Video Call
            </button>
            <button class="btn-secondary" id="btn-voice-call" ${!lawyer.available ? 'disabled style="opacity:0.5"' : ''}>
                <span class="material-symbols-outlined">call</span> Voice Call
            </button>
        </div>
        <div class="detail-section">
            <h4 class="detail-section-title">About</h4>
            <p class="detail-bio">${lawyer.bio}</p>
        </div>
        <div class="detail-section">
            <h4 class="detail-section-title">Practice Areas</h4>
            <div class="detail-tags">
                ${lawyer.tags.map(t => `<span class="detail-tag">${t}</span>`).join('')}
            </div>
        </div>
        <div class="detail-section">
            <h4 class="detail-section-title">Languages</h4>
            <div class="detail-tags">
                ${lawyer.languages.map(l => `<span class="detail-tag">${l}</span>`).join('')}
            </div>
        </div>
        <div class="detail-section" style="margin-bottom:8px;">
            <h4 class="detail-section-title">Bar Council ID</h4>
            <p class="detail-bio" style="font-weight:600;">${lawyer.barCouncil}</p>
        </div>
    `;

    modal.classList.remove('hidden');
    requestAnimationFrame(() => modal.classList.add('show'));

    // Close
    $('#btn-close-detail').addEventListener('click', closeLawyerDetail);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeLawyerDetail();
    });

    // Call buttons
    const btnVideo = body.querySelector('#btn-video-call');
    const btnVoice = body.querySelector('#btn-voice-call');
    
    if (btnVideo && lawyer.available) {
        btnVideo.addEventListener('click', () => {
            closeLawyerDetail();
            startMatching(lawyer);
        });
    }
    if (btnVoice && lawyer.available) {
        btnVoice.addEventListener('click', () => {
            closeLawyerDetail();
            startMatching(lawyer);
        });
    }
}

function closeLawyerDetail() {
    const modal = $('#lawyer-detail-modal');
    modal.classList.remove('show');
    setTimeout(() => modal.classList.add('hidden'), 400);
}

// ===== REQUEST FORM =====
function setupRequestForm() {
    const textarea = $('#case_description');
    const charCount = $('#char-count');

    textarea.addEventListener('input', () => {
        const len = textarea.value.length;
        charCount.textContent = `${len} / 2000`;
        charCount.style.color = len > 2000 ? 'var(--error)' : '';
    });

    $('#btn-submit-request').addEventListener('click', () => {
        const desc = textarea.value.trim();
        const selectedArea = document.querySelector('input[name="practice_area"]:checked');

        if (desc.length < 50) {
            showToast('Please describe your case (min 50 characters)');
            textarea.focus();
            return;
        }

        // Filter by practice area
        const area = selectedArea?.value || 'criminal';
        const matchLawyer = LAWYERS.find(l => l.available && l.specialty.toLowerCase().includes(area)) || LAWYERS.find(l => l.available);

        showToast('Request submitted! Finding a match...');
        setTimeout(() => startMatching(matchLawyer), 800);
    });
}

// ===== MATCHING =====
function startMatching(lawyer) {
    state.activeLawyer = lawyer;
    navigateTo('matching');

    // Cancel buttons
    $('#btn-cancel-match').addEventListener('click', cancelMatch);
    $('#btn-cancel-request').addEventListener('click', cancelMatch);

    // Auto-match after 4 seconds
    state.matchTimeout = setTimeout(() => {
        startCall(lawyer);
    }, 4000);
}

function cancelMatch() {
    if (state.matchTimeout) {
        clearTimeout(state.matchTimeout);
        state.matchTimeout = null;
    }
    showToast('Request cancelled');
    navigateTo('market');
}

// ===== CALL =====
function startCall(lawyer) {
    state.activeLawyer = lawyer;
    state.callSeconds = 0;
    state.callCost = 0;
    state.callRate = lawyer.rate;

    // Set UI
    $('#call-lawyer-name').textContent = lawyer.name;
    $('#call-lawyer-spec').textContent = `${lawyer.specialty} Consultation`;
    
    // Set background image
    const bgImg = $('#call-bg-img');
    if (lawyer.image) {
        bgImg.src = lawyer.image;
        bgImg.style.display = 'block';
    } else {
        bgImg.style.display = 'none';
    }

    navigateTo('call');

    // Start timer
    state.callTimer = setInterval(() => {
        state.callSeconds++;
        state.callCost += state.callRate / 60;

        const mins = Math.floor(state.callSeconds / 60);
        const secs = state.callSeconds % 60;
        $('#call-timer').textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        $('#call-cost').textContent = state.callCost.toFixed(2);
    }, 1000);
}

function setupCallControls() {
    $('#btn-end-call').addEventListener('click', endCall);
    $('#btn-back-call').addEventListener('click', endCall);

    // Toggle states
    $('#btn-toggle-mic').addEventListener('click', function() {
        const circle = this.querySelector('.call-ctrl-circle');
        const icon = this.querySelector('.material-symbols-outlined');
        circle.classList.toggle('muted');
        icon.textContent = circle.classList.contains('muted') ? 'mic_off' : 'mic';
    });

    $('#btn-toggle-video').addEventListener('click', function() {
        const circle = this.querySelector('.call-ctrl-circle');
        const icon = this.querySelector('.material-symbols-outlined');
        circle.classList.toggle('muted');
        icon.textContent = circle.classList.contains('muted') ? 'videocam_off' : 'videocam';
    });

    $('#btn-toggle-speaker').addEventListener('click', function() {
        const circle = this.querySelector('.call-ctrl-circle');
        const icon = this.querySelector('.material-symbols-outlined');
        circle.classList.toggle('muted');
        icon.textContent = circle.classList.contains('muted') ? 'volume_off' : 'volume_up';
    });
}

function endCall() {
    if (state.callTimer) {
        clearInterval(state.callTimer);
        state.callTimer = null;
    }

    const cost = state.callCost.toFixed(2);
    const mins = Math.floor(state.callSeconds / 60);
    const secs = state.callSeconds % 60;
    const duration = `${mins}m ${secs}s`;

    showToast(`Call ended — ₹${cost} (${duration})`);

    // Reset muted states
    $$('.call-ctrl-circle.muted').forEach(c => c.classList.remove('muted'));
    $('#btn-toggle-mic .material-symbols-outlined').textContent = 'mic';
    $('#btn-toggle-video .material-symbols-outlined').textContent = 'videocam';
    $('#btn-toggle-speaker .material-symbols-outlined').textContent = 'volume_up';

    navigateTo('market');
}

// ===== HISTORY =====
function renderHistory() {
    const container = $('#history-list');
    container.innerHTML = '';

    HISTORY_DATA.forEach(item => {
        const lawyer = LAWYERS.find(l => l.id === item.lawyerId);
        if (!lawyer) return;

        const card = document.createElement('div');
        card.className = 'history-card';
        card.innerHTML = `
            ${lawyer.image ? 
                `<img class="history-avatar" src="${lawyer.image}" alt="${lawyer.name}">` : 
                `<div class="history-avatar">${lawyer.initials}</div>`
            }
            <div class="history-info">
                <h3 class="history-name">${lawyer.name}</h3>
                <p class="history-detail">${item.caseType} • ${item.type}</p>
                <div class="history-meta">
                    <span>${item.date}</span>
                    <span>•</span>
                    <span>${item.duration}</span>
                </div>
            </div>
            <span class="history-cost">₹${item.cost.toLocaleString('en-IN')}</span>
        `;
        card.addEventListener('click', () => openLawyerDetail(lawyer));
        container.appendChild(card);
    });
}

// ===== TOAST =====
function showToast(message) {
    const toast = $('#toast');
    toast.textContent = message;
    toast.classList.remove('hidden');
    requestAnimationFrame(() => toast.classList.add('show'));

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.classList.add('hidden'), 300);
    }, 3000);
}
