
/**
 * Codeblock content type
 */
module.exports = {
  "name": "codeblock",
  "label": "Codeblock",
  "plural": "Codeblocks",
  "icon": "code",
  "description": "For code examples.",
  "timestamps": false,
  "publishable": false,
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
      "placeholder": "Slug",
      "source": ".gin-text"
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
          "value": "htmlmixed"
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
      "placeholder": "Code",
      "editor": "code"
    }
  },
  "labelField": "title"
}
