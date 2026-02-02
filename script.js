// All series data with IMDB ratings and poster images
const seriesData = [
    // WATCHED SERIES
    {
        name: "Breaking Bad",
        rating: 9.5,
        episodes: 62,
        watched: true,
        category: "series",
        poster: "images/1.jpg"
    },
    {
        name: "Band of Brothers",
        rating: 9.5,
        episodes: 10,
        watched: true,
        category: "series",
        poster: "images/2.jpg"
    },
    {
        name: "Chernobyl",
        rating: 9.3,
        episodes: 5,
        watched: true,
        category: "series",
        poster: "images/3.jpg"
    },
    {
        name: "Game of Thrones",
        rating: 9.2,
        episodes: 73,
        watched: true,
        category: "series",
        poster: "images/4.jpg"
    },
    {
        name: "True Detective",
        rating: 9.2,
        episodes: 8,
        watched: true,
        category: "series",
        poster: "images/5.jpg"
    },
    {
        name: "Sherlock",
        rating: 9.0,
        episodes: 12,
        watched: true,
        category: "series",
        poster: "images/6.jpg"
    },
    {
        name: "The Pitt",
        rating: 8.9,
        episodes: 16,
        watched: true,
        category: "series",
        poster: "images/7.jpg"
    },
    {
        name: "Peaky Blinders",
        rating: 8.7,
        episodes: 36,
        watched: true,
        category: "series",
        poster: "images/8.jpg"
    },
    {
        name: "Narcos",
        rating: 8.7,
        episodes: 30,
        watched: true,
        category: "series",
        poster: "images/9.jpg"
    },
    {
        name: "Dark",
        rating: 8.7,
        episodes: 26,
        watched: true,
        category: "series",
        poster: "images/10.jpg"
    },
    {
        name: "Mindhunter",
        rating: 8.6,
        episodes: 19,
        watched: true,
        category: "series",
        poster: "images/11.jpg"
    },
    {
        name: "The Crown",
        rating: 8.6,
        episodes: 60,
        watched: true,
        category: "series",
        poster: "images/12.jpg"
    },
    {
        name: "The Queen's Gambit",
        rating: 8.5,
        episodes: 7,
        watched: true,
        category: "series",
        poster: "images/13.jpg"
    },
    {
        name: "Vikings",
        rating: 8.5,
        episodes: 93,
        watched: true,
        category: "series",
        poster: "images/14.jpg"
    },
    {
        name: "Hannibal",
        rating: 8.5,
        episodes: 39,
        watched: true,
        category: "series",
        poster: "images/15.jpg"
    },
    {
        name: "Spartacus",
        rating: 8.5,
        episodes: 33,
        watched: true,
        category: "series",
        poster: "images/16.jpg"
    },
    {
        name: "The Last Kingdom",
        rating: 8.5,
        episodes: 46,
        watched: true,
        category: "series",
        poster: "images/17.jpg"
    },
    {
        name: "Lost",
        rating: 8.3,
        episodes: 121,
        watched: true,
        category: "series",
        poster: "images/18.jpg"
    },
    {
        name: "Prison Break",
        rating: 8.3,
        episodes: 90,
        watched: true,
        category: "series",
        poster: "images/19.jpg"
    },
    {
        name: "Taboo",
        rating: 8.3,
        episodes: 8,
        watched: true,
        category: "series",
        poster: "images/20.jpg"
    },
    {
        name: "La Casa de Papel",
        rating: 8.2,
        episodes: 41,
        watched: true,
        category: "series",
        poster: "images/21.jpg"
    },
    {
        name: "Senna",
        rating: 8.2,
        episodes: 6,
        watched: true,
        category: "series",
        poster: "images/23.jpg"
    },
    {
        name: "11.22.63",
        rating: 8.1,
        episodes: 8,
        watched: true,
        category: "series",
        poster: "images/24.jpg"
    },
    {
        name: "Manhunt: Unabomber",
        rating: 8.1,
        episodes: 18,
        watched: true,
        category: "series",
        poster: "images/25.jpg"
    },
    {
        name: "Squid Game",
        rating: 8.0,
        episodes: 22,
        watched: true,
        category: "series",
        poster: "images/26.jpg"
    },
    {
        name: "Bodyguard",
        rating: 8.0,
        episodes: 6,
        watched: true,
        category: "series",
        poster: "images/27.jpg"
    },
    {
        name: "Rise of Empires: Ottoman",
        rating: 8.0,
        episodes: 12,
        watched: true,
        category: "series",
        poster: "images/28.jpg"
    },
    {
        name: "The Spy",
        rating: 7.9,
        episodes: 6,
        watched: true,
        category: "series",
        poster: "images/29.jpg"
    },
    {
        name: "Diriliş: Ertuğrul",
        rating: 7.9,
        episodes: 179,
        watched: true,
        category: "series",
        poster: "images/30.jpg"
    },
    {
        name: "The Witcher",
        rating: 7.9,
        episodes: 26,
        watched: true,
        category: "series",
        poster: "images/31.jpg"
    },
    {
        name: "None",
        rating: 7.8,
        episodes: 3,
        watched: true,
        category: "series",
        poster: "images/32.jpg"
    },
    {
        name: "Waco",
        rating: 7.8,
        episodes: 6,
        watched: true,
        category: "series",
        poster: "images/33.jpg"
    },
    {
        name: "El Chapo",
        rating: 7.8,
        episodes: 34,
        watched: true,
        category: "series",
        poster: "images/34.jpg"
    },
    {
        name: "Alice in Borderland",
        rating: 7.8,
        episodes: 17,
        watched: true,
        category: "series",
        poster: "images/35.jpg"
    },
    {
        name: "See",
        rating: 7.6,
        episodes: 24,
        watched: true,
        category: "series",
        poster: "images/36.jpg"
    },
    {
        name: "Outer Banks",
        rating: 7.5,
        episodes: 41,
        watched: true,
        category: "series",
        poster: "images/37.jpg"
    },
    {
        name: "Dogs of Berlin",
        rating: 7.5,
        episodes: 11,
        watched: true,
        category: "series",
        poster: "images/38.jpg"
    },
    {
        name: "The 100",
        rating: 7.5,
        episodes: 100,
        watched: true,
        category: "series",
        poster: "images/39.jpg"
    },
    {
        name: "Lupin",
        rating: 7.5,
        episodes: 18,
        watched: true,
        category: "series",
        poster: "images/40.jpg"
    },
    {
        name: "The Night Agent",
        rating: 7.4,
        episodes: 21,
        watched: true,
        category: "series",
        poster: "images/41.jpg"
    },
    {
        name: "The Recruit",
        rating: 7.4,
        episodes: 14,
        watched: true,
        category: "series",
        poster: "images/42.jpg"
    },
    {
        name: "Class of '07",
        rating: 7.3,
        episodes: 8,
        watched: true,
        category: "series",
        poster: "images/43.jpg"
    },
    {
        name: "Barbarians",
        rating: 7.2,
        episodes: 12,
        watched: true,
        category: "series",
        poster: "images/44.jpg"
    },
    {
        name: "Raising Voices",
        rating: 7.2,
        episodes: 8,
        watched: true,
        category: "series",
        poster: "images/45.jpg"
    },
    {
        name: "Frontier",
        rating: 7.1,
        episodes: 18,
        watched: true,
        category: "series",
        poster: "images/46.jpg"
    },
    {
        name: "Manifest",
        rating: 7.0,
        episodes: 62,
        watched: true,
        category: "series",
        poster: "images/47.jpg"
    },
    {
        name: "Roman Empire",
        rating: 7.0,
        episodes: 15,
        watched: true,
        category: "series",
        poster: "images/48.jpg"
    },
    {
        name: "Knightfall",
        rating: 6.8,
        episodes: 18,
        watched: true,
        category: "series",
        poster: "images/49.jpg"
    },
    {
        name: "Flames of Fate",
        rating: 6.7,
        episodes: 28,
        watched: true,
        category: "series",
        poster: "images/50.jpg"
    },
    {
        name: "The Purge",
        rating: 6.6,
        episodes: 20,
        watched: true,
        category: "series",
        poster: "images/51.jpg"
    },
    {
        name: "F1 Academy",
        rating: 6.6,
        episodes: 7,
        watched: true,
        category: "series",
        poster: "images/52.jpg"
    },
    {
        name: "The Rain",
        rating: 6.3,
        episodes: 20,
        watched: true,
        category: "series",
        poster: "images/53.jpg"
    },
    {
        name: "Çilek Kokusu",
        rating: 6.0,
        episodes: 23,
        watched: true,
        category: "series",
        poster: "images/54.jpg"
    },
    {
        name: "Beast Games",
        rating: 5.8,
        episodes: 12,
        watched: true,
        category: "series",
        poster: "images/55.jpg"
    },
    {
        name: "The I-Land",
        rating: 4.7,
        episodes: 7,
        watched: true,
        category: "series",
        poster: "images/56.jpg"
    },
    {
        name: "Stranger Things",
        rating: 8.7,
        episodes: 42,
        watched: true,
        category: "series",
        poster: "images/57.jpg"
    },
    // ANIME WATCHED
    {
        name: "Attack on Titan",
        rating: 9.1,
        episodes: 98,
        watched: true,
        category: "anime",
        poster: "images/58.jpg"
    },
    {
        name: "One Piece",
        rating: 9.0,
        episodes: 1136,
        watched: true,
        category: "anime",
        poster: "images/59.jpg"
    },
    {
        name: "Hunter x Hunter",
        rating: 9.0,
        episodes: 148,
        watched: true,
        category: "anime",
        poster: "images/60.jpg"
    },
    {
        name: "Death Note",
        rating: 8.9,
        episodes: 37,
        watched: true,
        category: "anime",
        poster: "images/61.jpg"
    },
    // TO WATCH SERIES
    {
        name: "Better Call Saul",
        rating: 9.0,
        episodes: 63,
        watched: false,
        category: "series",
        poster: "images/62.jpg"
    },
    {
        name: "Black Mirror",
        rating: 8.7,
        episodes: 33,
        watched: false,
        category: "series",
        poster: "images/63.jpg"
    },
    {
        name: "Severance",
        rating: 8.7,
        episodes: 20,
        watched: false,
        category: "series",
        poster: "images/64.jpg"
    },
    {
        name: "The Last of Us",
        rating: 8.5,
        episodes: 16,
        watched: false,
        category: "series",
        poster: "images/65.jpg"
    },
    {
        name: "Formula 1: Drive to Survive",
        rating: 8.5,
        episodes: 70,
        watched: false,
        category: "series",
        poster: "images/66.jpg"
    },
    {
        name: "Suits",
        rating: 8.4,
        episodes: 134,
        watched: false,
        category: "series",
        poster: "images/67.jpg"
    },
    {
        name: "The Punisher",
        rating: 8.4,
        episodes: 26,
        watched: false,
        category: "series",
        poster: "images/68.jpg"
    },
    {
        name: "Banshee",
        rating: 8.4,
        episodes: 38,
        watched: false,
        category: "series",
        poster: "images/69.jpg"
    },
    {
        name: "House of the Dragon",
        rating: 8.3,
        episodes: 27,
        watched: false,
        category: "series",
        poster: "images/70.jpg"
    },
    {
        name: "The Day of the Jackal",
        rating: 8.1,
        episodes: 11,
        watched: false,
        category: "series",
        poster: "images/71.jpg"
    },
    {
        name: "Godfather of Harlem",
        rating: 8.1,
        episodes: 40,
        watched: false,
        category: "series",
        poster: "images/72.jpg"
    },
    {
        name: "The Blacklist",
        rating: 7.9,
        episodes: 218,
        watched: false,
        category: "series",
        poster: "images/73.jpg"
    },
    {
        name: "From",
        rating: 7.8,
        episodes: 30,
        watched: false,
        category: "series",
        poster: "images/74.jpg"
    },
    {
        name: "You",
        rating: 7.6,
        episodes: 50,
        watched: false,
        category: "series",
        poster: "images/75.jpg"
    },
    {
        name: "Alias Grace",
        rating: 7.6,
        episodes: 6,
        watched: false,
        category: "series",
        poster: "images/76.jpg"
    },
    {
        name: "The Last Ship",
        rating: 7.4,
        episodes: 56,
        watched: false,
        category: "series",
        poster: "images/77.jpg"
    },
    {
        name: "Kuruluş: Osman",
        rating: 7.4,
        episodes: 194,
        watched: false,
        category: "series",
        poster: "images/78.jpg"
    },
    {
        name: "Bandidos",
        rating: 6.6,
        episodes: 14,
        watched: false,
        category: "series",
        poster: "images/79.jpg"
    },
    {
        name: "Public Disorder",
        rating: 6.5,
        episodes: 6,
        watched: false,
        category: "series",
        poster: "images/80.jpg"
    },
    {
        name: "Subteran",
        rating: 6.4,
        episodes: 6,
        watched: false,
        category: "series",
        poster: "images/81.jpg"
    },
    // TO WATCH ANIME
    {
        name: "JoJo's Bizarre Adventure",
        rating: 8.5,
        episodes: 195,
        watched: false,
        category: "anime",
        poster: "images/82.jpg"
    }
];

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderSeries();
    updateStats();
    setupFilters();
});

