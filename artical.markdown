---
layout: page
title: 我的博客
permalink: /artical/
show_excerpts: true
---

<ul class="artical">
  {%- for post in site.posts -%}
  <li class='artical-card col-lg-3'>
    {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
    <span class="post-meta">{{ post.date | date: date_format }}</span>
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
  {%- endfor -%}
</ul>