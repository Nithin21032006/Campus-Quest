// Compare functionality for compare.html
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('compare.html')) {
        initializeComparePage();
    }
});

function initializeComparePage() {
    const compareGrid = document.getElementById('compareGrid');
    const emptyCompare = document.getElementById('emptyCompare');
    const clearCompareBtn = document.getElementById('clearCompare');

    let compareList = getCompareList();

    // Initial render
    renderCompare();

    // Event listeners
    clearCompareBtn.addEventListener('click', clearCompare);

    function renderCompare() {
        compareGrid.innerHTML = '';
        
        if (compareList.length === 0) {
            emptyCompare.style.display = 'block';
            compareGrid.style.display = 'none';
            return;
        }
        
        emptyCompare.style.display = 'none';
        compareGrid.style.display = 'grid';

        compareList.forEach(collegeId => {
            const college = colleges.find(c => c.id === collegeId);
            if (college) {
                const card = createCompareCard(college);
                compareGrid.appendChild(card);
            }
        });
    }

    function createCompareCard(college) {
        const card = document.createElement('div');
        card.className = 'compare-card';
        
        card.innerHTML = `
            <div class="compare-card-header">
                ${college.name}
            </div>
            <div class="compare-card-body">
                <div class="college-detail">
                    <span class="detail-label">Location:</span>
                    <span class="detail-value">${college.location}</span>
                </div>
                <div class="college-detail">
                    <span class="detail-label">Cutoff Ranks:</span>
                    <span class="detail-value">
                        <div>General: ${college.cutoff.general}</div>
                        <div>OBC: ${college.cutoff.obc}</div>
                        <div>SC/ST: ${college.cutoff.scst}</div>
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
                <div class="college-detail">
                    <span class="detail-label">Avg Package:</span>
                    <span class="detail-value">${college.avgPackage}</span>
                </div>
                <div class="college-detail">
                    <span class="detail-label">Highest Package:</span>
                    <span class="detail-value">${college.highestPackage}</span>
                </div>
                <div class="college-detail">
                    <span class="detail-label">Established:</span>
                    <span class="detail-value">${college.established}</span>
                </div>
                <div class="college-detail">
                    <span class="detail-label">Website:</span>
                    <span class="detail-value">
                        <a href="${college.website}" target="_blank">Visit Website</a>
                    </span>
                </div>
                <div class="college-actions">
                    <button class="action-btn remove-compare" data-id="${college.id}">
                        <i class="fas fa-times"></i> Remove
                    </button>
                </div>
            </div>
        `;
        
        // Add event listener to remove button
        const removeBtn = card.querySelector('.remove-compare');
        removeBtn.addEventListener('click', () => removeFromCompare(college.id));
        
        return card;
    }

    function removeFromCompare(collegeId) {
        let compareList = getCompareList();
        compareList = compareList.filter(id => id !== collegeId);
        saveCompareList(compareList);
        renderCompare();
    }

    function clearCompare() {
        if (confirm('Are you sure you want to clear all comparisons?')) {
            saveCompareList([]);
            renderCompare();
        }
    }
}