// Shortlist functionality for shortlist.html
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('shortlist.html')) {
        initializeShortlistPage();
    }
});

function initializeShortlistPage() {
    const shortlistGrid = document.getElementById('shortlistGrid');
    const emptyShortlist = document.getElementById('emptyShortlist');
    const clearShortlistBtn = document.getElementById('clearShortlist');
    const compareShortlistBtn = document.getElementById('compareShortlist');

    let shortlist = getShortlist();
    let compareList = getCompareList();

    // Initial render
    renderShortlist();

    // Event listeners
    clearShortlistBtn.addEventListener('click', clearShortlist);
    if (compareShortlistBtn) {
        compareShortlistBtn.addEventListener('click', compareShortlisted);
    }

    function renderShortlist() {
        shortlistGrid.innerHTML = '';
        
        if (shortlist.length === 0) {
            emptyShortlist.style.display = 'block';
            shortlistGrid.style.display = 'none';
            return;
        }
        
        emptyShortlist.style.display = 'none';
        shortlistGrid.style.display = 'grid';

        shortlist.forEach(collegeId => {
            const college = colleges.find(c => c.id === collegeId);
            if (college) {
                const card = createShortlistCard(college);
                shortlistGrid.appendChild(card);
            }
        });
    }

    function createShortlistCard(college) {
        const card = document.createElement('div');
        card.className = 'shortlist-card';
        const isInCompare = compareList.includes(college.id);
        
        card.innerHTML = `
            <div class="college-header">
                <div class="college-logo">${college.logo}</div>
                <div class="college-name">${college.name}</div>
            </div>
            <div class="college-body">
                <div class="college-detail">
                    <span class="detail-label">Cutoff Rank:</span>
                    <span class="detail-value">
                        <span class="cutoff-badge">General: ${college.cutoff.general}</span>
                    </span>
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
                    <button class="action-btn btn-compare ${isInCompare ? 'active' : ''}" data-id="${college.id}">
                        <i class="fas fa-balance-scale"></i> ${isInCompare ? 'Added' : 'Compare'}
                    </button>
                    <button class="action-btn remove-shortlist" data-id="${college.id}">
                        <i class="fas fa-trash"></i> Remove
                    </button>
                </div>
            </div>
        `;
        
        // Add event listeners
        const compareBtn = card.querySelector('.btn-compare');
        const removeBtn = card.querySelector('.remove-shortlist');
        
        compareBtn.addEventListener('click', () => toggleCompare(college.id, compareBtn));
        removeBtn.addEventListener('click', () => removeFromShortlist(college.id));
        
        return card;
    }

    function removeFromShortlist(collegeId) {
        let shortlist = getShortlist();
        shortlist = shortlist.filter(id => id !== collegeId);
        saveShortlist(shortlist);
        renderShortlist();
    }

    function clearShortlist() {
        if (confirm('Are you sure you want to clear your entire shortlist?')) {
            saveShortlist([]);
            renderShortlist();
        }
    }

    function compareShortlisted() {
        const shortlist = getShortlist();
        if (shortlist.length === 0) {
            alert('Please add some colleges to your shortlist first.');
            return;
        }
        
        // Redirect to compare page with shortlisted colleges
        window.location.href = 'compare.html';
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
}