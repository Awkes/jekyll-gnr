---
layout: default
title: Band
image: /assets/images/gnr-stage-01.jpg
---

## Band
---

{% for member in site.data.band %}
<div class="band-member">
  <div class="band-member-info band-ani">
    <h3>{{member.name}}</h3>
    <p>
      {{member.instruments}}
    </p>
  </div>
  <img class="band-member-img band-ani" src="{{member.image}}" alt="{{member.name}}">
</div>
{% endfor %}
