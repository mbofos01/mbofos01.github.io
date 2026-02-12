---
# CV / Resume
icon: fas fa-info-circle
order: 4
---

<style>
.cv-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 30px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.cv-header {
  text-align: center;
  margin-bottom: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 50px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.cv-header h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.cv-header p {
  font-size: 1.2em;
  opacity: 0.9;
}

.cv-contact {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}

.cv-contact a {
  color: white;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 5px;
  background: rgba(255,255,255,0.2);
  transition: background 0.3s ease;
}

.cv-contact a:hover {
  background: rgba(255,255,255,0.3);
}

.cv-section {
  margin-bottom: 50px;
  background: var(--card-bg);
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  border-left: 5px solid #007bff;
}

.cv-section h2 {
  color: var(--accent-color);
  font-size: 1.8em;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.cv-section h2::before {
  content: '';
  width: 10px;
  height: 10px;
  background: #007bff;
  border-radius: 50%;
  margin-right: 15px;
}

.cv-item {
  margin-bottom: 30px;
  padding-left: 25px;
  position: relative;
}

.cv-item::before {
  content: '▶';
  position: absolute;
  left: 0;
  color: #28a745;
  font-weight: bold;
}

.cv-item h3 {
  color: var(--text-color);
  margin-bottom: 5px;
  font-size: 1.2em;
}

.cv-item .subtitle {
  color: var(--accent-color);
  font-weight: bold;
  margin-bottom: 5px;
}

.cv-item .period {
  color: #6c757d;
  font-size: 0.9em;
  margin-bottom: 10px;
}

.cv-item .description {
  color: var(--text-color);
  line-height: 1.6;
}

.skill-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 25px;
}

.skill-category {
  background: var(--sidebar-bg);
  padding: 20px;
  border-radius: 8px;
}

.skill-category h4 {
  color: var(--accent-color);
  margin-bottom: 10px;
  font-size: 1.1em;
}

.skill-category p {
  color: var(--text-color);
  line-height: 1.5;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
  margin-top: 25px;
}

.project-card {
  background: var(--sidebar-bg);
  padding: 25px;
  border-radius: 10px;
  border-left: 4px solid #ffc107;
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.project-card h3 {
  color: var(--text-color);
  margin-bottom: 10px;
}

.project-card .project-type {
  color: #6c757d;
  font-size: 0.9em;
  margin-bottom: 10px;
}

.project-card p {
  color: var(--text-color);
  line-height: 1.5;
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 25px;
}

.cert-item {
  background: var(--sidebar-bg);
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #dc3545;
}

.cert-item h4 {
  color: var(--text-color);
  margin-bottom: 5px;
}

.cert-item .issuer {
  color: var(--accent-color);
  font-weight: bold;
  margin-bottom: 5px;
}

.cert-item a {
  color: #007bff;
  text-decoration: none;
}

.cert-item a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .cv-header {
    padding: 20px;
  }
  .cv-header h1 {
    font-size: 2em;
  }
  .cv-contact {
    flex-direction: column;
    align-items: center;
  }
  .cv-section {
    padding: 20px;
  }
  .project-grid {
    grid-template-columns: 1fr;
  }
  .skill-grid {
    grid-template-columns: 1fr;
  }
  .cert-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="cv-container">

  <div class="cv-header">
    <h1>{{ site.data.cv.header.name }}</h1>
    <p>{{ site.data.cv.header.title }}</p>
    <p>{{ site.data.cv.header.location }}</p>
  </div>

  <div class="cv-section">
    <h2>🎓 Education</h2>
    {% for edu in site.data.cv.education %}
    <div class="cv-item">
      <h3>{{ edu.degree }}</h3>
      <div class="subtitle">{{ edu.institution }}</div>
      <div class="period">{{ edu.period }}</div>
      <div class="description">
        <strong>GPA: {{ edu.gpa }}</strong><br>
        <strong>Coursework:</strong> {{ edu.coursework }}
      </div>
    </div>
    {% endfor %}
  </div>

  <div class="cv-section">
    <h2>💼 Professional Experience</h2>
    {% for exp in site.data.cv.experience %}
    <div class="cv-item">
      <h3>{{ exp.position }}</h3>
      <div class="subtitle">{{ exp.company }}</div>
      <div class="period">{{ exp.period }}</div>
      <div class="description">
        {% for desc in exp.description %}
        • {{ desc }}<br>
        {% endfor %}
      </div>
    </div>
    {% endfor %}
  </div>

  <div class="cv-section">
    <h2>🛠️ Skills & Tools</h2>
    <div class="skill-grid">
      {% for skill in site.data.cv.skills %}
      <div class="skill-category">
        <h4> <strong>{{ skill.category }}</strong> </h4>
        <p>{{ skill.items }}</p>
      </div>
      {% endfor %}
    </div>
  </div>

  <div class="cv-section">
    <h2>🌐 Featured Projects</h2>
    <div class="project-grid">
      {% for project in site.data.cv.projects %}
      <div class="project-card">
        <h3>{% if project.url != "" %}<a href="{{ project.url }}" target="_blank">{{ project.title }}</a>{% else %}{{ project.title }}{% endif %}</h3>
        <div class="project-type">{{ project.type }}</div>
        <ul>
          {% for desc in project.description %}
          <li>{{ desc }}</li>
          {% endfor %}
        </ul>
      </div>
      {% endfor %}
    </div>
    <p style="text-align: center; margin-top: 20px;"><a href="https://github.com/mbofos01" target="_blank">View more projects on GitHub</a></p>
  </div>

  <div class="cv-section">
    <h2>🏆 Certifications</h2>
        <div class="cert-grid">
      {% for cert in site.data.cv.certifications %}
      <div class="cert-item">
        <h4>{{ cert.title }}</h4>
        <div class="issuer">{{ cert.issuer }}</div>
        <a href="{{ cert.url }}" target="_blank">View Certificate</a>
      </div>
      {% endfor %}
        </div>
    </div>

  <div class="cv-section">
    <h2>📚 Favorite Reads</h2>
    <div class="cert-grid">
      {% for book in site.data.cv.favorite_reads %}
      <div class="cert-item">
        <h4>{% if book.url != "" %}<a href="{{ book.url }}" target="_blank">{{ book.title }}</a>{% else %}{{ book.title }}{% endif %}</h4>
        <div class="issuer">{{ book.author }}</div>
      </div>
      {% endfor %}
    </div>
  </div>

</div>