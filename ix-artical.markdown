---
layout: page
title: 我的博客
permalink: /artical/
show_excerpts: true
---
  {% assign currentMonth = '' %}
  {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
  {%- assign date_year_format =  "%Y" -%}
  
<div class="artical">
{%- for post in site.posts -%}
    {% assign postYear = post.date | date: date_year_format %}
    {%- if postYear != currentYear  -%}
      {%- if currentYear  -%}
          </ul>
      {%- endif -%}
      {%- assign currentYear = postYear -%}
      <h1>{{ currentYear }}</h1>
      <ul class='artical-list'>
        <li class='artical-card'>
            <span class="post-meta">{{ post.date | date: date_format }}{{ post.special_column }}</span>
            <div class='artical-card-title'>
              <a class="post-link" href="{{ post.url | relative_url }}">
                {{ post.title | escape }}
              </a>
            </div>
            <div class='two-line-ellipsis artical-card-intro'>
              {%- if page.show_excerpts -%}
                {{ post.excerpt }}
              {%- endif -%}
            </div>
            <div class='artical-card-catagory'>
              分类
            </div>
            </li>
    {%- else -%}
      <li class='artical-card'>
        <span class="post-meta">{{ post.date | date: date_format }} {{ post.special_column }}</span>
        <div class='artical-card-title'>
          <a class="post-link" href="{{ post.url | relative_url }}">
            {{ post.title | escape }}
          </a>
        </div>
        <div class='three-line-ellipsis artical-card-intro'>
          {%- if page.show_excerpts -%}
            {{ post.excerpt }}
          {%- endif -%}
        </div>
        <div class='artical-card-catagory'>
          分类
        </div>
      </li>
    {%- endif -%}
  {%- endfor -%}
  {%- if site.posts  -%}
    </ul>
  {%- endif -%}
</div>