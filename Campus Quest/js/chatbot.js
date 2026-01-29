// chatbot.js - AI Assistant for KCET College Recommendations

// Chatbot functionality
class KCETChatbot {
    constructor() {
        this.messagesContainer = document.getElementById('chatbotMessages');
        this.chatInput = document.getElementById('chatInput');
        this.sendButton = document.getElementById('sendMessage');
        this.isTyping = false;
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.showWelcomeMessage();
    }

    setupEventListeners() {
        this.sendButton.addEventListener('click', () => this.sendMessage());
        this.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        // Add quick question buttons if they exist
        this.setupQuickQuestions();
    }

    setupQuickQuestions() {
        const quickQuestions = [
            "What colleges can I get with rank 1500?",
            "Best computer science colleges",
            "Colleges with good placement",
            "Affordable engineering colleges",
            "Colleges for Electronics branch"
        ];

        const quickButtonsContainer = document.createElement('div');
        quickButtonsContainer.className = 'quick-questions';
        quickButtonsContainer.innerHTML = '<h4>Quick Questions:</h4><div class="quick-buttons"></div>';

        const quickButtons = quickButtonsContainer.querySelector('.quick-buttons');
        
        quickQuestions.forEach(question => {
            const button = document.createElement('button');
            button.className = 'quick-btn';
            button.textContent = question;
            button.addEventListener('click', () => {
                this.chatInput.value = question;
                this.sendMessage();
            });
            quickButtons.appendChild(button);
        });

        // Insert quick questions before chat input
        const chatInputContainer = this.chatInput.parentElement;
        chatInputContainer.parentElement.insertBefore(quickButtonsContainer, chatInputContainer);
    }

    sendMessage() {
        const message = this.chatInput.value.trim();
        if (!message || this.isTyping) return;

        // Add user message
        this.addMessage(message, 'user');
        this.chatInput.value = '';

        // Show typing indicator
        this.showTypingIndicator();

        // Generate bot response after delay
        setTimeout(() => {
            this.removeTypingIndicator();
            const response = this.generateBotResponse(message);
            this.addMessage(response, 'bot');
        }, 1500);
    }

    addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const timestamp = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        
        if (sender === 'bot') {
            messageDiv.innerHTML = `
                <div class="message-header">
                    <strong>KCET Assistant</strong>
                    <span>${timestamp}</span>
                </div>
                <div class="message-content">${this.formatMessage(text)}</div>
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="message-header">
                    <strong>You</strong>
                    <span>${timestamp}</span>
                </div>
                <div class="message-content">${text}</div>
            `;
        }
        