// Render series grid
function renderSeries() {
    const grid = document.getElementById('seriesGrid');
    const filteredSeries = getFilteredSeries();

    if (filteredSeries.length === 0) {
        grid.innerHTML = '<div class="empty-state">No series found 😢</div>';
        return;
    }

    grid.innerHTML = filteredSeries.map(series => `
        <div class="series-card">
            <span class="category-tag">
                ${series.category === 'anime' ? '🎌 Anime' : '📺 Series'}
            </span>

            <div class="series-poster-container">
                <img 
                    src="${series.poster}" 
                    alt="${series.name}" 
                    class="series-poster"
                    loading="lazy"
                    onerror="this.src='https://via.placeholder.com/300x450/0f172a/ec4899?text=No+Image'"
                >
            </div>

            <div class="series-overlay">
                <div class="series-title">${series.name}</div>
                <div class="series-meta">
                    <span class="rating-badge">⭐ ${series.rating}/10</span>
                    <span class="episodes-badge">📺 ${series.episodes} EP</span>
                </div>
            </div>

            <div class="series-info">
                <div class="series-title">${series.name}</div>
                <div class="series-meta">
                    <span class="rating-badge">⭐ ${series.rating}</span>
                    <span class="episodes-badge">${series.episodes} EP</span>
                    <span class="status-badge ${series.watched ? '' : 'towatch'}">
                        ${series.watched ? '✅ Watched' : '📌 To Watch'}
                    </span>
                </div>
            </div>
        </div>
    `).join('');
}


