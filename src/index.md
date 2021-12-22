---
title: Studio Alex
layout: base.njk
---

<div class="page__project-list">
{% for project in projects %}
  <a href="{{ project.url | url }}" targe="_blank" class="page__project">
    <h3 class="page__project-link">{{ project.name }}</h3>
    <p class="page__project-text">{{ project.description }}</p>
  </a>
{%- endfor %}
</div>
