
/**
 * Codeblock content type
 */
module.exports = {
  "name": "codeblock",
  "label": "Codeblock",
  "labelField": "title",
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
      "placeholder": "Code",
      "editor": "code"
    }
  },
  "assets": {
    "js": [
      "/lib/codemirror/lib/codemirror.js",
      "/lib/codemirror/addon/edit/matchbrackets.js",
      "/lib/codemirror/addon/edit/matchtags.js",
      "/lib/codemirror/addon/edit/closebrackets.js",
      "/lib/codemirror/addon/edit/closetag.js"
     ],
    "css": ["/lib/codemirror/lib/codemirror.css"]
  }
}
