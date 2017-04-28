
/**
 * Codeblock content type
 */
module.exports = {
  "name": "codeblock",
  "label": "Codeblock",
  "icon": "code",
  "description": "For code examples.",
  "fields": {
    "title": {
      "name": "title",
      "label": "Title",
      "type": "text",
      "placeholder": "Title"
    },
    "slug": {
      "name": "slug",
      "label": "Slug",
      "type": "slug",
      "placeholder": "Slug"
    },
    "language": {
      "name": "language",
      "label": "Language",
      "type": "select",
      "placeholder": "Language",
      "options": [
        {
          "label": "Javascript",
          "value": "javascript"
        },
        {
          "label": "Bash",
          "value": "bash"
        },
        {
          "label": "HTML",
          "value": "html"
        },
        {
          "label": "Sass",
          "value": "sass"
        },
        {
          "label": "CSS",
          "value": "css"
        }
      ]
    },
    "code": {
      "name": "code",
      "label": "Code",
      "type": "textarea",
      "placeholder": "Code"
    }
  }
}