// Get filtered series
function getFilteredSeries() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const statusFilter = document.getElementById('statusFilter').value;
    const categoryFilter = document.getElementById('categoryFilter').value;
    const sortFilter = document.getElementById('sortFilter').value;
    
    let filtered = seriesData.filter(series => {
        const matchesSearch = series.name.toLowerCase().includes(searchTerm);
        const matchesStatus = statusFilter === 'all' || 
            (statusFilter === 'watched' && series.watched) ||
            (statusFilter === 'towatch' && !series.watched);
        const matchesCategory = categoryFilter === 'all' || series.category === categoryFilter;
        
        return matchesSearch && matchesStatus && matchesCategory;
    });
    
    // Sort
    filtered.sort((a, b) => {
        switch(sortFilter) {
            case 'rating-desc':
                return b.rating - a.rating;
            case 'rating-asc':
                return a.rating - b.rating;
            case 'name':
                return a.name.localeCompare(b.name);
            case 'episodes-desc':
                return b.episodes - a.episodes;
            default:
                return 0;
        }
    });
    
    return filtered;
}

// Update statistics
function updateStats() {
    const watched = seriesData.filter(s => s.watched);
    const toWatch = seriesData.filter(s => !s.watched);
    const totalEpisodes = watched.reduce((sum, s) => sum + s.episodes, 0);
    const avgRating = watched.length > 0 
        ? (watched.reduce((sum, s) => sum + s.rating, 0) / watched.length).toFixed(1)
        : '0.0';
    
    document.getElementById('watchedCount').textContent = watched.length;
    document.getElementById('toWatchCount').textContent = toWatch.length;
    document.getElementById('totalEpisodes').textContent = totalEpisodes;
    document.getElementById('avgRating').textContent = avgRating;
    document.getElementById('totalCount').textContent = seriesData.length;
}

// Setup filter listeners
function setupFilters() {
    document.getElementById('searchInput').addEventListener('input', renderSeries);
    document.getElementById('statusFilter').addEventListener('change', renderSeries);
    document.getElementById('categoryFilter').addEventListener('change', renderSeries);
    document.getElementById('sortFilter').addEventListener('change', renderSeries);
}

// Reset filters
function resetFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('statusFilter').value = 'all';
    document.getElementById('categoryFilter').value = 'all';
    document.getElementById('sortFilter').value = 'rating-desc';
    renderSeries();
}
