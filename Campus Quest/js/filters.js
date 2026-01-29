// Filters functionality for find-colleges.html
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('find-colleges.html')) {
        initializeFilters();
    }
});

function initializeFilters() {
    const collegeGrid = document.getElementById('collegeGrid');
    const applyFiltersBtn = document.getElementById('applyFilters');
    const resetFiltersBtn = document.getElementById('resetFilters');
    const resultsCount = document.getElementById('resultsCount');

    let filteredColleges = [...colleges];
    let shortlist = getShortlist();
    let compareList = getCompareList();

    // Initial render
    renderCollegeGrid(filteredColleges);

    // Event listeners
    applyFiltersBtn.addEventListener('click', applyFilters);
    resetFiltersBtn.addEventListener('click', resetFilters);

    function applyFilters() {
        const rank = parseInt(document.getElementById('rank').value) || 0;
        const category = document.getElementById('category').value;
        const branch = document.getElementById('branch').value;
        const sort = document.getElementById('sort').value;
        
        // Filter by rank and category
        filteredColleges = colleges.filter(college => {
            const cutoff = college.cutoff[category];
            const rankMatch = rank === 0 || rank <= cutoff;
            const branchMatch = branch === 'all' || college.branches.includes(branch);
            return rankMatch && branchMatch;
        });
        
        // Sort colleges
        filteredColleges.sort((a, b) => {
            switch(sort) {
                case 'cutoff':
                    return a.cutoff[category] - b.cutoff[category];
                case 'fees':
                    return a.fees - b.fees;
                case 'rating':
                    return b.rating - a.rating;
                case 'placement':
                    return b.placement - a.placement;
                default:
                    return 0;
            }
        });
        
        renderCollegeGrid(filteredColleges);
        updateResultsCount();
    }

    function resetFilters() {
        document.getElementById('rank').value = '';
        document.getElementById('category').value = 'general';
        document.getElementById('branch').value = 'all';
        document.getElementById('sort').value = 'cutoff';
        
        filteredColleges = [...colleges];
        renderCollegeGrid(filteredColleges);
        updateResultsCount();
    }

    function renderCollegeGrid(collegesToRender) {
        collegeGrid.innerHTML = '';
        
        if (collegesToRender.length === 0) {
            collegeGrid.innerHTML = `
                <div class="no-colleges" style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--secondary);">
                    <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                    <h3>No colleges match your filters</h3>
                    <p>Try adjusting your rank or branch preferences.</p>
                </div>
            `;
            return;
        }
        
        collegesToRender.forEach(college => {
            const card = createCollegeCard(college);
            collegeGrid.appendChild(card);
        });

        updateResultsCount();
    }

    function createCollegeCard(college) {
        const card = document.createElement('div');
        card.className = 'college-card';
        const isShortlisted = shortlist.includes(college.id);
        const isInCompare = compareList.includes(college.id);
        
        card.innerHTML = `
            <div class="college-header">
                <div class="college-logo">${college.logo}</div>
                <div class="college-name">${college.name}</div>
            </div>
            <div class="college-body">
                <div class="college-detail">
                    <span class="detail-label">Location:</span>
                    <span class="detail-value">${college.location}</span>
                </div>
                <div class="college-detail">
                    <span class="detail-label">Cutoff Rank:</span>
                    <span class="detail-value">
                        <span class="cutoff-badge">General: ${college.cutoff.general}</span>
                    </span>
                </div>
                <div class="college-detail">
                    <span class="detail-label">Branches:</span>
                    <span class="detail-value">${college.branches.slice(0, 3).join(', ')}${college.branches.length > 3 ? '...' : ''}</span>
                </div>
                <div class="college-detail">
                    <span class="detail-label">Fees:</span>
                    <span class="detail-value">${formatCurrency(college.fees)}/year</span>
                </div>
                <div class="college-detail">
                    <span class="detail-label">Rating:</span>
                    <span class="detail-value rating">
                        ${getStars(college.rating)} ${college.rating}/5
                    </span>
                </div>
                <div class="college-detail">
                    <span class="detail-label">Placement:</span>
                    <span class="detail-value">${college.placement}%</span>
                </div>
                <div class="college-actions">
                    <button class="action-btn btn-bookmark ${isShortlisted ? 'active' : ''}" data-id="${college.id}">
                        <i class="fas fa-bookmark"></i> ${isShortlisted ? 'Shortlisted' : 'Shortlist'}
                    </button>
                    <button class="action-btn btn-compare ${isInCompare ? 'active' : ''}" data-id="${college.id}">
                        <i class="fas fa-balance-scale"></i> ${isInCompare ? 'Added' : 'Compare'}
                    </button>
                </div>
            </div>
        `;
        
        // Add event listeners
        const bookmarkBtn = card.querySelector('.btn-bookmark');
        const compareBtn = card.querySelector('.btn-compare');
        
        bookmarkBtn.addEventListener('click', () => toggleShortlist(college.id, bookmarkBtn));
        compareBtn.addEventListener('click', () => toggleCompare(college.id, compareBtn));
        
        return card;
    }

    function toggleShortlist(collegeId, button) {
        let shortlist = getShortlist();
        
        if (shortlist.includes(collegeId)) {
            shortlist = shortlist.filter(id => id !== collegeId);
            button.classList.remove('active');
            button.innerHTML = '<i class="fas fa-bookmark"></i> Shortlist';
        } else {
            shortlist.push(collegeId);
            button.classList.add('active');
            button.innerHTML = '<i class="fas fa-bookmark"></i> Shortlisted';
        }
        
        saveShortlist(shortlist);
    }

    function toggleCompare(collegeId, button) {
        let compareList = getCompareList();
        
        if (compareList.includes(collegeId)) {
            compareList = compareList.filter(id => id !== collegeId);
            button.classList.remove('active');
            button.innerHTML = '<i class="fas fa-balance-scale"></i> Compare';
        } else {
            if (compareList.length >= 3) {
                alert('You can compare up to 3 colleges only.');
                return;
            }
            compareList.push(collegeId);
            button.classList.add('active');
            button.innerHTML = '<i class="fas fa-balance-scale"></i> Added';
        }
        
        saveCompareList(compareList);
    }

    function updateResultsCount() {
        if (resultsCount) {
            resultsCount.textContent = filteredColleges.length;
        }
    }
}