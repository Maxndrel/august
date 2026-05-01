function injectContent() {
    const elements = document.querySelectorAll('[data-content]');
    elements.forEach(el => {
        const keyPath = el.getAttribute('data-content');
        const keys = keyPath.split('.');
        let value = portfolioData;
        for (const key of keys) {
            value = value?.[key];
        }
        if (value) {
            el.textContent = value;
        }
    });
}

function renderContactItems() {
    const container = document.getElementById('aboutContactItems');
    if (!container) return;

    const contact = portfolioData.about.contact;
    const items = [
        { icon: 'email', text: contact.email, type: 'email' },
        { icon: 'phone', text: contact.phone, type: 'phone' },
        { icon: 'linkedin', text: contact.linkedin, type: 'linkedin' },
        { icon: 'clock', text: contact.availability, type: 'availability' }
    ];

    container.innerHTML = items.map((item, index) => `
        <div class="contact-item ${item.type === 'availability' ? 'available' : ''}">
            <div class="contact-icon">
                ${getIcon(item.icon)}
            </div>
            <span>${item.text}</span>
        </div>
    `).join('');
}

function getIcon(type) {
    const icons = {
        email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
        phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
        linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
        clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
    };
    return icons[type] || '';
}

function renderEducation() {
    const container = document.getElementById('educationList');
    if (!container) return;

    container.innerHTML = portfolioData.education.map(edu => `
        <div class="timeline-item">
            <h4>${edu.degree}</h4>
            <div class="meta">${edu.institution} | ${edu.year}</div>
        </div>
    `).join('');
}

function renderExperience() {
    const container = document.getElementById('experienceList');
    if (!container) return;

    container.innerHTML = portfolioData.experience.map(exp => `
        <div class="timeline-item">
            <h4>${exp.role}</h4>
            <div class="meta">${exp.company} | ${exp.date}</div>
        </div>
    `).join('');
}

function renderSkills() {
    const container = document.getElementById('skillsGrid');
    if (!container) return;

    const icons = {
        rect: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="9" y1="4" x2="9" y2="20"/></svg>',
        card: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="4" y1="8" x2="20" y2="8"/><rect x="8" y="12" width="8" height="6"/></svg>',
        location: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
        shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>'
    };

    container.innerHTML = portfolioData.skills.map((skill, index) => `
        <div class="skill-card reveal d${index + 1}">
            <div class="skill-icon">
                ${icons[skill.icon] || ''}
            </div>
            <h3>${skill.name}</h3>
        </div>
    `).join('');
}

function renderTools() {
    const container = document.getElementById('toolsWrap');
    if (!container) return;

    container.innerHTML = portfolioData.tools.map(tool => `
        <span class="tool-pill">${tool}</span>
    `).join('');
}

function renderProjects() {
    const container = document.getElementById('projectsGrid');
    if (!container) return;

    container.innerHTML = portfolioData.projects.map((project, index) => `
        <div class="project-card reveal d${index + 2}">
            <div class="project-overlay">
                <span>View Project →</span>
            </div>
            <h3>${project.title}</h3>
            <div class="project-role">${project.role}</div>
            <div class="project-company">${project.company}</div>
            <p class="project-desc">${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function renderCertifications() {
    const container = document.getElementById('certificationsGrid');
    if (!container) return;

    container.innerHTML = portfolioData.certifications.map((cert, index) => `
        <div class="cert-card reveal d${index + 1}">
            <h4>${cert.name}</h4>
            <div class="issuer">${cert.issuer}${cert.year ? ' | ' + cert.year : ''}</div>
        </div>
    `).join('');
}

function renderContactLinks() {
    const container = document.getElementById('contactLinks');
    if (!container) return;

    const contact = portfolioData.contact;
    const links = [
        { text: 'Email', href: `mailto:${contact.email}` },
        { text: 'LinkedIn', href: contact.linkedin, target: '_blank' },
        { text: 'Phone', href: `tel:${contact.phone}` }
    ];

    container.innerHTML = links.map(link => `
        <a href="${link.href}" class="contact-link" ${link.target ? 'target="_blank"' : ''}>${link.text}</a>
    `).join('');

    const cta = document.getElementById('contactCta');
    if (cta) {
        cta.href = `mailto:${contact.email}`;
        cta.textContent = contact.cta;
    }

    const footer = document.querySelector('.footer-bottom');
    if (footer) {
        footer.textContent = `AUGUSTINE OJUMAH · CIVIL ENGINEER · ${contact.location.toUpperCase()} · © 2025`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    injectContent();
    renderContactItems();
    renderEducation();
    renderExperience();
    renderSkills();
    renderTools();
    renderProjects();
    renderCertifications();
    renderContactLinks();

    initCursor();
    initNav();
    initScrollBar();
    initReveal();
    initCounter();
    initAnimations();
});