        this.messagesContainer.appendChild(messageDiv);
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }

    showTypingIndicator() {
        this.isTyping = true;
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing-indicator';
        typingDiv.id = 'typingIndicator';
        typingDiv.innerHTML = `
            <div class="message-header">
                <strong>KCET Assistant</strong>
                <span>typing...</span>
            </div>
            <div class="typing-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;
        this.messagesContainer.appendChild(typingDiv);
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }

    removeTypingIndicator() {
        this.isTyping = false;
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    formatMessage(text) {
        // Convert line breaks to HTML and add basic formatting
        return text
            .replace(/\n/g, '<br>')
            .replace(/\*(.*?)\*/g, '<strong>$1</strong>')
            .replace(/_(.*?)_/g, '<em>$1</em>');
    }

    showWelcomeMessage() {
        const welcomeMessage = `Hello! 👋 I'm your KCET college assistant. I can help you:

• Find colleges based on your KCET rank
• Compare different engineering colleges  
• Get information about fees, placements, and cutoffs
• Recommend colleges for specific branches

Please share your KCET rank and preferred branch to get started!`;
        
        this.addMessage(welcomeMessage, 'bot');
    }

    generateBotResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Extract rank and branch from message
        const rankMatch = message.match(/\d+/g);
        const rank = rankMatch ? parseInt(rankMatch[0]) : 0;
        
        let branch = '';
        const branchKeywords = {
            'Computer Science': ['computer', 'cs', 'cse', 'computer science'],
            'Electronics': ['electronics', 'ec', 'ece', 'electronics communication'],
            'Mechanical': ['mechanical', 'mech'],
            'Civil': ['civil'],
            'AI & ML': ['ai', 'ml', 'artificial', 'machine learning', 'ai ml'],
            'Information Science': ['information', 'is', 'ise', 'information science']
        };
        
        for (const [branchName, keywords] of Object.entries(branchKeywords)) {
            if (keywords.some(keyword => lowerMessage.includes(keyword))) {
                branch = branchName;
                break;
            }
        }
        
        if (rank > 0) {
            return this.generateRankBasedResponse(rank, branch, lowerMessage);
        }
        
        // Handle specific queries
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
            return "Hello! 👋 I'm your KCET college assistant. How can I help you today?";
        } 
        else if (lowerMessage.includes('thank')) {
            return "You're welcome! 😊 I'm glad I could help. If you have any more questions about KCET colleges, feel free to ask!";
        } 
        else if (lowerMessage.includes('placement') || lowerMessage.includes('package') || lowerMessage.includes('salary')) {
            return this.generatePlacementResponse();
        } 
        else if (lowerMessage.includes('fee') || lowerMessage.includes('affordable') || lowerMessage.includes('cost')) {
            return this.generateFeesResponse();
        }
        else if (lowerMessage.includes('cutoff') || lowerMessage.includes('rank')) {
            return "I can help you with cutoff ranks! 🎯\n\nPlease tell me your KCET rank and I'll show you which colleges you can get into. You can also specify a branch if you have a preference.\n\nFor example: \"My rank is 2500 and I want Computer Science\"";
        }
        else if (lowerMessage.includes('branch') || lowerMessage.includes('course')) {
            return "Here are the popular engineering branches available:\n\n• Computer Science & Engineering (CSE)\n• Artificial Intelligence & Machine Learning (AI&ML)\n• Electronics & Communication (ECE)\n• Mechanical Engineering\n• Civil Engineering\n• Information Science (ISE)\n• Electrical Engineering\n• Biotechnology\n\nWhich branch interests you? Please share your KCET rank too!";
        }
        else if (lowerMessage.includes('best') || lowerMessage.includes('top')) {
            return this.generateTopCollegesResponse();
        }
        else {
            return "I'm here to help you find the perfect engineering college! 🎓\n\nTo give you better recommendations, please share:\n\n• Your KCET rank\n• Your preferred branch (Computer Science, Electronics, etc.)\n• Any specific preferences (fees, placement, location)\n\nYou can also ask me about:\n• Cutoff ranks for specific colleges\n• Placement statistics\n• Fee structure\n• College comparisons";
        }
    }

    generateRankBasedResponse(rank, branch, lowerMessage) {
        // Filter colleges based on rank with some buffer
        const suitableColleges = window.colleges.filter(college => 
            rank <= college.cutoff.general * 1.5 // Adding 50% buffer for safety
        ).sort((a, b) => a.cutoff.general - b.cutoff.general).slice(0, 6);
        
        if (suitableColleges.length === 0) {
            return `With a rank of ${rank}, it might be challenging to get into these top Bangalore colleges. 😔\n\nConsider these options:\n\n🔹 *Improve your rank* in the next attempt\n🔹 *Management quota* in private colleges\n🔹 *Colleges outside Bangalore* with lower cutoffs\n🔹 *Other entrance exams* like COMEDK\n\nWould you like information about alternative options or colleges in other cities?`;
        }
        
        let response = `🎯 Based on your rank *${rank}*, here are suitable colleges:\n\n`;
        
        suitableColleges.forEach((college, index) => {
            const safetyLevel = rank <= college.cutoff.general ? "🟢 Safe" : 
                              rank <= college.cutoff.general * 1.2 ? "🟡 Moderate" : "🔴 Ambitious";
            
            response += `*${index + 1}. ${college.name}*\n`;
            response += `   📊 Cutoff: ${college.cutoff.general} | ${safetyLevel}\n`;
            response += `   💰 Fees: ₹${college.fees.toLocaleString()}/year\n`;
            response += `   ⭐ Rating: ${college.rating}/5\n`;
            response += `   📈 Placement: ${college.placement}%\n`;
            response += `   🎓 Branches: ${college.branches.slice(0, 3).join(', ')}${college.branches.length > 3 ? '...' : ''}\n\n`;
        });
        
        if (branch) {
            const branchColleges = suitableColleges.filter(college => 
                college.branches.some(b => b.toLowerCase().includes(branch.toLowerCase()))
            );
            
            if (branchColleges.length > 0) {
                response += `\n💡 For *${branch}*, I particularly recommend:\n\n`;
                branchColleges.slice(0, 3).forEach(college => {
                    const isGoodForBranch = college.rating >= 4.0 ? "🌟 Excellent" : "✅ Good";
                    response += `• *${college.name}* - ${isGoodForBranch} for ${branch}\n`;
                });
            } else {
                response += `\n⚠️ Note: ${branch} might not be available in these colleges with your rank. Consider:\n\n`;
                const alternativeColleges = window.colleges.filter(c => 
                    c.branches.some(b => b.toLowerCase().includes(branch.toLowerCase())) && 
                    rank <= c.cutoff.general * 2
                ).slice(0, 2);
                
                if (alternativeColleges.length > 0) {
                    alternativeColleges.forEach(college => {
                        response += `• *${college.name}* (Cutoff: ${college.cutoff.general})\n`;
                    });
                    response += "\nThese might be more ambitious choices for your rank.";
                }
            }
        }
        
        response += "\n💡 *Next Steps:*\n";
        response += "• Shortlist colleges that interest you\n";
        response += "• Compare 2-3 colleges side by side\n";
        response += "• Visit college websites for detailed info\n";
        response += "• Check hostel facilities and campus life\n\n";
        response += "Would you like me to help you compare any of these colleges or provide more details about a specific college?";
        
        return response;
    }

    generatePlacementResponse() {
        const topPlacementColleges = [...window.colleges]
            .sort((a, b) => b.placement - a.placement)
            .slice(0, 5);
        
        let response = "🏆 *Top Colleges by Placement Percentage:*\n\n";
        
        topPlacementColleges.forEach((college, index) => {
            response += `*${index + 1}. ${college.name}*\n`;
            response += `   📊 Placement: ${college.placement}%\n`;
            response += `   ⭐ Rating: ${college.rating}/5\n`;
            response += `   🎯 Cutoff: ${college.cutoff.general}\n\n`;
        });
        
        response += "💡 *Top Recruiters:* Amazon, Microsoft, Google, Infosys, TCS, Wipro, Intel, Qualcomm\n\n";
        response += "Want to know which of these colleges match your KCET rank? Share your rank with me!";
        
        return response;
    }

    generateFeesResponse() {
        const affordableColleges = [...window.colleges]
            .sort((a, b) => a.fees - b.fees)
            .slice(0, 5);
        
        let response = "💰 *Most Affordable Engineering Colleges:*\n\n";
        
        affordableColleges.forEach((college, index) => {
            response += `*${index + 1}. ${college.name}*\n`;
            response += `   💰 Fees: ₹${college.fees.toLocaleString()}/year\n`;
            response += `   📊 Placement: ${college.placement}%\n`;
            response += `   ⭐ Rating: ${college.rating}/5\n`;
            response += `   🎯 Cutoff: ${college.cutoff.general}\n\n`;
        });
        
        response += "💡 *Additional Options:*\n";
        response += "• Government colleges have lower fees but higher cutoffs\n";
        response += "• Look for scholarships and education loans\n";
        response += "• Consider fee reimbursement schemes\n\n";
        response += "Share your KCET rank to see which affordable colleges you can get!";
        
        return response;
    }

    generateTopCollegesResponse() {
        const topColleges = [...window.colleges]
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 5);
        
        let response = "🏅 *Top Rated Engineering Colleges in Bangalore:*\n\n";
        
        topColleges.forEach((college, index) => {
            response += `*${index + 1}. ${college.name}*\n`;
            response += `   ⭐ Rating: ${college.rating}/5\n`;
            response += `   🎯 Cutoff: ${college.cutoff.general}\n`;
            response += `   💰 Fees: ₹${college.fees.toLocaleString()}/year\n`;
            response += `   📊 Placement: ${college.placement}%\n`;
            response += `   📍 Established: ${college.established}\n\n`;
        });
        
        response += "💡 These colleges are highly rated for:\n";
        response += "• Academic excellence\n• Infrastructure\n• Faculty quality\n• Placement records\n• Campus life\n\n";
        response += "Want to know if you can get into any of these? Share your KCET rank!";
        
        return response;
    }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Make sure colleges data is available globally
    if (typeof window.colleges === 'undefined') {
        console.error('Colleges data not found. Please make sure colleges array is available globally.');
        return;
    }
    
    // Initialize chatbot
    new KCETChatbot();
});