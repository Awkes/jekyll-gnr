---
title: News
image: /assets/images/gnr-stage-01.jpg
---

# News

---

{% for post in site.posts %}

<div class="news-container">

    <div class="flex-top"> 
      <h2>{{ post.title | upcase }}</h2>
      <h5>{{post.date | date_to_string: "ordinal", "US" }}</h5>
    </div>

    <img src="{{post.image}}">

    <div class="flex-bottom">
      <p>{{ post.excerpt }}</p>
      <a href="{{ post.url }}" class="news-link">READ MORE</a>
    </div>

</div>
---
  {% endfor %}
