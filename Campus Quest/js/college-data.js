// College Data
const colleges = [
    {
        id: 1,
        name: "RV College of Engineering",
        location: "Bangalore",
        cutoff: {
            general: 500,
            obc: 1500,
            scst: 5000
        },
        branches: ["Computer Science", "Electronics & Communication", "Mechanical", "Civil", "AI & ML"],
        fees: 250000,
        rating: 4.8,
        placement: 96,
        logo: "🏛️",
        website: "https://www.rvce.edu.in",
        established: 1963,
        avgPackage: "12.5 LPA",
        highestPackage: "42 LPA"
    },
    {
        id: 2,
        name: "PES University",
        location: "Bangalore",
        cutoff: {
            general: 800,
            obc: 2000,
            scst: 6000
        },
        branches: ["Computer Science", "Information Science", "Electronics", "Electrical", "AI & ML"],
        fees: 280000,
        rating: 4.7,
        placement: 94,
        logo: "🎓",
        website: "https://pes.edu",
        established: 1972,
        avgPackage: "11.8 LPA",
        highestPackage: "38 LPA"
    },
    {
        id: 3,
        name: "BMS College of Engineering",
        location: "Bangalore",
        cutoff: {
            general: 1200,
            obc: 3000,
            scst: 8000
        },
        branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "Chemical"],
        fees: 180000,
        rating: 4.5,
        placement: 92,
        logo: "🏫",
        website: "https://bmsce.ac.in",
        established: 1946,
        avgPackage: "9.5 LPA",
        highestPackage: "28 LPA"
    },
    {
        id: 4,
        name: "MS Ramaiah Institute of Technology",
        location: "Bangalore",
        cutoff: {
            general: 1500,
            obc: 4000,
            scst: 10000
        },
        branches: ["Computer Science", "AI & ML", "Electronics", "Mechanical", "Civil"],
        fees: 220000,
        rating: 4.4,
        placement: 90,
        logo: "🔬",
        website: "https://msrit.edu",
        established: 1962,
        avgPackage: "10.2 LPA",
        highestPackage: "32 LPA"
    },
    {
        id: 5,
        name: "Nitte Meenakshi Institute of Technology",
        location: "Bangalore",
        cutoff: {
            general: 2000,
            obc: 5000,
            scst: 12000
        },
        branches: ["Computer Science", "Information Science", "Electronics", "Civil", "Mechanical"],
        fees: 160000,
        rating: 4.2,
        placement: 88,
        logo: "📚",
        website: "https://nmit.ac.in",
        established: 1979,
        avgPackage: "8.5 LPA",
        highestPackage: "25 LPA"
    },
    {
        id: 6,
        name: "Dayananda Sagar College of Engineering",
        location: "Bangalore",
        cutoff: {
            general: 2500,
            obc: 6000,
            scst: 15000
        },
        branches: ["Computer Science", "Electronics", "Mechanical", "Biotechnology", "Civil"],
        fees: 190000,
        rating: 4.3,
        placement: 87,
        logo: "🏢",
        website: "https://dsce.edu.in",
        established: 1979,
        avgPackage: "9.2 LPA",
        highestPackage: "26 LPA"
    },
    {
        id: 7,
        name: "JSS Academy of Technical Education",
        location: "Bangalore",
        cutoff: {
            general: 3000,
            obc: 7000,
            scst: 18000
        },
        branches: ["Computer Science", "Electronics", "Information Science", "Civil", "Mechanical"],
        fees: 140000,
        rating: 4.1,
        placement: 85,
        logo: "🎯",
        website: "https://jssateb.ac.in",
        established: 1997,
        avgPackage: "7.8 LPA",
        highestPackage: "22 LPA"
    },
    {
        id: 8,
        name: "Sri Venkateshwara College of Engineering",
        location: "Bangalore",
        cutoff: {
            general: 3500,
            obc: 8000,
            scst: 20000
        },
        branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "Information Science"],
        fees: 120000,
        rating: 4.0,
        placement: 82,
        logo: "⚡",
        website: "https://svce.edu.in",
        established: 2001,
        avgPackage: "7.2 LPA",
        highestPackage: "20 LPA"
    },
    {
        id: 9,
        name: "New Horizon College of Engineering",
        location: "Bangalore",
        cutoff: {
            general: 4000,
            obc: 9000,
            scst: 22000
        },
        branches: ["Computer Science", "AI & ML", "Electronics", "Mechanical", "Civil"],
        fees: 170000,
        rating: 4.0,
        placement: 80,
        logo: "🌅",
        website: "https://newhorizonindia.edu",
        established: 2001,
        avgPackage: "7.5 LPA",
        highestPackage: "21 LPA"
    },
    {
        id: 10,
        name: "Acharya Institute of Technology",
        location: "Bangalore",
        cutoff: {
            general: 4500,
            obc: 10000,
            scst: 25000
        },
        branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "Information Science"],
        fees: 150000,
        rating: 3.9,
        placement: 78,
        logo: "🔭",
        website: "https://acharya.ac.in",
        established: 1990,
        avgPackage: "6.8 LPA",
        highestPackage: "18 LPA"
    },
    // Additional 25 colleges with cutoff under 10000
    {
        id: 11,
        name: "Bangalore Institute of Technology",
        location: "Bangalore",
        cutoff: {
            general: 4800,
            obc: 11000,
            scst: 28000
        },
        branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "Information Science"],
        fees: 135000,
        rating: 3.8,
        placement: 76,
        logo: "🔧",
        website: "https://bit-bangalore.edu.in",
        established: 1979,
        avgPackage: "6.5 LPA",
        highestPackage: "16 LPA"
    },
    {
        id: 12,
        name: "SJB Institute of Technology",
        location: "Bangalore",
        cutoff: {
            general: 5200,
            obc: 12000,
            scst: 30000
        },
        branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "AI & ML"],
        fees: 145000,
        rating: 3.7,
        placement: 75,
        logo: "⚙️",
        website: "https://sjbit.edu.in",
        established: 2001,
        avgPackage: "6.2 LPA",
        highestPackage: "15 LPA"
    },
    {
        id: 13,
        name: "REVA University",
        location: "Bangalore",
        cutoff: {
            general: 5500,
            obc: 13000,
            scst: 32000
        },
        branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "Data Science"],
        fees: 165000,
        rating: 3.8,
        placement: 77,
        logo: "🎯",
        website: "https://reva.edu.in",
        established: 2004,
        avgPackage: "6.8 LPA",
        highestPackage: "17 LPA"
    },
    {
        id: 14,
        name: "CMR Institute of Technology",
        location: "Bangalore",
        cutoff: {
            general: 5800,
            obc: 14000,
            scst: 35000
        },
        branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "Cyber Security"],
        fees: 155000,
        rating: 3.6,
        placement: 74,
        logo: "🏢",
        website: "https://cmrit.ac.in",
        established: 2000,
        avgPackage: "6.0 LPA",
        highestPackage: "14 LPA"
    },
    {
        id: 15,
        name: "RNS Institute of Technology",
        location: "Bangalore",
        cutoff: {
            general: 6000,
            obc: 15000,
            scst: 38000
        },
        branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "Information Science"],
        fees: 160000,
        rating: 3.9,
        placement: 79,
        logo: "🔬",
        website: "https://rnsit.ac.in",
        established: 2001,
        avgPackage: "7.0 LPA",
        highestPackage: "18 LPA"
    },
    {
        id: 16,
        name: "AMC Engineering College",
        location: "Bangalore",
        cutoff: {
            general: 6200,
            obc: 16000,
            scst: 40000
        },
        branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "AI & ML"],
        fees: 140000,
        rating: 3.5,
        placement: 72,
        logo: "🏛️",
        website: "https://amcec.edu.in",
        established: 1999,
        avgPackage: "5.8 LPA",
        highestPackage: "13 LPA"
    },
    {
        id: 17,
        name: "East Point College of Engineering",
        location: "Bangalore",
        cutoff: {
            general: 6500,
            obc: 17000,
            scst: 42000
        },
        branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "Biotechnology"],
        fees: 125000,
        rating: 3.4,
        placement: 70,
        logo: "📍",
        website: "https://eastpoint.ac.in",
        established: 1999,
        avgPackage: "5.5 LPA",
        highestPackage: "12 LPA"
    },
    {
        id: 18,
        name: "Global Academy of Technology",
        location: "Bangalore",
        cutoff: {
            general: 6800,
            obc: 18000,
            scst: 45000
        },
        branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "Data Science"],
        fees: 150000,
        rating: 3.6,
        placement: 73,
        logo: "🌐",
        website: "https://globalacademyoftechnology.in",
        established: 2001,
        avgPackage: "6.1 LPA",
        highestPackage: "14 LPA"
    },
    {
        id: 19,
        name: "Cambridge Institute of Technology",
        location: "Bangalore",
        cutoff: {
            general: 7000,
            obc: 19000,
            scst: 48000
        },
        branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "AI & ML"],
        fees: 145000,
        rating: 3.7,
        placement: 75,
        logo: "🎓",
        website: "https://cit-bangalore.in",
        established: 2001,
        avgPackage: "6.3 LPA",
        highestPackage: "15 LPA"
    },
    {
        id: 20,
        name: "Oxford College of Engineering",
        location: "Bangalore",
        cutoff: {
            general: 7200,
            obc: 20000,
            scst: 50000
        },
        branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "Information Science"],
        fees: 135000,
        rating: 3.5,
        placement: 71,
        logo: "📖",
        website: "https://oxfordece.edu",
        established: 2001,
        avgPackage: "5.9 LPA",
        highestPackage: "13 LPA"
    },
    {
        id: 21,
        name: "Brindavan College of Engineering",
        location: "Bangalore",
        cutoff: {
            general: 7500,
            obc: 21000,
            scst: 52000
        },
        branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "Cyber Security"],
        fees: 130000,
        rating: 3.3,
        placement: 68,
        logo: "🌳",
        website: "https://brindavancollege.com",
        established: 1993,
        avgPackage: "5.2 LPA",
        highestPackage: "11 LPA"
    },
    {
        id: 22,
        name: "Vidya Vikas Institute of Engineering",
        location: "Bangalore",
        cutoff: {
            general: 7800,
            obc: 22000,
            scst: 55000
        },
        branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "AI & ML"],
        fees: 128000,
        rating: 3.4,
        placement: 69,
        logo: "📊",
        website: "https://vvie.ac.in",
        established: 2001,
        avgPackage: "5.4 LPA",
        highestPackage: "12 LPA"
    },
    {
        id: 23,
        name: "Rajeev Institute of Technology",
        location: "Bangalore",
        cutoff: {
            general: 8000,
            obc: 23000,
            scst: 58000
        },
        branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "Data Science"],
        fees: 125000,
        rating: 3.2,
        placement: 67,
        logo: "⚡",
        website: "https://rajeev.edu.in",
        established: 2007,
        avgPackage: "5.0 LPA",
        highestPackage: "10 LPA"
    },
    {
        id: 24,
        name: "Al-Ameen Engineering College",
        location: "Bangalore",
        cutoff: {
            general: 8200,
            obc: 24000,
            scst: 60000
        },
        branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "Information Science"],
        fees: 120000,
        rating: 3.1,
        placement: 65,
        logo: "🕌",
        website: "https://alameenengineering.org",
        established: 1998,
        avgPackage: "4.8 LPA",
        highestPackage: "9 LPA"
    },
    {
        id: 25,
        name: "HKBK College of Engineering",
        location: "Bangalore",
        cutoff: {
            general: 8500,
            obc: 25000,
            scst: 62000
        },
        branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "AI & ML"],
        fees: 140000,
        rating: 3.5,
        placement: 72,
        logo: "🏫",
        website: "https://hkbk.edu.in",
        established: 1997,
        avgPackage: "5.7 LPA",
        highestPackage: "12 LPA"
    },
    {
        id: 26,
        name: "Gopalan College of Engineering",
        location: "Bangalore",
        cutoff: {
            general: 8800,
            obc: 26000,
            scst: 65000
        },
        branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "Data Science"],
        fees: 135000,
        rating: 3.4,
        placement: 70,
        logo: "🏢",
        website: "https://gopalanengg.edu.in",
        established: 2001,
        avgPackage: "5.5 LPA",
        highestPackage: "11 LPA"
    },
    {
        id: 27,
        name: "Sri Krishna Institute of Technology",
        location: "Bangalore",
        cutoff: {
            general: 9000,
            obc: 27000,
            scst: 68000
        },
        branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "Cyber Security"],
        fees: 130000,
        rating: 3.3,
        placement: 68,
        logo: "🕉️",
        website: "https://skit.org.in",
        established: 1999,
        avgPackage: "5.3 LPA",
        highestPackage: "10 LPA"
    },
    {
        id: 28,
        name: "Atria Institute of Technology",
        location: "Bangalore",
        cutoff: {
            general: 9200,
            obc: 28000,
            scst: 70000
        },
        branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "AI & ML"],
        fees: 145000,
        rating: 3.6,
        placement: 74,
        logo: "🏛️",
        website: "https://atria.edu",
        established: 2000,
        avgPackage: "6.0 LPA",
        highestPackage: "13 LPA"
    },
    {
        id: 29,
        name: "M S Engineering College",
        location: "Bangalore",
        cutoff: {
            general: 9500,
            obc: 29000,
            scst: 72000
        },
        branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "Information Science"],
        fees: 125000,
        rating: 3.2,
        placement: 66,
        logo: "🔧",
        website: "https://msec.ac.in",
        established: 2002,
        avgPackage: "5.1 LPA",
        highestPackage: "9 LPA"
    },
    {
        id: 30,
        name: "Bapuji Institute of Engineering",
        location: "Bangalore",
        cutoff: {
            general: 9800,
            obc: 30000,
            scst: 75000
        },
        branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "Data Science"],
        fees: 120000,
        rating: 3.1,
        placement: 64,
        logo: "🏭",
        website: "https://bietdvg.edu",
        established: 1979,
        avgPackage: "4.9 LPA",
        highestPackage: "8 LPA"
    },
    {
        id: 31,
        name: "Sapthagiri College of Engineering",
        location: "Bangalore",
        cutoff: {
            general: 9900,
            obc: 31000,
            scst: 78000
        },
        branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "AI & ML"],
        fees: 128000,
        rating: 3.3,
        placement: 67,
        logo: "🌳",
        website: "https://sapthagiri.edu",
        established: 2001,
        avgPackage: "5.2 LPA",
        highestPackage: "10 LPA"
    },
    {
        id: 32,
        name: "Dr. Ambedkar Institute of Technology",
        location: "Bangalore",
        cutoff: {
            general: 10000,
            obc: 32000,
            scst: 80000
        },
        branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "Information Science"],
        fees: 115000,
        rating: 3.0,
        placement: 62,
        logo: "📚",
        website: "https://ait-bangalore.in",
        established: 1980,
        avgPackage: "4.7 LPA",
        highestPackage: "7 LPA"
    },
    {
        id: 33,
        name: "KNS Institute of Technology",
        location: "Bangalore",
        cutoff: {
            general: 10200,
            obc: 33000,
            scst: 82000
        },
        branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "Cyber Security"],
        fees: 122000,
        rating: 3.2,
        placement: 65,
        logo: "⚙️",
        website: "https://knsit.org",
        established: 2001,
        avgPackage: "5.0 LPA",
        highestPackage: "9 LPA"
    },
    {
        id: 34,
        name: "Nagarbhavi Institute of Technology",
        location: "Bangalore",
        cutoff: {
            general: 10500,
            obc: 34000,
            scst: 85000
        },
        branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "AI & ML"],
        fees: 118000,
        rating: 3.1,
        placement: 63,
        logo: "🏢",
        website: "https://nit-bangalore.in",
        established: 2001,
        avgPackage: "4.8 LPA",
        highestPackage: "8 LPA"
    },
    {
        id: 35,
        name: "Yellamma Dasappa Institute of Technology",
        location: "Bangalore",
        cutoff: {
            general: 10800,
            obc: 35000,
            scst: 88000
        },
        branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "Data Science"],
        fees: 110000,
        rating: 2.9,
        placement: 60,
        logo: "🎓",
        website: "https://ydit.ac.in",
        established: 2008,
        avgPackage: "4.5 LPA",
        highestPackage: "7 LPA"
    }
];

// Local Storage Management
const STORAGE_KEYS = {
    SHORTLIST: 'kcet_shortlist',
    COMPARE: 'kcet_compare'
};

function getShortlist() {
    const shortlist = localStorage.getItem(STORAGE_KEYS.SHORTLIST);
    return shortlist ? JSON.parse(shortlist) : [];
}

function saveShortlist(shortlist) {
    localStorage.setItem(STORAGE_KEYS.SHORTLIST, JSON.stringify(shortlist));
}

function getCompareList() {
    const compare = localStorage.getItem(STORAGE_KEYS.COMPARE);
    return compare ? JSON.parse(compare) : [];
}

function saveCompareList(compareList) {
    localStorage.setItem(STORAGE_KEYS.COMPARE, JSON.stringify(compareList));
}

// Utility Functions
function formatCurrency(amount) {
    return '₹' + amount.toLocaleString('en-IN');
}

function getStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    let stars = '★'.repeat(fullStars);
    if (halfStar) stars += '½';
    stars += ' '.repeat(5 - fullStars - (halfStar ? 1 : 0));
    return stars;
}