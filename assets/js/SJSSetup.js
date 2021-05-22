---
layout: null
is_wiki_page: false
---
/*
 * Setup for Simple Jekyll Search ()
 * from git-wiki
 * with minor edits
 */

var jsondata=[
  {% for page in site.html_pages %}
  {% if page.url contains "wiki" %}
   {
     {% assign title = page.title | default: page.name %}
     {% if title != nil %}
        "title"    : "{{ title | escape }}",
        "category" : "{{ page.category }}",
        "tags"     : "{{ page.tags | join: ', ' }}",
        "url"      : "{{ site.baseurl }}{{ page.url }}",
        "date"     : "{{ page.date }}",
        "content"  : "{{ page.content | strip_html | strip_newlines | remove: '"' }}"
     {% endif %}
   } {% unless forloop.last %},{% endunless %}
  {% endif %}
  {% endfor %}
];

var sjs = SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: jsondata,
    searchResultTemplate: '<li><a href="{url}" title="{desc}">{title}</a></li>',
    noResultsText: 'No results found',
    limit: 20,
    fuzzy: false,
    exclude: []
})
